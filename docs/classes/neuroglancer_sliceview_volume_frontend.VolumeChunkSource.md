[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/volume/frontend](../modules/neuroglancer_sliceview_volume_frontend.md) / VolumeChunkSource

# Class: VolumeChunkSource

[neuroglancer/sliceview/volume/frontend](../modules/neuroglancer_sliceview_volume_frontend.md).VolumeChunkSource

## Hierarchy

- [`SliceViewChunkSource`](neuroglancer_sliceview_frontend.SliceViewChunkSource.md)<[`VolumeChunkSpecification`](../interfaces/neuroglancer_sliceview_volume_base.VolumeChunkSpecification.md), [`VolumeChunk`](neuroglancer_sliceview_volume_frontend.VolumeChunk.md)\>

  ↳ **`VolumeChunkSource`**

  ↳↳ [`Source`](../interfaces/neuroglancer_sliceview_uncompressed_chunk_format._internal_.Source.md)

## Implements

- [`VolumeChunkSource`](../interfaces/neuroglancer_sliceview_volume_base.VolumeChunkSource.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#constructor)

### Properties

- [OPTIONS](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#options)
- [RPC\_TYPE\_ID](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#rpc_type_id)
- [chunkFormatHandler](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#chunkformathandler)
- [chunkManager](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#chunkmanager)
- [chunks](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#chunks)
- [disposedStacks](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#disposedstacks)
- [immediateChunkUpdates](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#immediatechunkupdates)
- [isOwner](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#isowner)
- [key](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#key)
- [refCount](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#refcount)
- [referencedGeneration](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#referencedgeneration)
- [rpc](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#rpc)
- [rpcId](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#rpcid)
- [spec](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#spec)
- [tempChunkGridPosition](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#tempchunkgridposition)
- [tempPositionWithinChunk](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#temppositionwithinchunk)
- [unreferencedGeneration](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#unreferencedgeneration)
- [wasDisposed](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#wasdisposed)

### Accessors

- [chunkFormat](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#chunkformat)
- [gl](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#gl)

### Methods

- [addChunk](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#addchunk)
- [addCounterpartRef](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#addcounterpartref)
- [addRef](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#addref)
- [counterpartRefCountReachedZero](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#counterpartrefcountreachedzero)
- [deleteChunk](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#deletechunk)
- [dispose](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#dispose)
- [disposed](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#disposed)
- [getChunk](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#getchunk)
- [getValueAt](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#getvalueat)
- [initializeCounterpart](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#initializecounterpart)
- [initializeSharedObject](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#initializesharedobject)
- [invalidateCache](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#invalidatecache)
- [ownerDispose](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#ownerdispose)
- [refCountReachedZero](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#refcountreachedzero)
- [registerCancellable](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#registercancellable)
- [registerDisposer](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#registerdisposer)
- [registerEventListener](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#registereventlistener)
- [unregisterDisposer](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#unregisterdisposer)
- [encodeOptions](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#encodeoptions)
- [encodeSpec](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md#encodespec)

## Constructors

### constructor

• **new VolumeChunkSource**(`chunkManager`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md) |
| `options` | `Object` |
| `options.spec` | [`VolumeChunkSpecification`](../interfaces/neuroglancer_sliceview_volume_base.VolumeChunkSpecification.md) |

#### Overrides

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[constructor](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#constructor)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:155](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/frontend.ts#L155)

## Properties

### OPTIONS

• **OPTIONS**: [`SliceViewChunkSourceOptions`](../interfaces/neuroglancer_sliceview_frontend.SliceViewChunkSourceOptions.md)<[`VolumeChunkSpecification`](../interfaces/neuroglancer_sliceview_volume_base.VolumeChunkSpecification.md)\>

#### Inherited from

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[OPTIONS](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#options)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:453](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/frontend.ts#L453)

___

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[RPC_TYPE_ID](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#rpc_type_id)

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L245)

___

### chunkFormatHandler

• **chunkFormatHandler**: [`ChunkFormatHandler`](../interfaces/neuroglancer_sliceview_volume_frontend.ChunkFormatHandler.md)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:151](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/frontend.ts#L151)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md)

#### Inherited from

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[chunkManager](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#chunkmanager)

___

### chunks

• **chunks**: `Map`<`string`, [`VolumeChunk`](neuroglancer_sliceview_volume_frontend.VolumeChunk.md)\>

#### Inherited from

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[chunks](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#chunks)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:451](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/frontend.ts#L451)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[disposedStacks](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### immediateChunkUpdates

• **immediateChunkUpdates**: `boolean` = `false`

If set to true, chunk updates will be applied to this source immediately, rather than queueing
them.  Sources that dynamically update chunks and need to ensure a consistent order of
processing relative to other messages between the frontend and worker should set this to true.

#### Inherited from

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[immediateChunkUpdates](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#immediatechunkupdates)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:361](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L361)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[isOwner](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#isowner)

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L171)

___

### key

• **key**: `any`

#### Inherited from

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[key](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#key)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:408](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L408)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[refCount](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[referencedGeneration](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#referencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](neuroglancer_worker_rpc.RPC.md) = `null`

#### Inherited from

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[rpc](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#rpc)

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[rpcId](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#rpcid)

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L170)

___

### spec

• **spec**: [`VolumeChunkSpecification`](../interfaces/neuroglancer_sliceview_volume_base.VolumeChunkSpecification.md)

#### Implementation of

[VolumeChunkSource](../interfaces/neuroglancer_sliceview_volume_base.VolumeChunkSource.md).[spec](../interfaces/neuroglancer_sliceview_volume_base.VolumeChunkSource.md#spec)

#### Inherited from

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[spec](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#spec)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:455](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/frontend.ts#L455)

___

### tempChunkGridPosition

• `Private` **tempChunkGridPosition**: `Float32Array`

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:152](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/frontend.ts#L152)

___

### tempPositionWithinChunk

• `Private` **tempPositionWithinChunk**: `Uint32Array`

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:153](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/frontend.ts#L153)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[unreferencedGeneration](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#unreferencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L172)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[wasDisposed](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### chunkFormat

• `get` **chunkFormat**(): [`ChunkFormat`](../interfaces/neuroglancer_sliceview_volume_frontend.ChunkFormat.md)

#### Returns

[`ChunkFormat`](../interfaces/neuroglancer_sliceview_volume_frontend.ChunkFormat.md)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/frontend.ts#L175)

___

### gl

• `get` **gl**(): [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Returns

[`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Inherited from

SliceViewChunkSource.gl

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:372](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L372)

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

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[addChunk](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#addchunk)

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

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[addCounterpartRef](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#addcounterpartref)

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`VolumeChunkSource`](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md)

#### Returns

[`VolumeChunkSource`](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md)

#### Inherited from

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[addRef](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#addref)

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

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[counterpartRefCountReachedZero](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#counterpartrefcountreachedzero)

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

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[deleteChunk](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#deletechunk)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:376](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L376)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Implementation of

[VolumeChunkSource](../interfaces/neuroglancer_sliceview_volume_base.VolumeChunkSource.md).[dispose](../interfaces/neuroglancer_sliceview_volume_base.VolumeChunkSource.md#dispose)

#### Inherited from

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[dispose](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#dispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[disposed](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L75)

___

### getChunk

▸ **getChunk**(`x`): [`VolumeChunk`](neuroglancer_sliceview_volume_frontend.VolumeChunk.md)

Default implementation for use with backendOnly chunk sources.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

[`VolumeChunk`](neuroglancer_sliceview_volume_frontend.VolumeChunk.md)

#### Overrides

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[getChunk](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#getchunk)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:221](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/frontend.ts#L221)

___

### getValueAt

▸ **getValueAt**(`chunkPosition`, `channelAccess`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkPosition` | `Float32Array` |
| `channelAccess` | [`ChunkChannelAccessParameters`](../interfaces/neuroglancer_render_coordinate_transform.ChunkChannelAccessParameters.md) |

#### Returns

`any`

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:179](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/frontend.ts#L179)

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

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[initializeCounterpart](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#initializecounterpart)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:476](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/frontend.ts#L476)

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

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L175)

___

### invalidateCache

▸ **invalidateCache**(): `void`

Invalidates the chunk cache.  Operates asynchronously.

#### Returns

`void`

#### Inherited from

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[invalidateCache](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#invalidatecache)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:398](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L398)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[ownerDispose](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#ownerdispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[refCountReachedZero](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#refcountreachedzero)

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

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[registerCancellable](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#registercancellable)

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

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[registerDisposer](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#registerdisposer)

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

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[registerEventListener](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#registereventlistener)

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

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[unregisterDisposer](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)

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

[src/neuroglancer/sliceview/frontend.ts:470](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/frontend.ts#L470)

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
| `baseVoxelOffset` | `number`[] |
| `chunkDataSize` | `number`[] |
| `compressedSegmentationBlockSize` | `undefined` \| `number`[] |
| `dataType` | [`DataType`](../enums/neuroglancer_util_data_type.DataType.md) |
| `lowerVoxelBound` | `number`[] |
| `upperVoxelBound` | `number`[] |

#### Overrides

[SliceViewChunkSource](neuroglancer_sliceview_frontend.SliceViewChunkSource.md).[encodeSpec](neuroglancer_sliceview_frontend.SliceViewChunkSource.md#encodespec)

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:164](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/frontend.ts#L164)
