[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/annotation/frontend\_source](../modules/neuroglancer_annotation_frontend_source.md) / AnnotationMetadataChunk

# Class: AnnotationMetadataChunk

[neuroglancer/annotation/frontend_source](../modules/neuroglancer_annotation_frontend_source.md).AnnotationMetadataChunk

## Hierarchy

- [`Chunk`](neuroglancer_chunk_manager_frontend.Chunk.md)

  ↳ **`AnnotationMetadataChunk`**

## Table of contents

### Constructors

- [constructor](neuroglancer_annotation_frontend_source.AnnotationMetadataChunk.md#constructor)

### Properties

- [annotation](neuroglancer_annotation_frontend_source.AnnotationMetadataChunk.md#annotation)
- [source](neuroglancer_annotation_frontend_source.AnnotationMetadataChunk.md#source)
- [state](neuroglancer_annotation_frontend_source.AnnotationMetadataChunk.md#state)

### Accessors

- [gl](neuroglancer_annotation_frontend_source.AnnotationMetadataChunk.md#gl)

### Methods

- [copyToGPU](neuroglancer_annotation_frontend_source.AnnotationMetadataChunk.md#copytogpu)
- [freeGPUMemory](neuroglancer_annotation_frontend_source.AnnotationMetadataChunk.md#freegpumemory)

## Constructors

### constructor

• **new AnnotationMetadataChunk**(`source`, `x`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`AnnotationMetadataChunkSource`](neuroglancer_annotation_frontend_source.AnnotationMetadataChunkSource.md) |
| `x` | `any` |

#### Overrides

[Chunk](neuroglancer_chunk_manager_frontend.Chunk.md).[constructor](neuroglancer_chunk_manager_frontend.Chunk.md#constructor)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:196](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L196)

## Properties

### annotation

• **annotation**: ``null`` \| [`Annotation`](../modules/neuroglancer_annotation.md#annotation)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:195](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L195)

___

### source

• **source**: [`ChunkSource`](neuroglancer_chunk_manager_frontend.ChunkSource.md)

#### Inherited from

[Chunk](neuroglancer_chunk_manager_frontend.Chunk.md).[source](neuroglancer_chunk_manager_frontend.Chunk.md#source)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L34)

___

### state

• **state**: [`ChunkState`](../enums/neuroglancer_chunk_manager_base.ChunkState.md) = `ChunkState.SYSTEM_MEMORY`

#### Inherited from

[Chunk](neuroglancer_chunk_manager_frontend.Chunk.md).[state](neuroglancer_chunk_manager_frontend.Chunk.md#state)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L33)

## Accessors

### gl

• `get` **gl**(): [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Returns

[`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Inherited from

Chunk.gl

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L36)

## Methods

### copyToGPU

▸ **copyToGPU**(`_gl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |

#### Returns

`void`

#### Inherited from

[Chunk](neuroglancer_chunk_manager_frontend.Chunk.md).[copyToGPU](neuroglancer_chunk_manager_frontend.Chunk.md#copytogpu)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L40)

___

### freeGPUMemory

▸ **freeGPUMemory**(`_gl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |

#### Returns

`void`

#### Inherited from

[Chunk](neuroglancer_chunk_manager_frontend.Chunk.md).[freeGPUMemory](neuroglancer_chunk_manager_frontend.Chunk.md#freegpumemory)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:44](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L44)
