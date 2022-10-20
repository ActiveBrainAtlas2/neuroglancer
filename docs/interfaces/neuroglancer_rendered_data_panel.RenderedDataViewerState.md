[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/rendered\_data\_panel](../modules/neuroglancer_rendered_data_panel.md) / RenderedDataViewerState

# Interface: RenderedDataViewerState

[neuroglancer/rendered_data_panel](../modules/neuroglancer_rendered_data_panel.md).RenderedDataViewerState

## Hierarchy

- [`ViewerState`](neuroglancer_viewer_state.ViewerState.md)

  ↳ **`RenderedDataViewerState`**

  ↳↳ [`PerspectiveViewerState`](neuroglancer_perspective_view_panel.PerspectiveViewerState.md)

  ↳↳ [`SliceViewerState`](neuroglancer_sliceview_panel.SliceViewerState.md)

## Table of contents

### Properties

- [inputEventMap](neuroglancer_rendered_data_panel.RenderedDataViewerState.md#inputeventmap)
- [layerManager](neuroglancer_rendered_data_panel.RenderedDataViewerState.md#layermanager)
- [mouseState](neuroglancer_rendered_data_panel.RenderedDataViewerState.md#mousestate)
- [navigationState](neuroglancer_rendered_data_panel.RenderedDataViewerState.md#navigationstate)
- [selectedLayer](neuroglancer_rendered_data_panel.RenderedDataViewerState.md#selectedlayer)
- [selectionDetailsState](neuroglancer_rendered_data_panel.RenderedDataViewerState.md#selectiondetailsstate)
- [showAxisLines](neuroglancer_rendered_data_panel.RenderedDataViewerState.md#showaxislines)
- [visibility](neuroglancer_rendered_data_panel.RenderedDataViewerState.md#visibility)
- [visibleLayerRoles](neuroglancer_rendered_data_panel.RenderedDataViewerState.md#visiblelayerroles)

## Properties

### inputEventMap

• **inputEventMap**: [`EventActionMap`](../classes/neuroglancer_util_event_action_map.EventActionMap.md)

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/rendered_data_panel.ts#L47)

___

### layerManager

• **layerManager**: [`LayerManager`](../classes/neuroglancer_layer.LayerManager.md)

#### Inherited from

[ViewerState](neuroglancer_viewer_state.ViewerState.md).[layerManager](neuroglancer_viewer_state.ViewerState.md#layermanager)

#### Defined in

[src/neuroglancer/viewer_state.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/viewer_state.ts#L31)

___

### mouseState

• **mouseState**: [`MouseSelectionState`](../classes/neuroglancer_layer.MouseSelectionState.md)

#### Inherited from

[ViewerState](neuroglancer_viewer_state.ViewerState.md).[mouseState](neuroglancer_viewer_state.ViewerState.md#mousestate)

#### Defined in

[src/neuroglancer/viewer_state.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/viewer_state.ts#L29)

___

### navigationState

• **navigationState**: [`NavigationState`](../classes/neuroglancer_navigation_state.NavigationState.md)<[`TrackableZoomInterface`](../modules/neuroglancer_navigation_state.md#trackablezoominterface)\>

#### Inherited from

[ViewerState](neuroglancer_viewer_state.ViewerState.md).[navigationState](neuroglancer_viewer_state.ViewerState.md#navigationstate)

#### Defined in

[src/neuroglancer/viewer_state.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/viewer_state.ts#L28)

___

### selectedLayer

• **selectedLayer**: [`SelectedLayerState`](../classes/neuroglancer_layer.SelectedLayerState.md)

#### Inherited from

[ViewerState](neuroglancer_viewer_state.ViewerState.md).[selectedLayer](neuroglancer_viewer_state.ViewerState.md#selectedlayer)

#### Defined in

[src/neuroglancer/viewer_state.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/viewer_state.ts#L32)

___

### selectionDetailsState

• **selectionDetailsState**: [`TrackableDataSelectionState`](../classes/neuroglancer_layer.TrackableDataSelectionState.md)

#### Inherited from

[ViewerState](neuroglancer_viewer_state.ViewerState.md).[selectionDetailsState](neuroglancer_viewer_state.ViewerState.md#selectiondetailsstate)

#### Defined in

[src/neuroglancer/viewer_state.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/viewer_state.ts#L33)

___

### showAxisLines

• **showAxisLines**: [`TrackableBoolean`](../classes/neuroglancer_trackable_boolean.TrackableBoolean.md)

#### Inherited from

[ViewerState](neuroglancer_viewer_state.ViewerState.md).[showAxisLines](neuroglancer_viewer_state.ViewerState.md#showaxislines)

#### Defined in

[src/neuroglancer/viewer_state.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/viewer_state.ts#L30)

___

### visibility

• **visibility**: [`WatchableVisibilityPriority`](../classes/neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md)

#### Inherited from

[ViewerState](neuroglancer_viewer_state.ViewerState.md).[visibility](neuroglancer_viewer_state.ViewerState.md#visibility)

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/visibility_priority/frontend.ts#L50)

___

### visibleLayerRoles

• **visibleLayerRoles**: [`WatchableSet`](../classes/neuroglancer_trackable_value.WatchableSet.md)<[`RenderLayerRole`](../enums/neuroglancer_renderlayer.RenderLayerRole.md)\>

#### Inherited from

[ViewerState](neuroglancer_viewer_state.ViewerState.md).[visibleLayerRoles](neuroglancer_viewer_state.ViewerState.md#visiblelayerroles)

#### Defined in

[src/neuroglancer/viewer_state.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/viewer_state.ts#L27)
