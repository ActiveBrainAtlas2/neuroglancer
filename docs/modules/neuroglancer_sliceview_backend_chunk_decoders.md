[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/sliceview/backend\_chunk\_decoders

# Module: neuroglancer/sliceview/backend\_chunk\_decoders

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

[src/neuroglancer/sliceview/backend_chunk_decoders/index.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/backend_chunk_decoders/index.ts#L24)
