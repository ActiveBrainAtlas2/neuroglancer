[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/shared\_disjoint\_sets](../modules/neuroglancer_shared_disjoint_sets.md) / SharedDisjointUint64Sets

# Class: SharedDisjointUint64Sets

[neuroglancer/shared_disjoint_sets](../modules/neuroglancer_shared_disjoint_sets.md).SharedDisjointUint64Sets

## Hierarchy

- [`SharedObjectCounterpart`](neuroglancer_worker_rpc.SharedObjectCounterpart.md)

  ↳ **`SharedDisjointUint64Sets`**

## Implements

- [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`SharedDisjointUint64Sets`](neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md)\>

## Table of contents

### Constructors

- [constructor](neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md#constructor)

### Properties

- [RPC\_TYPE\_ID](neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md#rpc_type_id)
- [changed](neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md#changed)
- [disjointSets](neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md#disjointsets)
- [disposedStacks](neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md#disposedstacks)
- [isOwner](neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md#isowner)
- [refCount](neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md#refcount)
- [referencedGeneration](neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md#referencedgeneration)
- [rpc](neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md#rpc)
- [rpcId](neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md#rpcid)
- [unreferencedGeneration](neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md#unreferencedgeneration)
- [wasDisposed](neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md#wasdisposed)

### Accessors

- [size](neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md#size)
- [value](neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md#value)

### Methods

- [addCounterpartRef](neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md#addcounterpartref)
- [addRef](neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md#addref)
- [assignFrom](neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md#assignfrom)
- [clear](neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md#clear)
- [counterpartRefCountReachedZero](neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md#counterpartrefcountreachedzero)
- [deleteSet](neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md#deleteset)
- [dispose](neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md#dispose)
- [disposed](neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md#disposed)
- [get](neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md#get)
- [initializeCounterpart](neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md#initializecounterpart)
- [initializeSharedObject](neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md#initializesharedobject)
- [link](neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md#link)
- [linkAll](neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md#linkall)
- [ownerDispose](neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md#ownerdispose)
- [refCountReachedZero](neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md#refcountreachedzero)
- [registerCancellable](neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md#registercancellable)
- [registerDisposer](neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md#registerdisposer)
- [registerEventListener](neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md#registereventlistener)
- [restoreState](neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md#restorestate)
- [setElements](neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md#setelements)
- [toJSON](neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md#tojson)
- [unregisterDisposer](neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md#unregisterdisposer)
- [makeWithCounterpart](neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md#makewithcounterpart)

## Constructors

### constructor

• **new SharedDisjointUint64Sets**(`rpc?`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc?` | [`RPC`](neuroglancer_worker_rpc.RPC.md) |
| `options` | `any` |

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[constructor](neuroglancer_worker_rpc.SharedObjectCounterpart.md#constructor)

#### Defined in

[src/neuroglancer/worker_rpc.ts:258](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L258)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[RPC_TYPE_ID](neuroglancer_worker_rpc.SharedObjectCounterpart.md#rpc_type_id)

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L245)

___

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Implementation of

[WatchableValueInterface](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md).[changed](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md#changed)

#### Defined in

[src/neuroglancer/shared_disjoint_sets.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/shared_disjoint_sets.ts#L34)

___

### disjointSets

• **disjointSets**: [`DisjointUint64Sets`](neuroglancer_util_disjoint_sets.DisjointUint64Sets.md)

#### Defined in

[src/neuroglancer/shared_disjoint_sets.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/shared_disjoint_sets.ts#L33)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[disposedStacks](neuroglancer_worker_rpc.SharedObjectCounterpart.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[isOwner](neuroglancer_worker_rpc.SharedObjectCounterpart.md#isowner)

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L171)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[refCount](neuroglancer_worker_rpc.SharedObjectCounterpart.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[referencedGeneration](neuroglancer_worker_rpc.SharedObjectCounterpart.md#referencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](neuroglancer_worker_rpc.RPC.md) = `null`

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[rpc](neuroglancer_worker_rpc.SharedObjectCounterpart.md#rpc)

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[rpcId](neuroglancer_worker_rpc.SharedObjectCounterpart.md#rpcid)

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L170)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[unreferencedGeneration](neuroglancer_worker_rpc.SharedObjectCounterpart.md#unreferencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L172)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[wasDisposed](neuroglancer_worker_rpc.SharedObjectCounterpart.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/shared_disjoint_sets.ts:110](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/shared_disjoint_sets.ts#L110)

___

### value

• `get` **value**(): `this`

For compatibility with `WatchableValueInterface`.

#### Returns

`this`

#### Implementation of

[WatchableValueInterface](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md).[value](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md#value)

#### Defined in

[src/neuroglancer/shared_disjoint_sets.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/shared_disjoint_sets.ts#L39)

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

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`SharedDisjointUint64Sets`](neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md)

#### Returns

[`SharedDisjointUint64Sets`](neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md)

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[addRef](neuroglancer_worker_rpc.SharedObjectCounterpart.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### assignFrom

▸ **assignFrom**(`other`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`DisjointUint64Sets`](neuroglancer_util_disjoint_sets.DisjointUint64Sets.md) \| [`SharedDisjointUint64Sets`](neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/shared_disjoint_sets.ts:135](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/shared_disjoint_sets.ts#L135)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/shared_disjoint_sets.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/shared_disjoint_sets.ts#L86)

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

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L234)

___

### deleteSet

▸ **deleteSet**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/shared_disjoint_sets.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/shared_disjoint_sets.ts#L100)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[dispose](neuroglancer_worker_rpc.SharedObjectCounterpart.md#dispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[disposed](neuroglancer_worker_rpc.SharedObjectCounterpart.md#disposed)

#### Defined in

[src/neuroglancer/shared_disjoint_sets.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/shared_disjoint_sets.ts#L56)

___

### get

▸ **get**(`x`): [`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

[`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/shared_disjoint_sets.ts:82](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/shared_disjoint_sets.ts#L82)

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

[src/neuroglancer/worker_rpc.ts:182](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L182)

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

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L175)

___

### link

▸ **link**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |
| `b` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/shared_disjoint_sets.ts:62](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/shared_disjoint_sets.ts#L62)

___

### linkAll

▸ **linkAll**(`ids`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | [`Uint64`](neuroglancer_util_uint64.Uint64.md)[] |

#### Returns

`void`

#### Defined in

[src/neuroglancer/shared_disjoint_sets.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/shared_disjoint_sets.ts#L76)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[ownerDispose](neuroglancer_worker_rpc.SharedObjectCounterpart.md#ownerdispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[refCountReachedZero](neuroglancer_worker_rpc.SharedObjectCounterpart.md#refcountreachedzero)

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

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[registerCancellable](neuroglancer_worker_rpc.SharedObjectCounterpart.md#registercancellable)

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

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[registerDisposer](neuroglancer_worker_rpc.SharedObjectCounterpart.md#registerdisposer)

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

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[registerEventListener](neuroglancer_worker_rpc.SharedObjectCounterpart.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L95)

___

### restoreState

▸ **restoreState**(`obj`): `void`

Restores the state from a JSON representation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/shared_disjoint_sets.ts:121](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/shared_disjoint_sets.ts#L121)

___

### setElements

▸ **setElements**(`a`): [`IterableIterator`](../interfaces/main_module._internal_.IterableIterator.md)<[`Uint64`](neuroglancer_util_uint64.Uint64.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

[`IterableIterator`](../interfaces/main_module._internal_.IterableIterator.md)<[`Uint64`](neuroglancer_util_uint64.Uint64.md)\>

#### Defined in

[src/neuroglancer/shared_disjoint_sets.ts:96](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/shared_disjoint_sets.ts#L96)

___

### toJSON

▸ **toJSON**(): `string`[][]

#### Returns

`string`[][]

#### Defined in

[src/neuroglancer/shared_disjoint_sets.ts:114](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/shared_disjoint_sets.ts#L114)

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

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)

___

### makeWithCounterpart

▸ `Static` **makeWithCounterpart**(`rpc`, `highBitRepresentative`): [`SharedDisjointUint64Sets`](neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](neuroglancer_worker_rpc.RPC.md) |
| `highBitRepresentative` | [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`boolean`\> |

#### Returns

[`SharedDisjointUint64Sets`](neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md)

#### Defined in

[src/neuroglancer/shared_disjoint_sets.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/shared_disjoint_sets.ts#L43)
