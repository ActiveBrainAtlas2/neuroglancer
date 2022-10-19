[neuroglancer](../README.md) / [Modules](../modules.md) / [segmentation\_user\_layer](../modules/segmentation_user_layer.md) / [<internal\>](../modules/segmentation_user_layer._internal_.md) / TrackableSkeletonLineWidth

# Class: TrackableSkeletonLineWidth

[segmentation_user_layer](../modules/segmentation_user_layer.md).[<internal>](../modules/segmentation_user_layer._internal_.md).TrackableSkeletonLineWidth

## Hierarchy

- [`TrackableValue`](trackable_value.TrackableValue.md)<`number`\>

  ↳ **`TrackableSkeletonLineWidth`**

## Table of contents

### Constructors

- [constructor](segmentation_user_layer._internal_.TrackableSkeletonLineWidth.md#constructor)

### Properties

- [changed](segmentation_user_layer._internal_.TrackableSkeletonLineWidth.md#changed)
- [defaultValue](segmentation_user_layer._internal_.TrackableSkeletonLineWidth.md#defaultvalue)
- [validator](segmentation_user_layer._internal_.TrackableSkeletonLineWidth.md#validator)
- [value\_](segmentation_user_layer._internal_.TrackableSkeletonLineWidth.md#value_)

### Accessors

- [value](segmentation_user_layer._internal_.TrackableSkeletonLineWidth.md#value)

### Methods

- [reset](segmentation_user_layer._internal_.TrackableSkeletonLineWidth.md#reset)
- [restoreState](segmentation_user_layer._internal_.TrackableSkeletonLineWidth.md#restorestate)
- [toJSON](segmentation_user_layer._internal_.TrackableSkeletonLineWidth.md#tojson)

## Constructors

### constructor

• **new TrackableSkeletonLineWidth**(`value`, `defaultValue?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `number` | `undefined` |
| `defaultValue` | `number` | `value` |

#### Overrides

[TrackableValue](trackable_value.TrackableValue.md).[constructor](trackable_value.TrackableValue.md#constructor)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:291](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/skeleton/frontend.ts#L291)

## Properties

### changed

• **changed**: [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Inherited from

[TrackableValue](trackable_value.TrackableValue.md).[changed](trackable_value.TrackableValue.md#changed)

#### Defined in

[src/neuroglancer/trackable_value.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/trackable_value.ts#L42)

___

### defaultValue

• **defaultValue**: `number` = `value`

#### Inherited from

[TrackableValue](trackable_value.TrackableValue.md).[defaultValue](trackable_value.TrackableValue.md#defaultvalue)

___

### validator

• **validator**: (`value`: `any`) => `number`

#### Type declaration

▸ (`value`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

##### Returns

`number`

#### Inherited from

[TrackableValue](trackable_value.TrackableValue.md).[validator](trackable_value.TrackableValue.md#validator)

___

### value\_

• `Protected` **value\_**: `number`

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

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

[TrackableValue](trackable_value.TrackableValue.md).[toJSON](trackable_value.TrackableValue.md#tojson)

#### Defined in

[src/neuroglancer/trackable_value.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/trackable_value.ts#L50)
