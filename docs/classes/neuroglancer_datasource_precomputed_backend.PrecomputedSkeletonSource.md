[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/datasource/precomputed/backend](../modules/neuroglancer_datasource_precomputed_backend.md) / PrecomputedSkeletonSource

# Class: PrecomputedSkeletonSource

[neuroglancer/datasource/precomputed/backend](../modules/neuroglancer_datasource_precomputed_backend.md).PrecomputedSkeletonSource

## Hierarchy

- `C`<[`SkeletonSourceParameters`](neuroglancer_datasource_precomputed_base.SkeletonSourceParameters.md), (...`args`: `any`[]) => `__class`<`any`, typeof [`SkeletonSource`](neuroglancer_skeleton_backend.SkeletonSource.md)\> & typeof [`SkeletonSource`](neuroglancer_skeleton_backend.SkeletonSource.md), `this`\> & `__class`<`any`, typeof [`SkeletonSource`](neuroglancer_skeleton_backend.SkeletonSource.md), `this`\> & [`SkeletonSource`](neuroglancer_skeleton_backend.SkeletonSource.md)<`this`\>

  ↳ **`PrecomputedSkeletonSource`**

## Table of contents

### Constructors

- [constructor](neuroglancer_datasource_precomputed_backend.PrecomputedSkeletonSource.md#constructor)

### Properties

- [RPC\_TYPE\_ID](neuroglancer_datasource_precomputed_backend.PrecomputedSkeletonSource.md#rpc_type_id)
- [chunkManager](neuroglancer_datasource_precomputed_backend.PrecomputedSkeletonSource.md#chunkmanager)
- [chunks](neuroglancer_datasource_precomputed_backend.PrecomputedSkeletonSource.md#chunks)
- [credentialsProvider](neuroglancer_datasource_precomputed_backend.PrecomputedSkeletonSource.md#credentialsprovider)
- [disposedStacks](neuroglancer_datasource_precomputed_backend.PrecomputedSkeletonSource.md#disposedstacks)
- [freeChunks](neuroglancer_datasource_precomputed_backend.PrecomputedSkeletonSource.md#freechunks)
- [isOwner](neuroglancer_datasource_precomputed_backend.PrecomputedSkeletonSource.md#isowner)
- [minishardIndexSource](neuroglancer_datasource_precomputed_backend.PrecomputedSkeletonSource.md#minishardindexsource)
- [parameters](neuroglancer_datasource_precomputed_backend.PrecomputedSkeletonSource.md#parameters)
- [refCount](neuroglancer_datasource_precomputed_backend.PrecomputedSkeletonSource.md#refcount)
- [referencedGeneration](neuroglancer_datasource_precomputed_backend.PrecomputedSkeletonSource.md#referencedgeneration)
- [rpc](neuroglancer_datasource_precomputed_backend.PrecomputedSkeletonSource.md#rpc)
- [rpcId](neuroglancer_datasource_precomputed_backend.PrecomputedSkeletonSource.md#rpcid)
- [sourceQueueLevel](neuroglancer_datasource_precomputed_backend.PrecomputedSkeletonSource.md#sourcequeuelevel)
- [statistics](neuroglancer_datasource_precomputed_backend.PrecomputedSkeletonSource.md#statistics)
- [unreferencedGeneration](neuroglancer_datasource_precomputed_backend.PrecomputedSkeletonSource.md#unreferencedgeneration)
- [wasDisposed](neuroglancer_datasource_precomputed_backend.PrecomputedSkeletonSource.md#wasdisposed)

### Methods

- [addChunk](neuroglancer_datasource_precomputed_backend.PrecomputedSkeletonSource.md#addchunk)
- [addCounterpartRef](neuroglancer_datasource_precomputed_backend.PrecomputedSkeletonSource.md#addcounterpartref)
- [addRef](neuroglancer_datasource_precomputed_backend.PrecomputedSkeletonSource.md#addref)
- [chunkStateChanged](neuroglancer_datasource_precomputed_backend.PrecomputedSkeletonSource.md#chunkstatechanged)
- [counterpartRefCountReachedZero](neuroglancer_datasource_precomputed_backend.PrecomputedSkeletonSource.md#counterpartrefcountreachedzero)
- [dispose](neuroglancer_datasource_precomputed_backend.PrecomputedSkeletonSource.md#dispose)
- [disposed](neuroglancer_datasource_precomputed_backend.PrecomputedSkeletonSource.md#disposed)
- [download](neuroglancer_datasource_precomputed_backend.PrecomputedSkeletonSource.md#download)
- [getChunk](neuroglancer_datasource_precomputed_backend.PrecomputedSkeletonSource.md#getchunk)
- [getNewChunk\_](neuroglancer_datasource_precomputed_backend.PrecomputedSkeletonSource.md#getnewchunk_)
- [initializeCounterpart](neuroglancer_datasource_precomputed_backend.PrecomputedSkeletonSource.md#initializecounterpart)
- [initializeSharedObject](neuroglancer_datasource_precomputed_backend.PrecomputedSkeletonSource.md#initializesharedobject)
- [ownerDispose](neuroglancer_datasource_precomputed_backend.PrecomputedSkeletonSource.md#ownerdispose)
- [refCountReachedZero](neuroglancer_datasource_precomputed_backend.PrecomputedSkeletonSource.md#refcountreachedzero)
- [registerCancellable](neuroglancer_datasource_precomputed_backend.PrecomputedSkeletonSource.md#registercancellable)
- [registerChunkListener](neuroglancer_datasource_precomputed_backend.PrecomputedSkeletonSource.md#registerchunklistener)
- [registerDisposer](neuroglancer_datasource_precomputed_backend.PrecomputedSkeletonSource.md#registerdisposer)
- [registerEventListener](neuroglancer_datasource_precomputed_backend.PrecomputedSkeletonSource.md#registereventlistener)
- [removeChunk](neuroglancer_datasource_precomputed_backend.PrecomputedSkeletonSource.md#removechunk)
- [unregisterChunkListener](neuroglancer_datasource_precomputed_backend.PrecomputedSkeletonSource.md#unregisterchunklistener)
- [unregisterDisposer](neuroglancer_datasource_precomputed_backend.PrecomputedSkeletonSource.md#unregisterdisposer)

## Constructors

### constructor

• **new PrecomputedSkeletonSource**(`rpc`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](neuroglancer_worker_rpc.RPC.md) |
| `options` | `any` |

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(SkeletonSource), SkeletonSourceParameters)).constructor

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:380](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L380)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(SkeletonSource), SkeletonSourceParameters)).RPC\_TYPE\_ID

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L245)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](neuroglancer_chunk_manager_backend.ChunkManager.md)

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(SkeletonSource), SkeletonSourceParameters)).chunkManager

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:258](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L258)

___

### chunks

• **chunks**: `Map`<`string`, [`SkeletonChunk`](neuroglancer_skeleton_backend.SkeletonChunk.md)\>

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(SkeletonSource), SkeletonSourceParameters)).chunks

#### Defined in

[src/neuroglancer/skeleton/backend.ts:103](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/skeleton/backend.ts#L103)

___

### credentialsProvider

• **credentialsProvider**: `undefined` \| [`CredentialsProvider`](neuroglancer_credentials_provider.CredentialsProvider.md)<`any`\>

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(SkeletonSource), SkeletonSourceParameters)).credentialsProvider

#### Defined in

[src/neuroglancer/credentials_provider/shared_counterpart.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/credentials_provider/shared_counterpart.ts#L42)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(SkeletonSource), SkeletonSourceParameters)).disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### freeChunks

• **freeChunks**: [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md)[]

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(SkeletonSource), SkeletonSourceParameters)).freeChunks

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:248](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L248)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(SkeletonSource), SkeletonSourceParameters)).isOwner

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L171)

___

### minishardIndexSource

• `Private` **minishardIndexSource**: `undefined` \| [`MinishardIndexSource`](../interfaces/neuroglancer_datasource_precomputed_backend._internal_.MinishardIndexSource.md)

#### Defined in

[src/neuroglancer/datasource/precomputed/backend.ts:622](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/precomputed/backend.ts#L622)

___

### parameters

• **parameters**: [`SkeletonSourceParameters`](neuroglancer_datasource_precomputed_base.SkeletonSourceParameters.md)

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(SkeletonSource), SkeletonSourceParameters)).parameters

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:1125](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L1125)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(SkeletonSource), SkeletonSourceParameters)).refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(SkeletonSource), SkeletonSourceParameters)).referencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](neuroglancer_worker_rpc.RPC.md) = `null`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(SkeletonSource), SkeletonSourceParameters)).rpc

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(SkeletonSource), SkeletonSourceParameters)).rpcId

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L170)

___

### sourceQueueLevel

• **sourceQueueLevel**: `number` = `0`

sourceQueueLevel must be greater than the sourceQueueLevel of any ChunkSource whose download
method depends on chunks from this source.  A normal ChunkSource with no other dependencies
should have a level of 0.

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(SkeletonSource), SkeletonSourceParameters)).sourceQueueLevel

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:256](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L256)

___

### statistics

• **statistics**: `Float64Array`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(SkeletonSource), SkeletonSourceParameters)).statistics

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:249](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/backend.ts#L249)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(SkeletonSource), SkeletonSourceParameters)).unreferencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L172)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(SkeletonSource), SkeletonSourceParameters)).wasDisposed

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(SkeletonSource), SkeletonSourceParameters)).addChunk

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(SkeletonSource), SkeletonSourceParameters)).addCounterpartRef

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`PrecomputedSkeletonSource`](neuroglancer_datasource_precomputed_backend.PrecomputedSkeletonSource.md)

#### Returns

[`PrecomputedSkeletonSource`](neuroglancer_datasource_precomputed_backend.PrecomputedSkeletonSource.md)

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(SkeletonSource), SkeletonSourceParameters)).addRef

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(SkeletonSource), SkeletonSourceParameters)).chunkStateChanged

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(SkeletonSource), SkeletonSourceParameters)).counterpartRefCountReachedZero

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L234)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(SkeletonSource), SkeletonSourceParameters)).dispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(SkeletonSource), SkeletonSourceParameters)).disposed

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

(WithParameters(WithSharedCredentialsProviderCounterpart&lt;SpecialProtocolCredentials\&gt;()(SkeletonSource), SkeletonSourceParameters)).download

#### Defined in

[src/neuroglancer/datasource/precomputed/backend.ts:625](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/precomputed/backend.ts#L625)

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(SkeletonSource), SkeletonSourceParameters)).getChunk

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(SkeletonSource), SkeletonSourceParameters)).getNewChunk\_

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(SkeletonSource), SkeletonSourceParameters)).initializeCounterpart

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(SkeletonSource), SkeletonSourceParameters)).initializeSharedObject

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L175)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(SkeletonSource), SkeletonSourceParameters)).ownerDispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(SkeletonSource), SkeletonSourceParameters)).refCountReachedZero

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(SkeletonSource), SkeletonSourceParameters)).registerCancellable

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(SkeletonSource), SkeletonSourceParameters)).registerChunkListener

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(SkeletonSource), SkeletonSourceParameters)).registerDisposer

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(SkeletonSource), SkeletonSourceParameters)).registerEventListener

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(SkeletonSource), SkeletonSourceParameters)).removeChunk

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(SkeletonSource), SkeletonSourceParameters)).unregisterChunkListener

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

(WithParameters(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(SkeletonSource), SkeletonSourceParameters)).unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)
