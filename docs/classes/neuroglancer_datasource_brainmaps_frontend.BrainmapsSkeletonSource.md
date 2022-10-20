[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/datasource/brainmaps/frontend](../modules/neuroglancer_datasource_brainmaps_frontend.md) / BrainmapsSkeletonSource

# Class: BrainmapsSkeletonSource

[neuroglancer/datasource/brainmaps/frontend](../modules/neuroglancer_datasource_brainmaps_frontend.md).BrainmapsSkeletonSource

## Hierarchy

- `C`<[`SkeletonSourceParameters`](neuroglancer_datasource_brainmaps_base.SkeletonSourceParameters.md), (...`args`: `any`[]) => `C`<[`OAuth2Credentials`](../interfaces/neuroglancer_credentials_provider_oauth2.OAuth2Credentials.md), typeof [`SkeletonSource`](neuroglancer_skeleton_frontend.SkeletonSource.md)\> & typeof [`SkeletonSource`](neuroglancer_skeleton_frontend.SkeletonSource.md), `this`\> & `C`<[`OAuth2Credentials`](../interfaces/neuroglancer_credentials_provider_oauth2.OAuth2Credentials.md), typeof [`SkeletonSource`](neuroglancer_skeleton_frontend.SkeletonSource.md), `this`\> & [`SkeletonSource`](neuroglancer_skeleton_frontend.SkeletonSource.md)<`this`\>

  ↳ **`BrainmapsSkeletonSource`**

## Table of contents

### Constructors

- [constructor](neuroglancer_datasource_brainmaps_frontend.BrainmapsSkeletonSource.md#constructor)

### Properties

- [OPTIONS](neuroglancer_datasource_brainmaps_frontend.BrainmapsSkeletonSource.md#options)
- [RPC\_TYPE\_ID](neuroglancer_datasource_brainmaps_frontend.BrainmapsSkeletonSource.md#rpc_type_id)
- [chunkManager](neuroglancer_datasource_brainmaps_frontend.BrainmapsSkeletonSource.md#chunkmanager)
- [chunks](neuroglancer_datasource_brainmaps_frontend.BrainmapsSkeletonSource.md#chunks)
- [credentialsProvider](neuroglancer_datasource_brainmaps_frontend.BrainmapsSkeletonSource.md#credentialsprovider)
- [disposedStacks](neuroglancer_datasource_brainmaps_frontend.BrainmapsSkeletonSource.md#disposedstacks)
- [immediateChunkUpdates](neuroglancer_datasource_brainmaps_frontend.BrainmapsSkeletonSource.md#immediatechunkupdates)
- [isOwner](neuroglancer_datasource_brainmaps_frontend.BrainmapsSkeletonSource.md#isowner)
- [key](neuroglancer_datasource_brainmaps_frontend.BrainmapsSkeletonSource.md#key)
- [parameters](neuroglancer_datasource_brainmaps_frontend.BrainmapsSkeletonSource.md#parameters)
- [refCount](neuroglancer_datasource_brainmaps_frontend.BrainmapsSkeletonSource.md#refcount)
- [referencedGeneration](neuroglancer_datasource_brainmaps_frontend.BrainmapsSkeletonSource.md#referencedgeneration)
- [rpc](neuroglancer_datasource_brainmaps_frontend.BrainmapsSkeletonSource.md#rpc)
- [rpcId](neuroglancer_datasource_brainmaps_frontend.BrainmapsSkeletonSource.md#rpcid)
- [unreferencedGeneration](neuroglancer_datasource_brainmaps_frontend.BrainmapsSkeletonSource.md#unreferencedgeneration)
- [wasDisposed](neuroglancer_datasource_brainmaps_frontend.BrainmapsSkeletonSource.md#wasdisposed)

### Accessors

- [attributeTextureFormats](neuroglancer_datasource_brainmaps_frontend.BrainmapsSkeletonSource.md#attributetextureformats)
- [gl](neuroglancer_datasource_brainmaps_frontend.BrainmapsSkeletonSource.md#gl)
- [vertexAttributes](neuroglancer_datasource_brainmaps_frontend.BrainmapsSkeletonSource.md#vertexattributes)

### Methods

- [addChunk](neuroglancer_datasource_brainmaps_frontend.BrainmapsSkeletonSource.md#addchunk)
- [addCounterpartRef](neuroglancer_datasource_brainmaps_frontend.BrainmapsSkeletonSource.md#addcounterpartref)
- [addRef](neuroglancer_datasource_brainmaps_frontend.BrainmapsSkeletonSource.md#addref)
- [counterpartRefCountReachedZero](neuroglancer_datasource_brainmaps_frontend.BrainmapsSkeletonSource.md#counterpartrefcountreachedzero)
- [deleteChunk](neuroglancer_datasource_brainmaps_frontend.BrainmapsSkeletonSource.md#deletechunk)
- [dispose](neuroglancer_datasource_brainmaps_frontend.BrainmapsSkeletonSource.md#dispose)
- [disposed](neuroglancer_datasource_brainmaps_frontend.BrainmapsSkeletonSource.md#disposed)
- [getChunk](neuroglancer_datasource_brainmaps_frontend.BrainmapsSkeletonSource.md#getchunk)
- [initializeCounterpart](neuroglancer_datasource_brainmaps_frontend.BrainmapsSkeletonSource.md#initializecounterpart)
- [initializeSharedObject](neuroglancer_datasource_brainmaps_frontend.BrainmapsSkeletonSource.md#initializesharedobject)
- [invalidateCache](neuroglancer_datasource_brainmaps_frontend.BrainmapsSkeletonSource.md#invalidatecache)
- [ownerDispose](neuroglancer_datasource_brainmaps_frontend.BrainmapsSkeletonSource.md#ownerdispose)
- [refCountReachedZero](neuroglancer_datasource_brainmaps_frontend.BrainmapsSkeletonSource.md#refcountreachedzero)
- [registerCancellable](neuroglancer_datasource_brainmaps_frontend.BrainmapsSkeletonSource.md#registercancellable)
- [registerDisposer](neuroglancer_datasource_brainmaps_frontend.BrainmapsSkeletonSource.md#registerdisposer)
- [registerEventListener](neuroglancer_datasource_brainmaps_frontend.BrainmapsSkeletonSource.md#registereventlistener)
- [unregisterDisposer](neuroglancer_datasource_brainmaps_frontend.BrainmapsSkeletonSource.md#unregisterdisposer)
- [encodeOptions](neuroglancer_datasource_brainmaps_frontend.BrainmapsSkeletonSource.md#encodeoptions)

## Constructors

### constructor

• **new BrainmapsSkeletonSource**(`chunkManager`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md) |
| `options` | [`SkeletonSourceOptions`](../interfaces/neuroglancer_skeleton_frontend.SkeletonSourceOptions.md) |

#### Inherited from

(WithParameters(WithCredentialsProvider<OAuth2Credentials\>()(SkeletonSource), SkeletonSourceParameters)).constructor

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:657](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/skeleton/frontend.ts#L657)

## Properties

### OPTIONS

• **OPTIONS**: { `credentialsProvider`: [`CredentialsProvider`](neuroglancer_credentials_provider.CredentialsProvider.md)<[`OAuth2Credentials`](../interfaces/neuroglancer_credentials_provider_oauth2.OAuth2Credentials.md)\>  } & { `parameters`: [`SkeletonSourceParameters`](neuroglancer_datasource_brainmaps_base.SkeletonSourceParameters.md)  }

#### Inherited from

(WithParameters(WithCredentialsProvider<OAuth2Credentials\>()(SkeletonSource), SkeletonSourceParameters)).OPTIONS

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:416](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L416)

[src/neuroglancer/credentials_provider/chunk_source_frontend.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/credentials_provider/chunk_source_frontend.ts#L54)

[src/neuroglancer/chunk_manager/frontend.ts:353](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L353)

___

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

(WithParameters(WithCredentialsProvider<OAuth2Credentials\>()(SkeletonSource), SkeletonSourceParameters)).RPC\_TYPE\_ID

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L245)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md)

#### Inherited from

(WithParameters(WithCredentialsProvider<OAuth2Credentials\>()(SkeletonSource), SkeletonSourceParameters)).chunkManager

#### Defined in

[src/neuroglancer/credentials_provider/chunk_source_frontend.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/credentials_provider/chunk_source_frontend.ts#L48)

[src/neuroglancer/chunk_manager/frontend.ts:363](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L363)

___

### chunks

• **chunks**: `Map`<`string`, [`SkeletonChunk`](neuroglancer_skeleton_frontend.SkeletonChunk.md)\>

#### Inherited from

(WithParameters(WithCredentialsProvider<OAuth2Credentials\>()(SkeletonSource), SkeletonSourceParameters)).chunks

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:652](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/skeleton/frontend.ts#L652)

___

### credentialsProvider

• **credentialsProvider**: [`CredentialsProvider`](neuroglancer_credentials_provider.CredentialsProvider.md)<[`OAuth2Credentials`](../interfaces/neuroglancer_credentials_provider_oauth2.OAuth2Credentials.md)\>

#### Inherited from

(WithParameters(WithCredentialsProvider<OAuth2Credentials\>()(SkeletonSource), SkeletonSourceParameters)).credentialsProvider

#### Defined in

[src/neuroglancer/credentials_provider/chunk_source_frontend.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/credentials_provider/chunk_source_frontend.ts#L53)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

(WithParameters(WithCredentialsProvider<OAuth2Credentials\>()(SkeletonSource), SkeletonSourceParameters)).disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### immediateChunkUpdates

• **immediateChunkUpdates**: `boolean` = `false`

If set to true, chunk updates will be applied to this source immediately, rather than queueing
them.  Sources that dynamically update chunks and need to ensure a consistent order of
processing relative to other messages between the frontend and worker should set this to true.

#### Inherited from

(WithParameters(WithCredentialsProvider<OAuth2Credentials\>()(SkeletonSource), SkeletonSourceParameters)).immediateChunkUpdates

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:361](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L361)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

(WithParameters(WithCredentialsProvider<OAuth2Credentials\>()(SkeletonSource), SkeletonSourceParameters)).isOwner

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L171)

___

### key

• **key**: `any`

#### Inherited from

(WithParameters(WithCredentialsProvider<OAuth2Credentials\>()(SkeletonSource), SkeletonSourceParameters)).key

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:313](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L313)

[src/neuroglancer/chunk_manager/frontend.ts:408](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L408)

___

### parameters

• **parameters**: [`SkeletonSourceParameters`](neuroglancer_datasource_brainmaps_base.SkeletonSourceParameters.md)

#### Inherited from

(WithParameters(WithCredentialsProvider<OAuth2Credentials\>()(SkeletonSource), SkeletonSourceParameters)).parameters

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:417](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L417)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

(WithParameters(WithCredentialsProvider<OAuth2Credentials\>()(SkeletonSource), SkeletonSourceParameters)).refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

(WithParameters(WithCredentialsProvider<OAuth2Credentials\>()(SkeletonSource), SkeletonSourceParameters)).referencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](neuroglancer_worker_rpc.RPC.md) = `null`

#### Inherited from

(WithParameters(WithCredentialsProvider<OAuth2Credentials\>()(SkeletonSource), SkeletonSourceParameters)).rpc

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

(WithParameters(WithCredentialsProvider<OAuth2Credentials\>()(SkeletonSource), SkeletonSourceParameters)).rpcId

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L170)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

(WithParameters(WithCredentialsProvider<OAuth2Credentials\>()(SkeletonSource), SkeletonSourceParameters)).unreferencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L172)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

(WithParameters(WithCredentialsProvider<OAuth2Credentials\>()(SkeletonSource), SkeletonSourceParameters)).wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### attributeTextureFormats

• `get` **attributeTextureFormats**(): [`TextureFormat`](neuroglancer_webgl_texture_access.TextureFormat.md)[]

#### Returns

[`TextureFormat`](neuroglancer_webgl_texture_access.TextureFormat.md)[]

#### Inherited from

(WithParameters(WithCredentialsProvider<OAuth2Credentials\>()(SkeletonSource), SkeletonSourceParameters)).attributeTextureFormats

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:643](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/skeleton/frontend.ts#L643)

___

### gl

• `get` **gl**(): [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Returns

[`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Inherited from

(WithParameters(WithCredentialsProvider<OAuth2Credentials\>()(SkeletonSource), SkeletonSourceParameters)).gl

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:372](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L372)

___

### vertexAttributes

• `get` **vertexAttributes**(): `Map`<`string`, [`VertexAttributeInfo`](../interfaces/neuroglancer_skeleton_base.VertexAttributeInfo.md)\>

#### Returns

`Map`<`string`, [`VertexAttributeInfo`](../interfaces/neuroglancer_skeleton_base.VertexAttributeInfo.md)\>

#### Inherited from

(WithParameters(WithCredentialsProvider<OAuth2Credentials\>()(SkeletonSource), SkeletonSourceParameters)).vertexAttributes

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:661](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/skeleton/frontend.ts#L661)

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

(WithParameters(WithCredentialsProvider<OAuth2Credentials\>()(SkeletonSource), SkeletonSourceParameters)).addChunk

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:384](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L384)

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

(WithParameters(WithCredentialsProvider<OAuth2Credentials\>()(SkeletonSource), SkeletonSourceParameters)).addCounterpartRef

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`BrainmapsSkeletonSource`](neuroglancer_datasource_brainmaps_frontend.BrainmapsSkeletonSource.md)

#### Returns

[`BrainmapsSkeletonSource`](neuroglancer_datasource_brainmaps_frontend.BrainmapsSkeletonSource.md)

#### Inherited from

(WithParameters(WithCredentialsProvider<OAuth2Credentials\>()(SkeletonSource), SkeletonSourceParameters)).addRef

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

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

(WithParameters(WithCredentialsProvider<OAuth2Credentials\>()(SkeletonSource), SkeletonSourceParameters)).counterpartRefCountReachedZero

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L234)

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

(WithParameters(WithCredentialsProvider<OAuth2Credentials\>()(SkeletonSource), SkeletonSourceParameters)).deleteChunk

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:376](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L376)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

(WithParameters(WithCredentialsProvider<OAuth2Credentials\>()(SkeletonSource), SkeletonSourceParameters)).dispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

(WithParameters(WithCredentialsProvider<OAuth2Credentials\>()(SkeletonSource), SkeletonSourceParameters)).disposed

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L75)

___

### getChunk

▸ **getChunk**(`x`): [`SkeletonChunk`](neuroglancer_skeleton_frontend.SkeletonChunk.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

[`SkeletonChunk`](neuroglancer_skeleton_frontend.SkeletonChunk.md)

#### Inherited from

(WithParameters(WithCredentialsProvider<OAuth2Credentials\>()(SkeletonSource), SkeletonSourceParameters)).getChunk

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:653](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/skeleton/frontend.ts#L653)

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

(WithParameters(WithCredentialsProvider<OAuth2Credentials\>()(SkeletonSource), SkeletonSourceParameters)).initializeCounterpart

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:423](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L423)

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

(WithParameters(WithCredentialsProvider<OAuth2Credentials\>()(SkeletonSource), SkeletonSourceParameters)).initializeSharedObject

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L175)

___

### invalidateCache

▸ **invalidateCache**(): `void`

Invalidates the chunk cache.  Operates asynchronously.

#### Returns

`void`

#### Inherited from

(WithParameters(WithCredentialsProvider<OAuth2Credentials\>()(SkeletonSource), SkeletonSourceParameters)).invalidateCache

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:398](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L398)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

(WithParameters(WithCredentialsProvider<OAuth2Credentials\>()(SkeletonSource), SkeletonSourceParameters)).ownerDispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

(WithParameters(WithCredentialsProvider<OAuth2Credentials\>()(SkeletonSource), SkeletonSourceParameters)).refCountReachedZero

#### Defined in

[src/neuroglancer/worker_rpc.ts:203](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L203)

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

(WithParameters(WithCredentialsProvider<OAuth2Credentials\>()(SkeletonSource), SkeletonSourceParameters)).registerCancellable

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L100)

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

(WithParameters(WithCredentialsProvider<OAuth2Credentials\>()(SkeletonSource), SkeletonSourceParameters)).registerDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L76)

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

(WithParameters(WithCredentialsProvider<OAuth2Credentials\>()(SkeletonSource), SkeletonSourceParameters)).registerEventListener

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L95)

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

(WithParameters(WithCredentialsProvider<OAuth2Credentials\>()(SkeletonSource), SkeletonSourceParameters)).unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)

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

(WithParameters(WithCredentialsProvider<OAuth2Credentials\>()(SkeletonSource), SkeletonSourceParameters)).encodeOptions

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:427](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L427)

▸ `Static` **encodeOptions**(`options`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.credentialsProvider` | [`CredentialsProvider`](neuroglancer_credentials_provider.CredentialsProvider.md)<[`OAuth2Credentials`](../interfaces/neuroglancer_credentials_provider_oauth2.OAuth2Credentials.md)\> |

#### Returns

`any`

#### Inherited from

(WithParameters(WithCredentialsProvider<OAuth2Credentials\>()(SkeletonSource), SkeletonSourceParameters)).encodeOptions

#### Defined in

[src/neuroglancer/credentials_provider/chunk_source_frontend.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/credentials_provider/chunk_source_frontend.ts#L67)

▸ `Static` **encodeOptions**(`_options`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options` | `Object` |

#### Returns

`Object`

#### Inherited from

(WithParameters(WithCredentialsProvider<OAuth2Credentials\>()(SkeletonSource), SkeletonSourceParameters)).encodeOptions

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:402](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L402)
