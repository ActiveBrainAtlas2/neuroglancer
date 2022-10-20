[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/render\_layer\_backend](../modules/neuroglancer_render_layer_backend.md) / RenderLayerBackend

# Class: RenderLayerBackend<ViewBackend, AttachmentState\>

[neuroglancer/render_layer_backend](../modules/neuroglancer_render_layer_backend.md).RenderLayerBackend

Base class for defining a SharedObject type that will never be owned.

## Type parameters

| Name | Type |
| :------ | :------ |
| `ViewBackend` | extends [`RenderedViewBackend`](../interfaces/neuroglancer_render_layer_backend.RenderedViewBackend.md) = [`RenderedViewBackend`](../interfaces/neuroglancer_render_layer_backend.RenderedViewBackend.md) |
| `AttachmentState` | `unknown` |

## Hierarchy

- [`ChunkRenderLayerBackend`](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md)

  ↳ **`RenderLayerBackend`**

  ↳↳ [`PerspectiveViewRenderLayerBackend`](neuroglancer_perspective_view_backend.PerspectiveViewRenderLayerBackend.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_render_layer_backend.RenderLayerBackend.md#constructor)

### Properties

- [RPC\_TYPE\_ID](neuroglancer_render_layer_backend.RenderLayerBackend.md#rpc_type_id)
- [attachments](neuroglancer_render_layer_backend.RenderLayerBackend.md#attachments)
- [chunkManagerGeneration](neuroglancer_render_layer_backend.RenderLayerBackend.md#chunkmanagergeneration)
- [disposedStacks](neuroglancer_render_layer_backend.RenderLayerBackend.md#disposedstacks)
- [isOwner](neuroglancer_render_layer_backend.RenderLayerBackend.md#isowner)
- [numPrefetchChunksAvailable](neuroglancer_render_layer_backend.RenderLayerBackend.md#numprefetchchunksavailable)
- [numPrefetchChunksNeeded](neuroglancer_render_layer_backend.RenderLayerBackend.md#numprefetchchunksneeded)
- [numVisibleChunksAvailable](neuroglancer_render_layer_backend.RenderLayerBackend.md#numvisiblechunksavailable)
- [numVisibleChunksNeeded](neuroglancer_render_layer_backend.RenderLayerBackend.md#numvisiblechunksneeded)
- [refCount](neuroglancer_render_layer_backend.RenderLayerBackend.md#refcount)
- [referencedGeneration](neuroglancer_render_layer_backend.RenderLayerBackend.md#referencedgeneration)
- [rpc](neuroglancer_render_layer_backend.RenderLayerBackend.md#rpc)
- [rpcId](neuroglancer_render_layer_backend.RenderLayerBackend.md#rpcid)
- [unreferencedGeneration](neuroglancer_render_layer_backend.RenderLayerBackend.md#unreferencedgeneration)
- [wasDisposed](neuroglancer_render_layer_backend.RenderLayerBackend.md#wasdisposed)

### Methods

- [addCounterpartRef](neuroglancer_render_layer_backend.RenderLayerBackend.md#addcounterpartref)
- [addRef](neuroglancer_render_layer_backend.RenderLayerBackend.md#addref)
- [attach](neuroglancer_render_layer_backend.RenderLayerBackend.md#attach)
- [counterpartRefCountReachedZero](neuroglancer_render_layer_backend.RenderLayerBackend.md#counterpartrefcountreachedzero)
- [dispose](neuroglancer_render_layer_backend.RenderLayerBackend.md#dispose)
- [disposed](neuroglancer_render_layer_backend.RenderLayerBackend.md#disposed)
- [initializeCounterpart](neuroglancer_render_layer_backend.RenderLayerBackend.md#initializecounterpart)
- [initializeSharedObject](neuroglancer_render_layer_backend.RenderLayerBackend.md#initializesharedobject)
- [ownerDispose](neuroglancer_render_layer_backend.RenderLayerBackend.md#ownerdispose)
- [refCountReachedZero](neuroglancer_render_layer_backend.RenderLayerBackend.md#refcountreachedzero)
- [registerCancellable](neuroglancer_render_layer_backend.RenderLayerBackend.md#registercancellable)
- [registerDisposer](neuroglancer_render_layer_backend.RenderLayerBackend.md#registerdisposer)
- [registerEventListener](neuroglancer_render_layer_backend.RenderLayerBackend.md#registereventlistener)
- [unregisterDisposer](neuroglancer_render_layer_backend.RenderLayerBackend.md#unregisterdisposer)

## Constructors

### constructor

• **new RenderLayerBackend**<`ViewBackend`, `AttachmentState`\>(`rpc?`, `options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ViewBackend` | extends [`RenderedViewBackend`](../interfaces/neuroglancer_render_layer_backend.RenderedViewBackend.md) = [`RenderedViewBackend`](../interfaces/neuroglancer_render_layer_backend.RenderedViewBackend.md) |
| `AttachmentState` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc?` | [`RPC`](neuroglancer_worker_rpc.RPC.md) |
| `options` | `any` |

#### Inherited from

[ChunkRenderLayerBackend](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md).[constructor](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md#constructor)

#### Defined in

[src/neuroglancer/worker_rpc.ts:258](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L258)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

[ChunkRenderLayerBackend](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md).[RPC_TYPE_ID](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md#rpc_type_id)

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L245)

___

### attachments

• **attachments**: `Map`<`ViewBackend`, [`RenderLayerBackendAttachment`](neuroglancer_render_layer_backend.RenderLayerBackendAttachment.md)<[`RenderedViewBackend`](../interfaces/neuroglancer_render_layer_backend.RenderedViewBackend.md), `unknown`\>\>

#### Defined in

[src/neuroglancer/render_layer_backend.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/render_layer_backend.ts#L42)

___

### chunkManagerGeneration

• **chunkManagerGeneration**: `number` = `-1`

#### Inherited from

[ChunkRenderLayerBackend](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md).[chunkManagerGeneration](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md#chunkmanagergeneration)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:958](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L958)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[ChunkRenderLayerBackend](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md).[disposedStacks](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

[ChunkRenderLayerBackend](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md).[isOwner](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md#isowner)

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L171)

___

### numPrefetchChunksAvailable

• **numPrefetchChunksAvailable**: `number` = `0`

#### Inherited from

[ChunkRenderLayerBackend](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md).[numPrefetchChunksAvailable](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md#numprefetchchunksavailable)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:963](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L963)

___

### numPrefetchChunksNeeded

• **numPrefetchChunksNeeded**: `number` = `0`

#### Inherited from

[ChunkRenderLayerBackend](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md).[numPrefetchChunksNeeded](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md#numprefetchchunksneeded)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:962](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L962)

___

### numVisibleChunksAvailable

• **numVisibleChunksAvailable**: `number` = `0`

#### Inherited from

[ChunkRenderLayerBackend](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md).[numVisibleChunksAvailable](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md#numvisiblechunksavailable)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:961](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L961)

___

### numVisibleChunksNeeded

• **numVisibleChunksNeeded**: `number` = `0`

#### Inherited from

[ChunkRenderLayerBackend](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md).[numVisibleChunksNeeded](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md#numvisiblechunksneeded)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:960](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L960)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[ChunkRenderLayerBackend](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md).[refCount](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

[ChunkRenderLayerBackend](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md).[referencedGeneration](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md#referencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](neuroglancer_worker_rpc.RPC.md) = `null`

#### Inherited from

[ChunkRenderLayerBackend](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md).[rpc](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md#rpc)

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

[ChunkRenderLayerBackend](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md).[rpcId](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md#rpcid)

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L170)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

[ChunkRenderLayerBackend](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md).[unreferencedGeneration](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md#unreferencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L172)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[ChunkRenderLayerBackend](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md).[wasDisposed](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

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

[ChunkRenderLayerBackend](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md).[addCounterpartRef](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md#addcounterpartref)

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`RenderLayerBackend`](neuroglancer_render_layer_backend.RenderLayerBackend.md)<`ViewBackend`, `AttachmentState`\>

#### Returns

[`RenderLayerBackend`](neuroglancer_render_layer_backend.RenderLayerBackend.md)<`ViewBackend`, `AttachmentState`\>

#### Inherited from

[ChunkRenderLayerBackend](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md).[addRef](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### attach

▸ **attach**(`attachment`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attachment` | [`RenderLayerBackendAttachment`](neuroglancer_render_layer_backend.RenderLayerBackendAttachment.md)<`ViewBackend`, `AttachmentState`\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/render_layer_backend.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/render_layer_backend.ts#L43)

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

[ChunkRenderLayerBackend](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md).[counterpartRefCountReachedZero](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md#counterpartrefcountreachedzero)

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L234)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[ChunkRenderLayerBackend](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md).[dispose](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md#dispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[ChunkRenderLayerBackend](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md).[disposed](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L75)

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

[ChunkRenderLayerBackend](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md).[initializeCounterpart](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md#initializecounterpart)

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

[ChunkRenderLayerBackend](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md).[initializeSharedObject](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md#initializesharedobject)

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L175)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

[ChunkRenderLayerBackend](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md).[ownerDispose](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md#ownerdispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[ChunkRenderLayerBackend](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md).[refCountReachedZero](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md#refcountreachedzero)

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

[ChunkRenderLayerBackend](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md).[registerCancellable](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md#registercancellable)

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

[ChunkRenderLayerBackend](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md).[registerDisposer](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md#registerdisposer)

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

[ChunkRenderLayerBackend](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md).[registerEventListener](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L95)

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

[ChunkRenderLayerBackend](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md).[unregisterDisposer](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)
