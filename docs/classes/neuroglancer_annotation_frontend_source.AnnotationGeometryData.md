[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/annotation/frontend\_source](../modules/neuroglancer_annotation_frontend_source.md) / AnnotationGeometryData

# Class: AnnotationGeometryData

[neuroglancer/annotation/frontend_source](../modules/neuroglancer_annotation_frontend_source.md).AnnotationGeometryData

## Table of contents

### Constructors

- [constructor](neuroglancer_annotation_frontend_source.AnnotationGeometryData.md#constructor)

### Properties

- [buffer](neuroglancer_annotation_frontend_source.AnnotationGeometryData.md#buffer)
- [bufferValid](neuroglancer_annotation_frontend_source.AnnotationGeometryData.md#buffervalid)
- [numPickIds](neuroglancer_annotation_frontend_source.AnnotationGeometryData.md#numpickids)
- [serializedAnnotations](neuroglancer_annotation_frontend_source.AnnotationGeometryData.md#serializedannotations)

### Methods

- [freeGPUMemory](neuroglancer_annotation_frontend_source.AnnotationGeometryData.md#freegpumemory)

## Constructors

### constructor

• **new AnnotationGeometryData**(`x`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`SerializedAnnotations`](../interfaces/neuroglancer_annotation.SerializedAnnotations.md) |

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L54)

## Properties

### buffer

• **buffer**: `undefined` \| [`Buffer`](neuroglancer_webgl_buffer.Buffer.md)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L49)

___

### bufferValid

• **bufferValid**: `boolean` = `false`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L50)

___

### numPickIds

• **numPickIds**: `number` = `0`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L52)

___

### serializedAnnotations

• **serializedAnnotations**: [`SerializedAnnotations`](../interfaces/neuroglancer_annotation.SerializedAnnotations.md)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L51)

## Methods

### freeGPUMemory

▸ **freeGPUMemory**(`gl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:62](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L62)
