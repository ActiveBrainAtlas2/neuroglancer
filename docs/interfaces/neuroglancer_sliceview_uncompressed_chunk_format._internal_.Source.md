[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/uncompressed\_chunk\_format](../modules/neuroglancer_sliceview_uncompressed_chunk_format.md) / [<internal\>](../modules/neuroglancer_sliceview_uncompressed_chunk_format._internal_.md) / Source

# Interface: Source

[neuroglancer/sliceview/uncompressed_chunk_format](../modules/neuroglancer_sliceview_uncompressed_chunk_format.md).[<internal>](../modules/neuroglancer_sliceview_uncompressed_chunk_format._internal_.md).Source

**`License`**

Copyright 2016 Google Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Hierarchy

- [`VolumeChunkSource`](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md)

  ↳ **`Source`**

## Table of contents

### Properties

- [OPTIONS](neuroglancer_sliceview_uncompressed_chunk_format._internal_.Source.md#options)
- [RPC\_TYPE\_ID](neuroglancer_sliceview_uncompressed_chunk_format._internal_.Source.md#rpc_type_id)
- [chunkFormatHandler](neuroglancer_sliceview_uncompressed_chunk_format._internal_.Source.md#chunkformathandler)
- [chunkManager](neuroglancer_sliceview_uncompressed_chunk_format._internal_.Source.md#chunkmanager)
- [chunks](neuroglancer_sliceview_uncompressed_chunk_format._internal_.Source.md#chunks)
- [disposedStacks](neuroglancer_sliceview_uncompressed_chunk_format._internal_.Source.md#disposedstacks)
- [immediateChunkUpdates](neuroglancer_sliceview_uncompressed_chunk_format._internal_.Source.md#immediatechunkupdates)
- [isOwner](neuroglancer_sliceview_uncompressed_chunk_format._internal_.Source.md#isowner)
- [key](neuroglancer_sliceview_uncompressed_chunk_format._internal_.Source.md#key)
- [refCount](neuroglancer_sliceview_uncompressed_chunk_format._internal_.Source.md#refcount)
- [referencedGeneration](neuroglancer_sliceview_uncompressed_chunk_format._internal_.Source.md#referencedgeneration)
- [rpc](neuroglancer_sliceview_uncompressed_chunk_format._internal_.Source.md#rpc)
- [rpcId](neuroglancer_sliceview_uncompressed_chunk_format._internal_.Source.md#rpcid)
- [spec](neuroglancer_sliceview_uncompressed_chunk_format._internal_.Source.md#spec)
- [unreferencedGeneration](neuroglancer_sliceview_uncompressed_chunk_format._internal_.Source.md#unreferencedgeneration)
- [wasDisposed](neuroglancer_sliceview_uncompressed_chunk_format._internal_.Source.md#wasdisposed)

### Accessors

- [chunkFormat](neuroglancer_sliceview_uncompressed_chunk_format._internal_.Source.md#chunkformat)
- [gl](neuroglancer_sliceview_uncompressed_chunk_format._internal_.Source.md#gl)

### Methods

- [addChunk](neuroglancer_sliceview_uncompressed_chunk_format._internal_.Source.md#addchunk)
- [addCounterpartRef](neuroglancer_sliceview_uncompressed_chunk_format._internal_.Source.md#addcounterpartref)
- [addRef](neuroglancer_sliceview_uncompressed_chunk_format._internal_.Source.md#addref)
- [counterpartRefCountReachedZero](neuroglancer_sliceview_uncompressed_chunk_format._internal_.Source.md#counterpartrefcountreachedzero)
- [deleteChunk](neuroglancer_sliceview_uncompressed_chunk_format._internal_.Source.md#deletechunk)
- [dispose](neuroglancer_sliceview_uncompressed_chunk_format._internal_.Source.md#dispose)
- [disposed](neuroglancer_sliceview_uncompressed_chunk_format._internal_.Source.md#disposed)
- [getChunk](neuroglancer_sliceview_uncompressed_chunk_format._internal_.Source.md#getchunk)
- [getValueAt](neuroglancer_sliceview_uncompressed_chunk_format._internal_.Source.md#getvalueat)
- [initializeCounterpart](neuroglancer_sliceview_uncompressed_chunk_format._internal_.Source.md#initializecounterpart)
- [initializeSharedObject](neuroglancer_sliceview_uncompressed_chunk_format._internal_.Source.md#initializesharedobject)
- [invalidateCache](neuroglancer_sliceview_uncompressed_chunk_format._internal_.Source.md#invalidatecache)
- [ownerDispose](neuroglancer_sliceview_uncompressed_chunk_format._internal_.Source.md#ownerdispose)
- [refCountReachedZero](neuroglancer_sliceview_uncompressed_chunk_format._internal_.Source.md#refcountreachedzero)
- [registerCancellable](neuroglancer_sliceview_uncompressed_chunk_format._internal_.Source.md#registercancellable)
- [registerDisposer](neuroglancer_sliceview_uncompressed_chunk_format._internal_.Source.md#registerdisposer)
- [registerEventListener](neuroglancer_sliceview_uncompressed_chunk_format._internal_.Source.md#registereventlistener)
- [unregisterDisposer](neuroglancer_sliceview_uncompressed_chunk_format._internal_.Source.md#unregisterdisposer)

## Properties

### OPTIONS

• **OPTIONS**: [`SliceViewChunkSourceOptions`](neuroglancer_sliceview_frontend.SliceViewChunkSourceOptions.md)<[`VolumeChunkSpecification`](neuroglancer_sliceview_volume_base.VolumeChunkSpecification.md)\>

#### Inherited from

[VolumeChunkSource](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md).[OPTIONS](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#options)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:453](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/frontend.ts#L453)

___

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

[VolumeChunkSource](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md).[RPC_TYPE_ID](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#rpc_type_id)

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L245)

___

### chunkFormatHandler

• **chunkFormatHandler**: [`UncompressedChunkFormatHandler`](../classes/neuroglancer_sliceview_uncompressed_chunk_format.UncompressedChunkFormatHandler.md)

#### Overrides

[VolumeChunkSource](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md).[chunkFormatHandler](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#chunkformathandler)

#### Defined in

[src/neuroglancer/sliceview/uncompressed_chunk_format.ts:187](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/uncompressed_chunk_format.ts#L187)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](../classes/neuroglancer_chunk_manager_frontend.ChunkManager.md)

#### Inherited from

[VolumeChunkSource](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md).[chunkManager](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#chunkmanager)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:363](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L363)

___

### chunks

• **chunks**: `Map`<`string`, [`VolumeChunk`](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunk.md)\>

#### Inherited from

[VolumeChunkSource](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md).[chunks](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#chunks)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:451](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/frontend.ts#L451)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[VolumeChunkSource](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md).[disposedStacks](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### immediateChunkUpdates

• **immediateChunkUpdates**: `boolean` = `false`

If set to true, chunk updates will be applied to this source immediately, rather than queueing
them.  Sources that dynamically update chunks and need to ensure a consistent order of
processing relative to other messages between the frontend and worker should set this to true.

#### Inherited from

[VolumeChunkSource](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md).[immediateChunkUpdates](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#immediatechunkupdates)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:361](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L361)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

[VolumeChunkSource](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md).[isOwner](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#isowner)

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L171)

___

### key

• **key**: `any`

#### Inherited from

[VolumeChunkSource](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md).[key](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#key)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:408](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L408)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[VolumeChunkSource](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md).[refCount](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

[VolumeChunkSource](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md).[referencedGeneration](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#referencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](../classes/neuroglancer_worker_rpc.RPC.md) = `null`

#### Inherited from

[VolumeChunkSource](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md).[rpc](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#rpc)

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

[VolumeChunkSource](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md).[rpcId](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#rpcid)

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L170)

___

### spec

• **spec**: [`VolumeChunkSpecification`](neuroglancer_sliceview_volume_base.VolumeChunkSpecification.md)

#### Inherited from

[VolumeChunkSource](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md).[spec](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#spec)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:455](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/frontend.ts#L455)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

[VolumeChunkSource](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md).[unreferencedGeneration](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#unreferencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L172)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[VolumeChunkSource](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md).[wasDisposed](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### chunkFormat

• `get` **chunkFormat**(): [`ChunkFormat`](neuroglancer_sliceview_volume_frontend.ChunkFormat.md)

#### Returns

[`ChunkFormat`](neuroglancer_sliceview_volume_frontend.ChunkFormat.md)

#### Inherited from

VolumeChunkSource.chunkFormat

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/frontend.ts#L175)

___

### gl

• `get` **gl**(): [`GL`](neuroglancer_webgl_context.GL.md)

#### Returns

[`GL`](neuroglancer_webgl_context.GL.md)

#### Inherited from

VolumeChunkSource.gl

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:372](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L372)

## Methods

### addChunk

▸ **addChunk**(`key`, `chunk`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `chunk` | [`Chunk`](../classes/neuroglancer_chunk_manager_frontend.Chunk.md) |

#### Returns

`void`

#### Inherited from

[VolumeChunkSource](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md).[addChunk](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#addchunk)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:384](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L384)

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

[VolumeChunkSource](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md).[addCounterpartRef](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#addcounterpartref)

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`Source`](neuroglancer_sliceview_uncompressed_chunk_format._internal_.Source.md)

#### Returns

[`Source`](neuroglancer_sliceview_uncompressed_chunk_format._internal_.Source.md)

#### Inherited from

[VolumeChunkSource](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md).[addRef](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

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

[VolumeChunkSource](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md).[counterpartRefCountReachedZero](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#counterpartrefcountreachedzero)

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L234)

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

[VolumeChunkSource](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md).[deleteChunk](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#deletechunk)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:376](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L376)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[VolumeChunkSource](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md).[dispose](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#dispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[VolumeChunkSource](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md).[disposed](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L75)

___

### getChunk

▸ **getChunk**(`x`): [`VolumeChunk`](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunk.md)

Default implementation for use with backendOnly chunk sources.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

[`VolumeChunk`](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunk.md)

#### Inherited from

[VolumeChunkSource](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md).[getChunk](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#getchunk)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:221](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/frontend.ts#L221)

___

### getValueAt

▸ **getValueAt**(`chunkPosition`, `channelAccess`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkPosition` | `Float32Array` |
| `channelAccess` | [`ChunkChannelAccessParameters`](neuroglancer_render_coordinate_transform.ChunkChannelAccessParameters.md) |

#### Returns

`any`

#### Inherited from

[VolumeChunkSource](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md).[getValueAt](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#getvalueat)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:179](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/frontend.ts#L179)

___

### initializeCounterpart

▸ **initializeCounterpart**(`rpc`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](../classes/neuroglancer_worker_rpc.RPC.md) |
| `options` | `any` |

#### Returns

`void`

#### Inherited from

[VolumeChunkSource](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md).[initializeCounterpart](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#initializecounterpart)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:476](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/frontend.ts#L476)

___

### initializeSharedObject

▸ **initializeSharedObject**(`rpc`, `rpcId?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](../classes/neuroglancer_worker_rpc.RPC.md) |
| `rpcId` | `number` |

#### Returns

`void`

#### Inherited from

[VolumeChunkSource](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md).[initializeSharedObject](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#initializesharedobject)

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L175)

___

### invalidateCache

▸ **invalidateCache**(): `void`

Invalidates the chunk cache.  Operates asynchronously.

#### Returns

`void`

#### Inherited from

[VolumeChunkSource](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md).[invalidateCache](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#invalidatecache)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:398](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L398)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

[VolumeChunkSource](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md).[ownerDispose](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#ownerdispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[VolumeChunkSource](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md).[refCountReachedZero](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#refcountreachedzero)

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

[VolumeChunkSource](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md).[registerCancellable](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L100)

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

[VolumeChunkSource](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md).[registerDisposer](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#registerdisposer)

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
| `options?` | `boolean` \| [`AddEventListenerOptions`](main_module._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[VolumeChunkSource](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md).[registerEventListener](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L95)

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

[VolumeChunkSource](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md).[unregisterDisposer](../classes/neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)
