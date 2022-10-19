[neuroglancer](../README.md) / [Modules](../modules.md) / [chunk\_manager/backend](../modules/chunk_manager_backend.md) / ChunkQueueManager

# Class: ChunkQueueManager

[chunk_manager/backend](../modules/chunk_manager_backend.md).ChunkQueueManager

## Hierarchy

- [`SharedObjectCounterpart`](annotation_backend._internal_.SharedObjectCounterpart.md)

  ↳ **`ChunkQueueManager`**

## Table of contents

### Constructors

- [constructor](chunk_manager_backend.ChunkQueueManager.md#constructor)

### Properties

- [RPC\_TYPE\_ID](chunk_manager_backend.ChunkQueueManager.md#rpc_type_id)
- [computeCapacity](chunk_manager_backend.ChunkQueueManager.md#computecapacity)
- [computeEvictionQueue](chunk_manager_backend.ChunkQueueManager.md#computeevictionqueue)
- [disposedStacks](chunk_manager_backend.ChunkQueueManager.md#disposedstacks)
- [downloadCapacity](chunk_manager_backend.ChunkQueueManager.md#downloadcapacity)
- [downloadEvictionQueue](chunk_manager_backend.ChunkQueueManager.md#downloadevictionqueue)
- [enablePrefetch](chunk_manager_backend.ChunkQueueManager.md#enableprefetch)
- [gpuMemoryCapacity](chunk_manager_backend.ChunkQueueManager.md#gpumemorycapacity)
- [gpuMemoryChanged](chunk_manager_backend.ChunkQueueManager.md#gpumemorychanged)
- [gpuMemoryEvictionQueue](chunk_manager_backend.ChunkQueueManager.md#gpumemoryevictionqueue)
- [gpuMemoryGeneration](chunk_manager_backend.ChunkQueueManager.md#gpumemorygeneration)
- [gpuMemoryPromotionQueue](chunk_manager_backend.ChunkQueueManager.md#gpumemorypromotionqueue)
- [isOwner](chunk_manager_backend.ChunkQueueManager.md#isowner)
- [numFailed](chunk_manager_backend.ChunkQueueManager.md#numfailed)
- [numQueued](chunk_manager_backend.ChunkQueueManager.md#numqueued)
- [queuedComputePromotionQueue](chunk_manager_backend.ChunkQueueManager.md#queuedcomputepromotionqueue)
- [queuedDownloadPromotionQueue](chunk_manager_backend.ChunkQueueManager.md#queueddownloadpromotionqueue)
- [refCount](chunk_manager_backend.ChunkQueueManager.md#refcount)
- [referencedGeneration](chunk_manager_backend.ChunkQueueManager.md#referencedgeneration)
- [rpc](chunk_manager_backend.ChunkQueueManager.md#rpc)
- [rpcId](chunk_manager_backend.ChunkQueueManager.md#rpcid)
- [sources](chunk_manager_backend.ChunkQueueManager.md#sources)
- [systemMemoryCapacity](chunk_manager_backend.ChunkQueueManager.md#systemmemorycapacity)
- [systemMemoryEvictionQueue](chunk_manager_backend.ChunkQueueManager.md#systemmemoryevictionqueue)
- [unreferencedGeneration](chunk_manager_backend.ChunkQueueManager.md#unreferencedgeneration)
- [updatePending](chunk_manager_backend.ChunkQueueManager.md#updatepending)
- [wasDisposed](chunk_manager_backend.ChunkQueueManager.md#wasdisposed)

### Methods

- [addChunkToQueues\_](chunk_manager_backend.ChunkQueueManager.md#addchunktoqueues_)
- [addCounterpartRef](chunk_manager_backend.ChunkQueueManager.md#addcounterpartref)
- [addRef](chunk_manager_backend.ChunkQueueManager.md#addref)
- [adjustCapacitiesForChunk](chunk_manager_backend.ChunkQueueManager.md#adjustcapacitiesforchunk)
- [chunkQueuesForChunk](chunk_manager_backend.ChunkQueueManager.md#chunkqueuesforchunk)
- [copyChunkToGPU](chunk_manager_backend.ChunkQueueManager.md#copychunktogpu)
- [counterpartRefCountReachedZero](chunk_manager_backend.ChunkQueueManager.md#counterpartrefcountreachedzero)
- [dispose](chunk_manager_backend.ChunkQueueManager.md#dispose)
- [disposed](chunk_manager_backend.ChunkQueueManager.md#disposed)
- [freeChunkGPUMemory](chunk_manager_backend.ChunkQueueManager.md#freechunkgpumemory)
- [freeChunkSystemMemory](chunk_manager_backend.ChunkQueueManager.md#freechunksystemmemory)
- [initializeCounterpart](chunk_manager_backend.ChunkQueueManager.md#initializecounterpart)
- [initializeSharedObject](chunk_manager_backend.ChunkQueueManager.md#initializesharedobject)
- [invalidateSourceCache](chunk_manager_backend.ChunkQueueManager.md#invalidatesourcecache)
- [logStatistics](chunk_manager_backend.ChunkQueueManager.md#logstatistics)
- [ownerDispose](chunk_manager_backend.ChunkQueueManager.md#ownerdispose)
- [performChunkPriorityUpdate](chunk_manager_backend.ChunkQueueManager.md#performchunkpriorityupdate)
- [process](chunk_manager_backend.ChunkQueueManager.md#process)
- [processGPUPromotions\_](chunk_manager_backend.ChunkQueueManager.md#processgpupromotions_)
- [processQueuePromotions\_](chunk_manager_backend.ChunkQueueManager.md#processqueuepromotions_)
- [refCountReachedZero](chunk_manager_backend.ChunkQueueManager.md#refcountreachedzero)
- [registerCancellable](chunk_manager_backend.ChunkQueueManager.md#registercancellable)
- [registerDisposer](chunk_manager_backend.ChunkQueueManager.md#registerdisposer)
- [registerEventListener](chunk_manager_backend.ChunkQueueManager.md#registereventlistener)
- [removeChunkFromQueues\_](chunk_manager_backend.ChunkQueueManager.md#removechunkfromqueues_)
- [retrieveChunkData](chunk_manager_backend.ChunkQueueManager.md#retrievechunkdata)
- [scheduleUpdate](chunk_manager_backend.ChunkQueueManager.md#scheduleupdate)
- [unregisterDisposer](chunk_manager_backend.ChunkQueueManager.md#unregisterdisposer)
- [updateChunkState](chunk_manager_backend.ChunkQueueManager.md#updatechunkstate)

## Constructors

### constructor

• **new ChunkQueueManager**(`rpc`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](annotation_annotation_layer_state._internal_.RPC.md) |
| `options` | `any` |

#### Overrides

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[constructor](annotation_backend._internal_.SharedObjectCounterpart.md#constructor)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:645](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L645)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[RPC_TYPE_ID](annotation_backend._internal_.SharedObjectCounterpart.md#rpc_type_id)

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L245)

___

### computeCapacity

• **computeCapacity**: [`AvailableCapacity`](chunk_manager_backend._internal_.AvailableCapacity.md)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:585](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L585)

___

### computeEvictionQueue

• `Private` **computeEvictionQueue**: [`ChunkPriorityQueue`](chunk_manager_backend._internal_.ChunkPriorityQueue.md)

Contains all chunks in COMPUTING state.

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:618](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L618)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[disposedStacks](annotation_backend._internal_.SharedObjectCounterpart.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### downloadCapacity

• **downloadCapacity**: [`AvailableCapacity`](chunk_manager_backend._internal_.AvailableCapacity.md)[]

Download capacity for each sourceQueueLevel.

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:584](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L584)

___

### downloadEvictionQueue

• `Private` **downloadEvictionQueue**: [`ChunkPriorityQueue`](chunk_manager_backend._internal_.ChunkPriorityQueue.md)[]

Contains all chunks in DOWNLOADING state, for each sourceQueueLevel.

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:610](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L610)

___

### enablePrefetch

• **enablePrefetch**: [`SharedWatchableValue`](chunk_manager_backend._internal_.SharedWatchableValue.md)<`boolean`\>

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:587](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L587)

___

### gpuMemoryCapacity

• **gpuMemoryCapacity**: [`AvailableCapacity`](chunk_manager_backend._internal_.AvailableCapacity.md)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:578](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L578)

___

### gpuMemoryChanged

• **gpuMemoryChanged**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:639](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L639)

___

### gpuMemoryEvictionQueue

• `Private` **gpuMemoryEvictionQueue**: [`ChunkPriorityQueue`](chunk_manager_backend._internal_.ChunkPriorityQueue.md)

Contains all chunks in GPU_MEMORY state.

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:634](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L634)

___

### gpuMemoryGeneration

• `Private` **gpuMemoryGeneration**: `number` = `0`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:643](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L643)

___

### gpuMemoryPromotionQueue

• `Private` **gpuMemoryPromotionQueue**: [`ChunkPriorityQueue`](chunk_manager_backend._internal_.ChunkPriorityQueue.md)

Contains all chunks in SYSTEM_MEMORY state not in RECENT priority tier.

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:629](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L629)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[isOwner](annotation_backend._internal_.SharedObjectCounterpart.md#isowner)

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L171)

___

### numFailed

• `Private` **numFailed**: `number` = `0`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:642](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L642)

___

### numQueued

• `Private` **numQueued**: `number` = `0`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:641](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L641)

___

### queuedComputePromotionQueue

• `Private` **queuedComputePromotionQueue**: [`ChunkPriorityQueue`](chunk_manager_backend._internal_.ChunkPriorityQueue.md)

Contains all chunks in QUEUED state pending compute.

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:605](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L605)

___

### queuedDownloadPromotionQueue

• `Private` **queuedDownloadPromotionQueue**: [`ChunkPriorityQueue`](chunk_manager_backend._internal_.ChunkPriorityQueue.md)[]

Contains all chunks in QUEUED state pending download, for each sourceQueueLevel.

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:597](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L597)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[refCount](annotation_backend._internal_.SharedObjectCounterpart.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[referencedGeneration](annotation_backend._internal_.SharedObjectCounterpart.md#referencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](annotation_annotation_layer_state._internal_.RPC.md) = `null`

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[rpc](annotation_backend._internal_.SharedObjectCounterpart.md#rpc)

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[rpcId](annotation_backend._internal_.SharedObjectCounterpart.md#rpcid)

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L170)

___

### sources

• **sources**: `Set`<[`ChunkSource`](chunk_manager_backend.ChunkSource.md)\>

Set of chunk sources associated with this queue manager.

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:592](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L592)

___

### systemMemoryCapacity

• **systemMemoryCapacity**: [`AvailableCapacity`](chunk_manager_backend._internal_.AvailableCapacity.md)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:579](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L579)

___

### systemMemoryEvictionQueue

• `Private` **systemMemoryEvictionQueue**: [`ChunkPriorityQueue`](chunk_manager_backend._internal_.ChunkPriorityQueue.md)

Contains all chunks that take up memory (DOWNLOADING, SYSTEM_MEMORY,
GPU_MEMORY).

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:624](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L624)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[unreferencedGeneration](annotation_backend._internal_.SharedObjectCounterpart.md#unreferencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L172)

___

### updatePending

• `Private` **updatePending**: `any` = `null`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:637](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L637)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[wasDisposed](annotation_backend._internal_.SharedObjectCounterpart.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addChunkToQueues\_

▸ `Private` **addChunkToQueues_**(`chunk`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`Chunk`](chunk_manager_backend.Chunk.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:742](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L742)

___

### addCounterpartRef

▸ **addCounterpartRef**(): `Object`

Precondition: this.isOwner === true.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `gen` | `number` |
| `id` | ``null`` \| `number` |

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[addCounterpartRef](annotation_backend._internal_.SharedObjectCounterpart.md#addcounterpartref)

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`ChunkQueueManager`](chunk_manager_backend.ChunkQueueManager.md)

#### Returns

[`ChunkQueueManager`](chunk_manager_backend.ChunkQueueManager.md)

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[addRef](annotation_backend._internal_.SharedObjectCounterpart.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### adjustCapacitiesForChunk

▸ **adjustCapacitiesForChunk**(`chunk`, `add`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`Chunk`](chunk_manager_backend.Chunk.md) |
| `add` | `boolean` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:704](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L704)

___

### chunkQueuesForChunk

▸ **chunkQueuesForChunk**(`chunk`): [`Generator`](../interfaces/annotation_annotation_layer_state._internal_.Generator.md)<[`ChunkPriorityQueue`](chunk_manager_backend._internal_.ChunkPriorityQueue.md), `void`, `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`Chunk`](chunk_manager_backend.Chunk.md) |

#### Returns

[`Generator`](../interfaces/annotation_annotation_layer_state._internal_.Generator.md)<[`ChunkPriorityQueue`](chunk_manager_backend._internal_.ChunkPriorityQueue.md), `void`, `unknown`\>

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:669](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L669)

___

### copyChunkToGPU

▸ **copyChunkToGPU**(`chunk`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`Chunk`](chunk_manager_backend.Chunk.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:842](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L842)

___

### counterpartRefCountReachedZero

▸ **counterpartRefCountReachedZero**(`generation`): `void`

Precondition: this.isOwner === true.

This should be called when the counterpart's refCount is decremented and reaches zero.

#### Parameters

| Name | Type |
| :------ | :------ |
| `generation` | `number` |

#### Returns

`void`

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[counterpartRefCountReachedZero](annotation_backend._internal_.SharedObjectCounterpart.md#counterpartrefcountreachedzero)

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L234)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[dispose](annotation_backend._internal_.SharedObjectCounterpart.md#dispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[disposed](annotation_backend._internal_.SharedObjectCounterpart.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

___

### freeChunkGPUMemory

▸ **freeChunkGPUMemory**(`chunk`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`Chunk`](chunk_manager_backend.Chunk.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:820](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L820)

___

### freeChunkSystemMemory

▸ **freeChunkSystemMemory**(`chunk`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`Chunk`](chunk_manager_backend.Chunk.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:827](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L827)

___

### initializeCounterpart

▸ **initializeCounterpart**(`rpc`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](annotation_annotation_layer_state._internal_.RPC.md) |
| `options` | `any` |

#### Returns

`void`

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[initializeCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md#initializecounterpart)

#### Defined in

[src/neuroglancer/worker_rpc.ts:182](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L182)

___

### initializeSharedObject

▸ **initializeSharedObject**(`rpc`, `rpcId?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](annotation_annotation_layer_state._internal_.RPC.md) |
| `rpcId` | `number` |

#### Returns

`void`

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[initializeSharedObject](annotation_backend._internal_.SharedObjectCounterpart.md#initializesharedobject)

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L175)

___

### invalidateSourceCache

▸ **invalidateSourceCache**(`source`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`ChunkSource`](chunk_manager_backend.ChunkSource.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:939](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L939)

___

### logStatistics

▸ **logStatistics**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:930](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L930)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[ownerDispose](annotation_backend._internal_.SharedObjectCounterpart.md#ownerdispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L219)

___

### performChunkPriorityUpdate

▸ **performChunkPriorityUpdate**(`chunk`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`Chunk`](chunk_manager_backend.Chunk.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:758](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L758)

___

### process

▸ **process**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:916](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L916)

___

### processGPUPromotions\_

▸ `Private` **processGPUPromotions_**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:793](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L793)

___

### processQueuePromotions\_

▸ `Private` **processQueuePromotions_**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:858](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L858)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[refCountReachedZero](annotation_backend._internal_.SharedObjectCounterpart.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/worker_rpc.ts:203](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L203)

___

### registerCancellable

▸ **registerCancellable**<`T`\>(`cancellable`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cancellable` | `T` |

#### Returns

`T`

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[registerCancellable](annotation_backend._internal_.SharedObjectCounterpart.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[registerDisposer](annotation_backend._internal_.SharedObjectCounterpart.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget) |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/annotation_annotation_layer_state._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](../interfaces/annotation_annotation_layer_state._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[registerEventListener](annotation_backend._internal_.SharedObjectCounterpart.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

___

### removeChunkFromQueues\_

▸ `Private` **removeChunkFromQueues_**(`chunk`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`Chunk`](chunk_manager_backend.Chunk.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:734](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L734)

___

### retrieveChunkData

▸ **retrieveChunkData**(`chunk`): `Promise`<[`TypedArray`](../modules/util_array.md#typedarray)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`Chunk`](chunk_manager_backend.Chunk.md) |

#### Returns

`Promise`<[`TypedArray`](../modules/util_array.md#typedarray)\>

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:837](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L837)

___

### scheduleUpdate

▸ **scheduleUpdate**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:663](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L663)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[unregisterDisposer](annotation_backend._internal_.SharedObjectCounterpart.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)

___

### updateChunkState

▸ **updateChunkState**(`chunk`, `newState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`Chunk`](chunk_manager_backend.Chunk.md) |
| `newState` | [`ChunkState`](../enums/chunk_manager_base.ChunkState.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:778](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L778)
