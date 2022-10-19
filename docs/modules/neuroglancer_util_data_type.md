[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/util/data\_type

# Module: neuroglancer/util/data\_type

## Table of contents

### Enumerations

- [DataType](../enums/neuroglancer_util_data_type.DataType.md)

### Variables

- [DATA\_TYPE\_ARRAY\_CONSTRUCTOR](neuroglancer_util_data_type.md#data_type_array_constructor)
- [DATA\_TYPE\_BYTES](neuroglancer_util_data_type.md#data_type_bytes)
- [DATA\_TYPE\_JAVASCRIPT\_ELEMENTS\_PER\_ARRAY\_ELEMENT](neuroglancer_util_data_type.md#data_type_javascript_elements_per_array_element)
- [DATA\_TYPE\_SIGNED](neuroglancer_util_data_type.md#data_type_signed)

### Functions

- [makeDataTypeArrayView](neuroglancer_util_data_type.md#makedatatypearrayview)

## Variables

### DATA\_TYPE\_ARRAY\_CONSTRUCTOR

• `Const` **DATA\_TYPE\_ARRAY\_CONSTRUCTOR**: [`Record`](main_module._internal_.md#record)<[`DataType`](../enums/neuroglancer_util_data_type.DataType.md), [`TypedArrayConstructor`](neuroglancer_util_array.md#typedarrayconstructor)\>

#### Defined in

[src/neuroglancer/util/data_type.ts:55](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/data_type.ts#L55)

___

### DATA\_TYPE\_BYTES

• `Const` **DATA\_TYPE\_BYTES**: [`Record`](main_module._internal_.md#record)<[`DataType`](../enums/neuroglancer_util_data_type.DataType.md), `number`\>

#### Defined in

[src/neuroglancer/util/data_type.ts:44](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/data_type.ts#L44)

___

### DATA\_TYPE\_JAVASCRIPT\_ELEMENTS\_PER\_ARRAY\_ELEMENT

• `Const` **DATA\_TYPE\_JAVASCRIPT\_ELEMENTS\_PER\_ARRAY\_ELEMENT**: [`Record`](main_module._internal_.md#record)<[`DataType`](../enums/neuroglancer_util_data_type.DataType.md), `number`\>

#### Defined in

[src/neuroglancer/util/data_type.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/data_type.ts#L66)

___

### DATA\_TYPE\_SIGNED

• `Const` **DATA\_TYPE\_SIGNED**: [`Record`](main_module._internal_.md#record)<[`DataType`](../enums/neuroglancer_util_data_type.DataType.md), `boolean` \| `undefined`\>

#### Defined in

[src/neuroglancer/util/data_type.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/data_type.ts#L33)

## Functions

### makeDataTypeArrayView

▸ **makeDataTypeArrayView**(`dataType`, `buffer`, `byteOffset?`, `byteLength?`): [`ArrayBufferView`](../interfaces/main_module._internal_.ArrayBufferView.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `dataType` | [`DataType`](../enums/neuroglancer_util_data_type.DataType.md) | `undefined` |
| `buffer` | `ArrayBuffer` | `undefined` |
| `byteOffset` | `number` | `0` |
| `byteLength` | `number` | `buffer.byteLength` |

#### Returns

[`ArrayBufferView`](../interfaces/main_module._internal_.ArrayBufferView.md)

#### Defined in

[src/neuroglancer/util/data_type.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/data_type.ts#L77)
