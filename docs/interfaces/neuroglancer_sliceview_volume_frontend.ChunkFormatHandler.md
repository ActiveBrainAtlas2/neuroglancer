[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/volume/frontend](../modules/neuroglancer_sliceview_volume_frontend.md) / ChunkFormatHandler

# Interface: ChunkFormatHandler

[neuroglancer/sliceview/volume/frontend](../modules/neuroglancer_sliceview_volume_frontend.md).ChunkFormatHandler

**`License`**

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

## Hierarchy

- [`Disposable`](neuroglancer_util_disposable.Disposable.md)

  ↳ **`ChunkFormatHandler`**

## Implemented by

- [`CompressedSegmentationChunkFormatHandler`](../classes/neuroglancer_sliceview_compressed_segmentation_chunk_format.CompressedSegmentationChunkFormatHandler.md)
- [`UncompressedChunkFormatHandler`](../classes/neuroglancer_sliceview_uncompressed_chunk_format.UncompressedChunkFormatHandler.md)

## Table of contents

### Properties

- [chunkFormat](neuroglancer_sliceview_volume_frontend.ChunkFormatHandler.md#chunkformat)
- [dispose](neuroglancer_sliceview_volume_frontend.ChunkFormatHandler.md#dispose)

### Methods

- [getChunk](neuroglancer_sliceview_volume_frontend.ChunkFormatHandler.md#getchunk)

## Properties

### chunkFormat

• **chunkFormat**: [`ChunkFormat`](neuroglancer_sliceview_volume_frontend.ChunkFormat.md)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:126](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/frontend.ts#L126)

___

### dispose

• **dispose**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[Disposable](neuroglancer_util_disposable.Disposable.md).[dispose](neuroglancer_util_disposable.Disposable.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:17](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L17)

## Methods

### getChunk

▸ **getChunk**(`source`, `x`): [`SliceViewChunk`](../classes/neuroglancer_sliceview_frontend.SliceViewChunk.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`SliceViewChunkSource`](../classes/neuroglancer_sliceview_frontend.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](neuroglancer_sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](../classes/neuroglancer_sliceview_frontend.SliceViewChunk.md)\> |
| `x` | `any` |

#### Returns

[`SliceViewChunk`](../classes/neuroglancer_sliceview_frontend.SliceViewChunk.md)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:127](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/frontend.ts#L127)
