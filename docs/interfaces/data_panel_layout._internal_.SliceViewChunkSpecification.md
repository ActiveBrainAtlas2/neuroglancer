[neuroglancer](../README.md) / [Modules](../modules.md) / [data\_panel\_layout](../modules/data_panel_layout.md) / [<internal\>](../modules/data_panel_layout._internal_.md) / SliceViewChunkSpecification

# Interface: SliceViewChunkSpecification<ChunkDataSize\>

[data_panel_layout](../modules/data_panel_layout.md).[<internal>](../modules/data_panel_layout._internal_.md).SliceViewChunkSpecification

Generic specification for SliceView chunks specifying a layout and voxel size.

## Type parameters

| Name | Type |
| :------ | :------ |
| `ChunkDataSize` | extends `Uint32Array` \| `Float32Array` = `Uint32Array` \| `Float32Array` |

## Hierarchy

- **`SliceViewChunkSpecification`**

  ↳ [`AnnotationGeometryChunkSpecification`](image_user_layer._internal_.AnnotationGeometryChunkSpecification.md)

  ↳ [`VolumeChunkSpecification`](layer._internal_.VolumeChunkSpecification.md)

## Table of contents

### Properties

- [chunkDataSize](data_panel_layout._internal_.SliceViewChunkSpecification.md#chunkdatasize)
- [lowerChunkBound](data_panel_layout._internal_.SliceViewChunkSpecification.md#lowerchunkbound)
- [lowerVoxelBound](data_panel_layout._internal_.SliceViewChunkSpecification.md#lowervoxelbound)
- [rank](data_panel_layout._internal_.SliceViewChunkSpecification.md#rank)
- [upperChunkBound](data_panel_layout._internal_.SliceViewChunkSpecification.md#upperchunkbound)
- [upperVoxelBound](data_panel_layout._internal_.SliceViewChunkSpecification.md#uppervoxelbound)

## Properties

### chunkDataSize

• **chunkDataSize**: `ChunkDataSize`

Size of chunk in voxels.

#### Defined in

[src/neuroglancer/sliceview/base.ts:548](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L548)

___

### lowerChunkBound

• **lowerChunkBound**: `Float32Array`

All valid chunks are in the range [lowerChunkBound, upperChunkBound).

These are specified in units of chunks (not voxels).

#### Defined in

[src/neuroglancer/sliceview/base.ts:555](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L555)

___

### lowerVoxelBound

• **lowerVoxelBound**: `Float32Array`

#### Defined in

[src/neuroglancer/sliceview/base.ts:558](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L558)

___

### rank

• **rank**: `number`

#### Defined in

[src/neuroglancer/sliceview/base.ts:543](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L543)

___

### upperChunkBound

• **upperChunkBound**: `Float32Array`

#### Defined in

[src/neuroglancer/sliceview/base.ts:556](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L556)

___

### upperVoxelBound

• **upperVoxelBound**: `Float32Array`

#### Defined in

[src/neuroglancer/sliceview/base.ts:559](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L559)
