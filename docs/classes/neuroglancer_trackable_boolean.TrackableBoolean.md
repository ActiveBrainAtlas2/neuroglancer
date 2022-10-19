[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/trackable\_boolean](../modules/neuroglancer_trackable_boolean.md) / TrackableBoolean

# Class: TrackableBoolean

[neuroglancer/trackable_boolean](../modules/neuroglancer_trackable_boolean.md).TrackableBoolean

## Implements

- [`Trackable`](../interfaces/neuroglancer_util_trackable.Trackable.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_trackable_boolean.TrackableBoolean.md#constructor)

### Properties

- [changed](neuroglancer_trackable_boolean.TrackableBoolean.md#changed)
- [defaultValue](neuroglancer_trackable_boolean.TrackableBoolean.md#defaultvalue)

### Accessors

- [value](neuroglancer_trackable_boolean.TrackableBoolean.md#value)

### Methods

- [reset](neuroglancer_trackable_boolean.TrackableBoolean.md#reset)
- [restoreState](neuroglancer_trackable_boolean.TrackableBoolean.md#restorestate)
- [toJSON](neuroglancer_trackable_boolean.TrackableBoolean.md#tojson)
- [toggle](neuroglancer_trackable_boolean.TrackableBoolean.md#toggle)

## Constructors

### constructor

• **new TrackableBoolean**(`value_`, `defaultValue?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value_` | `boolean` | `undefined` |
| `defaultValue` | `boolean` | `value_` |

#### Defined in

[src/neuroglancer/trackable_boolean.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_boolean.ts#L37)

## Properties

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Implementation of

[Trackable](../interfaces/neuroglancer_util_trackable.Trackable.md).[changed](../interfaces/neuroglancer_util_trackable.Trackable.md#changed)

#### Defined in

[src/neuroglancer/trackable_boolean.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_boolean.ts#L36)

___

### defaultValue

• **defaultValue**: `boolean` = `value_`

## Accessors

### value

• `get` **value**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/trackable_boolean.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_boolean.ts#L24)

• `set` **value**(`newValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValue` | `boolean` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/trackable_boolean.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_boolean.ts#L27)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

[Trackable](../interfaces/neuroglancer_util_trackable.Trackable.md).[reset](../interfaces/neuroglancer_util_trackable.Trackable.md#reset)

#### Defined in

[src/neuroglancer/trackable_boolean.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_boolean.ts#L52)

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

[src/neuroglancer/trackable_boolean.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_boolean.ts#L45)

___

### toJSON

▸ **toJSON**(): `undefined` \| `boolean`

#### Returns

`undefined` \| `boolean`

#### Implementation of

[Trackable](../interfaces/neuroglancer_util_trackable.Trackable.md).[toJSON](../interfaces/neuroglancer_util_trackable.Trackable.md#tojson)

#### Defined in

[src/neuroglancer/trackable_boolean.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_boolean.ts#L38)

___

### toggle

▸ **toggle**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/trackable_boolean.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_boolean.ts#L33)
