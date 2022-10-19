[neuroglancer](../README.md) / [Modules](../modules.md) / single\_mesh/backend

# Module: single\_mesh/backend

## Table of contents

### Modules

- [&lt;internal\&gt;](single_mesh_backend._internal_.md)

### Classes

- [SingleMeshChunk](../classes/single_mesh_backend.SingleMeshChunk.md)
- [SingleMeshLayer](../classes/single_mesh_backend.SingleMeshLayer.md)
- [SingleMeshSource](../classes/single_mesh_backend.SingleMeshSource.md)

### Interfaces

- [SingleMesh](../interfaces/single_mesh_backend.SingleMesh.md)
- [SingleMeshVertexAttributes](../interfaces/single_mesh_backend.SingleMeshVertexAttributes.md)

### Functions

- [getCombinedMesh](single_mesh_backend.md#getcombinedmesh)
- [getMesh](single_mesh_backend.md#getmesh)
- [getMinMax](single_mesh_backend.md#getminmax)
- [registerSingleMeshFactory](single_mesh_backend.md#registersinglemeshfactory)

## Functions

### getCombinedMesh

▸ **getCombinedMesh**(`chunkManager`, `credentialsProvider`, `parameters`, `getPriority`, `cancellationToken`): `Promise`<[`SingleMesh`](../interfaces/single_mesh_backend.SingleMesh.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](../classes/chunk_manager_backend.ChunkManager.md) |
| `credentialsProvider` | `undefined` \| [`CredentialsProvider`](../classes/credentials_provider.CredentialsProvider.md)<`any`\> |
| `parameters` | [`SingleMeshSourceParameters`](../classes/single_mesh_base.SingleMeshSourceParameters.md) |
| `getPriority` | [`PriorityGetter`](chunk_manager_generic_file_source.md#prioritygetter) |
| `cancellationToken` | [`CancellationToken`](../interfaces/util_cancellation.CancellationToken.md) |

#### Returns

`Promise`<[`SingleMesh`](../interfaces/single_mesh_backend.SingleMesh.md)\>

#### Defined in

[src/neuroglancer/single_mesh/backend.ts:126](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/single_mesh/backend.ts#L126)

___

### getMesh

▸ **getMesh**(`chunkManager`, `credentialsProvider`, `url`, `getPriority`, `cancellationToken`): `Promise`<[`SingleMesh`](../interfaces/single_mesh_backend.SingleMesh.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](../classes/chunk_manager_backend.ChunkManager.md) |
| `credentialsProvider` | `undefined` \| [`CredentialsProvider`](../classes/credentials_provider.CredentialsProvider.md)<`any`\> |
| `url` | `string` |
| `getPriority` | [`PriorityGetter`](chunk_manager_generic_file_source.md#prioritygetter) |
| `cancellationToken` | [`CancellationToken`](../interfaces/util_cancellation.CancellationToken.md) |

#### Returns

`Promise`<[`SingleMesh`](../interfaces/single_mesh_backend.SingleMesh.md)\>

#### Defined in

[src/neuroglancer/single_mesh/backend.ts:109](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/single_mesh/backend.ts#L109)

___

### getMinMax

▸ **getMinMax**(`array`): [`number`, `number`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | [`TypedArray`](util_array.md#typedarray) |

#### Returns

[`number`, `number`]

#### Defined in

[src/neuroglancer/single_mesh/backend.ts:116](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/single_mesh/backend.ts#L116)

___

### registerSingleMeshFactory

▸ **registerSingleMeshFactory**(`name`, `factory`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `factory` | [`SingleMeshFactory`](../interfaces/single_mesh_backend._internal_.SingleMeshFactory.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/single_mesh/backend.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/single_mesh/backend.ts#L90)
