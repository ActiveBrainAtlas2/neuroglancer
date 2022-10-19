[neuroglancer](../README.md) / [Modules](../modules.md) / [data\_panel\_layout](../modules/data_panel_layout.md) / [<internal\>](../modules/data_panel_layout._internal_.md) / ChunkManager

# Class: ChunkManager

[data_panel_layout](../modules/data_panel_layout.md).[<internal>](../modules/data_panel_layout._internal_.md).ChunkManager

## Hierarchy

- [`SharedObject`](worker_rpc.SharedObject.md)

  ↳ **`ChunkManager`**

## Table of contents

### Constructors

- [constructor](data_panel_layout._internal_.ChunkManager.md#constructor)

### Properties

- [RPC\_TYPE\_ID](data_panel_layout._internal_.ChunkManager.md#rpc_type_id)
- [chunkQueueManager](data_panel_layout._internal_.ChunkManager.md#chunkqueuemanager)
- [disposedStacks](data_panel_layout._internal_.ChunkManager.md#disposedstacks)
- [isOwner](data_panel_layout._internal_.ChunkManager.md#isowner)
- [layerChunkStatisticsUpdated](data_panel_layout._internal_.ChunkManager.md#layerchunkstatisticsupdated)
- [memoize](data_panel_layout._internal_.ChunkManager.md#memoize)
- [prevStatisticsLayers](data_panel_layout._internal_.ChunkManager.md#prevstatisticslayers)
- [refCount](data_panel_layout._internal_.ChunkManager.md#refcount)
- [referencedGeneration](data_panel_layout._internal_.ChunkManager.md#referencedgeneration)
- [rpc](data_panel_layout._internal_.ChunkManager.md#rpc)
- [rpcId](data_panel_layout._internal_.ChunkManager.md#rpcid)
- [unreferencedGeneration](data_panel_layout._internal_.ChunkManager.md#unreferencedgeneration)
- [wasDisposed](data_panel_layout._internal_.ChunkManager.md#wasdisposed)

### Accessors

- [gl](data_panel_layout._internal_.ChunkManager.md#gl)

### Methods

- [addCounterpartRef](data_panel_layout._internal_.ChunkManager.md#addcounterpartref)
- [addRef](data_panel_layout._internal_.ChunkManager.md#addref)
- [counterpartRefCountReachedZero](data_panel_layout._internal_.ChunkManager.md#counterpartrefcountreachedzero)
- [dispose](data_panel_layout._internal_.ChunkManager.md#dispose)
- [disposed](data_panel_layout._internal_.ChunkManager.md#disposed)
- [getChunkSource](data_panel_layout._internal_.ChunkManager.md#getchunksource)
- [initializeCounterpart](data_panel_layout._internal_.ChunkManager.md#initializecounterpart)
- [initializeSharedObject](data_panel_layout._internal_.ChunkManager.md#initializesharedobject)
- [ownerDispose](data_panel_layout._internal_.ChunkManager.md#ownerdispose)
- [refCountReachedZero](data_panel_layout._internal_.ChunkManager.md#refcountreachedzero)
- [registerCancellable](data_panel_layout._internal_.ChunkManager.md#registercancellable)
- [registerDisposer](data_panel_layout._internal_.ChunkManager.md#registerdisposer)
- [registerEventListener](data_panel_layout._internal_.ChunkManager.md#registereventlistener)
- [unregisterDisposer](data_panel_layout._internal_.ChunkManager.md#unregisterdisposer)

## Constructors

### constructor

• **new ChunkManager**(`chunkQueueManager`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkQueueManager` | [`ChunkQueueManager`](data_panel_layout._internal_.ChunkQueueManager.md) |

#### Overrides

[SharedObject](worker_rpc.SharedObject.md).[constructor](worker_rpc.SharedObject.md#constructor)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:331](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L331)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[RPC_TYPE_ID](worker_rpc.SharedObject.md#rpc_type_id)

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L245)

___

### chunkQueueManager

• **chunkQueueManager**: [`ChunkQueueManager`](data_panel_layout._internal_.ChunkQueueManager.md)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[disposedStacks](worker_rpc.SharedObject.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[isOwner](worker_rpc.SharedObject.md#isowner)

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L171)

___

### layerChunkStatisticsUpdated

• **layerChunkStatisticsUpdated**: [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:325](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L325)

___

### memoize

• **memoize**: [`StringMemoize`](data_panel_layout._internal_.StringMemoize.md)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:322](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L322)

___

### prevStatisticsLayers

• **prevStatisticsLayers**: [`LayerChunkProgressInfo`](data_panel_layout._internal_.LayerChunkProgressInfo.md)[] = `[]`

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:324](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L324)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[refCount](worker_rpc.SharedObject.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[referencedGeneration](worker_rpc.SharedObject.md#referencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](worker_rpc.RPC.md) = `null`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[rpc](worker_rpc.SharedObject.md#rpc)

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[rpcId](worker_rpc.SharedObject.md#rpcid)

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L170)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[unreferencedGeneration](worker_rpc.SharedObject.md#unreferencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L172)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[wasDisposed](worker_rpc.SharedObject.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### gl

• `get` **gl**(): [`GL`](../interfaces/axes_lines._internal_.GL.md)

#### Returns

[`GL`](../interfaces/axes_lines._internal_.GL.md)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:327](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L327)

## Methods

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

[SharedObject](worker_rpc.SharedObject.md).[addCounterpartRef](worker_rpc.SharedObject.md#addcounterpartref)

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`ChunkManager`](data_panel_layout._internal_.ChunkManager.md)

#### Returns

[`ChunkManager`](data_panel_layout._internal_.ChunkManager.md)

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[addRef](worker_rpc.SharedObject.md#addref)

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

[SharedObject](worker_rpc.SharedObject.md).[counterpartRefCountReachedZero](worker_rpc.SharedObject.md#counterpartrefcountreachedzero)

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L234)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[dispose](worker_rpc.SharedObject.md#dispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[disposed](worker_rpc.SharedObject.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L75)

___

### getChunkSource

▸ **getChunkSource**<`T`\>(`constructorFunction`, `options`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`SharedObject`](worker_rpc.SharedObject.md)<`T`\> & { `OPTIONS`: {} ; `key`: `any`  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructorFunction` | [`ChunkSourceConstructor`](../interfaces/data_panel_layout._internal_.ChunkSourceConstructor.md)<`T`\> |
| `options` | `T`[``"OPTIONS"``] |

#### Returns

`T`

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:338](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L338)

___

### initializeCounterpart

▸ **initializeCounterpart**(`rpc`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](worker_rpc.RPC.md) |
| `options` | `any` |

#### Returns

`void`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[initializeCounterpart](worker_rpc.SharedObject.md#initializecounterpart)

#### Defined in

[src/neuroglancer/worker_rpc.ts:182](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L182)

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

[SharedObject](worker_rpc.SharedObject.md).[initializeSharedObject](worker_rpc.SharedObject.md#initializesharedobject)

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L175)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[ownerDispose](worker_rpc.SharedObject.md#ownerdispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[refCountReachedZero](worker_rpc.SharedObject.md#refcountreachedzero)

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

[SharedObject](worker_rpc.SharedObject.md).[registerCancellable](worker_rpc.SharedObject.md#registercancellable)

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

[SharedObject](worker_rpc.SharedObject.md).[registerDisposer](worker_rpc.SharedObject.md#registerdisposer)

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

[SharedObject](worker_rpc.SharedObject.md).[registerEventListener](worker_rpc.SharedObject.md#registereventlistener)

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

[SharedObject](worker_rpc.SharedObject.md).[unregisterDisposer](worker_rpc.SharedObject.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L85)
