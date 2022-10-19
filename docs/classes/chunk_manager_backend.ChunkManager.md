[neuroglancer](../README.md) / [Modules](../modules.md) / [chunk\_manager/backend](../modules/chunk_manager_backend.md) / ChunkManager

# Class: ChunkManager

[chunk_manager/backend](../modules/chunk_manager_backend.md).ChunkManager

## Hierarchy

- [`SharedObjectCounterpart`](annotation_backend._internal_.SharedObjectCounterpart.md)

  ↳ **`ChunkManager`**

## Table of contents

### Constructors

- [constructor](chunk_manager_backend.ChunkManager.md#constructor)

### Properties

- [RPC\_TYPE\_ID](chunk_manager_backend.ChunkManager.md#rpc_type_id)
- [disposedStacks](chunk_manager_backend.ChunkManager.md#disposedstacks)
- [existingTierChunks](chunk_manager_backend.ChunkManager.md#existingtierchunks)
- [isOwner](chunk_manager_backend.ChunkManager.md#isowner)
- [layers](chunk_manager_backend.ChunkManager.md#layers)
- [memoize](chunk_manager_backend.ChunkManager.md#memoize)
- [newTierChunks](chunk_manager_backend.ChunkManager.md#newtierchunks)
- [queueManager](chunk_manager_backend.ChunkManager.md#queuemanager)
- [recomputeChunkPriorities](chunk_manager_backend.ChunkManager.md#recomputechunkpriorities)
- [recomputeChunkPrioritiesLate](chunk_manager_backend.ChunkManager.md#recomputechunkprioritieslate)
- [refCount](chunk_manager_backend.ChunkManager.md#refcount)
- [referencedGeneration](chunk_manager_backend.ChunkManager.md#referencedgeneration)
- [rpc](chunk_manager_backend.ChunkManager.md#rpc)
- [rpcId](chunk_manager_backend.ChunkManager.md#rpcid)
- [sendLayerChunkStatistics](chunk_manager_backend.ChunkManager.md#sendlayerchunkstatistics)
- [unreferencedGeneration](chunk_manager_backend.ChunkManager.md#unreferencedgeneration)
- [updatePending](chunk_manager_backend.ChunkManager.md#updatepending)
- [wasDisposed](chunk_manager_backend.ChunkManager.md#wasdisposed)

### Methods

- [addCounterpartRef](chunk_manager_backend.ChunkManager.md#addcounterpartref)
- [addRef](chunk_manager_backend.ChunkManager.md#addref)
- [counterpartRefCountReachedZero](chunk_manager_backend.ChunkManager.md#counterpartrefcountreachedzero)
- [dispose](chunk_manager_backend.ChunkManager.md#dispose)
- [disposed](chunk_manager_backend.ChunkManager.md#disposed)
- [initializeCounterpart](chunk_manager_backend.ChunkManager.md#initializecounterpart)
- [initializeSharedObject](chunk_manager_backend.ChunkManager.md#initializesharedobject)
- [ownerDispose](chunk_manager_backend.ChunkManager.md#ownerdispose)
- [recomputeChunkPriorities\_](chunk_manager_backend.ChunkManager.md#recomputechunkpriorities_)
- [refCountReachedZero](chunk_manager_backend.ChunkManager.md#refcountreachedzero)
- [registerCancellable](chunk_manager_backend.ChunkManager.md#registercancellable)
- [registerDisposer](chunk_manager_backend.ChunkManager.md#registerdisposer)
- [registerEventListener](chunk_manager_backend.ChunkManager.md#registereventlistener)
- [registerLayer](chunk_manager_backend.ChunkManager.md#registerlayer)
- [requestChunk](chunk_manager_backend.ChunkManager.md#requestchunk)
- [scheduleUpdateChunkPriorities](chunk_manager_backend.ChunkManager.md#scheduleupdatechunkpriorities)
- [unregisterDisposer](chunk_manager_backend.ChunkManager.md#unregisterdisposer)
- [updateQueueState](chunk_manager_backend.ChunkManager.md#updatequeuestate)

## Constructors

### constructor

• **new ChunkManager**(`rpc`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](annotation_annotation_layer_state._internal_.RPC.md) |
| `options` | `any` |

#### Overrides

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[constructor](annotation_backend._internal_.SharedObjectCounterpart.md#constructor)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:1011](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L1011)

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

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[disposedStacks](annotation_backend._internal_.SharedObjectCounterpart.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### existingTierChunks

• `Private` **existingTierChunks**: [`Chunk`](chunk_manager_backend.Chunk.md)[][] = `[]`

Array of chunks within each existing priority tier.

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:975](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L975)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[isOwner](annotation_backend._internal_.SharedObjectCounterpart.md#isowner)

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L171)

___

### layers

• **layers**: [`ChunkRenderLayerBackend`](chunk_manager_backend.ChunkRenderLayerBackend.md)[] = `[]`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:996](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L996)

___

### memoize

• **memoize**: [`StringMemoize`](util_memoize.StringMemoize.md)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:994](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L994)

___

### newTierChunks

• `Private` **newTierChunks**: [`Chunk`](chunk_manager_backend.Chunk.md)[] = `[]`

Array of chunks whose new priorities have not yet been reflected in the
queue states.

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:981](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L981)

___

### queueManager

• **queueManager**: [`ChunkQueueManager`](chunk_manager_backend.ChunkQueueManager.md)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:970](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L970)

___

### recomputeChunkPriorities

• **recomputeChunkPriorities**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:986](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L986)

___

### recomputeChunkPrioritiesLate

• **recomputeChunkPrioritiesLate**: [`NullarySignal`](util_signal.NullarySignal.md)

Dispatched immediately after recomputeChunkPriorities is dispatched.
This signal should be used for handlers that depend on the result of another handler.

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:992](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L992)

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

### sendLayerChunkStatistics

• `Private` **sendLayerChunkStatistics**: [`DebouncedFunc`](../interfaces/annotation_annotation_layer_state._internal_.DebouncedFunc.md)<() => `void`\>

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:998](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L998)

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

[src/neuroglancer/chunk_manager/backend.ts:984](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L984)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[wasDisposed](annotation_backend._internal_.SharedObjectCounterpart.md#wasdisposed)

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

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[addCounterpartRef](annotation_backend._internal_.SharedObjectCounterpart.md#addcounterpartref)

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`ChunkManager`](chunk_manager_backend.ChunkManager.md)

#### Returns

[`ChunkManager`](chunk_manager_backend.ChunkManager.md)

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[addRef](annotation_backend._internal_.SharedObjectCounterpart.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

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

### recomputeChunkPriorities\_

▸ `Private` **recomputeChunkPriorities_**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:1047](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L1047)

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

### registerLayer

▸ **registerLayer**(`layer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`ChunkRenderLayerBackend`](chunk_manager_backend.ChunkRenderLayerBackend.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:1035](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L1035)

___

### requestChunk

▸ **requestChunk**(`chunk`, `tier`, `priority`, `toFrontend?`): `void`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `chunk` | [`Chunk`](chunk_manager_backend.Chunk.md) | `undefined` |  |
| `tier` | [`ChunkPriorityTier`](../enums/chunk_manager_base.ChunkPriorityTier.md) | `undefined` | New priority tier.  Must not equal ChunkPriorityTier.RECENT. |
| `priority` | `number` | `undefined` | Priority within tier. |
| `toFrontend` | `boolean` | `true` | true if the chunk should be moved to the frontend when ready. |

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:1062](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L1062)

___

### scheduleUpdateChunkPriorities

▸ **scheduleUpdateChunkPriorities**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:1029](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L1029)

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

### updateQueueState

▸ **updateQueueState**(`tiers`): `void`

Update queue state to reflect updated contents of the specified priority tiers.  Existing
chunks within those tiers not present in this.newTierChunks will be moved to the RECENT tier
(and removed if in the QUEUED state).

#### Parameters

| Name | Type |
| :------ | :------ |
| `tiers` | [`ChunkPriorityTier`](../enums/chunk_manager_base.ChunkPriorityTier.md)[] |

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:1087](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L1087)
