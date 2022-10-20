[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/viewer](../modules/neuroglancer_viewer.md) / DataManagementContext

# Class: DataManagementContext

[neuroglancer/viewer](../modules/neuroglancer_viewer.md).DataManagementContext

**`License`**

Copyright 2016 Google Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`DataManagementContext`**

## Table of contents

### Constructors

- [constructor](neuroglancer_viewer.DataManagementContext.md#constructor)

### Properties

- [chunkManager](neuroglancer_viewer.DataManagementContext.md#chunkmanager)
- [chunkQueueManager](neuroglancer_viewer.DataManagementContext.md#chunkqueuemanager)
- [disposedStacks](neuroglancer_viewer.DataManagementContext.md#disposedstacks)
- [frameNumberCounter](neuroglancer_viewer.DataManagementContext.md#framenumbercounter)
- [gl](neuroglancer_viewer.DataManagementContext.md#gl)
- [refCount](neuroglancer_viewer.DataManagementContext.md#refcount)
- [wasDisposed](neuroglancer_viewer.DataManagementContext.md#wasdisposed)
- [worker](neuroglancer_viewer.DataManagementContext.md#worker)

### Accessors

- [rpc](neuroglancer_viewer.DataManagementContext.md#rpc)

### Methods

- [addRef](neuroglancer_viewer.DataManagementContext.md#addref)
- [dispose](neuroglancer_viewer.DataManagementContext.md#dispose)
- [disposed](neuroglancer_viewer.DataManagementContext.md#disposed)
- [refCountReachedZero](neuroglancer_viewer.DataManagementContext.md#refcountreachedzero)
- [registerCancellable](neuroglancer_viewer.DataManagementContext.md#registercancellable)
- [registerDisposer](neuroglancer_viewer.DataManagementContext.md#registerdisposer)
- [registerEventListener](neuroglancer_viewer.DataManagementContext.md#registereventlistener)
- [unregisterDisposer](neuroglancer_viewer.DataManagementContext.md#unregisterdisposer)

## Constructors

### constructor

• **new DataManagementContext**(`gl`, `frameNumberCounter`, `bundleRoot?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) | `undefined` |
| `frameNumberCounter` | [`FrameNumberCounter`](../interfaces/neuroglancer_chunk_manager_frontend.FrameNumberCounter.md) | `undefined` |
| `bundleRoot` | `string` | `''` |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/viewer.ts:98](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/viewer.ts#L98)

## Properties

### chunkManager

• **chunkManager**: [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md)

#### Defined in

[src/neuroglancer/viewer.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/viewer.ts#L92)

___

### chunkQueueManager

• **chunkQueueManager**: [`ChunkQueueManager`](neuroglancer_chunk_manager_frontend.ChunkQueueManager.md)

#### Defined in

[src/neuroglancer/viewer.ts:91](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/viewer.ts#L91)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### frameNumberCounter

• **frameNumberCounter**: [`FrameNumberCounter`](../interfaces/neuroglancer_chunk_manager_frontend.FrameNumberCounter.md)

#### Defined in

[src/neuroglancer/viewer.ts:99](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/viewer.ts#L99)

___

### gl

• **gl**: [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Defined in

[src/neuroglancer/viewer.ts:99](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/viewer.ts#L99)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

___

### worker

• **worker**: [`Worker`](../modules/neuroglancer_viewer._internal_.md#worker)

#### Defined in

[src/neuroglancer/viewer.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/viewer.ts#L90)

## Accessors

### rpc

• `get` **rpc**(): [`RPC`](neuroglancer_worker_rpc.RPC.md)

#### Returns

[`RPC`](neuroglancer_worker_rpc.RPC.md)

#### Defined in

[src/neuroglancer/viewer.ts:94](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/viewer.ts#L94)

## Methods

### addRef

▸ **addRef**(): [`DataManagementContext`](neuroglancer_viewer.DataManagementContext.md)

#### Returns

[`DataManagementContext`](neuroglancer_viewer.DataManagementContext.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[dispose](neuroglancer_util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCountReachedZero](neuroglancer_util_disposable.RefCounted.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L66)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerCancellable](neuroglancer_util_disposable.RefCounted.md#registercancellable)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerDisposer](neuroglancer_util_disposable.RefCounted.md#registerdisposer)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerEventListener](neuroglancer_util_disposable.RefCounted.md#registereventlistener)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[unregisterDisposer](neuroglancer_util_disposable.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)
