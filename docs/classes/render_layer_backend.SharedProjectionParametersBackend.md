[neuroglancer](../README.md) / [Modules](../modules.md) / [render\_layer\_backend](../modules/render_layer_backend.md) / SharedProjectionParametersBackend

# Class: SharedProjectionParametersBackend<T\>

[render_layer_backend](../modules/render_layer_backend.md).SharedProjectionParametersBackend

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ProjectionParameters`](projection_parameters.ProjectionParameters.md) = [`ProjectionParameters`](projection_parameters.ProjectionParameters.md) |

## Hierarchy

- [`SharedObjectCounterpart`](worker_rpc.SharedObjectCounterpart.md)

  ↳ **`SharedProjectionParametersBackend`**

## Implements

- [`WatchableValueChangeInterface`](../interfaces/trackable_value.WatchableValueChangeInterface.md)<`T`\>

## Table of contents

### Constructors

- [constructor](render_layer_backend.SharedProjectionParametersBackend.md#constructor)

### Properties

- [RPC\_TYPE\_ID](render_layer_backend.SharedProjectionParametersBackend.md#rpc_type_id)
- [changed](render_layer_backend.SharedProjectionParametersBackend.md#changed)
- [disposedStacks](render_layer_backend.SharedProjectionParametersBackend.md#disposedstacks)
- [isOwner](render_layer_backend.SharedProjectionParametersBackend.md#isowner)
- [oldValue](render_layer_backend.SharedProjectionParametersBackend.md#oldvalue)
- [refCount](render_layer_backend.SharedProjectionParametersBackend.md#refcount)
- [referencedGeneration](render_layer_backend.SharedProjectionParametersBackend.md#referencedgeneration)
- [rpc](render_layer_backend.SharedProjectionParametersBackend.md#rpc)
- [rpcId](render_layer_backend.SharedProjectionParametersBackend.md#rpcid)
- [unreferencedGeneration](render_layer_backend.SharedProjectionParametersBackend.md#unreferencedgeneration)
- [value](render_layer_backend.SharedProjectionParametersBackend.md#value)
- [wasDisposed](render_layer_backend.SharedProjectionParametersBackend.md#wasdisposed)

### Methods

- [addCounterpartRef](render_layer_backend.SharedProjectionParametersBackend.md#addcounterpartref)
- [addRef](render_layer_backend.SharedProjectionParametersBackend.md#addref)
- [counterpartRefCountReachedZero](render_layer_backend.SharedProjectionParametersBackend.md#counterpartrefcountreachedzero)
- [dispose](render_layer_backend.SharedProjectionParametersBackend.md#dispose)
- [disposed](render_layer_backend.SharedProjectionParametersBackend.md#disposed)
- [initializeCounterpart](render_layer_backend.SharedProjectionParametersBackend.md#initializecounterpart)
- [initializeSharedObject](render_layer_backend.SharedProjectionParametersBackend.md#initializesharedobject)
- [ownerDispose](render_layer_backend.SharedProjectionParametersBackend.md#ownerdispose)
- [refCountReachedZero](render_layer_backend.SharedProjectionParametersBackend.md#refcountreachedzero)
- [registerCancellable](render_layer_backend.SharedProjectionParametersBackend.md#registercancellable)
- [registerDisposer](render_layer_backend.SharedProjectionParametersBackend.md#registerdisposer)
- [registerEventListener](render_layer_backend.SharedProjectionParametersBackend.md#registereventlistener)
- [unregisterDisposer](render_layer_backend.SharedProjectionParametersBackend.md#unregisterdisposer)

## Constructors

### constructor

• **new SharedProjectionParametersBackend**<`T`\>(`rpc`, `options`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ProjectionParameters`](projection_parameters.ProjectionParameters.md)<`T`\> = [`ProjectionParameters`](projection_parameters.ProjectionParameters.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](worker_rpc.RPC.md) |
| `options` | `any` |

#### Overrides

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[constructor](worker_rpc.SharedObjectCounterpart.md#constructor)

#### Defined in

[src/neuroglancer/render_layer_backend.ts:71](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/render_layer_backend.ts#L71)

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

• **changed**: `Signal`<(`oldValue`: `T`, `newValue`: `T`) => `void`\>

#### Implementation of

[WatchableValueChangeInterface](../interfaces/trackable_value.WatchableValueChangeInterface.md).[changed](../interfaces/trackable_value.WatchableValueChangeInterface.md#changed)

#### Defined in

[src/neuroglancer/render_layer_backend.ts:70](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/render_layer_backend.ts#L70)

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

### oldValue

• **oldValue**: `T`

#### Defined in

[src/neuroglancer/render_layer_backend.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/render_layer_backend.ts#L69)

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

### value

• **value**: `T`

#### Implementation of

[WatchableValueChangeInterface](../interfaces/trackable_value.WatchableValueChangeInterface.md).[value](../interfaces/trackable_value.WatchableValueChangeInterface.md#value)

#### Defined in

[src/neuroglancer/render_layer_backend.ts:68](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/render_layer_backend.ts#L68)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[wasDisposed](worker_rpc.SharedObjectCounterpart.md#wasdisposed)

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

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[addCounterpartRef](worker_rpc.SharedObjectCounterpart.md#addcounterpartref)

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`SharedProjectionParametersBackend`](render_layer_backend.SharedProjectionParametersBackend.md)<`T`\>

#### Returns

[`SharedProjectionParametersBackend`](render_layer_backend.SharedProjectionParametersBackend.md)<`T`\>

#### Inherited from

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[addRef](worker_rpc.SharedObjectCounterpart.md#addref)

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

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[counterpartRefCountReachedZero](worker_rpc.SharedObjectCounterpart.md#counterpartrefcountreachedzero)

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/worker_rpc.ts#L234)

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

#### Inherited from

[SharedObjectCounterpart](worker_rpc.SharedObjectCounterpart.md).[disposed](worker_rpc.SharedObjectCounterpart.md#disposed)

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
