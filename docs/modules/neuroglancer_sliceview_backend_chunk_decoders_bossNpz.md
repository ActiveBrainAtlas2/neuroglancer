[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/sliceview/backend\_chunk\_decoders/bossNpz

# Module: neuroglancer/sliceview/backend\_chunk\_decoders/bossNpz

## Table of contents

### Functions

- [decodeBossNpzChunk](neuroglancer_sliceview_backend_chunk_decoders_bossNpz.md#decodebossnpzchunk)

## Functions

### decodeBossNpzChunk

▸ **decodeBossNpzChunk**(`chunk`, `cancellationToken`, `response`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`VolumeChunk`](../classes/neuroglancer_sliceview_volume_backend.VolumeChunk.md) |
| `cancellationToken` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) |
| `response` | `ArrayBuffer` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/neuroglancer/sliceview/backend_chunk_decoders/bossNpz.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/backend_chunk_decoders/bossNpz.ts#L34)
