[neuroglancer](../README.md) / [Modules](../modules.md) / [single\_mesh/backend](../modules/single_mesh_backend.md) / [<internal\>](../modules/single_mesh_backend._internal_.md) / SingleMeshFactory

# Interface: SingleMeshFactory

[single_mesh/backend](../modules/single_mesh_backend.md).[<internal>](../modules/single_mesh_backend._internal_.md).SingleMeshFactory

## Table of contents

### Properties

- [description](single_mesh_backend._internal_.SingleMeshFactory.md#description)

### Methods

- [getMesh](single_mesh_backend._internal_.SingleMeshFactory.md#getmesh)

## Properties

### description

• `Optional` **description**: `string`

#### Defined in

[src/neuroglancer/single_mesh/backend.ts:82](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/single_mesh/backend.ts#L82)

## Methods

### getMesh

▸ **getMesh**(`chunkManager`, `credentialsProvider`, `url`, `getPriority`, `cancellationToken`): `Promise`<[`SingleMesh`](single_mesh_backend.SingleMesh.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](../classes/chunk_manager_backend.ChunkManager.md) |
| `credentialsProvider` | `undefined` \| [`CredentialsProvider`](../classes/credentials_provider.CredentialsProvider.md)<`any`\> |
| `url` | `string` |
| `getPriority` | [`PriorityGetter`](../modules/chunk_manager_generic_file_source.md#prioritygetter) |
| `cancellationToken` | [`CancellationToken`](util_cancellation.CancellationToken.md) |

#### Returns

`Promise`<[`SingleMesh`](single_mesh_backend.SingleMesh.md)\>

#### Defined in

[src/neuroglancer/single_mesh/backend.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/single_mesh/backend.ts#L84)
