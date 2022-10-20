[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/sliceview/backend\_chunk\_decoders/compressed\_segmentation

# Module: neuroglancer/sliceview/backend\_chunk\_decoders/compressed\_segmentation

## Table of contents

### Functions

- [decodeCompressedSegmentationChunk](neuroglancer_sliceview_backend_chunk_decoders_compressed_segmentation.md#decodecompressedsegmentationchunk)

## Functions

### decodeCompressedSegmentationChunk

▸ **decodeCompressedSegmentationChunk**(`chunk`, `cancellationToken`, `response`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`VolumeChunk`](../classes/neuroglancer_sliceview_volume_backend.VolumeChunk.md) |
| `cancellationToken` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) |
| `response` | `ArrayBuffer` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/neuroglancer/sliceview/backend_chunk_decoders/compressed_segmentation.ts:20](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/backend_chunk_decoders/compressed_segmentation.ts#L20)
