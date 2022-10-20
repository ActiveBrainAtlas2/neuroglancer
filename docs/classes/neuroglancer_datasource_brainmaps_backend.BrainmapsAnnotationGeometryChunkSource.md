[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/datasource/brainmaps/backend](../modules/neuroglancer_datasource_brainmaps_backend.md) / BrainmapsAnnotationGeometryChunkSource

# Class: BrainmapsAnnotationGeometryChunkSource

[neuroglancer/datasource/brainmaps/backend](../modules/neuroglancer_datasource_brainmaps_backend.md).BrainmapsAnnotationGeometryChunkSource

## Hierarchy

- `C`<[`AnnotationSpatialIndexSourceParameters`](neuroglancer_datasource_brainmaps_base.AnnotationSpatialIndexSourceParameters.md), (...`args`: `any`[]) => `__class`<[`OAuth2Credentials`](../interfaces/neuroglancer_credentials_provider_oauth2.OAuth2Credentials.md), typeof [`AnnotationGeometryChunkSourceBackend`](neuroglancer_annotation_backend.AnnotationGeometryChunkSourceBackend.md)\> & typeof [`AnnotationGeometryChunkSourceBackend`](neuroglancer_annotation_backend.AnnotationGeometryChunkSourceBackend.md), `this`\> & `__class`<[`OAuth2Credentials`](../interfaces/neuroglancer_credentials_provider_oauth2.OAuth2Credentials.md), typeof [`AnnotationGeometryChunkSourceBackend`](neuroglancer_annotation_backend.AnnotationGeometryChunkSourceBackend.md), `this`\> & [`AnnotationGeometryChunkSourceBackend`](neuroglancer_annotation_backend.AnnotationGeometryChunkSourceBackend.md)<`this`\>

  ↳ **`BrainmapsAnnotationGeometryChunkSource`**

## Table of contents

### Constructors

- [constructor](neuroglancer_datasource_brainmaps_backend.BrainmapsAnnotationGeometryChunkSource.md#constructor)

### Properties

- [RPC\_TYPE\_ID](neuroglancer_datasource_brainmaps_backend.BrainmapsAnnotationGeometryChunkSource.md#rpc_type_id)
- [chunkConstructor](neuroglancer_datasource_brainmaps_backend.BrainmapsAnnotationGeometryChunkSource.md#chunkconstructor)
- [chunkManager](neuroglancer_datasource_brainmaps_backend.BrainmapsAnnotationGeometryChunkSource.md#chunkmanager)
- [chunks](neuroglancer_datasource_brainmaps_backend.BrainmapsAnnotationGeometryChunkSource.md#chunks)
- [credentialsProvider](neuroglancer_datasource_brainmaps_backend.BrainmapsAnnotationGeometryChunkSource.md#credentialsprovider)
- [disposedStacks](neuroglancer_datasource_brainmaps_backend.BrainmapsAnnotationGeometryChunkSource.md#disposedstacks)
- [freeChunks](neuroglancer_datasource_brainmaps_backend.BrainmapsAnnotationGeometryChunkSource.md#freechunks)
- [isOwner](neuroglancer_datasource_brainmaps_backend.BrainmapsAnnotationGeometryChunkSource.md#isowner)
- [parameters](neuroglancer_datasource_brainmaps_backend.BrainmapsAnnotationGeometryChunkSource.md#parameters)
- [parent](neuroglancer_datasource_brainmaps_backend.BrainmapsAnnotationGeometryChunkSource.md#parent)
- [refCount](neuroglancer_datasource_brainmaps_backend.BrainmapsAnnotationGeometryChunkSource.md#refcount)
- [referencedGeneration](neuroglancer_datasource_brainmaps_backend.BrainmapsAnnotationGeometryChunkSource.md#referencedgeneration)
- [rpc](neuroglancer_datasource_brainmaps_backend.BrainmapsAnnotationGeometryChunkSource.md#rpc)
- [rpcId](neuroglancer_datasource_brainmaps_backend.BrainmapsAnnotationGeometryChunkSource.md#rpcid)
- [sourceQueueLevel](neuroglancer_datasource_brainmaps_backend.BrainmapsAnnotationGeometryChunkSource.md#sourcequeuelevel)
- [spec](neuroglancer_datasource_brainmaps_backend.BrainmapsAnnotationGeometryChunkSource.md#spec)
- [statistics](neuroglancer_datasource_brainmaps_backend.BrainmapsAnnotationGeometryChunkSource.md#statistics)
- [unreferencedGeneration](neuroglancer_datasource_brainmaps_backend.BrainmapsAnnotationGeometryChunkSource.md#unreferencedgeneration)
- [wasDisposed](neuroglancer_datasource_brainmaps_backend.BrainmapsAnnotationGeometryChunkSource.md#wasdisposed)

### Methods

- [addChunk](neuroglancer_datasource_brainmaps_backend.BrainmapsAnnotationGeometryChunkSource.md#addchunk)
- [addCounterpartRef](neuroglancer_datasource_brainmaps_backend.BrainmapsAnnotationGeometryChunkSource.md#addcounterpartref)
- [addRef](neuroglancer_datasource_brainmaps_backend.BrainmapsAnnotationGeometryChunkSource.md#addref)
- [chunkStateChanged](neuroglancer_datasource_brainmaps_backend.BrainmapsAnnotationGeometryChunkSource.md#chunkstatechanged)
- [counterpartRefCountReachedZero](neuroglancer_datasource_brainmaps_backend.BrainmapsAnnotationGeometryChunkSource.md#counterpartrefcountreachedzero)
- [dispose](neuroglancer_datasource_brainmaps_backend.BrainmapsAnnotationGeometryChunkSource.md#dispose)
- [disposed](neuroglancer_datasource_brainmaps_backend.BrainmapsAnnotationGeometryChunkSource.md#disposed)
- [download](neuroglancer_datasource_brainmaps_backend.BrainmapsAnnotationGeometryChunkSource.md#download)
- [getChunk](neuroglancer_datasource_brainmaps_backend.BrainmapsAnnotationGeometryChunkSource.md#getchunk)
- [getNewChunk\_](neuroglancer_datasource_brainmaps_backend.BrainmapsAnnotationGeometryChunkSource.md#getnewchunk_)
- [initializeCounterpart](neuroglancer_datasource_brainmaps_backend.BrainmapsAnnotationGeometryChunkSource.md#initializecounterpart)
- [initializeSharedObject](neuroglancer_datasource_brainmaps_backend.BrainmapsAnnotationGeometryChunkSource.md#initializesharedobject)
- [ownerDispose](neuroglancer_datasource_brainmaps_backend.BrainmapsAnnotationGeometryChunkSource.md#ownerdispose)
- [refCountReachedZero](neuroglancer_datasource_brainmaps_backend.BrainmapsAnnotationGeometryChunkSource.md#refcountreachedzero)
- [registerCancellable](neuroglancer_datasource_brainmaps_backend.BrainmapsAnnotationGeometryChunkSource.md#registercancellable)
- [registerChunkListener](neuroglancer_datasource_brainmaps_backend.BrainmapsAnnotationGeometryChunkSource.md#registerchunklistener)
- [registerDisposer](neuroglancer_datasource_brainmaps_backend.BrainmapsAnnotationGeometryChunkSource.md#registerdisposer)
- [registerEventListener](neuroglancer_datasource_brainmaps_backend.BrainmapsAnnotationGeometryChunkSource.md#registereventlistener)
- [removeChunk](neuroglancer_datasource_brainmaps_backend.BrainmapsAnnotationGeometryChunkSource.md#removechunk)
- [unregisterChunkListener](neuroglancer_datasource_brainmaps_backend.BrainmapsAnnotationGeometryChunkSource.md#unregisterchunklistener)
- [unregisterDisposer](neuroglancer_datasource_brainmaps_backend.BrainmapsAnnotationGeometryChunkSource.md#unregisterdisposer)

## Constructors

### constructor

• **new BrainmapsAnnotationGeometryChunkSource**(`rpc`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](neuroglancer_worker_rpc.RPC.md) |
| `options` | `any` |

#### Inherited from

(BrainmapsSource(AnnotationGeometryChunkSourceBackend, AnnotationSpatialIndexSourceParameters)).constructor

#### Defined in

[src/neuroglancer/annotation/backend.ts:130](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/backend.ts#L130)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

(BrainmapsSource(AnnotationGeometryChunkSourceBackend, AnnotationSpatialIndexSourceParameters)).RPC\_TYPE\_ID

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L245)

___

### chunkConstructor

• **chunkConstructor**: [`ChunkConstructor`](../interfaces/neuroglancer_chunk_manager_backend.ChunkConstructor.md)<[`SliceViewChunk`](neuroglancer_sliceview_backend.SliceViewChunk.md)\>

#### Inherited from

(BrainmapsSource(AnnotationGeometryChunkSourceBackend, AnnotationSpatialIndexSourceParameters)).chunkConstructor

#### Defined in

[src/neuroglancer/sliceview/backend.ts:304](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/backend.ts#L304)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](neuroglancer_chunk_manager_backend.ChunkManager.md)

#### Inherited from

(BrainmapsSource(AnnotationGeometryChunkSourceBackend, AnnotationSpatialIndexSourceParameters)).chunkManager

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:258](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L258)

___

### chunks

• **chunks**: `Map`<`string`, [`AnnotationGeometryChunk`](neuroglancer_annotation_backend.AnnotationGeometryChunk.md)\>

#### Inherited from

(BrainmapsSource(AnnotationGeometryChunkSourceBackend, AnnotationSpatialIndexSourceParameters)).chunks

#### Defined in

[src/neuroglancer/sliceview/backend.ts:312](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/backend.ts#L312)

___

### credentialsProvider

• **credentialsProvider**: [`CredentialsProvider`](neuroglancer_credentials_provider.CredentialsProvider.md)<[`OAuth2Credentials`](../interfaces/neuroglancer_credentials_provider_oauth2.OAuth2Credentials.md)\>

#### Inherited from

(BrainmapsSource(AnnotationGeometryChunkSourceBackend, AnnotationSpatialIndexSourceParameters)).credentialsProvider

#### Defined in

[src/neuroglancer/credentials_provider/shared_counterpart.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/credentials_provider/shared_counterpart.ts#L42)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

(BrainmapsSource(AnnotationGeometryChunkSourceBackend, AnnotationSpatialIndexSourceParameters)).disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### freeChunks

• **freeChunks**: [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md)[]

#### Inherited from

(BrainmapsSource(AnnotationGeometryChunkSourceBackend, AnnotationSpatialIndexSourceParameters)).freeChunks

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:248](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L248)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

(BrainmapsSource(AnnotationGeometryChunkSourceBackend, AnnotationSpatialIndexSourceParameters)).isOwner

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L171)

___

### parameters

• **parameters**: [`AnnotationSpatialIndexSourceParameters`](neuroglancer_datasource_brainmaps_base.AnnotationSpatialIndexSourceParameters.md)

#### Inherited from

(BrainmapsSource(AnnotationGeometryChunkSourceBackend, AnnotationSpatialIndexSourceParameters)).parameters

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:1125](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L1125)

___

### parent

• **parent**: [`AnnotationSource`](neuroglancer_annotation_backend.AnnotationSource.md)

#### Inherited from

(BrainmapsSource(AnnotationGeometryChunkSourceBackend, AnnotationSpatialIndexSourceParameters)).parent

#### Defined in

[src/neuroglancer/annotation/backend.ts:129](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/backend.ts#L129)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

(BrainmapsSource(AnnotationGeometryChunkSourceBackend, AnnotationSpatialIndexSourceParameters)).refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

(BrainmapsSource(AnnotationGeometryChunkSourceBackend, AnnotationSpatialIndexSourceParameters)).referencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](neuroglancer_worker_rpc.RPC.md) = `null`

#### Inherited from

(BrainmapsSource(AnnotationGeometryChunkSourceBackend, AnnotationSpatialIndexSourceParameters)).rpc

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

(BrainmapsSource(AnnotationGeometryChunkSourceBackend, AnnotationSpatialIndexSourceParameters)).rpcId

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L170)

___

### sourceQueueLevel

• **sourceQueueLevel**: `number` = `0`

sourceQueueLevel must be greater than the sourceQueueLevel of any ChunkSource whose download
method depends on chunks from this source.  A normal ChunkSource with no other dependencies
should have a level of 0.

#### Inherited from

(BrainmapsSource(AnnotationGeometryChunkSourceBackend, AnnotationSpatialIndexSourceParameters)).sourceQueueLevel

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:256](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L256)

___

### spec

• **spec**: [`AnnotationGeometryChunkSpecification`](../interfaces/neuroglancer_annotation_base.AnnotationGeometryChunkSpecification.md)

#### Inherited from

(BrainmapsSource(AnnotationGeometryChunkSourceBackend, AnnotationSpatialIndexSourceParameters)).spec

#### Defined in

[src/neuroglancer/sliceview/backend.ts:311](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/backend.ts#L311)

___

### statistics

• **statistics**: `Float64Array`

#### Inherited from

(BrainmapsSource(AnnotationGeometryChunkSourceBackend, AnnotationSpatialIndexSourceParameters)).statistics

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:249](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L249)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

(BrainmapsSource(AnnotationGeometryChunkSourceBackend, AnnotationSpatialIndexSourceParameters)).unreferencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L172)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

(BrainmapsSource(AnnotationGeometryChunkSourceBackend, AnnotationSpatialIndexSourceParameters)).wasDisposed

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

(BrainmapsSource(AnnotationGeometryChunkSourceBackend, AnnotationSpatialIndexSourceParameters)).addChunk

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

(BrainmapsSource(AnnotationGeometryChunkSourceBackend, AnnotationSpatialIndexSourceParameters)).addCounterpartRef

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`BrainmapsAnnotationGeometryChunkSource`](neuroglancer_datasource_brainmaps_backend.BrainmapsAnnotationGeometryChunkSource.md)

#### Returns

[`BrainmapsAnnotationGeometryChunkSource`](neuroglancer_datasource_brainmaps_backend.BrainmapsAnnotationGeometryChunkSource.md)

#### Inherited from

(BrainmapsSource(AnnotationGeometryChunkSourceBackend, AnnotationSpatialIndexSourceParameters)).addRef

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

(BrainmapsSource(AnnotationGeometryChunkSourceBackend, AnnotationSpatialIndexSourceParameters)).chunkStateChanged

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

(BrainmapsSource(AnnotationGeometryChunkSourceBackend, AnnotationSpatialIndexSourceParameters)).counterpartRefCountReachedZero

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L234)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

(BrainmapsSource(AnnotationGeometryChunkSourceBackend, AnnotationSpatialIndexSourceParameters)).dispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

(BrainmapsSource(AnnotationGeometryChunkSourceBackend, AnnotationSpatialIndexSourceParameters)).disposed

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L75)

___

### download

▸ **download**(`chunk`, `cancellationToken`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`AnnotationGeometryChunk`](neuroglancer_annotation_backend.AnnotationGeometryChunk.md) |
| `cancellationToken` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) |

#### Returns

`Promise`<`void`\>

#### Overrides

(BrainmapsSource(AnnotationGeometryChunkSourceBackend, AnnotationSpatialIndexSourceParameters)).download

#### Defined in

[src/neuroglancer/datasource/brainmaps/backend.ts:844](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/brainmaps/backend.ts#L844)

___

### getChunk

▸ **getChunk**(`chunkGridPosition`): [`AnnotationGeometryChunk`](neuroglancer_annotation_backend.AnnotationGeometryChunk.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkGridPosition` | [`vec3`](neuroglancer_util_geom.vec3.md) |

#### Returns

[`AnnotationGeometryChunk`](neuroglancer_annotation_backend.AnnotationGeometryChunk.md)

#### Inherited from

(BrainmapsSource(AnnotationGeometryChunkSourceBackend, AnnotationSpatialIndexSourceParameters)).getChunk

#### Defined in

[src/neuroglancer/sliceview/backend.ts:302](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/backend.ts#L302)

▸ **getChunk**(`chunkGridPosition`): [`AnnotationGeometryChunk`](neuroglancer_annotation_backend.AnnotationGeometryChunk.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkGridPosition` | `Float32Array` |

#### Returns

[`AnnotationGeometryChunk`](neuroglancer_annotation_backend.AnnotationGeometryChunk.md)

#### Inherited from

(BrainmapsSource(AnnotationGeometryChunkSourceBackend, AnnotationSpatialIndexSourceParameters)).getChunk

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

(BrainmapsSource(AnnotationGeometryChunkSourceBackend, AnnotationSpatialIndexSourceParameters)).getNewChunk\_

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

(BrainmapsSource(AnnotationGeometryChunkSourceBackend, AnnotationSpatialIndexSourceParameters)).initializeCounterpart

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

(BrainmapsSource(AnnotationGeometryChunkSourceBackend, AnnotationSpatialIndexSourceParameters)).initializeSharedObject

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L175)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

(BrainmapsSource(AnnotationGeometryChunkSourceBackend, AnnotationSpatialIndexSourceParameters)).ownerDispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

(BrainmapsSource(AnnotationGeometryChunkSourceBackend, AnnotationSpatialIndexSourceParameters)).refCountReachedZero

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

(BrainmapsSource(AnnotationGeometryChunkSourceBackend, AnnotationSpatialIndexSourceParameters)).registerCancellable

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

(BrainmapsSource(AnnotationGeometryChunkSourceBackend, AnnotationSpatialIndexSourceParameters)).registerChunkListener

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

(BrainmapsSource(AnnotationGeometryChunkSourceBackend, AnnotationSpatialIndexSourceParameters)).registerDisposer

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

(BrainmapsSource(AnnotationGeometryChunkSourceBackend, AnnotationSpatialIndexSourceParameters)).registerEventListener

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

(BrainmapsSource(AnnotationGeometryChunkSourceBackend, AnnotationSpatialIndexSourceParameters)).removeChunk

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

(BrainmapsSource(AnnotationGeometryChunkSourceBackend, AnnotationSpatialIndexSourceParameters)).unregisterChunkListener

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

(BrainmapsSource(AnnotationGeometryChunkSourceBackend, AnnotationSpatialIndexSourceParameters)).unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)
