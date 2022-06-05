[neuroglancer](../README.md) / [Modules](../modules.md) / [trackable\_value](../modules/trackable_value.md) / TrackableValueInterface

# Interface: TrackableValueInterface<T\>

[trackable_value](../modules/trackable_value.md).TrackableValueInterface

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`WatchableValueInterface`](trackable_value.WatchableValueInterface.md)<`T`\>

- `Trackable`

  ↳ **`TrackableValueInterface`**

## Implemented by

- [`TrackableDataSelectionState`](../classes/layer.TrackableDataSelectionState.md)
- [`TrackableRefCounted`](../classes/trackable_value.TrackableRefCounted.md)

## Table of contents

### Properties

- [changed](trackable_value.TrackableValueInterface.md#changed)
- [value](trackable_value.TrackableValueInterface.md#value)

### Methods

- [reset](trackable_value.TrackableValueInterface.md#reset)
- [restoreState](trackable_value.TrackableValueInterface.md#restorestate)
- [toJSON](trackable_value.TrackableValueInterface.md#tojson)

## Properties

### changed

• **changed**: `NullaryReadonlySignal`

#### Inherited from

[WatchableValueInterface](trackable_value.WatchableValueInterface.md).[changed](trackable_value.WatchableValueInterface.md#changed)

#### Defined in

[src/neuroglancer/trackable_value.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/trackable_value.ts#L24)

___

### value

• **value**: `T`

#### Inherited from

[WatchableValueInterface](trackable_value.WatchableValueInterface.md).[value](trackable_value.WatchableValueInterface.md#value)

#### Defined in

[src/neuroglancer/trackable_value.ts:23](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/trackable_value.ts#L23)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

Trackable.reset

#### Defined in

[src/neuroglancer/util/trackable.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/trackable.ts#L36)

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

Trackable.restoreState

#### Defined in

[src/neuroglancer/util/trackable.ts:35](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/trackable.ts#L35)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

Trackable.toJSON

#### Defined in

[src/neuroglancer/util/trackable.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/trackable.ts#L38)
