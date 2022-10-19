[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/trackable\_vec3](../modules/neuroglancer_trackable_vec3.md) / TrackableVec3

# Class: TrackableVec3

[neuroglancer/trackable_vec3](../modules/neuroglancer_trackable_vec3.md).TrackableVec3

## Implements

- [`Trackable`](../interfaces/neuroglancer_util_trackable.Trackable.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_trackable_vec3.TrackableVec3.md#constructor)

### Properties

- [changed](neuroglancer_trackable_vec3.TrackableVec3.md#changed)
- [defaultValue](neuroglancer_trackable_vec3.TrackableVec3.md#defaultvalue)

### Accessors

- [value](neuroglancer_trackable_vec3.TrackableVec3.md#value)

### Methods

- [reset](neuroglancer_trackable_vec3.TrackableVec3.md#reset)
- [restoreState](neuroglancer_trackable_vec3.TrackableVec3.md#restorestate)
- [toJSON](neuroglancer_trackable_vec3.TrackableVec3.md#tojson)

## Constructors

### constructor

• **new TrackableVec3**(`value_`, `defaultValue`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value_` | [`vec3`](neuroglancer_util_geom.vec3.md) |
| `defaultValue` | [`vec3`](neuroglancer_util_geom.vec3.md) |

#### Defined in

[src/neuroglancer/trackable_vec3.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_vec3.ts#L38)

## Properties

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Implementation of

[Trackable](../interfaces/neuroglancer_util_trackable.Trackable.md).[changed](../interfaces/neuroglancer_util_trackable.Trackable.md#changed)

#### Defined in

[src/neuroglancer/trackable_vec3.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_vec3.ts#L37)

___

### defaultValue

• **defaultValue**: [`vec3`](neuroglancer_util_geom.vec3.md)

## Accessors

### value

• `get` **value**(): [`vec3`](neuroglancer_util_geom.vec3.md)

#### Returns

[`vec3`](neuroglancer_util_geom.vec3.md)

#### Defined in

[src/neuroglancer/trackable_vec3.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_vec3.ts#L28)

• `set` **value**(`newValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValue` | [`vec3`](neuroglancer_util_geom.vec3.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/trackable_vec3.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_vec3.ts#L31)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

[Trackable](../interfaces/neuroglancer_util_trackable.Trackable.md).[reset](../interfaces/neuroglancer_util_trackable.Trackable.md#reset)

#### Defined in

[src/neuroglancer/trackable_vec3.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_vec3.ts#L53)

___

### restoreState

▸ **restoreState**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

`void`

#### Implementation of

[Trackable](../interfaces/neuroglancer_util_trackable.Trackable.md).[restoreState](../interfaces/neuroglancer_util_trackable.Trackable.md#restorestate)

#### Defined in

[src/neuroglancer/trackable_vec3.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_vec3.ts#L46)

___

### toJSON

▸ **toJSON**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Implementation of

[Trackable](../interfaces/neuroglancer_util_trackable.Trackable.md).[toJSON](../interfaces/neuroglancer_util_trackable.Trackable.md#tojson)

#### Defined in

[src/neuroglancer/trackable_vec3.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_vec3.ts#L39)
