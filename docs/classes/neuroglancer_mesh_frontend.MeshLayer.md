[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/mesh/frontend](../modules/neuroglancer_mesh_frontend.md) / MeshLayer

# Class: MeshLayer

[neuroglancer/mesh/frontend](../modules/neuroglancer_mesh_frontend.md).MeshLayer

Extends RenderLayer with functionality for tracking the number of panels in which the layer is
visible.

## Hierarchy

- [`PerspectiveViewRenderLayer`](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md)<[`ThreeDimensionalRenderLayerAttachmentState`](../interfaces/neuroglancer_renderlayer.ThreeDimensionalRenderLayerAttachmentState.md)\>

  ↳ **`MeshLayer`**

## Table of contents

### Constructors

- [constructor](neuroglancer_mesh_frontend.MeshLayer.md#constructor)

### Properties

- [backend](neuroglancer_mesh_frontend.MeshLayer.md#backend)
- [chunkManager](neuroglancer_mesh_frontend.MeshLayer.md#chunkmanager)
- [displayState](neuroglancer_mesh_frontend.MeshLayer.md#displaystate)
- [disposedStacks](neuroglancer_mesh_frontend.MeshLayer.md#disposedstacks)
- [getShader](neuroglancer_mesh_frontend.MeshLayer.md#getshader)
- [isAnnotation](neuroglancer_mesh_frontend.MeshLayer.md#isannotation)
- [layerChanged](neuroglancer_mesh_frontend.MeshLayer.md#layerchanged)
- [layerChunkProgressInfo](neuroglancer_mesh_frontend.MeshLayer.md#layerchunkprogressinfo)
- [meshShaderManager](neuroglancer_mesh_frontend.MeshLayer.md#meshshadermanager)
- [messages](neuroglancer_mesh_frontend.MeshLayer.md#messages)
- [redrawNeeded](neuroglancer_mesh_frontend.MeshLayer.md#redrawneeded)
- [refCount](neuroglancer_mesh_frontend.MeshLayer.md#refcount)
- [role](neuroglancer_mesh_frontend.MeshLayer.md#role)
- [source](neuroglancer_mesh_frontend.MeshLayer.md#source)
- [userLayer](neuroglancer_mesh_frontend.MeshLayer.md#userlayer)
- [visibility](neuroglancer_mesh_frontend.MeshLayer.md#visibility)
- [wasDisposed](neuroglancer_mesh_frontend.MeshLayer.md#wasdisposed)

### Accessors

- [gl](neuroglancer_mesh_frontend.MeshLayer.md#gl)
- [isTransparent](neuroglancer_mesh_frontend.MeshLayer.md#istransparent)
- [transparentPickEnabled](neuroglancer_mesh_frontend.MeshLayer.md#transparentpickenabled)

### Methods

- [addRef](neuroglancer_mesh_frontend.MeshLayer.md#addref)
- [attach](neuroglancer_mesh_frontend.MeshLayer.md#attach)
- [dispose](neuroglancer_mesh_frontend.MeshLayer.md#dispose)
- [disposed](neuroglancer_mesh_frontend.MeshLayer.md#disposed)
- [draw](neuroglancer_mesh_frontend.MeshLayer.md#draw)
- [getValueAt](neuroglancer_mesh_frontend.MeshLayer.md#getvalueat)
- [handleAction](neuroglancer_mesh_frontend.MeshLayer.md#handleaction)
- [isReady](neuroglancer_mesh_frontend.MeshLayer.md#isready)
- [refCountReachedZero](neuroglancer_mesh_frontend.MeshLayer.md#refcountreachedzero)
- [registerCancellable](neuroglancer_mesh_frontend.MeshLayer.md#registercancellable)
- [registerDisposer](neuroglancer_mesh_frontend.MeshLayer.md#registerdisposer)
- [registerEventListener](neuroglancer_mesh_frontend.MeshLayer.md#registereventlistener)
- [transformPickedValue](neuroglancer_mesh_frontend.MeshLayer.md#transformpickedvalue)
- [unregisterDisposer](neuroglancer_mesh_frontend.MeshLayer.md#unregisterdisposer)
- [updateMouseState](neuroglancer_mesh_frontend.MeshLayer.md#updatemousestate)

## Constructors

### constructor

• **new MeshLayer**(`chunkManager`, `source`, `displayState`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md) |
| `source` | [`MeshSource`](neuroglancer_mesh_frontend.MeshSource.md) |
| `displayState` | [`MeshDisplayState`](../interfaces/neuroglancer_mesh_frontend.MeshDisplayState.md) |

#### Overrides

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[constructor](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#constructor)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:312](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/frontend.ts#L312)

## Properties

### backend

• **backend**: [`SegmentationLayerSharedObject`](neuroglancer_segmentation_display_state_frontend.SegmentationLayerSharedObject.md)

#### Overrides

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[backend](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#backend)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:310](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/frontend.ts#L310)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:313](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/frontend.ts#L313)

___

### displayState

• **displayState**: [`MeshDisplayState`](../interfaces/neuroglancer_mesh_frontend.MeshDisplayState.md)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:314](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/frontend.ts#L314)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[disposedStacks](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### getShader

• `Private` **getShader**: [`ParameterizedEmitterDependentShaderGetter`](../modules/neuroglancer_webgl_dynamic_shader.md#parameterizedemitterdependentshadergetter)<`boolean`, `undefined`\>

#### Defined in

[src/neuroglancer/mesh/frontend.ts:309](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/frontend.ts#L309)

___

### isAnnotation

• **isAnnotation**: `undefined` \| `boolean`

#### Inherited from

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[isAnnotation](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#isannotation)

#### Defined in

[src/neuroglancer/perspective_view/render_layer.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/perspective_view/render_layer.ts#L74)

___

### layerChanged

• **layerChanged**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Inherited from

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[layerChanged](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#layerchanged)

#### Defined in

[src/neuroglancer/renderlayer.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/renderlayer.ts#L50)

___

### layerChunkProgressInfo

• **layerChunkProgressInfo**: [`LayerChunkProgressInfo`](neuroglancer_chunk_manager_base.LayerChunkProgressInfo.md)

#### Inherited from

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[layerChunkProgressInfo](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#layerchunkprogressinfo)

#### Defined in

[src/neuroglancer/renderlayer.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/renderlayer.ts#L52)

___

### meshShaderManager

• `Protected` **meshShaderManager**: [`MeshShaderManager`](neuroglancer_mesh_frontend.MeshShaderManager.md)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:307](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/frontend.ts#L307)

___

### messages

• **messages**: [`MessageList`](neuroglancer_util_message_list.MessageList.md)

#### Inherited from

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[messages](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#messages)

#### Defined in

[src/neuroglancer/renderlayer.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/renderlayer.ts#L49)

___

### redrawNeeded

• **redrawNeeded**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Inherited from

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[redrawNeeded](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#redrawneeded)

#### Defined in

[src/neuroglancer/renderlayer.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/renderlayer.ts#L51)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[refCount](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### role

• **role**: [`RenderLayerRole`](../enums/neuroglancer_renderlayer.RenderLayerRole.md) = `RenderLayerRole.DATA`

#### Inherited from

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[role](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#role)

#### Defined in

[src/neuroglancer/renderlayer.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/renderlayer.ts#L48)

___

### source

• **source**: [`MeshSource`](neuroglancer_mesh_frontend.MeshSource.md)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:313](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/frontend.ts#L313)

___

### userLayer

• **userLayer**: `undefined` \| [`UserLayer`](neuroglancer_layer.UserLayer.md)

#### Inherited from

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[userLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#userlayer)

#### Defined in

[src/neuroglancer/renderlayer.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/renderlayer.ts#L47)

___

### visibility

• **visibility**: [`VisibilityPriorityAggregator`](neuroglancer_visibility_priority_frontend.VisibilityPriorityAggregator.md)

#### Inherited from

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[visibility](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#visibility)

#### Defined in

[src/neuroglancer/renderlayer.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/renderlayer.ts#L85)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[wasDisposed](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### gl

• `get` **gl**(): [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Returns

[`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:339](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/frontend.ts#L339)

___

### isTransparent

• `get` **isTransparent**(): `boolean`

#### Returns

`boolean`

#### Overrides

PerspectiveViewRenderLayer.isTransparent

#### Defined in

[src/neuroglancer/mesh/frontend.ts:330](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/frontend.ts#L330)

___

### transparentPickEnabled

• `get` **transparentPickEnabled**(): `boolean`

#### Returns

`boolean`

#### Overrides

PerspectiveViewRenderLayer.transparentPickEnabled

#### Defined in

[src/neuroglancer/mesh/frontend.ts:335](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/frontend.ts#L335)

## Methods

### addRef

▸ **addRef**(): [`MeshLayer`](neuroglancer_mesh_frontend.MeshLayer.md)

#### Returns

[`MeshLayer`](neuroglancer_mesh_frontend.MeshLayer.md)

#### Inherited from

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[addRef](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

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

[src/neuroglancer/renderlayer.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/renderlayer.ts#L86)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[dispose](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[disposed](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L75)

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

[src/neuroglancer/mesh/frontend.ts:343](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/frontend.ts#L343)

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

[src/neuroglancer/renderlayer.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/renderlayer.ts#L58)

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

[src/neuroglancer/renderlayer.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/renderlayer.ts#L54)

___

### isReady

▸ **isReady**(): `boolean`

#### Returns

`boolean`

#### Overrides

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[isReady](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#isready)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:409](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/frontend.ts#L409)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[refCountReachedZero](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#refcountreachedzero)

#### Defined in

[src/neuroglancer/util/disposable.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L66)

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

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L100)

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

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L76)

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

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L95)

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

[src/neuroglancer/renderlayer.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/renderlayer.ts#L66)

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

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)

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

[src/neuroglancer/renderlayer.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/renderlayer.ts#L74)
