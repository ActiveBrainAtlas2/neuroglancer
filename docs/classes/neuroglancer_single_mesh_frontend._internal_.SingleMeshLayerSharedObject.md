[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/single\_mesh/frontend](../modules/neuroglancer_single_mesh_frontend.md) / [<internal\>](../modules/neuroglancer_single_mesh_frontend._internal_.md) / SingleMeshLayerSharedObject

# Class: SingleMeshLayerSharedObject

[neuroglancer/single_mesh/frontend](../modules/neuroglancer_single_mesh_frontend.md).[<internal>](../modules/neuroglancer_single_mesh_frontend._internal_.md).SingleMeshLayerSharedObject

## Hierarchy

- [`SharedObjectWithSharedVisibility`](../modules/neuroglancer_single_mesh_frontend._internal_.md#sharedobjectwithsharedvisibility)

  ↳ **`SingleMeshLayerSharedObject`**

## Table of contents

### Constructors

- [constructor](neuroglancer_single_mesh_frontend._internal_.SingleMeshLayerSharedObject.md#constructor)

### Properties

- [RPC\_TYPE\_ID](neuroglancer_single_mesh_frontend._internal_.SingleMeshLayerSharedObject.md#rpc_type_id)
- [disposedStacks](neuroglancer_single_mesh_frontend._internal_.SingleMeshLayerSharedObject.md#disposedstacks)
- [isOwner](neuroglancer_single_mesh_frontend._internal_.SingleMeshLayerSharedObject.md#isowner)
- [refCount](neuroglancer_single_mesh_frontend._internal_.SingleMeshLayerSharedObject.md#refcount)
- [referencedGeneration](neuroglancer_single_mesh_frontend._internal_.SingleMeshLayerSharedObject.md#referencedgeneration)
- [rpc](neuroglancer_single_mesh_frontend._internal_.SingleMeshLayerSharedObject.md#rpc)
- [rpcId](neuroglancer_single_mesh_frontend._internal_.SingleMeshLayerSharedObject.md#rpcid)
- [unreferencedGeneration](neuroglancer_single_mesh_frontend._internal_.SingleMeshLayerSharedObject.md#unreferencedgeneration)
- [visibility](neuroglancer_single_mesh_frontend._internal_.SingleMeshLayerSharedObject.md#visibility)
- [wasDisposed](neuroglancer_single_mesh_frontend._internal_.SingleMeshLayerSharedObject.md#wasdisposed)

### Methods

- [addCounterpartRef](neuroglancer_single_mesh_frontend._internal_.SingleMeshLayerSharedObject.md#addcounterpartref)
- [addRef](neuroglancer_single_mesh_frontend._internal_.SingleMeshLayerSharedObject.md#addref)
- [counterpartRefCountReachedZero](neuroglancer_single_mesh_frontend._internal_.SingleMeshLayerSharedObject.md#counterpartrefcountreachedzero)
- [dispose](neuroglancer_single_mesh_frontend._internal_.SingleMeshLayerSharedObject.md#dispose)
- [disposed](neuroglancer_single_mesh_frontend._internal_.SingleMeshLayerSharedObject.md#disposed)
- [initializeCounterpart](neuroglancer_single_mesh_frontend._internal_.SingleMeshLayerSharedObject.md#initializecounterpart)
- [initializeSharedObject](neuroglancer_single_mesh_frontend._internal_.SingleMeshLayerSharedObject.md#initializesharedobject)
- [ownerDispose](neuroglancer_single_mesh_frontend._internal_.SingleMeshLayerSharedObject.md#ownerdispose)
- [refCountReachedZero](neuroglancer_single_mesh_frontend._internal_.SingleMeshLayerSharedObject.md#refcountreachedzero)
- [registerCancellable](neuroglancer_single_mesh_frontend._internal_.SingleMeshLayerSharedObject.md#registercancellable)
- [registerDisposer](neuroglancer_single_mesh_frontend._internal_.SingleMeshLayerSharedObject.md#registerdisposer)
- [registerEventListener](neuroglancer_single_mesh_frontend._internal_.SingleMeshLayerSharedObject.md#registereventlistener)
- [unregisterDisposer](neuroglancer_single_mesh_frontend._internal_.SingleMeshLayerSharedObject.md#unregisterdisposer)

## Constructors

### constructor

• **new SingleMeshLayerSharedObject**()

#### Inherited from

SharedObjectWithSharedVisibility.constructor

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

SharedObjectWithSharedVisibility.RPC\_TYPE\_ID

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L245)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

SharedObjectWithSharedVisibility.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

SharedObjectWithSharedVisibility.isOwner

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L171)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

SharedObjectWithSharedVisibility.refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

SharedObjectWithSharedVisibility.referencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](neuroglancer_worker_rpc.RPC.md) = `null`

#### Inherited from

SharedObjectWithSharedVisibility.rpc

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

SharedObjectWithSharedVisibility.rpcId

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L170)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

SharedObjectWithSharedVisibility.unreferencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L172)

___

### visibility

• **visibility**: [`VisibilityPriorityAggregator`](neuroglancer_visibility_priority_frontend.VisibilityPriorityAggregator.md)

#### Inherited from

SharedObjectWithSharedVisibility.visibility

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/visibility_priority/frontend.ts#L92)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

SharedObjectWithSharedVisibility.wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

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

SharedObjectWithSharedVisibility.addCounterpartRef

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`SingleMeshLayerSharedObject`](neuroglancer_single_mesh_frontend._internal_.SingleMeshLayerSharedObject.md)

#### Returns

[`SingleMeshLayerSharedObject`](neuroglancer_single_mesh_frontend._internal_.SingleMeshLayerSharedObject.md)

#### Inherited from

SharedObjectWithSharedVisibility.addRef

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

SharedObjectWithSharedVisibility.counterpartRefCountReachedZero

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L234)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

SharedObjectWithSharedVisibility.dispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

SharedObjectWithSharedVisibility.disposed

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

#### Inherited from

SharedObjectWithSharedVisibility.initializeCounterpart

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:94](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/visibility_priority/frontend.ts#L94)

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

SharedObjectWithSharedVisibility.initializeSharedObject

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L175)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

SharedObjectWithSharedVisibility.ownerDispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

SharedObjectWithSharedVisibility.refCountReachedZero

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

SharedObjectWithSharedVisibility.registerCancellable

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

SharedObjectWithSharedVisibility.registerDisposer

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

SharedObjectWithSharedVisibility.registerEventListener

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L95)

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

SharedObjectWithSharedVisibility.unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)
