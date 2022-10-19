[neuroglancer](../README.md) / [Modules](../modules.md) / [display\_context](../modules/display_context.md) / TrackableWindowedViewport

# Class: TrackableWindowedViewport

[display_context](../modules/display_context.md).TrackableWindowedViewport

## Hierarchy

- [`TrackableValue`](trackable_value.TrackableValue.md)<`Float64Array`\>

  ↳ **`TrackableWindowedViewport`**

## Table of contents

### Constructors

- [constructor](display_context.TrackableWindowedViewport.md#constructor)

### Properties

- [changed](display_context.TrackableWindowedViewport.md#changed)
- [defaultValue](display_context.TrackableWindowedViewport.md#defaultvalue)
- [validator](display_context.TrackableWindowedViewport.md#validator)
- [value\_](display_context.TrackableWindowedViewport.md#value_)

### Accessors

- [value](display_context.TrackableWindowedViewport.md#value)

### Methods

- [reset](display_context.TrackableWindowedViewport.md#reset)
- [restoreState](display_context.TrackableWindowedViewport.md#restorestate)
- [toJSON](display_context.TrackableWindowedViewport.md#tojson)

## Constructors

### constructor

• **new TrackableWindowedViewport**()

#### Overrides

[TrackableValue](trackable_value.TrackableValue.md).[constructor](trackable_value.TrackableValue.md#constructor)

#### Defined in

[src/neuroglancer/display_context.ts:276](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/display_context.ts#L276)

## Properties

### changed

• **changed**: [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Inherited from

[TrackableValue](trackable_value.TrackableValue.md).[changed](trackable_value.TrackableValue.md#changed)

#### Defined in

[src/neuroglancer/trackable_value.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/trackable_value.ts#L42)

___

### defaultValue

• **defaultValue**: `Float64Array` = `value`

#### Inherited from

[TrackableValue](trackable_value.TrackableValue.md).[defaultValue](trackable_value.TrackableValue.md#defaultvalue)

___

### validator

• **validator**: (`value`: `any`) => `Float64Array`

#### Type declaration

▸ (`value`): `Float64Array`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

##### Returns

`Float64Array`

#### Inherited from

[TrackableValue](trackable_value.TrackableValue.md).[validator](trackable_value.TrackableValue.md#validator)

___

### value\_

• `Protected` **value\_**: `Float64Array`

#### Inherited from

[TrackableValue](trackable_value.TrackableValue.md).[value_](trackable_value.TrackableValue.md#value_)

## Accessors

### value

• `get` **value**(): `T`

#### Returns

`T`

#### Inherited from

TrackableValue.value

#### Defined in

[src/neuroglancer/trackable_value.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/trackable_value.ts#L33)

• `set` **value**(`newValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValue` | `T` |

#### Returns

`void`

#### Inherited from

TrackableValue.value

#### Defined in

[src/neuroglancer/trackable_value.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/trackable_value.ts#L36)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

[TrackableValue](trackable_value.TrackableValue.md).[reset](trackable_value.TrackableValue.md#reset)

#### Defined in

[src/neuroglancer/trackable_value.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/trackable_value.ts#L57)

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

[TrackableValue](trackable_value.TrackableValue.md).[restoreState](trackable_value.TrackableValue.md#restorestate)

#### Defined in

[src/neuroglancer/trackable_value.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/trackable_value.ts#L60)

___

### toJSON

▸ **toJSON**(): `undefined` \| `number`[]

#### Returns

`undefined` \| `number`[]

#### Overrides

[TrackableValue](trackable_value.TrackableValue.md).[toJSON](trackable_value.TrackableValue.md#tojson)

#### Defined in

[src/neuroglancer/display_context.ts:281](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/display_context.ts#L281)
