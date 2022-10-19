[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/datasource/brainmaps/backend](../modules/neuroglancer_datasource_brainmaps_backend.md) / BrainmapsVolumeChunkSource

# Class: BrainmapsVolumeChunkSource

[neuroglancer/datasource/brainmaps/backend](../modules/neuroglancer_datasource_brainmaps_backend.md).BrainmapsVolumeChunkSource

## Hierarchy

- `C`<[`VolumeSourceParameters`](neuroglancer_datasource_brainmaps_base.VolumeSourceParameters.md), { `prototype`: `__class`<`any`, `any`\>  } & typeof [`VolumeChunkSource`](neuroglancer_sliceview_volume_backend.VolumeChunkSource.md), `this`\> & `__class`<[`OAuth2Credentials`](../interfaces/neuroglancer_credentials_provider_oauth2.OAuth2Credentials.md), typeof [`VolumeChunkSource`](neuroglancer_sliceview_volume_backend.VolumeChunkSource.md), `this`\> & [`VolumeChunkSource`](neuroglancer_sliceview_volume_backend.VolumeChunkSource.md)<`this`\>

  ↳ **`BrainmapsVolumeChunkSource`**

## Table of contents

### Constructors

- [constructor](neuroglancer_datasource_brainmaps_backend.BrainmapsVolumeChunkSource.md#constructor)

### Properties

- [RPC\_TYPE\_ID](neuroglancer_datasource_brainmaps_backend.BrainmapsVolumeChunkSource.md#rpc_type_id)
- [chunkConstructor](neuroglancer_datasource_brainmaps_backend.BrainmapsVolumeChunkSource.md#chunkconstructor)
- [chunkDecoder](neuroglancer_datasource_brainmaps_backend.BrainmapsVolumeChunkSource.md#chunkdecoder)
- [chunkManager](neuroglancer_datasource_brainmaps_backend.BrainmapsVolumeChunkSource.md#chunkmanager)
- [chunks](neuroglancer_datasource_brainmaps_backend.BrainmapsVolumeChunkSource.md#chunks)
- [credentialsProvider](neuroglancer_datasource_brainmaps_backend.BrainmapsVolumeChunkSource.md#credentialsprovider)
- [disposedStacks](neuroglancer_datasource_brainmaps_backend.BrainmapsVolumeChunkSource.md#disposedstacks)
- [freeChunks](neuroglancer_datasource_brainmaps_backend.BrainmapsVolumeChunkSource.md#freechunks)
- [isOwner](neuroglancer_datasource_brainmaps_backend.BrainmapsVolumeChunkSource.md#isowner)
- [parameters](neuroglancer_datasource_brainmaps_backend.BrainmapsVolumeChunkSource.md#parameters)
- [refCount](neuroglancer_datasource_brainmaps_backend.BrainmapsVolumeChunkSource.md#refcount)
- [referencedGeneration](neuroglancer_datasource_brainmaps_backend.BrainmapsVolumeChunkSource.md#referencedgeneration)
- [rpc](neuroglancer_datasource_brainmaps_backend.BrainmapsVolumeChunkSource.md#rpc)
- [rpcId](neuroglancer_datasource_brainmaps_backend.BrainmapsVolumeChunkSource.md#rpcid)
- [sourceQueueLevel](neuroglancer_datasource_brainmaps_backend.BrainmapsVolumeChunkSource.md#sourcequeuelevel)
- [spec](neuroglancer_datasource_brainmaps_backend.BrainmapsVolumeChunkSource.md#spec)
- [statistics](neuroglancer_datasource_brainmaps_backend.BrainmapsVolumeChunkSource.md#statistics)
- [unreferencedGeneration](neuroglancer_datasource_brainmaps_backend.BrainmapsVolumeChunkSource.md#unreferencedgeneration)
- [wasDisposed](neuroglancer_datasource_brainmaps_backend.BrainmapsVolumeChunkSource.md#wasdisposed)

### Methods

- [addChunk](neuroglancer_datasource_brainmaps_backend.BrainmapsVolumeChunkSource.md#addchunk)
- [addCounterpartRef](neuroglancer_datasource_brainmaps_backend.BrainmapsVolumeChunkSource.md#addcounterpartref)
- [addRef](neuroglancer_datasource_brainmaps_backend.BrainmapsVolumeChunkSource.md#addref)
- [applyEncodingParams](neuroglancer_datasource_brainmaps_backend.BrainmapsVolumeChunkSource.md#applyencodingparams)
- [chunkStateChanged](neuroglancer_datasource_brainmaps_backend.BrainmapsVolumeChunkSource.md#chunkstatechanged)
- [computeChunkBounds](neuroglancer_datasource_brainmaps_backend.BrainmapsVolumeChunkSource.md#computechunkbounds)
- [counterpartRefCountReachedZero](neuroglancer_datasource_brainmaps_backend.BrainmapsVolumeChunkSource.md#counterpartrefcountreachedzero)
- [dispose](neuroglancer_datasource_brainmaps_backend.BrainmapsVolumeChunkSource.md#dispose)
- [disposed](neuroglancer_datasource_brainmaps_backend.BrainmapsVolumeChunkSource.md#disposed)
- [download](neuroglancer_datasource_brainmaps_backend.BrainmapsVolumeChunkSource.md#download)
- [getChunk](neuroglancer_datasource_brainmaps_backend.BrainmapsVolumeChunkSource.md#getchunk)
- [getNewChunk\_](neuroglancer_datasource_brainmaps_backend.BrainmapsVolumeChunkSource.md#getnewchunk_)
- [initializeCounterpart](neuroglancer_datasource_brainmaps_backend.BrainmapsVolumeChunkSource.md#initializecounterpart)
- [initializeSharedObject](neuroglancer_datasource_brainmaps_backend.BrainmapsVolumeChunkSource.md#initializesharedobject)
- [ownerDispose](neuroglancer_datasource_brainmaps_backend.BrainmapsVolumeChunkSource.md#ownerdispose)
- [refCountReachedZero](neuroglancer_datasource_brainmaps_backend.BrainmapsVolumeChunkSource.md#refcountreachedzero)
- [registerCancellable](neuroglancer_datasource_brainmaps_backend.BrainmapsVolumeChunkSource.md#registercancellable)
- [registerChunkListener](neuroglancer_datasource_brainmaps_backend.BrainmapsVolumeChunkSource.md#registerchunklistener)
- [registerDisposer](neuroglancer_datasource_brainmaps_backend.BrainmapsVolumeChunkSource.md#registerdisposer)
- [registerEventListener](neuroglancer_datasource_brainmaps_backend.BrainmapsVolumeChunkSource.md#registereventlistener)
- [removeChunk](neuroglancer_datasource_brainmaps_backend.BrainmapsVolumeChunkSource.md#removechunk)
- [unregisterChunkListener](neuroglancer_datasource_brainmaps_backend.BrainmapsVolumeChunkSource.md#unregisterchunklistener)
- [unregisterDisposer](neuroglancer_datasource_brainmaps_backend.BrainmapsVolumeChunkSource.md#unregisterdisposer)

## Constructors

### constructor

• **new BrainmapsVolumeChunkSource**(`rpc`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](neuroglancer_worker_rpc.RPC.md) |
| `options` | `any` |

#### Inherited from

(BrainmapsSource(VolumeChunkSource, VolumeSourceParameters)).constructor

#### Defined in

[src/neuroglancer/sliceview/volume/backend.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/backend.ts#L63)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

(BrainmapsSource(VolumeChunkSource, VolumeSourceParameters)).RPC\_TYPE\_ID

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L245)

___

### chunkConstructor

• **chunkConstructor**: [`ChunkConstructor`](../interfaces/neuroglancer_chunk_manager_backend.ChunkConstructor.md)<[`SliceViewChunk`](neuroglancer_sliceview_backend.SliceViewChunk.md)\>

#### Inherited from

(BrainmapsSource(VolumeChunkSource, VolumeSourceParameters)).chunkConstructor

#### Defined in

[src/neuroglancer/sliceview/backend.ts:304](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/backend.ts#L304)

___

### chunkDecoder

• **chunkDecoder**: (`chunk`: [`VolumeChunk`](neuroglancer_sliceview_volume_backend.VolumeChunk.md), `cancellationToken`: [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md), `response`: `ArrayBuffer`, `endianness`: [`Endianness`](../enums/neuroglancer_util_endian.Endianness.md), `byteOffset`: `number`, `byteLength`: `number`) => `Promise`<`void`\>

#### Type declaration

▸ (`chunk`, `cancellationToken`, `response`, `endianness?`, `byteOffset?`, `byteLength?`): `Promise`<`void`\>

##### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `chunk` | [`VolumeChunk`](neuroglancer_sliceview_volume_backend.VolumeChunk.md) | `undefined` |
| `cancellationToken` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) | `undefined` |
| `response` | `ArrayBuffer` | `undefined` |
| `endianness` | [`Endianness`](../enums/neuroglancer_util_endian.Endianness.md) | `ENDIANNESS` |
| `byteOffset` | `number` | `0` |
| `byteLength` | `number` | `response.byteLength` |

##### Returns

`Promise`<`void`\>

#### Defined in

[src/neuroglancer/datasource/brainmaps/backend.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/brainmaps/backend.ts#L81)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](neuroglancer_chunk_manager_backend.ChunkManager.md)

#### Inherited from

(BrainmapsSource(VolumeChunkSource, VolumeSourceParameters)).chunkManager

___

### chunks

• **chunks**: `Map`<`string`, [`SliceViewChunk`](neuroglancer_sliceview_backend.SliceViewChunk.md)\>

#### Inherited from

(BrainmapsSource(VolumeChunkSource, VolumeSourceParameters)).chunks

#### Defined in

[src/neuroglancer/sliceview/backend.ts:312](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/backend.ts#L312)

___

### credentialsProvider

• **credentialsProvider**: [`CredentialsProvider`](neuroglancer_credentials_provider.CredentialsProvider.md)<[`OAuth2Credentials`](../interfaces/neuroglancer_credentials_provider_oauth2.OAuth2Credentials.md)\>

#### Inherited from

(BrainmapsSource(VolumeChunkSource, VolumeSourceParameters)).credentialsProvider

#### Defined in

[src/neuroglancer/credentials_provider/shared_counterpart.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/credentials_provider/shared_counterpart.ts#L42)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

(BrainmapsSource(VolumeChunkSource, VolumeSourceParameters)).disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### freeChunks

• **freeChunks**: [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md)[]

#### Inherited from

(BrainmapsSource(VolumeChunkSource, VolumeSourceParameters)).freeChunks

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:248](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L248)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

(BrainmapsSource(VolumeChunkSource, VolumeSourceParameters)).isOwner

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L171)

___

### parameters

• **parameters**: [`VolumeSourceParameters`](neuroglancer_datasource_brainmaps_base.VolumeSourceParameters.md)

#### Inherited from

(BrainmapsSource(VolumeChunkSource, VolumeSourceParameters)).parameters

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:1125](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L1125)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

(BrainmapsSource(VolumeChunkSource, VolumeSourceParameters)).refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

(BrainmapsSource(VolumeChunkSource, VolumeSourceParameters)).referencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](neuroglancer_worker_rpc.RPC.md) = `null`

#### Inherited from

(BrainmapsSource(VolumeChunkSource, VolumeSourceParameters)).rpc

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

(BrainmapsSource(VolumeChunkSource, VolumeSourceParameters)).rpcId

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L170)

___

### sourceQueueLevel

• **sourceQueueLevel**: `number` = `0`

sourceQueueLevel must be greater than the sourceQueueLevel of any ChunkSource whose download
method depends on chunks from this source.  A normal ChunkSource with no other dependencies
should have a level of 0.

#### Inherited from

(BrainmapsSource(VolumeChunkSource, VolumeSourceParameters)).sourceQueueLevel

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:256](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L256)

___

### spec

• **spec**: [`VolumeChunkSpecification`](../interfaces/neuroglancer_sliceview_volume_base.VolumeChunkSpecification.md)

#### Inherited from

(BrainmapsSource(VolumeChunkSource, VolumeSourceParameters)).spec

#### Defined in

[src/neuroglancer/sliceview/volume/backend.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/backend.ts#L60)

___

### statistics

• **statistics**: `Float64Array`

#### Inherited from

(BrainmapsSource(VolumeChunkSource, VolumeSourceParameters)).statistics

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:249](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L249)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

(BrainmapsSource(VolumeChunkSource, VolumeSourceParameters)).unreferencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L172)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

(BrainmapsSource(VolumeChunkSource, VolumeSourceParameters)).wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

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

(BrainmapsSource(VolumeChunkSource, VolumeSourceParameters)).addChunk

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:288](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L288)

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

(BrainmapsSource(VolumeChunkSource, VolumeSourceParameters)).addCounterpartRef

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`BrainmapsVolumeChunkSource`](neuroglancer_datasource_brainmaps_backend.BrainmapsVolumeChunkSource.md)

#### Returns

[`BrainmapsVolumeChunkSource`](neuroglancer_datasource_brainmaps_backend.BrainmapsVolumeChunkSource.md)

#### Inherited from

(BrainmapsSource(VolumeChunkSource, VolumeSourceParameters)).addRef

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### applyEncodingParams

▸ `Private` **applyEncodingParams**(`payload`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`SubvolumePayload`](../interfaces/neuroglancer_datasource_brainmaps_api.SubvolumePayload.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/datasource/brainmaps/backend.ts:83](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/brainmaps/backend.ts#L83)

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

(BrainmapsSource(VolumeChunkSource, VolumeSourceParameters)).chunkStateChanged

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:337](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L337)

___

### computeChunkBounds

▸ **computeChunkBounds**(`chunk`): `Float32Array`

Helper function for computing the voxel bounds of a chunk based on its chunkGridPosition.

This assumes that the grid of chunk positions starts at this.baseVoxelOffset.  Chunks are
clipped to lie within upperVoxelBound, but are not clipped to lie within lowerVoxelBound.  (The
frontend code currently cannot handle chunks clipped at their lower corner, and the chunk
layout can generally be chosen so that lowerVoxelBound lies on a chunk boundary.)

This sets chunk.chunkDataSize to a copy of the returned chunkDataSize if it differs from
this.spec.chunkDataSize; otherwise, it is set to this.spec.chunkDataSize.

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`VolumeChunk`](neuroglancer_sliceview_volume_backend.VolumeChunk.md) |

#### Returns

`Float32Array`

A globally-allocated Vec3 containing the chunk corner position in voxel coordinates.
The returned Vec3 will be invalidated by any subsequent call to this method, even on a
different VolumeChunkSource instance.

#### Inherited from

(BrainmapsSource(VolumeChunkSource, VolumeSourceParameters)).computeChunkBounds

#### Defined in

[src/neuroglancer/sliceview/volume/backend.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/backend.ts#L85)

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

(BrainmapsSource(VolumeChunkSource, VolumeSourceParameters)).counterpartRefCountReachedZero

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L234)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

(BrainmapsSource(VolumeChunkSource, VolumeSourceParameters)).dispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

(BrainmapsSource(VolumeChunkSource, VolumeSourceParameters)).disposed

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L75)

___

### download

▸ **download**(`chunk`, `cancellationToken`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`VolumeChunk`](neuroglancer_sliceview_volume_backend.VolumeChunk.md) |
| `cancellationToken` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) |

#### Returns

`Promise`<`void`\>

#### Overrides

(BrainmapsSource(VolumeChunkSource, VolumeSourceParameters)).download

#### Defined in

[src/neuroglancer/datasource/brainmaps/backend.ts:107](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/brainmaps/backend.ts#L107)

___

### getChunk

▸ **getChunk**(`chunkGridPosition`): [`SliceViewChunk`](neuroglancer_sliceview_backend.SliceViewChunk.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkGridPosition` | [`vec3`](neuroglancer_util_geom.vec3.md) |

#### Returns

[`SliceViewChunk`](neuroglancer_sliceview_backend.SliceViewChunk.md)

#### Inherited from

(BrainmapsSource(VolumeChunkSource, VolumeSourceParameters)).getChunk

#### Defined in

[src/neuroglancer/sliceview/backend.ts:302](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/backend.ts#L302)

▸ **getChunk**(`chunkGridPosition`): [`SliceViewChunk`](neuroglancer_sliceview_backend.SliceViewChunk.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkGridPosition` | `Float32Array` |

#### Returns

[`SliceViewChunk`](neuroglancer_sliceview_backend.SliceViewChunk.md)

#### Inherited from

(BrainmapsSource(VolumeChunkSource, VolumeSourceParameters)).getChunk

#### Defined in

[src/neuroglancer/sliceview/backend.ts:318](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/backend.ts#L318)

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

(BrainmapsSource(VolumeChunkSource, VolumeSourceParameters)).getNewChunk\_

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:268](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L268)

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

(BrainmapsSource(VolumeChunkSource, VolumeSourceParameters)).initializeCounterpart

#### Defined in

[src/neuroglancer/worker_rpc.ts:182](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L182)

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

(BrainmapsSource(VolumeChunkSource, VolumeSourceParameters)).initializeSharedObject

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L175)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

(BrainmapsSource(VolumeChunkSource, VolumeSourceParameters)).ownerDispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

(BrainmapsSource(VolumeChunkSource, VolumeSourceParameters)).refCountReachedZero

#### Defined in

[src/neuroglancer/worker_rpc.ts:203](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L203)

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

(BrainmapsSource(VolumeChunkSource, VolumeSourceParameters)).registerCancellable

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L100)

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

(BrainmapsSource(VolumeChunkSource, VolumeSourceParameters)).registerChunkListener

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:312](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L312)

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

(BrainmapsSource(VolumeChunkSource, VolumeSourceParameters)).registerDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L76)

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

(BrainmapsSource(VolumeChunkSource, VolumeSourceParameters)).registerEventListener

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L95)

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

(BrainmapsSource(VolumeChunkSource, VolumeSourceParameters)).removeChunk

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:302](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L302)

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

(BrainmapsSource(VolumeChunkSource, VolumeSourceParameters)).unregisterChunkListener

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:321](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L321)

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

(BrainmapsSource(VolumeChunkSource, VolumeSourceParameters)).unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)
