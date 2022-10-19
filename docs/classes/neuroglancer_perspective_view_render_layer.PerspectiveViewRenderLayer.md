[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/perspective\_view/render\_layer](../modules/neuroglancer_perspective_view_render_layer.md) / PerspectiveViewRenderLayer

# Class: PerspectiveViewRenderLayer<AttachmentState\>

[neuroglancer/perspective_view/render_layer](../modules/neuroglancer_perspective_view_render_layer.md).PerspectiveViewRenderLayer

## Type parameters

| Name | Type |
| :------ | :------ |
| `AttachmentState` | `unknown` |

## Hierarchy

- [`VisibilityTrackedRenderLayer`](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md)

  ↳ **`PerspectiveViewRenderLayer`**

  ↳↳ [`MeshLayer`](neuroglancer_mesh_frontend.MeshLayer.md)

  ↳↳ [`MultiscaleMeshLayer`](neuroglancer_mesh_frontend.MultiscaleMeshLayer.md)

  ↳↳ [`SingleMeshLayer`](neuroglancer_single_mesh_frontend.SingleMeshLayer.md)

  ↳↳ [`PerspectiveViewSkeletonLayer`](neuroglancer_skeleton_frontend.PerspectiveViewSkeletonLayer.md)

  ↳↳ [`VolumeRenderingRenderLayer`](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#constructor)

### Properties

- [backend](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#backend)
- [disposedStacks](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#disposedstacks)
- [isAnnotation](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#isannotation)
- [isTransparent](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#istransparent)
- [layerChanged](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#layerchanged)
- [layerChunkProgressInfo](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#layerchunkprogressinfo)
- [messages](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#messages)
- [redrawNeeded](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#redrawneeded)
- [refCount](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#refcount)
- [role](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#role)
- [userLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#userlayer)
- [visibility](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#visibility)
- [wasDisposed](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#wasdisposed)

### Accessors

- [transparentPickEnabled](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#transparentpickenabled)

### Methods

- [addRef](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#addref)
- [attach](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#attach)
- [dispose](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#dispose)
- [disposed](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#disposed)
- [draw](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#draw)
- [getValueAt](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#getvalueat)
- [handleAction](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#handleaction)
- [isReady](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#isready)
- [refCountReachedZero](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#refcountreachedzero)
- [registerCancellable](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#registercancellable)
- [registerDisposer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#registerdisposer)
- [registerEventListener](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#registereventlistener)
- [transformPickedValue](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#transformpickedvalue)
- [unregisterDisposer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#unregisterdisposer)
- [updateMouseState](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#updatemousestate)

## Constructors

### constructor

• **new PerspectiveViewRenderLayer**<`AttachmentState`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AttachmentState` | `unknown` |

#### Inherited from

[VisibilityTrackedRenderLayer](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md).[constructor](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#constructor)

## Properties

### backend

• **backend**: `undefined` \| [`SharedObject`](neuroglancer_worker_rpc.SharedObject.md)

#### Inherited from

[VisibilityTrackedRenderLayer](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md).[backend](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#backend)

#### Defined in

[src/neuroglancer/perspective_view/render_layer.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/render_layer.ts#L75)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[VisibilityTrackedRenderLayer](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md).[disposedStacks](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### isAnnotation

• **isAnnotation**: `undefined` \| `boolean`

#### Defined in

[src/neuroglancer/perspective_view/render_layer.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/render_layer.ts#L74)

___

### isTransparent

• **isTransparent**: `undefined` \| `boolean`

#### Defined in

[src/neuroglancer/perspective_view/render_layer.ts:73](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/render_layer.ts#L73)

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

## Accessors

### transparentPickEnabled

• `get` **transparentPickEnabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/perspective_view/render_layer.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/render_layer.ts#L67)

## Methods

### addRef

▸ **addRef**(): [`PerspectiveViewRenderLayer`](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md)<`AttachmentState`\>

#### Returns

[`PerspectiveViewRenderLayer`](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md)<`AttachmentState`\>

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
| `renderContext` | [`PerspectiveViewRenderContext`](../interfaces/neuroglancer_perspective_view_render_layer.PerspectiveViewRenderContext.md) |
| `attachment` | [`VisibleLayerInfo`](neuroglancer_layer.VisibleLayerInfo.md)<[`PerspectivePanel`](neuroglancer_perspective_view_panel.PerspectivePanel.md), `AttachmentState`\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/perspective_view/render_layer.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/render_layer.ts#L51)

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
| `renderContext` | [`PerspectiveViewReadyRenderContext`](../interfaces/neuroglancer_perspective_view_render_layer.PerspectiveViewReadyRenderContext.md) |
| `attachment` | [`VisibleLayerInfo`](neuroglancer_layer.VisibleLayerInfo.md)<[`PerspectivePanel`](neuroglancer_perspective_view_panel.PerspectivePanel.md), `AttachmentState`\> |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/perspective_view/render_layer.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/render_layer.ts#L59)

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
