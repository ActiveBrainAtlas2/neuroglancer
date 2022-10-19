[neuroglancer](../README.md) / [Modules](../modules.md) / [data\_panel\_layout](../modules/data_panel_layout.md) / [<internal\>](../modules/data_panel_layout._internal_.md) / SliceViewSourceOptions

# Interface: SliceViewSourceOptions

[data_panel_layout](../modules/data_panel_layout.md).[<internal>](../modules/data_panel_layout._internal_.md).SliceViewSourceOptions

## Hierarchy

- **`SliceViewSourceOptions`**

  ↳ [`VolumeSourceOptions`](layer._internal_.VolumeSourceOptions.md)

## Table of contents

### Properties

- [displayRank](data_panel_layout._internal_.SliceViewSourceOptions.md#displayrank)
- [modelChannelDimensionIndices](data_panel_layout._internal_.SliceViewSourceOptions.md#modelchanneldimensionindices)
- [multiscaleToViewTransform](data_panel_layout._internal_.SliceViewSourceOptions.md#multiscaletoviewtransform)

## Properties

### displayRank

• **displayRank**: `number`

#### Defined in

[src/neuroglancer/sliceview/base.ts:494](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L494)

___

### modelChannelDimensionIndices

• **modelChannelDimensionIndices**: readonly `number`[]

#### Defined in

[src/neuroglancer/sliceview/base.ts:495](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L495)

___

### multiscaleToViewTransform

• **multiscaleToViewTransform**: `Float32Array`

Transform from the multiscale source coordinate space to a "view" coordinate space that
reflects the relative scales.  This is a *linear* (not affine) transformation matrix with
`rank` columns and `displayRank` rows in column-major order, where `rank` is the rank of the
multiscale source.

#### Defined in

[src/neuroglancer/sliceview/base.ts:493](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L493)
