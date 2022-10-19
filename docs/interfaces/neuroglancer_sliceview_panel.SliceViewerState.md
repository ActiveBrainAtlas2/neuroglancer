[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/panel](../modules/neuroglancer_sliceview_panel.md) / SliceViewerState

# Interface: SliceViewerState

[neuroglancer/sliceview/panel](../modules/neuroglancer_sliceview_panel.md).SliceViewerState

## Hierarchy

- [`RenderedDataViewerState`](neuroglancer_rendered_data_panel.RenderedDataViewerState.md)

  ↳ **`SliceViewerState`**

## Table of contents

### Properties

- [crossSectionBackgroundColor](neuroglancer_sliceview_panel.SliceViewerState.md#crosssectionbackgroundcolor)
- [inputEventMap](neuroglancer_sliceview_panel.SliceViewerState.md#inputeventmap)
- [layerManager](neuroglancer_sliceview_panel.SliceViewerState.md#layermanager)
- [mouseState](neuroglancer_sliceview_panel.SliceViewerState.md#mousestate)
- [navigationState](neuroglancer_sliceview_panel.SliceViewerState.md#navigationstate)
- [scaleBarOptions](neuroglancer_sliceview_panel.SliceViewerState.md#scalebaroptions)
- [selectedLayer](neuroglancer_sliceview_panel.SliceViewerState.md#selectedlayer)
- [selectionDetailsState](neuroglancer_sliceview_panel.SliceViewerState.md#selectiondetailsstate)
- [showAxisLines](neuroglancer_sliceview_panel.SliceViewerState.md#showaxislines)
- [showScaleBar](neuroglancer_sliceview_panel.SliceViewerState.md#showscalebar)
- [visibility](neuroglancer_sliceview_panel.SliceViewerState.md#visibility)
- [visibleLayerRoles](neuroglancer_sliceview_panel.SliceViewerState.md#visiblelayerroles)
- [wireFrame](neuroglancer_sliceview_panel.SliceViewerState.md#wireframe)

## Properties

### crossSectionBackgroundColor

• **crossSectionBackgroundColor**: [`TrackableRGB`](../classes/neuroglancer_util_color.TrackableRGB.md)

#### Defined in

[src/neuroglancer/sliceview/panel.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/panel.ts#L48)

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

### scaleBarOptions

• **scaleBarOptions**: [`TrackableScaleBarOptions`](../classes/neuroglancer_widget_scale_bar.TrackableScaleBarOptions.md)

#### Defined in

[src/neuroglancer/sliceview/panel.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/panel.ts#L47)

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

[src/neuroglancer/sliceview/panel.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/panel.ts#L45)

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

• **wireFrame**: [`TrackableBoolean`](../classes/neuroglancer_trackable_boolean.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/sliceview/panel.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/panel.ts#L46)
