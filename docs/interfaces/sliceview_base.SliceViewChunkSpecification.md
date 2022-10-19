[neuroglancer](../README.md) / [Modules](../modules.md) / [sliceview/base](../modules/sliceview_base.md) / SliceViewChunkSpecification

# Interface: SliceViewChunkSpecification<ChunkDataSize\>

[sliceview/base](../modules/sliceview_base.md).SliceViewChunkSpecification

Generic specification for SliceView chunks specifying a layout and voxel size.

## Type parameters

| Name | Type |
| :------ | :------ |
| `ChunkDataSize` | extends `Uint32Array` \| `Float32Array` = `Uint32Array` \| `Float32Array` |

## Hierarchy

- **`SliceViewChunkSpecification`**

  ↳ [`AnnotationGeometryChunkSpecification`](annotation_base.AnnotationGeometryChunkSpecification.md)

  ↳ [`VolumeChunkSpecification`](datasource._internal_.VolumeChunkSpecification.md)

## Table of contents

### Properties

- [chunkDataSize](sliceview_base.SliceViewChunkSpecification.md#chunkdatasize)
- [lowerChunkBound](sliceview_base.SliceViewChunkSpecification.md#lowerchunkbound)
- [lowerVoxelBound](sliceview_base.SliceViewChunkSpecification.md#lowervoxelbound)
- [rank](sliceview_base.SliceViewChunkSpecification.md#rank)
- [upperChunkBound](sliceview_base.SliceViewChunkSpecification.md#upperchunkbound)
- [upperVoxelBound](sliceview_base.SliceViewChunkSpecification.md#uppervoxelbound)

## Properties

### chunkDataSize

• **chunkDataSize**: `ChunkDataSize`

Size of chunk in voxels.

#### Defined in

[src/neuroglancer/sliceview/base.ts:548](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L548)

___

### lowerChunkBound

• **lowerChunkBound**: `Float32Array`

All valid chunks are in the range [lowerChunkBound, upperChunkBound).

These are specified in units of chunks (not voxels).

#### Defined in

[src/neuroglancer/sliceview/base.ts:555](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L555)

___

### lowerVoxelBound

• **lowerVoxelBound**: `Float32Array`

#### Defined in

[src/neuroglancer/sliceview/base.ts:558](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L558)

___

### rank

• **rank**: `number`

#### Defined in

[src/neuroglancer/sliceview/base.ts:543](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L543)

___

### upperChunkBound

• **upperChunkBound**: `Float32Array`

#### Defined in

[src/neuroglancer/sliceview/base.ts:556](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L556)

___

### upperVoxelBound

• **upperVoxelBound**: `Float32Array`

#### Defined in

[src/neuroglancer/sliceview/base.ts:559](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L559)
