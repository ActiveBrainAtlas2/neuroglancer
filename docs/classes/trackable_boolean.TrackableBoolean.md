[neuroglancer](../README.md) / [Modules](../modules.md) / [trackable\_boolean](../modules/trackable_boolean.md) / TrackableBoolean

# Class: TrackableBoolean

[trackable_boolean](../modules/trackable_boolean.md).TrackableBoolean

## Implements

- `Trackable`

## Table of contents

### Constructors

- [constructor](trackable_boolean.TrackableBoolean.md#constructor)

### Properties

- [changed](trackable_boolean.TrackableBoolean.md#changed)
- [defaultValue](trackable_boolean.TrackableBoolean.md#defaultvalue)

### Accessors

- [value](trackable_boolean.TrackableBoolean.md#value)

### Methods

- [reset](trackable_boolean.TrackableBoolean.md#reset)
- [restoreState](trackable_boolean.TrackableBoolean.md#restorestate)
- [toJSON](trackable_boolean.TrackableBoolean.md#tojson)
- [toggle](trackable_boolean.TrackableBoolean.md#toggle)

## Constructors

### constructor

• **new TrackableBoolean**(`value_`, `defaultValue?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value_` | `boolean` | `undefined` |
| `defaultValue` | `boolean` | `value_` |

#### Defined in

[src/neuroglancer/trackable_boolean.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/trackable_boolean.ts#L37)

## Properties

### changed

• **changed**: `NullarySignal`

#### Implementation of

Trackable.changed

#### Defined in

[src/neuroglancer/trackable_boolean.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/trackable_boolean.ts#L36)

___

### defaultValue

• **defaultValue**: `boolean` = `value_`

## Accessors

### value

• `get` **value**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/trackable_boolean.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/trackable_boolean.ts#L24)

• `set` **value**(`newValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValue` | `boolean` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/trackable_boolean.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/trackable_boolean.ts#L27)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

Trackable.reset

#### Defined in

[src/neuroglancer/trackable_boolean.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/trackable_boolean.ts#L52)

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

[src/neuroglancer/trackable_boolean.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/trackable_boolean.ts#L45)

___

### toJSON

▸ **toJSON**(): `undefined` \| `boolean`

#### Returns

`undefined` \| `boolean`

#### Implementation of

Trackable.toJSON

#### Defined in

[src/neuroglancer/trackable_boolean.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/trackable_boolean.ts#L38)

___

### toggle

▸ **toggle**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/trackable_boolean.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/trackable_boolean.ts#L33)
