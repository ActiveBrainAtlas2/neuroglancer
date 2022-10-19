[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/annotation/frontend\_source](../modules/neuroglancer_annotation_frontend_source.md) / AnnotationSubsetGeometryChunk

# Class: AnnotationSubsetGeometryChunk

[neuroglancer/annotation/frontend_source](../modules/neuroglancer_annotation_frontend_source.md).AnnotationSubsetGeometryChunk

## Hierarchy

- [`Chunk`](neuroglancer_chunk_manager_frontend.Chunk.md)

  ↳ **`AnnotationSubsetGeometryChunk`**

## Table of contents

### Constructors

- [constructor](neuroglancer_annotation_frontend_source.AnnotationSubsetGeometryChunk.md#constructor)

### Properties

- [data](neuroglancer_annotation_frontend_source.AnnotationSubsetGeometryChunk.md#data)
- [source](neuroglancer_annotation_frontend_source.AnnotationSubsetGeometryChunk.md#source)
- [state](neuroglancer_annotation_frontend_source.AnnotationSubsetGeometryChunk.md#state)

### Accessors

- [gl](neuroglancer_annotation_frontend_source.AnnotationSubsetGeometryChunk.md#gl)

### Methods

- [copyToGPU](neuroglancer_annotation_frontend_source.AnnotationSubsetGeometryChunk.md#copytogpu)
- [dispose](neuroglancer_annotation_frontend_source.AnnotationSubsetGeometryChunk.md#dispose)
- [freeGPUMemory](neuroglancer_annotation_frontend_source.AnnotationSubsetGeometryChunk.md#freegpumemory)

## Constructors

### constructor

• **new AnnotationSubsetGeometryChunk**(`source`, `x`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`AnnotationSubsetGeometryChunkSource`](neuroglancer_annotation_frontend_source.AnnotationSubsetGeometryChunkSource.md) |
| `x` | `any` |

#### Overrides

[Chunk](neuroglancer_chunk_manager_frontend.Chunk.md).[constructor](neuroglancer_chunk_manager_frontend.Chunk.md#constructor)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/frontend_source.ts#L77)

## Properties

### data

• **data**: `undefined` \| [`AnnotationGeometryData`](neuroglancer_annotation_frontend_source.AnnotationGeometryData.md)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/frontend_source.ts#L76)

___

### source

• **source**: [`AnnotationSubsetGeometryChunkSource`](neuroglancer_annotation_frontend_source.AnnotationSubsetGeometryChunkSource.md)

#### Overrides

[Chunk](neuroglancer_chunk_manager_frontend.Chunk.md).[source](neuroglancer_chunk_manager_frontend.Chunk.md#source)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/frontend_source.ts#L74)

___

### state

• **state**: [`ChunkState`](../enums/neuroglancer_chunk_manager_base.ChunkState.md) = `ChunkState.SYSTEM_MEMORY`

#### Inherited from

[Chunk](neuroglancer_chunk_manager_frontend.Chunk.md).[state](neuroglancer_chunk_manager_frontend.Chunk.md#state)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L33)

## Accessors

### gl

• `get` **gl**(): [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Returns

[`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Inherited from

Chunk.gl

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L36)

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

[src/neuroglancer/chunk_manager/frontend.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L40)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/frontend_source.ts#L92)

___

### freeGPUMemory

▸ **freeGPUMemory**(`gl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |

#### Returns

`void`

#### Overrides

[Chunk](neuroglancer_chunk_manager_frontend.Chunk.md).[freeGPUMemory](neuroglancer_chunk_manager_frontend.Chunk.md#freegpumemory)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/frontend_source.ts#L84)
