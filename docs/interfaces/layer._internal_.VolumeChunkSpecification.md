[neuroglancer](../README.md) / [Modules](../modules.md) / [layer](../modules/layer.md) / [<internal\>](../modules/layer._internal_.md) / VolumeChunkSpecification

# Interface: VolumeChunkSpecification

[layer](../modules/layer.md).[<internal>](../modules/layer._internal_.md).VolumeChunkSpecification

## Hierarchy

- [`SliceViewChunkSpecification`](data_panel_layout._internal_.SliceViewChunkSpecification.md)<`Uint32Array`\>

  ↳ **`VolumeChunkSpecification`**

## Table of contents

### Properties

- [baseVoxelOffset](layer._internal_.VolumeChunkSpecification.md#basevoxeloffset)
- [chunkDataSize](layer._internal_.VolumeChunkSpecification.md#chunkdatasize)
- [compressedSegmentationBlockSize](layer._internal_.VolumeChunkSpecification.md#compressedsegmentationblocksize)
- [dataType](layer._internal_.VolumeChunkSpecification.md#datatype)
- [lowerChunkBound](layer._internal_.VolumeChunkSpecification.md#lowerchunkbound)
- [lowerVoxelBound](layer._internal_.VolumeChunkSpecification.md#lowervoxelbound)
- [rank](layer._internal_.VolumeChunkSpecification.md#rank)
- [upperChunkBound](layer._internal_.VolumeChunkSpecification.md#upperchunkbound)
- [upperVoxelBound](layer._internal_.VolumeChunkSpecification.md#uppervoxelbound)

## Properties

### baseVoxelOffset

• **baseVoxelOffset**: `Float32Array`

#### Defined in

[src/neuroglancer/sliceview/volume/base.ts:114](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/volume/base.ts#L114)

___

### chunkDataSize

• **chunkDataSize**: `Uint32Array`

Size of chunk in voxels.

#### Inherited from

[SliceViewChunkSpecification](data_panel_layout._internal_.SliceViewChunkSpecification.md).[chunkDataSize](data_panel_layout._internal_.SliceViewChunkSpecification.md#chunkdatasize)

#### Defined in

[src/neuroglancer/sliceview/base.ts:548](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L548)

___

### compressedSegmentationBlockSize

• **compressedSegmentationBlockSize**: `undefined` \| [`vec3`](../classes/axes_lines._internal_.vec3.md)

#### Defined in

[src/neuroglancer/sliceview/volume/base.ts:116](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/volume/base.ts#L116)

___

### dataType

• **dataType**: [`DataType`](../enums/image_user_layer._internal_.DataType.md)

#### Defined in

[src/neuroglancer/sliceview/volume/base.ts:115](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/volume/base.ts#L115)

___

### lowerChunkBound

• **lowerChunkBound**: `Float32Array`

All valid chunks are in the range [lowerChunkBound, upperChunkBound).

These are specified in units of chunks (not voxels).

#### Inherited from

[SliceViewChunkSpecification](data_panel_layout._internal_.SliceViewChunkSpecification.md).[lowerChunkBound](data_panel_layout._internal_.SliceViewChunkSpecification.md#lowerchunkbound)

#### Defined in

[src/neuroglancer/sliceview/base.ts:555](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L555)

___

### lowerVoxelBound

• **lowerVoxelBound**: `Float32Array`

#### Inherited from

[SliceViewChunkSpecification](data_panel_layout._internal_.SliceViewChunkSpecification.md).[lowerVoxelBound](data_panel_layout._internal_.SliceViewChunkSpecification.md#lowervoxelbound)

#### Defined in

[src/neuroglancer/sliceview/base.ts:558](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L558)

___

### rank

• **rank**: `number`

#### Inherited from

[SliceViewChunkSpecification](data_panel_layout._internal_.SliceViewChunkSpecification.md).[rank](data_panel_layout._internal_.SliceViewChunkSpecification.md#rank)

#### Defined in

[src/neuroglancer/sliceview/base.ts:543](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L543)

___

### upperChunkBound

• **upperChunkBound**: `Float32Array`

#### Inherited from

[SliceViewChunkSpecification](data_panel_layout._internal_.SliceViewChunkSpecification.md).[upperChunkBound](data_panel_layout._internal_.SliceViewChunkSpecification.md#upperchunkbound)

#### Defined in

[src/neuroglancer/sliceview/base.ts:556](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L556)

___

### upperVoxelBound

• **upperVoxelBound**: `Float32Array`

#### Inherited from

[SliceViewChunkSpecification](data_panel_layout._internal_.SliceViewChunkSpecification.md).[upperVoxelBound](data_panel_layout._internal_.SliceViewChunkSpecification.md#uppervoxelbound)

#### Defined in

[src/neuroglancer/sliceview/base.ts:559](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L559)
