[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/datasource/precomputed/backend](../modules/neuroglancer_datasource_precomputed_backend.md) / [<internal\>](../modules/neuroglancer_datasource_precomputed_backend._internal_.md) / MinishardIndexSource

# Interface: MinishardIndexSource

[neuroglancer/datasource/precomputed/backend](../modules/neuroglancer_datasource_precomputed_backend.md).[<internal>](../modules/neuroglancer_datasource_precomputed_backend._internal_.md).MinishardIndexSource

Base class inherited by both ChunkSource, for implementing the backend part of chunk sources that
also have a frontend-part, as well as other chunk sources, such as the GenericFileSource, that
has only a backend part.

## Hierarchy

- [`GenericSharedDataSource`](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md)<[`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md), [`DecodedMinishardIndex`](neuroglancer_datasource_precomputed_backend._internal_.DecodedMinishardIndex.md) \| `undefined`\>

  ↳ **`MinishardIndexSource`**

## Table of contents

### Properties

- [RPC\_TYPE\_ID](neuroglancer_datasource_precomputed_backend._internal_.MinishardIndexSource.md#rpc_type_id)
- [chunkManager](neuroglancer_datasource_precomputed_backend._internal_.MinishardIndexSource.md#chunkmanager)
- [chunks](neuroglancer_datasource_precomputed_backend._internal_.MinishardIndexSource.md#chunks)
- [credentialsProvider](neuroglancer_datasource_precomputed_backend._internal_.MinishardIndexSource.md#credentialsprovider)
- [disposedStacks](neuroglancer_datasource_precomputed_backend._internal_.MinishardIndexSource.md#disposedstacks)
- [freeChunks](neuroglancer_datasource_precomputed_backend._internal_.MinishardIndexSource.md#freechunks)
- [isOwner](neuroglancer_datasource_precomputed_backend._internal_.MinishardIndexSource.md#isowner)
- [refCount](neuroglancer_datasource_precomputed_backend._internal_.MinishardIndexSource.md#refcount)
- [referencedGeneration](neuroglancer_datasource_precomputed_backend._internal_.MinishardIndexSource.md#referencedgeneration)
- [rpc](neuroglancer_datasource_precomputed_backend._internal_.MinishardIndexSource.md#rpc)
- [rpcId](neuroglancer_datasource_precomputed_backend._internal_.MinishardIndexSource.md#rpcid)
- [sharding](neuroglancer_datasource_precomputed_backend._internal_.MinishardIndexSource.md#sharding)
- [sourceQueueLevel](neuroglancer_datasource_precomputed_backend._internal_.MinishardIndexSource.md#sourcequeuelevel)
- [statistics](neuroglancer_datasource_precomputed_backend._internal_.MinishardIndexSource.md#statistics)
- [unreferencedGeneration](neuroglancer_datasource_precomputed_backend._internal_.MinishardIndexSource.md#unreferencedgeneration)
- [wasDisposed](neuroglancer_datasource_precomputed_backend._internal_.MinishardIndexSource.md#wasdisposed)

### Methods

- [addChunk](neuroglancer_datasource_precomputed_backend._internal_.MinishardIndexSource.md#addchunk)
- [addCounterpartRef](neuroglancer_datasource_precomputed_backend._internal_.MinishardIndexSource.md#addcounterpartref)
- [addRef](neuroglancer_datasource_precomputed_backend._internal_.MinishardIndexSource.md#addref)
- [chunkStateChanged](neuroglancer_datasource_precomputed_backend._internal_.MinishardIndexSource.md#chunkstatechanged)
- [counterpartRefCountReachedZero](neuroglancer_datasource_precomputed_backend._internal_.MinishardIndexSource.md#counterpartrefcountreachedzero)
- [dispose](neuroglancer_datasource_precomputed_backend._internal_.MinishardIndexSource.md#dispose)
- [disposed](neuroglancer_datasource_precomputed_backend._internal_.MinishardIndexSource.md#disposed)
- [download](neuroglancer_datasource_precomputed_backend._internal_.MinishardIndexSource.md#download)
- [getData](neuroglancer_datasource_precomputed_backend._internal_.MinishardIndexSource.md#getdata)
- [getNewChunk\_](neuroglancer_datasource_precomputed_backend._internal_.MinishardIndexSource.md#getnewchunk_)
- [initializeCounterpart](neuroglancer_datasource_precomputed_backend._internal_.MinishardIndexSource.md#initializecounterpart)
- [initializeSharedObject](neuroglancer_datasource_precomputed_backend._internal_.MinishardIndexSource.md#initializesharedobject)
- [ownerDispose](neuroglancer_datasource_precomputed_backend._internal_.MinishardIndexSource.md#ownerdispose)
- [refCountReachedZero](neuroglancer_datasource_precomputed_backend._internal_.MinishardIndexSource.md#refcountreachedzero)
- [registerCancellable](neuroglancer_datasource_precomputed_backend._internal_.MinishardIndexSource.md#registercancellable)
- [registerChunkListener](neuroglancer_datasource_precomputed_backend._internal_.MinishardIndexSource.md#registerchunklistener)
- [registerDisposer](neuroglancer_datasource_precomputed_backend._internal_.MinishardIndexSource.md#registerdisposer)
- [registerEventListener](neuroglancer_datasource_precomputed_backend._internal_.MinishardIndexSource.md#registereventlistener)
- [removeChunk](neuroglancer_datasource_precomputed_backend._internal_.MinishardIndexSource.md#removechunk)
- [unregisterChunkListener](neuroglancer_datasource_precomputed_backend._internal_.MinishardIndexSource.md#unregisterchunklistener)
- [unregisterDisposer](neuroglancer_datasource_precomputed_backend._internal_.MinishardIndexSource.md#unregisterdisposer)
- [updateChunkPriorities](neuroglancer_datasource_precomputed_backend._internal_.MinishardIndexSource.md#updatechunkpriorities)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

[GenericSharedDataSource](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md).[RPC_TYPE_ID](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#rpc_type_id)

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L245)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](../classes/neuroglancer_chunk_manager_backend.ChunkManager.md)

#### Inherited from

[GenericSharedDataSource](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md).[chunkManager](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#chunkmanager)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:258](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L258)

___

### chunks

• **chunks**: `Map`<`string`, [`GenericSharedDataChunk`](../classes/neuroglancer_chunk_manager_generic_file_source._internal_.GenericSharedDataChunk.md)<[`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md), `undefined` \| [`DecodedMinishardIndex`](neuroglancer_datasource_precomputed_backend._internal_.DecodedMinishardIndex.md)\>\>

#### Inherited from

[GenericSharedDataSource](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md).[chunks](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#chunks)

#### Defined in

[src/neuroglancer/chunk_manager/generic_file_source.ts:82](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/generic_file_source.ts#L82)

___

### credentialsProvider

• **credentialsProvider**: `undefined` \| [`CredentialsProvider`](../classes/neuroglancer_credentials_provider.CredentialsProvider.md)<`any`\>

#### Defined in

[src/neuroglancer/datasource/precomputed/backend.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/precomputed/backend.ts#L77)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[GenericSharedDataSource](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md).[disposedStacks](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### freeChunks

• **freeChunks**: [`Chunk`](../classes/neuroglancer_chunk_manager_backend.Chunk.md)[]

#### Inherited from

[GenericSharedDataSource](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md).[freeChunks](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#freechunks)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:248](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L248)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

[GenericSharedDataSource](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md).[isOwner](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#isowner)

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L171)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[GenericSharedDataSource](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md).[refCount](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

[GenericSharedDataSource](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md).[referencedGeneration](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#referencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](../classes/neuroglancer_worker_rpc.RPC.md) = `null`

#### Inherited from

[GenericSharedDataSource](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md).[rpc](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#rpc)

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

[GenericSharedDataSource](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md).[rpcId](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#rpcid)

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L170)

___

### sharding

• **sharding**: [`ShardingParameters`](neuroglancer_datasource_precomputed_base.ShardingParameters.md)

#### Defined in

[src/neuroglancer/datasource/precomputed/backend.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/precomputed/backend.ts#L76)

___

### sourceQueueLevel

• **sourceQueueLevel**: `number` = `0`

sourceQueueLevel must be greater than the sourceQueueLevel of any ChunkSource whose download
method depends on chunks from this source.  A normal ChunkSource with no other dependencies
should have a level of 0.

#### Inherited from

[GenericSharedDataSource](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md).[sourceQueueLevel](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#sourcequeuelevel)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:256](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L256)

___

### statistics

• **statistics**: `Float64Array`

#### Inherited from

[GenericSharedDataSource](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md).[statistics](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#statistics)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:249](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L249)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

[GenericSharedDataSource](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md).[unreferencedGeneration](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#unreferencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L172)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[GenericSharedDataSource](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md).[wasDisposed](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#wasdisposed)

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
| `chunk` | [`Chunk`](../classes/neuroglancer_chunk_manager_backend.Chunk.md) |

#### Returns

`void`

#### Inherited from

[GenericSharedDataSource](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md).[addChunk](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#addchunk)

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

[GenericSharedDataSource](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md).[addCounterpartRef](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#addcounterpartref)

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`MinishardIndexSource`](neuroglancer_datasource_precomputed_backend._internal_.MinishardIndexSource.md)

#### Returns

[`MinishardIndexSource`](neuroglancer_datasource_precomputed_backend._internal_.MinishardIndexSource.md)

#### Inherited from

[GenericSharedDataSource](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md).[addRef](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### chunkStateChanged

▸ **chunkStateChanged**(`chunk`, `oldState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`Chunk`](../classes/neuroglancer_chunk_manager_backend.Chunk.md) |
| `oldState` | [`ChunkState`](../enums/neuroglancer_chunk_manager_base.ChunkState.md) |

#### Returns

`void`

#### Inherited from

[GenericSharedDataSource](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md).[chunkStateChanged](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#chunkstatechanged)

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

[GenericSharedDataSource](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md).[counterpartRefCountReachedZero](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#counterpartrefcountreachedzero)

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L234)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[GenericSharedDataSource](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md).[dispose](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#dispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[GenericSharedDataSource](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md).[disposed](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#disposed)

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
| `chunk` | [`GenericSharedDataChunk`](../classes/neuroglancer_chunk_manager_generic_file_source._internal_.GenericSharedDataChunk.md)<[`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md), `undefined` \| [`DecodedMinishardIndex`](neuroglancer_datasource_precomputed_backend._internal_.DecodedMinishardIndex.md)\> | Chunk to download. |
| `cancellationToken` | [`CancellationToken`](neuroglancer_util_cancellation.CancellationToken.md) | If this token is canceled, the download/decoding should be aborted if possible.  TODO(jbms): Move this back to the class definition above and declare this abstract once mixins are compatible with abstract classes. |

#### Returns

`Promise`<`void`\>

#### Inherited from

[GenericSharedDataSource](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md).[download](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#download)

#### Defined in

[src/neuroglancer/chunk_manager/generic_file_source.ts:119](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/generic_file_source.ts#L119)

___

### getData

▸ **getData**(`key`, `getPriority`, `cancellationToken`): `Promise`<`undefined` \| [`DecodedMinishardIndex`](neuroglancer_datasource_precomputed_backend._internal_.DecodedMinishardIndex.md)\>

Precondition: priorityTier <= ChunkPriorityTier.LAST_ORDERED_TIER

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md) |
| `getPriority` | [`PriorityGetter`](../modules/neuroglancer_chunk_manager_generic_file_source.md#prioritygetter) |
| `cancellationToken` | [`CancellationToken`](neuroglancer_util_cancellation.CancellationToken.md) |

#### Returns

`Promise`<`undefined` \| [`DecodedMinishardIndex`](neuroglancer_datasource_precomputed_backend._internal_.DecodedMinishardIndex.md)\>

#### Inherited from

[GenericSharedDataSource](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md).[getData](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#getdata)

#### Defined in

[src/neuroglancer/chunk_manager/generic_file_source.ts:128](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/generic_file_source.ts#L128)

___

### getNewChunk\_

▸ **getNewChunk_**<`T`\>(`chunkType`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Chunk`](../classes/neuroglancer_chunk_manager_backend.Chunk.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkType` | [`ChunkConstructor`](neuroglancer_chunk_manager_backend.ChunkConstructor.md)<`T`\> |

#### Returns

`T`

#### Inherited from

[GenericSharedDataSource](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md).[getNewChunk_](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#getnewchunk_)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:268](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L268)

___

### initializeCounterpart

▸ **initializeCounterpart**(`rpc`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](../classes/neuroglancer_worker_rpc.RPC.md) |
| `options` | `any` |

#### Returns

`void`

#### Inherited from

[GenericSharedDataSource](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md).[initializeCounterpart](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#initializecounterpart)

#### Defined in

[src/neuroglancer/worker_rpc.ts:182](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L182)

___

### initializeSharedObject

▸ **initializeSharedObject**(`rpc`, `rpcId?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](../classes/neuroglancer_worker_rpc.RPC.md) |
| `rpcId` | `number` |

#### Returns

`void`

#### Inherited from

[GenericSharedDataSource](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md).[initializeSharedObject](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#initializesharedobject)

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L175)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

[GenericSharedDataSource](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md).[ownerDispose](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#ownerdispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[GenericSharedDataSource](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md).[refCountReachedZero](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#refcountreachedzero)

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

[GenericSharedDataSource](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md).[registerCancellable](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L100)

___

### registerChunkListener

▸ **registerChunkListener**(`key`, `listener`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `listener` | [`ChunkStateListener`](neuroglancer_chunk_manager_backend.ChunkStateListener.md) |

#### Returns

`boolean`

#### Inherited from

[GenericSharedDataSource](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md).[registerChunkListener](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#registerchunklistener)

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

[GenericSharedDataSource](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md).[registerDisposer](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#registerdisposer)

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
| `options?` | `boolean` \| [`AddEventListenerOptions`](main_module._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[GenericSharedDataSource](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md).[registerEventListener](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#registereventlistener)

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
| `chunk` | [`Chunk`](../classes/neuroglancer_chunk_manager_backend.Chunk.md) |

#### Returns

`void`

#### Inherited from

[GenericSharedDataSource](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md).[removeChunk](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#removechunk)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:302](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L302)

___

### unregisterChunkListener

▸ **unregisterChunkListener**(`key`, `listener`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `listener` | [`ChunkStateListener`](neuroglancer_chunk_manager_backend.ChunkStateListener.md) |

#### Returns

`boolean`

#### Inherited from

[GenericSharedDataSource](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md).[unregisterChunkListener](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#unregisterchunklistener)

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

[GenericSharedDataSource](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md).[unregisterDisposer](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)

___

### updateChunkPriorities

▸ **updateChunkPriorities**(): `void`

#### Returns

`void`

#### Inherited from

[GenericSharedDataSource](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md).[updateChunkPriorities](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#updatechunkpriorities)

#### Defined in

[src/neuroglancer/chunk_manager/generic_file_source.ts:105](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/generic_file_source.ts#L105)
