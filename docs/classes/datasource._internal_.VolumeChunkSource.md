[neuroglancer](../README.md) / [Modules](../modules.md) / [datasource](../modules/datasource.md) / [<internal\>](../modules/datasource._internal_.md) / VolumeChunkSource

# Class: VolumeChunkSource

[datasource](../modules/datasource.md).[<internal>](../modules/datasource._internal_.md).VolumeChunkSource

## Hierarchy

- [`SliceViewChunkSource`](sliceview_frontend.SliceViewChunkSource.md)<[`VolumeChunkSpecification`](../interfaces/datasource._internal_.VolumeChunkSpecification.md), [`VolumeChunk`](datasource._internal_.VolumeChunk.md)\>

  ↳ **`VolumeChunkSource`**

  ↳↳ [`Source`](../interfaces/sliceview_uncompressed_chunk_format._internal_.Source.md)

## Implements

- [`VolumeChunkSource`](../interfaces/datasource._internal_.VolumeChunkSource-1.md)

## Table of contents

### Constructors

- [constructor](datasource._internal_.VolumeChunkSource.md#constructor)

### Properties

- [OPTIONS](datasource._internal_.VolumeChunkSource.md#options)
- [RPC\_TYPE\_ID](datasource._internal_.VolumeChunkSource.md#rpc_type_id)
- [chunkFormatHandler](datasource._internal_.VolumeChunkSource.md#chunkformathandler)
- [chunkManager](datasource._internal_.VolumeChunkSource.md#chunkmanager)
- [chunks](datasource._internal_.VolumeChunkSource.md#chunks)
- [disposedStacks](datasource._internal_.VolumeChunkSource.md#disposedstacks)
- [immediateChunkUpdates](datasource._internal_.VolumeChunkSource.md#immediatechunkupdates)
- [isOwner](datasource._internal_.VolumeChunkSource.md#isowner)
- [key](datasource._internal_.VolumeChunkSource.md#key)
- [refCount](datasource._internal_.VolumeChunkSource.md#refcount)
- [referencedGeneration](datasource._internal_.VolumeChunkSource.md#referencedgeneration)
- [rpc](datasource._internal_.VolumeChunkSource.md#rpc)
- [rpcId](datasource._internal_.VolumeChunkSource.md#rpcid)
- [spec](datasource._internal_.VolumeChunkSource.md#spec)
- [tempChunkGridPosition](datasource._internal_.VolumeChunkSource.md#tempchunkgridposition)
- [tempPositionWithinChunk](datasource._internal_.VolumeChunkSource.md#temppositionwithinchunk)
- [unreferencedGeneration](datasource._internal_.VolumeChunkSource.md#unreferencedgeneration)
- [wasDisposed](datasource._internal_.VolumeChunkSource.md#wasdisposed)

### Accessors

- [chunkFormat](datasource._internal_.VolumeChunkSource.md#chunkformat)
- [gl](datasource._internal_.VolumeChunkSource.md#gl)

### Methods

- [addChunk](datasource._internal_.VolumeChunkSource.md#addchunk)
- [addCounterpartRef](datasource._internal_.VolumeChunkSource.md#addcounterpartref)
- [addRef](datasource._internal_.VolumeChunkSource.md#addref)
- [counterpartRefCountReachedZero](datasource._internal_.VolumeChunkSource.md#counterpartrefcountreachedzero)
- [deleteChunk](datasource._internal_.VolumeChunkSource.md#deletechunk)
- [dispose](datasource._internal_.VolumeChunkSource.md#dispose)
- [disposed](datasource._internal_.VolumeChunkSource.md#disposed)
- [getChunk](datasource._internal_.VolumeChunkSource.md#getchunk)
- [getValueAt](datasource._internal_.VolumeChunkSource.md#getvalueat)
- [initializeCounterpart](datasource._internal_.VolumeChunkSource.md#initializecounterpart)
- [initializeSharedObject](datasource._internal_.VolumeChunkSource.md#initializesharedobject)
- [invalidateCache](datasource._internal_.VolumeChunkSource.md#invalidatecache)
- [ownerDispose](datasource._internal_.VolumeChunkSource.md#ownerdispose)
- [refCountReachedZero](datasource._internal_.VolumeChunkSource.md#refcountreachedzero)
- [registerCancellable](datasource._internal_.VolumeChunkSource.md#registercancellable)
- [registerDisposer](datasource._internal_.VolumeChunkSource.md#registerdisposer)
- [registerEventListener](datasource._internal_.VolumeChunkSource.md#registereventlistener)
- [unregisterDisposer](datasource._internal_.VolumeChunkSource.md#unregisterdisposer)
- [encodeOptions](datasource._internal_.VolumeChunkSource.md#encodeoptions)
- [encodeSpec](datasource._internal_.VolumeChunkSource.md#encodespec)

## Constructors

### constructor

• **new VolumeChunkSource**(`chunkManager`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](chunk_manager_frontend.ChunkManager.md) |
| `options` | `Object` |
| `options.spec` | [`VolumeChunkSpecification`](../interfaces/datasource._internal_.VolumeChunkSpecification.md) |

#### Overrides

[SliceViewChunkSource](sliceview_frontend.SliceViewChunkSource.md).[constructor](sliceview_frontend.SliceViewChunkSource.md#constructor)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:155](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/volume/frontend.ts#L155)

## Properties

### OPTIONS

• **OPTIONS**: [`SliceViewChunkSourceOptions`](../interfaces/sliceview_frontend.SliceViewChunkSourceOptions.md)<[`VolumeChunkSpecification`](../interfaces/datasource._internal_.VolumeChunkSpecification.md)\>

#### Inherited from

[SliceViewChunkSource](sliceview_frontend.SliceViewChunkSource.md).[OPTIONS](sliceview_frontend.SliceViewChunkSource.md#options)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:453](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L453)

___

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

[SliceViewChunkSource](sliceview_frontend.SliceViewChunkSource.md).[RPC_TYPE_ID](sliceview_frontend.SliceViewChunkSource.md#rpc_type_id)

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L245)

___

### chunkFormatHandler

• **chunkFormatHandler**: [`ChunkFormatHandler`](../interfaces/datasource._internal_.ChunkFormatHandler.md)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:151](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/volume/frontend.ts#L151)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](chunk_manager_frontend.ChunkManager.md)

#### Inherited from

[SliceViewChunkSource](sliceview_frontend.SliceViewChunkSource.md).[chunkManager](sliceview_frontend.SliceViewChunkSource.md#chunkmanager)

___

### chunks

• **chunks**: `Map`<`string`, [`VolumeChunk`](datasource._internal_.VolumeChunk.md)\>

#### Inherited from

[SliceViewChunkSource](sliceview_frontend.SliceViewChunkSource.md).[chunks](sliceview_frontend.SliceViewChunkSource.md#chunks)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:451](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L451)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[SliceViewChunkSource](sliceview_frontend.SliceViewChunkSource.md).[disposedStacks](sliceview_frontend.SliceViewChunkSource.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### immediateChunkUpdates

• **immediateChunkUpdates**: `boolean` = `false`

If set to true, chunk updates will be applied to this source immediately, rather than queueing
them.  Sources that dynamically update chunks and need to ensure a consistent order of
processing relative to other messages between the frontend and worker should set this to true.

#### Inherited from

[SliceViewChunkSource](sliceview_frontend.SliceViewChunkSource.md).[immediateChunkUpdates](sliceview_frontend.SliceViewChunkSource.md#immediatechunkupdates)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:361](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L361)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

[SliceViewChunkSource](sliceview_frontend.SliceViewChunkSource.md).[isOwner](sliceview_frontend.SliceViewChunkSource.md#isowner)

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L171)

___

### key

• **key**: `any`

#### Inherited from

[SliceViewChunkSource](sliceview_frontend.SliceViewChunkSource.md).[key](sliceview_frontend.SliceViewChunkSource.md#key)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:408](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L408)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[SliceViewChunkSource](sliceview_frontend.SliceViewChunkSource.md).[refCount](sliceview_frontend.SliceViewChunkSource.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

[SliceViewChunkSource](sliceview_frontend.SliceViewChunkSource.md).[referencedGeneration](sliceview_frontend.SliceViewChunkSource.md#referencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](annotation_annotation_layer_state._internal_.RPC.md) = `null`

#### Inherited from

[SliceViewChunkSource](sliceview_frontend.SliceViewChunkSource.md).[rpc](sliceview_frontend.SliceViewChunkSource.md#rpc)

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

[SliceViewChunkSource](sliceview_frontend.SliceViewChunkSource.md).[rpcId](sliceview_frontend.SliceViewChunkSource.md#rpcid)

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L170)

___

### spec

• **spec**: [`VolumeChunkSpecification`](../interfaces/datasource._internal_.VolumeChunkSpecification.md)

#### Implementation of

[VolumeChunkSource](../interfaces/datasource._internal_.VolumeChunkSource-1.md).[spec](../interfaces/datasource._internal_.VolumeChunkSource-1.md#spec)

#### Inherited from

[SliceViewChunkSource](sliceview_frontend.SliceViewChunkSource.md).[spec](sliceview_frontend.SliceViewChunkSource.md#spec)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:455](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L455)

___

### tempChunkGridPosition

• `Private` **tempChunkGridPosition**: `Float32Array`

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:152](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/volume/frontend.ts#L152)

___

### tempPositionWithinChunk

• `Private` **tempPositionWithinChunk**: `Uint32Array`

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:153](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/volume/frontend.ts#L153)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

[SliceViewChunkSource](sliceview_frontend.SliceViewChunkSource.md).[unreferencedGeneration](sliceview_frontend.SliceViewChunkSource.md#unreferencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L172)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[SliceViewChunkSource](sliceview_frontend.SliceViewChunkSource.md).[wasDisposed](sliceview_frontend.SliceViewChunkSource.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### chunkFormat

• `get` **chunkFormat**(): [`ChunkFormat`](../interfaces/datasource._internal_.ChunkFormat.md)

#### Returns

[`ChunkFormat`](../interfaces/datasource._internal_.ChunkFormat.md)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/volume/frontend.ts#L175)

___

### gl

• `get` **gl**(): [`GL`](../interfaces/webgl_context.GL.md)

#### Returns

[`GL`](../interfaces/webgl_context.GL.md)

#### Inherited from

SliceViewChunkSource.gl

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:372](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L372)

## Methods

### addChunk

▸ **addChunk**(`key`, `chunk`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `chunk` | [`Chunk`](chunk_manager_frontend.Chunk.md) |

#### Returns

`void`

#### Inherited from

[SliceViewChunkSource](sliceview_frontend.SliceViewChunkSource.md).[addChunk](sliceview_frontend.SliceViewChunkSource.md#addchunk)

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

[SliceViewChunkSource](sliceview_frontend.SliceViewChunkSource.md).[addCounterpartRef](sliceview_frontend.SliceViewChunkSource.md#addcounterpartref)

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`VolumeChunkSource`](datasource._internal_.VolumeChunkSource.md)

#### Returns

[`VolumeChunkSource`](datasource._internal_.VolumeChunkSource.md)

#### Inherited from

[SliceViewChunkSource](sliceview_frontend.SliceViewChunkSource.md).[addRef](sliceview_frontend.SliceViewChunkSource.md#addref)

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

[SliceViewChunkSource](sliceview_frontend.SliceViewChunkSource.md).[counterpartRefCountReachedZero](sliceview_frontend.SliceViewChunkSource.md#counterpartrefcountreachedzero)

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

[SliceViewChunkSource](sliceview_frontend.SliceViewChunkSource.md).[deleteChunk](sliceview_frontend.SliceViewChunkSource.md#deletechunk)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:376](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L376)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Implementation of

[VolumeChunkSource](../interfaces/datasource._internal_.VolumeChunkSource-1.md).[dispose](../interfaces/datasource._internal_.VolumeChunkSource-1.md#dispose)

#### Inherited from

[SliceViewChunkSource](sliceview_frontend.SliceViewChunkSource.md).[dispose](sliceview_frontend.SliceViewChunkSource.md#dispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[SliceViewChunkSource](sliceview_frontend.SliceViewChunkSource.md).[disposed](sliceview_frontend.SliceViewChunkSource.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

___

### getChunk

▸ **getChunk**(`x`): [`VolumeChunk`](datasource._internal_.VolumeChunk.md)

Default implementation for use with backendOnly chunk sources.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

[`VolumeChunk`](datasource._internal_.VolumeChunk.md)

#### Overrides

[SliceViewChunkSource](sliceview_frontend.SliceViewChunkSource.md).[getChunk](sliceview_frontend.SliceViewChunkSource.md#getchunk)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:221](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/volume/frontend.ts#L221)

___

### getValueAt

▸ **getValueAt**(`chunkPosition`, `channelAccess`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkPosition` | `Float32Array` |
| `channelAccess` | [`ChunkChannelAccessParameters`](../interfaces/annotation_annotation_layer_state._internal_.ChunkChannelAccessParameters.md) |

#### Returns

`any`

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:179](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/volume/frontend.ts#L179)

___

### initializeCounterpart

▸ **initializeCounterpart**(`rpc`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](annotation_annotation_layer_state._internal_.RPC.md) |
| `options` | `any` |

#### Returns

`void`

#### Inherited from

[SliceViewChunkSource](sliceview_frontend.SliceViewChunkSource.md).[initializeCounterpart](sliceview_frontend.SliceViewChunkSource.md#initializecounterpart)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:476](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L476)

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

[SliceViewChunkSource](sliceview_frontend.SliceViewChunkSource.md).[initializeSharedObject](sliceview_frontend.SliceViewChunkSource.md#initializesharedobject)

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L175)

___

### invalidateCache

▸ **invalidateCache**(): `void`

Invalidates the chunk cache.  Operates asynchronously.

#### Returns

`void`

#### Inherited from

[SliceViewChunkSource](sliceview_frontend.SliceViewChunkSource.md).[invalidateCache](sliceview_frontend.SliceViewChunkSource.md#invalidatecache)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:398](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L398)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

[SliceViewChunkSource](sliceview_frontend.SliceViewChunkSource.md).[ownerDispose](sliceview_frontend.SliceViewChunkSource.md#ownerdispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[SliceViewChunkSource](sliceview_frontend.SliceViewChunkSource.md).[refCountReachedZero](sliceview_frontend.SliceViewChunkSource.md#refcountreachedzero)

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

[SliceViewChunkSource](sliceview_frontend.SliceViewChunkSource.md).[registerCancellable](sliceview_frontend.SliceViewChunkSource.md#registercancellable)

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

[SliceViewChunkSource](sliceview_frontend.SliceViewChunkSource.md).[registerDisposer](sliceview_frontend.SliceViewChunkSource.md#registerdisposer)

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

[SliceViewChunkSource](sliceview_frontend.SliceViewChunkSource.md).[registerEventListener](sliceview_frontend.SliceViewChunkSource.md#registereventlistener)

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

[SliceViewChunkSource](sliceview_frontend.SliceViewChunkSource.md).[unregisterDisposer](sliceview_frontend.SliceViewChunkSource.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)

___

### encodeOptions

▸ `Static` **encodeOptions**(`options`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SliceViewChunkSourceOptions`](../interfaces/sliceview_frontend.SliceViewChunkSourceOptions.md)<[`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\> |

#### Returns

`any`

#### Inherited from

[SliceViewChunkSource](sliceview_frontend.SliceViewChunkSource.md).[encodeOptions](sliceview_frontend.SliceViewChunkSource.md#encodeoptions)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:470](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L470)

___

### encodeSpec

▸ `Static` **encodeSpec**(`spec`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec` | [`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `baseVoxelOffset` | `number`[] |
| `chunkDataSize` | `number`[] |
| `compressedSegmentationBlockSize` | `undefined` \| `number`[] |
| `dataType` | [`DataType`](../enums/util_data_type.DataType.md) |
| `lowerVoxelBound` | `number`[] |
| `upperVoxelBound` | `number`[] |

#### Overrides

[SliceViewChunkSource](sliceview_frontend.SliceViewChunkSource.md).[encodeSpec](sliceview_frontend.SliceViewChunkSource.md#encodespec)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:164](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/volume/frontend.ts#L164)
