[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/datasource/precomputed/backend](../modules/neuroglancer_datasource_precomputed_backend.md) / PrecomputedIndexedSegmentPropertySourceBackend

# Class: PrecomputedIndexedSegmentPropertySourceBackend

[neuroglancer/datasource/precomputed/backend](../modules/neuroglancer_datasource_precomputed_backend.md).PrecomputedIndexedSegmentPropertySourceBackend

## Hierarchy

- `C`<[`IndexedSegmentPropertySourceParameters`](neuroglancer_datasource_precomputed_base.IndexedSegmentPropertySourceParameters.md), { `prototype`: `__class`<`any`, `any`\>  } & typeof [`IndexedSegmentPropertySourceBackend`](neuroglancer_segmentation_display_state_backend.IndexedSegmentPropertySourceBackend.md), `this`\> & `__class`<`any`, typeof [`IndexedSegmentPropertySourceBackend`](neuroglancer_segmentation_display_state_backend.IndexedSegmentPropertySourceBackend.md), `this`\> & [`IndexedSegmentPropertySourceBackend`](neuroglancer_segmentation_display_state_backend.IndexedSegmentPropertySourceBackend.md)<`this`\>

  ↳ **`PrecomputedIndexedSegmentPropertySourceBackend`**

## Table of contents

### Constructors

- [constructor](neuroglancer_datasource_precomputed_backend.PrecomputedIndexedSegmentPropertySourceBackend.md#constructor)

### Properties

- [RPC\_TYPE\_ID](neuroglancer_datasource_precomputed_backend.PrecomputedIndexedSegmentPropertySourceBackend.md#rpc_type_id)
- [chunkManager](neuroglancer_datasource_precomputed_backend.PrecomputedIndexedSegmentPropertySourceBackend.md#chunkmanager)
- [chunks](neuroglancer_datasource_precomputed_backend.PrecomputedIndexedSegmentPropertySourceBackend.md#chunks)
- [credentialsProvider](neuroglancer_datasource_precomputed_backend.PrecomputedIndexedSegmentPropertySourceBackend.md#credentialsprovider)
- [disposedStacks](neuroglancer_datasource_precomputed_backend.PrecomputedIndexedSegmentPropertySourceBackend.md#disposedstacks)
- [freeChunks](neuroglancer_datasource_precomputed_backend.PrecomputedIndexedSegmentPropertySourceBackend.md#freechunks)
- [isOwner](neuroglancer_datasource_precomputed_backend.PrecomputedIndexedSegmentPropertySourceBackend.md#isowner)
- [minishardIndexSource](neuroglancer_datasource_precomputed_backend.PrecomputedIndexedSegmentPropertySourceBackend.md#minishardindexsource)
- [parameters](neuroglancer_datasource_precomputed_backend.PrecomputedIndexedSegmentPropertySourceBackend.md#parameters)
- [properties](neuroglancer_datasource_precomputed_backend.PrecomputedIndexedSegmentPropertySourceBackend.md#properties)
- [refCount](neuroglancer_datasource_precomputed_backend.PrecomputedIndexedSegmentPropertySourceBackend.md#refcount)
- [referencedGeneration](neuroglancer_datasource_precomputed_backend.PrecomputedIndexedSegmentPropertySourceBackend.md#referencedgeneration)
- [rpc](neuroglancer_datasource_precomputed_backend.PrecomputedIndexedSegmentPropertySourceBackend.md#rpc)
- [rpcId](neuroglancer_datasource_precomputed_backend.PrecomputedIndexedSegmentPropertySourceBackend.md#rpcid)
- [sourceQueueLevel](neuroglancer_datasource_precomputed_backend.PrecomputedIndexedSegmentPropertySourceBackend.md#sourcequeuelevel)
- [statistics](neuroglancer_datasource_precomputed_backend.PrecomputedIndexedSegmentPropertySourceBackend.md#statistics)
- [unreferencedGeneration](neuroglancer_datasource_precomputed_backend.PrecomputedIndexedSegmentPropertySourceBackend.md#unreferencedgeneration)
- [wasDisposed](neuroglancer_datasource_precomputed_backend.PrecomputedIndexedSegmentPropertySourceBackend.md#wasdisposed)

### Methods

- [addChunk](neuroglancer_datasource_precomputed_backend.PrecomputedIndexedSegmentPropertySourceBackend.md#addchunk)
- [addCounterpartRef](neuroglancer_datasource_precomputed_backend.PrecomputedIndexedSegmentPropertySourceBackend.md#addcounterpartref)
- [addRef](neuroglancer_datasource_precomputed_backend.PrecomputedIndexedSegmentPropertySourceBackend.md#addref)
- [chunkStateChanged](neuroglancer_datasource_precomputed_backend.PrecomputedIndexedSegmentPropertySourceBackend.md#chunkstatechanged)
- [counterpartRefCountReachedZero](neuroglancer_datasource_precomputed_backend.PrecomputedIndexedSegmentPropertySourceBackend.md#counterpartrefcountreachedzero)
- [dispose](neuroglancer_datasource_precomputed_backend.PrecomputedIndexedSegmentPropertySourceBackend.md#dispose)
- [disposed](neuroglancer_datasource_precomputed_backend.PrecomputedIndexedSegmentPropertySourceBackend.md#disposed)
- [download](neuroglancer_datasource_precomputed_backend.PrecomputedIndexedSegmentPropertySourceBackend.md#download)
- [getNewChunk\_](neuroglancer_datasource_precomputed_backend.PrecomputedIndexedSegmentPropertySourceBackend.md#getnewchunk_)
- [initializeCounterpart](neuroglancer_datasource_precomputed_backend.PrecomputedIndexedSegmentPropertySourceBackend.md#initializecounterpart)
- [initializeSharedObject](neuroglancer_datasource_precomputed_backend.PrecomputedIndexedSegmentPropertySourceBackend.md#initializesharedobject)
- [ownerDispose](neuroglancer_datasource_precomputed_backend.PrecomputedIndexedSegmentPropertySourceBackend.md#ownerdispose)
- [refCountReachedZero](neuroglancer_datasource_precomputed_backend.PrecomputedIndexedSegmentPropertySourceBackend.md#refcountreachedzero)
- [registerCancellable](neuroglancer_datasource_precomputed_backend.PrecomputedIndexedSegmentPropertySourceBackend.md#registercancellable)
- [registerChunkListener](neuroglancer_datasource_precomputed_backend.PrecomputedIndexedSegmentPropertySourceBackend.md#registerchunklistener)
- [registerDisposer](neuroglancer_datasource_precomputed_backend.PrecomputedIndexedSegmentPropertySourceBackend.md#registerdisposer)
- [registerEventListener](neuroglancer_datasource_precomputed_backend.PrecomputedIndexedSegmentPropertySourceBackend.md#registereventlistener)
- [removeChunk](neuroglancer_datasource_precomputed_backend.PrecomputedIndexedSegmentPropertySourceBackend.md#removechunk)
- [unregisterChunkListener](neuroglancer_datasource_precomputed_backend.PrecomputedIndexedSegmentPropertySourceBackend.md#unregisterchunklistener)
- [unregisterDisposer](neuroglancer_datasource_precomputed_backend.PrecomputedIndexedSegmentPropertySourceBackend.md#unregisterdisposer)

## Constructors

### constructor

• **new PrecomputedIndexedSegmentPropertySourceBackend**(`rpc`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](neuroglancer_worker_rpc.RPC.md) |
| `options` | `any` |

#### Inherited from

WithParameters
(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(
     IndexedSegmentPropertySourceBackend),
 IndexedSegmentPropertySourceParameters).constructor

#### Defined in

[src/neuroglancer/segmentation_display_state/backend.ts:72](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/backend.ts#L72)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

WithParameters
(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(
     IndexedSegmentPropertySourceBackend),
 IndexedSegmentPropertySourceParameters).RPC\_TYPE\_ID

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L245)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](neuroglancer_chunk_manager_backend.ChunkManager.md)

#### Inherited from

WithParameters
(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(
     IndexedSegmentPropertySourceBackend),
 IndexedSegmentPropertySourceParameters).chunkManager

___

### chunks

• **chunks**: `Map`<`string`, [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md)\>

#### Inherited from

WithParameters
(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(
     IndexedSegmentPropertySourceBackend),
 IndexedSegmentPropertySourceParameters).chunks

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:247](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L247)

___

### credentialsProvider

• **credentialsProvider**: `undefined` \| [`CredentialsProvider`](neuroglancer_credentials_provider.CredentialsProvider.md)<`any`\>

#### Inherited from

WithParameters
(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(
     IndexedSegmentPropertySourceBackend),
 IndexedSegmentPropertySourceParameters).credentialsProvider

#### Defined in

[src/neuroglancer/credentials_provider/shared_counterpart.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/credentials_provider/shared_counterpart.ts#L42)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

WithParameters
(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(
     IndexedSegmentPropertySourceBackend),
 IndexedSegmentPropertySourceParameters).disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### freeChunks

• **freeChunks**: [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md)[]

#### Inherited from

WithParameters
(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(
     IndexedSegmentPropertySourceBackend),
 IndexedSegmentPropertySourceParameters).freeChunks

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:248](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L248)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

WithParameters
(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(
     IndexedSegmentPropertySourceBackend),
 IndexedSegmentPropertySourceParameters).isOwner

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L171)

___

### minishardIndexSource

• **minishardIndexSource**: `undefined` \| [`MinishardIndexSource`](../interfaces/neuroglancer_datasource_precomputed_backend._internal_.MinishardIndexSource.md)

#### Defined in

[src/neuroglancer/datasource/precomputed/backend.ts:786](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/precomputed/backend.ts#L786)

___

### parameters

• **parameters**: [`IndexedSegmentPropertySourceParameters`](neuroglancer_datasource_precomputed_base.IndexedSegmentPropertySourceParameters.md)

#### Inherited from

WithParameters
(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(
     IndexedSegmentPropertySourceBackend),
 IndexedSegmentPropertySourceParameters).parameters

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:1125](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L1125)

___

### properties

• **properties**: readonly [`Readonly`](../modules/neuroglancer_annotation_frontend_source._internal_.md#readonly)<[`IndexedSegmentProperty`](../interfaces/neuroglancer_segmentation_display_state_base.IndexedSegmentProperty.md)\>[]

#### Inherited from

WithParameters
(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(
     IndexedSegmentPropertySourceBackend),
 IndexedSegmentPropertySourceParameters).properties

#### Defined in

[src/neuroglancer/segmentation_display_state/backend.ts:71](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/backend.ts#L71)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

WithParameters
(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(
     IndexedSegmentPropertySourceBackend),
 IndexedSegmentPropertySourceParameters).refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

WithParameters
(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(
     IndexedSegmentPropertySourceBackend),
 IndexedSegmentPropertySourceParameters).referencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](neuroglancer_worker_rpc.RPC.md) = `null`

#### Inherited from

WithParameters
(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(
     IndexedSegmentPropertySourceBackend),
 IndexedSegmentPropertySourceParameters).rpc

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

WithParameters
(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(
     IndexedSegmentPropertySourceBackend),
 IndexedSegmentPropertySourceParameters).rpcId

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L170)

___

### sourceQueueLevel

• **sourceQueueLevel**: `number` = `0`

sourceQueueLevel must be greater than the sourceQueueLevel of any ChunkSource whose download
method depends on chunks from this source.  A normal ChunkSource with no other dependencies
should have a level of 0.

#### Inherited from

WithParameters
(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(
     IndexedSegmentPropertySourceBackend),
 IndexedSegmentPropertySourceParameters).sourceQueueLevel

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:256](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L256)

___

### statistics

• **statistics**: `Float64Array`

#### Inherited from

WithParameters
(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(
     IndexedSegmentPropertySourceBackend),
 IndexedSegmentPropertySourceParameters).statistics

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:249](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L249)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

WithParameters
(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(
     IndexedSegmentPropertySourceBackend),
 IndexedSegmentPropertySourceParameters).unreferencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L172)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

WithParameters
(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(
     IndexedSegmentPropertySourceBackend),
 IndexedSegmentPropertySourceParameters).wasDisposed

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

WithParameters
(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(
     IndexedSegmentPropertySourceBackend),
 IndexedSegmentPropertySourceParameters).addChunk

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

WithParameters
(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(
     IndexedSegmentPropertySourceBackend),
 IndexedSegmentPropertySourceParameters).addCounterpartRef

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`PrecomputedIndexedSegmentPropertySourceBackend`](neuroglancer_datasource_precomputed_backend.PrecomputedIndexedSegmentPropertySourceBackend.md)

#### Returns

[`PrecomputedIndexedSegmentPropertySourceBackend`](neuroglancer_datasource_precomputed_backend.PrecomputedIndexedSegmentPropertySourceBackend.md)

#### Inherited from

WithParameters
(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(
     IndexedSegmentPropertySourceBackend),
 IndexedSegmentPropertySourceParameters).addRef

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

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

WithParameters
(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(
     IndexedSegmentPropertySourceBackend),
 IndexedSegmentPropertySourceParameters).chunkStateChanged

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:337](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L337)

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

WithParameters
(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(
     IndexedSegmentPropertySourceBackend),
 IndexedSegmentPropertySourceParameters).counterpartRefCountReachedZero

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L234)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

WithParameters
(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(
     IndexedSegmentPropertySourceBackend),
 IndexedSegmentPropertySourceParameters).dispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

WithParameters
(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(
     IndexedSegmentPropertySourceBackend),
 IndexedSegmentPropertySourceParameters).disposed

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L75)

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
| `chunk` | [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md) | Chunk to download. |
| `cancellationToken` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) | If this token is canceled, the download/decoding should be aborted if possible.  TODO(jbms): Move this back to the class definition above and declare this abstract once mixins are compatible with abstract classes. |

#### Returns

`Promise`<`void`\>

#### Inherited from

WithParameters
(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(
     IndexedSegmentPropertySourceBackend),
 IndexedSegmentPropertySourceParameters).download

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:376](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L376)

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

WithParameters
(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(
     IndexedSegmentPropertySourceBackend),
 IndexedSegmentPropertySourceParameters).getNewChunk\_

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

WithParameters
(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(
     IndexedSegmentPropertySourceBackend),
 IndexedSegmentPropertySourceParameters).initializeCounterpart

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

WithParameters
(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(
     IndexedSegmentPropertySourceBackend),
 IndexedSegmentPropertySourceParameters).initializeSharedObject

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L175)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

WithParameters
(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(
     IndexedSegmentPropertySourceBackend),
 IndexedSegmentPropertySourceParameters).ownerDispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

WithParameters
(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(
     IndexedSegmentPropertySourceBackend),
 IndexedSegmentPropertySourceParameters).refCountReachedZero

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

WithParameters
(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(
     IndexedSegmentPropertySourceBackend),
 IndexedSegmentPropertySourceParameters).registerCancellable

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

WithParameters
(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(
     IndexedSegmentPropertySourceBackend),
 IndexedSegmentPropertySourceParameters).registerChunkListener

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

WithParameters
(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(
     IndexedSegmentPropertySourceBackend),
 IndexedSegmentPropertySourceParameters).registerDisposer

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

WithParameters
(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(
     IndexedSegmentPropertySourceBackend),
 IndexedSegmentPropertySourceParameters).registerEventListener

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

WithParameters
(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(
     IndexedSegmentPropertySourceBackend),
 IndexedSegmentPropertySourceParameters).removeChunk

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

WithParameters
(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(
     IndexedSegmentPropertySourceBackend),
 IndexedSegmentPropertySourceParameters).unregisterChunkListener

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

WithParameters
(WithSharedCredentialsProviderCounterpart<SpecialProtocolCredentials\>()(
     IndexedSegmentPropertySourceBackend),
 IndexedSegmentPropertySourceParameters).unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)
