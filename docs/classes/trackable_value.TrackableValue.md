[neuroglancer](../README.md) / [Modules](../modules.md) / [trackable\_value](../modules/trackable_value.md) / TrackableValue

# Class: TrackableValue<T\>

[trackable_value](../modules/trackable_value.md).TrackableValue

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`WatchableValue`](trackable_value.WatchableValue.md)<`T`\>

  ↳ **`TrackableValue`**

  ↳↳ [`TrackableWindowedViewport`](display_context.TrackableWindowedViewport.md)

## Implements

- `Trackable`

## Table of contents

### Constructors

- [constructor](trackable_value.TrackableValue.md#constructor)

### Properties

- [changed](trackable_value.TrackableValue.md#changed)
- [defaultValue](trackable_value.TrackableValue.md#defaultvalue)
- [validator](trackable_value.TrackableValue.md#validator)
- [value\_](trackable_value.TrackableValue.md#value_)

### Accessors

- [value](trackable_value.TrackableValue.md#value)

### Methods

- [reset](trackable_value.TrackableValue.md#reset)
- [restoreState](trackable_value.TrackableValue.md#restorestate)
- [toJSON](trackable_value.TrackableValue.md#tojson)

## Constructors

### constructor

• **new TrackableValue**<`T`\>(`value`, `validator`, `defaultValue?`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `T` | `undefined` |
| `validator` | (`value`: `any`) => `T` | `undefined` |
| `defaultValue` | `T` | `value` |

#### Overrides

[WatchableValue](trackable_value.WatchableValue.md).[constructor](trackable_value.WatchableValue.md#constructor)

#### Defined in

[src/neuroglancer/trackable_value.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/trackable_value.ts#L47)

## Properties

### changed

• **changed**: `NullarySignal`

#### Implementation of

Trackable.changed

#### Inherited from

[WatchableValue](trackable_value.WatchableValue.md).[changed](trackable_value.WatchableValue.md#changed)

#### Defined in

[src/neuroglancer/trackable_value.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/trackable_value.ts#L42)

___

### defaultValue

• **defaultValue**: `T` = `value`

___

### validator

• **validator**: (`value`: `any`) => `T`

#### Type declaration

▸ (`value`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

##### Returns

`T`

___

### value\_

• `Protected` **value\_**: `T`

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

#### Implementation of

Trackable.reset

#### Defined in

[src/neuroglancer/trackable_value.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/trackable_value.ts#L57)

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

[src/neuroglancer/trackable_value.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/trackable_value.ts#L60)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Implementation of

Trackable.toJSON

#### Defined in

[src/neuroglancer/trackable_value.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/trackable_value.ts#L50)
