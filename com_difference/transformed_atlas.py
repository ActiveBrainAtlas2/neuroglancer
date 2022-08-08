import numpy as np
import pandas as pd
import plotly.graph_objects as go
from neuroglancer.atlas import get_annotation_dict
from plotly.subplots import make_subplots
from difference_plot import DifferencePlot
import os
import pickle 

class TransformedAtlasToBeth(DifferencePlot):

    def __init__(self):
        super().__init__(subplot_titles = ("Rigid Alignment Error on Original COMs", "Rigid Alignment Error After Correction"))
        path = os.getcwd()
        path = path + '/neuroglancer/com_difference/AtlasCOMsStack.pkl'
        file = open(path,'rb')
        self.aligned_atlas_coms  = pickle.load(file)
        self.animals = self.aligned_atlas_coms.keys()
        self.new_coms = {}
        self.all_coms = {}
        for animali in self.animals:
            self.new_coms[animali] = get_annotation_dict(prep_id = animali, label = 'COM_addition')
        self.coms = {}
        for animali in self.animals:
            self.coms[animali] = get_annotation_dict(prep_id = animali)
            self.all_coms[animali] = self.coms[animali]
            self.all_coms[animali].update(self.new_coms[animali])

    def prepare_table_for_plot(self):
        data = {}
        data['structure'] = []
        data['value'] = []
        data['type'] = []
        data['brain'] = []
        for brain in self.animals:
            if brain == 'DK63':
                continue
            offsets = []
            new_com = self.new_coms[brain]
            com = self.aligned_atlas_coms[brain]
            common_structures = set(com.keys()).intersection(set(new_com.keys()))
            for structurei in common_structures:
                dx,dy,dz = np.array(new_com[structurei])- np.array(com[structurei])
                if structurei == '5N_L':
                    print(brain,structurei)
                    print(np.array(new_com[structurei]),np.array(com[structurei]))
                    print(dx,dy,dz)
                for data_type in ['dx', 'dy', 'dz']:
                    data['structure'].append(structurei)
                    data['value'].append(eval(data_type))
                    data['type'].append(data_type)
                    data['brain'].append(brain)
        df = pd.DataFrame(data)
        return df
    
