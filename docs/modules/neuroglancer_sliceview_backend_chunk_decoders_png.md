[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/sliceview/backend\_chunk\_decoders/png

# Module: neuroglancer/sliceview/backend\_chunk\_decoders/png

## Table of contents

### Functions

- [decodePngChunk](neuroglancer_sliceview_backend_chunk_decoders_png.md#decodepngchunk)

## Functions

### decodePngChunk

▸ **decodePngChunk**(`chunk`, `cancellationToken`, `response`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`VolumeChunk`](../classes/neuroglancer_sliceview_volume_backend.VolumeChunk.md) |
| `cancellationToken` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) |
| `response` | `ArrayBuffer` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/neuroglancer/sliceview/backend_chunk_decoders/png.ts:25](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/backend_chunk_decoders/png.ts#L25)
