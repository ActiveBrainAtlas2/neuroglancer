[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/datasource/render/frontend

# Module: neuroglancer/datasource/render/frontend

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

### Modules

- [&lt;internal\&gt;](neuroglancer_datasource_render_frontend._internal_.md)

### Classes

- [RenderDataSource](../classes/neuroglancer_datasource_render_frontend.RenderDataSource.md)

### Functions

- [computeStackHierarchy](neuroglancer_datasource_render_frontend.md#computestackhierarchy)
- [getOwnerInfo](neuroglancer_datasource_render_frontend.md#getownerinfo)
- [stackAndProjectCompleter](neuroglancer_datasource_render_frontend.md#stackandprojectcompleter)
- [volumeCompleter](neuroglancer_datasource_render_frontend.md#volumecompleter)

## Functions

### computeStackHierarchy

▸ **computeStackHierarchy**(`stackInfo`, `tileSize`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stackInfo` | [`StackInfo`](../interfaces/neuroglancer_datasource_render_frontend._internal_.StackInfo.md) |
| `tileSize` | `number` |

#### Returns

`number`

#### Defined in

[src/neuroglancer/datasource/render/frontend.ts:389](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/render/frontend.ts#L389)

___

### getOwnerInfo

▸ **getOwnerInfo**(`chunkManager`, `hostname`, `owner`): `Promise`<[`OwnerInfo`](../interfaces/neuroglancer_datasource_render_frontend._internal_.OwnerInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](../classes/neuroglancer_chunk_manager_frontend.ChunkManager.md) |
| `hostname` | `string` |
| `owner` | `string` |

#### Returns

`Promise`<[`OwnerInfo`](../interfaces/neuroglancer_datasource_render_frontend._internal_.OwnerInfo.md)\>

#### Defined in

[src/neuroglancer/datasource/render/frontend.ts:408](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/render/frontend.ts#L408)

___

### stackAndProjectCompleter

▸ **stackAndProjectCompleter**(`chunkManager`, `hostname`, `path`): `Promise`<[`CompletionResult`](neuroglancer_datasource.md#completionresult)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](../classes/neuroglancer_chunk_manager_frontend.ChunkManager.md) |
| `hostname` | `string` |
| `path` | `string` |

#### Returns

`Promise`<[`CompletionResult`](neuroglancer_datasource.md#completionresult)\>

#### Defined in

[src/neuroglancer/datasource/render/frontend.ts:476](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/render/frontend.ts#L476)

___

### volumeCompleter

▸ **volumeCompleter**(`url`, `chunkManager`): `Promise`<[`CompletionResult`](neuroglancer_datasource.md#completionresult)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `chunkManager` | [`ChunkManager`](../classes/neuroglancer_chunk_manager_frontend.ChunkManager.md) |

#### Returns

`Promise`<[`CompletionResult`](neuroglancer_datasource.md#completionresult)\>

#### Defined in

[src/neuroglancer/datasource/render/frontend.ts:530](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/render/frontend.ts#L530)
