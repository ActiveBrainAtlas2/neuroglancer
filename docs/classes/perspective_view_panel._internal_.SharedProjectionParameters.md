[neuroglancer](../README.md) / [Modules](../modules.md) / [perspective\_view/panel](../modules/perspective_view_panel.md) / [<internal\>](../modules/perspective_view_panel._internal_.md) / SharedProjectionParameters

# Class: SharedProjectionParameters<T\>

[perspective_view/panel](../modules/perspective_view_panel.md).[<internal>](../modules/perspective_view_panel._internal_.md).SharedProjectionParameters

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ProjectionParameters`](annotation_base._internal_.ProjectionParameters.md) = [`ProjectionParameters`](annotation_base._internal_.ProjectionParameters.md) |

## Hierarchy

- [`SharedObject`](annotation_annotation_layer_state._internal_.SharedObject.md)

  ↳ **`SharedProjectionParameters`**

## Table of contents

### Constructors

- [constructor](perspective_view_panel._internal_.SharedProjectionParameters.md#constructor)

### Properties

- [RPC\_TYPE\_ID](perspective_view_panel._internal_.SharedProjectionParameters.md#rpc_type_id)
- [base](perspective_view_panel._internal_.SharedProjectionParameters.md#base)
- [disposedStacks](perspective_view_panel._internal_.SharedProjectionParameters.md#disposedstacks)
- [isOwner](perspective_view_panel._internal_.SharedProjectionParameters.md#isowner)
- [prevDisplayDimensionRenderInfo](perspective_view_panel._internal_.SharedProjectionParameters.md#prevdisplaydimensionrenderinfo)
- [refCount](perspective_view_panel._internal_.SharedProjectionParameters.md#refcount)
- [referencedGeneration](perspective_view_panel._internal_.SharedProjectionParameters.md#referencedgeneration)
- [rpc](perspective_view_panel._internal_.SharedProjectionParameters.md#rpc)
- [rpcId](perspective_view_panel._internal_.SharedProjectionParameters.md#rpcid)
- [unreferencedGeneration](perspective_view_panel._internal_.SharedProjectionParameters.md#unreferencedgeneration)
- [update](perspective_view_panel._internal_.SharedProjectionParameters.md#update)
- [updateInterval](perspective_view_panel._internal_.SharedProjectionParameters.md#updateinterval)
- [wasDisposed](perspective_view_panel._internal_.SharedProjectionParameters.md#wasdisposed)

### Methods

- [addCounterpartRef](perspective_view_panel._internal_.SharedProjectionParameters.md#addcounterpartref)
- [addRef](perspective_view_panel._internal_.SharedProjectionParameters.md#addref)
- [counterpartRefCountReachedZero](perspective_view_panel._internal_.SharedProjectionParameters.md#counterpartrefcountreachedzero)
- [dispose](perspective_view_panel._internal_.SharedProjectionParameters.md#dispose)
- [disposed](perspective_view_panel._internal_.SharedProjectionParameters.md#disposed)
- [flush](perspective_view_panel._internal_.SharedProjectionParameters.md#flush)
- [initializeCounterpart](perspective_view_panel._internal_.SharedProjectionParameters.md#initializecounterpart)
- [initializeSharedObject](perspective_view_panel._internal_.SharedProjectionParameters.md#initializesharedobject)
- [ownerDispose](perspective_view_panel._internal_.SharedProjectionParameters.md#ownerdispose)
- [refCountReachedZero](perspective_view_panel._internal_.SharedProjectionParameters.md#refcountreachedzero)
- [registerCancellable](perspective_view_panel._internal_.SharedProjectionParameters.md#registercancellable)
- [registerDisposer](perspective_view_panel._internal_.SharedProjectionParameters.md#registerdisposer)
- [registerEventListener](perspective_view_panel._internal_.SharedProjectionParameters.md#registereventlistener)
- [unregisterDisposer](perspective_view_panel._internal_.SharedProjectionParameters.md#unregisterdisposer)

## Constructors

### constructor

• **new SharedProjectionParameters**<`T`\>(`rpc`, `base`, `updateInterval?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ProjectionParameters`](annotation_base._internal_.ProjectionParameters.md)<`T`\> = [`ProjectionParameters`](annotation_base._internal_.ProjectionParameters.md) |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `rpc` | [`RPC`](annotation_annotation_layer_state._internal_.RPC.md) | `undefined` |
| `base` | [`WatchableValueChangeInterface`](../interfaces/perspective_view_panel._internal_.WatchableValueChangeInterface.md)<`T`\> | `undefined` |
| `updateInterval` | `number` | `10` |

#### Overrides

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[constructor](annotation_annotation_layer_state._internal_.SharedObject.md#constructor)

#### Defined in

[src/neuroglancer/renderlayer.ts:195](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L195)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[RPC_TYPE_ID](annotation_annotation_layer_state._internal_.SharedObject.md#rpc_type_id)

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L245)

___

### base

• **base**: [`WatchableValueChangeInterface`](../interfaces/perspective_view_panel._internal_.WatchableValueChangeInterface.md)<`T`\>

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[disposedStacks](annotation_annotation_layer_state._internal_.SharedObject.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[isOwner](annotation_annotation_layer_state._internal_.SharedObject.md#isowner)

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L171)

___

### prevDisplayDimensionRenderInfo

• `Private` **prevDisplayDimensionRenderInfo**: `undefined` \| [`DisplayDimensionRenderInfo`](../interfaces/annotation_base._internal_.DisplayDimensionRenderInfo.md) = `undefined`

#### Defined in

[src/neuroglancer/renderlayer.ts:194](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L194)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[refCount](annotation_annotation_layer_state._internal_.SharedObject.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[referencedGeneration](annotation_annotation_layer_state._internal_.SharedObject.md#referencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](annotation_annotation_layer_state._internal_.RPC.md) = `null`

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[rpc](annotation_annotation_layer_state._internal_.SharedObject.md#rpc)

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[rpcId](annotation_annotation_layer_state._internal_.SharedObject.md#rpcid)

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L170)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[unreferencedGeneration](annotation_annotation_layer_state._internal_.SharedObject.md#unreferencedgeneration)

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L172)

___

### update

• `Private` **update**: [`DebouncedFunc`](../interfaces/annotation_annotation_layer_state._internal_.DebouncedFunc.md)<(`_oldValue`: `T`, `newValue`: `T`) => `void`\>

#### Defined in

[src/neuroglancer/renderlayer.ts:206](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L206)

___

### updateInterval

• **updateInterval**: `number` = `10`

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[wasDisposed](annotation_annotation_layer_state._internal_.SharedObject.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

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

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[addCounterpartRef](annotation_annotation_layer_state._internal_.SharedObject.md#addcounterpartref)

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`SharedProjectionParameters`](perspective_view_panel._internal_.SharedProjectionParameters.md)<`T`\>

#### Returns

[`SharedProjectionParameters`](perspective_view_panel._internal_.SharedProjectionParameters.md)<`T`\>

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[addRef](annotation_annotation_layer_state._internal_.SharedObject.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

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

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[counterpartRefCountReachedZero](annotation_annotation_layer_state._internal_.SharedObject.md#counterpartrefcountreachedzero)

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L234)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[dispose](annotation_annotation_layer_state._internal_.SharedObject.md#dispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[disposed](annotation_annotation_layer_state._internal_.SharedObject.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

___

### flush

▸ **flush**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/renderlayer.ts:202](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L202)

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

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[initializeCounterpart](annotation_annotation_layer_state._internal_.SharedObject.md#initializecounterpart)

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

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[initializeSharedObject](annotation_annotation_layer_state._internal_.SharedObject.md#initializesharedobject)

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L175)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[ownerDispose](annotation_annotation_layer_state._internal_.SharedObject.md#ownerdispose)

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[refCountReachedZero](annotation_annotation_layer_state._internal_.SharedObject.md#refcountreachedzero)

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

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[registerCancellable](annotation_annotation_layer_state._internal_.SharedObject.md#registercancellable)

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

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[registerDisposer](annotation_annotation_layer_state._internal_.SharedObject.md#registerdisposer)

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

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[registerEventListener](annotation_annotation_layer_state._internal_.SharedObject.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

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

[SharedObject](annotation_annotation_layer_state._internal_.SharedObject.md).[unregisterDisposer](annotation_annotation_layer_state._internal_.SharedObject.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)
