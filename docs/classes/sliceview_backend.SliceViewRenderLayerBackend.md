[neuroglancer](../README.md) / [Modules](../modules.md) / [sliceview/backend](../modules/sliceview_backend.md) / SliceViewRenderLayerBackend

# Class: SliceViewRenderLayerBackend

[sliceview/backend](../modules/sliceview_backend.md).SliceViewRenderLayerBackend

## Hierarchy

- [`SharedObjectCounterpart`](annotation_backend._internal_.SharedObjectCounterpart.md)

  ↳ **`SliceViewRenderLayerBackend`**

## Implements

- [`SliceViewRenderLayer`](../interfaces/sliceview_base.SliceViewRenderLayer.md)
- [`ChunkRenderLayerBackend`](chunk_manager_backend.ChunkRenderLayerBackend.md)

## Table of contents

### Constructors

- [constructor](sliceview_backend.SliceViewRenderLayerBackend.md#constructor)

### Properties

- [RPC\_TYPE\_ID](sliceview_backend.SliceViewRenderLayerBackend.md#rpc_type_id)
- [chunkManagerGeneration](sliceview_backend.SliceViewRenderLayerBackend.md#chunkmanagergeneration)
- [disposedStacks](sliceview_backend.SliceViewRenderLayerBackend.md#disposedstacks)
- [isOwner](sliceview_backend.SliceViewRenderLayerBackend.md#isowner)
- [localPosition](sliceview_backend.SliceViewRenderLayerBackend.md#localposition)
- [numPrefetchChunksAvailable](sliceview_backend.SliceViewRenderLayerBackend.md#numprefetchchunksavailable)
- [numPrefetchChunksNeeded](sliceview_backend.SliceViewRenderLayerBackend.md#numprefetchchunksneeded)
- [numVisibleChunksAvailable](sliceview_backend.SliceViewRenderLayerBackend.md#numvisiblechunksavailable)
- [numVisibleChunksNeeded](sliceview_backend.SliceViewRenderLayerBackend.md#numvisiblechunksneeded)
- [refCount](sliceview_backend.SliceViewRenderLayerBackend.md#refcount)
- [referencedGeneration](sliceview_backend.SliceViewRenderLayerBackend.md#referencedgeneration)
- [renderScaleTarget](sliceview_backend.SliceViewRenderLayerBackend.md#renderscaletarget)
- [rpc](sliceview_backend.SliceViewRenderLayerBackend.md#rpc)
- [rpcId](sliceview_backend.SliceViewRenderLayerBackend.md#rpcid)
- [unreferencedGeneration](sliceview_backend.SliceViewRenderLayerBackend.md#unreferencedgeneration)
- [wasDisposed](sliceview_backend.SliceViewRenderLayerBackend.md#wasdisposed)

### Methods

- [addCounterpartRef](sliceview_backend.SliceViewRenderLayerBackend.md#addcounterpartref)
- [addRef](sliceview_backend.SliceViewRenderLayerBackend.md#addref)
- [counterpartRefCountReachedZero](sliceview_backend.SliceViewRenderLayerBackend.md#counterpartrefcountreachedzero)
- [dispose](sliceview_backend.SliceViewRenderLayerBackend.md#dispose)
- [disposed](sliceview_backend.SliceViewRenderLayerBackend.md#disposed)
- [filterVisibleSources](sliceview_backend.SliceViewRenderLayerBackend.md#filtervisiblesources)
- [initializeCounterpart](sliceview_backend.SliceViewRenderLayerBackend.md#initializecounterpart)
- [initializeSharedObject](sliceview_backend.SliceViewRenderLayerBackend.md#initializesharedobject)
- [ownerDispose](sliceview_backend.SliceViewRenderLayerBackend.md#ownerdispose)
- [refCountReachedZero](sliceview_backend.SliceViewRenderLayerBackend.md#refcountreachedzero)
- [registerCancellable](sliceview_backend.SliceViewRenderLayerBackend.md#registercancellable)
- [registerDisposer](sliceview_backend.SliceViewRenderLayerBackend.md#registerdisposer)
- [registerEventListener](sliceview_backend.SliceViewRenderLayerBackend.md#registereventlistener)
- [unregisterDisposer](sliceview_backend.SliceViewRenderLayerBackend.md#unregisterdisposer)

## Constructors

### constructor

• **new SliceViewRenderLayerBackend**(`rpc`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](annotation_annotation_layer_state._internal_.RPC.md) |
| `options` | `any` |

#### Overrides

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[constructor](annotation_backend._internal_.SharedObjectCounterpart.md#constructor)

#### Defined in

[src/neuroglancer/sliceview/backend.ts:343](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/backend.ts#L343)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Implementation of

ChunkRenderLayerBackend.RPC\_TYPE\_ID

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[RPC_TYPE_ID](annotation_backend._internal_.SharedObjectCounterpart.md#rpc_type_id)

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L245)

___

### chunkManagerGeneration

• **chunkManagerGeneration**: `number`

#### Implementation of

ChunkRenderLayerBackend.chunkManagerGeneration

#### Defined in

[src/neuroglancer/sliceview/backend.ts:341](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/backend.ts#L341)

___

### disposedStacks

• **disposedStacks**: `any`

#### Implementation of

ChunkRenderLayerBackend.disposedStacks

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[disposedStacks](annotation_backend._internal_.SharedObjectCounterpart.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Implementation of

ChunkRenderLayerBackend.isOwner

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[isOwner](annotation_backend._internal_.SharedObjectCounterpart.md#isowner)

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L171)

___

### localPosition

• **localPosition**: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`Float32Array`\>

Current position of non-global layer dimensions.

#### Implementation of

[SliceViewRenderLayer](../interfaces/sliceview_base.SliceViewRenderLayer.md).[localPosition](../interfaces/sliceview_base.SliceViewRenderLayer.md#localposition)

#### Defined in

[src/neuroglancer/sliceview/backend.ts:335](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/backend.ts#L335)

___

### numPrefetchChunksAvailable

• **numPrefetchChunksAvailable**: `number`

#### Implementation of

ChunkRenderLayerBackend.numPrefetchChunksAvailable

#### Defined in

[src/neuroglancer/sliceview/backend.ts:340](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/backend.ts#L340)

___

### numPrefetchChunksNeeded

• **numPrefetchChunksNeeded**: `number`

#### Implementation of

ChunkRenderLayerBackend.numPrefetchChunksNeeded

#### Defined in

[src/neuroglancer/sliceview/backend.ts:339](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/backend.ts#L339)

___

### numVisibleChunksAvailable

• **numVisibleChunksAvailable**: `number`

#### Implementation of

ChunkRenderLayerBackend.numVisibleChunksAvailable

#### Defined in

[src/neuroglancer/sliceview/backend.ts:338](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/backend.ts#L338)

___

### numVisibleChunksNeeded

• **numVisibleChunksNeeded**: `number`

#### Implementation of

ChunkRenderLayerBackend.numVisibleChunksNeeded

#### Defined in

[src/neuroglancer/sliceview/backend.ts:337](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/backend.ts#L337)

___

### refCount

• **refCount**: `number` = `1`

#### Implementation of

ChunkRenderLayerBackend.refCount

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[refCount](annotation_backend._internal_.SharedObjectCounterpart.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Implementation of

ChunkRenderLayerBackend.referencedGeneration

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[referencedGeneration](annotation_backend._internal_.SharedObjectCounterpart.md#referencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L173)

___

### renderScaleTarget

• **renderScaleTarget**: [`SharedWatchableValue`](chunk_manager_backend._internal_.SharedWatchableValue.md)<`number`\>

#### Implementation of

[SliceViewRenderLayer](../interfaces/sliceview_base.SliceViewRenderLayer.md).[renderScaleTarget](../interfaces/sliceview_base.SliceViewRenderLayer.md#renderscaletarget)

#### Defined in

[src/neuroglancer/sliceview/backend.ts:334](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/backend.ts#L334)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](annotation_annotation_layer_state._internal_.RPC.md) = `null`

#### Implementation of

ChunkRenderLayerBackend.rpc

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[rpc](annotation_backend._internal_.SharedObjectCounterpart.md#rpc)

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: `number`

#### Implementation of

ChunkRenderLayerBackend.rpcId

#### Overrides

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[rpcId](annotation_backend._internal_.SharedObjectCounterpart.md#rpcid)

#### Defined in

[src/neuroglancer/sliceview/backend.ts:333](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/backend.ts#L333)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Implementation of

ChunkRenderLayerBackend.unreferencedGeneration

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[unreferencedGeneration](annotation_backend._internal_.SharedObjectCounterpart.md#unreferencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L172)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Implementation of

ChunkRenderLayerBackend.wasDisposed

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

#### Implementation of

ChunkRenderLayerBackend.addCounterpartRef

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[addCounterpartRef](annotation_backend._internal_.SharedObjectCounterpart.md#addcounterpartref)

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`SliceViewRenderLayerBackend`](sliceview_backend.SliceViewRenderLayerBackend.md)

#### Returns

[`SliceViewRenderLayerBackend`](sliceview_backend.SliceViewRenderLayerBackend.md)

#### Implementation of

ChunkRenderLayerBackend.addRef

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

#### Implementation of

ChunkRenderLayerBackend.counterpartRefCountReachedZero

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[counterpartRefCountReachedZero](annotation_backend._internal_.SharedObjectCounterpart.md#counterpartrefcountreachedzero)

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L234)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Implementation of

ChunkRenderLayerBackend.dispose

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[dispose](annotation_backend._internal_.SharedObjectCounterpart.md#dispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Implementation of

ChunkRenderLayerBackend.disposed

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[disposed](annotation_backend._internal_.SharedObjectCounterpart.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

___

### filterVisibleSources

▸ **filterVisibleSources**(`sliceView`, `sources`): [`Iterable`](../interfaces/annotation_annotation_layer_state._internal_.Iterable.md)<[`TransformedSource`](../interfaces/sliceview_base.TransformedSource.md)<[`SliceViewRenderLayer`](../interfaces/sliceview_base.SliceViewRenderLayer.md), [`SliceViewChunkSource`](../interfaces/sliceview_base.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sliceView` | [`SliceViewBase`](sliceview_base.SliceViewBase.md)<[`SliceViewChunkSource`](../interfaces/sliceview_base.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\>, [`SliceViewRenderLayer`](../interfaces/sliceview_base.SliceViewRenderLayer.md), [`TransformedSource`](../interfaces/sliceview_base.TransformedSource.md)<[`SliceViewRenderLayer`](../interfaces/sliceview_base.SliceViewRenderLayer.md), [`SliceViewChunkSource`](../interfaces/sliceview_base.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\>\>\> |
| `sources` | readonly [`TransformedSource`](../interfaces/sliceview_base.TransformedSource.md)<[`SliceViewRenderLayer`](../interfaces/sliceview_base.SliceViewRenderLayer.md), [`SliceViewChunkSource`](../interfaces/sliceview_base.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\>\>[] |

#### Returns

[`Iterable`](../interfaces/annotation_annotation_layer_state._internal_.Iterable.md)<[`TransformedSource`](../interfaces/sliceview_base.TransformedSource.md)<[`SliceViewRenderLayer`](../interfaces/sliceview_base.SliceViewRenderLayer.md), [`SliceViewChunkSource`](../interfaces/sliceview_base.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\>\>\>

#### Implementation of

[SliceViewRenderLayer](../interfaces/sliceview_base.SliceViewRenderLayer.md).[filterVisibleSources](../interfaces/sliceview_base.SliceViewRenderLayer.md#filtervisiblesources)

#### Defined in

[src/neuroglancer/sliceview/backend.ts:354](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/backend.ts#L354)

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

#### Implementation of

ChunkRenderLayerBackend.initializeCounterpart

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

#### Implementation of

ChunkRenderLayerBackend.initializeSharedObject

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

#### Implementation of

ChunkRenderLayerBackend.ownerDispose

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[ownerDispose](annotation_backend._internal_.SharedObjectCounterpart.md#ownerdispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Implementation of

ChunkRenderLayerBackend.refCountReachedZero

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

#### Implementation of

ChunkRenderLayerBackend.registerCancellable

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

#### Implementation of

ChunkRenderLayerBackend.registerDisposer

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

#### Implementation of

ChunkRenderLayerBackend.registerEventListener

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[registerEventListener](annotation_backend._internal_.SharedObjectCounterpart.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

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

#### Implementation of

ChunkRenderLayerBackend.unregisterDisposer

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[unregisterDisposer](annotation_backend._internal_.SharedObjectCounterpart.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)
