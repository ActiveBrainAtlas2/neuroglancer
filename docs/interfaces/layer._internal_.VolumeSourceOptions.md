[neuroglancer](../README.md) / [Modules](../modules.md) / [layer](../modules/layer.md) / [<internal\>](../modules/layer._internal_.md) / VolumeSourceOptions

# Interface: VolumeSourceOptions

[layer](../modules/layer.md).[<internal>](../modules/layer._internal_.md).VolumeSourceOptions

## Hierarchy

- [`SliceViewSourceOptions`](data_panel_layout._internal_.SliceViewSourceOptions.md)

  ↳ **`VolumeSourceOptions`**

## Table of contents

### Properties

- [discreteValues](layer._internal_.VolumeSourceOptions.md#discretevalues)
- [displayRank](layer._internal_.VolumeSourceOptions.md#displayrank)
- [modelChannelDimensionIndices](layer._internal_.VolumeSourceOptions.md#modelchanneldimensionindices)
- [multiscaleToViewTransform](layer._internal_.VolumeSourceOptions.md#multiscaletoviewtransform)

## Properties

### discreteValues

• `Optional` **discreteValues**: `boolean`

#### Defined in

[src/neuroglancer/sliceview/volume/base.ts:44](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/volume/base.ts#L44)

___

### displayRank

• **displayRank**: `number`

#### Inherited from

[SliceViewSourceOptions](data_panel_layout._internal_.SliceViewSourceOptions.md).[displayRank](data_panel_layout._internal_.SliceViewSourceOptions.md#displayrank)

#### Defined in

[src/neuroglancer/sliceview/base.ts:494](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L494)

___

### modelChannelDimensionIndices

• **modelChannelDimensionIndices**: readonly `number`[]

#### Inherited from

[SliceViewSourceOptions](data_panel_layout._internal_.SliceViewSourceOptions.md).[modelChannelDimensionIndices](data_panel_layout._internal_.SliceViewSourceOptions.md#modelchanneldimensionindices)

#### Defined in

[src/neuroglancer/sliceview/base.ts:495](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L495)

___

### multiscaleToViewTransform

• **multiscaleToViewTransform**: `Float32Array`

Transform from the multiscale source coordinate space to a "view" coordinate space that
reflects the relative scales.  This is a *linear* (not affine) transformation matrix with
`rank` columns and `displayRank` rows in column-major order, where `rank` is the rank of the
multiscale source.

#### Inherited from

[SliceViewSourceOptions](data_panel_layout._internal_.SliceViewSourceOptions.md).[multiscaleToViewTransform](data_panel_layout._internal_.SliceViewSourceOptions.md#multiscaletoviewtransform)

#### Defined in

[src/neuroglancer/sliceview/base.ts:493](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L493)
