[neuroglancer](../README.md) / [Modules](../modules.md) / [shared\_disjoint\_sets](../modules/shared_disjoint_sets.md) / SharedDisjointUint64Sets

# Class: SharedDisjointUint64Sets

[shared_disjoint_sets](../modules/shared_disjoint_sets.md).SharedDisjointUint64Sets

## Hierarchy

- [`SharedObjectCounterpart`](worker_rpc.SharedObjectCounterpart.md)

  ↳ **`SharedDisjointUint64Sets`**

## Implements

- [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<[`SharedDisjointUint64Sets`](shared_disjoint_sets.SharedDisjointUint64Sets.md)\>

## Table of contents

### Constructors

- [constructor](shared_disjoint_sets.SharedDisjointUint64Sets.md#constructor)

### Properties

- [RPC\_TYPE\_ID](shared_disjoint_sets.SharedDisjointUint64Sets.md#rpc_type_id)
- [changed](shared_disjoint_sets.SharedDisjointUint64Sets.md#changed)
- [disjointSets](shared_disjoint_sets.SharedDisjointUint64Sets.md#disjointsets)
- [disposedStacks](shared_disjoint_sets.SharedDisjointUint64Sets.md#disposedstacks)
- [isOwner](shared_disjoint_sets.SharedDisjointUint64Sets.md#isowner)
- [refCount](shared_disjoint_sets.SharedDisjointUint64Sets.md#refcount)
- [referencedGeneration](shared_disjoint_sets.SharedDisjointUint64Sets.md#referencedgeneration)
- [rpc](shared_disjoint_sets.SharedDisjointUint64Sets.md#rpc)
- [rpcId](shared_disjoint_sets.SharedDisjointUint64Sets.md#rpcid)
- [unreferencedGeneration](shared_disjoint_sets.SharedDisjointUint64Sets.md#unreferencedgeneration)
- [wasDisposed](shared_disjoint_sets.SharedDisjointUint64Sets.md#wasdisposed)

### Accessors

- [size](shared_disjoint_sets.SharedDisjointUint64Sets.md#size)
- [value](shared_disjoint_sets.SharedDisjointUint64Sets.md#value)

### Methods

- [addCounterpartRef](shared_disjoint_sets.SharedDisjointUint64Sets.md#addcounterpartref)
- [addRef](shared_disjoint_sets.SharedDisjointUint64Sets.md#addref)
- [assignFrom](shared_disjoint_sets.SharedDisjointUint64Sets.md#assignfrom)
- [clear](shared_disjoint_sets.SharedDisjointUint64Sets.md#clear)
- [counterpartRefCountReachedZero](shared_disjoint_sets.SharedDisjointUint64Sets.md#counterpartrefcountreachedzero)
- [deleteSet](shared_disjoint_sets.SharedDisjointUint64Sets.md#deleteset)
- [dispose](shared_disjoint_sets.SharedDisjointUint64Sets.md#dispose)
- [disposed](shared_disjoint_sets.SharedDisjointUint64Sets.md#disposed)
- [get](shared_disjoint_sets.SharedDisjointUint64Sets.md#get)
- [initializeCounterpart](shared_disjoint_sets.SharedDisjointUint64Sets.md#initializecounterpart)
- [initializeSharedObject](shared_disjoint_sets.SharedDisjointUint64Sets.md#initializesharedobject)
- [link](shared_disjoint_sets.SharedDisjointUint64Sets.md#link)
- [linkAll](shared_disjoint_sets.SharedDisjointUint64Sets.md#linkall)
- [ownerDispose](shared_disjoint_sets.SharedDisjointUint64Sets.md#ownerdispose)
- [refCountReachedZero](shared_disjoint_sets.SharedDisjointUint64Sets.md#refcountreachedzero)
- [registerCancellable](shared_disjoint_sets.SharedDisjointUint64Sets.md#registercancellable)
- [registerDisposer](shared_disjoint_sets.SharedDisjointUint64Sets.md#registerdisposer)
- [registerEventListener](shared_disjoint_sets.SharedDisjointUint64Sets.md#registereventlistener)
- [restoreState](shared_disjoint_sets.SharedDisjointUint64Sets.md#restorestate)
- [setElements](shared_disjoint_sets.SharedDisjointUint64Sets.md#setelements)
- [toJSON](shared_disjoint_sets.SharedDisjointUint64Sets.md#tojson)
- [unregisterDisposer](shared_disjoint_sets.SharedDisjointUint64Sets.md#unregisterdisposer)
- [makeWithCounterpart](shared_disjoint_sets.SharedDisjointUint64Sets.md#makewithcounterpart)

## Constructors

### constructor

• **new SharedDisjointUint64Sets**(`rpc?`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc?` | [`RPC`](worker_rpc.RPC.md) |
| `options` | `any` |

#### Inherited from

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[constructor](worker_rpc.SharedObjectCounterpart.md#constructor)

#### Defined in

[src/neuroglancer/worker_rpc.ts:258](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/worker_rpc.ts#L258)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[RPC_TYPE_ID](worker_rpc.SharedObjectCounterpart.md#rpc_type_id)

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/worker_rpc.ts#L245)

___

### changed

• **changed**: `NullarySignal`

#### Implementation of

[WatchableValueInterface](../interfaces/trackable_value.WatchableValueInterface.md).[changed](../interfaces/trackable_value.WatchableValueInterface.md#changed)

#### Defined in

[src/neuroglancer/shared_disjoint_sets.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/shared_disjoint_sets.ts#L34)

___

### disjointSets

• **disjointSets**: `DisjointUint64Sets`

#### Defined in

[src/neuroglancer/shared_disjoint_sets.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/shared_disjoint_sets.ts#L33)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[disposedStacks](worker_rpc.SharedObjectCounterpart.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L52)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[isOwner](worker_rpc.SharedObjectCounterpart.md#isowner)

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/worker_rpc.ts#L171)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[refCount](worker_rpc.SharedObjectCounterpart.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[referencedGeneration](worker_rpc.SharedObjectCounterpart.md#referencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](worker_rpc.RPC.md) = `null`

#### Inherited from

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[rpc](worker_rpc.SharedObjectCounterpart.md#rpc)

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[rpcId](worker_rpc.SharedObjectCounterpart.md#rpcid)

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/worker_rpc.ts#L170)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[unreferencedGeneration](worker_rpc.SharedObjectCounterpart.md#unreferencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/worker_rpc.ts#L172)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[wasDisposed](worker_rpc.SharedObjectCounterpart.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/shared_disjoint_sets.ts:110](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/shared_disjoint_sets.ts#L110)

___

### value

• `get` **value**(): `this`

For compatibility with `WatchableValueInterface`.

#### Returns

`this`

#### Implementation of

[WatchableValueInterface](../interfaces/trackable_value.WatchableValueInterface.md).[value](../interfaces/trackable_value.WatchableValueInterface.md#value)

#### Defined in

[src/neuroglancer/shared_disjoint_sets.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/shared_disjoint_sets.ts#L39)

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

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[addCounterpartRef](worker_rpc.SharedObjectCounterpart.md#addcounterpartref)

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`SharedDisjointUint64Sets`](shared_disjoint_sets.SharedDisjointUint64Sets.md)

#### Returns

[`SharedDisjointUint64Sets`](shared_disjoint_sets.SharedDisjointUint64Sets.md)

#### Inherited from

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[addRef](worker_rpc.SharedObjectCounterpart.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L48)

___

### assignFrom

▸ **assignFrom**(`other`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `DisjointUint64Sets` \| [`SharedDisjointUint64Sets`](shared_disjoint_sets.SharedDisjointUint64Sets.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/shared_disjoint_sets.ts:135](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/shared_disjoint_sets.ts#L135)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/shared_disjoint_sets.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/shared_disjoint_sets.ts#L86)

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

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/worker_rpc.ts#L234)

___

### deleteSet

▸ **deleteSet**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `Uint64` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/shared_disjoint_sets.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/shared_disjoint_sets.ts#L100)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[dispose](worker_rpc.SharedObjectCounterpart.md#dispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[disposed](worker_rpc.SharedObjectCounterpart.md#disposed)

#### Defined in

[src/neuroglancer/shared_disjoint_sets.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/shared_disjoint_sets.ts#L56)

___

### get

▸ **get**(`x`): `Uint64`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `Uint64` |

#### Returns

`Uint64`

#### Defined in

[src/neuroglancer/shared_disjoint_sets.ts:82](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/shared_disjoint_sets.ts#L82)

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

[src/neuroglancer/worker_rpc.ts:182](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/worker_rpc.ts#L182)

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

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/worker_rpc.ts#L175)

___

### link

▸ **link**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Uint64` |
| `b` | `Uint64` |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/shared_disjoint_sets.ts:62](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/shared_disjoint_sets.ts#L62)

___

### linkAll

▸ **linkAll**(`ids`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | `Uint64`[] |

#### Returns

`void`

#### Defined in

[src/neuroglancer/shared_disjoint_sets.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/shared_disjoint_sets.ts#L76)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[ownerDispose](worker_rpc.SharedObjectCounterpart.md#ownerdispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[refCountReachedZero](worker_rpc.SharedObjectCounterpart.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/worker_rpc.ts:203](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/worker_rpc.ts#L203)

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

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L100)

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

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L76)

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

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L95)

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

[src/neuroglancer/shared_disjoint_sets.ts:121](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/shared_disjoint_sets.ts#L121)

___

### setElements

▸ **setElements**(`a`): `IterableIterator`<`Uint64`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Uint64` |

#### Returns

`IterableIterator`<`Uint64`\>

#### Defined in

[src/neuroglancer/shared_disjoint_sets.ts:96](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/shared_disjoint_sets.ts#L96)

___

### toJSON

▸ **toJSON**(): `string`[][]

#### Returns

`string`[][]

#### Defined in

[src/neuroglancer/shared_disjoint_sets.ts:114](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/shared_disjoint_sets.ts#L114)

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

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L85)

___

### makeWithCounterpart

▸ `Static` **makeWithCounterpart**(`rpc`, `highBitRepresentative`): [`SharedDisjointUint64Sets`](shared_disjoint_sets.SharedDisjointUint64Sets.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](worker_rpc.RPC.md) |
| `highBitRepresentative` | [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<`boolean`\> |

#### Returns

[`SharedDisjointUint64Sets`](shared_disjoint_sets.SharedDisjointUint64Sets.md)

#### Defined in

[src/neuroglancer/shared_disjoint_sets.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/shared_disjoint_sets.ts#L43)
