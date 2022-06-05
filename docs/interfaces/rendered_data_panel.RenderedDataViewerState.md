[neuroglancer](../README.md) / [Modules](../modules.md) / [rendered\_data\_panel](../modules/rendered_data_panel.md) / RenderedDataViewerState

# Interface: RenderedDataViewerState

[rendered_data_panel](../modules/rendered_data_panel.md).RenderedDataViewerState

## Hierarchy

- [`ViewerState`](viewer_state.ViewerState.md)

  ↳ **`RenderedDataViewerState`**

## Table of contents

### Properties

- [inputEventMap](rendered_data_panel.RenderedDataViewerState.md#inputeventmap)
- [layerManager](rendered_data_panel.RenderedDataViewerState.md#layermanager)
- [mouseState](rendered_data_panel.RenderedDataViewerState.md#mousestate)
- [navigationState](rendered_data_panel.RenderedDataViewerState.md#navigationstate)
- [selectedLayer](rendered_data_panel.RenderedDataViewerState.md#selectedlayer)
- [selectionDetailsState](rendered_data_panel.RenderedDataViewerState.md#selectiondetailsstate)
- [showAxisLines](rendered_data_panel.RenderedDataViewerState.md#showaxislines)
- [visibility](rendered_data_panel.RenderedDataViewerState.md#visibility)
- [visibleLayerRoles](rendered_data_panel.RenderedDataViewerState.md#visiblelayerroles)

## Properties

### inputEventMap

• **inputEventMap**: `EventActionMap`

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/rendered_data_panel.ts#L47)

___

### layerManager

• **layerManager**: [`LayerManager`](../classes/layer.LayerManager.md)

#### Inherited from

[ViewerState](viewer_state.ViewerState.md).[layerManager](viewer_state.ViewerState.md#layermanager)

#### Defined in

[src/neuroglancer/viewer_state.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/viewer_state.ts#L31)

___

### mouseState

• **mouseState**: [`MouseSelectionState`](../classes/layer.MouseSelectionState.md)

#### Inherited from

[ViewerState](viewer_state.ViewerState.md).[mouseState](viewer_state.ViewerState.md#mousestate)

#### Defined in

[src/neuroglancer/viewer_state.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/viewer_state.ts#L29)

___

### navigationState

• **navigationState**: [`NavigationState`](../classes/navigation_state.NavigationState.md)<[`TrackableZoomInterface`](../modules/navigation_state.md#trackablezoominterface)\>

#### Inherited from

[ViewerState](viewer_state.ViewerState.md).[navigationState](viewer_state.ViewerState.md#navigationstate)

#### Defined in

[src/neuroglancer/viewer_state.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/viewer_state.ts#L28)

___

### selectedLayer

• **selectedLayer**: [`SelectedLayerState`](../classes/layer.SelectedLayerState.md)

#### Inherited from

[ViewerState](viewer_state.ViewerState.md).[selectedLayer](viewer_state.ViewerState.md#selectedlayer)

#### Defined in

[src/neuroglancer/viewer_state.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/viewer_state.ts#L32)

___

### selectionDetailsState

• **selectionDetailsState**: [`TrackableDataSelectionState`](../classes/layer.TrackableDataSelectionState.md)

#### Inherited from

[ViewerState](viewer_state.ViewerState.md).[selectionDetailsState](viewer_state.ViewerState.md#selectiondetailsstate)

#### Defined in

[src/neuroglancer/viewer_state.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/viewer_state.ts#L33)

___

### showAxisLines

• **showAxisLines**: [`TrackableBoolean`](../classes/trackable_boolean.TrackableBoolean.md)

#### Inherited from

[ViewerState](viewer_state.ViewerState.md).[showAxisLines](viewer_state.ViewerState.md#showaxislines)

#### Defined in

[src/neuroglancer/viewer_state.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/viewer_state.ts#L30)

___

### visibility

• **visibility**: `WatchableVisibilityPriority`

#### Inherited from

[ViewerState](viewer_state.ViewerState.md).[visibility](viewer_state.ViewerState.md#visibility)

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/visibility_priority/frontend.ts#L50)

___

### visibleLayerRoles

• **visibleLayerRoles**: [`WatchableSet`](../classes/trackable_value.WatchableSet.md)<[`RenderLayerRole`](../enums/renderlayer.RenderLayerRole.md)\>

#### Inherited from

[ViewerState](viewer_state.ViewerState.md).[visibleLayerRoles](viewer_state.ViewerState.md#visiblelayerroles)

#### Defined in

[src/neuroglancer/viewer_state.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/viewer_state.ts#L27)
