[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/volume/base](../modules/neuroglancer_sliceview_volume_base.md) / VolumeChunkSource

# Interface: VolumeChunkSource

[neuroglancer/sliceview/volume/base](../modules/neuroglancer_sliceview_volume_base.md).VolumeChunkSource

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

- [`SliceViewChunkSource`](neuroglancer_sliceview_base.SliceViewChunkSource.md)

  ↳ **`VolumeChunkSource`**

## Implemented by

- [`VolumeChunkSource`](../classes/neuroglancer_sliceview_volume_backend.VolumeChunkSource.md)
- [`VolumeChunkSource`](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md)

## Table of contents

### Properties

- [dispose](neuroglancer_sliceview_volume_base.VolumeChunkSource.md#dispose)
- [spec](neuroglancer_sliceview_volume_base.VolumeChunkSource.md#spec)

## Properties

### dispose

• **dispose**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[SliceViewChunkSource](neuroglancer_sliceview_base.SliceViewChunkSource.md).[dispose](neuroglancer_sliceview_base.SliceViewChunkSource.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:17](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L17)

___

### spec

• **spec**: [`VolumeChunkSpecification`](neuroglancer_sliceview_volume_base.VolumeChunkSpecification.md)

#### Overrides

[SliceViewChunkSource](neuroglancer_sliceview_base.SliceViewChunkSource.md).[spec](neuroglancer_sliceview_base.SliceViewChunkSource.md#spec)

#### Defined in

[src/neuroglancer/sliceview/volume/base.ts:249](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/base.ts#L249)
