[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/datasource/nifti/frontend](../modules/neuroglancer_datasource_nifti_frontend.md) / NiftiMultiscaleVolumeChunkSource

# Class: NiftiMultiscaleVolumeChunkSource

[neuroglancer/datasource/nifti/frontend](../modules/neuroglancer_datasource_nifti_frontend.md).NiftiMultiscaleVolumeChunkSource

## Hierarchy

- [`MultiscaleVolumeChunkSource`](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md)

  ↳ **`NiftiMultiscaleVolumeChunkSource`**

## Table of contents

### Constructors

- [constructor](neuroglancer_datasource_nifti_frontend.NiftiMultiscaleVolumeChunkSource.md#constructor)

### Properties

- [chunkManager](neuroglancer_datasource_nifti_frontend.NiftiMultiscaleVolumeChunkSource.md#chunkmanager)
- [credentialsProvider](neuroglancer_datasource_nifti_frontend.NiftiMultiscaleVolumeChunkSource.md#credentialsprovider)
- [info](neuroglancer_datasource_nifti_frontend.NiftiMultiscaleVolumeChunkSource.md#info)
- [url](neuroglancer_datasource_nifti_frontend.NiftiMultiscaleVolumeChunkSource.md#url)

### Accessors

- [dataType](neuroglancer_datasource_nifti_frontend.NiftiMultiscaleVolumeChunkSource.md#datatype)
- [rank](neuroglancer_datasource_nifti_frontend.NiftiMultiscaleVolumeChunkSource.md#rank)
- [volumeType](neuroglancer_datasource_nifti_frontend.NiftiMultiscaleVolumeChunkSource.md#volumetype)

### Methods

- [getSources](neuroglancer_datasource_nifti_frontend.NiftiMultiscaleVolumeChunkSource.md#getsources)

## Constructors

### constructor

• **new NiftiMultiscaleVolumeChunkSource**(`chunkManager`, `credentialsProvider`, `url`, `info`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md) |
| `credentialsProvider` | `undefined` \| [`CredentialsProvider`](neuroglancer_credentials_provider.CredentialsProvider.md)<`any`\> |
| `url` | `string` |
| `info` | [`NiftiVolumeInfo`](../interfaces/neuroglancer_datasource_nifti_base.NiftiVolumeInfo.md) |

#### Overrides

[MultiscaleVolumeChunkSource](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md).[constructor](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md#constructor)

#### Defined in

[src/neuroglancer/datasource/nifti/frontend.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/nifti/frontend.ts#L40)

## Properties

### chunkManager

• **chunkManager**: [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md)

#### Inherited from

[MultiscaleVolumeChunkSource](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md).[chunkManager](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md#chunkmanager)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:609](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/frontend.ts#L609)

___

### credentialsProvider

• **credentialsProvider**: `undefined` \| [`CredentialsProvider`](neuroglancer_credentials_provider.CredentialsProvider.md)<`any`\>

#### Defined in

[src/neuroglancer/datasource/nifti/frontend.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/nifti/frontend.ts#L41)

___

### info

• **info**: [`NiftiVolumeInfo`](../interfaces/neuroglancer_datasource_nifti_base.NiftiVolumeInfo.md)

#### Defined in

[src/neuroglancer/datasource/nifti/frontend.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/nifti/frontend.ts#L42)

___

### url

• **url**: `string`

#### Defined in

[src/neuroglancer/datasource/nifti/frontend.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/nifti/frontend.ts#L42)

## Accessors

### dataType

• `get` **dataType**(): [`DataType`](../enums/neuroglancer_util_data_type.DataType.md)

#### Returns

[`DataType`](../enums/neuroglancer_util_data_type.DataType.md)

#### Overrides

MultiscaleVolumeChunkSource.dataType

#### Defined in

[src/neuroglancer/datasource/nifti/frontend.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/nifti/frontend.ts#L45)

___

### rank

• `get` **rank**(): `number`

#### Returns

`number`

#### Overrides

MultiscaleVolumeChunkSource.rank

#### Defined in

[src/neuroglancer/datasource/nifti/frontend.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/nifti/frontend.ts#L51)

___

### volumeType

• `get` **volumeType**(): [`VolumeType`](../enums/neuroglancer_sliceview_volume_base.VolumeType.md)

#### Returns

[`VolumeType`](../enums/neuroglancer_sliceview_volume_base.VolumeType.md)

#### Overrides

MultiscaleVolumeChunkSource.volumeType

#### Defined in

[src/neuroglancer/datasource/nifti/frontend.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/nifti/frontend.ts#L48)

## Methods

### getSources

▸ **getSources**(`volumeSourceOptions`): { `chunkSource`: [`NiftiVolumeChunkSource`](neuroglancer_datasource_nifti_frontend._internal_.NiftiVolumeChunkSource.md) ; `chunkToMultiscaleTransform`: `Float32Array`  }[][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `volumeSourceOptions` | [`VolumeSourceOptions`](../interfaces/neuroglancer_sliceview_volume_base.VolumeSourceOptions.md) |

#### Returns

{ `chunkSource`: [`NiftiVolumeChunkSource`](neuroglancer_datasource_nifti_frontend._internal_.NiftiVolumeChunkSource.md) ; `chunkToMultiscaleTransform`: `Float32Array`  }[][]

Chunk sources for each scale, ordered by increasing minVoxelSize.  Outer array indexes
over alternative chunk orientations.  The inner array indexes over scale.

Every chunk source must have rank equal to `this.rank`.

#### Overrides

[MultiscaleVolumeChunkSource](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md).[getSources](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md#getsources)

#### Defined in

[src/neuroglancer/datasource/nifti/frontend.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/nifti/frontend.ts#L54)
