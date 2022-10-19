[neuroglancer](../README.md) / [Modules](../modules.md) / [chunk\_manager/backend](../modules/chunk_manager_backend.md) / [<internal\>](../modules/chunk_manager_backend._internal_.md) / SharedWatchableValue

# Class: SharedWatchableValue<T\>

[chunk_manager/backend](../modules/chunk_manager_backend.md).[<internal>](../modules/chunk_manager_backend._internal_.md).SharedWatchableValue

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`SharedObjectCounterpart`](annotation_backend._internal_.SharedObjectCounterpart.md)

  ↳ **`SharedWatchableValue`**

## Implements

- [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`T`\>

## Table of contents

### Constructors

- [constructor](chunk_manager_backend._internal_.SharedWatchableValue.md#constructor)

### Properties

- [RPC\_TYPE\_ID](chunk_manager_backend._internal_.SharedWatchableValue.md#rpc_type_id)
- [base](chunk_manager_backend._internal_.SharedWatchableValue.md#base)
- [disposedStacks](chunk_manager_backend._internal_.SharedWatchableValue.md#disposedstacks)
- [isOwner](chunk_manager_backend._internal_.SharedWatchableValue.md#isowner)
- [refCount](chunk_manager_backend._internal_.SharedWatchableValue.md#refcount)
- [referencedGeneration](chunk_manager_backend._internal_.SharedWatchableValue.md#referencedgeneration)
- [rpc](chunk_manager_backend._internal_.SharedWatchableValue.md#rpc)
- [rpcId](chunk_manager_backend._internal_.SharedWatchableValue.md#rpcid)
- [unreferencedGeneration](chunk_manager_backend._internal_.SharedWatchableValue.md#unreferencedgeneration)
- [updatingValue\_](chunk_manager_backend._internal_.SharedWatchableValue.md#updatingvalue_)
- [wasDisposed](chunk_manager_backend._internal_.SharedWatchableValue.md#wasdisposed)

### Accessors

- [changed](chunk_manager_backend._internal_.SharedWatchableValue.md#changed)
- [value](chunk_manager_backend._internal_.SharedWatchableValue.md#value)

### Methods

- [addCounterpartRef](chunk_manager_backend._internal_.SharedWatchableValue.md#addcounterpartref)
- [addRef](chunk_manager_backend._internal_.SharedWatchableValue.md#addref)
- [counterpartRefCountReachedZero](chunk_manager_backend._internal_.SharedWatchableValue.md#counterpartrefcountreachedzero)
- [dispose](chunk_manager_backend._internal_.SharedWatchableValue.md#dispose)
- [disposed](chunk_manager_backend._internal_.SharedWatchableValue.md#disposed)
- [initializeCounterpart](chunk_manager_backend._internal_.SharedWatchableValue.md#initializecounterpart)
- [initializeSharedObject](chunk_manager_backend._internal_.SharedWatchableValue.md#initializesharedobject)
- [ownerDispose](chunk_manager_backend._internal_.SharedWatchableValue.md#ownerdispose)
- [refCountReachedZero](chunk_manager_backend._internal_.SharedWatchableValue.md#refcountreachedzero)
- [registerCancellable](chunk_manager_backend._internal_.SharedWatchableValue.md#registercancellable)
- [registerDisposer](chunk_manager_backend._internal_.SharedWatchableValue.md#registerdisposer)
- [registerEventListener](chunk_manager_backend._internal_.SharedWatchableValue.md#registereventlistener)
- [setupChangedHandler](chunk_manager_backend._internal_.SharedWatchableValue.md#setupchangedhandler)
- [unregisterDisposer](chunk_manager_backend._internal_.SharedWatchableValue.md#unregisterdisposer)
- [make](chunk_manager_backend._internal_.SharedWatchableValue.md#make)
- [makeFromExisting](chunk_manager_backend._internal_.SharedWatchableValue.md#makefromexisting)

## Constructors

### constructor

• **new SharedWatchableValue**<`T`\>(`rpc?`, `options?`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc?` | [`RPC`](annotation_annotation_layer_state._internal_.RPC.md) |
| `options` | `any` |

#### Overrides

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[constructor](annotation_backend._internal_.SharedObjectCounterpart.md#constructor)

#### Defined in

[src/neuroglancer/shared_watchable_value.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/shared_watchable_value.ts#L37)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[RPC_TYPE_ID](annotation_backend._internal_.SharedObjectCounterpart.md#rpc_type_id)

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L245)

___

### base

• **base**: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`T`\>

#### Defined in

[src/neuroglancer/shared_watchable_value.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/shared_watchable_value.ts#L29)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[disposedStacks](annotation_backend._internal_.SharedObjectCounterpart.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[isOwner](annotation_backend._internal_.SharedObjectCounterpart.md#isowner)

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L171)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[refCount](annotation_backend._internal_.SharedObjectCounterpart.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[referencedGeneration](annotation_backend._internal_.SharedObjectCounterpart.md#referencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](annotation_annotation_layer_state._internal_.RPC.md) = `null`

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[rpc](annotation_backend._internal_.SharedObjectCounterpart.md#rpc)

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[rpcId](annotation_backend._internal_.SharedObjectCounterpart.md#rpcid)

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L170)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[unreferencedGeneration](annotation_backend._internal_.SharedObjectCounterpart.md#unreferencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L172)

___

### updatingValue\_

• **updatingValue\_**: `boolean` = `false`

The value is being updated to reflect a remote change.

**`internal`**

#### Defined in

[src/neuroglancer/shared_watchable_value.ts:35](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/shared_watchable_value.ts#L35)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[wasDisposed](annotation_backend._internal_.SharedObjectCounterpart.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### changed

• `get` **changed**(): [`NullaryReadonlySignal`](../modules/util_signal.md#nullaryreadonlysignal)

#### Returns

[`NullaryReadonlySignal`](../modules/util_signal.md#nullaryreadonlysignal)

#### Implementation of

[WatchableValueInterface](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md).[changed](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md#changed)

#### Defined in

[src/neuroglancer/shared_watchable_value.ts:83](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/shared_watchable_value.ts#L83)

___

### value

• `get` **value**(): `T`

#### Returns

`T`

#### Implementation of

[WatchableValueInterface](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md).[value](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md#value)

#### Defined in

[src/neuroglancer/shared_watchable_value.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/shared_watchable_value.ts#L75)

• `set` **value**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`void`

#### Implementation of

[WatchableValueInterface](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md).[value](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md#value)

#### Defined in

[src/neuroglancer/shared_watchable_value.ts:79](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/shared_watchable_value.ts#L79)

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

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[addCounterpartRef](annotation_backend._internal_.SharedObjectCounterpart.md#addcounterpartref)

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`SharedWatchableValue`](chunk_manager_backend._internal_.SharedWatchableValue.md)<`T`\>

#### Returns

[`SharedWatchableValue`](chunk_manager_backend._internal_.SharedWatchableValue.md)<`T`\>

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[addRef](annotation_backend._internal_.SharedObjectCounterpart.md#addref)

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

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[counterpartRefCountReachedZero](annotation_backend._internal_.SharedObjectCounterpart.md#counterpartrefcountreachedzero)

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L234)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[dispose](annotation_backend._internal_.SharedObjectCounterpart.md#dispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[disposed](annotation_backend._internal_.SharedObjectCounterpart.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

___

### initializeCounterpart

▸ **initializeCounterpart**(`rpc`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](annotation_annotation_layer_state._internal_.RPC.md) |
| `options` | `any` |

#### Returns

`void`

#### Overrides

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[initializeCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md#initializecounterpart)

#### Defined in

[src/neuroglancer/shared_watchable_value.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/shared_watchable_value.ts#L45)

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

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[initializeSharedObject](annotation_backend._internal_.SharedObjectCounterpart.md#initializesharedobject)

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L175)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[ownerDispose](annotation_backend._internal_.SharedObjectCounterpart.md#ownerdispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[refCountReachedZero](annotation_backend._internal_.SharedObjectCounterpart.md#refcountreachedzero)

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

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[registerCancellable](annotation_backend._internal_.SharedObjectCounterpart.md#registercancellable)

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

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[registerDisposer](annotation_backend._internal_.SharedObjectCounterpart.md#registerdisposer)

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

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[registerEventListener](annotation_backend._internal_.SharedObjectCounterpart.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

___

### setupChangedHandler

▸ `Private` **setupChangedHandler**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/shared_watchable_value.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/shared_watchable_value.ts#L50)

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

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[unregisterDisposer](annotation_backend._internal_.SharedObjectCounterpart.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)

___

### make

▸ `Static` **make**<`T`\>(`rpc`, `value`): [`SharedWatchableValue`](chunk_manager_backend._internal_.SharedWatchableValue.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](annotation_annotation_layer_state._internal_.RPC.md) |
| `value` | `T` |

#### Returns

[`SharedWatchableValue`](chunk_manager_backend._internal_.SharedWatchableValue.md)<`T`\>

#### Defined in

[src/neuroglancer/shared_watchable_value.ts:71](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/shared_watchable_value.ts#L71)

___

### makeFromExisting

▸ `Static` **makeFromExisting**<`T`\>(`rpc`, `base`): [`SharedWatchableValue`](chunk_manager_backend._internal_.SharedWatchableValue.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](annotation_annotation_layer_state._internal_.RPC.md) |
| `base` | [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`T`\> |

#### Returns

[`SharedWatchableValue`](chunk_manager_backend._internal_.SharedWatchableValue.md)<`T`\>

#### Defined in

[src/neuroglancer/shared_watchable_value.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/shared_watchable_value.ts#L63)
