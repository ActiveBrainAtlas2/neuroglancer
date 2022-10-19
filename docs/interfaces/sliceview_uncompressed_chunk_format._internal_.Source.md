[neuroglancer](../README.md) / [Modules](../modules.md) / [sliceview/uncompressed\_chunk\_format](../modules/sliceview_uncompressed_chunk_format.md) / [<internal\>](../modules/sliceview_uncompressed_chunk_format._internal_.md) / Source

# Interface: Source

[sliceview/uncompressed_chunk_format](../modules/sliceview_uncompressed_chunk_format.md).[<internal>](../modules/sliceview_uncompressed_chunk_format._internal_.md).Source

## Hierarchy

- [`VolumeChunkSource`](../classes/datasource._internal_.VolumeChunkSource.md)

  ↳ **`Source`**

## Table of contents

### Properties

- [OPTIONS](sliceview_uncompressed_chunk_format._internal_.Source.md#options)
- [RPC\_TYPE\_ID](sliceview_uncompressed_chunk_format._internal_.Source.md#rpc_type_id)
- [chunkFormatHandler](sliceview_uncompressed_chunk_format._internal_.Source.md#chunkformathandler)
- [chunkManager](sliceview_uncompressed_chunk_format._internal_.Source.md#chunkmanager)
- [chunks](sliceview_uncompressed_chunk_format._internal_.Source.md#chunks)
- [disposedStacks](sliceview_uncompressed_chunk_format._internal_.Source.md#disposedstacks)
- [immediateChunkUpdates](sliceview_uncompressed_chunk_format._internal_.Source.md#immediatechunkupdates)
- [isOwner](sliceview_uncompressed_chunk_format._internal_.Source.md#isowner)
- [key](sliceview_uncompressed_chunk_format._internal_.Source.md#key)
- [refCount](sliceview_uncompressed_chunk_format._internal_.Source.md#refcount)
- [referencedGeneration](sliceview_uncompressed_chunk_format._internal_.Source.md#referencedgeneration)
- [rpc](sliceview_uncompressed_chunk_format._internal_.Source.md#rpc)
- [rpcId](sliceview_uncompressed_chunk_format._internal_.Source.md#rpcid)
- [spec](sliceview_uncompressed_chunk_format._internal_.Source.md#spec)
- [unreferencedGeneration](sliceview_uncompressed_chunk_format._internal_.Source.md#unreferencedgeneration)
- [wasDisposed](sliceview_uncompressed_chunk_format._internal_.Source.md#wasdisposed)

### Accessors

- [chunkFormat](sliceview_uncompressed_chunk_format._internal_.Source.md#chunkformat)
- [gl](sliceview_uncompressed_chunk_format._internal_.Source.md#gl)

### Methods

- [addChunk](sliceview_uncompressed_chunk_format._internal_.Source.md#addchunk)
- [addCounterpartRef](sliceview_uncompressed_chunk_format._internal_.Source.md#addcounterpartref)
- [addRef](sliceview_uncompressed_chunk_format._internal_.Source.md#addref)
- [counterpartRefCountReachedZero](sliceview_uncompressed_chunk_format._internal_.Source.md#counterpartrefcountreachedzero)
- [deleteChunk](sliceview_uncompressed_chunk_format._internal_.Source.md#deletechunk)
- [dispose](sliceview_uncompressed_chunk_format._internal_.Source.md#dispose)
- [disposed](sliceview_uncompressed_chunk_format._internal_.Source.md#disposed)
- [getChunk](sliceview_uncompressed_chunk_format._internal_.Source.md#getchunk)
- [getValueAt](sliceview_uncompressed_chunk_format._internal_.Source.md#getvalueat)
- [initializeCounterpart](sliceview_uncompressed_chunk_format._internal_.Source.md#initializecounterpart)
- [initializeSharedObject](sliceview_uncompressed_chunk_format._internal_.Source.md#initializesharedobject)
- [invalidateCache](sliceview_uncompressed_chunk_format._internal_.Source.md#invalidatecache)
- [ownerDispose](sliceview_uncompressed_chunk_format._internal_.Source.md#ownerdispose)
- [refCountReachedZero](sliceview_uncompressed_chunk_format._internal_.Source.md#refcountreachedzero)
- [registerCancellable](sliceview_uncompressed_chunk_format._internal_.Source.md#registercancellable)
- [registerDisposer](sliceview_uncompressed_chunk_format._internal_.Source.md#registerdisposer)
- [registerEventListener](sliceview_uncompressed_chunk_format._internal_.Source.md#registereventlistener)
- [unregisterDisposer](sliceview_uncompressed_chunk_format._internal_.Source.md#unregisterdisposer)

## Properties

### OPTIONS

• **OPTIONS**: [`SliceViewChunkSourceOptions`](sliceview_frontend.SliceViewChunkSourceOptions.md)<[`VolumeChunkSpecification`](datasource._internal_.VolumeChunkSpecification.md)\>

#### Inherited from

[VolumeChunkSource](../classes/datasource._internal_.VolumeChunkSource.md).[OPTIONS](../classes/datasource._internal_.VolumeChunkSource.md#options)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:453](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L453)

___

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

[VolumeChunkSource](../classes/datasource._internal_.VolumeChunkSource.md).[RPC_TYPE_ID](../classes/datasource._internal_.VolumeChunkSource.md#rpc_type_id)

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L245)

___

### chunkFormatHandler

• **chunkFormatHandler**: [`UncompressedChunkFormatHandler`](../classes/sliceview_uncompressed_chunk_format.UncompressedChunkFormatHandler.md)

#### Overrides

[VolumeChunkSource](../classes/datasource._internal_.VolumeChunkSource.md).[chunkFormatHandler](../classes/datasource._internal_.VolumeChunkSource.md#chunkformathandler)

#### Defined in

[src/neuroglancer/sliceview/uncompressed_chunk_format.ts:187](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/uncompressed_chunk_format.ts#L187)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](../classes/chunk_manager_frontend.ChunkManager.md)

#### Inherited from

[VolumeChunkSource](../classes/datasource._internal_.VolumeChunkSource.md).[chunkManager](../classes/datasource._internal_.VolumeChunkSource.md#chunkmanager)

___

### chunks

• **chunks**: `Map`<`string`, [`VolumeChunk`](../classes/datasource._internal_.VolumeChunk.md)\>

#### Inherited from

[VolumeChunkSource](../classes/datasource._internal_.VolumeChunkSource.md).[chunks](../classes/datasource._internal_.VolumeChunkSource.md#chunks)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:451](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L451)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[VolumeChunkSource](../classes/datasource._internal_.VolumeChunkSource.md).[disposedStacks](../classes/datasource._internal_.VolumeChunkSource.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### immediateChunkUpdates

• **immediateChunkUpdates**: `boolean` = `false`

If set to true, chunk updates will be applied to this source immediately, rather than queueing
them.  Sources that dynamically update chunks and need to ensure a consistent order of
processing relative to other messages between the frontend and worker should set this to true.

#### Inherited from

[VolumeChunkSource](../classes/datasource._internal_.VolumeChunkSource.md).[immediateChunkUpdates](../classes/datasource._internal_.VolumeChunkSource.md#immediatechunkupdates)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:361](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L361)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

[VolumeChunkSource](../classes/datasource._internal_.VolumeChunkSource.md).[isOwner](../classes/datasource._internal_.VolumeChunkSource.md#isowner)

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L171)

___

### key

• **key**: `any`

#### Inherited from

[VolumeChunkSource](../classes/datasource._internal_.VolumeChunkSource.md).[key](../classes/datasource._internal_.VolumeChunkSource.md#key)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:408](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L408)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[VolumeChunkSource](../classes/datasource._internal_.VolumeChunkSource.md).[refCount](../classes/datasource._internal_.VolumeChunkSource.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

[VolumeChunkSource](../classes/datasource._internal_.VolumeChunkSource.md).[referencedGeneration](../classes/datasource._internal_.VolumeChunkSource.md#referencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](../classes/annotation_annotation_layer_state._internal_.RPC.md) = `null`

#### Inherited from

[VolumeChunkSource](../classes/datasource._internal_.VolumeChunkSource.md).[rpc](../classes/datasource._internal_.VolumeChunkSource.md#rpc)

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

[VolumeChunkSource](../classes/datasource._internal_.VolumeChunkSource.md).[rpcId](../classes/datasource._internal_.VolumeChunkSource.md#rpcid)

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L170)

___

### spec

• **spec**: [`VolumeChunkSpecification`](datasource._internal_.VolumeChunkSpecification.md)

#### Inherited from

[VolumeChunkSource](../classes/datasource._internal_.VolumeChunkSource.md).[spec](../classes/datasource._internal_.VolumeChunkSource.md#spec)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:455](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L455)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

[VolumeChunkSource](../classes/datasource._internal_.VolumeChunkSource.md).[unreferencedGeneration](../classes/datasource._internal_.VolumeChunkSource.md#unreferencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L172)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[VolumeChunkSource](../classes/datasource._internal_.VolumeChunkSource.md).[wasDisposed](../classes/datasource._internal_.VolumeChunkSource.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### chunkFormat

• `get` **chunkFormat**(): [`ChunkFormat`](datasource._internal_.ChunkFormat.md)

#### Returns

[`ChunkFormat`](datasource._internal_.ChunkFormat.md)

#### Inherited from

VolumeChunkSource.chunkFormat

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/volume/frontend.ts#L175)

___

### gl

• `get` **gl**(): [`GL`](webgl_context.GL.md)

#### Returns

[`GL`](webgl_context.GL.md)

#### Inherited from

VolumeChunkSource.gl

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:372](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L372)

## Methods

### addChunk

▸ **addChunk**(`key`, `chunk`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `chunk` | [`Chunk`](../classes/chunk_manager_frontend.Chunk.md) |

#### Returns

`void`

#### Inherited from

[VolumeChunkSource](../classes/datasource._internal_.VolumeChunkSource.md).[addChunk](../classes/datasource._internal_.VolumeChunkSource.md#addchunk)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:384](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L384)

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

[VolumeChunkSource](../classes/datasource._internal_.VolumeChunkSource.md).[addCounterpartRef](../classes/datasource._internal_.VolumeChunkSource.md#addcounterpartref)

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`Source`](sliceview_uncompressed_chunk_format._internal_.Source.md)

#### Returns

[`Source`](sliceview_uncompressed_chunk_format._internal_.Source.md)

#### Inherited from

[VolumeChunkSource](../classes/datasource._internal_.VolumeChunkSource.md).[addRef](../classes/datasource._internal_.VolumeChunkSource.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

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

[VolumeChunkSource](../classes/datasource._internal_.VolumeChunkSource.md).[counterpartRefCountReachedZero](../classes/datasource._internal_.VolumeChunkSource.md#counterpartrefcountreachedzero)

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L234)

___

### deleteChunk

▸ **deleteChunk**(`key`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`void`

#### Inherited from

[VolumeChunkSource](../classes/datasource._internal_.VolumeChunkSource.md).[deleteChunk](../classes/datasource._internal_.VolumeChunkSource.md#deletechunk)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:376](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L376)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[VolumeChunkSource](../classes/datasource._internal_.VolumeChunkSource.md).[dispose](../classes/datasource._internal_.VolumeChunkSource.md#dispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[VolumeChunkSource](../classes/datasource._internal_.VolumeChunkSource.md).[disposed](../classes/datasource._internal_.VolumeChunkSource.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

___

### getChunk

▸ **getChunk**(`x`): [`VolumeChunk`](../classes/datasource._internal_.VolumeChunk.md)

Default implementation for use with backendOnly chunk sources.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

[`VolumeChunk`](../classes/datasource._internal_.VolumeChunk.md)

#### Inherited from

[VolumeChunkSource](../classes/datasource._internal_.VolumeChunkSource.md).[getChunk](../classes/datasource._internal_.VolumeChunkSource.md#getchunk)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:221](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/volume/frontend.ts#L221)

___

### getValueAt

▸ **getValueAt**(`chunkPosition`, `channelAccess`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkPosition` | `Float32Array` |
| `channelAccess` | [`ChunkChannelAccessParameters`](annotation_annotation_layer_state._internal_.ChunkChannelAccessParameters.md) |

#### Returns

`any`

#### Inherited from

[VolumeChunkSource](../classes/datasource._internal_.VolumeChunkSource.md).[getValueAt](../classes/datasource._internal_.VolumeChunkSource.md#getvalueat)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:179](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/volume/frontend.ts#L179)

___

### initializeCounterpart

▸ **initializeCounterpart**(`rpc`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](../classes/annotation_annotation_layer_state._internal_.RPC.md) |
| `options` | `any` |

#### Returns

`void`

#### Inherited from

[VolumeChunkSource](../classes/datasource._internal_.VolumeChunkSource.md).[initializeCounterpart](../classes/datasource._internal_.VolumeChunkSource.md#initializecounterpart)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:476](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L476)

___

### initializeSharedObject

▸ **initializeSharedObject**(`rpc`, `rpcId?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](../classes/annotation_annotation_layer_state._internal_.RPC.md) |
| `rpcId` | `number` |

#### Returns

`void`

#### Inherited from

[VolumeChunkSource](../classes/datasource._internal_.VolumeChunkSource.md).[initializeSharedObject](../classes/datasource._internal_.VolumeChunkSource.md#initializesharedobject)

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L175)

___

### invalidateCache

▸ **invalidateCache**(): `void`

Invalidates the chunk cache.  Operates asynchronously.

#### Returns

`void`

#### Inherited from

[VolumeChunkSource](../classes/datasource._internal_.VolumeChunkSource.md).[invalidateCache](../classes/datasource._internal_.VolumeChunkSource.md#invalidatecache)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:398](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L398)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

[VolumeChunkSource](../classes/datasource._internal_.VolumeChunkSource.md).[ownerDispose](../classes/datasource._internal_.VolumeChunkSource.md#ownerdispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[VolumeChunkSource](../classes/datasource._internal_.VolumeChunkSource.md).[refCountReachedZero](../classes/datasource._internal_.VolumeChunkSource.md#refcountreachedzero)

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

[VolumeChunkSource](../classes/datasource._internal_.VolumeChunkSource.md).[registerCancellable](../classes/datasource._internal_.VolumeChunkSource.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L100)

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

[VolumeChunkSource](../classes/datasource._internal_.VolumeChunkSource.md).[registerDisposer](../classes/datasource._internal_.VolumeChunkSource.md#registerdisposer)

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
| `options?` | `boolean` \| [`AddEventListenerOptions`](annotation_annotation_layer_state._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[VolumeChunkSource](../classes/datasource._internal_.VolumeChunkSource.md).[registerEventListener](../classes/datasource._internal_.VolumeChunkSource.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

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

[VolumeChunkSource](../classes/datasource._internal_.VolumeChunkSource.md).[unregisterDisposer](../classes/datasource._internal_.VolumeChunkSource.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)
