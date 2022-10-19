[neuroglancer](../README.md) / [Modules](../modules.md) / [sliceview/frontend](../modules/sliceview_frontend.md) / SliceViewChunk

# Class: SliceViewChunk

[sliceview/frontend](../modules/sliceview_frontend.md).SliceViewChunk

## Hierarchy

- [`Chunk`](chunk_manager_frontend.Chunk.md)

  ↳ **`SliceViewChunk`**

  ↳↳ [`AnnotationGeometryChunk`](annotation_frontend_source.AnnotationGeometryChunk.md)

  ↳↳ [`VolumeChunk`](datasource._internal_.VolumeChunk.md)

## Table of contents

### Constructors

- [constructor](sliceview_frontend.SliceViewChunk.md#constructor)

### Properties

- [chunkGridPosition](sliceview_frontend.SliceViewChunk.md#chunkgridposition)
- [source](sliceview_frontend.SliceViewChunk.md#source)
- [state](sliceview_frontend.SliceViewChunk.md#state)

### Accessors

- [gl](sliceview_frontend.SliceViewChunk.md#gl)

### Methods

- [copyToGPU](sliceview_frontend.SliceViewChunk.md#copytogpu)
- [freeGPUMemory](sliceview_frontend.SliceViewChunk.md#freegpumemory)

## Constructors

### constructor

• **new SliceViewChunk**(`source`, `x`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`SliceViewChunkSource`](sliceview_frontend.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](sliceview_frontend.SliceViewChunk.md)\> |
| `x` | `any` |

#### Overrides

[Chunk](chunk_manager_frontend.Chunk.md).[constructor](chunk_manager_frontend.Chunk.md#constructor)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:492](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L492)

## Properties

### chunkGridPosition

• **chunkGridPosition**: [`vec3`](util_geom.vec3.md)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:489](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L489)

___

### source

• **source**: [`SliceViewChunkSource`](sliceview_frontend.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](sliceview_frontend.SliceViewChunk.md)\>

#### Overrides

[Chunk](chunk_manager_frontend.Chunk.md).[source](chunk_manager_frontend.Chunk.md#source)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:490](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L490)

___

### state

• **state**: [`ChunkState`](../enums/chunk_manager_base.ChunkState.md) = `ChunkState.SYSTEM_MEMORY`

#### Inherited from

[Chunk](chunk_manager_frontend.Chunk.md).[state](chunk_manager_frontend.Chunk.md#state)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L33)

## Accessors

### gl

• `get` **gl**(): [`GL`](../interfaces/webgl_context.GL.md)

#### Returns

[`GL`](../interfaces/webgl_context.GL.md)

#### Inherited from

Chunk.gl

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L36)

## Methods

### copyToGPU

▸ **copyToGPU**(`_gl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_gl` | [`GL`](../interfaces/webgl_context.GL.md) |

#### Returns

`void`

#### Inherited from

[Chunk](chunk_manager_frontend.Chunk.md).[copyToGPU](chunk_manager_frontend.Chunk.md#copytogpu)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L40)

___

### freeGPUMemory

▸ **freeGPUMemory**(`_gl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_gl` | [`GL`](../interfaces/webgl_context.GL.md) |

#### Returns

`void`

#### Inherited from

[Chunk](chunk_manager_frontend.Chunk.md).[freeGPUMemory](chunk_manager_frontend.Chunk.md#freegpumemory)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:44](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L44)
