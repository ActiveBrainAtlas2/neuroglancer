[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/chunk\_manager/frontend](../modules/neuroglancer_chunk_manager_frontend.md) / Chunk

# Class: Chunk

[neuroglancer/chunk_manager/frontend](../modules/neuroglancer_chunk_manager_frontend.md).Chunk

## Hierarchy

- **`Chunk`**

  ↳ [`AnnotationSubsetGeometryChunk`](neuroglancer_annotation_frontend_source.AnnotationSubsetGeometryChunk.md)

  ↳ [`AnnotationMetadataChunk`](neuroglancer_annotation_frontend_source.AnnotationMetadataChunk.md)

  ↳ [`ManifestChunk`](neuroglancer_mesh_frontend.ManifestChunk.md)

  ↳ [`FragmentChunk`](neuroglancer_mesh_frontend.FragmentChunk.md)

  ↳ [`MultiscaleManifestChunk`](neuroglancer_mesh_frontend.MultiscaleManifestChunk.md)

  ↳ [`MultiscaleFragmentChunk`](neuroglancer_mesh_frontend.MultiscaleFragmentChunk.md)

  ↳ [`SingleMeshChunk`](neuroglancer_single_mesh_frontend.SingleMeshChunk.md)

  ↳ [`SkeletonChunk`](neuroglancer_skeleton_frontend.SkeletonChunk.md)

  ↳ [`SliceViewChunk`](neuroglancer_sliceview_frontend.SliceViewChunk.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_chunk_manager_frontend.Chunk.md#constructor)

### Properties

- [source](neuroglancer_chunk_manager_frontend.Chunk.md#source)
- [state](neuroglancer_chunk_manager_frontend.Chunk.md#state)

### Accessors

- [gl](neuroglancer_chunk_manager_frontend.Chunk.md#gl)

### Methods

- [copyToGPU](neuroglancer_chunk_manager_frontend.Chunk.md#copytogpu)
- [freeGPUMemory](neuroglancer_chunk_manager_frontend.Chunk.md#freegpumemory)

## Constructors

### constructor

• **new Chunk**(`source`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`ChunkSource`](neuroglancer_chunk_manager_frontend.ChunkSource.md) |

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L34)

## Properties

### source

• **source**: [`ChunkSource`](neuroglancer_chunk_manager_frontend.ChunkSource.md)

___

### state

• **state**: [`ChunkState`](../enums/neuroglancer_chunk_manager_base.ChunkState.md) = `ChunkState.SYSTEM_MEMORY`

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L33)

## Accessors

### gl

• `get` **gl**(): [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Returns

[`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

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

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L40)

___

### freeGPUMemory

▸ **freeGPUMemory**(`_gl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:44](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L44)
