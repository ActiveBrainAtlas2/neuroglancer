[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/annotation/renderlayer](../modules/neuroglancer_annotation_renderlayer.md) / [<internal\>](../modules/neuroglancer_annotation_renderlayer._internal_.md) / SpatiallyIndexedAnnotationLayer

# Class: SpatiallyIndexedAnnotationLayer<TBase\>

[neuroglancer/annotation/renderlayer](../modules/neuroglancer_annotation_renderlayer.md).[<internal>](../modules/neuroglancer_annotation_renderlayer._internal_.md).SpatiallyIndexedAnnotationLayer

## Type parameters

| Name | Type |
| :------ | :------ |
| `TBase` | extends [`AnyConstructor`](../modules/neuroglancer_util_mixin.md#anyconstructor)<[`AnnotationRenderLayer`](../modules/neuroglancer_annotation_renderlayer._internal_.md#annotationrenderlayer)\> |

## Hierarchy

- [`C`](neuroglancer_annotation_renderlayer._internal_.C.md)<[`AnyConstructor`](../modules/neuroglancer_util_mixin.md#anyconstructor)<[`VisibilityTrackedRenderLayer`](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md)<[`LayerView`](../interfaces/neuroglancer_layer.LayerView.md), `unknown`\>\>, `this`\> & [`VisibilityTrackedRenderLayer`](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md)<[`LayerView`](../interfaces/neuroglancer_layer.LayerView.md), `unknown`, `this`\>

  ↳ **`SpatiallyIndexedAnnotationLayer`**

## Table of contents

### Constructors

- [constructor](neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#constructor)

### Properties

- [backend](neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#backend)
- [base](neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#base)
- [curRank](neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#currank)
- [disposedStacks](neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#disposedstacks)
- [isAnnotation](neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#isannotation)
- [layerChanged](neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#layerchanged)
- [layerChunkProgressInfo](neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#layerchunkprogressinfo)
- [messages](neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#messages)
- [redrawNeeded](neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#redrawneeded)
- [refCount](neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#refcount)
- [renderScaleHistogram](neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#renderscalehistogram)
- [renderScaleTarget](neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#renderscaletarget)
- [role](neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#role)
- [userLayer](neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#userlayer)
- [visibility](neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#visibility)
- [wasDisposed](neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#wasdisposed)
- [wireFrameRenderHelper](neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#wireframerenderhelper)
- [wireFrameShaderGetter](neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#wireframeshadergetter)

### Accessors

- [chunkTransform](neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#chunktransform)
- [gl](neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#gl)

### Methods

- [addRef](neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#addref)
- [attach](neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#attach)
- [dispose](neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#dispose)
- [disposed](neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#disposed)
- [draw](neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#draw)
- [drawGeometry](neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#drawgeometry)
- [drawGeometryChunkData](neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#drawgeometrychunkdata)
- [getValueAt](neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#getvalueat)
- [handleAction](neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#handleaction)
- [handleRankChanged](neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#handlerankchanged)
- [isReady](neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#isready)
- [refCountReachedZero](neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#refcountreachedzero)
- [registerCancellable](neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#registercancellable)
- [registerDisposer](neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#registerdisposer)
- [registerEventListener](neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#registereventlistener)
- [transformPickedValue](neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#transformpickedvalue)
- [unregisterDisposer](neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#unregisterdisposer)
- [updateAttachmentState](neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#updateattachmentstate)
- [updateModelClipBounds](neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#updatemodelclipbounds)
- [updateMouseState](neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#updatemousestate)

## Constructors

### constructor

• **new SpatiallyIndexedAnnotationLayer**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.annotationLayer` | [`AnnotationLayer`](neuroglancer_annotation_renderlayer.AnnotationLayer.md) |
| `options.renderScaleHistogram` | [`RenderScaleHistogram`](neuroglancer_render_scale_statistics.RenderScaleHistogram.md) |
| `options.renderScaleTarget` | [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`number`\> |

#### Overrides

(Base as AnyConstructor&lt;AnnotationRenderLayer\&gt;).constructor

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:653](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/renderlayer.ts#L653)

## Properties

### backend

• **backend**: [`SharedObject`](neuroglancer_worker_rpc.SharedObject.md)

#### Overrides

(Base as AnyConstructor&lt;AnnotationRenderLayer\&gt;).backend

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:677](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/renderlayer.ts#L677)

___

### base

• **base**: [`AnnotationLayer`](neuroglancer_annotation_renderlayer.AnnotationLayer.md)

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).base

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:345](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/renderlayer.ts#L345)

___

### curRank

• **curRank**: `number` = `-1`

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).curRank

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:318](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/renderlayer.ts#L318)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L52)

___

### isAnnotation

• **isAnnotation**: `boolean` = `true`

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).isAnnotation

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:586](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/renderlayer.ts#L586)

___

### layerChanged

• **layerChanged**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).layerChanged

#### Defined in

[src/neuroglancer/renderlayer.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/renderlayer.ts#L50)

___

### layerChunkProgressInfo

• **layerChunkProgressInfo**: [`LayerChunkProgressInfo`](neuroglancer_chunk_manager_base.LayerChunkProgressInfo.md)

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).layerChunkProgressInfo

#### Defined in

[src/neuroglancer/renderlayer.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/renderlayer.ts#L52)

___

### messages

• **messages**: [`MessageList`](neuroglancer_util_message_list.MessageList.md)

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).messages

#### Defined in

[src/neuroglancer/renderlayer.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/renderlayer.ts#L49)

___

### redrawNeeded

• **redrawNeeded**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).redrawNeeded

#### Defined in

[src/neuroglancer/renderlayer.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/renderlayer.ts#L51)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L45)

___

### renderScaleHistogram

• **renderScaleHistogram**: [`RenderScaleHistogram`](neuroglancer_render_scale_statistics.RenderScaleHistogram.md)

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).renderScaleHistogram

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:345](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/renderlayer.ts#L345)

___

### renderScaleTarget

• **renderScaleTarget**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`number`\>

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:652](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/renderlayer.ts#L652)

___

### role

• **role**: [`RenderLayerRole`](../enums/neuroglancer_renderlayer.RenderLayerRole.md) = `RenderLayerRole.DATA`

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).role

#### Defined in

[src/neuroglancer/renderlayer.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/renderlayer.ts#L48)

___

### userLayer

• **userLayer**: `undefined` \| [`UserLayer`](neuroglancer_layer.UserLayer.md)

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).userLayer

#### Defined in

[src/neuroglancer/renderlayer.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/renderlayer.ts#L47)

___

### visibility

• **visibility**: [`VisibilityPriorityAggregator`](neuroglancer_visibility_priority_frontend.VisibilityPriorityAggregator.md)

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).visibility

#### Defined in

[src/neuroglancer/renderlayer.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/renderlayer.ts#L85)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L46)

___

### wireFrameRenderHelper

• **wireFrameRenderHelper**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `defineShader` | (`builder`: [`ShaderBuilder`](neuroglancer_webgl_shader.ShaderBuilder.md)) => `void` |
| `draw` | (`shader`: [`ShaderProgram`](neuroglancer_webgl_shader.ShaderProgram.md), `tsource`: [`TransformedSource`](../interfaces/neuroglancer_sliceview_base.TransformedSource.md)<[`SliceViewRenderLayer`](../interfaces/neuroglancer_sliceview_base.SliceViewRenderLayer.md), [`SliceViewChunkSource`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\>\>, `projectionParameters`: [`SliceViewProjectionParameters`](neuroglancer_sliceview_base.SliceViewProjectionParameters.md)) => `void` |
| `initialize` | (`shader`: [`ShaderProgram`](neuroglancer_webgl_shader.ShaderProgram.md), `projectionParameters`: [`SliceViewProjectionParameters`](neuroglancer_sliceview_base.SliceViewProjectionParameters.md)) => `void` |

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:710](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/renderlayer.ts#L710)

___

### wireFrameShaderGetter

• **wireFrameShaderGetter**: [`ParameterizedContextDependentShaderGetter`](../interfaces/neuroglancer_webgl_dynamic_shader.ParameterizedContextDependentShaderGetter.md)<[`ShaderModule`](../modules/neuroglancer_webgl_shader.md#shadermodule), `undefined`, `undefined`\>

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:714](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/renderlayer.ts#L714)

## Accessors

### chunkTransform

• `get` **chunkTransform**(): [`ValueOrError`](../modules/neuroglancer_util_error.md#valueorerror)<[`ChunkTransformParameters`](../interfaces/neuroglancer_render_coordinate_transform.ChunkTransformParameters.md)\>

#### Returns

[`ValueOrError`](../modules/neuroglancer_util_error.md#valueorerror)<[`ChunkTransformParameters`](../interfaces/neuroglancer_render_coordinate_transform.ChunkTransformParameters.md)\>

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).chunkTransform

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:392](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/renderlayer.ts#L392)

___

### gl

• `get` **gl**(): [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Returns

[`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).gl

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:407](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/renderlayer.ts#L407)

## Methods

### addRef

▸ **addRef**(): [`SpatiallyIndexedAnnotationLayer`](neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md)<`TBase`\>

#### Returns

[`SpatiallyIndexedAnnotationLayer`](neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md)<`TBase`\>

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).addRef

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L48)

___

### attach

▸ **attach**(`attachment`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attachment` | [`VisibleLayerInfo`](neuroglancer_layer.VisibleLayerInfo.md)<[`LayerView`](../interfaces/neuroglancer_layer.LayerView.md), [`SpatiallyIndexedValidAttachmentState`](../interfaces/neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedValidAttachmentState.md)\> |

#### Returns

`void`

#### Overrides

(Base as AnyConstructor&lt;AnnotationRenderLayer\&gt;).attach

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:679](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/renderlayer.ts#L679)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).dispose

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).disposed

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L75)

___

### draw

▸ **draw**(`renderContext`, `attachment`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderContext` | [`PerspectiveViewRenderContext`](../interfaces/neuroglancer_perspective_view_render_layer.PerspectiveViewRenderContext.md) \| [`SliceViewPanelRenderContext`](../interfaces/neuroglancer_sliceview_renderlayer.SliceViewPanelRenderContext.md) |
| `attachment` | [`VisibleLayerInfo`](neuroglancer_layer.VisibleLayerInfo.md)<[`PerspectivePanel`](neuroglancer_perspective_view_panel.PerspectivePanel.md), [`SpatiallyIndexedValidAttachmentState`](../interfaces/neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedValidAttachmentState.md)\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:724](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/renderlayer.ts#L724)

___

### drawGeometry

▸ **drawGeometry**(`chunk`, `renderContext`, `state`, `drawFraction?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `chunk` | [`AnnotationGeometryDataInterface`](../interfaces/neuroglancer_annotation_renderlayer._internal_.AnnotationGeometryDataInterface.md) | `undefined` |
| `renderContext` | [`PerspectiveViewRenderContext`](../interfaces/neuroglancer_perspective_view_render_layer.PerspectiveViewRenderContext.md) \| [`SliceViewPanelRenderContext`](../interfaces/neuroglancer_sliceview_renderlayer.SliceViewPanelRenderContext.md) | `undefined` |
| `state` | [`AnnotationChunkRenderParameters`](../interfaces/neuroglancer_annotation_renderlayer._internal_.AnnotationChunkRenderParameters.md) | `undefined` |
| `drawFraction` | `number` | `1` |

#### Returns

`void`

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).drawGeometry

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:429](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/renderlayer.ts#L429)

___

### drawGeometryChunkData

▸ **drawGeometryChunkData**(`chunk`, `renderContext`, `state`, `drawFraction?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `chunk` | [`AnnotationGeometryData`](neuroglancer_annotation_frontend_source.AnnotationGeometryData.md) | `undefined` |
| `renderContext` | [`PerspectiveViewRenderContext`](../interfaces/neuroglancer_perspective_view_render_layer.PerspectiveViewRenderContext.md) \| [`SliceViewPanelRenderContext`](../interfaces/neuroglancer_sliceview_renderlayer.SliceViewPanelRenderContext.md) | `undefined` |
| `state` | [`AnnotationChunkRenderParameters`](../interfaces/neuroglancer_annotation_renderlayer._internal_.AnnotationChunkRenderParameters.md) | `undefined` |
| `drawFraction` | `number` | `1` |

#### Returns

`void`

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).drawGeometryChunkData

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:411](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/renderlayer.ts#L411)

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

(Base as AnyConstructor<AnnotationRenderLayer\>).getValueAt

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

(Base as AnyConstructor<AnnotationRenderLayer\>).handleAction

#### Defined in

[src/neuroglancer/renderlayer.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/renderlayer.ts#L54)

___

### handleRankChanged

▸ **handleRankChanged**(): `void`

#### Returns

`void`

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).handleRankChanged

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:322](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/renderlayer.ts#L322)

___

### isReady

▸ **isReady**(): `boolean`

#### Returns

`boolean`

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).isReady

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:561](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/renderlayer.ts#L561)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).refCountReachedZero

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

(Base as AnyConstructor<AnnotationRenderLayer\>).registerCancellable

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

(Base as AnyConstructor<AnnotationRenderLayer\>).registerDisposer

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

(Base as AnyConstructor<AnnotationRenderLayer\>).registerEventListener

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

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).transformPickedValue

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:544](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/renderlayer.ts#L544)

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

(Base as AnyConstructor<AnnotationRenderLayer\>).transformPickedValue

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

(Base as AnyConstructor<AnnotationRenderLayer\>).unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disposable.ts#L85)

___

### updateAttachmentState

▸ **updateAttachmentState**(`attachment`): `undefined` \| [`AnnotationChunkRenderParameters`](../interfaces/neuroglancer_annotation_renderlayer._internal_.AnnotationChunkRenderParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attachment` | [`VisibleLayerInfo`](neuroglancer_layer.VisibleLayerInfo.md)<[`LayerView`](../interfaces/neuroglancer_layer.LayerView.md), [`AttachmentState`](../interfaces/neuroglancer_annotation_renderlayer._internal_.AttachmentState.md)\> |

#### Returns

`undefined` \| [`AnnotationChunkRenderParameters`](../interfaces/neuroglancer_annotation_renderlayer._internal_.AnnotationChunkRenderParameters.md)

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).updateAttachmentState

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:375](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/renderlayer.ts#L375)

___

### updateModelClipBounds

▸ **updateModelClipBounds**(`renderContext`, `state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderContext` | [`ThreeDimensionalRenderContext`](../interfaces/neuroglancer_renderlayer.ThreeDimensionalRenderContext.md) |
| `state` | [`AnnotationChunkRenderParameters`](../interfaces/neuroglancer_annotation_renderlayer._internal_.AnnotationChunkRenderParameters.md) |

#### Returns

`void`

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).updateModelClipBounds

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:396](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/renderlayer.ts#L396)

___

### updateMouseState

▸ **updateMouseState**(`mouseState`, `_pickedValue`, `pickedOffset`, `data`): `void`

Optionally updates the mouse state based on the retrived pick information.  This might snap the
3-d position to the center of the picked point.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mouseState` | [`MouseSelectionState`](neuroglancer_layer.MouseSelectionState.md) |
| `_pickedValue` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |
| `pickedOffset` | `number` |
| `data` | `any` |

#### Returns

`void`

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).updateMouseState

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:484](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/renderlayer.ts#L484)
