[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/mesh/backend](../modules/neuroglancer_mesh_backend.md) / MeshLayer

# Class: MeshLayer

[neuroglancer/mesh/backend](../modules/neuroglancer_mesh_backend.md).MeshLayer

## Hierarchy

- `SegmentationLayerState`<(...`args`: `any`[]) => `__class`<(...`args`: `any`[]) => `__class`<typeof [`PerspectiveViewRenderLayerBackend`](neuroglancer_perspective_view_backend.PerspectiveViewRenderLayerBackend.md)\> & typeof [`PerspectiveViewRenderLayerBackend`](neuroglancer_perspective_view_backend.PerspectiveViewRenderLayerBackend.md)\> & (...`args`: `any`[]) => `__class`<typeof [`PerspectiveViewRenderLayerBackend`](neuroglancer_perspective_view_backend.PerspectiveViewRenderLayerBackend.md)\> & typeof [`PerspectiveViewRenderLayerBackend`](neuroglancer_perspective_view_backend.PerspectiveViewRenderLayerBackend.md), `this`\> & `__class`<(...`args`: `any`[]) => `__class`<typeof [`PerspectiveViewRenderLayerBackend`](neuroglancer_perspective_view_backend.PerspectiveViewRenderLayerBackend.md)\> & typeof [`PerspectiveViewRenderLayerBackend`](neuroglancer_perspective_view_backend.PerspectiveViewRenderLayerBackend.md), `this`\> & `__class`<typeof [`PerspectiveViewRenderLayerBackend`](neuroglancer_perspective_view_backend.PerspectiveViewRenderLayerBackend.md), `this`\> & [`PerspectiveViewRenderLayerBackend`](neuroglancer_perspective_view_backend.PerspectiveViewRenderLayerBackend.md)<`unknown`, `this`\>

  ↳ **`MeshLayer`**

## Table of contents

### Constructors

- [constructor](neuroglancer_mesh_backend.MeshLayer.md#constructor)

### Properties

- [RPC\_TYPE\_ID](neuroglancer_mesh_backend.MeshLayer.md#rpc_type_id)
- [attachments](neuroglancer_mesh_backend.MeshLayer.md#attachments)
- [chunkManager](neuroglancer_mesh_backend.MeshLayer.md#chunkmanager)
- [chunkManagerGeneration](neuroglancer_mesh_backend.MeshLayer.md#chunkmanagergeneration)
- [disposedStacks](neuroglancer_mesh_backend.MeshLayer.md#disposedstacks)
- [isOwner](neuroglancer_mesh_backend.MeshLayer.md#isowner)
- [numPrefetchChunksAvailable](neuroglancer_mesh_backend.MeshLayer.md#numprefetchchunksavailable)
- [numPrefetchChunksNeeded](neuroglancer_mesh_backend.MeshLayer.md#numprefetchchunksneeded)
- [numVisibleChunksAvailable](neuroglancer_mesh_backend.MeshLayer.md#numvisiblechunksavailable)
- [numVisibleChunksNeeded](neuroglancer_mesh_backend.MeshLayer.md#numvisiblechunksneeded)
- [refCount](neuroglancer_mesh_backend.MeshLayer.md#refcount)
- [referencedGeneration](neuroglancer_mesh_backend.MeshLayer.md#referencedgeneration)
- [renderScaleTarget](neuroglancer_mesh_backend.MeshLayer.md#renderscaletarget)
- [rpc](neuroglancer_mesh_backend.MeshLayer.md#rpc)
- [rpcId](neuroglancer_mesh_backend.MeshLayer.md#rpcid)
- [segmentEquivalences](neuroglancer_mesh_backend.MeshLayer.md#segmentequivalences)
- [source](neuroglancer_mesh_backend.MeshLayer.md#source)
- [temporarySegmentEquivalences](neuroglancer_mesh_backend.MeshLayer.md#temporarysegmentequivalences)
- [temporaryVisibleSegments](neuroglancer_mesh_backend.MeshLayer.md#temporaryvisiblesegments)
- [transform](neuroglancer_mesh_backend.MeshLayer.md#transform)
- [unreferencedGeneration](neuroglancer_mesh_backend.MeshLayer.md#unreferencedgeneration)
- [useTemporarySegmentEquivalences](neuroglancer_mesh_backend.MeshLayer.md#usetemporarysegmentequivalences)
- [useTemporaryVisibleSegments](neuroglancer_mesh_backend.MeshLayer.md#usetemporaryvisiblesegments)
- [visibility](neuroglancer_mesh_backend.MeshLayer.md#visibility)
- [visibleSegments](neuroglancer_mesh_backend.MeshLayer.md#visiblesegments)
- [wasDisposed](neuroglancer_mesh_backend.MeshLayer.md#wasdisposed)

### Methods

- [addCounterpartRef](neuroglancer_mesh_backend.MeshLayer.md#addcounterpartref)
- [addRef](neuroglancer_mesh_backend.MeshLayer.md#addref)
- [attach](neuroglancer_mesh_backend.MeshLayer.md#attach)
- [counterpartRefCountReachedZero](neuroglancer_mesh_backend.MeshLayer.md#counterpartrefcountreachedzero)
- [dispose](neuroglancer_mesh_backend.MeshLayer.md#dispose)
- [disposed](neuroglancer_mesh_backend.MeshLayer.md#disposed)
- [initializeCounterpart](neuroglancer_mesh_backend.MeshLayer.md#initializecounterpart)
- [initializeSharedObject](neuroglancer_mesh_backend.MeshLayer.md#initializesharedobject)
- [ownerDispose](neuroglancer_mesh_backend.MeshLayer.md#ownerdispose)
- [refCountReachedZero](neuroglancer_mesh_backend.MeshLayer.md#refcountreachedzero)
- [registerCancellable](neuroglancer_mesh_backend.MeshLayer.md#registercancellable)
- [registerDisposer](neuroglancer_mesh_backend.MeshLayer.md#registerdisposer)
- [registerEventListener](neuroglancer_mesh_backend.MeshLayer.md#registereventlistener)
- [unregisterDisposer](neuroglancer_mesh_backend.MeshLayer.md#unregisterdisposer)
- [updateChunkPriorities](neuroglancer_mesh_backend.MeshLayer.md#updatechunkpriorities)

## Constructors

### constructor

• **new MeshLayer**(`rpc`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](neuroglancer_worker_rpc.RPC.md) |
| `options` | `any` |

#### Overrides

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).constructor

#### Defined in

[src/neuroglancer/mesh/backend.ts:349](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/backend.ts#L349)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).RPC\_TYPE\_ID

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L245)

___

### attachments

• **attachments**: `Map`<[`PerspectiveViewBackend`](neuroglancer_perspective_view_backend.PerspectiveViewBackend.md), [`RenderLayerBackendAttachment`](neuroglancer_render_layer_backend.RenderLayerBackendAttachment.md)<[`RenderedViewBackend`](../interfaces/neuroglancer_render_layer_backend.RenderedViewBackend.md), `unknown`\>\>

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).attachments

#### Defined in

[src/neuroglancer/render_layer_backend.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/render_layer_backend.ts#L42)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](neuroglancer_chunk_manager_backend.ChunkManager.md)

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).chunkManager

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:1139](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L1139)

[src/neuroglancer/chunk_manager/backend.ts:1149](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L1149)

___

### chunkManagerGeneration

• **chunkManagerGeneration**: `number` = `-1`

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).chunkManagerGeneration

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:958](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L958)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).isOwner

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L171)

___

### numPrefetchChunksAvailable

• **numPrefetchChunksAvailable**: `number` = `0`

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).numPrefetchChunksAvailable

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:963](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L963)

___

### numPrefetchChunksNeeded

• **numPrefetchChunksNeeded**: `number` = `0`

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).numPrefetchChunksNeeded

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:962](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L962)

___

### numVisibleChunksAvailable

• **numVisibleChunksAvailable**: `number` = `0`

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).numVisibleChunksAvailable

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:961](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L961)

___

### numVisibleChunksNeeded

• **numVisibleChunksNeeded**: `number` = `0`

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).numVisibleChunksNeeded

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:960](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L960)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).referencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L173)

___

### renderScaleTarget

• **renderScaleTarget**: [`SharedWatchableValue`](neuroglancer_shared_watchable_value.SharedWatchableValue.md)<`number`\>

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).renderScaleTarget

#### Defined in

[src/neuroglancer/segmentation_display_state/backend.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/backend.ts#L52)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](neuroglancer_worker_rpc.RPC.md) = `null`

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).rpc

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).rpcId

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L170)

___

### segmentEquivalences

• **segmentEquivalences**: [`SharedDisjointUint64Sets`](neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md)

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).segmentEquivalences

#### Defined in

[src/neuroglancer/segmentation_display_state/backend.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/backend.ts#L46)

___

### source

• **source**: [`MeshSource`](neuroglancer_mesh_backend.MeshSource.md)

#### Defined in

[src/neuroglancer/mesh/backend.ts:348](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/backend.ts#L348)

___

### temporarySegmentEquivalences

• **temporarySegmentEquivalences**: [`SharedDisjointUint64Sets`](neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md)

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).temporarySegmentEquivalences

#### Defined in

[src/neuroglancer/segmentation_display_state/backend.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/backend.ts#L48)

___

### temporaryVisibleSegments

• **temporaryVisibleSegments**: [`Uint64Set`](neuroglancer_uint64_set.Uint64Set.md)

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).temporaryVisibleSegments

#### Defined in

[src/neuroglancer/segmentation_display_state/backend.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/backend.ts#L47)

___

### transform

• **transform**: [`SharedWatchableValue`](neuroglancer_shared_watchable_value.SharedWatchableValue.md)<[`RenderLayerTransformOrError`](../modules/neuroglancer_render_coordinate_transform.md#renderlayertransformorerror)\>

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).transform

#### Defined in

[src/neuroglancer/segmentation_display_state/backend.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/backend.ts#L51)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).unreferencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L172)

___

### useTemporarySegmentEquivalences

• **useTemporarySegmentEquivalences**: [`SharedWatchableValue`](neuroglancer_shared_watchable_value.SharedWatchableValue.md)<`boolean`\>

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).useTemporarySegmentEquivalences

#### Defined in

[src/neuroglancer/segmentation_display_state/backend.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/backend.ts#L50)

___

### useTemporaryVisibleSegments

• **useTemporaryVisibleSegments**: [`SharedWatchableValue`](neuroglancer_shared_watchable_value.SharedWatchableValue.md)<`boolean`\>

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).useTemporaryVisibleSegments

#### Defined in

[src/neuroglancer/segmentation_display_state/backend.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/backend.ts#L49)

___

### visibility

• **visibility**: [`SharedWatchableValue`](neuroglancer_shared_watchable_value.SharedWatchableValue.md)<`number`\>

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).visibility

#### Defined in

[src/neuroglancer/visibility_priority/backend.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/visibility_priority/backend.ts#L30)

___

### visibleSegments

• **visibleSegments**: [`Uint64Set`](neuroglancer_uint64_set.Uint64Set.md)

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).visibleSegments

#### Defined in

[src/neuroglancer/segmentation_display_state/backend.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/backend.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

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
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).addCounterpartRef

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`MeshLayer`](neuroglancer_mesh_backend.MeshLayer.md)

#### Returns

[`MeshLayer`](neuroglancer_mesh_backend.MeshLayer.md)

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).addRef

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### attach

▸ **attach**(`attachment`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attachment` | [`RenderLayerBackendAttachment`](neuroglancer_render_layer_backend.RenderLayerBackendAttachment.md)<[`PerspectiveViewBackend`](neuroglancer_perspective_view_backend.PerspectiveViewBackend.md), `unknown`\> |

#### Returns

`void`

#### Overrides

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).attach

#### Defined in

[src/neuroglancer/mesh/backend.ts:357](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/backend.ts#L357)

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
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).counterpartRefCountReachedZero

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L234)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).dispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).disposed

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L75)

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
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).initializeCounterpart

#### Defined in

[src/neuroglancer/worker_rpc.ts:182](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L182)

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
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).initializeSharedObject

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L175)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).ownerDispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).refCountReachedZero

#### Defined in

[src/neuroglancer/worker_rpc.ts:203](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L203)

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
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).registerCancellable

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L100)

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
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).registerDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L76)

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
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).registerEventListener

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L95)

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
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)

___

### updateChunkPriorities

▸ `Private` **updateChunkPriorities**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/mesh/backend.ts:367](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/backend.ts#L367)
