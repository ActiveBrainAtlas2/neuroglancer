[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/volume/frontend](../modules/neuroglancer_sliceview_volume_frontend.md) / MultiscaleVolumeChunkSource

# Class: MultiscaleVolumeChunkSource

[neuroglancer/sliceview/volume/frontend](../modules/neuroglancer_sliceview_volume_frontend.md).MultiscaleVolumeChunkSource

## Hierarchy

- [`MultiscaleSliceViewChunkSource`](neuroglancer_sliceview_frontend.MultiscaleSliceViewChunkSource.md)<[`VolumeChunkSource`](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md), [`VolumeSourceOptions`](../interfaces/neuroglancer_sliceview_volume_base.VolumeSourceOptions.md)\>

  ↳ **`MultiscaleVolumeChunkSource`**

  ↳↳ [`BossMultiscaleVolumeChunkSource`](neuroglancer_datasource_boss_frontend.BossMultiscaleVolumeChunkSource.md)

  ↳↳ [`MultiscaleVolumeChunkSource`](neuroglancer_datasource_brainmaps_frontend.MultiscaleVolumeChunkSource.md)

  ↳↳ [`MultiscaleVolumeChunkSource`](neuroglancer_datasource_n5_frontend.MultiscaleVolumeChunkSource.md)

  ↳↳ [`NiftiMultiscaleVolumeChunkSource`](neuroglancer_datasource_nifti_frontend.NiftiMultiscaleVolumeChunkSource.md)

  ↳↳ [`PythonMultiscaleVolumeChunkSource`](neuroglancer_datasource_python_frontend.PythonMultiscaleVolumeChunkSource.md)

  ↳↳ [`MultiscaleVolumeChunkSource`](neuroglancer_datasource_zarr_frontend.MultiscaleVolumeChunkSource.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md#constructor)

### Properties

- [chunkManager](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md#chunkmanager)
- [dataType](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md#datatype)
- [volumeType](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md#volumetype)

### Accessors

- [rank](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md#rank)

### Methods

- [getSources](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md#getsources)

## Constructors

### constructor

• **new MultiscaleVolumeChunkSource**(`chunkManager`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md) |

#### Inherited from

[MultiscaleSliceViewChunkSource](neuroglancer_sliceview_frontend.MultiscaleSliceViewChunkSource.md).[constructor](neuroglancer_sliceview_frontend.MultiscaleSliceViewChunkSource.md#constructor)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:609](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/frontend.ts#L609)

## Properties

### chunkManager

• **chunkManager**: [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md)

#### Inherited from

[MultiscaleSliceViewChunkSource](neuroglancer_sliceview_frontend.MultiscaleSliceViewChunkSource.md).[chunkManager](neuroglancer_sliceview_frontend.MultiscaleSliceViewChunkSource.md#chunkmanager)

___

### dataType

• `Abstract` **dataType**: [`DataType`](../enums/neuroglancer_util_data_type.DataType.md)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:244](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/frontend.ts#L244)

___

### volumeType

• `Abstract` **volumeType**: [`VolumeType`](../enums/neuroglancer_sliceview_volume_base.VolumeType.md)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/frontend.ts#L245)

## Accessors

### rank

• `Abstract` `get` **rank**(): `number`

#### Returns

`number`

#### Inherited from

MultiscaleSliceViewChunkSource.rank

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:599](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/frontend.ts#L599)

## Methods

### getSources

▸ `Abstract` **getSources**(`options`): [`SliceViewSingleResolutionSource`](../interfaces/neuroglancer_sliceview_frontend.SliceViewSingleResolutionSource.md)<[`VolumeChunkSource`](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md)\>[][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`VolumeSourceOptions`](../interfaces/neuroglancer_sliceview_volume_base.VolumeSourceOptions.md) |

#### Returns

[`SliceViewSingleResolutionSource`](../interfaces/neuroglancer_sliceview_frontend.SliceViewSingleResolutionSource.md)<[`VolumeChunkSource`](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md)\>[][]

Chunk sources for each scale, ordered by increasing minVoxelSize.  Outer array indexes
over alternative chunk orientations.  The inner array indexes over scale.

Every chunk source must have rank equal to `this.rank`.

#### Inherited from

[MultiscaleSliceViewChunkSource](neuroglancer_sliceview_frontend.MultiscaleSliceViewChunkSource.md).[getSources](neuroglancer_sliceview_frontend.MultiscaleSliceViewChunkSource.md#getsources)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:607](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/frontend.ts#L607)
