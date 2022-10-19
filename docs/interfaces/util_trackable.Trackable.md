[neuroglancer](../README.md) / [Modules](../modules.md) / [util/trackable](../modules/util_trackable.md) / Trackable

# Interface: Trackable

[util/trackable](../modules/util_trackable.md).Trackable

## Hierarchy

- [`JsonRestorable`](util_trackable.JsonRestorable.md)

  ↳ **`Trackable`**

  ↳↳ [`TrackableValueInterface`](annotation_annotation_layer_state._internal_.TrackableValueInterface.md)

  ↳↳ [`LinkableState`](ui_layer_bar._internal_.LinkableState.md)

## Implemented by

- [`CompoundTrackable`](../classes/util_trackable.CompoundTrackable.md)
- [`LayerListPanelState`](../classes/ui_layer_list_panel.LayerListPanelState.md)
- [`LayerReference`](../classes/annotation_user_layer._internal_.LayerReference.md)
- [`LinkedBase`](../classes/ui_layer_bar._internal_.LinkedBase.md)
- [`LinkedLayerGroup`](../classes/segmentation_display_state_frontend._internal_.LinkedLayerGroup.md)
- [`OptionSpecification`](../classes/widget_tab_view.OptionSpecification.md)
- [`RootLayoutContainer`](../classes/datasource_state_share._internal_.RootLayoutContainer.md)
- [`SegmentColorHash`](../classes/segmentation_display_state_frontend._internal_.SegmentColorHash.md)
- [`SelectedLayerState`](../classes/annotation_annotation_layer_state._internal_.SelectedLayerState.md)
- [`ShaderControlState`](../classes/webgl_shader_ui_controls.ShaderControlState.md)
- [`SimpleLinkedBase`](../classes/ui_layer_bar._internal_.SimpleLinkedBase.md)
- [`SkeletonRenderingOptions`](../classes/skeleton_frontend.SkeletonRenderingOptions.md)
- [`StatisticsDisplayState`](../classes/ui_statistics.StatisticsDisplayState.md)
- [`TrackableBasedEventActionMap`](../classes/python_integration_event_action_map.TrackableBasedEventActionMap.md)
- [`TrackableBoolean`](../classes/annotation_annotation_layer_state._internal_.TrackableBoolean.md)
- [`TrackableDisplayDimensions`](../classes/annotation_polygon._internal_.TrackableDisplayDimensions.md)
- [`TrackableEnum`](../classes/util_trackable_enum.TrackableEnum.md)
- [`TrackableRelativeDisplayScales`](../classes/annotation_polygon._internal_.TrackableRelativeDisplayScales.md)
- [`TrackableSidePanelLocation`](../classes/ui_side_panel_location.TrackableSidePanelLocation.md)
- [`TrackableValue`](../classes/annotation_annotation_layer_state._internal_.TrackableValue.md)
- [`TrackableVec3`](../classes/widget_vec3_entry_widget._internal_.TrackableVec3.md)
- [`TrackableZoom`](../classes/annotation_polygon._internal_.TrackableZoom.md)
- [`WatchableCoordinateSpaceTransform`](../classes/annotation_annotation_layer_state._internal_.WatchableCoordinateSpaceTransform.md)

## Table of contents

### Properties

- [changed](util_trackable.Trackable.md#changed)

### Methods

- [reset](util_trackable.Trackable.md#reset)
- [restoreState](util_trackable.Trackable.md#restorestate)
- [toJSON](util_trackable.Trackable.md#tojson)

## Properties

### changed

• **changed**: [`NullaryReadonlySignal`](../modules/util_signal.md#nullaryreadonlysignal)

#### Defined in

[src/neuroglancer/util/trackable.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/trackable.ts#L37)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/trackable.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/trackable.ts#L36)

___

### restoreState

▸ **restoreState**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

`void`

#### Overrides

[JsonRestorable](util_trackable.JsonRestorable.md).[restoreState](util_trackable.JsonRestorable.md#restorestate)

#### Defined in

[src/neuroglancer/util/trackable.ts:35](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/trackable.ts#L35)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[src/neuroglancer/util/trackable.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/trackable.ts#L38)
