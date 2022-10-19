[neuroglancer](../README.md) / [Modules](../modules.md) / [data\_panel\_layout](../modules/data_panel_layout.md) / [<internal\>](../modules/data_panel_layout._internal_.md) / Chunk

# Class: Chunk

[data_panel_layout](../modules/data_panel_layout.md).[<internal>](../modules/data_panel_layout._internal_.md).Chunk

## Hierarchy

- **`Chunk`**

  ↳ [`SliceViewChunk`](data_panel_layout._internal_.SliceViewChunk.md)

  ↳ [`AnnotationSubsetGeometryChunk`](image_user_layer._internal_.AnnotationSubsetGeometryChunk.md)

  ↳ [`AnnotationMetadataChunk`](image_user_layer._internal_.AnnotationMetadataChunk.md)

  ↳ [`SkeletonChunk`](layer._internal_.SkeletonChunk.md)

  ↳ [`ManifestChunk`](layer._internal_.ManifestChunk.md)

  ↳ [`MultiscaleManifestChunk`](layer._internal_.MultiscaleManifestChunk.md)

  ↳ [`SingleMeshChunk`](layer._internal_.SingleMeshChunk.md)

  ↳ [`FragmentChunk`](layer._internal_.FragmentChunk.md)

  ↳ [`MultiscaleFragmentChunk`](layer._internal_.MultiscaleFragmentChunk.md)

## Table of contents

### Constructors

- [constructor](data_panel_layout._internal_.Chunk.md#constructor)

### Properties

- [source](data_panel_layout._internal_.Chunk.md#source)
- [state](data_panel_layout._internal_.Chunk.md#state)

### Accessors

- [gl](data_panel_layout._internal_.Chunk.md#gl)

### Methods

- [copyToGPU](data_panel_layout._internal_.Chunk.md#copytogpu)
- [freeGPUMemory](data_panel_layout._internal_.Chunk.md#freegpumemory)

## Constructors

### constructor

• **new Chunk**(`source`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`ChunkSource`](data_panel_layout._internal_.ChunkSource.md) |

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L34)

## Properties

### source

• **source**: [`ChunkSource`](data_panel_layout._internal_.ChunkSource.md)

___

### state

• **state**: [`ChunkState`](../enums/data_panel_layout._internal_.ChunkState.md) = `ChunkState.SYSTEM_MEMORY`

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L33)

## Accessors

### gl

• `get` **gl**(): [`GL`](../interfaces/axes_lines._internal_.GL.md)

#### Returns

[`GL`](../interfaces/axes_lines._internal_.GL.md)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L36)

## Methods

### copyToGPU

▸ **copyToGPU**(`_gl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_gl` | [`GL`](../interfaces/axes_lines._internal_.GL.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L40)

___

### freeGPUMemory

▸ **freeGPUMemory**(`_gl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_gl` | [`GL`](../interfaces/axes_lines._internal_.GL.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:44](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L44)
