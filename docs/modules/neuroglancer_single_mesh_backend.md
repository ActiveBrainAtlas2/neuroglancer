[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/single\_mesh/backend

# Module: neuroglancer/single\_mesh/backend

## Table of contents

### Modules

- [&lt;internal\&gt;](neuroglancer_single_mesh_backend._internal_.md)

### Classes

- [SingleMeshChunk](../classes/neuroglancer_single_mesh_backend.SingleMeshChunk.md)
- [SingleMeshLayer](../classes/neuroglancer_single_mesh_backend.SingleMeshLayer.md)
- [SingleMeshSource](../classes/neuroglancer_single_mesh_backend.SingleMeshSource.md)

### Interfaces

- [SingleMesh](../interfaces/neuroglancer_single_mesh_backend.SingleMesh.md)
- [SingleMeshVertexAttributes](../interfaces/neuroglancer_single_mesh_backend.SingleMeshVertexAttributes.md)

### Functions

- [getCombinedMesh](neuroglancer_single_mesh_backend.md#getcombinedmesh)
- [getMesh](neuroglancer_single_mesh_backend.md#getmesh)
- [getMinMax](neuroglancer_single_mesh_backend.md#getminmax)
- [registerSingleMeshFactory](neuroglancer_single_mesh_backend.md#registersinglemeshfactory)

## Functions

### getCombinedMesh

▸ **getCombinedMesh**(`chunkManager`, `credentialsProvider`, `parameters`, `getPriority`, `cancellationToken`): `Promise`<[`SingleMesh`](../interfaces/neuroglancer_single_mesh_backend.SingleMesh.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](../classes/neuroglancer_chunk_manager_backend.ChunkManager.md) |
| `credentialsProvider` | `undefined` \| [`CredentialsProvider`](../classes/neuroglancer_credentials_provider.CredentialsProvider.md)<`any`\> |
| `parameters` | [`SingleMeshSourceParameters`](../classes/neuroglancer_single_mesh_base.SingleMeshSourceParameters.md) |
| `getPriority` | [`PriorityGetter`](neuroglancer_chunk_manager_generic_file_source.md#prioritygetter) |
| `cancellationToken` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) |

#### Returns

`Promise`<[`SingleMesh`](../interfaces/neuroglancer_single_mesh_backend.SingleMesh.md)\>

#### Defined in

[src/neuroglancer/single_mesh/backend.ts:126](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/single_mesh/backend.ts#L126)

___

### getMesh

▸ **getMesh**(`chunkManager`, `credentialsProvider`, `url`, `getPriority`, `cancellationToken`): `Promise`<[`SingleMesh`](../interfaces/neuroglancer_single_mesh_backend.SingleMesh.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](../classes/neuroglancer_chunk_manager_backend.ChunkManager.md) |
| `credentialsProvider` | `undefined` \| [`CredentialsProvider`](../classes/neuroglancer_credentials_provider.CredentialsProvider.md)<`any`\> |
| `url` | `string` |
| `getPriority` | [`PriorityGetter`](neuroglancer_chunk_manager_generic_file_source.md#prioritygetter) |
| `cancellationToken` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) |

#### Returns

`Promise`<[`SingleMesh`](../interfaces/neuroglancer_single_mesh_backend.SingleMesh.md)\>

#### Defined in

[src/neuroglancer/single_mesh/backend.ts:109](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/single_mesh/backend.ts#L109)

___

### getMinMax

▸ **getMinMax**(`array`): [`number`, `number`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | [`TypedArray`](neuroglancer_util_array.md#typedarray) |

#### Returns

[`number`, `number`]

#### Defined in

[src/neuroglancer/single_mesh/backend.ts:116](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/single_mesh/backend.ts#L116)

___

### registerSingleMeshFactory

▸ **registerSingleMeshFactory**(`name`, `factory`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `factory` | [`SingleMeshFactory`](../interfaces/neuroglancer_single_mesh_backend._internal_.SingleMeshFactory.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/single_mesh/backend.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/single_mesh/backend.ts#L90)
