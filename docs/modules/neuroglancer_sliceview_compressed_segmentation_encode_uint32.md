[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/sliceview/compressed\_segmentation/encode\_uint32

# Module: neuroglancer/sliceview/compressed\_segmentation/encode\_uint32

**`license`**
Copyright 2016 Google Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Table of contents

### References

- [newCache](neuroglancer_sliceview_compressed_segmentation_encode_uint32.md#newcache)

### Functions

- [encodeBlock](neuroglancer_sliceview_compressed_segmentation_encode_uint32.md#encodeblock)
- [encodeChannel](neuroglancer_sliceview_compressed_segmentation_encode_uint32.md#encodechannel)
- [encodeChannels](neuroglancer_sliceview_compressed_segmentation_encode_uint32.md#encodechannels)

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

[src/neuroglancer/sliceview/compressed_segmentation/encode_uint32.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/compressed_segmentation/encode_uint32.ts#L38)

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

[src/neuroglancer/sliceview/compressed_segmentation/encode_uint32.ts:125](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/compressed_segmentation/encode_uint32.ts#L125)

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

[src/neuroglancer/sliceview/compressed_segmentation/encode_uint32.ts:133](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/compressed_segmentation/encode_uint32.ts#L133)
