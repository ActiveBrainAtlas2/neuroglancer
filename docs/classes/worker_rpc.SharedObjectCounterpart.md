[neuroglancer](../README.md) / [Modules](../modules.md) / [worker\_rpc](../modules/worker_rpc.md) / SharedObjectCounterpart

# Class: SharedObjectCounterpart

[worker_rpc](../modules/worker_rpc.md).SharedObjectCounterpart

Base class for defining a SharedObject type that will never be owned.

## Hierarchy

- [`SharedObject`](worker_rpc.SharedObject.md)

  ↳ **`SharedObjectCounterpart`**

  ↳↳ [`SharedProjectionParametersBackend`](render_layer_backend.SharedProjectionParametersBackend.md)

  ↳↳ [`SharedDisjointUint64Sets`](shared_disjoint_sets.SharedDisjointUint64Sets.md)

  ↳↳ [`SharedWatchableValue`](shared_watchable_value.SharedWatchableValue.md)

  ↳↳ [`Uint64Map`](uint64_map.Uint64Map.md)

  ↳↳ [`Uint64Set`](uint64_set.Uint64Set.md)

## Table of contents

### Constructors

- [constructor](worker_rpc.SharedObjectCounterpart.md#constructor)

### Properties

- [RPC\_TYPE\_ID](worker_rpc.SharedObjectCounterpart.md#rpc_type_id)
- [disposedStacks](worker_rpc.SharedObjectCounterpart.md#disposedstacks)
- [isOwner](worker_rpc.SharedObjectCounterpart.md#isowner)
- [refCount](worker_rpc.SharedObjectCounterpart.md#refcount)
- [referencedGeneration](worker_rpc.SharedObjectCounterpart.md#referencedgeneration)
- [rpc](worker_rpc.SharedObjectCounterpart.md#rpc)
- [rpcId](worker_rpc.SharedObjectCounterpart.md#rpcid)
- [unreferencedGeneration](worker_rpc.SharedObjectCounterpart.md#unreferencedgeneration)
- [wasDisposed](worker_rpc.SharedObjectCounterpart.md#wasdisposed)

### Methods

- [addCounterpartRef](worker_rpc.SharedObjectCounterpart.md#addcounterpartref)
- [addRef](worker_rpc.SharedObjectCounterpart.md#addref)
- [counterpartRefCountReachedZero](worker_rpc.SharedObjectCounterpart.md#counterpartrefcountreachedzero)
- [dispose](worker_rpc.SharedObjectCounterpart.md#dispose)
- [disposed](worker_rpc.SharedObjectCounterpart.md#disposed)
- [initializeCounterpart](worker_rpc.SharedObjectCounterpart.md#initializecounterpart)
- [initializeSharedObject](worker_rpc.SharedObjectCounterpart.md#initializesharedobject)
- [ownerDispose](worker_rpc.SharedObjectCounterpart.md#ownerdispose)
- [refCountReachedZero](worker_rpc.SharedObjectCounterpart.md#refcountreachedzero)
- [registerCancellable](worker_rpc.SharedObjectCounterpart.md#registercancellable)
- [registerDisposer](worker_rpc.SharedObjectCounterpart.md#registerdisposer)
- [registerEventListener](worker_rpc.SharedObjectCounterpart.md#registereventlistener)
- [unregisterDisposer](worker_rpc.SharedObjectCounterpart.md#unregisterdisposer)

## Constructors

### constructor

• **new SharedObjectCounterpart**(`rpc?`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc?` | [`RPC`](worker_rpc.RPC.md) |
| `options` | `any` |

#### Overrides

[SharedObject](worker_rpc.SharedObject.md).[constructor](worker_rpc.SharedObject.md#constructor)

#### Defined in

[src/neuroglancer/worker_rpc.ts:258](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/worker_rpc.ts#L258)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[RPC_TYPE_ID](worker_rpc.SharedObject.md#rpc_type_id)

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/worker_rpc.ts#L245)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[disposedStacks](worker_rpc.SharedObject.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L52)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[isOwner](worker_rpc.SharedObject.md#isowner)

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/worker_rpc.ts#L171)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[refCount](worker_rpc.SharedObject.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[referencedGeneration](worker_rpc.SharedObject.md#referencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](worker_rpc.RPC.md) = `null`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[rpc](worker_rpc.SharedObject.md#rpc)

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[rpcId](worker_rpc.SharedObject.md#rpcid)

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/worker_rpc.ts#L170)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[unreferencedGeneration](worker_rpc.SharedObject.md#unreferencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/worker_rpc.ts#L172)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[wasDisposed](worker_rpc.SharedObject.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L46)

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

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`SharedObjectCounterpart`](worker_rpc.SharedObjectCounterpart.md)

#### Returns

[`SharedObjectCounterpart`](worker_rpc.SharedObjectCounterpart.md)

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[addRef](worker_rpc.SharedObject.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L48)

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

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/worker_rpc.ts#L234)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[dispose](worker_rpc.SharedObject.md#dispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[disposed](worker_rpc.SharedObject.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L75)

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

[SharedObject](worker_rpc.SharedObject.md).[initializeSharedObject](worker_rpc.SharedObject.md#initializesharedobject)

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/worker_rpc.ts#L175)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[ownerDispose](worker_rpc.SharedObject.md#ownerdispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObject](worker_rpc.SharedObject.md).[refCountReachedZero](worker_rpc.SharedObject.md#refcountreachedzero)

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

[SharedObject](worker_rpc.SharedObject.md).[registerCancellable](worker_rpc.SharedObject.md#registercancellable)

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

[SharedObject](worker_rpc.SharedObject.md).[registerDisposer](worker_rpc.SharedObject.md#registerdisposer)

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

[SharedObject](worker_rpc.SharedObject.md).[registerEventListener](worker_rpc.SharedObject.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L95)

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

[SharedObject](worker_rpc.SharedObject.md).[unregisterDisposer](worker_rpc.SharedObject.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/util/disposable.ts#L85)
