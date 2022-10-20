[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/sliceview/backend\_chunk\_decoders

# Module: neuroglancer/sliceview/backend\_chunk\_decoders

## Table of contents

### Type Aliases

- [ChunkDecoder](neuroglancer_sliceview_backend_chunk_decoders.md#chunkdecoder)

## Type Aliases

### ChunkDecoder

Ƭ **ChunkDecoder**: (`chunk`: [`VolumeChunk`](../classes/neuroglancer_sliceview_volume_backend.VolumeChunk.md), `cancellationToken`: [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md), `response`: `ArrayBuffer`) => `Promise`<`void`\>

#### Type declaration

▸ (`chunk`, `cancellationToken`, `response`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`VolumeChunk`](../classes/neuroglancer_sliceview_volume_backend.VolumeChunk.md) |
| `cancellationToken` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) |
| `response` | `ArrayBuffer` |

##### Returns

`Promise`<`void`\>

#### Defined in

[src/neuroglancer/sliceview/backend_chunk_decoders/index.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/backend_chunk_decoders/index.ts#L24)
