[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/datasource/precomputed/backend](../modules/neuroglancer_datasource_precomputed_backend.md) / PrecomputedMultiscaleMeshSource

# Class: PrecomputedMultiscaleMeshSource

[neuroglancer/datasource/precomputed/backend](../modules/neuroglancer_datasource_precomputed_backend.md).PrecomputedMultiscaleMeshSource

## Hierarchy

- `C`<[`MultiscaleMeshSourceParameters`](neuroglancer_datasource_precomputed_base.MultiscaleMeshSourceParameters.md), (...`args`: `any`[]) => `__class`<`any`, typeof [`MultiscaleMeshSource`](neuroglancer_mesh_backend.MultiscaleMeshSource.md)\> & typeof [`MultiscaleMeshSource`](neuroglancer_mesh_backend.MultiscaleMeshSource.md), `this`\> & `__class`<`any`, typeof [`MultiscaleMeshSource`](neuroglancer_mesh_backend.MultiscaleMeshSource.md), `this`\> & [`MultiscaleMeshSource`](neuroglancer_mesh_backend.MultiscaleMeshSource.md)<`this`\>

  ↳ **`PrecomputedMultiscaleMeshSource`**

## Table of contents

### Constructors

- [constructor](neuroglancer_datasource_precomputed_backend.PrecomputedMultiscaleMeshSource.md#constructor)

### Properties

- [RPC\_TYPE\_ID](neuroglancer_datasource_precomputed_backend.PrecomputedMultiscaleMeshSource.md#rpc_type_id)
- [chunkManager](neuroglancer_datasource_precomputed_backend.PrecomputedMultiscaleMeshSource.md#chunkmanager)
- [chunks](neuroglancer_datasource_precomputed_backend.PrecomputedMultiscaleMeshSource.md#chunks)
- [credentialsProvider](neuroglancer_datasource_precomputed_backend.PrecomputedMultiscaleMeshSource.md#credentialsprovider)
- [disposedStacks](neuroglancer_datasource_precomputed_backend.PrecomputedMultiscaleMeshSource.md#disposedstacks)
- [format](neuroglancer_datasource_precomputed_backend.PrecomputedMultiscaleMeshSource.md#format)
- [fragmentSource](neuroglancer_datasource_precomputed_backend.PrecomputedMultiscaleMeshSource.md#fragmentsource)
- [freeChunks](neuroglancer_datasource_precomputed_backend.PrecomputedMultiscaleMeshSource.md#freechunks)
- [isOwner](neuroglancer_datasource_precomputed_backend.PrecomputedMultiscaleMeshSource.md#isowner)
- [minishardIndexSource](neuroglancer_datasource_precomputed_backend.PrecomputedMultiscaleMeshSource.md#minishardindexsource)
- [parameters](neuroglancer_datasource_precomputed_backend.PrecomputedMultiscaleMeshSource.md#parameters)
- [refCount](neuroglancer_datasource_precomputed_backend.PrecomputedMultiscaleMeshSource.md#refcount)
- [referencedGeneration](neuroglancer_datasource_precomputed_backend.PrecomputedMultiscaleMeshSource.md#referencedgeneration)
- [rpc](neuroglancer_datasource_precomputed_backend.PrecomputedMultiscaleMeshSource.md#rpc)
- [rpcId](neuroglancer_datasource_precomputed_backend.PrecomputedMultiscaleMeshSource.md#rpcid)
- [sourceQueueLevel](neuroglancer_datasource_precomputed_backend.PrecomputedMultiscaleMeshSource.md#sourcequeuelevel)
- [statistics](neuroglancer_datasource_precomputed_backend.PrecomputedMultiscaleMeshSource.md#statistics)
- [unreferencedGeneration](neuroglancer_datasource_precomputed_backend.PrecomputedMultiscaleMeshSource.md#unreferencedgeneration)
- [wasDisposed](neuroglancer_datasource_precomputed_backend.PrecomputedMultiscaleMeshSource.md#wasdisposed)

### Methods

- [addChunk](neuroglancer_datasource_precomputed_backend.PrecomputedMultiscaleMeshSource.md#addchunk)
- [addCounterpartRef](neuroglancer_datasource_precomputed_backend.PrecomputedMultiscaleMeshSource.md#addcounterpartref)
- [addRef](neuroglancer_datasource_precomputed_backend.PrecomputedMultiscaleMeshSource.md#addref)
- [chunkStateChanged](neuroglancer_datasource_precomputed_backend.PrecomputedMultiscaleMeshSource.md#chunkstatechanged)
- [counterpartRefCountReachedZero](neuroglancer_datasource_precomputed_backend.PrecomputedMultiscaleMeshSource.md#counterpartrefcountreachedzero)
- [dispose](neuroglancer_datasource_precomputed_backend.PrecomputedMultiscaleMeshSource.md#dispose)
- [disposed](neuroglancer_datasource_precomputed_backend.PrecomputedMultiscaleMeshSource.md#disposed)
- [download](neuroglancer_datasource_precomputed_backend.PrecomputedMultiscaleMeshSource.md#download)
- [downloadFragment](neuroglancer_datasource_precomputed_backend.PrecomputedMultiscaleMeshSource.md#downloadfragment)
- [getChunk](neuroglancer_datasource_precomputed_backend.PrecomputedMultiscaleMeshSource.md#getchunk)
- [getFragmentChunk](neuroglancer_datasource_precomputed_backend.PrecomputedMultiscaleMeshSource.md#getfragmentchunk)
- [getNewChunk\_](neuroglancer_datasource_precomputed_backend.PrecomputedMultiscaleMeshSource.md#getnewchunk_)
- [initializeCounterpart](neuroglancer_datasource_precomputed_backend.PrecomputedMultiscaleMeshSource.md#initializecounterpart)
- [initializeSharedObject](neuroglancer_datasource_precomputed_backend.PrecomputedMultiscaleMeshSource.md#initializesharedobject)
- [ownerDispose](neuroglancer_datasource_precomputed_backend.PrecomputedMultiscaleMeshSource.md#ownerdispose)
- [refCountReachedZero](neuroglancer_datasource_precomputed_backend.PrecomputedMultiscaleMeshSource.md#refcountreachedzero)
- [registerCancellable](neuroglancer_datasource_precomputed_backend.PrecomputedMultiscaleMeshSource.md#registercancellable)
- [registerChunkListener](neuroglancer_datasource_precomputed_backend.PrecomputedMultiscaleMeshSource.md#registerchunklistener)
- [registerDisposer](neuroglancer_datasource_precomputed_backend.PrecomputedMultiscaleMeshSource.md#registerdisposer)
- [registerEventListener](neuroglancer_datasource_precomputed_backend.PrecomputedMultiscaleMeshSource.md#registereventlistener)
- [removeChunk](neuroglancer_datasource_precomputed_backend.PrecomputedMultiscaleMeshSource.md#removechunk)
- [unregisterChunkListener](neuroglancer_datasource_precomputed_backend.PrecomputedMultiscaleMeshSource.md#unregisterchunklistener)
- [unregisterDisposer](neuroglancer_datasource_precomputed_backend.PrecomputedMultiscaleMeshSource.md#unregisterdisposer)

## Constructors

### constructor

• **new PrecomputedMultiscaleMeshSource**(`rpc`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](neuroglancer_worker_rpc.RPC.md) |
| `options` | `any` |

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(MultiscaleMeshSource), MultiscaleMeshSourceParameters)).constructor

#### Defined in

[src/neuroglancer/mesh/backend.ts:483](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/backend.ts#L483)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(MultiscaleMeshSource), MultiscaleMeshSourceParameters)).RPC\_TYPE\_ID

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L245)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](neuroglancer_chunk_manager_backend.ChunkManager.md)

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(MultiscaleMeshSource), MultiscaleMeshSourceParameters)).chunkManager

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:258](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L258)

___

### chunks

• **chunks**: `Map`<`string`, [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md)\>

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(MultiscaleMeshSource), MultiscaleMeshSourceParameters)).chunks

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:247](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L247)

___

### credentialsProvider

• **credentialsProvider**: `undefined` \| [`CredentialsProvider`](neuroglancer_credentials_provider.CredentialsProvider.md)<`any`\>

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(MultiscaleMeshSource), MultiscaleMeshSourceParameters)).credentialsProvider

#### Defined in

[src/neuroglancer/credentials_provider/shared_counterpart.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/credentials_provider/shared_counterpart.ts#L42)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(MultiscaleMeshSource), MultiscaleMeshSourceParameters)).disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### format

• **format**: [`MultiscaleFragmentFormat`](../interfaces/neuroglancer_mesh_base.MultiscaleFragmentFormat.md)

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(MultiscaleMeshSource), MultiscaleMeshSourceParameters)).format

#### Defined in

[src/neuroglancer/mesh/backend.ts:481](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/backend.ts#L481)

___

### fragmentSource

• **fragmentSource**: [`MultiscaleFragmentSource`](neuroglancer_mesh_backend.MultiscaleFragmentSource.md)

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(MultiscaleMeshSource), MultiscaleMeshSourceParameters)).fragmentSource

#### Defined in

[src/neuroglancer/mesh/backend.ts:480](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/backend.ts#L480)

___

### freeChunks

• **freeChunks**: [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md)[]

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(MultiscaleMeshSource), MultiscaleMeshSourceParameters)).freeChunks

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:248](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L248)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(MultiscaleMeshSource), MultiscaleMeshSourceParameters)).isOwner

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L171)

___

### minishardIndexSource

• `Private` **minishardIndexSource**: `undefined` \| [`MinishardIndexSource`](../interfaces/neuroglancer_datasource_precomputed_backend._internal_.MinishardIndexSource.md)

#### Defined in

[src/neuroglancer/datasource/precomputed/backend.ts:539](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/precomputed/backend.ts#L539)

___

### parameters

• **parameters**: [`MultiscaleMeshSourceParameters`](neuroglancer_datasource_precomputed_base.MultiscaleMeshSourceParameters.md)

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(MultiscaleMeshSource), MultiscaleMeshSourceParameters)).parameters

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:1125](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L1125)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(MultiscaleMeshSource), MultiscaleMeshSourceParameters)).refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(MultiscaleMeshSource), MultiscaleMeshSourceParameters)).referencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](neuroglancer_worker_rpc.RPC.md) = `null`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(MultiscaleMeshSource), MultiscaleMeshSourceParameters)).rpc

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(MultiscaleMeshSource), MultiscaleMeshSourceParameters)).rpcId

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L170)

___

### sourceQueueLevel

• **sourceQueueLevel**: `number` = `0`

sourceQueueLevel must be greater than the sourceQueueLevel of any ChunkSource whose download
method depends on chunks from this source.  A normal ChunkSource with no other dependencies
should have a level of 0.

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(MultiscaleMeshSource), MultiscaleMeshSourceParameters)).sourceQueueLevel

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:256](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L256)

___

### statistics

• **statistics**: `Float64Array`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(MultiscaleMeshSource), MultiscaleMeshSourceParameters)).statistics

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:249](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L249)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(MultiscaleMeshSource), MultiscaleMeshSourceParameters)).unreferencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L172)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(MultiscaleMeshSource), MultiscaleMeshSourceParameters)).wasDisposed

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(MultiscaleMeshSource), MultiscaleMeshSourceParameters)).addChunk

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(MultiscaleMeshSource), MultiscaleMeshSourceParameters)).addCounterpartRef

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`PrecomputedMultiscaleMeshSource`](neuroglancer_datasource_precomputed_backend.PrecomputedMultiscaleMeshSource.md)

#### Returns

[`PrecomputedMultiscaleMeshSource`](neuroglancer_datasource_precomputed_backend.PrecomputedMultiscaleMeshSource.md)

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(MultiscaleMeshSource), MultiscaleMeshSourceParameters)).addRef

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(MultiscaleMeshSource), MultiscaleMeshSourceParameters)).chunkStateChanged

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(MultiscaleMeshSource), MultiscaleMeshSourceParameters)).counterpartRefCountReachedZero

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L234)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(MultiscaleMeshSource), MultiscaleMeshSourceParameters)).dispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(MultiscaleMeshSource), MultiscaleMeshSourceParameters)).disposed

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L75)

___

### download

▸ **download**(`chunk`, `cancellationToken`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`PrecomputedMultiscaleManifestChunk`](../interfaces/neuroglancer_datasource_precomputed_backend._internal_.PrecomputedMultiscaleManifestChunk.md) |
| `cancellationToken` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) |

#### Returns

`Promise`<`void`\>

#### Overrides

(WithParameters(WithSharedCredentialsProviderCounterpart&lt;SpecialProtocolCredentials\&gt;()(MultiscaleMeshSource), MultiscaleMeshSourceParameters)).download

#### Defined in

[src/neuroglancer/datasource/precomputed/backend.ts:543](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/precomputed/backend.ts#L543)

___

### downloadFragment

▸ **downloadFragment**(`chunk`, `cancellationToken`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`MultiscaleFragmentChunk`](neuroglancer_mesh_backend.MultiscaleFragmentChunk.md) |
| `cancellationToken` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) |

#### Returns

`Promise`<`void`\>

#### Overrides

(WithParameters(WithSharedCredentialsProviderCounterpart&lt;SpecialProtocolCredentials\&gt;()(MultiscaleMeshSource), MultiscaleMeshSourceParameters)).downloadFragment

#### Defined in

[src/neuroglancer/datasource/precomputed/backend.ts:558](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/precomputed/backend.ts#L558)

___

### getChunk

▸ **getChunk**(`objectId`): [`MultiscaleManifestChunk`](neuroglancer_mesh_backend.MultiscaleManifestChunk.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `objectId` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

[`MultiscaleManifestChunk`](neuroglancer_mesh_backend.MultiscaleManifestChunk.md)

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(MultiscaleMeshSource), MultiscaleMeshSourceParameters)).getChunk

#### Defined in

[src/neuroglancer/mesh/backend.ts:491](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/backend.ts#L491)

___

### getFragmentChunk

▸ **getFragmentChunk**(`manifestChunk`, `lod`, `chunkIndex`): [`MultiscaleFragmentChunk`](neuroglancer_mesh_backend.MultiscaleFragmentChunk.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `manifestChunk` | [`MultiscaleManifestChunk`](neuroglancer_mesh_backend.MultiscaleManifestChunk.md) |
| `lod` | `number` |
| `chunkIndex` | `number` |

#### Returns

[`MultiscaleFragmentChunk`](neuroglancer_mesh_backend.MultiscaleFragmentChunk.md)

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(MultiscaleMeshSource), MultiscaleMeshSourceParameters)).getFragmentChunk

#### Defined in

[src/neuroglancer/mesh/backend.ts:502](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/backend.ts#L502)

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(MultiscaleMeshSource), MultiscaleMeshSourceParameters)).getNewChunk\_

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(MultiscaleMeshSource), MultiscaleMeshSourceParameters)).initializeCounterpart

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(MultiscaleMeshSource), MultiscaleMeshSourceParameters)).initializeSharedObject

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L175)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(MultiscaleMeshSource), MultiscaleMeshSourceParameters)).ownerDispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(MultiscaleMeshSource), MultiscaleMeshSourceParameters)).refCountReachedZero

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(MultiscaleMeshSource), MultiscaleMeshSourceParameters)).registerCancellable

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(MultiscaleMeshSource), MultiscaleMeshSourceParameters)).registerChunkListener

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(MultiscaleMeshSource), MultiscaleMeshSourceParameters)).registerDisposer

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(MultiscaleMeshSource), MultiscaleMeshSourceParameters)).registerEventListener

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(MultiscaleMeshSource), MultiscaleMeshSourceParameters)).removeChunk

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(MultiscaleMeshSource), MultiscaleMeshSourceParameters)).unregisterChunkListener

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(MultiscaleMeshSource), MultiscaleMeshSourceParameters)).unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)
