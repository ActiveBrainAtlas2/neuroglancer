[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/chunk\_manager/generic\_file\_source](../modules/neuroglancer_chunk_manager_generic_file_source.md) / GenericSharedDataSource

# Class: GenericSharedDataSource<Key, Data\>

[neuroglancer/chunk_manager/generic_file_source](../modules/neuroglancer_chunk_manager_generic_file_source.md).GenericSharedDataSource

Base class inherited by both ChunkSource, for implementing the backend part of chunk sources that
also have a frontend-part, as well as other chunk sources, such as the GenericFileSource, that
has only a backend part.

## Type parameters

| Name |
| :------ |
| `Key` |
| `Data` |

## Hierarchy

- [`ChunkSourceBase`](neuroglancer_chunk_manager_backend.ChunkSourceBase.md)

  ↳ **`GenericSharedDataSource`**

  ↳↳ [`MinishardIndexSource`](../interfaces/neuroglancer_datasource_precomputed_backend._internal_.MinishardIndexSource.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#constructor)

### Properties

- [RPC\_TYPE\_ID](neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#rpc_type_id)
- [chunkManager](neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#chunkmanager)
- [chunks](neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#chunks)
- [disposedStacks](neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#disposedstacks)
- [downloadFunction](neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#downloadfunction)
- [encodeKeyFunction](neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#encodekeyfunction)
- [freeChunks](neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#freechunks)
- [isOwner](neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#isowner)
- [refCount](neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#refcount)
- [referencedGeneration](neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#referencedgeneration)
- [rpc](neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#rpc)
- [rpcId](neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#rpcid)
- [sourceQueueLevel](neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#sourcequeuelevel)
- [statistics](neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#statistics)
- [unreferencedGeneration](neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#unreferencedgeneration)
- [wasDisposed](neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#wasdisposed)

### Methods

- [addChunk](neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#addchunk)
- [addCounterpartRef](neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#addcounterpartref)
- [addRef](neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#addref)
- [chunkStateChanged](neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#chunkstatechanged)
- [counterpartRefCountReachedZero](neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#counterpartrefcountreachedzero)
- [dispose](neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#dispose)
- [disposed](neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#disposed)
- [download](neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#download)
- [getData](neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#getdata)
- [getNewChunk\_](neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#getnewchunk_)
- [initializeCounterpart](neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#initializecounterpart)
- [initializeSharedObject](neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#initializesharedobject)
- [ownerDispose](neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#ownerdispose)
- [refCountReachedZero](neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#refcountreachedzero)
- [registerCancellable](neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#registercancellable)
- [registerChunkListener](neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#registerchunklistener)
- [registerDisposer](neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#registerdisposer)
- [registerEventListener](neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#registereventlistener)
- [removeChunk](neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#removechunk)
- [unregisterChunkListener](neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#unregisterchunklistener)
- [unregisterDisposer](neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#unregisterdisposer)
- [updateChunkPriorities](neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#updatechunkpriorities)
- [get](neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#get)
- [getData](neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#getdata-1)
- [getUrl](neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md#geturl)

## Constructors

### constructor

• **new GenericSharedDataSource**<`Key`, `Data`\>(`chunkManager`, `options`)

#### Type parameters

| Name |
| :------ |
| `Key` |
| `Data` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](neuroglancer_chunk_manager_backend.ChunkManager.md) |
| `options` | [`GenericSharedDataSourceOptions`](../interfaces/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSourceOptions.md)<`Key`, `Data`\> |

#### Overrides

[ChunkSourceBase](neuroglancer_chunk_manager_backend.ChunkSourceBase.md).[constructor](neuroglancer_chunk_manager_backend.ChunkSourceBase.md#constructor)

#### Defined in

[src/neuroglancer/chunk_manager/generic_file_source.ts:89](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/generic_file_source.ts#L89)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

[ChunkSourceBase](neuroglancer_chunk_manager_backend.ChunkSourceBase.md).[RPC_TYPE_ID](neuroglancer_chunk_manager_backend.ChunkSourceBase.md#rpc_type_id)

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L245)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](neuroglancer_chunk_manager_backend.ChunkManager.md)

#### Inherited from

[ChunkSourceBase](neuroglancer_chunk_manager_backend.ChunkSourceBase.md).[chunkManager](neuroglancer_chunk_manager_backend.ChunkSourceBase.md#chunkmanager)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:258](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L258)

___

### chunks

• **chunks**: `Map`<`string`, [`GenericSharedDataChunk`](neuroglancer_chunk_manager_generic_file_source._internal_.GenericSharedDataChunk.md)<`Key`, `Data`\>\>

#### Overrides

[ChunkSourceBase](neuroglancer_chunk_manager_backend.ChunkSourceBase.md).[chunks](neuroglancer_chunk_manager_backend.ChunkSourceBase.md#chunks)

#### Defined in

[src/neuroglancer/chunk_manager/generic_file_source.ts:82](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/generic_file_source.ts#L82)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[ChunkSourceBase](neuroglancer_chunk_manager_backend.ChunkSourceBase.md).[disposedStacks](neuroglancer_chunk_manager_backend.ChunkSourceBase.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### downloadFunction

• `Private` **downloadFunction**: (`key`: `Key`, `cancellationToken`: [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md)) => `Promise`<{ `data`: `Data` ; `size`: `number`  }\>

#### Type declaration

▸ (`key`, `cancellationToken`): `Promise`<{ `data`: `Data` ; `size`: `number`  }\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Key` |
| `cancellationToken` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) |

##### Returns

`Promise`<{ `data`: `Data` ; `size`: `number`  }\>

#### Defined in

[src/neuroglancer/chunk_manager/generic_file_source.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/generic_file_source.ts#L86)

___

### encodeKeyFunction

• `Private` **encodeKeyFunction**: (`key`: `Key`) => `string`

#### Type declaration

▸ (`key`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Key` |

##### Returns

`string`

#### Defined in

[src/neuroglancer/chunk_manager/generic_file_source.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/generic_file_source.ts#L84)

___

### freeChunks

• **freeChunks**: [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md)[]

#### Inherited from

[ChunkSourceBase](neuroglancer_chunk_manager_backend.ChunkSourceBase.md).[freeChunks](neuroglancer_chunk_manager_backend.ChunkSourceBase.md#freechunks)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:248](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L248)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

[ChunkSourceBase](neuroglancer_chunk_manager_backend.ChunkSourceBase.md).[isOwner](neuroglancer_chunk_manager_backend.ChunkSourceBase.md#isowner)

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L171)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[ChunkSourceBase](neuroglancer_chunk_manager_backend.ChunkSourceBase.md).[refCount](neuroglancer_chunk_manager_backend.ChunkSourceBase.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

[ChunkSourceBase](neuroglancer_chunk_manager_backend.ChunkSourceBase.md).[referencedGeneration](neuroglancer_chunk_manager_backend.ChunkSourceBase.md#referencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](neuroglancer_worker_rpc.RPC.md) = `null`

#### Inherited from

[ChunkSourceBase](neuroglancer_chunk_manager_backend.ChunkSourceBase.md).[rpc](neuroglancer_chunk_manager_backend.ChunkSourceBase.md#rpc)

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

[ChunkSourceBase](neuroglancer_chunk_manager_backend.ChunkSourceBase.md).[rpcId](neuroglancer_chunk_manager_backend.ChunkSourceBase.md#rpcid)

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L170)

___

### sourceQueueLevel

• **sourceQueueLevel**: `number` = `0`

sourceQueueLevel must be greater than the sourceQueueLevel of any ChunkSource whose download
method depends on chunks from this source.  A normal ChunkSource with no other dependencies
should have a level of 0.

#### Inherited from

[ChunkSourceBase](neuroglancer_chunk_manager_backend.ChunkSourceBase.md).[sourceQueueLevel](neuroglancer_chunk_manager_backend.ChunkSourceBase.md#sourcequeuelevel)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:256](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L256)

___

### statistics

• **statistics**: `Float64Array`

#### Inherited from

[ChunkSourceBase](neuroglancer_chunk_manager_backend.ChunkSourceBase.md).[statistics](neuroglancer_chunk_manager_backend.ChunkSourceBase.md#statistics)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:249](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L249)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

[ChunkSourceBase](neuroglancer_chunk_manager_backend.ChunkSourceBase.md).[unreferencedGeneration](neuroglancer_chunk_manager_backend.ChunkSourceBase.md#unreferencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L172)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[ChunkSourceBase](neuroglancer_chunk_manager_backend.ChunkSourceBase.md).[wasDisposed](neuroglancer_chunk_manager_backend.ChunkSourceBase.md#wasdisposed)

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

[ChunkSourceBase](neuroglancer_chunk_manager_backend.ChunkSourceBase.md).[addChunk](neuroglancer_chunk_manager_backend.ChunkSourceBase.md#addchunk)

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

[ChunkSourceBase](neuroglancer_chunk_manager_backend.ChunkSourceBase.md).[addCounterpartRef](neuroglancer_chunk_manager_backend.ChunkSourceBase.md#addcounterpartref)

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`GenericSharedDataSource`](neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md)<`Key`, `Data`\>

#### Returns

[`GenericSharedDataSource`](neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md)<`Key`, `Data`\>

#### Inherited from

[ChunkSourceBase](neuroglancer_chunk_manager_backend.ChunkSourceBase.md).[addRef](neuroglancer_chunk_manager_backend.ChunkSourceBase.md#addref)

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

[ChunkSourceBase](neuroglancer_chunk_manager_backend.ChunkSourceBase.md).[chunkStateChanged](neuroglancer_chunk_manager_backend.ChunkSourceBase.md#chunkstatechanged)

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

[ChunkSourceBase](neuroglancer_chunk_manager_backend.ChunkSourceBase.md).[counterpartRefCountReachedZero](neuroglancer_chunk_manager_backend.ChunkSourceBase.md#counterpartrefcountreachedzero)

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L234)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[ChunkSourceBase](neuroglancer_chunk_manager_backend.ChunkSourceBase.md).[dispose](neuroglancer_chunk_manager_backend.ChunkSourceBase.md#dispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[ChunkSourceBase](neuroglancer_chunk_manager_backend.ChunkSourceBase.md).[disposed](neuroglancer_chunk_manager_backend.ChunkSourceBase.md#disposed)

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
| `chunk` | [`GenericSharedDataChunk`](neuroglancer_chunk_manager_generic_file_source._internal_.GenericSharedDataChunk.md)<`Key`, `Data`\> | Chunk to download. |
| `cancellationToken` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) | If this token is canceled, the download/decoding should be aborted if possible.  TODO(jbms): Move this back to the class definition above and declare this abstract once mixins are compatible with abstract classes. |

#### Returns

`Promise`<`void`\>

#### Overrides

[ChunkSourceBase](neuroglancer_chunk_manager_backend.ChunkSourceBase.md).[download](neuroglancer_chunk_manager_backend.ChunkSourceBase.md#download)

#### Defined in

[src/neuroglancer/chunk_manager/generic_file_source.ts:119](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/generic_file_source.ts#L119)

___

### getData

▸ **getData**(`key`, `getPriority`, `cancellationToken`): `Promise`<`Data`\>

Precondition: priorityTier <= ChunkPriorityTier.LAST_ORDERED_TIER

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Key` |
| `getPriority` | [`PriorityGetter`](../modules/neuroglancer_chunk_manager_generic_file_source.md#prioritygetter) |
| `cancellationToken` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) |

#### Returns

`Promise`<`Data`\>

#### Defined in

[src/neuroglancer/chunk_manager/generic_file_source.ts:128](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/generic_file_source.ts#L128)

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

[ChunkSourceBase](neuroglancer_chunk_manager_backend.ChunkSourceBase.md).[getNewChunk_](neuroglancer_chunk_manager_backend.ChunkSourceBase.md#getnewchunk_)

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

[ChunkSourceBase](neuroglancer_chunk_manager_backend.ChunkSourceBase.md).[initializeCounterpart](neuroglancer_chunk_manager_backend.ChunkSourceBase.md#initializecounterpart)

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

[ChunkSourceBase](neuroglancer_chunk_manager_backend.ChunkSourceBase.md).[initializeSharedObject](neuroglancer_chunk_manager_backend.ChunkSourceBase.md#initializesharedobject)

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L175)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

[ChunkSourceBase](neuroglancer_chunk_manager_backend.ChunkSourceBase.md).[ownerDispose](neuroglancer_chunk_manager_backend.ChunkSourceBase.md#ownerdispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[ChunkSourceBase](neuroglancer_chunk_manager_backend.ChunkSourceBase.md).[refCountReachedZero](neuroglancer_chunk_manager_backend.ChunkSourceBase.md#refcountreachedzero)

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

[ChunkSourceBase](neuroglancer_chunk_manager_backend.ChunkSourceBase.md).[registerCancellable](neuroglancer_chunk_manager_backend.ChunkSourceBase.md#registercancellable)

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

[ChunkSourceBase](neuroglancer_chunk_manager_backend.ChunkSourceBase.md).[registerChunkListener](neuroglancer_chunk_manager_backend.ChunkSourceBase.md#registerchunklistener)

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

[ChunkSourceBase](neuroglancer_chunk_manager_backend.ChunkSourceBase.md).[registerDisposer](neuroglancer_chunk_manager_backend.ChunkSourceBase.md#registerdisposer)

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

[ChunkSourceBase](neuroglancer_chunk_manager_backend.ChunkSourceBase.md).[registerEventListener](neuroglancer_chunk_manager_backend.ChunkSourceBase.md#registereventlistener)

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

[ChunkSourceBase](neuroglancer_chunk_manager_backend.ChunkSourceBase.md).[removeChunk](neuroglancer_chunk_manager_backend.ChunkSourceBase.md#removechunk)

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

[ChunkSourceBase](neuroglancer_chunk_manager_backend.ChunkSourceBase.md).[unregisterChunkListener](neuroglancer_chunk_manager_backend.ChunkSourceBase.md#unregisterchunklistener)

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

[ChunkSourceBase](neuroglancer_chunk_manager_backend.ChunkSourceBase.md).[unregisterDisposer](neuroglancer_chunk_manager_backend.ChunkSourceBase.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)

___

### updateChunkPriorities

▸ **updateChunkPriorities**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/generic_file_source.ts:105](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/generic_file_source.ts#L105)

___

### get

▸ `Static` **get**<`Key`, `Data`\>(`chunkManager`, `memoizeKey`, `options`): [`GenericSharedDataSource`](neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md)<`Key`, `Data`\>

#### Type parameters

| Name |
| :------ |
| `Key` |
| `Data` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](neuroglancer_chunk_manager_backend.ChunkManager.md) |
| `memoizeKey` | `string` |
| `options` | [`GenericSharedDataSourceOptions`](../interfaces/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSourceOptions.md)<`Key`, `Data`\> |

#### Returns

[`GenericSharedDataSource`](neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md)<`Key`, `Data`\>

#### Defined in

[src/neuroglancer/chunk_manager/generic_file_source.ts:163](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/generic_file_source.ts#L163)

___

### getData

▸ `Static` **getData**<`Key`, `Data`\>(`chunkManager`, `memoizeKey`, `options`, `key`, `getPriority`, `cancellationToken`): `Promise`<`Data`\>

#### Type parameters

| Name |
| :------ |
| `Key` |
| `Data` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](neuroglancer_chunk_manager_backend.ChunkManager.md) |
| `memoizeKey` | `string` |
| `options` | [`GenericSharedDataSourceOptions`](../interfaces/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSourceOptions.md)<`Key`, `Data`\> |
| `key` | `Key` |
| `getPriority` | [`PriorityGetter`](../modules/neuroglancer_chunk_manager_generic_file_source.md#prioritygetter) |
| `cancellationToken` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) |

#### Returns

`Promise`<`Data`\>

#### Defined in

[src/neuroglancer/chunk_manager/generic_file_source.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/generic_file_source.ts#L171)

___

### getUrl

▸ `Static` **getUrl**<`Data`\>(`chunkManager`, `credentialsProvider`, `decodeFunction`, `url`, `getPriority`, `cancellationToken`): `Promise`<`Data`\>

#### Type parameters

| Name |
| :------ |
| `Data` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](neuroglancer_chunk_manager_backend.ChunkManager.md) |
| `credentialsProvider` | `undefined` \| [`CredentialsProvider`](neuroglancer_credentials_provider.CredentialsProvider.md)<`any`\> |
| `decodeFunction` | (`buffer`: `ArrayBuffer`, `cancellationToken`: [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md)) => `Promise`<{ `data`: `Data` ; `size`: `number`  }\> |
| `url` | `string` |
| `getPriority` | [`PriorityGetter`](../modules/neuroglancer_chunk_manager_generic_file_source.md#prioritygetter) |
| `cancellationToken` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) |

#### Returns

`Promise`<`Data`\>

#### Defined in

[src/neuroglancer/chunk_manager/generic_file_source.ts:181](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/generic_file_source.ts#L181)
