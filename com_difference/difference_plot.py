import numpy as np
import pandas as pd
import plotly.graph_objects as go
from plotly.subplots import make_subplots

class DifferencePlot:
    def __init__(self,subplot_titles):
        self.subplot_titles = subplot_titles

    def get(self, plot_type='scatter'):
        if plot_type == 'scatter':
            fig = self.get_fig(self.add_scatter_trace)
        elif plot_type == 'box_plot':
            fig = self.get_fig(self.add_box_trace)
        return fig
        
    def prepare_table_for_plot(self):
        raise NotImplementedError()

    def get_fig(self, trace_adder):
        fig = make_subplots(rows=1, cols=1,subplot_titles=self.subplot_titles)
        df1 = self.prepare_table_for_plot()
        trace_adder(df1, fig, 1)
        fig.update_xaxes(tickangle=45, showticklabels=True)
        fig.update_layout(
            autosize=False,
            width=800,
            height=500,
            paper_bgcolor="LightSteelBlue",)  
        return fig

    def add_scatter_trace(self, df, fig, rowi):
        colors = ["#ee6352", "#08b2e3", "#484d6d"]
        colori = 0
        for row_type in ['dx', 'dy', 'dz']:
            rows_of_type = df[df.type == row_type]
            fig.append_trace(
                go.Scatter(x=rows_of_type['structure'],
                    y=rows_of_type['value'], mode='markers',
                    marker_color=colors[colori],
                    name=row_type,
                    text=rows_of_type['brain']),
                    row=rowi, col=1)
            colori += 1

    def add_box_trace(self, df, fig, rowi):
        colors = ["#ee6352", "#08b2e3", "#484d6d"]
        colori = 0
        for row_type in ['dx', 'dy', 'dz']:
            rows_of_type = df[df.type == row_type]
            fig.append_trace(
                go.Box(x=rows_of_type['structure'],
                    y=rows_of_type['value'],
                    marker_color=colors[colori],
                    name=row_type,
                    text=rows_of_type['brain']),
                    row=rowi, col=1)
            colori += 1
