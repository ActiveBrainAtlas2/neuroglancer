[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / TrackableBoolean

# Class: TrackableBoolean

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).TrackableBoolean

## Implements

- [`Trackable`](../interfaces/util_trackable.Trackable.md)

## Table of contents

### Constructors

- [constructor](annotation_annotation_layer_state._internal_.TrackableBoolean.md#constructor)

### Properties

- [changed](annotation_annotation_layer_state._internal_.TrackableBoolean.md#changed)
- [defaultValue](annotation_annotation_layer_state._internal_.TrackableBoolean.md#defaultvalue)

### Accessors

- [value](annotation_annotation_layer_state._internal_.TrackableBoolean.md#value)

### Methods

- [reset](annotation_annotation_layer_state._internal_.TrackableBoolean.md#reset)
- [restoreState](annotation_annotation_layer_state._internal_.TrackableBoolean.md#restorestate)
- [toJSON](annotation_annotation_layer_state._internal_.TrackableBoolean.md#tojson)
- [toggle](annotation_annotation_layer_state._internal_.TrackableBoolean.md#toggle)

## Constructors

### constructor

• **new TrackableBoolean**(`value_`, `defaultValue?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value_` | `boolean` | `undefined` |
| `defaultValue` | `boolean` | `value_` |

#### Defined in

[src/neuroglancer/trackable_boolean.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_boolean.ts#L37)

## Properties

### changed

• **changed**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Implementation of

[Trackable](../interfaces/util_trackable.Trackable.md).[changed](../interfaces/util_trackable.Trackable.md#changed)

#### Defined in

[src/neuroglancer/trackable_boolean.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_boolean.ts#L36)

___

### defaultValue

• **defaultValue**: `boolean` = `value_`

## Accessors

### value

• `get` **value**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/trackable_boolean.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_boolean.ts#L24)

• `set` **value**(`newValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValue` | `boolean` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/trackable_boolean.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_boolean.ts#L27)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

[Trackable](../interfaces/util_trackable.Trackable.md).[reset](../interfaces/util_trackable.Trackable.md#reset)

#### Defined in

[src/neuroglancer/trackable_boolean.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_boolean.ts#L52)

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

[Trackable](../interfaces/util_trackable.Trackable.md).[restoreState](../interfaces/util_trackable.Trackable.md#restorestate)

#### Defined in

[src/neuroglancer/trackable_boolean.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_boolean.ts#L45)

___

### toJSON

▸ **toJSON**(): `undefined` \| `boolean`

#### Returns

`undefined` \| `boolean`

#### Implementation of

[Trackable](../interfaces/util_trackable.Trackable.md).[toJSON](../interfaces/util_trackable.Trackable.md#tojson)

#### Defined in

[src/neuroglancer/trackable_boolean.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_boolean.ts#L38)

___

### toggle

▸ **toggle**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/trackable_boolean.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_boolean.ts#L33)
