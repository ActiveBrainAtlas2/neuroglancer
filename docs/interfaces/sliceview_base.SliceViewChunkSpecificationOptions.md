[neuroglancer](../README.md) / [Modules](../modules.md) / [sliceview/base](../modules/sliceview_base.md) / SliceViewChunkSpecificationOptions

# Interface: SliceViewChunkSpecificationOptions<ChunkDataSize\>

[sliceview/base](../modules/sliceview_base.md).SliceViewChunkSpecificationOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `ChunkDataSize` | extends `Uint32Array` \| `Float32Array` = `Uint32Array` \| `Float32Array` |

## Hierarchy

- [`SliceViewChunkSpecificationBaseOptions`](sliceview_base.SliceViewChunkSpecificationBaseOptions.md)

  ↳ **`SliceViewChunkSpecificationOptions`**

## Table of contents

### Properties

- [chunkDataSize](sliceview_base.SliceViewChunkSpecificationOptions.md#chunkdatasize)
- [lowerVoxelBound](sliceview_base.SliceViewChunkSpecificationOptions.md#lowervoxelbound)
- [rank](sliceview_base.SliceViewChunkSpecificationOptions.md#rank)
- [upperVoxelBound](sliceview_base.SliceViewChunkSpecificationOptions.md#uppervoxelbound)

## Properties

### chunkDataSize

• **chunkDataSize**: `ChunkDataSize`

#### Defined in

[src/neuroglancer/sliceview/base.ts:668](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L668)

___

### lowerVoxelBound

• `Optional` **lowerVoxelBound**: `Float32Array`

If not specified, defaults to an all-zero vector.  This determines lowerChunkBound.  If this is
not a multiple of chunkDataSize, then voxels at lower positions may still be requested.

#### Inherited from

[SliceViewChunkSpecificationBaseOptions](sliceview_base.SliceViewChunkSpecificationBaseOptions.md).[lowerVoxelBound](sliceview_base.SliceViewChunkSpecificationBaseOptions.md#lowervoxelbound)

#### Defined in

[src/neuroglancer/sliceview/base.ts:657](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L657)

___

### rank

• **rank**: `number`

#### Inherited from

[SliceViewChunkSpecificationBaseOptions](sliceview_base.SliceViewChunkSpecificationBaseOptions.md).[rank](sliceview_base.SliceViewChunkSpecificationBaseOptions.md#rank)

#### Defined in

[src/neuroglancer/sliceview/base.ts:651](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L651)

___

### upperVoxelBound

• **upperVoxelBound**: `Float32Array`

Exclusive upper bound in "chunk" coordinate space, in voxels.  This determines upperChunkBound.

#### Inherited from

[SliceViewChunkSpecificationBaseOptions](sliceview_base.SliceViewChunkSpecificationBaseOptions.md).[upperVoxelBound](sliceview_base.SliceViewChunkSpecificationBaseOptions.md#uppervoxelbound)

#### Defined in

[src/neuroglancer/sliceview/base.ts:662](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L662)
