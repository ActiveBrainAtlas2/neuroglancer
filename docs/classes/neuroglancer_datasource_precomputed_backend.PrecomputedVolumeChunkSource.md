[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/datasource/precomputed/backend](../modules/neuroglancer_datasource_precomputed_backend.md) / PrecomputedVolumeChunkSource

# Class: PrecomputedVolumeChunkSource

[neuroglancer/datasource/precomputed/backend](../modules/neuroglancer_datasource_precomputed_backend.md).PrecomputedVolumeChunkSource

## Hierarchy

- `C`<[`VolumeChunkSourceParameters`](neuroglancer_datasource_precomputed_base.VolumeChunkSourceParameters.md), (...`args`: `any`[]) => `__class`<`any`, typeof [`VolumeChunkSource`](neuroglancer_sliceview_volume_backend.VolumeChunkSource.md)\> & typeof [`VolumeChunkSource`](neuroglancer_sliceview_volume_backend.VolumeChunkSource.md), `this`\> & `__class`<`any`, typeof [`VolumeChunkSource`](neuroglancer_sliceview_volume_backend.VolumeChunkSource.md), `this`\> & [`VolumeChunkSource`](neuroglancer_sliceview_volume_backend.VolumeChunkSource.md)<`this`\>

  ↳ **`PrecomputedVolumeChunkSource`**

## Table of contents

### Constructors

- [constructor](neuroglancer_datasource_precomputed_backend.PrecomputedVolumeChunkSource.md#constructor)

### Properties

- [RPC\_TYPE\_ID](neuroglancer_datasource_precomputed_backend.PrecomputedVolumeChunkSource.md#rpc_type_id)
- [chunkConstructor](neuroglancer_datasource_precomputed_backend.PrecomputedVolumeChunkSource.md#chunkconstructor)
- [chunkDecoder](neuroglancer_datasource_precomputed_backend.PrecomputedVolumeChunkSource.md#chunkdecoder)
- [chunkManager](neuroglancer_datasource_precomputed_backend.PrecomputedVolumeChunkSource.md#chunkmanager)
- [chunks](neuroglancer_datasource_precomputed_backend.PrecomputedVolumeChunkSource.md#chunks)
- [credentialsProvider](neuroglancer_datasource_precomputed_backend.PrecomputedVolumeChunkSource.md#credentialsprovider)
- [disposedStacks](neuroglancer_datasource_precomputed_backend.PrecomputedVolumeChunkSource.md#disposedstacks)
- [freeChunks](neuroglancer_datasource_precomputed_backend.PrecomputedVolumeChunkSource.md#freechunks)
- [gridShape](neuroglancer_datasource_precomputed_backend.PrecomputedVolumeChunkSource.md#gridshape)
- [isOwner](neuroglancer_datasource_precomputed_backend.PrecomputedVolumeChunkSource.md#isowner)
- [minishardIndexSource](neuroglancer_datasource_precomputed_backend.PrecomputedVolumeChunkSource.md#minishardindexsource)
- [parameters](neuroglancer_datasource_precomputed_backend.PrecomputedVolumeChunkSource.md#parameters)
- [refCount](neuroglancer_datasource_precomputed_backend.PrecomputedVolumeChunkSource.md#refcount)
- [referencedGeneration](neuroglancer_datasource_precomputed_backend.PrecomputedVolumeChunkSource.md#referencedgeneration)
- [rpc](neuroglancer_datasource_precomputed_backend.PrecomputedVolumeChunkSource.md#rpc)
- [rpcId](neuroglancer_datasource_precomputed_backend.PrecomputedVolumeChunkSource.md#rpcid)
- [sourceQueueLevel](neuroglancer_datasource_precomputed_backend.PrecomputedVolumeChunkSource.md#sourcequeuelevel)
- [spec](neuroglancer_datasource_precomputed_backend.PrecomputedVolumeChunkSource.md#spec)
- [statistics](neuroglancer_datasource_precomputed_backend.PrecomputedVolumeChunkSource.md#statistics)
- [unreferencedGeneration](neuroglancer_datasource_precomputed_backend.PrecomputedVolumeChunkSource.md#unreferencedgeneration)
- [wasDisposed](neuroglancer_datasource_precomputed_backend.PrecomputedVolumeChunkSource.md#wasdisposed)

### Methods

- [addChunk](neuroglancer_datasource_precomputed_backend.PrecomputedVolumeChunkSource.md#addchunk)
- [addCounterpartRef](neuroglancer_datasource_precomputed_backend.PrecomputedVolumeChunkSource.md#addcounterpartref)
- [addRef](neuroglancer_datasource_precomputed_backend.PrecomputedVolumeChunkSource.md#addref)
- [chunkStateChanged](neuroglancer_datasource_precomputed_backend.PrecomputedVolumeChunkSource.md#chunkstatechanged)
- [computeChunkBounds](neuroglancer_datasource_precomputed_backend.PrecomputedVolumeChunkSource.md#computechunkbounds)
- [counterpartRefCountReachedZero](neuroglancer_datasource_precomputed_backend.PrecomputedVolumeChunkSource.md#counterpartrefcountreachedzero)
- [dispose](neuroglancer_datasource_precomputed_backend.PrecomputedVolumeChunkSource.md#dispose)
- [disposed](neuroglancer_datasource_precomputed_backend.PrecomputedVolumeChunkSource.md#disposed)
- [download](neuroglancer_datasource_precomputed_backend.PrecomputedVolumeChunkSource.md#download)
- [getChunk](neuroglancer_datasource_precomputed_backend.PrecomputedVolumeChunkSource.md#getchunk)
- [getNewChunk\_](neuroglancer_datasource_precomputed_backend.PrecomputedVolumeChunkSource.md#getnewchunk_)
- [initializeCounterpart](neuroglancer_datasource_precomputed_backend.PrecomputedVolumeChunkSource.md#initializecounterpart)
- [initializeSharedObject](neuroglancer_datasource_precomputed_backend.PrecomputedVolumeChunkSource.md#initializesharedobject)
- [ownerDispose](neuroglancer_datasource_precomputed_backend.PrecomputedVolumeChunkSource.md#ownerdispose)
- [refCountReachedZero](neuroglancer_datasource_precomputed_backend.PrecomputedVolumeChunkSource.md#refcountreachedzero)
- [registerCancellable](neuroglancer_datasource_precomputed_backend.PrecomputedVolumeChunkSource.md#registercancellable)
- [registerChunkListener](neuroglancer_datasource_precomputed_backend.PrecomputedVolumeChunkSource.md#registerchunklistener)
- [registerDisposer](neuroglancer_datasource_precomputed_backend.PrecomputedVolumeChunkSource.md#registerdisposer)
- [registerEventListener](neuroglancer_datasource_precomputed_backend.PrecomputedVolumeChunkSource.md#registereventlistener)
- [removeChunk](neuroglancer_datasource_precomputed_backend.PrecomputedVolumeChunkSource.md#removechunk)
- [unregisterChunkListener](neuroglancer_datasource_precomputed_backend.PrecomputedVolumeChunkSource.md#unregisterchunklistener)
- [unregisterDisposer](neuroglancer_datasource_precomputed_backend.PrecomputedVolumeChunkSource.md#unregisterdisposer)

## Constructors

### constructor

• **new PrecomputedVolumeChunkSource**(`rpc`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](neuroglancer_worker_rpc.RPC.md) |
| `options` | `any` |

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeChunkSourceParameters)).constructor

#### Defined in

[src/neuroglancer/sliceview/volume/backend.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/backend.ts#L63)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeChunkSourceParameters)).RPC\_TYPE\_ID

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L245)

___

### chunkConstructor

• **chunkConstructor**: [`ChunkConstructor`](../interfaces/neuroglancer_chunk_manager_backend.ChunkConstructor.md)<[`SliceViewChunk`](neuroglancer_sliceview_backend.SliceViewChunk.md)\>

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeChunkSourceParameters)).chunkConstructor

#### Defined in

[src/neuroglancer/sliceview/backend.ts:304](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/backend.ts#L304)

___

### chunkDecoder

• **chunkDecoder**: [`ChunkDecoder`](../modules/neuroglancer_sliceview_backend_chunk_decoders.md#chunkdecoder)

#### Defined in

[src/neuroglancer/datasource/precomputed/backend.ts:263](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/precomputed/backend.ts#L263)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](neuroglancer_chunk_manager_backend.ChunkManager.md)

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeChunkSourceParameters)).chunkManager

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:258](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L258)

___

### chunks

• **chunks**: `Map`<`string`, [`SliceViewChunk`](neuroglancer_sliceview_backend.SliceViewChunk.md)\>

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeChunkSourceParameters)).chunks

#### Defined in

[src/neuroglancer/sliceview/backend.ts:312](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/backend.ts#L312)

___

### credentialsProvider

• **credentialsProvider**: `undefined` \| [`CredentialsProvider`](neuroglancer_credentials_provider.CredentialsProvider.md)<`any`\>

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeChunkSourceParameters)).credentialsProvider

#### Defined in

[src/neuroglancer/credentials_provider/shared_counterpart.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/credentials_provider/shared_counterpart.ts#L42)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeChunkSourceParameters)).disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### freeChunks

• **freeChunks**: [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md)[]

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeChunkSourceParameters)).freeChunks

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:248](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L248)

___

### gridShape

• **gridShape**: `Uint32Array`

#### Defined in

[src/neuroglancer/datasource/precomputed/backend.ts:267](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/precomputed/backend.ts#L267)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeChunkSourceParameters)).isOwner

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L171)

___

### minishardIndexSource

• `Private` **minishardIndexSource**: `undefined` \| [`MinishardIndexSource`](../interfaces/neuroglancer_datasource_precomputed_backend._internal_.MinishardIndexSource.md)

#### Defined in

[src/neuroglancer/datasource/precomputed/backend.ts:264](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/precomputed/backend.ts#L264)

___

### parameters

• **parameters**: [`VolumeChunkSourceParameters`](neuroglancer_datasource_precomputed_base.VolumeChunkSourceParameters.md)

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeChunkSourceParameters)).parameters

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:1125](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L1125)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeChunkSourceParameters)).refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeChunkSourceParameters)).referencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](neuroglancer_worker_rpc.RPC.md) = `null`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeChunkSourceParameters)).rpc

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeChunkSourceParameters)).rpcId

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L170)

___

### sourceQueueLevel

• **sourceQueueLevel**: `number` = `0`

sourceQueueLevel must be greater than the sourceQueueLevel of any ChunkSource whose download
method depends on chunks from this source.  A normal ChunkSource with no other dependencies
should have a level of 0.

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeChunkSourceParameters)).sourceQueueLevel

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:256](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L256)

___

### spec

• **spec**: [`VolumeChunkSpecification`](../interfaces/neuroglancer_sliceview_volume_base.VolumeChunkSpecification.md)

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeChunkSourceParameters)).spec

#### Defined in

[src/neuroglancer/sliceview/volume/backend.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/backend.ts#L60)

___

### statistics

• **statistics**: `Float64Array`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeChunkSourceParameters)).statistics

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:249](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L249)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeChunkSourceParameters)).unreferencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L172)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeChunkSourceParameters)).wasDisposed

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeChunkSourceParameters)).addChunk

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeChunkSourceParameters)).addCounterpartRef

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`PrecomputedVolumeChunkSource`](neuroglancer_datasource_precomputed_backend.PrecomputedVolumeChunkSource.md)

#### Returns

[`PrecomputedVolumeChunkSource`](neuroglancer_datasource_precomputed_backend.PrecomputedVolumeChunkSource.md)

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeChunkSourceParameters)).addRef

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeChunkSourceParameters)).chunkStateChanged

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:337](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L337)

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeChunkSourceParameters)).computeChunkBounds

#### Defined in

[src/neuroglancer/sliceview/volume/backend.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/backend.ts#L85)

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeChunkSourceParameters)).counterpartRefCountReachedZero

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L234)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeChunkSourceParameters)).dispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeChunkSourceParameters)).disposed

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L75)

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

(WithParameters(WithSharedCredentialsProviderCounterpart&lt;SpecialProtocolCredentials\&gt;()(VolumeChunkSource), VolumeChunkSourceParameters)).download

#### Defined in

[src/neuroglancer/datasource/precomputed/backend.ts:276](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/precomputed/backend.ts#L276)

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeChunkSourceParameters)).getChunk

#### Defined in

[src/neuroglancer/sliceview/backend.ts:302](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/backend.ts#L302)

▸ **getChunk**(`chunkGridPosition`): [`SliceViewChunk`](neuroglancer_sliceview_backend.SliceViewChunk.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkGridPosition` | `Float32Array` |

#### Returns

[`SliceViewChunk`](neuroglancer_sliceview_backend.SliceViewChunk.md)

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeChunkSourceParameters)).getChunk

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeChunkSourceParameters)).getNewChunk\_

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeChunkSourceParameters)).initializeCounterpart

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeChunkSourceParameters)).initializeSharedObject

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L175)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeChunkSourceParameters)).ownerDispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeChunkSourceParameters)).refCountReachedZero

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeChunkSourceParameters)).registerCancellable

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeChunkSourceParameters)).registerChunkListener

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeChunkSourceParameters)).registerDisposer

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeChunkSourceParameters)).registerEventListener

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeChunkSourceParameters)).removeChunk

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeChunkSourceParameters)).unregisterChunkListener

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeChunkSourceParameters)).unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)
