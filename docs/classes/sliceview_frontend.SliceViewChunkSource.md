[neuroglancer](../README.md) / [Modules](../modules.md) / [sliceview/frontend](../modules/sliceview_frontend.md) / SliceViewChunkSource

# Class: SliceViewChunkSource<Spec, ChunkType\>

[sliceview/frontend](../modules/sliceview_frontend.md).SliceViewChunkSource

## Type parameters

| Name | Type |
| :------ | :------ |
| `Spec` | extends [`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md) = [`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md) |
| `ChunkType` | extends [`SliceViewChunk`](sliceview_frontend.SliceViewChunk.md) = [`SliceViewChunk`](sliceview_frontend.SliceViewChunk.md) |

## Hierarchy

- [`ChunkSource`](chunk_manager_frontend.ChunkSource.md)

  ↳ **`SliceViewChunkSource`**

  ↳↳ [`AnnotationGeometryChunkSource`](annotation_frontend_source.AnnotationGeometryChunkSource.md)

  ↳↳ [`VolumeChunkSource`](datasource._internal_.VolumeChunkSource.md)

## Implements

- [`SliceViewChunkSource`](../interfaces/sliceview_base.SliceViewChunkSource.md)

## Table of contents

### Constructors

- [constructor](sliceview_frontend.SliceViewChunkSource.md#constructor)

### Properties

- [OPTIONS](sliceview_frontend.SliceViewChunkSource.md#options)
- [RPC\_TYPE\_ID](sliceview_frontend.SliceViewChunkSource.md#rpc_type_id)
- [chunkManager](sliceview_frontend.SliceViewChunkSource.md#chunkmanager)
- [chunks](sliceview_frontend.SliceViewChunkSource.md#chunks)
- [disposedStacks](sliceview_frontend.SliceViewChunkSource.md#disposedstacks)
- [immediateChunkUpdates](sliceview_frontend.SliceViewChunkSource.md#immediatechunkupdates)
- [isOwner](sliceview_frontend.SliceViewChunkSource.md#isowner)
- [key](sliceview_frontend.SliceViewChunkSource.md#key)
- [refCount](sliceview_frontend.SliceViewChunkSource.md#refcount)
- [referencedGeneration](sliceview_frontend.SliceViewChunkSource.md#referencedgeneration)
- [rpc](sliceview_frontend.SliceViewChunkSource.md#rpc)
- [rpcId](sliceview_frontend.SliceViewChunkSource.md#rpcid)
- [spec](sliceview_frontend.SliceViewChunkSource.md#spec)
- [unreferencedGeneration](sliceview_frontend.SliceViewChunkSource.md#unreferencedgeneration)
- [wasDisposed](sliceview_frontend.SliceViewChunkSource.md#wasdisposed)

### Accessors

- [gl](sliceview_frontend.SliceViewChunkSource.md#gl)

### Methods

- [addChunk](sliceview_frontend.SliceViewChunkSource.md#addchunk)
- [addCounterpartRef](sliceview_frontend.SliceViewChunkSource.md#addcounterpartref)
- [addRef](sliceview_frontend.SliceViewChunkSource.md#addref)
- [counterpartRefCountReachedZero](sliceview_frontend.SliceViewChunkSource.md#counterpartrefcountreachedzero)
- [deleteChunk](sliceview_frontend.SliceViewChunkSource.md#deletechunk)
- [dispose](sliceview_frontend.SliceViewChunkSource.md#dispose)
- [disposed](sliceview_frontend.SliceViewChunkSource.md#disposed)
- [getChunk](sliceview_frontend.SliceViewChunkSource.md#getchunk)
- [initializeCounterpart](sliceview_frontend.SliceViewChunkSource.md#initializecounterpart)
- [initializeSharedObject](sliceview_frontend.SliceViewChunkSource.md#initializesharedobject)
- [invalidateCache](sliceview_frontend.SliceViewChunkSource.md#invalidatecache)
- [ownerDispose](sliceview_frontend.SliceViewChunkSource.md#ownerdispose)
- [refCountReachedZero](sliceview_frontend.SliceViewChunkSource.md#refcountreachedzero)
- [registerCancellable](sliceview_frontend.SliceViewChunkSource.md#registercancellable)
- [registerDisposer](sliceview_frontend.SliceViewChunkSource.md#registerdisposer)
- [registerEventListener](sliceview_frontend.SliceViewChunkSource.md#registereventlistener)
- [unregisterDisposer](sliceview_frontend.SliceViewChunkSource.md#unregisterdisposer)
- [encodeOptions](sliceview_frontend.SliceViewChunkSource.md#encodeoptions)
- [encodeSpec](sliceview_frontend.SliceViewChunkSource.md#encodespec)

## Constructors

### constructor

• **new SliceViewChunkSource**<`Spec`, `ChunkType`\>(`chunkManager`, `options`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Spec` | extends [`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`, `Spec`\> = [`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\> |
| `ChunkType` | extends [`SliceViewChunk`](sliceview_frontend.SliceViewChunk.md)<`ChunkType`\> = [`SliceViewChunk`](sliceview_frontend.SliceViewChunk.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](chunk_manager_frontend.ChunkManager.md) |
| `options` | [`SliceViewChunkSourceOptions`](../interfaces/sliceview_frontend.SliceViewChunkSourceOptions.md)<`Spec`\> |

#### Overrides

[ChunkSource](chunk_manager_frontend.ChunkSource.md).[constructor](chunk_manager_frontend.ChunkSource.md#constructor)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:457](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L457)

## Properties

### OPTIONS

• **OPTIONS**: [`SliceViewChunkSourceOptions`](../interfaces/sliceview_frontend.SliceViewChunkSourceOptions.md)<`Spec`\>

#### Overrides

[ChunkSource](chunk_manager_frontend.ChunkSource.md).[OPTIONS](chunk_manager_frontend.ChunkSource.md#options)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:453](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L453)

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

• **chunks**: `Map`<`string`, `ChunkType`\>

#### Overrides

[ChunkSource](chunk_manager_frontend.ChunkSource.md).[chunks](chunk_manager_frontend.ChunkSource.md#chunks)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:451](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L451)

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

### spec

• **spec**: `Spec`

#### Implementation of

[SliceViewChunkSource](../interfaces/sliceview_base.SliceViewChunkSource.md).[spec](../interfaces/sliceview_base.SliceViewChunkSource.md#spec)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:455](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L455)

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

▸ **addRef**(): [`SliceViewChunkSource`](sliceview_frontend.SliceViewChunkSource.md)<`Spec`, `ChunkType`\>

#### Returns

[`SliceViewChunkSource`](sliceview_frontend.SliceViewChunkSource.md)<`Spec`, `ChunkType`\>

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

#### Implementation of

[SliceViewChunkSource](../interfaces/sliceview_base.SliceViewChunkSource.md).[dispose](../interfaces/sliceview_base.SliceViewChunkSource.md#dispose)

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

▸ **getChunk**(`x`): `any`

Default implementation for use with backendOnly chunk sources.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

`any`

#### Inherited from

[ChunkSource](chunk_manager_frontend.ChunkSource.md).[getChunk](chunk_manager_frontend.ChunkSource.md#getchunk)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:485](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L485)

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

#### Overrides

[ChunkSource](chunk_manager_frontend.ChunkSource.md).[initializeCounterpart](chunk_manager_frontend.ChunkSource.md#initializecounterpart)

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

▸ `Static` **encodeOptions**(`options`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SliceViewChunkSourceOptions`](../interfaces/sliceview_frontend.SliceViewChunkSourceOptions.md)<[`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\> |

#### Returns

`any`

#### Overrides

[ChunkSource](chunk_manager_frontend.ChunkSource.md).[encodeOptions](chunk_manager_frontend.ChunkSource.md#encodeoptions)

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
| `chunkDataSize` | `number`[] |
| `lowerVoxelBound` | `number`[] |
| `upperVoxelBound` | `number`[] |

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:462](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L462)
