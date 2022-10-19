[neuroglancer](../README.md) / [Modules](../modules.md) / [data\_panel\_layout](../modules/data_panel_layout.md) / [<internal\>](../modules/data_panel_layout._internal_.md) / ChunkQueueManager

# Class: ChunkQueueManager

[data_panel_layout](../modules/data_panel_layout.md).[<internal>](../modules/data_panel_layout._internal_.md).ChunkQueueManager

## Hierarchy

- [`SharedObject`](worker_rpc.SharedObject.md)

  ↳ **`ChunkQueueManager`**

## Table of contents

### Constructors

- [constructor](data_panel_layout._internal_.ChunkQueueManager.md#constructor)

### Properties

- [RPC\_TYPE\_ID](data_panel_layout._internal_.ChunkQueueManager.md#rpc_type_id)
- [capacities](data_panel_layout._internal_.ChunkQueueManager.md#capacities)
- [chunkUpdateDeadline](data_panel_layout._internal_.ChunkQueueManager.md#chunkupdatedeadline)
- [chunkUpdateDelay](data_panel_layout._internal_.ChunkQueueManager.md#chunkupdatedelay)
- [disposedStacks](data_panel_layout._internal_.ChunkQueueManager.md#disposedstacks)
- [enablePrefetch](data_panel_layout._internal_.ChunkQueueManager.md#enableprefetch)
- [frameNumberCounter](data_panel_layout._internal_.ChunkQueueManager.md#framenumbercounter)
- [gl](data_panel_layout._internal_.ChunkQueueManager.md#gl)
- [isOwner](data_panel_layout._internal_.ChunkQueueManager.md#isowner)
- [pendingChunkUpdates](data_panel_layout._internal_.ChunkQueueManager.md#pendingchunkupdates)
- [pendingChunkUpdatesTail](data_panel_layout._internal_.ChunkQueueManager.md#pendingchunkupdatestail)
- [refCount](data_panel_layout._internal_.ChunkQueueManager.md#refcount)
- [referencedGeneration](data_panel_layout._internal_.ChunkQueueManager.md#referencedgeneration)
- [rpc](data_panel_layout._internal_.ChunkQueueManager.md#rpc)
- [rpcId](data_panel_layout._internal_.ChunkQueueManager.md#rpcid)
- [unreferencedGeneration](data_panel_layout._internal_.ChunkQueueManager.md#unreferencedgeneration)
- [visibleChunksChanged](data_panel_layout._internal_.ChunkQueueManager.md#visiblechunkschanged)
- [wasDisposed](data_panel_layout._internal_.ChunkQueueManager.md#wasdisposed)

### Methods

- [addCounterpartRef](data_panel_layout._internal_.ChunkQueueManager.md#addcounterpartref)
- [addRef](data_panel_layout._internal_.ChunkQueueManager.md#addref)
- [applyChunkUpdate](data_panel_layout._internal_.ChunkQueueManager.md#applychunkupdate)
- [counterpartRefCountReachedZero](data_panel_layout._internal_.ChunkQueueManager.md#counterpartrefcountreachedzero)
- [dispose](data_panel_layout._internal_.ChunkQueueManager.md#dispose)
- [disposed](data_panel_layout._internal_.ChunkQueueManager.md#disposed)
- [flushPendingChunkUpdates](data_panel_layout._internal_.ChunkQueueManager.md#flushpendingchunkupdates)
- [getStatistics](data_panel_layout._internal_.ChunkQueueManager.md#getstatistics)
- [handleFetch\_](data_panel_layout._internal_.ChunkQueueManager.md#handlefetch_)
- [initializeCounterpart](data_panel_layout._internal_.ChunkQueueManager.md#initializecounterpart)
- [initializeSharedObject](data_panel_layout._internal_.ChunkQueueManager.md#initializesharedobject)
- [ownerDispose](data_panel_layout._internal_.ChunkQueueManager.md#ownerdispose)
- [processPendingChunkUpdates](data_panel_layout._internal_.ChunkQueueManager.md#processpendingchunkupdates)
- [refCountReachedZero](data_panel_layout._internal_.ChunkQueueManager.md#refcountreachedzero)
- [registerCancellable](data_panel_layout._internal_.ChunkQueueManager.md#registercancellable)
- [registerDisposer](data_panel_layout._internal_.ChunkQueueManager.md#registerdisposer)
- [registerEventListener](data_panel_layout._internal_.ChunkQueueManager.md#registereventlistener)
- [scheduleChunkUpdate](data_panel_layout._internal_.ChunkQueueManager.md#schedulechunkupdate)
- [unregisterDisposer](data_panel_layout._internal_.ChunkQueueManager.md#unregisterdisposer)

## Constructors

### constructor

• **new ChunkQueueManager**(`rpc`, `gl`, `frameNumberCounter`, `capacities`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](worker_rpc.RPC.md) |
| `gl` | [`GL`](../interfaces/axes_lines._internal_.GL.md) |
| `frameNumberCounter` | [`FrameNumberCounter`](../interfaces/data_panel_layout._internal_.FrameNumberCounter.md) |
| `capacities` | `Object` |
| `capacities.compute` | [`CapacitySpecification`](data_panel_layout._internal_.CapacitySpecification.md) |
| `capacities.download` | [`CapacitySpecification`](data_panel_layout._internal_.CapacitySpecification.md) |
| `capacities.gpuMemory` | [`CapacitySpecification`](data_panel_layout._internal_.CapacitySpecification.md) |
| `capacities.systemMemory` | [`CapacitySpecification`](data_panel_layout._internal_.CapacitySpecification.md) |

#### Overrides

[SharedObject](worker_rpc.SharedObject.md).[constructor](worker_rpc.SharedObject.md#constructor)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:89](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L89)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[RPC_TYPE_ID](worker_rpc.SharedObject.md#rpc_type_id)

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L245)

___

### capacities

• **capacities**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `compute` | [`CapacitySpecification`](data_panel_layout._internal_.CapacitySpecification.md) |
| `download` | [`CapacitySpecification`](data_panel_layout._internal_.CapacitySpecification.md) |
| `gpuMemory` | [`CapacitySpecification`](data_panel_layout._internal_.CapacitySpecification.md) |
| `systemMemory` | [`CapacitySpecification`](data_panel_layout._internal_.CapacitySpecification.md) |

___

### chunkUpdateDeadline

• **chunkUpdateDeadline**: ``null`` \| `number` = `null`

If non-null, deadline in milliseconds since epoch after which chunk copies to the GPU may not
start (until the next frame).

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:83](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L83)

___

### chunkUpdateDelay

• **chunkUpdateDelay**: `number` = `30`

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L85)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[disposedStacks](worker_rpc.SharedObject.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### enablePrefetch

• **enablePrefetch**: [`TrackableBoolean`](trackable_boolean.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L87)

___

### frameNumberCounter

• **frameNumberCounter**: [`FrameNumberCounter`](../interfaces/data_panel_layout._internal_.FrameNumberCounter.md)

___

### gl

• **gl**: [`GL`](../interfaces/axes_lines._internal_.GL.md)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[isOwner](worker_rpc.SharedObject.md#isowner)

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L171)

___

### pendingChunkUpdates

• **pendingChunkUpdates**: `any` = `null`

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L76)

___

### pendingChunkUpdatesTail

• **pendingChunkUpdatesTail**: `any` = `null`

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L77)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[refCount](worker_rpc.SharedObject.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[referencedGeneration](worker_rpc.SharedObject.md#referencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](worker_rpc.RPC.md) = `null`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[rpc](worker_rpc.SharedObject.md#rpc)

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[rpcId](worker_rpc.SharedObject.md#rpcid)

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L170)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[unreferencedGeneration](worker_rpc.SharedObject.md#unreferencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L172)

___

### visibleChunksChanged

• **visibleChunksChanged**: [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L75)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[wasDisposed](worker_rpc.SharedObject.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

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

[SharedObject](worker_rpc.SharedObject.md).[addCounterpartRef](worker_rpc.SharedObject.md#addcounterpartref)

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`ChunkQueueManager`](data_panel_layout._internal_.ChunkQueueManager.md)

#### Returns

[`ChunkQueueManager`](data_panel_layout._internal_.ChunkQueueManager.md)

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[addRef](worker_rpc.SharedObject.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

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

[src/neuroglancer/chunk_manager/frontend.ts:185](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L185)

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

[SharedObject](worker_rpc.SharedObject.md).[counterpartRefCountReachedZero](worker_rpc.SharedObject.md#counterpartrefcountreachedzero)

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L234)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[dispose](worker_rpc.SharedObject.md#dispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[disposed](worker_rpc.SharedObject.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L75)

___

### flushPendingChunkUpdates

▸ **flushPendingChunkUpdates**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:236](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L236)

___

### getStatistics

▸ **getStatistics**(): `Promise`<`Map`<[`ChunkSource`](data_panel_layout._internal_.ChunkSource.md), `Float64Array`\>\>

#### Returns

`Promise`<`Map`<[`ChunkSource`](data_panel_layout._internal_.ChunkSource.md), `Float64Array`\>\>

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:240](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L240)

___

### handleFetch\_

▸ `Private` **handleFetch_**(`source`, `update`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`ChunkSource`](data_panel_layout._internal_.ChunkSource.md) |
| `update` | `any` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:162](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L162)

___

### initializeCounterpart

▸ **initializeCounterpart**(`rpc`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](worker_rpc.RPC.md) |
| `options` | `any` |

#### Returns

`void`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[initializeCounterpart](worker_rpc.SharedObject.md#initializecounterpart)

#### Defined in

[src/neuroglancer/worker_rpc.ts:182](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L182)

___

### initializeSharedObject

▸ **initializeSharedObject**(`rpc`, `rpcId?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](worker_rpc.RPC.md) |
| `rpcId` | `number` |

#### Returns

`void`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[initializeSharedObject](worker_rpc.SharedObject.md#initializesharedobject)

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L175)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[ownerDispose](worker_rpc.SharedObject.md#ownerdispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L219)

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

[src/neuroglancer/chunk_manager/frontend.ts:130](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L130)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[refCountReachedZero](worker_rpc.SharedObject.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/worker_rpc.ts:203](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L203)

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

[SharedObject](worker_rpc.SharedObject.md).[registerCancellable](worker_rpc.SharedObject.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/axes_lines._internal_.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[registerDisposer](worker_rpc.SharedObject.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](../modules/axes_lines._internal_.md#eventtarget) |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/axes_lines._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](../interfaces/axes_lines._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[registerEventListener](worker_rpc.SharedObject.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L95)

___

### scheduleChunkUpdate

▸ **scheduleChunkUpdate**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:120](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L120)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/axes_lines._internal_.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[unregisterDisposer](worker_rpc.SharedObject.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L85)
