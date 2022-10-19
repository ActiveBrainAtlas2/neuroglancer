[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/backend](../modules/neuroglancer_sliceview_backend.md) / SliceViewBackend

# Class: SliceViewBackend

[neuroglancer/sliceview/backend](../modules/neuroglancer_sliceview_backend.md).SliceViewBackend

## Hierarchy

- [`SliceViewIntermediateBase`](../modules/neuroglancer_sliceview_backend._internal_.md#sliceviewintermediatebase)

  ↳ **`SliceViewBackend`**

## Table of contents

### Constructors

- [constructor](neuroglancer_sliceview_backend.SliceViewBackend.md#constructor)

### Properties

- [RPC\_TYPE\_ID](neuroglancer_sliceview_backend.SliceViewBackend.md#rpc_type_id)
- [chunkManager](neuroglancer_sliceview_backend.SliceViewBackend.md#chunkmanager)
- [disposedStacks](neuroglancer_sliceview_backend.SliceViewBackend.md#disposedstacks)
- [handleLayerChanged](neuroglancer_sliceview_backend.SliceViewBackend.md#handlelayerchanged)
- [isOwner](neuroglancer_sliceview_backend.SliceViewBackend.md#isowner)
- [projectionParameters](neuroglancer_sliceview_backend.SliceViewBackend.md#projectionparameters)
- [refCount](neuroglancer_sliceview_backend.SliceViewBackend.md#refcount)
- [referencedGeneration](neuroglancer_sliceview_backend.SliceViewBackend.md#referencedgeneration)
- [rpc](neuroglancer_sliceview_backend.SliceViewBackend.md#rpc)
- [rpcId](neuroglancer_sliceview_backend.SliceViewBackend.md#rpcid)
- [unreferencedGeneration](neuroglancer_sliceview_backend.SliceViewBackend.md#unreferencedgeneration)
- [velocityEstimator](neuroglancer_sliceview_backend.SliceViewBackend.md#velocityestimator)
- [visibility](neuroglancer_sliceview_backend.SliceViewBackend.md#visibility)
- [visibleLayers](neuroglancer_sliceview_backend.SliceViewBackend.md#visiblelayers)
- [visibleSourcesStale](neuroglancer_sliceview_backend.SliceViewBackend.md#visiblesourcesstale)
- [wasDisposed](neuroglancer_sliceview_backend.SliceViewBackend.md#wasdisposed)

### Methods

- [addCounterpartRef](neuroglancer_sliceview_backend.SliceViewBackend.md#addcounterpartref)
- [addRef](neuroglancer_sliceview_backend.SliceViewBackend.md#addref)
- [addVisibleLayer](neuroglancer_sliceview_backend.SliceViewBackend.md#addvisiblelayer)
- [counterpartRefCountReachedZero](neuroglancer_sliceview_backend.SliceViewBackend.md#counterpartrefcountreachedzero)
- [dispose](neuroglancer_sliceview_backend.SliceViewBackend.md#dispose)
- [disposed](neuroglancer_sliceview_backend.SliceViewBackend.md#disposed)
- [initializeCounterpart](neuroglancer_sliceview_backend.SliceViewBackend.md#initializecounterpart)
- [initializeSharedObject](neuroglancer_sliceview_backend.SliceViewBackend.md#initializesharedobject)
- [invalidateVisibleChunks](neuroglancer_sliceview_backend.SliceViewBackend.md#invalidatevisiblechunks)
- [invalidateVisibleSources](neuroglancer_sliceview_backend.SliceViewBackend.md#invalidatevisiblesources)
- [ownerDispose](neuroglancer_sliceview_backend.SliceViewBackend.md#ownerdispose)
- [refCountReachedZero](neuroglancer_sliceview_backend.SliceViewBackend.md#refcountreachedzero)
- [registerCancellable](neuroglancer_sliceview_backend.SliceViewBackend.md#registercancellable)
- [registerDisposer](neuroglancer_sliceview_backend.SliceViewBackend.md#registerdisposer)
- [registerEventListener](neuroglancer_sliceview_backend.SliceViewBackend.md#registereventlistener)
- [removeVisibleLayer](neuroglancer_sliceview_backend.SliceViewBackend.md#removevisiblelayer)
- [unregisterDisposer](neuroglancer_sliceview_backend.SliceViewBackend.md#unregisterdisposer)
- [updateVisibleChunks](neuroglancer_sliceview_backend.SliceViewBackend.md#updatevisiblechunks)
- [updateVisibleSources](neuroglancer_sliceview_backend.SliceViewBackend.md#updatevisiblesources)

## Constructors

### constructor

• **new SliceViewBackend**(`rpc`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](neuroglancer_worker_rpc.RPC.md) |
| `options` | `any` |

#### Overrides

SliceViewIntermediateBase.constructor

#### Defined in

[src/neuroglancer/sliceview/backend.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/backend.ts#L60)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

SliceViewIntermediateBase.RPC\_TYPE\_ID

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L245)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](neuroglancer_chunk_manager_backend.ChunkManager.md)

#### Inherited from

SliceViewIntermediateBase.chunkManager

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:1139](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L1139)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

SliceViewIntermediateBase.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### handleLayerChanged

• **handleLayerChanged**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/backend.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/backend.ts#L75)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

SliceViewIntermediateBase.isOwner

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L171)

___

### projectionParameters

• **projectionParameters**: [`WatchableValueChangeInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueChangeInterface.md)<[`SliceViewProjectionParameters`](neuroglancer_sliceview_base.SliceViewProjectionParameters.md)\>

#### Inherited from

SliceViewIntermediateBase.projectionParameters

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

SliceViewIntermediateBase.refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

SliceViewIntermediateBase.referencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](neuroglancer_worker_rpc.RPC.md) = `null`

#### Inherited from

SliceViewIntermediateBase.rpc

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

SliceViewIntermediateBase.rpcId

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L170)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

SliceViewIntermediateBase.unreferencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L172)

___

### velocityEstimator

• **velocityEstimator**: [`VelocityEstimator`](neuroglancer_util_velocity_estimation.VelocityEstimator.md)

#### Defined in

[src/neuroglancer/sliceview/backend.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/backend.ts#L59)

___

### visibility

• **visibility**: [`SharedWatchableValue`](neuroglancer_shared_watchable_value.SharedWatchableValue.md)<`number`\>

#### Inherited from

SliceViewIntermediateBase.visibility

#### Defined in

[src/neuroglancer/visibility_priority/backend.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/visibility_priority/backend.ts#L30)

___

### visibleLayers

• **visibleLayers**: `Map`<[`SliceViewRenderLayerBackend`](neuroglancer_sliceview_backend.SliceViewRenderLayerBackend.md), [`VisibleLayerSources`](../interfaces/neuroglancer_sliceview_base.VisibleLayerSources.md)<[`SliceViewRenderLayerBackend`](neuroglancer_sliceview_backend.SliceViewRenderLayerBackend.md), [`SliceViewChunkSourceBackend`](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md)<[`SliceViewChunkSpecification`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](neuroglancer_sliceview_backend.SliceViewChunk.md)\>, [`TransformedSource`](../interfaces/neuroglancer_sliceview_base.TransformedSource.md)<[`SliceViewRenderLayerBackend`](neuroglancer_sliceview_backend.SliceViewRenderLayerBackend.md), [`SliceViewChunkSourceBackend`](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md)<[`SliceViewChunkSpecification`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](neuroglancer_sliceview_backend.SliceViewChunk.md)\>\>\>\>

#### Inherited from

SliceViewIntermediateBase.visibleLayers

#### Defined in

[src/neuroglancer/sliceview/base.ts:262](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L262)

___

### visibleSourcesStale

• **visibleSourcesStale**: `boolean` = `true`

#### Inherited from

SliceViewIntermediateBase.visibleSourcesStale

#### Defined in

[src/neuroglancer/sliceview/base.ts:263](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L263)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

SliceViewIntermediateBase.wasDisposed

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

SliceViewIntermediateBase.addCounterpartRef

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`SliceViewBackend`](neuroglancer_sliceview_backend.SliceViewBackend.md)

#### Returns

[`SliceViewBackend`](neuroglancer_sliceview_backend.SliceViewBackend.md)

#### Inherited from

SliceViewIntermediateBase.addRef

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### addVisibleLayer

▸ **addVisibleLayer**(`layer`, `allSources`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`SliceViewRenderLayerBackend`](neuroglancer_sliceview_backend.SliceViewRenderLayerBackend.md) |
| `allSources` | [`TransformedSource`](../interfaces/neuroglancer_sliceview_base.TransformedSource.md)<[`SliceViewRenderLayerBackend`](neuroglancer_sliceview_backend.SliceViewRenderLayerBackend.md), [`SliceViewChunkSourceBackend`](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md)<[`SliceViewChunkSpecification`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](neuroglancer_sliceview_backend.SliceViewChunk.md)\>\>[][] |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/backend.ts:186](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/backend.ts#L186)

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

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L234)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

SliceViewIntermediateBase.dispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

SliceViewIntermediateBase.disposed

#### Defined in

[src/neuroglancer/sliceview/backend.ts:209](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/backend.ts#L209)

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

SliceViewIntermediateBase.initializeCounterpart

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

SliceViewIntermediateBase.initializeSharedObject

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L175)

___

### invalidateVisibleChunks

▸ **invalidateVisibleChunks**(): `void`

#### Returns

`void`

#### Overrides

SliceViewIntermediateBase.invalidateVisibleChunks

#### Defined in

[src/neuroglancer/sliceview/backend.ts:70](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/backend.ts#L70)

___

### invalidateVisibleSources

▸ **invalidateVisibleSources**(): `void`

#### Returns

`void`

#### Overrides

SliceViewIntermediateBase.invalidateVisibleSources

#### Defined in

[src/neuroglancer/sliceview/backend.ts:216](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/backend.ts#L216)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

SliceViewIntermediateBase.ownerDispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

SliceViewIntermediateBase.refCountReachedZero

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

SliceViewIntermediateBase.registerCancellable

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

SliceViewIntermediateBase.registerDisposer

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

SliceViewIntermediateBase.registerEventListener

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L95)

___

### removeVisibleLayer

▸ **removeVisibleLayer**(`layer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`SliceViewRenderLayerBackend`](neuroglancer_sliceview_backend.SliceViewRenderLayerBackend.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/backend.ts:176](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/backend.ts#L176)

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

SliceViewIntermediateBase.unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)

___

### updateVisibleChunks

▸ **updateVisibleChunks**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/backend.ts:79](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/backend.ts#L79)

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

[src/neuroglancer/sliceview/base.ts:286](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L286)
