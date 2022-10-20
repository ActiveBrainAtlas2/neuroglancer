[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/util/trackable](../modules/neuroglancer_util_trackable.md) / Trackable

# Interface: Trackable

[neuroglancer/util/trackable](../modules/neuroglancer_util_trackable.md).Trackable

## Hierarchy

- [`JsonRestorable`](neuroglancer_util_trackable.JsonRestorable.md)

  ↳ **`Trackable`**

  ↳↳ [`TrackableValueInterface`](neuroglancer_trackable_value.TrackableValueInterface.md)

  ↳↳ [`LinkableState`](neuroglancer_navigation_state._internal_.LinkableState.md)

## Implemented by

- [`CompoundTrackable`](../classes/neuroglancer_util_trackable.CompoundTrackable.md)
- [`CrossSectionSpecification`](../classes/neuroglancer_data_panel_layout.CrossSectionSpecification.md)
- [`DataPanelLayoutSpecification`](../classes/neuroglancer_data_panel_layout.DataPanelLayoutSpecification.md)
- [`IndirectTrackableValue`](../classes/neuroglancer_trackable_value.IndirectTrackableValue.md)
- [`LayerListPanelState`](../classes/neuroglancer_ui_layer_list_panel.LayerListPanelState.md)
- [`LayerReference`](../classes/neuroglancer_layer.LayerReference.md)
- [`LinkedBase`](../classes/neuroglancer_navigation_state._internal_.LinkedBase.md)
- [`LinkedLayerGroup`](../classes/neuroglancer_layer.LinkedLayerGroup.md)
- [`OptionSpecification`](../classes/neuroglancer_widget_tab_view.OptionSpecification.md)
- [`RootLayoutContainer`](../classes/neuroglancer_layer_groups_layout.RootLayoutContainer.md)
- [`SegmentColorHash`](../classes/neuroglancer_segment_color.SegmentColorHash.md)
- [`SelectedLayerState`](../classes/neuroglancer_layer.SelectedLayerState.md)
- [`ShaderControlState`](../classes/neuroglancer_webgl_shader_ui_controls.ShaderControlState.md)
- [`SimpleLinkedBase`](../classes/neuroglancer_navigation_state._internal_.SimpleLinkedBase.md)
- [`SkeletonRenderingOptions`](../classes/neuroglancer_skeleton_frontend.SkeletonRenderingOptions.md)
- [`StatisticsDisplayState`](../classes/neuroglancer_ui_statistics.StatisticsDisplayState.md)
- [`TrackableBasedEventActionMap`](../classes/neuroglancer_python_integration_event_action_map.TrackableBasedEventActionMap.md)
- [`TrackableBoolean`](../classes/neuroglancer_trackable_boolean.TrackableBoolean.md)
- [`TrackableDisplayDimensions`](../classes/neuroglancer_navigation_state.TrackableDisplayDimensions.md)
- [`TrackableEnum`](../classes/neuroglancer_util_trackable_enum.TrackableEnum.md)
- [`TrackableRelativeDisplayScales`](../classes/neuroglancer_navigation_state.TrackableRelativeDisplayScales.md)
- [`TrackableSidePanelLocation`](../classes/neuroglancer_ui_side_panel_location.TrackableSidePanelLocation.md)
- [`TrackableValue`](../classes/neuroglancer_trackable_value.TrackableValue.md)
- [`TrackableVec3`](../classes/neuroglancer_trackable_vec3.TrackableVec3.md)
- [`TrackableZoom`](../classes/neuroglancer_navigation_state._internal_.TrackableZoom.md)
- [`WatchableCoordinateSpaceTransform`](../classes/neuroglancer_coordinate_transform.WatchableCoordinateSpaceTransform.md)

## Table of contents

### Properties

- [changed](neuroglancer_util_trackable.Trackable.md#changed)
- [reset](neuroglancer_util_trackable.Trackable.md#reset)
- [restoreState](neuroglancer_util_trackable.Trackable.md#restorestate)
- [toJSON](neuroglancer_util_trackable.Trackable.md#tojson)

## Properties

### changed

• **changed**: [`NullaryReadonlySignal`](../modules/neuroglancer_util_signal.md#nullaryreadonlysignal)

#### Defined in

[src/neuroglancer/util/trackable.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/trackable.ts#L37)

___

### reset

• **reset**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/neuroglancer/util/trackable.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/trackable.ts#L36)

___

### restoreState

• **restoreState**: (`x`: `any`) => `void`

#### Type declaration

▸ (`x`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

##### Returns

`void`

#### Overrides

[JsonRestorable](neuroglancer_util_trackable.JsonRestorable.md).[restoreState](neuroglancer_util_trackable.JsonRestorable.md#restorestate)

#### Defined in

[src/neuroglancer/util/trackable.ts:35](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/trackable.ts#L35)

___

### toJSON

• **toJSON**: () => `any`

#### Type declaration

▸ (): `any`

##### Returns

`any`

#### Defined in

[src/neuroglancer/util/trackable.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/trackable.ts#L38)
