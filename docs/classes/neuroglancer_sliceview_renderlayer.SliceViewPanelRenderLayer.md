[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/renderlayer](../modules/neuroglancer_sliceview_renderlayer.md) / SliceViewPanelRenderLayer

# Class: SliceViewPanelRenderLayer<AttachmentState\>

[neuroglancer/sliceview/renderlayer](../modules/neuroglancer_sliceview_renderlayer.md).SliceViewPanelRenderLayer

## Type parameters

| Name | Type |
| :------ | :------ |
| `AttachmentState` | `unknown` |

## Hierarchy

- [`VisibilityTrackedRenderLayer`](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md)

  ↳ **`SliceViewPanelRenderLayer`**

  ↳↳ [`SliceViewPanelSkeletonLayer`](neuroglancer_skeleton_frontend.SliceViewPanelSkeletonLayer.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#constructor)

### Properties

- [backend](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#backend)
- [disposedStacks](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#disposedstacks)
- [layerChanged](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#layerchanged)
- [layerChunkProgressInfo](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#layerchunkprogressinfo)
- [messages](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#messages)
- [redrawNeeded](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#redrawneeded)
- [refCount](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#refcount)
- [role](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#role)
- [userLayer](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#userlayer)
- [visibility](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#visibility)
- [wasDisposed](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#wasdisposed)

### Methods

- [addRef](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#addref)
- [attach](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#attach)
- [dispose](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#dispose)
- [disposed](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#disposed)
- [draw](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#draw)
- [getValueAt](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#getvalueat)
- [handleAction](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#handleaction)
- [isReady](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#isready)
- [refCountReachedZero](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#refcountreachedzero)
- [registerCancellable](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#registercancellable)
- [registerDisposer](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#registerdisposer)
- [registerEventListener](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#registereventlistener)
- [transformPickedValue](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#transformpickedvalue)
- [unregisterDisposer](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#unregisterdisposer)
- [updateMouseState](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#updatemousestate)

## Constructors

### constructor

• **new SliceViewPanelRenderLayer**<`AttachmentState`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AttachmentState` | `unknown` |

#### Inherited from

[VisibilityTrackedRenderLayer](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md).[constructor](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#constructor)

## Properties

### backend

• **backend**: `undefined` \| [`SharedObject`](neuroglancer_worker_rpc.SharedObject.md)

#### Overrides

[VisibilityTrackedRenderLayer](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md).[backend](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#backend)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:237](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/renderlayer.ts#L237)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[VisibilityTrackedRenderLayer](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md).[disposedStacks](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### layerChanged

• **layerChanged**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Inherited from

[VisibilityTrackedRenderLayer](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md).[layerChanged](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#layerchanged)

#### Defined in

[src/neuroglancer/renderlayer.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L50)

___

### layerChunkProgressInfo

• **layerChunkProgressInfo**: [`LayerChunkProgressInfo`](neuroglancer_chunk_manager_base.LayerChunkProgressInfo.md)

#### Inherited from

[VisibilityTrackedRenderLayer](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md).[layerChunkProgressInfo](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#layerchunkprogressinfo)

#### Defined in

[src/neuroglancer/renderlayer.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L52)

___

### messages

• **messages**: [`MessageList`](neuroglancer_util_message_list.MessageList.md)

#### Inherited from

[VisibilityTrackedRenderLayer](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md).[messages](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#messages)

#### Defined in

[src/neuroglancer/renderlayer.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L49)

___

### redrawNeeded

• **redrawNeeded**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Inherited from

[VisibilityTrackedRenderLayer](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md).[redrawNeeded](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#redrawneeded)

#### Defined in

[src/neuroglancer/renderlayer.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L51)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[VisibilityTrackedRenderLayer](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md).[refCount](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### role

• **role**: [`RenderLayerRole`](../enums/neuroglancer_renderlayer.RenderLayerRole.md) = `RenderLayerRole.DATA`

#### Inherited from

[VisibilityTrackedRenderLayer](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md).[role](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#role)

#### Defined in

[src/neuroglancer/renderlayer.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L48)

___

### userLayer

• **userLayer**: `undefined` \| [`UserLayer`](neuroglancer_layer.UserLayer.md)

#### Inherited from

[VisibilityTrackedRenderLayer](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md).[userLayer](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#userlayer)

#### Defined in

[src/neuroglancer/renderlayer.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L47)

___

### visibility

• **visibility**: [`VisibilityPriorityAggregator`](neuroglancer_visibility_priority_frontend.VisibilityPriorityAggregator.md)

#### Inherited from

[VisibilityTrackedRenderLayer](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md).[visibility](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#visibility)

#### Defined in

[src/neuroglancer/renderlayer.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L85)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[VisibilityTrackedRenderLayer](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md).[wasDisposed](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Methods

### addRef

▸ **addRef**(): [`SliceViewPanelRenderLayer`](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md)<`AttachmentState`\>

#### Returns

[`SliceViewPanelRenderLayer`](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md)<`AttachmentState`\>

#### Inherited from

[VisibilityTrackedRenderLayer](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md).[addRef](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### attach

▸ **attach**(`attachment`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attachment` | [`VisibleLayerInfo`](neuroglancer_layer.VisibleLayerInfo.md)<[`LayerView`](../interfaces/neuroglancer_layer.LayerView.md), `unknown`\> |

#### Returns

`void`

#### Inherited from

[VisibilityTrackedRenderLayer](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md).[attach](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#attach)

#### Defined in

[src/neuroglancer/renderlayer.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L86)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[VisibilityTrackedRenderLayer](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md).[dispose](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[VisibilityTrackedRenderLayer](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md).[disposed](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L75)

___

### draw

▸ **draw**(`renderContext`, `attachment`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderContext` | [`SliceViewPanelRenderContext`](../interfaces/neuroglancer_sliceview_renderlayer.SliceViewPanelRenderContext.md) |
| `attachment` | [`VisibleLayerInfo`](neuroglancer_layer.VisibleLayerInfo.md)<[`SliceViewPanel`](neuroglancer_sliceview_panel.SliceViewPanel.md), `AttachmentState`\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:221](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/renderlayer.ts#L221)

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

[VisibilityTrackedRenderLayer](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md).[getValueAt](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#getvalueat)

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

[VisibilityTrackedRenderLayer](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md).[handleAction](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#handleaction)

#### Defined in

[src/neuroglancer/renderlayer.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L54)

___

### isReady

▸ **isReady**(`renderContext`, `attachment`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderContext` | [`SliceViewPanelReadyRenderContext`](../interfaces/neuroglancer_sliceview_renderlayer.SliceViewPanelReadyRenderContext.md) |
| `attachment` | [`VisibleLayerInfo`](neuroglancer_layer.VisibleLayerInfo.md)<[`SliceViewPanel`](neuroglancer_sliceview_panel.SliceViewPanel.md), `AttachmentState`\> |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:229](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/renderlayer.ts#L229)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[VisibilityTrackedRenderLayer](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md).[refCountReachedZero](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#refcountreachedzero)

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

[VisibilityTrackedRenderLayer](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md).[registerCancellable](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#registercancellable)

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

[VisibilityTrackedRenderLayer](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md).[registerDisposer](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#registerdisposer)

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

[VisibilityTrackedRenderLayer](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md).[registerEventListener](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#registereventlistener)

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

[VisibilityTrackedRenderLayer](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md).[transformPickedValue](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#transformpickedvalue)

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

[VisibilityTrackedRenderLayer](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md).[unregisterDisposer](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#unregisterdisposer)

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

[VisibilityTrackedRenderLayer](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md).[updateMouseState](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#updatemousestate)

#### Defined in

[src/neuroglancer/renderlayer.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L74)
