[neuroglancer](../README.md) / [Modules](../modules.md) / [render\_layer\_backend](../modules/render_layer_backend.md) / RenderLayerBackend

# Class: RenderLayerBackend<ViewBackend, AttachmentState\>

[render_layer_backend](../modules/render_layer_backend.md).RenderLayerBackend

## Type parameters

| Name | Type |
| :------ | :------ |
| `ViewBackend` | extends [`RenderedViewBackend`](../interfaces/render_layer_backend.RenderedViewBackend.md) = [`RenderedViewBackend`](../interfaces/render_layer_backend.RenderedViewBackend.md) |
| `AttachmentState` | `unknown` |

## Hierarchy

- `ChunkRenderLayerBackend`

  ↳ **`RenderLayerBackend`**

## Table of contents

### Constructors

- [constructor](render_layer_backend.RenderLayerBackend.md#constructor)

### Properties

- [RPC\_TYPE\_ID](render_layer_backend.RenderLayerBackend.md#rpc_type_id)
- [attachments](render_layer_backend.RenderLayerBackend.md#attachments)
- [chunkManagerGeneration](render_layer_backend.RenderLayerBackend.md#chunkmanagergeneration)
- [disposedStacks](render_layer_backend.RenderLayerBackend.md#disposedstacks)
- [isOwner](render_layer_backend.RenderLayerBackend.md#isowner)
- [numPrefetchChunksAvailable](render_layer_backend.RenderLayerBackend.md#numprefetchchunksavailable)
- [numPrefetchChunksNeeded](render_layer_backend.RenderLayerBackend.md#numprefetchchunksneeded)
- [numVisibleChunksAvailable](render_layer_backend.RenderLayerBackend.md#numvisiblechunksavailable)
- [numVisibleChunksNeeded](render_layer_backend.RenderLayerBackend.md#numvisiblechunksneeded)
- [refCount](render_layer_backend.RenderLayerBackend.md#refcount)
- [referencedGeneration](render_layer_backend.RenderLayerBackend.md#referencedgeneration)
- [rpc](render_layer_backend.RenderLayerBackend.md#rpc)
- [rpcId](render_layer_backend.RenderLayerBackend.md#rpcid)
- [unreferencedGeneration](render_layer_backend.RenderLayerBackend.md#unreferencedgeneration)
- [wasDisposed](render_layer_backend.RenderLayerBackend.md#wasdisposed)

### Methods

- [addCounterpartRef](render_layer_backend.RenderLayerBackend.md#addcounterpartref)
- [addRef](render_layer_backend.RenderLayerBackend.md#addref)
- [attach](render_layer_backend.RenderLayerBackend.md#attach)
- [counterpartRefCountReachedZero](render_layer_backend.RenderLayerBackend.md#counterpartrefcountreachedzero)
- [dispose](render_layer_backend.RenderLayerBackend.md#dispose)
- [disposed](render_layer_backend.RenderLayerBackend.md#disposed)
- [initializeCounterpart](render_layer_backend.RenderLayerBackend.md#initializecounterpart)
- [initializeSharedObject](render_layer_backend.RenderLayerBackend.md#initializesharedobject)
- [ownerDispose](render_layer_backend.RenderLayerBackend.md#ownerdispose)
- [refCountReachedZero](render_layer_backend.RenderLayerBackend.md#refcountreachedzero)
- [registerCancellable](render_layer_backend.RenderLayerBackend.md#registercancellable)
- [registerDisposer](render_layer_backend.RenderLayerBackend.md#registerdisposer)
- [registerEventListener](render_layer_backend.RenderLayerBackend.md#registereventlistener)
- [unregisterDisposer](render_layer_backend.RenderLayerBackend.md#unregisterdisposer)

## Constructors

### constructor

• **new RenderLayerBackend**<`ViewBackend`, `AttachmentState`\>(`rpc?`, `options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ViewBackend` | extends [`RenderedViewBackend`](../interfaces/render_layer_backend.RenderedViewBackend.md) = [`RenderedViewBackend`](../interfaces/render_layer_backend.RenderedViewBackend.md) |
| `AttachmentState` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc?` | [`RPC`](worker_rpc.RPC.md) |
| `options` | `any` |

#### Inherited from

ChunkRenderLayerBackend.constructor

#### Defined in

[src/neuroglancer/worker_rpc.ts:258](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/worker_rpc.ts#L258)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

ChunkRenderLayerBackend.RPC\_TYPE\_ID

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/worker_rpc.ts#L245)

___

### attachments

• **attachments**: `Map`<`ViewBackend`, [`RenderLayerBackendAttachment`](render_layer_backend.RenderLayerBackendAttachment.md)<[`RenderedViewBackend`](../interfaces/render_layer_backend.RenderedViewBackend.md), `unknown`\>\>

#### Defined in

[src/neuroglancer/render_layer_backend.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/render_layer_backend.ts#L42)

___

### chunkManagerGeneration

• **chunkManagerGeneration**: `number` = `-1`

#### Inherited from

ChunkRenderLayerBackend.chunkManagerGeneration

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:958](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/chunk_manager/backend.ts#L958)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

ChunkRenderLayerBackend.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L52)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

ChunkRenderLayerBackend.isOwner

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/worker_rpc.ts#L171)

___

### numPrefetchChunksAvailable

• **numPrefetchChunksAvailable**: `number` = `0`

#### Inherited from

ChunkRenderLayerBackend.numPrefetchChunksAvailable

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:963](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/chunk_manager/backend.ts#L963)

___

### numPrefetchChunksNeeded

• **numPrefetchChunksNeeded**: `number` = `0`

#### Inherited from

ChunkRenderLayerBackend.numPrefetchChunksNeeded

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:962](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/chunk_manager/backend.ts#L962)

___

### numVisibleChunksAvailable

• **numVisibleChunksAvailable**: `number` = `0`

#### Inherited from

ChunkRenderLayerBackend.numVisibleChunksAvailable

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:961](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/chunk_manager/backend.ts#L961)

___

### numVisibleChunksNeeded

• **numVisibleChunksNeeded**: `number` = `0`

#### Inherited from

ChunkRenderLayerBackend.numVisibleChunksNeeded

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:960](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/chunk_manager/backend.ts#L960)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

ChunkRenderLayerBackend.refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

ChunkRenderLayerBackend.referencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](worker_rpc.RPC.md) = `null`

#### Inherited from

ChunkRenderLayerBackend.rpc

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

ChunkRenderLayerBackend.rpcId

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/worker_rpc.ts#L170)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

ChunkRenderLayerBackend.unreferencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/worker_rpc.ts#L172)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

ChunkRenderLayerBackend.wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L46)

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

ChunkRenderLayerBackend.addCounterpartRef

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`RenderLayerBackend`](render_layer_backend.RenderLayerBackend.md)<`ViewBackend`, `AttachmentState`\>

#### Returns

[`RenderLayerBackend`](render_layer_backend.RenderLayerBackend.md)<`ViewBackend`, `AttachmentState`\>

#### Inherited from

ChunkRenderLayerBackend.addRef

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L48)

___

### attach

▸ **attach**(`attachment`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attachment` | [`RenderLayerBackendAttachment`](render_layer_backend.RenderLayerBackendAttachment.md)<`ViewBackend`, `AttachmentState`\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/render_layer_backend.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/render_layer_backend.ts#L43)

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

ChunkRenderLayerBackend.counterpartRefCountReachedZero

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/worker_rpc.ts#L234)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

ChunkRenderLayerBackend.dispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

ChunkRenderLayerBackend.disposed

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L75)

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

ChunkRenderLayerBackend.initializeCounterpart

#### Defined in

[src/neuroglancer/worker_rpc.ts:182](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/worker_rpc.ts#L182)

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

ChunkRenderLayerBackend.initializeSharedObject

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/worker_rpc.ts#L175)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

ChunkRenderLayerBackend.ownerDispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

ChunkRenderLayerBackend.refCountReachedZero

#### Defined in

[src/neuroglancer/worker_rpc.ts:203](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/worker_rpc.ts#L203)

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

ChunkRenderLayerBackend.registerCancellable

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Disposer` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

ChunkRenderLayerBackend.registerDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `EventTarget` |
| `type` | `string` |
| `listener` | `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

`void`

#### Inherited from

ChunkRenderLayerBackend.registerEventListener

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L95)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Disposer` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

ChunkRenderLayerBackend.unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L85)
