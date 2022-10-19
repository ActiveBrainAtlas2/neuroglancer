[neuroglancer](../README.md) / [Modules](../modules.md) / [chunk\_manager/frontend](../modules/chunk_manager_frontend.md) / ChunkQueueManager

# Class: ChunkQueueManager

[chunk_manager/frontend](../modules/chunk_manager_frontend.md).ChunkQueueManager

## Hierarchy

- [`SharedObject`](annotation_annotation_layer_state._internal_.SharedObject.md)

  ↳ **`ChunkQueueManager`**

## Table of contents

### Constructors

- [constructor](chunk_manager_frontend.ChunkQueueManager.md#constructor)

### Properties

- [RPC\_TYPE\_ID](chunk_manager_frontend.ChunkQueueManager.md#rpc_type_id)
- [capacities](chunk_manager_frontend.ChunkQueueManager.md#capacities)
- [chunkUpdateDeadline](chunk_manager_frontend.ChunkQueueManager.md#chunkupdatedeadline)
- [chunkUpdateDelay](chunk_manager_frontend.ChunkQueueManager.md#chunkupdatedelay)
- [disposedStacks](chunk_manager_frontend.ChunkQueueManager.md#disposedstacks)
- [enablePrefetch](chunk_manager_frontend.ChunkQueueManager.md#enableprefetch)
- [frameNumberCounter](chunk_manager_frontend.ChunkQueueManager.md#framenumbercounter)
- [gl](chunk_manager_frontend.ChunkQueueManager.md#gl)
- [isOwner](chunk_manager_frontend.ChunkQueueManager.md#isowner)
- [pendingChunkUpdates](chunk_manager_frontend.ChunkQueueManager.md#pendingchunkupdates)
- [pendingChunkUpdatesTail](chunk_manager_frontend.ChunkQueueManager.md#pendingchunkupdatestail)
- [refCount](chunk_manager_frontend.ChunkQueueManager.md#refcount)
- [referencedGeneration](chunk_manager_frontend.ChunkQueueManager.md#referencedgeneration)
- [rpc](chunk_manager_frontend.ChunkQueueManager.md#rpc)
- [rpcId](chunk_manager_frontend.ChunkQueueManager.md#rpcid)
- [unreferencedGeneration](chunk_manager_frontend.ChunkQueueManager.md#unreferencedgeneration)
- [visibleChunksChanged](chunk_manager_frontend.ChunkQueueManager.md#visiblechunkschanged)
- [wasDisposed](chunk_manager_frontend.ChunkQueueManager.md#wasdisposed)

### Methods

- [addCounterpartRef](chunk_manager_frontend.ChunkQueueManager.md#addcounterpartref)
- [addRef](chunk_manager_frontend.ChunkQueueManager.md#addref)
- [applyChunkUpdate](chunk_manager_frontend.ChunkQueueManager.md#applychunkupdate)
- [counterpartRefCountReachedZero](chunk_manager_frontend.ChunkQueueManager.md#counterpartrefcountreachedzero)
- [dispose](chunk_manager_frontend.ChunkQueueManager.md#dispose)
- [disposed](chunk_manager_frontend.ChunkQueueManager.md#disposed)
- [flushPendingChunkUpdates](chunk_manager_frontend.ChunkQueueManager.md#flushpendingchunkupdates)
- [getStatistics](chunk_manager_frontend.ChunkQueueManager.md#getstatistics)
- [handleFetch\_](chunk_manager_frontend.ChunkQueueManager.md#handlefetch_)
- [initializeCounterpart](chunk_manager_frontend.ChunkQueueManager.md#initializecounterpart)
- [initializeSharedObject](chunk_manager_frontend.ChunkQueueManager.md#initializesharedobject)
- [ownerDispose](chunk_manager_frontend.ChunkQueueManager.md#ownerdispose)
- [processPendingChunkUpdates](chunk_manager_frontend.ChunkQueueManager.md#processpendingchunkupdates)
- [refCountReachedZero](chunk_manager_frontend.ChunkQueueManager.md#refcountreachedzero)
- [registerCancellable](chunk_manager_frontend.ChunkQueueManager.md#registercancellable)
- [registerDisposer](chunk_manager_frontend.ChunkQueueManager.md#registerdisposer)
- [registerEventListener](chunk_manager_frontend.ChunkQueueManager.md#registereventlistener)
- [scheduleChunkUpdate](chunk_manager_frontend.ChunkQueueManager.md#schedulechunkupdate)
- [unregisterDisposer](chunk_manager_frontend.ChunkQueueManager.md#unregisterdisposer)

## Constructors

### constructor

• **new ChunkQueueManager**(`rpc`, `gl`, `frameNumberCounter`, `capacities`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](annotation_annotation_layer_state._internal_.RPC.md) |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |
| `frameNumberCounter` | [`FrameNumberCounter`](../interfaces/chunk_manager_frontend.FrameNumberCounter.md) |
| `capacities` | `Object` |
| `capacities.compute` | [`CapacitySpecification`](chunk_manager_frontend.CapacitySpecification.md) |
| `capacities.download` | [`CapacitySpecification`](chunk_manager_frontend.CapacitySpecification.md) |
| `capacities.gpuMemory` | [`CapacitySpecification`](chunk_manager_frontend.CapacitySpecification.md) |
| `capacities.systemMemory` | [`CapacitySpecification`](chunk_manager_frontend.CapacitySpecification.md) |

#### Overrides

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[constructor](annotation_annotation_layer_state._internal_.SharedObject.md#constructor)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:89](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L89)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[RPC_TYPE_ID](annotation_annotation_layer_state._internal_.SharedObject.md#rpc_type_id)

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L245)

___

### capacities

• **capacities**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `compute` | [`CapacitySpecification`](chunk_manager_frontend.CapacitySpecification.md) |
| `download` | [`CapacitySpecification`](chunk_manager_frontend.CapacitySpecification.md) |
| `gpuMemory` | [`CapacitySpecification`](chunk_manager_frontend.CapacitySpecification.md) |
| `systemMemory` | [`CapacitySpecification`](chunk_manager_frontend.CapacitySpecification.md) |

___

### chunkUpdateDeadline

• **chunkUpdateDeadline**: ``null`` \| `number` = `null`

If non-null, deadline in milliseconds since epoch after which chunk copies to the GPU may not
start (until the next frame).

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:83](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L83)

___

### chunkUpdateDelay

• **chunkUpdateDelay**: `number` = `30`

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L85)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[disposedStacks](annotation_annotation_layer_state._internal_.SharedObject.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### enablePrefetch

• **enablePrefetch**: [`TrackableBoolean`](annotation_annotation_layer_state._internal_.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L87)

___

### frameNumberCounter

• **frameNumberCounter**: [`FrameNumberCounter`](../interfaces/chunk_manager_frontend.FrameNumberCounter.md)

___

### gl

• **gl**: [`GL`](../interfaces/webgl_context.GL.md)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[isOwner](annotation_annotation_layer_state._internal_.SharedObject.md#isowner)

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L171)

___

### pendingChunkUpdates

• **pendingChunkUpdates**: `any` = `null`

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L76)

___

### pendingChunkUpdatesTail

• **pendingChunkUpdatesTail**: `any` = `null`

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L77)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[refCount](annotation_annotation_layer_state._internal_.SharedObject.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[referencedGeneration](annotation_annotation_layer_state._internal_.SharedObject.md#referencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](annotation_annotation_layer_state._internal_.RPC.md) = `null`

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[rpc](annotation_annotation_layer_state._internal_.SharedObject.md#rpc)

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[rpcId](annotation_annotation_layer_state._internal_.SharedObject.md#rpcid)

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L170)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[unreferencedGeneration](annotation_annotation_layer_state._internal_.SharedObject.md#unreferencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L172)

___

### visibleChunksChanged

• **visibleChunksChanged**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L75)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[wasDisposed](annotation_annotation_layer_state._internal_.SharedObject.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

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

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[addCounterpartRef](annotation_annotation_layer_state._internal_.SharedObject.md#addcounterpartref)

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`ChunkQueueManager`](chunk_manager_frontend.ChunkQueueManager.md)

#### Returns

[`ChunkQueueManager`](chunk_manager_frontend.ChunkQueueManager.md)

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[addRef](annotation_annotation_layer_state._internal_.SharedObject.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### applyChunkUpdate

▸ **applyChunkUpdate**(`update`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `update` | `any` |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:185](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L185)

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

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[counterpartRefCountReachedZero](annotation_annotation_layer_state._internal_.SharedObject.md#counterpartrefcountreachedzero)

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L234)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[dispose](annotation_annotation_layer_state._internal_.SharedObject.md#dispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[disposed](annotation_annotation_layer_state._internal_.SharedObject.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

___

### flushPendingChunkUpdates

▸ **flushPendingChunkUpdates**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:236](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L236)

___

### getStatistics

▸ **getStatistics**(): `Promise`<`Map`<[`ChunkSource`](chunk_manager_frontend.ChunkSource.md), `Float64Array`\>\>

#### Returns

`Promise`<`Map`<[`ChunkSource`](chunk_manager_frontend.ChunkSource.md), `Float64Array`\>\>

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:240](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L240)

___

### handleFetch\_

▸ `Private` **handleFetch_**(`source`, `update`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`ChunkSource`](chunk_manager_frontend.ChunkSource.md) |
| `update` | `any` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:162](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L162)

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

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[initializeCounterpart](annotation_annotation_layer_state._internal_.SharedObject.md#initializecounterpart)

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

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[initializeSharedObject](annotation_annotation_layer_state._internal_.SharedObject.md#initializesharedobject)

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L175)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[ownerDispose](annotation_annotation_layer_state._internal_.SharedObject.md#ownerdispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L219)

___

### processPendingChunkUpdates

▸ **processPendingChunkUpdates**(`flush?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `flush` | `boolean` | `false` |

#### Returns

`number`

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:130](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L130)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[refCountReachedZero](annotation_annotation_layer_state._internal_.SharedObject.md#refcountreachedzero)

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

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[registerCancellable](annotation_annotation_layer_state._internal_.SharedObject.md#registercancellable)

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

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[registerDisposer](annotation_annotation_layer_state._internal_.SharedObject.md#registerdisposer)

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

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[registerEventListener](annotation_annotation_layer_state._internal_.SharedObject.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

___

### scheduleChunkUpdate

▸ **scheduleChunkUpdate**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:120](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L120)

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

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[unregisterDisposer](annotation_annotation_layer_state._internal_.SharedObject.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)
