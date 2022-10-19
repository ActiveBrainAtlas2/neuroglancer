[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/mesh/frontend](../modules/neuroglancer_mesh_frontend.md) / MultiscaleFragmentSource

# Class: MultiscaleFragmentSource

[neuroglancer/mesh/frontend](../modules/neuroglancer_mesh_frontend.md).MultiscaleFragmentSource

## Hierarchy

- [`ChunkSource`](neuroglancer_chunk_manager_frontend.ChunkSource.md)

  ↳ **`MultiscaleFragmentSource`**

## Table of contents

### Constructors

- [constructor](neuroglancer_mesh_frontend.MultiscaleFragmentSource.md#constructor)

### Properties

- [OPTIONS](neuroglancer_mesh_frontend.MultiscaleFragmentSource.md#options)
- [RPC\_TYPE\_ID](neuroglancer_mesh_frontend.MultiscaleFragmentSource.md#rpc_type_id)
- [chunkManager](neuroglancer_mesh_frontend.MultiscaleFragmentSource.md#chunkmanager)
- [chunks](neuroglancer_mesh_frontend.MultiscaleFragmentSource.md#chunks)
- [disposedStacks](neuroglancer_mesh_frontend.MultiscaleFragmentSource.md#disposedstacks)
- [immediateChunkUpdates](neuroglancer_mesh_frontend.MultiscaleFragmentSource.md#immediatechunkupdates)
- [isOwner](neuroglancer_mesh_frontend.MultiscaleFragmentSource.md#isowner)
- [meshSource](neuroglancer_mesh_frontend.MultiscaleFragmentSource.md#meshsource)
- [refCount](neuroglancer_mesh_frontend.MultiscaleFragmentSource.md#refcount)
- [referencedGeneration](neuroglancer_mesh_frontend.MultiscaleFragmentSource.md#referencedgeneration)
- [rpc](neuroglancer_mesh_frontend.MultiscaleFragmentSource.md#rpc)
- [rpcId](neuroglancer_mesh_frontend.MultiscaleFragmentSource.md#rpcid)
- [unreferencedGeneration](neuroglancer_mesh_frontend.MultiscaleFragmentSource.md#unreferencedgeneration)
- [wasDisposed](neuroglancer_mesh_frontend.MultiscaleFragmentSource.md#wasdisposed)

### Accessors

- [gl](neuroglancer_mesh_frontend.MultiscaleFragmentSource.md#gl)
- [key](neuroglancer_mesh_frontend.MultiscaleFragmentSource.md#key)

### Methods

- [addChunk](neuroglancer_mesh_frontend.MultiscaleFragmentSource.md#addchunk)
- [addCounterpartRef](neuroglancer_mesh_frontend.MultiscaleFragmentSource.md#addcounterpartref)
- [addRef](neuroglancer_mesh_frontend.MultiscaleFragmentSource.md#addref)
- [counterpartRefCountReachedZero](neuroglancer_mesh_frontend.MultiscaleFragmentSource.md#counterpartrefcountreachedzero)
- [deleteChunk](neuroglancer_mesh_frontend.MultiscaleFragmentSource.md#deletechunk)
- [dispose](neuroglancer_mesh_frontend.MultiscaleFragmentSource.md#dispose)
- [disposed](neuroglancer_mesh_frontend.MultiscaleFragmentSource.md#disposed)
- [getChunk](neuroglancer_mesh_frontend.MultiscaleFragmentSource.md#getchunk)
- [initializeCounterpart](neuroglancer_mesh_frontend.MultiscaleFragmentSource.md#initializecounterpart)
- [initializeSharedObject](neuroglancer_mesh_frontend.MultiscaleFragmentSource.md#initializesharedobject)
- [invalidateCache](neuroglancer_mesh_frontend.MultiscaleFragmentSource.md#invalidatecache)
- [ownerDispose](neuroglancer_mesh_frontend.MultiscaleFragmentSource.md#ownerdispose)
- [refCountReachedZero](neuroglancer_mesh_frontend.MultiscaleFragmentSource.md#refcountreachedzero)
- [registerCancellable](neuroglancer_mesh_frontend.MultiscaleFragmentSource.md#registercancellable)
- [registerDisposer](neuroglancer_mesh_frontend.MultiscaleFragmentSource.md#registerdisposer)
- [registerEventListener](neuroglancer_mesh_frontend.MultiscaleFragmentSource.md#registereventlistener)
- [unregisterDisposer](neuroglancer_mesh_frontend.MultiscaleFragmentSource.md#unregisterdisposer)
- [encodeOptions](neuroglancer_mesh_frontend.MultiscaleFragmentSource.md#encodeoptions)

## Constructors

### constructor

• **new MultiscaleFragmentSource**(`chunkManager`, `meshSource`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md) |
| `meshSource` | [`MultiscaleMeshSource`](neuroglancer_mesh_frontend.MultiscaleMeshSource.md) |

#### Overrides

[ChunkSource](neuroglancer_chunk_manager_frontend.ChunkSource.md).[constructor](neuroglancer_chunk_manager_frontend.ChunkSource.md#constructor)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:814](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/mesh/frontend.ts#L814)

## Properties

### OPTIONS

• **OPTIONS**: `Object`

#### Inherited from

[ChunkSource](neuroglancer_chunk_manager_frontend.ChunkSource.md).[OPTIONS](neuroglancer_chunk_manager_frontend.ChunkSource.md#options)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:353](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L353)

___

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

[ChunkSource](neuroglancer_chunk_manager_frontend.ChunkSource.md).[RPC_TYPE_ID](neuroglancer_chunk_manager_frontend.ChunkSource.md#rpc_type_id)

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L245)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md)

#### Inherited from

[ChunkSource](neuroglancer_chunk_manager_frontend.ChunkSource.md).[chunkManager](neuroglancer_chunk_manager_frontend.ChunkSource.md#chunkmanager)

___

### chunks

• **chunks**: `Map`<`string`, [`MultiscaleFragmentChunk`](neuroglancer_mesh_frontend.MultiscaleFragmentChunk.md)\>

#### Overrides

[ChunkSource](neuroglancer_chunk_manager_frontend.ChunkSource.md).[chunks](neuroglancer_chunk_manager_frontend.ChunkSource.md#chunks)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:810](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/mesh/frontend.ts#L810)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[ChunkSource](neuroglancer_chunk_manager_frontend.ChunkSource.md).[disposedStacks](neuroglancer_chunk_manager_frontend.ChunkSource.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### immediateChunkUpdates

• **immediateChunkUpdates**: `boolean` = `false`

If set to true, chunk updates will be applied to this source immediately, rather than queueing
them.  Sources that dynamically update chunks and need to ensure a consistent order of
processing relative to other messages between the frontend and worker should set this to true.

#### Inherited from

[ChunkSource](neuroglancer_chunk_manager_frontend.ChunkSource.md).[immediateChunkUpdates](neuroglancer_chunk_manager_frontend.ChunkSource.md#immediatechunkupdates)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:361](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L361)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

[ChunkSource](neuroglancer_chunk_manager_frontend.ChunkSource.md).[isOwner](neuroglancer_chunk_manager_frontend.ChunkSource.md#isowner)

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L171)

___

### meshSource

• **meshSource**: [`MultiscaleMeshSource`](neuroglancer_mesh_frontend.MultiscaleMeshSource.md)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[ChunkSource](neuroglancer_chunk_manager_frontend.ChunkSource.md).[refCount](neuroglancer_chunk_manager_frontend.ChunkSource.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

[ChunkSource](neuroglancer_chunk_manager_frontend.ChunkSource.md).[referencedGeneration](neuroglancer_chunk_manager_frontend.ChunkSource.md#referencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](neuroglancer_worker_rpc.RPC.md) = `null`

#### Inherited from

[ChunkSource](neuroglancer_chunk_manager_frontend.ChunkSource.md).[rpc](neuroglancer_chunk_manager_frontend.ChunkSource.md#rpc)

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

[ChunkSource](neuroglancer_chunk_manager_frontend.ChunkSource.md).[rpcId](neuroglancer_chunk_manager_frontend.ChunkSource.md#rpcid)

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L170)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

[ChunkSource](neuroglancer_chunk_manager_frontend.ChunkSource.md).[unreferencedGeneration](neuroglancer_chunk_manager_frontend.ChunkSource.md#unreferencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L172)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[ChunkSource](neuroglancer_chunk_manager_frontend.ChunkSource.md).[wasDisposed](neuroglancer_chunk_manager_frontend.ChunkSource.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### gl

• `get` **gl**(): [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Returns

[`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Inherited from

ChunkSource.gl

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:372](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L372)

___

### key

• `get` **key**(): `any`

#### Returns

`any`

#### Overrides

ChunkSource.key

#### Defined in

[src/neuroglancer/mesh/frontend.ts:811](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/mesh/frontend.ts#L811)

## Methods

### addChunk

▸ **addChunk**(`key`, `chunk`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `chunk` | [`Chunk`](neuroglancer_chunk_manager_frontend.Chunk.md) |

#### Returns

`void`

#### Inherited from

[ChunkSource](neuroglancer_chunk_manager_frontend.ChunkSource.md).[addChunk](neuroglancer_chunk_manager_frontend.ChunkSource.md#addchunk)

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

[ChunkSource](neuroglancer_chunk_manager_frontend.ChunkSource.md).[addCounterpartRef](neuroglancer_chunk_manager_frontend.ChunkSource.md#addcounterpartref)

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`MultiscaleFragmentSource`](neuroglancer_mesh_frontend.MultiscaleFragmentSource.md)

#### Returns

[`MultiscaleFragmentSource`](neuroglancer_mesh_frontend.MultiscaleFragmentSource.md)

#### Inherited from

[ChunkSource](neuroglancer_chunk_manager_frontend.ChunkSource.md).[addRef](neuroglancer_chunk_manager_frontend.ChunkSource.md#addref)

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

[ChunkSource](neuroglancer_chunk_manager_frontend.ChunkSource.md).[counterpartRefCountReachedZero](neuroglancer_chunk_manager_frontend.ChunkSource.md#counterpartrefcountreachedzero)

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

[ChunkSource](neuroglancer_chunk_manager_frontend.ChunkSource.md).[deleteChunk](neuroglancer_chunk_manager_frontend.ChunkSource.md#deletechunk)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:376](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L376)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[ChunkSource](neuroglancer_chunk_manager_frontend.ChunkSource.md).[dispose](neuroglancer_chunk_manager_frontend.ChunkSource.md#dispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[ChunkSource](neuroglancer_chunk_manager_frontend.ChunkSource.md).[disposed](neuroglancer_chunk_manager_frontend.ChunkSource.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L75)

___

### getChunk

▸ **getChunk**(`x`): [`MultiscaleFragmentChunk`](neuroglancer_mesh_frontend.MultiscaleFragmentChunk.md)

Default implementation for use with backendOnly chunk sources.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

[`MultiscaleFragmentChunk`](neuroglancer_mesh_frontend.MultiscaleFragmentChunk.md)

#### Overrides

[ChunkSource](neuroglancer_chunk_manager_frontend.ChunkSource.md).[getChunk](neuroglancer_chunk_manager_frontend.ChunkSource.md#getchunk)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:817](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/mesh/frontend.ts#L817)

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

#### Inherited from

[ChunkSource](neuroglancer_chunk_manager_frontend.ChunkSource.md).[initializeCounterpart](neuroglancer_chunk_manager_frontend.ChunkSource.md#initializecounterpart)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:367](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L367)

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

[ChunkSource](neuroglancer_chunk_manager_frontend.ChunkSource.md).[initializeSharedObject](neuroglancer_chunk_manager_frontend.ChunkSource.md#initializesharedobject)

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L175)

___

### invalidateCache

▸ **invalidateCache**(): `void`

Invalidates the chunk cache.  Operates asynchronously.

#### Returns

`void`

#### Inherited from

[ChunkSource](neuroglancer_chunk_manager_frontend.ChunkSource.md).[invalidateCache](neuroglancer_chunk_manager_frontend.ChunkSource.md#invalidatecache)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:398](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L398)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

[ChunkSource](neuroglancer_chunk_manager_frontend.ChunkSource.md).[ownerDispose](neuroglancer_chunk_manager_frontend.ChunkSource.md#ownerdispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[ChunkSource](neuroglancer_chunk_manager_frontend.ChunkSource.md).[refCountReachedZero](neuroglancer_chunk_manager_frontend.ChunkSource.md#refcountreachedzero)

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

[ChunkSource](neuroglancer_chunk_manager_frontend.ChunkSource.md).[registerCancellable](neuroglancer_chunk_manager_frontend.ChunkSource.md#registercancellable)

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

[ChunkSource](neuroglancer_chunk_manager_frontend.ChunkSource.md).[registerDisposer](neuroglancer_chunk_manager_frontend.ChunkSource.md#registerdisposer)

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

[ChunkSource](neuroglancer_chunk_manager_frontend.ChunkSource.md).[registerEventListener](neuroglancer_chunk_manager_frontend.ChunkSource.md#registereventlistener)

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

[ChunkSource](neuroglancer_chunk_manager_frontend.ChunkSource.md).[unregisterDisposer](neuroglancer_chunk_manager_frontend.ChunkSource.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)

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

[ChunkSource](neuroglancer_chunk_manager_frontend.ChunkSource.md).[encodeOptions](neuroglancer_chunk_manager_frontend.ChunkSource.md#encodeoptions)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:402](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L402)
