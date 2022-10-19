[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/util/disposable](../modules/neuroglancer_util_disposable.md) / Disposable

# Interface: Disposable

[neuroglancer/util/disposable](../modules/neuroglancer_util_disposable.md).Disposable

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

## Hierarchy

- **`Disposable`**

  ↳ [`SliceViewChunkSource`](neuroglancer_sliceview_base.SliceViewChunkSource.md)

  ↳ [`ChunkFormatHandler`](neuroglancer_sliceview_volume_frontend.ChunkFormatHandler.md)

  ↳ [`NestedStateManager`](neuroglancer_trackable_value.NestedStateManager.md)

## Implemented by

- [`Buffer`](../classes/neuroglancer_webgl_buffer.Buffer.md)
- [`Chunk`](../classes/neuroglancer_chunk_manager_backend.Chunk.md)
- [`IndirectWatchableValue`](../classes/neuroglancer_trackable_value.IndirectWatchableValue.md)
- [`RefCounted`](../classes/neuroglancer_util_disposable.RefCounted.md)

## Table of contents

### Methods

- [dispose](neuroglancer_util_disposable.Disposable.md#dispose)

## Methods

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/disposable.ts:17](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L17)
