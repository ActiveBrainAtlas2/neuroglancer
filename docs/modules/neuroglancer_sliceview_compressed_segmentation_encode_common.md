[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/sliceview/compressed\_segmentation/encode\_common

# Module: neuroglancer/sliceview/compressed\_segmentation/encode\_common

## Table of contents

### Modules

- [&lt;internal\&gt;](neuroglancer_sliceview_compressed_segmentation_encode_common._internal_.md)

### Variables

- [BLOCK\_HEADER\_SIZE](neuroglancer_sliceview_compressed_segmentation_encode_common.md#block_header_size)

### Functions

- [encodeChannel](neuroglancer_sliceview_compressed_segmentation_encode_common.md#encodechannel)
- [encodeChannels](neuroglancer_sliceview_compressed_segmentation_encode_common.md#encodechannels)
- [newCache](neuroglancer_sliceview_compressed_segmentation_encode_common.md#newcache)
- [writeBlock](neuroglancer_sliceview_compressed_segmentation_encode_common.md#writeblock)

## Variables

### BLOCK\_HEADER\_SIZE

• `Const` **BLOCK\_HEADER\_SIZE**: ``2``

#### Defined in

[src/neuroglancer/sliceview/compressed_segmentation/encode_common.ts:21](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/compressed_segmentation/encode_common.ts#L21)

## Functions

### encodeChannel

▸ **encodeChannel**(`output`, `blockSize`, `rawData`, `volumeSize`, `baseInputOffset`, `inputStrides`, `encodeBlock`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `output` | [`Uint32ArrayBuilder`](../classes/neuroglancer_util_uint32array_builder.Uint32ArrayBuilder.md) |
| `blockSize` | [`ArrayLike`](../interfaces/neuroglancer_async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`number`\> |
| `rawData` | `Uint32Array` |
| `volumeSize` | [`ArrayLike`](../interfaces/neuroglancer_async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`number`\> |
| `baseInputOffset` | `number` |
| `inputStrides` | [`ArrayLike`](../interfaces/neuroglancer_async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`number`\> |
| `encodeBlock` | [`EncodeBlockFunction`](neuroglancer_sliceview_compressed_segmentation_encode_common._internal_.md#encodeblockfunction) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/compressed_segmentation/encode_common.ts:272](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/compressed_segmentation/encode_common.ts#L272)

___

### encodeChannels

▸ **encodeChannels**(`output`, `blockSize`, `rawData`, `volumeSize`, `baseInputOffset`, `inputStrides`, `encodeBlock`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `output` | [`Uint32ArrayBuilder`](../classes/neuroglancer_util_uint32array_builder.Uint32ArrayBuilder.md) |
| `blockSize` | [`ArrayLike`](../interfaces/neuroglancer_async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`number`\> |
| `rawData` | `Uint32Array` |
| `volumeSize` | [`ArrayLike`](../interfaces/neuroglancer_async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`number`\> |
| `baseInputOffset` | `number` |
| `inputStrides` | [`ArrayLike`](../interfaces/neuroglancer_async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`number`\> |
| `encodeBlock` | [`EncodeBlockFunction`](neuroglancer_sliceview_compressed_segmentation_encode_common._internal_.md#encodeblockfunction) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/compressed_segmentation/encode_common.ts:312](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/compressed_segmentation/encode_common.ts#L312)

___

### newCache

▸ **newCache**(): `Map`<`string`, `number`\>

#### Returns

`Map`<`string`, `number`\>

#### Defined in

[src/neuroglancer/sliceview/compressed_segmentation/encode_common.ts:23](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/compressed_segmentation/encode_common.ts#L23)

___

### writeBlock

▸ **writeBlock**(`output`, `baseOffset`, `cache`, `numBlockElements`, `numUniqueValues`, `valuesBuffer2`, `encodingBuffer`, `indexBuffer2`, `uint32sPerElement`): [`number`, `number`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `output` | [`Uint32ArrayBuilder`](../classes/neuroglancer_util_uint32array_builder.Uint32ArrayBuilder.md) |
| `baseOffset` | `number` |
| `cache` | [`ValueTableCache`](neuroglancer_sliceview_compressed_segmentation_encode_common._internal_.md#valuetablecache) |
| `numBlockElements` | `number` |
| `numUniqueValues` | `number` |
| `valuesBuffer2` | `Uint32Array` |
| `encodingBuffer` | `Uint32Array` |
| `indexBuffer2` | `Uint32Array` |
| `uint32sPerElement` | `number` |

#### Returns

[`number`, `number`]

#### Defined in

[src/neuroglancer/sliceview/compressed_segmentation/encode_common.ts:218](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/compressed_segmentation/encode_common.ts#L218)
