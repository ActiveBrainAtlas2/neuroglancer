[neuroglancer](../README.md) / [Modules](../modules.md) / [chunk\_manager/backend](../modules/chunk_manager_backend.md) / ChunkSource

# Class: ChunkSource

[chunk_manager/backend](../modules/chunk_manager_backend.md).ChunkSource

## Hierarchy

- [`ChunkSourceBase`](chunk_manager_backend.ChunkSourceBase.md)

  ↳ **`ChunkSource`**

  ↳↳ [`MeshSource`](mesh_backend.MeshSource.md)

  ↳↳ [`FragmentSource`](mesh_backend.FragmentSource.md)

  ↳↳ [`MultiscaleMeshSource`](mesh_backend.MultiscaleMeshSource.md)

  ↳↳ [`MultiscaleFragmentSource`](mesh_backend.MultiscaleFragmentSource.md)

  ↳↳ [`IndexedSegmentPropertySourceBackend`](segmentation_display_state_backend.IndexedSegmentPropertySourceBackend.md)

  ↳↳ [`SkeletonSource`](skeleton_backend.SkeletonSource.md)

  ↳↳ [`SliceViewChunkSourceBackend`](sliceview_backend.SliceViewChunkSourceBackend.md)

  ↳↳ [`AnnotationSubsetGeometryChunkSource`](annotation_backend._internal_.AnnotationSubsetGeometryChunkSource.md)

  ↳↳ [`AnnotationMetadataChunkSource`](annotation_backend._internal_.AnnotationMetadataChunkSource.md)

## Table of contents

### Constructors

- [constructor](chunk_manager_backend.ChunkSource.md#constructor)

### Properties

- [RPC\_TYPE\_ID](chunk_manager_backend.ChunkSource.md#rpc_type_id)
- [chunkManager](chunk_manager_backend.ChunkSource.md#chunkmanager)
- [chunks](chunk_manager_backend.ChunkSource.md#chunks)
- [disposedStacks](chunk_manager_backend.ChunkSource.md#disposedstacks)
- [freeChunks](chunk_manager_backend.ChunkSource.md#freechunks)
- [isOwner](chunk_manager_backend.ChunkSource.md#isowner)
- [refCount](chunk_manager_backend.ChunkSource.md#refcount)
- [referencedGeneration](chunk_manager_backend.ChunkSource.md#referencedgeneration)
- [rpc](chunk_manager_backend.ChunkSource.md#rpc)
- [rpcId](chunk_manager_backend.ChunkSource.md#rpcid)
- [sourceQueueLevel](chunk_manager_backend.ChunkSource.md#sourcequeuelevel)
- [statistics](chunk_manager_backend.ChunkSource.md#statistics)
- [unreferencedGeneration](chunk_manager_backend.ChunkSource.md#unreferencedgeneration)
- [wasDisposed](chunk_manager_backend.ChunkSource.md#wasdisposed)

### Methods

- [addChunk](chunk_manager_backend.ChunkSource.md#addchunk)
- [addCounterpartRef](chunk_manager_backend.ChunkSource.md#addcounterpartref)
- [addRef](chunk_manager_backend.ChunkSource.md#addref)
- [chunkStateChanged](chunk_manager_backend.ChunkSource.md#chunkstatechanged)
- [counterpartRefCountReachedZero](chunk_manager_backend.ChunkSource.md#counterpartrefcountreachedzero)
- [dispose](chunk_manager_backend.ChunkSource.md#dispose)
- [disposed](chunk_manager_backend.ChunkSource.md#disposed)
- [download](chunk_manager_backend.ChunkSource.md#download)
- [getNewChunk\_](chunk_manager_backend.ChunkSource.md#getnewchunk_)
- [initializeCounterpart](chunk_manager_backend.ChunkSource.md#initializecounterpart)
- [initializeSharedObject](chunk_manager_backend.ChunkSource.md#initializesharedobject)
- [ownerDispose](chunk_manager_backend.ChunkSource.md#ownerdispose)
- [refCountReachedZero](chunk_manager_backend.ChunkSource.md#refcountreachedzero)
- [registerCancellable](chunk_manager_backend.ChunkSource.md#registercancellable)
- [registerChunkListener](chunk_manager_backend.ChunkSource.md#registerchunklistener)
- [registerDisposer](chunk_manager_backend.ChunkSource.md#registerdisposer)
- [registerEventListener](chunk_manager_backend.ChunkSource.md#registereventlistener)
- [removeChunk](chunk_manager_backend.ChunkSource.md#removechunk)
- [unregisterChunkListener](chunk_manager_backend.ChunkSource.md#unregisterchunklistener)
- [unregisterDisposer](chunk_manager_backend.ChunkSource.md#unregisterdisposer)

## Constructors

### constructor

• **new ChunkSource**(`rpc`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](annotation_annotation_layer_state._internal_.RPC.md) |
| `options` | `any` |

#### Overrides

[ChunkSourceBase](chunk_manager_backend.ChunkSourceBase.md).[constructor](chunk_manager_backend.ChunkSourceBase.md#constructor)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:380](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L380)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

[ChunkSourceBase](chunk_manager_backend.ChunkSourceBase.md).[RPC_TYPE_ID](chunk_manager_backend.ChunkSourceBase.md#rpc_type_id)

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L245)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](chunk_manager_backend.ChunkManager.md)

#### Inherited from

[ChunkSourceBase](chunk_manager_backend.ChunkSourceBase.md).[chunkManager](chunk_manager_backend.ChunkSourceBase.md#chunkmanager)

___

### chunks

• **chunks**: `Map`<`string`, [`Chunk`](chunk_manager_backend.Chunk.md)\>

#### Inherited from

[ChunkSourceBase](chunk_manager_backend.ChunkSourceBase.md).[chunks](chunk_manager_backend.ChunkSourceBase.md#chunks)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:247](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L247)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[ChunkSourceBase](chunk_manager_backend.ChunkSourceBase.md).[disposedStacks](chunk_manager_backend.ChunkSourceBase.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### freeChunks

• **freeChunks**: [`Chunk`](chunk_manager_backend.Chunk.md)[]

#### Inherited from

[ChunkSourceBase](chunk_manager_backend.ChunkSourceBase.md).[freeChunks](chunk_manager_backend.ChunkSourceBase.md#freechunks)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:248](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L248)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

[ChunkSourceBase](chunk_manager_backend.ChunkSourceBase.md).[isOwner](chunk_manager_backend.ChunkSourceBase.md#isowner)

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L171)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[ChunkSourceBase](chunk_manager_backend.ChunkSourceBase.md).[refCount](chunk_manager_backend.ChunkSourceBase.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

[ChunkSourceBase](chunk_manager_backend.ChunkSourceBase.md).[referencedGeneration](chunk_manager_backend.ChunkSourceBase.md#referencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](annotation_annotation_layer_state._internal_.RPC.md) = `null`

#### Inherited from

[ChunkSourceBase](chunk_manager_backend.ChunkSourceBase.md).[rpc](chunk_manager_backend.ChunkSourceBase.md#rpc)

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

[ChunkSourceBase](chunk_manager_backend.ChunkSourceBase.md).[rpcId](chunk_manager_backend.ChunkSourceBase.md#rpcid)

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L170)

___

### sourceQueueLevel

• **sourceQueueLevel**: `number` = `0`

sourceQueueLevel must be greater than the sourceQueueLevel of any ChunkSource whose download
method depends on chunks from this source.  A normal ChunkSource with no other dependencies
should have a level of 0.

#### Inherited from

[ChunkSourceBase](chunk_manager_backend.ChunkSourceBase.md).[sourceQueueLevel](chunk_manager_backend.ChunkSourceBase.md#sourcequeuelevel)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:256](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L256)

___

### statistics

• **statistics**: `Float64Array`

#### Inherited from

[ChunkSourceBase](chunk_manager_backend.ChunkSourceBase.md).[statistics](chunk_manager_backend.ChunkSourceBase.md#statistics)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:249](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L249)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

[ChunkSourceBase](chunk_manager_backend.ChunkSourceBase.md).[unreferencedGeneration](chunk_manager_backend.ChunkSourceBase.md#unreferencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L172)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[ChunkSourceBase](chunk_manager_backend.ChunkSourceBase.md).[wasDisposed](chunk_manager_backend.ChunkSourceBase.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addChunk

▸ **addChunk**(`chunk`): `void`

Adds the specified chunk to the chunk cache.

If the chunk cache was previously empty, also call this.addRef() to increment the reference
count.

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`Chunk`](chunk_manager_backend.Chunk.md) |

#### Returns

`void`

#### Inherited from

[ChunkSourceBase](chunk_manager_backend.ChunkSourceBase.md).[addChunk](chunk_manager_backend.ChunkSourceBase.md#addchunk)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:288](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L288)

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

[ChunkSourceBase](chunk_manager_backend.ChunkSourceBase.md).[addCounterpartRef](chunk_manager_backend.ChunkSourceBase.md#addcounterpartref)

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`ChunkSource`](chunk_manager_backend.ChunkSource.md)

#### Returns

[`ChunkSource`](chunk_manager_backend.ChunkSource.md)

#### Inherited from

[ChunkSourceBase](chunk_manager_backend.ChunkSourceBase.md).[addRef](chunk_manager_backend.ChunkSourceBase.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### chunkStateChanged

▸ **chunkStateChanged**(`chunk`, `oldState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`Chunk`](chunk_manager_backend.Chunk.md) |
| `oldState` | [`ChunkState`](../enums/chunk_manager_base.ChunkState.md) |

#### Returns

`void`

#### Inherited from

[ChunkSourceBase](chunk_manager_backend.ChunkSourceBase.md).[chunkStateChanged](chunk_manager_backend.ChunkSourceBase.md#chunkstatechanged)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:337](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L337)

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

[ChunkSourceBase](chunk_manager_backend.ChunkSourceBase.md).[counterpartRefCountReachedZero](chunk_manager_backend.ChunkSourceBase.md#counterpartrefcountreachedzero)

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L234)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[ChunkSourceBase](chunk_manager_backend.ChunkSourceBase.md).[dispose](chunk_manager_backend.ChunkSourceBase.md#dispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[ChunkSourceBase](chunk_manager_backend.ChunkSourceBase.md).[disposed](chunk_manager_backend.ChunkSourceBase.md#disposed)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:263](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L263)

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
| `chunk` | [`Chunk`](chunk_manager_backend.Chunk.md) | Chunk to download. |
| `cancellationToken` | [`CancellationToken`](../interfaces/util_cancellation.CancellationToken.md) | If this token is canceled, the download/decoding should be aborted if possible.  TODO(jbms): Move this back to the class definition above and declare this abstract once mixins are compatible with abstract classes. |

#### Returns

`Promise`<`void`\>

#### Inherited from

[ChunkSourceBase](chunk_manager_backend.ChunkSourceBase.md).[download](chunk_manager_backend.ChunkSourceBase.md#download)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:376](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L376)

___

### getNewChunk\_

▸ **getNewChunk_**<`T`\>(`chunkType`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Chunk`](chunk_manager_backend.Chunk.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkType` | [`ChunkConstructor`](../interfaces/chunk_manager_backend.ChunkConstructor.md)<`T`\> |

#### Returns

`T`

#### Inherited from

[ChunkSourceBase](chunk_manager_backend.ChunkSourceBase.md).[getNewChunk_](chunk_manager_backend.ChunkSourceBase.md#getnewchunk_)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:268](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L268)

___

### initializeCounterpart

▸ **initializeCounterpart**(`rpc`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](annotation_annotation_layer_state._internal_.RPC.md) |
| `options` | `any` |

#### Returns

`void`

#### Inherited from

[ChunkSourceBase](chunk_manager_backend.ChunkSourceBase.md).[initializeCounterpart](chunk_manager_backend.ChunkSourceBase.md#initializecounterpart)

#### Defined in

[src/neuroglancer/worker_rpc.ts:182](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L182)

___

### initializeSharedObject

▸ **initializeSharedObject**(`rpc`, `rpcId?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](annotation_annotation_layer_state._internal_.RPC.md) |
| `rpcId` | `number` |

#### Returns

`void`

#### Inherited from

[ChunkSourceBase](chunk_manager_backend.ChunkSourceBase.md).[initializeSharedObject](chunk_manager_backend.ChunkSourceBase.md#initializesharedobject)

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L175)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

[ChunkSourceBase](chunk_manager_backend.ChunkSourceBase.md).[ownerDispose](chunk_manager_backend.ChunkSourceBase.md#ownerdispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[ChunkSourceBase](chunk_manager_backend.ChunkSourceBase.md).[refCountReachedZero](chunk_manager_backend.ChunkSourceBase.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/worker_rpc.ts:203](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L203)

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

[ChunkSourceBase](chunk_manager_backend.ChunkSourceBase.md).[registerCancellable](chunk_manager_backend.ChunkSourceBase.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L100)

___

### registerChunkListener

▸ **registerChunkListener**(`key`, `listener`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `listener` | [`ChunkStateListener`](../interfaces/chunk_manager_backend.ChunkStateListener.md) |

#### Returns

`boolean`

#### Inherited from

[ChunkSourceBase](chunk_manager_backend.ChunkSourceBase.md).[registerChunkListener](chunk_manager_backend.ChunkSourceBase.md#registerchunklistener)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:312](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L312)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[ChunkSourceBase](chunk_manager_backend.ChunkSourceBase.md).[registerDisposer](chunk_manager_backend.ChunkSourceBase.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget) |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/annotation_annotation_layer_state._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](../interfaces/annotation_annotation_layer_state._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[ChunkSourceBase](chunk_manager_backend.ChunkSourceBase.md).[registerEventListener](chunk_manager_backend.ChunkSourceBase.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

___

### removeChunk

▸ **removeChunk**(`chunk`): `void`

Remove the specified chunk from the chunk cache.

If the chunk cache becomes empty, also call this.dispose() to decrement the reference count.

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`Chunk`](chunk_manager_backend.Chunk.md) |

#### Returns

`void`

#### Inherited from

[ChunkSourceBase](chunk_manager_backend.ChunkSourceBase.md).[removeChunk](chunk_manager_backend.ChunkSourceBase.md#removechunk)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:302](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L302)

___

### unregisterChunkListener

▸ **unregisterChunkListener**(`key`, `listener`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `listener` | [`ChunkStateListener`](../interfaces/chunk_manager_backend.ChunkStateListener.md) |

#### Returns

`boolean`

#### Inherited from

[ChunkSourceBase](chunk_manager_backend.ChunkSourceBase.md).[unregisterChunkListener](chunk_manager_backend.ChunkSourceBase.md#unregisterchunklistener)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:321](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/backend.ts#L321)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/util_disposable.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[ChunkSourceBase](chunk_manager_backend.ChunkSourceBase.md).[unregisterDisposer](chunk_manager_backend.ChunkSourceBase.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)
