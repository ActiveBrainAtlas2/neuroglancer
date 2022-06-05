[neuroglancer](../README.md) / [Modules](../modules.md) / [trackable\_vec3](../modules/trackable_vec3.md) / TrackableVec3

# Class: TrackableVec3

[trackable_vec3](../modules/trackable_vec3.md).TrackableVec3

## Implements

- `Trackable`

## Table of contents

### Constructors

- [constructor](trackable_vec3.TrackableVec3.md#constructor)

### Properties

- [changed](trackable_vec3.TrackableVec3.md#changed)
- [defaultValue](trackable_vec3.TrackableVec3.md#defaultvalue)

### Accessors

- [value](trackable_vec3.TrackableVec3.md#value)

### Methods

- [reset](trackable_vec3.TrackableVec3.md#reset)
- [restoreState](trackable_vec3.TrackableVec3.md#restorestate)
- [toJSON](trackable_vec3.TrackableVec3.md#tojson)

## Constructors

### constructor

• **new TrackableVec3**(`value_`, `defaultValue`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value_` | `vec3` |
| `defaultValue` | `vec3` |

#### Defined in

[src/neuroglancer/trackable_vec3.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/trackable_vec3.ts#L38)

## Properties

### changed

• **changed**: `NullarySignal`

#### Implementation of

Trackable.changed

#### Defined in

[src/neuroglancer/trackable_vec3.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/trackable_vec3.ts#L37)

___

### defaultValue

• **defaultValue**: `vec3`

## Accessors

### value

• `get` **value**(): `vec3`

#### Returns

`vec3`

#### Defined in

[src/neuroglancer/trackable_vec3.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/trackable_vec3.ts#L28)

• `set` **value**(`newValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValue` | `vec3` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/trackable_vec3.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/trackable_vec3.ts#L31)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

Trackable.reset

#### Defined in

[src/neuroglancer/trackable_vec3.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/trackable_vec3.ts#L53)

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

Trackable.restoreState

#### Defined in

[src/neuroglancer/trackable_vec3.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/trackable_vec3.ts#L46)

___

### toJSON

▸ **toJSON**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Implementation of

Trackable.toJSON

#### Defined in

[src/neuroglancer/trackable_vec3.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/trackable_vec3.ts#L39)
