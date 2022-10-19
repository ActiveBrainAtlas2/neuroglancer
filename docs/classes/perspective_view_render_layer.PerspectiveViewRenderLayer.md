[neuroglancer](../README.md) / [Modules](../modules.md) / [perspective\_view/render\_layer](../modules/perspective_view_render_layer.md) / PerspectiveViewRenderLayer

# Class: PerspectiveViewRenderLayer<AttachmentState\>

[perspective_view/render_layer](../modules/perspective_view_render_layer.md).PerspectiveViewRenderLayer

## Type parameters

| Name | Type |
| :------ | :------ |
| `AttachmentState` | `unknown` |

## Hierarchy

- [`VisibilityTrackedRenderLayer`](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md)

  ↳ **`PerspectiveViewRenderLayer`**

  ↳↳ [`MeshLayer`](mesh_frontend.MeshLayer.md)

  ↳↳ [`MultiscaleMeshLayer`](mesh_frontend.MultiscaleMeshLayer.md)

  ↳↳ [`SingleMeshLayer`](single_mesh_frontend.SingleMeshLayer.md)

  ↳↳ [`PerspectiveViewSkeletonLayer`](skeleton_frontend.PerspectiveViewSkeletonLayer.md)

  ↳↳ [`VolumeRenderingRenderLayer`](volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md)

## Table of contents

### Constructors

- [constructor](perspective_view_render_layer.PerspectiveViewRenderLayer.md#constructor)

### Properties

- [backend](perspective_view_render_layer.PerspectiveViewRenderLayer.md#backend)
- [disposedStacks](perspective_view_render_layer.PerspectiveViewRenderLayer.md#disposedstacks)
- [isAnnotation](perspective_view_render_layer.PerspectiveViewRenderLayer.md#isannotation)
- [isTransparent](perspective_view_render_layer.PerspectiveViewRenderLayer.md#istransparent)
- [layerChanged](perspective_view_render_layer.PerspectiveViewRenderLayer.md#layerchanged)
- [layerChunkProgressInfo](perspective_view_render_layer.PerspectiveViewRenderLayer.md#layerchunkprogressinfo)
- [messages](perspective_view_render_layer.PerspectiveViewRenderLayer.md#messages)
- [redrawNeeded](perspective_view_render_layer.PerspectiveViewRenderLayer.md#redrawneeded)
- [refCount](perspective_view_render_layer.PerspectiveViewRenderLayer.md#refcount)
- [role](perspective_view_render_layer.PerspectiveViewRenderLayer.md#role)
- [userLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md#userlayer)
- [visibility](perspective_view_render_layer.PerspectiveViewRenderLayer.md#visibility)
- [wasDisposed](perspective_view_render_layer.PerspectiveViewRenderLayer.md#wasdisposed)

### Accessors

- [transparentPickEnabled](perspective_view_render_layer.PerspectiveViewRenderLayer.md#transparentpickenabled)

### Methods

- [addRef](perspective_view_render_layer.PerspectiveViewRenderLayer.md#addref)
- [attach](perspective_view_render_layer.PerspectiveViewRenderLayer.md#attach)
- [dispose](perspective_view_render_layer.PerspectiveViewRenderLayer.md#dispose)
- [disposed](perspective_view_render_layer.PerspectiveViewRenderLayer.md#disposed)
- [draw](perspective_view_render_layer.PerspectiveViewRenderLayer.md#draw)
- [getValueAt](perspective_view_render_layer.PerspectiveViewRenderLayer.md#getvalueat)
- [handleAction](perspective_view_render_layer.PerspectiveViewRenderLayer.md#handleaction)
- [isReady](perspective_view_render_layer.PerspectiveViewRenderLayer.md#isready)
- [refCountReachedZero](perspective_view_render_layer.PerspectiveViewRenderLayer.md#refcountreachedzero)
- [registerCancellable](perspective_view_render_layer.PerspectiveViewRenderLayer.md#registercancellable)
- [registerDisposer](perspective_view_render_layer.PerspectiveViewRenderLayer.md#registerdisposer)
- [registerEventListener](perspective_view_render_layer.PerspectiveViewRenderLayer.md#registereventlistener)
- [transformPickedValue](perspective_view_render_layer.PerspectiveViewRenderLayer.md#transformpickedvalue)
- [unregisterDisposer](perspective_view_render_layer.PerspectiveViewRenderLayer.md#unregisterdisposer)
- [updateMouseState](perspective_view_render_layer.PerspectiveViewRenderLayer.md#updatemousestate)

## Constructors

### constructor

• **new PerspectiveViewRenderLayer**<`AttachmentState`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AttachmentState` | `unknown` |

#### Inherited from

[VisibilityTrackedRenderLayer](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md).[constructor](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#constructor)

## Properties

### backend

• **backend**: `undefined` \| [`SharedObject`](annotation_annotation_layer_state._internal_.SharedObject.md)

#### Inherited from

[VisibilityTrackedRenderLayer](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md).[backend](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#backend)

#### Defined in

[src/neuroglancer/perspective_view/render_layer.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/render_layer.ts#L75)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[VisibilityTrackedRenderLayer](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md).[disposedStacks](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### isAnnotation

• **isAnnotation**: `undefined` \| `boolean`

#### Defined in

[src/neuroglancer/perspective_view/render_layer.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/render_layer.ts#L74)

___

### isTransparent

• **isTransparent**: `undefined` \| `boolean`

#### Defined in

[src/neuroglancer/perspective_view/render_layer.ts:73](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/render_layer.ts#L73)

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

## Accessors

### transparentPickEnabled

• `get` **transparentPickEnabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/perspective_view/render_layer.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/render_layer.ts#L67)

## Methods

### addRef

▸ **addRef**(): [`PerspectiveViewRenderLayer`](perspective_view_render_layer.PerspectiveViewRenderLayer.md)<`AttachmentState`\>

#### Returns

[`PerspectiveViewRenderLayer`](perspective_view_render_layer.PerspectiveViewRenderLayer.md)<`AttachmentState`\>

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
| `renderContext` | [`PerspectiveViewRenderContext`](../interfaces/perspective_view_render_layer.PerspectiveViewRenderContext.md) |
| `attachment` | [`VisibleLayerInfo`](annotation_renderlayer._internal_.VisibleLayerInfo.md)<[`PerspectivePanel`](perspective_view_panel.PerspectivePanel.md), `AttachmentState`\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/perspective_view/render_layer.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/render_layer.ts#L51)

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
| `renderContext` | [`PerspectiveViewReadyRenderContext`](../interfaces/perspective_view_render_layer.PerspectiveViewReadyRenderContext.md) |
| `attachment` | [`VisibleLayerInfo`](annotation_renderlayer._internal_.VisibleLayerInfo.md)<[`PerspectivePanel`](perspective_view_panel.PerspectivePanel.md), `AttachmentState`\> |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/perspective_view/render_layer.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/render_layer.ts#L59)

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
