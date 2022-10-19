[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/renderlayer](../modules/annotation_renderlayer.md) / [<internal\>](../modules/annotation_renderlayer._internal_.md) / VisibilityTrackedRenderLayer

# Class: VisibilityTrackedRenderLayer<View, AttachmentState\>

[annotation/renderlayer](../modules/annotation_renderlayer.md).[<internal>](../modules/annotation_renderlayer._internal_.md).VisibilityTrackedRenderLayer

Extends RenderLayer with functionality for tracking the number of panels in which the layer is
visible.

## Type parameters

| Name | Type |
| :------ | :------ |
| `View` | extends [`LayerView`](../interfaces/annotation_renderlayer._internal_.LayerView.md) = [`LayerView`](../interfaces/annotation_renderlayer._internal_.LayerView.md) |
| `AttachmentState` | `unknown` |

## Hierarchy

- [`RenderLayer`](annotation_annotation_layer_state._internal_.RenderLayer.md)

  ↳ **`VisibilityTrackedRenderLayer`**

  ↳↳ [`PerspectiveViewRenderLayer`](perspective_view_render_layer.PerspectiveViewRenderLayer.md)

  ↳↳ [`SliceViewPanelRenderLayer`](sliceview_renderlayer.SliceViewPanelRenderLayer.md)

  ↳↳ [`C`](annotation_renderlayer._internal_.C.md)

## Table of contents

### Constructors

- [constructor](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#constructor)

### Properties

- [backend](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#backend)
- [disposedStacks](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#disposedstacks)
- [layerChanged](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#layerchanged)
- [layerChunkProgressInfo](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#layerchunkprogressinfo)
- [messages](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#messages)
- [redrawNeeded](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#redrawneeded)
- [refCount](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#refcount)
- [role](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#role)
- [userLayer](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#userlayer)
- [visibility](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#visibility)
- [wasDisposed](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#wasdisposed)

### Methods

- [addRef](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#addref)
- [attach](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#attach)
- [dispose](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#dispose)
- [disposed](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#disposed)
- [getValueAt](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#getvalueat)
- [handleAction](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#handleaction)
- [refCountReachedZero](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#refcountreachedzero)
- [registerCancellable](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#registercancellable)
- [registerDisposer](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#registerdisposer)
- [registerEventListener](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#registereventlistener)
- [transformPickedValue](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#transformpickedvalue)
- [unregisterDisposer](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#unregisterdisposer)
- [updateMouseState](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#updatemousestate)

## Constructors

### constructor

• **new VisibilityTrackedRenderLayer**<`View`, `AttachmentState`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `View` | extends [`LayerView`](../interfaces/annotation_renderlayer._internal_.LayerView.md) = [`LayerView`](../interfaces/annotation_renderlayer._internal_.LayerView.md) |
| `AttachmentState` | `unknown` |

#### Inherited from

[RenderLayer](annotation_annotation_layer_state._internal_.RenderLayer.md).[constructor](annotation_annotation_layer_state._internal_.RenderLayer.md#constructor)

## Properties

### backend

• **backend**: `undefined` \| [`SharedObject`](annotation_annotation_layer_state._internal_.SharedObject.md)

#### Defined in

[src/neuroglancer/renderlayer.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L84)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RenderLayer](annotation_annotation_layer_state._internal_.RenderLayer.md).[disposedStacks](annotation_annotation_layer_state._internal_.RenderLayer.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### layerChanged

• **layerChanged**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Inherited from

[RenderLayer](annotation_annotation_layer_state._internal_.RenderLayer.md).[layerChanged](annotation_annotation_layer_state._internal_.RenderLayer.md#layerchanged)

#### Defined in

[src/neuroglancer/renderlayer.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L50)

___

### layerChunkProgressInfo

• **layerChunkProgressInfo**: [`LayerChunkProgressInfo`](chunk_manager_base.LayerChunkProgressInfo.md)

#### Inherited from

[RenderLayer](annotation_annotation_layer_state._internal_.RenderLayer.md).[layerChunkProgressInfo](annotation_annotation_layer_state._internal_.RenderLayer.md#layerchunkprogressinfo)

#### Defined in

[src/neuroglancer/renderlayer.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L52)

___

### messages

• **messages**: [`MessageList`](util_message_list.MessageList.md)

#### Inherited from

[RenderLayer](annotation_annotation_layer_state._internal_.RenderLayer.md).[messages](annotation_annotation_layer_state._internal_.RenderLayer.md#messages)

#### Defined in

[src/neuroglancer/renderlayer.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L49)

___

### redrawNeeded

• **redrawNeeded**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Inherited from

[RenderLayer](annotation_annotation_layer_state._internal_.RenderLayer.md).[redrawNeeded](annotation_annotation_layer_state._internal_.RenderLayer.md#redrawneeded)

#### Defined in

[src/neuroglancer/renderlayer.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L51)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RenderLayer](annotation_annotation_layer_state._internal_.RenderLayer.md).[refCount](annotation_annotation_layer_state._internal_.RenderLayer.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### role

• **role**: [`RenderLayerRole`](../enums/annotation_annotation_layer_state._internal_.RenderLayerRole.md) = `RenderLayerRole.DATA`

#### Inherited from

[RenderLayer](annotation_annotation_layer_state._internal_.RenderLayer.md).[role](annotation_annotation_layer_state._internal_.RenderLayer.md#role)

#### Defined in

[src/neuroglancer/renderlayer.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L48)

___

### userLayer

• **userLayer**: `undefined` \| [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)

#### Inherited from

[RenderLayer](annotation_annotation_layer_state._internal_.RenderLayer.md).[userLayer](annotation_annotation_layer_state._internal_.RenderLayer.md#userlayer)

#### Defined in

[src/neuroglancer/renderlayer.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L47)

___

### visibility

• **visibility**: [`VisibilityPriorityAggregator`](visibility_priority_frontend.VisibilityPriorityAggregator.md)

#### Defined in

[src/neuroglancer/renderlayer.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L85)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RenderLayer](annotation_annotation_layer_state._internal_.RenderLayer.md).[wasDisposed](annotation_annotation_layer_state._internal_.RenderLayer.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`VisibilityTrackedRenderLayer`](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md)<`View`, `AttachmentState`\>

#### Returns

[`VisibilityTrackedRenderLayer`](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md)<`View`, `AttachmentState`\>

#### Inherited from

[RenderLayer](annotation_annotation_layer_state._internal_.RenderLayer.md).[addRef](annotation_annotation_layer_state._internal_.RenderLayer.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### attach

▸ **attach**(`attachment`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attachment` | [`VisibleLayerInfo`](annotation_renderlayer._internal_.VisibleLayerInfo.md)<`View`, `AttachmentState`\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/renderlayer.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L86)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RenderLayer](annotation_annotation_layer_state._internal_.RenderLayer.md).[dispose](annotation_annotation_layer_state._internal_.RenderLayer.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RenderLayer](annotation_annotation_layer_state._internal_.RenderLayer.md).[disposed](annotation_annotation_layer_state._internal_.RenderLayer.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

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

[RenderLayer](annotation_annotation_layer_state._internal_.RenderLayer.md).[getValueAt](annotation_annotation_layer_state._internal_.RenderLayer.md#getvalueat)

#### Defined in

[src/neuroglancer/renderlayer.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L58)

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

[RenderLayer](annotation_annotation_layer_state._internal_.RenderLayer.md).[handleAction](annotation_annotation_layer_state._internal_.RenderLayer.md#handleaction)

#### Defined in

[src/neuroglancer/renderlayer.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L54)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RenderLayer](annotation_annotation_layer_state._internal_.RenderLayer.md).[refCountReachedZero](annotation_annotation_layer_state._internal_.RenderLayer.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L66)

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

[RenderLayer](annotation_annotation_layer_state._internal_.RenderLayer.md).[registerCancellable](annotation_annotation_layer_state._internal_.RenderLayer.md#registercancellable)

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

[RenderLayer](annotation_annotation_layer_state._internal_.RenderLayer.md).[registerDisposer](annotation_annotation_layer_state._internal_.RenderLayer.md#registerdisposer)

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

[RenderLayer](annotation_annotation_layer_state._internal_.RenderLayer.md).[registerEventListener](annotation_annotation_layer_state._internal_.RenderLayer.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

___

### transformPickedValue

▸ **transformPickedValue**(`pickState`): `any`

Transform the stored pickedValue and offset associated with the retrieved pick ID into the
actual value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pickState` | [`PickState`](../interfaces/annotation_annotation_layer_state._internal_.PickState.md) |

#### Returns

`any`

#### Inherited from

[RenderLayer](annotation_annotation_layer_state._internal_.RenderLayer.md).[transformPickedValue](annotation_annotation_layer_state._internal_.RenderLayer.md#transformpickedvalue)

#### Defined in

[src/neuroglancer/renderlayer.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L66)

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

[RenderLayer](annotation_annotation_layer_state._internal_.RenderLayer.md).[unregisterDisposer](annotation_annotation_layer_state._internal_.RenderLayer.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)

___

### updateMouseState

▸ **updateMouseState**(`_mouseState`, `_pickedValue`, `_pickedOffset`, `_data`): `void`

Optionally updates the mouse state based on the retrived pick information.  This might snap the
3-d position to the center of the picked point.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_mouseState` | [`MouseSelectionState`](annotation_annotation_layer_state._internal_.MouseSelectionState.md) |
| `_pickedValue` | [`Uint64`](util_uint64.Uint64.md) |
| `_pickedOffset` | `number` |
| `_data` | `any` |

#### Returns

`void`

#### Inherited from

[RenderLayer](annotation_annotation_layer_state._internal_.RenderLayer.md).[updateMouseState](annotation_annotation_layer_state._internal_.RenderLayer.md#updatemousestate)

#### Defined in

[src/neuroglancer/renderlayer.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L74)
