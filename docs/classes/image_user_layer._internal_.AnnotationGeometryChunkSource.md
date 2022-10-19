[neuroglancer](../README.md) / [Modules](../modules.md) / [image\_user\_layer](../modules/image_user_layer.md) / [<internal\>](../modules/image_user_layer._internal_.md) / AnnotationGeometryChunkSource

# Class: AnnotationGeometryChunkSource

[image_user_layer](../modules/image_user_layer.md).[<internal>](../modules/image_user_layer._internal_.md).AnnotationGeometryChunkSource

## Hierarchy

- [`SliceViewChunkSource`](data_panel_layout._internal_.SliceViewChunkSource.md)<[`AnnotationGeometryChunkSpecification`](../interfaces/image_user_layer._internal_.AnnotationGeometryChunkSpecification.md), [`AnnotationGeometryChunk`](image_user_layer._internal_.AnnotationGeometryChunk.md)\>

  ↳ **`AnnotationGeometryChunkSource`**

## Table of contents

### Constructors

- [constructor](image_user_layer._internal_.AnnotationGeometryChunkSource.md#constructor)

### Properties

- [OPTIONS](image_user_layer._internal_.AnnotationGeometryChunkSource.md#options)
- [RPC\_TYPE\_ID](image_user_layer._internal_.AnnotationGeometryChunkSource.md#rpc_type_id)
- [chunkManager](image_user_layer._internal_.AnnotationGeometryChunkSource.md#chunkmanager)
- [chunks](image_user_layer._internal_.AnnotationGeometryChunkSource.md#chunks)
- [disposedStacks](image_user_layer._internal_.AnnotationGeometryChunkSource.md#disposedstacks)
- [immediateChunkUpdates](image_user_layer._internal_.AnnotationGeometryChunkSource.md#immediatechunkupdates)
- [isOwner](image_user_layer._internal_.AnnotationGeometryChunkSource.md#isowner)
- [key](image_user_layer._internal_.AnnotationGeometryChunkSource.md#key)
- [multiscaleToChunkTransform](image_user_layer._internal_.AnnotationGeometryChunkSource.md#multiscaletochunktransform)
- [parent](image_user_layer._internal_.AnnotationGeometryChunkSource.md#parent)
- [refCount](image_user_layer._internal_.AnnotationGeometryChunkSource.md#refcount)
- [referencedGeneration](image_user_layer._internal_.AnnotationGeometryChunkSource.md#referencedgeneration)
- [rpc](image_user_layer._internal_.AnnotationGeometryChunkSource.md#rpc)
- [rpcId](image_user_layer._internal_.AnnotationGeometryChunkSource.md#rpcid)
- [spec](image_user_layer._internal_.AnnotationGeometryChunkSource.md#spec)
- [unreferencedGeneration](image_user_layer._internal_.AnnotationGeometryChunkSource.md#unreferencedgeneration)
- [wasDisposed](image_user_layer._internal_.AnnotationGeometryChunkSource.md#wasdisposed)

### Accessors

- [gl](image_user_layer._internal_.AnnotationGeometryChunkSource.md#gl)

### Methods

- [addChunk](image_user_layer._internal_.AnnotationGeometryChunkSource.md#addchunk)
- [addCounterpartRef](image_user_layer._internal_.AnnotationGeometryChunkSource.md#addcounterpartref)
- [addRef](image_user_layer._internal_.AnnotationGeometryChunkSource.md#addref)
- [counterpartRefCountReachedZero](image_user_layer._internal_.AnnotationGeometryChunkSource.md#counterpartrefcountreachedzero)
- [deleteChunk](image_user_layer._internal_.AnnotationGeometryChunkSource.md#deletechunk)
- [dispose](image_user_layer._internal_.AnnotationGeometryChunkSource.md#dispose)
- [disposed](image_user_layer._internal_.AnnotationGeometryChunkSource.md#disposed)
- [getChunk](image_user_layer._internal_.AnnotationGeometryChunkSource.md#getchunk)
- [initializeCounterpart](image_user_layer._internal_.AnnotationGeometryChunkSource.md#initializecounterpart)
- [initializeSharedObject](image_user_layer._internal_.AnnotationGeometryChunkSource.md#initializesharedobject)
- [invalidateCache](image_user_layer._internal_.AnnotationGeometryChunkSource.md#invalidatecache)
- [ownerDispose](image_user_layer._internal_.AnnotationGeometryChunkSource.md#ownerdispose)
- [refCountReachedZero](image_user_layer._internal_.AnnotationGeometryChunkSource.md#refcountreachedzero)
- [registerCancellable](image_user_layer._internal_.AnnotationGeometryChunkSource.md#registercancellable)
- [registerDisposer](image_user_layer._internal_.AnnotationGeometryChunkSource.md#registerdisposer)
- [registerEventListener](image_user_layer._internal_.AnnotationGeometryChunkSource.md#registereventlistener)
- [unregisterDisposer](image_user_layer._internal_.AnnotationGeometryChunkSource.md#unregisterdisposer)
- [encodeOptions](image_user_layer._internal_.AnnotationGeometryChunkSource.md#encodeoptions)
- [encodeSpec](image_user_layer._internal_.AnnotationGeometryChunkSource.md#encodespec)

## Constructors

### constructor

• **new AnnotationGeometryChunkSource**(`chunkManager`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](data_panel_layout._internal_.ChunkManager.md) |
| `options` | [`AnnotationGeometryChunkSourceOptions`](../interfaces/image_user_layer._internal_.AnnotationGeometryChunkSourceOptions.md) |

#### Overrides

[SliceViewChunkSource](data_panel_layout._internal_.SliceViewChunkSource.md).[constructor](data_panel_layout._internal_.SliceViewChunkSource.md#constructor)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:136](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L136)

## Properties

### OPTIONS

• **OPTIONS**: [`AnnotationGeometryChunkSourceOptions`](../interfaces/image_user_layer._internal_.AnnotationGeometryChunkSourceOptions.md)

#### Overrides

[SliceViewChunkSource](data_panel_layout._internal_.SliceViewChunkSource.md).[OPTIONS](data_panel_layout._internal_.SliceViewChunkSource.md#options)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:125](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L125)

___

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

[SliceViewChunkSource](data_panel_layout._internal_.SliceViewChunkSource.md).[RPC_TYPE_ID](data_panel_layout._internal_.SliceViewChunkSource.md#rpc_type_id)

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L245)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](data_panel_layout._internal_.ChunkManager.md)

#### Inherited from

[SliceViewChunkSource](data_panel_layout._internal_.SliceViewChunkSource.md).[chunkManager](data_panel_layout._internal_.SliceViewChunkSource.md#chunkmanager)

___

### chunks

• **chunks**: `Map`<`string`, [`AnnotationGeometryChunk`](image_user_layer._internal_.AnnotationGeometryChunk.md)\>

#### Inherited from

[SliceViewChunkSource](data_panel_layout._internal_.SliceViewChunkSource.md).[chunks](data_panel_layout._internal_.SliceViewChunkSource.md#chunks)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:451](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L451)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[SliceViewChunkSource](data_panel_layout._internal_.SliceViewChunkSource.md).[disposedStacks](data_panel_layout._internal_.SliceViewChunkSource.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### immediateChunkUpdates

• **immediateChunkUpdates**: `boolean` = `true`

If set to true, chunk updates will be applied to this source immediately, rather than queueing
them.  Sources that dynamically update chunks and need to ensure a consistent order of
processing relative to other messages between the frontend and worker should set this to true.

#### Overrides

[SliceViewChunkSource](data_panel_layout._internal_.SliceViewChunkSource.md).[immediateChunkUpdates](data_panel_layout._internal_.SliceViewChunkSource.md#immediatechunkupdates)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:127](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L127)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

[SliceViewChunkSource](data_panel_layout._internal_.SliceViewChunkSource.md).[isOwner](data_panel_layout._internal_.SliceViewChunkSource.md#isowner)

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L171)

___

### key

• **key**: `any`

#### Inherited from

[SliceViewChunkSource](data_panel_layout._internal_.SliceViewChunkSource.md).[key](data_panel_layout._internal_.SliceViewChunkSource.md#key)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:408](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L408)

___

### multiscaleToChunkTransform

• **multiscaleToChunkTransform**: `Float32Array`

Transforms positions in the MultiscaleAnnotationSource coordinate space to grid cell
coordinates.  Equal to the inverse of `this.spec.chunkToMultiscaleTransform`, with rows divided
by `this.spec.chunkDataSize`.

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:134](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L134)

___

### parent

• **parent**: [`MultiscaleAnnotationSource`](image_user_layer._internal_.MultiscaleAnnotationSource.md)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:126](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L126)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[SliceViewChunkSource](data_panel_layout._internal_.SliceViewChunkSource.md).[refCount](data_panel_layout._internal_.SliceViewChunkSource.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

[SliceViewChunkSource](data_panel_layout._internal_.SliceViewChunkSource.md).[referencedGeneration](data_panel_layout._internal_.SliceViewChunkSource.md#referencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](worker_rpc.RPC.md) = `null`

#### Inherited from

[SliceViewChunkSource](data_panel_layout._internal_.SliceViewChunkSource.md).[rpc](data_panel_layout._internal_.SliceViewChunkSource.md#rpc)

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

[SliceViewChunkSource](data_panel_layout._internal_.SliceViewChunkSource.md).[rpcId](data_panel_layout._internal_.SliceViewChunkSource.md#rpcid)

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L170)

___

### spec

• **spec**: [`AnnotationGeometryChunkSpecification`](../interfaces/image_user_layer._internal_.AnnotationGeometryChunkSpecification.md)

#### Inherited from

[SliceViewChunkSource](data_panel_layout._internal_.SliceViewChunkSource.md).[spec](data_panel_layout._internal_.SliceViewChunkSource.md#spec)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:455](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L455)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

[SliceViewChunkSource](data_panel_layout._internal_.SliceViewChunkSource.md).[unreferencedGeneration](data_panel_layout._internal_.SliceViewChunkSource.md#unreferencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L172)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[SliceViewChunkSource](data_panel_layout._internal_.SliceViewChunkSource.md).[wasDisposed](data_panel_layout._internal_.SliceViewChunkSource.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### gl

• `get` **gl**(): [`GL`](../interfaces/axes_lines._internal_.GL.md)

#### Returns

[`GL`](../interfaces/axes_lines._internal_.GL.md)

#### Inherited from

SliceViewChunkSource.gl

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:372](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L372)

## Methods

### addChunk

▸ **addChunk**(`key`, `chunk`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `chunk` | [`AnnotationGeometryChunk`](image_user_layer._internal_.AnnotationGeometryChunk.md) |

#### Returns

`void`

#### Overrides

[SliceViewChunkSource](data_panel_layout._internal_.SliceViewChunkSource.md).[addChunk](data_panel_layout._internal_.SliceViewChunkSource.md#addchunk)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:163](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L163)

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

[SliceViewChunkSource](data_panel_layout._internal_.SliceViewChunkSource.md).[addCounterpartRef](data_panel_layout._internal_.SliceViewChunkSource.md#addcounterpartref)

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`AnnotationGeometryChunkSource`](image_user_layer._internal_.AnnotationGeometryChunkSource.md)

#### Returns

[`AnnotationGeometryChunkSource`](image_user_layer._internal_.AnnotationGeometryChunkSource.md)

#### Inherited from

[SliceViewChunkSource](data_panel_layout._internal_.SliceViewChunkSource.md).[addRef](data_panel_layout._internal_.SliceViewChunkSource.md#addref)

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

[SliceViewChunkSource](data_panel_layout._internal_.SliceViewChunkSource.md).[counterpartRefCountReachedZero](data_panel_layout._internal_.SliceViewChunkSource.md#counterpartrefcountreachedzero)

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

[SliceViewChunkSource](data_panel_layout._internal_.SliceViewChunkSource.md).[deleteChunk](data_panel_layout._internal_.SliceViewChunkSource.md#deletechunk)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:376](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L376)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[SliceViewChunkSource](data_panel_layout._internal_.SliceViewChunkSource.md).[dispose](data_panel_layout._internal_.SliceViewChunkSource.md#dispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[SliceViewChunkSource](data_panel_layout._internal_.SliceViewChunkSource.md).[disposed](data_panel_layout._internal_.SliceViewChunkSource.md#disposed)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:153](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L153)

___

### getChunk

▸ **getChunk**(`x`): [`AnnotationGeometryChunk`](image_user_layer._internal_.AnnotationGeometryChunk.md)

Default implementation for use with backendOnly chunk sources.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

[`AnnotationGeometryChunk`](image_user_layer._internal_.AnnotationGeometryChunk.md)

#### Overrides

[SliceViewChunkSource](data_panel_layout._internal_.SliceViewChunkSource.md).[getChunk](data_panel_layout._internal_.SliceViewChunkSource.md#getchunk)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:168](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L168)

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

#### Overrides

[SliceViewChunkSource](data_panel_layout._internal_.SliceViewChunkSource.md).[initializeCounterpart](data_panel_layout._internal_.SliceViewChunkSource.md#initializecounterpart)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:158](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/annotation/frontend_source.ts#L158)

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

[SliceViewChunkSource](data_panel_layout._internal_.SliceViewChunkSource.md).[initializeSharedObject](data_panel_layout._internal_.SliceViewChunkSource.md#initializesharedobject)

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L175)

___

### invalidateCache

▸ **invalidateCache**(): `void`

Invalidates the chunk cache.  Operates asynchronously.

#### Returns

`void`

#### Inherited from

[SliceViewChunkSource](data_panel_layout._internal_.SliceViewChunkSource.md).[invalidateCache](data_panel_layout._internal_.SliceViewChunkSource.md#invalidatecache)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:398](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L398)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

[SliceViewChunkSource](data_panel_layout._internal_.SliceViewChunkSource.md).[ownerDispose](data_panel_layout._internal_.SliceViewChunkSource.md#ownerdispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[SliceViewChunkSource](data_panel_layout._internal_.SliceViewChunkSource.md).[refCountReachedZero](data_panel_layout._internal_.SliceViewChunkSource.md#refcountreachedzero)

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

[SliceViewChunkSource](data_panel_layout._internal_.SliceViewChunkSource.md).[registerCancellable](data_panel_layout._internal_.SliceViewChunkSource.md#registercancellable)

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

[SliceViewChunkSource](data_panel_layout._internal_.SliceViewChunkSource.md).[registerDisposer](data_panel_layout._internal_.SliceViewChunkSource.md#registerdisposer)

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

[SliceViewChunkSource](data_panel_layout._internal_.SliceViewChunkSource.md).[registerEventListener](data_panel_layout._internal_.SliceViewChunkSource.md#registereventlistener)

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

[SliceViewChunkSource](data_panel_layout._internal_.SliceViewChunkSource.md).[unregisterDisposer](data_panel_layout._internal_.SliceViewChunkSource.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L85)

___

### encodeOptions

▸ `Static` **encodeOptions**(`options`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SliceViewChunkSourceOptions`](../interfaces/data_panel_layout._internal_.SliceViewChunkSourceOptions.md)<[`SliceViewChunkSpecification`](../interfaces/data_panel_layout._internal_.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\> |

#### Returns

`any`

#### Inherited from

[SliceViewChunkSource](data_panel_layout._internal_.SliceViewChunkSource.md).[encodeOptions](data_panel_layout._internal_.SliceViewChunkSource.md#encodeoptions)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:470](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L470)

___

### encodeSpec

▸ `Static` **encodeSpec**(`spec`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec` | [`SliceViewChunkSpecification`](../interfaces/data_panel_layout._internal_.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `chunkDataSize` | `number`[] |
| `lowerVoxelBound` | `number`[] |
| `upperVoxelBound` | `number`[] |

#### Inherited from

[SliceViewChunkSource](data_panel_layout._internal_.SliceViewChunkSource.md).[encodeSpec](data_panel_layout._internal_.SliceViewChunkSource.md#encodespec)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:462](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L462)
