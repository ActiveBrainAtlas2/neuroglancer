[neuroglancer](../README.md) / [Modules](../modules.md) / [uint64\_map](../modules/uint64_map.md) / Uint64Map

# Class: Uint64Map

[uint64_map](../modules/uint64_map.md).Uint64Map

## Hierarchy

- [`SharedObjectCounterpart`](worker_rpc.SharedObjectCounterpart.md)

  ↳ **`Uint64Map`**

## Implements

- [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<[`Uint64Map`](uint64_map.Uint64Map.md)\>

## Table of contents

### Constructors

- [constructor](uint64_map.Uint64Map.md#constructor)

### Properties

- [RPC\_TYPE\_ID](uint64_map.Uint64Map.md#rpc_type_id)
- [changed](uint64_map.Uint64Map.md#changed)
- [disposedStacks](uint64_map.Uint64Map.md#disposedstacks)
- [hashTable](uint64_map.Uint64Map.md#hashtable)
- [isOwner](uint64_map.Uint64Map.md#isowner)
- [refCount](uint64_map.Uint64Map.md#refcount)
- [referencedGeneration](uint64_map.Uint64Map.md#referencedgeneration)
- [rpc](uint64_map.Uint64Map.md#rpc)
- [rpcId](uint64_map.Uint64Map.md#rpcid)
- [unreferencedGeneration](uint64_map.Uint64Map.md#unreferencedgeneration)
- [wasDisposed](uint64_map.Uint64Map.md#wasdisposed)

### Accessors

- [size](uint64_map.Uint64Map.md#size)
- [value](uint64_map.Uint64Map.md#value)

### Methods

- [[iterator]](uint64_map.Uint64Map.md#[iterator])
- [addCounterpartRef](uint64_map.Uint64Map.md#addcounterpartref)
- [addRef](uint64_map.Uint64Map.md#addref)
- [assignFrom](uint64_map.Uint64Map.md#assignfrom)
- [clear](uint64_map.Uint64Map.md#clear)
- [counterpartRefCountReachedZero](uint64_map.Uint64Map.md#counterpartrefcountreachedzero)
- [delete](uint64_map.Uint64Map.md#delete)
- [delete\_](uint64_map.Uint64Map.md#delete_)
- [dispose](uint64_map.Uint64Map.md#dispose)
- [disposed](uint64_map.Uint64Map.md#disposed)
- [get](uint64_map.Uint64Map.md#get)
- [has](uint64_map.Uint64Map.md#has)
- [initializeCounterpart](uint64_map.Uint64Map.md#initializecounterpart)
- [initializeSharedObject](uint64_map.Uint64Map.md#initializesharedobject)
- [ownerDispose](uint64_map.Uint64Map.md#ownerdispose)
- [refCountReachedZero](uint64_map.Uint64Map.md#refcountreachedzero)
- [registerCancellable](uint64_map.Uint64Map.md#registercancellable)
- [registerDisposer](uint64_map.Uint64Map.md#registerdisposer)
- [registerEventListener](uint64_map.Uint64Map.md#registereventlistener)
- [set](uint64_map.Uint64Map.md#set)
- [set\_](uint64_map.Uint64Map.md#set_)
- [toJSON](uint64_map.Uint64Map.md#tojson)
- [unregisterDisposer](uint64_map.Uint64Map.md#unregisterdisposer)
- [makeWithCounterpart](uint64_map.Uint64Map.md#makewithcounterpart)

## Constructors

### constructor

• **new Uint64Map**(`rpc?`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc?` | [`RPC`](worker_rpc.RPC.md) |
| `options` | `any` |

#### Inherited from

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[constructor](worker_rpc.SharedObjectCounterpart.md#constructor)

#### Defined in

[src/neuroglancer/worker_rpc.ts:258](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/worker_rpc.ts#L258)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[RPC_TYPE_ID](worker_rpc.SharedObjectCounterpart.md#rpc_type_id)

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/worker_rpc.ts#L245)

___

### changed

• **changed**: `Signal`<(`x`: ``null`` \| `Uint64`, `add`: `boolean`) => `void`\>

#### Implementation of

[WatchableValueInterface](../interfaces/trackable_value.WatchableValueInterface.md).[changed](../interfaces/trackable_value.WatchableValueInterface.md#changed)

#### Defined in

[src/neuroglancer/uint64_map.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/uint64_map.ts#L31)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[disposedStacks](worker_rpc.SharedObjectCounterpart.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L52)

___

### hashTable

• **hashTable**: `HashMapUint64`

#### Defined in

[src/neuroglancer/uint64_map.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/uint64_map.ts#L30)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[isOwner](worker_rpc.SharedObjectCounterpart.md#isowner)

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/worker_rpc.ts#L171)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[refCount](worker_rpc.SharedObjectCounterpart.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[referencedGeneration](worker_rpc.SharedObjectCounterpart.md#referencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](worker_rpc.RPC.md) = `null`

#### Inherited from

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[rpc](worker_rpc.SharedObjectCounterpart.md#rpc)

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[rpcId](worker_rpc.SharedObjectCounterpart.md#rpcid)

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/worker_rpc.ts#L170)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[unreferencedGeneration](worker_rpc.SharedObjectCounterpart.md#unreferencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/worker_rpc.ts#L172)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[wasDisposed](worker_rpc.SharedObjectCounterpart.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/uint64_map.ts:83](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/uint64_map.ts#L83)

___

### value

• `get` **value**(): `this`

#### Returns

`this`

#### Implementation of

[WatchableValueInterface](../interfaces/trackable_value.WatchableValueInterface.md).[value](../interfaces/trackable_value.WatchableValueInterface.md#value)

#### Defined in

[src/neuroglancer/uint64_map.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/uint64_map.ts#L33)

## Methods

### [iterator]

▸ **[iterator]**(): `Generator`<[`Uint64`, `Uint64`], `void`, `unknown`\>

#### Returns

`Generator`<[`Uint64`, `Uint64`], `void`, `unknown`\>

#### Defined in

[src/neuroglancer/uint64_map.ts:65](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/uint64_map.ts#L65)

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

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[addCounterpartRef](worker_rpc.SharedObjectCounterpart.md#addcounterpartref)

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`Uint64Map`](uint64_map.Uint64Map.md)

#### Returns

[`Uint64Map`](uint64_map.Uint64Map.md)

#### Inherited from

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[addRef](worker_rpc.SharedObjectCounterpart.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L48)

___

### assignFrom

▸ **assignFrom**(`other`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Uint64Map`](uint64_map.Uint64Map.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/uint64_map.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/uint64_map.ts#L87)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/uint64_map.ts:94](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/uint64_map.ts#L94)

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

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[counterpartRefCountReachedZero](worker_rpc.SharedObjectCounterpart.md#counterpartrefcountreachedzero)

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/worker_rpc.ts#L234)

___

### delete

▸ **delete**(`key`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Uint64` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/uint64_map.ts:73](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/uint64_map.ts#L73)

___

### delete\_

▸ **delete_**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Uint64` |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/uint64_map.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/uint64_map.ts#L69)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[dispose](worker_rpc.SharedObjectCounterpart.md#dispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[disposed](worker_rpc.SharedObjectCounterpart.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L75)

___

### get

▸ **get**(`key`, `value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Uint64` |
| `value` | `Uint64` |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/uint64_map.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/uint64_map.ts#L61)

___

### has

▸ **has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Uint64` |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/uint64_map.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/uint64_map.ts#L57)

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

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[initializeCounterpart](worker_rpc.SharedObjectCounterpart.md#initializecounterpart)

#### Defined in

[src/neuroglancer/worker_rpc.ts:182](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/worker_rpc.ts#L182)

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

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[initializeSharedObject](worker_rpc.SharedObjectCounterpart.md#initializesharedobject)

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/worker_rpc.ts#L175)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[ownerDispose](worker_rpc.SharedObjectCounterpart.md#ownerdispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[refCountReachedZero](worker_rpc.SharedObjectCounterpart.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/worker_rpc.ts:203](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/worker_rpc.ts#L203)

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

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[registerCancellable](worker_rpc.SharedObjectCounterpart.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L100)

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

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[registerDisposer](worker_rpc.SharedObjectCounterpart.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L76)

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

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[registerEventListener](worker_rpc.SharedObjectCounterpart.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L95)

___

### set

▸ **set**(`key`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Uint64` |
| `value` | `Uint64` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/uint64_map.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/uint64_map.ts#L47)

___

### set\_

▸ **set_**(`key`, `value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Uint64` |
| `value` | `Uint64` |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/uint64_map.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/uint64_map.ts#L43)

___

### toJSON

▸ **toJSON**(): `Object`

#### Returns

`Object`

#### Defined in

[src/neuroglancer/uint64_map.ts:104](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/uint64_map.ts#L104)

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

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[unregisterDisposer](worker_rpc.SharedObjectCounterpart.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/util/disposable.ts#L85)

___

### makeWithCounterpart

▸ `Static` **makeWithCounterpart**(`rpc`): [`Uint64Map`](uint64_map.Uint64Map.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](worker_rpc.RPC.md) |

#### Returns

[`Uint64Map`](uint64_map.Uint64Map.md)

#### Defined in

[src/neuroglancer/uint64_map.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/uint64_map.ts#L37)
