[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/backend](../modules/neuroglancer_sliceview_backend.md) / SliceViewRenderLayerBackend

# Class: SliceViewRenderLayerBackend

[neuroglancer/sliceview/backend](../modules/neuroglancer_sliceview_backend.md).SliceViewRenderLayerBackend

## Hierarchy

- [`SharedObjectCounterpart`](neuroglancer_worker_rpc.SharedObjectCounterpart.md)

  ↳ **`SliceViewRenderLayerBackend`**

## Implements

- [`SliceViewRenderLayer`](../interfaces/neuroglancer_sliceview_base.SliceViewRenderLayer.md)
- [`ChunkRenderLayerBackend`](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_sliceview_backend.SliceViewRenderLayerBackend.md#constructor)

### Properties

- [RPC\_TYPE\_ID](neuroglancer_sliceview_backend.SliceViewRenderLayerBackend.md#rpc_type_id)
- [chunkManagerGeneration](neuroglancer_sliceview_backend.SliceViewRenderLayerBackend.md#chunkmanagergeneration)
- [disposedStacks](neuroglancer_sliceview_backend.SliceViewRenderLayerBackend.md#disposedstacks)
- [isOwner](neuroglancer_sliceview_backend.SliceViewRenderLayerBackend.md#isowner)
- [localPosition](neuroglancer_sliceview_backend.SliceViewRenderLayerBackend.md#localposition)
- [numPrefetchChunksAvailable](neuroglancer_sliceview_backend.SliceViewRenderLayerBackend.md#numprefetchchunksavailable)
- [numPrefetchChunksNeeded](neuroglancer_sliceview_backend.SliceViewRenderLayerBackend.md#numprefetchchunksneeded)
- [numVisibleChunksAvailable](neuroglancer_sliceview_backend.SliceViewRenderLayerBackend.md#numvisiblechunksavailable)
- [numVisibleChunksNeeded](neuroglancer_sliceview_backend.SliceViewRenderLayerBackend.md#numvisiblechunksneeded)
- [refCount](neuroglancer_sliceview_backend.SliceViewRenderLayerBackend.md#refcount)
- [referencedGeneration](neuroglancer_sliceview_backend.SliceViewRenderLayerBackend.md#referencedgeneration)
- [renderScaleTarget](neuroglancer_sliceview_backend.SliceViewRenderLayerBackend.md#renderscaletarget)
- [rpc](neuroglancer_sliceview_backend.SliceViewRenderLayerBackend.md#rpc)
- [rpcId](neuroglancer_sliceview_backend.SliceViewRenderLayerBackend.md#rpcid)
- [unreferencedGeneration](neuroglancer_sliceview_backend.SliceViewRenderLayerBackend.md#unreferencedgeneration)
- [wasDisposed](neuroglancer_sliceview_backend.SliceViewRenderLayerBackend.md#wasdisposed)

### Methods

- [addCounterpartRef](neuroglancer_sliceview_backend.SliceViewRenderLayerBackend.md#addcounterpartref)
- [addRef](neuroglancer_sliceview_backend.SliceViewRenderLayerBackend.md#addref)
- [counterpartRefCountReachedZero](neuroglancer_sliceview_backend.SliceViewRenderLayerBackend.md#counterpartrefcountreachedzero)
- [dispose](neuroglancer_sliceview_backend.SliceViewRenderLayerBackend.md#dispose)
- [disposed](neuroglancer_sliceview_backend.SliceViewRenderLayerBackend.md#disposed)
- [filterVisibleSources](neuroglancer_sliceview_backend.SliceViewRenderLayerBackend.md#filtervisiblesources)
- [initializeCounterpart](neuroglancer_sliceview_backend.SliceViewRenderLayerBackend.md#initializecounterpart)
- [initializeSharedObject](neuroglancer_sliceview_backend.SliceViewRenderLayerBackend.md#initializesharedobject)
- [ownerDispose](neuroglancer_sliceview_backend.SliceViewRenderLayerBackend.md#ownerdispose)
- [refCountReachedZero](neuroglancer_sliceview_backend.SliceViewRenderLayerBackend.md#refcountreachedzero)
- [registerCancellable](neuroglancer_sliceview_backend.SliceViewRenderLayerBackend.md#registercancellable)
- [registerDisposer](neuroglancer_sliceview_backend.SliceViewRenderLayerBackend.md#registerdisposer)
- [registerEventListener](neuroglancer_sliceview_backend.SliceViewRenderLayerBackend.md#registereventlistener)
- [unregisterDisposer](neuroglancer_sliceview_backend.SliceViewRenderLayerBackend.md#unregisterdisposer)

## Constructors

### constructor

• **new SliceViewRenderLayerBackend**(`rpc`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](neuroglancer_worker_rpc.RPC.md) |
| `options` | `any` |

#### Overrides

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[constructor](neuroglancer_worker_rpc.SharedObjectCounterpart.md#constructor)

#### Defined in

[src/neuroglancer/sliceview/backend.ts:343](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/backend.ts#L343)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Implementation of

ChunkRenderLayerBackend.RPC\_TYPE\_ID

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[RPC_TYPE_ID](neuroglancer_worker_rpc.SharedObjectCounterpart.md#rpc_type_id)

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L245)

___

### chunkManagerGeneration

• **chunkManagerGeneration**: `number`

#### Implementation of

ChunkRenderLayerBackend.chunkManagerGeneration

#### Defined in

[src/neuroglancer/sliceview/backend.ts:341](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/backend.ts#L341)

___

### disposedStacks

• **disposedStacks**: `any`

#### Implementation of

ChunkRenderLayerBackend.disposedStacks

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[disposedStacks](neuroglancer_worker_rpc.SharedObjectCounterpart.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Implementation of

ChunkRenderLayerBackend.isOwner

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[isOwner](neuroglancer_worker_rpc.SharedObjectCounterpart.md#isowner)

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L171)

___

### localPosition

• **localPosition**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`Float32Array`\>

Current position of non-global layer dimensions.

#### Implementation of

[SliceViewRenderLayer](../interfaces/neuroglancer_sliceview_base.SliceViewRenderLayer.md).[localPosition](../interfaces/neuroglancer_sliceview_base.SliceViewRenderLayer.md#localposition)

#### Defined in

[src/neuroglancer/sliceview/backend.ts:335](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/backend.ts#L335)

___

### numPrefetchChunksAvailable

• **numPrefetchChunksAvailable**: `number`

#### Implementation of

ChunkRenderLayerBackend.numPrefetchChunksAvailable

#### Defined in

[src/neuroglancer/sliceview/backend.ts:340](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/backend.ts#L340)

___

### numPrefetchChunksNeeded

• **numPrefetchChunksNeeded**: `number`

#### Implementation of

ChunkRenderLayerBackend.numPrefetchChunksNeeded

#### Defined in

[src/neuroglancer/sliceview/backend.ts:339](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/backend.ts#L339)

___

### numVisibleChunksAvailable

• **numVisibleChunksAvailable**: `number`

#### Implementation of

ChunkRenderLayerBackend.numVisibleChunksAvailable

#### Defined in

[src/neuroglancer/sliceview/backend.ts:338](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/backend.ts#L338)

___

### numVisibleChunksNeeded

• **numVisibleChunksNeeded**: `number`

#### Implementation of

ChunkRenderLayerBackend.numVisibleChunksNeeded

#### Defined in

[src/neuroglancer/sliceview/backend.ts:337](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/backend.ts#L337)

___

### refCount

• **refCount**: `number` = `1`

#### Implementation of

ChunkRenderLayerBackend.refCount

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[refCount](neuroglancer_worker_rpc.SharedObjectCounterpart.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Implementation of

ChunkRenderLayerBackend.referencedGeneration

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[referencedGeneration](neuroglancer_worker_rpc.SharedObjectCounterpart.md#referencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L173)

___

### renderScaleTarget

• **renderScaleTarget**: [`SharedWatchableValue`](neuroglancer_shared_watchable_value.SharedWatchableValue.md)<`number`\>

#### Implementation of

[SliceViewRenderLayer](../interfaces/neuroglancer_sliceview_base.SliceViewRenderLayer.md).[renderScaleTarget](../interfaces/neuroglancer_sliceview_base.SliceViewRenderLayer.md#renderscaletarget)

#### Defined in

[src/neuroglancer/sliceview/backend.ts:334](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/backend.ts#L334)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](neuroglancer_worker_rpc.RPC.md) = `null`

#### Implementation of

ChunkRenderLayerBackend.rpc

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[rpc](neuroglancer_worker_rpc.SharedObjectCounterpart.md#rpc)

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: `number`

#### Implementation of

ChunkRenderLayerBackend.rpcId

#### Overrides

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[rpcId](neuroglancer_worker_rpc.SharedObjectCounterpart.md#rpcid)

#### Defined in

[src/neuroglancer/sliceview/backend.ts:333](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/backend.ts#L333)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Implementation of

ChunkRenderLayerBackend.unreferencedGeneration

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[unreferencedGeneration](neuroglancer_worker_rpc.SharedObjectCounterpart.md#unreferencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L172)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Implementation of

ChunkRenderLayerBackend.wasDisposed

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[wasDisposed](neuroglancer_worker_rpc.SharedObjectCounterpart.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

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

#### Implementation of

ChunkRenderLayerBackend.addCounterpartRef

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[addCounterpartRef](neuroglancer_worker_rpc.SharedObjectCounterpart.md#addcounterpartref)

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`SliceViewRenderLayerBackend`](neuroglancer_sliceview_backend.SliceViewRenderLayerBackend.md)

#### Returns

[`SliceViewRenderLayerBackend`](neuroglancer_sliceview_backend.SliceViewRenderLayerBackend.md)

#### Implementation of

ChunkRenderLayerBackend.addRef

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[addRef](neuroglancer_worker_rpc.SharedObjectCounterpart.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

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

#### Implementation of

ChunkRenderLayerBackend.counterpartRefCountReachedZero

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[counterpartRefCountReachedZero](neuroglancer_worker_rpc.SharedObjectCounterpart.md#counterpartrefcountreachedzero)

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L234)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Implementation of

ChunkRenderLayerBackend.dispose

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[dispose](neuroglancer_worker_rpc.SharedObjectCounterpart.md#dispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Implementation of

ChunkRenderLayerBackend.disposed

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[disposed](neuroglancer_worker_rpc.SharedObjectCounterpart.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L75)

___

### filterVisibleSources

▸ **filterVisibleSources**(`sliceView`, `sources`): [`Iterable`](../interfaces/main_module._internal_.Iterable.md)<[`TransformedSource`](../interfaces/neuroglancer_sliceview_base.TransformedSource.md)<[`SliceViewRenderLayer`](../interfaces/neuroglancer_sliceview_base.SliceViewRenderLayer.md), [`SliceViewChunkSource`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sliceView` | [`SliceViewBase`](neuroglancer_sliceview_base.SliceViewBase.md)<[`SliceViewChunkSource`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\>, [`SliceViewRenderLayer`](../interfaces/neuroglancer_sliceview_base.SliceViewRenderLayer.md), [`TransformedSource`](../interfaces/neuroglancer_sliceview_base.TransformedSource.md)<[`SliceViewRenderLayer`](../interfaces/neuroglancer_sliceview_base.SliceViewRenderLayer.md), [`SliceViewChunkSource`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\>\>\> |
| `sources` | readonly [`TransformedSource`](../interfaces/neuroglancer_sliceview_base.TransformedSource.md)<[`SliceViewRenderLayer`](../interfaces/neuroglancer_sliceview_base.SliceViewRenderLayer.md), [`SliceViewChunkSource`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\>\>[] |

#### Returns

[`Iterable`](../interfaces/main_module._internal_.Iterable.md)<[`TransformedSource`](../interfaces/neuroglancer_sliceview_base.TransformedSource.md)<[`SliceViewRenderLayer`](../interfaces/neuroglancer_sliceview_base.SliceViewRenderLayer.md), [`SliceViewChunkSource`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\>\>\>

#### Implementation of

[SliceViewRenderLayer](../interfaces/neuroglancer_sliceview_base.SliceViewRenderLayer.md).[filterVisibleSources](../interfaces/neuroglancer_sliceview_base.SliceViewRenderLayer.md#filtervisiblesources)

#### Defined in

[src/neuroglancer/sliceview/backend.ts:354](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/backend.ts#L354)

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

#### Implementation of

ChunkRenderLayerBackend.initializeCounterpart

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[initializeCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md#initializecounterpart)

#### Defined in

[src/neuroglancer/worker_rpc.ts:182](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L182)

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

#### Implementation of

ChunkRenderLayerBackend.initializeSharedObject

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[initializeSharedObject](neuroglancer_worker_rpc.SharedObjectCounterpart.md#initializesharedobject)

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L175)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Implementation of

ChunkRenderLayerBackend.ownerDispose

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[ownerDispose](neuroglancer_worker_rpc.SharedObjectCounterpart.md#ownerdispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Implementation of

ChunkRenderLayerBackend.refCountReachedZero

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[refCountReachedZero](neuroglancer_worker_rpc.SharedObjectCounterpart.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/worker_rpc.ts:203](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L203)

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

#### Implementation of

ChunkRenderLayerBackend.registerCancellable

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[registerCancellable](neuroglancer_worker_rpc.SharedObjectCounterpart.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L100)

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

#### Implementation of

ChunkRenderLayerBackend.registerDisposer

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[registerDisposer](neuroglancer_worker_rpc.SharedObjectCounterpart.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L76)

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

#### Implementation of

ChunkRenderLayerBackend.registerEventListener

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[registerEventListener](neuroglancer_worker_rpc.SharedObjectCounterpart.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L95)

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

#### Implementation of

ChunkRenderLayerBackend.unregisterDisposer

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[unregisterDisposer](neuroglancer_worker_rpc.SharedObjectCounterpart.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)
