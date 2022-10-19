[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/sliceview/backend\_chunk\_decoders/jpeg

# Module: neuroglancer/sliceview/backend\_chunk\_decoders/jpeg

## Table of contents

### Functions

- [decodeJpegChunk](neuroglancer_sliceview_backend_chunk_decoders_jpeg.md#decodejpegchunk)

## Functions

### decodeJpegChunk

▸ **decodeJpegChunk**(`chunk`, `cancellationToken`, `response`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`VolumeChunk`](../classes/neuroglancer_sliceview_volume_backend.VolumeChunk.md) |
| `cancellationToken` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) |
| `response` | `ArrayBuffer` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/neuroglancer/sliceview/backend_chunk_decoders/jpeg.ts:23](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/backend_chunk_decoders/jpeg.ts#L23)
