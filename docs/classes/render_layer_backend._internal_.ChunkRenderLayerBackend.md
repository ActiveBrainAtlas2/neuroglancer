[neuroglancer](../README.md) / [Modules](../modules.md) / [render\_layer\_backend](../modules/render_layer_backend.md) / [<internal\>](../modules/render_layer_backend._internal_.md) / ChunkRenderLayerBackend

# Class: ChunkRenderLayerBackend

[render_layer_backend](../modules/render_layer_backend.md).[<internal>](../modules/render_layer_backend._internal_.md).ChunkRenderLayerBackend

## Hierarchy

- [`SharedObjectCounterpart`](worker_rpc.SharedObjectCounterpart.md)

  ↳ **`ChunkRenderLayerBackend`**

  ↳↳ [`RenderLayerBackend`](render_layer_backend.RenderLayerBackend.md)

## Implements

- [`LayerChunkProgressInfo`](data_panel_layout._internal_.LayerChunkProgressInfo.md)

## Table of contents

### Constructors

- [constructor](render_layer_backend._internal_.ChunkRenderLayerBackend.md#constructor)

### Properties

- [RPC\_TYPE\_ID](render_layer_backend._internal_.ChunkRenderLayerBackend.md#rpc_type_id)
- [chunkManagerGeneration](render_layer_backend._internal_.ChunkRenderLayerBackend.md#chunkmanagergeneration)
- [disposedStacks](render_layer_backend._internal_.ChunkRenderLayerBackend.md#disposedstacks)
- [isOwner](render_layer_backend._internal_.ChunkRenderLayerBackend.md#isowner)
- [numPrefetchChunksAvailable](render_layer_backend._internal_.ChunkRenderLayerBackend.md#numprefetchchunksavailable)
- [numPrefetchChunksNeeded](render_layer_backend._internal_.ChunkRenderLayerBackend.md#numprefetchchunksneeded)
- [numVisibleChunksAvailable](render_layer_backend._internal_.ChunkRenderLayerBackend.md#numvisiblechunksavailable)
- [numVisibleChunksNeeded](render_layer_backend._internal_.ChunkRenderLayerBackend.md#numvisiblechunksneeded)
- [refCount](render_layer_backend._internal_.ChunkRenderLayerBackend.md#refcount)
- [referencedGeneration](render_layer_backend._internal_.ChunkRenderLayerBackend.md#referencedgeneration)
- [rpc](render_layer_backend._internal_.ChunkRenderLayerBackend.md#rpc)
- [rpcId](render_layer_backend._internal_.ChunkRenderLayerBackend.md#rpcid)
- [unreferencedGeneration](render_layer_backend._internal_.ChunkRenderLayerBackend.md#unreferencedgeneration)
- [wasDisposed](render_layer_backend._internal_.ChunkRenderLayerBackend.md#wasdisposed)

### Methods

- [addCounterpartRef](render_layer_backend._internal_.ChunkRenderLayerBackend.md#addcounterpartref)
- [addRef](render_layer_backend._internal_.ChunkRenderLayerBackend.md#addref)
- [counterpartRefCountReachedZero](render_layer_backend._internal_.ChunkRenderLayerBackend.md#counterpartrefcountreachedzero)
- [dispose](render_layer_backend._internal_.ChunkRenderLayerBackend.md#dispose)
- [disposed](render_layer_backend._internal_.ChunkRenderLayerBackend.md#disposed)
- [initializeCounterpart](render_layer_backend._internal_.ChunkRenderLayerBackend.md#initializecounterpart)
- [initializeSharedObject](render_layer_backend._internal_.ChunkRenderLayerBackend.md#initializesharedobject)
- [ownerDispose](render_layer_backend._internal_.ChunkRenderLayerBackend.md#ownerdispose)
- [refCountReachedZero](render_layer_backend._internal_.ChunkRenderLayerBackend.md#refcountreachedzero)
- [registerCancellable](render_layer_backend._internal_.ChunkRenderLayerBackend.md#registercancellable)
- [registerDisposer](render_layer_backend._internal_.ChunkRenderLayerBackend.md#registerdisposer)
- [registerEventListener](render_layer_backend._internal_.ChunkRenderLayerBackend.md#registereventlistener)
- [unregisterDisposer](render_layer_backend._internal_.ChunkRenderLayerBackend.md#unregisterdisposer)

## Constructors

### constructor

• **new ChunkRenderLayerBackend**(`rpc?`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc?` | [`RPC`](worker_rpc.RPC.md) |
| `options` | `any` |

#### Inherited from

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[constructor](worker_rpc.SharedObjectCounterpart.md#constructor)

#### Defined in

[src/neuroglancer/worker_rpc.ts:258](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L258)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[RPC_TYPE_ID](worker_rpc.SharedObjectCounterpart.md#rpc_type_id)

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L245)

___

### chunkManagerGeneration

• **chunkManagerGeneration**: `number` = `-1`

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:958](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/backend.ts#L958)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[disposedStacks](worker_rpc.SharedObjectCounterpart.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[isOwner](worker_rpc.SharedObjectCounterpart.md#isowner)

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L171)

___

### numPrefetchChunksAvailable

• **numPrefetchChunksAvailable**: `number` = `0`

#### Implementation of

LayerChunkProgressInfo.numPrefetchChunksAvailable

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:963](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/backend.ts#L963)

___

### numPrefetchChunksNeeded

• **numPrefetchChunksNeeded**: `number` = `0`

#### Implementation of

LayerChunkProgressInfo.numPrefetchChunksNeeded

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:962](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/backend.ts#L962)

___

### numVisibleChunksAvailable

• **numVisibleChunksAvailable**: `number` = `0`

#### Implementation of

LayerChunkProgressInfo.numVisibleChunksAvailable

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:961](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/backend.ts#L961)

___

### numVisibleChunksNeeded

• **numVisibleChunksNeeded**: `number` = `0`

#### Implementation of

LayerChunkProgressInfo.numVisibleChunksNeeded

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:960](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/backend.ts#L960)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[refCount](worker_rpc.SharedObjectCounterpart.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[referencedGeneration](worker_rpc.SharedObjectCounterpart.md#referencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](worker_rpc.RPC.md) = `null`

#### Inherited from

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[rpc](worker_rpc.SharedObjectCounterpart.md#rpc)

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[rpcId](worker_rpc.SharedObjectCounterpart.md#rpcid)

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L170)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[unreferencedGeneration](worker_rpc.SharedObjectCounterpart.md#unreferencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L172)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[wasDisposed](worker_rpc.SharedObjectCounterpart.md#wasdisposed)

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

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[addCounterpartRef](worker_rpc.SharedObjectCounterpart.md#addcounterpartref)

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`ChunkRenderLayerBackend`](render_layer_backend._internal_.ChunkRenderLayerBackend.md)

#### Returns

[`ChunkRenderLayerBackend`](render_layer_backend._internal_.ChunkRenderLayerBackend.md)

#### Inherited from

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[addRef](worker_rpc.SharedObjectCounterpart.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

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

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[counterpartRefCountReachedZero](worker_rpc.SharedObjectCounterpart.md#counterpartrefcountreachedzero)

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L234)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[dispose](worker_rpc.SharedObjectCounterpart.md#dispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[disposed](worker_rpc.SharedObjectCounterpart.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L75)

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

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[initializeCounterpart](worker_rpc.SharedObjectCounterpart.md#initializecounterpart)

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

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[initializeSharedObject](worker_rpc.SharedObjectCounterpart.md#initializesharedobject)

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L175)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[ownerDispose](worker_rpc.SharedObjectCounterpart.md#ownerdispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[refCountReachedZero](worker_rpc.SharedObjectCounterpart.md#refcountreachedzero)

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

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[registerCancellable](worker_rpc.SharedObjectCounterpart.md#registercancellable)

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

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[registerDisposer](worker_rpc.SharedObjectCounterpart.md#registerdisposer)

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

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[registerEventListener](worker_rpc.SharedObjectCounterpart.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L95)

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

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[unregisterDisposer](worker_rpc.SharedObjectCounterpart.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L85)
