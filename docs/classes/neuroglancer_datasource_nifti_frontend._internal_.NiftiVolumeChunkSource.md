[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/datasource/nifti/frontend](../modules/neuroglancer_datasource_nifti_frontend.md) / [<internal\>](../modules/neuroglancer_datasource_nifti_frontend._internal_.md) / NiftiVolumeChunkSource

# Class: NiftiVolumeChunkSource

[neuroglancer/datasource/nifti/frontend](../modules/neuroglancer_datasource_nifti_frontend.md).[<internal>](../modules/neuroglancer_datasource_nifti_frontend._internal_.md).NiftiVolumeChunkSource

## Hierarchy

- `C`<[`VolumeSourceParameters`](neuroglancer_datasource_nifti_base.VolumeSourceParameters.md), { `prototype`: `C`<`any`, `any`\> ; `encodeOptions`: (`options`: [`WithCredentialsOptions`](../modules/neuroglancer_credentials_provider_chunk_source_frontend._internal_.md#withcredentialsoptions)) => `any`  } & typeof [`VolumeChunkSource`](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md), `this`\> & `C`<`any`, typeof [`VolumeChunkSource`](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md), `this`\> & [`VolumeChunkSource`](neuroglancer_sliceview_volume_frontend.VolumeChunkSource.md)<`this`\>

  ↳ **`NiftiVolumeChunkSource`**

## Table of contents

### Constructors

- [constructor](neuroglancer_datasource_nifti_frontend._internal_.NiftiVolumeChunkSource.md#constructor)

### Properties

- [OPTIONS](neuroglancer_datasource_nifti_frontend._internal_.NiftiVolumeChunkSource.md#options)
- [RPC\_TYPE\_ID](neuroglancer_datasource_nifti_frontend._internal_.NiftiVolumeChunkSource.md#rpc_type_id)
- [chunkFormatHandler](neuroglancer_datasource_nifti_frontend._internal_.NiftiVolumeChunkSource.md#chunkformathandler)
- [chunkManager](neuroglancer_datasource_nifti_frontend._internal_.NiftiVolumeChunkSource.md#chunkmanager)
- [chunks](neuroglancer_datasource_nifti_frontend._internal_.NiftiVolumeChunkSource.md#chunks)
- [credentialsProvider](neuroglancer_datasource_nifti_frontend._internal_.NiftiVolumeChunkSource.md#credentialsprovider)
- [disposedStacks](neuroglancer_datasource_nifti_frontend._internal_.NiftiVolumeChunkSource.md#disposedstacks)
- [immediateChunkUpdates](neuroglancer_datasource_nifti_frontend._internal_.NiftiVolumeChunkSource.md#immediatechunkupdates)
- [isOwner](neuroglancer_datasource_nifti_frontend._internal_.NiftiVolumeChunkSource.md#isowner)
- [key](neuroglancer_datasource_nifti_frontend._internal_.NiftiVolumeChunkSource.md#key)
- [parameters](neuroglancer_datasource_nifti_frontend._internal_.NiftiVolumeChunkSource.md#parameters)
- [refCount](neuroglancer_datasource_nifti_frontend._internal_.NiftiVolumeChunkSource.md#refcount)
- [referencedGeneration](neuroglancer_datasource_nifti_frontend._internal_.NiftiVolumeChunkSource.md#referencedgeneration)
- [rpc](neuroglancer_datasource_nifti_frontend._internal_.NiftiVolumeChunkSource.md#rpc)
- [rpcId](neuroglancer_datasource_nifti_frontend._internal_.NiftiVolumeChunkSource.md#rpcid)
- [spec](neuroglancer_datasource_nifti_frontend._internal_.NiftiVolumeChunkSource.md#spec)
- [unreferencedGeneration](neuroglancer_datasource_nifti_frontend._internal_.NiftiVolumeChunkSource.md#unreferencedgeneration)
- [wasDisposed](neuroglancer_datasource_nifti_frontend._internal_.NiftiVolumeChunkSource.md#wasdisposed)

### Accessors

- [chunkFormat](neuroglancer_datasource_nifti_frontend._internal_.NiftiVolumeChunkSource.md#chunkformat)
- [gl](neuroglancer_datasource_nifti_frontend._internal_.NiftiVolumeChunkSource.md#gl)

### Methods

- [addChunk](neuroglancer_datasource_nifti_frontend._internal_.NiftiVolumeChunkSource.md#addchunk)
- [addCounterpartRef](neuroglancer_datasource_nifti_frontend._internal_.NiftiVolumeChunkSource.md#addcounterpartref)
- [addRef](neuroglancer_datasource_nifti_frontend._internal_.NiftiVolumeChunkSource.md#addref)
- [counterpartRefCountReachedZero](neuroglancer_datasource_nifti_frontend._internal_.NiftiVolumeChunkSource.md#counterpartrefcountreachedzero)
- [deleteChunk](neuroglancer_datasource_nifti_frontend._internal_.NiftiVolumeChunkSource.md#deletechunk)
- [dispose](neuroglancer_datasource_nifti_frontend._internal_.NiftiVolumeChunkSource.md#dispose)
- [disposed](neuroglancer_datasource_nifti_frontend._internal_.NiftiVolumeChunkSource.md#disposed)
- [getChunk](neuroglancer_datasource_nifti_frontend._internal_.NiftiVolumeChunkSource.md#getchunk)
- [getValueAt](neuroglancer_datasource_nifti_frontend._internal_.NiftiVolumeChunkSource.md#getvalueat)
- [initializeCounterpart](neuroglancer_datasource_nifti_frontend._internal_.NiftiVolumeChunkSource.md#initializecounterpart)
- [initializeSharedObject](neuroglancer_datasource_nifti_frontend._internal_.NiftiVolumeChunkSource.md#initializesharedobject)
- [invalidateCache](neuroglancer_datasource_nifti_frontend._internal_.NiftiVolumeChunkSource.md#invalidatecache)
- [ownerDispose](neuroglancer_datasource_nifti_frontend._internal_.NiftiVolumeChunkSource.md#ownerdispose)
- [refCountReachedZero](neuroglancer_datasource_nifti_frontend._internal_.NiftiVolumeChunkSource.md#refcountreachedzero)
- [registerCancellable](neuroglancer_datasource_nifti_frontend._internal_.NiftiVolumeChunkSource.md#registercancellable)
- [registerDisposer](neuroglancer_datasource_nifti_frontend._internal_.NiftiVolumeChunkSource.md#registerdisposer)
- [registerEventListener](neuroglancer_datasource_nifti_frontend._internal_.NiftiVolumeChunkSource.md#registereventlistener)
- [unregisterDisposer](neuroglancer_datasource_nifti_frontend._internal_.NiftiVolumeChunkSource.md#unregisterdisposer)
- [encodeOptions](neuroglancer_datasource_nifti_frontend._internal_.NiftiVolumeChunkSource.md#encodeoptions)
- [encodeSpec](neuroglancer_datasource_nifti_frontend._internal_.NiftiVolumeChunkSource.md#encodespec)

## Constructors

### constructor

• **new NiftiVolumeChunkSource**(`chunkManager`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md) |
| `options` | `Object` |
| `options.spec` | [`VolumeChunkSpecification`](../interfaces/neuroglancer_sliceview_volume_base.VolumeChunkSpecification.md) |

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).constructor

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:155](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/frontend.ts#L155)

## Properties

### OPTIONS

• **OPTIONS**: [`SliceViewChunkSourceOptions`](../interfaces/neuroglancer_sliceview_frontend.SliceViewChunkSourceOptions.md)<[`VolumeChunkSpecification`](../interfaces/neuroglancer_sliceview_volume_base.VolumeChunkSpecification.md)\> & { `credentialsProvider`: `undefined` \| [`CredentialsProvider`](neuroglancer_credentials_provider.CredentialsProvider.md)<`any`\>  } & { `parameters`: [`VolumeSourceParameters`](neuroglancer_datasource_nifti_base.VolumeSourceParameters.md)  }

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).OPTIONS

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:416](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L416)

___

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).RPC\_TYPE\_ID

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L245)

___

### chunkFormatHandler

• **chunkFormatHandler**: [`ChunkFormatHandler`](../interfaces/neuroglancer_sliceview_volume_frontend.ChunkFormatHandler.md)

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).chunkFormatHandler

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:151](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/frontend.ts#L151)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md)

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).chunkManager

#### Defined in

[src/neuroglancer/credentials_provider/chunk_source_frontend.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/credentials_provider/chunk_source_frontend.ts#L48)

___

### chunks

• **chunks**: `Map`<`string`, [`VolumeChunk`](neuroglancer_sliceview_volume_frontend.VolumeChunk.md)\>

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).chunks

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:451](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/frontend.ts#L451)

___

### credentialsProvider

• **credentialsProvider**: `undefined` \| [`CredentialsProvider`](neuroglancer_credentials_provider.CredentialsProvider.md)<`any`\>

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).credentialsProvider

#### Defined in

[src/neuroglancer/credentials_provider/chunk_source_frontend.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/credentials_provider/chunk_source_frontend.ts#L53)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### immediateChunkUpdates

• **immediateChunkUpdates**: `boolean` = `false`

If set to true, chunk updates will be applied to this source immediately, rather than queueing
them.  Sources that dynamically update chunks and need to ensure a consistent order of
processing relative to other messages between the frontend and worker should set this to true.

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).immediateChunkUpdates

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:361](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L361)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).isOwner

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L171)

___

### key

• **key**: `any`

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).key

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:313](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L313)

___

### parameters

• **parameters**: [`VolumeSourceParameters`](neuroglancer_datasource_nifti_base.VolumeSourceParameters.md)

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).parameters

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:417](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L417)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).referencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](neuroglancer_worker_rpc.RPC.md) = `null`

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).rpc

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).rpcId

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L170)

___

### spec

• **spec**: [`VolumeChunkSpecification`](../interfaces/neuroglancer_sliceview_volume_base.VolumeChunkSpecification.md)

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).spec

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:455](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/frontend.ts#L455)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).unreferencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L172)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### chunkFormat

• `get` **chunkFormat**(): [`ChunkFormat`](../interfaces/neuroglancer_sliceview_volume_frontend.ChunkFormat.md)

#### Returns

[`ChunkFormat`](../interfaces/neuroglancer_sliceview_volume_frontend.ChunkFormat.md)

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).chunkFormat

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/frontend.ts#L175)

___

### gl

• `get` **gl**(): [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Returns

[`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).gl

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

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).addChunk

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

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).addCounterpartRef

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`NiftiVolumeChunkSource`](neuroglancer_datasource_nifti_frontend._internal_.NiftiVolumeChunkSource.md)

#### Returns

[`NiftiVolumeChunkSource`](neuroglancer_datasource_nifti_frontend._internal_.NiftiVolumeChunkSource.md)

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).addRef

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

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).counterpartRefCountReachedZero

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

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).deleteChunk

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:376](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L376)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).dispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).disposed

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L75)

___

### getChunk

▸ **getChunk**(`x`): [`VolumeChunk`](neuroglancer_sliceview_volume_frontend.VolumeChunk.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

[`VolumeChunk`](neuroglancer_sliceview_volume_frontend.VolumeChunk.md)

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).getChunk

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

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).getValueAt

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

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).initializeCounterpart

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:423](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L423)

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

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).initializeSharedObject

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L175)

___

### invalidateCache

▸ **invalidateCache**(): `void`

Invalidates the chunk cache.  Operates asynchronously.

#### Returns

`void`

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).invalidateCache

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:398](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L398)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).ownerDispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).refCountReachedZero

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

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).registerCancellable

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

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).registerDisposer

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

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).registerEventListener

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

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)

___

### encodeOptions

▸ `Static` **encodeOptions**(`options`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`WithParametersOptions`](../modules/neuroglancer_chunk_manager_frontend._internal_.md#withparametersoptions) |

#### Returns

`any`

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).encodeOptions

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:427](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L427)

▸ `Static` **encodeOptions**(`options`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`WithCredentialsOptions`](../modules/neuroglancer_credentials_provider_chunk_source_frontend._internal_.md#withcredentialsoptions) |

#### Returns

`any`

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).encodeOptions

#### Defined in

[src/neuroglancer/credentials_provider/chunk_source_frontend.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/credentials_provider/chunk_source_frontend.ts#L67)

▸ `Static` **encodeOptions**(`options`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SliceViewChunkSourceOptions`](../interfaces/neuroglancer_sliceview_frontend.SliceViewChunkSourceOptions.md)<[`SliceViewChunkSpecification`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\> |

#### Returns

`any`

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).encodeOptions

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

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(VolumeChunkSource), VolumeSourceParameters)).encodeSpec

#### Defined in

[src/neuroglancer/sliceview/volume/frontend.ts:164](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/frontend.ts#L164)
