[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/volume/base](../modules/neuroglancer_sliceview_volume_base.md) / VolumeChunkSpecificationDefaultCompressionOptions

# Interface: VolumeChunkSpecificationDefaultCompressionOptions

[neuroglancer/sliceview/volume/base](../modules/neuroglancer_sliceview_volume_base.md).VolumeChunkSpecificationDefaultCompressionOptions

Specifies additional parameters for VolumeChunkSpecification.withDefaultCompression.

## Hierarchy

- **`VolumeChunkSpecificationDefaultCompressionOptions`**

  ↳ [`VolumeChunkSpecificationGetDefaultsOptions`](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationGetDefaultsOptions.md)

## Table of contents

### Properties

- [chunkToMultiscaleTransform](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationDefaultCompressionOptions.md#chunktomultiscaletransform)
- [chunkToViewTransform](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationDefaultCompressionOptions.md#chunktoviewtransform)
- [maxBlockSize](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationDefaultCompressionOptions.md#maxblocksize)
- [maxCompressedSegmentationBlockSize](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationDefaultCompressionOptions.md#maxcompressedsegmentationblocksize)
- [minBlockSize](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationDefaultCompressionOptions.md#minblocksize)
- [volumeType](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationDefaultCompressionOptions.md#volumetype)

## Properties

### chunkToMultiscaleTransform

• **chunkToMultiscaleTransform**: `Float32Array`

Transform from chunk space to the multiscale volume space.
Homogeneous `(rank + 1) * (rank + 1)` matrix in column-major order.

#### Defined in

[src/neuroglancer/sliceview/volume/base.ts:97](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/base.ts#L97)

___

### chunkToViewTransform

• `Optional` **chunkToViewTransform**: `Float32Array`

If specified, must be equal to the product of `chunkToMultiscaleTransform` and
`multiscaleToViewTransform`.

#### Defined in

[src/neuroglancer/sliceview/volume/base.ts:103](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/base.ts#L103)

___

### maxBlockSize

• `Optional` **maxBlockSize**: `Uint32Array`

#### Defined in

[src/neuroglancer/sliceview/volume/base.ts:91](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/base.ts#L91)

___

### maxCompressedSegmentationBlockSize

• `Optional` **maxCompressedSegmentationBlockSize**: [`vec3`](../classes/neuroglancer_util_geom.vec3.md)

#### Defined in

[src/neuroglancer/sliceview/volume/base.ts:89](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/base.ts#L89)

___

### minBlockSize

• `Optional` **minBlockSize**: `Uint32Array`

#### Defined in

[src/neuroglancer/sliceview/volume/base.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/base.ts#L90)

___

### volumeType

• **volumeType**: [`VolumeType`](../enums/neuroglancer_sliceview_volume_base.VolumeType.md)

Volume type.

#### Defined in

[src/neuroglancer/sliceview/volume/base.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/base.ts#L88)
