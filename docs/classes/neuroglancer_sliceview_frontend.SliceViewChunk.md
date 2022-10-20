[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/frontend](../modules/neuroglancer_sliceview_frontend.md) / SliceViewChunk

# Class: SliceViewChunk

[neuroglancer/sliceview/frontend](../modules/neuroglancer_sliceview_frontend.md).SliceViewChunk

## Hierarchy

- [`Chunk`](neuroglancer_chunk_manager_frontend.Chunk.md)

  ↳ **`SliceViewChunk`**

  ↳↳ [`AnnotationGeometryChunk`](neuroglancer_annotation_frontend_source.AnnotationGeometryChunk.md)

  ↳↳ [`VolumeChunk`](neuroglancer_sliceview_volume_frontend.VolumeChunk.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_sliceview_frontend.SliceViewChunk.md#constructor)

### Properties

- [chunkGridPosition](neuroglancer_sliceview_frontend.SliceViewChunk.md#chunkgridposition)
- [source](neuroglancer_sliceview_frontend.SliceViewChunk.md#source)
- [state](neuroglancer_sliceview_frontend.SliceViewChunk.md#state)

### Accessors

- [gl](neuroglancer_sliceview_frontend.SliceViewChunk.md#gl)

### Methods

- [copyToGPU](neuroglancer_sliceview_frontend.SliceViewChunk.md#copytogpu)
- [freeGPUMemory](neuroglancer_sliceview_frontend.SliceViewChunk.md#freegpumemory)

## Constructors

### constructor

• **new SliceViewChunk**(`source`, `x`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`SliceViewChunkSource`](neuroglancer_sliceview_frontend.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](neuroglancer_sliceview_frontend.SliceViewChunk.md)\> |
| `x` | `any` |

#### Overrides

[Chunk](neuroglancer_chunk_manager_frontend.Chunk.md).[constructor](neuroglancer_chunk_manager_frontend.Chunk.md#constructor)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:492](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/frontend.ts#L492)

## Properties

### chunkGridPosition

• **chunkGridPosition**: [`vec3`](neuroglancer_util_geom.vec3.md)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:489](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/frontend.ts#L489)

___

### source

• **source**: [`SliceViewChunkSource`](neuroglancer_sliceview_frontend.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](neuroglancer_sliceview_frontend.SliceViewChunk.md)\>

#### Overrides

[Chunk](neuroglancer_chunk_manager_frontend.Chunk.md).[source](neuroglancer_chunk_manager_frontend.Chunk.md#source)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:490](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/frontend.ts#L490)

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
