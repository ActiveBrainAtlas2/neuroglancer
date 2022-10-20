[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/chunk\_manager/backend](../modules/neuroglancer_chunk_manager_backend.md) / ChunkQueueManager

# Class: ChunkQueueManager

[neuroglancer/chunk_manager/backend](../modules/neuroglancer_chunk_manager_backend.md).ChunkQueueManager

Base class for defining a SharedObject type that will never be owned.

## Hierarchy

- [`SharedObjectCounterpart`](neuroglancer_worker_rpc.SharedObjectCounterpart.md)

  ↳ **`ChunkQueueManager`**

## Table of contents

### Constructors

- [constructor](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#constructor)

### Properties

- [RPC\_TYPE\_ID](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#rpc_type_id)
- [computeCapacity](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#computecapacity)
- [computeEvictionQueue](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#computeevictionqueue)
- [disposedStacks](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#disposedstacks)
- [downloadCapacity](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#downloadcapacity)
- [downloadEvictionQueue](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#downloadevictionqueue)
- [enablePrefetch](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#enableprefetch)
- [gpuMemoryCapacity](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#gpumemorycapacity)
- [gpuMemoryChanged](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#gpumemorychanged)
- [gpuMemoryEvictionQueue](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#gpumemoryevictionqueue)
- [gpuMemoryGeneration](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#gpumemorygeneration)
- [gpuMemoryPromotionQueue](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#gpumemorypromotionqueue)
- [isOwner](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#isowner)
- [numFailed](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#numfailed)
- [numQueued](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#numqueued)
- [queuedComputePromotionQueue](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#queuedcomputepromotionqueue)
- [queuedDownloadPromotionQueue](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#queueddownloadpromotionqueue)
- [refCount](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#refcount)
- [referencedGeneration](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#referencedgeneration)
- [rpc](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#rpc)
- [rpcId](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#rpcid)
- [sources](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#sources)
- [systemMemoryCapacity](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#systemmemorycapacity)
- [systemMemoryEvictionQueue](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#systemmemoryevictionqueue)
- [unreferencedGeneration](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#unreferencedgeneration)
- [updatePending](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#updatepending)
- [wasDisposed](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#wasdisposed)

### Methods

- [addChunkToQueues\_](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#addchunktoqueues_)
- [addCounterpartRef](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#addcounterpartref)
- [addRef](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#addref)
- [adjustCapacitiesForChunk](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#adjustcapacitiesforchunk)
- [chunkQueuesForChunk](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#chunkqueuesforchunk)
- [copyChunkToGPU](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#copychunktogpu)
- [counterpartRefCountReachedZero](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#counterpartrefcountreachedzero)
- [dispose](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#dispose)
- [disposed](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#disposed)
- [freeChunkGPUMemory](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#freechunkgpumemory)
- [freeChunkSystemMemory](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#freechunksystemmemory)
- [initializeCounterpart](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#initializecounterpart)
- [initializeSharedObject](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#initializesharedobject)
- [invalidateSourceCache](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#invalidatesourcecache)
- [logStatistics](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#logstatistics)
- [ownerDispose](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#ownerdispose)
- [performChunkPriorityUpdate](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#performchunkpriorityupdate)
- [process](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#process)
- [processGPUPromotions\_](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#processgpupromotions_)
- [processQueuePromotions\_](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#processqueuepromotions_)
- [refCountReachedZero](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#refcountreachedzero)
- [registerCancellable](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#registercancellable)
- [registerDisposer](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#registerdisposer)
- [registerEventListener](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#registereventlistener)
- [removeChunkFromQueues\_](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#removechunkfromqueues_)
- [retrieveChunkData](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#retrievechunkdata)
- [scheduleUpdate](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#scheduleupdate)
- [unregisterDisposer](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#unregisterdisposer)
- [updateChunkState](neuroglancer_chunk_manager_backend.ChunkQueueManager.md#updatechunkstate)

## Constructors

### constructor

• **new ChunkQueueManager**(`rpc`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](neuroglancer_worker_rpc.RPC.md) |
| `options` | `any` |

#### Overrides

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[constructor](neuroglancer_worker_rpc.SharedObjectCounterpart.md#constructor)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:645](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L645)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[RPC_TYPE_ID](neuroglancer_worker_rpc.SharedObjectCounterpart.md#rpc_type_id)

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L245)

___

### computeCapacity

• **computeCapacity**: [`AvailableCapacity`](neuroglancer_chunk_manager_backend._internal_.AvailableCapacity.md)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:585](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L585)

___

### computeEvictionQueue

• `Private` **computeEvictionQueue**: [`ChunkPriorityQueue`](neuroglancer_chunk_manager_backend._internal_.ChunkPriorityQueue.md)

Contains all chunks in COMPUTING state.

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:618](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L618)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[disposedStacks](neuroglancer_worker_rpc.SharedObjectCounterpart.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### downloadCapacity

• **downloadCapacity**: [`AvailableCapacity`](neuroglancer_chunk_manager_backend._internal_.AvailableCapacity.md)[]

Download capacity for each sourceQueueLevel.

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:584](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L584)

___

### downloadEvictionQueue

• `Private` **downloadEvictionQueue**: [`ChunkPriorityQueue`](neuroglancer_chunk_manager_backend._internal_.ChunkPriorityQueue.md)[]

Contains all chunks in DOWNLOADING state, for each sourceQueueLevel.

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:610](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L610)

___

### enablePrefetch

• **enablePrefetch**: [`SharedWatchableValue`](neuroglancer_shared_watchable_value.SharedWatchableValue.md)<`boolean`\>

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:587](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L587)

___

### gpuMemoryCapacity

• **gpuMemoryCapacity**: [`AvailableCapacity`](neuroglancer_chunk_manager_backend._internal_.AvailableCapacity.md)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:578](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L578)

___

### gpuMemoryChanged

• **gpuMemoryChanged**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:639](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L639)

___

### gpuMemoryEvictionQueue

• `Private` **gpuMemoryEvictionQueue**: [`ChunkPriorityQueue`](neuroglancer_chunk_manager_backend._internal_.ChunkPriorityQueue.md)

Contains all chunks in GPU_MEMORY state.

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:634](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L634)

___

### gpuMemoryGeneration

• `Private` **gpuMemoryGeneration**: `number` = `0`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:643](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L643)

___

### gpuMemoryPromotionQueue

• `Private` **gpuMemoryPromotionQueue**: [`ChunkPriorityQueue`](neuroglancer_chunk_manager_backend._internal_.ChunkPriorityQueue.md)

Contains all chunks in SYSTEM_MEMORY state not in RECENT priority tier.

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:629](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L629)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[isOwner](neuroglancer_worker_rpc.SharedObjectCounterpart.md#isowner)

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L171)

___

### numFailed

• `Private` **numFailed**: `number` = `0`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:642](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L642)

___

### numQueued

• `Private` **numQueued**: `number` = `0`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:641](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L641)

___

### queuedComputePromotionQueue

• `Private` **queuedComputePromotionQueue**: [`ChunkPriorityQueue`](neuroglancer_chunk_manager_backend._internal_.ChunkPriorityQueue.md)

Contains all chunks in QUEUED state pending compute.

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:605](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L605)

___

### queuedDownloadPromotionQueue

• `Private` **queuedDownloadPromotionQueue**: [`ChunkPriorityQueue`](neuroglancer_chunk_manager_backend._internal_.ChunkPriorityQueue.md)[]

Contains all chunks in QUEUED state pending download, for each sourceQueueLevel.

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:597](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L597)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[refCount](neuroglancer_worker_rpc.SharedObjectCounterpart.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[referencedGeneration](neuroglancer_worker_rpc.SharedObjectCounterpart.md#referencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](neuroglancer_worker_rpc.RPC.md) = `null`

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[rpc](neuroglancer_worker_rpc.SharedObjectCounterpart.md#rpc)

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[rpcId](neuroglancer_worker_rpc.SharedObjectCounterpart.md#rpcid)

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L170)

___

### sources

• **sources**: `Set`<[`ChunkSource`](neuroglancer_chunk_manager_backend.ChunkSource.md)\>

Set of chunk sources associated with this queue manager.

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:592](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L592)

___

### systemMemoryCapacity

• **systemMemoryCapacity**: [`AvailableCapacity`](neuroglancer_chunk_manager_backend._internal_.AvailableCapacity.md)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:579](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L579)

___

### systemMemoryEvictionQueue

• `Private` **systemMemoryEvictionQueue**: [`ChunkPriorityQueue`](neuroglancer_chunk_manager_backend._internal_.ChunkPriorityQueue.md)

Contains all chunks that take up memory (DOWNLOADING, SYSTEM_MEMORY,
GPU_MEMORY).

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:624](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L624)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[unreferencedGeneration](neuroglancer_worker_rpc.SharedObjectCounterpart.md#unreferencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L172)

___

### updatePending

• `Private` **updatePending**: `any` = `null`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:637](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L637)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[wasDisposed](neuroglancer_worker_rpc.SharedObjectCounterpart.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addChunkToQueues\_

▸ `Private` **addChunkToQueues_**(`chunk`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:742](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L742)

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

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[addCounterpartRef](neuroglancer_worker_rpc.SharedObjectCounterpart.md#addcounterpartref)

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`ChunkQueueManager`](neuroglancer_chunk_manager_backend.ChunkQueueManager.md)

#### Returns

[`ChunkQueueManager`](neuroglancer_chunk_manager_backend.ChunkQueueManager.md)

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[addRef](neuroglancer_worker_rpc.SharedObjectCounterpart.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### adjustCapacitiesForChunk

▸ **adjustCapacitiesForChunk**(`chunk`, `add`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md) |
| `add` | `boolean` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:704](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L704)

___

### chunkQueuesForChunk

▸ **chunkQueuesForChunk**(`chunk`): [`Generator`](../interfaces/neuroglancer_chunk_manager_backend._internal_.Generator.md)<[`ChunkPriorityQueue`](neuroglancer_chunk_manager_backend._internal_.ChunkPriorityQueue.md), `void`, `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md) |

#### Returns

[`Generator`](../interfaces/neuroglancer_chunk_manager_backend._internal_.Generator.md)<[`ChunkPriorityQueue`](neuroglancer_chunk_manager_backend._internal_.ChunkPriorityQueue.md), `void`, `unknown`\>

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:669](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L669)

___

### copyChunkToGPU

▸ **copyChunkToGPU**(`chunk`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:842](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L842)

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

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[counterpartRefCountReachedZero](neuroglancer_worker_rpc.SharedObjectCounterpart.md#counterpartrefcountreachedzero)

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L234)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[dispose](neuroglancer_worker_rpc.SharedObjectCounterpart.md#dispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[disposed](neuroglancer_worker_rpc.SharedObjectCounterpart.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L75)

___

### freeChunkGPUMemory

▸ **freeChunkGPUMemory**(`chunk`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:820](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L820)

___

### freeChunkSystemMemory

▸ **freeChunkSystemMemory**(`chunk`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:827](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L827)

___

### initializeCounterpart

▸ **initializeCounterpart**(`rpc`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](neuroglancer_worker_rpc.RPC.md) |
| `options` | `any` |

#### Returns

`void`

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[initializeCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md#initializecounterpart)

#### Defined in

[src/neuroglancer/worker_rpc.ts:182](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L182)

___

### initializeSharedObject

▸ **initializeSharedObject**(`rpc`, `rpcId?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](neuroglancer_worker_rpc.RPC.md) |
| `rpcId` | `number` |

#### Returns

`void`

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[initializeSharedObject](neuroglancer_worker_rpc.SharedObjectCounterpart.md#initializesharedobject)

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L175)

___

### invalidateSourceCache

▸ **invalidateSourceCache**(`source`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`ChunkSource`](neuroglancer_chunk_manager_backend.ChunkSource.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:939](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L939)

___

### logStatistics

▸ **logStatistics**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:930](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L930)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[ownerDispose](neuroglancer_worker_rpc.SharedObjectCounterpart.md#ownerdispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L219)

___

### performChunkPriorityUpdate

▸ **performChunkPriorityUpdate**(`chunk`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:758](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L758)

___

### process

▸ **process**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:916](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L916)

___

### processGPUPromotions\_

▸ `Private` **processGPUPromotions_**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:793](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L793)

___

### processQueuePromotions\_

▸ `Private` **processQueuePromotions_**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:858](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L858)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[refCountReachedZero](neuroglancer_worker_rpc.SharedObjectCounterpart.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/worker_rpc.ts:203](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L203)

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

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[registerCancellable](neuroglancer_worker_rpc.SharedObjectCounterpart.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/neuroglancer_util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[registerDisposer](neuroglancer_worker_rpc.SharedObjectCounterpart.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](../modules/main_module._internal_.md#eventtarget) |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/main_module._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](../interfaces/main_module._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[registerEventListener](neuroglancer_worker_rpc.SharedObjectCounterpart.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L95)

___

### removeChunkFromQueues\_

▸ `Private` **removeChunkFromQueues_**(`chunk`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:734](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L734)

___

### retrieveChunkData

▸ **retrieveChunkData**(`chunk`): `Promise`<[`TypedArray`](../modules/neuroglancer_util_array.md#typedarray)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md) |

#### Returns

`Promise`<[`TypedArray`](../modules/neuroglancer_util_array.md#typedarray)\>

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:837](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L837)

___

### scheduleUpdate

▸ **scheduleUpdate**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:663](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L663)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/neuroglancer_util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[unregisterDisposer](neuroglancer_worker_rpc.SharedObjectCounterpart.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)

___

### updateChunkState

▸ **updateChunkState**(`chunk`, `newState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md) |
| `newState` | [`ChunkState`](../enums/neuroglancer_chunk_manager_base.ChunkState.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:778](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L778)
