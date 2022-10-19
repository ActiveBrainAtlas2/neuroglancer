[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/sliceview/backend\_chunk\_decoders/raw

# Module: neuroglancer/sliceview/backend\_chunk\_decoders/raw

## Table of contents

### Functions

- [decodeRawChunk](neuroglancer_sliceview_backend_chunk_decoders_raw.md#decoderawchunk)

## Functions

### decodeRawChunk

▸ **decodeRawChunk**(`chunk`, `cancellationToken`, `response`, `endianness?`, `byteOffset?`, `byteLength?`): `Promise`<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `chunk` | [`VolumeChunk`](../classes/neuroglancer_sliceview_volume_backend.VolumeChunk.md) | `undefined` |
| `cancellationToken` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) | `undefined` |
| `response` | `ArrayBuffer` | `undefined` |
| `endianness` | [`Endianness`](../enums/neuroglancer_util_endian.Endianness.md) | `ENDIANNESS` |
| `byteOffset` | `number` | `0` |
| `byteLength` | `number` | `response.byteLength` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/neuroglancer/sliceview/backend_chunk_decoders/raw.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/backend_chunk_decoders/raw.ts#L24)
