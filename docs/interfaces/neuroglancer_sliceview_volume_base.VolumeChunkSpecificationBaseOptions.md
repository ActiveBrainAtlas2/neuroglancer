[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/volume/base](../modules/neuroglancer_sliceview_volume_base.md) / VolumeChunkSpecificationBaseOptions

# Interface: VolumeChunkSpecificationBaseOptions

[neuroglancer/sliceview/volume/base](../modules/neuroglancer_sliceview_volume_base.md).VolumeChunkSpecificationBaseOptions

Specifies constructor parameters for VolumeChunkSpecification.

## Hierarchy

- [`SliceViewChunkSpecificationBaseOptions`](neuroglancer_sliceview_base.SliceViewChunkSpecificationBaseOptions.md)

  ↳ **`VolumeChunkSpecificationBaseOptions`**

  ↳↳ [`VolumeChunkSpecificationOptions`](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationOptions.md)

  ↳↳ [`VolumeChunkSpecificationGetDefaultsOptions`](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationGetDefaultsOptions.md)

## Table of contents

### Properties

- [baseVoxelOffset](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationBaseOptions.md#basevoxeloffset)
- [compressedSegmentationBlockSize](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationBaseOptions.md#compressedsegmentationblocksize)
- [dataType](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationBaseOptions.md#datatype)
- [lowerVoxelBound](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationBaseOptions.md#lowervoxelbound)
- [rank](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationBaseOptions.md#rank)
- [upperVoxelBound](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationBaseOptions.md#uppervoxelbound)

## Properties

### baseVoxelOffset

• `Optional` **baseVoxelOffset**: `Float32Array`

Specifies offset for use by backend.ts:GenericVolumeChunkSource.computeChunkBounds in
calculating chunk voxel coordinates.  The calculated chunk coordinates will be equal to the
voxel position (in chunkLayout coordinates) plus this value.

Defaults to kZeroVec if not specified.

#### Defined in

[src/neuroglancer/sliceview/volume/base.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/base.ts#L63)

___

### compressedSegmentationBlockSize

• `Optional` **compressedSegmentationBlockSize**: [`vec3`](../classes/neuroglancer_util_geom.vec3.md)

If set, indicates that the chunk is in compressed segmentation format with the specified block
size.

#### Defined in

[src/neuroglancer/sliceview/volume/base.ts:70](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/base.ts#L70)

___

### dataType

• **dataType**: [`DataType`](../enums/neuroglancer_util_data_type.DataType.md)

#### Defined in

[src/neuroglancer/sliceview/volume/base.ts:64](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/base.ts#L64)

___

### lowerVoxelBound

• `Optional` **lowerVoxelBound**: `Float32Array`

If not specified, defaults to an all-zero vector.  This determines lowerChunkBound.  If this is
not a multiple of chunkDataSize, then voxels at lower positions may still be requested.

#### Inherited from

[SliceViewChunkSpecificationBaseOptions](neuroglancer_sliceview_base.SliceViewChunkSpecificationBaseOptions.md).[lowerVoxelBound](neuroglancer_sliceview_base.SliceViewChunkSpecificationBaseOptions.md#lowervoxelbound)

#### Defined in

[src/neuroglancer/sliceview/base.ts:657](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L657)

___

### rank

• **rank**: `number`

#### Inherited from

[SliceViewChunkSpecificationBaseOptions](neuroglancer_sliceview_base.SliceViewChunkSpecificationBaseOptions.md).[rank](neuroglancer_sliceview_base.SliceViewChunkSpecificationBaseOptions.md#rank)

#### Defined in

[src/neuroglancer/sliceview/base.ts:651](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L651)

___

### upperVoxelBound

• **upperVoxelBound**: `Float32Array`

Exclusive upper bound in "chunk" coordinate space, in voxels.  This determines upperChunkBound.

#### Inherited from

[SliceViewChunkSpecificationBaseOptions](neuroglancer_sliceview_base.SliceViewChunkSpecificationBaseOptions.md).[upperVoxelBound](neuroglancer_sliceview_base.SliceViewChunkSpecificationBaseOptions.md#uppervoxelbound)

#### Defined in

[src/neuroglancer/sliceview/base.ts:662](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L662)
