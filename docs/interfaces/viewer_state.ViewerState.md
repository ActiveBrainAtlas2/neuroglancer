[neuroglancer](../README.md) / [Modules](../modules.md) / [viewer\_state](../modules/viewer_state.md) / ViewerState

# Interface: ViewerState

[viewer_state](../modules/viewer_state.md).ViewerState

## Hierarchy

- [`VisibilityPrioritySpecification`](viewer_state.VisibilityPrioritySpecification.md)

  ↳ **`ViewerState`**

  ↳↳ [`RenderedDataViewerState`](rendered_data_panel.RenderedDataViewerState.md)

## Implemented by

- [`Viewer`](../classes/viewer.Viewer.md)

## Table of contents

### Properties

- [layerManager](viewer_state.ViewerState.md#layermanager)
- [mouseState](viewer_state.ViewerState.md#mousestate)
- [navigationState](viewer_state.ViewerState.md#navigationstate)
- [selectedLayer](viewer_state.ViewerState.md#selectedlayer)
- [selectionDetailsState](viewer_state.ViewerState.md#selectiondetailsstate)
- [showAxisLines](viewer_state.ViewerState.md#showaxislines)
- [visibility](viewer_state.ViewerState.md#visibility)
- [visibleLayerRoles](viewer_state.ViewerState.md#visiblelayerroles)

## Properties

### layerManager

• **layerManager**: [`LayerManager`](../classes/layer.LayerManager.md)

#### Defined in

[src/neuroglancer/viewer_state.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/viewer_state.ts#L31)

___

### mouseState

• **mouseState**: [`MouseSelectionState`](../classes/layer.MouseSelectionState.md)

#### Defined in

[src/neuroglancer/viewer_state.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/viewer_state.ts#L29)

___

### navigationState

• **navigationState**: [`NavigationState`](../classes/navigation_state.NavigationState.md)<[`TrackableZoomInterface`](../modules/navigation_state.md#trackablezoominterface)\>

#### Defined in

[src/neuroglancer/viewer_state.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/viewer_state.ts#L28)

___

### selectedLayer

• **selectedLayer**: [`SelectedLayerState`](../classes/layer.SelectedLayerState.md)

#### Defined in

[src/neuroglancer/viewer_state.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/viewer_state.ts#L32)

___

### selectionDetailsState

• **selectionDetailsState**: [`TrackableDataSelectionState`](../classes/layer.TrackableDataSelectionState.md)

#### Defined in

[src/neuroglancer/viewer_state.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/viewer_state.ts#L33)

___

### showAxisLines

• **showAxisLines**: [`TrackableBoolean`](../classes/trackable_boolean.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/viewer_state.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/viewer_state.ts#L30)

___

### visibility

• **visibility**: `WatchableVisibilityPriority`

#### Inherited from

[VisibilityPrioritySpecification](viewer_state.VisibilityPrioritySpecification.md).[visibility](viewer_state.VisibilityPrioritySpecification.md#visibility)

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/visibility_priority/frontend.ts#L50)

___

### visibleLayerRoles

• **visibleLayerRoles**: [`WatchableSet`](../classes/trackable_value.WatchableSet.md)<[`RenderLayerRole`](../enums/renderlayer.RenderLayerRole.md)\>

#### Defined in

[src/neuroglancer/viewer_state.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/viewer_state.ts#L27)
