[neuroglancer](../README.md) / [Modules](../modules.md) / [sliceview/base](../modules/sliceview_base.md) / GetNearIsotropicBlockSizeOptions

# Interface: GetNearIsotropicBlockSizeOptions

[sliceview/base](../modules/sliceview_base.md).GetNearIsotropicBlockSizeOptions

## Hierarchy

- [`BaseChunkLayoutOptions`](sliceview_base.BaseChunkLayoutOptions.md)

  ↳ **`GetNearIsotropicBlockSizeOptions`**

## Table of contents

### Properties

- [chunkToViewTransform](sliceview_base.GetNearIsotropicBlockSizeOptions.md#chunktoviewtransform)
- [displayRank](sliceview_base.GetNearIsotropicBlockSizeOptions.md#displayrank)
- [lowerVoxelBound](sliceview_base.GetNearIsotropicBlockSizeOptions.md#lowervoxelbound)
- [maxBlockSize](sliceview_base.GetNearIsotropicBlockSizeOptions.md#maxblocksize)
- [maxVoxelsPerChunkLog2](sliceview_base.GetNearIsotropicBlockSizeOptions.md#maxvoxelsperchunklog2)
- [minBlockSize](sliceview_base.GetNearIsotropicBlockSizeOptions.md#minblocksize)
- [rank](sliceview_base.GetNearIsotropicBlockSizeOptions.md#rank)
- [upperVoxelBound](sliceview_base.GetNearIsotropicBlockSizeOptions.md#uppervoxelbound)

## Properties

### chunkToViewTransform

• **chunkToViewTransform**: `Float32Array`

Linear (not affine) transformation matrix with `rank` columns and `displayRank` rows in
column-major order.  Specifies the transformation from chunk space to an isotropic "camera view
space".  Note that only relative scales of input dimensions are relevant, any rotations applied
are irrelevant.

#### Inherited from

[BaseChunkLayoutOptions](sliceview_base.BaseChunkLayoutOptions.md).[chunkToViewTransform](sliceview_base.BaseChunkLayoutOptions.md#chunktoviewtransform)

#### Defined in

[src/neuroglancer/sliceview/base.ts:357](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L357)

___

### displayRank

• **displayRank**: `number`

#### Inherited from

[BaseChunkLayoutOptions](sliceview_base.BaseChunkLayoutOptions.md).[displayRank](sliceview_base.BaseChunkLayoutOptions.md#displayrank)

#### Defined in

[src/neuroglancer/sliceview/base.ts:358](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L358)

___

### lowerVoxelBound

• `Optional` **lowerVoxelBound**: `Float32Array`

This, together with upperVoxelBound, specifies the total volume dimensions, which serves as a
bound on the maximum chunk size.  If not specified, defaults to a zero vector.

#### Inherited from

[BaseChunkLayoutOptions](sliceview_base.BaseChunkLayoutOptions.md).[lowerVoxelBound](sliceview_base.BaseChunkLayoutOptions.md#lowervoxelbound)

#### Defined in

[src/neuroglancer/sliceview/base.ts:337](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L337)

___

### maxBlockSize

• `Optional` **maxBlockSize**: `Uint32Array`

#### Inherited from

[BaseChunkLayoutOptions](sliceview_base.BaseChunkLayoutOptions.md).[maxBlockSize](sliceview_base.BaseChunkLayoutOptions.md#maxblocksize)

#### Defined in

[src/neuroglancer/sliceview/base.ts:361](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L361)

___

### maxVoxelsPerChunkLog2

• `Optional` **maxVoxelsPerChunkLog2**: `number`

Base 2 logarithm of the maximum number of voxels per chunk.  Defaults to
DEFAULT_MAX_VOXELS_PER_CHUNK_LOG2.

#### Inherited from

[BaseChunkLayoutOptions](sliceview_base.BaseChunkLayoutOptions.md).[maxVoxelsPerChunkLog2](sliceview_base.BaseChunkLayoutOptions.md#maxvoxelsperchunklog2)

#### Defined in

[src/neuroglancer/sliceview/base.ts:349](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L349)

___

### minBlockSize

• `Optional` **minBlockSize**: `Uint32Array`

#### Inherited from

[BaseChunkLayoutOptions](sliceview_base.BaseChunkLayoutOptions.md).[minBlockSize](sliceview_base.BaseChunkLayoutOptions.md#minblocksize)

#### Defined in

[src/neuroglancer/sliceview/base.ts:360](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L360)

___

### rank

• **rank**: `number`

Number of chunk dimensions.

#### Inherited from

[BaseChunkLayoutOptions](sliceview_base.BaseChunkLayoutOptions.md).[rank](sliceview_base.BaseChunkLayoutOptions.md#rank)

#### Defined in

[src/neuroglancer/sliceview/base.ts:331](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L331)

___

### upperVoxelBound

• `Optional` **upperVoxelBound**: `Float32Array`

Upper voxel bound.  If not specified, the total volume dimensions are not used to bound the
chunk size.

#### Inherited from

[BaseChunkLayoutOptions](sliceview_base.BaseChunkLayoutOptions.md).[upperVoxelBound](sliceview_base.BaseChunkLayoutOptions.md#uppervoxelbound)

#### Defined in

[src/neuroglancer/sliceview/base.ts:343](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L343)
