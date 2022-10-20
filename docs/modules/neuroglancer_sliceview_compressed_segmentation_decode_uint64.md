[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/sliceview/compressed\_segmentation/decode\_uint64

# Module: neuroglancer/sliceview/compressed\_segmentation/decode\_uint64

## Table of contents

### Functions

- [decodeChannel](neuroglancer_sliceview_compressed_segmentation_decode_uint64.md#decodechannel)
- [decodeChannels](neuroglancer_sliceview_compressed_segmentation_decode_uint64.md#decodechannels)
- [readSingleChannelValue](neuroglancer_sliceview_compressed_segmentation_decode_uint64.md#readsinglechannelvalue)
- [readValue](neuroglancer_sliceview_compressed_segmentation_decode_uint64.md#readvalue)

## Functions

### decodeChannel

▸ **decodeChannel**(`out`, `data`, `baseOffset`, `chunkDataSize`, `blockSize`): `Uint32Array`

Decodes a single channel of a compressed segmentation.

This is not particularly efficient, because it is intended for testing purposes only.

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | `Uint32Array` |
| `data` | `Uint32Array` |
| `baseOffset` | `number` |
| `chunkDataSize` | [`ArrayLike`](../interfaces/neuroglancer_async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`number`\> |
| `blockSize` | [`ArrayLike`](../interfaces/neuroglancer_async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`number`\> |

#### Returns

`Uint32Array`

#### Defined in

[src/neuroglancer/sliceview/compressed_segmentation/decode_uint64.ts:80](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/compressed_segmentation/decode_uint64.ts#L80)

___

### decodeChannels

▸ **decodeChannels**(`out`, `data`, `baseOffset`, `chunkDataSize`, `blockSize`): `Uint32Array`

Decodes a multi-channel compressed segmentation.

This is not particularly efficient, because it is intended for testing purposes only.

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | `Uint32Array` |
| `data` | `Uint32Array` |
| `baseOffset` | `number` |
| `chunkDataSize` | [`ArrayLike`](../interfaces/neuroglancer_async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`number`\> |
| `blockSize` | [`ArrayLike`](../interfaces/neuroglancer_async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`number`\> |

#### Returns

`Uint32Array`

#### Defined in

[src/neuroglancer/sliceview/compressed_segmentation/decode_uint64.ts:116](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/compressed_segmentation/decode_uint64.ts#L116)

___

### readSingleChannelValue

▸ **readSingleChannelValue**(`out`, `data`, `baseOffset`, `chunkDataSize`, `blockSize`, `dataPosition`): [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md)

Reads the single value at the specified dataPosition in a single-channel compressed segmentation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md) | - |
| `data` | `Uint32Array` | - |
| `baseOffset` | `number` | The base offset into `data' at which the compressed data for this channel starts. @param chunkDataSize A 3-element array specifying the size of the volume. @param blockSize A 3-element array specifying the block size ued for compression. @param dataPosition A 3-element array specifying the position within the volume from which to read.  Stores the result in `out'. |
| `chunkDataSize` | [`ArrayLike`](../interfaces/neuroglancer_async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`number`\> | - |
| `blockSize` | [`ArrayLike`](../interfaces/neuroglancer_async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`number`\> | - |
| `dataPosition` | [`ArrayLike`](../interfaces/neuroglancer_async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`number`\> | - |

#### Returns

[`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/sliceview/compressed_segmentation/decode_uint64.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/compressed_segmentation/decode_uint64.ts#L42)

___

### readValue

▸ **readValue**(`out`, `data`, `baseOffset`, `chunkDataSize`, `blockSize`, `dataPosition`): [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md)

Reads the single value (of a single channel) at the specified dataPosition in a multi-channel
compressed segmentation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `out` | [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md) | - |
| `data` | `Uint32Array` | - |
| `baseOffset` | `number` | - |
| `chunkDataSize` | [`ArrayLike`](../interfaces/neuroglancer_async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`number`\> | - |
| `blockSize` | [`ArrayLike`](../interfaces/neuroglancer_async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`number`\> | - |
| `dataPosition` | [`ArrayLike`](../interfaces/neuroglancer_async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`number`\> | A 4-element [x, y, z, channel] array specifying the position to read. |

#### Returns

[`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/sliceview/compressed_segmentation/decode_uint64.ts:62](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/compressed_segmentation/decode_uint64.ts#L62)
