[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/chunk\_manager/backend](../modules/neuroglancer_chunk_manager_backend.md) / [<internal\>](../modules/neuroglancer_chunk_manager_backend._internal_.md) / ChunkPriorityQueue

# Class: ChunkPriorityQueue

[neuroglancer/chunk_manager/backend](../modules/neuroglancer_chunk_manager_backend.md).[<internal>](../modules/neuroglancer_chunk_manager_backend._internal_.md).ChunkPriorityQueue

## Table of contents

### Constructors

- [constructor](neuroglancer_chunk_manager_backend._internal_.ChunkPriorityQueue.md#constructor)

### Properties

- [heapOperations](neuroglancer_chunk_manager_backend._internal_.ChunkPriorityQueue.md#heapoperations)
- [heapRoots](neuroglancer_chunk_manager_backend._internal_.ChunkPriorityQueue.md#heaproots)
- [linkedListOperations](neuroglancer_chunk_manager_backend._internal_.ChunkPriorityQueue.md#linkedlistoperations)
- [recentHead](neuroglancer_chunk_manager_backend._internal_.ChunkPriorityQueue.md#recenthead)

### Methods

- [add](neuroglancer_chunk_manager_backend._internal_.ChunkPriorityQueue.md#add)
- [candidates](neuroglancer_chunk_manager_backend._internal_.ChunkPriorityQueue.md#candidates)
- [delete](neuroglancer_chunk_manager_backend._internal_.ChunkPriorityQueue.md#delete)

## Constructors

### constructor

• **new ChunkPriorityQueue**(`heapOperations`, `linkedListOperations`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `heapOperations` | [`PairingHeapOperations`](../interfaces/neuroglancer_util_pairing_heap.PairingHeapOperations.md)<[`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md)\> |
| `linkedListOperations` | [`LinkedListOperations`](../interfaces/neuroglancer_util_linked_list.LinkedListOperations.md)<[`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md)\> |

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:430](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L430)

## Properties

### heapOperations

• `Private` **heapOperations**: [`PairingHeapOperations`](../interfaces/neuroglancer_util_pairing_heap.PairingHeapOperations.md)<[`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md)\>

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:431](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L431)

___

### heapRoots

• `Private` **heapRoots**: (``null`` \| [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md))[]

Heap roots for VISIBLE and PREFETCH priority tiers.

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:424](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L424)

___

### linkedListOperations

• `Private` **linkedListOperations**: [`LinkedListOperations`](../interfaces/neuroglancer_util_linked_list.LinkedListOperations.md)<[`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md)\>

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:432](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L432)

___

### recentHead

• `Private` **recentHead**: [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md)

Head node for RECENT linked list.

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:429](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L429)

## Methods

### add

▸ **add**(`chunk`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:436](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L436)

___

### candidates

▸ **candidates**(): [`Iterator`](../interfaces/main_module._internal_.Iterator.md)<[`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md), `any`, `undefined`\>

#### Returns

[`Iterator`](../interfaces/main_module._internal_.Iterator.md)<[`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md), `any`, `undefined`\>

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:446](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L446)

___

### delete

▸ **delete**(`chunk`): `void`

Deletes a chunk from this priority queue.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chunk` | [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md) | The chunk to delete from the priority queue. |

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:499](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L499)
