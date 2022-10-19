[neuroglancer](../README.md) / [Modules](../modules.md) / [layer](../modules/layer.md) / [<internal\>](../modules/layer._internal_.md) / MultiscaleFragmentSource

# Class: MultiscaleFragmentSource

[layer](../modules/layer.md).[<internal>](../modules/layer._internal_.md).MultiscaleFragmentSource

## Hierarchy

- [`ChunkSource`](data_panel_layout._internal_.ChunkSource.md)

  ↳ **`MultiscaleFragmentSource`**

## Table of contents

### Constructors

- [constructor](layer._internal_.MultiscaleFragmentSource.md#constructor)

### Properties

- [OPTIONS](layer._internal_.MultiscaleFragmentSource.md#options)
- [RPC\_TYPE\_ID](layer._internal_.MultiscaleFragmentSource.md#rpc_type_id)
- [chunkManager](layer._internal_.MultiscaleFragmentSource.md#chunkmanager)
- [chunks](layer._internal_.MultiscaleFragmentSource.md#chunks)
- [disposedStacks](layer._internal_.MultiscaleFragmentSource.md#disposedstacks)
- [immediateChunkUpdates](layer._internal_.MultiscaleFragmentSource.md#immediatechunkupdates)
- [isOwner](layer._internal_.MultiscaleFragmentSource.md#isowner)
- [meshSource](layer._internal_.MultiscaleFragmentSource.md#meshsource)
- [refCount](layer._internal_.MultiscaleFragmentSource.md#refcount)
- [referencedGeneration](layer._internal_.MultiscaleFragmentSource.md#referencedgeneration)
- [rpc](layer._internal_.MultiscaleFragmentSource.md#rpc)
- [rpcId](layer._internal_.MultiscaleFragmentSource.md#rpcid)
- [unreferencedGeneration](layer._internal_.MultiscaleFragmentSource.md#unreferencedgeneration)
- [wasDisposed](layer._internal_.MultiscaleFragmentSource.md#wasdisposed)

### Accessors

- [gl](layer._internal_.MultiscaleFragmentSource.md#gl)
- [key](layer._internal_.MultiscaleFragmentSource.md#key)

### Methods

- [addChunk](layer._internal_.MultiscaleFragmentSource.md#addchunk)
- [addCounterpartRef](layer._internal_.MultiscaleFragmentSource.md#addcounterpartref)
- [addRef](layer._internal_.MultiscaleFragmentSource.md#addref)
- [counterpartRefCountReachedZero](layer._internal_.MultiscaleFragmentSource.md#counterpartrefcountreachedzero)
- [deleteChunk](layer._internal_.MultiscaleFragmentSource.md#deletechunk)
- [dispose](layer._internal_.MultiscaleFragmentSource.md#dispose)
- [disposed](layer._internal_.MultiscaleFragmentSource.md#disposed)
- [getChunk](layer._internal_.MultiscaleFragmentSource.md#getchunk)
- [initializeCounterpart](layer._internal_.MultiscaleFragmentSource.md#initializecounterpart)
- [initializeSharedObject](layer._internal_.MultiscaleFragmentSource.md#initializesharedobject)
- [invalidateCache](layer._internal_.MultiscaleFragmentSource.md#invalidatecache)
- [ownerDispose](layer._internal_.MultiscaleFragmentSource.md#ownerdispose)
- [refCountReachedZero](layer._internal_.MultiscaleFragmentSource.md#refcountreachedzero)
- [registerCancellable](layer._internal_.MultiscaleFragmentSource.md#registercancellable)
- [registerDisposer](layer._internal_.MultiscaleFragmentSource.md#registerdisposer)
- [registerEventListener](layer._internal_.MultiscaleFragmentSource.md#registereventlistener)
- [unregisterDisposer](layer._internal_.MultiscaleFragmentSource.md#unregisterdisposer)
- [encodeOptions](layer._internal_.MultiscaleFragmentSource.md#encodeoptions)

## Constructors

### constructor

• **new MultiscaleFragmentSource**(`chunkManager`, `meshSource`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](data_panel_layout._internal_.ChunkManager.md) |
| `meshSource` | [`MultiscaleMeshSource`](layer._internal_.MultiscaleMeshSource.md) |

#### Overrides

[ChunkSource](data_panel_layout._internal_.ChunkSource.md).[constructor](data_panel_layout._internal_.ChunkSource.md#constructor)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:814](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/mesh/frontend.ts#L814)

## Properties

### OPTIONS

• **OPTIONS**: `Object`

#### Inherited from

[ChunkSource](data_panel_layout._internal_.ChunkSource.md).[OPTIONS](data_panel_layout._internal_.ChunkSource.md#options)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:353](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L353)

___

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

[ChunkSource](data_panel_layout._internal_.ChunkSource.md).[RPC_TYPE_ID](data_panel_layout._internal_.ChunkSource.md#rpc_type_id)

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L245)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](data_panel_layout._internal_.ChunkManager.md)

#### Inherited from

[ChunkSource](data_panel_layout._internal_.ChunkSource.md).[chunkManager](data_panel_layout._internal_.ChunkSource.md#chunkmanager)

___

### chunks

• **chunks**: `Map`<`string`, [`MultiscaleFragmentChunk`](layer._internal_.MultiscaleFragmentChunk.md)\>

#### Overrides

[ChunkSource](data_panel_layout._internal_.ChunkSource.md).[chunks](data_panel_layout._internal_.ChunkSource.md#chunks)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:810](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/mesh/frontend.ts#L810)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[ChunkSource](data_panel_layout._internal_.ChunkSource.md).[disposedStacks](data_panel_layout._internal_.ChunkSource.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### immediateChunkUpdates

• **immediateChunkUpdates**: `boolean` = `false`

If set to true, chunk updates will be applied to this source immediately, rather than queueing
them.  Sources that dynamically update chunks and need to ensure a consistent order of
processing relative to other messages between the frontend and worker should set this to true.

#### Inherited from

[ChunkSource](data_panel_layout._internal_.ChunkSource.md).[immediateChunkUpdates](data_panel_layout._internal_.ChunkSource.md#immediatechunkupdates)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:361](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L361)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

[ChunkSource](data_panel_layout._internal_.ChunkSource.md).[isOwner](data_panel_layout._internal_.ChunkSource.md#isowner)

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L171)

___

### meshSource

• **meshSource**: [`MultiscaleMeshSource`](layer._internal_.MultiscaleMeshSource.md)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[ChunkSource](data_panel_layout._internal_.ChunkSource.md).[refCount](data_panel_layout._internal_.ChunkSource.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

[ChunkSource](data_panel_layout._internal_.ChunkSource.md).[referencedGeneration](data_panel_layout._internal_.ChunkSource.md#referencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](worker_rpc.RPC.md) = `null`

#### Inherited from

[ChunkSource](data_panel_layout._internal_.ChunkSource.md).[rpc](data_panel_layout._internal_.ChunkSource.md#rpc)

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

[ChunkSource](data_panel_layout._internal_.ChunkSource.md).[rpcId](data_panel_layout._internal_.ChunkSource.md#rpcid)

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L170)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

[ChunkSource](data_panel_layout._internal_.ChunkSource.md).[unreferencedGeneration](data_panel_layout._internal_.ChunkSource.md#unreferencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L172)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[ChunkSource](data_panel_layout._internal_.ChunkSource.md).[wasDisposed](data_panel_layout._internal_.ChunkSource.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### gl

• `get` **gl**(): [`GL`](../interfaces/axes_lines._internal_.GL.md)

#### Returns

[`GL`](../interfaces/axes_lines._internal_.GL.md)

#### Inherited from

ChunkSource.gl

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:372](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L372)

___

### key

• `get` **key**(): `any`

#### Returns

`any`

#### Overrides

ChunkSource.key

#### Defined in

[src/neuroglancer/mesh/frontend.ts:811](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/mesh/frontend.ts#L811)

## Methods

### addChunk

▸ **addChunk**(`key`, `chunk`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `chunk` | [`Chunk`](data_panel_layout._internal_.Chunk.md) |

#### Returns

`void`

#### Inherited from

[ChunkSource](data_panel_layout._internal_.ChunkSource.md).[addChunk](data_panel_layout._internal_.ChunkSource.md#addchunk)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:384](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L384)

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

[ChunkSource](data_panel_layout._internal_.ChunkSource.md).[addCounterpartRef](data_panel_layout._internal_.ChunkSource.md#addcounterpartref)

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`MultiscaleFragmentSource`](layer._internal_.MultiscaleFragmentSource.md)

#### Returns

[`MultiscaleFragmentSource`](layer._internal_.MultiscaleFragmentSource.md)

#### Inherited from

[ChunkSource](data_panel_layout._internal_.ChunkSource.md).[addRef](data_panel_layout._internal_.ChunkSource.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

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

[ChunkSource](data_panel_layout._internal_.ChunkSource.md).[counterpartRefCountReachedZero](data_panel_layout._internal_.ChunkSource.md#counterpartrefcountreachedzero)

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L234)

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

[ChunkSource](data_panel_layout._internal_.ChunkSource.md).[deleteChunk](data_panel_layout._internal_.ChunkSource.md#deletechunk)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:376](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L376)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[ChunkSource](data_panel_layout._internal_.ChunkSource.md).[dispose](data_panel_layout._internal_.ChunkSource.md#dispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[ChunkSource](data_panel_layout._internal_.ChunkSource.md).[disposed](data_panel_layout._internal_.ChunkSource.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L75)

___

### getChunk

▸ **getChunk**(`x`): [`MultiscaleFragmentChunk`](layer._internal_.MultiscaleFragmentChunk.md)

Default implementation for use with backendOnly chunk sources.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

[`MultiscaleFragmentChunk`](layer._internal_.MultiscaleFragmentChunk.md)

#### Overrides

[ChunkSource](data_panel_layout._internal_.ChunkSource.md).[getChunk](data_panel_layout._internal_.ChunkSource.md#getchunk)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:817](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/mesh/frontend.ts#L817)

___

### initializeCounterpart

▸ **initializeCounterpart**(`rpc`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](worker_rpc.RPC.md) |
| `options` | `any` |

#### Returns

`void`

#### Inherited from

[ChunkSource](data_panel_layout._internal_.ChunkSource.md).[initializeCounterpart](data_panel_layout._internal_.ChunkSource.md#initializecounterpart)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:367](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L367)

___

### initializeSharedObject

▸ **initializeSharedObject**(`rpc`, `rpcId?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](worker_rpc.RPC.md) |
| `rpcId` | `number` |

#### Returns

`void`

#### Inherited from

[ChunkSource](data_panel_layout._internal_.ChunkSource.md).[initializeSharedObject](data_panel_layout._internal_.ChunkSource.md#initializesharedobject)

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L175)

___

### invalidateCache

▸ **invalidateCache**(): `void`

Invalidates the chunk cache.  Operates asynchronously.

#### Returns

`void`

#### Inherited from

[ChunkSource](data_panel_layout._internal_.ChunkSource.md).[invalidateCache](data_panel_layout._internal_.ChunkSource.md#invalidatecache)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:398](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L398)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

[ChunkSource](data_panel_layout._internal_.ChunkSource.md).[ownerDispose](data_panel_layout._internal_.ChunkSource.md#ownerdispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[ChunkSource](data_panel_layout._internal_.ChunkSource.md).[refCountReachedZero](data_panel_layout._internal_.ChunkSource.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/worker_rpc.ts:203](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L203)

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

[ChunkSource](data_panel_layout._internal_.ChunkSource.md).[registerCancellable](data_panel_layout._internal_.ChunkSource.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/axes_lines._internal_.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[ChunkSource](data_panel_layout._internal_.ChunkSource.md).[registerDisposer](data_panel_layout._internal_.ChunkSource.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](../modules/axes_lines._internal_.md#eventtarget) |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/axes_lines._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](../interfaces/axes_lines._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

[ChunkSource](data_panel_layout._internal_.ChunkSource.md).[registerEventListener](data_panel_layout._internal_.ChunkSource.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L95)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/axes_lines._internal_.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

[ChunkSource](data_panel_layout._internal_.ChunkSource.md).[unregisterDisposer](data_panel_layout._internal_.ChunkSource.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L85)

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

[ChunkSource](data_panel_layout._internal_.ChunkSource.md).[encodeOptions](data_panel_layout._internal_.ChunkSource.md#encodeoptions)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:402](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L402)
