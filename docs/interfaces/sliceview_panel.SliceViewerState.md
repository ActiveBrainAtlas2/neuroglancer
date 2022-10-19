[neuroglancer](../README.md) / [Modules](../modules.md) / [sliceview/panel](../modules/sliceview_panel.md) / SliceViewerState

# Interface: SliceViewerState

[sliceview/panel](../modules/sliceview_panel.md).SliceViewerState

## Hierarchy

- [`RenderedDataViewerState`](perspective_view_panel._internal_.RenderedDataViewerState.md)

  ↳ **`SliceViewerState`**

## Table of contents

### Properties

- [crossSectionBackgroundColor](sliceview_panel.SliceViewerState.md#crosssectionbackgroundcolor)
- [inputEventMap](sliceview_panel.SliceViewerState.md#inputeventmap)
- [layerManager](sliceview_panel.SliceViewerState.md#layermanager)
- [mouseState](sliceview_panel.SliceViewerState.md#mousestate)
- [navigationState](sliceview_panel.SliceViewerState.md#navigationstate)
- [scaleBarOptions](sliceview_panel.SliceViewerState.md#scalebaroptions)
- [selectedLayer](sliceview_panel.SliceViewerState.md#selectedlayer)
- [selectionDetailsState](sliceview_panel.SliceViewerState.md#selectiondetailsstate)
- [showAxisLines](sliceview_panel.SliceViewerState.md#showaxislines)
- [showScaleBar](sliceview_panel.SliceViewerState.md#showscalebar)
- [visibility](sliceview_panel.SliceViewerState.md#visibility)
- [visibleLayerRoles](sliceview_panel.SliceViewerState.md#visiblelayerroles)
- [wireFrame](sliceview_panel.SliceViewerState.md#wireframe)

## Properties

### crossSectionBackgroundColor

• **crossSectionBackgroundColor**: [`TrackableRGB`](../classes/util_color.TrackableRGB.md)

#### Defined in

[src/neuroglancer/sliceview/panel.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/panel.ts#L48)

___

### inputEventMap

• **inputEventMap**: [`EventActionMap`](../classes/util_event_action_map.EventActionMap.md)

#### Inherited from

[RenderedDataViewerState](perspective_view_panel._internal_.RenderedDataViewerState.md).[inputEventMap](perspective_view_panel._internal_.RenderedDataViewerState.md#inputeventmap)

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/rendered_data_panel.ts#L47)

___

### layerManager

• **layerManager**: [`LayerManager`](../classes/annotation_annotation_layer_state._internal_.LayerManager.md)

#### Inherited from

[RenderedDataViewerState](perspective_view_panel._internal_.RenderedDataViewerState.md).[layerManager](perspective_view_panel._internal_.RenderedDataViewerState.md#layermanager)

#### Defined in

[src/neuroglancer/viewer_state.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer_state.ts#L31)

___

### mouseState

• **mouseState**: [`MouseSelectionState`](../classes/annotation_annotation_layer_state._internal_.MouseSelectionState.md)

#### Inherited from

[RenderedDataViewerState](perspective_view_panel._internal_.RenderedDataViewerState.md).[mouseState](perspective_view_panel._internal_.RenderedDataViewerState.md#mousestate)

#### Defined in

[src/neuroglancer/viewer_state.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer_state.ts#L29)

___

### navigationState

• **navigationState**: [`NavigationState`](../classes/annotation_polygon._internal_.NavigationState.md)<[`TrackableZoomInterface`](../modules/annotation_polygon._internal_.md#trackablezoominterface)\>

#### Inherited from

[RenderedDataViewerState](perspective_view_panel._internal_.RenderedDataViewerState.md).[navigationState](perspective_view_panel._internal_.RenderedDataViewerState.md#navigationstate)

#### Defined in

[src/neuroglancer/viewer_state.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer_state.ts#L28)

___

### scaleBarOptions

• **scaleBarOptions**: [`TrackableScaleBarOptions`](../classes/widget_scale_bar.TrackableScaleBarOptions.md)

#### Defined in

[src/neuroglancer/sliceview/panel.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/panel.ts#L47)

___

### selectedLayer

• **selectedLayer**: [`SelectedLayerState`](../classes/annotation_annotation_layer_state._internal_.SelectedLayerState.md)

#### Inherited from

[RenderedDataViewerState](perspective_view_panel._internal_.RenderedDataViewerState.md).[selectedLayer](perspective_view_panel._internal_.RenderedDataViewerState.md#selectedlayer)

#### Defined in

[src/neuroglancer/viewer_state.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer_state.ts#L32)

___

### selectionDetailsState

• **selectionDetailsState**: [`TrackableDataSelectionState`](../classes/annotation_annotation_layer_state._internal_.TrackableDataSelectionState.md)

#### Inherited from

[RenderedDataViewerState](perspective_view_panel._internal_.RenderedDataViewerState.md).[selectionDetailsState](perspective_view_panel._internal_.RenderedDataViewerState.md#selectiondetailsstate)

#### Defined in

[src/neuroglancer/viewer_state.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer_state.ts#L33)

___

### showAxisLines

• **showAxisLines**: [`TrackableBoolean`](../classes/annotation_annotation_layer_state._internal_.TrackableBoolean.md)

#### Inherited from

[RenderedDataViewerState](perspective_view_panel._internal_.RenderedDataViewerState.md).[showAxisLines](perspective_view_panel._internal_.RenderedDataViewerState.md#showaxislines)

#### Defined in

[src/neuroglancer/viewer_state.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer_state.ts#L30)

___

### showScaleBar

• **showScaleBar**: [`TrackableBoolean`](../classes/annotation_annotation_layer_state._internal_.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/sliceview/panel.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/panel.ts#L45)

___

### visibility

• **visibility**: [`WatchableVisibilityPriority`](../classes/visibility_priority_frontend.WatchableVisibilityPriority.md)

#### Inherited from

[RenderedDataViewerState](perspective_view_panel._internal_.RenderedDataViewerState.md).[visibility](perspective_view_panel._internal_.RenderedDataViewerState.md#visibility)

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/visibility_priority/frontend.ts#L50)

___

### visibleLayerRoles

• **visibleLayerRoles**: [`WatchableSet`](../classes/datasource_state_share._internal_.WatchableSet.md)<[`RenderLayerRole`](../enums/annotation_annotation_layer_state._internal_.RenderLayerRole.md)\>

#### Inherited from

[RenderedDataViewerState](perspective_view_panel._internal_.RenderedDataViewerState.md).[visibleLayerRoles](perspective_view_panel._internal_.RenderedDataViewerState.md#visiblelayerroles)

#### Defined in

[src/neuroglancer/viewer_state.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer_state.ts#L27)

___

### wireFrame

• **wireFrame**: [`TrackableBoolean`](../classes/annotation_annotation_layer_state._internal_.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/sliceview/panel.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/panel.ts#L46)
