[neuroglancer](../README.md) / [Modules](../modules.md) / [sliceview/base](../modules/sliceview_base.md) / SliceViewChunkSpecificationBaseOptions

# Interface: SliceViewChunkSpecificationBaseOptions

[sliceview/base](../modules/sliceview_base.md).SliceViewChunkSpecificationBaseOptions

Common parameters for SliceView Chunks.

## Hierarchy

- **`SliceViewChunkSpecificationBaseOptions`**

  ↳ [`SliceViewChunkSpecificationOptions`](sliceview_base.SliceViewChunkSpecificationOptions.md)

## Table of contents

### Properties

- [lowerVoxelBound](sliceview_base.SliceViewChunkSpecificationBaseOptions.md#lowervoxelbound)
- [rank](sliceview_base.SliceViewChunkSpecificationBaseOptions.md#rank)
- [upperVoxelBound](sliceview_base.SliceViewChunkSpecificationBaseOptions.md#uppervoxelbound)

## Properties

### lowerVoxelBound

• `Optional` **lowerVoxelBound**: `Float32Array`

If not specified, defaults to an all-zero vector.  This determines lowerChunkBound.  If this is
not a multiple of chunkDataSize, then voxels at lower positions may still be requested.

#### Defined in

[src/neuroglancer/sliceview/base.ts:657](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L657)

___

### rank

• **rank**: `number`

#### Defined in

[src/neuroglancer/sliceview/base.ts:651](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L651)

___

### upperVoxelBound

• **upperVoxelBound**: `Float32Array`

Exclusive upper bound in "chunk" coordinate space, in voxels.  This determines upperChunkBound.

#### Defined in

[src/neuroglancer/sliceview/base.ts:662](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L662)
