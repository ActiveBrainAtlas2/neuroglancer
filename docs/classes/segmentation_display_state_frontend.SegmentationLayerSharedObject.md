[neuroglancer](../README.md) / [Modules](../modules.md) / [segmentation\_display\_state/frontend](../modules/segmentation_display_state_frontend.md) / SegmentationLayerSharedObject

# Class: SegmentationLayerSharedObject

[segmentation_display_state/frontend](../modules/segmentation_display_state_frontend.md).SegmentationLayerSharedObject

## Hierarchy

- [`Base`](../modules/segmentation_display_state_frontend._internal_.md#base)

  ↳ **`SegmentationLayerSharedObject`**

## Table of contents

### Constructors

- [constructor](segmentation_display_state_frontend.SegmentationLayerSharedObject.md#constructor)

### Properties

- [RPC\_TYPE\_ID](segmentation_display_state_frontend.SegmentationLayerSharedObject.md#rpc_type_id)
- [chunkManager](segmentation_display_state_frontend.SegmentationLayerSharedObject.md#chunkmanager)
- [displayState](segmentation_display_state_frontend.SegmentationLayerSharedObject.md#displaystate)
- [disposedStacks](segmentation_display_state_frontend.SegmentationLayerSharedObject.md#disposedstacks)
- [isOwner](segmentation_display_state_frontend.SegmentationLayerSharedObject.md#isowner)
- [layerChunkProgressInfo](segmentation_display_state_frontend.SegmentationLayerSharedObject.md#layerchunkprogressinfo)
- [refCount](segmentation_display_state_frontend.SegmentationLayerSharedObject.md#refcount)
- [referencedGeneration](segmentation_display_state_frontend.SegmentationLayerSharedObject.md#referencedgeneration)
- [rpc](segmentation_display_state_frontend.SegmentationLayerSharedObject.md#rpc)
- [rpcId](segmentation_display_state_frontend.SegmentationLayerSharedObject.md#rpcid)
- [unreferencedGeneration](segmentation_display_state_frontend.SegmentationLayerSharedObject.md#unreferencedgeneration)
- [visibility](segmentation_display_state_frontend.SegmentationLayerSharedObject.md#visibility)
- [wasDisposed](segmentation_display_state_frontend.SegmentationLayerSharedObject.md#wasdisposed)

### Methods

- [addCounterpartRef](segmentation_display_state_frontend.SegmentationLayerSharedObject.md#addcounterpartref)
- [addRef](segmentation_display_state_frontend.SegmentationLayerSharedObject.md#addref)
- [counterpartRefCountReachedZero](segmentation_display_state_frontend.SegmentationLayerSharedObject.md#counterpartrefcountreachedzero)
- [dispose](segmentation_display_state_frontend.SegmentationLayerSharedObject.md#dispose)
- [disposed](segmentation_display_state_frontend.SegmentationLayerSharedObject.md#disposed)
- [initializeCounterpart](segmentation_display_state_frontend.SegmentationLayerSharedObject.md#initializecounterpart)
- [initializeCounterpartWithChunkManager](segmentation_display_state_frontend.SegmentationLayerSharedObject.md#initializecounterpartwithchunkmanager)
- [initializeSharedObject](segmentation_display_state_frontend.SegmentationLayerSharedObject.md#initializesharedobject)
- [ownerDispose](segmentation_display_state_frontend.SegmentationLayerSharedObject.md#ownerdispose)
- [refCountReachedZero](segmentation_display_state_frontend.SegmentationLayerSharedObject.md#refcountreachedzero)
- [registerCancellable](segmentation_display_state_frontend.SegmentationLayerSharedObject.md#registercancellable)
- [registerDisposer](segmentation_display_state_frontend.SegmentationLayerSharedObject.md#registerdisposer)
- [registerEventListener](segmentation_display_state_frontend.SegmentationLayerSharedObject.md#registereventlistener)
- [unregisterDisposer](segmentation_display_state_frontend.SegmentationLayerSharedObject.md#unregisterdisposer)

## Constructors

### constructor

• **new SegmentationLayerSharedObject**(`chunkManager`, `displayState`, `chunkRenderLayer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](chunk_manager_frontend.ChunkManager.md) |
| `displayState` | [`SegmentationDisplayState3D`](../interfaces/segmentation_display_state_frontend.SegmentationDisplayState3D.md) |
| `chunkRenderLayer` | [`LayerChunkProgressInfo`](chunk_manager_base.LayerChunkProgressInfo.md) |

#### Overrides

Base.constructor

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:767](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L767)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

Base.RPC\_TYPE\_ID

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L245)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](chunk_manager_frontend.ChunkManager.md)

___

### displayState

• **displayState**: [`SegmentationDisplayState3D`](../interfaces/segmentation_display_state_frontend.SegmentationDisplayState3D.md)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

Base.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

Base.isOwner

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L171)

___

### layerChunkProgressInfo

• **layerChunkProgressInfo**: [`LayerChunkProgressInfo`](chunk_manager_base.LayerChunkProgressInfo.md)

#### Inherited from

Base.layerChunkProgressInfo

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

Base.refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

Base.referencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](annotation_annotation_layer_state._internal_.RPC.md) = `null`

#### Inherited from

Base.rpc

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

Base.rpcId

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L170)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

Base.unreferencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L172)

___

### visibility

• **visibility**: [`VisibilityPriorityAggregator`](visibility_priority_frontend.VisibilityPriorityAggregator.md)

#### Inherited from

Base.visibility

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/visibility_priority/frontend.ts#L92)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

Base.wasDisposed

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

Base.addCounterpartRef

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`SegmentationLayerSharedObject`](segmentation_display_state_frontend.SegmentationLayerSharedObject.md)

#### Returns

[`SegmentationLayerSharedObject`](segmentation_display_state_frontend.SegmentationLayerSharedObject.md)

#### Inherited from

Base.addRef

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

Base.counterpartRefCountReachedZero

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L234)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

Base.dispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

Base.disposed

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

Base.initializeCounterpart

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:94](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/visibility_priority/frontend.ts#L94)

___

### initializeCounterpartWithChunkManager

▸ **initializeCounterpartWithChunkManager**(`options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `any` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:773](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L773)

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

Base.initializeSharedObject

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L175)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

Base.ownerDispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

Base.refCountReachedZero

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

Base.registerCancellable

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

Base.registerDisposer

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

Base.registerEventListener

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

Base.unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)
