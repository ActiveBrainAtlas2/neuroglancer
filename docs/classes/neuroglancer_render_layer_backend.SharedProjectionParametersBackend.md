[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/render\_layer\_backend](../modules/neuroglancer_render_layer_backend.md) / SharedProjectionParametersBackend

# Class: SharedProjectionParametersBackend<T\>

[neuroglancer/render_layer_backend](../modules/neuroglancer_render_layer_backend.md).SharedProjectionParametersBackend

Base class for defining a SharedObject type that will never be owned.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ProjectionParameters`](neuroglancer_projection_parameters.ProjectionParameters.md) = [`ProjectionParameters`](neuroglancer_projection_parameters.ProjectionParameters.md) |

## Hierarchy

- [`SharedObjectCounterpart`](neuroglancer_worker_rpc.SharedObjectCounterpart.md)

  ↳ **`SharedProjectionParametersBackend`**

## Implements

- [`WatchableValueChangeInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueChangeInterface.md)<`T`\>

## Table of contents

### Constructors

- [constructor](neuroglancer_render_layer_backend.SharedProjectionParametersBackend.md#constructor)

### Properties

- [RPC\_TYPE\_ID](neuroglancer_render_layer_backend.SharedProjectionParametersBackend.md#rpc_type_id)
- [changed](neuroglancer_render_layer_backend.SharedProjectionParametersBackend.md#changed)
- [disposedStacks](neuroglancer_render_layer_backend.SharedProjectionParametersBackend.md#disposedstacks)
- [isOwner](neuroglancer_render_layer_backend.SharedProjectionParametersBackend.md#isowner)
- [oldValue](neuroglancer_render_layer_backend.SharedProjectionParametersBackend.md#oldvalue)
- [refCount](neuroglancer_render_layer_backend.SharedProjectionParametersBackend.md#refcount)
- [referencedGeneration](neuroglancer_render_layer_backend.SharedProjectionParametersBackend.md#referencedgeneration)
- [rpc](neuroglancer_render_layer_backend.SharedProjectionParametersBackend.md#rpc)
- [rpcId](neuroglancer_render_layer_backend.SharedProjectionParametersBackend.md#rpcid)
- [unreferencedGeneration](neuroglancer_render_layer_backend.SharedProjectionParametersBackend.md#unreferencedgeneration)
- [value](neuroglancer_render_layer_backend.SharedProjectionParametersBackend.md#value)
- [wasDisposed](neuroglancer_render_layer_backend.SharedProjectionParametersBackend.md#wasdisposed)

### Methods

- [addCounterpartRef](neuroglancer_render_layer_backend.SharedProjectionParametersBackend.md#addcounterpartref)
- [addRef](neuroglancer_render_layer_backend.SharedProjectionParametersBackend.md#addref)
- [counterpartRefCountReachedZero](neuroglancer_render_layer_backend.SharedProjectionParametersBackend.md#counterpartrefcountreachedzero)
- [dispose](neuroglancer_render_layer_backend.SharedProjectionParametersBackend.md#dispose)
- [disposed](neuroglancer_render_layer_backend.SharedProjectionParametersBackend.md#disposed)
- [initializeCounterpart](neuroglancer_render_layer_backend.SharedProjectionParametersBackend.md#initializecounterpart)
- [initializeSharedObject](neuroglancer_render_layer_backend.SharedProjectionParametersBackend.md#initializesharedobject)
- [ownerDispose](neuroglancer_render_layer_backend.SharedProjectionParametersBackend.md#ownerdispose)
- [refCountReachedZero](neuroglancer_render_layer_backend.SharedProjectionParametersBackend.md#refcountreachedzero)
- [registerCancellable](neuroglancer_render_layer_backend.SharedProjectionParametersBackend.md#registercancellable)
- [registerDisposer](neuroglancer_render_layer_backend.SharedProjectionParametersBackend.md#registerdisposer)
- [registerEventListener](neuroglancer_render_layer_backend.SharedProjectionParametersBackend.md#registereventlistener)
- [unregisterDisposer](neuroglancer_render_layer_backend.SharedProjectionParametersBackend.md#unregisterdisposer)

## Constructors

### constructor

• **new SharedProjectionParametersBackend**<`T`\>(`rpc`, `options`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ProjectionParameters`](neuroglancer_projection_parameters.ProjectionParameters.md)<`T`\> = [`ProjectionParameters`](neuroglancer_projection_parameters.ProjectionParameters.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](neuroglancer_worker_rpc.RPC.md) |
| `options` | `any` |

#### Overrides

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[constructor](neuroglancer_worker_rpc.SharedObjectCounterpart.md#constructor)

#### Defined in

[src/neuroglancer/render_layer_backend.ts:71](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/render_layer_backend.ts#L71)

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

• **changed**: [`Signal`](neuroglancer_util_signal.Signal.md)<(`oldValue`: `T`, `newValue`: `T`) => `void`\>

#### Implementation of

[WatchableValueChangeInterface](../interfaces/neuroglancer_trackable_value.WatchableValueChangeInterface.md).[changed](../interfaces/neuroglancer_trackable_value.WatchableValueChangeInterface.md#changed)

#### Defined in

[src/neuroglancer/render_layer_backend.ts:70](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/render_layer_backend.ts#L70)

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

### oldValue

• **oldValue**: `T`

#### Defined in

[src/neuroglancer/render_layer_backend.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/render_layer_backend.ts#L69)

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

### value

• **value**: `T`

#### Implementation of

[WatchableValueChangeInterface](../interfaces/neuroglancer_trackable_value.WatchableValueChangeInterface.md).[value](../interfaces/neuroglancer_trackable_value.WatchableValueChangeInterface.md#value)

#### Defined in

[src/neuroglancer/render_layer_backend.ts:68](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/render_layer_backend.ts#L68)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[wasDisposed](neuroglancer_worker_rpc.SharedObjectCounterpart.md#wasdisposed)

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

[SharedObjectCounterpart](neuroglancer_worker_rpc.SharedObjectCounterpart.md).[addCounterpartRef](neuroglancer_worker_rpc.SharedObjectCounterpart.md#addcounterpartref)

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`SharedProjectionParametersBackend`](neuroglancer_render_layer_backend.SharedProjectionParametersBackend.md)<`T`\>

#### Returns

[`SharedProjectionParametersBackend`](neuroglancer_render_layer_backend.SharedProjectionParametersBackend.md)<`T`\>

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
