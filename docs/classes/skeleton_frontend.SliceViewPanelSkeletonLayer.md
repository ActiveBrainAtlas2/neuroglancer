[neuroglancer](../README.md) / [Modules](../modules.md) / [skeleton/frontend](../modules/skeleton_frontend.md) / SliceViewPanelSkeletonLayer

# Class: SliceViewPanelSkeletonLayer

[skeleton/frontend](../modules/skeleton_frontend.md).SliceViewPanelSkeletonLayer

## Hierarchy

- [`SliceViewPanelRenderLayer`](sliceview_renderlayer.SliceViewPanelRenderLayer.md)

  ↳ **`SliceViewPanelSkeletonLayer`**

## Table of contents

### Constructors

- [constructor](skeleton_frontend.SliceViewPanelSkeletonLayer.md#constructor)

### Properties

- [backend](skeleton_frontend.SliceViewPanelSkeletonLayer.md#backend)
- [base](skeleton_frontend.SliceViewPanelSkeletonLayer.md#base)
- [disposedStacks](skeleton_frontend.SliceViewPanelSkeletonLayer.md#disposedstacks)
- [layerChanged](skeleton_frontend.SliceViewPanelSkeletonLayer.md#layerchanged)
- [layerChunkProgressInfo](skeleton_frontend.SliceViewPanelSkeletonLayer.md#layerchunkprogressinfo)
- [messages](skeleton_frontend.SliceViewPanelSkeletonLayer.md#messages)
- [redrawNeeded](skeleton_frontend.SliceViewPanelSkeletonLayer.md#redrawneeded)
- [refCount](skeleton_frontend.SliceViewPanelSkeletonLayer.md#refcount)
- [renderHelper](skeleton_frontend.SliceViewPanelSkeletonLayer.md#renderhelper)
- [renderOptions](skeleton_frontend.SliceViewPanelSkeletonLayer.md#renderoptions)
- [role](skeleton_frontend.SliceViewPanelSkeletonLayer.md#role)
- [userLayer](skeleton_frontend.SliceViewPanelSkeletonLayer.md#userlayer)
- [visibility](skeleton_frontend.SliceViewPanelSkeletonLayer.md#visibility)
- [wasDisposed](skeleton_frontend.SliceViewPanelSkeletonLayer.md#wasdisposed)

### Accessors

- [gl](skeleton_frontend.SliceViewPanelSkeletonLayer.md#gl)

### Methods

- [addRef](skeleton_frontend.SliceViewPanelSkeletonLayer.md#addref)
- [attach](skeleton_frontend.SliceViewPanelSkeletonLayer.md#attach)
- [dispose](skeleton_frontend.SliceViewPanelSkeletonLayer.md#dispose)
- [disposed](skeleton_frontend.SliceViewPanelSkeletonLayer.md#disposed)
- [draw](skeleton_frontend.SliceViewPanelSkeletonLayer.md#draw)
- [getValueAt](skeleton_frontend.SliceViewPanelSkeletonLayer.md#getvalueat)
- [handleAction](skeleton_frontend.SliceViewPanelSkeletonLayer.md#handleaction)
- [isReady](skeleton_frontend.SliceViewPanelSkeletonLayer.md#isready)
- [refCountReachedZero](skeleton_frontend.SliceViewPanelSkeletonLayer.md#refcountreachedzero)
- [registerCancellable](skeleton_frontend.SliceViewPanelSkeletonLayer.md#registercancellable)
- [registerDisposer](skeleton_frontend.SliceViewPanelSkeletonLayer.md#registerdisposer)
- [registerEventListener](skeleton_frontend.SliceViewPanelSkeletonLayer.md#registereventlistener)
- [transformPickedValue](skeleton_frontend.SliceViewPanelSkeletonLayer.md#transformpickedvalue)
- [unregisterDisposer](skeleton_frontend.SliceViewPanelSkeletonLayer.md#unregisterdisposer)
- [updateMouseState](skeleton_frontend.SliceViewPanelSkeletonLayer.md#updatemousestate)

## Constructors

### constructor

• **new SliceViewPanelSkeletonLayer**(`base`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `base` | [`SkeletonLayer`](skeleton_frontend.SkeletonLayer.md) |

#### Overrides

[SliceViewPanelRenderLayer](sliceview_renderlayer.SliceViewPanelRenderLayer.md).[constructor](sliceview_renderlayer.SliceViewPanelRenderLayer.md#constructor)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:534](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L534)

## Properties

### backend

• **backend**: `undefined` \| [`SharedObject`](annotation_annotation_layer_state._internal_.SharedObject.md)

#### Inherited from

[SliceViewPanelRenderLayer](sliceview_renderlayer.SliceViewPanelRenderLayer.md).[backend](sliceview_renderlayer.SliceViewPanelRenderLayer.md#backend)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:237](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/renderlayer.ts#L237)

___

### base

• **base**: [`SkeletonLayer`](skeleton_frontend.SkeletonLayer.md)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[SliceViewPanelRenderLayer](sliceview_renderlayer.SliceViewPanelRenderLayer.md).[disposedStacks](sliceview_renderlayer.SliceViewPanelRenderLayer.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### layerChanged

• **layerChanged**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Inherited from

[SliceViewPanelRenderLayer](sliceview_renderlayer.SliceViewPanelRenderLayer.md).[layerChanged](sliceview_renderlayer.SliceViewPanelRenderLayer.md#layerchanged)

#### Defined in

[src/neuroglancer/renderlayer.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L50)

___

### layerChunkProgressInfo

• **layerChunkProgressInfo**: [`LayerChunkProgressInfo`](chunk_manager_base.LayerChunkProgressInfo.md)

#### Inherited from

[SliceViewPanelRenderLayer](sliceview_renderlayer.SliceViewPanelRenderLayer.md).[layerChunkProgressInfo](sliceview_renderlayer.SliceViewPanelRenderLayer.md#layerchunkprogressinfo)

#### Defined in

[src/neuroglancer/renderlayer.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L52)

___

### messages

• **messages**: [`MessageList`](util_message_list.MessageList.md)

#### Inherited from

[SliceViewPanelRenderLayer](sliceview_renderlayer.SliceViewPanelRenderLayer.md).[messages](sliceview_renderlayer.SliceViewPanelRenderLayer.md#messages)

#### Defined in

[src/neuroglancer/renderlayer.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L49)

___

### redrawNeeded

• **redrawNeeded**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Inherited from

[SliceViewPanelRenderLayer](sliceview_renderlayer.SliceViewPanelRenderLayer.md).[redrawNeeded](sliceview_renderlayer.SliceViewPanelRenderLayer.md#redrawneeded)

#### Defined in

[src/neuroglancer/renderlayer.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L51)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[SliceViewPanelRenderLayer](sliceview_renderlayer.SliceViewPanelRenderLayer.md).[refCount](sliceview_renderlayer.SliceViewPanelRenderLayer.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### renderHelper

• `Private` **renderHelper**: [`RenderHelper`](skeleton_frontend._internal_.RenderHelper.md)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:532](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L532)

___

### renderOptions

• `Private` **renderOptions**: [`ViewSpecificSkeletonRenderingOptions`](../interfaces/skeleton_frontend.ViewSpecificSkeletonRenderingOptions.md)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:533](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L533)

___

### role

• **role**: [`RenderLayerRole`](../enums/annotation_annotation_layer_state._internal_.RenderLayerRole.md) = `RenderLayerRole.DATA`

#### Inherited from

[SliceViewPanelRenderLayer](sliceview_renderlayer.SliceViewPanelRenderLayer.md).[role](sliceview_renderlayer.SliceViewPanelRenderLayer.md#role)

#### Defined in

[src/neuroglancer/renderlayer.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L48)

___

### userLayer

• **userLayer**: `undefined` \| [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)

#### Inherited from

[SliceViewPanelRenderLayer](sliceview_renderlayer.SliceViewPanelRenderLayer.md).[userLayer](sliceview_renderlayer.SliceViewPanelRenderLayer.md#userlayer)

#### Defined in

[src/neuroglancer/renderlayer.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L47)

___

### visibility

• **visibility**: [`VisibilityPriorityAggregator`](visibility_priority_frontend.VisibilityPriorityAggregator.md)

#### Inherited from

[SliceViewPanelRenderLayer](sliceview_renderlayer.SliceViewPanelRenderLayer.md).[visibility](sliceview_renderlayer.SliceViewPanelRenderLayer.md#visibility)

#### Defined in

[src/neuroglancer/renderlayer.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L85)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[SliceViewPanelRenderLayer](sliceview_renderlayer.SliceViewPanelRenderLayer.md).[wasDisposed](sliceview_renderlayer.SliceViewPanelRenderLayer.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### gl

• `get` **gl**(): [`GL`](../interfaces/webgl_context.GL.md)

#### Returns

[`GL`](../interfaces/webgl_context.GL.md)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:544](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L544)

## Methods

### addRef

▸ **addRef**(): [`SliceViewPanelSkeletonLayer`](skeleton_frontend.SliceViewPanelSkeletonLayer.md)

#### Returns

[`SliceViewPanelSkeletonLayer`](skeleton_frontend.SliceViewPanelSkeletonLayer.md)

#### Inherited from

[SliceViewPanelRenderLayer](sliceview_renderlayer.SliceViewPanelRenderLayer.md).[addRef](sliceview_renderlayer.SliceViewPanelRenderLayer.md#addref)

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

[SliceViewPanelRenderLayer](sliceview_renderlayer.SliceViewPanelRenderLayer.md).[attach](sliceview_renderlayer.SliceViewPanelRenderLayer.md#attach)

#### Defined in

[src/neuroglancer/renderlayer.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L86)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[SliceViewPanelRenderLayer](sliceview_renderlayer.SliceViewPanelRenderLayer.md).[dispose](sliceview_renderlayer.SliceViewPanelRenderLayer.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[SliceViewPanelRenderLayer](sliceview_renderlayer.SliceViewPanelRenderLayer.md).[disposed](sliceview_renderlayer.SliceViewPanelRenderLayer.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

___

### draw

▸ **draw**(`renderContext`, `attachment`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderContext` | [`SliceViewPanelRenderContext`](../interfaces/sliceview_renderlayer.SliceViewPanelRenderContext.md) |
| `attachment` | [`VisibleLayerInfo`](annotation_renderlayer._internal_.VisibleLayerInfo.md)<[`SliceViewPanel`](sliceview_panel.SliceViewPanel.md), [`ThreeDimensionalRenderLayerAttachmentState`](../interfaces/mesh_frontend._internal_.ThreeDimensionalRenderLayerAttachmentState.md)\> |

#### Returns

`void`

#### Overrides

[SliceViewPanelRenderLayer](sliceview_renderlayer.SliceViewPanelRenderLayer.md).[draw](sliceview_renderlayer.SliceViewPanelRenderLayer.md#draw)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:548](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L548)

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

[SliceViewPanelRenderLayer](sliceview_renderlayer.SliceViewPanelRenderLayer.md).[getValueAt](sliceview_renderlayer.SliceViewPanelRenderLayer.md#getvalueat)

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

[SliceViewPanelRenderLayer](sliceview_renderlayer.SliceViewPanelRenderLayer.md).[handleAction](sliceview_renderlayer.SliceViewPanelRenderLayer.md#handleaction)

#### Defined in

[src/neuroglancer/renderlayer.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L54)

___

### isReady

▸ **isReady**(): `boolean`

#### Returns

`boolean`

#### Overrides

[SliceViewPanelRenderLayer](sliceview_renderlayer.SliceViewPanelRenderLayer.md).[isReady](sliceview_renderlayer.SliceViewPanelRenderLayer.md#isready)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:554](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L554)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[SliceViewPanelRenderLayer](sliceview_renderlayer.SliceViewPanelRenderLayer.md).[refCountReachedZero](sliceview_renderlayer.SliceViewPanelRenderLayer.md#refcountreachedzero)

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

[SliceViewPanelRenderLayer](sliceview_renderlayer.SliceViewPanelRenderLayer.md).[registerCancellable](sliceview_renderlayer.SliceViewPanelRenderLayer.md#registercancellable)

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

[SliceViewPanelRenderLayer](sliceview_renderlayer.SliceViewPanelRenderLayer.md).[registerDisposer](sliceview_renderlayer.SliceViewPanelRenderLayer.md#registerdisposer)

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

[SliceViewPanelRenderLayer](sliceview_renderlayer.SliceViewPanelRenderLayer.md).[registerEventListener](sliceview_renderlayer.SliceViewPanelRenderLayer.md#registereventlistener)

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

[SliceViewPanelRenderLayer](sliceview_renderlayer.SliceViewPanelRenderLayer.md).[transformPickedValue](sliceview_renderlayer.SliceViewPanelRenderLayer.md#transformpickedvalue)

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

[SliceViewPanelRenderLayer](sliceview_renderlayer.SliceViewPanelRenderLayer.md).[unregisterDisposer](sliceview_renderlayer.SliceViewPanelRenderLayer.md#unregisterdisposer)

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

[SliceViewPanelRenderLayer](sliceview_renderlayer.SliceViewPanelRenderLayer.md).[updateMouseState](sliceview_renderlayer.SliceViewPanelRenderLayer.md#updatemousestate)

#### Defined in

[src/neuroglancer/renderlayer.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L74)
