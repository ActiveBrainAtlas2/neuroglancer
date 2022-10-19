[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/renderlayer](../modules/annotation_renderlayer.md) / [<internal\>](../modules/annotation_renderlayer._internal_.md) / AnnotationLayerSharedObject

# Class: AnnotationLayerSharedObject

[annotation/renderlayer](../modules/annotation_renderlayer.md).[<internal>](../modules/annotation_renderlayer._internal_.md).AnnotationLayerSharedObject

## Hierarchy

- `__class`<typeof [`ChunkRenderLayerFrontend`](chunk_manager_frontend.ChunkRenderLayerFrontend.md), `this`\> & [`ChunkRenderLayerFrontend`](chunk_manager_frontend.ChunkRenderLayerFrontend.md)<`this`\>

  ↳ **`AnnotationLayerSharedObject`**

## Table of contents

### Constructors

- [constructor](annotation_renderlayer._internal_.AnnotationLayerSharedObject.md#constructor)

### Properties

- [RPC\_TYPE\_ID](annotation_renderlayer._internal_.AnnotationLayerSharedObject.md#rpc_type_id)
- [chunkManager](annotation_renderlayer._internal_.AnnotationLayerSharedObject.md#chunkmanager)
- [disposedStacks](annotation_renderlayer._internal_.AnnotationLayerSharedObject.md#disposedstacks)
- [isOwner](annotation_renderlayer._internal_.AnnotationLayerSharedObject.md#isowner)
- [layerChunkProgressInfo](annotation_renderlayer._internal_.AnnotationLayerSharedObject.md#layerchunkprogressinfo)
- [refCount](annotation_renderlayer._internal_.AnnotationLayerSharedObject.md#refcount)
- [referencedGeneration](annotation_renderlayer._internal_.AnnotationLayerSharedObject.md#referencedgeneration)
- [rpc](annotation_renderlayer._internal_.AnnotationLayerSharedObject.md#rpc)
- [rpcId](annotation_renderlayer._internal_.AnnotationLayerSharedObject.md#rpcid)
- [segmentationStates](annotation_renderlayer._internal_.AnnotationLayerSharedObject.md#segmentationstates)
- [source](annotation_renderlayer._internal_.AnnotationLayerSharedObject.md#source)
- [unreferencedGeneration](annotation_renderlayer._internal_.AnnotationLayerSharedObject.md#unreferencedgeneration)
- [visibility](annotation_renderlayer._internal_.AnnotationLayerSharedObject.md#visibility)
- [wasDisposed](annotation_renderlayer._internal_.AnnotationLayerSharedObject.md#wasdisposed)

### Methods

- [addCounterpartRef](annotation_renderlayer._internal_.AnnotationLayerSharedObject.md#addcounterpartref)
- [addRef](annotation_renderlayer._internal_.AnnotationLayerSharedObject.md#addref)
- [counterpartRefCountReachedZero](annotation_renderlayer._internal_.AnnotationLayerSharedObject.md#counterpartrefcountreachedzero)
- [dispose](annotation_renderlayer._internal_.AnnotationLayerSharedObject.md#dispose)
- [disposed](annotation_renderlayer._internal_.AnnotationLayerSharedObject.md#disposed)
- [initializeCounterpart](annotation_renderlayer._internal_.AnnotationLayerSharedObject.md#initializecounterpart)
- [initializeSharedObject](annotation_renderlayer._internal_.AnnotationLayerSharedObject.md#initializesharedobject)
- [ownerDispose](annotation_renderlayer._internal_.AnnotationLayerSharedObject.md#ownerdispose)
- [refCountReachedZero](annotation_renderlayer._internal_.AnnotationLayerSharedObject.md#refcountreachedzero)
- [registerCancellable](annotation_renderlayer._internal_.AnnotationLayerSharedObject.md#registercancellable)
- [registerDisposer](annotation_renderlayer._internal_.AnnotationLayerSharedObject.md#registerdisposer)
- [registerEventListener](annotation_renderlayer._internal_.AnnotationLayerSharedObject.md#registereventlistener)
- [serializeDisplayState](annotation_renderlayer._internal_.AnnotationLayerSharedObject.md#serializedisplaystate)
- [unregisterDisposer](annotation_renderlayer._internal_.AnnotationLayerSharedObject.md#unregisterdisposer)

## Constructors

### constructor

• **new AnnotationLayerSharedObject**(`chunkManager`, `source`, `segmentationStates`, `chunkRenderLayer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](chunk_manager_frontend.ChunkManager.md) |
| `source` | [`MultiscaleAnnotationSource`](annotation_frontend_source.MultiscaleAnnotationSource.md) |
| `segmentationStates` | [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`undefined` \| [`OptionalSegmentationDisplayState`](../modules/annotation_annotation_layer_state.md#optionalsegmentationdisplaystate)[]\> |
| `chunkRenderLayer` | [`LayerChunkProgressInfo`](chunk_manager_base.LayerChunkProgressInfo.md) |

#### Overrides

withSharedVisibility
(ChunkRenderLayerFrontend).constructor

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:101](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/renderlayer.ts#L101)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

withSharedVisibility
(ChunkRenderLayerFrontend).RPC\_TYPE\_ID

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L245)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](chunk_manager_frontend.ChunkManager.md)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

withSharedVisibility
(ChunkRenderLayerFrontend).disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

withSharedVisibility
(ChunkRenderLayerFrontend).isOwner

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L171)

___

### layerChunkProgressInfo

• **layerChunkProgressInfo**: [`LayerChunkProgressInfo`](chunk_manager_base.LayerChunkProgressInfo.md)

#### Inherited from

withSharedVisibility
(ChunkRenderLayerFrontend).layerChunkProgressInfo

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

withSharedVisibility
(ChunkRenderLayerFrontend).refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

withSharedVisibility
(ChunkRenderLayerFrontend).referencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](annotation_annotation_layer_state._internal_.RPC.md) = `null`

#### Inherited from

withSharedVisibility
(ChunkRenderLayerFrontend).rpc

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

withSharedVisibility
(ChunkRenderLayerFrontend).rpcId

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L170)

___

### segmentationStates

• **segmentationStates**: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`undefined` \| [`OptionalSegmentationDisplayState`](../modules/annotation_annotation_layer_state.md#optionalsegmentationdisplaystate)[]\>

___

### source

• **source**: [`MultiscaleAnnotationSource`](annotation_frontend_source.MultiscaleAnnotationSource.md)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

withSharedVisibility
(ChunkRenderLayerFrontend).unreferencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L172)

___

### visibility

• **visibility**: [`VisibilityPriorityAggregator`](visibility_priority_frontend.VisibilityPriorityAggregator.md)

#### Inherited from

withSharedVisibility
(ChunkRenderLayerFrontend).visibility

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/visibility_priority/frontend.ts#L92)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

withSharedVisibility
(ChunkRenderLayerFrontend).wasDisposed

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

withSharedVisibility
(ChunkRenderLayerFrontend).addCounterpartRef

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`AnnotationLayerSharedObject`](annotation_renderlayer._internal_.AnnotationLayerSharedObject.md)

#### Returns

[`AnnotationLayerSharedObject`](annotation_renderlayer._internal_.AnnotationLayerSharedObject.md)

#### Inherited from

withSharedVisibility
(ChunkRenderLayerFrontend).addRef

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

withSharedVisibility
(ChunkRenderLayerFrontend).counterpartRefCountReachedZero

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L234)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

withSharedVisibility
(ChunkRenderLayerFrontend).dispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

withSharedVisibility
(ChunkRenderLayerFrontend).disposed

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

withSharedVisibility
(ChunkRenderLayerFrontend).initializeCounterpart

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:94](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/visibility_priority/frontend.ts#L94)

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

withSharedVisibility
(ChunkRenderLayerFrontend).initializeSharedObject

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L175)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

withSharedVisibility
(ChunkRenderLayerFrontend).ownerDispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

withSharedVisibility
(ChunkRenderLayerFrontend).refCountReachedZero

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

withSharedVisibility
(ChunkRenderLayerFrontend).registerCancellable

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

withSharedVisibility
(ChunkRenderLayerFrontend).registerDisposer

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

withSharedVisibility
(ChunkRenderLayerFrontend).registerEventListener

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

___

### serializeDisplayState

▸ `Private` **serializeDisplayState**(): `undefined` \| `any`[]

#### Returns

`undefined` \| `any`[]

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:122](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/renderlayer.ts#L122)

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

withSharedVisibility
(ChunkRenderLayerFrontend).unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)
