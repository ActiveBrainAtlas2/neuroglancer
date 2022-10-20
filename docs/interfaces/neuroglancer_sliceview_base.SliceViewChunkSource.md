[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/base](../modules/neuroglancer_sliceview_base.md) / SliceViewChunkSource

# Interface: SliceViewChunkSource<Spec\>

[neuroglancer/sliceview/base](../modules/neuroglancer_sliceview_base.md).SliceViewChunkSource

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

## Type parameters

| Name | Type |
| :------ | :------ |
| `Spec` | extends [`SliceViewChunkSpecification`](neuroglancer_sliceview_base.SliceViewChunkSpecification.md) = [`SliceViewChunkSpecification`](neuroglancer_sliceview_base.SliceViewChunkSpecification.md) |

## Hierarchy

- [`Disposable`](neuroglancer_util_disposable.Disposable.md)

  ↳ **`SliceViewChunkSource`**

  ↳↳ [`VolumeChunkSource`](neuroglancer_sliceview_volume_base.VolumeChunkSource.md)

## Implemented by

- [`SliceViewChunkSource`](../classes/neuroglancer_sliceview_frontend.SliceViewChunkSource.md)
- [`SliceViewChunkSourceBackend`](../classes/neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md)

## Table of contents

### Properties

- [dispose](neuroglancer_sliceview_base.SliceViewChunkSource.md#dispose)
- [spec](neuroglancer_sliceview_base.SliceViewChunkSource.md#spec)

## Properties

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

___

### spec

• **spec**: `Spec`

#### Defined in

[src/neuroglancer/sliceview/base.ts:674](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/base.ts#L674)
