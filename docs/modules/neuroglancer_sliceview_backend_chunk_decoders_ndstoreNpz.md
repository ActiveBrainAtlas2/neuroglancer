[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/sliceview/backend\_chunk\_decoders/ndstoreNpz

# Module: neuroglancer/sliceview/backend\_chunk\_decoders/ndstoreNpz

## Table of contents

### Functions

- [decodeNdstoreNpzChunk](neuroglancer_sliceview_backend_chunk_decoders_ndstoreNpz.md#decodendstorenpzchunk)

## Functions

### decodeNdstoreNpzChunk

▸ **decodeNdstoreNpzChunk**(`chunk`, `cancellationToken`, `response`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`VolumeChunk`](../classes/neuroglancer_sliceview_volume_backend.VolumeChunk.md) |
| `cancellationToken` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) |
| `response` | `ArrayBuffer` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/neuroglancer/sliceview/backend_chunk_decoders/ndstoreNpz.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/backend_chunk_decoders/ndstoreNpz.ts#L34)
