[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/datasource/boss/frontend

# Module: neuroglancer/datasource/boss/frontend

## Table of contents

### Modules

- [&lt;internal\&gt;](neuroglancer_datasource_boss_frontend._internal_.md)

### Classes

- [BossDataSource](../classes/neuroglancer_datasource_boss_frontend.BossDataSource.md)
- [BossMultiscaleVolumeChunkSource](../classes/neuroglancer_datasource_boss_frontend.BossMultiscaleVolumeChunkSource.md)

### Functions

- [collectionExperimentChannelCompleter](neuroglancer_datasource_boss_frontend.md#collectionexperimentchannelcompleter)
- [getChannelInfo](neuroglancer_datasource_boss_frontend.md#getchannelinfo)
- [getCollections](neuroglancer_datasource_boss_frontend.md#getcollections)
- [getCoordinateFrame](neuroglancer_datasource_boss_frontend.md#getcoordinateframe)
- [getDataSource](neuroglancer_datasource_boss_frontend.md#getdatasource)
- [getDownsampleInfoForChannel](neuroglancer_datasource_boss_frontend.md#getdownsampleinfoforchannel)
- [getExperimentInfo](neuroglancer_datasource_boss_frontend.md#getexperimentinfo)
- [getExperiments](neuroglancer_datasource_boss_frontend.md#getexperiments)
- [parseDownsampleInfoForChannel](neuroglancer_datasource_boss_frontend.md#parsedownsampleinfoforchannel)
- [parseDownsampleScales](neuroglancer_datasource_boss_frontend.md#parsedownsamplescales)

## Functions

### collectionExperimentChannelCompleter

▸ **collectionExperimentChannelCompleter**(`chunkManager`, `hostname`, `credentialsProvider`, `path`): `Promise`<[`CompletionResult`](neuroglancer_datasource.md#completionresult)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](../classes/neuroglancer_chunk_manager_frontend.ChunkManager.md) |
| `hostname` | `string` |
| `credentialsProvider` | [`CredentialsProvider`](../classes/neuroglancer_credentials_provider.CredentialsProvider.md)<`string`\> |
| `path` | `string` |

#### Returns

`Promise`<[`CompletionResult`](neuroglancer_datasource.md#completionresult)\>

#### Defined in

[src/neuroglancer/datasource/boss/frontend.ts:579](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/boss/frontend.ts#L579)

___

### getChannelInfo

▸ **getChannelInfo**(`chunkManager`, `hostname`, `credentialsProvider`, `experiment`, `collection`, `channel`): `Promise`<[`ChannelInfo`](../interfaces/neuroglancer_datasource_boss_frontend._internal_.ChannelInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](../classes/neuroglancer_chunk_manager_frontend.ChunkManager.md) |
| `hostname` | `string` |
| `credentialsProvider` | [`CredentialsProvider`](../classes/neuroglancer_credentials_provider.CredentialsProvider.md)<`string`\> |
| `experiment` | `string` |
| `collection` | `string` |
| `channel` | `string` |

#### Returns

`Promise`<[`ChannelInfo`](../interfaces/neuroglancer_datasource_boss_frontend._internal_.ChannelInfo.md)\>

#### Defined in

[src/neuroglancer/datasource/boss/frontend.ts:388](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/boss/frontend.ts#L388)

___

### getCollections

▸ **getCollections**(`chunkManager`, `hostname`, `credentialsProvider`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](../classes/neuroglancer_chunk_manager_frontend.ChunkManager.md) |
| `hostname` | `string` |
| `credentialsProvider` | [`CredentialsProvider`](../classes/neuroglancer_credentials_provider.CredentialsProvider.md)<`string`\> |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/neuroglancer/datasource/boss/frontend.ts:535](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/boss/frontend.ts#L535)

___

### getCoordinateFrame

▸ **getCoordinateFrame**(`chunkManager`, `hostname`, `credentialsProvider`, `experimentInfo`): `Promise`<[`ExperimentInfo`](../interfaces/neuroglancer_datasource_boss_frontend._internal_.ExperimentInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](../classes/neuroglancer_chunk_manager_frontend.ChunkManager.md) |
| `hostname` | `string` |
| `credentialsProvider` | [`CredentialsProvider`](../classes/neuroglancer_credentials_provider.CredentialsProvider.md)<`string`\> |
| `experimentInfo` | [`ExperimentInfo`](../interfaces/neuroglancer_datasource_boss_frontend._internal_.ExperimentInfo.md) |

#### Returns

`Promise`<[`ExperimentInfo`](../interfaces/neuroglancer_datasource_boss_frontend._internal_.ExperimentInfo.md)\>

#### Defined in

[src/neuroglancer/datasource/boss/frontend.ts:560](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/boss/frontend.ts#L560)

___

### getDataSource

▸ **getDataSource**(`chunkManager`, `hostname`, `credentialsProvider`, `path`): `Promise`<[`DataSource`](../interfaces/neuroglancer_datasource.DataSource.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](../classes/neuroglancer_chunk_manager_frontend.ChunkManager.md) |
| `hostname` | `string` |
| `credentialsProvider` | [`CredentialsProvider`](../classes/neuroglancer_credentials_provider.CredentialsProvider.md)<`string`\> |
| `path` | `string` |

#### Returns

`Promise`<[`DataSource`](../interfaces/neuroglancer_datasource.DataSource.md)\>

#### Defined in

[src/neuroglancer/datasource/boss/frontend.ts:480](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/boss/frontend.ts#L480)

___

### getDownsampleInfoForChannel

▸ **getDownsampleInfoForChannel**(`chunkManager`, `hostname`, `credentialsProvider`, `collection`, `experimentInfo`, `channel`): `Promise`<[`ExperimentInfo`](../interfaces/neuroglancer_datasource_boss_frontend._internal_.ExperimentInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](../classes/neuroglancer_chunk_manager_frontend.ChunkManager.md) |
| `hostname` | `string` |
| `credentialsProvider` | [`CredentialsProvider`](../classes/neuroglancer_credentials_provider.CredentialsProvider.md)<`string`\> |
| `collection` | `string` |
| `experimentInfo` | [`ExperimentInfo`](../interfaces/neuroglancer_datasource_boss_frontend._internal_.ExperimentInfo.md) |
| `channel` | `string` |

#### Returns

`Promise`<[`ExperimentInfo`](../interfaces/neuroglancer_datasource_boss_frontend._internal_.ExperimentInfo.md)\>

#### Defined in

[src/neuroglancer/datasource/boss/frontend.ts:408](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/boss/frontend.ts#L408)

___

### getExperimentInfo

▸ **getExperimentInfo**(`chunkManager`, `hostname`, `credentialsProvider`, `experiment`, `collection`): `Promise`<[`ExperimentInfo`](../interfaces/neuroglancer_datasource_boss_frontend._internal_.ExperimentInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](../classes/neuroglancer_chunk_manager_frontend.ChunkManager.md) |
| `hostname` | `string` |
| `credentialsProvider` | [`CredentialsProvider`](../classes/neuroglancer_credentials_provider.CredentialsProvider.md)<`string`\> |
| `experiment` | `string` |
| `collection` | `string` |

#### Returns

`Promise`<[`ExperimentInfo`](../interfaces/neuroglancer_datasource_boss_frontend._internal_.ExperimentInfo.md)\>

#### Defined in

[src/neuroglancer/datasource/boss/frontend.ts:367](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/boss/frontend.ts#L367)

___

### getExperiments

▸ **getExperiments**(`chunkManager`, `hostname`, `credentialsProvider`, `collection`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](../classes/neuroglancer_chunk_manager_frontend.ChunkManager.md) |
| `hostname` | `string` |
| `credentialsProvider` | [`CredentialsProvider`](../classes/neuroglancer_credentials_provider.CredentialsProvider.md)<`string`\> |
| `collection` | `string` |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/neuroglancer/datasource/boss/frontend.ts:547](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/boss/frontend.ts#L547)

___

### parseDownsampleInfoForChannel

▸ **parseDownsampleInfoForChannel**(`downsampleObj`, `experimentInfo`, `channel`): [`ExperimentInfo`](../interfaces/neuroglancer_datasource_boss_frontend._internal_.ExperimentInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `downsampleObj` | `any` |
| `experimentInfo` | [`ExperimentInfo`](../interfaces/neuroglancer_datasource_boss_frontend._internal_.ExperimentInfo.md) |
| `channel` | `string` |

#### Returns

[`ExperimentInfo`](../interfaces/neuroglancer_datasource_boss_frontend._internal_.ExperimentInfo.md)

#### Defined in

[src/neuroglancer/datasource/boss/frontend.ts:460](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/boss/frontend.ts#L460)

___

### parseDownsampleScales

▸ **parseDownsampleScales**(`downsampleObj`, `voxelSizeBaseInOriginalUnits`): [`ScaleInfo`](../interfaces/neuroglancer_datasource_boss_frontend._internal_.ScaleInfo.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `downsampleObj` | `any` |
| `voxelSizeBaseInOriginalUnits` | `Float32Array` |

#### Returns

[`ScaleInfo`](../interfaces/neuroglancer_datasource_boss_frontend._internal_.ScaleInfo.md)[]

#### Defined in

[src/neuroglancer/datasource/boss/frontend.ts:431](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/boss/frontend.ts#L431)
