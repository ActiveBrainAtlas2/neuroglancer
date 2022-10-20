[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/single\_mesh/frontend](../modules/neuroglancer_single_mesh_frontend.md) / SingleMeshLayer

# Class: SingleMeshLayer

[neuroglancer/single_mesh/frontend](../modules/neuroglancer_single_mesh_frontend.md).SingleMeshLayer

Extends RenderLayer with functionality for tracking the number of panels in which the layer is
visible.

## Hierarchy

- [`PerspectiveViewRenderLayer`](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md)<[`ThreeDimensionalRenderLayerAttachmentState`](../interfaces/neuroglancer_renderlayer.ThreeDimensionalRenderLayerAttachmentState.md)\>

  ↳ **`SingleMeshLayer`**

## Table of contents

### Constructors

- [constructor](neuroglancer_single_mesh_frontend.SingleMeshLayer.md#constructor)

### Properties

- [backend](neuroglancer_single_mesh_frontend.SingleMeshLayer.md#backend)
- [countingBuffer](neuroglancer_single_mesh_frontend.SingleMeshLayer.md#countingbuffer)
- [displayState](neuroglancer_single_mesh_frontend.SingleMeshLayer.md#displaystate)
- [disposedStacks](neuroglancer_single_mesh_frontend.SingleMeshLayer.md#disposedstacks)
- [isAnnotation](neuroglancer_single_mesh_frontend.SingleMeshLayer.md#isannotation)
- [layerChanged](neuroglancer_single_mesh_frontend.SingleMeshLayer.md#layerchanged)
- [layerChunkProgressInfo](neuroglancer_single_mesh_frontend.SingleMeshLayer.md#layerchunkprogressinfo)
- [messages](neuroglancer_single_mesh_frontend.SingleMeshLayer.md#messages)
- [redrawNeeded](neuroglancer_single_mesh_frontend.SingleMeshLayer.md#redrawneeded)
- [refCount](neuroglancer_single_mesh_frontend.SingleMeshLayer.md#refcount)
- [role](neuroglancer_single_mesh_frontend.SingleMeshLayer.md#role)
- [shaderGetter](neuroglancer_single_mesh_frontend.SingleMeshLayer.md#shadergetter)
- [shaderManager](neuroglancer_single_mesh_frontend.SingleMeshLayer.md#shadermanager)
- [shaders](neuroglancer_single_mesh_frontend.SingleMeshLayer.md#shaders)
- [sharedObject](neuroglancer_single_mesh_frontend.SingleMeshLayer.md#sharedobject)
- [source](neuroglancer_single_mesh_frontend.SingleMeshLayer.md#source)
- [transform](neuroglancer_single_mesh_frontend.SingleMeshLayer.md#transform)
- [userLayer](neuroglancer_single_mesh_frontend.SingleMeshLayer.md#userlayer)
- [visibility](neuroglancer_single_mesh_frontend.SingleMeshLayer.md#visibility)
- [wasDisposed](neuroglancer_single_mesh_frontend.SingleMeshLayer.md#wasdisposed)

### Accessors

- [gl](neuroglancer_single_mesh_frontend.SingleMeshLayer.md#gl)
- [isTransparent](neuroglancer_single_mesh_frontend.SingleMeshLayer.md#istransparent)
- [transparentPickEnabled](neuroglancer_single_mesh_frontend.SingleMeshLayer.md#transparentpickenabled)

### Methods

- [addRef](neuroglancer_single_mesh_frontend.SingleMeshLayer.md#addref)
- [attach](neuroglancer_single_mesh_frontend.SingleMeshLayer.md#attach)
- [dispose](neuroglancer_single_mesh_frontend.SingleMeshLayer.md#dispose)
- [disposeShaders](neuroglancer_single_mesh_frontend.SingleMeshLayer.md#disposeshaders)
- [disposed](neuroglancer_single_mesh_frontend.SingleMeshLayer.md#disposed)
- [draw](neuroglancer_single_mesh_frontend.SingleMeshLayer.md#draw)
- [getValueAt](neuroglancer_single_mesh_frontend.SingleMeshLayer.md#getvalueat)
- [handleAction](neuroglancer_single_mesh_frontend.SingleMeshLayer.md#handleaction)
- [isReady](neuroglancer_single_mesh_frontend.SingleMeshLayer.md#isready)
- [refCountReachedZero](neuroglancer_single_mesh_frontend.SingleMeshLayer.md#refcountreachedzero)
- [registerCancellable](neuroglancer_single_mesh_frontend.SingleMeshLayer.md#registercancellable)
- [registerDisposer](neuroglancer_single_mesh_frontend.SingleMeshLayer.md#registerdisposer)
- [registerEventListener](neuroglancer_single_mesh_frontend.SingleMeshLayer.md#registereventlistener)
- [transformPickedValue](neuroglancer_single_mesh_frontend.SingleMeshLayer.md#transformpickedvalue)
- [unregisterDisposer](neuroglancer_single_mesh_frontend.SingleMeshLayer.md#unregisterdisposer)
- [updateMouseState](neuroglancer_single_mesh_frontend.SingleMeshLayer.md#updatemousestate)

## Constructors

### constructor

• **new SingleMeshLayer**(`source`, `displayState`, `transform`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`SingleMeshSource`](neuroglancer_single_mesh_frontend.SingleMeshSource.md) |
| `displayState` | [`SingleMeshDisplayState`](neuroglancer_single_mesh_frontend.SingleMeshDisplayState.md) |
| `transform` | [`WatchableRenderLayerTransform`](../modules/neuroglancer_render_coordinate_transform.md#watchablerenderlayertransform) |

#### Overrides

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[constructor](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#constructor)

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:358](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/single_mesh/frontend.ts#L358)

## Properties

### backend

• **backend**: `undefined` \| [`SharedObject`](neuroglancer_worker_rpc.SharedObject.md)

#### Inherited from

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[backend](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#backend)

#### Defined in

[src/neuroglancer/perspective_view/render_layer.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/perspective_view/render_layer.ts#L75)

___

### countingBuffer

• `Protected` **countingBuffer**: [`CountingBuffer`](neuroglancer_webgl_index_emulation.CountingBuffer.md)

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:357](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/single_mesh/frontend.ts#L357)

___

### displayState

• **displayState**: [`SingleMeshDisplayState`](neuroglancer_single_mesh_frontend.SingleMeshDisplayState.md)

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:359](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/single_mesh/frontend.ts#L359)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[disposedStacks](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

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

### shaderGetter

• `Private` **shaderGetter**: [`ParameterizedEmitterDependentShaderGetter`](../modules/neuroglancer_webgl_dynamic_shader.md#parameterizedemitterdependentshadergetter)<[`ShaderControlsBuilderState`](../interfaces/neuroglancer_webgl_shader_ui_controls.ShaderControlsBuilderState.md), `undefined`\>

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:338](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/single_mesh/frontend.ts#L338)

___

### shaderManager

• `Private` **shaderManager**: [`SingleMeshShaderManager`](neuroglancer_single_mesh_frontend.SingleMeshShaderManager.md)

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:333](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/single_mesh/frontend.ts#L333)

___

### shaders

• `Private` **shaders**: `Map`<[`ShaderModule`](../modules/neuroglancer_webgl_shader.md#shadermodule), ``null`` \| [`ShaderProgram`](neuroglancer_webgl_shader.ShaderProgram.md)\>

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:336](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/single_mesh/frontend.ts#L336)

___

### sharedObject

• `Private` **sharedObject**: [`SingleMeshLayerSharedObject`](neuroglancer_single_mesh_frontend._internal_.SingleMeshLayerSharedObject.md)

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:337](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/single_mesh/frontend.ts#L337)

___

### source

• **source**: [`SingleMeshSource`](neuroglancer_single_mesh_frontend.SingleMeshSource.md)

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:359](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/single_mesh/frontend.ts#L359)

___

### transform

• **transform**: [`WatchableRenderLayerTransform`](../modules/neuroglancer_render_coordinate_transform.md#watchablerenderlayertransform)

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:360](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/single_mesh/frontend.ts#L360)

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

[src/neuroglancer/single_mesh/frontend.ts:394](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/single_mesh/frontend.ts#L394)

___

### isTransparent

• `get` **isTransparent**(): `boolean`

#### Returns

`boolean`

#### Overrides

PerspectiveViewRenderLayer.isTransparent

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:390](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/single_mesh/frontend.ts#L390)

___

### transparentPickEnabled

• `get` **transparentPickEnabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

PerspectiveViewRenderLayer.transparentPickEnabled

#### Defined in

[src/neuroglancer/perspective_view/render_layer.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/perspective_view/render_layer.ts#L67)

## Methods

### addRef

▸ **addRef**(): [`SingleMeshLayer`](neuroglancer_single_mesh_frontend.SingleMeshLayer.md)

#### Returns

[`SingleMeshLayer`](neuroglancer_single_mesh_frontend.SingleMeshLayer.md)

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

### disposeShaders

▸ `Private` **disposeShaders**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:375](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/single_mesh/frontend.ts#L375)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[disposed](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#disposed)

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:385](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/single_mesh/frontend.ts#L385)

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

[src/neuroglancer/single_mesh/frontend.ts:406](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/single_mesh/frontend.ts#L406)

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

[src/neuroglancer/single_mesh/frontend.ts:398](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/single_mesh/frontend.ts#L398)

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

▸ **transformPickedValue**(`pickState`): `undefined` \| `string`

Transform the stored pickedValue and offset associated with the retrieved pick ID into the
actual value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pickState` | [`PickState`](../interfaces/neuroglancer_layer.PickState.md) |

#### Returns

`undefined` \| `string`

#### Overrides

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[transformPickedValue](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#transformpickedvalue)

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:443](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/single_mesh/frontend.ts#L443)

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
