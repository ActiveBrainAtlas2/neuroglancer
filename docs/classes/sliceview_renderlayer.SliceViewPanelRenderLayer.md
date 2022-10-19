[neuroglancer](../README.md) / [Modules](../modules.md) / [sliceview/renderlayer](../modules/sliceview_renderlayer.md) / SliceViewPanelRenderLayer

# Class: SliceViewPanelRenderLayer<AttachmentState\>

[sliceview/renderlayer](../modules/sliceview_renderlayer.md).SliceViewPanelRenderLayer

## Type parameters

| Name | Type |
| :------ | :------ |
| `AttachmentState` | `unknown` |

## Hierarchy

- [`VisibilityTrackedRenderLayer`](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md)

  ↳ **`SliceViewPanelRenderLayer`**

  ↳↳ [`SliceViewPanelSkeletonLayer`](skeleton_frontend.SliceViewPanelSkeletonLayer.md)

## Table of contents

### Constructors

- [constructor](sliceview_renderlayer.SliceViewPanelRenderLayer.md#constructor)

### Properties

- [backend](sliceview_renderlayer.SliceViewPanelRenderLayer.md#backend)
- [disposedStacks](sliceview_renderlayer.SliceViewPanelRenderLayer.md#disposedstacks)
- [layerChanged](sliceview_renderlayer.SliceViewPanelRenderLayer.md#layerchanged)
- [layerChunkProgressInfo](sliceview_renderlayer.SliceViewPanelRenderLayer.md#layerchunkprogressinfo)
- [messages](sliceview_renderlayer.SliceViewPanelRenderLayer.md#messages)
- [redrawNeeded](sliceview_renderlayer.SliceViewPanelRenderLayer.md#redrawneeded)
- [refCount](sliceview_renderlayer.SliceViewPanelRenderLayer.md#refcount)
- [role](sliceview_renderlayer.SliceViewPanelRenderLayer.md#role)
- [userLayer](sliceview_renderlayer.SliceViewPanelRenderLayer.md#userlayer)
- [visibility](sliceview_renderlayer.SliceViewPanelRenderLayer.md#visibility)
- [wasDisposed](sliceview_renderlayer.SliceViewPanelRenderLayer.md#wasdisposed)

### Methods

- [addRef](sliceview_renderlayer.SliceViewPanelRenderLayer.md#addref)
- [attach](sliceview_renderlayer.SliceViewPanelRenderLayer.md#attach)
- [dispose](sliceview_renderlayer.SliceViewPanelRenderLayer.md#dispose)
- [disposed](sliceview_renderlayer.SliceViewPanelRenderLayer.md#disposed)
- [draw](sliceview_renderlayer.SliceViewPanelRenderLayer.md#draw)
- [getValueAt](sliceview_renderlayer.SliceViewPanelRenderLayer.md#getvalueat)
- [handleAction](sliceview_renderlayer.SliceViewPanelRenderLayer.md#handleaction)
- [isReady](sliceview_renderlayer.SliceViewPanelRenderLayer.md#isready)
- [refCountReachedZero](sliceview_renderlayer.SliceViewPanelRenderLayer.md#refcountreachedzero)
- [registerCancellable](sliceview_renderlayer.SliceViewPanelRenderLayer.md#registercancellable)
- [registerDisposer](sliceview_renderlayer.SliceViewPanelRenderLayer.md#registerdisposer)
- [registerEventListener](sliceview_renderlayer.SliceViewPanelRenderLayer.md#registereventlistener)
- [transformPickedValue](sliceview_renderlayer.SliceViewPanelRenderLayer.md#transformpickedvalue)
- [unregisterDisposer](sliceview_renderlayer.SliceViewPanelRenderLayer.md#unregisterdisposer)
- [updateMouseState](sliceview_renderlayer.SliceViewPanelRenderLayer.md#updatemousestate)

## Constructors

### constructor

• **new SliceViewPanelRenderLayer**<`AttachmentState`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AttachmentState` | `unknown` |

#### Inherited from

[VisibilityTrackedRenderLayer](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md).[constructor](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#constructor)

## Properties

### backend

• **backend**: `undefined` \| [`SharedObject`](annotation_annotation_layer_state._internal_.SharedObject.md)

#### Overrides

[VisibilityTrackedRenderLayer](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md).[backend](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#backend)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:237](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/renderlayer.ts#L237)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[VisibilityTrackedRenderLayer](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md).[disposedStacks](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### layerChanged

• **layerChanged**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Inherited from

[VisibilityTrackedRenderLayer](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md).[layerChanged](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#layerchanged)

#### Defined in

[src/neuroglancer/renderlayer.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L50)

___

### layerChunkProgressInfo

• **layerChunkProgressInfo**: [`LayerChunkProgressInfo`](chunk_manager_base.LayerChunkProgressInfo.md)

#### Inherited from

[VisibilityTrackedRenderLayer](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md).[layerChunkProgressInfo](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#layerchunkprogressinfo)

#### Defined in

[src/neuroglancer/renderlayer.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L52)

___

### messages

• **messages**: [`MessageList`](util_message_list.MessageList.md)

#### Inherited from

[VisibilityTrackedRenderLayer](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md).[messages](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#messages)

#### Defined in

[src/neuroglancer/renderlayer.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L49)

___

### redrawNeeded

• **redrawNeeded**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Inherited from

[VisibilityTrackedRenderLayer](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md).[redrawNeeded](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#redrawneeded)

#### Defined in

[src/neuroglancer/renderlayer.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L51)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[VisibilityTrackedRenderLayer](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md).[refCount](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### role

• **role**: [`RenderLayerRole`](../enums/annotation_annotation_layer_state._internal_.RenderLayerRole.md) = `RenderLayerRole.DATA`

#### Inherited from

[VisibilityTrackedRenderLayer](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md).[role](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#role)

#### Defined in

[src/neuroglancer/renderlayer.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L48)

___

### userLayer

• **userLayer**: `undefined` \| [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)

#### Inherited from

[VisibilityTrackedRenderLayer](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md).[userLayer](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#userlayer)

#### Defined in

[src/neuroglancer/renderlayer.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L47)

___

### visibility

• **visibility**: [`VisibilityPriorityAggregator`](visibility_priority_frontend.VisibilityPriorityAggregator.md)

#### Inherited from

[VisibilityTrackedRenderLayer](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md).[visibility](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#visibility)

#### Defined in

[src/neuroglancer/renderlayer.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L85)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[VisibilityTrackedRenderLayer](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md).[wasDisposed](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`SliceViewPanelRenderLayer`](sliceview_renderlayer.SliceViewPanelRenderLayer.md)<`AttachmentState`\>

#### Returns

[`SliceViewPanelRenderLayer`](sliceview_renderlayer.SliceViewPanelRenderLayer.md)<`AttachmentState`\>

#### Inherited from

[VisibilityTrackedRenderLayer](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md).[addRef](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### attach

▸ **attach**(`attachment`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attachment` | [`VisibleLayerInfo`](annotation_renderlayer._internal_.VisibleLayerInfo.md)<[`LayerView`](../interfaces/annotation_renderlayer._internal_.LayerView.md), `unknown`\> |

#### Returns

`void`

#### Inherited from

[VisibilityTrackedRenderLayer](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md).[attach](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#attach)

#### Defined in

[src/neuroglancer/renderlayer.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L86)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[VisibilityTrackedRenderLayer](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md).[dispose](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[VisibilityTrackedRenderLayer](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md).[disposed](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

___

### draw

▸ **draw**(`renderContext`, `attachment`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderContext` | [`SliceViewPanelRenderContext`](../interfaces/sliceview_renderlayer.SliceViewPanelRenderContext.md) |
| `attachment` | [`VisibleLayerInfo`](annotation_renderlayer._internal_.VisibleLayerInfo.md)<[`SliceViewPanel`](sliceview_panel.SliceViewPanel.md), `AttachmentState`\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:221](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/renderlayer.ts#L221)

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

[VisibilityTrackedRenderLayer](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md).[getValueAt](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#getvalueat)

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

[VisibilityTrackedRenderLayer](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md).[handleAction](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#handleaction)

#### Defined in

[src/neuroglancer/renderlayer.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L54)

___

### isReady

▸ **isReady**(`renderContext`, `attachment`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderContext` | [`SliceViewPanelReadyRenderContext`](../interfaces/sliceview_renderlayer.SliceViewPanelReadyRenderContext.md) |
| `attachment` | [`VisibleLayerInfo`](annotation_renderlayer._internal_.VisibleLayerInfo.md)<[`SliceViewPanel`](sliceview_panel.SliceViewPanel.md), `AttachmentState`\> |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:229](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/renderlayer.ts#L229)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[VisibilityTrackedRenderLayer](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md).[refCountReachedZero](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#refcountreachedzero)

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

[VisibilityTrackedRenderLayer](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md).[registerCancellable](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#registercancellable)

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

[VisibilityTrackedRenderLayer](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md).[registerDisposer](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#registerdisposer)

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

[VisibilityTrackedRenderLayer](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md).[registerEventListener](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#registereventlistener)

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

[VisibilityTrackedRenderLayer](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md).[transformPickedValue](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#transformpickedvalue)

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

[VisibilityTrackedRenderLayer](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md).[unregisterDisposer](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#unregisterdisposer)

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

[VisibilityTrackedRenderLayer](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md).[updateMouseState](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#updatemousestate)

#### Defined in

[src/neuroglancer/renderlayer.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L74)
