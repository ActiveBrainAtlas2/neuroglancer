[neuroglancer](../README.md) / [Modules](../modules.md) / [sliceview/backend](../modules/sliceview_backend.md) / SliceViewChunkSourceBackend

# Class: SliceViewChunkSourceBackend<Spec, ChunkType\>

[sliceview/backend](../modules/sliceview_backend.md).SliceViewChunkSourceBackend

## Type parameters

| Name | Type |
| :------ | :------ |
| `Spec` | extends [`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md) = [`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md) |
| `ChunkType` | extends [`SliceViewChunk`](sliceview_backend.SliceViewChunk.md) = [`SliceViewChunk`](sliceview_backend.SliceViewChunk.md) |

## Hierarchy

- [`ChunkSource`](chunk_manager_backend.ChunkSource.md)

  ↳ **`SliceViewChunkSourceBackend`**

  ↳↳ [`AnnotationGeometryChunkSourceBackend`](annotation_backend.AnnotationGeometryChunkSourceBackend.md)

## Implements

- [`SliceViewChunkSource`](../interfaces/sliceview_base.SliceViewChunkSource.md)

## Table of contents

### Constructors

- [constructor](sliceview_backend.SliceViewChunkSourceBackend.md#constructor)

### Properties

- [RPC\_TYPE\_ID](sliceview_backend.SliceViewChunkSourceBackend.md#rpc_type_id)
- [chunkConstructor](sliceview_backend.SliceViewChunkSourceBackend.md#chunkconstructor)
- [chunkManager](sliceview_backend.SliceViewChunkSourceBackend.md#chunkmanager)
- [chunks](sliceview_backend.SliceViewChunkSourceBackend.md#chunks)
- [disposedStacks](sliceview_backend.SliceViewChunkSourceBackend.md#disposedstacks)
- [freeChunks](sliceview_backend.SliceViewChunkSourceBackend.md#freechunks)
- [isOwner](sliceview_backend.SliceViewChunkSourceBackend.md#isowner)
- [refCount](sliceview_backend.SliceViewChunkSourceBackend.md#refcount)
- [referencedGeneration](sliceview_backend.SliceViewChunkSourceBackend.md#referencedgeneration)
- [rpc](sliceview_backend.SliceViewChunkSourceBackend.md#rpc)
- [rpcId](sliceview_backend.SliceViewChunkSourceBackend.md#rpcid)
- [sourceQueueLevel](sliceview_backend.SliceViewChunkSourceBackend.md#sourcequeuelevel)
- [spec](sliceview_backend.SliceViewChunkSourceBackend.md#spec)
- [statistics](sliceview_backend.SliceViewChunkSourceBackend.md#statistics)
- [unreferencedGeneration](sliceview_backend.SliceViewChunkSourceBackend.md#unreferencedgeneration)
- [wasDisposed](sliceview_backend.SliceViewChunkSourceBackend.md#wasdisposed)

### Methods

- [addChunk](sliceview_backend.SliceViewChunkSourceBackend.md#addchunk)
- [addCounterpartRef](sliceview_backend.SliceViewChunkSourceBackend.md#addcounterpartref)
- [addRef](sliceview_backend.SliceViewChunkSourceBackend.md#addref)
- [chunkStateChanged](sliceview_backend.SliceViewChunkSourceBackend.md#chunkstatechanged)
- [counterpartRefCountReachedZero](sliceview_backend.SliceViewChunkSourceBackend.md#counterpartrefcountreachedzero)
- [dispose](sliceview_backend.SliceViewChunkSourceBackend.md#dispose)
- [disposed](sliceview_backend.SliceViewChunkSourceBackend.md#disposed)
- [download](sliceview_backend.SliceViewChunkSourceBackend.md#download)
- [getChunk](sliceview_backend.SliceViewChunkSourceBackend.md#getchunk)
- [getNewChunk\_](sliceview_backend.SliceViewChunkSourceBackend.md#getnewchunk_)
- [initializeCounterpart](sliceview_backend.SliceViewChunkSourceBackend.md#initializecounterpart)
- [initializeSharedObject](sliceview_backend.SliceViewChunkSourceBackend.md#initializesharedobject)
- [ownerDispose](sliceview_backend.SliceViewChunkSourceBackend.md#ownerdispose)
- [refCountReachedZero](sliceview_backend.SliceViewChunkSourceBackend.md#refcountreachedzero)
- [registerCancellable](sliceview_backend.SliceViewChunkSourceBackend.md#registercancellable)
- [registerChunkListener](sliceview_backend.SliceViewChunkSourceBackend.md#registerchunklistener)
- [registerDisposer](sliceview_backend.SliceViewChunkSourceBackend.md#registerdisposer)
- [registerEventListener](sliceview_backend.SliceViewChunkSourceBackend.md#registereventlistener)
- [removeChunk](sliceview_backend.SliceViewChunkSourceBackend.md#removechunk)
- [unregisterChunkListener](sliceview_backend.SliceViewChunkSourceBackend.md#unregisterchunklistener)
- [unregisterDisposer](sliceview_backend.SliceViewChunkSourceBackend.md#unregisterdisposer)

## Constructors

### constructor

• **new SliceViewChunkSourceBackend**<`Spec`, `ChunkType`\>(`rpc`, `options`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Spec` | extends [`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`, `Spec`\> = [`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\> |
| `ChunkType` | extends [`SliceViewChunk`](sliceview_backend.SliceViewChunk.md)<`ChunkType`\> = [`SliceViewChunk`](sliceview_backend.SliceViewChunk.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](annotation_annotation_layer_state._internal_.RPC.md) |
| `options` | `any` |

#### Inherited from

[ChunkSource](chunk_manager_backend.ChunkSource.md).[constructor](chunk_manager_backend.ChunkSource.md#constructor)

#### Defined in

[src/neuroglancer/sliceview/backend.ts:313](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/backend.ts#L313)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

[ChunkSource](chunk_manager_backend.ChunkSource.md).[RPC_TYPE_ID](chunk_manager_backend.ChunkSource.md#rpc_type_id)

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L245)

___

### chunkConstructor

• **chunkConstructor**: [`ChunkConstructor`](../interfaces/chunk_manager_backend.ChunkConstructor.md)<[`SliceViewChunk`](sliceview_backend.SliceViewChunk.md)\>

#### Defined in

[src/neuroglancer/sliceview/backend.ts:304](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/backend.ts#L304)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](chunk_manager_backend.ChunkManager.md)

#### Inherited from

[ChunkSource](chunk_manager_backend.ChunkSource.md).[chunkManager](chunk_manager_backend.ChunkSource.md#chunkmanager)

___

### chunks

• **chunks**: `Map`<`string`, `ChunkType`\>

#### Inherited from

[ChunkSource](chunk_manager_backend.ChunkSource.md).[chunks](chunk_manager_backend.ChunkSource.md#chunks)

#### Defined in

[src/neuroglancer/sliceview/backend.ts:312](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/backend.ts#L312)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[ChunkSource](chunk_manager_backend.ChunkSource.md).[disposedStacks](chunk_manager_backend.ChunkSource.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### freeChunks

• **freeChunks**: [`Chunk`](chunk_manager_backend.Chunk.md)[]

#### Inherited from

[ChunkSource](chunk_manager_backend.ChunkSource.md).[freeChunks](chunk_manager_backend.ChunkSource.md#freechunks)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:248](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L248)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

[ChunkSource](chunk_manager_backend.ChunkSource.md).[isOwner](chunk_manager_backend.ChunkSource.md#isowner)

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L171)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[ChunkSource](chunk_manager_backend.ChunkSource.md).[refCount](chunk_manager_backend.ChunkSource.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

[ChunkSource](chunk_manager_backend.ChunkSource.md).[referencedGeneration](chunk_manager_backend.ChunkSource.md#referencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](annotation_annotation_layer_state._internal_.RPC.md) = `null`

#### Inherited from

[ChunkSource](chunk_manager_backend.ChunkSource.md).[rpc](chunk_manager_backend.ChunkSource.md#rpc)

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

[ChunkSource](chunk_manager_backend.ChunkSource.md).[rpcId](chunk_manager_backend.ChunkSource.md#rpcid)

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L170)

___

### sourceQueueLevel

• **sourceQueueLevel**: `number` = `0`

sourceQueueLevel must be greater than the sourceQueueLevel of any ChunkSource whose download
method depends on chunks from this source.  A normal ChunkSource with no other dependencies
should have a level of 0.

#### Inherited from

[ChunkSource](chunk_manager_backend.ChunkSource.md).[sourceQueueLevel](chunk_manager_backend.ChunkSource.md#sourcequeuelevel)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:256](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L256)

___

### spec

• **spec**: `Spec`

#### Implementation of

[SliceViewChunkSource](../interfaces/sliceview_base.SliceViewChunkSource.md).[spec](../interfaces/sliceview_base.SliceViewChunkSource.md#spec)

#### Defined in

[src/neuroglancer/sliceview/backend.ts:311](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/backend.ts#L311)

___

### statistics

• **statistics**: `Float64Array`

#### Inherited from

[ChunkSource](chunk_manager_backend.ChunkSource.md).[statistics](chunk_manager_backend.ChunkSource.md#statistics)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:249](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L249)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

[ChunkSource](chunk_manager_backend.ChunkSource.md).[unreferencedGeneration](chunk_manager_backend.ChunkSource.md#unreferencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L172)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[ChunkSource](chunk_manager_backend.ChunkSource.md).[wasDisposed](chunk_manager_backend.ChunkSource.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addChunk

▸ **addChunk**(`chunk`): `void`

Adds the specified chunk to the chunk cache.

If the chunk cache was previously empty, also call this.addRef() to increment the reference
count.

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`Chunk`](chunk_manager_backend.Chunk.md) |

#### Returns

`void`

#### Inherited from

[ChunkSource](chunk_manager_backend.ChunkSource.md).[addChunk](chunk_manager_backend.ChunkSource.md#addchunk)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:288](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L288)

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

[ChunkSource](chunk_manager_backend.ChunkSource.md).[addCounterpartRef](chunk_manager_backend.ChunkSource.md#addcounterpartref)

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`SliceViewChunkSourceBackend`](sliceview_backend.SliceViewChunkSourceBackend.md)<`Spec`, `ChunkType`\>

#### Returns

[`SliceViewChunkSourceBackend`](sliceview_backend.SliceViewChunkSourceBackend.md)<`Spec`, `ChunkType`\>

#### Inherited from

[ChunkSource](chunk_manager_backend.ChunkSource.md).[addRef](chunk_manager_backend.ChunkSource.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### chunkStateChanged

▸ **chunkStateChanged**(`chunk`, `oldState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`Chunk`](chunk_manager_backend.Chunk.md) |
| `oldState` | [`ChunkState`](../enums/chunk_manager_base.ChunkState.md) |

#### Returns

`void`

#### Inherited from

[ChunkSource](chunk_manager_backend.ChunkSource.md).[chunkStateChanged](chunk_manager_backend.ChunkSource.md#chunkstatechanged)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:337](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L337)

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

[ChunkSource](chunk_manager_backend.ChunkSource.md).[counterpartRefCountReachedZero](chunk_manager_backend.ChunkSource.md#counterpartrefcountreachedzero)

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L234)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[ChunkSource](chunk_manager_backend.ChunkSource.md).[dispose](chunk_manager_backend.ChunkSource.md#dispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[ChunkSource](chunk_manager_backend.ChunkSource.md).[disposed](chunk_manager_backend.ChunkSource.md#disposed)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:263](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L263)

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
| `chunk` | [`Chunk`](chunk_manager_backend.Chunk.md) | Chunk to download. |
| `cancellationToken` | [`CancellationToken`](../interfaces/util_cancellation.CancellationToken.md) | If this token is canceled, the download/decoding should be aborted if possible.  TODO(jbms): Move this back to the class definition above and declare this abstract once mixins are compatible with abstract classes. |

#### Returns

`Promise`<`void`\>

#### Inherited from

[ChunkSource](chunk_manager_backend.ChunkSource.md).[download](chunk_manager_backend.ChunkSource.md#download)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:376](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L376)

___

### getChunk

▸ **getChunk**(`chunkGridPosition`): `ChunkType`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkGridPosition` | [`vec3`](util_geom.vec3.md) |

#### Returns

`ChunkType`

#### Defined in

[src/neuroglancer/sliceview/backend.ts:302](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/backend.ts#L302)

▸ **getChunk**(`chunkGridPosition`): `ChunkType`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkGridPosition` | `Float32Array` |

#### Returns

`ChunkType`

#### Defined in

[src/neuroglancer/sliceview/backend.ts:318](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/backend.ts#L318)

___

### getNewChunk\_

▸ **getNewChunk_**<`T`\>(`chunkType`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Chunk`](chunk_manager_backend.Chunk.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkType` | [`ChunkConstructor`](../interfaces/chunk_manager_backend.ChunkConstructor.md)<`T`\> |

#### Returns

`T`

#### Inherited from

[ChunkSource](chunk_manager_backend.ChunkSource.md).[getNewChunk_](chunk_manager_backend.ChunkSource.md#getnewchunk_)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:268](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L268)

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

[ChunkSource](chunk_manager_backend.ChunkSource.md).[initializeCounterpart](chunk_manager_backend.ChunkSource.md#initializecounterpart)

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

[ChunkSource](chunk_manager_backend.ChunkSource.md).[initializeSharedObject](chunk_manager_backend.ChunkSource.md#initializesharedobject)

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L175)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

[ChunkSource](chunk_manager_backend.ChunkSource.md).[ownerDispose](chunk_manager_backend.ChunkSource.md#ownerdispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[ChunkSource](chunk_manager_backend.ChunkSource.md).[refCountReachedZero](chunk_manager_backend.ChunkSource.md#refcountreachedzero)

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

[ChunkSource](chunk_manager_backend.ChunkSource.md).[registerCancellable](chunk_manager_backend.ChunkSource.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L100)

___

### registerChunkListener

▸ **registerChunkListener**(`key`, `listener`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `listener` | [`ChunkStateListener`](../interfaces/chunk_manager_backend.ChunkStateListener.md) |

#### Returns

`boolean`

#### Inherited from

[ChunkSource](chunk_manager_backend.ChunkSource.md).[registerChunkListener](chunk_manager_backend.ChunkSource.md#registerchunklistener)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:312](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L312)

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

[ChunkSource](chunk_manager_backend.ChunkSource.md).[registerDisposer](chunk_manager_backend.ChunkSource.md#registerdisposer)

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

[ChunkSource](chunk_manager_backend.ChunkSource.md).[registerEventListener](chunk_manager_backend.ChunkSource.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

___

### removeChunk

▸ **removeChunk**(`chunk`): `void`

Remove the specified chunk from the chunk cache.

If the chunk cache becomes empty, also call this.dispose() to decrement the reference count.

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`Chunk`](chunk_manager_backend.Chunk.md) |

#### Returns

`void`

#### Inherited from

[ChunkSource](chunk_manager_backend.ChunkSource.md).[removeChunk](chunk_manager_backend.ChunkSource.md#removechunk)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:302](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L302)

___

### unregisterChunkListener

▸ **unregisterChunkListener**(`key`, `listener`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `listener` | [`ChunkStateListener`](../interfaces/chunk_manager_backend.ChunkStateListener.md) |

#### Returns

`boolean`

#### Inherited from

[ChunkSource](chunk_manager_backend.ChunkSource.md).[unregisterChunkListener](chunk_manager_backend.ChunkSource.md#unregisterchunklistener)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:321](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L321)

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

[ChunkSource](chunk_manager_backend.ChunkSource.md).[unregisterDisposer](chunk_manager_backend.ChunkSource.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)
