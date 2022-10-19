[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/skeleton/backend](../modules/neuroglancer_skeleton_backend.md) / SkeletonLayer

# Class: SkeletonLayer

[neuroglancer/skeleton/backend](../modules/neuroglancer_skeleton_backend.md).SkeletonLayer

## Hierarchy

- `SegmentationLayerState`<{ `prototype`: `__class`<`any`\>  } & { `prototype`: `__class`<`any`\>  } & typeof [`ChunkRenderLayerBackend`](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md), `this`\> & `__class`<{ `prototype`: `__class`<`any`\>  } & typeof [`ChunkRenderLayerBackend`](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md), `this`\> & `__class`<typeof [`ChunkRenderLayerBackend`](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md), `this`\> & [`ChunkRenderLayerBackend`](neuroglancer_chunk_manager_backend.ChunkRenderLayerBackend.md)<`this`\>

  ↳ **`SkeletonLayer`**

## Table of contents

### Constructors

- [constructor](neuroglancer_skeleton_backend.SkeletonLayer.md#constructor)

### Properties

- [RPC\_TYPE\_ID](neuroglancer_skeleton_backend.SkeletonLayer.md#rpc_type_id)
- [chunkManager](neuroglancer_skeleton_backend.SkeletonLayer.md#chunkmanager)
- [chunkManagerGeneration](neuroglancer_skeleton_backend.SkeletonLayer.md#chunkmanagergeneration)
- [disposedStacks](neuroglancer_skeleton_backend.SkeletonLayer.md#disposedstacks)
- [isOwner](neuroglancer_skeleton_backend.SkeletonLayer.md#isowner)
- [numPrefetchChunksAvailable](neuroglancer_skeleton_backend.SkeletonLayer.md#numprefetchchunksavailable)
- [numPrefetchChunksNeeded](neuroglancer_skeleton_backend.SkeletonLayer.md#numprefetchchunksneeded)
- [numVisibleChunksAvailable](neuroglancer_skeleton_backend.SkeletonLayer.md#numvisiblechunksavailable)
- [numVisibleChunksNeeded](neuroglancer_skeleton_backend.SkeletonLayer.md#numvisiblechunksneeded)
- [refCount](neuroglancer_skeleton_backend.SkeletonLayer.md#refcount)
- [referencedGeneration](neuroglancer_skeleton_backend.SkeletonLayer.md#referencedgeneration)
- [renderScaleTarget](neuroglancer_skeleton_backend.SkeletonLayer.md#renderscaletarget)
- [rpc](neuroglancer_skeleton_backend.SkeletonLayer.md#rpc)
- [rpcId](neuroglancer_skeleton_backend.SkeletonLayer.md#rpcid)
- [segmentEquivalences](neuroglancer_skeleton_backend.SkeletonLayer.md#segmentequivalences)
- [source](neuroglancer_skeleton_backend.SkeletonLayer.md#source)
- [temporarySegmentEquivalences](neuroglancer_skeleton_backend.SkeletonLayer.md#temporarysegmentequivalences)
- [temporaryVisibleSegments](neuroglancer_skeleton_backend.SkeletonLayer.md#temporaryvisiblesegments)
- [transform](neuroglancer_skeleton_backend.SkeletonLayer.md#transform)
- [unreferencedGeneration](neuroglancer_skeleton_backend.SkeletonLayer.md#unreferencedgeneration)
- [useTemporarySegmentEquivalences](neuroglancer_skeleton_backend.SkeletonLayer.md#usetemporarysegmentequivalences)
- [useTemporaryVisibleSegments](neuroglancer_skeleton_backend.SkeletonLayer.md#usetemporaryvisiblesegments)
- [visibility](neuroglancer_skeleton_backend.SkeletonLayer.md#visibility)
- [visibleSegments](neuroglancer_skeleton_backend.SkeletonLayer.md#visiblesegments)
- [wasDisposed](neuroglancer_skeleton_backend.SkeletonLayer.md#wasdisposed)

### Methods

- [addCounterpartRef](neuroglancer_skeleton_backend.SkeletonLayer.md#addcounterpartref)
- [addRef](neuroglancer_skeleton_backend.SkeletonLayer.md#addref)
- [counterpartRefCountReachedZero](neuroglancer_skeleton_backend.SkeletonLayer.md#counterpartrefcountreachedzero)
- [dispose](neuroglancer_skeleton_backend.SkeletonLayer.md#dispose)
- [disposed](neuroglancer_skeleton_backend.SkeletonLayer.md#disposed)
- [initializeCounterpart](neuroglancer_skeleton_backend.SkeletonLayer.md#initializecounterpart)
- [initializeSharedObject](neuroglancer_skeleton_backend.SkeletonLayer.md#initializesharedobject)
- [ownerDispose](neuroglancer_skeleton_backend.SkeletonLayer.md#ownerdispose)
- [refCountReachedZero](neuroglancer_skeleton_backend.SkeletonLayer.md#refcountreachedzero)
- [registerCancellable](neuroglancer_skeleton_backend.SkeletonLayer.md#registercancellable)
- [registerDisposer](neuroglancer_skeleton_backend.SkeletonLayer.md#registerdisposer)
- [registerEventListener](neuroglancer_skeleton_backend.SkeletonLayer.md#registereventlistener)
- [unregisterDisposer](neuroglancer_skeleton_backend.SkeletonLayer.md#unregisterdisposer)
- [updateChunkPriorities](neuroglancer_skeleton_backend.SkeletonLayer.md#updatechunkpriorities)

## Constructors

### constructor

• **new SkeletonLayer**(`rpc`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](neuroglancer_worker_rpc.RPC.md) |
| `options` | `any` |

#### Overrides

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(ChunkRenderLayerBackend))).constructor

#### Defined in

[src/neuroglancer/skeleton/backend.ts:121](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/backend.ts#L121)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(ChunkRenderLayerBackend))).RPC\_TYPE\_ID

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L245)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](neuroglancer_chunk_manager_backend.ChunkManager.md)

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(ChunkRenderLayerBackend))).chunkManager

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:1139](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L1139)

___

### chunkManagerGeneration

• **chunkManagerGeneration**: `number` = `-1`

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(ChunkRenderLayerBackend))).chunkManagerGeneration

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:958](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L958)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(ChunkRenderLayerBackend))).disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(ChunkRenderLayerBackend))).isOwner

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L171)

___

### numPrefetchChunksAvailable

• **numPrefetchChunksAvailable**: `number` = `0`

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(ChunkRenderLayerBackend))).numPrefetchChunksAvailable

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:963](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L963)

___

### numPrefetchChunksNeeded

• **numPrefetchChunksNeeded**: `number` = `0`

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(ChunkRenderLayerBackend))).numPrefetchChunksNeeded

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:962](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L962)

___

### numVisibleChunksAvailable

• **numVisibleChunksAvailable**: `number` = `0`

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(ChunkRenderLayerBackend))).numVisibleChunksAvailable

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:961](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L961)

___

### numVisibleChunksNeeded

• **numVisibleChunksNeeded**: `number` = `0`

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(ChunkRenderLayerBackend))).numVisibleChunksNeeded

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:960](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L960)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(ChunkRenderLayerBackend))).refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(ChunkRenderLayerBackend))).referencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L173)

___

### renderScaleTarget

• **renderScaleTarget**: [`SharedWatchableValue`](neuroglancer_shared_watchable_value.SharedWatchableValue.md)<`number`\>

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(ChunkRenderLayerBackend))).renderScaleTarget

#### Defined in

[src/neuroglancer/segmentation_display_state/backend.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/backend.ts#L52)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](neuroglancer_worker_rpc.RPC.md) = `null`

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(ChunkRenderLayerBackend))).rpc

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(ChunkRenderLayerBackend))).rpcId

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L170)

___

### segmentEquivalences

• **segmentEquivalences**: [`SharedDisjointUint64Sets`](neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md)

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(ChunkRenderLayerBackend))).segmentEquivalences

#### Defined in

[src/neuroglancer/segmentation_display_state/backend.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/backend.ts#L46)

___

### source

• **source**: [`SkeletonSource`](neuroglancer_skeleton_backend.SkeletonSource.md)

#### Defined in

[src/neuroglancer/skeleton/backend.ts:119](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/backend.ts#L119)

___

### temporarySegmentEquivalences

• **temporarySegmentEquivalences**: [`SharedDisjointUint64Sets`](neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md)

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(ChunkRenderLayerBackend))).temporarySegmentEquivalences

#### Defined in

[src/neuroglancer/segmentation_display_state/backend.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/backend.ts#L48)

___

### temporaryVisibleSegments

• **temporaryVisibleSegments**: [`Uint64Set`](neuroglancer_uint64_set.Uint64Set.md)

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(ChunkRenderLayerBackend))).temporaryVisibleSegments

#### Defined in

[src/neuroglancer/segmentation_display_state/backend.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/backend.ts#L47)

___

### transform

• **transform**: [`SharedWatchableValue`](neuroglancer_shared_watchable_value.SharedWatchableValue.md)<[`RenderLayerTransformOrError`](../modules/neuroglancer_render_coordinate_transform.md#renderlayertransformorerror)\>

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(ChunkRenderLayerBackend))).transform

#### Defined in

[src/neuroglancer/segmentation_display_state/backend.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/backend.ts#L51)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(ChunkRenderLayerBackend))).unreferencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L172)

___

### useTemporarySegmentEquivalences

• **useTemporarySegmentEquivalences**: [`SharedWatchableValue`](neuroglancer_shared_watchable_value.SharedWatchableValue.md)<`boolean`\>

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(ChunkRenderLayerBackend))).useTemporarySegmentEquivalences

#### Defined in

[src/neuroglancer/segmentation_display_state/backend.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/backend.ts#L50)

___

### useTemporaryVisibleSegments

• **useTemporaryVisibleSegments**: [`SharedWatchableValue`](neuroglancer_shared_watchable_value.SharedWatchableValue.md)<`boolean`\>

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(ChunkRenderLayerBackend))).useTemporaryVisibleSegments

#### Defined in

[src/neuroglancer/segmentation_display_state/backend.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/backend.ts#L49)

___

### visibility

• **visibility**: [`SharedWatchableValue`](neuroglancer_shared_watchable_value.SharedWatchableValue.md)<`number`\>

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(ChunkRenderLayerBackend))).visibility

#### Defined in

[src/neuroglancer/visibility_priority/backend.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/visibility_priority/backend.ts#L30)

___

### visibleSegments

• **visibleSegments**: [`Uint64Set`](neuroglancer_uint64_set.Uint64Set.md)

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(ChunkRenderLayerBackend))).visibleSegments

#### Defined in

[src/neuroglancer/segmentation_display_state/backend.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/backend.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(ChunkRenderLayerBackend))).wasDisposed

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

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(ChunkRenderLayerBackend))).addCounterpartRef

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`SkeletonLayer`](neuroglancer_skeleton_backend.SkeletonLayer.md)

#### Returns

[`SkeletonLayer`](neuroglancer_skeleton_backend.SkeletonLayer.md)

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(ChunkRenderLayerBackend))).addRef

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

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(ChunkRenderLayerBackend))).counterpartRefCountReachedZero

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L234)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(ChunkRenderLayerBackend))).dispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(ChunkRenderLayerBackend))).disposed

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

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(ChunkRenderLayerBackend))).initializeCounterpart

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

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(ChunkRenderLayerBackend))).initializeSharedObject

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L175)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(ChunkRenderLayerBackend))).ownerDispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(ChunkRenderLayerBackend))).refCountReachedZero

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

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(ChunkRenderLayerBackend))).registerCancellable

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

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(ChunkRenderLayerBackend))).registerDisposer

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

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(ChunkRenderLayerBackend))).registerEventListener

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

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(ChunkRenderLayerBackend))).unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)

___

### updateChunkPriorities

▸ `Private` **updateChunkPriorities**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/skeleton/backend.ts:129](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/backend.ts#L129)
