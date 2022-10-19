[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation](../modules/annotation.md) / AnnotationPropertySerializer

# Class: AnnotationPropertySerializer

[annotation](../modules/annotation.md).AnnotationPropertySerializer

## Table of contents

### Constructors

- [constructor](annotation.AnnotationPropertySerializer.md#constructor)

### Properties

- [deserialize](annotation.AnnotationPropertySerializer.md#deserialize)
- [propertySpecs](annotation.AnnotationPropertySerializer.md#propertyspecs)
- [rank](annotation.AnnotationPropertySerializer.md#rank)
- [serialize](annotation.AnnotationPropertySerializer.md#serialize)
- [serializedBytes](annotation.AnnotationPropertySerializer.md#serializedbytes)

## Constructors

### constructor

• **new AnnotationPropertySerializer**(`rank`, `propertySpecs`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rank` | `number` |
| `propertySpecs` | readonly [`Readonly`](../modules/annotation_annotation_layer_state._internal_.md#readonly)<[`AnnotationPropertySpec`](../modules/annotation.md#annotationpropertyspec)\>[] |

#### Defined in

[src/neuroglancer/annotation/index.ts:328](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L328)

## Properties

### deserialize

• **deserialize**: (`buffer`: `DataView`, `offset`: `number`, `isLittleEndian`: `boolean`, `properties`: `any`[]) => `void`

#### Type declaration

▸ (`buffer`, `offset`, `isLittleEndian`, `properties`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `DataView` |
| `offset` | `number` |
| `isLittleEndian` | `boolean` |
| `properties` | `any`[] |

##### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/index.ts:326](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L326)

___

### propertySpecs

• **propertySpecs**: readonly [`Readonly`](../modules/annotation_annotation_layer_state._internal_.md#readonly)<[`AnnotationPropertySpec`](../modules/annotation.md#annotationpropertyspec)\>[]

___

### rank

• **rank**: `number`

___

### serialize

• **serialize**: (`buffer`: `DataView`, `offset`: `number`, `isLittleEndian`: `boolean`, `properties`: `any`[]) => `void`

#### Type declaration

▸ (`buffer`, `offset`, `isLittleEndian`, `properties`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `DataView` |
| `offset` | `number` |
| `isLittleEndian` | `boolean` |
| `properties` | `any`[] |

##### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/index.ts:325](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L325)

___

### serializedBytes

• **serializedBytes**: `number`

#### Defined in

[src/neuroglancer/annotation/index.ts:324](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/index.ts#L324)
