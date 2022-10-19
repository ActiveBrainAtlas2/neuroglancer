[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/frontend\_source](../modules/annotation_frontend_source.md) / AnnotationGeometryData

# Class: AnnotationGeometryData

[annotation/frontend_source](../modules/annotation_frontend_source.md).AnnotationGeometryData

## Table of contents

### Constructors

- [constructor](annotation_frontend_source.AnnotationGeometryData.md#constructor)

### Properties

- [buffer](annotation_frontend_source.AnnotationGeometryData.md#buffer)
- [bufferValid](annotation_frontend_source.AnnotationGeometryData.md#buffervalid)
- [numPickIds](annotation_frontend_source.AnnotationGeometryData.md#numpickids)
- [serializedAnnotations](annotation_frontend_source.AnnotationGeometryData.md#serializedannotations)

### Methods

- [freeGPUMemory](annotation_frontend_source.AnnotationGeometryData.md#freegpumemory)

## Constructors

### constructor

• **new AnnotationGeometryData**(`x`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`SerializedAnnotations`](../interfaces/annotation.SerializedAnnotations.md) |

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L54)

## Properties

### buffer

• **buffer**: `undefined` \| [`Buffer`](webgl_buffer.Buffer.md)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L49)

___

### bufferValid

• **bufferValid**: `boolean` = `false`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L50)

___

### numPickIds

• **numPickIds**: `number` = `0`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L52)

___

### serializedAnnotations

• **serializedAnnotations**: [`SerializedAnnotations`](../interfaces/annotation.SerializedAnnotations.md)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L51)

## Methods

### freeGPUMemory

▸ **freeGPUMemory**(`gl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:62](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L62)
