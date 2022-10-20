[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/sliceview/compressed\_segmentation/encode\_uint64

# Module: neuroglancer/sliceview/compressed\_segmentation/encode\_uint64

## Table of contents

### References

- [newCache](neuroglancer_sliceview_compressed_segmentation_encode_uint64.md#newcache)

### Functions

- [encodeBlock](neuroglancer_sliceview_compressed_segmentation_encode_uint64.md#encodeblock)
- [encodeChannel](neuroglancer_sliceview_compressed_segmentation_encode_uint64.md#encodechannel)
- [encodeChannels](neuroglancer_sliceview_compressed_segmentation_encode_uint64.md#encodechannels)

## References

### newCache

Re-exports [newCache](neuroglancer_sliceview_compressed_segmentation_encode_common.md#newcache)

## Functions

### encodeBlock

▸ **encodeBlock**(`rawData`, `inputOffset`, `inputStrides`, `blockSize`, `actualSize`, `baseOffset`, `cache`, `output`): [`number`, `number`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `rawData` | `Uint32Array` |
| `inputOffset` | `number` |
| `inputStrides` | [`ArrayLike`](../interfaces/neuroglancer_async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`number`\> |
| `blockSize` | [`ArrayLike`](../interfaces/neuroglancer_async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`number`\> |
| `actualSize` | [`ArrayLike`](../interfaces/neuroglancer_async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`number`\> |
| `baseOffset` | `number` |
| `cache` | `Map`<`string`, `number`\> |
| `output` | [`Uint32ArrayBuilder`](../classes/neuroglancer_util_uint32array_builder.Uint32ArrayBuilder.md) |

#### Returns

[`number`, `number`]

#### Defined in

[src/neuroglancer/sliceview/compressed_segmentation/encode_uint64.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/compressed_segmentation/encode_uint64.ts#L38)

___

### encodeChannel

▸ **encodeChannel**(`output`, `blockSize`, `rawData`, `volumeSize`, `baseInputOffset?`, `inputStrides?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `output` | [`Uint32ArrayBuilder`](../classes/neuroglancer_util_uint32array_builder.Uint32ArrayBuilder.md) | `undefined` |
| `blockSize` | [`ArrayLike`](../interfaces/neuroglancer_async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`number`\> | `undefined` |
| `rawData` | `Uint32Array` | `undefined` |
| `volumeSize` | [`ArrayLike`](../interfaces/neuroglancer_async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`number`\> | `undefined` |
| `baseInputOffset` | `number` | `0` |
| `inputStrides` | `number`[] | `undefined` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/compressed_segmentation/encode_uint64.ts:145](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/compressed_segmentation/encode_uint64.ts#L145)

___

### encodeChannels

▸ **encodeChannels**(`output`, `blockSize`, `rawData`, `volumeSize`, `baseInputOffset?`, `inputStrides?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `output` | [`Uint32ArrayBuilder`](../classes/neuroglancer_util_uint32array_builder.Uint32ArrayBuilder.md) | `undefined` |
| `blockSize` | [`ArrayLike`](../interfaces/neuroglancer_async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`number`\> | `undefined` |
| `rawData` | `Uint32Array` | `undefined` |
| `volumeSize` | [`ArrayLike`](../interfaces/neuroglancer_async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`number`\> | `undefined` |
| `baseInputOffset` | `number` | `0` |
| `inputStrides` | `number`[] | `undefined` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/compressed_segmentation/encode_uint64.ts:153](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/compressed_segmentation/encode_uint64.ts#L153)
