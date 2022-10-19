[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/frontend\_source](../modules/annotation_frontend_source.md) / AnnotationSubsetGeometryChunkSource

# Class: AnnotationSubsetGeometryChunkSource

[annotation/frontend_source](../modules/annotation_frontend_source.md).AnnotationSubsetGeometryChunkSource

## Hierarchy

- [`ChunkSource`](chunk_manager_frontend.ChunkSource.md)

  ↳ **`AnnotationSubsetGeometryChunkSource`**

## Table of contents

### Constructors

- [constructor](annotation_frontend_source.AnnotationSubsetGeometryChunkSource.md#constructor)

### Properties

- [OPTIONS](annotation_frontend_source.AnnotationSubsetGeometryChunkSource.md#options)
- [RPC\_TYPE\_ID](annotation_frontend_source.AnnotationSubsetGeometryChunkSource.md#rpc_type_id)
- [chunkManager](annotation_frontend_source.AnnotationSubsetGeometryChunkSource.md#chunkmanager)
- [chunks](annotation_frontend_source.AnnotationSubsetGeometryChunkSource.md#chunks)
- [disposedStacks](annotation_frontend_source.AnnotationSubsetGeometryChunkSource.md#disposedstacks)
- [immediateChunkUpdates](annotation_frontend_source.AnnotationSubsetGeometryChunkSource.md#immediatechunkupdates)
- [isOwner](annotation_frontend_source.AnnotationSubsetGeometryChunkSource.md#isowner)
- [key](annotation_frontend_source.AnnotationSubsetGeometryChunkSource.md#key)
- [parent](annotation_frontend_source.AnnotationSubsetGeometryChunkSource.md#parent)
- [refCount](annotation_frontend_source.AnnotationSubsetGeometryChunkSource.md#refcount)
- [referencedGeneration](annotation_frontend_source.AnnotationSubsetGeometryChunkSource.md#referencedgeneration)
- [relationshipIndex](annotation_frontend_source.AnnotationSubsetGeometryChunkSource.md#relationshipindex)
- [rpc](annotation_frontend_source.AnnotationSubsetGeometryChunkSource.md#rpc)
- [rpcId](annotation_frontend_source.AnnotationSubsetGeometryChunkSource.md#rpcid)
- [unreferencedGeneration](annotation_frontend_source.AnnotationSubsetGeometryChunkSource.md#unreferencedgeneration)
- [wasDisposed](annotation_frontend_source.AnnotationSubsetGeometryChunkSource.md#wasdisposed)

### Accessors

- [gl](annotation_frontend_source.AnnotationSubsetGeometryChunkSource.md#gl)

### Methods

- [addChunk](annotation_frontend_source.AnnotationSubsetGeometryChunkSource.md#addchunk)
- [addCounterpartRef](annotation_frontend_source.AnnotationSubsetGeometryChunkSource.md#addcounterpartref)
- [addRef](annotation_frontend_source.AnnotationSubsetGeometryChunkSource.md#addref)
- [counterpartRefCountReachedZero](annotation_frontend_source.AnnotationSubsetGeometryChunkSource.md#counterpartrefcountreachedzero)
- [deleteChunk](annotation_frontend_source.AnnotationSubsetGeometryChunkSource.md#deletechunk)
- [dispose](annotation_frontend_source.AnnotationSubsetGeometryChunkSource.md#dispose)
- [disposed](annotation_frontend_source.AnnotationSubsetGeometryChunkSource.md#disposed)
- [getChunk](annotation_frontend_source.AnnotationSubsetGeometryChunkSource.md#getchunk)
- [initializeCounterpart](annotation_frontend_source.AnnotationSubsetGeometryChunkSource.md#initializecounterpart)
- [initializeSharedObject](annotation_frontend_source.AnnotationSubsetGeometryChunkSource.md#initializesharedobject)
- [invalidateCache](annotation_frontend_source.AnnotationSubsetGeometryChunkSource.md#invalidatecache)
- [ownerDispose](annotation_frontend_source.AnnotationSubsetGeometryChunkSource.md#ownerdispose)
- [refCountReachedZero](annotation_frontend_source.AnnotationSubsetGeometryChunkSource.md#refcountreachedzero)
- [registerCancellable](annotation_frontend_source.AnnotationSubsetGeometryChunkSource.md#registercancellable)
- [registerDisposer](annotation_frontend_source.AnnotationSubsetGeometryChunkSource.md#registerdisposer)
- [registerEventListener](annotation_frontend_source.AnnotationSubsetGeometryChunkSource.md#registereventlistener)
- [unregisterDisposer](annotation_frontend_source.AnnotationSubsetGeometryChunkSource.md#unregisterdisposer)
- [encodeOptions](annotation_frontend_source.AnnotationSubsetGeometryChunkSource.md#encodeoptions)

## Constructors

### constructor

• **new AnnotationSubsetGeometryChunkSource**(`chunkManager`, `parent`, `relationshipIndex`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](chunk_manager_frontend.ChunkManager.md) |
| `parent` | [`MultiscaleAnnotationSource`](annotation_frontend_source.MultiscaleAnnotationSource.md) |
| `relationshipIndex` | `number` |

#### Overrides

[ChunkSource](chunk_manager_frontend.ChunkSource.md).[constructor](chunk_manager_frontend.ChunkSource.md#constructor)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:178](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L178)

## Properties

### OPTIONS

• **OPTIONS**: `Object`

#### Inherited from

[ChunkSource](chunk_manager_frontend.ChunkSource.md).[OPTIONS](chunk_manager_frontend.ChunkSource.md#options)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:353](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L353)

___

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

[ChunkSource](chunk_manager_frontend.ChunkSource.md).[RPC_TYPE_ID](chunk_manager_frontend.ChunkSource.md#rpc_type_id)

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L245)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](chunk_manager_frontend.ChunkManager.md)

#### Inherited from

[ChunkSource](chunk_manager_frontend.ChunkSource.md).[chunkManager](chunk_manager_frontend.ChunkSource.md#chunkmanager)

___

### chunks

• **chunks**: `Map`<`string`, [`AnnotationSubsetGeometryChunk`](annotation_frontend_source.AnnotationSubsetGeometryChunk.md)\>

#### Overrides

[ChunkSource](chunk_manager_frontend.ChunkSource.md).[chunks](chunk_manager_frontend.ChunkSource.md#chunks)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:176](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L176)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[ChunkSource](chunk_manager_frontend.ChunkSource.md).[disposedStacks](chunk_manager_frontend.ChunkSource.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### immediateChunkUpdates

• **immediateChunkUpdates**: `boolean` = `true`

If set to true, chunk updates will be applied to this source immediately, rather than queueing
them.  Sources that dynamically update chunks and need to ensure a consistent order of
processing relative to other messages between the frontend and worker should set this to true.

#### Overrides

[ChunkSource](chunk_manager_frontend.ChunkSource.md).[immediateChunkUpdates](chunk_manager_frontend.ChunkSource.md#immediatechunkupdates)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L175)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

[ChunkSource](chunk_manager_frontend.ChunkSource.md).[isOwner](chunk_manager_frontend.ChunkSource.md#isowner)

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L171)

___

### key

• **key**: `any`

#### Inherited from

[ChunkSource](chunk_manager_frontend.ChunkSource.md).[key](chunk_manager_frontend.ChunkSource.md#key)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:408](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L408)

___

### parent

• **parent**: [`MultiscaleAnnotationSource`](annotation_frontend_source.MultiscaleAnnotationSource.md)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[ChunkSource](chunk_manager_frontend.ChunkSource.md).[refCount](chunk_manager_frontend.ChunkSource.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

[ChunkSource](chunk_manager_frontend.ChunkSource.md).[referencedGeneration](chunk_manager_frontend.ChunkSource.md#referencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L173)

___

### relationshipIndex

• **relationshipIndex**: `number`

___

### rpc

• **rpc**: ``null`` \| [`RPC`](annotation_annotation_layer_state._internal_.RPC.md) = `null`

#### Inherited from

[ChunkSource](chunk_manager_frontend.ChunkSource.md).[rpc](chunk_manager_frontend.ChunkSource.md#rpc)

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

[ChunkSource](chunk_manager_frontend.ChunkSource.md).[rpcId](chunk_manager_frontend.ChunkSource.md#rpcid)

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L170)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

[ChunkSource](chunk_manager_frontend.ChunkSource.md).[unreferencedGeneration](chunk_manager_frontend.ChunkSource.md#unreferencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L172)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[ChunkSource](chunk_manager_frontend.ChunkSource.md).[wasDisposed](chunk_manager_frontend.ChunkSource.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### gl

• `get` **gl**(): [`GL`](../interfaces/webgl_context.GL.md)

#### Returns

[`GL`](../interfaces/webgl_context.GL.md)

#### Inherited from

ChunkSource.gl

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:372](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L372)

## Methods

### addChunk

▸ **addChunk**(`key`, `chunk`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `chunk` | [`AnnotationSubsetGeometryChunk`](annotation_frontend_source.AnnotationSubsetGeometryChunk.md) |

#### Returns

`void`

#### Overrides

[ChunkSource](chunk_manager_frontend.ChunkSource.md).[addChunk](chunk_manager_frontend.ChunkSource.md#addchunk)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:184](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L184)

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

[ChunkSource](chunk_manager_frontend.ChunkSource.md).[addCounterpartRef](chunk_manager_frontend.ChunkSource.md#addcounterpartref)

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`AnnotationSubsetGeometryChunkSource`](annotation_frontend_source.AnnotationSubsetGeometryChunkSource.md)

#### Returns

[`AnnotationSubsetGeometryChunkSource`](annotation_frontend_source.AnnotationSubsetGeometryChunkSource.md)

#### Inherited from

[ChunkSource](chunk_manager_frontend.ChunkSource.md).[addRef](chunk_manager_frontend.ChunkSource.md#addref)

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

[ChunkSource](chunk_manager_frontend.ChunkSource.md).[counterpartRefCountReachedZero](chunk_manager_frontend.ChunkSource.md#counterpartrefcountreachedzero)

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

[ChunkSource](chunk_manager_frontend.ChunkSource.md).[deleteChunk](chunk_manager_frontend.ChunkSource.md#deletechunk)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:376](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L376)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[ChunkSource](chunk_manager_frontend.ChunkSource.md).[dispose](chunk_manager_frontend.ChunkSource.md#dispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[ChunkSource](chunk_manager_frontend.ChunkSource.md).[disposed](chunk_manager_frontend.ChunkSource.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

___

### getChunk

▸ **getChunk**(`x`): [`AnnotationSubsetGeometryChunk`](annotation_frontend_source.AnnotationSubsetGeometryChunk.md)

Default implementation for use with backendOnly chunk sources.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

[`AnnotationSubsetGeometryChunk`](annotation_frontend_source.AnnotationSubsetGeometryChunk.md)

#### Overrides

[ChunkSource](chunk_manager_frontend.ChunkSource.md).[getChunk](chunk_manager_frontend.ChunkSource.md#getchunk)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:189](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L189)

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

[ChunkSource](chunk_manager_frontend.ChunkSource.md).[initializeCounterpart](chunk_manager_frontend.ChunkSource.md#initializecounterpart)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:367](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L367)

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

[ChunkSource](chunk_manager_frontend.ChunkSource.md).[initializeSharedObject](chunk_manager_frontend.ChunkSource.md#initializesharedobject)

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L175)

___

### invalidateCache

▸ **invalidateCache**(): `void`

Invalidates the chunk cache.  Operates asynchronously.

#### Returns

`void`

#### Inherited from

[ChunkSource](chunk_manager_frontend.ChunkSource.md).[invalidateCache](chunk_manager_frontend.ChunkSource.md#invalidatecache)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:398](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L398)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

[ChunkSource](chunk_manager_frontend.ChunkSource.md).[ownerDispose](chunk_manager_frontend.ChunkSource.md#ownerdispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[ChunkSource](chunk_manager_frontend.ChunkSource.md).[refCountReachedZero](chunk_manager_frontend.ChunkSource.md#refcountreachedzero)

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

[ChunkSource](chunk_manager_frontend.ChunkSource.md).[registerCancellable](chunk_manager_frontend.ChunkSource.md#registercancellable)

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

[ChunkSource](chunk_manager_frontend.ChunkSource.md).[registerDisposer](chunk_manager_frontend.ChunkSource.md#registerdisposer)

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

[ChunkSource](chunk_manager_frontend.ChunkSource.md).[registerEventListener](chunk_manager_frontend.ChunkSource.md#registereventlistener)

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

[ChunkSource](chunk_manager_frontend.ChunkSource.md).[unregisterDisposer](chunk_manager_frontend.ChunkSource.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)

___

### encodeOptions

▸ `Static` **encodeOptions**(`_options`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options` | `Object` |

#### Returns

`Object`

#### Inherited from

[ChunkSource](chunk_manager_frontend.ChunkSource.md).[encodeOptions](chunk_manager_frontend.ChunkSource.md#encodeoptions)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:402](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L402)
