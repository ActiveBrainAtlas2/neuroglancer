[neuroglancer](../README.md) / [Modules](../modules.md) / [layer](../modules/layer.md) / [<internal\>](../modules/layer._internal_.md) / VolumeChunkSource

# Class: VolumeChunkSource

[layer](../modules/layer.md).[<internal>](../modules/layer._internal_.md).VolumeChunkSource

## Hierarchy

- [`SliceViewChunkSource`](data_panel_layout._internal_.SliceViewChunkSource.md)<[`VolumeChunkSpecification`](../interfaces/layer._internal_.VolumeChunkSpecification.md), [`VolumeChunk`](layer._internal_.VolumeChunk.md)\>

  ↳ **`VolumeChunkSource`**

## Implements

- [`VolumeChunkSource`](../interfaces/layer._internal_.VolumeChunkSource-1.md)

## Table of contents

### Constructors

- [constructor](layer._internal_.VolumeChunkSource.md#constructor)

### Properties

- [OPTIONS](layer._internal_.VolumeChunkSource.md#options)
- [RPC\_TYPE\_ID](layer._internal_.VolumeChunkSource.md#rpc_type_id)
- [chunkFormatHandler](layer._internal_.VolumeChunkSource.md#chunkformathandler)
- [chunkManager](layer._internal_.VolumeChunkSource.md#chunkmanager)
- [chunks](layer._internal_.VolumeChunkSource.md#chunks)
- [disposedStacks](layer._internal_.VolumeChunkSource.md#disposedstacks)
- [immediateChunkUpdates](layer._internal_.VolumeChunkSource.md#immediatechunkupdates)
- [isOwner](layer._internal_.VolumeChunkSource.md#isowner)
- [key](layer._internal_.VolumeChunkSource.md#key)
- [refCount](layer._internal_.VolumeChunkSource.md#refcount)
- [referencedGeneration](layer._internal_.VolumeChunkSource.md#referencedgeneration)
- [rpc](layer._internal_.VolumeChunkSource.md#rpc)
- [rpcId](layer._internal_.VolumeChunkSource.md#rpcid)
- [spec](layer._internal_.VolumeChunkSource.md#spec)
- [tempChunkGridPosition](layer._internal_.VolumeChunkSource.md#tempchunkgridposition)
- [tempPositionWithinChunk](layer._internal_.VolumeChunkSource.md#temppositionwithinchunk)
- [unreferencedGeneration](layer._internal_.VolumeChunkSource.md#unreferencedgeneration)
- [wasDisposed](layer._internal_.VolumeChunkSource.md#wasdisposed)

### Accessors

- [chunkFormat](layer._internal_.VolumeChunkSource.md#chunkformat)
- [gl](layer._internal_.VolumeChunkSource.md#gl)

### Methods

- [addChunk](layer._internal_.VolumeChunkSource.md#addchunk)
- [addCounterpartRef](layer._internal_.VolumeChunkSource.md#addcounterpartref)
- [addRef](layer._internal_.VolumeChunkSource.md#addref)
- [counterpartRefCountReachedZero](layer._internal_.VolumeChunkSource.md#counterpartrefcountreachedzero)
- [deleteChunk](layer._internal_.VolumeChunkSource.md#deletechunk)
- [dispose](layer._internal_.VolumeChunkSource.md#dispose)
- [disposed](layer._internal_.VolumeChunkSource.md#disposed)
- [getChunk](layer._internal_.VolumeChunkSource.md#getchunk)
- [getValueAt](layer._internal_.VolumeChunkSource.md#getvalueat)
- [initializeCounterpart](layer._internal_.VolumeChunkSource.md#initializecounterpart)
- [initializeSharedObject](layer._internal_.VolumeChunkSource.md#initializesharedobject)
- [invalidateCache](layer._internal_.VolumeChunkSource.md#invalidatecache)
- [ownerDispose](layer._internal_.VolumeChunkSource.md#ownerdispose)
- [refCountReachedZero](layer._internal_.VolumeChunkSource.md#refcountreachedzero)
- [registerCancellable](layer._internal_.VolumeChunkSource.md#registercancellable)
- [registerDisposer](layer._internal_.VolumeChunkSource.md#registerdisposer)
- [registerEventListener](layer._internal_.VolumeChunkSource.md#registereventlistener)
- [unregisterDisposer](layer._internal_.VolumeChunkSource.md#unregisterdisposer)
- [encodeOptions](layer._internal_.VolumeChunkSource.md#encodeoptions)
- [encodeSpec](layer._internal_.VolumeChunkSource.md#encodespec)

## Constructors

### constructor

• **new VolumeChunkSource**(`chunkManager`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](data_panel_layout._internal_.ChunkManager.md) |
| `options` | `Object` |
| `options.spec` | [`VolumeChunkSpecification`](../interfaces/layer._internal_.VolumeChunkSpecification.md) |

#### Overrides

[SliceViewChunkSource](data_panel_layout._internal_.SliceViewChunkSource.md).[constructor](data_panel_layout._internal_.SliceViewChunkSource.md#constructor)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:155](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/volume/frontend.ts#L155)

## Properties

### OPTIONS

• **OPTIONS**: [`SliceViewChunkSourceOptions`](../interfaces/data_panel_layout._internal_.SliceViewChunkSourceOptions.md)<[`VolumeChunkSpecification`](../interfaces/layer._internal_.VolumeChunkSpecification.md)\>

#### Inherited from

[SliceViewChunkSource](data_panel_layout._internal_.SliceViewChunkSource.md).[OPTIONS](data_panel_layout._internal_.SliceViewChunkSource.md#options)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:453](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L453)

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

### chunkFormatHandler

• **chunkFormatHandler**: [`ChunkFormatHandler`](../interfaces/layer._internal_.ChunkFormatHandler.md)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:151](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/volume/frontend.ts#L151)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](data_panel_layout._internal_.ChunkManager.md)

#### Inherited from

[SliceViewChunkSource](data_panel_layout._internal_.SliceViewChunkSource.md).[chunkManager](data_panel_layout._internal_.SliceViewChunkSource.md#chunkmanager)

___

### chunks

• **chunks**: `Map`<`string`, [`VolumeChunk`](layer._internal_.VolumeChunk.md)\>

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

• **immediateChunkUpdates**: `boolean` = `false`

If set to true, chunk updates will be applied to this source immediately, rather than queueing
them.  Sources that dynamically update chunks and need to ensure a consistent order of
processing relative to other messages between the frontend and worker should set this to true.

#### Inherited from

[SliceViewChunkSource](data_panel_layout._internal_.SliceViewChunkSource.md).[immediateChunkUpdates](data_panel_layout._internal_.SliceViewChunkSource.md#immediatechunkupdates)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:361](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L361)

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

• **spec**: [`VolumeChunkSpecification`](../interfaces/layer._internal_.VolumeChunkSpecification.md)

#### Implementation of

[VolumeChunkSource](../interfaces/layer._internal_.VolumeChunkSource-1.md).[spec](../interfaces/layer._internal_.VolumeChunkSource-1.md#spec)

#### Inherited from

[SliceViewChunkSource](data_panel_layout._internal_.SliceViewChunkSource.md).[spec](data_panel_layout._internal_.SliceViewChunkSource.md#spec)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:455](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L455)

___

### tempChunkGridPosition

• `Private` **tempChunkGridPosition**: `Float32Array`

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:152](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/volume/frontend.ts#L152)

___

### tempPositionWithinChunk

• `Private` **tempPositionWithinChunk**: `Uint32Array`

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:153](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/volume/frontend.ts#L153)

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

### chunkFormat

• `get` **chunkFormat**(): [`ChunkFormat`](../interfaces/layer._internal_.ChunkFormat.md)

#### Returns

[`ChunkFormat`](../interfaces/layer._internal_.ChunkFormat.md)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/volume/frontend.ts#L175)

___

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
| `chunk` | [`Chunk`](data_panel_layout._internal_.Chunk.md) |

#### Returns

`void`

#### Inherited from

[SliceViewChunkSource](data_panel_layout._internal_.SliceViewChunkSource.md).[addChunk](data_panel_layout._internal_.SliceViewChunkSource.md#addchunk)

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

[SliceViewChunkSource](data_panel_layout._internal_.SliceViewChunkSource.md).[addCounterpartRef](data_panel_layout._internal_.SliceViewChunkSource.md#addcounterpartref)

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`VolumeChunkSource`](layer._internal_.VolumeChunkSource.md)

#### Returns

[`VolumeChunkSource`](layer._internal_.VolumeChunkSource.md)

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

#### Implementation of

[VolumeChunkSource](../interfaces/layer._internal_.VolumeChunkSource-1.md).[dispose](../interfaces/layer._internal_.VolumeChunkSource-1.md#dispose)

#### Inherited from

[SliceViewChunkSource](data_panel_layout._internal_.SliceViewChunkSource.md).[dispose](data_panel_layout._internal_.SliceViewChunkSource.md#dispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[SliceViewChunkSource](data_panel_layout._internal_.SliceViewChunkSource.md).[disposed](data_panel_layout._internal_.SliceViewChunkSource.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L75)

___

### getChunk

▸ **getChunk**(`x`): [`VolumeChunk`](layer._internal_.VolumeChunk.md)

Default implementation for use with backendOnly chunk sources.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

[`VolumeChunk`](layer._internal_.VolumeChunk.md)

#### Overrides

[SliceViewChunkSource](data_panel_layout._internal_.SliceViewChunkSource.md).[getChunk](data_panel_layout._internal_.SliceViewChunkSource.md#getchunk)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:221](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/volume/frontend.ts#L221)

___

### getValueAt

▸ **getValueAt**(`chunkPosition`, `channelAccess`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkPosition` | `Float32Array` |
| `channelAccess` | [`ChunkChannelAccessParameters`](../interfaces/render_coordinate_transform.ChunkChannelAccessParameters.md) |

#### Returns

`any`

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:179](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/volume/frontend.ts#L179)

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

[SliceViewChunkSource](data_panel_layout._internal_.SliceViewChunkSource.md).[initializeCounterpart](data_panel_layout._internal_.SliceViewChunkSource.md#initializecounterpart)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:476](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L476)

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
| `baseVoxelOffset` | `number`[] |
| `chunkDataSize` | `number`[] |
| `compressedSegmentationBlockSize` | `undefined` \| `number`[] |
| `dataType` | [`DataType`](../enums/image_user_layer._internal_.DataType.md) |
| `lowerVoxelBound` | `number`[] |
| `upperVoxelBound` | `number`[] |

#### Overrides

[SliceViewChunkSource](data_panel_layout._internal_.SliceViewChunkSource.md).[encodeSpec](data_panel_layout._internal_.SliceViewChunkSource.md#encodespec)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:164](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/volume/frontend.ts#L164)
