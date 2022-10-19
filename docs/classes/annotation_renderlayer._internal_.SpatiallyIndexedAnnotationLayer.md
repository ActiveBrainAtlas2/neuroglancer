[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/renderlayer](../modules/annotation_renderlayer.md) / [<internal\>](../modules/annotation_renderlayer._internal_.md) / SpatiallyIndexedAnnotationLayer

# Class: SpatiallyIndexedAnnotationLayer<TBase\>

[annotation/renderlayer](../modules/annotation_renderlayer.md).[<internal>](../modules/annotation_renderlayer._internal_.md).SpatiallyIndexedAnnotationLayer

## Type parameters

| Name | Type |
| :------ | :------ |
| `TBase` | extends [`AnyConstructor`](../modules/util_mixin.md#anyconstructor)<[`AnnotationRenderLayer`](../modules/annotation_renderlayer._internal_.md#annotationrenderlayer)\> |

## Hierarchy

- [`C`](annotation_renderlayer._internal_.C.md)<[`AnyConstructor`](../modules/util_mixin.md#anyconstructor)<[`VisibilityTrackedRenderLayer`](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md)<[`LayerView`](../interfaces/annotation_renderlayer._internal_.LayerView.md), `unknown`\>\>, `this`\> & [`VisibilityTrackedRenderLayer`](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md)<[`LayerView`](../interfaces/annotation_renderlayer._internal_.LayerView.md), `unknown`, `this`\>

  ↳ **`SpatiallyIndexedAnnotationLayer`**

## Table of contents

### Constructors

- [constructor](annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#constructor)

### Properties

- [backend](annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#backend)
- [base](annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#base)
- [curRank](annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#currank)
- [disposedStacks](annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#disposedstacks)
- [isAnnotation](annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#isannotation)
- [layerChanged](annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#layerchanged)
- [layerChunkProgressInfo](annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#layerchunkprogressinfo)
- [messages](annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#messages)
- [redrawNeeded](annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#redrawneeded)
- [refCount](annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#refcount)
- [renderScaleHistogram](annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#renderscalehistogram)
- [renderScaleTarget](annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#renderscaletarget)
- [role](annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#role)
- [userLayer](annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#userlayer)
- [visibility](annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#visibility)
- [wasDisposed](annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#wasdisposed)
- [wireFrameRenderHelper](annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#wireframerenderhelper)
- [wireFrameShaderGetter](annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#wireframeshadergetter)

### Accessors

- [chunkTransform](annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#chunktransform)
- [gl](annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#gl)

### Methods

- [addRef](annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#addref)
- [attach](annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#attach)
- [dispose](annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#dispose)
- [disposed](annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#disposed)
- [draw](annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#draw)
- [drawGeometry](annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#drawgeometry)
- [drawGeometryChunkData](annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#drawgeometrychunkdata)
- [getValueAt](annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#getvalueat)
- [handleAction](annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#handleaction)
- [handleRankChanged](annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#handlerankchanged)
- [isReady](annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#isready)
- [refCountReachedZero](annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#refcountreachedzero)
- [registerCancellable](annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#registercancellable)
- [registerDisposer](annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#registerdisposer)
- [registerEventListener](annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#registereventlistener)
- [transformPickedValue](annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#transformpickedvalue)
- [unregisterDisposer](annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#unregisterdisposer)
- [updateAttachmentState](annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#updateattachmentstate)
- [updateModelClipBounds](annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#updatemodelclipbounds)
- [updateMouseState](annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md#updatemousestate)

## Constructors

### constructor

• **new SpatiallyIndexedAnnotationLayer**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.annotationLayer` | [`AnnotationLayer`](annotation_renderlayer.AnnotationLayer.md) |
| `options.renderScaleHistogram` | [`RenderScaleHistogram`](annotation_renderlayer._internal_.RenderScaleHistogram.md) |
| `options.renderScaleTarget` | [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`number`\> |

#### Overrides

(Base as AnyConstructor&lt;AnnotationRenderLayer\&gt;).constructor

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:653](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/renderlayer.ts#L653)

## Properties

### backend

• **backend**: [`SharedObject`](annotation_annotation_layer_state._internal_.SharedObject.md)

#### Overrides

(Base as AnyConstructor&lt;AnnotationRenderLayer\&gt;).backend

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:677](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/renderlayer.ts#L677)

___

### base

• **base**: [`AnnotationLayer`](annotation_renderlayer.AnnotationLayer.md)

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).base

___

### curRank

• **curRank**: `number` = `-1`

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).curRank

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:318](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/renderlayer.ts#L318)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### isAnnotation

• **isAnnotation**: `boolean` = `true`

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).isAnnotation

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:586](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/renderlayer.ts#L586)

___

### layerChanged

• **layerChanged**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).layerChanged

#### Defined in

[src/neuroglancer/renderlayer.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L50)

___

### layerChunkProgressInfo

• **layerChunkProgressInfo**: [`LayerChunkProgressInfo`](chunk_manager_base.LayerChunkProgressInfo.md)

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).layerChunkProgressInfo

#### Defined in

[src/neuroglancer/renderlayer.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L52)

___

### messages

• **messages**: [`MessageList`](util_message_list.MessageList.md)

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).messages

#### Defined in

[src/neuroglancer/renderlayer.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L49)

___

### redrawNeeded

• **redrawNeeded**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).redrawNeeded

#### Defined in

[src/neuroglancer/renderlayer.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L51)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### renderScaleHistogram

• **renderScaleHistogram**: [`RenderScaleHistogram`](annotation_renderlayer._internal_.RenderScaleHistogram.md)

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).renderScaleHistogram

___

### renderScaleTarget

• **renderScaleTarget**: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`number`\>

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:652](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/renderlayer.ts#L652)

___

### role

• **role**: [`RenderLayerRole`](../enums/annotation_annotation_layer_state._internal_.RenderLayerRole.md) = `RenderLayerRole.DATA`

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).role

#### Defined in

[src/neuroglancer/renderlayer.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L48)

___

### userLayer

• **userLayer**: `undefined` \| [`UserLayer`](annotation_annotation_layer_state._internal_.UserLayer.md)

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).userLayer

#### Defined in

[src/neuroglancer/renderlayer.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L47)

___

### visibility

• **visibility**: [`VisibilityPriorityAggregator`](visibility_priority_frontend.VisibilityPriorityAggregator.md)

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).visibility

#### Defined in

[src/neuroglancer/renderlayer.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L85)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

___

### wireFrameRenderHelper

• **wireFrameRenderHelper**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `defineShader` | (`builder`: [`ShaderBuilder`](webgl_shader.ShaderBuilder.md)) => `void` |
| `draw` | (`shader`: [`ShaderProgram`](webgl_shader.ShaderProgram.md), `tsource`: [`TransformedSource`](../interfaces/sliceview_base.TransformedSource.md)<[`SliceViewRenderLayer`](../interfaces/sliceview_base.SliceViewRenderLayer.md), [`SliceViewChunkSource`](../interfaces/sliceview_base.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\>\>, `projectionParameters`: [`SliceViewProjectionParameters`](sliceview_base.SliceViewProjectionParameters.md)) => `void` |
| `initialize` | (`shader`: [`ShaderProgram`](webgl_shader.ShaderProgram.md), `projectionParameters`: [`SliceViewProjectionParameters`](sliceview_base.SliceViewProjectionParameters.md)) => `void` |

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:710](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/renderlayer.ts#L710)

___

### wireFrameShaderGetter

• **wireFrameShaderGetter**: [`ParameterizedContextDependentShaderGetter`](../interfaces/webgl_dynamic_shader.ParameterizedContextDependentShaderGetter.md)<[`ShaderModule`](../modules/webgl_shader.md#shadermodule), `undefined`, `undefined`\>

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:714](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/renderlayer.ts#L714)

## Accessors

### chunkTransform

• `get` **chunkTransform**(): [`ValueOrError`](../modules/util_error.md#valueorerror)<[`ChunkTransformParameters`](../interfaces/annotation_annotation_layer_state._internal_.ChunkTransformParameters.md)\>

#### Returns

[`ValueOrError`](../modules/util_error.md#valueorerror)<[`ChunkTransformParameters`](../interfaces/annotation_annotation_layer_state._internal_.ChunkTransformParameters.md)\>

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).chunkTransform

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:392](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/renderlayer.ts#L392)

___

### gl

• `get` **gl**(): [`GL`](../interfaces/webgl_context.GL.md)

#### Returns

[`GL`](../interfaces/webgl_context.GL.md)

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).gl

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:407](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/renderlayer.ts#L407)

## Methods

### addRef

▸ **addRef**(): [`SpatiallyIndexedAnnotationLayer`](annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md)<`TBase`\>

#### Returns

[`SpatiallyIndexedAnnotationLayer`](annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md)<`TBase`\>

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).addRef

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### attach

▸ **attach**(`attachment`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attachment` | [`VisibleLayerInfo`](annotation_renderlayer._internal_.VisibleLayerInfo.md)<[`LayerView`](../interfaces/annotation_renderlayer._internal_.LayerView.md), [`SpatiallyIndexedValidAttachmentState`](../interfaces/annotation_renderlayer._internal_.SpatiallyIndexedValidAttachmentState.md)\> |

#### Returns

`void`

#### Overrides

(Base as AnyConstructor&lt;AnnotationRenderLayer\&gt;).attach

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:679](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/renderlayer.ts#L679)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).dispose

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).disposed

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

___

### draw

▸ **draw**(`renderContext`, `attachment`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderContext` | [`PerspectiveViewRenderContext`](../interfaces/perspective_view_render_layer.PerspectiveViewRenderContext.md) \| [`SliceViewPanelRenderContext`](../interfaces/sliceview_renderlayer.SliceViewPanelRenderContext.md) |
| `attachment` | [`VisibleLayerInfo`](annotation_renderlayer._internal_.VisibleLayerInfo.md)<[`PerspectivePanel`](perspective_view_panel.PerspectivePanel.md), [`SpatiallyIndexedValidAttachmentState`](../interfaces/annotation_renderlayer._internal_.SpatiallyIndexedValidAttachmentState.md)\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:724](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/renderlayer.ts#L724)

___

### drawGeometry

▸ **drawGeometry**(`chunk`, `renderContext`, `state`, `drawFraction?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `chunk` | [`AnnotationGeometryDataInterface`](../interfaces/annotation_renderlayer._internal_.AnnotationGeometryDataInterface.md) | `undefined` |
| `renderContext` | [`PerspectiveViewRenderContext`](../interfaces/perspective_view_render_layer.PerspectiveViewRenderContext.md) \| [`SliceViewPanelRenderContext`](../interfaces/sliceview_renderlayer.SliceViewPanelRenderContext.md) | `undefined` |
| `state` | [`AnnotationChunkRenderParameters`](../interfaces/annotation_renderlayer._internal_.AnnotationChunkRenderParameters.md) | `undefined` |
| `drawFraction` | `number` | `1` |

#### Returns

`void`

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).drawGeometry

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:429](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/renderlayer.ts#L429)

___

### drawGeometryChunkData

▸ **drawGeometryChunkData**(`chunk`, `renderContext`, `state`, `drawFraction?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `chunk` | [`AnnotationGeometryData`](annotation_frontend_source.AnnotationGeometryData.md) | `undefined` |
| `renderContext` | [`PerspectiveViewRenderContext`](../interfaces/perspective_view_render_layer.PerspectiveViewRenderContext.md) \| [`SliceViewPanelRenderContext`](../interfaces/sliceview_renderlayer.SliceViewPanelRenderContext.md) | `undefined` |
| `state` | [`AnnotationChunkRenderParameters`](../interfaces/annotation_renderlayer._internal_.AnnotationChunkRenderParameters.md) | `undefined` |
| `drawFraction` | `number` | `1` |

#### Returns

`void`

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).drawGeometryChunkData

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:411](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/renderlayer.ts#L411)

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

(Base as AnyConstructor<AnnotationRenderLayer\>).handleAction

#### Defined in

[src/neuroglancer/renderlayer.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L54)

___

### handleRankChanged

▸ **handleRankChanged**(): `void`

#### Returns

`void`

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).handleRankChanged

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:322](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/renderlayer.ts#L322)

___

### isReady

▸ **isReady**(): `boolean`

#### Returns

`boolean`

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).isReady

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:561](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/renderlayer.ts#L561)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).refCountReachedZero

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

(Base as AnyConstructor<AnnotationRenderLayer\>).registerCancellable

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

(Base as AnyConstructor<AnnotationRenderLayer\>).registerDisposer

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

(Base as AnyConstructor<AnnotationRenderLayer\>).registerEventListener

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

___

### transformPickedValue

▸ **transformPickedValue**(`pickState`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pickState` | [`PickState`](../interfaces/annotation_annotation_layer_state._internal_.PickState.md) |

#### Returns

`undefined` \| `string`

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).transformPickedValue

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:544](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/renderlayer.ts#L544)

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

(Base as AnyConstructor<AnnotationRenderLayer\>).transformPickedValue

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

(Base as AnyConstructor<AnnotationRenderLayer\>).unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)

___

### updateAttachmentState

▸ **updateAttachmentState**(`attachment`): `undefined` \| [`AnnotationChunkRenderParameters`](../interfaces/annotation_renderlayer._internal_.AnnotationChunkRenderParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attachment` | [`VisibleLayerInfo`](annotation_renderlayer._internal_.VisibleLayerInfo.md)<[`LayerView`](../interfaces/annotation_renderlayer._internal_.LayerView.md), [`AttachmentState`](../interfaces/annotation_renderlayer._internal_.AttachmentState.md)\> |

#### Returns

`undefined` \| [`AnnotationChunkRenderParameters`](../interfaces/annotation_renderlayer._internal_.AnnotationChunkRenderParameters.md)

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).updateAttachmentState

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:375](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/renderlayer.ts#L375)

___

### updateModelClipBounds

▸ **updateModelClipBounds**(`renderContext`, `state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderContext` | [`ThreeDimensionalRenderContext`](../interfaces/annotation_renderlayer._internal_.ThreeDimensionalRenderContext.md) |
| `state` | [`AnnotationChunkRenderParameters`](../interfaces/annotation_renderlayer._internal_.AnnotationChunkRenderParameters.md) |

#### Returns

`void`

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).updateModelClipBounds

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:396](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/renderlayer.ts#L396)

___

### updateMouseState

▸ **updateMouseState**(`mouseState`, `_pickedValue`, `pickedOffset`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mouseState` | [`MouseSelectionState`](annotation_annotation_layer_state._internal_.MouseSelectionState.md) |
| `_pickedValue` | [`Uint64`](util_uint64.Uint64.md) |
| `pickedOffset` | `number` |
| `data` | `any` |

#### Returns

`void`

#### Inherited from

(Base as AnyConstructor<AnnotationRenderLayer\>).updateMouseState

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:484](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/renderlayer.ts#L484)
