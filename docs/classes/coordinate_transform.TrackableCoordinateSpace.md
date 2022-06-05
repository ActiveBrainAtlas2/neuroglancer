[neuroglancer](../README.md) / [Modules](../modules.md) / [coordinate\_transform](../modules/coordinate_transform.md) / TrackableCoordinateSpace

# Class: TrackableCoordinateSpace

[coordinate_transform](../modules/coordinate_transform.md).TrackableCoordinateSpace

## Hierarchy

- [`WatchableValue`](trackable_value.WatchableValue.md)<[`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md)\>

  ↳ **`TrackableCoordinateSpace`**

## Table of contents

### Constructors

- [constructor](coordinate_transform.TrackableCoordinateSpace.md#constructor)

### Properties

- [changed](coordinate_transform.TrackableCoordinateSpace.md#changed)
- [value\_](coordinate_transform.TrackableCoordinateSpace.md#value_)

### Accessors

- [value](coordinate_transform.TrackableCoordinateSpace.md#value)

### Methods

- [reset](coordinate_transform.TrackableCoordinateSpace.md#reset)
- [restoreState](coordinate_transform.TrackableCoordinateSpace.md#restorestate)
- [toJSON](coordinate_transform.TrackableCoordinateSpace.md#tojson)

## Constructors

### constructor

• **new TrackableCoordinateSpace**()

#### Overrides

[WatchableValue](trackable_value.WatchableValue.md).[constructor](trackable_value.WatchableValue.md#constructor)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:271](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/coordinate_transform.ts#L271)

## Properties

### changed

• **changed**: `NullarySignal`

#### Inherited from

[WatchableValue](trackable_value.WatchableValue.md).[changed](trackable_value.WatchableValue.md#changed)

#### Defined in

[src/neuroglancer/trackable_value.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/trackable_value.ts#L42)

___

### value\_

• `Protected` **value\_**: [`CoordinateSpace`](../interfaces/coordinate_transform.CoordinateSpace.md)

#### Inherited from

[WatchableValue](trackable_value.WatchableValue.md).[value_](trackable_value.WatchableValue.md#value_)

## Accessors

### value

• `get` **value**(): `T`

#### Returns

`T`

#### Inherited from

WatchableValue.value

#### Defined in

[src/neuroglancer/trackable_value.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/trackable_value.ts#L33)

• `set` **value**(`newValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValue` | `T` |

#### Returns

`void`

#### Inherited from

WatchableValue.value

#### Defined in

[src/neuroglancer/trackable_value.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/trackable_value.ts#L36)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:278](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/coordinate_transform.ts#L278)

___

### restoreState

▸ **restoreState**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:281](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/coordinate_transform.ts#L281)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:275](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/coordinate_transform.ts#L275)
