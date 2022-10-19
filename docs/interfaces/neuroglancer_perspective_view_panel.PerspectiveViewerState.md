[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/perspective\_view/panel](../modules/neuroglancer_perspective_view_panel.md) / PerspectiveViewerState

# Interface: PerspectiveViewerState

[neuroglancer/perspective_view/panel](../modules/neuroglancer_perspective_view_panel.md).PerspectiveViewerState

## Hierarchy

- [`RenderedDataViewerState`](neuroglancer_rendered_data_panel.RenderedDataViewerState.md)

  ↳ **`PerspectiveViewerState`**

## Table of contents

### Properties

- [crossSectionBackgroundColor](neuroglancer_perspective_view_panel.PerspectiveViewerState.md#crosssectionbackgroundcolor)
- [inputEventMap](neuroglancer_perspective_view_panel.PerspectiveViewerState.md#inputeventmap)
- [layerManager](neuroglancer_perspective_view_panel.PerspectiveViewerState.md#layermanager)
- [mouseState](neuroglancer_perspective_view_panel.PerspectiveViewerState.md#mousestate)
- [navigationState](neuroglancer_perspective_view_panel.PerspectiveViewerState.md#navigationstate)
- [orthographicProjection](neuroglancer_perspective_view_panel.PerspectiveViewerState.md#orthographicprojection)
- [perspectiveViewBackgroundColor](neuroglancer_perspective_view_panel.PerspectiveViewerState.md#perspectiveviewbackgroundcolor)
- [rpc](neuroglancer_perspective_view_panel.PerspectiveViewerState.md#rpc)
- [scaleBarOptions](neuroglancer_perspective_view_panel.PerspectiveViewerState.md#scalebaroptions)
- [selectedLayer](neuroglancer_perspective_view_panel.PerspectiveViewerState.md#selectedlayer)
- [selectionDetailsState](neuroglancer_perspective_view_panel.PerspectiveViewerState.md#selectiondetailsstate)
- [showAxisLines](neuroglancer_perspective_view_panel.PerspectiveViewerState.md#showaxislines)
- [showScaleBar](neuroglancer_perspective_view_panel.PerspectiveViewerState.md#showscalebar)
- [showSliceViews](neuroglancer_perspective_view_panel.PerspectiveViewerState.md#showsliceviews)
- [showSliceViewsCheckbox](neuroglancer_perspective_view_panel.PerspectiveViewerState.md#showsliceviewscheckbox)
- [visibility](neuroglancer_perspective_view_panel.PerspectiveViewerState.md#visibility)
- [visibleLayerRoles](neuroglancer_perspective_view_panel.PerspectiveViewerState.md#visiblelayerroles)
- [wireFrame](neuroglancer_perspective_view_panel.PerspectiveViewerState.md#wireframe)

## Properties

### crossSectionBackgroundColor

• **crossSectionBackgroundColor**: [`TrackableRGB`](../classes/neuroglancer_util_color.TrackableRGB.md)

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/panel.ts#L51)

___

### inputEventMap

• **inputEventMap**: [`EventActionMap`](../classes/neuroglancer_util_event_action_map.EventActionMap.md)

#### Inherited from

[RenderedDataViewerState](neuroglancer_rendered_data_panel.RenderedDataViewerState.md).[inputEventMap](neuroglancer_rendered_data_panel.RenderedDataViewerState.md#inputeventmap)

#### Defined in

[src/neuroglancer/rendered_data_panel.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/rendered_data_panel.ts#L47)

___

### layerManager

• **layerManager**: [`LayerManager`](../classes/neuroglancer_layer.LayerManager.md)

#### Inherited from

[RenderedDataViewerState](neuroglancer_rendered_data_panel.RenderedDataViewerState.md).[layerManager](neuroglancer_rendered_data_panel.RenderedDataViewerState.md#layermanager)

#### Defined in

[src/neuroglancer/viewer_state.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer_state.ts#L31)

___

### mouseState

• **mouseState**: [`MouseSelectionState`](../classes/neuroglancer_layer.MouseSelectionState.md)

#### Inherited from

[RenderedDataViewerState](neuroglancer_rendered_data_panel.RenderedDataViewerState.md).[mouseState](neuroglancer_rendered_data_panel.RenderedDataViewerState.md#mousestate)

#### Defined in

[src/neuroglancer/viewer_state.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer_state.ts#L29)

___

### navigationState

• **navigationState**: [`NavigationState`](../classes/neuroglancer_navigation_state.NavigationState.md)<[`TrackableZoomInterface`](../modules/neuroglancer_navigation_state.md#trackablezoominterface)\>

#### Inherited from

[RenderedDataViewerState](neuroglancer_rendered_data_panel.RenderedDataViewerState.md).[navigationState](neuroglancer_rendered_data_panel.RenderedDataViewerState.md#navigationstate)

#### Defined in

[src/neuroglancer/viewer_state.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer_state.ts#L28)

___

### orthographicProjection

• **orthographicProjection**: [`TrackableBoolean`](../classes/neuroglancer_trackable_boolean.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/panel.ts#L46)

___

### perspectiveViewBackgroundColor

• **perspectiveViewBackgroundColor**: [`TrackableRGB`](../classes/neuroglancer_util_color.TrackableRGB.md)

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/panel.ts#L52)

___

### rpc

• **rpc**: [`RPC`](../classes/neuroglancer_worker_rpc.RPC.md)

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/panel.ts#L53)

___

### scaleBarOptions

• **scaleBarOptions**: [`TrackableValue`](../classes/neuroglancer_trackable_value.TrackableValue.md)<[`ScaleBarOptions`](neuroglancer_widget_scale_bar.ScaleBarOptions.md)\>

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/panel.ts#L49)

___

### selectedLayer

• **selectedLayer**: [`SelectedLayerState`](../classes/neuroglancer_layer.SelectedLayerState.md)

#### Inherited from

[RenderedDataViewerState](neuroglancer_rendered_data_panel.RenderedDataViewerState.md).[selectedLayer](neuroglancer_rendered_data_panel.RenderedDataViewerState.md#selectedlayer)

#### Defined in

[src/neuroglancer/viewer_state.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer_state.ts#L32)

___

### selectionDetailsState

• **selectionDetailsState**: [`TrackableDataSelectionState`](../classes/neuroglancer_layer.TrackableDataSelectionState.md)

#### Inherited from

[RenderedDataViewerState](neuroglancer_rendered_data_panel.RenderedDataViewerState.md).[selectionDetailsState](neuroglancer_rendered_data_panel.RenderedDataViewerState.md#selectiondetailsstate)

#### Defined in

[src/neuroglancer/viewer_state.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer_state.ts#L33)

___

### showAxisLines

• **showAxisLines**: [`TrackableBoolean`](../classes/neuroglancer_trackable_boolean.TrackableBoolean.md)

#### Inherited from

[RenderedDataViewerState](neuroglancer_rendered_data_panel.RenderedDataViewerState.md).[showAxisLines](neuroglancer_rendered_data_panel.RenderedDataViewerState.md#showaxislines)

#### Defined in

[src/neuroglancer/viewer_state.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer_state.ts#L30)

___

### showScaleBar

• **showScaleBar**: [`TrackableBoolean`](../classes/neuroglancer_trackable_boolean.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/panel.ts#L48)

___

### showSliceViews

• **showSliceViews**: [`TrackableBoolean`](../classes/neuroglancer_trackable_boolean.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/panel.ts#L47)

___

### showSliceViewsCheckbox

• `Optional` **showSliceViewsCheckbox**: `boolean`

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/panel.ts#L50)

___

### visibility

• **visibility**: [`WatchableVisibilityPriority`](../classes/neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md)

#### Inherited from

[RenderedDataViewerState](neuroglancer_rendered_data_panel.RenderedDataViewerState.md).[visibility](neuroglancer_rendered_data_panel.RenderedDataViewerState.md#visibility)

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/visibility_priority/frontend.ts#L50)

___

### visibleLayerRoles

• **visibleLayerRoles**: [`WatchableSet`](../classes/neuroglancer_trackable_value.WatchableSet.md)<[`RenderLayerRole`](../enums/neuroglancer_renderlayer.RenderLayerRole.md)\>

#### Inherited from

[RenderedDataViewerState](neuroglancer_rendered_data_panel.RenderedDataViewerState.md).[visibleLayerRoles](neuroglancer_rendered_data_panel.RenderedDataViewerState.md#visiblelayerroles)

#### Defined in

[src/neuroglancer/viewer_state.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/viewer_state.ts#L27)

___

### wireFrame

• **wireFrame**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`boolean`\>

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/panel.ts#L45)
