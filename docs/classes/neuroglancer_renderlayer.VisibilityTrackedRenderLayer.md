[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/renderlayer](../modules/neuroglancer_renderlayer.md) / VisibilityTrackedRenderLayer

# Class: VisibilityTrackedRenderLayer<View, AttachmentState\>

[neuroglancer/renderlayer](../modules/neuroglancer_renderlayer.md).VisibilityTrackedRenderLayer

Extends RenderLayer with functionality for tracking the number of panels in which the layer is
visible.

## Type parameters

| Name | Type |
| :------ | :------ |
| `View` | extends [`LayerView`](../interfaces/neuroglancer_layer.LayerView.md) = [`LayerView`](../interfaces/neuroglancer_layer.LayerView.md) |
| `AttachmentState` | `unknown` |

## Hierarchy

- [`RenderLayer`](neuroglancer_renderlayer.RenderLayer.md)

  ↳ **`VisibilityTrackedRenderLayer`**

  ↳↳ [`PerspectiveViewRenderLayer`](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md)

  ↳↳ [`SliceViewPanelRenderLayer`](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md)

  ↳↳ [`C`](neuroglancer_annotation_renderlayer._internal_.C.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#constructor)

### Properties

- [backend](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#backend)
- [disposedStacks](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#disposedstacks)
- [layerChanged](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#layerchanged)
- [layerChunkProgressInfo](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#layerchunkprogressinfo)
- [messages](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#messages)
- [redrawNeeded](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#redrawneeded)
- [refCount](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#refcount)
- [role](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#role)
- [userLayer](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#userlayer)
- [visibility](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#visibility)
- [wasDisposed](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#wasdisposed)

### Methods

- [addRef](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#addref)
- [attach](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#attach)
- [dispose](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#dispose)
- [disposed](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#disposed)
- [getValueAt](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#getvalueat)
- [handleAction](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#handleaction)
- [refCountReachedZero](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#refcountreachedzero)
- [registerCancellable](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#registercancellable)
- [registerDisposer](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#registerdisposer)
- [registerEventListener](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#registereventlistener)
- [transformPickedValue](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#transformpickedvalue)
- [unregisterDisposer](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#unregisterdisposer)
- [updateMouseState](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#updatemousestate)

## Constructors

### constructor

• **new VisibilityTrackedRenderLayer**<`View`, `AttachmentState`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `View` | extends [`LayerView`](../interfaces/neuroglancer_layer.LayerView.md) = [`LayerView`](../interfaces/neuroglancer_layer.LayerView.md) |
| `AttachmentState` | `unknown` |

#### Inherited from

[RenderLayer](neuroglancer_renderlayer.RenderLayer.md).[constructor](neuroglancer_renderlayer.RenderLayer.md#constructor)

## Properties

### backend

• **backend**: `undefined` \| [`SharedObject`](neuroglancer_worker_rpc.SharedObject.md)

#### Defined in

[src/neuroglancer/renderlayer.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L84)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RenderLayer](neuroglancer_renderlayer.RenderLayer.md).[disposedStacks](neuroglancer_renderlayer.RenderLayer.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### layerChanged

• **layerChanged**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Inherited from

[RenderLayer](neuroglancer_renderlayer.RenderLayer.md).[layerChanged](neuroglancer_renderlayer.RenderLayer.md#layerchanged)

#### Defined in

[src/neuroglancer/renderlayer.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L50)

___

### layerChunkProgressInfo

• **layerChunkProgressInfo**: [`LayerChunkProgressInfo`](neuroglancer_chunk_manager_base.LayerChunkProgressInfo.md)

#### Inherited from

[RenderLayer](neuroglancer_renderlayer.RenderLayer.md).[layerChunkProgressInfo](neuroglancer_renderlayer.RenderLayer.md#layerchunkprogressinfo)

#### Defined in

[src/neuroglancer/renderlayer.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L52)

___

### messages

• **messages**: [`MessageList`](neuroglancer_util_message_list.MessageList.md)

#### Inherited from

[RenderLayer](neuroglancer_renderlayer.RenderLayer.md).[messages](neuroglancer_renderlayer.RenderLayer.md#messages)

#### Defined in

[src/neuroglancer/renderlayer.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L49)

___

### redrawNeeded

• **redrawNeeded**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Inherited from

[RenderLayer](neuroglancer_renderlayer.RenderLayer.md).[redrawNeeded](neuroglancer_renderlayer.RenderLayer.md#redrawneeded)

#### Defined in

[src/neuroglancer/renderlayer.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L51)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RenderLayer](neuroglancer_renderlayer.RenderLayer.md).[refCount](neuroglancer_renderlayer.RenderLayer.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### role

• **role**: [`RenderLayerRole`](../enums/neuroglancer_renderlayer.RenderLayerRole.md) = `RenderLayerRole.DATA`

#### Inherited from

[RenderLayer](neuroglancer_renderlayer.RenderLayer.md).[role](neuroglancer_renderlayer.RenderLayer.md#role)

#### Defined in

[src/neuroglancer/renderlayer.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L48)

___

### userLayer

• **userLayer**: `undefined` \| [`UserLayer`](neuroglancer_layer.UserLayer.md)

#### Inherited from

[RenderLayer](neuroglancer_renderlayer.RenderLayer.md).[userLayer](neuroglancer_renderlayer.RenderLayer.md#userlayer)

#### Defined in

[src/neuroglancer/renderlayer.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L47)

___

### visibility

• **visibility**: [`VisibilityPriorityAggregator`](neuroglancer_visibility_priority_frontend.VisibilityPriorityAggregator.md)

#### Defined in

[src/neuroglancer/renderlayer.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L85)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RenderLayer](neuroglancer_renderlayer.RenderLayer.md).[wasDisposed](neuroglancer_renderlayer.RenderLayer.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`VisibilityTrackedRenderLayer`](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md)<`View`, `AttachmentState`\>

#### Returns

[`VisibilityTrackedRenderLayer`](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md)<`View`, `AttachmentState`\>

#### Inherited from

[RenderLayer](neuroglancer_renderlayer.RenderLayer.md).[addRef](neuroglancer_renderlayer.RenderLayer.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### attach

▸ **attach**(`attachment`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attachment` | [`VisibleLayerInfo`](neuroglancer_layer.VisibleLayerInfo.md)<`View`, `AttachmentState`\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/renderlayer.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L86)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RenderLayer](neuroglancer_renderlayer.RenderLayer.md).[dispose](neuroglancer_renderlayer.RenderLayer.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RenderLayer](neuroglancer_renderlayer.RenderLayer.md).[disposed](neuroglancer_renderlayer.RenderLayer.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L75)

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

[RenderLayer](neuroglancer_renderlayer.RenderLayer.md).[getValueAt](neuroglancer_renderlayer.RenderLayer.md#getvalueat)

#### Defined in

[src/neuroglancer/renderlayer.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L58)

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

[RenderLayer](neuroglancer_renderlayer.RenderLayer.md).[handleAction](neuroglancer_renderlayer.RenderLayer.md#handleaction)

#### Defined in

[src/neuroglancer/renderlayer.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L54)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RenderLayer](neuroglancer_renderlayer.RenderLayer.md).[refCountReachedZero](neuroglancer_renderlayer.RenderLayer.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L66)

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

[RenderLayer](neuroglancer_renderlayer.RenderLayer.md).[registerCancellable](neuroglancer_renderlayer.RenderLayer.md#registercancellable)

#### Defined in

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L100)

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

[RenderLayer](neuroglancer_renderlayer.RenderLayer.md).[registerDisposer](neuroglancer_renderlayer.RenderLayer.md#registerdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L76)

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

[RenderLayer](neuroglancer_renderlayer.RenderLayer.md).[registerEventListener](neuroglancer_renderlayer.RenderLayer.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L95)

___

### transformPickedValue

▸ **transformPickedValue**(`pickState`): `any`

Transform the stored pickedValue and offset associated with the retrieved pick ID into the
actual value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pickState` | [`PickState`](../interfaces/neuroglancer_layer.PickState.md) |

#### Returns

`any`

#### Inherited from

[RenderLayer](neuroglancer_renderlayer.RenderLayer.md).[transformPickedValue](neuroglancer_renderlayer.RenderLayer.md#transformpickedvalue)

#### Defined in

[src/neuroglancer/renderlayer.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L66)

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

[RenderLayer](neuroglancer_renderlayer.RenderLayer.md).[unregisterDisposer](neuroglancer_renderlayer.RenderLayer.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)

___

### updateMouseState

▸ **updateMouseState**(`_mouseState`, `_pickedValue`, `_pickedOffset`, `_data`): `void`

Optionally updates the mouse state based on the retrived pick information.  This might snap the
3-d position to the center of the picked point.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_mouseState` | [`MouseSelectionState`](neuroglancer_layer.MouseSelectionState.md) |
| `_pickedValue` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |
| `_pickedOffset` | `number` |
| `_data` | `any` |

#### Returns

`void`

#### Inherited from

[RenderLayer](neuroglancer_renderlayer.RenderLayer.md).[updateMouseState](neuroglancer_renderlayer.RenderLayer.md#updatemousestate)

#### Defined in

[src/neuroglancer/renderlayer.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L74)
