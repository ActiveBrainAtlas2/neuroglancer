[neuroglancer](../README.md) / [Modules](../modules.md) / [skeleton/frontend](../modules/skeleton_frontend.md) / PerspectiveViewSkeletonLayer

# Class: PerspectiveViewSkeletonLayer

[skeleton/frontend](../modules/skeleton_frontend.md).PerspectiveViewSkeletonLayer

## Hierarchy

- [`PerspectiveViewRenderLayer`](perspective_view_render_layer.PerspectiveViewRenderLayer.md)

  ↳ **`PerspectiveViewSkeletonLayer`**

## Table of contents

### Constructors

- [constructor](skeleton_frontend.PerspectiveViewSkeletonLayer.md#constructor)

### Properties

- [backend](skeleton_frontend.PerspectiveViewSkeletonLayer.md#backend)
- [base](skeleton_frontend.PerspectiveViewSkeletonLayer.md#base)
- [disposedStacks](skeleton_frontend.PerspectiveViewSkeletonLayer.md#disposedstacks)
- [isAnnotation](skeleton_frontend.PerspectiveViewSkeletonLayer.md#isannotation)
- [layerChanged](skeleton_frontend.PerspectiveViewSkeletonLayer.md#layerchanged)
- [layerChunkProgressInfo](skeleton_frontend.PerspectiveViewSkeletonLayer.md#layerchunkprogressinfo)
- [messages](skeleton_frontend.PerspectiveViewSkeletonLayer.md#messages)
- [redrawNeeded](skeleton_frontend.PerspectiveViewSkeletonLayer.md#redrawneeded)
- [refCount](skeleton_frontend.PerspectiveViewSkeletonLayer.md#refcount)
- [renderHelper](skeleton_frontend.PerspectiveViewSkeletonLayer.md#renderhelper)
- [renderOptions](skeleton_frontend.PerspectiveViewSkeletonLayer.md#renderoptions)
- [role](skeleton_frontend.PerspectiveViewSkeletonLayer.md#role)
- [userLayer](skeleton_frontend.PerspectiveViewSkeletonLayer.md#userlayer)
- [visibility](skeleton_frontend.PerspectiveViewSkeletonLayer.md#visibility)
- [wasDisposed](skeleton_frontend.PerspectiveViewSkeletonLayer.md#wasdisposed)

### Accessors

- [gl](skeleton_frontend.PerspectiveViewSkeletonLayer.md#gl)
- [isTransparent](skeleton_frontend.PerspectiveViewSkeletonLayer.md#istransparent)
- [transparentPickEnabled](skeleton_frontend.PerspectiveViewSkeletonLayer.md#transparentpickenabled)

### Methods

- [addRef](skeleton_frontend.PerspectiveViewSkeletonLayer.md#addref)
- [attach](skeleton_frontend.PerspectiveViewSkeletonLayer.md#attach)
- [dispose](skeleton_frontend.PerspectiveViewSkeletonLayer.md#dispose)
- [disposed](skeleton_frontend.PerspectiveViewSkeletonLayer.md#disposed)
- [draw](skeleton_frontend.PerspectiveViewSkeletonLayer.md#draw)
- [getValueAt](skeleton_frontend.PerspectiveViewSkeletonLayer.md#getvalueat)
- [handleAction](skeleton_frontend.PerspectiveViewSkeletonLayer.md#handleaction)
- [isReady](skeleton_frontend.PerspectiveViewSkeletonLayer.md#isready)
- [refCountReachedZero](skeleton_frontend.PerspectiveViewSkeletonLayer.md#refcountreachedzero)
- [registerCancellable](skeleton_frontend.PerspectiveViewSkeletonLayer.md#registercancellable)
- [registerDisposer](skeleton_frontend.PerspectiveViewSkeletonLayer.md#registerdisposer)
- [registerEventListener](skeleton_frontend.PerspectiveViewSkeletonLayer.md#registereventlistener)
- [transformPickedValue](skeleton_frontend.PerspectiveViewSkeletonLayer.md#transformpickedvalue)
- [unregisterDisposer](skeleton_frontend.PerspectiveViewSkeletonLayer.md#unregisterdisposer)
- [updateMouseState](skeleton_frontend.PerspectiveViewSkeletonLayer.md#updatemousestate)

## Constructors

### constructor

• **new PerspectiveViewSkeletonLayer**(`base`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `base` | [`SkeletonLayer`](skeleton_frontend.SkeletonLayer.md) |

#### Overrides

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[constructor](perspective_view_render_layer.PerspectiveViewRenderLayer.md#constructor)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:498](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L498)

## Properties

### backend

• **backend**: `undefined` \| [`SharedObject`](annotation_annotation_layer_state._internal_.SharedObject.md)

#### Inherited from

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[backend](perspective_view_render_layer.PerspectiveViewRenderLayer.md#backend)

#### Defined in

[src/neuroglancer/perspective_view/render_layer.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/render_layer.ts#L75)

___

### base

• **base**: [`SkeletonLayer`](skeleton_frontend.SkeletonLayer.md)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[disposedStacks](perspective_view_render_layer.PerspectiveViewRenderLayer.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### isAnnotation

• **isAnnotation**: `undefined` \| `boolean`

#### Inherited from

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[isAnnotation](perspective_view_render_layer.PerspectiveViewRenderLayer.md#isannotation)

#### Defined in

[src/neuroglancer/perspective_view/render_layer.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/render_layer.ts#L74)

___

### layerChanged

• **layerChanged**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Inherited from

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[layerChanged](perspective_view_render_layer.PerspectiveViewRenderLayer.md#layerchanged)

#### Defined in

[src/neuroglancer/renderlayer.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L50)

___

### layerChunkProgressInfo

• **layerChunkProgressInfo**: [`LayerChunkProgressInfo`](chunk_manager_base.LayerChunkProgressInfo.md)

#### Inherited from

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[layerChunkProgressInfo](perspective_view_render_layer.PerspectiveViewRenderLayer.md#layerchunkprogressinfo)

#### Defined in

[src/neuroglancer/renderlayer.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L52)

___

### messages

• **messages**: [`MessageList`](util_message_list.MessageList.md)

#### Inherited from

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[messages](perspective_view_render_layer.PerspectiveViewRenderLayer.md#messages)

#### Defined in

[src/neuroglancer/renderlayer.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L49)

___

### redrawNeeded

• **redrawNeeded**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Inherited from

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[redrawNeeded](perspective_view_render_layer.PerspectiveViewRenderLayer.md#redrawneeded)

#### Defined in

[src/neuroglancer/renderlayer.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L51)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[refCount](perspective_view_render_layer.PerspectiveViewRenderLayer.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### renderHelper

• `Private` **renderHelper**: [`RenderHelper`](skeleton_frontend._internal_.RenderHelper.md)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:496](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L496)

___

### renderOptions

• `Private` **renderOptions**: [`ViewSpecificSkeletonRenderingOptions`](../interfaces/skeleton_frontend.ViewSpecificSkeletonRenderingOptions.md)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:497](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L497)

___

### role

• **role**: [`RenderLayerRole`](../enums/annotation_annotation_layer_state._internal_.RenderLayerRole.md) = `RenderLayerRole.DATA`

#### Inherited from

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[role](perspective_view_render_layer.PerspectiveViewRenderLayer.md#role)

#### Defined in

[src/neuroglancer/renderlayer.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L48)

___

### userLayer

• **userLayer**: `undefined` \| [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)

#### Inherited from

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[userLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md#userlayer)

#### Defined in

[src/neuroglancer/renderlayer.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L47)

___

### visibility

• **visibility**: [`VisibilityPriorityAggregator`](visibility_priority_frontend.VisibilityPriorityAggregator.md)

#### Inherited from

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[visibility](perspective_view_render_layer.PerspectiveViewRenderLayer.md#visibility)

#### Defined in

[src/neuroglancer/renderlayer.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L85)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[wasDisposed](perspective_view_render_layer.PerspectiveViewRenderLayer.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### gl

• `get` **gl**(): [`GL`](../interfaces/webgl_context.GL.md)

#### Returns

[`GL`](../interfaces/webgl_context.GL.md)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:508](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L508)

___

### isTransparent

• `get` **isTransparent**(): `boolean`

#### Returns

`boolean`

#### Overrides

PerspectiveViewRenderLayer.isTransparent

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:512](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L512)

___

### transparentPickEnabled

• `get` **transparentPickEnabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

PerspectiveViewRenderLayer.transparentPickEnabled

#### Defined in

[src/neuroglancer/perspective_view/render_layer.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/render_layer.ts#L67)

## Methods

### addRef

▸ **addRef**(): [`PerspectiveViewSkeletonLayer`](skeleton_frontend.PerspectiveViewSkeletonLayer.md)

#### Returns

[`PerspectiveViewSkeletonLayer`](skeleton_frontend.PerspectiveViewSkeletonLayer.md)

#### Inherited from

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[addRef](perspective_view_render_layer.PerspectiveViewRenderLayer.md#addref)

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

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[attach](perspective_view_render_layer.PerspectiveViewRenderLayer.md#attach)

#### Defined in

[src/neuroglancer/renderlayer.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L86)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[dispose](perspective_view_render_layer.PerspectiveViewRenderLayer.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[disposed](perspective_view_render_layer.PerspectiveViewRenderLayer.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

___

### draw

▸ **draw**(`renderContext`, `attachment`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderContext` | [`PerspectiveViewRenderContext`](../interfaces/perspective_view_render_layer.PerspectiveViewRenderContext.md) |
| `attachment` | [`VisibleLayerInfo`](annotation_renderlayer._internal_.VisibleLayerInfo.md)<[`PerspectivePanel`](perspective_view_panel.PerspectivePanel.md), [`ThreeDimensionalRenderLayerAttachmentState`](../interfaces/mesh_frontend._internal_.ThreeDimensionalRenderLayerAttachmentState.md)\> |

#### Returns

`void`

#### Overrides

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[draw](perspective_view_render_layer.PerspectiveViewRenderLayer.md#draw)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:516](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L516)

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

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[getValueAt](perspective_view_render_layer.PerspectiveViewRenderLayer.md#getvalueat)

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

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[handleAction](perspective_view_render_layer.PerspectiveViewRenderLayer.md#handleaction)

#### Defined in

[src/neuroglancer/renderlayer.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L54)

___

### isReady

▸ **isReady**(): `boolean`

#### Returns

`boolean`

#### Overrides

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[isReady](perspective_view_render_layer.PerspectiveViewRenderLayer.md#isready)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:526](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L526)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[refCountReachedZero](perspective_view_render_layer.PerspectiveViewRenderLayer.md#refcountreachedzero)

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

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[registerCancellable](perspective_view_render_layer.PerspectiveViewRenderLayer.md#registercancellable)

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

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[registerDisposer](perspective_view_render_layer.PerspectiveViewRenderLayer.md#registerdisposer)

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

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[registerEventListener](perspective_view_render_layer.PerspectiveViewRenderLayer.md#registereventlistener)

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

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[transformPickedValue](perspective_view_render_layer.PerspectiveViewRenderLayer.md#transformpickedvalue)

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

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[unregisterDisposer](perspective_view_render_layer.PerspectiveViewRenderLayer.md#unregisterdisposer)

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

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[updateMouseState](perspective_view_render_layer.PerspectiveViewRenderLayer.md#updatemousestate)

#### Defined in

[src/neuroglancer/renderlayer.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L74)
