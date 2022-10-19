[neuroglancer](../README.md) / [Modules](../modules.md) / [sliceview/frontend](../modules/sliceview_frontend.md) / MultiscaleSliceViewChunkSource

# Class: MultiscaleSliceViewChunkSource<Source, SourceOptions\>

[sliceview/frontend](../modules/sliceview_frontend.md).MultiscaleSliceViewChunkSource

## Type parameters

| Name | Type |
| :------ | :------ |
| `Source` | extends [`SliceViewChunkSource`](sliceview_frontend.SliceViewChunkSource.md) = [`SliceViewChunkSource`](sliceview_frontend.SliceViewChunkSource.md) |
| `SourceOptions` | extends [`SliceViewSourceOptions`](../interfaces/sliceview_base.SliceViewSourceOptions.md) = [`SliceViewSourceOptions`](../interfaces/sliceview_base.SliceViewSourceOptions.md) |

## Hierarchy

- **`MultiscaleSliceViewChunkSource`**

  ↳ [`MultiscaleVolumeChunkSource`](datasource._internal_.MultiscaleVolumeChunkSource.md)

## Implemented by

- [`MultiscaleAnnotationSource`](annotation_frontend_source.MultiscaleAnnotationSource.md)

## Table of contents

### Constructors

- [constructor](sliceview_frontend.MultiscaleSliceViewChunkSource.md#constructor)

### Properties

- [chunkManager](sliceview_frontend.MultiscaleSliceViewChunkSource.md#chunkmanager)

### Accessors

- [rank](sliceview_frontend.MultiscaleSliceViewChunkSource.md#rank)

### Methods

- [getSources](sliceview_frontend.MultiscaleSliceViewChunkSource.md#getsources)

## Constructors

### constructor

• **new MultiscaleSliceViewChunkSource**<`Source`, `SourceOptions`\>(`chunkManager`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Source` | extends [`SliceViewChunkSource`](sliceview_frontend.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](sliceview_frontend.SliceViewChunk.md), `Source`\> = [`SliceViewChunkSource`](sliceview_frontend.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](sliceview_frontend.SliceViewChunk.md)\> |
| `SourceOptions` | extends [`SliceViewSourceOptions`](../interfaces/sliceview_base.SliceViewSourceOptions.md) = [`SliceViewSourceOptions`](../interfaces/sliceview_base.SliceViewSourceOptions.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](chunk_manager_frontend.ChunkManager.md) |

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:609](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L609)

## Properties

### chunkManager

• **chunkManager**: [`ChunkManager`](chunk_manager_frontend.ChunkManager.md)

## Accessors

### rank

• `Abstract` `get` **rank**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:599](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L599)

## Methods

### getSources

▸ `Abstract` **getSources**(`options`): [`SliceViewSingleResolutionSource`](../interfaces/sliceview_frontend.SliceViewSingleResolutionSource.md)<`Source`\>[][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `SourceOptions` |

#### Returns

[`SliceViewSingleResolutionSource`](../interfaces/sliceview_frontend.SliceViewSingleResolutionSource.md)<`Source`\>[][]

Chunk sources for each scale, ordered by increasing minVoxelSize.  Outer array indexes
over alternative chunk orientations.  The inner array indexes over scale.

Every chunk source must have rank equal to `this.rank`.

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:607](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L607)
