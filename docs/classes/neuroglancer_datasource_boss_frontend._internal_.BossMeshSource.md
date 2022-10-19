[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/datasource/boss/frontend](../modules/neuroglancer_datasource_boss_frontend.md) / [<internal\>](../modules/neuroglancer_datasource_boss_frontend._internal_.md) / BossMeshSource

# Class: BossMeshSource

[neuroglancer/datasource/boss/frontend](../modules/neuroglancer_datasource_boss_frontend.md).[<internal>](../modules/neuroglancer_datasource_boss_frontend._internal_.md).BossMeshSource

## Hierarchy

- `C`<[`MeshSourceParameters`](neuroglancer_datasource_boss_base.MeshSourceParameters.md), { `prototype`: `C`<`any`, `any`\> ; `encodeOptions`: (`options`: { `credentialsProvider`: [`CredentialsProvider`](neuroglancer_credentials_provider.CredentialsProvider.md)<`string`\>  }) => `any`  } & typeof [`MeshSource`](neuroglancer_mesh_frontend.MeshSource.md), `this`\> & `C`<`string`, typeof [`MeshSource`](neuroglancer_mesh_frontend.MeshSource.md), `this`\> & [`MeshSource`](neuroglancer_mesh_frontend.MeshSource.md)<`this`\>

  ↳ **`BossMeshSource`**

## Table of contents

### Constructors

- [constructor](neuroglancer_datasource_boss_frontend._internal_.BossMeshSource.md#constructor)

### Properties

- [OPTIONS](neuroglancer_datasource_boss_frontend._internal_.BossMeshSource.md#options)
- [RPC\_TYPE\_ID](neuroglancer_datasource_boss_frontend._internal_.BossMeshSource.md#rpc_type_id)
- [chunkManager](neuroglancer_datasource_boss_frontend._internal_.BossMeshSource.md#chunkmanager)
- [chunks](neuroglancer_datasource_boss_frontend._internal_.BossMeshSource.md#chunks)
- [credentialsProvider](neuroglancer_datasource_boss_frontend._internal_.BossMeshSource.md#credentialsprovider)
- [disposedStacks](neuroglancer_datasource_boss_frontend._internal_.BossMeshSource.md#disposedstacks)
- [fragmentSource](neuroglancer_datasource_boss_frontend._internal_.BossMeshSource.md#fragmentsource)
- [immediateChunkUpdates](neuroglancer_datasource_boss_frontend._internal_.BossMeshSource.md#immediatechunkupdates)
- [isOwner](neuroglancer_datasource_boss_frontend._internal_.BossMeshSource.md#isowner)
- [key](neuroglancer_datasource_boss_frontend._internal_.BossMeshSource.md#key)
- [parameters](neuroglancer_datasource_boss_frontend._internal_.BossMeshSource.md#parameters)
- [refCount](neuroglancer_datasource_boss_frontend._internal_.BossMeshSource.md#refcount)
- [referencedGeneration](neuroglancer_datasource_boss_frontend._internal_.BossMeshSource.md#referencedgeneration)
- [rpc](neuroglancer_datasource_boss_frontend._internal_.BossMeshSource.md#rpc)
- [rpcId](neuroglancer_datasource_boss_frontend._internal_.BossMeshSource.md#rpcid)
- [unreferencedGeneration](neuroglancer_datasource_boss_frontend._internal_.BossMeshSource.md#unreferencedgeneration)
- [wasDisposed](neuroglancer_datasource_boss_frontend._internal_.BossMeshSource.md#wasdisposed)

### Accessors

- [gl](neuroglancer_datasource_boss_frontend._internal_.BossMeshSource.md#gl)

### Methods

- [addChunk](neuroglancer_datasource_boss_frontend._internal_.BossMeshSource.md#addchunk)
- [addCounterpartRef](neuroglancer_datasource_boss_frontend._internal_.BossMeshSource.md#addcounterpartref)
- [addRef](neuroglancer_datasource_boss_frontend._internal_.BossMeshSource.md#addref)
- [counterpartRefCountReachedZero](neuroglancer_datasource_boss_frontend._internal_.BossMeshSource.md#counterpartrefcountreachedzero)
- [deleteChunk](neuroglancer_datasource_boss_frontend._internal_.BossMeshSource.md#deletechunk)
- [dispose](neuroglancer_datasource_boss_frontend._internal_.BossMeshSource.md#dispose)
- [disposed](neuroglancer_datasource_boss_frontend._internal_.BossMeshSource.md#disposed)
- [getChunk](neuroglancer_datasource_boss_frontend._internal_.BossMeshSource.md#getchunk)
- [initializeCounterpart](neuroglancer_datasource_boss_frontend._internal_.BossMeshSource.md#initializecounterpart)
- [initializeSharedObject](neuroglancer_datasource_boss_frontend._internal_.BossMeshSource.md#initializesharedobject)
- [invalidateCache](neuroglancer_datasource_boss_frontend._internal_.BossMeshSource.md#invalidatecache)
- [ownerDispose](neuroglancer_datasource_boss_frontend._internal_.BossMeshSource.md#ownerdispose)
- [refCountReachedZero](neuroglancer_datasource_boss_frontend._internal_.BossMeshSource.md#refcountreachedzero)
- [registerCancellable](neuroglancer_datasource_boss_frontend._internal_.BossMeshSource.md#registercancellable)
- [registerDisposer](neuroglancer_datasource_boss_frontend._internal_.BossMeshSource.md#registerdisposer)
- [registerEventListener](neuroglancer_datasource_boss_frontend._internal_.BossMeshSource.md#registereventlistener)
- [unregisterDisposer](neuroglancer_datasource_boss_frontend._internal_.BossMeshSource.md#unregisterdisposer)
- [encodeOptions](neuroglancer_datasource_boss_frontend._internal_.BossMeshSource.md#encodeoptions)

## Constructors

### constructor

• **new BossMeshSource**(`chunkManager`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md) |
| `options` | [`MeshSourceOptions`](../interfaces/neuroglancer_mesh_frontend.MeshSourceOptions.md) |

#### Inherited from

(WithParameters(WithCredentialsProvider<BossToken\>()(MeshSource), MeshSourceParameters)).constructor

#### Defined in

[src/neuroglancer/mesh/frontend.ts:470](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/mesh/frontend.ts#L470)

## Properties

### OPTIONS

• **OPTIONS**: { `credentialsProvider`: [`CredentialsProvider`](neuroglancer_credentials_provider.CredentialsProvider.md)<`string`\>  } & { `parameters`: [`MeshSourceParameters`](neuroglancer_datasource_boss_base.MeshSourceParameters.md)  }

#### Inherited from

(WithParameters(WithCredentialsProvider<BossToken\>()(MeshSource), MeshSourceParameters)).OPTIONS

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:416](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L416)

___

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

(WithParameters(WithCredentialsProvider<BossToken\>()(MeshSource), MeshSourceParameters)).RPC\_TYPE\_ID

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L245)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md)

#### Inherited from

(WithParameters(WithCredentialsProvider<BossToken\>()(MeshSource), MeshSourceParameters)).chunkManager

#### Defined in

[src/neuroglancer/credentials_provider/chunk_source_frontend.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/credentials_provider/chunk_source_frontend.ts#L48)

___

### chunks

• **chunks**: `Map`<`string`, [`ManifestChunk`](neuroglancer_mesh_frontend.ManifestChunk.md)\>

#### Inherited from

(WithParameters(WithCredentialsProvider<BossToken\>()(MeshSource), MeshSourceParameters)).chunks

#### Defined in

[src/neuroglancer/mesh/frontend.ts:468](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/mesh/frontend.ts#L468)

___

### credentialsProvider

• **credentialsProvider**: [`CredentialsProvider`](neuroglancer_credentials_provider.CredentialsProvider.md)<`string`\>

#### Inherited from

(WithParameters(WithCredentialsProvider<BossToken\>()(MeshSource), MeshSourceParameters)).credentialsProvider

#### Defined in

[src/neuroglancer/credentials_provider/chunk_source_frontend.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/credentials_provider/chunk_source_frontend.ts#L53)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

(WithParameters(WithCredentialsProvider<BossToken\>()(MeshSource), MeshSourceParameters)).disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### fragmentSource

• **fragmentSource**: [`FragmentSource`](neuroglancer_mesh_frontend.FragmentSource.md)

#### Inherited from

(WithParameters(WithCredentialsProvider<BossToken\>()(MeshSource), MeshSourceParameters)).fragmentSource

#### Defined in

[src/neuroglancer/mesh/frontend.ts:467](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/mesh/frontend.ts#L467)

___

### immediateChunkUpdates

• **immediateChunkUpdates**: `boolean` = `false`

If set to true, chunk updates will be applied to this source immediately, rather than queueing
them.  Sources that dynamically update chunks and need to ensure a consistent order of
processing relative to other messages between the frontend and worker should set this to true.

#### Inherited from

(WithParameters(WithCredentialsProvider<BossToken\>()(MeshSource), MeshSourceParameters)).immediateChunkUpdates

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:361](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L361)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

(WithParameters(WithCredentialsProvider<BossToken\>()(MeshSource), MeshSourceParameters)).isOwner

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L171)

___

### key

• **key**: `any`

#### Inherited from

(WithParameters(WithCredentialsProvider<BossToken\>()(MeshSource), MeshSourceParameters)).key

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:313](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L313)

___

### parameters

• **parameters**: [`MeshSourceParameters`](neuroglancer_datasource_boss_base.MeshSourceParameters.md)

#### Inherited from

(WithParameters(WithCredentialsProvider<BossToken\>()(MeshSource), MeshSourceParameters)).parameters

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:417](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L417)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

(WithParameters(WithCredentialsProvider<BossToken\>()(MeshSource), MeshSourceParameters)).refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

(WithParameters(WithCredentialsProvider<BossToken\>()(MeshSource), MeshSourceParameters)).referencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](neuroglancer_worker_rpc.RPC.md) = `null`

#### Inherited from

(WithParameters(WithCredentialsProvider<BossToken\>()(MeshSource), MeshSourceParameters)).rpc

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

(WithParameters(WithCredentialsProvider<BossToken\>()(MeshSource), MeshSourceParameters)).rpcId

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L170)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

(WithParameters(WithCredentialsProvider<BossToken\>()(MeshSource), MeshSourceParameters)).unreferencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L172)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

(WithParameters(WithCredentialsProvider<BossToken\>()(MeshSource), MeshSourceParameters)).wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### gl

• `get` **gl**(): [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Returns

[`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Inherited from

(WithParameters(WithCredentialsProvider<BossToken\>()(MeshSource), MeshSourceParameters)).gl

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

(WithParameters(WithCredentialsProvider<BossToken\>()(MeshSource), MeshSourceParameters)).addChunk

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

(WithParameters(WithCredentialsProvider<BossToken\>()(MeshSource), MeshSourceParameters)).addCounterpartRef

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`BossMeshSource`](neuroglancer_datasource_boss_frontend._internal_.BossMeshSource.md)

#### Returns

[`BossMeshSource`](neuroglancer_datasource_boss_frontend._internal_.BossMeshSource.md)

#### Inherited from

(WithParameters(WithCredentialsProvider<BossToken\>()(MeshSource), MeshSourceParameters)).addRef

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

(WithParameters(WithCredentialsProvider<BossToken\>()(MeshSource), MeshSourceParameters)).counterpartRefCountReachedZero

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

(WithParameters(WithCredentialsProvider<BossToken\>()(MeshSource), MeshSourceParameters)).deleteChunk

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:376](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L376)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

(WithParameters(WithCredentialsProvider<BossToken\>()(MeshSource), MeshSourceParameters)).dispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

(WithParameters(WithCredentialsProvider<BossToken\>()(MeshSource), MeshSourceParameters)).disposed

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L75)

___

### getChunk

▸ **getChunk**(`x`): [`ManifestChunk`](neuroglancer_mesh_frontend.ManifestChunk.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

[`ManifestChunk`](neuroglancer_mesh_frontend.ManifestChunk.md)

#### Inherited from

(WithParameters(WithCredentialsProvider<BossToken\>()(MeshSource), MeshSourceParameters)).getChunk

#### Defined in

[src/neuroglancer/mesh/frontend.ts:479](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/mesh/frontend.ts#L479)

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

(WithParameters(WithCredentialsProvider<BossToken\>()(MeshSource), MeshSourceParameters)).initializeCounterpart

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

(WithParameters(WithCredentialsProvider<BossToken\>()(MeshSource), MeshSourceParameters)).initializeSharedObject

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L175)

___

### invalidateCache

▸ **invalidateCache**(): `void`

Invalidates the chunk cache.  Operates asynchronously.

#### Returns

`void`

#### Inherited from

(WithParameters(WithCredentialsProvider<BossToken\>()(MeshSource), MeshSourceParameters)).invalidateCache

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:398](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L398)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

(WithParameters(WithCredentialsProvider<BossToken\>()(MeshSource), MeshSourceParameters)).ownerDispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

(WithParameters(WithCredentialsProvider<BossToken\>()(MeshSource), MeshSourceParameters)).refCountReachedZero

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

(WithParameters(WithCredentialsProvider<BossToken\>()(MeshSource), MeshSourceParameters)).registerCancellable

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

(WithParameters(WithCredentialsProvider<BossToken\>()(MeshSource), MeshSourceParameters)).registerDisposer

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

(WithParameters(WithCredentialsProvider<BossToken\>()(MeshSource), MeshSourceParameters)).registerEventListener

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

(WithParameters(WithCredentialsProvider<BossToken\>()(MeshSource), MeshSourceParameters)).unregisterDisposer

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

(WithParameters(WithCredentialsProvider<BossToken\>()(MeshSource), MeshSourceParameters)).encodeOptions

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:427](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L427)

▸ `Static` **encodeOptions**(`options`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.credentialsProvider` | [`CredentialsProvider`](neuroglancer_credentials_provider.CredentialsProvider.md)<`string`\> |

#### Returns

`any`

#### Inherited from

(WithParameters(WithCredentialsProvider<BossToken\>()(MeshSource), MeshSourceParameters)).encodeOptions

#### Defined in

[src/neuroglancer/credentials_provider/chunk_source_frontend.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/credentials_provider/chunk_source_frontend.ts#L67)

▸ `Static` **encodeOptions**(`_options`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options` | `Object` |

#### Returns

`Object`

#### Inherited from

(WithParameters(WithCredentialsProvider<BossToken\>()(MeshSource), MeshSourceParameters)).encodeOptions

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:402](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L402)
