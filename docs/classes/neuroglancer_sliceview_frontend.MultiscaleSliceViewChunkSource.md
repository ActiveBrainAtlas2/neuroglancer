[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/frontend](../modules/neuroglancer_sliceview_frontend.md) / MultiscaleSliceViewChunkSource

# Class: MultiscaleSliceViewChunkSource<Source, SourceOptions\>

[neuroglancer/sliceview/frontend](../modules/neuroglancer_sliceview_frontend.md).MultiscaleSliceViewChunkSource

## Type parameters

| Name | Type |
| :------ | :------ |
| `Source` | extends [`SliceViewChunkSource`](neuroglancer_sliceview_frontend.SliceViewChunkSource.md) = [`SliceViewChunkSource`](neuroglancer_sliceview_frontend.SliceViewChunkSource.md) |
| `SourceOptions` | extends [`SliceViewSourceOptions`](../interfaces/neuroglancer_sliceview_base.SliceViewSourceOptions.md) = [`SliceViewSourceOptions`](../interfaces/neuroglancer_sliceview_base.SliceViewSourceOptions.md) |

## Hierarchy

- **`MultiscaleSliceViewChunkSource`**

  ↳ [`MultiscaleVolumeChunkSource`](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md)

## Implemented by

- [`MultiscaleAnnotationSource`](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_sliceview_frontend.MultiscaleSliceViewChunkSource.md#constructor)

### Properties

- [chunkManager](neuroglancer_sliceview_frontend.MultiscaleSliceViewChunkSource.md#chunkmanager)

### Accessors

- [rank](neuroglancer_sliceview_frontend.MultiscaleSliceViewChunkSource.md#rank)

### Methods

- [getSources](neuroglancer_sliceview_frontend.MultiscaleSliceViewChunkSource.md#getsources)

## Constructors

### constructor

• **new MultiscaleSliceViewChunkSource**<`Source`, `SourceOptions`\>(`chunkManager`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Source` | extends [`SliceViewChunkSource`](neuroglancer_sliceview_frontend.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](neuroglancer_sliceview_frontend.SliceViewChunk.md), `Source`\> = [`SliceViewChunkSource`](neuroglancer_sliceview_frontend.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](neuroglancer_sliceview_frontend.SliceViewChunk.md)\> |
| `SourceOptions` | extends [`SliceViewSourceOptions`](../interfaces/neuroglancer_sliceview_base.SliceViewSourceOptions.md) = [`SliceViewSourceOptions`](../interfaces/neuroglancer_sliceview_base.SliceViewSourceOptions.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md) |

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:609](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/frontend.ts#L609)

## Properties

### chunkManager

• **chunkManager**: [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md)

## Accessors

### rank

• `Abstract` `get` **rank**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:599](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/frontend.ts#L599)

## Methods

### getSources

▸ `Abstract` **getSources**(`options`): [`SliceViewSingleResolutionSource`](../interfaces/neuroglancer_sliceview_frontend.SliceViewSingleResolutionSource.md)<`Source`\>[][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `SourceOptions` |

#### Returns

[`SliceViewSingleResolutionSource`](../interfaces/neuroglancer_sliceview_frontend.SliceViewSingleResolutionSource.md)<`Source`\>[][]

Chunk sources for each scale, ordered by increasing minVoxelSize.  Outer array indexes
over alternative chunk orientations.  The inner array indexes over scale.

Every chunk source must have rank equal to `this.rank`.

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:607](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/frontend.ts#L607)
