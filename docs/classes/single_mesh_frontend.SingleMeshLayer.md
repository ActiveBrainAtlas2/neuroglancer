[neuroglancer](../README.md) / [Modules](../modules.md) / [single\_mesh/frontend](../modules/single_mesh_frontend.md) / SingleMeshLayer

# Class: SingleMeshLayer

[single_mesh/frontend](../modules/single_mesh_frontend.md).SingleMeshLayer

## Hierarchy

- [`PerspectiveViewRenderLayer`](perspective_view_render_layer.PerspectiveViewRenderLayer.md)<[`ThreeDimensionalRenderLayerAttachmentState`](../interfaces/mesh_frontend._internal_.ThreeDimensionalRenderLayerAttachmentState.md)\>

  ↳ **`SingleMeshLayer`**

## Table of contents

### Constructors

- [constructor](single_mesh_frontend.SingleMeshLayer.md#constructor)

### Properties

- [backend](single_mesh_frontend.SingleMeshLayer.md#backend)
- [countingBuffer](single_mesh_frontend.SingleMeshLayer.md#countingbuffer)
- [displayState](single_mesh_frontend.SingleMeshLayer.md#displaystate)
- [disposedStacks](single_mesh_frontend.SingleMeshLayer.md#disposedstacks)
- [isAnnotation](single_mesh_frontend.SingleMeshLayer.md#isannotation)
- [layerChanged](single_mesh_frontend.SingleMeshLayer.md#layerchanged)
- [layerChunkProgressInfo](single_mesh_frontend.SingleMeshLayer.md#layerchunkprogressinfo)
- [messages](single_mesh_frontend.SingleMeshLayer.md#messages)
- [redrawNeeded](single_mesh_frontend.SingleMeshLayer.md#redrawneeded)
- [refCount](single_mesh_frontend.SingleMeshLayer.md#refcount)
- [role](single_mesh_frontend.SingleMeshLayer.md#role)
- [shaderGetter](single_mesh_frontend.SingleMeshLayer.md#shadergetter)
- [shaderManager](single_mesh_frontend.SingleMeshLayer.md#shadermanager)
- [shaders](single_mesh_frontend.SingleMeshLayer.md#shaders)
- [sharedObject](single_mesh_frontend.SingleMeshLayer.md#sharedobject)
- [source](single_mesh_frontend.SingleMeshLayer.md#source)
- [transform](single_mesh_frontend.SingleMeshLayer.md#transform)
- [userLayer](single_mesh_frontend.SingleMeshLayer.md#userlayer)
- [visibility](single_mesh_frontend.SingleMeshLayer.md#visibility)
- [wasDisposed](single_mesh_frontend.SingleMeshLayer.md#wasdisposed)

### Accessors

- [gl](single_mesh_frontend.SingleMeshLayer.md#gl)
- [isTransparent](single_mesh_frontend.SingleMeshLayer.md#istransparent)
- [transparentPickEnabled](single_mesh_frontend.SingleMeshLayer.md#transparentpickenabled)

### Methods

- [addRef](single_mesh_frontend.SingleMeshLayer.md#addref)
- [attach](single_mesh_frontend.SingleMeshLayer.md#attach)
- [dispose](single_mesh_frontend.SingleMeshLayer.md#dispose)
- [disposeShaders](single_mesh_frontend.SingleMeshLayer.md#disposeshaders)
- [disposed](single_mesh_frontend.SingleMeshLayer.md#disposed)
- [draw](single_mesh_frontend.SingleMeshLayer.md#draw)
- [getValueAt](single_mesh_frontend.SingleMeshLayer.md#getvalueat)
- [handleAction](single_mesh_frontend.SingleMeshLayer.md#handleaction)
- [isReady](single_mesh_frontend.SingleMeshLayer.md#isready)
- [refCountReachedZero](single_mesh_frontend.SingleMeshLayer.md#refcountreachedzero)
- [registerCancellable](single_mesh_frontend.SingleMeshLayer.md#registercancellable)
- [registerDisposer](single_mesh_frontend.SingleMeshLayer.md#registerdisposer)
- [registerEventListener](single_mesh_frontend.SingleMeshLayer.md#registereventlistener)
- [transformPickedValue](single_mesh_frontend.SingleMeshLayer.md#transformpickedvalue)
- [unregisterDisposer](single_mesh_frontend.SingleMeshLayer.md#unregisterdisposer)
- [updateMouseState](single_mesh_frontend.SingleMeshLayer.md#updatemousestate)

## Constructors

### constructor

• **new SingleMeshLayer**(`source`, `displayState`, `transform`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`SingleMeshSource`](single_mesh_frontend.SingleMeshSource.md) |
| `displayState` | [`SingleMeshDisplayState`](single_mesh_frontend.SingleMeshDisplayState.md) |
| `transform` | [`WatchableRenderLayerTransform`](../modules/mesh_frontend._internal_.md#watchablerenderlayertransform) |

#### Overrides

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[constructor](perspective_view_render_layer.PerspectiveViewRenderLayer.md#constructor)

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:358](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/single_mesh/frontend.ts#L358)

## Properties

### backend

• **backend**: `undefined` \| [`SharedObject`](annotation_annotation_layer_state._internal_.SharedObject.md)

#### Inherited from

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[backend](perspective_view_render_layer.PerspectiveViewRenderLayer.md#backend)

#### Defined in

[src/neuroglancer/perspective_view/render_layer.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/perspective_view/render_layer.ts#L75)

___

### countingBuffer

• `Protected` **countingBuffer**: [`CountingBuffer`](webgl_index_emulation.CountingBuffer.md)

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:357](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/single_mesh/frontend.ts#L357)

___

### displayState

• **displayState**: [`SingleMeshDisplayState`](single_mesh_frontend.SingleMeshDisplayState.md)

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

### role

• **role**: [`RenderLayerRole`](../enums/annotation_annotation_layer_state._internal_.RenderLayerRole.md) = `RenderLayerRole.DATA`

#### Inherited from

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[role](perspective_view_render_layer.PerspectiveViewRenderLayer.md#role)

#### Defined in

[src/neuroglancer/renderlayer.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L48)

___

### shaderGetter

• `Private` **shaderGetter**: [`ParameterizedEmitterDependentShaderGetter`](../modules/webgl_dynamic_shader.md#parameterizedemitterdependentshadergetter)<[`ShaderControlsBuilderState`](../interfaces/webgl_shader_ui_controls.ShaderControlsBuilderState.md), `undefined`\>

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:338](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/single_mesh/frontend.ts#L338)

___

### shaderManager

• `Private` **shaderManager**: [`SingleMeshShaderManager`](single_mesh_frontend.SingleMeshShaderManager.md)

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:333](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/single_mesh/frontend.ts#L333)

___

### shaders

• `Private` **shaders**: `Map`<[`ShaderModule`](../modules/webgl_shader.md#shadermodule), ``null`` \| [`ShaderProgram`](webgl_shader.ShaderProgram.md)\>

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:336](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/single_mesh/frontend.ts#L336)

___

### sharedObject

• `Private` **sharedObject**: [`SingleMeshLayerSharedObject`](single_mesh_frontend._internal_.SingleMeshLayerSharedObject.md)

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:337](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/single_mesh/frontend.ts#L337)

___

### source

• **source**: [`SingleMeshSource`](single_mesh_frontend.SingleMeshSource.md)

___

### transform

• **transform**: [`WatchableRenderLayerTransform`](../modules/mesh_frontend._internal_.md#watchablerenderlayertransform)

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

[src/neuroglancer/single_mesh/frontend.ts:394](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/single_mesh/frontend.ts#L394)

___

### isTransparent

• `get` **isTransparent**(): `boolean`

#### Returns

`boolean`

#### Overrides

PerspectiveViewRenderLayer.isTransparent

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:390](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/single_mesh/frontend.ts#L390)

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

▸ **addRef**(): [`SingleMeshLayer`](single_mesh_frontend.SingleMeshLayer.md)

#### Returns

[`SingleMeshLayer`](single_mesh_frontend.SingleMeshLayer.md)

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

### disposeShaders

▸ `Private` **disposeShaders**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:375](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/single_mesh/frontend.ts#L375)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[disposed](perspective_view_render_layer.PerspectiveViewRenderLayer.md#disposed)

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:385](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/single_mesh/frontend.ts#L385)

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

[src/neuroglancer/single_mesh/frontend.ts:406](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/single_mesh/frontend.ts#L406)

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

[src/neuroglancer/single_mesh/frontend.ts:398](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/single_mesh/frontend.ts#L398)

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

▸ **transformPickedValue**(`pickState`): `undefined` \| `string`

Transform the stored pickedValue and offset associated with the retrieved pick ID into the
actual value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pickState` | [`PickState`](../interfaces/annotation_annotation_layer_state._internal_.PickState.md) |

#### Returns

`undefined` \| `string`

#### Overrides

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[transformPickedValue](perspective_view_render_layer.PerspectiveViewRenderLayer.md#transformpickedvalue)

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:443](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/single_mesh/frontend.ts#L443)

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
