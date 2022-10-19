[neuroglancer](../README.md) / [Modules](../modules.md) / [perspective\_view/panel](../modules/perspective_view_panel.md) / PerspectiveViewerState

# Interface: PerspectiveViewerState

[perspective_view/panel](../modules/perspective_view_panel.md).PerspectiveViewerState

## Hierarchy

- [`RenderedDataViewerState`](perspective_view_panel._internal_.RenderedDataViewerState.md)

  ↳ **`PerspectiveViewerState`**

## Table of contents

### Properties

- [crossSectionBackgroundColor](perspective_view_panel.PerspectiveViewerState.md#crosssectionbackgroundcolor)
- [inputEventMap](perspective_view_panel.PerspectiveViewerState.md#inputeventmap)
- [layerManager](perspective_view_panel.PerspectiveViewerState.md#layermanager)
- [mouseState](perspective_view_panel.PerspectiveViewerState.md#mousestate)
- [navigationState](perspective_view_panel.PerspectiveViewerState.md#navigationstate)
- [orthographicProjection](perspective_view_panel.PerspectiveViewerState.md#orthographicprojection)
- [perspectiveViewBackgroundColor](perspective_view_panel.PerspectiveViewerState.md#perspectiveviewbackgroundcolor)
- [rpc](perspective_view_panel.PerspectiveViewerState.md#rpc)
- [scaleBarOptions](perspective_view_panel.PerspectiveViewerState.md#scalebaroptions)
- [selectedLayer](perspective_view_panel.PerspectiveViewerState.md#selectedlayer)
- [selectionDetailsState](perspective_view_panel.PerspectiveViewerState.md#selectiondetailsstate)
- [showAxisLines](perspective_view_panel.PerspectiveViewerState.md#showaxislines)
- [showScaleBar](perspective_view_panel.PerspectiveViewerState.md#showscalebar)
- [showSliceViews](perspective_view_panel.PerspectiveViewerState.md#showsliceviews)
- [showSliceViewsCheckbox](perspective_view_panel.PerspectiveViewerState.md#showsliceviewscheckbox)
- [visibility](perspective_view_panel.PerspectiveViewerState.md#visibility)
- [visibleLayerRoles](perspective_view_panel.PerspectiveViewerState.md#visiblelayerroles)
- [wireFrame](perspective_view_panel.PerspectiveViewerState.md#wireframe)

## Properties

### crossSectionBackgroundColor

• **crossSectionBackgroundColor**: [`TrackableRGB`](../classes/util_color.TrackableRGB.md)

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/panel.ts#L51)

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

### orthographicProjection

• **orthographicProjection**: [`TrackableBoolean`](../classes/annotation_annotation_layer_state._internal_.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/panel.ts#L46)

___

### perspectiveViewBackgroundColor

• **perspectiveViewBackgroundColor**: [`TrackableRGB`](../classes/util_color.TrackableRGB.md)

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/panel.ts#L52)

___

### rpc

• **rpc**: [`RPC`](../classes/annotation_annotation_layer_state._internal_.RPC.md)

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/panel.ts#L53)

___

### scaleBarOptions

• **scaleBarOptions**: [`TrackableValue`](../classes/annotation_annotation_layer_state._internal_.TrackableValue.md)<[`ScaleBarOptions`](widget_scale_bar.ScaleBarOptions.md)\>

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/panel.ts#L49)

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

[src/neuroglancer/perspective_view/panel.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/panel.ts#L48)

___

### showSliceViews

• **showSliceViews**: [`TrackableBoolean`](../classes/annotation_annotation_layer_state._internal_.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/panel.ts#L47)

___

### showSliceViewsCheckbox

• `Optional` **showSliceViewsCheckbox**: `boolean`

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/panel.ts#L50)

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

• **wireFrame**: [`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`boolean`\>

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/panel.ts#L45)
