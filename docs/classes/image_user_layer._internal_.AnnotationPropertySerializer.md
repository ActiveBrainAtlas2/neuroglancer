[neuroglancer](../README.md) / [Modules](../modules.md) / [image\_user\_layer](../modules/image_user_layer.md) / [<internal\>](../modules/image_user_layer._internal_.md) / AnnotationPropertySerializer

# Class: AnnotationPropertySerializer

[image_user_layer](../modules/image_user_layer.md).[<internal>](../modules/image_user_layer._internal_.md).AnnotationPropertySerializer

## Table of contents

### Constructors

- [constructor](image_user_layer._internal_.AnnotationPropertySerializer.md#constructor)

### Properties

- [deserialize](image_user_layer._internal_.AnnotationPropertySerializer.md#deserialize)
- [propertySpecs](image_user_layer._internal_.AnnotationPropertySerializer.md#propertyspecs)
- [rank](image_user_layer._internal_.AnnotationPropertySerializer.md#rank)
- [serialize](image_user_layer._internal_.AnnotationPropertySerializer.md#serialize)
- [serializedBytes](image_user_layer._internal_.AnnotationPropertySerializer.md#serializedbytes)

## Constructors

### constructor

• **new AnnotationPropertySerializer**(`rank`, `propertySpecs`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rank` | `number` |
| `propertySpecs` | readonly [`Readonly`](../modules/coordinate_transform._internal_.md#readonly)<[`AnnotationPropertySpec`](../modules/image_user_layer._internal_.md#annotationpropertyspec)\>[] |

#### Defined in

[src/neuroglancer/annotation/index.ts:328](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L328)

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

[src/neuroglancer/annotation/index.ts:326](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L326)

___

### propertySpecs

• **propertySpecs**: readonly [`Readonly`](../modules/coordinate_transform._internal_.md#readonly)<[`AnnotationPropertySpec`](../modules/image_user_layer._internal_.md#annotationpropertyspec)\>[]

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

[src/neuroglancer/annotation/index.ts:325](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L325)

___

### serializedBytes

• **serializedBytes**: `number`

#### Defined in

[src/neuroglancer/annotation/index.ts:324](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/index.ts#L324)
