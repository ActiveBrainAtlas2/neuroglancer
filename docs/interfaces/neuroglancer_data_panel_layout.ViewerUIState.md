[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/data\_panel\_layout](../modules/neuroglancer_data_panel_layout.md) / ViewerUIState

# Interface: ViewerUIState

[neuroglancer/data_panel_layout](../modules/neuroglancer_data_panel_layout.md).ViewerUIState

## Hierarchy

- [`SliceViewViewerState`](neuroglancer_data_panel_layout.SliceViewViewerState.md)

- [`VisibilityPrioritySpecification`](neuroglancer_visibility_priority_frontend.VisibilityPrioritySpecification.md)

  ↳ **`ViewerUIState`**

## Table of contents

### Properties

- [chunkManager](neuroglancer_data_panel_layout.ViewerUIState.md#chunkmanager)
- [crossSectionBackgroundColor](neuroglancer_data_panel_layout.ViewerUIState.md#crosssectionbackgroundcolor)
- [display](neuroglancer_data_panel_layout.ViewerUIState.md#display)
- [inputEventBindings](neuroglancer_data_panel_layout.ViewerUIState.md#inputeventbindings)
- [layerManager](neuroglancer_data_panel_layout.ViewerUIState.md#layermanager)
- [mouseState](neuroglancer_data_panel_layout.ViewerUIState.md#mousestate)
- [navigationState](neuroglancer_data_panel_layout.ViewerUIState.md#navigationstate)
- [perspectiveNavigationState](neuroglancer_data_panel_layout.ViewerUIState.md#perspectivenavigationstate)
- [perspectiveViewBackgroundColor](neuroglancer_data_panel_layout.ViewerUIState.md#perspectiveviewbackgroundcolor)
- [scaleBarOptions](neuroglancer_data_panel_layout.ViewerUIState.md#scalebaroptions)
- [selectedLayer](neuroglancer_data_panel_layout.ViewerUIState.md#selectedlayer)
- [selectionDetailsState](neuroglancer_data_panel_layout.ViewerUIState.md#selectiondetailsstate)
- [showAxisLines](neuroglancer_data_panel_layout.ViewerUIState.md#showaxislines)
- [showPerspectiveSliceViews](neuroglancer_data_panel_layout.ViewerUIState.md#showperspectivesliceviews)
- [showScaleBar](neuroglancer_data_panel_layout.ViewerUIState.md#showscalebar)
- [visibility](neuroglancer_data_panel_layout.ViewerUIState.md#visibility)
- [visibleLayerRoles](neuroglancer_data_panel_layout.ViewerUIState.md#visiblelayerroles)
- [wireFrame](neuroglancer_data_panel_layout.ViewerUIState.md#wireframe)

## Properties

### chunkManager

• **chunkManager**: [`ChunkManager`](../classes/neuroglancer_chunk_manager_frontend.ChunkManager.md)

#### Inherited from

[SliceViewViewerState](neuroglancer_data_panel_layout.SliceViewViewerState.md).[chunkManager](neuroglancer_data_panel_layout.SliceViewViewerState.md#chunkmanager)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/data_panel_layout.ts#L46)

___

### crossSectionBackgroundColor

• **crossSectionBackgroundColor**: [`TrackableRGB`](../classes/neuroglancer_util_color.TrackableRGB.md)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:70](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/data_panel_layout.ts#L70)

___

### display

• **display**: [`DisplayContext`](../classes/neuroglancer_display_context.DisplayContext.md)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/data_panel_layout.ts#L58)

___

### inputEventBindings

• **inputEventBindings**: [`InputEventBindings`](../classes/neuroglancer_data_panel_layout.InputEventBindings.md)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/data_panel_layout.ts#L69)

___

### layerManager

• **layerManager**: [`LayerManager`](../classes/neuroglancer_layer.LayerManager.md)

#### Inherited from

[SliceViewViewerState](neuroglancer_data_panel_layout.SliceViewViewerState.md).[layerManager](neuroglancer_data_panel_layout.SliceViewViewerState.md#layermanager)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/data_panel_layout.ts#L48)

___

### mouseState

• **mouseState**: [`MouseSelectionState`](../classes/neuroglancer_layer.MouseSelectionState.md)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/data_panel_layout.ts#L59)

___

### navigationState

• **navigationState**: [`NavigationState`](../classes/neuroglancer_navigation_state.NavigationState.md)<[`TrackableZoomInterface`](../modules/neuroglancer_navigation_state.md#trackablezoominterface)\>

#### Inherited from

[SliceViewViewerState](neuroglancer_data_panel_layout.SliceViewViewerState.md).[navigationState](neuroglancer_data_panel_layout.SliceViewViewerState.md#navigationstate)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/data_panel_layout.ts#L47)

___

### perspectiveNavigationState

• **perspectiveNavigationState**: [`NavigationState`](../classes/neuroglancer_navigation_state.NavigationState.md)<[`TrackableZoomInterface`](../modules/neuroglancer_navigation_state.md#trackablezoominterface)\>

#### Defined in

[src/neuroglancer/data_panel_layout.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/data_panel_layout.ts#L60)

___

### perspectiveViewBackgroundColor

• **perspectiveViewBackgroundColor**: [`TrackableRGB`](../classes/neuroglancer_util_color.TrackableRGB.md)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:71](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/data_panel_layout.ts#L71)

___

### scaleBarOptions

• **scaleBarOptions**: [`TrackableValue`](../classes/neuroglancer_trackable_value.TrackableValue.md)<[`ScaleBarOptions`](neuroglancer_widget_scale_bar.ScaleBarOptions.md)\>

#### Defined in

[src/neuroglancer/data_panel_layout.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/data_panel_layout.ts#L66)

___

### selectedLayer

• **selectedLayer**: [`SelectedLayerState`](../classes/neuroglancer_layer.SelectedLayerState.md)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:68](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/data_panel_layout.ts#L68)

___

### selectionDetailsState

• **selectionDetailsState**: [`TrackableDataSelectionState`](../classes/neuroglancer_layer.TrackableDataSelectionState.md)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/data_panel_layout.ts#L61)

___

### showAxisLines

• **showAxisLines**: [`TrackableBoolean`](../classes/neuroglancer_trackable_boolean.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/data_panel_layout.ts#L63)

___

### showPerspectiveSliceViews

• **showPerspectiveSliceViews**: [`TrackableBoolean`](../classes/neuroglancer_trackable_boolean.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:62](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/data_panel_layout.ts#L62)

___

### showScaleBar

• **showScaleBar**: [`TrackableBoolean`](../classes/neuroglancer_trackable_boolean.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:65](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/data_panel_layout.ts#L65)

___

### visibility

• **visibility**: [`WatchableVisibilityPriority`](../classes/neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md)

#### Inherited from

[VisibilityPrioritySpecification](neuroglancer_visibility_priority_frontend.VisibilityPrioritySpecification.md).[visibility](neuroglancer_visibility_priority_frontend.VisibilityPrioritySpecification.md#visibility)

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/visibility_priority/frontend.ts#L50)

___

### visibleLayerRoles

• **visibleLayerRoles**: [`WatchableSet`](../classes/neuroglancer_trackable_value.WatchableSet.md)<[`RenderLayerRole`](../enums/neuroglancer_renderlayer.RenderLayerRole.md)\>

#### Defined in

[src/neuroglancer/data_panel_layout.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/data_panel_layout.ts#L67)

___

### wireFrame

• **wireFrame**: [`TrackableBoolean`](../classes/neuroglancer_trackable_boolean.TrackableBoolean.md)

#### Overrides

[SliceViewViewerState](neuroglancer_data_panel_layout.SliceViewViewerState.md).[wireFrame](neuroglancer_data_panel_layout.SliceViewViewerState.md#wireframe)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:64](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/data_panel_layout.ts#L64)
