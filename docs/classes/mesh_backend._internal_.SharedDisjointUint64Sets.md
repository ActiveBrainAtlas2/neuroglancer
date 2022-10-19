[neuroglancer](../README.md) / [Modules](../modules.md) / [mesh/backend](../modules/mesh_backend.md) / [<internal\>](../modules/mesh_backend._internal_.md) / SharedDisjointUint64Sets

# Class: SharedDisjointUint64Sets

[mesh/backend](../modules/mesh_backend.md).[<internal>](../modules/mesh_backend._internal_.md).SharedDisjointUint64Sets

## Hierarchy

- [`SharedObjectCounterpart`](annotation_backend._internal_.SharedObjectCounterpart.md)

  ↳ **`SharedDisjointUint64Sets`**

## Implements

- [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`SharedDisjointUint64Sets`](mesh_backend._internal_.SharedDisjointUint64Sets.md)\>

## Table of contents

### Constructors

- [constructor](mesh_backend._internal_.SharedDisjointUint64Sets.md#constructor)

### Properties

- [RPC\_TYPE\_ID](mesh_backend._internal_.SharedDisjointUint64Sets.md#rpc_type_id)
- [changed](mesh_backend._internal_.SharedDisjointUint64Sets.md#changed)
- [disjointSets](mesh_backend._internal_.SharedDisjointUint64Sets.md#disjointsets)
- [disposedStacks](mesh_backend._internal_.SharedDisjointUint64Sets.md#disposedstacks)
- [isOwner](mesh_backend._internal_.SharedDisjointUint64Sets.md#isowner)
- [refCount](mesh_backend._internal_.SharedDisjointUint64Sets.md#refcount)
- [referencedGeneration](mesh_backend._internal_.SharedDisjointUint64Sets.md#referencedgeneration)
- [rpc](mesh_backend._internal_.SharedDisjointUint64Sets.md#rpc)
- [rpcId](mesh_backend._internal_.SharedDisjointUint64Sets.md#rpcid)
- [unreferencedGeneration](mesh_backend._internal_.SharedDisjointUint64Sets.md#unreferencedgeneration)
- [wasDisposed](mesh_backend._internal_.SharedDisjointUint64Sets.md#wasdisposed)

### Accessors

- [size](mesh_backend._internal_.SharedDisjointUint64Sets.md#size)
- [value](mesh_backend._internal_.SharedDisjointUint64Sets.md#value)

### Methods

- [addCounterpartRef](mesh_backend._internal_.SharedDisjointUint64Sets.md#addcounterpartref)
- [addRef](mesh_backend._internal_.SharedDisjointUint64Sets.md#addref)
- [assignFrom](mesh_backend._internal_.SharedDisjointUint64Sets.md#assignfrom)
- [clear](mesh_backend._internal_.SharedDisjointUint64Sets.md#clear)
- [counterpartRefCountReachedZero](mesh_backend._internal_.SharedDisjointUint64Sets.md#counterpartrefcountreachedzero)
- [deleteSet](mesh_backend._internal_.SharedDisjointUint64Sets.md#deleteset)
- [dispose](mesh_backend._internal_.SharedDisjointUint64Sets.md#dispose)
- [disposed](mesh_backend._internal_.SharedDisjointUint64Sets.md#disposed)
- [get](mesh_backend._internal_.SharedDisjointUint64Sets.md#get)
- [initializeCounterpart](mesh_backend._internal_.SharedDisjointUint64Sets.md#initializecounterpart)
- [initializeSharedObject](mesh_backend._internal_.SharedDisjointUint64Sets.md#initializesharedobject)
- [link](mesh_backend._internal_.SharedDisjointUint64Sets.md#link)
- [linkAll](mesh_backend._internal_.SharedDisjointUint64Sets.md#linkall)
- [ownerDispose](mesh_backend._internal_.SharedDisjointUint64Sets.md#ownerdispose)
- [refCountReachedZero](mesh_backend._internal_.SharedDisjointUint64Sets.md#refcountreachedzero)
- [registerCancellable](mesh_backend._internal_.SharedDisjointUint64Sets.md#registercancellable)
- [registerDisposer](mesh_backend._internal_.SharedDisjointUint64Sets.md#registerdisposer)
- [registerEventListener](mesh_backend._internal_.SharedDisjointUint64Sets.md#registereventlistener)
- [restoreState](mesh_backend._internal_.SharedDisjointUint64Sets.md#restorestate)
- [setElements](mesh_backend._internal_.SharedDisjointUint64Sets.md#setelements)
- [toJSON](mesh_backend._internal_.SharedDisjointUint64Sets.md#tojson)
- [unregisterDisposer](mesh_backend._internal_.SharedDisjointUint64Sets.md#unregisterdisposer)
- [makeWithCounterpart](mesh_backend._internal_.SharedDisjointUint64Sets.md#makewithcounterpart)

## Constructors

### constructor

• **new SharedDisjointUint64Sets**(`rpc?`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc?` | [`RPC`](annotation_annotation_layer_state._internal_.RPC.md) |
| `options` | `any` |

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[constructor](annotation_backend._internal_.SharedObjectCounterpart.md#constructor)

#### Defined in

[src/neuroglancer/worker_rpc.ts:258](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L258)

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

### changed

• **changed**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Implementation of

[WatchableValueInterface](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md).[changed](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md#changed)

#### Defined in

[src/neuroglancer/shared_disjoint_sets.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/shared_disjoint_sets.ts#L34)

___

### disjointSets

• **disjointSets**: [`DisjointUint64Sets`](util_disjoint_sets.DisjointUint64Sets.md)

#### Defined in

[src/neuroglancer/shared_disjoint_sets.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/shared_disjoint_sets.ts#L33)

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

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[wasDisposed](annotation_backend._internal_.SharedObjectCounterpart.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/shared_disjoint_sets.ts:110](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/shared_disjoint_sets.ts#L110)

___

### value

• `get` **value**(): `this`

For compatibility with `WatchableValueInterface`.

#### Returns

`this`

#### Implementation of

[WatchableValueInterface](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md).[value](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md#value)

#### Defined in

[src/neuroglancer/shared_disjoint_sets.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/shared_disjoint_sets.ts#L39)

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

▸ **addRef**(): [`SharedDisjointUint64Sets`](mesh_backend._internal_.SharedDisjointUint64Sets.md)

#### Returns

[`SharedDisjointUint64Sets`](mesh_backend._internal_.SharedDisjointUint64Sets.md)

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[addRef](annotation_backend._internal_.SharedObjectCounterpart.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### assignFrom

▸ **assignFrom**(`other`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`DisjointUint64Sets`](util_disjoint_sets.DisjointUint64Sets.md) \| [`SharedDisjointUint64Sets`](mesh_backend._internal_.SharedDisjointUint64Sets.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/shared_disjoint_sets.ts:135](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/shared_disjoint_sets.ts#L135)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/shared_disjoint_sets.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/shared_disjoint_sets.ts#L86)

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

### deleteSet

▸ **deleteSet**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Uint64`](util_uint64.Uint64.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/shared_disjoint_sets.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/shared_disjoint_sets.ts#L100)

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

#### Overrides

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[disposed](annotation_backend._internal_.SharedObjectCounterpart.md#disposed)

#### Defined in

[src/neuroglancer/shared_disjoint_sets.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/shared_disjoint_sets.ts#L56)

___

### get

▸ **get**(`x`): [`Uint64`](util_uint64.Uint64.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Uint64`](util_uint64.Uint64.md) |

#### Returns

[`Uint64`](util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/shared_disjoint_sets.ts:82](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/shared_disjoint_sets.ts#L82)

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

#### Inherited from

[SharedObjectCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md).[initializeCounterpart](annotation_backend._internal_.SharedObjectCounterpart.md#initializecounterpart)

#### Defined in

[src/neuroglancer/worker_rpc.ts:182](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L182)

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

### link

▸ **link**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Uint64`](util_uint64.Uint64.md) |
| `b` | [`Uint64`](util_uint64.Uint64.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/shared_disjoint_sets.ts:62](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/shared_disjoint_sets.ts#L62)

___

### linkAll

▸ **linkAll**(`ids`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | [`Uint64`](util_uint64.Uint64.md)[] |

#### Returns

`void`

#### Defined in

[src/neuroglancer/shared_disjoint_sets.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/shared_disjoint_sets.ts#L76)

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

[src/neuroglancer/shared_disjoint_sets.ts:121](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/shared_disjoint_sets.ts#L121)

___

### setElements

▸ **setElements**(`a`): [`IterableIterator`](../interfaces/annotation_annotation_layer_state._internal_.IterableIterator.md)<[`Uint64`](util_uint64.Uint64.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Uint64`](util_uint64.Uint64.md) |

#### Returns

[`IterableIterator`](../interfaces/annotation_annotation_layer_state._internal_.IterableIterator.md)<[`Uint64`](util_uint64.Uint64.md)\>

#### Defined in

[src/neuroglancer/shared_disjoint_sets.ts:96](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/shared_disjoint_sets.ts#L96)

___

### toJSON

▸ **toJSON**(): `string`[][]

#### Returns

`string`[][]

#### Defined in

[src/neuroglancer/shared_disjoint_sets.ts:114](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/shared_disjoint_sets.ts#L114)

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

### makeWithCounterpart

▸ `Static` **makeWithCounterpart**(`rpc`, `highBitRepresentative`): [`SharedDisjointUint64Sets`](mesh_backend._internal_.SharedDisjointUint64Sets.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](annotation_annotation_layer_state._internal_.RPC.md) |
| `highBitRepresentative` | [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`boolean`\> |

#### Returns

[`SharedDisjointUint64Sets`](mesh_backend._internal_.SharedDisjointUint64Sets.md)

#### Defined in

[src/neuroglancer/shared_disjoint_sets.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/shared_disjoint_sets.ts#L43)
