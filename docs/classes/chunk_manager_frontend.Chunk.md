[neuroglancer](../README.md) / [Modules](../modules.md) / [chunk\_manager/frontend](../modules/chunk_manager_frontend.md) / Chunk

# Class: Chunk

[chunk_manager/frontend](../modules/chunk_manager_frontend.md).Chunk

## Hierarchy

- **`Chunk`**

  ↳ [`AnnotationSubsetGeometryChunk`](annotation_frontend_source.AnnotationSubsetGeometryChunk.md)

  ↳ [`AnnotationMetadataChunk`](annotation_frontend_source.AnnotationMetadataChunk.md)

  ↳ [`ManifestChunk`](mesh_frontend.ManifestChunk.md)

  ↳ [`FragmentChunk`](mesh_frontend.FragmentChunk.md)

  ↳ [`MultiscaleManifestChunk`](mesh_frontend.MultiscaleManifestChunk.md)

  ↳ [`MultiscaleFragmentChunk`](mesh_frontend.MultiscaleFragmentChunk.md)

  ↳ [`SingleMeshChunk`](single_mesh_frontend.SingleMeshChunk.md)

  ↳ [`SkeletonChunk`](skeleton_frontend.SkeletonChunk.md)

  ↳ [`SliceViewChunk`](sliceview_frontend.SliceViewChunk.md)

## Table of contents

### Constructors

- [constructor](chunk_manager_frontend.Chunk.md#constructor)

### Properties

- [source](chunk_manager_frontend.Chunk.md#source)
- [state](chunk_manager_frontend.Chunk.md#state)

### Accessors

- [gl](chunk_manager_frontend.Chunk.md#gl)

### Methods

- [copyToGPU](chunk_manager_frontend.Chunk.md#copytogpu)
- [freeGPUMemory](chunk_manager_frontend.Chunk.md#freegpumemory)

## Constructors

### constructor

• **new Chunk**(`source`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`ChunkSource`](chunk_manager_frontend.ChunkSource.md) |

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L34)

## Properties

### source

• **source**: [`ChunkSource`](chunk_manager_frontend.ChunkSource.md)

___

### state

• **state**: [`ChunkState`](../enums/chunk_manager_base.ChunkState.md) = `ChunkState.SYSTEM_MEMORY`

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L33)

## Accessors

### gl

• `get` **gl**(): [`GL`](../interfaces/webgl_context.GL.md)

#### Returns

[`GL`](../interfaces/webgl_context.GL.md)

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

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:44](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L44)
