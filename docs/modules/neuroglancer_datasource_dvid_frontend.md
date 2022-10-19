[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/datasource/dvid/frontend

# Module: neuroglancer/datasource/dvid/frontend

**`license`**
Copyright 2016 Google Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Table of contents

### Classes

- [DVIDDataSource](../classes/neuroglancer_datasource_dvid_frontend.DVIDDataSource.md)
- [DataInstanceBaseInfo](../classes/neuroglancer_datasource_dvid_frontend.DataInstanceBaseInfo.md)
- [DataInstanceInfo](../classes/neuroglancer_datasource_dvid_frontend.DataInstanceInfo.md)
- [RepositoryInfo](../classes/neuroglancer_datasource_dvid_frontend.RepositoryInfo.md)
- [ServerInfo](../classes/neuroglancer_datasource_dvid_frontend.ServerInfo.md)
- [VolumeDataInstanceInfo](../classes/neuroglancer_datasource_dvid_frontend.VolumeDataInstanceInfo.md)

### Functions

- [completeInstanceName](neuroglancer_datasource_dvid_frontend.md#completeinstancename)
- [completeNodeAndInstance](neuroglancer_datasource_dvid_frontend.md#completenodeandinstance)
- [completeUrl](neuroglancer_datasource_dvid_frontend.md#completeurl)
- [getDataSource](neuroglancer_datasource_dvid_frontend.md#getdatasource)
- [getServerInfo](neuroglancer_datasource_dvid_frontend.md#getserverinfo)
- [parseDataInstance](neuroglancer_datasource_dvid_frontend.md#parsedatainstance)
- [parseRepositoriesInfo](neuroglancer_datasource_dvid_frontend.md#parserepositoriesinfo)

## Functions

### completeInstanceName

▸ **completeInstanceName**(`repositoryInfo`, `prefix`): [`CompletionResult`](neuroglancer_datasource.md#completionresult)

#### Parameters

| Name | Type |
| :------ | :------ |
| `repositoryInfo` | [`RepositoryInfo`](../classes/neuroglancer_datasource_dvid_frontend.RepositoryInfo.md) |
| `prefix` | `string` |

#### Returns

[`CompletionResult`](neuroglancer_datasource.md#completionresult)

#### Defined in

[src/neuroglancer/datasource/dvid/frontend.ts:510](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/dvid/frontend.ts#L510)

___

### completeNodeAndInstance

▸ **completeNodeAndInstance**(`serverInfo`, `prefix`): [`CompletionResult`](neuroglancer_datasource.md#completionresult)

#### Parameters

| Name | Type |
| :------ | :------ |
| `serverInfo` | [`ServerInfo`](../classes/neuroglancer_datasource_dvid_frontend.ServerInfo.md) |
| `prefix` | `string` |

#### Returns

[`CompletionResult`](neuroglancer_datasource.md#completionresult)

#### Defined in

[src/neuroglancer/datasource/dvid/frontend.ts:522](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/dvid/frontend.ts#L522)

___

### completeUrl

▸ **completeUrl**(`options`): `Promise`<[`CompletionResult`](neuroglancer_datasource.md#completionresult)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`CompleteUrlOptions`](../interfaces/neuroglancer_datasource.CompleteUrlOptions.md) |

#### Returns

`Promise`<[`CompletionResult`](neuroglancer_datasource.md#completionresult)\>

#### Defined in

[src/neuroglancer/datasource/dvid/frontend.ts:541](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/dvid/frontend.ts#L541)

___

### getDataSource

▸ **getDataSource**(`options`): `Promise`<[`DataSource`](../interfaces/neuroglancer_datasource.DataSource.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`GetDataSourceOptions`](../interfaces/neuroglancer_datasource.GetDataSourceOptions.md) |

#### Returns

`Promise`<[`DataSource`](../interfaces/neuroglancer_datasource.DataSource.md)\>

#### Defined in

[src/neuroglancer/datasource/dvid/frontend.ts:481](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/dvid/frontend.ts#L481)

___

### getServerInfo

▸ **getServerInfo**(`chunkManager`, `baseUrl`, `credentialsProvider`): `Promise`<[`ServerInfo`](../classes/neuroglancer_datasource_dvid_frontend.ServerInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](../classes/neuroglancer_chunk_manager_frontend.ChunkManager.md) |
| `baseUrl` | `string` |
| `credentialsProvider` | [`CredentialsProvider`](../classes/neuroglancer_credentials_provider.CredentialsProvider.md)<[`DVIDToken`](../interfaces/neuroglancer_datasource_dvid_api.DVIDToken.md)\> |

#### Returns

`Promise`<[`ServerInfo`](../classes/neuroglancer_datasource_dvid_frontend.ServerInfo.md)\>

#### Defined in

[src/neuroglancer/datasource/dvid/frontend.ts:327](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/dvid/frontend.ts#L327)

___

### parseDataInstance

▸ **parseDataInstance**(`obj`, `name`, `instanceNames`): [`DataInstanceInfo`](../classes/neuroglancer_datasource_dvid_frontend.DataInstanceInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |
| `name` | `string` |
| `instanceNames` | `string`[] |

#### Returns

[`DataInstanceInfo`](../classes/neuroglancer_datasource_dvid_frontend.DataInstanceInfo.md)

#### Defined in

[src/neuroglancer/datasource/dvid/frontend.ts:216](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/dvid/frontend.ts#L216)

___

### parseRepositoriesInfo

▸ **parseRepositoriesInfo**(`obj`): `Map`<`string`, [`RepositoryInfo`](../classes/neuroglancer_datasource_dvid_frontend.RepositoryInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`Map`<`string`, [`RepositoryInfo`](../classes/neuroglancer_datasource_dvid_frontend.RepositoryInfo.md)\>

#### Defined in

[src/neuroglancer/datasource/dvid/frontend.ts:279](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/dvid/frontend.ts#L279)
