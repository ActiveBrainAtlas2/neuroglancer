[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/datasource/brainmaps/backend](../modules/neuroglancer_datasource_brainmaps_backend.md) / BrainmapsSkeletonSource

# Class: BrainmapsSkeletonSource

[neuroglancer/datasource/brainmaps/backend](../modules/neuroglancer_datasource_brainmaps_backend.md).BrainmapsSkeletonSource

## Hierarchy

- `C`<[`SkeletonSourceParameters`](neuroglancer_datasource_brainmaps_base.SkeletonSourceParameters.md), (...`args`: `any`[]) => `__class`<[`OAuth2Credentials`](../interfaces/neuroglancer_credentials_provider_oauth2.OAuth2Credentials.md), typeof [`SkeletonSource`](neuroglancer_skeleton_backend.SkeletonSource.md)\> & typeof [`SkeletonSource`](neuroglancer_skeleton_backend.SkeletonSource.md), `this`\> & `__class`<[`OAuth2Credentials`](../interfaces/neuroglancer_credentials_provider_oauth2.OAuth2Credentials.md), typeof [`SkeletonSource`](neuroglancer_skeleton_backend.SkeletonSource.md), `this`\> & [`SkeletonSource`](neuroglancer_skeleton_backend.SkeletonSource.md)<`this`\>

  ↳ **`BrainmapsSkeletonSource`**

## Table of contents

### Constructors

- [constructor](neuroglancer_datasource_brainmaps_backend.BrainmapsSkeletonSource.md#constructor)

### Properties

- [RPC\_TYPE\_ID](neuroglancer_datasource_brainmaps_backend.BrainmapsSkeletonSource.md#rpc_type_id)
- [chunkManager](neuroglancer_datasource_brainmaps_backend.BrainmapsSkeletonSource.md#chunkmanager)
- [chunks](neuroglancer_datasource_brainmaps_backend.BrainmapsSkeletonSource.md#chunks)
- [credentialsProvider](neuroglancer_datasource_brainmaps_backend.BrainmapsSkeletonSource.md#credentialsprovider)
- [disposedStacks](neuroglancer_datasource_brainmaps_backend.BrainmapsSkeletonSource.md#disposedstacks)
- [freeChunks](neuroglancer_datasource_brainmaps_backend.BrainmapsSkeletonSource.md#freechunks)
- [isOwner](neuroglancer_datasource_brainmaps_backend.BrainmapsSkeletonSource.md#isowner)
- [parameters](neuroglancer_datasource_brainmaps_backend.BrainmapsSkeletonSource.md#parameters)
- [refCount](neuroglancer_datasource_brainmaps_backend.BrainmapsSkeletonSource.md#refcount)
- [referencedGeneration](neuroglancer_datasource_brainmaps_backend.BrainmapsSkeletonSource.md#referencedgeneration)
- [rpc](neuroglancer_datasource_brainmaps_backend.BrainmapsSkeletonSource.md#rpc)
- [rpcId](neuroglancer_datasource_brainmaps_backend.BrainmapsSkeletonSource.md#rpcid)
- [sourceQueueLevel](neuroglancer_datasource_brainmaps_backend.BrainmapsSkeletonSource.md#sourcequeuelevel)
- [statistics](neuroglancer_datasource_brainmaps_backend.BrainmapsSkeletonSource.md#statistics)
- [unreferencedGeneration](neuroglancer_datasource_brainmaps_backend.BrainmapsSkeletonSource.md#unreferencedgeneration)
- [wasDisposed](neuroglancer_datasource_brainmaps_backend.BrainmapsSkeletonSource.md#wasdisposed)

### Methods

- [addChunk](neuroglancer_datasource_brainmaps_backend.BrainmapsSkeletonSource.md#addchunk)
- [addCounterpartRef](neuroglancer_datasource_brainmaps_backend.BrainmapsSkeletonSource.md#addcounterpartref)
- [addRef](neuroglancer_datasource_brainmaps_backend.BrainmapsSkeletonSource.md#addref)
- [chunkStateChanged](neuroglancer_datasource_brainmaps_backend.BrainmapsSkeletonSource.md#chunkstatechanged)
- [counterpartRefCountReachedZero](neuroglancer_datasource_brainmaps_backend.BrainmapsSkeletonSource.md#counterpartrefcountreachedzero)
- [dispose](neuroglancer_datasource_brainmaps_backend.BrainmapsSkeletonSource.md#dispose)
- [disposed](neuroglancer_datasource_brainmaps_backend.BrainmapsSkeletonSource.md#disposed)
- [download](neuroglancer_datasource_brainmaps_backend.BrainmapsSkeletonSource.md#download)
- [getChunk](neuroglancer_datasource_brainmaps_backend.BrainmapsSkeletonSource.md#getchunk)
- [getNewChunk\_](neuroglancer_datasource_brainmaps_backend.BrainmapsSkeletonSource.md#getnewchunk_)
- [initializeCounterpart](neuroglancer_datasource_brainmaps_backend.BrainmapsSkeletonSource.md#initializecounterpart)
- [initializeSharedObject](neuroglancer_datasource_brainmaps_backend.BrainmapsSkeletonSource.md#initializesharedobject)
- [ownerDispose](neuroglancer_datasource_brainmaps_backend.BrainmapsSkeletonSource.md#ownerdispose)
- [refCountReachedZero](neuroglancer_datasource_brainmaps_backend.BrainmapsSkeletonSource.md#refcountreachedzero)
- [registerCancellable](neuroglancer_datasource_brainmaps_backend.BrainmapsSkeletonSource.md#registercancellable)
- [registerChunkListener](neuroglancer_datasource_brainmaps_backend.BrainmapsSkeletonSource.md#registerchunklistener)
- [registerDisposer](neuroglancer_datasource_brainmaps_backend.BrainmapsSkeletonSource.md#registerdisposer)
- [registerEventListener](neuroglancer_datasource_brainmaps_backend.BrainmapsSkeletonSource.md#registereventlistener)
- [removeChunk](neuroglancer_datasource_brainmaps_backend.BrainmapsSkeletonSource.md#removechunk)
- [unregisterChunkListener](neuroglancer_datasource_brainmaps_backend.BrainmapsSkeletonSource.md#unregisterchunklistener)
- [unregisterDisposer](neuroglancer_datasource_brainmaps_backend.BrainmapsSkeletonSource.md#unregisterdisposer)

## Constructors

### constructor

• **new BrainmapsSkeletonSource**(`rpc`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](neuroglancer_worker_rpc.RPC.md) |
| `options` | `any` |

#### Inherited from

(BrainmapsSource(SkeletonSource, SkeletonSourceParameters)).constructor

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:380](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L380)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

(BrainmapsSource(SkeletonSource, SkeletonSourceParameters)).RPC\_TYPE\_ID

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L245)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](neuroglancer_chunk_manager_backend.ChunkManager.md)

#### Inherited from

(BrainmapsSource(SkeletonSource, SkeletonSourceParameters)).chunkManager

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:258](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L258)

___

### chunks

• **chunks**: `Map`<`string`, [`SkeletonChunk`](neuroglancer_skeleton_backend.SkeletonChunk.md)\>

#### Inherited from

(BrainmapsSource(SkeletonSource, SkeletonSourceParameters)).chunks

#### Defined in

[src/neuroglancer/skeleton/backend.ts:103](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/skeleton/backend.ts#L103)

___

### credentialsProvider

• **credentialsProvider**: [`CredentialsProvider`](neuroglancer_credentials_provider.CredentialsProvider.md)<[`OAuth2Credentials`](../interfaces/neuroglancer_credentials_provider_oauth2.OAuth2Credentials.md)\>

#### Inherited from

(BrainmapsSource(SkeletonSource, SkeletonSourceParameters)).credentialsProvider

#### Defined in

[src/neuroglancer/credentials_provider/shared_counterpart.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/credentials_provider/shared_counterpart.ts#L42)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

(BrainmapsSource(SkeletonSource, SkeletonSourceParameters)).disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### freeChunks

• **freeChunks**: [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md)[]

#### Inherited from

(BrainmapsSource(SkeletonSource, SkeletonSourceParameters)).freeChunks

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:248](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L248)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

(BrainmapsSource(SkeletonSource, SkeletonSourceParameters)).isOwner

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L171)

___

### parameters

• **parameters**: [`SkeletonSourceParameters`](neuroglancer_datasource_brainmaps_base.SkeletonSourceParameters.md)

#### Inherited from

(BrainmapsSource(SkeletonSource, SkeletonSourceParameters)).parameters

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:1125](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L1125)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

(BrainmapsSource(SkeletonSource, SkeletonSourceParameters)).refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

(BrainmapsSource(SkeletonSource, SkeletonSourceParameters)).referencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](neuroglancer_worker_rpc.RPC.md) = `null`

#### Inherited from

(BrainmapsSource(SkeletonSource, SkeletonSourceParameters)).rpc

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

(BrainmapsSource(SkeletonSource, SkeletonSourceParameters)).rpcId

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L170)

___

### sourceQueueLevel

• **sourceQueueLevel**: `number` = `0`

sourceQueueLevel must be greater than the sourceQueueLevel of any ChunkSource whose download
method depends on chunks from this source.  A normal ChunkSource with no other dependencies
should have a level of 0.

#### Inherited from

(BrainmapsSource(SkeletonSource, SkeletonSourceParameters)).sourceQueueLevel

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:256](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L256)

___

### statistics

• **statistics**: `Float64Array`

#### Inherited from

(BrainmapsSource(SkeletonSource, SkeletonSourceParameters)).statistics

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:249](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L249)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

(BrainmapsSource(SkeletonSource, SkeletonSourceParameters)).unreferencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L172)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

(BrainmapsSource(SkeletonSource, SkeletonSourceParameters)).wasDisposed

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

(BrainmapsSource(SkeletonSource, SkeletonSourceParameters)).addChunk

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

(BrainmapsSource(SkeletonSource, SkeletonSourceParameters)).addCounterpartRef

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`BrainmapsSkeletonSource`](neuroglancer_datasource_brainmaps_backend.BrainmapsSkeletonSource.md)

#### Returns

[`BrainmapsSkeletonSource`](neuroglancer_datasource_brainmaps_backend.BrainmapsSkeletonSource.md)

#### Inherited from

(BrainmapsSource(SkeletonSource, SkeletonSourceParameters)).addRef

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

(BrainmapsSource(SkeletonSource, SkeletonSourceParameters)).chunkStateChanged

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

(BrainmapsSource(SkeletonSource, SkeletonSourceParameters)).counterpartRefCountReachedZero

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L234)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

(BrainmapsSource(SkeletonSource, SkeletonSourceParameters)).dispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

(BrainmapsSource(SkeletonSource, SkeletonSourceParameters)).disposed

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L75)

___

### download

▸ **download**(`chunk`, `cancellationToken`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`SkeletonChunk`](neuroglancer_skeleton_backend.SkeletonChunk.md) |
| `cancellationToken` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) |

#### Returns

`Promise`<`void`\>

#### Overrides

(BrainmapsSource(SkeletonSource, SkeletonSourceParameters)).download

#### Defined in

[src/neuroglancer/datasource/brainmaps/backend.ts:624](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/brainmaps/backend.ts#L624)

___

### getChunk

▸ **getChunk**(`objectId`): [`SkeletonChunk`](neuroglancer_skeleton_backend.SkeletonChunk.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `objectId` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

[`SkeletonChunk`](neuroglancer_skeleton_backend.SkeletonChunk.md)

#### Inherited from

(BrainmapsSource(SkeletonSource, SkeletonSourceParameters)).getChunk

#### Defined in

[src/neuroglancer/skeleton/backend.ts:104](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/skeleton/backend.ts#L104)

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

(BrainmapsSource(SkeletonSource, SkeletonSourceParameters)).getNewChunk\_

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

(BrainmapsSource(SkeletonSource, SkeletonSourceParameters)).initializeCounterpart

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

(BrainmapsSource(SkeletonSource, SkeletonSourceParameters)).initializeSharedObject

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L175)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

(BrainmapsSource(SkeletonSource, SkeletonSourceParameters)).ownerDispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

(BrainmapsSource(SkeletonSource, SkeletonSourceParameters)).refCountReachedZero

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

(BrainmapsSource(SkeletonSource, SkeletonSourceParameters)).registerCancellable

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

(BrainmapsSource(SkeletonSource, SkeletonSourceParameters)).registerChunkListener

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

(BrainmapsSource(SkeletonSource, SkeletonSourceParameters)).registerDisposer

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

(BrainmapsSource(SkeletonSource, SkeletonSourceParameters)).registerEventListener

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

(BrainmapsSource(SkeletonSource, SkeletonSourceParameters)).removeChunk

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

(BrainmapsSource(SkeletonSource, SkeletonSourceParameters)).unregisterChunkListener

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

(BrainmapsSource(SkeletonSource, SkeletonSourceParameters)).unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)
