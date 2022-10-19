[neuroglancer](../README.md) / [Modules](../modules.md) / [datasource](../modules/datasource.md) / [<internal\>](../modules/datasource._internal_.md) / VolumeChunkSpecification

# Interface: VolumeChunkSpecification

[datasource](../modules/datasource.md).[<internal>](../modules/datasource._internal_.md).VolumeChunkSpecification

## Hierarchy

- [`SliceViewChunkSpecification`](sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array`\>

  ↳ **`VolumeChunkSpecification`**

## Table of contents

### Properties

- [baseVoxelOffset](datasource._internal_.VolumeChunkSpecification.md#basevoxeloffset)
- [chunkDataSize](datasource._internal_.VolumeChunkSpecification.md#chunkdatasize)
- [compressedSegmentationBlockSize](datasource._internal_.VolumeChunkSpecification.md#compressedsegmentationblocksize)
- [dataType](datasource._internal_.VolumeChunkSpecification.md#datatype)
- [lowerChunkBound](datasource._internal_.VolumeChunkSpecification.md#lowerchunkbound)
- [lowerVoxelBound](datasource._internal_.VolumeChunkSpecification.md#lowervoxelbound)
- [rank](datasource._internal_.VolumeChunkSpecification.md#rank)
- [upperChunkBound](datasource._internal_.VolumeChunkSpecification.md#upperchunkbound)
- [upperVoxelBound](datasource._internal_.VolumeChunkSpecification.md#uppervoxelbound)

## Properties

### baseVoxelOffset

• **baseVoxelOffset**: `Float32Array`

#### Defined in

[src/neuroglancer/sliceview/volume/base.ts:114](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/volume/base.ts#L114)

___

### chunkDataSize

• **chunkDataSize**: `Uint32Array`

Size of chunk in voxels.

#### Inherited from

[SliceViewChunkSpecification](sliceview_base.SliceViewChunkSpecification.md).[chunkDataSize](sliceview_base.SliceViewChunkSpecification.md#chunkdatasize)

#### Defined in

[src/neuroglancer/sliceview/base.ts:548](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L548)

___

### compressedSegmentationBlockSize

• **compressedSegmentationBlockSize**: `undefined` \| [`vec3`](../classes/util_geom.vec3.md)

#### Defined in

[src/neuroglancer/sliceview/volume/base.ts:116](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/volume/base.ts#L116)

___

### dataType

• **dataType**: [`DataType`](../enums/util_data_type.DataType.md)

#### Defined in

[src/neuroglancer/sliceview/volume/base.ts:115](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/volume/base.ts#L115)

___

### lowerChunkBound

• **lowerChunkBound**: `Float32Array`

All valid chunks are in the range [lowerChunkBound, upperChunkBound).

These are specified in units of chunks (not voxels).

#### Inherited from

[SliceViewChunkSpecification](sliceview_base.SliceViewChunkSpecification.md).[lowerChunkBound](sliceview_base.SliceViewChunkSpecification.md#lowerchunkbound)

#### Defined in

[src/neuroglancer/sliceview/base.ts:555](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L555)

___

### lowerVoxelBound

• **lowerVoxelBound**: `Float32Array`

#### Inherited from

[SliceViewChunkSpecification](sliceview_base.SliceViewChunkSpecification.md).[lowerVoxelBound](sliceview_base.SliceViewChunkSpecification.md#lowervoxelbound)

#### Defined in

[src/neuroglancer/sliceview/base.ts:558](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L558)

___

### rank

• **rank**: `number`

#### Inherited from

[SliceViewChunkSpecification](sliceview_base.SliceViewChunkSpecification.md).[rank](sliceview_base.SliceViewChunkSpecification.md#rank)

#### Defined in

[src/neuroglancer/sliceview/base.ts:543](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L543)

___

### upperChunkBound

• **upperChunkBound**: `Float32Array`

#### Inherited from

[SliceViewChunkSpecification](sliceview_base.SliceViewChunkSpecification.md).[upperChunkBound](sliceview_base.SliceViewChunkSpecification.md#upperchunkbound)

#### Defined in

[src/neuroglancer/sliceview/base.ts:556](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L556)

___

### upperVoxelBound

• **upperVoxelBound**: `Float32Array`

#### Inherited from

[SliceViewChunkSpecification](sliceview_base.SliceViewChunkSpecification.md).[upperVoxelBound](sliceview_base.SliceViewChunkSpecification.md#uppervoxelbound)

#### Defined in

[src/neuroglancer/sliceview/base.ts:559](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L559)
