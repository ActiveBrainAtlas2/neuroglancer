[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/datasource/python/frontend](../modules/neuroglancer_datasource_python_frontend.md) / [<internal\>](../modules/neuroglancer_datasource_python_frontend._internal_.md) / PythonMeshSource

# Class: PythonMeshSource

[neuroglancer/datasource/python/frontend](../modules/neuroglancer_datasource_python_frontend.md).[<internal>](../modules/neuroglancer_datasource_python_frontend._internal_.md).PythonMeshSource

## Hierarchy

- [`C`](neuroglancer_datasource_python_frontend._internal_.C.md)<{ `prototype`: `C`<`any`, `any`\> ; `encodeOptions`: (`options`: { `parameters`: [`MeshSourceParameters`](neuroglancer_datasource_python_base.MeshSourceParameters.md)  }) => `any`  } & typeof [`MeshSource`](neuroglancer_mesh_frontend.MeshSource.md), `this`\> & `C`<[`MeshSourceParameters`](neuroglancer_datasource_python_base.MeshSourceParameters.md), typeof [`MeshSource`](neuroglancer_mesh_frontend.MeshSource.md), `this`\> & [`MeshSource`](neuroglancer_mesh_frontend.MeshSource.md)<`this`\>

  ↳ **`PythonMeshSource`**

## Table of contents

### Constructors

- [constructor](neuroglancer_datasource_python_frontend._internal_.PythonMeshSource.md#constructor)

### Properties

- [OPTIONS](neuroglancer_datasource_python_frontend._internal_.PythonMeshSource.md#options)
- [RPC\_TYPE\_ID](neuroglancer_datasource_python_frontend._internal_.PythonMeshSource.md#rpc_type_id)
- [chunkManager](neuroglancer_datasource_python_frontend._internal_.PythonMeshSource.md#chunkmanager)
- [chunks](neuroglancer_datasource_python_frontend._internal_.PythonMeshSource.md#chunks)
- [dataSource](neuroglancer_datasource_python_frontend._internal_.PythonMeshSource.md#datasource)
- [disposedStacks](neuroglancer_datasource_python_frontend._internal_.PythonMeshSource.md#disposedstacks)
- [fragmentSource](neuroglancer_datasource_python_frontend._internal_.PythonMeshSource.md#fragmentsource)
- [generation](neuroglancer_datasource_python_frontend._internal_.PythonMeshSource.md#generation)
- [immediateChunkUpdates](neuroglancer_datasource_python_frontend._internal_.PythonMeshSource.md#immediatechunkupdates)
- [isOwner](neuroglancer_datasource_python_frontend._internal_.PythonMeshSource.md#isowner)
- [key](neuroglancer_datasource_python_frontend._internal_.PythonMeshSource.md#key)
- [parameters](neuroglancer_datasource_python_frontend._internal_.PythonMeshSource.md#parameters)
- [refCount](neuroglancer_datasource_python_frontend._internal_.PythonMeshSource.md#refcount)
- [referencedGeneration](neuroglancer_datasource_python_frontend._internal_.PythonMeshSource.md#referencedgeneration)
- [rpc](neuroglancer_datasource_python_frontend._internal_.PythonMeshSource.md#rpc)
- [rpcId](neuroglancer_datasource_python_frontend._internal_.PythonMeshSource.md#rpcid)
- [unreferencedGeneration](neuroglancer_datasource_python_frontend._internal_.PythonMeshSource.md#unreferencedgeneration)
- [wasDisposed](neuroglancer_datasource_python_frontend._internal_.PythonMeshSource.md#wasdisposed)
- [encodeOptions](neuroglancer_datasource_python_frontend._internal_.PythonMeshSource.md#encodeoptions)

### Accessors

- [gl](neuroglancer_datasource_python_frontend._internal_.PythonMeshSource.md#gl)

### Methods

- [addChunk](neuroglancer_datasource_python_frontend._internal_.PythonMeshSource.md#addchunk)
- [addCounterpartRef](neuroglancer_datasource_python_frontend._internal_.PythonMeshSource.md#addcounterpartref)
- [addRef](neuroglancer_datasource_python_frontend._internal_.PythonMeshSource.md#addref)
- [counterpartRefCountReachedZero](neuroglancer_datasource_python_frontend._internal_.PythonMeshSource.md#counterpartrefcountreachedzero)
- [deleteChunk](neuroglancer_datasource_python_frontend._internal_.PythonMeshSource.md#deletechunk)
- [dispose](neuroglancer_datasource_python_frontend._internal_.PythonMeshSource.md#dispose)
- [disposed](neuroglancer_datasource_python_frontend._internal_.PythonMeshSource.md#disposed)
- [getChunk](neuroglancer_datasource_python_frontend._internal_.PythonMeshSource.md#getchunk)
- [initializeCounterpart](neuroglancer_datasource_python_frontend._internal_.PythonMeshSource.md#initializecounterpart)
- [initializeSharedObject](neuroglancer_datasource_python_frontend._internal_.PythonMeshSource.md#initializesharedobject)
- [invalidateCache](neuroglancer_datasource_python_frontend._internal_.PythonMeshSource.md#invalidatecache)
- [ownerDispose](neuroglancer_datasource_python_frontend._internal_.PythonMeshSource.md#ownerdispose)
- [refCountReachedZero](neuroglancer_datasource_python_frontend._internal_.PythonMeshSource.md#refcountreachedzero)
- [registerCancellable](neuroglancer_datasource_python_frontend._internal_.PythonMeshSource.md#registercancellable)
- [registerDisposer](neuroglancer_datasource_python_frontend._internal_.PythonMeshSource.md#registerdisposer)
- [registerEventListener](neuroglancer_datasource_python_frontend._internal_.PythonMeshSource.md#registereventlistener)
- [unregisterDisposer](neuroglancer_datasource_python_frontend._internal_.PythonMeshSource.md#unregisterdisposer)

## Constructors

### constructor

• **new PythonMeshSource**(`chunkManager`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md) |
| `options` | [`MeshSourceOptions`](../interfaces/neuroglancer_mesh_frontend.MeshSourceOptions.md) |

#### Inherited from

(WithPythonDataSource(WithParameters(MeshSource, MeshSourceParameters))).constructor

#### Defined in

[src/neuroglancer/mesh/frontend.ts:470](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/mesh/frontend.ts#L470)

## Properties

### OPTIONS

• **OPTIONS**: { `parameters`: [`MeshSourceParameters`](neuroglancer_datasource_python_base.MeshSourceParameters.md)  } & { `dataSource`: [`PythonDataSource`](neuroglancer_datasource_python_frontend.PythonDataSource.md) ; `generation`: `number`  }

#### Inherited from

(WithPythonDataSource(WithParameters(MeshSource, MeshSourceParameters))).OPTIONS

#### Defined in

[src/neuroglancer/datasource/python/frontend.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/python/frontend.ts#L56)

___

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

(WithPythonDataSource(WithParameters(MeshSource, MeshSourceParameters))).RPC\_TYPE\_ID

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L245)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md)

#### Inherited from

(WithPythonDataSource(WithParameters(MeshSource, MeshSourceParameters))).chunkManager

___

### chunks

• **chunks**: `Map`<`string`, [`Chunk`](neuroglancer_chunk_manager_frontend.Chunk.md)\> & `Map`<`string`, [`ManifestChunk`](neuroglancer_mesh_frontend.ManifestChunk.md)\>

#### Inherited from

(WithPythonDataSource(WithParameters(MeshSource, MeshSourceParameters))).chunks

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:354](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L354)

___

### dataSource

• **dataSource**: [`PythonDataSource`](neuroglancer_datasource_python_frontend.PythonDataSource.md)

#### Inherited from

(WithPythonDataSource(WithParameters(MeshSource, MeshSourceParameters))).dataSource

#### Defined in

[src/neuroglancer/datasource/python/frontend.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/python/frontend.ts#L57)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

(WithPythonDataSource(WithParameters(MeshSource, MeshSourceParameters))).disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### fragmentSource

• **fragmentSource**: [`FragmentSource`](neuroglancer_mesh_frontend.FragmentSource.md)

#### Inherited from

(WithPythonDataSource(WithParameters(MeshSource, MeshSourceParameters))).fragmentSource

#### Defined in

[src/neuroglancer/mesh/frontend.ts:467](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/mesh/frontend.ts#L467)

___

### generation

• **generation**: `number`

#### Inherited from

(WithPythonDataSource(WithParameters(MeshSource, MeshSourceParameters))).generation

#### Defined in

[src/neuroglancer/datasource/python/frontend.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/python/frontend.ts#L58)

___

### immediateChunkUpdates

• **immediateChunkUpdates**: `boolean` = `false`

If set to true, chunk updates will be applied to this source immediately, rather than queueing
them.  Sources that dynamically update chunks and need to ensure a consistent order of
processing relative to other messages between the frontend and worker should set this to true.

#### Inherited from

(WithPythonDataSource(WithParameters(MeshSource, MeshSourceParameters))).immediateChunkUpdates

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:361](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L361)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

(WithPythonDataSource(WithParameters(MeshSource, MeshSourceParameters))).isOwner

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L171)

___

### key

• **key**: `any`

#### Inherited from

(WithPythonDataSource(WithParameters(MeshSource, MeshSourceParameters))).key

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:313](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L313)

___

### parameters

• **parameters**: [`PythonSourceParameters`](neuroglancer_datasource_python_base.PythonSourceParameters.md) & [`MeshSourceParameters`](neuroglancer_datasource_python_base.MeshSourceParameters.md)

#### Inherited from

(WithPythonDataSource(WithParameters(MeshSource, MeshSourceParameters))).parameters

#### Defined in

[src/neuroglancer/datasource/python/frontend.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/python/frontend.ts#L59)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

(WithPythonDataSource(WithParameters(MeshSource, MeshSourceParameters))).refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

(WithPythonDataSource(WithParameters(MeshSource, MeshSourceParameters))).referencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](neuroglancer_worker_rpc.RPC.md) = `null`

#### Inherited from

(WithPythonDataSource(WithParameters(MeshSource, MeshSourceParameters))).rpc

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

(WithPythonDataSource(WithParameters(MeshSource, MeshSourceParameters))).rpcId

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L170)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

(WithPythonDataSource(WithParameters(MeshSource, MeshSourceParameters))).unreferencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L172)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

(WithPythonDataSource(WithParameters(MeshSource, MeshSourceParameters))).wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

___

### encodeOptions

▪ `Static` **encodeOptions**: (`options`: [`Options`](../modules/neuroglancer_datasource_python_frontend._internal_.md#options)) => `any` & (`options`: { `parameters`: [`MeshSourceParameters`](neuroglancer_datasource_python_base.MeshSourceParameters.md)  }) => `any` & (`_options`: {}) => { `[key: string]`: `any`;  } & (`options`: [`Options`](../modules/neuroglancer_datasource_python_frontend._internal_.md#options)) => `any`

#### Inherited from

(WithPythonDataSource(WithParameters(MeshSource, MeshSourceParameters))).encodeOptions

#### Defined in

[src/neuroglancer/datasource/python/frontend.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/python/frontend.ts#L75)

## Accessors

### gl

• `get` **gl**(): [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Returns

[`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Inherited from

(WithPythonDataSource(WithParameters(MeshSource, MeshSourceParameters))).gl

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

(WithPythonDataSource(WithParameters(MeshSource, MeshSourceParameters))).addChunk

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

(WithPythonDataSource(WithParameters(MeshSource, MeshSourceParameters))).addCounterpartRef

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`PythonMeshSource`](neuroglancer_datasource_python_frontend._internal_.PythonMeshSource.md)

#### Returns

[`PythonMeshSource`](neuroglancer_datasource_python_frontend._internal_.PythonMeshSource.md)

#### Inherited from

(WithPythonDataSource(WithParameters(MeshSource, MeshSourceParameters))).addRef

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

(WithPythonDataSource(WithParameters(MeshSource, MeshSourceParameters))).counterpartRefCountReachedZero

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

(WithPythonDataSource(WithParameters(MeshSource, MeshSourceParameters))).deleteChunk

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:376](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L376)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

(WithPythonDataSource(WithParameters(MeshSource, MeshSourceParameters))).dispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

(WithPythonDataSource(WithParameters(MeshSource, MeshSourceParameters))).disposed

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L75)

___

### getChunk

▸ **getChunk**(`_x`): [`Chunk`](neuroglancer_chunk_manager_frontend.Chunk.md)

Default implementation for use with backendOnly chunk sources.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_x` | `any` |

#### Returns

[`Chunk`](neuroglancer_chunk_manager_frontend.Chunk.md)

#### Inherited from

(WithPythonDataSource(WithParameters(MeshSource, MeshSourceParameters))).getChunk

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:391](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L391)

▸ **getChunk**(`x`): [`ManifestChunk`](neuroglancer_mesh_frontend.ManifestChunk.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

[`ManifestChunk`](neuroglancer_mesh_frontend.ManifestChunk.md)

#### Inherited from

(WithPythonDataSource(WithParameters(MeshSource, MeshSourceParameters))).getChunk

#### Defined in

[src/neuroglancer/mesh/frontend.ts:479](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/mesh/frontend.ts#L479)

___

### initializeCounterpart

▸ **initializeCounterpart**(`rpc`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](neuroglancer_worker_rpc.RPC.md) |
| `options` | `any` |

#### Returns

`void`

#### Inherited from

(WithPythonDataSource(WithParameters(MeshSource, MeshSourceParameters))).initializeCounterpart

#### Defined in

[src/neuroglancer/worker_rpc.ts:182](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L182)

▸ **initializeCounterpart**(`rpc`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](neuroglancer_worker_rpc.RPC.md) |
| `options` | `any` |

#### Returns

`void`

#### Inherited from

(WithPythonDataSource(WithParameters(MeshSource, MeshSourceParameters))).initializeCounterpart

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:367](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L367)

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

(WithPythonDataSource(WithParameters(MeshSource, MeshSourceParameters))).initializeSharedObject

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L175)

___

### invalidateCache

▸ **invalidateCache**(): `void`

Invalidates the chunk cache.  Operates asynchronously.

#### Returns

`void`

#### Inherited from

(WithPythonDataSource(WithParameters(MeshSource, MeshSourceParameters))).invalidateCache

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:398](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L398)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

(WithPythonDataSource(WithParameters(MeshSource, MeshSourceParameters))).ownerDispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

(WithPythonDataSource(WithParameters(MeshSource, MeshSourceParameters))).refCountReachedZero

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

(WithPythonDataSource(WithParameters(MeshSource, MeshSourceParameters))).registerCancellable

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

(WithPythonDataSource(WithParameters(MeshSource, MeshSourceParameters))).registerDisposer

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

(WithPythonDataSource(WithParameters(MeshSource, MeshSourceParameters))).registerEventListener

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

(WithPythonDataSource(WithParameters(MeshSource, MeshSourceParameters))).unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)
