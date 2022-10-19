[neuroglancer](../README.md) / [Modules](../modules.md) / [mesh/backend](../modules/mesh_backend.md) / MultiscaleFragmentSource

# Class: MultiscaleFragmentSource

[mesh/backend](../modules/mesh_backend.md).MultiscaleFragmentSource

## Hierarchy

- [`ChunkSource`](chunk_manager_backend.ChunkSource.md)

  ↳ **`MultiscaleFragmentSource`**

## Table of contents

### Constructors

- [constructor](mesh_backend.MultiscaleFragmentSource.md#constructor)

### Properties

- [RPC\_TYPE\_ID](mesh_backend.MultiscaleFragmentSource.md#rpc_type_id)
- [chunkManager](mesh_backend.MultiscaleFragmentSource.md#chunkmanager)
- [chunks](mesh_backend.MultiscaleFragmentSource.md#chunks)
- [disposedStacks](mesh_backend.MultiscaleFragmentSource.md#disposedstacks)
- [freeChunks](mesh_backend.MultiscaleFragmentSource.md#freechunks)
- [isOwner](mesh_backend.MultiscaleFragmentSource.md#isowner)
- [meshSource](mesh_backend.MultiscaleFragmentSource.md#meshsource)
- [refCount](mesh_backend.MultiscaleFragmentSource.md#refcount)
- [referencedGeneration](mesh_backend.MultiscaleFragmentSource.md#referencedgeneration)
- [rpc](mesh_backend.MultiscaleFragmentSource.md#rpc)
- [rpcId](mesh_backend.MultiscaleFragmentSource.md#rpcid)
- [sourceQueueLevel](mesh_backend.MultiscaleFragmentSource.md#sourcequeuelevel)
- [statistics](mesh_backend.MultiscaleFragmentSource.md#statistics)
- [unreferencedGeneration](mesh_backend.MultiscaleFragmentSource.md#unreferencedgeneration)
- [wasDisposed](mesh_backend.MultiscaleFragmentSource.md#wasdisposed)

### Methods

- [addChunk](mesh_backend.MultiscaleFragmentSource.md#addchunk)
- [addCounterpartRef](mesh_backend.MultiscaleFragmentSource.md#addcounterpartref)
- [addRef](mesh_backend.MultiscaleFragmentSource.md#addref)
- [chunkStateChanged](mesh_backend.MultiscaleFragmentSource.md#chunkstatechanged)
- [counterpartRefCountReachedZero](mesh_backend.MultiscaleFragmentSource.md#counterpartrefcountreachedzero)
- [dispose](mesh_backend.MultiscaleFragmentSource.md#dispose)
- [disposed](mesh_backend.MultiscaleFragmentSource.md#disposed)
- [download](mesh_backend.MultiscaleFragmentSource.md#download)
- [getNewChunk\_](mesh_backend.MultiscaleFragmentSource.md#getnewchunk_)
- [initializeCounterpart](mesh_backend.MultiscaleFragmentSource.md#initializecounterpart)
- [initializeSharedObject](mesh_backend.MultiscaleFragmentSource.md#initializesharedobject)
- [ownerDispose](mesh_backend.MultiscaleFragmentSource.md#ownerdispose)
- [refCountReachedZero](mesh_backend.MultiscaleFragmentSource.md#refcountreachedzero)
- [registerCancellable](mesh_backend.MultiscaleFragmentSource.md#registercancellable)
- [registerChunkListener](mesh_backend.MultiscaleFragmentSource.md#registerchunklistener)
- [registerDisposer](mesh_backend.MultiscaleFragmentSource.md#registerdisposer)
- [registerEventListener](mesh_backend.MultiscaleFragmentSource.md#registereventlistener)
- [removeChunk](mesh_backend.MultiscaleFragmentSource.md#removechunk)
- [unregisterChunkListener](mesh_backend.MultiscaleFragmentSource.md#unregisterchunklistener)
- [unregisterDisposer](mesh_backend.MultiscaleFragmentSource.md#unregisterdisposer)

## Constructors

### constructor

• **new MultiscaleFragmentSource**(`rpc`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](annotation_annotation_layer_state._internal_.RPC.md) |
| `options` | `any` |

#### Inherited from

[ChunkSource](chunk_manager_backend.ChunkSource.md).[constructor](chunk_manager_backend.ChunkSource.md#constructor)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:380](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L380)

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

### chunkManager

• **chunkManager**: [`ChunkManager`](chunk_manager_backend.ChunkManager.md)

#### Inherited from

[ChunkSource](chunk_manager_backend.ChunkSource.md).[chunkManager](chunk_manager_backend.ChunkSource.md#chunkmanager)

___

### chunks

• **chunks**: `Map`<`string`, [`Chunk`](chunk_manager_backend.Chunk.md)\>

#### Inherited from

[ChunkSource](chunk_manager_backend.ChunkSource.md).[chunks](chunk_manager_backend.ChunkSource.md#chunks)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:247](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L247)

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

### meshSource

• **meshSource**: ``null`` \| [`MultiscaleMeshSource`](mesh_backend.MultiscaleMeshSource.md) = `null`

#### Defined in

[src/neuroglancer/mesh/backend.ts:520](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/backend.ts#L520)

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

▸ **addRef**(): [`MultiscaleFragmentSource`](mesh_backend.MultiscaleFragmentSource.md)

#### Returns

[`MultiscaleFragmentSource`](mesh_backend.MultiscaleFragmentSource.md)

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

| Name | Type |
| :------ | :------ |
| `chunk` | [`MultiscaleFragmentChunk`](mesh_backend.MultiscaleFragmentChunk.md) |
| `cancellationToken` | [`CancellationToken`](../interfaces/util_cancellation.CancellationToken.md) |

#### Returns

`Promise`<`void`\>

#### Overrides

[ChunkSource](chunk_manager_backend.ChunkSource.md).[download](chunk_manager_backend.ChunkSource.md#download)

#### Defined in

[src/neuroglancer/mesh/backend.ts:521](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/backend.ts#L521)

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
