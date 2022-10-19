[neuroglancer](../README.md) / [Modules](../modules.md) / [chunk\_manager/backend](../modules/chunk_manager_backend.md) / ChunkRequester

# Interface: ChunkRequester

[chunk_manager/backend](../modules/chunk_manager_backend.md).ChunkRequester

Interface that represents shared objects that request chunks from a ChunkManager.

## Hierarchy

- [`SharedObject`](../classes/annotation_annotation_layer_state._internal_.SharedObject.md)

  ↳ **`ChunkRequester`**

## Table of contents

### Properties

- [RPC\_TYPE\_ID](chunk_manager_backend.ChunkRequester.md#rpc_type_id)
- [chunkManager](chunk_manager_backend.ChunkRequester.md#chunkmanager)
- [disposedStacks](chunk_manager_backend.ChunkRequester.md#disposedstacks)
- [isOwner](chunk_manager_backend.ChunkRequester.md#isowner)
- [refCount](chunk_manager_backend.ChunkRequester.md#refcount)
- [referencedGeneration](chunk_manager_backend.ChunkRequester.md#referencedgeneration)
- [rpc](chunk_manager_backend.ChunkRequester.md#rpc)
- [rpcId](chunk_manager_backend.ChunkRequester.md#rpcid)
- [unreferencedGeneration](chunk_manager_backend.ChunkRequester.md#unreferencedgeneration)
- [wasDisposed](chunk_manager_backend.ChunkRequester.md#wasdisposed)

### Methods

- [addCounterpartRef](chunk_manager_backend.ChunkRequester.md#addcounterpartref)
- [addRef](chunk_manager_backend.ChunkRequester.md#addref)
- [counterpartRefCountReachedZero](chunk_manager_backend.ChunkRequester.md#counterpartrefcountreachedzero)
- [dispose](chunk_manager_backend.ChunkRequester.md#dispose)
- [disposed](chunk_manager_backend.ChunkRequester.md#disposed)
- [initializeCounterpart](chunk_manager_backend.ChunkRequester.md#initializecounterpart)
- [initializeSharedObject](chunk_manager_backend.ChunkRequester.md#initializesharedobject)
- [ownerDispose](chunk_manager_backend.ChunkRequester.md#ownerdispose)
- [refCountReachedZero](chunk_manager_backend.ChunkRequester.md#refcountreachedzero)
- [registerCancellable](chunk_manager_backend.ChunkRequester.md#registercancellable)
- [registerDisposer](chunk_manager_backend.ChunkRequester.md#registerdisposer)
- [registerEventListener](chunk_manager_backend.ChunkRequester.md#registereventlistener)
- [unregisterDisposer](chunk_manager_backend.ChunkRequester.md#unregisterdisposer)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

[SharedObject](../classes/annotation_annotation_layer_state._internal_.SharedObject.md).[RPC_TYPE_ID](../classes/annotation_annotation_layer_state._internal_.SharedObject.md#rpc_type_id)

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L245)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](../classes/chunk_manager_backend.ChunkManager.md)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:1139](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L1139)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[SharedObject](../classes/annotation_annotation_layer_state._internal_.SharedObject.md).[disposedStacks](../classes/annotation_annotation_layer_state._internal_.SharedObject.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

[SharedObject](../classes/annotation_annotation_layer_state._internal_.SharedObject.md).[isOwner](../classes/annotation_annotation_layer_state._internal_.SharedObject.md#isowner)

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L171)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[SharedObject](../classes/annotation_annotation_layer_state._internal_.SharedObject.md).[refCount](../classes/annotation_annotation_layer_state._internal_.SharedObject.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

[SharedObject](../classes/annotation_annotation_layer_state._internal_.SharedObject.md).[referencedGeneration](../classes/annotation_annotation_layer_state._internal_.SharedObject.md#referencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](../classes/annotation_annotation_layer_state._internal_.RPC.md) = `null`

#### Inherited from

[SharedObject](../classes/annotation_annotation_layer_state._internal_.SharedObject.md).[rpc](../classes/annotation_annotation_layer_state._internal_.SharedObject.md#rpc)

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

[SharedObject](../classes/annotation_annotation_layer_state._internal_.SharedObject.md).[rpcId](../classes/annotation_annotation_layer_state._internal_.SharedObject.md#rpcid)

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L170)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

[SharedObject](../classes/annotation_annotation_layer_state._internal_.SharedObject.md).[unreferencedGeneration](../classes/annotation_annotation_layer_state._internal_.SharedObject.md#unreferencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L172)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[SharedObject](../classes/annotation_annotation_layer_state._internal_.SharedObject.md).[wasDisposed](../classes/annotation_annotation_layer_state._internal_.SharedObject.md#wasdisposed)

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

[SharedObject](../classes/annotation_annotation_layer_state._internal_.SharedObject.md).[addCounterpartRef](../classes/annotation_annotation_layer_state._internal_.SharedObject.md#addcounterpartref)

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`ChunkRequester`](chunk_manager_backend.ChunkRequester.md)

#### Returns

[`ChunkRequester`](chunk_manager_backend.ChunkRequester.md)

#### Inherited from

[SharedObject](../classes/annotation_annotation_layer_state._internal_.SharedObject.md).[addRef](../classes/annotation_annotation_layer_state._internal_.SharedObject.md#addref)

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

[SharedObject](../classes/annotation_annotation_layer_state._internal_.SharedObject.md).[counterpartRefCountReachedZero](../classes/annotation_annotation_layer_state._internal_.SharedObject.md#counterpartrefcountreachedzero)

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L234)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObject](../classes/annotation_annotation_layer_state._internal_.SharedObject.md).[dispose](../classes/annotation_annotation_layer_state._internal_.SharedObject.md#dispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObject](../classes/annotation_annotation_layer_state._internal_.SharedObject.md).[disposed](../classes/annotation_annotation_layer_state._internal_.SharedObject.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

___

### initializeCounterpart

▸ **initializeCounterpart**(`rpc`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](../classes/annotation_annotation_layer_state._internal_.RPC.md) |
| `options` | `any` |

#### Returns

`void`

#### Inherited from

[SharedObject](../classes/annotation_annotation_layer_state._internal_.SharedObject.md).[initializeCounterpart](../classes/annotation_annotation_layer_state._internal_.SharedObject.md#initializecounterpart)

#### Defined in

[src/neuroglancer/worker_rpc.ts:182](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L182)

___

### initializeSharedObject

▸ **initializeSharedObject**(`rpc`, `rpcId?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](../classes/annotation_annotation_layer_state._internal_.RPC.md) |
| `rpcId` | `number` |

#### Returns

`void`

#### Inherited from

[SharedObject](../classes/annotation_annotation_layer_state._internal_.SharedObject.md).[initializeSharedObject](../classes/annotation_annotation_layer_state._internal_.SharedObject.md#initializesharedobject)

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L175)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

[SharedObject](../classes/annotation_annotation_layer_state._internal_.SharedObject.md).[ownerDispose](../classes/annotation_annotation_layer_state._internal_.SharedObject.md#ownerdispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObject](../classes/annotation_annotation_layer_state._internal_.SharedObject.md).[refCountReachedZero](../classes/annotation_annotation_layer_state._internal_.SharedObject.md#refcountreachedzero)

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

[SharedObject](../classes/annotation_annotation_layer_state._internal_.SharedObject.md).[registerCancellable](../classes/annotation_annotation_layer_state._internal_.SharedObject.md#registercancellable)

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

[SharedObject](../classes/annotation_annotation_layer_state._internal_.SharedObject.md).[registerDisposer](../classes/annotation_annotation_layer_state._internal_.SharedObject.md#registerdisposer)

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
| `options?` | `boolean` \| [`AddEventListenerOptions`](annotation_annotation_layer_state._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[SharedObject](../classes/annotation_annotation_layer_state._internal_.SharedObject.md).[registerEventListener](../classes/annotation_annotation_layer_state._internal_.SharedObject.md#registereventlistener)

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

[SharedObject](../classes/annotation_annotation_layer_state._internal_.SharedObject.md).[unregisterDisposer](../classes/annotation_annotation_layer_state._internal_.SharedObject.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)
