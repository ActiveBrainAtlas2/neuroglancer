[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/annotation](../modules/neuroglancer_annotation.md) / AnnotationPropertySerializer

# Class: AnnotationPropertySerializer

[neuroglancer/annotation](../modules/neuroglancer_annotation.md).AnnotationPropertySerializer

## Table of contents

### Constructors

- [constructor](neuroglancer_annotation.AnnotationPropertySerializer.md#constructor)

### Properties

- [deserialize](neuroglancer_annotation.AnnotationPropertySerializer.md#deserialize)
- [propertySpecs](neuroglancer_annotation.AnnotationPropertySerializer.md#propertyspecs)
- [rank](neuroglancer_annotation.AnnotationPropertySerializer.md#rank)
- [serialize](neuroglancer_annotation.AnnotationPropertySerializer.md#serialize)
- [serializedBytes](neuroglancer_annotation.AnnotationPropertySerializer.md#serializedbytes)

## Constructors

### constructor

• **new AnnotationPropertySerializer**(`rank`, `propertySpecs`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rank` | `number` |
| `propertySpecs` | readonly [`Readonly`](../modules/neuroglancer_annotation_frontend_source._internal_.md#readonly)<[`AnnotationPropertySpec`](../modules/neuroglancer_annotation.md#annotationpropertyspec)\>[] |

#### Defined in

[src/neuroglancer/annotation/index.ts:328](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L328)

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

[src/neuroglancer/annotation/index.ts:326](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L326)

___

### propertySpecs

• **propertySpecs**: readonly [`Readonly`](../modules/neuroglancer_annotation_frontend_source._internal_.md#readonly)<[`AnnotationPropertySpec`](../modules/neuroglancer_annotation.md#annotationpropertyspec)\>[]

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

[src/neuroglancer/annotation/index.ts:325](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L325)

___

### serializedBytes

• **serializedBytes**: `number`

#### Defined in

[src/neuroglancer/annotation/index.ts:324](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/index.ts#L324)
