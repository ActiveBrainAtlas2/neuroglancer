[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/datasource/brainmaps/backend](../modules/neuroglancer_datasource_brainmaps_backend.md) / BrainmapsMeshSource

# Class: BrainmapsMeshSource

[neuroglancer/datasource/brainmaps/backend](../modules/neuroglancer_datasource_brainmaps_backend.md).BrainmapsMeshSource

## Hierarchy

- `C`<[`MeshSourceParameters`](neuroglancer_datasource_brainmaps_base.MeshSourceParameters.md), (...`args`: `any`[]) => `__class`<[`OAuth2Credentials`](../interfaces/neuroglancer_credentials_provider_oauth2.OAuth2Credentials.md), typeof [`MeshSource`](neuroglancer_mesh_backend.MeshSource.md)\> & typeof [`MeshSource`](neuroglancer_mesh_backend.MeshSource.md), `this`\> & `__class`<[`OAuth2Credentials`](../interfaces/neuroglancer_credentials_provider_oauth2.OAuth2Credentials.md), typeof [`MeshSource`](neuroglancer_mesh_backend.MeshSource.md), `this`\> & [`MeshSource`](neuroglancer_mesh_backend.MeshSource.md)<`this`\>

  ↳ **`BrainmapsMeshSource`**

## Table of contents

### Constructors

- [constructor](neuroglancer_datasource_brainmaps_backend.BrainmapsMeshSource.md#constructor)

### Properties

- [RPC\_TYPE\_ID](neuroglancer_datasource_brainmaps_backend.BrainmapsMeshSource.md#rpc_type_id)
- [chunkManager](neuroglancer_datasource_brainmaps_backend.BrainmapsMeshSource.md#chunkmanager)
- [chunks](neuroglancer_datasource_brainmaps_backend.BrainmapsMeshSource.md#chunks)
- [credentialsProvider](neuroglancer_datasource_brainmaps_backend.BrainmapsMeshSource.md#credentialsprovider)
- [disposedStacks](neuroglancer_datasource_brainmaps_backend.BrainmapsMeshSource.md#disposedstacks)
- [fragmentSource](neuroglancer_datasource_brainmaps_backend.BrainmapsMeshSource.md#fragmentsource)
- [freeChunks](neuroglancer_datasource_brainmaps_backend.BrainmapsMeshSource.md#freechunks)
- [isOwner](neuroglancer_datasource_brainmaps_backend.BrainmapsMeshSource.md#isowner)
- [listFragmentsParams](neuroglancer_datasource_brainmaps_backend.BrainmapsMeshSource.md#listfragmentsparams)
- [parameters](neuroglancer_datasource_brainmaps_backend.BrainmapsMeshSource.md#parameters)
- [refCount](neuroglancer_datasource_brainmaps_backend.BrainmapsMeshSource.md#refcount)
- [referencedGeneration](neuroglancer_datasource_brainmaps_backend.BrainmapsMeshSource.md#referencedgeneration)
- [rpc](neuroglancer_datasource_brainmaps_backend.BrainmapsMeshSource.md#rpc)
- [rpcId](neuroglancer_datasource_brainmaps_backend.BrainmapsMeshSource.md#rpcid)
- [sourceQueueLevel](neuroglancer_datasource_brainmaps_backend.BrainmapsMeshSource.md#sourcequeuelevel)
- [statistics](neuroglancer_datasource_brainmaps_backend.BrainmapsMeshSource.md#statistics)
- [unreferencedGeneration](neuroglancer_datasource_brainmaps_backend.BrainmapsMeshSource.md#unreferencedgeneration)
- [wasDisposed](neuroglancer_datasource_brainmaps_backend.BrainmapsMeshSource.md#wasdisposed)

### Methods

- [addChunk](neuroglancer_datasource_brainmaps_backend.BrainmapsMeshSource.md#addchunk)
- [addCounterpartRef](neuroglancer_datasource_brainmaps_backend.BrainmapsMeshSource.md#addcounterpartref)
- [addRef](neuroglancer_datasource_brainmaps_backend.BrainmapsMeshSource.md#addref)
- [chunkStateChanged](neuroglancer_datasource_brainmaps_backend.BrainmapsMeshSource.md#chunkstatechanged)
- [counterpartRefCountReachedZero](neuroglancer_datasource_brainmaps_backend.BrainmapsMeshSource.md#counterpartrefcountreachedzero)
- [dispose](neuroglancer_datasource_brainmaps_backend.BrainmapsMeshSource.md#dispose)
- [disposed](neuroglancer_datasource_brainmaps_backend.BrainmapsMeshSource.md#disposed)
- [download](neuroglancer_datasource_brainmaps_backend.BrainmapsMeshSource.md#download)
- [downloadFragment](neuroglancer_datasource_brainmaps_backend.BrainmapsMeshSource.md#downloadfragment)
- [getChunk](neuroglancer_datasource_brainmaps_backend.BrainmapsMeshSource.md#getchunk)
- [getFragmentChunk](neuroglancer_datasource_brainmaps_backend.BrainmapsMeshSource.md#getfragmentchunk)
- [getNewChunk\_](neuroglancer_datasource_brainmaps_backend.BrainmapsMeshSource.md#getnewchunk_)
- [initializeCounterpart](neuroglancer_datasource_brainmaps_backend.BrainmapsMeshSource.md#initializecounterpart)
- [initializeSharedObject](neuroglancer_datasource_brainmaps_backend.BrainmapsMeshSource.md#initializesharedobject)
- [ownerDispose](neuroglancer_datasource_brainmaps_backend.BrainmapsMeshSource.md#ownerdispose)
- [refCountReachedZero](neuroglancer_datasource_brainmaps_backend.BrainmapsMeshSource.md#refcountreachedzero)
- [registerCancellable](neuroglancer_datasource_brainmaps_backend.BrainmapsMeshSource.md#registercancellable)
- [registerChunkListener](neuroglancer_datasource_brainmaps_backend.BrainmapsMeshSource.md#registerchunklistener)
- [registerDisposer](neuroglancer_datasource_brainmaps_backend.BrainmapsMeshSource.md#registerdisposer)
- [registerEventListener](neuroglancer_datasource_brainmaps_backend.BrainmapsMeshSource.md#registereventlistener)
- [removeChunk](neuroglancer_datasource_brainmaps_backend.BrainmapsMeshSource.md#removechunk)
- [unregisterChunkListener](neuroglancer_datasource_brainmaps_backend.BrainmapsMeshSource.md#unregisterchunklistener)
- [unregisterDisposer](neuroglancer_datasource_brainmaps_backend.BrainmapsMeshSource.md#unregisterdisposer)

## Constructors

### constructor

• **new BrainmapsMeshSource**(`rpc`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](neuroglancer_worker_rpc.RPC.md) |
| `options` | `any` |

#### Inherited from

(BrainmapsSource(MeshSource, MeshSourceParameters)).constructor

#### Defined in

[src/neuroglancer/mesh/backend.ts:306](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/backend.ts#L306)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

(BrainmapsSource(MeshSource, MeshSourceParameters)).RPC\_TYPE\_ID

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L245)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](neuroglancer_chunk_manager_backend.ChunkManager.md)

#### Inherited from

(BrainmapsSource(MeshSource, MeshSourceParameters)).chunkManager

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:258](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L258)

___

### chunks

• **chunks**: `Map`<`string`, [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md)\>

#### Inherited from

(BrainmapsSource(MeshSource, MeshSourceParameters)).chunks

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:247](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L247)

___

### credentialsProvider

• **credentialsProvider**: [`CredentialsProvider`](neuroglancer_credentials_provider.CredentialsProvider.md)<[`OAuth2Credentials`](../interfaces/neuroglancer_credentials_provider_oauth2.OAuth2Credentials.md)\>

#### Inherited from

(BrainmapsSource(MeshSource, MeshSourceParameters)).credentialsProvider

#### Defined in

[src/neuroglancer/credentials_provider/shared_counterpart.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/credentials_provider/shared_counterpart.ts#L42)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

(BrainmapsSource(MeshSource, MeshSourceParameters)).disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### fragmentSource

• **fragmentSource**: [`FragmentSource`](neuroglancer_mesh_backend.FragmentSource.md)

#### Inherited from

(BrainmapsSource(MeshSource, MeshSourceParameters)).fragmentSource

#### Defined in

[src/neuroglancer/mesh/backend.ts:304](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/backend.ts#L304)

___

### freeChunks

• **freeChunks**: [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md)[]

#### Inherited from

(BrainmapsSource(MeshSource, MeshSourceParameters)).freeChunks

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:248](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L248)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

(BrainmapsSource(MeshSource, MeshSourceParameters)).isOwner

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L171)

___

### listFragmentsParams

• `Private` **listFragmentsParams**: `string`

#### Defined in

[src/neuroglancer/datasource/brainmaps/backend.ts:555](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/brainmaps/backend.ts#L555)

___

### parameters

• **parameters**: [`MeshSourceParameters`](neuroglancer_datasource_brainmaps_base.MeshSourceParameters.md)

#### Inherited from

(BrainmapsSource(MeshSource, MeshSourceParameters)).parameters

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:1125](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L1125)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

(BrainmapsSource(MeshSource, MeshSourceParameters)).refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

(BrainmapsSource(MeshSource, MeshSourceParameters)).referencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](neuroglancer_worker_rpc.RPC.md) = `null`

#### Inherited from

(BrainmapsSource(MeshSource, MeshSourceParameters)).rpc

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

(BrainmapsSource(MeshSource, MeshSourceParameters)).rpcId

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L170)

___

### sourceQueueLevel

• **sourceQueueLevel**: `number` = `0`

sourceQueueLevel must be greater than the sourceQueueLevel of any ChunkSource whose download
method depends on chunks from this source.  A normal ChunkSource with no other dependencies
should have a level of 0.

#### Inherited from

(BrainmapsSource(MeshSource, MeshSourceParameters)).sourceQueueLevel

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:256](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L256)

___

### statistics

• **statistics**: `Float64Array`

#### Inherited from

(BrainmapsSource(MeshSource, MeshSourceParameters)).statistics

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:249](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L249)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

(BrainmapsSource(MeshSource, MeshSourceParameters)).unreferencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L172)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

(BrainmapsSource(MeshSource, MeshSourceParameters)).wasDisposed

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

(BrainmapsSource(MeshSource, MeshSourceParameters)).addChunk

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

(BrainmapsSource(MeshSource, MeshSourceParameters)).addCounterpartRef

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`BrainmapsMeshSource`](neuroglancer_datasource_brainmaps_backend.BrainmapsMeshSource.md)

#### Returns

[`BrainmapsMeshSource`](neuroglancer_datasource_brainmaps_backend.BrainmapsMeshSource.md)

#### Inherited from

(BrainmapsSource(MeshSource, MeshSourceParameters)).addRef

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

(BrainmapsSource(MeshSource, MeshSourceParameters)).chunkStateChanged

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

(BrainmapsSource(MeshSource, MeshSourceParameters)).counterpartRefCountReachedZero

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L234)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

(BrainmapsSource(MeshSource, MeshSourceParameters)).dispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

(BrainmapsSource(MeshSource, MeshSourceParameters)).disposed

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L75)

___

### download

▸ **download**(`chunk`, `cancellationToken`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`ManifestChunk`](neuroglancer_mesh_backend.ManifestChunk.md) |
| `cancellationToken` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) |

#### Returns

`Promise`<`void`\>

#### Overrides

(BrainmapsSource(MeshSource, MeshSourceParameters)).download

#### Defined in

[src/neuroglancer/datasource/brainmaps/backend.ts:564](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/brainmaps/backend.ts#L564)

___

### downloadFragment

▸ **downloadFragment**(`chunk`, `cancellationToken`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`FragmentChunk`](neuroglancer_mesh_backend.FragmentChunk.md) |
| `cancellationToken` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) |

#### Returns

`Promise`<`void`\>

#### Overrides

(BrainmapsSource(MeshSource, MeshSourceParameters)).downloadFragment

#### Defined in

[src/neuroglancer/datasource/brainmaps/backend.ts:579](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/brainmaps/backend.ts#L579)

___

### getChunk

▸ **getChunk**(`objectId`): [`ManifestChunk`](neuroglancer_mesh_backend.ManifestChunk.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `objectId` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

[`ManifestChunk`](neuroglancer_mesh_backend.ManifestChunk.md)

#### Inherited from

(BrainmapsSource(MeshSource, MeshSourceParameters)).getChunk

#### Defined in

[src/neuroglancer/mesh/backend.ts:313](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/backend.ts#L313)

___

### getFragmentChunk

▸ **getFragmentChunk**(`manifestChunk`, `fragmentId`): [`FragmentChunk`](neuroglancer_mesh_backend.FragmentChunk.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `manifestChunk` | [`ManifestChunk`](neuroglancer_mesh_backend.ManifestChunk.md) |
| `fragmentId` | `string` |

#### Returns

[`FragmentChunk`](neuroglancer_mesh_backend.FragmentChunk.md)

#### Inherited from

(BrainmapsSource(MeshSource, MeshSourceParameters)).getFragmentChunk

#### Defined in

[src/neuroglancer/mesh/backend.ts:324](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/backend.ts#L324)

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

(BrainmapsSource(MeshSource, MeshSourceParameters)).getNewChunk\_

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

(BrainmapsSource(MeshSource, MeshSourceParameters)).initializeCounterpart

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

(BrainmapsSource(MeshSource, MeshSourceParameters)).initializeSharedObject

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L175)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

(BrainmapsSource(MeshSource, MeshSourceParameters)).ownerDispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

(BrainmapsSource(MeshSource, MeshSourceParameters)).refCountReachedZero

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

(BrainmapsSource(MeshSource, MeshSourceParameters)).registerCancellable

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

(BrainmapsSource(MeshSource, MeshSourceParameters)).registerChunkListener

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

(BrainmapsSource(MeshSource, MeshSourceParameters)).registerDisposer

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

(BrainmapsSource(MeshSource, MeshSourceParameters)).registerEventListener

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

(BrainmapsSource(MeshSource, MeshSourceParameters)).removeChunk

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

(BrainmapsSource(MeshSource, MeshSourceParameters)).unregisterChunkListener

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

(BrainmapsSource(MeshSource, MeshSourceParameters)).unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)
