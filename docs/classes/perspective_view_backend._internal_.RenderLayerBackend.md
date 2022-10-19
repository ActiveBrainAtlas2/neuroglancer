[neuroglancer](../README.md) / [Modules](../modules.md) / [perspective\_view/backend](../modules/perspective_view_backend.md) / [<internal\>](../modules/perspective_view_backend._internal_.md) / RenderLayerBackend

# Class: RenderLayerBackend<ViewBackend, AttachmentState\>

[perspective_view/backend](../modules/perspective_view_backend.md).[<internal>](../modules/perspective_view_backend._internal_.md).RenderLayerBackend

## Type parameters

| Name | Type |
| :------ | :------ |
| `ViewBackend` | extends [`RenderedViewBackend`](../interfaces/mesh_backend._internal_.RenderedViewBackend.md) = [`RenderedViewBackend`](../interfaces/mesh_backend._internal_.RenderedViewBackend.md) |
| `AttachmentState` | `unknown` |

## Hierarchy

- [`ChunkRenderLayerBackend`](chunk_manager_backend.ChunkRenderLayerBackend.md)

  ↳ **`RenderLayerBackend`**

  ↳↳ [`PerspectiveViewRenderLayerBackend`](perspective_view_backend.PerspectiveViewRenderLayerBackend.md)

## Table of contents

### Constructors

- [constructor](perspective_view_backend._internal_.RenderLayerBackend.md#constructor)

### Properties

- [RPC\_TYPE\_ID](perspective_view_backend._internal_.RenderLayerBackend.md#rpc_type_id)
- [attachments](perspective_view_backend._internal_.RenderLayerBackend.md#attachments)
- [chunkManagerGeneration](perspective_view_backend._internal_.RenderLayerBackend.md#chunkmanagergeneration)
- [disposedStacks](perspective_view_backend._internal_.RenderLayerBackend.md#disposedstacks)
- [isOwner](perspective_view_backend._internal_.RenderLayerBackend.md#isowner)
- [numPrefetchChunksAvailable](perspective_view_backend._internal_.RenderLayerBackend.md#numprefetchchunksavailable)
- [numPrefetchChunksNeeded](perspective_view_backend._internal_.RenderLayerBackend.md#numprefetchchunksneeded)
- [numVisibleChunksAvailable](perspective_view_backend._internal_.RenderLayerBackend.md#numvisiblechunksavailable)
- [numVisibleChunksNeeded](perspective_view_backend._internal_.RenderLayerBackend.md#numvisiblechunksneeded)
- [refCount](perspective_view_backend._internal_.RenderLayerBackend.md#refcount)
- [referencedGeneration](perspective_view_backend._internal_.RenderLayerBackend.md#referencedgeneration)
- [rpc](perspective_view_backend._internal_.RenderLayerBackend.md#rpc)
- [rpcId](perspective_view_backend._internal_.RenderLayerBackend.md#rpcid)
- [unreferencedGeneration](perspective_view_backend._internal_.RenderLayerBackend.md#unreferencedgeneration)
- [wasDisposed](perspective_view_backend._internal_.RenderLayerBackend.md#wasdisposed)

### Methods

- [addCounterpartRef](perspective_view_backend._internal_.RenderLayerBackend.md#addcounterpartref)
- [addRef](perspective_view_backend._internal_.RenderLayerBackend.md#addref)
- [attach](perspective_view_backend._internal_.RenderLayerBackend.md#attach)
- [counterpartRefCountReachedZero](perspective_view_backend._internal_.RenderLayerBackend.md#counterpartrefcountreachedzero)
- [dispose](perspective_view_backend._internal_.RenderLayerBackend.md#dispose)
- [disposed](perspective_view_backend._internal_.RenderLayerBackend.md#disposed)
- [initializeCounterpart](perspective_view_backend._internal_.RenderLayerBackend.md#initializecounterpart)
- [initializeSharedObject](perspective_view_backend._internal_.RenderLayerBackend.md#initializesharedobject)
- [ownerDispose](perspective_view_backend._internal_.RenderLayerBackend.md#ownerdispose)
- [refCountReachedZero](perspective_view_backend._internal_.RenderLayerBackend.md#refcountreachedzero)
- [registerCancellable](perspective_view_backend._internal_.RenderLayerBackend.md#registercancellable)
- [registerDisposer](perspective_view_backend._internal_.RenderLayerBackend.md#registerdisposer)
- [registerEventListener](perspective_view_backend._internal_.RenderLayerBackend.md#registereventlistener)
- [unregisterDisposer](perspective_view_backend._internal_.RenderLayerBackend.md#unregisterdisposer)

## Constructors

### constructor

• **new RenderLayerBackend**<`ViewBackend`, `AttachmentState`\>(`rpc?`, `options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ViewBackend` | extends [`RenderedViewBackend`](../interfaces/mesh_backend._internal_.RenderedViewBackend.md) = [`RenderedViewBackend`](../interfaces/mesh_backend._internal_.RenderedViewBackend.md) |
| `AttachmentState` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc?` | [`RPC`](annotation_annotation_layer_state._internal_.RPC.md) |
| `options` | `any` |

#### Inherited from

[ChunkRenderLayerBackend](chunk_manager_backend.ChunkRenderLayerBackend.md).[constructor](chunk_manager_backend.ChunkRenderLayerBackend.md#constructor)

#### Defined in

[src/neuroglancer/worker_rpc.ts:258](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L258)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

[ChunkRenderLayerBackend](chunk_manager_backend.ChunkRenderLayerBackend.md).[RPC_TYPE_ID](chunk_manager_backend.ChunkRenderLayerBackend.md#rpc_type_id)

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L245)

___

### attachments

• **attachments**: `Map`<`ViewBackend`, [`RenderLayerBackendAttachment`](mesh_backend._internal_.RenderLayerBackendAttachment.md)<[`RenderedViewBackend`](../interfaces/mesh_backend._internal_.RenderedViewBackend.md), `unknown`\>\>

#### Defined in

[src/neuroglancer/render_layer_backend.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/render_layer_backend.ts#L42)

___

### chunkManagerGeneration

• **chunkManagerGeneration**: `number` = `-1`

#### Inherited from

[ChunkRenderLayerBackend](chunk_manager_backend.ChunkRenderLayerBackend.md).[chunkManagerGeneration](chunk_manager_backend.ChunkRenderLayerBackend.md#chunkmanagergeneration)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:958](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L958)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[ChunkRenderLayerBackend](chunk_manager_backend.ChunkRenderLayerBackend.md).[disposedStacks](chunk_manager_backend.ChunkRenderLayerBackend.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

[ChunkRenderLayerBackend](chunk_manager_backend.ChunkRenderLayerBackend.md).[isOwner](chunk_manager_backend.ChunkRenderLayerBackend.md#isowner)

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L171)

___

### numPrefetchChunksAvailable

• **numPrefetchChunksAvailable**: `number` = `0`

#### Inherited from

[ChunkRenderLayerBackend](chunk_manager_backend.ChunkRenderLayerBackend.md).[numPrefetchChunksAvailable](chunk_manager_backend.ChunkRenderLayerBackend.md#numprefetchchunksavailable)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:963](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L963)

___

### numPrefetchChunksNeeded

• **numPrefetchChunksNeeded**: `number` = `0`

#### Inherited from

[ChunkRenderLayerBackend](chunk_manager_backend.ChunkRenderLayerBackend.md).[numPrefetchChunksNeeded](chunk_manager_backend.ChunkRenderLayerBackend.md#numprefetchchunksneeded)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:962](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L962)

___

### numVisibleChunksAvailable

• **numVisibleChunksAvailable**: `number` = `0`

#### Inherited from

[ChunkRenderLayerBackend](chunk_manager_backend.ChunkRenderLayerBackend.md).[numVisibleChunksAvailable](chunk_manager_backend.ChunkRenderLayerBackend.md#numvisiblechunksavailable)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:961](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L961)

___

### numVisibleChunksNeeded

• **numVisibleChunksNeeded**: `number` = `0`

#### Inherited from

[ChunkRenderLayerBackend](chunk_manager_backend.ChunkRenderLayerBackend.md).[numVisibleChunksNeeded](chunk_manager_backend.ChunkRenderLayerBackend.md#numvisiblechunksneeded)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:960](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L960)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[ChunkRenderLayerBackend](chunk_manager_backend.ChunkRenderLayerBackend.md).[refCount](chunk_manager_backend.ChunkRenderLayerBackend.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

[ChunkRenderLayerBackend](chunk_manager_backend.ChunkRenderLayerBackend.md).[referencedGeneration](chunk_manager_backend.ChunkRenderLayerBackend.md#referencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](annotation_annotation_layer_state._internal_.RPC.md) = `null`

#### Inherited from

[ChunkRenderLayerBackend](chunk_manager_backend.ChunkRenderLayerBackend.md).[rpc](chunk_manager_backend.ChunkRenderLayerBackend.md#rpc)

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

[ChunkRenderLayerBackend](chunk_manager_backend.ChunkRenderLayerBackend.md).[rpcId](chunk_manager_backend.ChunkRenderLayerBackend.md#rpcid)

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L170)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

[ChunkRenderLayerBackend](chunk_manager_backend.ChunkRenderLayerBackend.md).[unreferencedGeneration](chunk_manager_backend.ChunkRenderLayerBackend.md#unreferencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L172)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[ChunkRenderLayerBackend](chunk_manager_backend.ChunkRenderLayerBackend.md).[wasDisposed](chunk_manager_backend.ChunkRenderLayerBackend.md#wasdisposed)

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

[ChunkRenderLayerBackend](chunk_manager_backend.ChunkRenderLayerBackend.md).[addCounterpartRef](chunk_manager_backend.ChunkRenderLayerBackend.md#addcounterpartref)

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`RenderLayerBackend`](perspective_view_backend._internal_.RenderLayerBackend.md)<`ViewBackend`, `AttachmentState`\>

#### Returns

[`RenderLayerBackend`](perspective_view_backend._internal_.RenderLayerBackend.md)<`ViewBackend`, `AttachmentState`\>

#### Inherited from

[ChunkRenderLayerBackend](chunk_manager_backend.ChunkRenderLayerBackend.md).[addRef](chunk_manager_backend.ChunkRenderLayerBackend.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### attach

▸ **attach**(`attachment`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attachment` | [`RenderLayerBackendAttachment`](mesh_backend._internal_.RenderLayerBackendAttachment.md)<`ViewBackend`, `AttachmentState`\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/render_layer_backend.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/render_layer_backend.ts#L43)

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

[ChunkRenderLayerBackend](chunk_manager_backend.ChunkRenderLayerBackend.md).[counterpartRefCountReachedZero](chunk_manager_backend.ChunkRenderLayerBackend.md#counterpartrefcountreachedzero)

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L234)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[ChunkRenderLayerBackend](chunk_manager_backend.ChunkRenderLayerBackend.md).[dispose](chunk_manager_backend.ChunkRenderLayerBackend.md#dispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[ChunkRenderLayerBackend](chunk_manager_backend.ChunkRenderLayerBackend.md).[disposed](chunk_manager_backend.ChunkRenderLayerBackend.md#disposed)

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

[ChunkRenderLayerBackend](chunk_manager_backend.ChunkRenderLayerBackend.md).[initializeCounterpart](chunk_manager_backend.ChunkRenderLayerBackend.md#initializecounterpart)

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

[ChunkRenderLayerBackend](chunk_manager_backend.ChunkRenderLayerBackend.md).[initializeSharedObject](chunk_manager_backend.ChunkRenderLayerBackend.md#initializesharedobject)

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L175)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

[ChunkRenderLayerBackend](chunk_manager_backend.ChunkRenderLayerBackend.md).[ownerDispose](chunk_manager_backend.ChunkRenderLayerBackend.md#ownerdispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[ChunkRenderLayerBackend](chunk_manager_backend.ChunkRenderLayerBackend.md).[refCountReachedZero](chunk_manager_backend.ChunkRenderLayerBackend.md#refcountreachedzero)

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

[ChunkRenderLayerBackend](chunk_manager_backend.ChunkRenderLayerBackend.md).[registerCancellable](chunk_manager_backend.ChunkRenderLayerBackend.md#registercancellable)

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

[ChunkRenderLayerBackend](chunk_manager_backend.ChunkRenderLayerBackend.md).[registerDisposer](chunk_manager_backend.ChunkRenderLayerBackend.md#registerdisposer)

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

[ChunkRenderLayerBackend](chunk_manager_backend.ChunkRenderLayerBackend.md).[registerEventListener](chunk_manager_backend.ChunkRenderLayerBackend.md#registereventlistener)

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

#### Inherited from

[ChunkRenderLayerBackend](chunk_manager_backend.ChunkRenderLayerBackend.md).[unregisterDisposer](chunk_manager_backend.ChunkRenderLayerBackend.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)
