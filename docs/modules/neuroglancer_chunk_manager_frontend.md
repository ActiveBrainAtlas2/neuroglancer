[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/chunk\_manager/frontend

# Module: neuroglancer/chunk\_manager/frontend

## Table of contents

### Modules

- [&lt;internal\&gt;](neuroglancer_chunk_manager_frontend._internal_.md)

### Classes

- [CapacitySpecification](../classes/neuroglancer_chunk_manager_frontend.CapacitySpecification.md)
- [Chunk](../classes/neuroglancer_chunk_manager_frontend.Chunk.md)
- [ChunkManager](../classes/neuroglancer_chunk_manager_frontend.ChunkManager.md)
- [ChunkQueueManager](../classes/neuroglancer_chunk_manager_frontend.ChunkQueueManager.md)
- [ChunkRenderLayerFrontend](../classes/neuroglancer_chunk_manager_frontend.ChunkRenderLayerFrontend.md)
- [ChunkSource](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md)

### Interfaces

- [ChunkSourceConstructor](../interfaces/neuroglancer_chunk_manager_frontend.ChunkSourceConstructor.md)
- [FrameNumberCounter](../interfaces/neuroglancer_chunk_manager_frontend.FrameNumberCounter.md)

### Type Aliases

- [ChunkStatistics](neuroglancer_chunk_manager_frontend.md#chunkstatistics)
- [GettableChunkSource](neuroglancer_chunk_manager_frontend.md#gettablechunksource)

### Functions

- [WithParameters](neuroglancer_chunk_manager_frontend.md#withparameters)

## Type Aliases

### ChunkStatistics

Ƭ **ChunkStatistics**: `Map`<[`ChunkSource`](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md), `Float64Array`\>

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:440](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L440)

___

### GettableChunkSource

Ƭ **GettableChunkSource**: [`SharedObject`](../classes/neuroglancer_worker_rpc.SharedObject.md) & { `OPTIONS`: {} ; `key`: `any`  }

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:313](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L313)

## Functions

### WithParameters

▸ **WithParameters**<`Parameters`, `TBase`\>(`Base`, `parametersConstructor`): (...`args`: `any`[]) => `C`<`Parameters`, `TBase`\> & `TBase`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Parameters` | `Parameters` |
| `TBase` | extends [`ChunkSourceConstructor`](../interfaces/neuroglancer_chunk_manager_frontend.ChunkSourceConstructor.md)<[`GettableChunkSource`](neuroglancer_chunk_manager_frontend.md#gettablechunksource), `TBase`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `Base` | `TBase` |
| `parametersConstructor` | [`ChunkSourceParametersConstructor`](../interfaces/neuroglancer_chunk_manager_base.ChunkSourceParametersConstructor.md)<`Parameters`\> |

#### Returns

(...`args`: `any`[]) => `C`<`Parameters`, `TBase`\> & `TBase`

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:411](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L411)
