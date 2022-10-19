[neuroglancer](../README.md) / [Modules](../modules.md) / [segmentation\_display\_state/property\_map](../modules/segmentation_display_state_property_map.md) / IndexedSegmentPropertySource

# Class: IndexedSegmentPropertySource

[segmentation_display_state/property_map](../modules/segmentation_display_state_property_map.md).IndexedSegmentPropertySource

## Hierarchy

- [`ChunkSource`](chunk_manager_frontend.ChunkSource.md)

  ↳ **`IndexedSegmentPropertySource`**

## Table of contents

### Constructors

- [constructor](segmentation_display_state_property_map.IndexedSegmentPropertySource.md#constructor)

### Properties

- [OPTIONS](segmentation_display_state_property_map.IndexedSegmentPropertySource.md#options)
- [RPC\_TYPE\_ID](segmentation_display_state_property_map.IndexedSegmentPropertySource.md#rpc_type_id)
- [chunkManager](segmentation_display_state_property_map.IndexedSegmentPropertySource.md#chunkmanager)
- [chunks](segmentation_display_state_property_map.IndexedSegmentPropertySource.md#chunks)
- [disposedStacks](segmentation_display_state_property_map.IndexedSegmentPropertySource.md#disposedstacks)
- [immediateChunkUpdates](segmentation_display_state_property_map.IndexedSegmentPropertySource.md#immediatechunkupdates)
- [isOwner](segmentation_display_state_property_map.IndexedSegmentPropertySource.md#isowner)
- [key](segmentation_display_state_property_map.IndexedSegmentPropertySource.md#key)
- [properties](segmentation_display_state_property_map.IndexedSegmentPropertySource.md#properties)
- [refCount](segmentation_display_state_property_map.IndexedSegmentPropertySource.md#refcount)
- [referencedGeneration](segmentation_display_state_property_map.IndexedSegmentPropertySource.md#referencedgeneration)
- [rpc](segmentation_display_state_property_map.IndexedSegmentPropertySource.md#rpc)
- [rpcId](segmentation_display_state_property_map.IndexedSegmentPropertySource.md#rpcid)
- [unreferencedGeneration](segmentation_display_state_property_map.IndexedSegmentPropertySource.md#unreferencedgeneration)
- [wasDisposed](segmentation_display_state_property_map.IndexedSegmentPropertySource.md#wasdisposed)

### Accessors

- [gl](segmentation_display_state_property_map.IndexedSegmentPropertySource.md#gl)

### Methods

- [addChunk](segmentation_display_state_property_map.IndexedSegmentPropertySource.md#addchunk)
- [addCounterpartRef](segmentation_display_state_property_map.IndexedSegmentPropertySource.md#addcounterpartref)
- [addRef](segmentation_display_state_property_map.IndexedSegmentPropertySource.md#addref)
- [counterpartRefCountReachedZero](segmentation_display_state_property_map.IndexedSegmentPropertySource.md#counterpartrefcountreachedzero)
- [deleteChunk](segmentation_display_state_property_map.IndexedSegmentPropertySource.md#deletechunk)
- [dispose](segmentation_display_state_property_map.IndexedSegmentPropertySource.md#dispose)
- [disposed](segmentation_display_state_property_map.IndexedSegmentPropertySource.md#disposed)
- [getChunk](segmentation_display_state_property_map.IndexedSegmentPropertySource.md#getchunk)
- [initializeCounterpart](segmentation_display_state_property_map.IndexedSegmentPropertySource.md#initializecounterpart)
- [initializeSharedObject](segmentation_display_state_property_map.IndexedSegmentPropertySource.md#initializesharedobject)
- [invalidateCache](segmentation_display_state_property_map.IndexedSegmentPropertySource.md#invalidatecache)
- [ownerDispose](segmentation_display_state_property_map.IndexedSegmentPropertySource.md#ownerdispose)
- [refCountReachedZero](segmentation_display_state_property_map.IndexedSegmentPropertySource.md#refcountreachedzero)
- [registerCancellable](segmentation_display_state_property_map.IndexedSegmentPropertySource.md#registercancellable)
- [registerDisposer](segmentation_display_state_property_map.IndexedSegmentPropertySource.md#registerdisposer)
- [registerEventListener](segmentation_display_state_property_map.IndexedSegmentPropertySource.md#registereventlistener)
- [unregisterDisposer](segmentation_display_state_property_map.IndexedSegmentPropertySource.md#unregisterdisposer)
- [encodeOptions](segmentation_display_state_property_map.IndexedSegmentPropertySource.md#encodeoptions)

## Constructors

### constructor

• **new IndexedSegmentPropertySource**(`chunkManager`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](chunk_manager_frontend.ChunkManager.md) |
| `options` | [`IndexedSegmentPropertyMapOptions`](../interfaces/segmentation_display_state_property_map.IndexedSegmentPropertyMapOptions.md) |

#### Overrides

[ChunkSource](chunk_manager_frontend.ChunkSource.md).[constructor](chunk_manager_frontend.ChunkSource.md#constructor)

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:73](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/property_map.ts#L73)

## Properties

### OPTIONS

• **OPTIONS**: [`IndexedSegmentPropertyMapOptions`](../interfaces/segmentation_display_state_property_map.IndexedSegmentPropertyMapOptions.md)

#### Overrides

[ChunkSource](chunk_manager_frontend.ChunkSource.md).[OPTIONS](chunk_manager_frontend.ChunkSource.md#options)

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:70](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/property_map.ts#L70)

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

• **chunks**: `Map`<`string`, [`Chunk`](chunk_manager_frontend.Chunk.md)\>

#### Inherited from

[ChunkSource](chunk_manager_frontend.ChunkSource.md).[chunks](chunk_manager_frontend.ChunkSource.md#chunks)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:354](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L354)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[ChunkSource](chunk_manager_frontend.ChunkSource.md).[disposedStacks](chunk_manager_frontend.ChunkSource.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### immediateChunkUpdates

• **immediateChunkUpdates**: `boolean` = `false`

If set to true, chunk updates will be applied to this source immediately, rather than queueing
them.  Sources that dynamically update chunks and need to ensure a consistent order of
processing relative to other messages between the frontend and worker should set this to true.

#### Inherited from

[ChunkSource](chunk_manager_frontend.ChunkSource.md).[immediateChunkUpdates](chunk_manager_frontend.ChunkSource.md#immediatechunkupdates)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:361](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L361)

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

### properties

• **properties**: readonly [`Readonly`](../modules/annotation_annotation_layer_state._internal_.md#readonly)<[`IndexedSegmentProperty`](../interfaces/segmentation_display_state_base.IndexedSegmentProperty.md)\>[]

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:71](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/property_map.ts#L71)

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
| `chunk` | [`Chunk`](chunk_manager_frontend.Chunk.md) |

#### Returns

`void`

#### Inherited from

[ChunkSource](chunk_manager_frontend.ChunkSource.md).[addChunk](chunk_manager_frontend.ChunkSource.md#addchunk)

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

[ChunkSource](chunk_manager_frontend.ChunkSource.md).[addCounterpartRef](chunk_manager_frontend.ChunkSource.md#addcounterpartref)

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`IndexedSegmentPropertySource`](segmentation_display_state_property_map.IndexedSegmentPropertySource.md)

#### Returns

[`IndexedSegmentPropertySource`](segmentation_display_state_property_map.IndexedSegmentPropertySource.md)

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

▸ **getChunk**(`_x`): [`Chunk`](chunk_manager_frontend.Chunk.md)

Default implementation for use with backendOnly chunk sources.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_x` | `any` |

#### Returns

[`Chunk`](chunk_manager_frontend.Chunk.md)

#### Inherited from

[ChunkSource](chunk_manager_frontend.ChunkSource.md).[getChunk](chunk_manager_frontend.ChunkSource.md#getchunk)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:391](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L391)

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

▸ `Static` **encodeOptions**(`options`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IndexedSegmentPropertyMapOptions`](../interfaces/segmentation_display_state_property_map.IndexedSegmentPropertyMapOptions.md) |

#### Returns

`Object`

#### Overrides

[ChunkSource](chunk_manager_frontend.ChunkSource.md).[encodeOptions](chunk_manager_frontend.ChunkSource.md#encodeoptions)

#### Defined in

[src/neuroglancer/segmentation_display_state/property_map.ts:78](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/property_map.ts#L78)
