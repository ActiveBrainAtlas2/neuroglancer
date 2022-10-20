[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/coordinate\_transform](../modules/neuroglancer_coordinate_transform.md) / TrackableCoordinateSpace

# Class: TrackableCoordinateSpace

[neuroglancer/coordinate_transform](../modules/neuroglancer_coordinate_transform.md).TrackableCoordinateSpace

## Hierarchy

- [`WatchableValue`](neuroglancer_trackable_value.WatchableValue.md)<[`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md)\>

  ↳ **`TrackableCoordinateSpace`**

## Table of contents

### Constructors

- [constructor](neuroglancer_coordinate_transform.TrackableCoordinateSpace.md#constructor)

### Properties

- [changed](neuroglancer_coordinate_transform.TrackableCoordinateSpace.md#changed)
- [value\_](neuroglancer_coordinate_transform.TrackableCoordinateSpace.md#value_)

### Accessors

- [value](neuroglancer_coordinate_transform.TrackableCoordinateSpace.md#value)

### Methods

- [reset](neuroglancer_coordinate_transform.TrackableCoordinateSpace.md#reset)
- [restoreState](neuroglancer_coordinate_transform.TrackableCoordinateSpace.md#restorestate)
- [toJSON](neuroglancer_coordinate_transform.TrackableCoordinateSpace.md#tojson)

## Constructors

### constructor

• **new TrackableCoordinateSpace**()

#### Overrides

[WatchableValue](neuroglancer_trackable_value.WatchableValue.md).[constructor](neuroglancer_trackable_value.WatchableValue.md#constructor)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:271](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/coordinate_transform.ts#L271)

## Properties

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Inherited from

[WatchableValue](neuroglancer_trackable_value.WatchableValue.md).[changed](neuroglancer_trackable_value.WatchableValue.md#changed)

#### Defined in

[src/neuroglancer/trackable_value.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/trackable_value.ts#L42)

___

### value\_

• `Protected` **value\_**: [`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md)

#### Inherited from

[WatchableValue](neuroglancer_trackable_value.WatchableValue.md).[value_](neuroglancer_trackable_value.WatchableValue.md#value_)

#### Defined in

[src/neuroglancer/trackable_value.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/trackable_value.ts#L43)

## Accessors

### value

• `get` **value**(): `T`

#### Returns

`T`

#### Inherited from

WatchableValue.value

#### Defined in

[src/neuroglancer/trackable_value.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/trackable_value.ts#L33)

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

[src/neuroglancer/trackable_value.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/trackable_value.ts#L36)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:278](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/coordinate_transform.ts#L278)

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

[src/neuroglancer/coordinate_transform.ts:281](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/coordinate_transform.ts#L281)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:275](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/coordinate_transform.ts#L275)
