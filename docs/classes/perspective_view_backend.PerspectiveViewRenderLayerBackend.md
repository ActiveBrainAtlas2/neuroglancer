[neuroglancer](../README.md) / [Modules](../modules.md) / [perspective\_view/backend](../modules/perspective_view_backend.md) / PerspectiveViewRenderLayerBackend

# Class: PerspectiveViewRenderLayerBackend<AttachmentState\>

[perspective_view/backend](../modules/perspective_view_backend.md).PerspectiveViewRenderLayerBackend

## Type parameters

| Name | Type |
| :------ | :------ |
| `AttachmentState` | `unknown` |

## Hierarchy

- [`RenderLayerBackend`](perspective_view_backend._internal_.RenderLayerBackend.md)<[`PerspectiveViewBackend`](perspective_view_backend.PerspectiveViewBackend.md), `AttachmentState`\>

  ↳ **`PerspectiveViewRenderLayerBackend`**

## Table of contents

### Constructors

- [constructor](perspective_view_backend.PerspectiveViewRenderLayerBackend.md#constructor)

### Properties

- [RPC\_TYPE\_ID](perspective_view_backend.PerspectiveViewRenderLayerBackend.md#rpc_type_id)
- [attachments](perspective_view_backend.PerspectiveViewRenderLayerBackend.md#attachments)
- [chunkManagerGeneration](perspective_view_backend.PerspectiveViewRenderLayerBackend.md#chunkmanagergeneration)
- [disposedStacks](perspective_view_backend.PerspectiveViewRenderLayerBackend.md#disposedstacks)
- [isOwner](perspective_view_backend.PerspectiveViewRenderLayerBackend.md#isowner)
- [numPrefetchChunksAvailable](perspective_view_backend.PerspectiveViewRenderLayerBackend.md#numprefetchchunksavailable)
- [numPrefetchChunksNeeded](perspective_view_backend.PerspectiveViewRenderLayerBackend.md#numprefetchchunksneeded)
- [numVisibleChunksAvailable](perspective_view_backend.PerspectiveViewRenderLayerBackend.md#numvisiblechunksavailable)
- [numVisibleChunksNeeded](perspective_view_backend.PerspectiveViewRenderLayerBackend.md#numvisiblechunksneeded)
- [refCount](perspective_view_backend.PerspectiveViewRenderLayerBackend.md#refcount)
- [referencedGeneration](perspective_view_backend.PerspectiveViewRenderLayerBackend.md#referencedgeneration)
- [rpc](perspective_view_backend.PerspectiveViewRenderLayerBackend.md#rpc)
- [rpcId](perspective_view_backend.PerspectiveViewRenderLayerBackend.md#rpcid)
- [unreferencedGeneration](perspective_view_backend.PerspectiveViewRenderLayerBackend.md#unreferencedgeneration)
- [wasDisposed](perspective_view_backend.PerspectiveViewRenderLayerBackend.md#wasdisposed)

### Methods

- [addCounterpartRef](perspective_view_backend.PerspectiveViewRenderLayerBackend.md#addcounterpartref)
- [addRef](perspective_view_backend.PerspectiveViewRenderLayerBackend.md#addref)
- [attach](perspective_view_backend.PerspectiveViewRenderLayerBackend.md#attach)
- [counterpartRefCountReachedZero](perspective_view_backend.PerspectiveViewRenderLayerBackend.md#counterpartrefcountreachedzero)
- [dispose](perspective_view_backend.PerspectiveViewRenderLayerBackend.md#dispose)
- [disposed](perspective_view_backend.PerspectiveViewRenderLayerBackend.md#disposed)
- [initializeCounterpart](perspective_view_backend.PerspectiveViewRenderLayerBackend.md#initializecounterpart)
- [initializeSharedObject](perspective_view_backend.PerspectiveViewRenderLayerBackend.md#initializesharedobject)
- [ownerDispose](perspective_view_backend.PerspectiveViewRenderLayerBackend.md#ownerdispose)
- [refCountReachedZero](perspective_view_backend.PerspectiveViewRenderLayerBackend.md#refcountreachedzero)
- [registerCancellable](perspective_view_backend.PerspectiveViewRenderLayerBackend.md#registercancellable)
- [registerDisposer](perspective_view_backend.PerspectiveViewRenderLayerBackend.md#registerdisposer)
- [registerEventListener](perspective_view_backend.PerspectiveViewRenderLayerBackend.md#registereventlistener)
- [unregisterDisposer](perspective_view_backend.PerspectiveViewRenderLayerBackend.md#unregisterdisposer)

## Constructors

### constructor

• **new PerspectiveViewRenderLayerBackend**<`AttachmentState`\>(`rpc?`, `options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AttachmentState` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc?` | [`RPC`](annotation_annotation_layer_state._internal_.RPC.md) |
| `options` | `any` |

#### Inherited from

[RenderLayerBackend](perspective_view_backend._internal_.RenderLayerBackend.md).[constructor](perspective_view_backend._internal_.RenderLayerBackend.md#constructor)

#### Defined in

[src/neuroglancer/worker_rpc.ts:258](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L258)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

[RenderLayerBackend](perspective_view_backend._internal_.RenderLayerBackend.md).[RPC_TYPE_ID](perspective_view_backend._internal_.RenderLayerBackend.md#rpc_type_id)

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L245)

___

### attachments

• **attachments**: `Map`<[`PerspectiveViewBackend`](perspective_view_backend.PerspectiveViewBackend.md), [`RenderLayerBackendAttachment`](mesh_backend._internal_.RenderLayerBackendAttachment.md)<[`RenderedViewBackend`](../interfaces/mesh_backend._internal_.RenderedViewBackend.md), `unknown`\>\>

#### Inherited from

[RenderLayerBackend](perspective_view_backend._internal_.RenderLayerBackend.md).[attachments](perspective_view_backend._internal_.RenderLayerBackend.md#attachments)

#### Defined in

[src/neuroglancer/render_layer_backend.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/render_layer_backend.ts#L42)

___

### chunkManagerGeneration

• **chunkManagerGeneration**: `number` = `-1`

#### Inherited from

[RenderLayerBackend](perspective_view_backend._internal_.RenderLayerBackend.md).[chunkManagerGeneration](perspective_view_backend._internal_.RenderLayerBackend.md#chunkmanagergeneration)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:958](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L958)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RenderLayerBackend](perspective_view_backend._internal_.RenderLayerBackend.md).[disposedStacks](perspective_view_backend._internal_.RenderLayerBackend.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

[RenderLayerBackend](perspective_view_backend._internal_.RenderLayerBackend.md).[isOwner](perspective_view_backend._internal_.RenderLayerBackend.md#isowner)

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L171)

___

### numPrefetchChunksAvailable

• **numPrefetchChunksAvailable**: `number` = `0`

#### Inherited from

[RenderLayerBackend](perspective_view_backend._internal_.RenderLayerBackend.md).[numPrefetchChunksAvailable](perspective_view_backend._internal_.RenderLayerBackend.md#numprefetchchunksavailable)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:963](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L963)

___

### numPrefetchChunksNeeded

• **numPrefetchChunksNeeded**: `number` = `0`

#### Inherited from

[RenderLayerBackend](perspective_view_backend._internal_.RenderLayerBackend.md).[numPrefetchChunksNeeded](perspective_view_backend._internal_.RenderLayerBackend.md#numprefetchchunksneeded)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:962](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L962)

___

### numVisibleChunksAvailable

• **numVisibleChunksAvailable**: `number` = `0`

#### Inherited from

[RenderLayerBackend](perspective_view_backend._internal_.RenderLayerBackend.md).[numVisibleChunksAvailable](perspective_view_backend._internal_.RenderLayerBackend.md#numvisiblechunksavailable)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:961](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L961)

___

### numVisibleChunksNeeded

• **numVisibleChunksNeeded**: `number` = `0`

#### Inherited from

[RenderLayerBackend](perspective_view_backend._internal_.RenderLayerBackend.md).[numVisibleChunksNeeded](perspective_view_backend._internal_.RenderLayerBackend.md#numvisiblechunksneeded)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:960](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L960)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RenderLayerBackend](perspective_view_backend._internal_.RenderLayerBackend.md).[refCount](perspective_view_backend._internal_.RenderLayerBackend.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

[RenderLayerBackend](perspective_view_backend._internal_.RenderLayerBackend.md).[referencedGeneration](perspective_view_backend._internal_.RenderLayerBackend.md#referencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](annotation_annotation_layer_state._internal_.RPC.md) = `null`

#### Inherited from

[RenderLayerBackend](perspective_view_backend._internal_.RenderLayerBackend.md).[rpc](perspective_view_backend._internal_.RenderLayerBackend.md#rpc)

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

[RenderLayerBackend](perspective_view_backend._internal_.RenderLayerBackend.md).[rpcId](perspective_view_backend._internal_.RenderLayerBackend.md#rpcid)

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L170)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

[RenderLayerBackend](perspective_view_backend._internal_.RenderLayerBackend.md).[unreferencedGeneration](perspective_view_backend._internal_.RenderLayerBackend.md#unreferencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L172)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RenderLayerBackend](perspective_view_backend._internal_.RenderLayerBackend.md).[wasDisposed](perspective_view_backend._internal_.RenderLayerBackend.md#wasdisposed)

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

[RenderLayerBackend](perspective_view_backend._internal_.RenderLayerBackend.md).[addCounterpartRef](perspective_view_backend._internal_.RenderLayerBackend.md#addcounterpartref)

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`PerspectiveViewRenderLayerBackend`](perspective_view_backend.PerspectiveViewRenderLayerBackend.md)<`AttachmentState`\>

#### Returns

[`PerspectiveViewRenderLayerBackend`](perspective_view_backend.PerspectiveViewRenderLayerBackend.md)<`AttachmentState`\>

#### Inherited from

[RenderLayerBackend](perspective_view_backend._internal_.RenderLayerBackend.md).[addRef](perspective_view_backend._internal_.RenderLayerBackend.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### attach

▸ **attach**(`attachment`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attachment` | [`RenderLayerBackendAttachment`](mesh_backend._internal_.RenderLayerBackendAttachment.md)<[`PerspectiveViewBackend`](perspective_view_backend.PerspectiveViewBackend.md), `AttachmentState`\> |

#### Returns

`void`

#### Inherited from

[RenderLayerBackend](perspective_view_backend._internal_.RenderLayerBackend.md).[attach](perspective_view_backend._internal_.RenderLayerBackend.md#attach)

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

[RenderLayerBackend](perspective_view_backend._internal_.RenderLayerBackend.md).[counterpartRefCountReachedZero](perspective_view_backend._internal_.RenderLayerBackend.md#counterpartrefcountreachedzero)

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L234)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RenderLayerBackend](perspective_view_backend._internal_.RenderLayerBackend.md).[dispose](perspective_view_backend._internal_.RenderLayerBackend.md#dispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RenderLayerBackend](perspective_view_backend._internal_.RenderLayerBackend.md).[disposed](perspective_view_backend._internal_.RenderLayerBackend.md#disposed)

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

[RenderLayerBackend](perspective_view_backend._internal_.RenderLayerBackend.md).[initializeCounterpart](perspective_view_backend._internal_.RenderLayerBackend.md#initializecounterpart)

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

[RenderLayerBackend](perspective_view_backend._internal_.RenderLayerBackend.md).[initializeSharedObject](perspective_view_backend._internal_.RenderLayerBackend.md#initializesharedobject)

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L175)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

[RenderLayerBackend](perspective_view_backend._internal_.RenderLayerBackend.md).[ownerDispose](perspective_view_backend._internal_.RenderLayerBackend.md#ownerdispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RenderLayerBackend](perspective_view_backend._internal_.RenderLayerBackend.md).[refCountReachedZero](perspective_view_backend._internal_.RenderLayerBackend.md#refcountreachedzero)

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

[RenderLayerBackend](perspective_view_backend._internal_.RenderLayerBackend.md).[registerCancellable](perspective_view_backend._internal_.RenderLayerBackend.md#registercancellable)

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

[RenderLayerBackend](perspective_view_backend._internal_.RenderLayerBackend.md).[registerDisposer](perspective_view_backend._internal_.RenderLayerBackend.md#registerdisposer)

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

[RenderLayerBackend](perspective_view_backend._internal_.RenderLayerBackend.md).[registerEventListener](perspective_view_backend._internal_.RenderLayerBackend.md#registereventlistener)

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

[RenderLayerBackend](perspective_view_backend._internal_.RenderLayerBackend.md).[unregisterDisposer](perspective_view_backend._internal_.RenderLayerBackend.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)
