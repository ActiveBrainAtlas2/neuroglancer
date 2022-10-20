[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/annotation/frontend\_source](../modules/neuroglancer_annotation_frontend_source.md) / AnnotationGeometryChunkSource

# Class: AnnotationGeometryChunkSource

[neuroglancer/annotation/frontend_source](../modules/neuroglancer_annotation_frontend_source.md).AnnotationGeometryChunkSource

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

- [`SliceViewChunkSource`](neuroglancer_sliceview_frontend.SliceViewChunkSource.md)<[`AnnotationGeometryChunkSpecification`](../interfaces/neuroglancer_annotation_base.AnnotationGeometryChunkSpecification.md), [`AnnotationGeometryChunk`](neuroglancer_annotation_frontend_source.AnnotationGeometryChunk.md)\>

  ↳ **`AnnotationGeometryChunkSource`**

## Table of contents

### Constructors

- [constructor](neuroglancer_annotation_frontend_source.AnnotationGeometryChunkSource.md#constructor)

### Properties

- [OPTIONS](neuroglancer_annotation_frontend_source.AnnotationGeometryChunkSource.md#options)
- [RPC\_TYPE\_ID](neuroglancer_annotation_frontend_source.AnnotationGeometryChunkSource.md#rpc_type_id)
- [chunkManager](neuroglancer_annotation_frontend_source.AnnotationGeometryChunkSource.md#chunkmanager)
- [chunks](neuroglancer_annotation_frontend_source.AnnotationGeometryChunkSource.md#chunks)
- [disposedStacks](neuroglancer_annotation_frontend_source.AnnotationGeometryChunkSource.md#disposedstacks)
- [immediateChunkUpdates](neuroglancer_annotation_frontend_source.AnnotationGeometryChunkSource.md#immediatechunkupdates)
- [isOwner](neuroglancer_annotation_frontend_source.AnnotationGeometryChunkSource.md#isowner)
- [key](neuroglancer_annotation_frontend_source.AnnotationGeometryChunkSource.md#key)
- [multiscaleToChunkTransform](neuroglancer_annotation_frontend_source.AnnotationGeometryChunkSource.md#multiscaletochunktransform)
- [parent](neuroglancer_annotation_frontend_source.AnnotationGeometryChunkSource.md#parent)
- [refCount](neuroglancer_annotation_frontend_source.AnnotationGeometryChunkSource.md#refcount)
- [referencedGeneration](neuroglancer_annotation_frontend_source.AnnotationGeometryChunkSource.md#referencedgeneration)
- [rpc](neuroglancer_annotation_frontend_source.AnnotationGeometryChunkSource.md#rpc)
- [rpcId](neuroglancer_annotation_frontend_source.AnnotationGeometryChunkSource.md#rpcid)
- [spec](neuroglancer_annotation_frontend_source.AnnotationGeometryChunkSource.md#spec)
- [unreferencedGeneration](neuroglancer_annotation_frontend_source.AnnotationGeometryChunkSource.md#unreferencedgeneration)
- [wasDisposed](neuroglancer_annotation_frontend_source.AnnotationGeometryChunkSource.md#wasdisposed)

### Accessors

- [gl](neuroglancer_annotation_frontend_source.AnnotationGeometryChunkSource.md#gl)

### Methods

- [addChunk](neuroglancer_annotation_frontend_source.AnnotationGeometryChunkSource.md#addchunk)
- [addCounterpartRef](neuroglancer_annotation_frontend_source.AnnotationGeometryChunkSource.md#addcounterpartref)
- [addRef](neuroglancer_annotation_frontend_source.AnnotationGeometryChunkSource.md#addref)
- [counterpartRefCountReachedZero](neuroglancer_annotation_frontend_source.AnnotationGeometryChunkSource.md#counterpartrefcountreachedzero)
- [deleteChunk](neuroglancer_annotation_frontend_source.AnnotationGeometryChunkSource.md#deletechunk)
- [dispose](neuroglancer_annotation_frontend_source.AnnotationGeometryChunkSource.md#dispose)
- [disposed](neuroglancer_annotation_frontend_source.AnnotationGeometryChunkSource.md#disposed)
- [getChunk](neuroglancer_annotation_frontend_source.AnnotationGeometryChunkSource.md#getchunk)
- [initializeCounterpart](neuroglancer_annotation_frontend_source.AnnotationGeometryChunkSource.md#initializecounterpart)
- [initializeSharedObject](neuroglancer_annotation_frontend_source.AnnotationGeometryChunkSource.md#initializesharedobject)
- [invalidateCache](neuroglancer_annotation_frontend_source.AnnotationGeometryChunkSource.md#invalidatecache)
- [ownerDispose](neuroglancer_annotation_frontend_source.AnnotationGeometryChunkSource.md#ownerdispose)
- [refCountReachedZero](neuroglancer_annotation_frontend_source.AnnotationGeometryChunkSource.md#refcountreachedzero)
- [registerCancellable](neuroglancer_annotation_frontend_source.AnnotationGeometryChunkSource.md#registercancellable)
- [registerDisposer](neuroglancer_annotation_frontend_source.AnnotationGeometryChunkSource.md#registerdisposer)
- [registerEventListener](neuroglancer_annotation_frontend_source.AnnotationGeometryChunkSource.md#registereventlistener)
- [unregisterDisposer](neuroglancer_annotation_frontend_source.AnnotationGeometryChunkSource.md#unregisterdisposer)
- [encodeOptions](neuroglancer_annotation_frontend_source.AnnotationGeometryChunkSource.md#encodeoptions)
- [encodeSpec](neuroglancer_annotation_frontend_source.AnnotationGeometryChunkSource.md#encodespec)

## Constructors

### constructor

• **new AnnotationGeometryChunkSource**(`chunkManager`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md) |
| `options` | [`AnnotationGeometryChunkSourceOptions`](../interfaces/neuroglancer_annotation_frontend_source.AnnotationGeometryChunkSourceOptions.md) |

#### Overrides

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[constructor](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#constructor)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:136](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L136)

## Properties

### OPTIONS

• **OPTIONS**: [`AnnotationGeometryChunkSourceOptions`](../interfaces/neuroglancer_annotation_frontend_source.AnnotationGeometryChunkSourceOptions.md)

#### Overrides

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[OPTIONS](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#options)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:125](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L125)

___

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[RPC_TYPE_ID](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#rpc_type_id)

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L245)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md)

#### Inherited from

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[chunkManager](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#chunkmanager)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:363](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L363)

___

### chunks

• **chunks**: `Map`<`string`, [`AnnotationGeometryChunk`](neuroglancer_annotation_frontend_source.AnnotationGeometryChunk.md)\>

#### Inherited from

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[chunks](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#chunks)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:451](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/frontend.ts#L451)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[disposedStacks](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### immediateChunkUpdates

• **immediateChunkUpdates**: `boolean` = `true`

If set to true, chunk updates will be applied to this source immediately, rather than queueing
them.  Sources that dynamically update chunks and need to ensure a consistent order of
processing relative to other messages between the frontend and worker should set this to true.

#### Overrides

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[immediateChunkUpdates](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#immediatechunkupdates)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:127](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L127)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[isOwner](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#isowner)

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L171)

___

### key

• **key**: `any`

#### Inherited from

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[key](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#key)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:408](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L408)

___

### multiscaleToChunkTransform

• **multiscaleToChunkTransform**: `Float32Array`

Transforms positions in the MultiscaleAnnotationSource coordinate space to grid cell
coordinates.  Equal to the inverse of `this.spec.chunkToMultiscaleTransform`, with rows divided
by `this.spec.chunkDataSize`.

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:134](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L134)

___

### parent

• **parent**: [`MultiscaleAnnotationSource`](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:126](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L126)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[refCount](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[referencedGeneration](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#referencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](neuroglancer_worker_rpc.RPC.md) = `null`

#### Inherited from

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[rpc](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#rpc)

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[rpcId](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#rpcid)

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L170)

___

### spec

• **spec**: [`AnnotationGeometryChunkSpecification`](../interfaces/neuroglancer_annotation_base.AnnotationGeometryChunkSpecification.md)

#### Inherited from

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[spec](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#spec)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:455](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/frontend.ts#L455)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[unreferencedGeneration](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#unreferencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L172)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[wasDisposed](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### gl

• `get` **gl**(): [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Returns

[`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Inherited from

SliceViewChunkSource.gl

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:372](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L372)

## Methods

### addChunk

▸ **addChunk**(`key`, `chunk`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `chunk` | [`AnnotationGeometryChunk`](neuroglancer_annotation_frontend_source.AnnotationGeometryChunk.md) |

#### Returns

`void`

#### Overrides

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[addChunk](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#addchunk)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:163](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L163)

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

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[addCounterpartRef](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#addcounterpartref)

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`AnnotationGeometryChunkSource`](neuroglancer_annotation_frontend_source.AnnotationGeometryChunkSource.md)

#### Returns

[`AnnotationGeometryChunkSource`](neuroglancer_annotation_frontend_source.AnnotationGeometryChunkSource.md)

#### Inherited from

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[addRef](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#addref)

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

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[counterpartRefCountReachedZero](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#counterpartrefcountreachedzero)

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

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[deleteChunk](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#deletechunk)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:376](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L376)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[dispose](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#dispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[disposed](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#disposed)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:153](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L153)

___

### getChunk

▸ **getChunk**(`x`): [`AnnotationGeometryChunk`](neuroglancer_annotation_frontend_source.AnnotationGeometryChunk.md)

Default implementation for use with backendOnly chunk sources.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

[`AnnotationGeometryChunk`](neuroglancer_annotation_frontend_source.AnnotationGeometryChunk.md)

#### Overrides

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[getChunk](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#getchunk)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:168](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L168)

___

### initializeCounterpart

▸ **initializeCounterpart**(`rpc`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](neuroglancer_worker_rpc.RPC.md) |
| `options` | `any` |

#### Returns

`void`

#### Overrides

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[initializeCounterpart](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#initializecounterpart)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:158](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/frontend_source.ts#L158)

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

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[initializeSharedObject](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#initializesharedobject)

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L175)

___

### invalidateCache

▸ **invalidateCache**(): `void`

Invalidates the chunk cache.  Operates asynchronously.

#### Returns

`void`

#### Inherited from

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[invalidateCache](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#invalidatecache)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:398](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L398)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[ownerDispose](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#ownerdispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[refCountReachedZero](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#refcountreachedzero)

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

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[registerCancellable](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#registercancellable)

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

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[registerDisposer](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#registerdisposer)

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

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[registerEventListener](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#registereventlistener)

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

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[unregisterDisposer](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)

___

### encodeOptions

▸ `Static` **encodeOptions**(`options`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SliceViewChunkSourceOptions`](../interfaces/neuroglancer_sliceview_frontend.SliceViewChunkSourceOptions.md)<[`SliceViewChunkSpecification`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\> |

#### Returns

`any`

#### Inherited from

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[encodeOptions](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#encodeoptions)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:470](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/frontend.ts#L470)

___

### encodeSpec

▸ `Static` **encodeSpec**(`spec`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec` | [`SliceViewChunkSpecification`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `chunkDataSize` | `number`[] |
| `lowerVoxelBound` | `number`[] |
| `upperVoxelBound` | `number`[] |

#### Inherited from

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[encodeSpec](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#encodespec)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:462](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/frontend.ts#L462)
