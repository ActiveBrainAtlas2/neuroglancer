[neuroglancer](../README.md) / [Modules](../modules.md) / [datasource/state\_share](../modules/datasource_state_share.md) / [<internal\>](../modules/datasource_state_share._internal_.md) / DataManagementContext

# Class: DataManagementContext

[datasource/state_share](../modules/datasource_state_share.md).[<internal>](../modules/datasource_state_share._internal_.md).DataManagementContext

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`DataManagementContext`**

## Table of contents

### Constructors

- [constructor](datasource_state_share._internal_.DataManagementContext.md#constructor)

### Properties

- [chunkManager](datasource_state_share._internal_.DataManagementContext.md#chunkmanager)
- [chunkQueueManager](datasource_state_share._internal_.DataManagementContext.md#chunkqueuemanager)
- [disposedStacks](datasource_state_share._internal_.DataManagementContext.md#disposedstacks)
- [frameNumberCounter](datasource_state_share._internal_.DataManagementContext.md#framenumbercounter)
- [gl](datasource_state_share._internal_.DataManagementContext.md#gl)
- [refCount](datasource_state_share._internal_.DataManagementContext.md#refcount)
- [wasDisposed](datasource_state_share._internal_.DataManagementContext.md#wasdisposed)
- [worker](datasource_state_share._internal_.DataManagementContext.md#worker)

### Accessors

- [rpc](datasource_state_share._internal_.DataManagementContext.md#rpc)

### Methods

- [addRef](datasource_state_share._internal_.DataManagementContext.md#addref)
- [dispose](datasource_state_share._internal_.DataManagementContext.md#dispose)
- [disposed](datasource_state_share._internal_.DataManagementContext.md#disposed)
- [refCountReachedZero](datasource_state_share._internal_.DataManagementContext.md#refcountreachedzero)
- [registerCancellable](datasource_state_share._internal_.DataManagementContext.md#registercancellable)
- [registerDisposer](datasource_state_share._internal_.DataManagementContext.md#registerdisposer)
- [registerEventListener](datasource_state_share._internal_.DataManagementContext.md#registereventlistener)
- [unregisterDisposer](datasource_state_share._internal_.DataManagementContext.md#unregisterdisposer)

## Constructors

### constructor

• **new DataManagementContext**(`gl`, `frameNumberCounter`, `bundleRoot?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) | `undefined` |
| `frameNumberCounter` | [`FrameNumberCounter`](../interfaces/chunk_manager_frontend.FrameNumberCounter.md) | `undefined` |
| `bundleRoot` | `string` | `''` |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/viewer.ts:98](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L98)

## Properties

### chunkManager

• **chunkManager**: [`ChunkManager`](chunk_manager_frontend.ChunkManager.md)

#### Defined in

[src/neuroglancer/viewer.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L92)

___

### chunkQueueManager

• **chunkQueueManager**: [`ChunkQueueManager`](chunk_manager_frontend.ChunkQueueManager.md)

#### Defined in

[src/neuroglancer/viewer.ts:91](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L91)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### frameNumberCounter

• **frameNumberCounter**: [`FrameNumberCounter`](../interfaces/chunk_manager_frontend.FrameNumberCounter.md)

___

### gl

• **gl**: [`GL`](../interfaces/webgl_context.GL.md)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

___

### worker

• **worker**: [`Worker`](../modules/datasource_state_share._internal_.md#worker)

#### Defined in

[src/neuroglancer/viewer.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L90)

## Accessors

### rpc

• `get` **rpc**(): [`RPC`](annotation_annotation_layer_state._internal_.RPC.md)

#### Returns

[`RPC`](annotation_annotation_layer_state._internal_.RPC.md)

#### Defined in

[src/neuroglancer/viewer.ts:94](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/viewer.ts#L94)

## Methods

### addRef

▸ **addRef**(): [`DataManagementContext`](datasource_state_share._internal_.DataManagementContext.md)

#### Returns

[`DataManagementContext`](datasource_state_share._internal_.DataManagementContext.md)

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[dispose](util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposed](util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCountReachedZero](util_disposable.RefCounted.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L66)

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

[RefCounted](util_disposable.RefCounted.md).[registerCancellable](util_disposable.RefCounted.md#registercancellable)

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

[RefCounted](util_disposable.RefCounted.md).[registerDisposer](util_disposable.RefCounted.md#registerdisposer)

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

[RefCounted](util_disposable.RefCounted.md).[registerEventListener](util_disposable.RefCounted.md#registereventlistener)

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

[RefCounted](util_disposable.RefCounted.md).[unregisterDisposer](util_disposable.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)
