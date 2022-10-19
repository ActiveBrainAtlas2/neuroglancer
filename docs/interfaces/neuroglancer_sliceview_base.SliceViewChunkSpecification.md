[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/base](../modules/neuroglancer_sliceview_base.md) / SliceViewChunkSpecification

# Interface: SliceViewChunkSpecification<ChunkDataSize\>

[neuroglancer/sliceview/base](../modules/neuroglancer_sliceview_base.md).SliceViewChunkSpecification

Generic specification for SliceView chunks specifying a layout and voxel size.

## Type parameters

| Name | Type |
| :------ | :------ |
| `ChunkDataSize` | extends `Uint32Array` \| `Float32Array` = `Uint32Array` \| `Float32Array` |

## Hierarchy

- **`SliceViewChunkSpecification`**

  ↳ [`AnnotationGeometryChunkSpecification`](neuroglancer_annotation_base.AnnotationGeometryChunkSpecification.md)

  ↳ [`VolumeChunkSpecification`](neuroglancer_sliceview_volume_base.VolumeChunkSpecification.md)

## Table of contents

### Properties

- [chunkDataSize](neuroglancer_sliceview_base.SliceViewChunkSpecification.md#chunkdatasize)
- [lowerChunkBound](neuroglancer_sliceview_base.SliceViewChunkSpecification.md#lowerchunkbound)
- [lowerVoxelBound](neuroglancer_sliceview_base.SliceViewChunkSpecification.md#lowervoxelbound)
- [rank](neuroglancer_sliceview_base.SliceViewChunkSpecification.md#rank)
- [upperChunkBound](neuroglancer_sliceview_base.SliceViewChunkSpecification.md#upperchunkbound)
- [upperVoxelBound](neuroglancer_sliceview_base.SliceViewChunkSpecification.md#uppervoxelbound)

## Properties

### chunkDataSize

• **chunkDataSize**: `ChunkDataSize`

Size of chunk in voxels.

#### Defined in

[src/neuroglancer/sliceview/base.ts:548](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L548)

___

### lowerChunkBound

• **lowerChunkBound**: `Float32Array`

All valid chunks are in the range [lowerChunkBound, upperChunkBound).

These are specified in units of chunks (not voxels).

#### Defined in

[src/neuroglancer/sliceview/base.ts:555](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L555)

___

### lowerVoxelBound

• **lowerVoxelBound**: `Float32Array`

#### Defined in

[src/neuroglancer/sliceview/base.ts:558](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L558)

___

### rank

• **rank**: `number`

#### Defined in

[src/neuroglancer/sliceview/base.ts:543](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L543)

___

### upperChunkBound

• **upperChunkBound**: `Float32Array`

#### Defined in

[src/neuroglancer/sliceview/base.ts:556](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L556)

___

### upperVoxelBound

• **upperVoxelBound**: `Float32Array`

#### Defined in

[src/neuroglancer/sliceview/base.ts:559](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L559)
