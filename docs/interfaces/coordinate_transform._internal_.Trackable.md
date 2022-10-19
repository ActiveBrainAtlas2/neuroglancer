[neuroglancer](../README.md) / [Modules](../modules.md) / [coordinate\_transform](../modules/coordinate_transform.md) / [<internal\>](../modules/coordinate_transform._internal_.md) / Trackable

# Interface: Trackable

[coordinate_transform](../modules/coordinate_transform.md).[<internal>](../modules/coordinate_transform._internal_.md).Trackable

## Hierarchy

- [`JsonRestorable`](coordinate_transform._internal_.JsonRestorable.md)

  ↳ **`Trackable`**

  ↳↳ [`TrackableValueInterface`](trackable_value.TrackableValueInterface.md)

  ↳↳ [`LinkableState`](navigation_state._internal_.LinkableState.md)

## Implemented by

- [`CompoundTrackable`](../classes/layer_group_viewer._internal_.CompoundTrackable.md)
- [`CrossSectionSpecification`](../classes/data_panel_layout.CrossSectionSpecification.md)
- [`DataPanelLayoutSpecification`](../classes/data_panel_layout.DataPanelLayoutSpecification.md)
- [`IndirectTrackableValue`](../classes/trackable_value.IndirectTrackableValue.md)
- [`LayerListPanelState`](../classes/viewer._internal_.LayerListPanelState.md)
- [`LayerReference`](../classes/layer.LayerReference.md)
- [`LinkedBase`](../classes/navigation_state._internal_.LinkedBase.md)
- [`LinkedLayerGroup`](../classes/layer.LinkedLayerGroup.md)
- [`OptionSpecification`](../classes/image_user_layer._internal_.OptionSpecification.md)
- [`RootLayoutContainer`](../classes/layer_groups_layout.RootLayoutContainer.md)
- [`SegmentColorHash`](../classes/segment_color.SegmentColorHash.md)
- [`SelectedLayerState`](../classes/layer.SelectedLayerState.md)
- [`ShaderControlState`](../classes/image_user_layer._internal_.ShaderControlState.md)
- [`SimpleLinkedBase`](../classes/navigation_state._internal_.SimpleLinkedBase.md)
- [`SkeletonRenderingOptions`](../classes/segmentation_user_layer._internal_.SkeletonRenderingOptions.md)
- [`StatisticsDisplayState`](../classes/viewer._internal_.StatisticsDisplayState.md)
- [`TrackableBoolean`](../classes/trackable_boolean.TrackableBoolean.md)
- [`TrackableDisplayDimensions`](../classes/navigation_state.TrackableDisplayDimensions.md)
- [`TrackableEnum`](../classes/image_user_layer._internal_.TrackableEnum.md)
- [`TrackableRelativeDisplayScales`](../classes/navigation_state.TrackableRelativeDisplayScales.md)
- [`TrackableSidePanelLocation`](../classes/image_user_layer._internal_.TrackableSidePanelLocation.md)
- [`TrackableValue`](../classes/trackable_value.TrackableValue.md)
- [`TrackableVec3`](../classes/trackable_vec3.TrackableVec3.md)
- [`TrackableZoom`](../classes/navigation_state._internal_.TrackableZoom.md)
- [`WatchableCoordinateSpaceTransform`](../classes/coordinate_transform.WatchableCoordinateSpaceTransform.md)

## Table of contents

### Properties

- [changed](coordinate_transform._internal_.Trackable.md#changed)

### Methods

- [reset](coordinate_transform._internal_.Trackable.md#reset)
- [restoreState](coordinate_transform._internal_.Trackable.md#restorestate)
- [toJSON](coordinate_transform._internal_.Trackable.md#tojson)

## Properties

### changed

• **changed**: [`NullaryReadonlySignal`](../modules/coordinate_transform._internal_.md#nullaryreadonlysignal)

#### Defined in

[src/neuroglancer/util/trackable.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/trackable.ts#L37)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/trackable.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/trackable.ts#L36)

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

[JsonRestorable](coordinate_transform._internal_.JsonRestorable.md).[restoreState](coordinate_transform._internal_.JsonRestorable.md#restorestate)

#### Defined in

[src/neuroglancer/util/trackable.ts:35](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/trackable.ts#L35)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[src/neuroglancer/util/trackable.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/trackable.ts#L38)
