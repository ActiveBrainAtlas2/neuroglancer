[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/uint64\_set](../modules/neuroglancer_uint64_set.md) / Uint64Set

# Class: Uint64Set

[neuroglancer/uint64_set](../modules/neuroglancer_uint64_set.md).Uint64Set

Base class for defining a SharedObject type that will never be owned.

## Hierarchy

- [`SharedObjectCounterpart`](neuroglancer_worker_rpc.SharedObjectCounterpart.md)

  ↳ **`Uint64Set`**

## Implements

- [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`Uint64Set`](neuroglancer_uint64_set.Uint64Set.md)\>

## Table of contents

### Constructors

- [constructor](neuroglancer_uint64_set.Uint64Set.md#constructor)

### Properties

- [RPC\_TYPE\_ID](neuroglancer_uint64_set.Uint64Set.md#rpc_type_id)
- [changed](neuroglancer_uint64_set.Uint64Set.md#changed)
- [disposedStacks](neuroglancer_uint64_set.Uint64Set.md#disposedstacks)
- [hashTable](neuroglancer_uint64_set.Uint64Set.md#hashtable)
- [isOwner](neuroglancer_uint64_set.Uint64Set.md#isowner)
- [refCount](neuroglancer_uint64_set.Uint64Set.md#refcount)
- [referencedGeneration](neuroglancer_uint64_set.Uint64Set.md#referencedgeneration)
- [rpc](neuroglancer_uint64_set.Uint64Set.md#rpc)
- [rpcId](neuroglancer_uint64_set.Uint64Set.md#rpcid)
- [unreferencedGeneration](neuroglancer_uint64_set.Uint64Set.md#unreferencedgeneration)
- [wasDisposed](neuroglancer_uint64_set.Uint64Set.md#wasdisposed)

### Accessors

- [size](neuroglancer_uint64_set.Uint64Set.md#size)
- [value](neuroglancer_uint64_set.Uint64Set.md#value)

### Methods

- [[iterator]](neuroglancer_uint64_set.Uint64Set.md#[iterator])
- [add](neuroglancer_uint64_set.Uint64Set.md#add)
- [addCounterpartRef](neuroglancer_uint64_set.Uint64Set.md#addcounterpartref)
- [addRef](neuroglancer_uint64_set.Uint64Set.md#addref)
- [add\_](neuroglancer_uint64_set.Uint64Set.md#add_)
- [assignFrom](neuroglancer_uint64_set.Uint64Set.md#assignfrom)
- [clear](neuroglancer_uint64_set.Uint64Set.md#clear)
- [counterpartRefCountReachedZero](neuroglancer_uint64_set.Uint64Set.md#counterpartrefcountreachedzero)
- [delete](neuroglancer_uint64_set.Uint64Set.md#delete)
- [delete\_](neuroglancer_uint64_set.Uint64Set.md#delete_)
- [dispose](neuroglancer_uint64_set.Uint64Set.md#dispose)
- [disposed](neuroglancer_uint64_set.Uint64Set.md#disposed)
- [has](neuroglancer_uint64_set.Uint64Set.md#has)
- [initializeCounterpart](neuroglancer_uint64_set.Uint64Set.md#initializecounterpart)
- [initializeSharedObject](neuroglancer_uint64_set.Uint64Set.md#initializesharedobject)
- [ownerDispose](neuroglancer_uint64_set.Uint64Set.md#ownerdispose)
- [refCountReachedZero](neuroglancer_uint64_set.Uint64Set.md#refcountreachedzero)
- [registerCancellable](neuroglancer_uint64_set.Uint64Set.md#registercancellable)
- [registerDisposer](neuroglancer_uint64_set.Uint64Set.md#registerdisposer)
- [registerEventListener](neuroglancer_uint64_set.Uint64Set.md#registereventlistener)
- [set](neuroglancer_uint64_set.Uint64Set.md#set)
- [toJSON](neuroglancer_uint64_set.Uint64Set.md#tojson)
- [unregisterDisposer](neuroglancer_uint64_set.Uint64Set.md#unregisterdisposer)
- [makeWithCounterpart](neuroglancer_uint64_set.Uint64Set.md#makewithcounterpart)

## Constructors

### constructor

• **new Uint64Set**(`rpc?`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc?` | [`RPC`](neuroglancer_worker_rpc.RPC.md) |
| `options` | `any` |

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[constructor](neuroglancer_worker_rpc.SharedObjectCounterpart.md#constructor)

#### Defined in

[src/neuroglancer/worker_rpc.ts:258](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L258)

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

### changed

• **changed**: [`Signal`](neuroglancer_util_signal.Signal.md)<(`x`: ``null`` \| [`Uint64`](neuroglancer_util_uint64.Uint64.md), `add`: `boolean`) => `void`\>

#### Implementation of

[WatchableValueInterface](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md).[changed](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md#changed)

#### Defined in

[src/neuroglancer/uint64_set.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/uint64_set.ts#L27)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[disposedStacks](neuroglancer_worker_rpc.SharedObjectCounterpart.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### hashTable

• **hashTable**: [`HashSetUint64`](neuroglancer_gpu_hash_hash_table.HashSetUint64.md)

#### Defined in

[src/neuroglancer/uint64_set.ts:26](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/uint64_set.ts#L26)

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

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[wasDisposed](neuroglancer_worker_rpc.SharedObjectCounterpart.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/uint64_set.ts:83](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/uint64_set.ts#L83)

___

### value

• `get` **value**(): `this`

#### Returns

`this`

#### Implementation of

[WatchableValueInterface](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md).[value](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md#value)

#### Defined in

[src/neuroglancer/uint64_set.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/uint64_set.ts#L29)

## Methods

### [iterator]

▸ **[iterator]**(): [`Generator`](../interfaces/neuroglancer_chunk_manager_backend._internal_.Generator.md)<[`Uint64`](neuroglancer_util_uint64.Uint64.md), `void`, `unknown`\>

#### Returns

[`Generator`](../interfaces/neuroglancer_chunk_manager_backend._internal_.Generator.md)<[`Uint64`](neuroglancer_util_uint64.Uint64.md), `void`, `unknown`\>

#### Defined in

[src/neuroglancer/uint64_set.ts:65](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/uint64_set.ts#L65)

___

### add

▸ **add**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/uint64_set.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/uint64_set.ts#L51)

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

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[addCounterpartRef](neuroglancer_worker_rpc.SharedObjectCounterpart.md#addcounterpartref)

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`Uint64Set`](neuroglancer_uint64_set.Uint64Set.md)

#### Returns

[`Uint64Set`](neuroglancer_uint64_set.Uint64Set.md)

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[addRef](neuroglancer_worker_rpc.SharedObjectCounterpart.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### add\_

▸ **add_**(`x`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/uint64_set.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/uint64_set.ts#L47)

___

### assignFrom

▸ **assignFrom**(`other`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Uint64Set`](neuroglancer_uint64_set.Uint64Set.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/uint64_set.ts:107](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/uint64_set.ts#L107)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/uint64_set.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/uint64_set.ts#L87)

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

### delete

▸ **delete**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/uint64_set.ts:73](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/uint64_set.ts#L73)

___

### delete\_

▸ **delete_**(`x`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/uint64_set.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/uint64_set.ts#L69)

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

### has

▸ **has**(`x`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/uint64_set.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/uint64_set.ts#L61)

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

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[initializeCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md#initializecounterpart)

#### Defined in

[src/neuroglancer/worker_rpc.ts:182](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L182)

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

### set

▸ **set**(`x`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/uint64_set.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/uint64_set.ts#L39)

___

### toJSON

▸ **toJSON**(): `string`[]

#### Returns

`string`[]

#### Defined in

[src/neuroglancer/uint64_set.ts:97](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/uint64_set.ts#L97)

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

### makeWithCounterpart

▸ `Static` **makeWithCounterpart**(`rpc`): [`Uint64Set`](neuroglancer_uint64_set.Uint64Set.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](neuroglancer_worker_rpc.RPC.md) |

#### Returns

[`Uint64Set`](neuroglancer_uint64_set.Uint64Set.md)

#### Defined in

[src/neuroglancer/uint64_set.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/uint64_set.ts#L33)
