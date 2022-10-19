[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/perspective\_view/backend](../modules/neuroglancer_perspective_view_backend.md) / PerspectiveViewRenderLayerBackend

# Class: PerspectiveViewRenderLayerBackend<AttachmentState\>

[neuroglancer/perspective_view/backend](../modules/neuroglancer_perspective_view_backend.md).PerspectiveViewRenderLayerBackend

## Type parameters

| Name | Type |
| :------ | :------ |
| `AttachmentState` | `unknown` |

## Hierarchy

- [`RenderLayerBackend`](neuroglancer_render_layer_backend.RenderLayerBackend.md)<[`PerspectiveViewBackend`](neuroglancer_perspective_view_backend.PerspectiveViewBackend.md), `AttachmentState`\>

  ↳ **`PerspectiveViewRenderLayerBackend`**

## Table of contents

### Constructors

- [constructor](neuroglancer_perspective_view_backend.PerspectiveViewRenderLayerBackend.md#constructor)

### Properties

- [RPC\_TYPE\_ID](neuroglancer_perspective_view_backend.PerspectiveViewRenderLayerBackend.md#rpc_type_id)
- [attachments](neuroglancer_perspective_view_backend.PerspectiveViewRenderLayerBackend.md#attachments)
- [chunkManagerGeneration](neuroglancer_perspective_view_backend.PerspectiveViewRenderLayerBackend.md#chunkmanagergeneration)
- [disposedStacks](neuroglancer_perspective_view_backend.PerspectiveViewRenderLayerBackend.md#disposedstacks)
- [isOwner](neuroglancer_perspective_view_backend.PerspectiveViewRenderLayerBackend.md#isowner)
- [numPrefetchChunksAvailable](neuroglancer_perspective_view_backend.PerspectiveViewRenderLayerBackend.md#numprefetchchunksavailable)
- [numPrefetchChunksNeeded](neuroglancer_perspective_view_backend.PerspectiveViewRenderLayerBackend.md#numprefetchchunksneeded)
- [numVisibleChunksAvailable](neuroglancer_perspective_view_backend.PerspectiveViewRenderLayerBackend.md#numvisiblechunksavailable)
- [numVisibleChunksNeeded](neuroglancer_perspective_view_backend.PerspectiveViewRenderLayerBackend.md#numvisiblechunksneeded)
- [refCount](neuroglancer_perspective_view_backend.PerspectiveViewRenderLayerBackend.md#refcount)
- [referencedGeneration](neuroglancer_perspective_view_backend.PerspectiveViewRenderLayerBackend.md#referencedgeneration)
- [rpc](neuroglancer_perspective_view_backend.PerspectiveViewRenderLayerBackend.md#rpc)
- [rpcId](neuroglancer_perspective_view_backend.PerspectiveViewRenderLayerBackend.md#rpcid)
- [unreferencedGeneration](neuroglancer_perspective_view_backend.PerspectiveViewRenderLayerBackend.md#unreferencedgeneration)
- [wasDisposed](neuroglancer_perspective_view_backend.PerspectiveViewRenderLayerBackend.md#wasdisposed)

### Methods

- [addCounterpartRef](neuroglancer_perspective_view_backend.PerspectiveViewRenderLayerBackend.md#addcounterpartref)
- [addRef](neuroglancer_perspective_view_backend.PerspectiveViewRenderLayerBackend.md#addref)
- [attach](neuroglancer_perspective_view_backend.PerspectiveViewRenderLayerBackend.md#attach)
- [counterpartRefCountReachedZero](neuroglancer_perspective_view_backend.PerspectiveViewRenderLayerBackend.md#counterpartrefcountreachedzero)
- [dispose](neuroglancer_perspective_view_backend.PerspectiveViewRenderLayerBackend.md#dispose)
- [disposed](neuroglancer_perspective_view_backend.PerspectiveViewRenderLayerBackend.md#disposed)
- [initializeCounterpart](neuroglancer_perspective_view_backend.PerspectiveViewRenderLayerBackend.md#initializecounterpart)
- [initializeSharedObject](neuroglancer_perspective_view_backend.PerspectiveViewRenderLayerBackend.md#initializesharedobject)
- [ownerDispose](neuroglancer_perspective_view_backend.PerspectiveViewRenderLayerBackend.md#ownerdispose)
- [refCountReachedZero](neuroglancer_perspective_view_backend.PerspectiveViewRenderLayerBackend.md#refcountreachedzero)
- [registerCancellable](neuroglancer_perspective_view_backend.PerspectiveViewRenderLayerBackend.md#registercancellable)
- [registerDisposer](neuroglancer_perspective_view_backend.PerspectiveViewRenderLayerBackend.md#registerdisposer)
- [registerEventListener](neuroglancer_perspective_view_backend.PerspectiveViewRenderLayerBackend.md#registereventlistener)
- [unregisterDisposer](neuroglancer_perspective_view_backend.PerspectiveViewRenderLayerBackend.md#unregisterdisposer)

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
| `rpc?` | [`RPC`](neuroglancer_worker_rpc.RPC.md) |
| `options` | `any` |

#### Inherited from

[RenderLayerBackend](neuroglancer_render_layer_backend.RenderLayerBackend.md).[constructor](neuroglancer_render_layer_backend.RenderLayerBackend.md#constructor)

#### Defined in

[src/neuroglancer/worker_rpc.ts:258](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L258)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

[RenderLayerBackend](neuroglancer_render_layer_backend.RenderLayerBackend.md).[RPC_TYPE_ID](neuroglancer_render_layer_backend.RenderLayerBackend.md#rpc_type_id)

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L245)

___

### attachments

• **attachments**: `Map`<[`PerspectiveViewBackend`](neuroglancer_perspective_view_backend.PerspectiveViewBackend.md), [`RenderLayerBackendAttachment`](neuroglancer_render_layer_backend.RenderLayerBackendAttachment.md)<[`RenderedViewBackend`](../interfaces/neuroglancer_render_layer_backend.RenderedViewBackend.md), `unknown`\>\>

#### Inherited from

[RenderLayerBackend](neuroglancer_render_layer_backend.RenderLayerBackend.md).[attachments](neuroglancer_render_layer_backend.RenderLayerBackend.md#attachments)

#### Defined in

[src/neuroglancer/render_layer_backend.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/render_layer_backend.ts#L42)

___

### chunkManagerGeneration

• **chunkManagerGeneration**: `number` = `-1`

#### Inherited from

[RenderLayerBackend](neuroglancer_render_layer_backend.RenderLayerBackend.md).[chunkManagerGeneration](neuroglancer_render_layer_backend.RenderLayerBackend.md#chunkmanagergeneration)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:958](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L958)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RenderLayerBackend](neuroglancer_render_layer_backend.RenderLayerBackend.md).[disposedStacks](neuroglancer_render_layer_backend.RenderLayerBackend.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

[RenderLayerBackend](neuroglancer_render_layer_backend.RenderLayerBackend.md).[isOwner](neuroglancer_render_layer_backend.RenderLayerBackend.md#isowner)

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L171)

___

### numPrefetchChunksAvailable

• **numPrefetchChunksAvailable**: `number` = `0`

#### Inherited from

[RenderLayerBackend](neuroglancer_render_layer_backend.RenderLayerBackend.md).[numPrefetchChunksAvailable](neuroglancer_render_layer_backend.RenderLayerBackend.md#numprefetchchunksavailable)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:963](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L963)

___

### numPrefetchChunksNeeded

• **numPrefetchChunksNeeded**: `number` = `0`

#### Inherited from

[RenderLayerBackend](neuroglancer_render_layer_backend.RenderLayerBackend.md).[numPrefetchChunksNeeded](neuroglancer_render_layer_backend.RenderLayerBackend.md#numprefetchchunksneeded)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:962](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L962)

___

### numVisibleChunksAvailable

• **numVisibleChunksAvailable**: `number` = `0`

#### Inherited from

[RenderLayerBackend](neuroglancer_render_layer_backend.RenderLayerBackend.md).[numVisibleChunksAvailable](neuroglancer_render_layer_backend.RenderLayerBackend.md#numvisiblechunksavailable)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:961](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L961)

___

### numVisibleChunksNeeded

• **numVisibleChunksNeeded**: `number` = `0`

#### Inherited from

[RenderLayerBackend](neuroglancer_render_layer_backend.RenderLayerBackend.md).[numVisibleChunksNeeded](neuroglancer_render_layer_backend.RenderLayerBackend.md#numvisiblechunksneeded)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:960](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L960)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RenderLayerBackend](neuroglancer_render_layer_backend.RenderLayerBackend.md).[refCount](neuroglancer_render_layer_backend.RenderLayerBackend.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

[RenderLayerBackend](neuroglancer_render_layer_backend.RenderLayerBackend.md).[referencedGeneration](neuroglancer_render_layer_backend.RenderLayerBackend.md#referencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](neuroglancer_worker_rpc.RPC.md) = `null`

#### Inherited from

[RenderLayerBackend](neuroglancer_render_layer_backend.RenderLayerBackend.md).[rpc](neuroglancer_render_layer_backend.RenderLayerBackend.md#rpc)

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

[RenderLayerBackend](neuroglancer_render_layer_backend.RenderLayerBackend.md).[rpcId](neuroglancer_render_layer_backend.RenderLayerBackend.md#rpcid)

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L170)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

[RenderLayerBackend](neuroglancer_render_layer_backend.RenderLayerBackend.md).[unreferencedGeneration](neuroglancer_render_layer_backend.RenderLayerBackend.md#unreferencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L172)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RenderLayerBackend](neuroglancer_render_layer_backend.RenderLayerBackend.md).[wasDisposed](neuroglancer_render_layer_backend.RenderLayerBackend.md#wasdisposed)

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

#### Inherited from

[RenderLayerBackend](neuroglancer_render_layer_backend.RenderLayerBackend.md).[addCounterpartRef](neuroglancer_render_layer_backend.RenderLayerBackend.md#addcounterpartref)

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`PerspectiveViewRenderLayerBackend`](neuroglancer_perspective_view_backend.PerspectiveViewRenderLayerBackend.md)<`AttachmentState`\>

#### Returns

[`PerspectiveViewRenderLayerBackend`](neuroglancer_perspective_view_backend.PerspectiveViewRenderLayerBackend.md)<`AttachmentState`\>

#### Inherited from

[RenderLayerBackend](neuroglancer_render_layer_backend.RenderLayerBackend.md).[addRef](neuroglancer_render_layer_backend.RenderLayerBackend.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### attach

▸ **attach**(`attachment`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attachment` | [`RenderLayerBackendAttachment`](neuroglancer_render_layer_backend.RenderLayerBackendAttachment.md)<[`PerspectiveViewBackend`](neuroglancer_perspective_view_backend.PerspectiveViewBackend.md), `AttachmentState`\> |

#### Returns

`void`

#### Inherited from

[RenderLayerBackend](neuroglancer_render_layer_backend.RenderLayerBackend.md).[attach](neuroglancer_render_layer_backend.RenderLayerBackend.md#attach)

#### Defined in

[src/neuroglancer/render_layer_backend.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/render_layer_backend.ts#L43)

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

[RenderLayerBackend](neuroglancer_render_layer_backend.RenderLayerBackend.md).[counterpartRefCountReachedZero](neuroglancer_render_layer_backend.RenderLayerBackend.md#counterpartrefcountreachedzero)

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L234)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RenderLayerBackend](neuroglancer_render_layer_backend.RenderLayerBackend.md).[dispose](neuroglancer_render_layer_backend.RenderLayerBackend.md#dispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RenderLayerBackend](neuroglancer_render_layer_backend.RenderLayerBackend.md).[disposed](neuroglancer_render_layer_backend.RenderLayerBackend.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L75)

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

[RenderLayerBackend](neuroglancer_render_layer_backend.RenderLayerBackend.md).[initializeCounterpart](neuroglancer_render_layer_backend.RenderLayerBackend.md#initializecounterpart)

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

#### Inherited from

[RenderLayerBackend](neuroglancer_render_layer_backend.RenderLayerBackend.md).[initializeSharedObject](neuroglancer_render_layer_backend.RenderLayerBackend.md#initializesharedobject)

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L175)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

[RenderLayerBackend](neuroglancer_render_layer_backend.RenderLayerBackend.md).[ownerDispose](neuroglancer_render_layer_backend.RenderLayerBackend.md#ownerdispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RenderLayerBackend](neuroglancer_render_layer_backend.RenderLayerBackend.md).[refCountReachedZero](neuroglancer_render_layer_backend.RenderLayerBackend.md#refcountreachedzero)

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

#### Inherited from

[RenderLayerBackend](neuroglancer_render_layer_backend.RenderLayerBackend.md).[registerCancellable](neuroglancer_render_layer_backend.RenderLayerBackend.md#registercancellable)

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

#### Inherited from

[RenderLayerBackend](neuroglancer_render_layer_backend.RenderLayerBackend.md).[registerDisposer](neuroglancer_render_layer_backend.RenderLayerBackend.md#registerdisposer)

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

#### Inherited from

[RenderLayerBackend](neuroglancer_render_layer_backend.RenderLayerBackend.md).[registerEventListener](neuroglancer_render_layer_backend.RenderLayerBackend.md#registereventlistener)

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

#### Inherited from

[RenderLayerBackend](neuroglancer_render_layer_backend.RenderLayerBackend.md).[unregisterDisposer](neuroglancer_render_layer_backend.RenderLayerBackend.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)
