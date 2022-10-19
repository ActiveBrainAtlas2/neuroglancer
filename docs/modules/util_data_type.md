[neuroglancer](../README.md) / [Modules](../modules.md) / util/data\_type

# Module: util/data\_type

## Table of contents

### Enumerations

- [DataType](../enums/util_data_type.DataType.md)

### Variables

- [DATA\_TYPE\_ARRAY\_CONSTRUCTOR](util_data_type.md#data_type_array_constructor)
- [DATA\_TYPE\_BYTES](util_data_type.md#data_type_bytes)
- [DATA\_TYPE\_JAVASCRIPT\_ELEMENTS\_PER\_ARRAY\_ELEMENT](util_data_type.md#data_type_javascript_elements_per_array_element)
- [DATA\_TYPE\_SIGNED](util_data_type.md#data_type_signed)

### Functions

- [makeDataTypeArrayView](util_data_type.md#makedatatypearrayview)

## Variables

### DATA\_TYPE\_ARRAY\_CONSTRUCTOR

• `Const` **DATA\_TYPE\_ARRAY\_CONSTRUCTOR**: [`Record`](annotation_annotation_layer_state._internal_.md#record)<[`DataType`](../enums/util_data_type.DataType.md), [`TypedArrayConstructor`](util_array.md#typedarrayconstructor)\>

#### Defined in

[src/neuroglancer/util/data_type.ts:55](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/data_type.ts#L55)

___

### DATA\_TYPE\_BYTES

• `Const` **DATA\_TYPE\_BYTES**: [`Record`](annotation_annotation_layer_state._internal_.md#record)<[`DataType`](../enums/util_data_type.DataType.md), `number`\>

#### Defined in

[src/neuroglancer/util/data_type.ts:44](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/data_type.ts#L44)

___

### DATA\_TYPE\_JAVASCRIPT\_ELEMENTS\_PER\_ARRAY\_ELEMENT

• `Const` **DATA\_TYPE\_JAVASCRIPT\_ELEMENTS\_PER\_ARRAY\_ELEMENT**: [`Record`](annotation_annotation_layer_state._internal_.md#record)<[`DataType`](../enums/util_data_type.DataType.md), `number`\>

#### Defined in

[src/neuroglancer/util/data_type.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/data_type.ts#L66)

___

### DATA\_TYPE\_SIGNED

• `Const` **DATA\_TYPE\_SIGNED**: [`Record`](annotation_annotation_layer_state._internal_.md#record)<[`DataType`](../enums/util_data_type.DataType.md), `boolean` \| `undefined`\>

#### Defined in

[src/neuroglancer/util/data_type.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/data_type.ts#L33)

## Functions

### makeDataTypeArrayView

▸ **makeDataTypeArrayView**(`dataType`, `buffer`, `byteOffset?`, `byteLength?`): [`ArrayBufferView`](../interfaces/annotation_annotation_layer_state._internal_.ArrayBufferView.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `dataType` | [`DataType`](../enums/util_data_type.DataType.md) | `undefined` |
| `buffer` | `ArrayBuffer` | `undefined` |
| `byteOffset` | `number` | `0` |
| `byteLength` | `number` | `buffer.byteLength` |

#### Returns

[`ArrayBufferView`](../interfaces/annotation_annotation_layer_state._internal_.ArrayBufferView.md)

#### Defined in

[src/neuroglancer/util/data_type.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/data_type.ts#L77)
