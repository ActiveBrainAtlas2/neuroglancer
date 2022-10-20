[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/sliceview/compressed\_segmentation/decode\_common

# Module: neuroglancer/sliceview/compressed\_segmentation/decode\_common

## Table of contents

### Functions

- [decodeValueOffset](neuroglancer_sliceview_compressed_segmentation_decode_common.md#decodevalueoffset)

## Functions

### decodeValueOffset

▸ **decodeValueOffset**(`data`, `baseOffset`, `chunkDataSize`, `blockSize`, `dataPosition`, `uint32sPerElement`): `number`

Determines the offset of the value at the specified dataPosition in a single-channel compressed
segmentation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Uint32Array` | - |
| `baseOffset` | `number` | The base offset into `data' at which the compressed data for this channel starts. @param chunkDataSize A 3-element array specifying the size of the volume, @param blockSize A 3-element array specifying the block size ued for compression. @param dataPosition A 3-element array specifying the position within the volume from which to read. @returns The offset into `data', relative to baseOffset, at which the value is located. |
| `chunkDataSize` | [`ArrayLike`](../interfaces/neuroglancer_async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`number`\> | - |
| `blockSize` | [`ArrayLike`](../interfaces/neuroglancer_async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`number`\> | - |
| `dataPosition` | [`ArrayLike`](../interfaces/neuroglancer_async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`number`\> | - |
| `uint32sPerElement` | `number` | - |

#### Returns

`number`

#### Defined in

[src/neuroglancer/sliceview/compressed_segmentation/decode_common.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/compressed_segmentation/decode_common.ts#L34)
