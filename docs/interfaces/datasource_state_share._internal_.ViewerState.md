[neuroglancer](../README.md) / [Modules](../modules.md) / [datasource/state\_share](../modules/datasource_state_share.md) / [<internal\>](../modules/datasource_state_share._internal_.md) / ViewerState

# Interface: ViewerState

[datasource/state_share](../modules/datasource_state_share.md).[<internal>](../modules/datasource_state_share._internal_.md).ViewerState

## Hierarchy

- [`VisibilityPrioritySpecification`](visibility_priority_frontend.VisibilityPrioritySpecification.md)

  ↳ **`ViewerState`**

  ↳↳ [`RenderedDataViewerState`](perspective_view_panel._internal_.RenderedDataViewerState.md)

## Implemented by

- [`Viewer`](../classes/datasource_state_share._internal_.Viewer.md)

## Table of contents

### Properties

- [layerManager](datasource_state_share._internal_.ViewerState.md#layermanager)
- [mouseState](datasource_state_share._internal_.ViewerState.md#mousestate)
- [navigationState](datasource_state_share._internal_.ViewerState.md#navigationstate)
- [selectedLayer](datasource_state_share._internal_.ViewerState.md#selectedlayer)
- [selectionDetailsState](datasource_state_share._internal_.ViewerState.md#selectiondetailsstate)
- [showAxisLines](datasource_state_share._internal_.ViewerState.md#showaxislines)
- [visibility](datasource_state_share._internal_.ViewerState.md#visibility)
- [visibleLayerRoles](datasource_state_share._internal_.ViewerState.md#visiblelayerroles)

## Properties

### layerManager

• **layerManager**: [`LayerManager`](../classes/annotation_annotation_layer_state._internal_.LayerManager.md)

#### Defined in

[src/neuroglancer/viewer_state.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer_state.ts#L31)

___

### mouseState

• **mouseState**: [`MouseSelectionState`](../classes/annotation_annotation_layer_state._internal_.MouseSelectionState.md)

#### Defined in

[src/neuroglancer/viewer_state.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer_state.ts#L29)

___

### navigationState

• **navigationState**: [`NavigationState`](../classes/annotation_polygon._internal_.NavigationState.md)<[`TrackableZoomInterface`](../modules/annotation_polygon._internal_.md#trackablezoominterface)\>

#### Defined in

[src/neuroglancer/viewer_state.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer_state.ts#L28)

___

### selectedLayer

• **selectedLayer**: [`SelectedLayerState`](../classes/annotation_annotation_layer_state._internal_.SelectedLayerState.md)

#### Defined in

[src/neuroglancer/viewer_state.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer_state.ts#L32)

___

### selectionDetailsState

• **selectionDetailsState**: [`TrackableDataSelectionState`](../classes/annotation_annotation_layer_state._internal_.TrackableDataSelectionState.md)

#### Defined in

[src/neuroglancer/viewer_state.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer_state.ts#L33)

___

### showAxisLines

• **showAxisLines**: [`TrackableBoolean`](../classes/annotation_annotation_layer_state._internal_.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/viewer_state.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer_state.ts#L30)

___

### visibility

• **visibility**: [`WatchableVisibilityPriority`](../classes/visibility_priority_frontend.WatchableVisibilityPriority.md)

#### Inherited from

[VisibilityPrioritySpecification](visibility_priority_frontend.VisibilityPrioritySpecification.md).[visibility](visibility_priority_frontend.VisibilityPrioritySpecification.md#visibility)

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/visibility_priority/frontend.ts#L50)

___

### visibleLayerRoles

• **visibleLayerRoles**: [`WatchableSet`](../classes/datasource_state_share._internal_.WatchableSet.md)<[`RenderLayerRole`](../enums/annotation_annotation_layer_state._internal_.RenderLayerRole.md)\>

#### Defined in

[src/neuroglancer/viewer_state.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer_state.ts#L27)
