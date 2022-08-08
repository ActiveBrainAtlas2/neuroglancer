from rest_framework import serializers
from rest_framework.exceptions import APIException
import logging
from neuroglancer.models import BrainRegion, StructureCom, UrlModel
from django.contrib.auth.models import User

logging.basicConfig()
logger = logging.getLogger(__name__)


class AnnotationSerializer(serializers.Serializer):
    """This one feeds the data import of annotations.
    """
    id = serializers.CharField()
    point = serializers.ListField()
    type = serializers.CharField()
    description = serializers.CharField()

class PolygonSerializer(serializers.Serializer):
    """This class serializes the polygons that are created in Neuroglancer.
    """
    source = serializers.ListField(required=False)
    pointA = serializers.ListField(required=False)
    pointB = serializers.ListField(required=False)
    childAnnotationIds = serializers.ListField(required=False)
    type = serializers.CharField()
    id = serializers.CharField()
    parentAnnotationId = serializers.CharField(required=False)
    description = serializers.CharField(required=False)
    props = serializers.ListField()

class ComListSerializer(serializers.Serializer):
    """
    This one feeds the dropdown in Neuroglancer.
    """
    prep_id = serializers.CharField()
    annotator = serializers.CharField()
    annotator_id = serializers.CharField()
    source = serializers.CharField()
    count = serializers.CharField()

class MarkedCellListSerializer(serializers.Serializer):
    """
    This one feeds the marked cell dropdown in Neuroglancer.
    """
    session_id = serializers.CharField()
    prep_id = serializers.CharField()
    annotator = serializers.CharField()
    source = serializers.CharField()
    cell_type = serializers.CharField()
    cell_type_id = serializers.CharField()
    structure = serializers.CharField()
    structure_id = serializers.CharField()

class PolygonListSerializer(serializers.Serializer):
    """
    This one feeds the dropdown for importing within Neuroglancer.
    """
    session_id = serializers.CharField()
    prep_id = serializers.CharField()
    annotator = serializers.CharField()
    source = serializers.CharField()
    brain_region = serializers.CharField()

class BrainRegionSerializer(serializers.ModelSerializer):
    """A serializer class for the brain region model. Not currently used."""

    class Meta:
        model = BrainRegion
        fields = '__all__'

class RotationSerializer(serializers.Serializer):
    """A serializer class for the rotations/transformations used in the alignment
    tool in Neuroglancer.
    """
    prep_id = serializers.CharField()
    label = serializers.CharField()
    source = serializers.CharField()

class UrlSerializer(serializers.ModelSerializer):
    """Override method of entering a url into the DB.
    The url *probably* can't be in the UrlModel when it is returned
    to neuroglancer as it crashes neuroglancer."""

    class Meta:
        model = UrlModel
        fields = '__all__'
        ordering = ['-created']

    def create(self, validated_data):
        """
        This method gets called when a user clicks New in Neuroglancer
        """
        obj = UrlModel(
            url=validated_data['url'],
            user_date=validated_data['user_date'],
            comments=validated_data['comments'],
        )
        if 'owner' in validated_data:
            owner = validated_data['owner']
            obj = self.save_neuroglancer_state(obj, owner)
        return obj

    def update(self, obj, validated_data):
        """
        This gets called when a user clicks Save in Neuroglancer
        """
        obj.url = validated_data.get('url', obj.url)
        obj.user_date = validated_data.get('user_date', obj.user_date)
        obj.comments = validated_data.get('comments', obj.comments)
        if 'owner' in validated_data:
            owner = validated_data['owner']
            obj = self.save_neuroglancer_state(obj, owner)
        return obj

    def save_neuroglancer_state(self, obj, owner):
        """This method takes care of tasks that are in both create and update
        
        :param obj: the neuroglancerModel object
        :param owner: the owner object from the validated_data
        
        """
        try:
            # authUser = User.objects.get(pk=owner)
            obj.owner = owner
        except User.DoesNotExist:
            logger.error('Owner was not in validated data')
        try:
            obj.save()
        except APIException:
            logger.error('Could not save Neuroglancer model')
        obj.url = None
        return obj
