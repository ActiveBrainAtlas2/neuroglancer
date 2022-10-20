[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/volume/base](../modules/neuroglancer_sliceview_volume_base.md) / VolumeChunkSpecificationGetDefaultsOptions

# Interface: VolumeChunkSpecificationGetDefaultsOptions

[neuroglancer/sliceview/volume/base](../modules/neuroglancer_sliceview_volume_base.md).VolumeChunkSpecificationGetDefaultsOptions

Specifies parameters for `makeDefaultVolumeChunkSpecifications`.

## Hierarchy

- [`VolumeChunkSpecificationBaseOptions`](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationBaseOptions.md)

- [`VolumeChunkSpecificationDefaultCompressionOptions`](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationDefaultCompressionOptions.md)

- [`ChunkLayoutOptions`](neuroglancer_sliceview_base.ChunkLayoutOptions.md)

- [`VolumeChunkSpecificationVolumeSourceOptions`](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationVolumeSourceOptions.md)

  ↳ **`VolumeChunkSpecificationGetDefaultsOptions`**

## Table of contents

### Properties

- [baseVoxelOffset](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationGetDefaultsOptions.md#basevoxeloffset)
- [chunkDataSizes](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationGetDefaultsOptions.md#chunkdatasizes)
- [chunkLayoutPreference](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationGetDefaultsOptions.md#chunklayoutpreference)
- [chunkToMultiscaleTransform](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationGetDefaultsOptions.md#chunktomultiscaletransform)
- [chunkToViewTransform](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationGetDefaultsOptions.md#chunktoviewtransform)
- [compressedSegmentationBlockSize](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationGetDefaultsOptions.md#compressedsegmentationblocksize)
- [dataType](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationGetDefaultsOptions.md#datatype)
- [lowerVoxelBound](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationGetDefaultsOptions.md#lowervoxelbound)
- [maxBlockSize](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationGetDefaultsOptions.md#maxblocksize)
- [maxCompressedSegmentationBlockSize](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationGetDefaultsOptions.md#maxcompressedsegmentationblocksize)
- [minBlockSize](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationGetDefaultsOptions.md#minblocksize)
- [rank](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationGetDefaultsOptions.md#rank)
- [upperVoxelBound](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationGetDefaultsOptions.md#uppervoxelbound)
- [volumeSourceOptions](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationGetDefaultsOptions.md#volumesourceoptions)
- [volumeType](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationGetDefaultsOptions.md#volumetype)

## Properties

### baseVoxelOffset

• `Optional` **baseVoxelOffset**: `Float32Array`

Specifies offset for use by backend.ts:GenericVolumeChunkSource.computeChunkBounds in
calculating chunk voxel coordinates.  The calculated chunk coordinates will be equal to the
voxel position (in chunkLayout coordinates) plus this value.

Defaults to kZeroVec if not specified.

#### Inherited from

[VolumeChunkSpecificationBaseOptions](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationBaseOptions.md).[baseVoxelOffset](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationBaseOptions.md#basevoxeloffset)

#### Defined in

[src/neuroglancer/sliceview/volume/base.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/base.ts#L63)

___

### chunkDataSizes

• `Optional` **chunkDataSizes**: `Uint32Array`[]

Chunk sizes in voxels.

#### Inherited from

[ChunkLayoutOptions](neuroglancer_sliceview_base.ChunkLayoutOptions.md).[chunkDataSizes](neuroglancer_sliceview_base.ChunkLayoutOptions.md#chunkdatasizes)

#### Defined in

[src/neuroglancer/sliceview/base.ts:516](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/base.ts#L516)

___

### chunkLayoutPreference

• `Optional` **chunkLayoutPreference**: [`ChunkLayoutPreference`](../enums/neuroglancer_sliceview_base.ChunkLayoutPreference.md)

Preferred chunk layout, which determines chunk sizes to use if chunkDataSizes is not
specified.

#### Inherited from

[ChunkLayoutOptions](neuroglancer_sliceview_base.ChunkLayoutOptions.md).[chunkLayoutPreference](neuroglancer_sliceview_base.ChunkLayoutOptions.md#chunklayoutpreference)

#### Defined in

[src/neuroglancer/sliceview/base.ts:522](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/base.ts#L522)

___

### chunkToMultiscaleTransform

• **chunkToMultiscaleTransform**: `Float32Array`

Transform from chunk space to the multiscale volume space.
Homogeneous `(rank + 1) * (rank + 1)` matrix in column-major order.

#### Inherited from

[VolumeChunkSpecificationDefaultCompressionOptions](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationDefaultCompressionOptions.md).[chunkToMultiscaleTransform](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationDefaultCompressionOptions.md#chunktomultiscaletransform)

#### Defined in

[src/neuroglancer/sliceview/volume/base.ts:97](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/base.ts#L97)

___

### chunkToViewTransform

• `Optional` **chunkToViewTransform**: `Float32Array`

If specified, must be equal to the product of `chunkToMultiscaleTransform` and
`multiscaleToViewTransform`.

#### Inherited from

[VolumeChunkSpecificationDefaultCompressionOptions](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationDefaultCompressionOptions.md).[chunkToViewTransform](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationDefaultCompressionOptions.md#chunktoviewtransform)

#### Defined in

[src/neuroglancer/sliceview/volume/base.ts:103](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/base.ts#L103)

___

### compressedSegmentationBlockSize

• `Optional` **compressedSegmentationBlockSize**: [`vec3`](../classes/neuroglancer_util_geom.vec3.md)

If set, indicates that the chunk is in compressed segmentation format with the specified block
size.

#### Inherited from

[VolumeChunkSpecificationBaseOptions](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationBaseOptions.md).[compressedSegmentationBlockSize](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationBaseOptions.md#compressedsegmentationblocksize)

#### Defined in

[src/neuroglancer/sliceview/volume/base.ts:70](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/base.ts#L70)

___

### dataType

• **dataType**: [`DataType`](../enums/neuroglancer_util_data_type.DataType.md)

#### Inherited from

[VolumeChunkSpecificationBaseOptions](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationBaseOptions.md).[dataType](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationBaseOptions.md#datatype)

#### Defined in

[src/neuroglancer/sliceview/volume/base.ts:64](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/base.ts#L64)

___

### lowerVoxelBound

• `Optional` **lowerVoxelBound**: `Float32Array`

If not specified, defaults to an all-zero vector.  This determines lowerChunkBound.  If this is
not a multiple of chunkDataSize, then voxels at lower positions may still be requested.

#### Inherited from

[VolumeChunkSpecificationBaseOptions](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationBaseOptions.md).[lowerVoxelBound](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationBaseOptions.md#lowervoxelbound)

#### Defined in

[src/neuroglancer/sliceview/base.ts:657](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/base.ts#L657)

___

### maxBlockSize

• `Optional` **maxBlockSize**: `Uint32Array`

#### Inherited from

[VolumeChunkSpecificationDefaultCompressionOptions](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationDefaultCompressionOptions.md).[maxBlockSize](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationDefaultCompressionOptions.md#maxblocksize)

#### Defined in

[src/neuroglancer/sliceview/volume/base.ts:91](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/base.ts#L91)

___

### maxCompressedSegmentationBlockSize

• `Optional` **maxCompressedSegmentationBlockSize**: [`vec3`](../classes/neuroglancer_util_geom.vec3.md)

#### Inherited from

[VolumeChunkSpecificationDefaultCompressionOptions](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationDefaultCompressionOptions.md).[maxCompressedSegmentationBlockSize](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationDefaultCompressionOptions.md#maxcompressedsegmentationblocksize)

#### Defined in

[src/neuroglancer/sliceview/volume/base.ts:89](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/base.ts#L89)

___

### minBlockSize

• `Optional` **minBlockSize**: `Uint32Array`

#### Inherited from

[VolumeChunkSpecificationDefaultCompressionOptions](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationDefaultCompressionOptions.md).[minBlockSize](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationDefaultCompressionOptions.md#minblocksize)

#### Defined in

[src/neuroglancer/sliceview/volume/base.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/base.ts#L90)

___

### rank

• **rank**: `number`

#### Inherited from

[VolumeChunkSpecificationBaseOptions](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationBaseOptions.md).[rank](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationBaseOptions.md#rank)

#### Defined in

[src/neuroglancer/sliceview/base.ts:651](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/base.ts#L651)

___

### upperVoxelBound

• **upperVoxelBound**: `Float32Array`

Exclusive upper bound in "chunk" coordinate space, in voxels.  This determines upperChunkBound.

#### Inherited from

[VolumeChunkSpecificationBaseOptions](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationBaseOptions.md).[upperVoxelBound](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationBaseOptions.md#uppervoxelbound)

#### Defined in

[src/neuroglancer/sliceview/base.ts:662](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/base.ts#L662)

___

### volumeSourceOptions

• **volumeSourceOptions**: [`VolumeSourceOptions`](neuroglancer_sliceview_volume_base.VolumeSourceOptions.md)

#### Inherited from

[VolumeChunkSpecificationVolumeSourceOptions](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationVolumeSourceOptions.md).[volumeSourceOptions](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationVolumeSourceOptions.md#volumesourceoptions)

#### Defined in

[src/neuroglancer/sliceview/volume/base.ts:78](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/base.ts#L78)

___

### volumeType

• **volumeType**: [`VolumeType`](../enums/neuroglancer_sliceview_volume_base.VolumeType.md)

Volume type.

#### Inherited from

[VolumeChunkSpecificationDefaultCompressionOptions](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationDefaultCompressionOptions.md).[volumeType](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationDefaultCompressionOptions.md#volumetype)

#### Defined in

[src/neuroglancer/sliceview/volume/base.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/base.ts#L88)
