[neuroglancer](../README.md) / [Modules](../modules.md) / [mesh/backend](../modules/mesh_backend.md) / MeshLayer

# Class: MeshLayer

[mesh/backend](../modules/mesh_backend.md).MeshLayer

## Hierarchy

- `SegmentationLayerState`<{ `prototype`: `__class`<`any`\>  } & { `prototype`: `__class`<`any`\>  } & typeof [`PerspectiveViewRenderLayerBackend`](perspective_view_backend.PerspectiveViewRenderLayerBackend.md), `this`\> & `__class`<{ `prototype`: `__class`<`any`\>  } & typeof [`PerspectiveViewRenderLayerBackend`](perspective_view_backend.PerspectiveViewRenderLayerBackend.md), `this`\> & `__class`<typeof [`PerspectiveViewRenderLayerBackend`](perspective_view_backend.PerspectiveViewRenderLayerBackend.md), `this`\> & [`PerspectiveViewRenderLayerBackend`](perspective_view_backend.PerspectiveViewRenderLayerBackend.md)<`unknown`, `this`\>

  ↳ **`MeshLayer`**

## Table of contents

### Constructors

- [constructor](mesh_backend.MeshLayer.md#constructor)

### Properties

- [RPC\_TYPE\_ID](mesh_backend.MeshLayer.md#rpc_type_id)
- [attachments](mesh_backend.MeshLayer.md#attachments)
- [chunkManager](mesh_backend.MeshLayer.md#chunkmanager)
- [chunkManagerGeneration](mesh_backend.MeshLayer.md#chunkmanagergeneration)
- [disposedStacks](mesh_backend.MeshLayer.md#disposedstacks)
- [isOwner](mesh_backend.MeshLayer.md#isowner)
- [numPrefetchChunksAvailable](mesh_backend.MeshLayer.md#numprefetchchunksavailable)
- [numPrefetchChunksNeeded](mesh_backend.MeshLayer.md#numprefetchchunksneeded)
- [numVisibleChunksAvailable](mesh_backend.MeshLayer.md#numvisiblechunksavailable)
- [numVisibleChunksNeeded](mesh_backend.MeshLayer.md#numvisiblechunksneeded)
- [refCount](mesh_backend.MeshLayer.md#refcount)
- [referencedGeneration](mesh_backend.MeshLayer.md#referencedgeneration)
- [renderScaleTarget](mesh_backend.MeshLayer.md#renderscaletarget)
- [rpc](mesh_backend.MeshLayer.md#rpc)
- [rpcId](mesh_backend.MeshLayer.md#rpcid)
- [segmentEquivalences](mesh_backend.MeshLayer.md#segmentequivalences)
- [source](mesh_backend.MeshLayer.md#source)
- [temporarySegmentEquivalences](mesh_backend.MeshLayer.md#temporarysegmentequivalences)
- [temporaryVisibleSegments](mesh_backend.MeshLayer.md#temporaryvisiblesegments)
- [transform](mesh_backend.MeshLayer.md#transform)
- [unreferencedGeneration](mesh_backend.MeshLayer.md#unreferencedgeneration)
- [useTemporarySegmentEquivalences](mesh_backend.MeshLayer.md#usetemporarysegmentequivalences)
- [useTemporaryVisibleSegments](mesh_backend.MeshLayer.md#usetemporaryvisiblesegments)
- [visibility](mesh_backend.MeshLayer.md#visibility)
- [visibleSegments](mesh_backend.MeshLayer.md#visiblesegments)
- [wasDisposed](mesh_backend.MeshLayer.md#wasdisposed)

### Methods

- [addCounterpartRef](mesh_backend.MeshLayer.md#addcounterpartref)
- [addRef](mesh_backend.MeshLayer.md#addref)
- [attach](mesh_backend.MeshLayer.md#attach)
- [counterpartRefCountReachedZero](mesh_backend.MeshLayer.md#counterpartrefcountreachedzero)
- [dispose](mesh_backend.MeshLayer.md#dispose)
- [disposed](mesh_backend.MeshLayer.md#disposed)
- [initializeCounterpart](mesh_backend.MeshLayer.md#initializecounterpart)
- [initializeSharedObject](mesh_backend.MeshLayer.md#initializesharedobject)
- [ownerDispose](mesh_backend.MeshLayer.md#ownerdispose)
- [refCountReachedZero](mesh_backend.MeshLayer.md#refcountreachedzero)
- [registerCancellable](mesh_backend.MeshLayer.md#registercancellable)
- [registerDisposer](mesh_backend.MeshLayer.md#registerdisposer)
- [registerEventListener](mesh_backend.MeshLayer.md#registereventlistener)
- [unregisterDisposer](mesh_backend.MeshLayer.md#unregisterdisposer)
- [updateChunkPriorities](mesh_backend.MeshLayer.md#updatechunkpriorities)

## Constructors

### constructor

• **new MeshLayer**(`rpc`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](annotation_annotation_layer_state._internal_.RPC.md) |
| `options` | `any` |

#### Overrides

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).constructor

#### Defined in

[src/neuroglancer/mesh/backend.ts:349](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/backend.ts#L349)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).RPC\_TYPE\_ID

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L245)

___

### attachments

• **attachments**: `Map`<[`PerspectiveViewBackend`](perspective_view_backend.PerspectiveViewBackend.md), [`RenderLayerBackendAttachment`](mesh_backend._internal_.RenderLayerBackendAttachment.md)<[`RenderedViewBackend`](../interfaces/mesh_backend._internal_.RenderedViewBackend.md), `unknown`\>\>

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).attachments

#### Defined in

[src/neuroglancer/render_layer_backend.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/render_layer_backend.ts#L42)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](chunk_manager_backend.ChunkManager.md)

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).chunkManager

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:1139](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L1139)

___

### chunkManagerGeneration

• **chunkManagerGeneration**: `number` = `-1`

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).chunkManagerGeneration

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:958](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L958)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).isOwner

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L171)

___

### numPrefetchChunksAvailable

• **numPrefetchChunksAvailable**: `number` = `0`

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).numPrefetchChunksAvailable

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:963](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L963)

___

### numPrefetchChunksNeeded

• **numPrefetchChunksNeeded**: `number` = `0`

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).numPrefetchChunksNeeded

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:962](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L962)

___

### numVisibleChunksAvailable

• **numVisibleChunksAvailable**: `number` = `0`

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).numVisibleChunksAvailable

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:961](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L961)

___

### numVisibleChunksNeeded

• **numVisibleChunksNeeded**: `number` = `0`

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).numVisibleChunksNeeded

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:960](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L960)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).referencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L173)

___

### renderScaleTarget

• **renderScaleTarget**: [`SharedWatchableValue`](chunk_manager_backend._internal_.SharedWatchableValue.md)<`number`\>

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).renderScaleTarget

#### Defined in

[src/neuroglancer/segmentation_display_state/backend.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/backend.ts#L52)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](annotation_annotation_layer_state._internal_.RPC.md) = `null`

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).rpc

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).rpcId

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L170)

___

### segmentEquivalences

• **segmentEquivalences**: [`SharedDisjointUint64Sets`](mesh_backend._internal_.SharedDisjointUint64Sets.md)

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).segmentEquivalences

#### Defined in

[src/neuroglancer/segmentation_display_state/backend.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/backend.ts#L46)

___

### source

• **source**: [`MeshSource`](mesh_backend.MeshSource.md)

#### Defined in

[src/neuroglancer/mesh/backend.ts:348](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/backend.ts#L348)

___

### temporarySegmentEquivalences

• **temporarySegmentEquivalences**: [`SharedDisjointUint64Sets`](mesh_backend._internal_.SharedDisjointUint64Sets.md)

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).temporarySegmentEquivalences

#### Defined in

[src/neuroglancer/segmentation_display_state/backend.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/backend.ts#L48)

___

### temporaryVisibleSegments

• **temporaryVisibleSegments**: [`Uint64Set`](mesh_backend._internal_.Uint64Set.md)

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).temporaryVisibleSegments

#### Defined in

[src/neuroglancer/segmentation_display_state/backend.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/backend.ts#L47)

___

### transform

• **transform**: [`SharedWatchableValue`](chunk_manager_backend._internal_.SharedWatchableValue.md)<[`RenderLayerTransformOrError`](../modules/annotation_annotation_layer_state._internal_.md#renderlayertransformorerror)\>

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).transform

#### Defined in

[src/neuroglancer/segmentation_display_state/backend.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/backend.ts#L51)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).unreferencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L172)

___

### useTemporarySegmentEquivalences

• **useTemporarySegmentEquivalences**: [`SharedWatchableValue`](chunk_manager_backend._internal_.SharedWatchableValue.md)<`boolean`\>

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).useTemporarySegmentEquivalences

#### Defined in

[src/neuroglancer/segmentation_display_state/backend.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/backend.ts#L50)

___

### useTemporaryVisibleSegments

• **useTemporaryVisibleSegments**: [`SharedWatchableValue`](chunk_manager_backend._internal_.SharedWatchableValue.md)<`boolean`\>

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).useTemporaryVisibleSegments

#### Defined in

[src/neuroglancer/segmentation_display_state/backend.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/backend.ts#L49)

___

### visibility

• **visibility**: [`SharedWatchableValue`](chunk_manager_backend._internal_.SharedWatchableValue.md)<`number`\>

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).visibility

#### Defined in

[src/neuroglancer/visibility_priority/backend.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/visibility_priority/backend.ts#L30)

___

### visibleSegments

• **visibleSegments**: [`Uint64Set`](mesh_backend._internal_.Uint64Set.md)

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).visibleSegments

#### Defined in

[src/neuroglancer/segmentation_display_state/backend.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/backend.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).wasDisposed

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

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).addCounterpartRef

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`MeshLayer`](mesh_backend.MeshLayer.md)

#### Returns

[`MeshLayer`](mesh_backend.MeshLayer.md)

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).addRef

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### attach

▸ **attach**(`attachment`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attachment` | [`RenderLayerBackendAttachment`](mesh_backend._internal_.RenderLayerBackendAttachment.md)<[`PerspectiveViewBackend`](perspective_view_backend.PerspectiveViewBackend.md), `unknown`\> |

#### Returns

`void`

#### Overrides

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).attach

#### Defined in

[src/neuroglancer/mesh/backend.ts:357](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/backend.ts#L357)

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

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L234)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).dispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).disposed

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

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).initializeCounterpart

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

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).initializeSharedObject

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L175)

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

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).refCountReachedZero

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

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).registerCancellable

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

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).registerDisposer

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

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).registerEventListener

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

withSegmentationLayerBackendState
(withSharedVisibility(withChunkManager(PerspectiveViewRenderLayerBackend))).unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)

___

### updateChunkPriorities

▸ `Private` **updateChunkPriorities**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/mesh/backend.ts:367](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/backend.ts#L367)
