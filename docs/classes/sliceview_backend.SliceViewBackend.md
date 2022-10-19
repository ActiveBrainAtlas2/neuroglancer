[neuroglancer](../README.md) / [Modules](../modules.md) / [sliceview/backend](../modules/sliceview_backend.md) / SliceViewBackend

# Class: SliceViewBackend

[sliceview/backend](../modules/sliceview_backend.md).SliceViewBackend

## Hierarchy

- [`SliceViewIntermediateBase`](../modules/sliceview_backend._internal_.md#sliceviewintermediatebase)

  ↳ **`SliceViewBackend`**

## Table of contents

### Constructors

- [constructor](sliceview_backend.SliceViewBackend.md#constructor)

### Properties

- [RPC\_TYPE\_ID](sliceview_backend.SliceViewBackend.md#rpc_type_id)
- [chunkManager](sliceview_backend.SliceViewBackend.md#chunkmanager)
- [disposedStacks](sliceview_backend.SliceViewBackend.md#disposedstacks)
- [handleLayerChanged](sliceview_backend.SliceViewBackend.md#handlelayerchanged)
- [isOwner](sliceview_backend.SliceViewBackend.md#isowner)
- [projectionParameters](sliceview_backend.SliceViewBackend.md#projectionparameters)
- [refCount](sliceview_backend.SliceViewBackend.md#refcount)
- [referencedGeneration](sliceview_backend.SliceViewBackend.md#referencedgeneration)
- [rpc](sliceview_backend.SliceViewBackend.md#rpc)
- [rpcId](sliceview_backend.SliceViewBackend.md#rpcid)
- [unreferencedGeneration](sliceview_backend.SliceViewBackend.md#unreferencedgeneration)
- [velocityEstimator](sliceview_backend.SliceViewBackend.md#velocityestimator)
- [visibility](sliceview_backend.SliceViewBackend.md#visibility)
- [visibleLayers](sliceview_backend.SliceViewBackend.md#visiblelayers)
- [visibleSourcesStale](sliceview_backend.SliceViewBackend.md#visiblesourcesstale)
- [wasDisposed](sliceview_backend.SliceViewBackend.md#wasdisposed)

### Methods

- [addCounterpartRef](sliceview_backend.SliceViewBackend.md#addcounterpartref)
- [addRef](sliceview_backend.SliceViewBackend.md#addref)
- [addVisibleLayer](sliceview_backend.SliceViewBackend.md#addvisiblelayer)
- [counterpartRefCountReachedZero](sliceview_backend.SliceViewBackend.md#counterpartrefcountreachedzero)
- [dispose](sliceview_backend.SliceViewBackend.md#dispose)
- [disposed](sliceview_backend.SliceViewBackend.md#disposed)
- [initializeCounterpart](sliceview_backend.SliceViewBackend.md#initializecounterpart)
- [initializeSharedObject](sliceview_backend.SliceViewBackend.md#initializesharedobject)
- [invalidateVisibleChunks](sliceview_backend.SliceViewBackend.md#invalidatevisiblechunks)
- [invalidateVisibleSources](sliceview_backend.SliceViewBackend.md#invalidatevisiblesources)
- [ownerDispose](sliceview_backend.SliceViewBackend.md#ownerdispose)
- [refCountReachedZero](sliceview_backend.SliceViewBackend.md#refcountreachedzero)
- [registerCancellable](sliceview_backend.SliceViewBackend.md#registercancellable)
- [registerDisposer](sliceview_backend.SliceViewBackend.md#registerdisposer)
- [registerEventListener](sliceview_backend.SliceViewBackend.md#registereventlistener)
- [removeVisibleLayer](sliceview_backend.SliceViewBackend.md#removevisiblelayer)
- [unregisterDisposer](sliceview_backend.SliceViewBackend.md#unregisterdisposer)
- [updateVisibleChunks](sliceview_backend.SliceViewBackend.md#updatevisiblechunks)
- [updateVisibleSources](sliceview_backend.SliceViewBackend.md#updatevisiblesources)

## Constructors

### constructor

• **new SliceViewBackend**(`rpc`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](annotation_annotation_layer_state._internal_.RPC.md) |
| `options` | `any` |

#### Overrides

SliceViewIntermediateBase.constructor

#### Defined in

[src/neuroglancer/sliceview/backend.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/backend.ts#L60)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

SliceViewIntermediateBase.RPC\_TYPE\_ID

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L245)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](chunk_manager_backend.ChunkManager.md)

#### Inherited from

SliceViewIntermediateBase.chunkManager

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:1139](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L1139)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

SliceViewIntermediateBase.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### handleLayerChanged

• **handleLayerChanged**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/backend.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/backend.ts#L75)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

SliceViewIntermediateBase.isOwner

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L171)

___

### projectionParameters

• **projectionParameters**: [`WatchableValueChangeInterface`](../interfaces/perspective_view_panel._internal_.WatchableValueChangeInterface.md)<[`SliceViewProjectionParameters`](sliceview_base.SliceViewProjectionParameters.md)\>

#### Inherited from

SliceViewIntermediateBase.projectionParameters

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

SliceViewIntermediateBase.refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

SliceViewIntermediateBase.referencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](annotation_annotation_layer_state._internal_.RPC.md) = `null`

#### Inherited from

SliceViewIntermediateBase.rpc

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

SliceViewIntermediateBase.rpcId

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L170)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

SliceViewIntermediateBase.unreferencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L172)

___

### velocityEstimator

• **velocityEstimator**: [`VelocityEstimator`](util_velocity_estimation.VelocityEstimator.md)

#### Defined in

[src/neuroglancer/sliceview/backend.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/backend.ts#L59)

___

### visibility

• **visibility**: [`SharedWatchableValue`](chunk_manager_backend._internal_.SharedWatchableValue.md)<`number`\>

#### Inherited from

SliceViewIntermediateBase.visibility

#### Defined in

[src/neuroglancer/visibility_priority/backend.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/visibility_priority/backend.ts#L30)

___

### visibleLayers

• **visibleLayers**: `Map`<[`SliceViewRenderLayerBackend`](sliceview_backend.SliceViewRenderLayerBackend.md), [`VisibleLayerSources`](../interfaces/sliceview_base.VisibleLayerSources.md)<[`SliceViewRenderLayerBackend`](sliceview_backend.SliceViewRenderLayerBackend.md), [`SliceViewChunkSourceBackend`](sliceview_backend.SliceViewChunkSourceBackend.md)<[`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](sliceview_backend.SliceViewChunk.md)\>, [`TransformedSource`](../interfaces/sliceview_base.TransformedSource.md)<[`SliceViewRenderLayerBackend`](sliceview_backend.SliceViewRenderLayerBackend.md), [`SliceViewChunkSourceBackend`](sliceview_backend.SliceViewChunkSourceBackend.md)<[`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](sliceview_backend.SliceViewChunk.md)\>\>\>\>

#### Inherited from

SliceViewIntermediateBase.visibleLayers

#### Defined in

[src/neuroglancer/sliceview/base.ts:262](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L262)

___

### visibleSourcesStale

• **visibleSourcesStale**: `boolean` = `true`

#### Inherited from

SliceViewIntermediateBase.visibleSourcesStale

#### Defined in

[src/neuroglancer/sliceview/base.ts:263](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L263)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

SliceViewIntermediateBase.wasDisposed

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

SliceViewIntermediateBase.addCounterpartRef

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`SliceViewBackend`](sliceview_backend.SliceViewBackend.md)

#### Returns

[`SliceViewBackend`](sliceview_backend.SliceViewBackend.md)

#### Inherited from

SliceViewIntermediateBase.addRef

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### addVisibleLayer

▸ **addVisibleLayer**(`layer`, `allSources`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`SliceViewRenderLayerBackend`](sliceview_backend.SliceViewRenderLayerBackend.md) |
| `allSources` | [`TransformedSource`](../interfaces/sliceview_base.TransformedSource.md)<[`SliceViewRenderLayerBackend`](sliceview_backend.SliceViewRenderLayerBackend.md), [`SliceViewChunkSourceBackend`](sliceview_backend.SliceViewChunkSourceBackend.md)<[`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](sliceview_backend.SliceViewChunk.md)\>\>[][] |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/backend.ts:186](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/backend.ts#L186)

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

SliceViewIntermediateBase.counterpartRefCountReachedZero

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L234)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

SliceViewIntermediateBase.dispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

SliceViewIntermediateBase.disposed

#### Defined in

[src/neuroglancer/sliceview/backend.ts:209](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/backend.ts#L209)

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

SliceViewIntermediateBase.initializeCounterpart

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

SliceViewIntermediateBase.initializeSharedObject

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L175)

___

### invalidateVisibleChunks

▸ **invalidateVisibleChunks**(): `void`

#### Returns

`void`

#### Overrides

SliceViewIntermediateBase.invalidateVisibleChunks

#### Defined in

[src/neuroglancer/sliceview/backend.ts:70](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/backend.ts#L70)

___

### invalidateVisibleSources

▸ **invalidateVisibleSources**(): `void`

#### Returns

`void`

#### Overrides

SliceViewIntermediateBase.invalidateVisibleSources

#### Defined in

[src/neuroglancer/sliceview/backend.ts:216](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/backend.ts#L216)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

SliceViewIntermediateBase.ownerDispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

SliceViewIntermediateBase.refCountReachedZero

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

SliceViewIntermediateBase.registerCancellable

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

SliceViewIntermediateBase.registerDisposer

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

SliceViewIntermediateBase.registerEventListener

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

___

### removeVisibleLayer

▸ **removeVisibleLayer**(`layer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`SliceViewRenderLayerBackend`](sliceview_backend.SliceViewRenderLayerBackend.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/backend.ts:176](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/backend.ts#L176)

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

SliceViewIntermediateBase.unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)

___

### updateVisibleChunks

▸ **updateVisibleChunks**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/backend.ts:79](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/backend.ts#L79)

___

### updateVisibleSources

▸ **updateVisibleSources**(): `void`

Computes the list of sources to use for each visible layer, based on the
current pixelSize.

#### Returns

`void`

#### Inherited from

SliceViewIntermediateBase.updateVisibleSources

#### Defined in

[src/neuroglancer/sliceview/base.ts:286](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L286)
