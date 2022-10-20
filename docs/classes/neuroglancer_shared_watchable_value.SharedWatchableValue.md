[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/shared\_watchable\_value](../modules/neuroglancer_shared_watchable_value.md) / SharedWatchableValue

# Class: SharedWatchableValue<T\>

[neuroglancer/shared_watchable_value](../modules/neuroglancer_shared_watchable_value.md).SharedWatchableValue

Base class for defining a SharedObject type that will never be owned.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`SharedObjectCounterpart`](neuroglancer_worker_rpc.SharedObjectCounterpart.md)

  ↳ **`SharedWatchableValue`**

## Implements

- [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`T`\>

## Table of contents

### Constructors

- [constructor](neuroglancer_shared_watchable_value.SharedWatchableValue.md#constructor)

### Properties

- [RPC\_TYPE\_ID](neuroglancer_shared_watchable_value.SharedWatchableValue.md#rpc_type_id)
- [base](neuroglancer_shared_watchable_value.SharedWatchableValue.md#base)
- [disposedStacks](neuroglancer_shared_watchable_value.SharedWatchableValue.md#disposedstacks)
- [isOwner](neuroglancer_shared_watchable_value.SharedWatchableValue.md#isowner)
- [refCount](neuroglancer_shared_watchable_value.SharedWatchableValue.md#refcount)
- [referencedGeneration](neuroglancer_shared_watchable_value.SharedWatchableValue.md#referencedgeneration)
- [rpc](neuroglancer_shared_watchable_value.SharedWatchableValue.md#rpc)
- [rpcId](neuroglancer_shared_watchable_value.SharedWatchableValue.md#rpcid)
- [unreferencedGeneration](neuroglancer_shared_watchable_value.SharedWatchableValue.md#unreferencedgeneration)
- [updatingValue\_](neuroglancer_shared_watchable_value.SharedWatchableValue.md#updatingvalue_)
- [wasDisposed](neuroglancer_shared_watchable_value.SharedWatchableValue.md#wasdisposed)

### Accessors

- [changed](neuroglancer_shared_watchable_value.SharedWatchableValue.md#changed)
- [value](neuroglancer_shared_watchable_value.SharedWatchableValue.md#value)

### Methods

- [addCounterpartRef](neuroglancer_shared_watchable_value.SharedWatchableValue.md#addcounterpartref)
- [addRef](neuroglancer_shared_watchable_value.SharedWatchableValue.md#addref)
- [counterpartRefCountReachedZero](neuroglancer_shared_watchable_value.SharedWatchableValue.md#counterpartrefcountreachedzero)
- [dispose](neuroglancer_shared_watchable_value.SharedWatchableValue.md#dispose)
- [disposed](neuroglancer_shared_watchable_value.SharedWatchableValue.md#disposed)
- [initializeCounterpart](neuroglancer_shared_watchable_value.SharedWatchableValue.md#initializecounterpart)
- [initializeSharedObject](neuroglancer_shared_watchable_value.SharedWatchableValue.md#initializesharedobject)
- [ownerDispose](neuroglancer_shared_watchable_value.SharedWatchableValue.md#ownerdispose)
- [refCountReachedZero](neuroglancer_shared_watchable_value.SharedWatchableValue.md#refcountreachedzero)
- [registerCancellable](neuroglancer_shared_watchable_value.SharedWatchableValue.md#registercancellable)
- [registerDisposer](neuroglancer_shared_watchable_value.SharedWatchableValue.md#registerdisposer)
- [registerEventListener](neuroglancer_shared_watchable_value.SharedWatchableValue.md#registereventlistener)
- [setupChangedHandler](neuroglancer_shared_watchable_value.SharedWatchableValue.md#setupchangedhandler)
- [unregisterDisposer](neuroglancer_shared_watchable_value.SharedWatchableValue.md#unregisterdisposer)
- [make](neuroglancer_shared_watchable_value.SharedWatchableValue.md#make)
- [makeFromExisting](neuroglancer_shared_watchable_value.SharedWatchableValue.md#makefromexisting)

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
| `rpc?` | [`RPC`](neuroglancer_worker_rpc.RPC.md) |
| `options` | `any` |

#### Overrides

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[constructor](neuroglancer_worker_rpc.SharedObjectCounterpart.md#constructor)

#### Defined in

[src/neuroglancer/shared_watchable_value.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/shared_watchable_value.ts#L37)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[RPC_TYPE_ID](neuroglancer_worker_rpc.SharedObjectCounterpart.md#rpc_type_id)

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L245)

___

### base

• **base**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`T`\>

#### Defined in

[src/neuroglancer/shared_watchable_value.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/shared_watchable_value.ts#L29)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[disposedStacks](neuroglancer_worker_rpc.SharedObjectCounterpart.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[isOwner](neuroglancer_worker_rpc.SharedObjectCounterpart.md#isowner)

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L171)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[refCount](neuroglancer_worker_rpc.SharedObjectCounterpart.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[referencedGeneration](neuroglancer_worker_rpc.SharedObjectCounterpart.md#referencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](neuroglancer_worker_rpc.RPC.md) = `null`

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[rpc](neuroglancer_worker_rpc.SharedObjectCounterpart.md#rpc)

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[rpcId](neuroglancer_worker_rpc.SharedObjectCounterpart.md#rpcid)

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L170)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[unreferencedGeneration](neuroglancer_worker_rpc.SharedObjectCounterpart.md#unreferencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L172)

___

### updatingValue\_

• **updatingValue\_**: `boolean` = `false`

The value is being updated to reflect a remote change.

#### Defined in

[src/neuroglancer/shared_watchable_value.ts:35](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/shared_watchable_value.ts#L35)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[wasDisposed](neuroglancer_worker_rpc.SharedObjectCounterpart.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### changed

• `get` **changed**(): [`NullaryReadonlySignal`](../modules/neuroglancer_util_signal.md#nullaryreadonlysignal)

#### Returns

[`NullaryReadonlySignal`](../modules/neuroglancer_util_signal.md#nullaryreadonlysignal)

#### Implementation of

[WatchableValueInterface](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md).[changed](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md#changed)

#### Defined in

[src/neuroglancer/shared_watchable_value.ts:83](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/shared_watchable_value.ts#L83)

___

### value

• `get` **value**(): `T`

#### Returns

`T`

#### Implementation of

[WatchableValueInterface](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md).[value](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md#value)

#### Defined in

[src/neuroglancer/shared_watchable_value.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/shared_watchable_value.ts#L75)

• `set` **value**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`void`

#### Implementation of

[WatchableValueInterface](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md).[value](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md#value)

#### Defined in

[src/neuroglancer/shared_watchable_value.ts:79](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/shared_watchable_value.ts#L79)

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

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[addCounterpartRef](neuroglancer_worker_rpc.SharedObjectCounterpart.md#addcounterpartref)

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`SharedWatchableValue`](neuroglancer_shared_watchable_value.SharedWatchableValue.md)<`T`\>

#### Returns

[`SharedWatchableValue`](neuroglancer_shared_watchable_value.SharedWatchableValue.md)<`T`\>

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[addRef](neuroglancer_worker_rpc.SharedObjectCounterpart.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

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

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[counterpartRefCountReachedZero](neuroglancer_worker_rpc.SharedObjectCounterpart.md#counterpartrefcountreachedzero)

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L234)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[dispose](neuroglancer_worker_rpc.SharedObjectCounterpart.md#dispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[disposed](neuroglancer_worker_rpc.SharedObjectCounterpart.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L75)

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

#### Overrides

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[initializeCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md#initializecounterpart)

#### Defined in

[src/neuroglancer/shared_watchable_value.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/shared_watchable_value.ts#L45)

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

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[initializeSharedObject](neuroglancer_worker_rpc.SharedObjectCounterpart.md#initializesharedobject)

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L175)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[ownerDispose](neuroglancer_worker_rpc.SharedObjectCounterpart.md#ownerdispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[refCountReachedZero](neuroglancer_worker_rpc.SharedObjectCounterpart.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/worker_rpc.ts:203](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L203)

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

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[registerCancellable](neuroglancer_worker_rpc.SharedObjectCounterpart.md#registercancellable)

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

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[registerDisposer](neuroglancer_worker_rpc.SharedObjectCounterpart.md#registerdisposer)

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

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[registerEventListener](neuroglancer_worker_rpc.SharedObjectCounterpart.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L95)

___

### setupChangedHandler

▸ `Private` **setupChangedHandler**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/shared_watchable_value.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/shared_watchable_value.ts#L50)

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

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[unregisterDisposer](neuroglancer_worker_rpc.SharedObjectCounterpart.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)

___

### make

▸ `Static` **make**<`T`\>(`rpc`, `value`): [`SharedWatchableValue`](neuroglancer_shared_watchable_value.SharedWatchableValue.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](neuroglancer_worker_rpc.RPC.md) |
| `value` | `T` |

#### Returns

[`SharedWatchableValue`](neuroglancer_shared_watchable_value.SharedWatchableValue.md)<`T`\>

#### Defined in

[src/neuroglancer/shared_watchable_value.ts:71](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/shared_watchable_value.ts#L71)

___

### makeFromExisting

▸ `Static` **makeFromExisting**<`T`\>(`rpc`, `base`): [`SharedWatchableValue`](neuroglancer_shared_watchable_value.SharedWatchableValue.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](neuroglancer_worker_rpc.RPC.md) |
| `base` | [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`T`\> |

#### Returns

[`SharedWatchableValue`](neuroglancer_shared_watchable_value.SharedWatchableValue.md)<`T`\>

#### Defined in

[src/neuroglancer/shared_watchable_value.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/shared_watchable_value.ts#L63)
