import os
from django.db import models
from django.conf import settings
from django.utils.html import escape
from django.utils.safestring import mark_safe
from django.utils.translation import gettext_lazy
import re
import json
import pandas as pd
from django.template.defaultfilters import truncatechars
from brain.models import AtlasModel, Animal
from django_mysql.models import EnumField

LAUREN_ID = 16
MANUAL = 1
CORRECTED = 2
POINT_ID = 52
LINE_ID = 53
POLYGON_ID = 54
NULL = 'NULL'

class UrlModel(models.Model):
    """Model corresponding to the neuroglancer json states stored in the neuroglancer_url table.
    This name was used as the original verion of Neuroglancer stored all the data in the URL."""
    id = models.BigAutoField(primary_key=True)
    url = models.JSONField(verbose_name="Neuroglancer State")
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, models.CASCADE, null=False,
                              blank=False, db_column="person_id",
                               verbose_name="User")
    public = models.BooleanField(default = True, db_column='active')
    vetted = models.BooleanField(default = False)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True, editable=False, null=False, blank=False)
    user_date = models.CharField(max_length=25)
    comments = models.CharField(max_length=255)

    @property
    def short_description(self):
        return truncatechars(self.url, 50)

    @property
    def escape_url(self):
        return escape(self.url)

    @property
    def animal(self):
        """Find the animal within the url between data/ and /neuroglancer_data:
        data/MD589/neuroglancer_data/C1
        
        :return: the first match if found, otherwise NA
        """
        animal = "NA"
        match = re.search('data/(.+?)/neuroglancer_data', str(self.url))
        neuroglancer_json = self.url
        image_layers = [layer for layer in neuroglancer_json['layers'] if layer['type'] == 'image']
        if len(image_layers) >0:
            first_image_layer = json.dumps(image_layers[0])
            match = re.search('data/(.+?)/neuroglancer_data', first_image_layer)
            if match is not None and match.group(1) is not None:
                animal = match.group(1)
        return animal

    @property
    def point_frame(self):
        df = None
        if self.url is not None:
            point_data = self.find_values('annotations', self.url)
            if len(point_data) > 0:
                d = [row['point'] for row in point_data[0]]
                df = pd.DataFrame(d, columns=['X', 'Y', 'Section'])
                df = df.round(decimals=0)
        return df

    @property
    def points(self):
        result = None
        dfs = []
        if self.url is not None:
            json_txt = self.url
            layers = json_txt['layers']
            for layer in layers:
                if 'annotations' in layer:
                    name = layer['name']
                    annotation = layer['annotations']
                    d = [row['point'] for row in annotation if 'point' in row and 'pointA' not in row]
                    df = pd.DataFrame(d, columns=['X', 'Y', 'Section'])
                    df['Section'] = df['Section'].astype(int)
                    df['Layer'] = name
                    structures = [row['description'] for row in annotation if 'description' in row]
                    if len(structures) != len(df):
                        structures = ['' for row in annotation if 'point' in row and 'pointA' not in row]
                    df['Description'] = structures
                    df = df[['Layer', 'Description', 'X', 'Y', 'Section']]
                    dfs.append(df)
            if len(dfs) == 0:
                result = None
            elif len(dfs) == 1:
                result = dfs[0]
            else:
                result = pd.concat(dfs)
        return result

    @property
    def layers(self):
        layer_list = []
        if self.url is not None:
            json_txt = self.url
            layers = json_txt['layers']
            for layer in layers:
                if 'annotations' in layer:
                    layer_name = layer['name']
                    layer_list.append(layer_name)
        return layer_list

    class Meta:
        managed = False
        verbose_name = "Neuroglancer state"
        verbose_name_plural = "Neuroglancer states"
        ordering = ('comments', 'created')
        db_table = 'neuroglancer_urls'

    def __str__(self):
        return u'{}'.format(self.comments)

    @property
    def point_count(self):
        result = "display:none;"
        if self.points is not None:
            df = self.points
            df = df[(df.Layer == 'PM nucleus') | (df.Layer == 'premotor')]
            if len(df) > 0:
                result = "display:inline;"
        return result


    def find_values(self, id, json_repr):
        results = []

        def _decode_dict(a_dict):
            try:
                results.append(a_dict[id])
            except KeyError:
                pass
            return a_dict

        json.loads(json_repr, object_hook=_decode_dict)  # Return value ignored.
        return results

class Points(UrlModel):
    """Model corresponding to the annotation points table in the database"""
    class Meta:
        managed = False
        proxy = True
        verbose_name = 'Points'
        verbose_name_plural = 'Points'

class CellType(models.Model):
    """Model corresponding to the cell type table in the database"""
    id = models.BigAutoField(primary_key=True)
    cell_type = models.CharField(max_length=200)
    description = models.TextField(max_length=2001)
    active = models.IntegerField(default=1)
    created = models.DateTimeField(auto_now_add=True)
    class Meta:
        managed = False
        db_table = 'cell_type'
        verbose_name = 'Cell Type'
        verbose_name_plural = 'Cell Types'
    def __str__(self):
        return f'{self.cell_type}'

class BrainRegion(AtlasModel):
    """This class model is for the brain regions or structures in the brain."""
    id = models.BigAutoField(primary_key=True)
    abbreviation = models.CharField(max_length=200)
    description = models.TextField(max_length=2001, blank=False, null=False)
    color = models.PositiveIntegerField()
    hexadecimal = models.CharField(max_length=7)

    class Meta:
        managed = False
        db_table = 'structure'
        verbose_name = 'Brain region'
        verbose_name_plural = 'Brain regions'

    def __str__(self):
        return f'{self.description} {self.abbreviation}'
    
def get_region_from_abbreviation(abbreviation):
    return BrainRegion.objects.filter(abbreviation=abbreviation).first()
    
class AnnotationSession(models.Model):
    """This model describes a user session in Neuroglancer."""
    id = models.BigAutoField(primary_key=True)
    animal = models.ForeignKey(Animal, models.CASCADE, null=True, db_column="FK_prep_id", verbose_name="Animal")
    brain_region = models.ForeignKey(BrainRegion, models.CASCADE, null=True, db_column="FK_structure_id",
                               verbose_name="Brain region")
    annotator = models.ForeignKey(settings.AUTH_USER_MODEL, models.CASCADE, db_column="FK_annotator_id",
                               verbose_name="Annotator", blank=False, null=False)
    created = models.DateTimeField(auto_now_add=True)
    annotation_type = EnumField(choices=['POLYGON_SEQUENCE', 'MARKED_CELL', 'STRUCTURE_COM'], blank=False, null=False)
    parent = models.IntegerField(null=False, blank=False, default=0, db_column='FK_parent')
    active = models.IntegerField(default=0)
    class Meta:
        managed = False
        db_table = 'annotation_session'
        verbose_name = 'Annotation session'
        verbose_name_plural = 'Annotation sessions'

    @property
    def source(self):
        if self.is_polygon_sequence():
            one_row = PolygonSequence.objects.filter(annotation_session__id=self.id).first()
        elif self.is_marked_cell():
            one_row = MarkedCell.objects.filter(annotation_session__id=self.id).first()
        elif self.is_structure_com():
            one_row = StructureCom.objects.filter(annotation_session__id=self.id).first()
        if one_row is None:
            return None
        return one_row.source
    
    @property
    def cell_type(self):
        if self.is_polygon_sequence():
            return None
        elif self.is_marked_cell():
            one_row = MarkedCell.objects.filter(annotation_session__id=self.id).first()
            if one_row is None:
                return None
            else:
                if hasattr(one_row,'cell_type'):
                    return one_row.cell_type
                else:
                    class NullCellType:...
                    null_cell_type = NullCellType()
                    null_cell_type.cell_type = NULL
                    return null_cell_type
        elif self.is_structure_com():
            return None

    def __str__(self):
        return f'{self.animal} {self.brain_region} {self.annotation_type}'
    
    def is_polygon_sequence(self):
        return self.annotation_type == 'POLYGON_SEQUENCE'
    
    def is_marked_cell(self):
        return self.annotation_type == 'MARKED_CELL'
    
    def is_structure_com(self):
        return self.annotation_type == 'STRUCTURE_COM'
    
    def get_session_model(self):
        if self.is_polygon_sequence():
            return PolygonSequence
        elif self.is_marked_cell():
            return MarkedCell
        elif self.is_structure_com():
            return StructureCom

class AnnotationAbstract(models.Model):
    """Abstract model for the 3 new annotation data models
    """
    id = models.BigAutoField(primary_key=True)
    x = models.FloatField(verbose_name="X (um)")
    y = models.FloatField(verbose_name="Y (um)")
    z = models.FloatField(verbose_name="Z (um)")
    annotation_session = models.ForeignKey(AnnotationSession, models.CASCADE, null=False, db_column="FK_session_id",
                               verbose_name="Annotation session")
    @property
    def animal(self):
        return '%s'%self.annotation_session.animal.prep_id
    @property
    def brain_region(self):
        return '%s'%self.annotation_session.brain_region.abbreviation
    @property
    def annotator(self):
        return '%s'%self.annotation_session.annotator.username
    @property
    def created(self):
        return '%s'%self.annotation_session.created
    @property
    def session_id(self):
        return '%s'%self.annotation_session.id
    class Meta:
        abstract = True

class MarkedCell(AnnotationAbstract):
    """This model is for the marked cell points entered in Neuroglancer.
    
    :Inheritance:
        AnnotationAbstract
    """

    class SourceChoices(models.TextChoices):
            MACHINE_SURE = 'MACHINE_SURE', gettext_lazy('Machine Sure')
            MACHINE_UNSURE = 'MACHINE_UNSURE', gettext_lazy('Machine Unsure')
            HUMAN_POSITIVE = 'HUMAN_POSITIVE', gettext_lazy('Human Positive')
            HUMAN_NEGATIVE = 'HUMAN_NEGATIVE', gettext_lazy('Human Negative')

    source = models.CharField(
        max_length=25,
        choices=SourceChoices.choices,
        default=None,
    )    
    cell_type = models.ForeignKey(CellType, models.CASCADE, db_column="FK_cell_type_id",
                               verbose_name="Cell Type", default=None)
    class Meta:
        managed = False
        db_table = 'marked_cells'
        verbose_name = 'Marked cell'
        verbose_name_plural = 'Marked cells'
    def __str__(self):
        return u'{}'.format(self.annotation_session)

class MarkedCellWorkflow(MarkedCell):
    """This model is for the marked cell points workflow entered in Neuroglancer.
    
    :Inheritance:
        MarkedCells
    """
    
    class Meta:
        managed = False
        proxy = True
        verbose_name = 'Marked cell workflow'
        verbose_name_plural = 'Marked cells workflow'
    def __str__(self):
        return u'{}'.format(self.annotation_session)

class PolygonSequence(AnnotationAbstract):
    """This model is for the polygons drawn by an anatomist in Neuroglancer.
    
    :Inheritance:
        AnnotationAbstract"""

    polygon_index = models.CharField(max_length=40, blank=True, null=True)
    point_order = models.IntegerField(blank=False, null=False, default=0)
    class SourceChoices(models.TextChoices):
            NA = 'NA', gettext_lazy('NA')

    source = models.CharField(
        max_length=25,
        choices=SourceChoices.choices,
        default=SourceChoices.NA
    )    
    
    class Meta:
        managed = False
        db_table = 'polygon_sequences'
        verbose_name = 'Polygon sequence'
        verbose_name_plural = 'Polygon sequences'

    def __str__(self):
        return u'{} {}'.format(self.annotation_session, self.source)

class StructureCom(AnnotationAbstract):
    """This model is for the COMs for a structure (brain region).
    They are usually entered by an anatomist in Neuroglancer.
    
    :Inheritance:
        AnnotationAbstract"""
    class SourceChoices(models.TextChoices):
            MANUAL = 'MANUAL', gettext_lazy('MANUAL')
            COMPUTER = 'COMPUTER', gettext_lazy('COMPUTER')

    source = models.CharField(
        max_length=25,
        choices=SourceChoices.choices,
        default=SourceChoices.MANUAL
    )    
    
    class Meta:
        managed = False
        db_table = 'structure_com'
        verbose_name = 'Structure COM'
        verbose_name_plural = 'Structure COMs'

    def __str__(self):
        return u'{} {}'.format(self.annotation_session, self.source)

class AnnotationPointArchive(AnnotationAbstract):
    """This class is for an archive of annotation points"""
    class Meta:
        managed = False
        db_table = 'annotations_point_archive'
        verbose_name = 'Annotation Point Archive'
        verbose_name_plural = 'Annotation Points Archive'
        constraints = [
                models.UniqueConstraint(fields=['annotation_session'], name='unique backup')
            ]        
    def __str__(self):
        return u'{} {}'.format(self.annotation_session, self.source)
    polygon_index = models.CharField(max_length=40, blank=True, null=True,default=0)
    point_order = models.IntegerField(blank=False, null=False, default=0)
    source = models.CharField(max_length=255)
    cell_type = models.ForeignKey(CellType, models.CASCADE, db_column="FK_cell_type_id",
                               verbose_name="Cell Type", default=None)


class AnnotationArchive(AnnotationSession):
    class Meta:
        proxy = True

    @property
    def cell_type(self):
        if self.is_polygon_sequence():
            return None
        elif self.is_marked_cell():
            one_row = AnnotationPointArchive.objects.filter(
                annotation_session__id=self.id).first()
            if one_row is None:
                return None
            else:
                return one_row.cell_type
        elif self.is_structure_com():
            return None

    @property
    def source(self):
        one_row = AnnotationPointArchive.objects.filter(
            annotation_session__id=self.id).first()
        if one_row is None:
            return None
        else:
            return one_row.source


class BrainShape(AtlasModel):
    """This class will hold the numpy data for a brain region."""
    id = models.BigAutoField(primary_key=True)
    animal = models.ForeignKey(Animal, models.CASCADE, null=True, db_column="prep_id", verbose_name="Animal")
    brain_region = models.ForeignKey(BrainRegion, models.CASCADE, null=True, db_column="FK_structure_id",
                               verbose_name="Brain region")
    dimensions = models.CharField(max_length=50)
    xoffset = models.FloatField(null=False)
    yoffset = models.FloatField(null=False)
    zoffset = models.FloatField(null=False)
    numpy_data = models.TextField(verbose_name="Array (pickle)")
    class Meta:
        managed = False
        db_table = 'brain_shape'
        verbose_name = 'Brain shape data'
        verbose_name_plural = 'Brain shape data'

    def __str__(self):
        return u'{} {}'.format(self.animal, self.brain_region)
    
    def midsection(self):
        """This is a helper method to show what the mid part of a brain region will look like.
        
        :return: the HTML pointing to the thumbnail of the mid part of the brain region.
        """
        png = f'{self.brain_region.abbreviation}.png'
        pngfile = f'https://activebrainatlas.ucsd.edu/data/{self.animal}/www/structures/{png}'
        return mark_safe(
        '<div class="profile-pic-wrapper"><img src="{}" /></div>'.format(pngfile) )
    
    midsection.short_description = 'Midsection'

class AlignmentScore(models.Model):
    """A model that holds the alignment score data."""
    class Meta:
        managed = False
        db_table = 'annotations_points'
        verbose_name = 'Alignment Score'
        verbose_name_plural = 'Alignment Scores'

    def __str__(self):
        return u'{}'.format(self.prep_id)

class AtlasToBeth(models.Model):
    """A model that holds the alignment score data. This is another version of the alignment
    score and needs to be renamed."""
    class Meta:
        managed = False
        db_table = 'annotations_points'
        verbose_name = 'Aligned Atlas to Beth'
        verbose_name_plural = 'Aligned Atlas to Beth'

    def __str__(self):
        return u'{}'.format(self.prep_id)

class AnnotationStatus(models.Model):
    class Meta:
        managed = False
        db_table = 'annotations_points'
        verbose_name = 'Annotation Status'
        verbose_name_plural = 'Annotation Status'

    def __str__(self):
        return u'{}'.format(self.prep_id)
