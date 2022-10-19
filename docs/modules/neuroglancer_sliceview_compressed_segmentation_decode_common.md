[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/sliceview/compressed\_segmentation/decode\_common

# Module: neuroglancer/sliceview/compressed\_segmentation/decode\_common

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
| `baseOffset` | `number` | The base offset into `data' at which the compressed data for this channel starts. |
| `chunkDataSize` | [`ArrayLike`](../interfaces/neuroglancer_async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`number`\> | A 3-element array specifying the size of the volume, |
| `blockSize` | [`ArrayLike`](../interfaces/neuroglancer_async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`number`\> | A 3-element array specifying the block size ued for compression. |
| `dataPosition` | [`ArrayLike`](../interfaces/neuroglancer_async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`number`\> | A 3-element array specifying the position within the volume from which to read. |
| `uint32sPerElement` | `number` | - |

#### Returns

`number`

The offset into `data', relative to baseOffset, at which the value is located.

#### Defined in

[src/neuroglancer/sliceview/compressed_segmentation/decode_common.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/compressed_segmentation/decode_common.ts#L34)
