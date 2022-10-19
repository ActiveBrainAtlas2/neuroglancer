[neuroglancer](../README.md) / [Modules](../modules.md) / [datasource/state\_share](../modules/datasource_state_share.md) / [<internal\>](../modules/datasource_state_share._internal_.md) / TrackableWindowedViewport

# Class: TrackableWindowedViewport

[datasource/state_share](../modules/datasource_state_share.md).[<internal>](../modules/datasource_state_share._internal_.md).TrackableWindowedViewport

## Hierarchy

- [`TrackableValue`](annotation_annotation_layer_state._internal_.TrackableValue.md)<`Float64Array`\>

  ↳ **`TrackableWindowedViewport`**

## Table of contents

### Constructors

- [constructor](datasource_state_share._internal_.TrackableWindowedViewport.md#constructor)

### Properties

- [changed](datasource_state_share._internal_.TrackableWindowedViewport.md#changed)
- [defaultValue](datasource_state_share._internal_.TrackableWindowedViewport.md#defaultvalue)
- [validator](datasource_state_share._internal_.TrackableWindowedViewport.md#validator)
- [value\_](datasource_state_share._internal_.TrackableWindowedViewport.md#value_)

### Accessors

- [value](datasource_state_share._internal_.TrackableWindowedViewport.md#value)

### Methods

- [reset](datasource_state_share._internal_.TrackableWindowedViewport.md#reset)
- [restoreState](datasource_state_share._internal_.TrackableWindowedViewport.md#restorestate)
- [toJSON](datasource_state_share._internal_.TrackableWindowedViewport.md#tojson)

## Constructors

### constructor

• **new TrackableWindowedViewport**()

#### Overrides

[TrackableValue](annotation_annotation_layer_state._internal_.TrackableValue.md).[constructor](annotation_annotation_layer_state._internal_.TrackableValue.md#constructor)

#### Defined in

[src/neuroglancer/display_context.ts:276](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L276)

## Properties

### changed

• **changed**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Inherited from

[TrackableValue](annotation_annotation_layer_state._internal_.TrackableValue.md).[changed](annotation_annotation_layer_state._internal_.TrackableValue.md#changed)

#### Defined in

[src/neuroglancer/trackable_value.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L42)

___

### defaultValue

• **defaultValue**: `Float64Array` = `value`

#### Inherited from

[TrackableValue](annotation_annotation_layer_state._internal_.TrackableValue.md).[defaultValue](annotation_annotation_layer_state._internal_.TrackableValue.md#defaultvalue)

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

[TrackableValue](annotation_annotation_layer_state._internal_.TrackableValue.md).[validator](annotation_annotation_layer_state._internal_.TrackableValue.md#validator)

___

### value\_

• `Protected` **value\_**: `Float64Array`

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

▸ **toJSON**(): `undefined` \| `number`[]

#### Returns

`undefined` \| `number`[]

#### Overrides

[TrackableValue](annotation_annotation_layer_state._internal_.TrackableValue.md).[toJSON](annotation_annotation_layer_state._internal_.TrackableValue.md#tojson)

#### Defined in

[src/neuroglancer/display_context.ts:281](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/display_context.ts#L281)
