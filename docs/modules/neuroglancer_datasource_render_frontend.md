[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/datasource/render/frontend

# Module: neuroglancer/datasource/render/frontend

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

[src/neuroglancer/datasource/render/frontend.ts:389](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/render/frontend.ts#L389)

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

[src/neuroglancer/datasource/render/frontend.ts:408](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/render/frontend.ts#L408)

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

[src/neuroglancer/datasource/render/frontend.ts:476](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/render/frontend.ts#L476)

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

[src/neuroglancer/datasource/render/frontend.ts:530](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/render/frontend.ts#L530)
