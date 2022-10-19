[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/volume/base](../modules/neuroglancer_sliceview_volume_base.md) / VolumeSourceOptions

# Interface: VolumeSourceOptions

[neuroglancer/sliceview/volume/base](../modules/neuroglancer_sliceview_volume_base.md).VolumeSourceOptions

## Hierarchy

- [`SliceViewSourceOptions`](neuroglancer_sliceview_base.SliceViewSourceOptions.md)

  ↳ **`VolumeSourceOptions`**

## Table of contents

### Properties

- [discreteValues](neuroglancer_sliceview_volume_base.VolumeSourceOptions.md#discretevalues)
- [displayRank](neuroglancer_sliceview_volume_base.VolumeSourceOptions.md#displayrank)
- [modelChannelDimensionIndices](neuroglancer_sliceview_volume_base.VolumeSourceOptions.md#modelchanneldimensionindices)
- [multiscaleToViewTransform](neuroglancer_sliceview_volume_base.VolumeSourceOptions.md#multiscaletoviewtransform)

## Properties

### discreteValues

• `Optional` **discreteValues**: `boolean`

#### Defined in

[src/neuroglancer/sliceview/volume/base.ts:44](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/base.ts#L44)

___

### displayRank

• **displayRank**: `number`

#### Inherited from

[SliceViewSourceOptions](neuroglancer_sliceview_base.SliceViewSourceOptions.md).[displayRank](neuroglancer_sliceview_base.SliceViewSourceOptions.md#displayrank)

#### Defined in

[src/neuroglancer/sliceview/base.ts:494](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L494)

___

### modelChannelDimensionIndices

• **modelChannelDimensionIndices**: readonly `number`[]

#### Inherited from

[SliceViewSourceOptions](neuroglancer_sliceview_base.SliceViewSourceOptions.md).[modelChannelDimensionIndices](neuroglancer_sliceview_base.SliceViewSourceOptions.md#modelchanneldimensionindices)

#### Defined in

[src/neuroglancer/sliceview/base.ts:495](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L495)

___

### multiscaleToViewTransform

• **multiscaleToViewTransform**: `Float32Array`

Transform from the multiscale source coordinate space to a "view" coordinate space that
reflects the relative scales.  This is a *linear* (not affine) transformation matrix with
`rank` columns and `displayRank` rows in column-major order, where `rank` is the rank of the
multiscale source.

#### Inherited from

[SliceViewSourceOptions](neuroglancer_sliceview_base.SliceViewSourceOptions.md).[multiscaleToViewTransform](neuroglancer_sliceview_base.SliceViewSourceOptions.md#multiscaletoviewtransform)

#### Defined in

[src/neuroglancer/sliceview/base.ts:493](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L493)
