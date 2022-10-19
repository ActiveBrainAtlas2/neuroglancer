[neuroglancer](../README.md) / [Modules](../modules.md) / [viewer](../modules/viewer.md) / DataManagementContext

# Class: DataManagementContext

[viewer](../modules/viewer.md).DataManagementContext

## Hierarchy

- [`RefCounted`](axes_lines._internal_.RefCounted.md)

  ↳ **`DataManagementContext`**

## Table of contents

### Constructors

- [constructor](viewer.DataManagementContext.md#constructor)

### Properties

- [chunkManager](viewer.DataManagementContext.md#chunkmanager)
- [chunkQueueManager](viewer.DataManagementContext.md#chunkqueuemanager)
- [disposedStacks](viewer.DataManagementContext.md#disposedstacks)
- [frameNumberCounter](viewer.DataManagementContext.md#framenumbercounter)
- [gl](viewer.DataManagementContext.md#gl)
- [refCount](viewer.DataManagementContext.md#refcount)
- [wasDisposed](viewer.DataManagementContext.md#wasdisposed)
- [worker](viewer.DataManagementContext.md#worker)

### Accessors

- [rpc](viewer.DataManagementContext.md#rpc)

### Methods

- [addRef](viewer.DataManagementContext.md#addref)
- [dispose](viewer.DataManagementContext.md#dispose)
- [disposed](viewer.DataManagementContext.md#disposed)
- [refCountReachedZero](viewer.DataManagementContext.md#refcountreachedzero)
- [registerCancellable](viewer.DataManagementContext.md#registercancellable)
- [registerDisposer](viewer.DataManagementContext.md#registerdisposer)
- [registerEventListener](viewer.DataManagementContext.md#registereventlistener)
- [unregisterDisposer](viewer.DataManagementContext.md#unregisterdisposer)

## Constructors

### constructor

• **new DataManagementContext**(`gl`, `frameNumberCounter`, `bundleRoot?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `gl` | [`GL`](../interfaces/axes_lines._internal_.GL.md) | `undefined` |
| `frameNumberCounter` | [`FrameNumberCounter`](../interfaces/data_panel_layout._internal_.FrameNumberCounter.md) | `undefined` |
| `bundleRoot` | `string` | `''` |

#### Overrides

[RefCounted](axes_lines._internal_.RefCounted.md).[constructor](axes_lines._internal_.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/viewer.ts:98](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/viewer.ts#L98)

## Properties

### chunkManager

• **chunkManager**: [`ChunkManager`](data_panel_layout._internal_.ChunkManager.md)

#### Defined in

[src/neuroglancer/viewer.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/viewer.ts#L92)

___

### chunkQueueManager

• **chunkQueueManager**: [`ChunkQueueManager`](data_panel_layout._internal_.ChunkQueueManager.md)

#### Defined in

[src/neuroglancer/viewer.ts:91](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/viewer.ts#L91)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposedStacks](axes_lines._internal_.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### frameNumberCounter

• **frameNumberCounter**: [`FrameNumberCounter`](../interfaces/data_panel_layout._internal_.FrameNumberCounter.md)

___

### gl

• **gl**: [`GL`](../interfaces/axes_lines._internal_.GL.md)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCount](axes_lines._internal_.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[wasDisposed](axes_lines._internal_.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

___

### worker

• **worker**: [`Worker`](../modules/viewer._internal_.md#worker)

#### Defined in

[src/neuroglancer/viewer.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/viewer.ts#L90)

## Accessors

### rpc

• `get` **rpc**(): [`RPC`](worker_rpc.RPC.md)

#### Returns

[`RPC`](worker_rpc.RPC.md)

#### Defined in

[src/neuroglancer/viewer.ts:94](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/viewer.ts#L94)

## Methods

### addRef

▸ **addRef**(): [`DataManagementContext`](viewer.DataManagementContext.md)

#### Returns

[`DataManagementContext`](viewer.DataManagementContext.md)

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[addRef](axes_lines._internal_.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[dispose](axes_lines._internal_.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[disposed](axes_lines._internal_.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](axes_lines._internal_.RefCounted.md).[refCountReachedZero](axes_lines._internal_.RefCounted.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L66)

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

[RefCounted](axes_lines._internal_.RefCounted.md).[registerCancellable](axes_lines._internal_.RefCounted.md#registercancellable)

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

[RefCounted](axes_lines._internal_.RefCounted.md).[registerDisposer](axes_lines._internal_.RefCounted.md#registerdisposer)

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

[RefCounted](axes_lines._internal_.RefCounted.md).[registerEventListener](axes_lines._internal_.RefCounted.md#registereventlistener)

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

[RefCounted](axes_lines._internal_.RefCounted.md).[unregisterDisposer](axes_lines._internal_.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L85)
