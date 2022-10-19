[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/annotation/renderlayer](../modules/neuroglancer_annotation_renderlayer.md) / PerspectiveViewAnnotationLayer

# Class: PerspectiveViewAnnotationLayer

[neuroglancer/annotation/renderlayer](../modules/neuroglancer_annotation_renderlayer.md).PerspectiveViewAnnotationLayer

## Hierarchy

- `C`<(...`a`: [base: AnnotationLayer, renderScaleHistogram: RenderScaleHistogram]) => [`C`](neuroglancer_annotation_renderlayer._internal_.C.md)<typeof [`PerspectiveViewRenderLayer`](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md)\> & [`PerspectiveViewRenderLayer`](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md)<`unknown`\> & [`Pick`](../modules/neuroglancer_annotation_renderlayer._internal_.md#pick)<typeof [`C`](neuroglancer_annotation_renderlayer._internal_.C.md), ``"prototype"``\> & [`Pick`](../modules/neuroglancer_annotation_renderlayer._internal_.md#pick)<typeof [`PerspectiveViewRenderLayer`](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md), ``"prototype"``\>, `this`\> & [`C`](neuroglancer_annotation_renderlayer._internal_.C.md)<typeof [`PerspectiveViewRenderLayer`](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md), `this`\> & [`PerspectiveViewRenderLayer`](neuroglancer_perspective_view_render_layer.PerspectiveViewRenderLayer.md)<`unknown`, `this`\>

  ↳ **`PerspectiveViewAnnotationLayer`**

## Table of contents

### Constructors

- [constructor](neuroglancer_annotation_renderlayer.PerspectiveViewAnnotationLayer.md#constructor)

### Properties

- [backend](neuroglancer_annotation_renderlayer.PerspectiveViewAnnotationLayer.md#backend)
- [base](neuroglancer_annotation_renderlayer.PerspectiveViewAnnotationLayer.md#base)
- [curRank](neuroglancer_annotation_renderlayer.PerspectiveViewAnnotationLayer.md#currank)
- [disposedStacks](neuroglancer_annotation_renderlayer.PerspectiveViewAnnotationLayer.md#disposedstacks)
- [isAnnotation](neuroglancer_annotation_renderlayer.PerspectiveViewAnnotationLayer.md#isannotation)
- [isTransparent](neuroglancer_annotation_renderlayer.PerspectiveViewAnnotationLayer.md#istransparent)
- [layerChanged](neuroglancer_annotation_renderlayer.PerspectiveViewAnnotationLayer.md#layerchanged)
- [layerChunkProgressInfo](neuroglancer_annotation_renderlayer.PerspectiveViewAnnotationLayer.md#layerchunkprogressinfo)
- [messages](neuroglancer_annotation_renderlayer.PerspectiveViewAnnotationLayer.md#messages)
- [redrawNeeded](neuroglancer_annotation_renderlayer.PerspectiveViewAnnotationLayer.md#redrawneeded)
- [refCount](neuroglancer_annotation_renderlayer.PerspectiveViewAnnotationLayer.md#refcount)
- [renderScaleHistogram](neuroglancer_annotation_renderlayer.PerspectiveViewAnnotationLayer.md#renderscalehistogram)
- [role](neuroglancer_annotation_renderlayer.PerspectiveViewAnnotationLayer.md#role)
- [userLayer](neuroglancer_annotation_renderlayer.PerspectiveViewAnnotationLayer.md#userlayer)
- [visibility](neuroglancer_annotation_renderlayer.PerspectiveViewAnnotationLayer.md#visibility)
- [wasDisposed](neuroglancer_annotation_renderlayer.PerspectiveViewAnnotationLayer.md#wasdisposed)

### Accessors

- [chunkTransform](neuroglancer_annotation_renderlayer.PerspectiveViewAnnotationLayer.md#chunktransform)
- [gl](neuroglancer_annotation_renderlayer.PerspectiveViewAnnotationLayer.md#gl)
- [transparentPickEnabled](neuroglancer_annotation_renderlayer.PerspectiveViewAnnotationLayer.md#transparentpickenabled)

### Methods

- [addRef](neuroglancer_annotation_renderlayer.PerspectiveViewAnnotationLayer.md#addref)
- [attach](neuroglancer_annotation_renderlayer.PerspectiveViewAnnotationLayer.md#attach)
- [dispose](neuroglancer_annotation_renderlayer.PerspectiveViewAnnotationLayer.md#dispose)
- [disposed](neuroglancer_annotation_renderlayer.PerspectiveViewAnnotationLayer.md#disposed)
- [draw](neuroglancer_annotation_renderlayer.PerspectiveViewAnnotationLayer.md#draw)
- [drawGeometry](neuroglancer_annotation_renderlayer.PerspectiveViewAnnotationLayer.md#drawgeometry)
- [drawGeometryChunkData](neuroglancer_annotation_renderlayer.PerspectiveViewAnnotationLayer.md#drawgeometrychunkdata)
- [getValueAt](neuroglancer_annotation_renderlayer.PerspectiveViewAnnotationLayer.md#getvalueat)
- [handleAction](neuroglancer_annotation_renderlayer.PerspectiveViewAnnotationLayer.md#handleaction)
- [handleRankChanged](neuroglancer_annotation_renderlayer.PerspectiveViewAnnotationLayer.md#handlerankchanged)
- [isReady](neuroglancer_annotation_renderlayer.PerspectiveViewAnnotationLayer.md#isready)
- [refCountReachedZero](neuroglancer_annotation_renderlayer.PerspectiveViewAnnotationLayer.md#refcountreachedzero)
- [registerCancellable](neuroglancer_annotation_renderlayer.PerspectiveViewAnnotationLayer.md#registercancellable)
- [registerDisposer](neuroglancer_annotation_renderlayer.PerspectiveViewAnnotationLayer.md#registerdisposer)
- [registerEventListener](neuroglancer_annotation_renderlayer.PerspectiveViewAnnotationLayer.md#registereventlistener)
- [transformPickedValue](neuroglancer_annotation_renderlayer.PerspectiveViewAnnotationLayer.md#transformpickedvalue)
- [unregisterDisposer](neuroglancer_annotation_renderlayer.PerspectiveViewAnnotationLayer.md#unregisterdisposer)
- [updateAttachmentState](neuroglancer_annotation_renderlayer.PerspectiveViewAnnotationLayer.md#updateattachmentstate)
- [updateModelClipBounds](neuroglancer_annotation_renderlayer.PerspectiveViewAnnotationLayer.md#updatemodelclipbounds)
- [updateMouseState](neuroglancer_annotation_renderlayer.PerspectiveViewAnnotationLayer.md#updatemousestate)

## Constructors

### constructor

• **new PerspectiveViewAnnotationLayer**(...`a`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...a` | [base: AnnotationLayer, renderScaleHistogram: RenderScaleHistogram] |

#### Inherited from

NonSpatiallyIndexedAnnotationRenderLayer
(PerspectiveViewAnnotationLayerBase).constructor

#### Defined in

[src/neuroglancer/util/mixin.ts:23](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/mixin.ts#L23)

## Properties

### backend

• **backend**: `undefined` \| [`SharedObject`](neuroglancer_worker_rpc.SharedObject.md)

#### Inherited from

NonSpatiallyIndexedAnnotationRenderLayer
(PerspectiveViewAnnotationLayerBase).backend

#### Defined in

[src/neuroglancer/renderlayer.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L84)

___

### base

• **base**: [`AnnotationLayer`](neuroglancer_annotation_renderlayer.AnnotationLayer.md)

#### Inherited from

NonSpatiallyIndexedAnnotationRenderLayer
(PerspectiveViewAnnotationLayerBase).base

___

### curRank

• **curRank**: `number` = `-1`

#### Inherited from

NonSpatiallyIndexedAnnotationRenderLayer
(PerspectiveViewAnnotationLayerBase).curRank

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:318](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/renderlayer.ts#L318)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

NonSpatiallyIndexedAnnotationRenderLayer
(PerspectiveViewAnnotationLayerBase).disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### isAnnotation

• **isAnnotation**: `boolean` = `true`

#### Inherited from

NonSpatiallyIndexedAnnotationRenderLayer
(PerspectiveViewAnnotationLayerBase).isAnnotation

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:586](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/renderlayer.ts#L586)

___

### isTransparent

• **isTransparent**: `undefined` \| `boolean`

#### Inherited from

NonSpatiallyIndexedAnnotationRenderLayer
(PerspectiveViewAnnotationLayerBase).isTransparent

#### Defined in

[src/neuroglancer/perspective_view/render_layer.ts:73](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/render_layer.ts#L73)

___

### layerChanged

• **layerChanged**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Inherited from

NonSpatiallyIndexedAnnotationRenderLayer
(PerspectiveViewAnnotationLayerBase).layerChanged

#### Defined in

[src/neuroglancer/renderlayer.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L50)

___

### layerChunkProgressInfo

• **layerChunkProgressInfo**: [`LayerChunkProgressInfo`](neuroglancer_chunk_manager_base.LayerChunkProgressInfo.md)

#### Inherited from

NonSpatiallyIndexedAnnotationRenderLayer
(PerspectiveViewAnnotationLayerBase).layerChunkProgressInfo

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:596](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/renderlayer.ts#L596)

___

### messages

• **messages**: [`MessageList`](neuroglancer_util_message_list.MessageList.md)

#### Inherited from

NonSpatiallyIndexedAnnotationRenderLayer
(PerspectiveViewAnnotationLayerBase).messages

#### Defined in

[src/neuroglancer/renderlayer.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L49)

___

### redrawNeeded

• **redrawNeeded**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Inherited from

NonSpatiallyIndexedAnnotationRenderLayer
(PerspectiveViewAnnotationLayerBase).redrawNeeded

#### Defined in

[src/neuroglancer/renderlayer.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L51)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

NonSpatiallyIndexedAnnotationRenderLayer
(PerspectiveViewAnnotationLayerBase).refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### renderScaleHistogram

• **renderScaleHistogram**: [`RenderScaleHistogram`](neuroglancer_render_scale_statistics.RenderScaleHistogram.md)

#### Inherited from

NonSpatiallyIndexedAnnotationRenderLayer
(PerspectiveViewAnnotationLayerBase).renderScaleHistogram

___

### role

• **role**: [`RenderLayerRole`](../enums/neuroglancer_renderlayer.RenderLayerRole.md) = `RenderLayerRole.DATA`

#### Inherited from

NonSpatiallyIndexedAnnotationRenderLayer
(PerspectiveViewAnnotationLayerBase).role

#### Defined in

[src/neuroglancer/renderlayer.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L48)

___

### userLayer

• **userLayer**: `undefined` \| [`UserLayer`](neuroglancer_layer.UserLayer.md)

#### Inherited from

NonSpatiallyIndexedAnnotationRenderLayer
(PerspectiveViewAnnotationLayerBase).userLayer

#### Defined in

[src/neuroglancer/renderlayer.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L47)

___

### visibility

• **visibility**: [`VisibilityPriorityAggregator`](neuroglancer_visibility_priority_frontend.VisibilityPriorityAggregator.md)

#### Inherited from

NonSpatiallyIndexedAnnotationRenderLayer
(PerspectiveViewAnnotationLayerBase).visibility

#### Defined in

[src/neuroglancer/renderlayer.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L85)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

NonSpatiallyIndexedAnnotationRenderLayer
(PerspectiveViewAnnotationLayerBase).wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### chunkTransform

• `get` **chunkTransform**(): [`ValueOrError`](../modules/neuroglancer_util_error.md#valueorerror)<[`ChunkTransformParameters`](../interfaces/neuroglancer_render_coordinate_transform.ChunkTransformParameters.md)\>

#### Returns

[`ValueOrError`](../modules/neuroglancer_util_error.md#valueorerror)<[`ChunkTransformParameters`](../interfaces/neuroglancer_render_coordinate_transform.ChunkTransformParameters.md)\>

#### Inherited from

NonSpatiallyIndexedAnnotationRenderLayer
(PerspectiveViewAnnotationLayerBase).chunkTransform

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:392](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/renderlayer.ts#L392)

___

### gl

• `get` **gl**(): [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Returns

[`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Inherited from

NonSpatiallyIndexedAnnotationRenderLayer
(PerspectiveViewAnnotationLayerBase).gl

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:407](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/renderlayer.ts#L407)

___

### transparentPickEnabled

• `get` **transparentPickEnabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

NonSpatiallyIndexedAnnotationRenderLayer
(PerspectiveViewAnnotationLayerBase).transparentPickEnabled

#### Defined in

[src/neuroglancer/perspective_view/render_layer.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/render_layer.ts#L67)

## Methods

### addRef

▸ **addRef**(): [`PerspectiveViewAnnotationLayer`](neuroglancer_annotation_renderlayer.PerspectiveViewAnnotationLayer.md)

#### Returns

[`PerspectiveViewAnnotationLayer`](neuroglancer_annotation_renderlayer.PerspectiveViewAnnotationLayer.md)

#### Inherited from

NonSpatiallyIndexedAnnotationRenderLayer
(PerspectiveViewAnnotationLayerBase).addRef

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### attach

▸ **attach**(`attachment`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attachment` | [`VisibleLayerInfo`](neuroglancer_layer.VisibleLayerInfo.md)<[`LayerView`](../interfaces/neuroglancer_layer.LayerView.md), [`AttachmentState`](../interfaces/neuroglancer_annotation_renderlayer._internal_.AttachmentState.md)\> |

#### Returns

`void`

#### Inherited from

NonSpatiallyIndexedAnnotationRenderLayer
(PerspectiveViewAnnotationLayerBase).attach

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:362](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/renderlayer.ts#L362)

▸ **attach**(`attachment`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attachment` | [`VisibleLayerInfo`](neuroglancer_layer.VisibleLayerInfo.md)<[`LayerView`](../interfaces/neuroglancer_layer.LayerView.md), `unknown`\> |

#### Returns

`void`

#### Inherited from

NonSpatiallyIndexedAnnotationRenderLayer
(PerspectiveViewAnnotationLayerBase).attach

#### Defined in

[src/neuroglancer/renderlayer.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L86)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

NonSpatiallyIndexedAnnotationRenderLayer
(PerspectiveViewAnnotationLayerBase).dispose

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

NonSpatiallyIndexedAnnotationRenderLayer
(PerspectiveViewAnnotationLayerBase).disposed

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L75)

___

### draw

▸ **draw**(`renderContext`, `attachment`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderContext` | [`PerspectiveViewRenderContext`](../interfaces/neuroglancer_perspective_view_render_layer.PerspectiveViewRenderContext.md) \| [`SliceViewPanelRenderContext`](../interfaces/neuroglancer_sliceview_renderlayer.SliceViewPanelRenderContext.md) |
| `attachment` | [`VisibleLayerInfo`](neuroglancer_layer.VisibleLayerInfo.md)<[`LayerView`](../interfaces/neuroglancer_layer.LayerView.md), [`AttachmentState`](../interfaces/neuroglancer_annotation_renderlayer._internal_.AttachmentState.md)\> |

#### Returns

`void`

#### Inherited from

NonSpatiallyIndexedAnnotationRenderLayer
(PerspectiveViewAnnotationLayerBase).draw

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:597](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/renderlayer.ts#L597)

▸ **draw**(`renderContext`, `attachment`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderContext` | [`PerspectiveViewRenderContext`](../interfaces/neuroglancer_perspective_view_render_layer.PerspectiveViewRenderContext.md) |
| `attachment` | [`VisibleLayerInfo`](neuroglancer_layer.VisibleLayerInfo.md)<[`PerspectivePanel`](neuroglancer_perspective_view_panel.PerspectivePanel.md), `unknown`\> |

#### Returns

`void`

#### Inherited from

NonSpatiallyIndexedAnnotationRenderLayer
(PerspectiveViewAnnotationLayerBase).draw

#### Defined in

[src/neuroglancer/perspective_view/render_layer.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/perspective_view/render_layer.ts#L51)

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

NonSpatiallyIndexedAnnotationRenderLayer
(PerspectiveViewAnnotationLayerBase).drawGeometry

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:429](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/renderlayer.ts#L429)

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

NonSpatiallyIndexedAnnotationRenderLayer
(PerspectiveViewAnnotationLayerBase).drawGeometryChunkData

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:411](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/renderlayer.ts#L411)

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

NonSpatiallyIndexedAnnotationRenderLayer
(PerspectiveViewAnnotationLayerBase).getValueAt

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

NonSpatiallyIndexedAnnotationRenderLayer
(PerspectiveViewAnnotationLayerBase).handleAction

#### Defined in

[src/neuroglancer/renderlayer.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L54)

___

### handleRankChanged

▸ **handleRankChanged**(): `void`

#### Returns

`void`

#### Inherited from

NonSpatiallyIndexedAnnotationRenderLayer
(PerspectiveViewAnnotationLayerBase).handleRankChanged

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:322](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/renderlayer.ts#L322)

___

### isReady

▸ **isReady**(): `boolean`

#### Returns

`boolean`

#### Inherited from

NonSpatiallyIndexedAnnotationRenderLayer
(PerspectiveViewAnnotationLayerBase).isReady

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:561](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/renderlayer.ts#L561)

▸ **isReady**(`renderContext`, `attachment`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderContext` | [`PerspectiveViewReadyRenderContext`](../interfaces/neuroglancer_perspective_view_render_layer.PerspectiveViewReadyRenderContext.md) |
| `attachment` | [`VisibleLayerInfo`](neuroglancer_layer.VisibleLayerInfo.md)<[`PerspectivePanel`](neuroglancer_perspective_view_panel.PerspectivePanel.md), `unknown`\> |

#### Returns

`boolean`

#### Inherited from

NonSpatiallyIndexedAnnotationRenderLayer
(PerspectiveViewAnnotationLayerBase).isReady

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:561](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/renderlayer.ts#L561)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

NonSpatiallyIndexedAnnotationRenderLayer
(PerspectiveViewAnnotationLayerBase).refCountReachedZero

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

NonSpatiallyIndexedAnnotationRenderLayer
(PerspectiveViewAnnotationLayerBase).registerCancellable

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

NonSpatiallyIndexedAnnotationRenderLayer
(PerspectiveViewAnnotationLayerBase).registerDisposer

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

NonSpatiallyIndexedAnnotationRenderLayer
(PerspectiveViewAnnotationLayerBase).registerEventListener

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L95)

___

### transformPickedValue

▸ **transformPickedValue**(`pickState`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pickState` | [`PickState`](../interfaces/neuroglancer_layer.PickState.md) |

#### Returns

`undefined` \| `string`

#### Inherited from

NonSpatiallyIndexedAnnotationRenderLayer
(PerspectiveViewAnnotationLayerBase).transformPickedValue

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:544](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/renderlayer.ts#L544)

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

NonSpatiallyIndexedAnnotationRenderLayer
(PerspectiveViewAnnotationLayerBase).transformPickedValue

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

NonSpatiallyIndexedAnnotationRenderLayer
(PerspectiveViewAnnotationLayerBase).unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)

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

NonSpatiallyIndexedAnnotationRenderLayer
(PerspectiveViewAnnotationLayerBase).updateAttachmentState

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:375](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/renderlayer.ts#L375)

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

NonSpatiallyIndexedAnnotationRenderLayer
(PerspectiveViewAnnotationLayerBase).updateModelClipBounds

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:396](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/renderlayer.ts#L396)

___

### updateMouseState

▸ **updateMouseState**(`mouseState`, `_pickedValue`, `pickedOffset`, `data`): `void`

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

NonSpatiallyIndexedAnnotationRenderLayer
(PerspectiveViewAnnotationLayerBase).updateMouseState

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:484](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/renderlayer.ts#L484)
