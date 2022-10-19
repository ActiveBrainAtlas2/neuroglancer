[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/datasource/python/frontend](../modules/neuroglancer_datasource_python_frontend.md) / PythonSkeletonSource

# Class: PythonSkeletonSource

[neuroglancer/datasource/python/frontend](../modules/neuroglancer_datasource_python_frontend.md).PythonSkeletonSource

## Hierarchy

- [`C`](neuroglancer_datasource_python_frontend._internal_.C.md)<{ `prototype`: `C`<`any`, `any`\> ; `encodeOptions`: (`options`: { `parameters`: [`SkeletonSourceParameters`](neuroglancer_datasource_python_base.SkeletonSourceParameters.md)  }) => `any`  } & typeof [`SkeletonSource`](neuroglancer_skeleton_frontend.SkeletonSource.md), `this`\> & `C`<[`SkeletonSourceParameters`](neuroglancer_datasource_python_base.SkeletonSourceParameters.md), typeof [`SkeletonSource`](neuroglancer_skeleton_frontend.SkeletonSource.md), `this`\> & [`SkeletonSource`](neuroglancer_skeleton_frontend.SkeletonSource.md)<`this`\>

  ↳ **`PythonSkeletonSource`**

## Table of contents

### Constructors

- [constructor](neuroglancer_datasource_python_frontend.PythonSkeletonSource.md#constructor)

### Properties

- [OPTIONS](neuroglancer_datasource_python_frontend.PythonSkeletonSource.md#options)
- [RPC\_TYPE\_ID](neuroglancer_datasource_python_frontend.PythonSkeletonSource.md#rpc_type_id)
- [chunkManager](neuroglancer_datasource_python_frontend.PythonSkeletonSource.md#chunkmanager)
- [chunks](neuroglancer_datasource_python_frontend.PythonSkeletonSource.md#chunks)
- [dataSource](neuroglancer_datasource_python_frontend.PythonSkeletonSource.md#datasource)
- [disposedStacks](neuroglancer_datasource_python_frontend.PythonSkeletonSource.md#disposedstacks)
- [generation](neuroglancer_datasource_python_frontend.PythonSkeletonSource.md#generation)
- [immediateChunkUpdates](neuroglancer_datasource_python_frontend.PythonSkeletonSource.md#immediatechunkupdates)
- [isOwner](neuroglancer_datasource_python_frontend.PythonSkeletonSource.md#isowner)
- [key](neuroglancer_datasource_python_frontend.PythonSkeletonSource.md#key)
- [parameters](neuroglancer_datasource_python_frontend.PythonSkeletonSource.md#parameters)
- [refCount](neuroglancer_datasource_python_frontend.PythonSkeletonSource.md#refcount)
- [referencedGeneration](neuroglancer_datasource_python_frontend.PythonSkeletonSource.md#referencedgeneration)
- [rpc](neuroglancer_datasource_python_frontend.PythonSkeletonSource.md#rpc)
- [rpcId](neuroglancer_datasource_python_frontend.PythonSkeletonSource.md#rpcid)
- [unreferencedGeneration](neuroglancer_datasource_python_frontend.PythonSkeletonSource.md#unreferencedgeneration)
- [wasDisposed](neuroglancer_datasource_python_frontend.PythonSkeletonSource.md#wasdisposed)
- [encodeOptions](neuroglancer_datasource_python_frontend.PythonSkeletonSource.md#encodeoptions)

### Accessors

- [attributeTextureFormats](neuroglancer_datasource_python_frontend.PythonSkeletonSource.md#attributetextureformats)
- [gl](neuroglancer_datasource_python_frontend.PythonSkeletonSource.md#gl)
- [vertexAttributes](neuroglancer_datasource_python_frontend.PythonSkeletonSource.md#vertexattributes)

### Methods

- [addChunk](neuroglancer_datasource_python_frontend.PythonSkeletonSource.md#addchunk)
- [addCounterpartRef](neuroglancer_datasource_python_frontend.PythonSkeletonSource.md#addcounterpartref)
- [addRef](neuroglancer_datasource_python_frontend.PythonSkeletonSource.md#addref)
- [counterpartRefCountReachedZero](neuroglancer_datasource_python_frontend.PythonSkeletonSource.md#counterpartrefcountreachedzero)
- [deleteChunk](neuroglancer_datasource_python_frontend.PythonSkeletonSource.md#deletechunk)
- [dispose](neuroglancer_datasource_python_frontend.PythonSkeletonSource.md#dispose)
- [disposed](neuroglancer_datasource_python_frontend.PythonSkeletonSource.md#disposed)
- [getChunk](neuroglancer_datasource_python_frontend.PythonSkeletonSource.md#getchunk)
- [initializeCounterpart](neuroglancer_datasource_python_frontend.PythonSkeletonSource.md#initializecounterpart)
- [initializeSharedObject](neuroglancer_datasource_python_frontend.PythonSkeletonSource.md#initializesharedobject)
- [invalidateCache](neuroglancer_datasource_python_frontend.PythonSkeletonSource.md#invalidatecache)
- [ownerDispose](neuroglancer_datasource_python_frontend.PythonSkeletonSource.md#ownerdispose)
- [refCountReachedZero](neuroglancer_datasource_python_frontend.PythonSkeletonSource.md#refcountreachedzero)
- [registerCancellable](neuroglancer_datasource_python_frontend.PythonSkeletonSource.md#registercancellable)
- [registerDisposer](neuroglancer_datasource_python_frontend.PythonSkeletonSource.md#registerdisposer)
- [registerEventListener](neuroglancer_datasource_python_frontend.PythonSkeletonSource.md#registereventlistener)
- [unregisterDisposer](neuroglancer_datasource_python_frontend.PythonSkeletonSource.md#unregisterdisposer)

## Constructors

### constructor

• **new PythonSkeletonSource**(`chunkManager`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md) |
| `options` | [`SkeletonSourceOptions`](../interfaces/neuroglancer_skeleton_frontend.SkeletonSourceOptions.md) |

#### Inherited from

(WithPythonDataSource(WithParameters(SkeletonSource, SkeletonSourceParameters))).constructor

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:657](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L657)

## Properties

### OPTIONS

• **OPTIONS**: { `parameters`: [`SkeletonSourceParameters`](neuroglancer_datasource_python_base.SkeletonSourceParameters.md)  } & { `dataSource`: [`PythonDataSource`](neuroglancer_datasource_python_frontend.PythonDataSource.md) ; `generation`: `number`  }

#### Inherited from

(WithPythonDataSource(WithParameters(SkeletonSource, SkeletonSourceParameters))).OPTIONS

#### Defined in

[src/neuroglancer/datasource/python/frontend.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/python/frontend.ts#L56)

___

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

(WithPythonDataSource(WithParameters(SkeletonSource, SkeletonSourceParameters))).RPC\_TYPE\_ID

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L245)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md)

#### Inherited from

(WithPythonDataSource(WithParameters(SkeletonSource, SkeletonSourceParameters))).chunkManager

___

### chunks

• **chunks**: `Map`<`string`, [`Chunk`](neuroglancer_chunk_manager_frontend.Chunk.md)\> & `Map`<`string`, [`SkeletonChunk`](neuroglancer_skeleton_frontend.SkeletonChunk.md)\>

#### Inherited from

(WithPythonDataSource(WithParameters(SkeletonSource, SkeletonSourceParameters))).chunks

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:354](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L354)

___

### dataSource

• **dataSource**: [`PythonDataSource`](neuroglancer_datasource_python_frontend.PythonDataSource.md)

#### Inherited from

(WithPythonDataSource(WithParameters(SkeletonSource, SkeletonSourceParameters))).dataSource

#### Defined in

[src/neuroglancer/datasource/python/frontend.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/python/frontend.ts#L57)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

(WithPythonDataSource(WithParameters(SkeletonSource, SkeletonSourceParameters))).disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### generation

• **generation**: `number`

#### Inherited from

(WithPythonDataSource(WithParameters(SkeletonSource, SkeletonSourceParameters))).generation

#### Defined in

[src/neuroglancer/datasource/python/frontend.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/python/frontend.ts#L58)

___

### immediateChunkUpdates

• **immediateChunkUpdates**: `boolean` = `false`

If set to true, chunk updates will be applied to this source immediately, rather than queueing
them.  Sources that dynamically update chunks and need to ensure a consistent order of
processing relative to other messages between the frontend and worker should set this to true.

#### Inherited from

(WithPythonDataSource(WithParameters(SkeletonSource, SkeletonSourceParameters))).immediateChunkUpdates

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:361](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L361)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

(WithPythonDataSource(WithParameters(SkeletonSource, SkeletonSourceParameters))).isOwner

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L171)

___

### key

• **key**: `any`

#### Inherited from

(WithPythonDataSource(WithParameters(SkeletonSource, SkeletonSourceParameters))).key

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:313](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L313)

___

### parameters

• **parameters**: [`PythonSourceParameters`](neuroglancer_datasource_python_base.PythonSourceParameters.md) & [`SkeletonSourceParameters`](neuroglancer_datasource_python_base.SkeletonSourceParameters.md)

#### Inherited from

(WithPythonDataSource(WithParameters(SkeletonSource, SkeletonSourceParameters))).parameters

#### Defined in

[src/neuroglancer/datasource/python/frontend.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/python/frontend.ts#L59)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

(WithPythonDataSource(WithParameters(SkeletonSource, SkeletonSourceParameters))).refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

(WithPythonDataSource(WithParameters(SkeletonSource, SkeletonSourceParameters))).referencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](neuroglancer_worker_rpc.RPC.md) = `null`

#### Inherited from

(WithPythonDataSource(WithParameters(SkeletonSource, SkeletonSourceParameters))).rpc

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

(WithPythonDataSource(WithParameters(SkeletonSource, SkeletonSourceParameters))).rpcId

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L170)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

(WithPythonDataSource(WithParameters(SkeletonSource, SkeletonSourceParameters))).unreferencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L172)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

(WithPythonDataSource(WithParameters(SkeletonSource, SkeletonSourceParameters))).wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

___

### encodeOptions

▪ `Static` **encodeOptions**: (`options`: [`Options`](../modules/neuroglancer_datasource_python_frontend._internal_.md#options)) => `any` & (`options`: { `parameters`: [`SkeletonSourceParameters`](neuroglancer_datasource_python_base.SkeletonSourceParameters.md)  }) => `any` & (`_options`: {}) => { `[key: string]`: `any`;  } & (`options`: [`Options`](../modules/neuroglancer_datasource_python_frontend._internal_.md#options)) => `any`

#### Inherited from

(WithPythonDataSource(WithParameters(SkeletonSource, SkeletonSourceParameters))).encodeOptions

#### Defined in

[src/neuroglancer/datasource/python/frontend.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/python/frontend.ts#L75)

## Accessors

### attributeTextureFormats

• `get` **attributeTextureFormats**(): [`TextureFormat`](neuroglancer_webgl_texture_access.TextureFormat.md)[]

#### Returns

[`TextureFormat`](neuroglancer_webgl_texture_access.TextureFormat.md)[]

#### Inherited from

(WithPythonDataSource(WithParameters(SkeletonSource, SkeletonSourceParameters))).attributeTextureFormats

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:643](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L643)

___

### gl

• `get` **gl**(): [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Returns

[`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Inherited from

(WithPythonDataSource(WithParameters(SkeletonSource, SkeletonSourceParameters))).gl

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:372](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L372)

___

### vertexAttributes

• `get` **vertexAttributes**(): `Map`<`string`, [`VertexAttributeInfo`](../interfaces/neuroglancer_skeleton_base.VertexAttributeInfo.md)\>

#### Returns

`Map`<`string`, [`VertexAttributeInfo`](../interfaces/neuroglancer_skeleton_base.VertexAttributeInfo.md)\>

#### Overrides

(WithPythonDataSource(WithParameters(SkeletonSource, SkeletonSourceParameters))).vertexAttributes

#### Defined in

[src/neuroglancer/datasource/python/frontend.ts:333](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/python/frontend.ts#L333)

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

(WithPythonDataSource(WithParameters(SkeletonSource, SkeletonSourceParameters))).addChunk

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

(WithPythonDataSource(WithParameters(SkeletonSource, SkeletonSourceParameters))).addCounterpartRef

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`PythonSkeletonSource`](neuroglancer_datasource_python_frontend.PythonSkeletonSource.md)

#### Returns

[`PythonSkeletonSource`](neuroglancer_datasource_python_frontend.PythonSkeletonSource.md)

#### Inherited from

(WithPythonDataSource(WithParameters(SkeletonSource, SkeletonSourceParameters))).addRef

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

(WithPythonDataSource(WithParameters(SkeletonSource, SkeletonSourceParameters))).counterpartRefCountReachedZero

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

(WithPythonDataSource(WithParameters(SkeletonSource, SkeletonSourceParameters))).deleteChunk

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:376](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L376)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

(WithPythonDataSource(WithParameters(SkeletonSource, SkeletonSourceParameters))).dispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

(WithPythonDataSource(WithParameters(SkeletonSource, SkeletonSourceParameters))).disposed

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

(WithPythonDataSource(WithParameters(SkeletonSource, SkeletonSourceParameters))).getChunk

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:391](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L391)

▸ **getChunk**(`x`): [`SkeletonChunk`](neuroglancer_skeleton_frontend.SkeletonChunk.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

[`SkeletonChunk`](neuroglancer_skeleton_frontend.SkeletonChunk.md)

#### Inherited from

(WithPythonDataSource(WithParameters(SkeletonSource, SkeletonSourceParameters))).getChunk

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:653](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L653)

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

(WithPythonDataSource(WithParameters(SkeletonSource, SkeletonSourceParameters))).initializeCounterpart

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

(WithPythonDataSource(WithParameters(SkeletonSource, SkeletonSourceParameters))).initializeCounterpart

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

(WithPythonDataSource(WithParameters(SkeletonSource, SkeletonSourceParameters))).initializeSharedObject

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L175)

___

### invalidateCache

▸ **invalidateCache**(): `void`

Invalidates the chunk cache.  Operates asynchronously.

#### Returns

`void`

#### Inherited from

(WithPythonDataSource(WithParameters(SkeletonSource, SkeletonSourceParameters))).invalidateCache

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:398](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L398)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

(WithPythonDataSource(WithParameters(SkeletonSource, SkeletonSourceParameters))).ownerDispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

(WithPythonDataSource(WithParameters(SkeletonSource, SkeletonSourceParameters))).refCountReachedZero

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

(WithPythonDataSource(WithParameters(SkeletonSource, SkeletonSourceParameters))).registerCancellable

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

(WithPythonDataSource(WithParameters(SkeletonSource, SkeletonSourceParameters))).registerDisposer

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

(WithPythonDataSource(WithParameters(SkeletonSource, SkeletonSourceParameters))).registerEventListener

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

(WithPythonDataSource(WithParameters(SkeletonSource, SkeletonSourceParameters))).unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)
