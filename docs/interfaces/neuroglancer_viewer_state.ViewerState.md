[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/viewer\_state](../modules/neuroglancer_viewer_state.md) / ViewerState

# Interface: ViewerState

[neuroglancer/viewer_state](../modules/neuroglancer_viewer_state.md).ViewerState

## Hierarchy

- [`VisibilityPrioritySpecification`](neuroglancer_visibility_priority_frontend.VisibilityPrioritySpecification.md)

  ↳ **`ViewerState`**

  ↳↳ [`RenderedDataViewerState`](neuroglancer_rendered_data_panel.RenderedDataViewerState.md)

## Implemented by

- [`Viewer`](../classes/neuroglancer_viewer.Viewer.md)

## Table of contents

### Properties

- [layerManager](neuroglancer_viewer_state.ViewerState.md#layermanager)
- [mouseState](neuroglancer_viewer_state.ViewerState.md#mousestate)
- [navigationState](neuroglancer_viewer_state.ViewerState.md#navigationstate)
- [selectedLayer](neuroglancer_viewer_state.ViewerState.md#selectedlayer)
- [selectionDetailsState](neuroglancer_viewer_state.ViewerState.md#selectiondetailsstate)
- [showAxisLines](neuroglancer_viewer_state.ViewerState.md#showaxislines)
- [visibility](neuroglancer_viewer_state.ViewerState.md#visibility)
- [visibleLayerRoles](neuroglancer_viewer_state.ViewerState.md#visiblelayerroles)

## Properties

### layerManager

• **layerManager**: [`LayerManager`](../classes/neuroglancer_layer.LayerManager.md)

#### Defined in

[src/neuroglancer/viewer_state.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/viewer_state.ts#L31)

___

### mouseState

• **mouseState**: [`MouseSelectionState`](../classes/neuroglancer_layer.MouseSelectionState.md)

#### Defined in

[src/neuroglancer/viewer_state.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/viewer_state.ts#L29)

___

### navigationState

• **navigationState**: [`NavigationState`](../classes/neuroglancer_navigation_state.NavigationState.md)<[`TrackableZoomInterface`](../modules/neuroglancer_navigation_state.md#trackablezoominterface)\>

#### Defined in

[src/neuroglancer/viewer_state.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/viewer_state.ts#L28)

___

### selectedLayer

• **selectedLayer**: [`SelectedLayerState`](../classes/neuroglancer_layer.SelectedLayerState.md)

#### Defined in

[src/neuroglancer/viewer_state.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/viewer_state.ts#L32)

___

### selectionDetailsState

• **selectionDetailsState**: [`TrackableDataSelectionState`](../classes/neuroglancer_layer.TrackableDataSelectionState.md)

#### Defined in

[src/neuroglancer/viewer_state.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/viewer_state.ts#L33)

___

### showAxisLines

• **showAxisLines**: [`TrackableBoolean`](../classes/neuroglancer_trackable_boolean.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/viewer_state.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/viewer_state.ts#L30)

___

### visibility

• **visibility**: [`WatchableVisibilityPriority`](../classes/neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md)

#### Inherited from

[VisibilityPrioritySpecification](neuroglancer_visibility_priority_frontend.VisibilityPrioritySpecification.md).[visibility](neuroglancer_visibility_priority_frontend.VisibilityPrioritySpecification.md#visibility)

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/visibility_priority/frontend.ts#L50)

___

### visibleLayerRoles

• **visibleLayerRoles**: [`WatchableSet`](../classes/neuroglancer_trackable_value.WatchableSet.md)<[`RenderLayerRole`](../enums/neuroglancer_renderlayer.RenderLayerRole.md)\>

#### Defined in

[src/neuroglancer/viewer_state.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/viewer_state.ts#L27)
