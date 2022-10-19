[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/datasource/boss/frontend](../modules/neuroglancer_datasource_boss_frontend.md) / BossMultiscaleVolumeChunkSource

# Class: BossMultiscaleVolumeChunkSource

[neuroglancer/datasource/boss/frontend](../modules/neuroglancer_datasource_boss_frontend.md).BossMultiscaleVolumeChunkSource

## Hierarchy

- [`MultiscaleVolumeChunkSource`](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md)

  ↳ **`BossMultiscaleVolumeChunkSource`**

## Table of contents

### Constructors

- [constructor](neuroglancer_datasource_boss_frontend.BossMultiscaleVolumeChunkSource.md#constructor)

### Properties

- [baseUrl](neuroglancer_datasource_boss_frontend.BossMultiscaleVolumeChunkSource.md#baseurl)
- [channel](neuroglancer_datasource_boss_frontend.BossMultiscaleVolumeChunkSource.md#channel)
- [channelInfo](neuroglancer_datasource_boss_frontend.BossMultiscaleVolumeChunkSource.md#channelinfo)
- [chunkManager](neuroglancer_datasource_boss_frontend.BossMultiscaleVolumeChunkSource.md#chunkmanager)
- [coordinateFrame](neuroglancer_datasource_boss_frontend.BossMultiscaleVolumeChunkSource.md#coordinateframe)
- [credentialsProvider](neuroglancer_datasource_boss_frontend.BossMultiscaleVolumeChunkSource.md#credentialsprovider)
- [encoding](neuroglancer_datasource_boss_frontend.BossMultiscaleVolumeChunkSource.md#encoding)
- [experiment](neuroglancer_datasource_boss_frontend.BossMultiscaleVolumeChunkSource.md#experiment)
- [experimentInfo](neuroglancer_datasource_boss_frontend.BossMultiscaleVolumeChunkSource.md#experimentinfo)
- [meshPath](neuroglancer_datasource_boss_frontend.BossMultiscaleVolumeChunkSource.md#meshpath)
- [meshUrl](neuroglancer_datasource_boss_frontend.BossMultiscaleVolumeChunkSource.md#meshurl)
- [parameters](neuroglancer_datasource_boss_frontend.BossMultiscaleVolumeChunkSource.md#parameters)
- [scales](neuroglancer_datasource_boss_frontend.BossMultiscaleVolumeChunkSource.md#scales)
- [window](neuroglancer_datasource_boss_frontend.BossMultiscaleVolumeChunkSource.md#window)

### Accessors

- [dataType](neuroglancer_datasource_boss_frontend.BossMultiscaleVolumeChunkSource.md#datatype)
- [rank](neuroglancer_datasource_boss_frontend.BossMultiscaleVolumeChunkSource.md#rank)
- [volumeType](neuroglancer_datasource_boss_frontend.BossMultiscaleVolumeChunkSource.md#volumetype)

### Methods

- [getMeshSource](neuroglancer_datasource_boss_frontend.BossMultiscaleVolumeChunkSource.md#getmeshsource)
- [getSources](neuroglancer_datasource_boss_frontend.BossMultiscaleVolumeChunkSource.md#getsources)

## Constructors

### constructor

• **new BossMultiscaleVolumeChunkSource**(`chunkManager`, `baseUrl`, `credentialsProvider`, `experimentInfo`, `channel`, `parameters`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md) |
| `baseUrl` | `string` |
| `credentialsProvider` | [`CredentialsProvider`](neuroglancer_credentials_provider.CredentialsProvider.md)<`string`\> |
| `experimentInfo` | [`ExperimentInfo`](../interfaces/neuroglancer_datasource_boss_frontend._internal_.ExperimentInfo.md) |
| `channel` | `undefined` \| `string` |
| `parameters` | `Object` |

#### Overrides

[MultiscaleVolumeChunkSource](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md).[constructor](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md#constructor)

#### Defined in

[src/neuroglancer/datasource/boss/frontend.ts:242](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/boss/frontend.ts#L242)

## Properties

### baseUrl

• **baseUrl**: `string`

___

### channel

• **channel**: `string`

The Boss channel/layer name.

#### Defined in

[src/neuroglancer/datasource/boss/frontend.ts:223](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/boss/frontend.ts#L223)

___

### channelInfo

• **channelInfo**: [`ChannelInfo`](../interfaces/neuroglancer_datasource_boss_frontend._internal_.ChannelInfo.md)

#### Defined in

[src/neuroglancer/datasource/boss/frontend.ts:231](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/boss/frontend.ts#L231)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md)

#### Inherited from

[MultiscaleVolumeChunkSource](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md).[chunkManager](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md#chunkmanager)

___

### coordinateFrame

• **coordinateFrame**: [`CoordinateFrameInfo`](../interfaces/neuroglancer_datasource_boss_frontend._internal_.CoordinateFrameInfo.md)

#### Defined in

[src/neuroglancer/datasource/boss/frontend.ts:233](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/boss/frontend.ts#L233)

___

### credentialsProvider

• **credentialsProvider**: [`CredentialsProvider`](neuroglancer_credentials_provider.CredentialsProvider.md)<`string`\>

___

### encoding

• **encoding**: `string`

#### Defined in

[src/neuroglancer/datasource/boss/frontend.ts:235](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/boss/frontend.ts#L235)

___

### experiment

• **experiment**: `string`

The Boss experiment name

#### Defined in

[src/neuroglancer/datasource/boss/frontend.ts:218](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/boss/frontend.ts#L218)

___

### experimentInfo

• **experimentInfo**: [`ExperimentInfo`](../interfaces/neuroglancer_datasource_boss_frontend._internal_.ExperimentInfo.md)

___

### meshPath

• `Optional` **meshPath**: `string` = `undefined`

Parameters for getting 3D meshes alongside segmentations

#### Defined in

[src/neuroglancer/datasource/boss/frontend.ts:228](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/boss/frontend.ts#L228)

___

### meshUrl

• `Optional` **meshUrl**: `string` = `undefined`

#### Defined in

[src/neuroglancer/datasource/boss/frontend.ts:229](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/boss/frontend.ts#L229)

___

### parameters

• **parameters**: `Object`

#### Index signature

▪ [index: `string`]: `any`

___

### scales

• **scales**: [`ScaleInfo`](../interfaces/neuroglancer_datasource_boss_frontend._internal_.ScaleInfo.md)[]

#### Defined in

[src/neuroglancer/datasource/boss/frontend.ts:232](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/boss/frontend.ts#L232)

___

### window

• **window**: `undefined` \| [`vec2`](neuroglancer_util_geom.vec2.md)

#### Defined in

[src/neuroglancer/datasource/boss/frontend.ts:236](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/boss/frontend.ts#L236)

## Accessors

### dataType

• `get` **dataType**(): [`UINT8`](../enums/neuroglancer_util_data_type.DataType.md#uint8) \| [`INT8`](../enums/neuroglancer_util_data_type.DataType.md#int8) \| [`INT16`](../enums/neuroglancer_util_data_type.DataType.md#int16) \| [`UINT32`](../enums/neuroglancer_util_data_type.DataType.md#uint32) \| [`INT32`](../enums/neuroglancer_util_data_type.DataType.md#int32) \| [`UINT64`](../enums/neuroglancer_util_data_type.DataType.md#uint64) \| [`FLOAT32`](../enums/neuroglancer_util_data_type.DataType.md#float32)

#### Returns

[`UINT8`](../enums/neuroglancer_util_data_type.DataType.md#uint8) \| [`INT8`](../enums/neuroglancer_util_data_type.DataType.md#int8) \| [`INT16`](../enums/neuroglancer_util_data_type.DataType.md#int16) \| [`UINT32`](../enums/neuroglancer_util_data_type.DataType.md#uint32) \| [`INT32`](../enums/neuroglancer_util_data_type.DataType.md#int32) \| [`UINT64`](../enums/neuroglancer_util_data_type.DataType.md#uint64) \| [`FLOAT32`](../enums/neuroglancer_util_data_type.DataType.md#float32)

#### Overrides

MultiscaleVolumeChunkSource.dataType

#### Defined in

[src/neuroglancer/datasource/boss/frontend.ts:204](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/boss/frontend.ts#L204)

___

### rank

• `get` **rank**(): `number`

#### Returns

`number`

#### Overrides

MultiscaleVolumeChunkSource.rank

#### Defined in

[src/neuroglancer/datasource/boss/frontend.ts:238](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/boss/frontend.ts#L238)

___

### volumeType

• `get` **volumeType**(): [`VolumeType`](../enums/neuroglancer_sliceview_volume_base.VolumeType.md)

#### Returns

[`VolumeType`](../enums/neuroglancer_sliceview_volume_base.VolumeType.md)

#### Overrides

MultiscaleVolumeChunkSource.volumeType

#### Defined in

[src/neuroglancer/datasource/boss/frontend.ts:211](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/boss/frontend.ts#L211)

## Methods

### getMeshSource

▸ **getMeshSource**(): ``null`` \| [`BossMeshSource`](neuroglancer_datasource_boss_frontend._internal_.BossMeshSource.md)

#### Returns

``null`` \| [`BossMeshSource`](neuroglancer_datasource_boss_frontend._internal_.BossMeshSource.md)

#### Defined in

[src/neuroglancer/datasource/boss/frontend.ts:355](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/boss/frontend.ts#L355)

___

### getSources

▸ **getSources**(`volumeSourceOptions`): { `chunkSource`: [`BossVolumeChunkSource`](neuroglancer_datasource_boss_frontend._internal_.BossVolumeChunkSource.md) ; `chunkToMultiscaleTransform`: [`mat4`](neuroglancer_util_geom.mat4.md)  }[][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `volumeSourceOptions` | [`VolumeSourceOptions`](../interfaces/neuroglancer_sliceview_volume_base.VolumeSourceOptions.md) |

#### Returns

{ `chunkSource`: [`BossVolumeChunkSource`](neuroglancer_datasource_boss_frontend._internal_.BossVolumeChunkSource.md) ; `chunkToMultiscaleTransform`: [`mat4`](neuroglancer_util_geom.mat4.md)  }[][]

#### Overrides

[MultiscaleVolumeChunkSource](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md).[getSources](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md#getsources)

#### Defined in

[src/neuroglancer/datasource/boss/frontend.ts:313](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/boss/frontend.ts#L313)
