import json
import numpy as np
from rest_framework import status
from django.test import Client, TestCase
from django.contrib.auth.models import User
from brain.models import Animal, ScanRun
from neuroglancer.models import AnnotationSession, MarkedCell, BrainRegion, LAUREN_ID ,CellType
from neuroglancer.annotation_layer import random_string

class TestSetUp(TestCase):
    client = Client()

    def setUp(self):
        self.coms = [ 1,2,4,5,8,9,10,11,12,13,19,20,22,23,28,29,44,45,18,17,27,26]
        self.cell_type = CellType.objects.first()
        self.brain_region = BrainRegion.objects.first()
        self.username = 'beth'
        self.annotator_username = 'beth'
        self.annotator_id = 2
        self.prep_id = 'DK39'
        self.atlas_name = 'Atlas'
        self.annotation_type = 'POLYGON_SEQUENCE'
        self.label = random_string()
        # annotator
        try:
            query_set = User.objects.filter(username=self.annotator_username)
        except User.DoesNotExist:
            self.annotator = None
        if query_set is not None and len(query_set) > 0:
            self.annotator = query_set[0]
        else:
            self.annotator = User.objects.create(username=self.annotator_username,
                                                   email='super@email.org',
                                                   password='pass')
        # User
        try:
            query_set = User.objects.filter(username=self.username)
        except User.DoesNotExist:
            self.owner = None
        if query_set is not None and len(query_set) > 0:
            self.owner = query_set[0]
        else:
            self.owner = User.objects.create(username=self.username,
                                                   email='super@email.org',
                                                   password='pass')
            
        try:
            self.lauren = User.objects.get(pk=LAUREN_ID)
        except User.DoesNotExist:
            self.lauren = User.objects.create(username='Lauren', email='l@here.com', password = 'pass', id = LAUREN_ID)

        self.lauren = User.objects.get(pk=LAUREN_ID)
        self.lauren.save()

        # atlas
        try:
            self.atlas = Animal.objects.get(pk=self.atlas_name)
        except Animal.DoesNotExist:
            self.atlas = Animal.objects.create(prep_id=self.atlas_name)
        
        # animal
        try:
            self.animal = Animal.objects.get(pk=self.prep_id)
        except Animal.DoesNotExist:
            self.animal = Animal.objects.create(prep_id=self.prep_id)
            
        try:
            query_set = ScanRun.objects.filter(prep_id=self.prep_id)
        except ScanRun.DoesNotExist:
            self.scan_run = ScanRun.objects.create(prep_id=self.prep_id, 
                                                   resolution=0.325, zresolution=20,
                                                   number_of_slides=100)
        if query_set is not None and len(query_set) > 0:
            self.scan_run = query_set[0]
        # brain_region    
        try:
            query_set = BrainRegion.objects.filter(abbreviation='point')
        except BrainRegion.DoesNotExist:
            self.brain_region = None
        if query_set is not None and len(query_set) > 0:
            self.brain_region = query_set[0]
        else:
            self.brain_region = BrainRegion.objects.create(abbreviation='point', color=1)

        
        # annotation session brain
        query_set = AnnotationSession.objects \
            .filter(animal=self.animal)\
            .filter(brain_region=self.brain_region)\
            .filter(annotator=self.annotator)\
            .filter(annotation_type=self.annotation_type)

        if query_set is not None and len(query_set) > 0:
            self.annotation_session = query_set[0]
        else:
            self.annotation_session = AnnotationSession.objects.create(\
                animal=self.animal,
                brain_region=self.brain_region,
                annotator=self.lauren,
                annotation_type=self.annotation_type
                )
        
        # annotation session brain
        query_set = AnnotationSession.objects \
            .filter(animal=self.animal)\
            .filter(brain_region=self.brain_region)\
            .filter(annotator=self.annotator)\
            .filter(annotation_type=self.annotation_type)

        if query_set is not None and len(query_set) > 0:
            self.annotation_session = query_set[0]
        else:
            self.annotation_session = AnnotationSession.objects.create(\
                animal=self.animal,
                brain_region=self.brain_region,
                annotator=self.lauren,
                annotation_type=self.annotation_type
                )

        # annotation session polygon sequence
        query_set = AnnotationSession.objects \
            .filter(animal=self.atlas)\
            .filter(brain_region=self.brain_region)\
            .filter(annotator=self.annotator)\
            .filter(annotation_type=self.annotation_type)

        if query_set is not None and len(query_set) > 0:
            self.annotation_session_polygon_sequence = query_set[0]
        else:
            self.annotation_session_polygon_sequence = AnnotationSession.objects.create(\
                animal=self.atlas,
                brain_region=self.brain_region,
                annotator=self.annotator,
                annotation_type=self.annotation_type
                )
        self.reverse=1
        self.COMsource = 'MANUAL'
        self.reference_scales = '10,10,20'

class TestTransformation(TestSetUp):
    """A class for testing the rotations/transformations
    """

    def assert_rotation_is_not_identity(self,response):
        data = str(response.content, encoding='utf8')
        data = json.loads(data)
        translation = data['translation']
        s = np.sum(translation)
        self.assertNotEqual(s, 0.0, msg="Translation is not equal to zero")
    
    def test_rotation_list(self):
        """Test the API that returns the list of available transformations

        URL = /rotations

        """
        response = self.client.get(f"/rotations")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_rotation(self):
        """Test the API that returns the list of available transformations

        URL = /rotation/{self.prep_id}/{self.annotator_id}/{self.COMsource}/

        """
        command = f"/rotation/{self.prep_id}/{self.annotator_id}/{self.COMsource}/"
        response = self.client.get(command)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assert_rotation_is_not_identity(response)

    def test_get_rotation_inverse(self):
        """Test the API that returns the list of available transformations

        URL = /rotation/{self.prep_id}/{self.annotator_id}/{self.COMsource}/{self.reverse}

        """
        response = self.client.get(f"/rotation/{self.prep_id}/{self.annotator_id}/{self.COMsource}/{self.reverse}")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assert_rotation_is_not_identity(response)
    
    def test_get_rotation_rescale(self):
        """Test the API that returns the list of available transformations

        URL = /rotation/{self.prep_id}/{self.annotator_id}/{self.COMsource}/{self.reference_scales}

        """
        response = self.client.get(f"/rotation/{self.prep_id}/{self.annotator_id}/{self.COMsource}/{self.reference_scales}")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assert_rotation_is_not_identity(response)
    
    def test_get_rotation_inverse_rescale(self):
        """Test the API that returns the list of available transformations

        URL = /rotation/{self.prep_id}/{self.annotator_id}/{self.COMsource}/{self.reverse}/{self.reference_scales}

        """
        response = self.client.get(f"/rotation/{self.prep_id}/{self.annotator_id}/{self.COMsource}/{self.reverse}/{self.reference_scales}")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assert_rotation_is_not_identity(response)
   
    def test_rotation_url_with_bad_animal(self):
        """Test the API that retrieves a specific transformation for a nonexistant animal and checks that the identity transform is returned

        URL = /rotation/XXX/2/MANUAL/

        """
        response = self.client.get("/rotation/XXX/2/MANUAL/")
        data = str(response.content, encoding='utf8')
        data = json.loads(data)
        translation = data['translation']
        s = np.sum(translation)
        self.assertEqual(s, 0, msg="Translation is equal to zero")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

class TestAnnotations(TestSetUp):
    """A class for testing the annotations
    """

    def test_get_volume(self):
        """Test the API that returns a volume

        URL = /get_volume/{self.annotation_session_polygon_sequence.id}

        """
        response = self.client.get(f"/get_volume/{self.annotation_session_polygon_sequence.id}")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
    
    def test_get_com(self):
        """Test the API that returns coms

        URL = /get_com/{self.prep_id}/{self.annotator_id}/{self.COMsource}

        """
        response = self.client.get(f"/get_com/{self.prep_id}/{self.annotator_id}/{self.COMsource}")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_marked_cell(self):
        """Test the API that returns marked cells

        URL = /get_marked_cell/{id}

        """
        session = AnnotationSession(animal=self.animal,
            brain_region=self.brain_region,
            annotator=self.annotator,
            annotation_type='MARKED_CELL', parent=0)
        session.save()
        id = session.id
        cell = MarkedCell(annotation_session=session,
                          source='HUMAN_POSITIVE', x=1, y=2, z=3, cell_type=self.cell_type)
        response = self.client.get(f"/get_marked_cell/{id}")
        # breakpoint()
        cell.save()
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        session.delete()
        cell.delete()

    def test_get_volume_list(self):
        """Test the API that returns the list of volumes

        URL = /get_volume_list

        """
        response = self.client.get(f"/get_volume_list")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_com_list(self):
        """Test the API that returns the list of coms

        URL = /get_com_list

        """
        response = self.client.get(f"/get_com_list")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_marked_cell_list(self):
        """Test the API that returns the list of marked cell

        URL = /get_marked_cell_list

        """
        response = self.client.get(f"/get_marked_cell_list")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

class TestNeuroglancer(TestSetUp):
    """URLs taken from neuroglancer/urls.py. 
    We should have one test per url.    
    """

    def test_neuroglancer_url(self):
        """tests the API that returns the list of available neuroglancer states
        
        URL = /neuroglancer

        """
        response = self.client.get("/neuroglancer")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_landmark_list(self):
        """tests the API that returns the list of available neuroglancer states
        
        URL = /landmark_list

        """
        response = self.client.get("/landmark_list")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    '''
    def test_contour_to_segmentation(self):
        """Test the API that returns contour to segmentation
        TODO fix. 
        """
        response = self.client.get(f"/contour_to_segmentation/454/cff612b8206221f6e54098d9bd9061d1fdf5c2b8")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
    '''    

    def test_save_annotations(self):
        """Test saving annotations.
        
        URL = /save_annotations/<int:url_id>/<str:annotation_layer_name>

        """
        response = self.client.get("/save_annotations/494/cell")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_save_annotations_574(self):
        """Test saving annotations ID = 574.
        
        URL = /save_annotations/<int:url_id>/<str:annotation_layer_name>

        """
        response = self.client.get("/save_annotations/574/Sure")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        response = self.client.get("/save_annotations/574/Unure")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_save_annotations_577(self):
        """Test saving annotations ID = 577.
        
        URL = /save_annotations/<int:url_id>/<str:annotation_layer_name>

        """
        response = self.client.get("/save_annotations/577/Sure")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        response = self.client.get("/save_annotations/577/Unure")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_brain_region_count(self):
        n = BrainRegion.objects.count()
        self.assertGreater(n, 0, msg='Error: Brain region table is empty')
