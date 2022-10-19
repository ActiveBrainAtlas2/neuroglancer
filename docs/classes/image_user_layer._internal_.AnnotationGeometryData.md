[neuroglancer](../README.md) / [Modules](../modules.md) / [image\_user\_layer](../modules/image_user_layer.md) / [<internal\>](../modules/image_user_layer._internal_.md) / AnnotationGeometryData

# Class: AnnotationGeometryData

[image_user_layer](../modules/image_user_layer.md).[<internal>](../modules/image_user_layer._internal_.md).AnnotationGeometryData

## Table of contents

### Constructors

- [constructor](image_user_layer._internal_.AnnotationGeometryData.md#constructor)

### Properties

- [buffer](image_user_layer._internal_.AnnotationGeometryData.md#buffer)
- [bufferValid](image_user_layer._internal_.AnnotationGeometryData.md#buffervalid)
- [numPickIds](image_user_layer._internal_.AnnotationGeometryData.md#numpickids)
- [serializedAnnotations](image_user_layer._internal_.AnnotationGeometryData.md#serializedannotations)

### Methods

- [freeGPUMemory](image_user_layer._internal_.AnnotationGeometryData.md#freegpumemory)

## Constructors

### constructor

• **new AnnotationGeometryData**(`x`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`SerializedAnnotations`](../interfaces/image_user_layer._internal_.SerializedAnnotations.md) |

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L54)

## Properties

### buffer

• **buffer**: `undefined` \| [`Buffer`](axes_lines._internal_.Buffer.md)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L49)

___

### bufferValid

• **bufferValid**: `boolean` = `false`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L50)

___

### numPickIds

• **numPickIds**: `number` = `0`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L52)

___

### serializedAnnotations

• **serializedAnnotations**: [`SerializedAnnotations`](../interfaces/image_user_layer._internal_.SerializedAnnotations.md)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L51)

## Methods

### freeGPUMemory

▸ **freeGPUMemory**(`gl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/axes_lines._internal_.GL.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:62](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L62)
