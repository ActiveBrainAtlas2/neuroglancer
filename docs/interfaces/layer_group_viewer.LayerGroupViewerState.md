[neuroglancer](../README.md) / [Modules](../modules.md) / [layer\_group\_viewer](../modules/layer_group_viewer.md) / LayerGroupViewerState

# Interface: LayerGroupViewerState

[layer_group_viewer](../modules/layer_group_viewer.md).LayerGroupViewerState

## Table of contents

### Properties

- [crossSectionBackgroundColor](layer_group_viewer.LayerGroupViewerState.md#crosssectionbackgroundcolor)
- [display](layer_group_viewer.LayerGroupViewerState.md#display)
- [inputEventBindings](layer_group_viewer.LayerGroupViewerState.md#inputeventbindings)
- [layerSpecification](layer_group_viewer.LayerGroupViewerState.md#layerspecification)
- [mouseState](layer_group_viewer.LayerGroupViewerState.md#mousestate)
- [navigationState](layer_group_viewer.LayerGroupViewerState.md#navigationstate)
- [perspectiveNavigationState](layer_group_viewer.LayerGroupViewerState.md#perspectivenavigationstate)
- [perspectiveViewBackgroundColor](layer_group_viewer.LayerGroupViewerState.md#perspectiveviewbackgroundcolor)
- [scaleBarOptions](layer_group_viewer.LayerGroupViewerState.md#scalebaroptions)
- [selectedLayer](layer_group_viewer.LayerGroupViewerState.md#selectedlayer)
- [showAxisLines](layer_group_viewer.LayerGroupViewerState.md#showaxislines)
- [showPerspectiveSliceViews](layer_group_viewer.LayerGroupViewerState.md#showperspectivesliceviews)
- [showScaleBar](layer_group_viewer.LayerGroupViewerState.md#showscalebar)
- [visibility](layer_group_viewer.LayerGroupViewerState.md#visibility)
- [visibleLayerRoles](layer_group_viewer.LayerGroupViewerState.md#visiblelayerroles)
- [wireFrame](layer_group_viewer.LayerGroupViewerState.md#wireframe)

## Properties

### crossSectionBackgroundColor

• **crossSectionBackgroundColor**: `TrackableRGB`

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer_group_viewer.ts#L63)

___

### display

• **display**: [`DisplayContext`](../classes/display_context.DisplayContext.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer_group_viewer.ts#L49)

___

### inputEventBindings

• **inputEventBindings**: [`InputEventBindings`](../classes/data_panel_layout.InputEventBindings.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer_group_viewer.ts#L59)

___

### layerSpecification

• **layerSpecification**: [`LayerListSpecification`](../classes/layer.LayerListSpecification.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer_group_viewer.ts#L58)

___

### mouseState

• **mouseState**: [`MouseSelectionState`](../classes/layer.MouseSelectionState.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer_group_viewer.ts#L52)

___

### navigationState

• **navigationState**: [`NavigationState`](../classes/navigation_state.NavigationState.md)<[`TrackableZoomInterface`](../modules/navigation_state.md#trackablezoominterface)\>

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer_group_viewer.ts#L50)

___

### perspectiveNavigationState

• **perspectiveNavigationState**: [`NavigationState`](../classes/navigation_state.NavigationState.md)<[`TrackableZoomInterface`](../modules/navigation_state.md#trackablezoominterface)\>

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer_group_viewer.ts#L51)

___

### perspectiveViewBackgroundColor

• **perspectiveViewBackgroundColor**: `TrackableRGB`

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:64](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer_group_viewer.ts#L64)

___

### scaleBarOptions

• **scaleBarOptions**: `TrackableScaleBarOptions`

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer_group_viewer.ts#L56)

___

### selectedLayer

• **selectedLayer**: [`SelectedLayerState`](../classes/layer.SelectedLayerState.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer_group_viewer.ts#L61)

___

### showAxisLines

• **showAxisLines**: [`TrackableBoolean`](../classes/trackable_boolean.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer_group_viewer.ts#L53)

___

### showPerspectiveSliceViews

• **showPerspectiveSliceViews**: [`TrackableBoolean`](../classes/trackable_boolean.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer_group_viewer.ts#L57)

___

### showScaleBar

• **showScaleBar**: [`TrackableBoolean`](../classes/trackable_boolean.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:55](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer_group_viewer.ts#L55)

___

### visibility

• **visibility**: `WatchableVisibilityPriority`

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer_group_viewer.ts#L60)

___

### visibleLayerRoles

• **visibleLayerRoles**: [`WatchableSet`](../classes/trackable_value.WatchableSet.md)<[`RenderLayerRole`](../enums/renderlayer.RenderLayerRole.md)\>

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:62](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer_group_viewer.ts#L62)

___

### wireFrame

• **wireFrame**: [`TrackableBoolean`](../classes/trackable_boolean.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/layer_group_viewer.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/layer_group_viewer.ts#L54)
