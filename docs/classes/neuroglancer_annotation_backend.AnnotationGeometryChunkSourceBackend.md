[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/annotation/backend](../modules/neuroglancer_annotation_backend.md) / AnnotationGeometryChunkSourceBackend

# Class: AnnotationGeometryChunkSourceBackend

[neuroglancer/annotation/backend](../modules/neuroglancer_annotation_backend.md).AnnotationGeometryChunkSourceBackend

## Hierarchy

- [`SliceViewChunkSourceBackend`](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md)<[`AnnotationGeometryChunkSpecification`](../interfaces/neuroglancer_annotation_base.AnnotationGeometryChunkSpecification.md), [`AnnotationGeometryChunk`](neuroglancer_annotation_backend.AnnotationGeometryChunk.md)\>

  ↳ **`AnnotationGeometryChunkSourceBackend`**

## Table of contents

### Constructors

- [constructor](neuroglancer_annotation_backend.AnnotationGeometryChunkSourceBackend.md#constructor)

### Properties

- [RPC\_TYPE\_ID](neuroglancer_annotation_backend.AnnotationGeometryChunkSourceBackend.md#rpc_type_id)
- [chunkConstructor](neuroglancer_annotation_backend.AnnotationGeometryChunkSourceBackend.md#chunkconstructor)
- [chunkManager](neuroglancer_annotation_backend.AnnotationGeometryChunkSourceBackend.md#chunkmanager)
- [chunks](neuroglancer_annotation_backend.AnnotationGeometryChunkSourceBackend.md#chunks)
- [disposedStacks](neuroglancer_annotation_backend.AnnotationGeometryChunkSourceBackend.md#disposedstacks)
- [freeChunks](neuroglancer_annotation_backend.AnnotationGeometryChunkSourceBackend.md#freechunks)
- [isOwner](neuroglancer_annotation_backend.AnnotationGeometryChunkSourceBackend.md#isowner)
- [parent](neuroglancer_annotation_backend.AnnotationGeometryChunkSourceBackend.md#parent)
- [refCount](neuroglancer_annotation_backend.AnnotationGeometryChunkSourceBackend.md#refcount)
- [referencedGeneration](neuroglancer_annotation_backend.AnnotationGeometryChunkSourceBackend.md#referencedgeneration)
- [rpc](neuroglancer_annotation_backend.AnnotationGeometryChunkSourceBackend.md#rpc)
- [rpcId](neuroglancer_annotation_backend.AnnotationGeometryChunkSourceBackend.md#rpcid)
- [sourceQueueLevel](neuroglancer_annotation_backend.AnnotationGeometryChunkSourceBackend.md#sourcequeuelevel)
- [spec](neuroglancer_annotation_backend.AnnotationGeometryChunkSourceBackend.md#spec)
- [statistics](neuroglancer_annotation_backend.AnnotationGeometryChunkSourceBackend.md#statistics)
- [unreferencedGeneration](neuroglancer_annotation_backend.AnnotationGeometryChunkSourceBackend.md#unreferencedgeneration)
- [wasDisposed](neuroglancer_annotation_backend.AnnotationGeometryChunkSourceBackend.md#wasdisposed)

### Methods

- [addChunk](neuroglancer_annotation_backend.AnnotationGeometryChunkSourceBackend.md#addchunk)
- [addCounterpartRef](neuroglancer_annotation_backend.AnnotationGeometryChunkSourceBackend.md#addcounterpartref)
- [addRef](neuroglancer_annotation_backend.AnnotationGeometryChunkSourceBackend.md#addref)
- [chunkStateChanged](neuroglancer_annotation_backend.AnnotationGeometryChunkSourceBackend.md#chunkstatechanged)
- [counterpartRefCountReachedZero](neuroglancer_annotation_backend.AnnotationGeometryChunkSourceBackend.md#counterpartrefcountreachedzero)
- [dispose](neuroglancer_annotation_backend.AnnotationGeometryChunkSourceBackend.md#dispose)
- [disposed](neuroglancer_annotation_backend.AnnotationGeometryChunkSourceBackend.md#disposed)
- [download](neuroglancer_annotation_backend.AnnotationGeometryChunkSourceBackend.md#download)
- [getChunk](neuroglancer_annotation_backend.AnnotationGeometryChunkSourceBackend.md#getchunk)
- [getNewChunk\_](neuroglancer_annotation_backend.AnnotationGeometryChunkSourceBackend.md#getnewchunk_)
- [initializeCounterpart](neuroglancer_annotation_backend.AnnotationGeometryChunkSourceBackend.md#initializecounterpart)
- [initializeSharedObject](neuroglancer_annotation_backend.AnnotationGeometryChunkSourceBackend.md#initializesharedobject)
- [ownerDispose](neuroglancer_annotation_backend.AnnotationGeometryChunkSourceBackend.md#ownerdispose)
- [refCountReachedZero](neuroglancer_annotation_backend.AnnotationGeometryChunkSourceBackend.md#refcountreachedzero)
- [registerCancellable](neuroglancer_annotation_backend.AnnotationGeometryChunkSourceBackend.md#registercancellable)
- [registerChunkListener](neuroglancer_annotation_backend.AnnotationGeometryChunkSourceBackend.md#registerchunklistener)
- [registerDisposer](neuroglancer_annotation_backend.AnnotationGeometryChunkSourceBackend.md#registerdisposer)
- [registerEventListener](neuroglancer_annotation_backend.AnnotationGeometryChunkSourceBackend.md#registereventlistener)
- [removeChunk](neuroglancer_annotation_backend.AnnotationGeometryChunkSourceBackend.md#removechunk)
- [unregisterChunkListener](neuroglancer_annotation_backend.AnnotationGeometryChunkSourceBackend.md#unregisterchunklistener)
- [unregisterDisposer](neuroglancer_annotation_backend.AnnotationGeometryChunkSourceBackend.md#unregisterdisposer)

## Constructors

### constructor

• **new AnnotationGeometryChunkSourceBackend**(`rpc`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](neuroglancer_worker_rpc.RPC.md) |
| `options` | `any` |

#### Overrides

[SliceViewChunkSourceBackend](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md).[constructor](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#constructor)

#### Defined in

[src/neuroglancer/annotation/backend.ts:130](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/backend.ts#L130)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

[SliceViewChunkSourceBackend](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md).[RPC_TYPE_ID](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#rpc_type_id)

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L245)

___

### chunkConstructor

• **chunkConstructor**: [`ChunkConstructor`](../interfaces/neuroglancer_chunk_manager_backend.ChunkConstructor.md)<[`SliceViewChunk`](neuroglancer_sliceview_backend.SliceViewChunk.md)\>

#### Inherited from

[SliceViewChunkSourceBackend](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md).[chunkConstructor](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#chunkconstructor)

#### Defined in

[src/neuroglancer/sliceview/backend.ts:304](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/backend.ts#L304)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](neuroglancer_chunk_manager_backend.ChunkManager.md)

#### Inherited from

[SliceViewChunkSourceBackend](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md).[chunkManager](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#chunkmanager)

___

### chunks

• **chunks**: `Map`<`string`, [`AnnotationGeometryChunk`](neuroglancer_annotation_backend.AnnotationGeometryChunk.md)\>

#### Inherited from

[SliceViewChunkSourceBackend](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md).[chunks](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#chunks)

#### Defined in

[src/neuroglancer/sliceview/backend.ts:312](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/backend.ts#L312)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[SliceViewChunkSourceBackend](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md).[disposedStacks](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### freeChunks

• **freeChunks**: [`Chunk`](neuroglancer_chunk_manager_backend.Chunk.md)[]

#### Inherited from

[SliceViewChunkSourceBackend](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md).[freeChunks](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#freechunks)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:248](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L248)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

[SliceViewChunkSourceBackend](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md).[isOwner](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#isowner)

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L171)

___

### parent

• **parent**: [`AnnotationSource`](neuroglancer_annotation_backend.AnnotationSource.md)

#### Defined in

[src/neuroglancer/annotation/backend.ts:129](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/backend.ts#L129)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[SliceViewChunkSourceBackend](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md).[refCount](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

[SliceViewChunkSourceBackend](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md).[referencedGeneration](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#referencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](neuroglancer_worker_rpc.RPC.md) = `null`

#### Inherited from

[SliceViewChunkSourceBackend](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md).[rpc](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#rpc)

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

[SliceViewChunkSourceBackend](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md).[rpcId](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#rpcid)

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L170)

___

### sourceQueueLevel

• **sourceQueueLevel**: `number` = `0`

sourceQueueLevel must be greater than the sourceQueueLevel of any ChunkSource whose download
method depends on chunks from this source.  A normal ChunkSource with no other dependencies
should have a level of 0.

#### Inherited from

[SliceViewChunkSourceBackend](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md).[sourceQueueLevel](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#sourcequeuelevel)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:256](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L256)

___

### spec

• **spec**: [`AnnotationGeometryChunkSpecification`](../interfaces/neuroglancer_annotation_base.AnnotationGeometryChunkSpecification.md)

#### Inherited from

[SliceViewChunkSourceBackend](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md).[spec](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#spec)

#### Defined in

[src/neuroglancer/sliceview/backend.ts:311](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/backend.ts#L311)

___

### statistics

• **statistics**: `Float64Array`

#### Inherited from

[SliceViewChunkSourceBackend](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md).[statistics](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#statistics)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:249](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L249)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

[SliceViewChunkSourceBackend](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md).[unreferencedGeneration](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#unreferencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L172)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[SliceViewChunkSourceBackend](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md).[wasDisposed](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#wasdisposed)

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

[SliceViewChunkSourceBackend](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md).[addChunk](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#addchunk)

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

[SliceViewChunkSourceBackend](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md).[addCounterpartRef](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#addcounterpartref)

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`AnnotationGeometryChunkSourceBackend`](neuroglancer_annotation_backend.AnnotationGeometryChunkSourceBackend.md)

#### Returns

[`AnnotationGeometryChunkSourceBackend`](neuroglancer_annotation_backend.AnnotationGeometryChunkSourceBackend.md)

#### Inherited from

[SliceViewChunkSourceBackend](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md).[addRef](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#addref)

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

[SliceViewChunkSourceBackend](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md).[chunkStateChanged](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#chunkstatechanged)

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

[SliceViewChunkSourceBackend](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md).[counterpartRefCountReachedZero](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#counterpartrefcountreachedzero)

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L234)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[SliceViewChunkSourceBackend](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md).[dispose](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#dispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[SliceViewChunkSourceBackend](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md).[disposed](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#disposed)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:263](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L263)

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

[SliceViewChunkSourceBackend](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md).[download](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#download)

#### Defined in

[src/neuroglancer/chunk_manager/backend.ts:376](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/backend.ts#L376)

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

[SliceViewChunkSourceBackend](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md).[getChunk](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#getchunk)

#### Defined in

[src/neuroglancer/sliceview/backend.ts:302](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/backend.ts#L302)

▸ **getChunk**(`chunkGridPosition`): [`AnnotationGeometryChunk`](neuroglancer_annotation_backend.AnnotationGeometryChunk.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkGridPosition` | `Float32Array` |

#### Returns

[`AnnotationGeometryChunk`](neuroglancer_annotation_backend.AnnotationGeometryChunk.md)

#### Inherited from

[SliceViewChunkSourceBackend](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md).[getChunk](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#getchunk)

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

[SliceViewChunkSourceBackend](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md).[getNewChunk_](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#getnewchunk_)

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

[SliceViewChunkSourceBackend](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md).[initializeCounterpart](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#initializecounterpart)

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

[SliceViewChunkSourceBackend](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md).[initializeSharedObject](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#initializesharedobject)

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L175)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

[SliceViewChunkSourceBackend](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md).[ownerDispose](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#ownerdispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[SliceViewChunkSourceBackend](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md).[refCountReachedZero](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#refcountreachedzero)

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

[SliceViewChunkSourceBackend](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md).[registerCancellable](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#registercancellable)

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

[SliceViewChunkSourceBackend](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md).[registerChunkListener](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#registerchunklistener)

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

[SliceViewChunkSourceBackend](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md).[registerDisposer](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#registerdisposer)

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

[SliceViewChunkSourceBackend](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md).[registerEventListener](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#registereventlistener)

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

[SliceViewChunkSourceBackend](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md).[removeChunk](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#removechunk)

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

[SliceViewChunkSourceBackend](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md).[unregisterChunkListener](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#unregisterchunklistener)

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

[SliceViewChunkSourceBackend](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md).[unregisterDisposer](neuroglancer_sliceview_backend.SliceViewChunkSourceBackend.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)
