[neuroglancer](../README.md) / [Modules](../modules.md) / [renderlayer](../modules/renderlayer.md) / VisibilityTrackedRenderLayer

# Class: VisibilityTrackedRenderLayer<View, AttachmentState\>

[renderlayer](../modules/renderlayer.md).VisibilityTrackedRenderLayer

Extends RenderLayer with functionality for tracking the number of panels in which the layer is
visible.

## Type parameters

| Name | Type |
| :------ | :------ |
| `View` | extends [`LayerView`](../interfaces/layer.LayerView.md) = [`LayerView`](../interfaces/layer.LayerView.md) |
| `AttachmentState` | `unknown` |

## Hierarchy

- [`RenderLayer`](renderlayer.RenderLayer.md)

  ↳ **`VisibilityTrackedRenderLayer`**

## Table of contents

### Constructors

- [constructor](renderlayer.VisibilityTrackedRenderLayer.md#constructor)

### Properties

- [backend](renderlayer.VisibilityTrackedRenderLayer.md#backend)
- [disposedStacks](renderlayer.VisibilityTrackedRenderLayer.md#disposedstacks)
- [layerChanged](renderlayer.VisibilityTrackedRenderLayer.md#layerchanged)
- [layerChunkProgressInfo](renderlayer.VisibilityTrackedRenderLayer.md#layerchunkprogressinfo)
- [messages](renderlayer.VisibilityTrackedRenderLayer.md#messages)
- [redrawNeeded](renderlayer.VisibilityTrackedRenderLayer.md#redrawneeded)
- [refCount](renderlayer.VisibilityTrackedRenderLayer.md#refcount)
- [role](renderlayer.VisibilityTrackedRenderLayer.md#role)
- [userLayer](renderlayer.VisibilityTrackedRenderLayer.md#userlayer)
- [visibility](renderlayer.VisibilityTrackedRenderLayer.md#visibility)
- [wasDisposed](renderlayer.VisibilityTrackedRenderLayer.md#wasdisposed)

### Methods

- [addRef](renderlayer.VisibilityTrackedRenderLayer.md#addref)
- [attach](renderlayer.VisibilityTrackedRenderLayer.md#attach)
- [dispose](renderlayer.VisibilityTrackedRenderLayer.md#dispose)
- [disposed](renderlayer.VisibilityTrackedRenderLayer.md#disposed)
- [getValueAt](renderlayer.VisibilityTrackedRenderLayer.md#getvalueat)
- [handleAction](renderlayer.VisibilityTrackedRenderLayer.md#handleaction)
- [refCountReachedZero](renderlayer.VisibilityTrackedRenderLayer.md#refcountreachedzero)
- [registerCancellable](renderlayer.VisibilityTrackedRenderLayer.md#registercancellable)
- [registerDisposer](renderlayer.VisibilityTrackedRenderLayer.md#registerdisposer)
- [registerEventListener](renderlayer.VisibilityTrackedRenderLayer.md#registereventlistener)
- [transformPickedValue](renderlayer.VisibilityTrackedRenderLayer.md#transformpickedvalue)
- [unregisterDisposer](renderlayer.VisibilityTrackedRenderLayer.md#unregisterdisposer)
- [updateMouseState](renderlayer.VisibilityTrackedRenderLayer.md#updatemousestate)

## Constructors

### constructor

• **new VisibilityTrackedRenderLayer**<`View`, `AttachmentState`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `View` | extends [`LayerView`](../interfaces/layer.LayerView.md) = [`LayerView`](../interfaces/layer.LayerView.md) |
| `AttachmentState` | `unknown` |

#### Inherited from

[RenderLayer](renderlayer.RenderLayer.md).[constructor](renderlayer.RenderLayer.md#constructor)

## Properties

### backend

• **backend**: `undefined` \| [`SharedObject`](worker_rpc.SharedObject.md)

#### Defined in

[src/neuroglancer/renderlayer.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/renderlayer.ts#L84)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RenderLayer](renderlayer.RenderLayer.md).[disposedStacks](renderlayer.RenderLayer.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L52)

___

### layerChanged

• **layerChanged**: `NullarySignal`

#### Inherited from

[RenderLayer](renderlayer.RenderLayer.md).[layerChanged](renderlayer.RenderLayer.md#layerchanged)

#### Defined in

[src/neuroglancer/renderlayer.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/renderlayer.ts#L50)

___

### layerChunkProgressInfo

• **layerChunkProgressInfo**: `LayerChunkProgressInfo`

#### Inherited from

[RenderLayer](renderlayer.RenderLayer.md).[layerChunkProgressInfo](renderlayer.RenderLayer.md#layerchunkprogressinfo)

#### Defined in

[src/neuroglancer/renderlayer.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/renderlayer.ts#L52)

___

### messages

• **messages**: `MessageList`

#### Inherited from

[RenderLayer](renderlayer.RenderLayer.md).[messages](renderlayer.RenderLayer.md#messages)

#### Defined in

[src/neuroglancer/renderlayer.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/renderlayer.ts#L49)

___

### redrawNeeded

• **redrawNeeded**: `NullarySignal`

#### Inherited from

[RenderLayer](renderlayer.RenderLayer.md).[redrawNeeded](renderlayer.RenderLayer.md#redrawneeded)

#### Defined in

[src/neuroglancer/renderlayer.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/renderlayer.ts#L51)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RenderLayer](renderlayer.RenderLayer.md).[refCount](renderlayer.RenderLayer.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L45)

___

### role

• **role**: [`RenderLayerRole`](../enums/renderlayer.RenderLayerRole.md) = `RenderLayerRole.DATA`

#### Inherited from

[RenderLayer](renderlayer.RenderLayer.md).[role](renderlayer.RenderLayer.md#role)

#### Defined in

[src/neuroglancer/renderlayer.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/renderlayer.ts#L48)

___

### userLayer

• **userLayer**: `undefined` \| [`UserLayer`](layer.UserLayer.md)

#### Inherited from

[RenderLayer](renderlayer.RenderLayer.md).[userLayer](renderlayer.RenderLayer.md#userlayer)

#### Defined in

[src/neuroglancer/renderlayer.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/renderlayer.ts#L47)

___

### visibility

• **visibility**: `VisibilityPriorityAggregator`

#### Defined in

[src/neuroglancer/renderlayer.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/renderlayer.ts#L85)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RenderLayer](renderlayer.RenderLayer.md).[wasDisposed](renderlayer.RenderLayer.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`VisibilityTrackedRenderLayer`](renderlayer.VisibilityTrackedRenderLayer.md)<`View`, `AttachmentState`\>

#### Returns

[`VisibilityTrackedRenderLayer`](renderlayer.VisibilityTrackedRenderLayer.md)<`View`, `AttachmentState`\>

#### Inherited from

[RenderLayer](renderlayer.RenderLayer.md).[addRef](renderlayer.RenderLayer.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L48)

___

### attach

▸ **attach**(`attachment`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attachment` | [`VisibleLayerInfo`](layer.VisibleLayerInfo.md)<`View`, `AttachmentState`\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/renderlayer.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/renderlayer.ts#L86)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RenderLayer](renderlayer.RenderLayer.md).[dispose](renderlayer.RenderLayer.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RenderLayer](renderlayer.RenderLayer.md).[disposed](renderlayer.RenderLayer.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L75)

___

### getValueAt

▸ **getValueAt**(`_x`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_x` | `Float32Array` |

#### Returns

`any`

#### Inherited from

[RenderLayer](renderlayer.RenderLayer.md).[getValueAt](renderlayer.RenderLayer.md#getvalueat)

#### Defined in

[src/neuroglancer/renderlayer.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/renderlayer.ts#L58)

___

### handleAction

▸ **handleAction**(`_action`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_action` | `string` |

#### Returns

`void`

#### Inherited from

[RenderLayer](renderlayer.RenderLayer.md).[handleAction](renderlayer.RenderLayer.md#handleaction)

#### Defined in

[src/neuroglancer/renderlayer.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/renderlayer.ts#L54)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RenderLayer](renderlayer.RenderLayer.md).[refCountReachedZero](renderlayer.RenderLayer.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L66)

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

[RenderLayer](renderlayer.RenderLayer.md).[registerCancellable](renderlayer.RenderLayer.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L100)

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

[RenderLayer](renderlayer.RenderLayer.md).[registerDisposer](renderlayer.RenderLayer.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L76)

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

[RenderLayer](renderlayer.RenderLayer.md).[registerEventListener](renderlayer.RenderLayer.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L95)

___

### transformPickedValue

▸ **transformPickedValue**(`pickState`): `any`

Transform the stored pickedValue and offset associated with the retrieved pick ID into the
actual value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pickState` | [`PickState`](../interfaces/layer.PickState.md) |

#### Returns

`any`

#### Inherited from

[RenderLayer](renderlayer.RenderLayer.md).[transformPickedValue](renderlayer.RenderLayer.md#transformpickedvalue)

#### Defined in

[src/neuroglancer/renderlayer.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/renderlayer.ts#L66)

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

[RenderLayer](renderlayer.RenderLayer.md).[unregisterDisposer](renderlayer.RenderLayer.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/util/disposable.ts#L85)

___

### updateMouseState

▸ **updateMouseState**(`_mouseState`, `_pickedValue`, `_pickedOffset`, `_data`): `void`

Optionally updates the mouse state based on the retrived pick information.  This might snap the
3-d position to the center of the picked point.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_mouseState` | [`MouseSelectionState`](layer.MouseSelectionState.md) |
| `_pickedValue` | `Uint64` |
| `_pickedOffset` | `number` |
| `_data` | `any` |

#### Returns

`void`

#### Inherited from

[RenderLayer](renderlayer.RenderLayer.md).[updateMouseState](renderlayer.RenderLayer.md#updatemousestate)

#### Defined in

[src/neuroglancer/renderlayer.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/renderlayer.ts#L74)
