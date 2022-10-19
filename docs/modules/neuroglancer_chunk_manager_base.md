[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/chunk\_manager/base

# Module: neuroglancer/chunk\_manager/base

## Table of contents

### Enumerations

- [ChunkDownloadStatistics](../enums/neuroglancer_chunk_manager_base.ChunkDownloadStatistics.md)
- [ChunkMemoryStatistics](../enums/neuroglancer_chunk_manager_base.ChunkMemoryStatistics.md)
- [ChunkPriorityTier](../enums/neuroglancer_chunk_manager_base.ChunkPriorityTier.md)
- [ChunkState](../enums/neuroglancer_chunk_manager_base.ChunkState.md)

### Classes

- [LayerChunkProgressInfo](../classes/neuroglancer_chunk_manager_base.LayerChunkProgressInfo.md)

### Interfaces

- [ChunkSourceParametersConstructor](../interfaces/neuroglancer_chunk_manager_base.ChunkSourceParametersConstructor.md)

### Variables

- [CHUNK\_LAYER\_STATISTICS\_RPC\_ID](neuroglancer_chunk_manager_base.md#chunk_layer_statistics_rpc_id)
- [CHUNK\_MANAGER\_RPC\_ID](neuroglancer_chunk_manager_base.md#chunk_manager_rpc_id)
- [CHUNK\_QUEUE\_MANAGER\_RPC\_ID](neuroglancer_chunk_manager_base.md#chunk_queue_manager_rpc_id)
- [CHUNK\_SOURCE\_INVALIDATE\_RPC\_ID](neuroglancer_chunk_manager_base.md#chunk_source_invalidate_rpc_id)
- [PREFETCH\_PRIORITY\_MULTIPLIER](neuroglancer_chunk_manager_base.md#prefetch_priority_multiplier)
- [REQUEST\_CHUNK\_STATISTICS\_RPC\_ID](neuroglancer_chunk_manager_base.md#request_chunk_statistics_rpc_id)
- [numChunkDownloadStatistics](neuroglancer_chunk_manager_base.md#numchunkdownloadstatistics)
- [numChunkMemoryStatistics](neuroglancer_chunk_manager_base.md#numchunkmemorystatistics)
- [numChunkPriorityTiers](neuroglancer_chunk_manager_base.md#numchunkprioritytiers)
- [numChunkStates](neuroglancer_chunk_manager_base.md#numchunkstates)
- [numChunkStatistics](neuroglancer_chunk_manager_base.md#numchunkstatistics)

### Functions

- [getChunkDownloadStatisticIndex](neuroglancer_chunk_manager_base.md#getchunkdownloadstatisticindex)
- [getChunkStateStatisticIndex](neuroglancer_chunk_manager_base.md#getchunkstatestatisticindex)

## Variables

### CHUNK\_LAYER\_STATISTICS\_RPC\_ID

• `Const` **CHUNK\_LAYER\_STATISTICS\_RPC\_ID**: ``"ChunkManager.chunkLayerStatistics"``

#### Defined in

[src/neuroglancer/chunk_manager/base.ts:91](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/base.ts#L91)

___

### CHUNK\_MANAGER\_RPC\_ID

• `Const` **CHUNK\_MANAGER\_RPC\_ID**: ``"ChunkManager"``

#### Defined in

[src/neuroglancer/chunk_manager/base.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/base.ts#L85)

___

### CHUNK\_QUEUE\_MANAGER\_RPC\_ID

• `Const` **CHUNK\_QUEUE\_MANAGER\_RPC\_ID**: ``"ChunkQueueManager"``

#### Defined in

[src/neuroglancer/chunk_manager/base.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/base.ts#L84)

___

### CHUNK\_SOURCE\_INVALIDATE\_RPC\_ID

• `Const` **CHUNK\_SOURCE\_INVALIDATE\_RPC\_ID**: ``"ChunkSource.invalidate"``

#### Defined in

[src/neuroglancer/chunk_manager/base.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/base.ts#L86)

___

### PREFETCH\_PRIORITY\_MULTIPLIER

• `Const` **PREFETCH\_PRIORITY\_MULTIPLIER**: ``10000000000000``

#### Defined in

[src/neuroglancer/chunk_manager/base.ts:82](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/base.ts#L82)

___

### REQUEST\_CHUNK\_STATISTICS\_RPC\_ID

• `Const` **REQUEST\_CHUNK\_STATISTICS\_RPC\_ID**: ``"ChunkQueueManager.requestChunkStatistics"``

#### Defined in

[src/neuroglancer/chunk_manager/base.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/base.ts#L88)

___

### numChunkDownloadStatistics

• `Const` **numChunkDownloadStatistics**: ``2``

#### Defined in

[src/neuroglancer/chunk_manager/base.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/base.ts#L69)

___

### numChunkMemoryStatistics

• `Const` **numChunkMemoryStatistics**: ``3``

#### Defined in

[src/neuroglancer/chunk_manager/base.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/base.ts#L67)

___

### numChunkPriorityTiers

• `Const` **numChunkPriorityTiers**: ``3``

#### Defined in

[src/neuroglancer/chunk_manager/base.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/base.ts#L54)

___

### numChunkStates

• `Const` **numChunkStates**: ``8``

#### Defined in

[src/neuroglancer/chunk_manager/base.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/base.ts#L42)

___

### numChunkStatistics

• `Const` **numChunkStatistics**: `number`

#### Defined in

[src/neuroglancer/chunk_manager/base.ts:71](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/base.ts#L71)

## Functions

### getChunkDownloadStatisticIndex

▸ **getChunkDownloadStatisticIndex**(`statistic`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `statistic` | [`ChunkDownloadStatistics`](../enums/neuroglancer_chunk_manager_base.ChunkDownloadStatistics.md) |

#### Returns

`number`

#### Defined in

[src/neuroglancer/chunk_manager/base.ts:78](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/base.ts#L78)

___

### getChunkStateStatisticIndex

▸ **getChunkStateStatisticIndex**(`state`, `priorityTier`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`ChunkState`](../enums/neuroglancer_chunk_manager_base.ChunkState.md) |
| `priorityTier` | [`ChunkPriorityTier`](../enums/neuroglancer_chunk_manager_base.ChunkPriorityTier.md) |

#### Returns

`number`

#### Defined in

[src/neuroglancer/chunk_manager/base.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/base.ts#L74)
