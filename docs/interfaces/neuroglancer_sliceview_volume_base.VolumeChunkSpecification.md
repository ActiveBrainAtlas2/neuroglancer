[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/volume/base](../modules/neuroglancer_sliceview_volume_base.md) / VolumeChunkSpecification

# Interface: VolumeChunkSpecification

[neuroglancer/sliceview/volume/base](../modules/neuroglancer_sliceview_volume_base.md).VolumeChunkSpecification

Generic specification for SliceView chunks specifying a layout and voxel size.

## Hierarchy

- [`SliceViewChunkSpecification`](neuroglancer_sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array`\>

  ↳ **`VolumeChunkSpecification`**

## Table of contents

### Properties

- [baseVoxelOffset](neuroglancer_sliceview_volume_base.VolumeChunkSpecification.md#basevoxeloffset)
- [chunkDataSize](neuroglancer_sliceview_volume_base.VolumeChunkSpecification.md#chunkdatasize)
- [compressedSegmentationBlockSize](neuroglancer_sliceview_volume_base.VolumeChunkSpecification.md#compressedsegmentationblocksize)
- [dataType](neuroglancer_sliceview_volume_base.VolumeChunkSpecification.md#datatype)
- [lowerChunkBound](neuroglancer_sliceview_volume_base.VolumeChunkSpecification.md#lowerchunkbound)
- [lowerVoxelBound](neuroglancer_sliceview_volume_base.VolumeChunkSpecification.md#lowervoxelbound)
- [rank](neuroglancer_sliceview_volume_base.VolumeChunkSpecification.md#rank)
- [upperChunkBound](neuroglancer_sliceview_volume_base.VolumeChunkSpecification.md#upperchunkbound)
- [upperVoxelBound](neuroglancer_sliceview_volume_base.VolumeChunkSpecification.md#uppervoxelbound)

## Properties

### baseVoxelOffset

• **baseVoxelOffset**: `Float32Array`

#### Defined in

[src/neuroglancer/sliceview/volume/base.ts:114](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/base.ts#L114)

___

### chunkDataSize

• **chunkDataSize**: `Uint32Array`

Size of chunk in voxels.

#### Inherited from

[SliceViewChunkSpecification](neuroglancer_sliceview_base.SliceViewChunkSpecification.md).[chunkDataSize](neuroglancer_sliceview_base.SliceViewChunkSpecification.md#chunkdatasize)

#### Defined in

[src/neuroglancer/sliceview/base.ts:548](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/base.ts#L548)

___

### compressedSegmentationBlockSize

• **compressedSegmentationBlockSize**: `undefined` \| [`vec3`](../classes/neuroglancer_util_geom.vec3.md)

#### Defined in

[src/neuroglancer/sliceview/volume/base.ts:116](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/base.ts#L116)

___

### dataType

• **dataType**: [`DataType`](../enums/neuroglancer_util_data_type.DataType.md)

#### Defined in

[src/neuroglancer/sliceview/volume/base.ts:115](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/base.ts#L115)

___

### lowerChunkBound

• **lowerChunkBound**: `Float32Array`

All valid chunks are in the range [lowerChunkBound, upperChunkBound).

These are specified in units of chunks (not voxels).

#### Inherited from

[SliceViewChunkSpecification](neuroglancer_sliceview_base.SliceViewChunkSpecification.md).[lowerChunkBound](neuroglancer_sliceview_base.SliceViewChunkSpecification.md#lowerchunkbound)

#### Defined in

[src/neuroglancer/sliceview/base.ts:555](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/base.ts#L555)

___

### lowerVoxelBound

• **lowerVoxelBound**: `Float32Array`

#### Inherited from

[SliceViewChunkSpecification](neuroglancer_sliceview_base.SliceViewChunkSpecification.md).[lowerVoxelBound](neuroglancer_sliceview_base.SliceViewChunkSpecification.md#lowervoxelbound)

#### Defined in

[src/neuroglancer/sliceview/base.ts:558](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/base.ts#L558)

___

### rank

• **rank**: `number`

#### Inherited from

[SliceViewChunkSpecification](neuroglancer_sliceview_base.SliceViewChunkSpecification.md).[rank](neuroglancer_sliceview_base.SliceViewChunkSpecification.md#rank)

#### Defined in

[src/neuroglancer/sliceview/base.ts:543](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/base.ts#L543)

___

### upperChunkBound

• **upperChunkBound**: `Float32Array`

#### Inherited from

[SliceViewChunkSpecification](neuroglancer_sliceview_base.SliceViewChunkSpecification.md).[upperChunkBound](neuroglancer_sliceview_base.SliceViewChunkSpecification.md#upperchunkbound)

#### Defined in

[src/neuroglancer/sliceview/base.ts:556](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/base.ts#L556)

___

### upperVoxelBound

• **upperVoxelBound**: `Float32Array`

#### Inherited from

[SliceViewChunkSpecification](neuroglancer_sliceview_base.SliceViewChunkSpecification.md).[upperVoxelBound](neuroglancer_sliceview_base.SliceViewChunkSpecification.md#uppervoxelbound)

#### Defined in

[src/neuroglancer/sliceview/base.ts:559](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/base.ts#L559)
