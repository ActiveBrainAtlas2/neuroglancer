[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/base](../modules/neuroglancer_sliceview_base.md) / SliceViewChunkSpecificationBaseOptions

# Interface: SliceViewChunkSpecificationBaseOptions

[neuroglancer/sliceview/base](../modules/neuroglancer_sliceview_base.md).SliceViewChunkSpecificationBaseOptions

Common parameters for SliceView Chunks.

## Hierarchy

- **`SliceViewChunkSpecificationBaseOptions`**

  ↳ [`SliceViewChunkSpecificationOptions`](neuroglancer_sliceview_base.SliceViewChunkSpecificationOptions.md)

  ↳ [`VolumeChunkSpecificationBaseOptions`](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationBaseOptions.md)

## Table of contents

### Properties

- [lowerVoxelBound](neuroglancer_sliceview_base.SliceViewChunkSpecificationBaseOptions.md#lowervoxelbound)
- [rank](neuroglancer_sliceview_base.SliceViewChunkSpecificationBaseOptions.md#rank)
- [upperVoxelBound](neuroglancer_sliceview_base.SliceViewChunkSpecificationBaseOptions.md#uppervoxelbound)

## Properties

### lowerVoxelBound

• `Optional` **lowerVoxelBound**: `Float32Array`

If not specified, defaults to an all-zero vector.  This determines lowerChunkBound.  If this is
not a multiple of chunkDataSize, then voxels at lower positions may still be requested.

#### Defined in

[src/neuroglancer/sliceview/base.ts:657](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/base.ts#L657)

___

### rank

• **rank**: `number`

#### Defined in

[src/neuroglancer/sliceview/base.ts:651](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/base.ts#L651)

___

### upperVoxelBound

• **upperVoxelBound**: `Float32Array`

Exclusive upper bound in "chunk" coordinate space, in voxels.  This determines upperChunkBound.

#### Defined in

[src/neuroglancer/sliceview/base.ts:662](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/base.ts#L662)
