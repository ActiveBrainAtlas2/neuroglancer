[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/datasource/n5/frontend](../modules/neuroglancer_datasource_n5_frontend.md) / MultiscaleVolumeChunkSource

# Class: MultiscaleVolumeChunkSource

[neuroglancer/datasource/n5/frontend](../modules/neuroglancer_datasource_n5_frontend.md).MultiscaleVolumeChunkSource

## Hierarchy

- [`MultiscaleVolumeChunkSource`](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md)

  ↳ **`MultiscaleVolumeChunkSource`**

## Table of contents

### Constructors

- [constructor](neuroglancer_datasource_n5_frontend.MultiscaleVolumeChunkSource.md#constructor)

### Properties

- [baseScaleIndex](neuroglancer_datasource_n5_frontend.MultiscaleVolumeChunkSource.md#basescaleindex)
- [chunkManager](neuroglancer_datasource_n5_frontend.MultiscaleVolumeChunkSource.md#chunkmanager)
- [credentialsProvider](neuroglancer_datasource_n5_frontend.MultiscaleVolumeChunkSource.md#credentialsprovider)
- [dataType](neuroglancer_datasource_n5_frontend.MultiscaleVolumeChunkSource.md#datatype)
- [modelSpace](neuroglancer_datasource_n5_frontend.MultiscaleVolumeChunkSource.md#modelspace)
- [multiscaleMetadata](neuroglancer_datasource_n5_frontend.MultiscaleVolumeChunkSource.md#multiscalemetadata)
- [scales](neuroglancer_datasource_n5_frontend.MultiscaleVolumeChunkSource.md#scales)
- [volumeType](neuroglancer_datasource_n5_frontend.MultiscaleVolumeChunkSource.md#volumetype)

### Accessors

- [rank](neuroglancer_datasource_n5_frontend.MultiscaleVolumeChunkSource.md#rank)

### Methods

- [getSources](neuroglancer_datasource_n5_frontend.MultiscaleVolumeChunkSource.md#getsources)

## Constructors

### constructor

• **new MultiscaleVolumeChunkSource**(`chunkManager`, `credentialsProvider`, `multiscaleMetadata`, `scales`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md) |
| `credentialsProvider` | `undefined` \| [`CredentialsProvider`](neuroglancer_credentials_provider.CredentialsProvider.md)<`any`\> |
| `multiscaleMetadata` | [`MultiscaleMetadata`](../interfaces/neuroglancer_datasource_n5_frontend._internal_.MultiscaleMetadata.md) |
| `scales` | (`undefined` \| [`ScaleMetadata`](neuroglancer_datasource_n5_frontend._internal_.ScaleMetadata.md))[] |

#### Overrides

[MultiscaleVolumeChunkSource](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md).[constructor](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md#constructor)

#### Defined in

[src/neuroglancer/datasource/n5/frontend.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/n5/frontend.ts#L59)

## Properties

### baseScaleIndex

• **baseScaleIndex**: `number`

#### Defined in

[src/neuroglancer/datasource/n5/frontend.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/n5/frontend.ts#L51)

___

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

[src/neuroglancer/datasource/n5/frontend.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/n5/frontend.ts#L61)

___

### dataType

• **dataType**: [`DataType`](../enums/neuroglancer_util_data_type.DataType.md)

#### Overrides

[MultiscaleVolumeChunkSource](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md).[dataType](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md#datatype)

#### Defined in

[src/neuroglancer/datasource/n5/frontend.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/n5/frontend.ts#L49)

___

### modelSpace

• **modelSpace**: [`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md)

#### Defined in

[src/neuroglancer/datasource/n5/frontend.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/n5/frontend.ts#L53)

___

### multiscaleMetadata

• **multiscaleMetadata**: [`MultiscaleMetadata`](../interfaces/neuroglancer_datasource_n5_frontend._internal_.MultiscaleMetadata.md)

#### Defined in

[src/neuroglancer/datasource/n5/frontend.ts:62](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/n5/frontend.ts#L62)

___

### scales

• **scales**: (`undefined` \| [`ScaleMetadata`](neuroglancer_datasource_n5_frontend._internal_.ScaleMetadata.md))[]

#### Defined in

[src/neuroglancer/datasource/n5/frontend.ts:62](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/n5/frontend.ts#L62)

___

### volumeType

• **volumeType**: [`VolumeType`](../enums/neuroglancer_sliceview_volume_base.VolumeType.md)

#### Overrides

[MultiscaleVolumeChunkSource](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md).[volumeType](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md#volumetype)

#### Defined in

[src/neuroglancer/datasource/n5/frontend.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/n5/frontend.ts#L50)

## Accessors

### rank

• `get` **rank**(): `number`

#### Returns

`number`

#### Overrides

GenericMultiscaleVolumeChunkSource.rank

#### Defined in

[src/neuroglancer/datasource/n5/frontend.ts:55](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/n5/frontend.ts#L55)

## Methods

### getSources

▸ **getSources**(`volumeSourceOptions`): [`SliceViewSingleResolutionSource`](../interfaces/neuroglancer_sliceview_frontend.SliceViewSingleResolutionSource.md)<[`VolumeChunkSource`](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md)\>[][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `volumeSourceOptions` | [`VolumeSourceOptions`](../interfaces/neuroglancer_sliceview_volume_base.VolumeSourceOptions.md) |

#### Returns

[`SliceViewSingleResolutionSource`](../interfaces/neuroglancer_sliceview_frontend.SliceViewSingleResolutionSource.md)<[`VolumeChunkSource`](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md)\>[][]

Chunk sources for each scale, ordered by increasing minVoxelSize.  Outer array indexes
over alternative chunk orientations.  The inner array indexes over scale.

Every chunk source must have rank equal to `this.rank`.

#### Overrides

[MultiscaleVolumeChunkSource](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md).[getSources](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md#getsources)

#### Defined in

[src/neuroglancer/datasource/n5/frontend.ts:105](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/n5/frontend.ts#L105)
