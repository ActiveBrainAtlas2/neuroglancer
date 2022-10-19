[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/single\_mesh/backend](../modules/neuroglancer_single_mesh_backend.md) / SingleMeshLayer

# Class: SingleMeshLayer

[neuroglancer/single_mesh/backend](../modules/neuroglancer_single_mesh_backend.md).SingleMeshLayer

## Hierarchy

- [`SingleMeshLayerBase`](../modules/neuroglancer_single_mesh_backend._internal_.md#singlemeshlayerbase)

  ↳ **`SingleMeshLayer`**

## Table of contents

### Constructors

- [constructor](neuroglancer_single_mesh_backend.SingleMeshLayer.md#constructor)

### Properties

- [RPC\_TYPE\_ID](neuroglancer_single_mesh_backend.SingleMeshLayer.md#rpc_type_id)
- [chunkManager](neuroglancer_single_mesh_backend.SingleMeshLayer.md#chunkmanager)
- [disposedStacks](neuroglancer_single_mesh_backend.SingleMeshLayer.md#disposedstacks)
- [isOwner](neuroglancer_single_mesh_backend.SingleMeshLayer.md#isowner)
- [refCount](neuroglancer_single_mesh_backend.SingleMeshLayer.md#refcount)
- [referencedGeneration](neuroglancer_single_mesh_backend.SingleMeshLayer.md#referencedgeneration)
- [rpc](neuroglancer_single_mesh_backend.SingleMeshLayer.md#rpc)
- [rpcId](neuroglancer_single_mesh_backend.SingleMeshLayer.md#rpcid)
- [source](neuroglancer_single_mesh_backend.SingleMeshLayer.md#source)
- [unreferencedGeneration](neuroglancer_single_mesh_backend.SingleMeshLayer.md#unreferencedgeneration)
- [visibility](neuroglancer_single_mesh_backend.SingleMeshLayer.md#visibility)
- [wasDisposed](neuroglancer_single_mesh_backend.SingleMeshLayer.md#wasdisposed)

### Methods

- [addCounterpartRef](neuroglancer_single_mesh_backend.SingleMeshLayer.md#addcounterpartref)
- [addRef](neuroglancer_single_mesh_backend.SingleMeshLayer.md#addref)
- [counterpartRefCountReachedZero](neuroglancer_single_mesh_backend.SingleMeshLayer.md#counterpartrefcountreachedzero)
- [dispose](neuroglancer_single_mesh_backend.SingleMeshLayer.md#dispose)
- [disposed](neuroglancer_single_mesh_backend.SingleMeshLayer.md#disposed)
- [initializeCounterpart](neuroglancer_single_mesh_backend.SingleMeshLayer.md#initializecounterpart)
- [initializeSharedObject](neuroglancer_single_mesh_backend.SingleMeshLayer.md#initializesharedobject)
- [ownerDispose](neuroglancer_single_mesh_backend.SingleMeshLayer.md#ownerdispose)
- [refCountReachedZero](neuroglancer_single_mesh_backend.SingleMeshLayer.md#refcountreachedzero)
- [registerCancellable](neuroglancer_single_mesh_backend.SingleMeshLayer.md#registercancellable)
- [registerDisposer](neuroglancer_single_mesh_backend.SingleMeshLayer.md#registerdisposer)
- [registerEventListener](neuroglancer_single_mesh_backend.SingleMeshLayer.md#registereventlistener)
- [unregisterDisposer](neuroglancer_single_mesh_backend.SingleMeshLayer.md#unregisterdisposer)
- [updateChunkPriorities](neuroglancer_single_mesh_backend.SingleMeshLayer.md#updatechunkpriorities)

## Constructors

### constructor

• **new SingleMeshLayer**(`rpc`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](neuroglancer_worker_rpc.RPC.md) |
| `options` | `any` |

#### Overrides

SingleMeshLayerBase.constructor

#### Defined in

[src/neuroglancer/single_mesh/backend.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/single_mesh/backend.ts#L169)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

SingleMeshLayerBase.RPC\_TYPE\_ID

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L245)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](neuroglancer_chunk_manager_backend.ChunkManager.md)

#### Inherited from

SingleMeshLayerBase.chunkManager

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:1139](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L1139)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

SingleMeshLayerBase.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

SingleMeshLayerBase.isOwner

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L171)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

SingleMeshLayerBase.refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

SingleMeshLayerBase.referencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](neuroglancer_worker_rpc.RPC.md) = `null`

#### Inherited from

SingleMeshLayerBase.rpc

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

SingleMeshLayerBase.rpcId

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L170)

___

### source

• **source**: [`SingleMeshSource`](neuroglancer_single_mesh_backend.SingleMeshSource.md)

#### Defined in

[src/neuroglancer/single_mesh/backend.ts:167](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/single_mesh/backend.ts#L167)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

SingleMeshLayerBase.unreferencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L172)

___

### visibility

• **visibility**: [`SharedWatchableValue`](neuroglancer_shared_watchable_value.SharedWatchableValue.md)<`number`\>

#### Inherited from

SingleMeshLayerBase.visibility

#### Defined in

[src/neuroglancer/visibility_priority/backend.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/visibility_priority/backend.ts#L30)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

SingleMeshLayerBase.wasDisposed

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

SingleMeshLayerBase.addCounterpartRef

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`SingleMeshLayer`](neuroglancer_single_mesh_backend.SingleMeshLayer.md)

#### Returns

[`SingleMeshLayer`](neuroglancer_single_mesh_backend.SingleMeshLayer.md)

#### Inherited from

SingleMeshLayerBase.addRef

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

SingleMeshLayerBase.counterpartRefCountReachedZero

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L234)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

SingleMeshLayerBase.dispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

SingleMeshLayerBase.disposed

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

SingleMeshLayerBase.initializeCounterpart

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

SingleMeshLayerBase.initializeSharedObject

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L175)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

SingleMeshLayerBase.ownerDispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

SingleMeshLayerBase.refCountReachedZero

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

SingleMeshLayerBase.registerCancellable

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

SingleMeshLayerBase.registerDisposer

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

SingleMeshLayerBase.registerEventListener

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

SingleMeshLayerBase.unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)

___

### updateChunkPriorities

▸ `Private` **updateChunkPriorities**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/single_mesh/backend.ts:177](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/single_mesh/backend.ts#L177)
