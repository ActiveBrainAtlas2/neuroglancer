[neuroglancer](../README.md) / [Modules](../modules.md) / chunk\_manager/frontend

# Module: chunk\_manager/frontend

## Table of contents

### Modules

- [&lt;internal\&gt;](chunk_manager_frontend._internal_.md)

### Classes

- [CapacitySpecification](../classes/chunk_manager_frontend.CapacitySpecification.md)
- [Chunk](../classes/chunk_manager_frontend.Chunk.md)
- [ChunkManager](../classes/chunk_manager_frontend.ChunkManager.md)
- [ChunkQueueManager](../classes/chunk_manager_frontend.ChunkQueueManager.md)
- [ChunkRenderLayerFrontend](../classes/chunk_manager_frontend.ChunkRenderLayerFrontend.md)
- [ChunkSource](../classes/chunk_manager_frontend.ChunkSource.md)

### Interfaces

- [ChunkSourceConstructor](../interfaces/chunk_manager_frontend.ChunkSourceConstructor.md)
- [FrameNumberCounter](../interfaces/chunk_manager_frontend.FrameNumberCounter.md)

### Type Aliases

- [ChunkStatistics](chunk_manager_frontend.md#chunkstatistics)
- [GettableChunkSource](chunk_manager_frontend.md#gettablechunksource)

### Functions

- [WithParameters](chunk_manager_frontend.md#withparameters)

## Type Aliases

### ChunkStatistics

Ƭ **ChunkStatistics**: `Map`<[`ChunkSource`](../classes/chunk_manager_frontend.ChunkSource.md), `Float64Array`\>

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:440](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L440)

___

### GettableChunkSource

Ƭ **GettableChunkSource**: [`SharedObject`](../classes/annotation_annotation_layer_state._internal_.SharedObject.md) & { `OPTIONS`: {} ; `key`: `any`  }

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:313](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L313)

## Functions

### WithParameters

▸ **WithParameters**<`Parameters`, `TBase`\>(`Base`, `parametersConstructor`): { `prototype`: `C`<`any`, `any`\> ; `encodeOptions`: (`options`: [`WithParametersOptions`](chunk_manager_frontend._internal_.md#withparametersoptions)) => `any`  } & `TBase`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Parameters` | `Parameters` |
| `TBase` | extends [`ChunkSourceConstructor`](../interfaces/chunk_manager_frontend.ChunkSourceConstructor.md)<[`GettableChunkSource`](chunk_manager_frontend.md#gettablechunksource), `TBase`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `Base` | `TBase` |
| `parametersConstructor` | [`ChunkSourceParametersConstructor`](../interfaces/chunk_manager_base.ChunkSourceParametersConstructor.md)<`Parameters`\> |

#### Returns

{ `prototype`: `C`<`any`, `any`\> ; `encodeOptions`: (`options`: [`WithParametersOptions`](chunk_manager_frontend._internal_.md#withparametersoptions)) => `any`  } & `TBase`

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:411](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L411)
