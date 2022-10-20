[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/backend](../modules/neuroglancer_sliceview_backend.md) / SliceViewChunkSourceBackend

# Class: SliceViewChunkSourceBackend<Spec, ChunkType\>

[neuroglancer/sliceview/backend](../modules/neuroglancer_sliceview_backend.md).SliceViewChunkSourceBackend

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

## Type parameters

| Name | Type |
| :------ | :------ |
| `Spec` | extends [`SliceViewChunkSpecification`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSpecification.md) = [`SliceViewChunkSpecification`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSpecification.md) |
| `ChunkType` | extends [`SliceViewChunk`](neuroglancer_sliceview_backend.SliceViewChunk.md) = [`SliceViewChunk`](neuroglancer_sliceview_backend.SliceViewChunk.md) |

## Hierarchy

- [`ChunkSource`](neuroglancer_chunk_manager_backend.ChunkSource.md)

  ↳ **`SliceViewChunkSourceBackend`**

  ↳↳ [`AnnotationGeometryChunkSourceBackend`](neuroglancer_annotation_backend.AnnotationGeometryChunkSourceBackend.md)

  ↳↳ [`VolumeChunkSource`](neuroglancer_sliceview_volume_backend.VolumeChunkSource.md)

## Implements

- [`SliceViewChunkSource`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSource.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#constructor)

### Properties

- [RPC\_TYPE\_ID](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#rpc_type_id)
- [chunkConstructor](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#chunkconstructor)
- [chunkManager](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#chunkmanager)
- [chunks](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#chunks)
- [disposedStacks](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#disposedstacks)
- [freeChunks](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#freechunks)
- [isOwner](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#isowner)
- [refCount](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#refcount)
- [referencedGeneration](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#referencedgeneration)
- [rpc](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#rpc)
- [rpcId](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#rpcid)
- [sourceQueueLevel](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#sourcequeuelevel)
- [spec](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#spec)
- [statistics](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#statistics)
- [unreferencedGeneration](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#unreferencedgeneration)
- [wasDisposed](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#wasdisposed)

### Methods

- [addChunk](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#addchunk)
- [addCounterpartRef](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#addcounterpartref)
- [addRef](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#addref)
- [chunkStateChanged](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#chunkstatechanged)
- [counterpartRefCountReachedZero](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#counterpartrefcountreachedzero)
- [dispose](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#dispose)
- [disposed](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#disposed)
- [download](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#download)
- [getChunk](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#getchunk)
- [getNewChunk\_](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#getnewchunk_)
- [initializeCounterpart](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#initializecounterpart)
- [initializeSharedObject](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#initializesharedobject)
- [ownerDispose](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#ownerdispose)
- [refCountReachedZero](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#refcountreachedzero)
- [registerCancellable](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#registercancellable)
- [registerChunkListener](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#registerchunklistener)
- [registerDisposer](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#registerdisposer)
- [registerEventListener](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#registereventlistener)
- [removeChunk](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#removechunk)
- [unregisterChunkListener](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#unregisterchunklistener)
- [unregisterDisposer](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#unregisterdisposer)

## Constructors

### constructor

• **new SliceViewChunkSourceBackend**<`Spec`, `ChunkType`\>(`rpc`, `options`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Spec` | extends [`SliceViewChunkSpecification`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`, `Spec`\> = [`SliceViewChunkSpecification`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\> |
| `ChunkType` | extends [`SliceViewChunk`](neuroglancer_sliceview_backend.SliceViewChunk.md)<`ChunkType`\> = [`SliceViewChunk`](neuroglancer_sliceview_backend.SliceViewChunk.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](neuroglancer_worker_rpc.RPC.md) |
| `options` | `any` |

#### Inherited from

[ChunkSource](neuroglancer_chunk_manager_backend.ChunkSource.md).[constructor](neuroglancer_chunk_manager_backend.ChunkSource.md#constructor)

#### Defined in

[src/neuroglancer/sliceview/backend.ts:313](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/backend.ts#L313)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

[ChunkSource](neuroglancer_chunk_manager_backend.ChunkSource.md).[RPC_TYPE_ID](neuroglancer_chunk_manager_backend.ChunkSource.md#rpc_type_id)

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L245)

___

### chunkConstructor

• **chunkConstructor**: [`ChunkConstructor`](../interfaces/neuroglancer_chunk_manager_backend.ChunkConstructor.md)<[`SliceViewChunk`](neuroglancer_sliceview_backend.SliceViewChunk.md)\>

#### Defined in

[src/neuroglancer/sliceview/backend.ts:304](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/backend.ts#L304)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](neuroglancer_chunk_manager_backend.ChunkManager.md)

#### Inherited from

[ChunkSource](neuroglancer_chunk_manager_backend.ChunkSource.md).[chunkManager](neuroglancer_chunk_manager_backend.ChunkSource.md#chunkmanager)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:258](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L258)

___

### chunks

• **chunks**: `Map`<`string`, `ChunkType`\>

#### Inherited from

[ChunkSource](neuroglancer_chunk_manager_backend.ChunkSource.md).[chunks](neuroglancer_chunk_manager_backend.ChunkSource.md#chunks)

#### Defined in

[src/neuroglancer/sliceview/backend.ts:312](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/backend.ts#L312)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[ChunkSource](neuroglancer_chunk_manager_backend.ChunkSource.md).[disposedStacks](neuroglancer_chunk_manager_backend.ChunkSource.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### freeChunks

• **freeChunks**: [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md)[]

#### Inherited from

[ChunkSource](neuroglancer_chunk_manager_backend.ChunkSource.md).[freeChunks](neuroglancer_chunk_manager_backend.ChunkSource.md#freechunks)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:248](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L248)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

[ChunkSource](neuroglancer_chunk_manager_backend.ChunkSource.md).[isOwner](neuroglancer_chunk_manager_backend.ChunkSource.md#isowner)

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L171)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[ChunkSource](neuroglancer_chunk_manager_backend.ChunkSource.md).[refCount](neuroglancer_chunk_manager_backend.ChunkSource.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

[ChunkSource](neuroglancer_chunk_manager_backend.ChunkSource.md).[referencedGeneration](neuroglancer_chunk_manager_backend.ChunkSource.md#referencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](neuroglancer_worker_rpc.RPC.md) = `null`

#### Inherited from

[ChunkSource](neuroglancer_chunk_manager_backend.ChunkSource.md).[rpc](neuroglancer_chunk_manager_backend.ChunkSource.md#rpc)

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

[ChunkSource](neuroglancer_chunk_manager_backend.ChunkSource.md).[rpcId](neuroglancer_chunk_manager_backend.ChunkSource.md#rpcid)

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L170)

___

### sourceQueueLevel

• **sourceQueueLevel**: `number` = `0`

sourceQueueLevel must be greater than the sourceQueueLevel of any ChunkSource whose download
method depends on chunks from this source.  A normal ChunkSource with no other dependencies
should have a level of 0.

#### Inherited from

[ChunkSource](neuroglancer_chunk_manager_backend.ChunkSource.md).[sourceQueueLevel](neuroglancer_chunk_manager_backend.ChunkSource.md#sourcequeuelevel)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:256](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L256)

___

### spec

• **spec**: `Spec`

#### Implementation of

[SliceViewChunkSource](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSource.md).[spec](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSource.md#spec)

#### Defined in

[src/neuroglancer/sliceview/backend.ts:311](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/backend.ts#L311)

___

### statistics

• **statistics**: `Float64Array`

#### Inherited from

[ChunkSource](neuroglancer_chunk_manager_backend.ChunkSource.md).[statistics](neuroglancer_chunk_manager_backend.ChunkSource.md#statistics)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:249](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L249)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

[ChunkSource](neuroglancer_chunk_manager_backend.ChunkSource.md).[unreferencedGeneration](neuroglancer_chunk_manager_backend.ChunkSource.md#unreferencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L172)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[ChunkSource](neuroglancer_chunk_manager_backend.ChunkSource.md).[wasDisposed](neuroglancer_chunk_manager_backend.ChunkSource.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addChunk

▸ **addChunk**(`chunk`): `void`

Adds the specified chunk to the chunk cache.

If the chunk cache was previously empty, also call this.addRef() to increment the reference
count.

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md) |

#### Returns

`void`

#### Inherited from

[ChunkSource](neuroglancer_chunk_manager_backend.ChunkSource.md).[addChunk](neuroglancer_chunk_manager_backend.ChunkSource.md#addchunk)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:288](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L288)

___

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

[ChunkSource](neuroglancer_chunk_manager_backend.ChunkSource.md).[addCounterpartRef](neuroglancer_chunk_manager_backend.ChunkSource.md#addcounterpartref)

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`SliceViewChunkSourceBackend`](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md)<`Spec`, `ChunkType`\>

#### Returns

[`SliceViewChunkSourceBackend`](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md)<`Spec`, `ChunkType`\>

#### Inherited from

[ChunkSource](neuroglancer_chunk_manager_backend.ChunkSource.md).[addRef](neuroglancer_chunk_manager_backend.ChunkSource.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### chunkStateChanged

▸ **chunkStateChanged**(`chunk`, `oldState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md) |
| `oldState` | [`ChunkState`](../enums/neuroglancer_chunk_manager_base.ChunkState.md) |

#### Returns

`void`

#### Inherited from

[ChunkSource](neuroglancer_chunk_manager_backend.ChunkSource.md).[chunkStateChanged](neuroglancer_chunk_manager_backend.ChunkSource.md#chunkstatechanged)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:337](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L337)

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

[ChunkSource](neuroglancer_chunk_manager_backend.ChunkSource.md).[counterpartRefCountReachedZero](neuroglancer_chunk_manager_backend.ChunkSource.md#counterpartrefcountreachedzero)

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L234)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[ChunkSource](neuroglancer_chunk_manager_backend.ChunkSource.md).[dispose](neuroglancer_chunk_manager_backend.ChunkSource.md#dispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[ChunkSource](neuroglancer_chunk_manager_backend.ChunkSource.md).[disposed](neuroglancer_chunk_manager_backend.ChunkSource.md#disposed)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:263](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L263)

___

### download

▸ **download**(`chunk`, `cancellationToken`): `Promise`<`void`\>

Begin downloading the specified the chunk.  The returned promise should resolve when the
downloaded data has been successfully decoded and stored in the chunk, or rejected if the
download or decoding fails.

Note: This method must be defined by subclasses.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chunk` | [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md) | Chunk to download. |
| `cancellationToken` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) | If this token is canceled, the download/decoding should be aborted if possible.  TODO(jbms): Move this back to the class definition above and declare this abstract once mixins are compatible with abstract classes. |

#### Returns

`Promise`<`void`\>

#### Inherited from

[ChunkSource](neuroglancer_chunk_manager_backend.ChunkSource.md).[download](neuroglancer_chunk_manager_backend.ChunkSource.md#download)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:376](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L376)

___

### getChunk

▸ **getChunk**(`chunkGridPosition`): `ChunkType`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkGridPosition` | [`vec3`](neuroglancer_util_geom.vec3.md) |

#### Returns

`ChunkType`

#### Defined in

[src/neuroglancer/sliceview/backend.ts:302](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/backend.ts#L302)

▸ **getChunk**(`chunkGridPosition`): `ChunkType`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkGridPosition` | `Float32Array` |

#### Returns

`ChunkType`

#### Defined in

[src/neuroglancer/sliceview/backend.ts:318](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/backend.ts#L318)

___

### getNewChunk\_

▸ **getNewChunk_**<`T`\>(`chunkType`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkType` | [`ChunkConstructor`](../interfaces/neuroglancer_chunk_manager_backend.ChunkConstructor.md)<`T`\> |

#### Returns

`T`

#### Inherited from

[ChunkSource](neuroglancer_chunk_manager_backend.ChunkSource.md).[getNewChunk_](neuroglancer_chunk_manager_backend.ChunkSource.md#getnewchunk_)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:268](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L268)

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

[ChunkSource](neuroglancer_chunk_manager_backend.ChunkSource.md).[initializeCounterpart](neuroglancer_chunk_manager_backend.ChunkSource.md#initializecounterpart)

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

[ChunkSource](neuroglancer_chunk_manager_backend.ChunkSource.md).[initializeSharedObject](neuroglancer_chunk_manager_backend.ChunkSource.md#initializesharedobject)

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L175)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

[ChunkSource](neuroglancer_chunk_manager_backend.ChunkSource.md).[ownerDispose](neuroglancer_chunk_manager_backend.ChunkSource.md#ownerdispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[ChunkSource](neuroglancer_chunk_manager_backend.ChunkSource.md).[refCountReachedZero](neuroglancer_chunk_manager_backend.ChunkSource.md#refcountreachedzero)

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

[ChunkSource](neuroglancer_chunk_manager_backend.ChunkSource.md).[registerCancellable](neuroglancer_chunk_manager_backend.ChunkSource.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L100)

___

### registerChunkListener

▸ **registerChunkListener**(`key`, `listener`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `listener` | [`ChunkStateListener`](../interfaces/neuroglancer_chunk_manager_backend.ChunkStateListener.md) |

#### Returns

`boolean`

#### Inherited from

[ChunkSource](neuroglancer_chunk_manager_backend.ChunkSource.md).[registerChunkListener](neuroglancer_chunk_manager_backend.ChunkSource.md#registerchunklistener)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:312](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L312)

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

[ChunkSource](neuroglancer_chunk_manager_backend.ChunkSource.md).[registerDisposer](neuroglancer_chunk_manager_backend.ChunkSource.md#registerdisposer)

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

[ChunkSource](neuroglancer_chunk_manager_backend.ChunkSource.md).[registerEventListener](neuroglancer_chunk_manager_backend.ChunkSource.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L95)

___

### removeChunk

▸ **removeChunk**(`chunk`): `void`

Remove the specified chunk from the chunk cache.

If the chunk cache becomes empty, also call this.dispose() to decrement the reference count.

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md) |

#### Returns

`void`

#### Inherited from

[ChunkSource](neuroglancer_chunk_manager_backend.ChunkSource.md).[removeChunk](neuroglancer_chunk_manager_backend.ChunkSource.md#removechunk)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:302](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L302)

___

### unregisterChunkListener

▸ **unregisterChunkListener**(`key`, `listener`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `listener` | [`ChunkStateListener`](../interfaces/neuroglancer_chunk_manager_backend.ChunkStateListener.md) |

#### Returns

`boolean`

#### Inherited from

[ChunkSource](neuroglancer_chunk_manager_backend.ChunkSource.md).[unregisterChunkListener](neuroglancer_chunk_manager_backend.ChunkSource.md#unregisterchunklistener)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:321](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L321)

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

[ChunkSource](neuroglancer_chunk_manager_backend.ChunkSource.md).[unregisterDisposer](neuroglancer_chunk_manager_backend.ChunkSource.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)
