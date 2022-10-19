[neuroglancer](../README.md) / [Modules](../modules.md) / [sliceview/base](../modules/sliceview_base.md) / SliceViewBase

# Class: SliceViewBase<Source, RLayer, Transformed\>

[sliceview/base](../modules/sliceview_base.md).SliceViewBase

## Type parameters

| Name | Type |
| :------ | :------ |
| `Source` | extends [`SliceViewChunkSource`](../interfaces/sliceview_base.SliceViewChunkSource.md) = [`SliceViewChunkSource`](../interfaces/sliceview_base.SliceViewChunkSource.md) |
| `RLayer` | extends [`SliceViewRenderLayer`](../interfaces/sliceview_base.SliceViewRenderLayer.md) = [`SliceViewRenderLayer`](../interfaces/sliceview_base.SliceViewRenderLayer.md) |
| `Transformed` | extends [`TransformedSource`](../interfaces/sliceview_base.TransformedSource.md)<`RLayer`, `Source`\> = [`TransformedSource`](../interfaces/sliceview_base.TransformedSource.md)<`RLayer`, `Source`\> |

## Hierarchy

- [`SharedObject`](annotation_annotation_layer_state._internal_.SharedObject.md)

  ↳ **`SliceViewBase`**

  ↳↳ [`SliceViewCounterpartBase`](sliceview_backend._internal_.SliceViewCounterpartBase.md)

  ↳↳ [`FrontendSliceViewBase`](sliceview_frontend._internal_.FrontendSliceViewBase.md)

## Table of contents

### Constructors

- [constructor](sliceview_base.SliceViewBase.md#constructor)

### Properties

- [RPC\_TYPE\_ID](sliceview_base.SliceViewBase.md#rpc_type_id)
- [disposedStacks](sliceview_base.SliceViewBase.md#disposedstacks)
- [isOwner](sliceview_base.SliceViewBase.md#isowner)
- [projectionParameters](sliceview_base.SliceViewBase.md#projectionparameters)
- [refCount](sliceview_base.SliceViewBase.md#refcount)
- [referencedGeneration](sliceview_base.SliceViewBase.md#referencedgeneration)
- [rpc](sliceview_base.SliceViewBase.md#rpc)
- [rpcId](sliceview_base.SliceViewBase.md#rpcid)
- [unreferencedGeneration](sliceview_base.SliceViewBase.md#unreferencedgeneration)
- [visibleLayers](sliceview_base.SliceViewBase.md#visiblelayers)
- [visibleSourcesStale](sliceview_base.SliceViewBase.md#visiblesourcesstale)
- [wasDisposed](sliceview_base.SliceViewBase.md#wasdisposed)

### Methods

- [addCounterpartRef](sliceview_base.SliceViewBase.md#addcounterpartref)
- [addRef](sliceview_base.SliceViewBase.md#addref)
- [counterpartRefCountReachedZero](sliceview_base.SliceViewBase.md#counterpartrefcountreachedzero)
- [dispose](sliceview_base.SliceViewBase.md#dispose)
- [disposed](sliceview_base.SliceViewBase.md#disposed)
- [initializeCounterpart](sliceview_base.SliceViewBase.md#initializecounterpart)
- [initializeSharedObject](sliceview_base.SliceViewBase.md#initializesharedobject)
- [invalidateVisibleChunks](sliceview_base.SliceViewBase.md#invalidatevisiblechunks)
- [invalidateVisibleSources](sliceview_base.SliceViewBase.md#invalidatevisiblesources)
- [ownerDispose](sliceview_base.SliceViewBase.md#ownerdispose)
- [refCountReachedZero](sliceview_base.SliceViewBase.md#refcountreachedzero)
- [registerCancellable](sliceview_base.SliceViewBase.md#registercancellable)
- [registerDisposer](sliceview_base.SliceViewBase.md#registerdisposer)
- [registerEventListener](sliceview_base.SliceViewBase.md#registereventlistener)
- [unregisterDisposer](sliceview_base.SliceViewBase.md#unregisterdisposer)
- [updateVisibleSources](sliceview_base.SliceViewBase.md#updatevisiblesources)

## Constructors

### constructor

• **new SliceViewBase**<`Source`, `RLayer`, `Transformed`\>(`projectionParameters`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Source` | extends [`SliceViewChunkSource`](../interfaces/sliceview_base.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, `Source`\> = [`SliceViewChunkSource`](../interfaces/sliceview_base.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\> |
| `RLayer` | extends [`SliceViewRenderLayer`](../interfaces/sliceview_base.SliceViewRenderLayer.md) = [`SliceViewRenderLayer`](../interfaces/sliceview_base.SliceViewRenderLayer.md) |
| `Transformed` | extends [`TransformedSource`](../interfaces/sliceview_base.TransformedSource.md)<`RLayer`, `Source`, `Transformed`\> = [`TransformedSource`](../interfaces/sliceview_base.TransformedSource.md)<`RLayer`, `Source`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `projectionParameters` | [`WatchableValueChangeInterface`](../interfaces/perspective_view_panel._internal_.WatchableValueChangeInterface.md)<[`SliceViewProjectionParameters`](sliceview_base.SliceViewProjectionParameters.md)\> |

#### Overrides

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[constructor](annotation_annotation_layer_state._internal_.SharedObject.md#constructor)

#### Defined in

[src/neuroglancer/sliceview/base.ts:265](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L265)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[RPC_TYPE_ID](annotation_annotation_layer_state._internal_.SharedObject.md#rpc_type_id)

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L245)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[disposedStacks](annotation_annotation_layer_state._internal_.SharedObject.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[isOwner](annotation_annotation_layer_state._internal_.SharedObject.md#isowner)

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L171)

___

### projectionParameters

• **projectionParameters**: [`WatchableValueChangeInterface`](../interfaces/perspective_view_panel._internal_.WatchableValueChangeInterface.md)<[`SliceViewProjectionParameters`](sliceview_base.SliceViewProjectionParameters.md)\>

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[refCount](annotation_annotation_layer_state._internal_.SharedObject.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[referencedGeneration](annotation_annotation_layer_state._internal_.SharedObject.md#referencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](annotation_annotation_layer_state._internal_.RPC.md) = `null`

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[rpc](annotation_annotation_layer_state._internal_.SharedObject.md#rpc)

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[rpcId](annotation_annotation_layer_state._internal_.SharedObject.md#rpcid)

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L170)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[unreferencedGeneration](annotation_annotation_layer_state._internal_.SharedObject.md#unreferencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L172)

___

### visibleLayers

• **visibleLayers**: `Map`<`RLayer`, [`VisibleLayerSources`](../interfaces/sliceview_base.VisibleLayerSources.md)<`RLayer`, `Source`, `Transformed`\>\>

#### Defined in

[src/neuroglancer/sliceview/base.ts:262](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L262)

___

### visibleSourcesStale

• **visibleSourcesStale**: `boolean` = `true`

#### Defined in

[src/neuroglancer/sliceview/base.ts:263](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L263)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[wasDisposed](annotation_annotation_layer_state._internal_.SharedObject.md#wasdisposed)

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

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[addCounterpartRef](annotation_annotation_layer_state._internal_.SharedObject.md#addcounterpartref)

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`SliceViewBase`](sliceview_base.SliceViewBase.md)<`Source`, `RLayer`, `Transformed`\>

#### Returns

[`SliceViewBase`](sliceview_base.SliceViewBase.md)<`Source`, `RLayer`, `Transformed`\>

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[addRef](annotation_annotation_layer_state._internal_.SharedObject.md#addref)

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

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[counterpartRefCountReachedZero](annotation_annotation_layer_state._internal_.SharedObject.md#counterpartrefcountreachedzero)

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L234)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[dispose](annotation_annotation_layer_state._internal_.SharedObject.md#dispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[disposed](annotation_annotation_layer_state._internal_.SharedObject.md#disposed)

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

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[initializeCounterpart](annotation_annotation_layer_state._internal_.SharedObject.md#initializecounterpart)

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

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[initializeSharedObject](annotation_annotation_layer_state._internal_.SharedObject.md#initializesharedobject)

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L175)

___

### invalidateVisibleChunks

▸ **invalidateVisibleChunks**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/base.ts:280](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L280)

___

### invalidateVisibleSources

▸ **invalidateVisibleSources**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/base.ts:276](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L276)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[ownerDispose](annotation_annotation_layer_state._internal_.SharedObject.md#ownerdispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[refCountReachedZero](annotation_annotation_layer_state._internal_.SharedObject.md#refcountreachedzero)

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

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[registerCancellable](annotation_annotation_layer_state._internal_.SharedObject.md#registercancellable)

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

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[registerDisposer](annotation_annotation_layer_state._internal_.SharedObject.md#registerdisposer)

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

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[registerEventListener](annotation_annotation_layer_state._internal_.SharedObject.md#registereventlistener)

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

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[unregisterDisposer](annotation_annotation_layer_state._internal_.SharedObject.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)

___

### updateVisibleSources

▸ **updateVisibleSources**(): `void`

Computes the list of sources to use for each visible layer, based on the
current pixelSize.

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/base.ts:286](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L286)
