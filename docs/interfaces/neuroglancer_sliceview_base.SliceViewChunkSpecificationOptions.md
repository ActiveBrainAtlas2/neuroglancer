[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/base](../modules/neuroglancer_sliceview_base.md) / SliceViewChunkSpecificationOptions

# Interface: SliceViewChunkSpecificationOptions<ChunkDataSize\>

[neuroglancer/sliceview/base](../modules/neuroglancer_sliceview_base.md).SliceViewChunkSpecificationOptions

Common parameters for SliceView Chunks.

## Type parameters

| Name | Type |
| :------ | :------ |
| `ChunkDataSize` | extends `Uint32Array` \| `Float32Array` = `Uint32Array` \| `Float32Array` |

## Hierarchy

- [`SliceViewChunkSpecificationBaseOptions`](neuroglancer_sliceview_base.SliceViewChunkSpecificationBaseOptions.md)

  ↳ **`SliceViewChunkSpecificationOptions`**

  ↳↳ [`VolumeChunkSpecificationOptions`](neuroglancer_sliceview_volume_base.VolumeChunkSpecificationOptions.md)

## Table of contents

### Properties

- [chunkDataSize](neuroglancer_sliceview_base.SliceViewChunkSpecificationOptions.md#chunkdatasize)
- [lowerVoxelBound](neuroglancer_sliceview_base.SliceViewChunkSpecificationOptions.md#lowervoxelbound)
- [rank](neuroglancer_sliceview_base.SliceViewChunkSpecificationOptions.md#rank)
- [upperVoxelBound](neuroglancer_sliceview_base.SliceViewChunkSpecificationOptions.md#uppervoxelbound)

## Properties

### chunkDataSize

• **chunkDataSize**: `ChunkDataSize`

#### Defined in

[src/neuroglancer/sliceview/base.ts:668](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/base.ts#L668)

___

### lowerVoxelBound

• `Optional` **lowerVoxelBound**: `Float32Array`

If not specified, defaults to an all-zero vector.  This determines lowerChunkBound.  If this is
not a multiple of chunkDataSize, then voxels at lower positions may still be requested.

#### Inherited from

[SliceViewChunkSpecificationBaseOptions](neuroglancer_sliceview_base.SliceViewChunkSpecificationBaseOptions.md).[lowerVoxelBound](neuroglancer_sliceview_base.SliceViewChunkSpecificationBaseOptions.md#lowervoxelbound)

#### Defined in

[src/neuroglancer/sliceview/base.ts:657](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/base.ts#L657)

___

### rank

• **rank**: `number`

#### Inherited from

[SliceViewChunkSpecificationBaseOptions](neuroglancer_sliceview_base.SliceViewChunkSpecificationBaseOptions.md).[rank](neuroglancer_sliceview_base.SliceViewChunkSpecificationBaseOptions.md#rank)

#### Defined in

[src/neuroglancer/sliceview/base.ts:651](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/base.ts#L651)

___

### upperVoxelBound

• **upperVoxelBound**: `Float32Array`

Exclusive upper bound in "chunk" coordinate space, in voxels.  This determines upperChunkBound.

#### Inherited from

[SliceViewChunkSpecificationBaseOptions](neuroglancer_sliceview_base.SliceViewChunkSpecificationBaseOptions.md).[upperVoxelBound](neuroglancer_sliceview_base.SliceViewChunkSpecificationBaseOptions.md#uppervoxelbound)

#### Defined in

[src/neuroglancer/sliceview/base.ts:662](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/base.ts#L662)
