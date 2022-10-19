[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/annotation/renderlayer](../modules/neuroglancer_annotation_renderlayer.md) / [<internal\>](../modules/neuroglancer_annotation_renderlayer._internal_.md) / C

# Class: C<TBase\>

[neuroglancer/annotation/renderlayer](../modules/neuroglancer_annotation_renderlayer.md).[<internal>](../modules/neuroglancer_annotation_renderlayer._internal_.md).C

## Type parameters

| Name | Type |
| :------ | :------ |
| `TBase` | extends [`AnyConstructor`](../modules/neuroglancer_util_mixin.md#anyconstructor)<[`VisibilityTrackedRenderLayer`](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md)\> |

## Hierarchy

- [`VisibilityTrackedRenderLayer`](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md)<[`LayerView`](../interfaces/neuroglancer_layer.LayerView.md), `unknown`, `this`\>

  ↳ **`C`**

## Table of contents

### Constructors

- [constructor](neuroglancer_annotation_renderlayer._internal_.C.md#constructor)

### Properties

- [backend](neuroglancer_annotation_renderlayer._internal_.C.md#backend)
- [base](neuroglancer_annotation_renderlayer._internal_.C.md#base)
- [curRank](neuroglancer_annotation_renderlayer._internal_.C.md#currank)
- [disposedStacks](neuroglancer_annotation_renderlayer._internal_.C.md#disposedstacks)
- [isAnnotation](neuroglancer_annotation_renderlayer._internal_.C.md#isannotation)
- [layerChanged](neuroglancer_annotation_renderlayer._internal_.C.md#layerchanged)
- [layerChunkProgressInfo](neuroglancer_annotation_renderlayer._internal_.C.md#layerchunkprogressinfo)
- [messages](neuroglancer_annotation_renderlayer._internal_.C.md#messages)
- [redrawNeeded](neuroglancer_annotation_renderlayer._internal_.C.md#redrawneeded)
- [refCount](neuroglancer_annotation_renderlayer._internal_.C.md#refcount)
- [renderHelpers](neuroglancer_annotation_renderlayer._internal_.C.md#renderhelpers)
- [renderScaleHistogram](neuroglancer_annotation_renderlayer._internal_.C.md#renderscalehistogram)
- [role](neuroglancer_annotation_renderlayer._internal_.C.md#role)
- [tempChunkPosition](neuroglancer_annotation_renderlayer._internal_.C.md#tempchunkposition)
- [userLayer](neuroglancer_annotation_renderlayer._internal_.C.md#userlayer)
- [visibility](neuroglancer_annotation_renderlayer._internal_.C.md#visibility)
- [wasDisposed](neuroglancer_annotation_renderlayer._internal_.C.md#wasdisposed)

### Accessors

- [chunkTransform](neuroglancer_annotation_renderlayer._internal_.C.md#chunktransform)
- [gl](neuroglancer_annotation_renderlayer._internal_.C.md#gl)

### Methods

- [addRef](neuroglancer_annotation_renderlayer._internal_.C.md#addref)
- [attach](neuroglancer_annotation_renderlayer._internal_.C.md#attach)
- [dispose](neuroglancer_annotation_renderlayer._internal_.C.md#dispose)
- [disposed](neuroglancer_annotation_renderlayer._internal_.C.md#disposed)
- [drawGeometry](neuroglancer_annotation_renderlayer._internal_.C.md#drawgeometry)
- [drawGeometryChunkData](neuroglancer_annotation_renderlayer._internal_.C.md#drawgeometrychunkdata)
- [getValueAt](neuroglancer_annotation_renderlayer._internal_.C.md#getvalueat)
- [handleAction](neuroglancer_annotation_renderlayer._internal_.C.md#handleaction)
- [handleRankChanged](neuroglancer_annotation_renderlayer._internal_.C.md#handlerankchanged)
- [isReady](neuroglancer_annotation_renderlayer._internal_.C.md#isready)
- [refCountReachedZero](neuroglancer_annotation_renderlayer._internal_.C.md#refcountreachedzero)
- [registerCancellable](neuroglancer_annotation_renderlayer._internal_.C.md#registercancellable)
- [registerDisposer](neuroglancer_annotation_renderlayer._internal_.C.md#registerdisposer)
- [registerEventListener](neuroglancer_annotation_renderlayer._internal_.C.md#registereventlistener)
- [transformPickedValue](neuroglancer_annotation_renderlayer._internal_.C.md#transformpickedvalue)
- [unregisterDisposer](neuroglancer_annotation_renderlayer._internal_.C.md#unregisterdisposer)
- [updateAttachmentState](neuroglancer_annotation_renderlayer._internal_.C.md#updateattachmentstate)
- [updateModelClipBounds](neuroglancer_annotation_renderlayer._internal_.C.md#updatemodelclipbounds)
- [updateMouseState](neuroglancer_annotation_renderlayer._internal_.C.md#updatemousestate)

## Constructors

### constructor

• **new C**(`base`, `renderScaleHistogram`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `base` | [`AnnotationLayer`](neuroglancer_annotation_renderlayer.AnnotationLayer.md) |
| `renderScaleHistogram` | [`RenderScaleHistogram`](neuroglancer_render_scale_statistics.RenderScaleHistogram.md) |

#### Overrides

[VisibilityTrackedRenderLayer](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md).[constructor](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#constructor)

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:344](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/renderlayer.ts#L344)

## Properties

### backend

• **backend**: `undefined` \| [`SharedObject`](neuroglancer_worker_rpc.SharedObject.md)

#### Inherited from

[VisibilityTrackedRenderLayer](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md).[backend](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#backend)

#### Defined in

[src/neuroglancer/renderlayer.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L84)

___

### base

• **base**: [`AnnotationLayer`](neuroglancer_annotation_renderlayer.AnnotationLayer.md)

___

### curRank

• **curRank**: `number` = `-1`

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:318](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/renderlayer.ts#L318)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[VisibilityTrackedRenderLayer](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md).[disposedStacks](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### isAnnotation

• **isAnnotation**: `boolean` = `true`

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:586](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/renderlayer.ts#L586)

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

### renderHelpers

• `Private` **renderHelpers**: [`AnnotationRenderHelper`](neuroglancer_annotation_type_handler.AnnotationRenderHelper.md)[] = `[]`

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:319](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/renderlayer.ts#L319)

___

### renderScaleHistogram

• **renderScaleHistogram**: [`RenderScaleHistogram`](neuroglancer_render_scale_statistics.RenderScaleHistogram.md)

___

### role

• **role**: [`RenderLayerRole`](../enums/neuroglancer_renderlayer.RenderLayerRole.md) = `RenderLayerRole.DATA`

#### Inherited from

[VisibilityTrackedRenderLayer](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md).[role](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#role)

#### Defined in

[src/neuroglancer/renderlayer.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/renderlayer.ts#L48)

___

### tempChunkPosition

• `Private` **tempChunkPosition**: `Float32Array`

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:320](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/renderlayer.ts#L320)

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

### chunkTransform

• `get` **chunkTransform**(): [`ValueOrError`](../modules/neuroglancer_util_error.md#valueorerror)<[`ChunkTransformParameters`](../interfaces/neuroglancer_render_coordinate_transform.ChunkTransformParameters.md)\>

#### Returns

[`ValueOrError`](../modules/neuroglancer_util_error.md#valueorerror)<[`ChunkTransformParameters`](../interfaces/neuroglancer_render_coordinate_transform.ChunkTransformParameters.md)\>

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:392](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/renderlayer.ts#L392)

___

### gl

• `get` **gl**(): [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Returns

[`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:407](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/renderlayer.ts#L407)

## Methods

### addRef

▸ **addRef**(): [`C`](neuroglancer_annotation_renderlayer._internal_.C.md)<`TBase`\>

#### Returns

[`C`](neuroglancer_annotation_renderlayer._internal_.C.md)<`TBase`\>

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
| `attachment` | [`VisibleLayerInfo`](neuroglancer_layer.VisibleLayerInfo.md)<[`LayerView`](../interfaces/neuroglancer_layer.LayerView.md), [`AttachmentState`](../interfaces/neuroglancer_annotation_renderlayer._internal_.AttachmentState.md)\> |

#### Returns

`void`

#### Overrides

[VisibilityTrackedRenderLayer](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md).[attach](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#attach)

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:362](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/renderlayer.ts#L362)

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

### handleRankChanged

▸ **handleRankChanged**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:322](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/renderlayer.ts#L322)

___

### isReady

▸ **isReady**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:561](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/renderlayer.ts#L561)

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

[VisibilityTrackedRenderLayer](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md).[transformPickedValue](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#transformpickedvalue)

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:544](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/renderlayer.ts#L544)

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

### updateAttachmentState

▸ **updateAttachmentState**(`attachment`): `undefined` \| [`AnnotationChunkRenderParameters`](../interfaces/neuroglancer_annotation_renderlayer._internal_.AnnotationChunkRenderParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attachment` | [`VisibleLayerInfo`](neuroglancer_layer.VisibleLayerInfo.md)<[`LayerView`](../interfaces/neuroglancer_layer.LayerView.md), [`AttachmentState`](../interfaces/neuroglancer_annotation_renderlayer._internal_.AttachmentState.md)\> |

#### Returns

`undefined` \| [`AnnotationChunkRenderParameters`](../interfaces/neuroglancer_annotation_renderlayer._internal_.AnnotationChunkRenderParameters.md)

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

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:396](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/renderlayer.ts#L396)

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

#### Overrides

[VisibilityTrackedRenderLayer](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md).[updateMouseState](neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md#updatemousestate)

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:484](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/renderlayer.ts#L484)
