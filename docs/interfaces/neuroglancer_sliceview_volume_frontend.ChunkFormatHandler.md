[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/volume/frontend](../modules/neuroglancer_sliceview_volume_frontend.md) / ChunkFormatHandler

# Interface: ChunkFormatHandler

[neuroglancer/sliceview/volume/frontend](../modules/neuroglancer_sliceview_volume_frontend.md).ChunkFormatHandler

## Hierarchy

- [`Disposable`](neuroglancer_util_disposable.Disposable.md)

  ↳ **`ChunkFormatHandler`**

## Implemented by

- [`CompressedSegmentationChunkFormatHandler`](../classes/neuroglancer_sliceview_compressed_segmentation_chunk_format.CompressedSegmentationChunkFormatHandler.md)
- [`UncompressedChunkFormatHandler`](../classes/neuroglancer_sliceview_uncompressed_chunk_format.UncompressedChunkFormatHandler.md)

## Table of contents

### Properties

- [chunkFormat](neuroglancer_sliceview_volume_frontend.ChunkFormatHandler.md#chunkformat)

### Methods

- [dispose](neuroglancer_sliceview_volume_frontend.ChunkFormatHandler.md#dispose)
- [getChunk](neuroglancer_sliceview_volume_frontend.ChunkFormatHandler.md#getchunk)

## Properties

### chunkFormat

• **chunkFormat**: [`ChunkFormat`](neuroglancer_sliceview_volume_frontend.ChunkFormat.md)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:126](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/frontend.ts#L126)

## Methods

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[Disposable](neuroglancer_util_disposable.Disposable.md).[dispose](neuroglancer_util_disposable.Disposable.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:17](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L17)

___

### getChunk

▸ **getChunk**(`source`, `x`): [`SliceViewChunk`](../classes/neuroglancer_sliceview_frontend.SliceViewChunk.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`SliceViewChunkSource`](../classes/neuroglancer_sliceview_frontend.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](neuroglancer_sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](../classes/neuroglancer_sliceview_frontend.SliceViewChunk.md)\> |
| `x` | `any` |

#### Returns

[`SliceViewChunk`](../classes/neuroglancer_sliceview_frontend.SliceViewChunk.md)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:127](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/frontend.ts#L127)
