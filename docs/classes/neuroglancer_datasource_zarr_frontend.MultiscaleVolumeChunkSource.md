[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/datasource/zarr/frontend](../modules/neuroglancer_datasource_zarr_frontend.md) / MultiscaleVolumeChunkSource

# Class: MultiscaleVolumeChunkSource

[neuroglancer/datasource/zarr/frontend](../modules/neuroglancer_datasource_zarr_frontend.md).MultiscaleVolumeChunkSource

## Hierarchy

- [`MultiscaleVolumeChunkSource`](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md)

  ↳ **`MultiscaleVolumeChunkSource`**

## Table of contents

### Constructors

- [constructor](neuroglancer_datasource_zarr_frontend.MultiscaleVolumeChunkSource.md#constructor)

### Properties

- [attrs](neuroglancer_datasource_zarr_frontend.MultiscaleVolumeChunkSource.md#attrs)
- [chunkManager](neuroglancer_datasource_zarr_frontend.MultiscaleVolumeChunkSource.md#chunkmanager)
- [credentialsProvider](neuroglancer_datasource_zarr_frontend.MultiscaleVolumeChunkSource.md#credentialsprovider)
- [dataType](neuroglancer_datasource_zarr_frontend.MultiscaleVolumeChunkSource.md#datatype)
- [metadata](neuroglancer_datasource_zarr_frontend.MultiscaleVolumeChunkSource.md#metadata)
- [modelSpace](neuroglancer_datasource_zarr_frontend.MultiscaleVolumeChunkSource.md#modelspace)
- [separator](neuroglancer_datasource_zarr_frontend.MultiscaleVolumeChunkSource.md#separator)
- [url](neuroglancer_datasource_zarr_frontend.MultiscaleVolumeChunkSource.md#url)
- [volumeType](neuroglancer_datasource_zarr_frontend.MultiscaleVolumeChunkSource.md#volumetype)

### Accessors

- [rank](neuroglancer_datasource_zarr_frontend.MultiscaleVolumeChunkSource.md#rank)

### Methods

- [getSources](neuroglancer_datasource_zarr_frontend.MultiscaleVolumeChunkSource.md#getsources)

## Constructors

### constructor

• **new MultiscaleVolumeChunkSource**(`chunkManager`, `credentialsProvider`, `url`, `separator`, `metadata`, `attrs`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md) |
| `credentialsProvider` | `undefined` \| [`CredentialsProvider`](neuroglancer_credentials_provider.CredentialsProvider.md)<`any`\> |
| `url` | `string` |
| `separator` | [`ZarrSeparator`](../modules/neuroglancer_datasource_zarr_base.md#zarrseparator) |
| `metadata` | [`ZarrMetadata`](../interfaces/neuroglancer_datasource_zarr_frontend._internal_.ZarrMetadata.md) |
| `attrs` | `unknown` |

#### Overrides

[MultiscaleVolumeChunkSource](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md).[constructor](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md#constructor)

#### Defined in

[src/neuroglancer/datasource/zarr/frontend.ts:130](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/zarr/frontend.ts#L130)

## Properties

### attrs

• **attrs**: `unknown`

___

### chunkManager

• **chunkManager**: [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md)

#### Inherited from

[MultiscaleVolumeChunkSource](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md).[chunkManager](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md#chunkmanager)

___

### credentialsProvider

• **credentialsProvider**: `undefined` \| [`CredentialsProvider`](neuroglancer_credentials_provider.CredentialsProvider.md)<`any`\>

___

### dataType

• **dataType**: [`DataType`](../enums/neuroglancer_util_data_type.DataType.md)

#### Overrides

[MultiscaleVolumeChunkSource](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md).[dataType](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md#datatype)

#### Defined in

[src/neuroglancer/datasource/zarr/frontend.ts:122](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/zarr/frontend.ts#L122)

___

### metadata

• **metadata**: [`ZarrMetadata`](../interfaces/neuroglancer_datasource_zarr_frontend._internal_.ZarrMetadata.md)

___

### modelSpace

• **modelSpace**: [`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md)

#### Defined in

[src/neuroglancer/datasource/zarr/frontend.ts:124](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/zarr/frontend.ts#L124)

___

### separator

• **separator**: [`ZarrSeparator`](../modules/neuroglancer_datasource_zarr_base.md#zarrseparator)

___

### url

• **url**: `string`

___

### volumeType

• **volumeType**: [`VolumeType`](../enums/neuroglancer_sliceview_volume_base.VolumeType.md)

#### Overrides

[MultiscaleVolumeChunkSource](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md).[volumeType](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md#volumetype)

#### Defined in

[src/neuroglancer/datasource/zarr/frontend.ts:123](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/zarr/frontend.ts#L123)

## Accessors

### rank

• `get` **rank**(): `number`

#### Returns

`number`

#### Overrides

GenericMultiscaleVolumeChunkSource.rank

#### Defined in

[src/neuroglancer/datasource/zarr/frontend.ts:126](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/zarr/frontend.ts#L126)

## Methods

### getSources

▸ **getSources**(`volumeSourceOptions`): [`SliceViewSingleResolutionSource`](../interfaces/neuroglancer_sliceview_frontend.SliceViewSingleResolutionSource.md)<[`VolumeChunkSource`](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md)\>[][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `volumeSourceOptions` | [`VolumeSourceOptions`](../interfaces/neuroglancer_sliceview_volume_base.VolumeSourceOptions.md) |

#### Returns

[`SliceViewSingleResolutionSource`](../interfaces/neuroglancer_sliceview_frontend.SliceViewSingleResolutionSource.md)<[`VolumeChunkSource`](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md)\>[][]

#### Overrides

[MultiscaleVolumeChunkSource](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md).[getSources](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md#getsources)

#### Defined in

[src/neuroglancer/datasource/zarr/frontend.ts:154](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/zarr/frontend.ts#L154)
