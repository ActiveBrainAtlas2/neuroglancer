[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/perspective\_view/panel](../modules/neuroglancer_perspective_view_panel.md) / [<internal\>](../modules/neuroglancer_perspective_view_panel._internal_.md) / PerspectiveViewState

# Class: PerspectiveViewState

[neuroglancer/perspective_view/panel](../modules/neuroglancer_perspective_view_panel.md).[<internal>](../modules/neuroglancer_perspective_view_panel._internal_.md).PerspectiveViewState

## Hierarchy

- [`PerspectiveViewStateBase`](../modules/neuroglancer_perspective_view_panel._internal_.md#perspectiveviewstatebase)

  ↳ **`PerspectiveViewState`**

## Table of contents

### Constructors

- [constructor](neuroglancer_perspective_view_panel._internal_.PerspectiveViewState.md#constructor)

### Properties

- [RPC\_TYPE\_ID](neuroglancer_perspective_view_panel._internal_.PerspectiveViewState.md#rpc_type_id)
- [disposedStacks](neuroglancer_perspective_view_panel._internal_.PerspectiveViewState.md#disposedstacks)
- [isOwner](neuroglancer_perspective_view_panel._internal_.PerspectiveViewState.md#isowner)
- [panel](neuroglancer_perspective_view_panel._internal_.PerspectiveViewState.md#panel)
- [refCount](neuroglancer_perspective_view_panel._internal_.PerspectiveViewState.md#refcount)
- [referencedGeneration](neuroglancer_perspective_view_panel._internal_.PerspectiveViewState.md#referencedgeneration)
- [rpc](neuroglancer_perspective_view_panel._internal_.PerspectiveViewState.md#rpc)
- [rpcId](neuroglancer_perspective_view_panel._internal_.PerspectiveViewState.md#rpcid)
- [sharedProjectionParameters](neuroglancer_perspective_view_panel._internal_.PerspectiveViewState.md#sharedprojectionparameters)
- [unreferencedGeneration](neuroglancer_perspective_view_panel._internal_.PerspectiveViewState.md#unreferencedgeneration)
- [visibility](neuroglancer_perspective_view_panel._internal_.PerspectiveViewState.md#visibility)
- [wasDisposed](neuroglancer_perspective_view_panel._internal_.PerspectiveViewState.md#wasdisposed)

### Methods

- [addCounterpartRef](neuroglancer_perspective_view_panel._internal_.PerspectiveViewState.md#addcounterpartref)
- [addRef](neuroglancer_perspective_view_panel._internal_.PerspectiveViewState.md#addref)
- [counterpartRefCountReachedZero](neuroglancer_perspective_view_panel._internal_.PerspectiveViewState.md#counterpartrefcountreachedzero)
- [dispose](neuroglancer_perspective_view_panel._internal_.PerspectiveViewState.md#dispose)
- [disposed](neuroglancer_perspective_view_panel._internal_.PerspectiveViewState.md#disposed)
- [initializeCounterpart](neuroglancer_perspective_view_panel._internal_.PerspectiveViewState.md#initializecounterpart)
- [initializeSharedObject](neuroglancer_perspective_view_panel._internal_.PerspectiveViewState.md#initializesharedobject)
- [ownerDispose](neuroglancer_perspective_view_panel._internal_.PerspectiveViewState.md#ownerdispose)
- [refCountReachedZero](neuroglancer_perspective_view_panel._internal_.PerspectiveViewState.md#refcountreachedzero)
- [registerCancellable](neuroglancer_perspective_view_panel._internal_.PerspectiveViewState.md#registercancellable)
- [registerDisposer](neuroglancer_perspective_view_panel._internal_.PerspectiveViewState.md#registerdisposer)
- [registerEventListener](neuroglancer_perspective_view_panel._internal_.PerspectiveViewState.md#registereventlistener)
- [unregisterDisposer](neuroglancer_perspective_view_panel._internal_.PerspectiveViewState.md#unregisterdisposer)

## Constructors

### constructor

• **new PerspectiveViewState**(`panel`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `panel` | [`PerspectivePanel`](neuroglancer_perspective_view_panel.PerspectivePanel.md) |

#### Overrides

PerspectiveViewStateBase.constructor

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:129](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/perspective_view/panel.ts#L129)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

PerspectiveViewStateBase.RPC\_TYPE\_ID

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L245)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

PerspectiveViewStateBase.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

PerspectiveViewStateBase.isOwner

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L171)

___

### panel

• **panel**: [`PerspectivePanel`](neuroglancer_perspective_view_panel.PerspectivePanel.md)

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:129](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/perspective_view/panel.ts#L129)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

PerspectiveViewStateBase.refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

PerspectiveViewStateBase.referencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L173)

___

### rpc

• **rpc**: ``null`` \| [`RPC`](neuroglancer_worker_rpc.RPC.md) = `null`

#### Inherited from

PerspectiveViewStateBase.rpc

#### Defined in

[src/neuroglancer/worker_rpc.ts:169](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L169)

___

### rpcId

• **rpcId**: ``null`` \| `number` = `null`

#### Inherited from

PerspectiveViewStateBase.rpcId

#### Defined in

[src/neuroglancer/worker_rpc.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L170)

___

### sharedProjectionParameters

• **sharedProjectionParameters**: [`SharedProjectionParameters`](neuroglancer_renderlayer.SharedProjectionParameters.md)<[`ProjectionParameters`](neuroglancer_projection_parameters.ProjectionParameters.md)\>

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:128](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/perspective_view/panel.ts#L128)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

PerspectiveViewStateBase.unreferencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L172)

___

### visibility

• **visibility**: [`VisibilityPriorityAggregator`](neuroglancer_visibility_priority_frontend.VisibilityPriorityAggregator.md)

#### Inherited from

PerspectiveViewStateBase.visibility

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/visibility_priority/frontend.ts#L92)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

PerspectiveViewStateBase.wasDisposed

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

PerspectiveViewStateBase.addCounterpartRef

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`PerspectiveViewState`](neuroglancer_perspective_view_panel._internal_.PerspectiveViewState.md)

#### Returns

[`PerspectiveViewState`](neuroglancer_perspective_view_panel._internal_.PerspectiveViewState.md)

#### Inherited from

PerspectiveViewStateBase.addRef

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

PerspectiveViewStateBase.counterpartRefCountReachedZero

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L234)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

PerspectiveViewStateBase.dispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

PerspectiveViewStateBase.disposed

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L75)

___

### initializeCounterpart

▸ **initializeCounterpart**(`rpc`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](neuroglancer_worker_rpc.RPC.md) |
| `options` | `any` |

#### Returns

`void`

#### Overrides

PerspectiveViewStateBase.initializeCounterpart

#### Defined in

[src/neuroglancer/perspective_view/panel.ts:133](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/perspective_view/panel.ts#L133)

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

PerspectiveViewStateBase.initializeSharedObject

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L175)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

PerspectiveViewStateBase.ownerDispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

PerspectiveViewStateBase.refCountReachedZero

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

PerspectiveViewStateBase.registerCancellable

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

PerspectiveViewStateBase.registerDisposer

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

PerspectiveViewStateBase.registerEventListener

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

PerspectiveViewStateBase.unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)
