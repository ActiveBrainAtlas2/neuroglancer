[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/datasource/python/frontend](../modules/neuroglancer_datasource_python_frontend.md) / [<internal\>](../modules/neuroglancer_datasource_python_frontend._internal_.md) / PythonChunkSource

# Interface: PythonChunkSource

[neuroglancer/datasource/python/frontend](../modules/neuroglancer_datasource_python_frontend.md).[<internal>](../modules/neuroglancer_datasource_python_frontend._internal_.md).PythonChunkSource

## Hierarchy

- [`ChunkSource`](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md)

  ↳ **`PythonChunkSource`**

## Table of contents

### Properties

- [OPTIONS](neuroglancer_datasource_python_frontend._internal_.PythonChunkSource.md#options)
- [RPC\_TYPE\_ID](neuroglancer_datasource_python_frontend._internal_.PythonChunkSource.md#rpc_type_id)
- [chunkManager](neuroglancer_datasource_python_frontend._internal_.PythonChunkSource.md#chunkmanager)
- [chunks](neuroglancer_datasource_python_frontend._internal_.PythonChunkSource.md#chunks)
- [dataSource](neuroglancer_datasource_python_frontend._internal_.PythonChunkSource.md#datasource)
- [disposedStacks](neuroglancer_datasource_python_frontend._internal_.PythonChunkSource.md#disposedstacks)
- [generation](neuroglancer_datasource_python_frontend._internal_.PythonChunkSource.md#generation)
- [immediateChunkUpdates](neuroglancer_datasource_python_frontend._internal_.PythonChunkSource.md#immediatechunkupdates)
- [isOwner](neuroglancer_datasource_python_frontend._internal_.PythonChunkSource.md#isowner)
- [key](neuroglancer_datasource_python_frontend._internal_.PythonChunkSource.md#key)
- [refCount](neuroglancer_datasource_python_frontend._internal_.PythonChunkSource.md#refcount)
- [referencedGeneration](neuroglancer_datasource_python_frontend._internal_.PythonChunkSource.md#referencedgeneration)
- [rpc](neuroglancer_datasource_python_frontend._internal_.PythonChunkSource.md#rpc)
- [rpcId](neuroglancer_datasource_python_frontend._internal_.PythonChunkSource.md#rpcid)
- [unreferencedGeneration](neuroglancer_datasource_python_frontend._internal_.PythonChunkSource.md#unreferencedgeneration)
- [wasDisposed](neuroglancer_datasource_python_frontend._internal_.PythonChunkSource.md#wasdisposed)

### Accessors

- [gl](neuroglancer_datasource_python_frontend._internal_.PythonChunkSource.md#gl)

### Methods

- [addChunk](neuroglancer_datasource_python_frontend._internal_.PythonChunkSource.md#addchunk)
- [addCounterpartRef](neuroglancer_datasource_python_frontend._internal_.PythonChunkSource.md#addcounterpartref)
- [addRef](neuroglancer_datasource_python_frontend._internal_.PythonChunkSource.md#addref)
- [counterpartRefCountReachedZero](neuroglancer_datasource_python_frontend._internal_.PythonChunkSource.md#counterpartrefcountreachedzero)
- [deleteChunk](neuroglancer_datasource_python_frontend._internal_.PythonChunkSource.md#deletechunk)
- [dispose](neuroglancer_datasource_python_frontend._internal_.PythonChunkSource.md#dispose)
- [disposed](neuroglancer_datasource_python_frontend._internal_.PythonChunkSource.md#disposed)
- [getChunk](neuroglancer_datasource_python_frontend._internal_.PythonChunkSource.md#getchunk)
- [initializeCounterpart](neuroglancer_datasource_python_frontend._internal_.PythonChunkSource.md#initializecounterpart)
- [initializeSharedObject](neuroglancer_datasource_python_frontend._internal_.PythonChunkSource.md#initializesharedobject)
- [invalidateCache](neuroglancer_datasource_python_frontend._internal_.PythonChunkSource.md#invalidatecache)
- [ownerDispose](neuroglancer_datasource_python_frontend._internal_.PythonChunkSource.md#ownerdispose)
- [refCountReachedZero](neuroglancer_datasource_python_frontend._internal_.PythonChunkSource.md#refcountreachedzero)
- [registerCancellable](neuroglancer_datasource_python_frontend._internal_.PythonChunkSource.md#registercancellable)
- [registerDisposer](neuroglancer_datasource_python_frontend._internal_.PythonChunkSource.md#registerdisposer)
- [registerEventListener](neuroglancer_datasource_python_frontend._internal_.PythonChunkSource.md#registereventlistener)
- [unregisterDisposer](neuroglancer_datasource_python_frontend._internal_.PythonChunkSource.md#unregisterdisposer)

## Properties

### OPTIONS

• **OPTIONS**: `Object`

#### Inherited from

[ChunkSource](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md).[OPTIONS](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md#options)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:353](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L353)

___

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

[ChunkSource](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md).[RPC_TYPE_ID](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md#rpc_type_id)

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L245)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](../classes/neuroglancer_chunk_manager_frontend.ChunkManager.md)

#### Inherited from

[ChunkSource](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md).[chunkManager](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md#chunkmanager)

___

### chunks

• **chunks**: `Map`<`string`, [`Chunk`](../classes/neuroglancer_chunk_manager_frontend.Chunk.md)\>

#### Inherited from

[ChunkSource](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md).[chunks](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md#chunks)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:354](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L354)

___

### dataSource

• **dataSource**: [`PythonDataSource`](../classes/neuroglancer_datasource_python_frontend.PythonDataSource.md)

#### Defined in

[src/neuroglancer/datasource/python/frontend.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/python/frontend.ts#L43)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[ChunkSource](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md).[disposedStacks](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### generation

• **generation**: `number`

#### Defined in

[src/neuroglancer/datasource/python/frontend.ts:44](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/python/frontend.ts#L44)

___

### immediateChunkUpdates

• **immediateChunkUpdates**: `boolean` = `false`

If set to true, chunk updates will be applied to this source immediately, rather than queueing
them.  Sources that dynamically update chunks and need to ensure a consistent order of
processing relative to other messages between the frontend and worker should set this to true.

#### Inherited from

[ChunkSource](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md).[immediateChunkUpdates](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md#immediatechunkupdates)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:361](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L361)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

[ChunkSource](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md).[isOwner](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md#isowner)

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L171)

___

### key

• **key**: `any`

#### Inherited from

[ChunkSource](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md).[key](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md#key)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:408](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L408)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[ChunkSource](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md).[refCount](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

[ChunkSource](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md).[referencedGeneration](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md#referencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](../classes/neuroglancer_worker_rpc.RPC.md) = `null`

#### Inherited from

[ChunkSource](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md).[rpc](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md#rpc)

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

[ChunkSource](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md).[rpcId](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md#rpcid)

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L170)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

[ChunkSource](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md).[unreferencedGeneration](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md#unreferencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L172)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[ChunkSource](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md).[wasDisposed](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### gl

• `get` **gl**(): [`GL`](neuroglancer_webgl_context.GL.md)

#### Returns

[`GL`](neuroglancer_webgl_context.GL.md)

#### Inherited from

ChunkSource.gl

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:372](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L372)

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

[ChunkSource](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md).[addChunk](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md#addchunk)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:384](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L384)

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

[ChunkSource](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md).[addCounterpartRef](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md#addcounterpartref)

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`PythonChunkSource`](neuroglancer_datasource_python_frontend._internal_.PythonChunkSource.md)

#### Returns

[`PythonChunkSource`](neuroglancer_datasource_python_frontend._internal_.PythonChunkSource.md)

#### Inherited from

[ChunkSource](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md).[addRef](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

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

[ChunkSource](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md).[counterpartRefCountReachedZero](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md#counterpartrefcountreachedzero)

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L234)

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

[ChunkSource](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md).[deleteChunk](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md#deletechunk)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:376](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L376)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[ChunkSource](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md).[dispose](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md#dispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[ChunkSource](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md).[disposed](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L75)

___

### getChunk

▸ **getChunk**(`_x`): [`Chunk`](../classes/neuroglancer_chunk_manager_frontend.Chunk.md)

Default implementation for use with backendOnly chunk sources.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_x` | `any` |

#### Returns

[`Chunk`](../classes/neuroglancer_chunk_manager_frontend.Chunk.md)

#### Inherited from

[ChunkSource](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md).[getChunk](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md#getchunk)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:391](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L391)

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

[ChunkSource](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md).[initializeCounterpart](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md#initializecounterpart)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:367](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L367)

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

[ChunkSource](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md).[initializeSharedObject](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md#initializesharedobject)

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L175)

___

### invalidateCache

▸ **invalidateCache**(): `void`

Invalidates the chunk cache.  Operates asynchronously.

#### Returns

`void`

#### Inherited from

[ChunkSource](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md).[invalidateCache](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md#invalidatecache)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:398](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L398)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

[ChunkSource](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md).[ownerDispose](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md#ownerdispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[ChunkSource](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md).[refCountReachedZero](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md#refcountreachedzero)

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

[ChunkSource](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md).[registerCancellable](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L100)

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

[ChunkSource](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md).[registerDisposer](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md#registerdisposer)

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
| `options?` | `boolean` \| [`AddEventListenerOptions`](main_module._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[ChunkSource](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md).[registerEventListener](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L95)

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

[ChunkSource](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md).[unregisterDisposer](../classes/neuroglancer_chunk_manager_frontend.ChunkSource.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)
