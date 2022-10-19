[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/compressed\_segmentation/encode\_common](neuroglancer_sliceview_compressed_segmentation_encode_common.md) / <internal\>

# Module: <internal\>

## Table of contents

### Type Aliases

- [EncodeBlockFunction](neuroglancer_sliceview_compressed_segmentation_encode_common._internal_.md#encodeblockfunction)
- [ValueTableCache](neuroglancer_sliceview_compressed_segmentation_encode_common._internal_.md#valuetablecache)

## Type Aliases

### EncodeBlockFunction

Ƭ **EncodeBlockFunction**: (`rawData`: `Uint32Array`, `inputOffset`: `number`, `inputStrides`: [`ArrayLike`](../interfaces/neuroglancer_async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`number`\>, `blockSize`: [`ArrayLike`](../interfaces/neuroglancer_async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`number`\>, `actualSize`: [`ArrayLike`](../interfaces/neuroglancer_async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`number`\>, `baseOffset`: `number`, `cache`: [`ValueTableCache`](neuroglancer_sliceview_compressed_segmentation_encode_common._internal_.md#valuetablecache), `output`: [`Uint32ArrayBuilder`](../classes/neuroglancer_util_uint32array_builder.Uint32ArrayBuilder.md)) => [`number`, `number`]

#### Type declaration

▸ (`rawData`, `inputOffset`, `inputStrides`, `blockSize`, `actualSize`, `baseOffset`, `cache`, `output`): [`number`, `number`]

##### Parameters

| Name | Type |
| :------ | :------ |
| `rawData` | `Uint32Array` |
| `inputOffset` | `number` |
| `inputStrides` | [`ArrayLike`](../interfaces/neuroglancer_async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`number`\> |
| `blockSize` | [`ArrayLike`](../interfaces/neuroglancer_async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`number`\> |
| `actualSize` | [`ArrayLike`](../interfaces/neuroglancer_async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`number`\> |
| `baseOffset` | `number` |
| `cache` | [`ValueTableCache`](neuroglancer_sliceview_compressed_segmentation_encode_common._internal_.md#valuetablecache) |
| `output` | [`Uint32ArrayBuilder`](../classes/neuroglancer_util_uint32array_builder.Uint32ArrayBuilder.md) |

##### Returns

[`number`, `number`]

#### Defined in

[src/neuroglancer/sliceview/compressed_segmentation/encode_common.ts:267](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/compressed_segmentation/encode_common.ts#L267)

___

### ValueTableCache

Ƭ **ValueTableCache**: `Map`<`string`, `number`\>

#### Defined in

[src/neuroglancer/sliceview/compressed_segmentation/encode_common.ts:216](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/compressed_segmentation/encode_common.ts#L216)
