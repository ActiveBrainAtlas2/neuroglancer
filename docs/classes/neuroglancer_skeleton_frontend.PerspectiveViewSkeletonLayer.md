[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/skeleton/frontend](../modules/neuroglancer_skeleton_frontend.md) / PerspectiveViewSkeletonLayer

# Class: PerspectiveViewSkeletonLayer

[neuroglancer/skeleton/frontend](../modules/neuroglancer_skeleton_frontend.md).PerspectiveViewSkeletonLayer

## Hierarchy

- [`PerspectiveViewRenderLayer`](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md)

  ↳ **`PerspectiveViewSkeletonLayer`**

## Table of contents

### Constructors

- [constructor](neuroglancer_skeleton_frontend.PerspectiveViewSkeletonLayer.md#constructor)

### Properties

- [backend](neuroglancer_skeleton_frontend.PerspectiveViewSkeletonLayer.md#backend)
- [base](neuroglancer_skeleton_frontend.PerspectiveViewSkeletonLayer.md#base)
- [disposedStacks](neuroglancer_skeleton_frontend.PerspectiveViewSkeletonLayer.md#disposedstacks)
- [isAnnotation](neuroglancer_skeleton_frontend.PerspectiveViewSkeletonLayer.md#isannotation)
- [layerChanged](neuroglancer_skeleton_frontend.PerspectiveViewSkeletonLayer.md#layerchanged)
- [layerChunkProgressInfo](neuroglancer_skeleton_frontend.PerspectiveViewSkeletonLayer.md#layerchunkprogressinfo)
- [messages](neuroglancer_skeleton_frontend.PerspectiveViewSkeletonLayer.md#messages)
- [redrawNeeded](neuroglancer_skeleton_frontend.PerspectiveViewSkeletonLayer.md#redrawneeded)
- [refCount](neuroglancer_skeleton_frontend.PerspectiveViewSkeletonLayer.md#refcount)
- [renderHelper](neuroglancer_skeleton_frontend.PerspectiveViewSkeletonLayer.md#renderhelper)
- [renderOptions](neuroglancer_skeleton_frontend.PerspectiveViewSkeletonLayer.md#renderoptions)
- [role](neuroglancer_skeleton_frontend.PerspectiveViewSkeletonLayer.md#role)
- [userLayer](neuroglancer_skeleton_frontend.PerspectiveViewSkeletonLayer.md#userlayer)
- [visibility](neuroglancer_skeleton_frontend.PerspectiveViewSkeletonLayer.md#visibility)
- [wasDisposed](neuroglancer_skeleton_frontend.PerspectiveViewSkeletonLayer.md#wasdisposed)

### Accessors

- [gl](neuroglancer_skeleton_frontend.PerspectiveViewSkeletonLayer.md#gl)
- [isTransparent](neuroglancer_skeleton_frontend.PerspectiveViewSkeletonLayer.md#istransparent)
- [transparentPickEnabled](neuroglancer_skeleton_frontend.PerspectiveViewSkeletonLayer.md#transparentpickenabled)

### Methods

- [addRef](neuroglancer_skeleton_frontend.PerspectiveViewSkeletonLayer.md#addref)
- [attach](neuroglancer_skeleton_frontend.PerspectiveViewSkeletonLayer.md#attach)
- [dispose](neuroglancer_skeleton_frontend.PerspectiveViewSkeletonLayer.md#dispose)
- [disposed](neuroglancer_skeleton_frontend.PerspectiveViewSkeletonLayer.md#disposed)
- [draw](neuroglancer_skeleton_frontend.PerspectiveViewSkeletonLayer.md#draw)
- [getValueAt](neuroglancer_skeleton_frontend.PerspectiveViewSkeletonLayer.md#getvalueat)
- [handleAction](neuroglancer_skeleton_frontend.PerspectiveViewSkeletonLayer.md#handleaction)
- [isReady](neuroglancer_skeleton_frontend.PerspectiveViewSkeletonLayer.md#isready)
- [refCountReachedZero](neuroglancer_skeleton_frontend.PerspectiveViewSkeletonLayer.md#refcountreachedzero)
- [registerCancellable](neuroglancer_skeleton_frontend.PerspectiveViewSkeletonLayer.md#registercancellable)
- [registerDisposer](neuroglancer_skeleton_frontend.PerspectiveViewSkeletonLayer.md#registerdisposer)
- [registerEventListener](neuroglancer_skeleton_frontend.PerspectiveViewSkeletonLayer.md#registereventlistener)
- [transformPickedValue](neuroglancer_skeleton_frontend.PerspectiveViewSkeletonLayer.md#transformpickedvalue)
- [unregisterDisposer](neuroglancer_skeleton_frontend.PerspectiveViewSkeletonLayer.md#unregisterdisposer)
- [updateMouseState](neuroglancer_skeleton_frontend.PerspectiveViewSkeletonLayer.md#updatemousestate)

## Constructors

### constructor

• **new PerspectiveViewSkeletonLayer**(`base`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `base` | [`SkeletonLayer`](neuroglancer_skeleton_frontend.SkeletonLayer.md) |

#### Overrides

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[constructor](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#constructor)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:498](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L498)

## Properties

### backend

• **backend**: `undefined` \| [`SharedObject`](neuroglancer_worker_rpc.SharedObject.md)

#### Inherited from

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[backend](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#backend)

#### Defined in

[src/neuroglancer/perspective_view/render_layer.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/render_layer.ts#L75)

___

### base

• **base**: [`SkeletonLayer`](neuroglancer_skeleton_frontend.SkeletonLayer.md)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[disposedStacks](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### isAnnotation

• **isAnnotation**: `undefined` \| `boolean`

#### Inherited from

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[isAnnotation](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#isannotation)

#### Defined in

[src/neuroglancer/perspective_view/render_layer.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/render_layer.ts#L74)

___

### layerChanged

• **layerChanged**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Inherited from

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[layerChanged](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#layerchanged)

#### Defined in

[src/neuroglancer/renderlayer.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L50)

___

### layerChunkProgressInfo

• **layerChunkProgressInfo**: [`LayerChunkProgressInfo`](neuroglancer_chunk_manager_base.LayerChunkProgressInfo.md)

#### Inherited from

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[layerChunkProgressInfo](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#layerchunkprogressinfo)

#### Defined in

[src/neuroglancer/renderlayer.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L52)

___

### messages

• **messages**: [`MessageList`](neuroglancer_util_message_list.MessageList.md)

#### Inherited from

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[messages](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#messages)

#### Defined in

[src/neuroglancer/renderlayer.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L49)

___

### redrawNeeded

• **redrawNeeded**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Inherited from

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[redrawNeeded](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#redrawneeded)

#### Defined in

[src/neuroglancer/renderlayer.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L51)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[refCount](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### renderHelper

• `Private` **renderHelper**: [`RenderHelper`](neuroglancer_skeleton_frontend._internal_.RenderHelper.md)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:496](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L496)

___

### renderOptions

• `Private` **renderOptions**: [`ViewSpecificSkeletonRenderingOptions`](../interfaces/neuroglancer_skeleton_frontend.ViewSpecificSkeletonRenderingOptions.md)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:497](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L497)

___

### role

• **role**: [`RenderLayerRole`](../enums/neuroglancer_renderlayer.RenderLayerRole.md) = `RenderLayerRole.DATA`

#### Inherited from

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[role](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#role)

#### Defined in

[src/neuroglancer/renderlayer.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L48)

___

### userLayer

• **userLayer**: `undefined` \| [`UserLayer`](neuroglancer_layer.UserLayer.md)

#### Inherited from

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[userLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#userlayer)

#### Defined in

[src/neuroglancer/renderlayer.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L47)

___

### visibility

• **visibility**: [`VisibilityPriorityAggregator`](neuroglancer_visibility_priority_frontend.VisibilityPriorityAggregator.md)

#### Inherited from

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[visibility](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#visibility)

#### Defined in

[src/neuroglancer/renderlayer.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L85)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[wasDisposed](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### gl

• `get` **gl**(): [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Returns

[`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:508](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L508)

___

### isTransparent

• `get` **isTransparent**(): `boolean`

#### Returns

`boolean`

#### Overrides

PerspectiveViewRenderLayer.isTransparent

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:512](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L512)

___

### transparentPickEnabled

• `get` **transparentPickEnabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

PerspectiveViewRenderLayer.transparentPickEnabled

#### Defined in

[src/neuroglancer/perspective_view/render_layer.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/render_layer.ts#L67)

## Methods

### addRef

▸ **addRef**(): [`PerspectiveViewSkeletonLayer`](neuroglancer_skeleton_frontend.PerspectiveViewSkeletonLayer.md)

#### Returns

[`PerspectiveViewSkeletonLayer`](neuroglancer_skeleton_frontend.PerspectiveViewSkeletonLayer.md)

#### Inherited from

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[addRef](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#addref)

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

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[attach](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#attach)

#### Defined in

[src/neuroglancer/renderlayer.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L86)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[dispose](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[disposed](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L75)

___

### draw

▸ **draw**(`renderContext`, `attachment`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderContext` | [`PerspectiveViewRenderContext`](../interfaces/neuroglancer_perspective_view_render_layer.PerspectiveViewRenderContext.md) |
| `attachment` | [`VisibleLayerInfo`](neuroglancer_layer.VisibleLayerInfo.md)<[`PerspectivePanel`](neuroglancer_perspective_view_panel.PerspectivePanel.md), [`ThreeDimensionalRenderLayerAttachmentState`](../interfaces/neuroglancer_renderlayer.ThreeDimensionalRenderLayerAttachmentState.md)\> |

#### Returns

`void`

#### Overrides

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[draw](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#draw)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:516](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L516)

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

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[getValueAt](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#getvalueat)

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

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[handleAction](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#handleaction)

#### Defined in

[src/neuroglancer/renderlayer.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L54)

___

### isReady

▸ **isReady**(): `boolean`

#### Returns

`boolean`

#### Overrides

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[isReady](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#isready)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:526](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L526)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[refCountReachedZero](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#refcountreachedzero)

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

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[registerCancellable](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#registercancellable)

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

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[registerDisposer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#registerdisposer)

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

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[registerEventListener](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#registereventlistener)

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

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[transformPickedValue](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#transformpickedvalue)

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

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[unregisterDisposer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#unregisterdisposer)

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

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[updateMouseState](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#updatemousestate)

#### Defined in

[src/neuroglancer/renderlayer.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L74)
