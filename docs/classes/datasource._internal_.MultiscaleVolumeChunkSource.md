[neuroglancer](../README.md) / [Modules](../modules.md) / [datasource](../modules/datasource.md) / [<internal\>](../modules/datasource._internal_.md) / MultiscaleVolumeChunkSource

# Class: MultiscaleVolumeChunkSource

[datasource](../modules/datasource.md).[<internal>](../modules/datasource._internal_.md).MultiscaleVolumeChunkSource

## Hierarchy

- [`MultiscaleSliceViewChunkSource`](sliceview_frontend.MultiscaleSliceViewChunkSource.md)<[`VolumeChunkSource`](datasource._internal_.VolumeChunkSource.md), [`VolumeSourceOptions`](../interfaces/datasource._internal_.VolumeSourceOptions.md)\>

  ↳ **`MultiscaleVolumeChunkSource`**

## Table of contents

### Constructors

- [constructor](datasource._internal_.MultiscaleVolumeChunkSource.md#constructor)

### Properties

- [chunkManager](datasource._internal_.MultiscaleVolumeChunkSource.md#chunkmanager)
- [dataType](datasource._internal_.MultiscaleVolumeChunkSource.md#datatype)
- [volumeType](datasource._internal_.MultiscaleVolumeChunkSource.md#volumetype)

### Accessors

- [rank](datasource._internal_.MultiscaleVolumeChunkSource.md#rank)

### Methods

- [getSources](datasource._internal_.MultiscaleVolumeChunkSource.md#getsources)

## Constructors

### constructor

• **new MultiscaleVolumeChunkSource**(`chunkManager`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](chunk_manager_frontend.ChunkManager.md) |

#### Inherited from

[MultiscaleSliceViewChunkSource](sliceview_frontend.MultiscaleSliceViewChunkSource.md).[constructor](sliceview_frontend.MultiscaleSliceViewChunkSource.md#constructor)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:609](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L609)

## Properties

### chunkManager

• **chunkManager**: [`ChunkManager`](chunk_manager_frontend.ChunkManager.md)

#### Inherited from

[MultiscaleSliceViewChunkSource](sliceview_frontend.MultiscaleSliceViewChunkSource.md).[chunkManager](sliceview_frontend.MultiscaleSliceViewChunkSource.md#chunkmanager)

___

### dataType

• `Abstract` **dataType**: [`DataType`](../enums/util_data_type.DataType.md)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:244](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/volume/frontend.ts#L244)

___

### volumeType

• `Abstract` **volumeType**: [`VolumeType`](../enums/datasource._internal_.VolumeType.md)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/volume/frontend.ts#L245)

## Accessors

### rank

• `Abstract` `get` **rank**(): `number`

#### Returns

`number`

#### Inherited from

MultiscaleSliceViewChunkSource.rank

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:599](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L599)

## Methods

### getSources

▸ `Abstract` **getSources**(`options`): [`SliceViewSingleResolutionSource`](../interfaces/sliceview_frontend.SliceViewSingleResolutionSource.md)<[`VolumeChunkSource`](datasource._internal_.VolumeChunkSource.md)\>[][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`VolumeSourceOptions`](../interfaces/datasource._internal_.VolumeSourceOptions.md) |

#### Returns

[`SliceViewSingleResolutionSource`](../interfaces/sliceview_frontend.SliceViewSingleResolutionSource.md)<[`VolumeChunkSource`](datasource._internal_.VolumeChunkSource.md)\>[][]

Chunk sources for each scale, ordered by increasing minVoxelSize.  Outer array indexes
over alternative chunk orientations.  The inner array indexes over scale.

Every chunk source must have rank equal to `this.rank`.

#### Inherited from

[MultiscaleSliceViewChunkSource](sliceview_frontend.MultiscaleSliceViewChunkSource.md).[getSources](sliceview_frontend.MultiscaleSliceViewChunkSource.md#getsources)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:607](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L607)
