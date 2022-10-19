[neuroglancer](../README.md) / [Modules](../modules.md) / [skeleton/frontend](../modules/skeleton_frontend.md) / TrackableSkeletonLineWidth

# Class: TrackableSkeletonLineWidth

[skeleton/frontend](../modules/skeleton_frontend.md).TrackableSkeletonLineWidth

## Hierarchy

- [`TrackableValue`](annotation_annotation_layer_state._internal_.TrackableValue.md)<`number`\>

  ↳ **`TrackableSkeletonLineWidth`**

## Table of contents

### Constructors

- [constructor](skeleton_frontend.TrackableSkeletonLineWidth.md#constructor)

### Properties

- [changed](skeleton_frontend.TrackableSkeletonLineWidth.md#changed)
- [defaultValue](skeleton_frontend.TrackableSkeletonLineWidth.md#defaultvalue)
- [validator](skeleton_frontend.TrackableSkeletonLineWidth.md#validator)
- [value\_](skeleton_frontend.TrackableSkeletonLineWidth.md#value_)

### Accessors

- [value](skeleton_frontend.TrackableSkeletonLineWidth.md#value)

### Methods

- [reset](skeleton_frontend.TrackableSkeletonLineWidth.md#reset)
- [restoreState](skeleton_frontend.TrackableSkeletonLineWidth.md#restorestate)
- [toJSON](skeleton_frontend.TrackableSkeletonLineWidth.md#tojson)

## Constructors

### constructor

• **new TrackableSkeletonLineWidth**(`value`, `defaultValue?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `number` | `undefined` |
| `defaultValue` | `number` | `value` |

#### Overrides

[TrackableValue](annotation_annotation_layer_state._internal_.TrackableValue.md).[constructor](annotation_annotation_layer_state._internal_.TrackableValue.md#constructor)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:291](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L291)

## Properties

### changed

• **changed**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Inherited from

[TrackableValue](annotation_annotation_layer_state._internal_.TrackableValue.md).[changed](annotation_annotation_layer_state._internal_.TrackableValue.md#changed)

#### Defined in

[src/neuroglancer/trackable_value.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L42)

___

### defaultValue

• **defaultValue**: `number` = `value`

#### Inherited from

[TrackableValue](annotation_annotation_layer_state._internal_.TrackableValue.md).[defaultValue](annotation_annotation_layer_state._internal_.TrackableValue.md#defaultvalue)

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

[TrackableValue](annotation_annotation_layer_state._internal_.TrackableValue.md).[validator](annotation_annotation_layer_state._internal_.TrackableValue.md#validator)

___

### value\_

• `Protected` **value\_**: `number`

#### Inherited from

[TrackableValue](annotation_annotation_layer_state._internal_.TrackableValue.md).[value_](annotation_annotation_layer_state._internal_.TrackableValue.md#value_)

## Accessors

### value

• `get` **value**(): `T`

#### Returns

`T`

#### Inherited from

TrackableValue.value

#### Defined in

[src/neuroglancer/trackable_value.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L33)

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

[src/neuroglancer/trackable_value.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L36)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

[TrackableValue](annotation_annotation_layer_state._internal_.TrackableValue.md).[reset](annotation_annotation_layer_state._internal_.TrackableValue.md#reset)

#### Defined in

[src/neuroglancer/trackable_value.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L57)

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

[TrackableValue](annotation_annotation_layer_state._internal_.TrackableValue.md).[restoreState](annotation_annotation_layer_state._internal_.TrackableValue.md#restorestate)

#### Defined in

[src/neuroglancer/trackable_value.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L60)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

[TrackableValue](annotation_annotation_layer_state._internal_.TrackableValue.md).[toJSON](annotation_annotation_layer_state._internal_.TrackableValue.md#tojson)

#### Defined in

[src/neuroglancer/trackable_value.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L50)
