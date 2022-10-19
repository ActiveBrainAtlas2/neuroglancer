[neuroglancer](../README.md) / [Modules](../modules.md) / [perspective\_view/panel](../modules/perspective_view_panel.md) / [<internal\>](../modules/perspective_view_panel._internal_.md) / RenderedDataViewerState

# Interface: RenderedDataViewerState

[perspective_view/panel](../modules/perspective_view_panel.md).[<internal>](../modules/perspective_view_panel._internal_.md).RenderedDataViewerState

## Hierarchy

- [`ViewerState`](datasource_state_share._internal_.ViewerState.md)

  ↳ **`RenderedDataViewerState`**

  ↳↳ [`PerspectiveViewerState`](perspective_view_panel.PerspectiveViewerState.md)

  ↳↳ [`SliceViewerState`](sliceview_panel.SliceViewerState.md)

## Table of contents

### Properties

- [inputEventMap](perspective_view_panel._internal_.RenderedDataViewerState.md#inputeventmap)
- [layerManager](perspective_view_panel._internal_.RenderedDataViewerState.md#layermanager)
- [mouseState](perspective_view_panel._internal_.RenderedDataViewerState.md#mousestate)
- [navigationState](perspective_view_panel._internal_.RenderedDataViewerState.md#navigationstate)
- [selectedLayer](perspective_view_panel._internal_.RenderedDataViewerState.md#selectedlayer)
- [selectionDetailsState](perspective_view_panel._internal_.RenderedDataViewerState.md#selectiondetailsstate)
- [showAxisLines](perspective_view_panel._internal_.RenderedDataViewerState.md#showaxislines)
- [visibility](perspective_view_panel._internal_.RenderedDataViewerState.md#visibility)
- [visibleLayerRoles](perspective_view_panel._internal_.RenderedDataViewerState.md#visiblelayerroles)

## Properties

### inputEventMap

• **inputEventMap**: [`EventActionMap`](../classes/util_event_action_map.EventActionMap.md)

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/rendered_data_panel.ts#L47)

___

### layerManager

• **layerManager**: [`LayerManager`](../classes/annotation_annotation_layer_state._internal_.LayerManager.md)

#### Inherited from

[ViewerState](datasource_state_share._internal_.ViewerState.md).[layerManager](datasource_state_share._internal_.ViewerState.md#layermanager)

#### Defined in

[src/neuroglancer/viewer_state.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer_state.ts#L31)

___

### mouseState

• **mouseState**: [`MouseSelectionState`](../classes/annotation_annotation_layer_state._internal_.MouseSelectionState.md)

#### Inherited from

[ViewerState](datasource_state_share._internal_.ViewerState.md).[mouseState](datasource_state_share._internal_.ViewerState.md#mousestate)

#### Defined in

[src/neuroglancer/viewer_state.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer_state.ts#L29)

___

### navigationState

• **navigationState**: [`NavigationState`](../classes/annotation_polygon._internal_.NavigationState.md)<[`TrackableZoomInterface`](../modules/annotation_polygon._internal_.md#trackablezoominterface)\>

#### Inherited from

[ViewerState](datasource_state_share._internal_.ViewerState.md).[navigationState](datasource_state_share._internal_.ViewerState.md#navigationstate)

#### Defined in

[src/neuroglancer/viewer_state.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer_state.ts#L28)

___

### selectedLayer

• **selectedLayer**: [`SelectedLayerState`](../classes/annotation_annotation_layer_state._internal_.SelectedLayerState.md)

#### Inherited from

[ViewerState](datasource_state_share._internal_.ViewerState.md).[selectedLayer](datasource_state_share._internal_.ViewerState.md#selectedlayer)

#### Defined in

[src/neuroglancer/viewer_state.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer_state.ts#L32)

___

### selectionDetailsState

• **selectionDetailsState**: [`TrackableDataSelectionState`](../classes/annotation_annotation_layer_state._internal_.TrackableDataSelectionState.md)

#### Inherited from

[ViewerState](datasource_state_share._internal_.ViewerState.md).[selectionDetailsState](datasource_state_share._internal_.ViewerState.md#selectiondetailsstate)

#### Defined in

[src/neuroglancer/viewer_state.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer_state.ts#L33)

___

### showAxisLines

• **showAxisLines**: [`TrackableBoolean`](../classes/annotation_annotation_layer_state._internal_.TrackableBoolean.md)

#### Inherited from

[ViewerState](datasource_state_share._internal_.ViewerState.md).[showAxisLines](datasource_state_share._internal_.ViewerState.md#showaxislines)

#### Defined in

[src/neuroglancer/viewer_state.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer_state.ts#L30)

___

### visibility

• **visibility**: [`WatchableVisibilityPriority`](../classes/visibility_priority_frontend.WatchableVisibilityPriority.md)

#### Inherited from

[ViewerState](datasource_state_share._internal_.ViewerState.md).[visibility](datasource_state_share._internal_.ViewerState.md#visibility)

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/visibility_priority/frontend.ts#L50)

___

### visibleLayerRoles

• **visibleLayerRoles**: [`WatchableSet`](../classes/datasource_state_share._internal_.WatchableSet.md)<[`RenderLayerRole`](../enums/annotation_annotation_layer_state._internal_.RenderLayerRole.md)\>

#### Inherited from

[ViewerState](datasource_state_share._internal_.ViewerState.md).[visibleLayerRoles](datasource_state_share._internal_.ViewerState.md#visiblelayerroles)

#### Defined in

[src/neuroglancer/viewer_state.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer_state.ts#L27)
