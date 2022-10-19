[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/skeleton/frontend](../modules/neuroglancer_skeleton_frontend.md) / SliceViewPanelSkeletonLayer

# Class: SliceViewPanelSkeletonLayer

[neuroglancer/skeleton/frontend](../modules/neuroglancer_skeleton_frontend.md).SliceViewPanelSkeletonLayer

## Hierarchy

- [`SliceViewPanelRenderLayer`](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md)

  ↳ **`SliceViewPanelSkeletonLayer`**

## Table of contents

### Constructors

- [constructor](neuroglancer_skeleton_frontend.SliceViewPanelSkeletonLayer.md#constructor)

### Properties

- [backend](neuroglancer_skeleton_frontend.SliceViewPanelSkeletonLayer.md#backend)
- [base](neuroglancer_skeleton_frontend.SliceViewPanelSkeletonLayer.md#base)
- [disposedStacks](neuroglancer_skeleton_frontend.SliceViewPanelSkeletonLayer.md#disposedstacks)
- [layerChanged](neuroglancer_skeleton_frontend.SliceViewPanelSkeletonLayer.md#layerchanged)
- [layerChunkProgressInfo](neuroglancer_skeleton_frontend.SliceViewPanelSkeletonLayer.md#layerchunkprogressinfo)
- [messages](neuroglancer_skeleton_frontend.SliceViewPanelSkeletonLayer.md#messages)
- [redrawNeeded](neuroglancer_skeleton_frontend.SliceViewPanelSkeletonLayer.md#redrawneeded)
- [refCount](neuroglancer_skeleton_frontend.SliceViewPanelSkeletonLayer.md#refcount)
- [renderHelper](neuroglancer_skeleton_frontend.SliceViewPanelSkeletonLayer.md#renderhelper)
- [renderOptions](neuroglancer_skeleton_frontend.SliceViewPanelSkeletonLayer.md#renderoptions)
- [role](neuroglancer_skeleton_frontend.SliceViewPanelSkeletonLayer.md#role)
- [userLayer](neuroglancer_skeleton_frontend.SliceViewPanelSkeletonLayer.md#userlayer)
- [visibility](neuroglancer_skeleton_frontend.SliceViewPanelSkeletonLayer.md#visibility)
- [wasDisposed](neuroglancer_skeleton_frontend.SliceViewPanelSkeletonLayer.md#wasdisposed)

### Accessors

- [gl](neuroglancer_skeleton_frontend.SliceViewPanelSkeletonLayer.md#gl)

### Methods

- [addRef](neuroglancer_skeleton_frontend.SliceViewPanelSkeletonLayer.md#addref)
- [attach](neuroglancer_skeleton_frontend.SliceViewPanelSkeletonLayer.md#attach)
- [dispose](neuroglancer_skeleton_frontend.SliceViewPanelSkeletonLayer.md#dispose)
- [disposed](neuroglancer_skeleton_frontend.SliceViewPanelSkeletonLayer.md#disposed)
- [draw](neuroglancer_skeleton_frontend.SliceViewPanelSkeletonLayer.md#draw)
- [getValueAt](neuroglancer_skeleton_frontend.SliceViewPanelSkeletonLayer.md#getvalueat)
- [handleAction](neuroglancer_skeleton_frontend.SliceViewPanelSkeletonLayer.md#handleaction)
- [isReady](neuroglancer_skeleton_frontend.SliceViewPanelSkeletonLayer.md#isready)
- [refCountReachedZero](neuroglancer_skeleton_frontend.SliceViewPanelSkeletonLayer.md#refcountreachedzero)
- [registerCancellable](neuroglancer_skeleton_frontend.SliceViewPanelSkeletonLayer.md#registercancellable)
- [registerDisposer](neuroglancer_skeleton_frontend.SliceViewPanelSkeletonLayer.md#registerdisposer)
- [registerEventListener](neuroglancer_skeleton_frontend.SliceViewPanelSkeletonLayer.md#registereventlistener)
- [transformPickedValue](neuroglancer_skeleton_frontend.SliceViewPanelSkeletonLayer.md#transformpickedvalue)
- [unregisterDisposer](neuroglancer_skeleton_frontend.SliceViewPanelSkeletonLayer.md#unregisterdisposer)
- [updateMouseState](neuroglancer_skeleton_frontend.SliceViewPanelSkeletonLayer.md#updatemousestate)

## Constructors

### constructor

• **new SliceViewPanelSkeletonLayer**(`base`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `base` | [`SkeletonLayer`](neuroglancer_skeleton_frontend.SkeletonLayer.md) |

#### Overrides

[SliceViewPanelRenderLayer](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md).[constructor](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#constructor)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:534](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L534)

## Properties

### backend

• **backend**: `undefined` \| [`SharedObject`](neuroglancer_worker_rpc.SharedObject.md)

#### Inherited from

[SliceViewPanelRenderLayer](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md).[backend](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#backend)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:237](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/renderlayer.ts#L237)

___

### base

• **base**: [`SkeletonLayer`](neuroglancer_skeleton_frontend.SkeletonLayer.md)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[SliceViewPanelRenderLayer](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md).[disposedStacks](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### layerChanged

• **layerChanged**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Inherited from

[SliceViewPanelRenderLayer](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md).[layerChanged](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#layerchanged)

#### Defined in

[src/neuroglancer/renderlayer.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L50)

___

### layerChunkProgressInfo

• **layerChunkProgressInfo**: [`LayerChunkProgressInfo`](neuroglancer_chunk_manager_base.LayerChunkProgressInfo.md)

#### Inherited from

[SliceViewPanelRenderLayer](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md).[layerChunkProgressInfo](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#layerchunkprogressinfo)

#### Defined in

[src/neuroglancer/renderlayer.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L52)

___

### messages

• **messages**: [`MessageList`](neuroglancer_util_message_list.MessageList.md)

#### Inherited from

[SliceViewPanelRenderLayer](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md).[messages](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#messages)

#### Defined in

[src/neuroglancer/renderlayer.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L49)

___

### redrawNeeded

• **redrawNeeded**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Inherited from

[SliceViewPanelRenderLayer](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md).[redrawNeeded](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#redrawneeded)

#### Defined in

[src/neuroglancer/renderlayer.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L51)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[SliceViewPanelRenderLayer](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md).[refCount](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### renderHelper

• `Private` **renderHelper**: [`RenderHelper`](neuroglancer_skeleton_frontend._internal_.RenderHelper.md)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:532](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L532)

___

### renderOptions

• `Private` **renderOptions**: [`ViewSpecificSkeletonRenderingOptions`](../interfaces/neuroglancer_skeleton_frontend.ViewSpecificSkeletonRenderingOptions.md)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:533](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L533)

___

### role

• **role**: [`RenderLayerRole`](../enums/neuroglancer_renderlayer.RenderLayerRole.md) = `RenderLayerRole.DATA`

#### Inherited from

[SliceViewPanelRenderLayer](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md).[role](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#role)

#### Defined in

[src/neuroglancer/renderlayer.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L48)

___

### userLayer

• **userLayer**: `undefined` \| [`UserLayer`](neuroglancer_layer.UserLayer.md)

#### Inherited from

[SliceViewPanelRenderLayer](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md).[userLayer](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#userlayer)

#### Defined in

[src/neuroglancer/renderlayer.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L47)

___

### visibility

• **visibility**: [`VisibilityPriorityAggregator`](neuroglancer_visibility_priority_frontend.VisibilityPriorityAggregator.md)

#### Inherited from

[SliceViewPanelRenderLayer](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md).[visibility](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#visibility)

#### Defined in

[src/neuroglancer/renderlayer.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L85)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[SliceViewPanelRenderLayer](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md).[wasDisposed](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### gl

• `get` **gl**(): [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Returns

[`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:544](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L544)

## Methods

### addRef

▸ **addRef**(): [`SliceViewPanelSkeletonLayer`](neuroglancer_skeleton_frontend.SliceViewPanelSkeletonLayer.md)

#### Returns

[`SliceViewPanelSkeletonLayer`](neuroglancer_skeleton_frontend.SliceViewPanelSkeletonLayer.md)

#### Inherited from

[SliceViewPanelRenderLayer](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md).[addRef](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#addref)

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

[SliceViewPanelRenderLayer](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md).[attach](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#attach)

#### Defined in

[src/neuroglancer/renderlayer.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L86)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[SliceViewPanelRenderLayer](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md).[dispose](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[SliceViewPanelRenderLayer](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md).[disposed](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L75)

___

### draw

▸ **draw**(`renderContext`, `attachment`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderContext` | [`SliceViewPanelRenderContext`](../interfaces/neuroglancer_sliceview_renderlayer.SliceViewPanelRenderContext.md) |
| `attachment` | [`VisibleLayerInfo`](neuroglancer_layer.VisibleLayerInfo.md)<[`SliceViewPanel`](neuroglancer_sliceview_panel.SliceViewPanel.md), [`ThreeDimensionalRenderLayerAttachmentState`](../interfaces/neuroglancer_renderlayer.ThreeDimensionalRenderLayerAttachmentState.md)\> |

#### Returns

`void`

#### Overrides

[SliceViewPanelRenderLayer](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md).[draw](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#draw)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:548](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L548)

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

[SliceViewPanelRenderLayer](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md).[getValueAt](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#getvalueat)

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

[SliceViewPanelRenderLayer](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md).[handleAction](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#handleaction)

#### Defined in

[src/neuroglancer/renderlayer.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L54)

___

### isReady

▸ **isReady**(): `boolean`

#### Returns

`boolean`

#### Overrides

[SliceViewPanelRenderLayer](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md).[isReady](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#isready)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:554](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L554)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[SliceViewPanelRenderLayer](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md).[refCountReachedZero](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#refcountreachedzero)

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

[SliceViewPanelRenderLayer](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md).[registerCancellable](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#registercancellable)

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

[SliceViewPanelRenderLayer](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md).[registerDisposer](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#registerdisposer)

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

[SliceViewPanelRenderLayer](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md).[registerEventListener](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#registereventlistener)

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

[SliceViewPanelRenderLayer](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md).[transformPickedValue](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#transformpickedvalue)

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

[SliceViewPanelRenderLayer](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md).[unregisterDisposer](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#unregisterdisposer)

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

[SliceViewPanelRenderLayer](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md).[updateMouseState](neuroglancer_sliceview_renderlayer.SliceViewPanelRenderLayer.md#updatemousestate)

#### Defined in

[src/neuroglancer/renderlayer.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L74)
