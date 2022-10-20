[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/chunk\_manager/frontend](../modules/neuroglancer_chunk_manager_frontend.md) / ChunkManager

# Class: ChunkManager

[neuroglancer/chunk_manager/frontend](../modules/neuroglancer_chunk_manager_frontend.md).ChunkManager

**`License`**

Copyright 2016 Google Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Hierarchy

- [`SharedObject`](neuroglancer_worker_rpc.SharedObject.md)

  ↳ **`ChunkManager`**

## Table of contents

### Constructors

- [constructor](neuroglancer_chunk_manager_frontend.ChunkManager.md#constructor)

### Properties

- [RPC\_TYPE\_ID](neuroglancer_chunk_manager_frontend.ChunkManager.md#rpc_type_id)
- [chunkQueueManager](neuroglancer_chunk_manager_frontend.ChunkManager.md#chunkqueuemanager)
- [disposedStacks](neuroglancer_chunk_manager_frontend.ChunkManager.md#disposedstacks)
- [isOwner](neuroglancer_chunk_manager_frontend.ChunkManager.md#isowner)
- [layerChunkStatisticsUpdated](neuroglancer_chunk_manager_frontend.ChunkManager.md#layerchunkstatisticsupdated)
- [memoize](neuroglancer_chunk_manager_frontend.ChunkManager.md#memoize)
- [prevStatisticsLayers](neuroglancer_chunk_manager_frontend.ChunkManager.md#prevstatisticslayers)
- [refCount](neuroglancer_chunk_manager_frontend.ChunkManager.md#refcount)
- [referencedGeneration](neuroglancer_chunk_manager_frontend.ChunkManager.md#referencedgeneration)
- [rpc](neuroglancer_chunk_manager_frontend.ChunkManager.md#rpc)
- [rpcId](neuroglancer_chunk_manager_frontend.ChunkManager.md#rpcid)
- [unreferencedGeneration](neuroglancer_chunk_manager_frontend.ChunkManager.md#unreferencedgeneration)
- [wasDisposed](neuroglancer_chunk_manager_frontend.ChunkManager.md#wasdisposed)

### Accessors

- [gl](neuroglancer_chunk_manager_frontend.ChunkManager.md#gl)

### Methods

- [addCounterpartRef](neuroglancer_chunk_manager_frontend.ChunkManager.md#addcounterpartref)
- [addRef](neuroglancer_chunk_manager_frontend.ChunkManager.md#addref)
- [counterpartRefCountReachedZero](neuroglancer_chunk_manager_frontend.ChunkManager.md#counterpartrefcountreachedzero)
- [dispose](neuroglancer_chunk_manager_frontend.ChunkManager.md#dispose)
- [disposed](neuroglancer_chunk_manager_frontend.ChunkManager.md#disposed)
- [getChunkSource](neuroglancer_chunk_manager_frontend.ChunkManager.md#getchunksource)
- [initializeCounterpart](neuroglancer_chunk_manager_frontend.ChunkManager.md#initializecounterpart)
- [initializeSharedObject](neuroglancer_chunk_manager_frontend.ChunkManager.md#initializesharedobject)
- [ownerDispose](neuroglancer_chunk_manager_frontend.ChunkManager.md#ownerdispose)
- [refCountReachedZero](neuroglancer_chunk_manager_frontend.ChunkManager.md#refcountreachedzero)
- [registerCancellable](neuroglancer_chunk_manager_frontend.ChunkManager.md#registercancellable)
- [registerDisposer](neuroglancer_chunk_manager_frontend.ChunkManager.md#registerdisposer)
- [registerEventListener](neuroglancer_chunk_manager_frontend.ChunkManager.md#registereventlistener)
- [unregisterDisposer](neuroglancer_chunk_manager_frontend.ChunkManager.md#unregisterdisposer)

## Constructors

### constructor

• **new ChunkManager**(`chunkQueueManager`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkQueueManager` | [`ChunkQueueManager`](neuroglancer_chunk_manager_frontend.ChunkQueueManager.md) |

#### Overrides

[SharedObject](neuroglancer_worker_rpc.SharedObject.md).[constructor](neuroglancer_worker_rpc.SharedObject.md#constructor)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:331](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L331)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

[SharedObject](neuroglancer_worker_rpc.SharedObject.md).[RPC_TYPE_ID](neuroglancer_worker_rpc.SharedObject.md#rpc_type_id)

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L245)

___

### chunkQueueManager

• **chunkQueueManager**: [`ChunkQueueManager`](neuroglancer_chunk_manager_frontend.ChunkQueueManager.md)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:331](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L331)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[SharedObject](neuroglancer_worker_rpc.SharedObject.md).[disposedStacks](neuroglancer_worker_rpc.SharedObject.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

[SharedObject](neuroglancer_worker_rpc.SharedObject.md).[isOwner](neuroglancer_worker_rpc.SharedObject.md#isowner)

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L171)

___

### layerChunkStatisticsUpdated

• **layerChunkStatisticsUpdated**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:325](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L325)

___

### memoize

• **memoize**: [`StringMemoize`](neuroglancer_util_memoize.StringMemoize.md)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:322](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L322)

___

### prevStatisticsLayers

• **prevStatisticsLayers**: [`LayerChunkProgressInfo`](neuroglancer_chunk_manager_base.LayerChunkProgressInfo.md)[] = `[]`

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:324](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L324)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[SharedObject](neuroglancer_worker_rpc.SharedObject.md).[refCount](neuroglancer_worker_rpc.SharedObject.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

[SharedObject](neuroglancer_worker_rpc.SharedObject.md).[referencedGeneration](neuroglancer_worker_rpc.SharedObject.md#referencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](neuroglancer_worker_rpc.RPC.md) = `null`

#### Inherited from

[SharedObject](neuroglancer_worker_rpc.SharedObject.md).[rpc](neuroglancer_worker_rpc.SharedObject.md#rpc)

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

[SharedObject](neuroglancer_worker_rpc.SharedObject.md).[rpcId](neuroglancer_worker_rpc.SharedObject.md#rpcid)

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L170)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

[SharedObject](neuroglancer_worker_rpc.SharedObject.md).[unreferencedGeneration](neuroglancer_worker_rpc.SharedObject.md#unreferencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L172)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[SharedObject](neuroglancer_worker_rpc.SharedObject.md).[wasDisposed](neuroglancer_worker_rpc.SharedObject.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### gl

• `get` **gl**(): [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Returns

[`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:327](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L327)

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

[SharedObject](neuroglancer_worker_rpc.SharedObject.md).[addCounterpartRef](neuroglancer_worker_rpc.SharedObject.md#addcounterpartref)

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md)

#### Returns

[`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md)

#### Inherited from

[SharedObject](neuroglancer_worker_rpc.SharedObject.md).[addRef](neuroglancer_worker_rpc.SharedObject.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

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

[SharedObject](neuroglancer_worker_rpc.SharedObject.md).[counterpartRefCountReachedZero](neuroglancer_worker_rpc.SharedObject.md#counterpartrefcountreachedzero)

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L234)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObject](neuroglancer_worker_rpc.SharedObject.md).[dispose](neuroglancer_worker_rpc.SharedObject.md#dispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObject](neuroglancer_worker_rpc.SharedObject.md).[disposed](neuroglancer_worker_rpc.SharedObject.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L75)

___

### getChunkSource

▸ **getChunkSource**<`T`\>(`constructorFunction`, `options`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`SharedObject`](neuroglancer_worker_rpc.SharedObject.md)<`T`\> & { `OPTIONS`: {} ; `key`: `any`  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructorFunction` | [`ChunkSourceConstructor`](../interfaces/neuroglancer_chunk_manager_frontend.ChunkSourceConstructor.md)<`T`\> |
| `options` | `T`[``"OPTIONS"``] |

#### Returns

`T`

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:338](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L338)

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

[SharedObject](neuroglancer_worker_rpc.SharedObject.md).[initializeCounterpart](neuroglancer_worker_rpc.SharedObject.md#initializecounterpart)

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

[SharedObject](neuroglancer_worker_rpc.SharedObject.md).[initializeSharedObject](neuroglancer_worker_rpc.SharedObject.md#initializesharedobject)

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L175)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

[SharedObject](neuroglancer_worker_rpc.SharedObject.md).[ownerDispose](neuroglancer_worker_rpc.SharedObject.md#ownerdispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObject](neuroglancer_worker_rpc.SharedObject.md).[refCountReachedZero](neuroglancer_worker_rpc.SharedObject.md#refcountreachedzero)

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

[SharedObject](neuroglancer_worker_rpc.SharedObject.md).[registerCancellable](neuroglancer_worker_rpc.SharedObject.md#registercancellable)

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

[SharedObject](neuroglancer_worker_rpc.SharedObject.md).[registerDisposer](neuroglancer_worker_rpc.SharedObject.md#registerdisposer)

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

[SharedObject](neuroglancer_worker_rpc.SharedObject.md).[registerEventListener](neuroglancer_worker_rpc.SharedObject.md#registereventlistener)

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

[SharedObject](neuroglancer_worker_rpc.SharedObject.md).[unregisterDisposer](neuroglancer_worker_rpc.SharedObject.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)
