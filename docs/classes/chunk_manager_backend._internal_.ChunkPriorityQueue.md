[neuroglancer](../README.md) / [Modules](../modules.md) / [chunk\_manager/backend](../modules/chunk_manager_backend.md) / [<internal\>](../modules/chunk_manager_backend._internal_.md) / ChunkPriorityQueue

# Class: ChunkPriorityQueue

[chunk_manager/backend](../modules/chunk_manager_backend.md).[<internal>](../modules/chunk_manager_backend._internal_.md).ChunkPriorityQueue

## Table of contents

### Constructors

- [constructor](chunk_manager_backend._internal_.ChunkPriorityQueue.md#constructor)

### Properties

- [heapRoots](chunk_manager_backend._internal_.ChunkPriorityQueue.md#heaproots)
- [recentHead](chunk_manager_backend._internal_.ChunkPriorityQueue.md#recenthead)

### Methods

- [add](chunk_manager_backend._internal_.ChunkPriorityQueue.md#add)
- [candidates](chunk_manager_backend._internal_.ChunkPriorityQueue.md#candidates)
- [delete](chunk_manager_backend._internal_.ChunkPriorityQueue.md#delete)

## Constructors

### constructor

• **new ChunkPriorityQueue**(`heapOperations`, `linkedListOperations`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `heapOperations` | [`PairingHeapOperations`](../interfaces/util_pairing_heap.PairingHeapOperations.md)<[`Chunk`](chunk_manager_backend.Chunk.md)\> |
| `linkedListOperations` | [`LinkedListOperations`](../interfaces/util_linked_list.LinkedListOperations.md)<[`Chunk`](chunk_manager_backend.Chunk.md)\> |

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:430](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L430)

## Properties

### heapRoots

• `Private` **heapRoots**: (``null`` \| [`Chunk`](chunk_manager_backend.Chunk.md))[]

Heap roots for VISIBLE and PREFETCH priority tiers.

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:424](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L424)

___

### recentHead

• `Private` **recentHead**: [`Chunk`](chunk_manager_backend.Chunk.md)

Head node for RECENT linked list.

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:429](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L429)

## Methods

### add

▸ **add**(`chunk`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`Chunk`](chunk_manager_backend.Chunk.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:436](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L436)

___

### candidates

▸ **candidates**(): [`Iterator`](../interfaces/annotation_annotation_layer_state._internal_.Iterator.md)<[`Chunk`](chunk_manager_backend.Chunk.md), `any`, `undefined`\>

#### Returns

[`Iterator`](../interfaces/annotation_annotation_layer_state._internal_.Iterator.md)<[`Chunk`](chunk_manager_backend.Chunk.md), `any`, `undefined`\>

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:446](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L446)

___

### delete

▸ **delete**(`chunk`): `void`

Deletes a chunk from this priority queue.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chunk` | [`Chunk`](chunk_manager_backend.Chunk.md) | The chunk to delete from the priority queue. |

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:499](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L499)
