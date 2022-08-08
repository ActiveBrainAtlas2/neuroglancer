import numpy as np
import pandas as pd
import plotly.graph_objects as go
from neuroglancer.atlas import get_annotation_dict
from neuroglancer.atlas import brain_to_atlas_transform, umeyama
from plotly.subplots import make_subplots
from neuroglancer.models import LAUREN_ID, AnnotationPoints
from neuroglancer.com_difference.difference_plot import DifferencePlot

class AlignmentScore(DifferencePlot):

    def __init__(self):
        super().__init__(subplot_titles = ("Rigid Alignment Error on Original COMs", "Rigid Alignment Error After Correction"))
        self.INPUT_TYPE_MANUAL = 1
        self.INPUT_TYPE_CORRECTED = 2
        self.person_id = 2
        self.brains = list(AnnotationPoints.objects.filter(input_type__id=self.INPUT_TYPE_MANUAL)\
            .filter(layer='COM')\
            .exclude(prep_id__in=['Atlas'])\
            .values_list('prep_id', flat=True).distinct().order_by('prep_id'))
        self.atlas_centers = get_annotation_dict('atlas', input_type_id=self.INPUT_TYPE_MANUAL, person_id=LAUREN_ID)
        self.common_structures = self.get_common_structure(self.brains)
    
    def get_common_structure(self, brains):
        common_structures = set()
        for brain in brains:
            common_structures = common_structures | set(get_annotation_dict(brain).keys())
        common_structures = list(sorted(common_structures))
        return common_structures

    def prepare_table_for_plot(self):
        """
        Notes, 30 Jun 2021
        This works and mimics Bili's notebook on the corrected data, 
        which is what we want
        It uses data from the DB that is all in microns. Make sure you use
        brain coms from person=2 and input type=corrected (id=2)
        """
        df = pd.DataFrame()
        for brain in self.brains:
            brain_com = get_annotation_dict(prep_id=brain, person_id=2, input_type_id=self.INPUT_TYPE_MANUAL)

            structures = sorted(brain_com.keys())
            dst_point_set = np.array([self.atlas_centers[s] for s in structures if s in self.common_structures]).T
            src_point_set = np.array([brain_com[s] for s in structures if s in self.common_structures]).T
            r, t = umeyama(src_point_set, dst_point_set)
            offsets = []
            for s in self.common_structures:
                x = np.nan
                y = np.nan
                section = np.nan
                brain_coords = np.array([x, y, section])
                if s in brain_com:
                    brain_coords = np.asarray(brain_com[s])
                    transformed = brain_to_atlas_transform(brain_coords, r, t)
                else:
                    transformed = np.array([x, y, section])
                offsets.append(transformed - self.atlas_centers[s])
            df_brain = self.get_df_row_from_offsets(offsets,brain)
            df = df.append(df_brain, ignore_index=True)
        return df
    
    def get_df_row_from_offsets(self,offsets,brain):
        offsets = np.array(offsets)
        dx, dy, dz = (offsets).T
        df_brain = pd.DataFrame()
        for data_type in ['dx', 'dy', 'dz']:
            data = {}
            data['structure'] = self.common_structures
            data['value'] = eval(data_type)
            data['type'] = data_type
            df_brain = df_brain.append(pd.DataFrame(data), ignore_index=True)
        df_brain['brain'] = brain
        return df_brain