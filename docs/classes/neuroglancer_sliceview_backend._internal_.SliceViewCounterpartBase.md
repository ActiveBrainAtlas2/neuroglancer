[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/backend](../modules/neuroglancer_sliceview_backend.md) / [<internal\>](../modules/neuroglancer_sliceview_backend._internal_.md) / SliceViewCounterpartBase

# Class: SliceViewCounterpartBase

[neuroglancer/sliceview/backend](../modules/neuroglancer_sliceview_backend.md).[<internal>](../modules/neuroglancer_sliceview_backend._internal_.md).SliceViewCounterpartBase

## Hierarchy

- [`SliceViewBase`](neuroglancer_sliceview_base.SliceViewBase.md)<[`SliceViewChunkSourceBackend`](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md), [`SliceViewRenderLayerBackend`](neuroglancer_sliceview_backend.SliceViewRenderLayerBackend.md)\>

  ↳ **`SliceViewCounterpartBase`**

## Table of contents

### Constructors

- [constructor](neuroglancer_sliceview_backend._internal_.SliceViewCounterpartBase.md#constructor)

### Properties

- [RPC\_TYPE\_ID](neuroglancer_sliceview_backend._internal_.SliceViewCounterpartBase.md#rpc_type_id)
- [disposedStacks](neuroglancer_sliceview_backend._internal_.SliceViewCounterpartBase.md#disposedstacks)
- [isOwner](neuroglancer_sliceview_backend._internal_.SliceViewCounterpartBase.md#isowner)
- [projectionParameters](neuroglancer_sliceview_backend._internal_.SliceViewCounterpartBase.md#projectionparameters)
- [refCount](neuroglancer_sliceview_backend._internal_.SliceViewCounterpartBase.md#refcount)
- [referencedGeneration](neuroglancer_sliceview_backend._internal_.SliceViewCounterpartBase.md#referencedgeneration)
- [rpc](neuroglancer_sliceview_backend._internal_.SliceViewCounterpartBase.md#rpc)
- [rpcId](neuroglancer_sliceview_backend._internal_.SliceViewCounterpartBase.md#rpcid)
- [unreferencedGeneration](neuroglancer_sliceview_backend._internal_.SliceViewCounterpartBase.md#unreferencedgeneration)
- [visibleLayers](neuroglancer_sliceview_backend._internal_.SliceViewCounterpartBase.md#visiblelayers)
- [visibleSourcesStale](neuroglancer_sliceview_backend._internal_.SliceViewCounterpartBase.md#visiblesourcesstale)
- [wasDisposed](neuroglancer_sliceview_backend._internal_.SliceViewCounterpartBase.md#wasdisposed)

### Methods

- [addCounterpartRef](neuroglancer_sliceview_backend._internal_.SliceViewCounterpartBase.md#addcounterpartref)
- [addRef](neuroglancer_sliceview_backend._internal_.SliceViewCounterpartBase.md#addref)
- [counterpartRefCountReachedZero](neuroglancer_sliceview_backend._internal_.SliceViewCounterpartBase.md#counterpartrefcountreachedzero)
- [dispose](neuroglancer_sliceview_backend._internal_.SliceViewCounterpartBase.md#dispose)
- [disposed](neuroglancer_sliceview_backend._internal_.SliceViewCounterpartBase.md#disposed)
- [initializeCounterpart](neuroglancer_sliceview_backend._internal_.SliceViewCounterpartBase.md#initializecounterpart)
- [initializeSharedObject](neuroglancer_sliceview_backend._internal_.SliceViewCounterpartBase.md#initializesharedobject)
- [invalidateVisibleChunks](neuroglancer_sliceview_backend._internal_.SliceViewCounterpartBase.md#invalidatevisiblechunks)
- [invalidateVisibleSources](neuroglancer_sliceview_backend._internal_.SliceViewCounterpartBase.md#invalidatevisiblesources)
- [ownerDispose](neuroglancer_sliceview_backend._internal_.SliceViewCounterpartBase.md#ownerdispose)
- [refCountReachedZero](neuroglancer_sliceview_backend._internal_.SliceViewCounterpartBase.md#refcountreachedzero)
- [registerCancellable](neuroglancer_sliceview_backend._internal_.SliceViewCounterpartBase.md#registercancellable)
- [registerDisposer](neuroglancer_sliceview_backend._internal_.SliceViewCounterpartBase.md#registerdisposer)
- [registerEventListener](neuroglancer_sliceview_backend._internal_.SliceViewCounterpartBase.md#registereventlistener)
- [unregisterDisposer](neuroglancer_sliceview_backend._internal_.SliceViewCounterpartBase.md#unregisterdisposer)
- [updateVisibleSources](neuroglancer_sliceview_backend._internal_.SliceViewCounterpartBase.md#updatevisiblesources)

## Constructors

### constructor

• **new SliceViewCounterpartBase**(`rpc`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](neuroglancer_worker_rpc.RPC.md) |
| `options` | `any` |

#### Overrides

[SliceViewBase](neuroglancer_sliceview_base.SliceViewBase.md).[constructor](neuroglancer_sliceview_base.SliceViewBase.md#constructor)

#### Defined in

[src/neuroglancer/sliceview/backend.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/backend.ts#L41)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

[SliceViewBase](neuroglancer_sliceview_base.SliceViewBase.md).[RPC_TYPE_ID](neuroglancer_sliceview_base.SliceViewBase.md#rpc_type_id)

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L245)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[SliceViewBase](neuroglancer_sliceview_base.SliceViewBase.md).[disposedStacks](neuroglancer_sliceview_base.SliceViewBase.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

[SliceViewBase](neuroglancer_sliceview_base.SliceViewBase.md).[isOwner](neuroglancer_sliceview_base.SliceViewBase.md#isowner)

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L171)

___

### projectionParameters

• **projectionParameters**: [`WatchableValueChangeInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueChangeInterface.md)<[`SliceViewProjectionParameters`](neuroglancer_sliceview_base.SliceViewProjectionParameters.md)\>

#### Inherited from

[SliceViewBase](neuroglancer_sliceview_base.SliceViewBase.md).[projectionParameters](neuroglancer_sliceview_base.SliceViewBase.md#projectionparameters)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[SliceViewBase](neuroglancer_sliceview_base.SliceViewBase.md).[refCount](neuroglancer_sliceview_base.SliceViewBase.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

[SliceViewBase](neuroglancer_sliceview_base.SliceViewBase.md).[referencedGeneration](neuroglancer_sliceview_base.SliceViewBase.md#referencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](neuroglancer_worker_rpc.RPC.md) = `null`

#### Inherited from

[SliceViewBase](neuroglancer_sliceview_base.SliceViewBase.md).[rpc](neuroglancer_sliceview_base.SliceViewBase.md#rpc)

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

[SliceViewBase](neuroglancer_sliceview_base.SliceViewBase.md).[rpcId](neuroglancer_sliceview_base.SliceViewBase.md#rpcid)

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L170)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

[SliceViewBase](neuroglancer_sliceview_base.SliceViewBase.md).[unreferencedGeneration](neuroglancer_sliceview_base.SliceViewBase.md#unreferencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L172)

___

### visibleLayers

• **visibleLayers**: `Map`<[`SliceViewRenderLayerBackend`](neuroglancer_sliceview_backend.SliceViewRenderLayerBackend.md), [`VisibleLayerSources`](../interfaces/neuroglancer_sliceview_base.VisibleLayerSources.md)<[`SliceViewRenderLayerBackend`](neuroglancer_sliceview_backend.SliceViewRenderLayerBackend.md), [`SliceViewChunkSourceBackend`](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md)<[`SliceViewChunkSpecification`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](neuroglancer_sliceview_backend.SliceViewChunk.md)\>, [`TransformedSource`](../interfaces/neuroglancer_sliceview_base.TransformedSource.md)<[`SliceViewRenderLayerBackend`](neuroglancer_sliceview_backend.SliceViewRenderLayerBackend.md), [`SliceViewChunkSourceBackend`](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md)<[`SliceViewChunkSpecification`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](neuroglancer_sliceview_backend.SliceViewChunk.md)\>\>\>\>

#### Inherited from

[SliceViewBase](neuroglancer_sliceview_base.SliceViewBase.md).[visibleLayers](neuroglancer_sliceview_base.SliceViewBase.md#visiblelayers)

#### Defined in

[src/neuroglancer/sliceview/base.ts:262](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L262)

___

### visibleSourcesStale

• **visibleSourcesStale**: `boolean` = `true`

#### Inherited from

[SliceViewBase](neuroglancer_sliceview_base.SliceViewBase.md).[visibleSourcesStale](neuroglancer_sliceview_base.SliceViewBase.md#visiblesourcesstale)

#### Defined in

[src/neuroglancer/sliceview/base.ts:263](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L263)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[SliceViewBase](neuroglancer_sliceview_base.SliceViewBase.md).[wasDisposed](neuroglancer_sliceview_base.SliceViewBase.md#wasdisposed)

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

[SliceViewBase](neuroglancer_sliceview_base.SliceViewBase.md).[addCounterpartRef](neuroglancer_sliceview_base.SliceViewBase.md#addcounterpartref)

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`SliceViewCounterpartBase`](neuroglancer_sliceview_backend._internal_.SliceViewCounterpartBase.md)

#### Returns

[`SliceViewCounterpartBase`](neuroglancer_sliceview_backend._internal_.SliceViewCounterpartBase.md)

#### Inherited from

[SliceViewBase](neuroglancer_sliceview_base.SliceViewBase.md).[addRef](neuroglancer_sliceview_base.SliceViewBase.md#addref)

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

#### Inherited from

[SliceViewBase](neuroglancer_sliceview_base.SliceViewBase.md).[counterpartRefCountReachedZero](neuroglancer_sliceview_base.SliceViewBase.md#counterpartrefcountreachedzero)

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L234)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[SliceViewBase](neuroglancer_sliceview_base.SliceViewBase.md).[dispose](neuroglancer_sliceview_base.SliceViewBase.md#dispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[SliceViewBase](neuroglancer_sliceview_base.SliceViewBase.md).[disposed](neuroglancer_sliceview_base.SliceViewBase.md#disposed)

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

[SliceViewBase](neuroglancer_sliceview_base.SliceViewBase.md).[initializeCounterpart](neuroglancer_sliceview_base.SliceViewBase.md#initializecounterpart)

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

[SliceViewBase](neuroglancer_sliceview_base.SliceViewBase.md).[initializeSharedObject](neuroglancer_sliceview_base.SliceViewBase.md#initializesharedobject)

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L175)

___

### invalidateVisibleChunks

▸ **invalidateVisibleChunks**(): `void`

#### Returns

`void`

#### Inherited from

[SliceViewBase](neuroglancer_sliceview_base.SliceViewBase.md).[invalidateVisibleChunks](neuroglancer_sliceview_base.SliceViewBase.md#invalidatevisiblechunks)

#### Defined in

[src/neuroglancer/sliceview/base.ts:280](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L280)

___

### invalidateVisibleSources

▸ **invalidateVisibleSources**(): `void`

#### Returns

`void`

#### Inherited from

[SliceViewBase](neuroglancer_sliceview_base.SliceViewBase.md).[invalidateVisibleSources](neuroglancer_sliceview_base.SliceViewBase.md#invalidatevisiblesources)

#### Defined in

[src/neuroglancer/sliceview/base.ts:276](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L276)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

[SliceViewBase](neuroglancer_sliceview_base.SliceViewBase.md).[ownerDispose](neuroglancer_sliceview_base.SliceViewBase.md#ownerdispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[SliceViewBase](neuroglancer_sliceview_base.SliceViewBase.md).[refCountReachedZero](neuroglancer_sliceview_base.SliceViewBase.md#refcountreachedzero)

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

[SliceViewBase](neuroglancer_sliceview_base.SliceViewBase.md).[registerCancellable](neuroglancer_sliceview_base.SliceViewBase.md#registercancellable)

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

[SliceViewBase](neuroglancer_sliceview_base.SliceViewBase.md).[registerDisposer](neuroglancer_sliceview_base.SliceViewBase.md#registerdisposer)

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

[SliceViewBase](neuroglancer_sliceview_base.SliceViewBase.md).[registerEventListener](neuroglancer_sliceview_base.SliceViewBase.md#registereventlistener)

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

[SliceViewBase](neuroglancer_sliceview_base.SliceViewBase.md).[unregisterDisposer](neuroglancer_sliceview_base.SliceViewBase.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)

___

### updateVisibleSources

▸ **updateVisibleSources**(): `void`

Computes the list of sources to use for each visible layer, based on the
current pixelSize.

#### Returns

`void`

#### Inherited from

[SliceViewBase](neuroglancer_sliceview_base.SliceViewBase.md).[updateVisibleSources](neuroglancer_sliceview_base.SliceViewBase.md#updatevisiblesources)

#### Defined in

[src/neuroglancer/sliceview/base.ts:286](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L286)
