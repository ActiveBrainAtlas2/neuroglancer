[neuroglancer](../README.md) / [Modules](../modules.md) / [single\_mesh/frontend](../modules/single_mesh_frontend.md) / SingleMeshSource

# Class: SingleMeshSource

[single_mesh/frontend](../modules/single_mesh_frontend.md).SingleMeshSource

## Hierarchy

- `C`<[`SingleMeshSourceParametersWithInfo`](single_mesh_base.SingleMeshSourceParametersWithInfo.md), { `prototype`: `C`<`any`, `any`\> ; `encodeOptions`: (`options`: { `credentialsProvider`: `undefined` \| [`CredentialsProvider`](credentials_provider.CredentialsProvider.md)<`any`\>  }) => `any`  } & typeof [`ChunkSource`](chunk_manager_frontend.ChunkSource.md), `this`\> & `C`<`any`, typeof [`ChunkSource`](chunk_manager_frontend.ChunkSource.md), `this`\> & [`ChunkSource`](chunk_manager_frontend.ChunkSource.md)<`this`\>

  ↳ **`SingleMeshSource`**

## Table of contents

### Constructors

- [constructor](single_mesh_frontend.SingleMeshSource.md#constructor)

### Properties

- [OPTIONS](single_mesh_frontend.SingleMeshSource.md#options)
- [RPC\_TYPE\_ID](single_mesh_frontend.SingleMeshSource.md#rpc_type_id)
- [attributeTextureFormats](single_mesh_frontend.SingleMeshSource.md#attributetextureformats)
- [chunkManager](single_mesh_frontend.SingleMeshSource.md#chunkmanager)
- [chunks](single_mesh_frontend.SingleMeshSource.md#chunks)
- [credentialsProvider](single_mesh_frontend.SingleMeshSource.md#credentialsprovider)
- [disposedStacks](single_mesh_frontend.SingleMeshSource.md#disposedstacks)
- [immediateChunkUpdates](single_mesh_frontend.SingleMeshSource.md#immediatechunkupdates)
- [isOwner](single_mesh_frontend.SingleMeshSource.md#isowner)
- [key](single_mesh_frontend.SingleMeshSource.md#key)
- [parameters](single_mesh_frontend.SingleMeshSource.md#parameters)
- [refCount](single_mesh_frontend.SingleMeshSource.md#refcount)
- [referencedGeneration](single_mesh_frontend.SingleMeshSource.md#referencedgeneration)
- [rpc](single_mesh_frontend.SingleMeshSource.md#rpc)
- [rpcId](single_mesh_frontend.SingleMeshSource.md#rpcid)
- [unreferencedGeneration](single_mesh_frontend.SingleMeshSource.md#unreferencedgeneration)
- [wasDisposed](single_mesh_frontend.SingleMeshSource.md#wasdisposed)

### Accessors

- [gl](single_mesh_frontend.SingleMeshSource.md#gl)
- [info](single_mesh_frontend.SingleMeshSource.md#info)

### Methods

- [addChunk](single_mesh_frontend.SingleMeshSource.md#addchunk)
- [addCounterpartRef](single_mesh_frontend.SingleMeshSource.md#addcounterpartref)
- [addRef](single_mesh_frontend.SingleMeshSource.md#addref)
- [counterpartRefCountReachedZero](single_mesh_frontend.SingleMeshSource.md#counterpartrefcountreachedzero)
- [deleteChunk](single_mesh_frontend.SingleMeshSource.md#deletechunk)
- [dispose](single_mesh_frontend.SingleMeshSource.md#dispose)
- [disposed](single_mesh_frontend.SingleMeshSource.md#disposed)
- [getChunk](single_mesh_frontend.SingleMeshSource.md#getchunk)
- [initializeCounterpart](single_mesh_frontend.SingleMeshSource.md#initializecounterpart)
- [initializeSharedObject](single_mesh_frontend.SingleMeshSource.md#initializesharedobject)
- [invalidateCache](single_mesh_frontend.SingleMeshSource.md#invalidatecache)
- [ownerDispose](single_mesh_frontend.SingleMeshSource.md#ownerdispose)
- [refCountReachedZero](single_mesh_frontend.SingleMeshSource.md#refcountreachedzero)
- [registerCancellable](single_mesh_frontend.SingleMeshSource.md#registercancellable)
- [registerDisposer](single_mesh_frontend.SingleMeshSource.md#registerdisposer)
- [registerEventListener](single_mesh_frontend.SingleMeshSource.md#registereventlistener)
- [unregisterDisposer](single_mesh_frontend.SingleMeshSource.md#unregisterdisposer)
- [encodeOptions](single_mesh_frontend.SingleMeshSource.md#encodeoptions)

## Constructors

### constructor

• **new SingleMeshSource**(`chunkManager`, `_options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](chunk_manager_frontend.ChunkManager.md) |
| `_options` | `Object` |

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).constructor

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:363](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L363)

## Properties

### OPTIONS

• **OPTIONS**: { `credentialsProvider`: `undefined` \| [`CredentialsProvider`](credentials_provider.CredentialsProvider.md)<`any`\>  } & { `parameters`: [`SingleMeshSourceParametersWithInfo`](single_mesh_base.SingleMeshSourceParametersWithInfo.md)  }

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).OPTIONS

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:416](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L416)

___

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).RPC\_TYPE\_ID

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L245)

___

### attributeTextureFormats

• **attributeTextureFormats**: [`TextureFormat`](webgl_texture_access.TextureFormat.md)[]

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:317](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/single_mesh/frontend.ts#L317)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](chunk_manager_frontend.ChunkManager.md)

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).chunkManager

#### Defined in

[src/neuroglancer/credentials_provider/chunk_source_frontend.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/credentials_provider/chunk_source_frontend.ts#L48)

___

### chunks

• **chunks**: `Map`<`string`, [`Chunk`](chunk_manager_frontend.Chunk.md)\>

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).chunks

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:354](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L354)

___

### credentialsProvider

• **credentialsProvider**: `undefined` \| [`CredentialsProvider`](credentials_provider.CredentialsProvider.md)<`any`\>

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).credentialsProvider

#### Defined in

[src/neuroglancer/credentials_provider/chunk_source_frontend.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/credentials_provider/chunk_source_frontend.ts#L53)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### immediateChunkUpdates

• **immediateChunkUpdates**: `boolean` = `false`

If set to true, chunk updates will be applied to this source immediately, rather than queueing
them.  Sources that dynamically update chunks and need to ensure a consistent order of
processing relative to other messages between the frontend and worker should set this to true.

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).immediateChunkUpdates

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:361](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L361)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).isOwner

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L171)

___

### key

• **key**: `any`

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).key

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:313](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L313)

___

### parameters

• **parameters**: [`SingleMeshSourceParametersWithInfo`](single_mesh_base.SingleMeshSourceParametersWithInfo.md)

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).parameters

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:417](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L417)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).referencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](annotation_annotation_layer_state._internal_.RPC.md) = `null`

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).rpc

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).rpcId

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L170)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).unreferencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L172)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### gl

• `get` **gl**(): [`GL`](../interfaces/webgl_context.GL.md)

#### Returns

[`GL`](../interfaces/webgl_context.GL.md)

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).gl

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:372](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L372)

___

### info

• `get` **info**(): [`SingleMeshInfo`](../interfaces/single_mesh_base.SingleMeshInfo.md)

#### Returns

[`SingleMeshInfo`](../interfaces/single_mesh_base.SingleMeshInfo.md)

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:319](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/single_mesh/frontend.ts#L319)

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

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).addChunk

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

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).addCounterpartRef

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`SingleMeshSource`](single_mesh_frontend.SingleMeshSource.md)

#### Returns

[`SingleMeshSource`](single_mesh_frontend.SingleMeshSource.md)

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).addRef

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

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).counterpartRefCountReachedZero

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

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).deleteChunk

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:376](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L376)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).dispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).disposed

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

___

### getChunk

▸ **getChunk**(`x`): [`SingleMeshChunk`](single_mesh_frontend.SingleMeshChunk.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

[`SingleMeshChunk`](single_mesh_frontend.SingleMeshChunk.md)

#### Overrides

(WithParameters(WithCredentialsProvider&lt;SpecialProtocolCredentials\&gt;()(ChunkSource), SingleMeshSourceParametersWithInfo)).getChunk

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:323](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/single_mesh/frontend.ts#L323)

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

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).initializeCounterpart

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:423](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L423)

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

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).initializeSharedObject

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L175)

___

### invalidateCache

▸ **invalidateCache**(): `void`

Invalidates the chunk cache.  Operates asynchronously.

#### Returns

`void`

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).invalidateCache

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:398](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L398)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).ownerDispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).refCountReachedZero

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

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).registerCancellable

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

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).registerDisposer

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

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).registerEventListener

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

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)

___

### encodeOptions

▸ `Static` **encodeOptions**(`options`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`WithParametersOptions`](../modules/chunk_manager_frontend._internal_.md#withparametersoptions) |

#### Returns

`any`

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).encodeOptions

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:427](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L427)

▸ `Static` **encodeOptions**(`options`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.credentialsProvider` | `undefined` \| [`CredentialsProvider`](credentials_provider.CredentialsProvider.md)<`any`\> |

#### Returns

`any`

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).encodeOptions

#### Defined in

[src/neuroglancer/credentials_provider/chunk_source_frontend.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/credentials_provider/chunk_source_frontend.ts#L67)

▸ `Static` **encodeOptions**(`_options`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options` | `Object` |

#### Returns

`Object`

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).encodeOptions

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:402](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L402)
