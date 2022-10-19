[neuroglancer](../README.md) / [Modules](../modules.md) / [data\_panel\_layout](../modules/data_panel_layout.md) / ViewerUIState

# Interface: ViewerUIState

[data_panel_layout](../modules/data_panel_layout.md).ViewerUIState

## Hierarchy

- [`SliceViewViewerState`](data_panel_layout.SliceViewViewerState.md)

- [`VisibilityPrioritySpecification`](viewer_state.VisibilityPrioritySpecification.md)

  ↳ **`ViewerUIState`**

## Table of contents

### Properties

- [chunkManager](data_panel_layout.ViewerUIState.md#chunkmanager)
- [crossSectionBackgroundColor](data_panel_layout.ViewerUIState.md#crosssectionbackgroundcolor)
- [display](data_panel_layout.ViewerUIState.md#display)
- [inputEventBindings](data_panel_layout.ViewerUIState.md#inputeventbindings)
- [layerManager](data_panel_layout.ViewerUIState.md#layermanager)
- [mouseState](data_panel_layout.ViewerUIState.md#mousestate)
- [navigationState](data_panel_layout.ViewerUIState.md#navigationstate)
- [perspectiveNavigationState](data_panel_layout.ViewerUIState.md#perspectivenavigationstate)
- [perspectiveViewBackgroundColor](data_panel_layout.ViewerUIState.md#perspectiveviewbackgroundcolor)
- [scaleBarOptions](data_panel_layout.ViewerUIState.md#scalebaroptions)
- [selectedLayer](data_panel_layout.ViewerUIState.md#selectedlayer)
- [selectionDetailsState](data_panel_layout.ViewerUIState.md#selectiondetailsstate)
- [showAxisLines](data_panel_layout.ViewerUIState.md#showaxislines)
- [showPerspectiveSliceViews](data_panel_layout.ViewerUIState.md#showperspectivesliceviews)
- [showScaleBar](data_panel_layout.ViewerUIState.md#showscalebar)
- [visibility](data_panel_layout.ViewerUIState.md#visibility)
- [visibleLayerRoles](data_panel_layout.ViewerUIState.md#visiblelayerroles)
- [wireFrame](data_panel_layout.ViewerUIState.md#wireframe)

## Properties

### chunkManager

• **chunkManager**: [`ChunkManager`](../classes/data_panel_layout._internal_.ChunkManager.md)

#### Inherited from

[SliceViewViewerState](data_panel_layout.SliceViewViewerState.md).[chunkManager](data_panel_layout.SliceViewViewerState.md#chunkmanager)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/data_panel_layout.ts#L46)

___

### crossSectionBackgroundColor

• **crossSectionBackgroundColor**: [`TrackableRGB`](../classes/data_panel_layout._internal_.TrackableRGB.md)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:70](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/data_panel_layout.ts#L70)

___

### display

• **display**: [`DisplayContext`](../classes/display_context.DisplayContext.md)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/data_panel_layout.ts#L58)

___

### inputEventBindings

• **inputEventBindings**: [`InputEventBindings`](../classes/data_panel_layout.InputEventBindings.md)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/data_panel_layout.ts#L69)

___

### layerManager

• **layerManager**: [`LayerManager`](../classes/layer.LayerManager.md)

#### Inherited from

[SliceViewViewerState](data_panel_layout.SliceViewViewerState.md).[layerManager](data_panel_layout.SliceViewViewerState.md#layermanager)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/data_panel_layout.ts#L48)

___

### mouseState

• **mouseState**: [`MouseSelectionState`](../classes/layer.MouseSelectionState.md)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/data_panel_layout.ts#L59)

___

### navigationState

• **navigationState**: [`NavigationState`](../classes/navigation_state.NavigationState.md)<[`TrackableZoomInterface`](../modules/navigation_state.md#trackablezoominterface)\>

#### Inherited from

[SliceViewViewerState](data_panel_layout.SliceViewViewerState.md).[navigationState](data_panel_layout.SliceViewViewerState.md#navigationstate)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/data_panel_layout.ts#L47)

___

### perspectiveNavigationState

• **perspectiveNavigationState**: [`NavigationState`](../classes/navigation_state.NavigationState.md)<[`TrackableZoomInterface`](../modules/navigation_state.md#trackablezoominterface)\>

#### Defined in

[src/neuroglancer/data_panel_layout.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/data_panel_layout.ts#L60)

___

### perspectiveViewBackgroundColor

• **perspectiveViewBackgroundColor**: [`TrackableRGB`](../classes/data_panel_layout._internal_.TrackableRGB.md)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:71](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/data_panel_layout.ts#L71)

___

### scaleBarOptions

• **scaleBarOptions**: [`TrackableValue`](../classes/trackable_value.TrackableValue.md)<[`ScaleBarOptions`](data_panel_layout._internal_.ScaleBarOptions.md)\>

#### Defined in

[src/neuroglancer/data_panel_layout.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/data_panel_layout.ts#L66)

___

### selectedLayer

• **selectedLayer**: [`SelectedLayerState`](../classes/layer.SelectedLayerState.md)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:68](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/data_panel_layout.ts#L68)

___

### selectionDetailsState

• **selectionDetailsState**: [`TrackableDataSelectionState`](../classes/layer.TrackableDataSelectionState.md)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/data_panel_layout.ts#L61)

___

### showAxisLines

• **showAxisLines**: [`TrackableBoolean`](../classes/trackable_boolean.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/data_panel_layout.ts#L63)

___

### showPerspectiveSliceViews

• **showPerspectiveSliceViews**: [`TrackableBoolean`](../classes/trackable_boolean.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:62](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/data_panel_layout.ts#L62)

___

### showScaleBar

• **showScaleBar**: [`TrackableBoolean`](../classes/trackable_boolean.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:65](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/data_panel_layout.ts#L65)

___

### visibility

• **visibility**: [`WatchableVisibilityPriority`](../classes/data_panel_layout._internal_.WatchableVisibilityPriority.md)

#### Inherited from

[VisibilityPrioritySpecification](viewer_state.VisibilityPrioritySpecification.md).[visibility](viewer_state.VisibilityPrioritySpecification.md#visibility)

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/visibility_priority/frontend.ts#L50)

___

### visibleLayerRoles

• **visibleLayerRoles**: [`WatchableSet`](../classes/trackable_value.WatchableSet.md)<[`RenderLayerRole`](../enums/renderlayer.RenderLayerRole.md)\>

#### Defined in

[src/neuroglancer/data_panel_layout.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/data_panel_layout.ts#L67)

___

### wireFrame

• **wireFrame**: [`TrackableBoolean`](../classes/trackable_boolean.TrackableBoolean.md)

#### Overrides

[SliceViewViewerState](data_panel_layout.SliceViewViewerState.md).[wireFrame](data_panel_layout.SliceViewViewerState.md#wireframe)

#### Defined in

[src/neuroglancer/data_panel_layout.ts:64](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/data_panel_layout.ts#L64)
