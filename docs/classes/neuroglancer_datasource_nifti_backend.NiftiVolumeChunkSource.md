[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/datasource/nifti/backend](../modules/neuroglancer_datasource_nifti_backend.md) / NiftiVolumeChunkSource

# Class: NiftiVolumeChunkSource

[neuroglancer/datasource/nifti/backend](../modules/neuroglancer_datasource_nifti_backend.md).NiftiVolumeChunkSource

## Hierarchy

- `C`<[`VolumeSourceParameters`](neuroglancer_datasource_nifti_base.VolumeSourceParameters.md), (...`args`: `any`[]) => `__class`<`any`, typeof [`VolumeChunkSource`](neuroglancer_sliceview_volume_backend.VolumeChunkSource.md)\> & typeof [`VolumeChunkSource`](neuroglancer_sliceview_volume_backend.VolumeChunkSource.md), `this`\> & `__class`<`any`, typeof [`VolumeChunkSource`](neuroglancer_sliceview_volume_backend.VolumeChunkSource.md), `this`\> & [`VolumeChunkSource`](neuroglancer_sliceview_volume_backend.VolumeChunkSource.md)<`this`\>

  ↳ **`NiftiVolumeChunkSource`**

## Table of contents

### Constructors

- [constructor](neuroglancer_datasource_nifti_backend.NiftiVolumeChunkSource.md#constructor)

### Properties

- [RPC\_TYPE\_ID](neuroglancer_datasource_nifti_backend.NiftiVolumeChunkSource.md#rpc_type_id)
- [chunkConstructor](neuroglancer_datasource_nifti_backend.NiftiVolumeChunkSource.md#chunkconstructor)
- [chunkManager](neuroglancer_datasource_nifti_backend.NiftiVolumeChunkSource.md#chunkmanager)
- [chunks](neuroglancer_datasource_nifti_backend.NiftiVolumeChunkSource.md#chunks)
- [credentialsProvider](neuroglancer_datasource_nifti_backend.NiftiVolumeChunkSource.md#credentialsprovider)
- [disposedStacks](neuroglancer_datasource_nifti_backend.NiftiVolumeChunkSource.md#disposedstacks)
- [freeChunks](neuroglancer_datasource_nifti_backend.NiftiVolumeChunkSource.md#freechunks)
- [isOwner](neuroglancer_datasource_nifti_backend.NiftiVolumeChunkSource.md#isowner)
- [parameters](neuroglancer_datasource_nifti_backend.NiftiVolumeChunkSource.md#parameters)
- [refCount](neuroglancer_datasource_nifti_backend.NiftiVolumeChunkSource.md#refcount)
- [referencedGeneration](neuroglancer_datasource_nifti_backend.NiftiVolumeChunkSource.md#referencedgeneration)
- [rpc](neuroglancer_datasource_nifti_backend.NiftiVolumeChunkSource.md#rpc)
- [rpcId](neuroglancer_datasource_nifti_backend.NiftiVolumeChunkSource.md#rpcid)
- [sourceQueueLevel](neuroglancer_datasource_nifti_backend.NiftiVolumeChunkSource.md#sourcequeuelevel)
- [spec](neuroglancer_datasource_nifti_backend.NiftiVolumeChunkSource.md#spec)
- [statistics](neuroglancer_datasource_nifti_backend.NiftiVolumeChunkSource.md#statistics)
- [unreferencedGeneration](neuroglancer_datasource_nifti_backend.NiftiVolumeChunkSource.md#unreferencedgeneration)
- [wasDisposed](neuroglancer_datasource_nifti_backend.NiftiVolumeChunkSource.md#wasdisposed)

### Methods

- [addChunk](neuroglancer_datasource_nifti_backend.NiftiVolumeChunkSource.md#addchunk)
- [addCounterpartRef](neuroglancer_datasource_nifti_backend.NiftiVolumeChunkSource.md#addcounterpartref)
- [addRef](neuroglancer_datasource_nifti_backend.NiftiVolumeChunkSource.md#addref)
- [chunkStateChanged](neuroglancer_datasource_nifti_backend.NiftiVolumeChunkSource.md#chunkstatechanged)
- [computeChunkBounds](neuroglancer_datasource_nifti_backend.NiftiVolumeChunkSource.md#computechunkbounds)
- [counterpartRefCountReachedZero](neuroglancer_datasource_nifti_backend.NiftiVolumeChunkSource.md#counterpartrefcountreachedzero)
- [dispose](neuroglancer_datasource_nifti_backend.NiftiVolumeChunkSource.md#dispose)
- [disposed](neuroglancer_datasource_nifti_backend.NiftiVolumeChunkSource.md#disposed)
- [download](neuroglancer_datasource_nifti_backend.NiftiVolumeChunkSource.md#download)
- [getChunk](neuroglancer_datasource_nifti_backend.NiftiVolumeChunkSource.md#getchunk)
- [getNewChunk\_](neuroglancer_datasource_nifti_backend.NiftiVolumeChunkSource.md#getnewchunk_)
- [initializeCounterpart](neuroglancer_datasource_nifti_backend.NiftiVolumeChunkSource.md#initializecounterpart)
- [initializeSharedObject](neuroglancer_datasource_nifti_backend.NiftiVolumeChunkSource.md#initializesharedobject)
- [ownerDispose](neuroglancer_datasource_nifti_backend.NiftiVolumeChunkSource.md#ownerdispose)
- [refCountReachedZero](neuroglancer_datasource_nifti_backend.NiftiVolumeChunkSource.md#refcountreachedzero)
- [registerCancellable](neuroglancer_datasource_nifti_backend.NiftiVolumeChunkSource.md#registercancellable)
- [registerChunkListener](neuroglancer_datasource_nifti_backend.NiftiVolumeChunkSource.md#registerchunklistener)
- [registerDisposer](neuroglancer_datasource_nifti_backend.NiftiVolumeChunkSource.md#registerdisposer)
- [registerEventListener](neuroglancer_datasource_nifti_backend.NiftiVolumeChunkSource.md#registereventlistener)
- [removeChunk](neuroglancer_datasource_nifti_backend.NiftiVolumeChunkSource.md#removechunk)
- [unregisterChunkListener](neuroglancer_datasource_nifti_backend.NiftiVolumeChunkSource.md#unregisterchunklistener)
- [unregisterDisposer](neuroglancer_datasource_nifti_backend.NiftiVolumeChunkSource.md#unregisterdisposer)

## Constructors

### constructor

• **new NiftiVolumeChunkSource**(`rpc`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](neuroglancer_worker_rpc.RPC.md) |
| `options` | `any` |

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).constructor

#### Defined in

[src/neuroglancer/sliceview/volume/backend.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/backend.ts#L63)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).RPC\_TYPE\_ID

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L245)

___

### chunkConstructor

• **chunkConstructor**: [`ChunkConstructor`](../interfaces/neuroglancer_chunk_manager_backend.ChunkConstructor.md)<[`SliceViewChunk`](neuroglancer_sliceview_backend.SliceViewChunk.md)\>

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).chunkConstructor

#### Defined in

[src/neuroglancer/sliceview/backend.ts:304](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/backend.ts#L304)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](neuroglancer_chunk_manager_backend.ChunkManager.md)

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).chunkManager

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:258](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L258)

___

### chunks

• **chunks**: `Map`<`string`, [`SliceViewChunk`](neuroglancer_sliceview_backend.SliceViewChunk.md)\>

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).chunks

#### Defined in

[src/neuroglancer/sliceview/backend.ts:312](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/backend.ts#L312)

___

### credentialsProvider

• **credentialsProvider**: `undefined` \| [`CredentialsProvider`](neuroglancer_credentials_provider.CredentialsProvider.md)<`any`\>

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).credentialsProvider

#### Defined in

[src/neuroglancer/credentials_provider/shared_counterpart.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/credentials_provider/shared_counterpart.ts#L42)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### freeChunks

• **freeChunks**: [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md)[]

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).freeChunks

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:248](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L248)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).isOwner

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L171)

___

### parameters

• **parameters**: [`VolumeSourceParameters`](neuroglancer_datasource_nifti_base.VolumeSourceParameters.md)

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).parameters

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:1125](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L1125)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).referencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](neuroglancer_worker_rpc.RPC.md) = `null`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).rpc

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).rpcId

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L170)

___

### sourceQueueLevel

• **sourceQueueLevel**: `number` = `0`

sourceQueueLevel must be greater than the sourceQueueLevel of any ChunkSource whose download
method depends on chunks from this source.  A normal ChunkSource with no other dependencies
should have a level of 0.

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).sourceQueueLevel

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:256](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L256)

___

### spec

• **spec**: [`VolumeChunkSpecification`](../interfaces/neuroglancer_sliceview_volume_base.VolumeChunkSpecification.md)

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).spec

#### Defined in

[src/neuroglancer/sliceview/volume/backend.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/backend.ts#L60)

___

### statistics

• **statistics**: `Float64Array`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).statistics

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:249](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L249)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).unreferencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L172)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).wasDisposed

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).addChunk

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).addCounterpartRef

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`NiftiVolumeChunkSource`](neuroglancer_datasource_nifti_backend.NiftiVolumeChunkSource.md)

#### Returns

[`NiftiVolumeChunkSource`](neuroglancer_datasource_nifti_backend.NiftiVolumeChunkSource.md)

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).addRef

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).chunkStateChanged

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).computeChunkBounds

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).counterpartRefCountReachedZero

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L234)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).dispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).disposed

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

(WithParameters(WithSharedCredentialsProviderCounterpart&lt;SpecialProtocolCredentials\&gt;()(VolumeChunkSource), VolumeSourceParameters)).download

#### Defined in

[src/neuroglancer/datasource/nifti/backend.ts:229](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/nifti/backend.ts#L229)

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).getChunk

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).getChunk

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).getNewChunk\_

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).initializeCounterpart

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).initializeSharedObject

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L175)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).ownerDispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).refCountReachedZero

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).registerCancellable

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).registerChunkListener

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).registerDisposer

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).registerEventListener

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).removeChunk

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).unregisterChunkListener

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)
