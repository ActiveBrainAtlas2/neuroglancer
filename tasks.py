"""
Background tasks must be in a file named: tasks.py
Don't move it to another file!
They also cannot accept objects as arguments. 
"""
import numpy as np
from django.http import Http404
from background_task import background
from neuroglancer.bulk_insert import BulkCreateManager
from neuroglancer.models import AnnotationPointArchive, AnnotationSession, CellType, UrlModel, \
    get_region_from_abbreviation, NULL
from neuroglancer.annotation_manager import AnnotationManager


@background(schedule=0)
def restore_annotations(session_id):
    '''
        Inactivate the existing annotations that are manual, prep, active.
        It is OK to inactivate them as they must already be in the:
        annotation_points_archive table for this operation to be
        accessible. 
        Fetch rows from the archive and 
        insert into online table
    :archive_id: int of primary key of archive_set
    :param prep_id: char string of animal name
    :param label: char staring of layer name
    '''
    try:
        annotation_session = AnnotationSession.objects.get(pk=session_id)
    except AnnotationSession.DoesNotExist:
        print('No annotation_session to fetch')
        raise Http404
    data_model = annotation_session.get_session_model()
    data_model.objects.filter(annotation_session=annotation_session).delete()
    field_names = [f.name for f in data_model._meta.get_fields() if not f.name == 'id']
    rows = AnnotationPointArchive.objects.filter(annotation_session=annotation_session)
    bulk_mgr = BulkCreateManager(chunk_size=100)
    for row in rows:
        fields = [getattr(row,namei) for namei in field_names]
        input = dict(zip(field_names,fields))
        bulk_mgr.add(data_model(**input))
    bulk_mgr.done()


@background(schedule=0)
def background_archive_and_insert_annotations(layeri, url_id):
    """The main function that updates the database with annotations in the current_layer attribute
        This function loops each annotation in the curent layer and inserts/archive points in the 
        appropriate table
    """
    urlModel = UrlModel.objects.get(pk=url_id)
    manager = AnnotationManager(urlModel)
    manager.set_current_layer(layeri)

    assert manager.animal is not None
    assert manager.annotator is not None

    marked_cells = []
    for annotationi in manager.current_layer.annotations:
        if annotationi.is_com():
            brain_region = get_region_from_abbreviation(
                annotationi.get_description())
            new_session = manager.get_new_session_and_archive_points(
                brain_region=brain_region, annotation_type='STRUCTURE_COM')
            manager.add_com(annotationi, new_session)
        if annotationi.is_cell():
            marked_cells.append(annotationi)
        if annotationi.is_polygon():
            brain_region = get_region_from_abbreviation('polygon')
            new_session = manager.get_new_session_and_archive_points(
                brain_region=brain_region, annotation_type='POLYGON_SEQUENCE')
            manager.add_polygons(annotationi, new_session)
        if annotationi.is_volume():
            brain_region = get_region_from_abbreviation(
                annotationi.get_description())
            new_session = manager.get_new_session_and_archive_points(
                brain_region=brain_region, annotation_type='POLYGON_SEQUENCE')
            manager.add_volumes(annotationi, new_session)
    if len(marked_cells) > 0:
        marked_cells = np.array(marked_cells)
        description_and_cell_types = np.array([f'{i.description}@{i.category}' for i in marked_cells])
        unique_description_and_cell_types = np.unique(description_and_cell_types)
        brain_region = get_region_from_abbreviation('point')
        for description_cell_type in unique_description_and_cell_types:
            in_category = description_and_cell_types == description_cell_type
            cells = marked_cells[in_category]
            _, cell_type = description_cell_type.split('@')
            
            if cells[0].description == 'positive':
                source = 'HUMAN_POSITIVE'
            elif cells[0].description == 'negative':
                source = 'HUMAN_NEGATIVE'
            else:
                source = NULL

            new_session = manager.get_new_session_and_archive_points(
                brain_region=brain_region, annotation_type='MARKED_CELL', cell_type=cell_type, source=source)
            for annotationi in cells:
                if cell_type == NULL:
                    brain_region = get_region_from_abbreviation('point')
                    manager.add_marked_cells(annotationi, new_session, None, source)
                else:
                    cell_type = CellType.objects.filter(
                        cell_type=cell_type).first()
                    if cell_type is not None:
                        brain_region = get_region_from_abbreviation('point')
                        manager.add_marked_cells(annotationi, new_session, cell_type, source)
    manager.bulk_mgr.done()

