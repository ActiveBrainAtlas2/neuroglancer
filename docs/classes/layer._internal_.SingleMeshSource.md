[neuroglancer](../README.md) / [Modules](../modules.md) / [layer](../modules/layer.md) / [<internal\>](../modules/layer._internal_.md) / SingleMeshSource

# Class: SingleMeshSource

[layer](../modules/layer.md).[<internal>](../modules/layer._internal_.md).SingleMeshSource

## Hierarchy

- [`C`](layer._internal_.C.md)<[`SingleMeshSourceParametersWithInfo`](layer._internal_.SingleMeshSourceParametersWithInfo.md), { `prototype`: `C`<`any`, `any`\> ; `encodeOptions`: (`options`: { `credentialsProvider`: `undefined` \| [`CredentialsProvider`](layer._internal_.CredentialsProvider.md)<`any`\>  }) => `any`  } & typeof [`ChunkSource`](data_panel_layout._internal_.ChunkSource.md), `this`\> & `C`<`any`, typeof [`ChunkSource`](data_panel_layout._internal_.ChunkSource.md), `this`\> & [`ChunkSource`](data_panel_layout._internal_.ChunkSource.md)<`this`\>

  ↳ **`SingleMeshSource`**

## Table of contents

### Constructors

- [constructor](layer._internal_.SingleMeshSource.md#constructor)

### Properties

- [OPTIONS](layer._internal_.SingleMeshSource.md#options)
- [RPC\_TYPE\_ID](layer._internal_.SingleMeshSource.md#rpc_type_id)
- [attributeTextureFormats](layer._internal_.SingleMeshSource.md#attributetextureformats)
- [chunkManager](layer._internal_.SingleMeshSource.md#chunkmanager)
- [chunks](layer._internal_.SingleMeshSource.md#chunks)
- [credentialsProvider](layer._internal_.SingleMeshSource.md#credentialsprovider)
- [disposedStacks](layer._internal_.SingleMeshSource.md#disposedstacks)
- [immediateChunkUpdates](layer._internal_.SingleMeshSource.md#immediatechunkupdates)
- [isOwner](layer._internal_.SingleMeshSource.md#isowner)
- [key](layer._internal_.SingleMeshSource.md#key)
- [parameters](layer._internal_.SingleMeshSource.md#parameters)
- [refCount](layer._internal_.SingleMeshSource.md#refcount)
- [referencedGeneration](layer._internal_.SingleMeshSource.md#referencedgeneration)
- [rpc](layer._internal_.SingleMeshSource.md#rpc)
- [rpcId](layer._internal_.SingleMeshSource.md#rpcid)
- [unreferencedGeneration](layer._internal_.SingleMeshSource.md#unreferencedgeneration)
- [wasDisposed](layer._internal_.SingleMeshSource.md#wasdisposed)

### Accessors

- [gl](layer._internal_.SingleMeshSource.md#gl)
- [info](layer._internal_.SingleMeshSource.md#info)

### Methods

- [addChunk](layer._internal_.SingleMeshSource.md#addchunk)
- [addCounterpartRef](layer._internal_.SingleMeshSource.md#addcounterpartref)
- [addRef](layer._internal_.SingleMeshSource.md#addref)
- [counterpartRefCountReachedZero](layer._internal_.SingleMeshSource.md#counterpartrefcountreachedzero)
- [deleteChunk](layer._internal_.SingleMeshSource.md#deletechunk)
- [dispose](layer._internal_.SingleMeshSource.md#dispose)
- [disposed](layer._internal_.SingleMeshSource.md#disposed)
- [getChunk](layer._internal_.SingleMeshSource.md#getchunk)
- [initializeCounterpart](layer._internal_.SingleMeshSource.md#initializecounterpart)
- [initializeSharedObject](layer._internal_.SingleMeshSource.md#initializesharedobject)
- [invalidateCache](layer._internal_.SingleMeshSource.md#invalidatecache)
- [ownerDispose](layer._internal_.SingleMeshSource.md#ownerdispose)
- [refCountReachedZero](layer._internal_.SingleMeshSource.md#refcountreachedzero)
- [registerCancellable](layer._internal_.SingleMeshSource.md#registercancellable)
- [registerDisposer](layer._internal_.SingleMeshSource.md#registerdisposer)
- [registerEventListener](layer._internal_.SingleMeshSource.md#registereventlistener)
- [unregisterDisposer](layer._internal_.SingleMeshSource.md#unregisterdisposer)
- [encodeOptions](layer._internal_.SingleMeshSource.md#encodeoptions)

## Constructors

### constructor

• **new SingleMeshSource**(`chunkManager`, `_options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](data_panel_layout._internal_.ChunkManager.md) |
| `_options` | `Object` |

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).constructor

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:363](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L363)

## Properties

### OPTIONS

• **OPTIONS**: { `credentialsProvider`: `undefined` \| [`CredentialsProvider`](layer._internal_.CredentialsProvider.md)<`any`\>  } & { `parameters`: [`SingleMeshSourceParametersWithInfo`](layer._internal_.SingleMeshSourceParametersWithInfo.md)  }

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).OPTIONS

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:416](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L416)

___

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).RPC\_TYPE\_ID

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L245)

___

### attributeTextureFormats

• **attributeTextureFormats**: [`TextureFormat`](layer._internal_.TextureFormat.md)[]

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:317](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/single_mesh/frontend.ts#L317)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](data_panel_layout._internal_.ChunkManager.md)

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).chunkManager

#### Defined in

[src/neuroglancer/credentials_provider/chunk_source_frontend.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/credentials_provider/chunk_source_frontend.ts#L48)

___

### chunks

• **chunks**: `Map`<`string`, [`Chunk`](data_panel_layout._internal_.Chunk.md)\>

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).chunks

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:354](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L354)

___

### credentialsProvider

• **credentialsProvider**: `undefined` \| [`CredentialsProvider`](layer._internal_.CredentialsProvider.md)<`any`\>

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).credentialsProvider

#### Defined in

[src/neuroglancer/credentials_provider/chunk_source_frontend.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/credentials_provider/chunk_source_frontend.ts#L53)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### immediateChunkUpdates

• **immediateChunkUpdates**: `boolean` = `false`

If set to true, chunk updates will be applied to this source immediately, rather than queueing
them.  Sources that dynamically update chunks and need to ensure a consistent order of
processing relative to other messages between the frontend and worker should set this to true.

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).immediateChunkUpdates

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:361](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L361)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).isOwner

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L171)

___

### key

• **key**: `any`

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).key

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:313](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L313)

___

### parameters

• **parameters**: [`SingleMeshSourceParametersWithInfo`](layer._internal_.SingleMeshSourceParametersWithInfo.md)

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).parameters

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:417](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L417)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).referencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](worker_rpc.RPC.md) = `null`

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).rpc

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).rpcId

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L170)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).unreferencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L172)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### gl

• `get` **gl**(): [`GL`](../interfaces/axes_lines._internal_.GL.md)

#### Returns

[`GL`](../interfaces/axes_lines._internal_.GL.md)

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).gl

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:372](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L372)

___

### info

• `get` **info**(): [`SingleMeshInfo`](../interfaces/layer._internal_.SingleMeshInfo.md)

#### Returns

[`SingleMeshInfo`](../interfaces/layer._internal_.SingleMeshInfo.md)

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:319](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/single_mesh/frontend.ts#L319)

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

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).addChunk

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

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).addCounterpartRef

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`SingleMeshSource`](layer._internal_.SingleMeshSource.md)

#### Returns

[`SingleMeshSource`](layer._internal_.SingleMeshSource.md)

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).addRef

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

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).counterpartRefCountReachedZero

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

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).deleteChunk

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:376](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L376)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).dispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).disposed

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L75)

___

### getChunk

▸ **getChunk**(`x`): [`SingleMeshChunk`](layer._internal_.SingleMeshChunk.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

[`SingleMeshChunk`](layer._internal_.SingleMeshChunk.md)

#### Overrides

(WithParameters(WithCredentialsProvider&lt;SpecialProtocolCredentials\&gt;()(ChunkSource), SingleMeshSourceParametersWithInfo)).getChunk

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:323](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/single_mesh/frontend.ts#L323)

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

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).initializeCounterpart

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:423](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L423)

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

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).initializeSharedObject

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L175)

___

### invalidateCache

▸ **invalidateCache**(): `void`

Invalidates the chunk cache.  Operates asynchronously.

#### Returns

`void`

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).invalidateCache

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:398](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L398)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).ownerDispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).refCountReachedZero

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

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).registerCancellable

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

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).registerDisposer

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

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).registerEventListener

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

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L85)

___

### encodeOptions

▸ `Static` **encodeOptions**(`options`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`WithParametersOptions`](../modules/layer._internal_.md#withparametersoptions) |

#### Returns

`any`

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).encodeOptions

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:427](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L427)

▸ `Static` **encodeOptions**(`options`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.credentialsProvider` | `undefined` \| [`CredentialsProvider`](layer._internal_.CredentialsProvider.md)<`any`\> |

#### Returns

`any`

#### Inherited from

(WithParameters(WithCredentialsProvider<SpecialProtocolCredentials\>()(ChunkSource), SingleMeshSourceParametersWithInfo)).encodeOptions

#### Defined in

[src/neuroglancer/credentials_provider/chunk_source_frontend.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/credentials_provider/chunk_source_frontend.ts#L67)

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

[src/neuroglancer/chunk_manager/frontend.ts:402](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L402)
