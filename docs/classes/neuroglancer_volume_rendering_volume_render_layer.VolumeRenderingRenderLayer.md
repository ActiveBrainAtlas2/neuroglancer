[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/volume\_rendering/volume\_render\_layer](../modules/neuroglancer_volume_rendering_volume_render_layer.md) / VolumeRenderingRenderLayer

# Class: VolumeRenderingRenderLayer

[neuroglancer/volume_rendering/volume_render_layer](../modules/neuroglancer_volume_rendering_volume_render_layer.md).VolumeRenderingRenderLayer

Extends RenderLayer with functionality for tracking the number of panels in which the layer is
visible.

## Hierarchy

- [`PerspectiveViewRenderLayer`](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md)

  ↳ **`VolumeRenderingRenderLayer`**

## Table of contents

### Constructors

- [constructor](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#constructor)

### Properties

- [backend](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#backend)
- [channelCoordinateSpace](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#channelcoordinatespace)
- [disposedStacks](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#disposedstacks)
- [isAnnotation](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#isannotation)
- [layerChanged](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#layerchanged)
- [layerChunkProgressInfo](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#layerchunkprogressinfo)
- [localPosition](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#localposition)
- [messages](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#messages)
- [multiscaleSource](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#multiscalesource)
- [redrawNeeded](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#redrawneeded)
- [refCount](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#refcount)
- [renderScaleHistogram](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#renderscalehistogram)
- [renderScaleTarget](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#renderscaletarget)
- [role](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#role)
- [shaderControlState](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#shadercontrolstate)
- [shaderGetter](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#shadergetter)
- [transform](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#transform)
- [userLayer](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#userlayer)
- [vertexIdHelper](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#vertexidhelper)
- [visibility](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#visibility)
- [wasDisposed](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#wasdisposed)

### Accessors

- [chunkManager](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#chunkmanager)
- [dataType](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#datatype)
- [gl](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#gl)
- [isTransparent](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#istransparent)
- [isVolumeRendering](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#isvolumerendering)
- [transparentPickEnabled](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#transparentpickenabled)

### Methods

- [addRef](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#addref)
- [attach](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#attach)
- [dispose](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#dispose)
- [disposed](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#disposed)
- [draw](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#draw)
- [getValueAt](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#getvalueat)
- [handleAction](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#handleaction)
- [isReady](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#isready)
- [refCountReachedZero](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#refcountreachedzero)
- [registerCancellable](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#registercancellable)
- [registerDisposer](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#registerdisposer)
- [registerEventListener](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#registereventlistener)
- [transformPickedValue](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#transformpickedvalue)
- [unregisterDisposer](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#unregisterdisposer)
- [updateMouseState](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#updatemousestate)

## Constructors

### constructor

• **new VolumeRenderingRenderLayer**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`VolumeRenderingRenderLayerOptions`](../interfaces/neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayerOptions.md) |

#### Overrides

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[constructor](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#constructor)

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:89](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/volume_rendering/volume_render_layer.ts#L89)

## Properties

### backend

• **backend**: [`ChunkRenderLayerFrontend`](neuroglancer_chunk_manager_frontend.ChunkRenderLayerFrontend.md)

#### Overrides

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[backend](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#backend)

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:71](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/volume_rendering/volume_render_layer.ts#L71)

___

### channelCoordinateSpace

• **channelCoordinateSpace**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/neuroglancer_coordinate_transform.CoordinateSpace.md)\>

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/volume_rendering/volume_render_layer.ts#L66)

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

### localPosition

• **localPosition**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`Float32Array`\>

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/volume_rendering/volume_render_layer.ts#L67)

___

### messages

• **messages**: [`MessageList`](neuroglancer_util_message_list.MessageList.md)

#### Inherited from

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[messages](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#messages)

#### Defined in

[src/neuroglancer/renderlayer.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/renderlayer.ts#L49)

___

### multiscaleSource

• **multiscaleSource**: [`MultiscaleVolumeChunkSource`](neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md)

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:64](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/volume_rendering/volume_render_layer.ts#L64)

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

### renderScaleHistogram

• **renderScaleHistogram**: [`RenderScaleHistogram`](neuroglancer_render_scale_statistics.RenderScaleHistogram.md)

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:70](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/volume_rendering/volume_render_layer.ts#L70)

___

### renderScaleTarget

• **renderScaleTarget**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`number`\>

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/volume_rendering/volume_render_layer.ts#L69)

___

### role

• **role**: [`RenderLayerRole`](../enums/neuroglancer_renderlayer.RenderLayerRole.md) = `RenderLayerRole.DATA`

#### Inherited from

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[role](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#role)

#### Defined in

[src/neuroglancer/renderlayer.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/renderlayer.ts#L48)

___

### shaderControlState

• **shaderControlState**: [`ShaderControlState`](neuroglancer_webgl_shader_ui_controls.ShaderControlState.md)

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:68](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/volume_rendering/volume_render_layer.ts#L68)

___

### shaderGetter

• `Private` **shaderGetter**: [`ParameterizedContextDependentShaderGetter`](../interfaces/neuroglancer_webgl_dynamic_shader.ParameterizedContextDependentShaderGetter.md)<{ `chunkFormat`: [`ChunkFormat`](../interfaces/neuroglancer_sliceview_volume_frontend.ChunkFormat.md) ; `emitter`: [`ShaderModule`](../modules/neuroglancer_webgl_shader.md#shadermodule)  }, [`ShaderControlsBuilderState`](../interfaces/neuroglancer_webgl_shader_ui_controls.ShaderControlsBuilderState.md), `number`\>

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/volume_rendering/volume_render_layer.ts#L74)

___

### transform

• **transform**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`RenderLayerTransformOrError`](../modules/neuroglancer_render_coordinate_transform.md#renderlayertransformorerror)\>

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:65](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/volume_rendering/volume_render_layer.ts#L65)

___

### userLayer

• **userLayer**: `undefined` \| [`UserLayer`](neuroglancer_layer.UserLayer.md)

#### Inherited from

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[userLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#userlayer)

#### Defined in

[src/neuroglancer/renderlayer.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/renderlayer.ts#L47)

___

### vertexIdHelper

• `Private` **vertexIdHelper**: [`VertexIdHelper`](neuroglancer_webgl_vertex_id.VertexIdHelper.md)

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:72](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/volume_rendering/volume_render_layer.ts#L72)

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

### chunkManager

• `get` **chunkManager**(): [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md)

#### Returns

[`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md)

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:277](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/volume_rendering/volume_render_layer.ts#L277)

___

### dataType

• `get` **dataType**(): [`DataType`](../enums/neuroglancer_util_data_type.DataType.md)

#### Returns

[`DataType`](../enums/neuroglancer_util_data_type.DataType.md)

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/volume_rendering/volume_render_layer.ts#L245)

___

### gl

• `get` **gl**(): [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Returns

[`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/volume_rendering/volume_render_layer.ts#L77)

___

### isTransparent

• `get` **isTransparent**(): `boolean`

#### Returns

`boolean`

#### Overrides

PerspectiveViewRenderLayer.isTransparent

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/volume_rendering/volume_render_layer.ts#L81)

___

### isVolumeRendering

• `get` **isVolumeRendering**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/volume_rendering/volume_render_layer.ts#L85)

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

▸ **addRef**(): [`VolumeRenderingRenderLayer`](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md)

#### Returns

[`VolumeRenderingRenderLayer`](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md)

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
| `attachment` | [`VisibleLayerInfo`](neuroglancer_layer.VisibleLayerInfo.md)<[`PerspectivePanel`](neuroglancer_perspective_view_panel.PerspectivePanel.md), [`VolumeRenderingAttachmentState`](../interfaces/neuroglancer_volume_rendering_volume_render_layer._internal_.VolumeRenderingAttachmentState.md)\> |

#### Returns

`void`

#### Overrides

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[attach](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#attach)

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:249](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/volume_rendering/volume_render_layer.ts#L249)

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
| `attachment` | [`VisibleLayerInfo`](neuroglancer_layer.VisibleLayerInfo.md)<[`PerspectivePanel`](neuroglancer_perspective_view_panel.PerspectivePanel.md), [`VolumeRenderingAttachmentState`](../interfaces/neuroglancer_volume_rendering_volume_render_layer._internal_.VolumeRenderingAttachmentState.md)\> |

#### Returns

`void`

#### Overrides

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[draw](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#draw)

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:281](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/volume_rendering/volume_render_layer.ts#L281)

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

▸ **isReady**(`renderContext`, `attachment`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderContext` | [`PerspectiveViewReadyRenderContext`](../interfaces/neuroglancer_perspective_view_render_layer.PerspectiveViewReadyRenderContext.md) |
| `attachment` | [`VisibleLayerInfo`](neuroglancer_layer.VisibleLayerInfo.md)<[`PerspectivePanel`](neuroglancer_perspective_view_panel.PerspectivePanel.md), [`VolumeRenderingAttachmentState`](../interfaces/neuroglancer_volume_rendering_volume_render_layer._internal_.VolumeRenderingAttachmentState.md)\> |

#### Returns

`boolean`

#### Overrides

[PerspectiveViewRenderLayer](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md).[isReady](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md#isready)

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:434](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/volume_rendering/volume_render_layer.ts#L434)

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
