[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/single\_mesh/backend](../modules/neuroglancer_single_mesh_backend.md) / [<internal\>](../modules/neuroglancer_single_mesh_backend._internal_.md) / SingleMeshFactory

# Interface: SingleMeshFactory

[neuroglancer/single_mesh/backend](../modules/neuroglancer_single_mesh_backend.md).[<internal>](../modules/neuroglancer_single_mesh_backend._internal_.md).SingleMeshFactory

## Table of contents

### Properties

- [description](neuroglancer_single_mesh_backend._internal_.SingleMeshFactory.md#description)

### Methods

- [getMesh](neuroglancer_single_mesh_backend._internal_.SingleMeshFactory.md#getmesh)

## Properties

### description

• `Optional` **description**: `string`

#### Defined in

[src/neuroglancer/single_mesh/backend.ts:82](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/single_mesh/backend.ts#L82)

## Methods

### getMesh

▸ **getMesh**(`chunkManager`, `credentialsProvider`, `url`, `getPriority`, `cancellationToken`): `Promise`<[`SingleMesh`](neuroglancer_single_mesh_backend.SingleMesh.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](../classes/neuroglancer_chunk_manager_backend.ChunkManager.md) |
| `credentialsProvider` | `undefined` \| [`CredentialsProvider`](../classes/neuroglancer_credentials_provider.CredentialsProvider.md)<`any`\> |
| `url` | `string` |
| `getPriority` | [`PriorityGetter`](../modules/neuroglancer_chunk_manager_generic_file_source.md#prioritygetter) |
| `cancellationToken` | [`CancellationToken`](neuroglancer_util_cancellation.CancellationToken.md) |

#### Returns

`Promise`<[`SingleMesh`](neuroglancer_single_mesh_backend.SingleMesh.md)\>

#### Defined in

[src/neuroglancer/single_mesh/backend.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/single_mesh/backend.ts#L84)
