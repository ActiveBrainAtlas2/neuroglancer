[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/trackable\_value](../modules/neuroglancer_trackable_value.md) / TrackableValueInterface

# Interface: TrackableValueInterface<T\>

[neuroglancer/trackable_value](../modules/neuroglancer_trackable_value.md).TrackableValueInterface

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`T`\>

- [`Trackable`](neuroglancer_util_trackable.Trackable.md)

  ↳ **`TrackableValueInterface`**

## Implemented by

- [`SelectedLegacyTool`](../classes/neuroglancer_ui_tool.SelectedLegacyTool.md)
- [`TrackableDataSelectionState`](../classes/neuroglancer_layer.TrackableDataSelectionState.md)
- [`TrackableRefCounted`](../classes/neuroglancer_trackable_value.TrackableRefCounted.md)

## Table of contents

### Properties

- [changed](neuroglancer_trackable_value.TrackableValueInterface.md#changed)
- [value](neuroglancer_trackable_value.TrackableValueInterface.md#value)

### Methods

- [reset](neuroglancer_trackable_value.TrackableValueInterface.md#reset)
- [restoreState](neuroglancer_trackable_value.TrackableValueInterface.md#restorestate)
- [toJSON](neuroglancer_trackable_value.TrackableValueInterface.md#tojson)

## Properties

### changed

• **changed**: [`NullaryReadonlySignal`](../modules/neuroglancer_util_signal.md#nullaryreadonlysignal)

#### Inherited from

[Trackable](neuroglancer_util_trackable.Trackable.md).[changed](neuroglancer_util_trackable.Trackable.md#changed)

#### Defined in

[src/neuroglancer/trackable_value.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_value.ts#L24)

___

### value

• **value**: `T`

#### Inherited from

[WatchableValueInterface](neuroglancer_trackable_value.WatchableValueInterface.md).[value](neuroglancer_trackable_value.WatchableValueInterface.md#value)

#### Defined in

[src/neuroglancer/trackable_value.ts:23](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_value.ts#L23)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

[Trackable](neuroglancer_util_trackable.Trackable.md).[reset](neuroglancer_util_trackable.Trackable.md#reset)

#### Defined in

[src/neuroglancer/util/trackable.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/trackable.ts#L36)

___

### restoreState

▸ **restoreState**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

`void`

#### Inherited from

[Trackable](neuroglancer_util_trackable.Trackable.md).[restoreState](neuroglancer_util_trackable.Trackable.md#restorestate)

#### Defined in

[src/neuroglancer/util/trackable.ts:35](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/trackable.ts#L35)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

[Trackable](neuroglancer_util_trackable.Trackable.md).[toJSON](neuroglancer_util_trackable.Trackable.md#tojson)

#### Defined in

[src/neuroglancer/util/trackable.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/trackable.ts#L38)
