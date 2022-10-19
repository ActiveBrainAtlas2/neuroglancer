[neuroglancer](../README.md) / [Modules](../modules.md) / [sliceview/frontend](../modules/sliceview_frontend.md) / [<internal\>](../modules/sliceview_frontend._internal_.md) / FrontendSliceViewBase

# Class: FrontendSliceViewBase

[sliceview/frontend](../modules/sliceview_frontend.md).[<internal>](../modules/sliceview_frontend._internal_.md).FrontendSliceViewBase

## Hierarchy

- [`SliceViewBase`](sliceview_base.SliceViewBase.md)<[`SliceViewChunkSource`](sliceview_frontend.SliceViewChunkSource.md), [`SliceViewRenderLayer`](sliceview_renderlayer.SliceViewRenderLayer.md), [`FrontendTransformedSource`](../interfaces/sliceview_frontend.FrontendTransformedSource.md)\>

  ↳ **`FrontendSliceViewBase`**

## Table of contents

### Constructors

- [constructor](sliceview_frontend._internal_.FrontendSliceViewBase.md#constructor)

### Properties

- [RPC\_TYPE\_ID](sliceview_frontend._internal_.FrontendSliceViewBase.md#rpc_type_id)
- [disposedStacks](sliceview_frontend._internal_.FrontendSliceViewBase.md#disposedstacks)
- [isOwner](sliceview_frontend._internal_.FrontendSliceViewBase.md#isowner)
- [projectionParameters](sliceview_frontend._internal_.FrontendSliceViewBase.md#projectionparameters)
- [refCount](sliceview_frontend._internal_.FrontendSliceViewBase.md#refcount)
- [referencedGeneration](sliceview_frontend._internal_.FrontendSliceViewBase.md#referencedgeneration)
- [rpc](sliceview_frontend._internal_.FrontendSliceViewBase.md#rpc)
- [rpcId](sliceview_frontend._internal_.FrontendSliceViewBase.md#rpcid)
- [unreferencedGeneration](sliceview_frontend._internal_.FrontendSliceViewBase.md#unreferencedgeneration)
- [visibleLayers](sliceview_frontend._internal_.FrontendSliceViewBase.md#visiblelayers)
- [visibleSourcesStale](sliceview_frontend._internal_.FrontendSliceViewBase.md#visiblesourcesstale)
- [wasDisposed](sliceview_frontend._internal_.FrontendSliceViewBase.md#wasdisposed)

### Methods

- [addCounterpartRef](sliceview_frontend._internal_.FrontendSliceViewBase.md#addcounterpartref)
- [addRef](sliceview_frontend._internal_.FrontendSliceViewBase.md#addref)
- [counterpartRefCountReachedZero](sliceview_frontend._internal_.FrontendSliceViewBase.md#counterpartrefcountreachedzero)
- [dispose](sliceview_frontend._internal_.FrontendSliceViewBase.md#dispose)
- [disposed](sliceview_frontend._internal_.FrontendSliceViewBase.md#disposed)
- [initializeCounterpart](sliceview_frontend._internal_.FrontendSliceViewBase.md#initializecounterpart)
- [initializeSharedObject](sliceview_frontend._internal_.FrontendSliceViewBase.md#initializesharedobject)
- [invalidateVisibleChunks](sliceview_frontend._internal_.FrontendSliceViewBase.md#invalidatevisiblechunks)
- [invalidateVisibleSources](sliceview_frontend._internal_.FrontendSliceViewBase.md#invalidatevisiblesources)
- [ownerDispose](sliceview_frontend._internal_.FrontendSliceViewBase.md#ownerdispose)
- [refCountReachedZero](sliceview_frontend._internal_.FrontendSliceViewBase.md#refcountreachedzero)
- [registerCancellable](sliceview_frontend._internal_.FrontendSliceViewBase.md#registercancellable)
- [registerDisposer](sliceview_frontend._internal_.FrontendSliceViewBase.md#registerdisposer)
- [registerEventListener](sliceview_frontend._internal_.FrontendSliceViewBase.md#registereventlistener)
- [unregisterDisposer](sliceview_frontend._internal_.FrontendSliceViewBase.md#unregisterdisposer)
- [updateVisibleSources](sliceview_frontend._internal_.FrontendSliceViewBase.md#updatevisiblesources)

## Constructors

### constructor

• **new FrontendSliceViewBase**(`projectionParameters`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `projectionParameters` | [`WatchableValueChangeInterface`](../interfaces/perspective_view_panel._internal_.WatchableValueChangeInterface.md)<[`SliceViewProjectionParameters`](sliceview_base.SliceViewProjectionParameters.md)\> |

#### Inherited from

[SliceViewBase](sliceview_base.SliceViewBase.md).[constructor](sliceview_base.SliceViewBase.md#constructor)

#### Defined in

[src/neuroglancer/sliceview/base.ts:265](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L265)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

[SliceViewBase](sliceview_base.SliceViewBase.md).[RPC_TYPE_ID](sliceview_base.SliceViewBase.md#rpc_type_id)

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L245)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[SliceViewBase](sliceview_base.SliceViewBase.md).[disposedStacks](sliceview_base.SliceViewBase.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

[SliceViewBase](sliceview_base.SliceViewBase.md).[isOwner](sliceview_base.SliceViewBase.md#isowner)

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L171)

___

### projectionParameters

• **projectionParameters**: [`WatchableValueChangeInterface`](../interfaces/perspective_view_panel._internal_.WatchableValueChangeInterface.md)<[`SliceViewProjectionParameters`](sliceview_base.SliceViewProjectionParameters.md)\>

#### Inherited from

[SliceViewBase](sliceview_base.SliceViewBase.md).[projectionParameters](sliceview_base.SliceViewBase.md#projectionparameters)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[SliceViewBase](sliceview_base.SliceViewBase.md).[refCount](sliceview_base.SliceViewBase.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

[SliceViewBase](sliceview_base.SliceViewBase.md).[referencedGeneration](sliceview_base.SliceViewBase.md#referencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](annotation_annotation_layer_state._internal_.RPC.md) = `null`

#### Inherited from

[SliceViewBase](sliceview_base.SliceViewBase.md).[rpc](sliceview_base.SliceViewBase.md#rpc)

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

[SliceViewBase](sliceview_base.SliceViewBase.md).[rpcId](sliceview_base.SliceViewBase.md#rpcid)

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L170)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

[SliceViewBase](sliceview_base.SliceViewBase.md).[unreferencedGeneration](sliceview_base.SliceViewBase.md#unreferencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L172)

___

### visibleLayers

• **visibleLayers**: `Map`<[`SliceViewRenderLayer`](sliceview_renderlayer.SliceViewRenderLayer.md)<[`SliceViewChunkSource`](sliceview_frontend.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](sliceview_frontend.SliceViewChunk.md)\>, [`SliceViewSourceOptions`](../interfaces/sliceview_base.SliceViewSourceOptions.md)\>, [`VisibleLayerSources`](../interfaces/sliceview_base.VisibleLayerSources.md)<[`SliceViewRenderLayer`](sliceview_renderlayer.SliceViewRenderLayer.md)<[`SliceViewChunkSource`](sliceview_frontend.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](sliceview_frontend.SliceViewChunk.md)\>, [`SliceViewSourceOptions`](../interfaces/sliceview_base.SliceViewSourceOptions.md)\>, [`SliceViewChunkSource`](sliceview_frontend.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](sliceview_frontend.SliceViewChunk.md)\>, [`FrontendTransformedSource`](../interfaces/sliceview_frontend.FrontendTransformedSource.md)<[`SliceViewRenderLayer`](sliceview_renderlayer.SliceViewRenderLayer.md)<[`SliceViewChunkSource`](sliceview_frontend.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](sliceview_frontend.SliceViewChunk.md)\>, [`SliceViewSourceOptions`](../interfaces/sliceview_base.SliceViewSourceOptions.md)\>, [`SliceViewChunkSource`](sliceview_frontend.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](sliceview_frontend.SliceViewChunk.md)\>\>\>\>

#### Inherited from

[SliceViewBase](sliceview_base.SliceViewBase.md).[visibleLayers](sliceview_base.SliceViewBase.md#visiblelayers)

#### Defined in

[src/neuroglancer/sliceview/base.ts:262](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L262)

___

### visibleSourcesStale

• **visibleSourcesStale**: `boolean` = `true`

#### Inherited from

[SliceViewBase](sliceview_base.SliceViewBase.md).[visibleSourcesStale](sliceview_base.SliceViewBase.md#visiblesourcesstale)

#### Defined in

[src/neuroglancer/sliceview/base.ts:263](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L263)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[SliceViewBase](sliceview_base.SliceViewBase.md).[wasDisposed](sliceview_base.SliceViewBase.md#wasdisposed)

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

[SliceViewBase](sliceview_base.SliceViewBase.md).[addCounterpartRef](sliceview_base.SliceViewBase.md#addcounterpartref)

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`FrontendSliceViewBase`](sliceview_frontend._internal_.FrontendSliceViewBase.md)

#### Returns

[`FrontendSliceViewBase`](sliceview_frontend._internal_.FrontendSliceViewBase.md)

#### Inherited from

[SliceViewBase](sliceview_base.SliceViewBase.md).[addRef](sliceview_base.SliceViewBase.md#addref)

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

[SliceViewBase](sliceview_base.SliceViewBase.md).[counterpartRefCountReachedZero](sliceview_base.SliceViewBase.md#counterpartrefcountreachedzero)

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L234)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[SliceViewBase](sliceview_base.SliceViewBase.md).[dispose](sliceview_base.SliceViewBase.md#dispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[SliceViewBase](sliceview_base.SliceViewBase.md).[disposed](sliceview_base.SliceViewBase.md#disposed)

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

[SliceViewBase](sliceview_base.SliceViewBase.md).[initializeCounterpart](sliceview_base.SliceViewBase.md#initializecounterpart)

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

[SliceViewBase](sliceview_base.SliceViewBase.md).[initializeSharedObject](sliceview_base.SliceViewBase.md#initializesharedobject)

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L175)

___

### invalidateVisibleChunks

▸ **invalidateVisibleChunks**(): `void`

#### Returns

`void`

#### Inherited from

[SliceViewBase](sliceview_base.SliceViewBase.md).[invalidateVisibleChunks](sliceview_base.SliceViewBase.md#invalidatevisiblechunks)

#### Defined in

[src/neuroglancer/sliceview/base.ts:280](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L280)

___

### invalidateVisibleSources

▸ **invalidateVisibleSources**(): `void`

#### Returns

`void`

#### Inherited from

[SliceViewBase](sliceview_base.SliceViewBase.md).[invalidateVisibleSources](sliceview_base.SliceViewBase.md#invalidatevisiblesources)

#### Defined in

[src/neuroglancer/sliceview/base.ts:276](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L276)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

[SliceViewBase](sliceview_base.SliceViewBase.md).[ownerDispose](sliceview_base.SliceViewBase.md#ownerdispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[SliceViewBase](sliceview_base.SliceViewBase.md).[refCountReachedZero](sliceview_base.SliceViewBase.md#refcountreachedzero)

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

[SliceViewBase](sliceview_base.SliceViewBase.md).[registerCancellable](sliceview_base.SliceViewBase.md#registercancellable)

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

[SliceViewBase](sliceview_base.SliceViewBase.md).[registerDisposer](sliceview_base.SliceViewBase.md#registerdisposer)

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

[SliceViewBase](sliceview_base.SliceViewBase.md).[registerEventListener](sliceview_base.SliceViewBase.md#registereventlistener)

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

[SliceViewBase](sliceview_base.SliceViewBase.md).[unregisterDisposer](sliceview_base.SliceViewBase.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)

___

### updateVisibleSources

▸ **updateVisibleSources**(): `void`

Computes the list of sources to use for each visible layer, based on the
current pixelSize.

#### Returns

`void`

#### Inherited from

[SliceViewBase](sliceview_base.SliceViewBase.md).[updateVisibleSources](sliceview_base.SliceViewBase.md#updatevisiblesources)

#### Defined in

[src/neuroglancer/sliceview/base.ts:286](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L286)
