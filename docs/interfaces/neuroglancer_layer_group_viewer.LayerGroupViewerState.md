[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/layer\_group\_viewer](../modules/neuroglancer_layer_group_viewer.md) / LayerGroupViewerState

# Interface: LayerGroupViewerState

[neuroglancer/layer_group_viewer](../modules/neuroglancer_layer_group_viewer.md).LayerGroupViewerState

## Table of contents

### Properties

- [crossSectionBackgroundColor](neuroglancer_layer_group_viewer.LayerGroupViewerState.md#crosssectionbackgroundcolor)
- [display](neuroglancer_layer_group_viewer.LayerGroupViewerState.md#display)
- [inputEventBindings](neuroglancer_layer_group_viewer.LayerGroupViewerState.md#inputeventbindings)
- [layerSpecification](neuroglancer_layer_group_viewer.LayerGroupViewerState.md#layerspecification)
- [mouseState](neuroglancer_layer_group_viewer.LayerGroupViewerState.md#mousestate)
- [navigationState](neuroglancer_layer_group_viewer.LayerGroupViewerState.md#navigationstate)
- [perspectiveNavigationState](neuroglancer_layer_group_viewer.LayerGroupViewerState.md#perspectivenavigationstate)
- [perspectiveViewBackgroundColor](neuroglancer_layer_group_viewer.LayerGroupViewerState.md#perspectiveviewbackgroundcolor)
- [scaleBarOptions](neuroglancer_layer_group_viewer.LayerGroupViewerState.md#scalebaroptions)
- [selectedLayer](neuroglancer_layer_group_viewer.LayerGroupViewerState.md#selectedlayer)
- [showAxisLines](neuroglancer_layer_group_viewer.LayerGroupViewerState.md#showaxislines)
- [showPerspectiveSliceViews](neuroglancer_layer_group_viewer.LayerGroupViewerState.md#showperspectivesliceviews)
- [showScaleBar](neuroglancer_layer_group_viewer.LayerGroupViewerState.md#showscalebar)
- [visibility](neuroglancer_layer_group_viewer.LayerGroupViewerState.md#visibility)
- [visibleLayerRoles](neuroglancer_layer_group_viewer.LayerGroupViewerState.md#visiblelayerroles)
- [wireFrame](neuroglancer_layer_group_viewer.LayerGroupViewerState.md#wireframe)

## Properties

### crossSectionBackgroundColor

• **crossSectionBackgroundColor**: [`TrackableRGB`](../classes/neuroglancer_util_color.TrackableRGB.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_group_viewer.ts#L63)

___

### display

• **display**: [`DisplayContext`](../classes/neuroglancer_display_context.DisplayContext.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_group_viewer.ts#L49)

___

### inputEventBindings

• **inputEventBindings**: [`InputEventBindings`](../classes/neuroglancer_data_panel_layout.InputEventBindings.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_group_viewer.ts#L59)

___

### layerSpecification

• **layerSpecification**: [`LayerListSpecification`](../classes/neuroglancer_layer.LayerListSpecification.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_group_viewer.ts#L58)

___

### mouseState

• **mouseState**: [`MouseSelectionState`](../classes/neuroglancer_layer.MouseSelectionState.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_group_viewer.ts#L52)

___

### navigationState

• **navigationState**: [`NavigationState`](../classes/neuroglancer_navigation_state.NavigationState.md)<[`TrackableZoomInterface`](../modules/neuroglancer_navigation_state.md#trackablezoominterface)\>

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_group_viewer.ts#L50)

___

### perspectiveNavigationState

• **perspectiveNavigationState**: [`NavigationState`](../classes/neuroglancer_navigation_state.NavigationState.md)<[`TrackableZoomInterface`](../modules/neuroglancer_navigation_state.md#trackablezoominterface)\>

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_group_viewer.ts#L51)

___

### perspectiveViewBackgroundColor

• **perspectiveViewBackgroundColor**: [`TrackableRGB`](../classes/neuroglancer_util_color.TrackableRGB.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:64](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_group_viewer.ts#L64)

___

### scaleBarOptions

• **scaleBarOptions**: [`TrackableScaleBarOptions`](../classes/neuroglancer_widget_scale_bar.TrackableScaleBarOptions.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_group_viewer.ts#L56)

___

### selectedLayer

• **selectedLayer**: [`SelectedLayerState`](../classes/neuroglancer_layer.SelectedLayerState.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_group_viewer.ts#L61)

___

### showAxisLines

• **showAxisLines**: [`TrackableBoolean`](../classes/neuroglancer_trackable_boolean.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_group_viewer.ts#L53)

___

### showPerspectiveSliceViews

• **showPerspectiveSliceViews**: [`TrackableBoolean`](../classes/neuroglancer_trackable_boolean.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_group_viewer.ts#L57)

___

### showScaleBar

• **showScaleBar**: [`TrackableBoolean`](../classes/neuroglancer_trackable_boolean.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:55](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_group_viewer.ts#L55)

___

### visibility

• **visibility**: [`WatchableVisibilityPriority`](../classes/neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_group_viewer.ts#L60)

___

### visibleLayerRoles

• **visibleLayerRoles**: [`WatchableSet`](../classes/neuroglancer_trackable_value.WatchableSet.md)<[`RenderLayerRole`](../enums/neuroglancer_renderlayer.RenderLayerRole.md)\>

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:62](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_group_viewer.ts#L62)

___

### wireFrame

• **wireFrame**: [`TrackableBoolean`](../classes/neuroglancer_trackable_boolean.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/layer_group_viewer.ts#L54)
