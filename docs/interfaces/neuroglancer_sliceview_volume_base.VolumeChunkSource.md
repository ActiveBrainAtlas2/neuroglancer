[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/volume/base](../modules/neuroglancer_sliceview_volume_base.md) / VolumeChunkSource

# Interface: VolumeChunkSource

[neuroglancer/sliceview/volume/base](../modules/neuroglancer_sliceview_volume_base.md).VolumeChunkSource

## Hierarchy

- [`SliceViewChunkSource`](neuroglancer_sliceview_base.SliceViewChunkSource.md)

  ↳ **`VolumeChunkSource`**

## Implemented by

- [`VolumeChunkSource`](../classes/neuroglancer_sliceview_volume_backend.VolumeChunkSource.md)
- [`VolumeChunkSource`](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md)

## Table of contents

### Properties

- [spec](neuroglancer_sliceview_volume_base.VolumeChunkSource.md#spec)

### Methods

- [dispose](neuroglancer_sliceview_volume_base.VolumeChunkSource.md#dispose)

## Properties

### spec

• **spec**: [`VolumeChunkSpecification`](neuroglancer_sliceview_volume_base.VolumeChunkSpecification.md)

#### Overrides

[SliceViewChunkSource](neuroglancer_sliceview_base.SliceViewChunkSource.md).[spec](neuroglancer_sliceview_base.SliceViewChunkSource.md#spec)

#### Defined in

[src/neuroglancer/sliceview/volume/base.ts:249](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/base.ts#L249)

## Methods

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[SliceViewChunkSource](neuroglancer_sliceview_base.SliceViewChunkSource.md).[dispose](neuroglancer_sliceview_base.SliceViewChunkSource.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:17](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L17)
