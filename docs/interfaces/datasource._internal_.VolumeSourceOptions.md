[neuroglancer](../README.md) / [Modules](../modules.md) / [datasource](../modules/datasource.md) / [<internal\>](../modules/datasource._internal_.md) / VolumeSourceOptions

# Interface: VolumeSourceOptions

[datasource](../modules/datasource.md).[<internal>](../modules/datasource._internal_.md).VolumeSourceOptions

## Hierarchy

- [`SliceViewSourceOptions`](sliceview_base.SliceViewSourceOptions.md)

  ↳ **`VolumeSourceOptions`**

## Table of contents

### Properties

- [discreteValues](datasource._internal_.VolumeSourceOptions.md#discretevalues)
- [displayRank](datasource._internal_.VolumeSourceOptions.md#displayrank)
- [modelChannelDimensionIndices](datasource._internal_.VolumeSourceOptions.md#modelchanneldimensionindices)
- [multiscaleToViewTransform](datasource._internal_.VolumeSourceOptions.md#multiscaletoviewtransform)

## Properties

### discreteValues

• `Optional` **discreteValues**: `boolean`

#### Defined in

[src/neuroglancer/sliceview/volume/base.ts:44](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/volume/base.ts#L44)

___

### displayRank

• **displayRank**: `number`

#### Inherited from

[SliceViewSourceOptions](sliceview_base.SliceViewSourceOptions.md).[displayRank](sliceview_base.SliceViewSourceOptions.md#displayrank)

#### Defined in

[src/neuroglancer/sliceview/base.ts:494](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L494)

___

### modelChannelDimensionIndices

• **modelChannelDimensionIndices**: readonly `number`[]

#### Inherited from

[SliceViewSourceOptions](sliceview_base.SliceViewSourceOptions.md).[modelChannelDimensionIndices](sliceview_base.SliceViewSourceOptions.md#modelchanneldimensionindices)

#### Defined in

[src/neuroglancer/sliceview/base.ts:495](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L495)

___

### multiscaleToViewTransform

• **multiscaleToViewTransform**: `Float32Array`

Transform from the multiscale source coordinate space to a "view" coordinate space that
reflects the relative scales.  This is a *linear* (not affine) transformation matrix with
`rank` columns and `displayRank` rows in column-major order, where `rank` is the rank of the
multiscale source.

#### Inherited from

[SliceViewSourceOptions](sliceview_base.SliceViewSourceOptions.md).[multiscaleToViewTransform](sliceview_base.SliceViewSourceOptions.md#multiscaletoviewtransform)

#### Defined in

[src/neuroglancer/sliceview/base.ts:493](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L493)
