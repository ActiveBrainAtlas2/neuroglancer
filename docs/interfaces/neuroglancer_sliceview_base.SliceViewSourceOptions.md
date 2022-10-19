[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/base](../modules/neuroglancer_sliceview_base.md) / SliceViewSourceOptions

# Interface: SliceViewSourceOptions

[neuroglancer/sliceview/base](../modules/neuroglancer_sliceview_base.md).SliceViewSourceOptions

## Hierarchy

- **`SliceViewSourceOptions`**

  ↳ [`VolumeSourceOptions`](neuroglancer_sliceview_volume_base.VolumeSourceOptions.md)

## Table of contents

### Properties

- [displayRank](neuroglancer_sliceview_base.SliceViewSourceOptions.md#displayrank)
- [modelChannelDimensionIndices](neuroglancer_sliceview_base.SliceViewSourceOptions.md#modelchanneldimensionindices)
- [multiscaleToViewTransform](neuroglancer_sliceview_base.SliceViewSourceOptions.md#multiscaletoviewtransform)

## Properties

### displayRank

• **displayRank**: `number`

#### Defined in

[src/neuroglancer/sliceview/base.ts:494](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L494)

___

### modelChannelDimensionIndices

• **modelChannelDimensionIndices**: readonly `number`[]

#### Defined in

[src/neuroglancer/sliceview/base.ts:495](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L495)

___

### multiscaleToViewTransform

• **multiscaleToViewTransform**: `Float32Array`

Transform from the multiscale source coordinate space to a "view" coordinate space that
reflects the relative scales.  This is a *linear* (not affine) transformation matrix with
`rank` columns and `displayRank` rows in column-major order, where `rank` is the rank of the
multiscale source.

#### Defined in

[src/neuroglancer/sliceview/base.ts:493](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L493)
