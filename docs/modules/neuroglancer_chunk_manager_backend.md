[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/chunk\_manager/backend

# Module: neuroglancer/chunk\_manager/backend

## Table of contents

### Modules

- [&lt;internal\&gt;](neuroglancer_chunk_manager_backend._internal_.md)

### Classes

- [Chunk](../classes/neuroglancer_chunk_manager_backend.Chunk.md)
- [ChunkManager](../classes/neuroglancer_chunk_manager_backend.ChunkManager.md)
- [ChunkQueueManager](../classes/neuroglancer_chunk_manager_backend.ChunkQueueManager.md)
- [ChunkRenderLayerBackend](../classes/neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md)
- [ChunkSource](../classes/neuroglancer_chunk_manager_backend.ChunkSource.md)
- [ChunkSourceBase](../classes/neuroglancer_chunk_manager_backend.ChunkSourceBase.md)

### Interfaces

- [ChunkConstructor](../interfaces/neuroglancer_chunk_manager_backend.ChunkConstructor.md)
- [ChunkRequester](../interfaces/neuroglancer_chunk_manager_backend.ChunkRequester.md)
- [ChunkStateListener](../interfaces/neuroglancer_chunk_manager_backend.ChunkStateListener.md)

### Functions

- [WithParameters](neuroglancer_chunk_manager_backend.md#withparameters)
- [getNextMarkGeneration](neuroglancer_chunk_manager_backend.md#getnextmarkgeneration)
- [withChunkManager](neuroglancer_chunk_manager_backend.md#withchunkmanager)

## Functions

### WithParameters

▸ **WithParameters**<`Parameters`, `TBase`\>(`Base`, `parametersConstructor`): { `prototype`: `C`<`any`, `any`\>  } & `TBase`

Mixin for adding a `parameters` member to a ChunkSource, and for registering the shared object
type based on the `RPC_ID` member of the Parameters class.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Parameters` | `Parameters` |
| `TBase` | extends (...`args`: `any`[]) => [`SharedObject`](../classes/neuroglancer_worker_rpc.SharedObject.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `Base` | `TBase` |
| `parametersConstructor` | [`ChunkSourceParametersConstructor`](../interfaces/neuroglancer_chunk_manager_base.ChunkSourceParametersConstructor.md)<`Parameters`\> |

#### Returns

{ `prototype`: `C`<`any`, `any`\>  } & `TBase`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:1121](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L1121)

___

### getNextMarkGeneration

▸ **getNextMarkGeneration**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L41)

___

### withChunkManager

▸ **withChunkManager**<`T`\>(`Base`): { `prototype`: `__class`<`any`\>  } & `T`

Mixin that adds a chunkManager property initialized from the RPC-supplied options.

The resultant class implements `ChunkRequester`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`[]) => [`SharedObject`](../classes/neuroglancer_worker_rpc.SharedObject.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `Base` | `T` |

#### Returns

{ `prototype`: `__class`<`any`\>  } & `T`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:1147](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L1147)
