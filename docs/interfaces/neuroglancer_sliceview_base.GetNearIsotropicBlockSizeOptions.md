[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/base](../modules/neuroglancer_sliceview_base.md) / GetNearIsotropicBlockSizeOptions

# Interface: GetNearIsotropicBlockSizeOptions

[neuroglancer/sliceview/base](../modules/neuroglancer_sliceview_base.md).GetNearIsotropicBlockSizeOptions

## Hierarchy

- [`BaseChunkLayoutOptions`](neuroglancer_sliceview_base.BaseChunkLayoutOptions.md)

  ↳ **`GetNearIsotropicBlockSizeOptions`**

## Table of contents

### Properties

- [chunkToViewTransform](neuroglancer_sliceview_base.GetNearIsotropicBlockSizeOptions.md#chunktoviewtransform)
- [displayRank](neuroglancer_sliceview_base.GetNearIsotropicBlockSizeOptions.md#displayrank)
- [lowerVoxelBound](neuroglancer_sliceview_base.GetNearIsotropicBlockSizeOptions.md#lowervoxelbound)
- [maxBlockSize](neuroglancer_sliceview_base.GetNearIsotropicBlockSizeOptions.md#maxblocksize)
- [maxVoxelsPerChunkLog2](neuroglancer_sliceview_base.GetNearIsotropicBlockSizeOptions.md#maxvoxelsperchunklog2)
- [minBlockSize](neuroglancer_sliceview_base.GetNearIsotropicBlockSizeOptions.md#minblocksize)
- [rank](neuroglancer_sliceview_base.GetNearIsotropicBlockSizeOptions.md#rank)
- [upperVoxelBound](neuroglancer_sliceview_base.GetNearIsotropicBlockSizeOptions.md#uppervoxelbound)

## Properties

### chunkToViewTransform

• **chunkToViewTransform**: `Float32Array`

Linear (not affine) transformation matrix with `rank` columns and `displayRank` rows in
column-major order.  Specifies the transformation from chunk space to an isotropic "camera view
space".  Note that only relative scales of input dimensions are relevant, any rotations applied
are irrelevant.

#### Inherited from

[BaseChunkLayoutOptions](neuroglancer_sliceview_base.BaseChunkLayoutOptions.md).[chunkToViewTransform](neuroglancer_sliceview_base.BaseChunkLayoutOptions.md#chunktoviewtransform)

#### Defined in

[src/neuroglancer/sliceview/base.ts:357](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L357)

___

### displayRank

• **displayRank**: `number`

#### Inherited from

[BaseChunkLayoutOptions](neuroglancer_sliceview_base.BaseChunkLayoutOptions.md).[displayRank](neuroglancer_sliceview_base.BaseChunkLayoutOptions.md#displayrank)

#### Defined in

[src/neuroglancer/sliceview/base.ts:358](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L358)

___

### lowerVoxelBound

• `Optional` **lowerVoxelBound**: `Float32Array`

This, together with upperVoxelBound, specifies the total volume dimensions, which serves as a
bound on the maximum chunk size.  If not specified, defaults to a zero vector.

#### Inherited from

[BaseChunkLayoutOptions](neuroglancer_sliceview_base.BaseChunkLayoutOptions.md).[lowerVoxelBound](neuroglancer_sliceview_base.BaseChunkLayoutOptions.md#lowervoxelbound)

#### Defined in

[src/neuroglancer/sliceview/base.ts:337](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L337)

___

### maxBlockSize

• `Optional` **maxBlockSize**: `Uint32Array`

#### Inherited from

[BaseChunkLayoutOptions](neuroglancer_sliceview_base.BaseChunkLayoutOptions.md).[maxBlockSize](neuroglancer_sliceview_base.BaseChunkLayoutOptions.md#maxblocksize)

#### Defined in

[src/neuroglancer/sliceview/base.ts:361](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L361)

___

### maxVoxelsPerChunkLog2

• `Optional` **maxVoxelsPerChunkLog2**: `number`

Base 2 logarithm of the maximum number of voxels per chunk.  Defaults to
DEFAULT_MAX_VOXELS_PER_CHUNK_LOG2.

#### Inherited from

[BaseChunkLayoutOptions](neuroglancer_sliceview_base.BaseChunkLayoutOptions.md).[maxVoxelsPerChunkLog2](neuroglancer_sliceview_base.BaseChunkLayoutOptions.md#maxvoxelsperchunklog2)

#### Defined in

[src/neuroglancer/sliceview/base.ts:349](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L349)

___

### minBlockSize

• `Optional` **minBlockSize**: `Uint32Array`

#### Inherited from

[BaseChunkLayoutOptions](neuroglancer_sliceview_base.BaseChunkLayoutOptions.md).[minBlockSize](neuroglancer_sliceview_base.BaseChunkLayoutOptions.md#minblocksize)

#### Defined in

[src/neuroglancer/sliceview/base.ts:360](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L360)

___

### rank

• **rank**: `number`

Number of chunk dimensions.

#### Inherited from

[BaseChunkLayoutOptions](neuroglancer_sliceview_base.BaseChunkLayoutOptions.md).[rank](neuroglancer_sliceview_base.BaseChunkLayoutOptions.md#rank)

#### Defined in

[src/neuroglancer/sliceview/base.ts:331](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L331)

___

### upperVoxelBound

• `Optional` **upperVoxelBound**: `Float32Array`

Upper voxel bound.  If not specified, the total volume dimensions are not used to bound the
chunk size.

#### Inherited from

[BaseChunkLayoutOptions](neuroglancer_sliceview_base.BaseChunkLayoutOptions.md).[upperVoxelBound](neuroglancer_sliceview_base.BaseChunkLayoutOptions.md#uppervoxelbound)

#### Defined in

[src/neuroglancer/sliceview/base.ts:343](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L343)
