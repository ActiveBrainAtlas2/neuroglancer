[neuroglancer](../README.md) / [Modules](../modules.md) / [volume\_rendering/volume\_render\_layer](../modules/volume_rendering_volume_render_layer.md) / VolumeRenderingRenderLayer

# Class: VolumeRenderingRenderLayer

[volume_rendering/volume_render_layer](../modules/volume_rendering_volume_render_layer.md).VolumeRenderingRenderLayer

## Hierarchy

- [`PerspectiveViewRenderLayer`](perspective_view_render_layer.PerspectiveViewRenderLayer.md)

  ↳ **`VolumeRenderingRenderLayer`**

## Table of contents

### Constructors

- [constructor](volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#constructor)

### Properties

- [backend](volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#backend)
- [channelCoordinateSpace](volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#channelcoordinatespace)
- [disposedStacks](volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#disposedstacks)
- [isAnnotation](volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#isannotation)
- [layerChanged](volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#layerchanged)
- [layerChunkProgressInfo](volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#layerchunkprogressinfo)
- [localPosition](volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#localposition)
- [messages](volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#messages)
- [multiscaleSource](volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#multiscalesource)
- [redrawNeeded](volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#redrawneeded)
- [refCount](volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#refcount)
- [renderScaleHistogram](volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#renderscalehistogram)
- [renderScaleTarget](volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#renderscaletarget)
- [role](volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#role)
- [shaderControlState](volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#shadercontrolstate)
- [shaderGetter](volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#shadergetter)
- [transform](volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#transform)
- [userLayer](volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#userlayer)
- [vertexIdHelper](volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#vertexidhelper)
- [visibility](volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#visibility)
- [wasDisposed](volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#wasdisposed)

### Accessors

- [chunkManager](volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#chunkmanager)
- [dataType](volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#datatype)
- [gl](volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#gl)
- [isTransparent](volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#istransparent)
- [isVolumeRendering](volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#isvolumerendering)
- [transparentPickEnabled](volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#transparentpickenabled)

### Methods

- [addRef](volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#addref)
- [attach](volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#attach)
- [dispose](volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#dispose)
- [disposed](volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#disposed)
- [draw](volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#draw)
- [getValueAt](volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#getvalueat)
- [handleAction](volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#handleaction)
- [isReady](volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#isready)
- [refCountReachedZero](volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#refcountreachedzero)
- [registerCancellable](volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#registercancellable)
- [registerDisposer](volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#registerdisposer)
- [registerEventListener](volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#registereventlistener)
- [transformPickedValue](volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#transformpickedvalue)
- [unregisterDisposer](volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#unregisterdisposer)
- [updateMouseState](volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md#updatemousestate)

## Constructors

### constructor

• **new VolumeRenderingRenderLayer**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`VolumeRenderingRenderLayerOptions`](../interfaces/volume_rendering_volume_render_layer.VolumeRenderingRenderLayerOptions.md) |

#### Overrides

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[constructor](perspective_view_render_layer.PerspectiveViewRenderLayer.md#constructor)

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:89](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/volume_rendering/volume_render_layer.ts#L89)

## Properties

### backend

• **backend**: [`ChunkRenderLayerFrontend`](chunk_manager_frontend.ChunkRenderLayerFrontend.md)

#### Overrides

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[backend](perspective_view_render_layer.PerspectiveViewRenderLayer.md#backend)

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:71](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/volume_rendering/volume_render_layer.ts#L71)

___

### channelCoordinateSpace

• **channelCoordinateSpace**: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`CoordinateSpace`](../interfaces/annotation_annotation_layer_state._internal_.CoordinateSpace.md)\>

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/volume_rendering/volume_render_layer.ts#L66)

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

### localPosition

• **localPosition**: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`Float32Array`\>

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/volume_rendering/volume_render_layer.ts#L67)

___

### messages

• **messages**: [`MessageList`](util_message_list.MessageList.md)

#### Inherited from

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[messages](perspective_view_render_layer.PerspectiveViewRenderLayer.md#messages)

#### Defined in

[src/neuroglancer/renderlayer.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L49)

___

### multiscaleSource

• **multiscaleSource**: [`MultiscaleVolumeChunkSource`](datasource._internal_.MultiscaleVolumeChunkSource.md)

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:64](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/volume_rendering/volume_render_layer.ts#L64)

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

### renderScaleHistogram

• **renderScaleHistogram**: [`RenderScaleHistogram`](annotation_renderlayer._internal_.RenderScaleHistogram.md)

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:70](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/volume_rendering/volume_render_layer.ts#L70)

___

### renderScaleTarget

• **renderScaleTarget**: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`number`\>

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/volume_rendering/volume_render_layer.ts#L69)

___

### role

• **role**: [`RenderLayerRole`](../enums/annotation_annotation_layer_state._internal_.RenderLayerRole.md) = `RenderLayerRole.DATA`

#### Inherited from

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[role](perspective_view_render_layer.PerspectiveViewRenderLayer.md#role)

#### Defined in

[src/neuroglancer/renderlayer.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L48)

___

### shaderControlState

• **shaderControlState**: [`ShaderControlState`](webgl_shader_ui_controls.ShaderControlState.md)

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:68](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/volume_rendering/volume_render_layer.ts#L68)

___

### shaderGetter

• `Private` **shaderGetter**: [`ParameterizedContextDependentShaderGetter`](../interfaces/webgl_dynamic_shader.ParameterizedContextDependentShaderGetter.md)<{ `chunkFormat`: [`ChunkFormat`](../interfaces/datasource._internal_.ChunkFormat.md) ; `emitter`: [`ShaderModule`](../modules/webgl_shader.md#shadermodule)  }, [`ShaderControlsBuilderState`](../interfaces/webgl_shader_ui_controls.ShaderControlsBuilderState.md), `number`\>

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/volume_rendering/volume_render_layer.ts#L74)

___

### transform

• **transform**: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`RenderLayerTransformOrError`](../modules/annotation_annotation_layer_state._internal_.md#renderlayertransformorerror)\>

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:65](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/volume_rendering/volume_render_layer.ts#L65)

___

### userLayer

• **userLayer**: `undefined` \| [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)

#### Inherited from

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[userLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md#userlayer)

#### Defined in

[src/neuroglancer/renderlayer.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L47)

___

### vertexIdHelper

• `Private` **vertexIdHelper**: [`VertexIdHelper`](webgl_vertex_id.VertexIdHelper.md)

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:72](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/volume_rendering/volume_render_layer.ts#L72)

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

### chunkManager

• `get` **chunkManager**(): [`ChunkManager`](chunk_manager_frontend.ChunkManager.md)

#### Returns

[`ChunkManager`](chunk_manager_frontend.ChunkManager.md)

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:277](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/volume_rendering/volume_render_layer.ts#L277)

___

### dataType

• `get` **dataType**(): [`DataType`](../enums/util_data_type.DataType.md)

#### Returns

[`DataType`](../enums/util_data_type.DataType.md)

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/volume_rendering/volume_render_layer.ts#L245)

___

### gl

• `get` **gl**(): [`GL`](../interfaces/webgl_context.GL.md)

#### Returns

[`GL`](../interfaces/webgl_context.GL.md)

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/volume_rendering/volume_render_layer.ts#L77)

___

### isTransparent

• `get` **isTransparent**(): `boolean`

#### Returns

`boolean`

#### Overrides

PerspectiveViewRenderLayer.isTransparent

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/volume_rendering/volume_render_layer.ts#L81)

___

### isVolumeRendering

• `get` **isVolumeRendering**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/volume_rendering/volume_render_layer.ts#L85)

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

▸ **addRef**(): [`VolumeRenderingRenderLayer`](volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md)

#### Returns

[`VolumeRenderingRenderLayer`](volume_rendering_volume_render_layer.VolumeRenderingRenderLayer.md)

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
| `attachment` | [`VisibleLayerInfo`](annotation_renderlayer._internal_.VisibleLayerInfo.md)<[`PerspectivePanel`](perspective_view_panel.PerspectivePanel.md), [`VolumeRenderingAttachmentState`](../interfaces/volume_rendering_volume_render_layer._internal_.VolumeRenderingAttachmentState.md)\> |

#### Returns

`void`

#### Overrides

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[attach](perspective_view_render_layer.PerspectiveViewRenderLayer.md#attach)

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:249](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/volume_rendering/volume_render_layer.ts#L249)

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
| `attachment` | [`VisibleLayerInfo`](annotation_renderlayer._internal_.VisibleLayerInfo.md)<[`PerspectivePanel`](perspective_view_panel.PerspectivePanel.md), [`VolumeRenderingAttachmentState`](../interfaces/volume_rendering_volume_render_layer._internal_.VolumeRenderingAttachmentState.md)\> |

#### Returns

`void`

#### Overrides

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[draw](perspective_view_render_layer.PerspectiveViewRenderLayer.md#draw)

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:281](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/volume_rendering/volume_render_layer.ts#L281)

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

▸ **isReady**(`renderContext`, `attachment`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderContext` | [`PerspectiveViewReadyRenderContext`](../interfaces/perspective_view_render_layer.PerspectiveViewReadyRenderContext.md) |
| `attachment` | [`VisibleLayerInfo`](annotation_renderlayer._internal_.VisibleLayerInfo.md)<[`PerspectivePanel`](perspective_view_panel.PerspectivePanel.md), [`VolumeRenderingAttachmentState`](../interfaces/volume_rendering_volume_render_layer._internal_.VolumeRenderingAttachmentState.md)\> |

#### Returns

`boolean`

#### Overrides

[PerspectiveViewRenderLayer](perspective_view_render_layer.PerspectiveViewRenderLayer.md).[isReady](perspective_view_render_layer.PerspectiveViewRenderLayer.md#isready)

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:434](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/volume_rendering/volume_render_layer.ts#L434)

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
