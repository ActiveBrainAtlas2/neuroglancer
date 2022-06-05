[neuroglancer](../README.md) / [Modules](../modules.md) / [viewer](../modules/viewer.md) / DataManagementContext

# Class: DataManagementContext

[viewer](../modules/viewer.md).DataManagementContext

## Hierarchy

- `RefCounted`

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
| `gl` | `GL` | `undefined` |
| `frameNumberCounter` | `FrameNumberCounter` | `undefined` |
| `bundleRoot` | `string` | `''` |

#### Overrides

RefCounted.constructor

#### Defined in

[src/neuroglancer/viewer.ts:98](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/viewer.ts#L98)

## Properties

### chunkManager

• **chunkManager**: `ChunkManager`

#### Defined in

[src/neuroglancer/viewer.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/viewer.ts#L92)

___

### chunkQueueManager

• **chunkQueueManager**: `ChunkQueueManager`

#### Defined in

[src/neuroglancer/viewer.ts:91](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/viewer.ts#L91)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

RefCounted.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L52)

___

### frameNumberCounter

• **frameNumberCounter**: `FrameNumberCounter`

___

### gl

• **gl**: `GL`

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

RefCounted.refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L45)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

RefCounted.wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L46)

___

### worker

• **worker**: `Worker`

#### Defined in

[src/neuroglancer/viewer.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/viewer.ts#L90)

## Accessors

### rpc

• `get` **rpc**(): [`RPC`](worker_rpc.RPC.md)

#### Returns

[`RPC`](worker_rpc.RPC.md)

#### Defined in

[src/neuroglancer/viewer.ts:94](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/viewer.ts#L94)

## Methods

### addRef

▸ **addRef**(): [`DataManagementContext`](viewer.DataManagementContext.md)

#### Returns

[`DataManagementContext`](viewer.DataManagementContext.md)

#### Inherited from

RefCounted.addRef

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.dispose

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.disposed

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

RefCounted.refCountReachedZero

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L66)

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

RefCounted.registerCancellable

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Disposer` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

RefCounted.registerDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `EventTarget` |
| `type` | `string` |
| `listener` | `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

`void`

#### Inherited from

RefCounted.registerEventListener

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L95)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Disposer` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

RefCounted.unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/958d23e0/src/neuroglancer/util/disposable.ts#L85)
