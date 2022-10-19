[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/frontend\_source](../modules/annotation_frontend_source.md) / AnnotationGeometryChunkSource

# Class: AnnotationGeometryChunkSource

[annotation/frontend_source](../modules/annotation_frontend_source.md).AnnotationGeometryChunkSource

## Hierarchy

- [`SliceViewChunkSource`](sliceview_frontend.SliceViewChunkSource.md)<[`AnnotationGeometryChunkSpecification`](../interfaces/annotation_base.AnnotationGeometryChunkSpecification.md), [`AnnotationGeometryChunk`](annotation_frontend_source.AnnotationGeometryChunk.md)\>

  ↳ **`AnnotationGeometryChunkSource`**

## Table of contents

### Constructors

- [constructor](annotation_frontend_source.AnnotationGeometryChunkSource.md#constructor)

### Properties

- [OPTIONS](annotation_frontend_source.AnnotationGeometryChunkSource.md#options)
- [RPC\_TYPE\_ID](annotation_frontend_source.AnnotationGeometryChunkSource.md#rpc_type_id)
- [chunkManager](annotation_frontend_source.AnnotationGeometryChunkSource.md#chunkmanager)
- [chunks](annotation_frontend_source.AnnotationGeometryChunkSource.md#chunks)
- [disposedStacks](annotation_frontend_source.AnnotationGeometryChunkSource.md#disposedstacks)
- [immediateChunkUpdates](annotation_frontend_source.AnnotationGeometryChunkSource.md#immediatechunkupdates)
- [isOwner](annotation_frontend_source.AnnotationGeometryChunkSource.md#isowner)
- [key](annotation_frontend_source.AnnotationGeometryChunkSource.md#key)
- [multiscaleToChunkTransform](annotation_frontend_source.AnnotationGeometryChunkSource.md#multiscaletochunktransform)
- [parent](annotation_frontend_source.AnnotationGeometryChunkSource.md#parent)
- [refCount](annotation_frontend_source.AnnotationGeometryChunkSource.md#refcount)
- [referencedGeneration](annotation_frontend_source.AnnotationGeometryChunkSource.md#referencedgeneration)
- [rpc](annotation_frontend_source.AnnotationGeometryChunkSource.md#rpc)
- [rpcId](annotation_frontend_source.AnnotationGeometryChunkSource.md#rpcid)
- [spec](annotation_frontend_source.AnnotationGeometryChunkSource.md#spec)
- [unreferencedGeneration](annotation_frontend_source.AnnotationGeometryChunkSource.md#unreferencedgeneration)
- [wasDisposed](annotation_frontend_source.AnnotationGeometryChunkSource.md#wasdisposed)

### Accessors

- [gl](annotation_frontend_source.AnnotationGeometryChunkSource.md#gl)

### Methods

- [addChunk](annotation_frontend_source.AnnotationGeometryChunkSource.md#addchunk)
- [addCounterpartRef](annotation_frontend_source.AnnotationGeometryChunkSource.md#addcounterpartref)
- [addRef](annotation_frontend_source.AnnotationGeometryChunkSource.md#addref)
- [counterpartRefCountReachedZero](annotation_frontend_source.AnnotationGeometryChunkSource.md#counterpartrefcountreachedzero)
- [deleteChunk](annotation_frontend_source.AnnotationGeometryChunkSource.md#deletechunk)
- [dispose](annotation_frontend_source.AnnotationGeometryChunkSource.md#dispose)
- [disposed](annotation_frontend_source.AnnotationGeometryChunkSource.md#disposed)
- [getChunk](annotation_frontend_source.AnnotationGeometryChunkSource.md#getchunk)
- [initializeCounterpart](annotation_frontend_source.AnnotationGeometryChunkSource.md#initializecounterpart)
- [initializeSharedObject](annotation_frontend_source.AnnotationGeometryChunkSource.md#initializesharedobject)
- [invalidateCache](annotation_frontend_source.AnnotationGeometryChunkSource.md#invalidatecache)
- [ownerDispose](annotation_frontend_source.AnnotationGeometryChunkSource.md#ownerdispose)
- [refCountReachedZero](annotation_frontend_source.AnnotationGeometryChunkSource.md#refcountreachedzero)
- [registerCancellable](annotation_frontend_source.AnnotationGeometryChunkSource.md#registercancellable)
- [registerDisposer](annotation_frontend_source.AnnotationGeometryChunkSource.md#registerdisposer)
- [registerEventListener](annotation_frontend_source.AnnotationGeometryChunkSource.md#registereventlistener)
- [unregisterDisposer](annotation_frontend_source.AnnotationGeometryChunkSource.md#unregisterdisposer)
- [encodeOptions](annotation_frontend_source.AnnotationGeometryChunkSource.md#encodeoptions)
- [encodeSpec](annotation_frontend_source.AnnotationGeometryChunkSource.md#encodespec)

## Constructors

### constructor

• **new AnnotationGeometryChunkSource**(`chunkManager`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](chunk_manager_frontend.ChunkManager.md) |
| `options` | [`AnnotationGeometryChunkSourceOptions`](../interfaces/annotation_frontend_source.AnnotationGeometryChunkSourceOptions.md) |

#### Overrides

[SliceViewChunkSource](sliceview_frontend.SliceViewChunkSource.md).[constructor](sliceview_frontend.SliceViewChunkSource.md#constructor)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:136](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L136)

## Properties

### OPTIONS

• **OPTIONS**: [`AnnotationGeometryChunkSourceOptions`](../interfaces/annotation_frontend_source.AnnotationGeometryChunkSourceOptions.md)

#### Overrides

[SliceViewChunkSource](sliceview_frontend.SliceViewChunkSource.md).[OPTIONS](sliceview_frontend.SliceViewChunkSource.md#options)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:125](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L125)

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

### chunkManager

• **chunkManager**: [`ChunkManager`](chunk_manager_frontend.ChunkManager.md)

#### Inherited from

[SliceViewChunkSource](sliceview_frontend.SliceViewChunkSource.md).[chunkManager](sliceview_frontend.SliceViewChunkSource.md#chunkmanager)

___

### chunks

• **chunks**: `Map`<`string`, [`AnnotationGeometryChunk`](annotation_frontend_source.AnnotationGeometryChunk.md)\>

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

• **immediateChunkUpdates**: `boolean` = `true`

If set to true, chunk updates will be applied to this source immediately, rather than queueing
them.  Sources that dynamically update chunks and need to ensure a consistent order of
processing relative to other messages between the frontend and worker should set this to true.

#### Overrides

[SliceViewChunkSource](sliceview_frontend.SliceViewChunkSource.md).[immediateChunkUpdates](sliceview_frontend.SliceViewChunkSource.md#immediatechunkupdates)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:127](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L127)

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

### multiscaleToChunkTransform

• **multiscaleToChunkTransform**: `Float32Array`

Transforms positions in the MultiscaleAnnotationSource coordinate space to grid cell
coordinates.  Equal to the inverse of `this.spec.chunkToMultiscaleTransform`, with rows divided
by `this.spec.chunkDataSize`.

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:134](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L134)

___

### parent

• **parent**: [`MultiscaleAnnotationSource`](annotation_frontend_source.MultiscaleAnnotationSource.md)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:126](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L126)

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

• **spec**: [`AnnotationGeometryChunkSpecification`](../interfaces/annotation_base.AnnotationGeometryChunkSpecification.md)

#### Inherited from

[SliceViewChunkSource](sliceview_frontend.SliceViewChunkSource.md).[spec](sliceview_frontend.SliceViewChunkSource.md#spec)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:455](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L455)

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
| `chunk` | [`AnnotationGeometryChunk`](annotation_frontend_source.AnnotationGeometryChunk.md) |

#### Returns

`void`

#### Overrides

[SliceViewChunkSource](sliceview_frontend.SliceViewChunkSource.md).[addChunk](sliceview_frontend.SliceViewChunkSource.md#addchunk)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:163](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L163)

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

▸ **addRef**(): [`AnnotationGeometryChunkSource`](annotation_frontend_source.AnnotationGeometryChunkSource.md)

#### Returns

[`AnnotationGeometryChunkSource`](annotation_frontend_source.AnnotationGeometryChunkSource.md)

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

#### Inherited from

[SliceViewChunkSource](sliceview_frontend.SliceViewChunkSource.md).[dispose](sliceview_frontend.SliceViewChunkSource.md#dispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[SliceViewChunkSource](sliceview_frontend.SliceViewChunkSource.md).[disposed](sliceview_frontend.SliceViewChunkSource.md#disposed)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:153](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L153)

___

### getChunk

▸ **getChunk**(`x`): [`AnnotationGeometryChunk`](annotation_frontend_source.AnnotationGeometryChunk.md)

Default implementation for use with backendOnly chunk sources.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

[`AnnotationGeometryChunk`](annotation_frontend_source.AnnotationGeometryChunk.md)

#### Overrides

[SliceViewChunkSource](sliceview_frontend.SliceViewChunkSource.md).[getChunk](sliceview_frontend.SliceViewChunkSource.md#getchunk)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:168](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L168)

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

[SliceViewChunkSource](sliceview_frontend.SliceViewChunkSource.md).[initializeCounterpart](sliceview_frontend.SliceViewChunkSource.md#initializecounterpart)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:158](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L158)

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
| `chunkDataSize` | `number`[] |
| `lowerVoxelBound` | `number`[] |
| `upperVoxelBound` | `number`[] |

#### Inherited from

[SliceViewChunkSource](sliceview_frontend.SliceViewChunkSource.md).[encodeSpec](sliceview_frontend.SliceViewChunkSource.md#encodespec)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:462](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L462)
