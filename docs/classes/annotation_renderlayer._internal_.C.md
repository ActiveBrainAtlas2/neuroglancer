[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/renderlayer](../modules/annotation_renderlayer.md) / [<internal\>](../modules/annotation_renderlayer._internal_.md) / C

# Class: C<TBase\>

[annotation/renderlayer](../modules/annotation_renderlayer.md).[<internal>](../modules/annotation_renderlayer._internal_.md).C

## Type parameters

| Name | Type |
| :------ | :------ |
| `TBase` | extends [`AnyConstructor`](../modules/util_mixin.md#anyconstructor)<[`VisibilityTrackedRenderLayer`](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md)\> |

## Hierarchy

- [`VisibilityTrackedRenderLayer`](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md)<[`LayerView`](../interfaces/annotation_renderlayer._internal_.LayerView.md), `unknown`, `this`\>

  ↳ **`C`**

## Table of contents

### Constructors

- [constructor](annotation_renderlayer._internal_.C.md#constructor)

### Properties

- [backend](annotation_renderlayer._internal_.C.md#backend)
- [base](annotation_renderlayer._internal_.C.md#base)
- [curRank](annotation_renderlayer._internal_.C.md#currank)
- [disposedStacks](annotation_renderlayer._internal_.C.md#disposedstacks)
- [isAnnotation](annotation_renderlayer._internal_.C.md#isannotation)
- [layerChanged](annotation_renderlayer._internal_.C.md#layerchanged)
- [layerChunkProgressInfo](annotation_renderlayer._internal_.C.md#layerchunkprogressinfo)
- [messages](annotation_renderlayer._internal_.C.md#messages)
- [redrawNeeded](annotation_renderlayer._internal_.C.md#redrawneeded)
- [refCount](annotation_renderlayer._internal_.C.md#refcount)
- [renderHelpers](annotation_renderlayer._internal_.C.md#renderhelpers)
- [renderScaleHistogram](annotation_renderlayer._internal_.C.md#renderscalehistogram)
- [role](annotation_renderlayer._internal_.C.md#role)
- [tempChunkPosition](annotation_renderlayer._internal_.C.md#tempchunkposition)
- [userLayer](annotation_renderlayer._internal_.C.md#userlayer)
- [visibility](annotation_renderlayer._internal_.C.md#visibility)
- [wasDisposed](annotation_renderlayer._internal_.C.md#wasdisposed)

### Accessors

- [chunkTransform](annotation_renderlayer._internal_.C.md#chunktransform)
- [gl](annotation_renderlayer._internal_.C.md#gl)

### Methods

- [addRef](annotation_renderlayer._internal_.C.md#addref)
- [attach](annotation_renderlayer._internal_.C.md#attach)
- [dispose](annotation_renderlayer._internal_.C.md#dispose)
- [disposed](annotation_renderlayer._internal_.C.md#disposed)
- [drawGeometry](annotation_renderlayer._internal_.C.md#drawgeometry)
- [drawGeometryChunkData](annotation_renderlayer._internal_.C.md#drawgeometrychunkdata)
- [getValueAt](annotation_renderlayer._internal_.C.md#getvalueat)
- [handleAction](annotation_renderlayer._internal_.C.md#handleaction)
- [handleRankChanged](annotation_renderlayer._internal_.C.md#handlerankchanged)
- [isReady](annotation_renderlayer._internal_.C.md#isready)
- [refCountReachedZero](annotation_renderlayer._internal_.C.md#refcountreachedzero)
- [registerCancellable](annotation_renderlayer._internal_.C.md#registercancellable)
- [registerDisposer](annotation_renderlayer._internal_.C.md#registerdisposer)
- [registerEventListener](annotation_renderlayer._internal_.C.md#registereventlistener)
- [transformPickedValue](annotation_renderlayer._internal_.C.md#transformpickedvalue)
- [unregisterDisposer](annotation_renderlayer._internal_.C.md#unregisterdisposer)
- [updateAttachmentState](annotation_renderlayer._internal_.C.md#updateattachmentstate)
- [updateModelClipBounds](annotation_renderlayer._internal_.C.md#updatemodelclipbounds)
- [updateMouseState](annotation_renderlayer._internal_.C.md#updatemousestate)

## Constructors

### constructor

• **new C**(`base`, `renderScaleHistogram`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `base` | [`AnnotationLayer`](annotation_renderlayer.AnnotationLayer.md) |
| `renderScaleHistogram` | [`RenderScaleHistogram`](annotation_renderlayer._internal_.RenderScaleHistogram.md) |

#### Overrides

[VisibilityTrackedRenderLayer](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md).[constructor](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#constructor)

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:344](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/renderlayer.ts#L344)

## Properties

### backend

• **backend**: `undefined` \| [`SharedObject`](annotation_annotation_layer_state._internal_.SharedObject.md)

#### Inherited from

[VisibilityTrackedRenderLayer](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md).[backend](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#backend)

#### Defined in

[src/neuroglancer/renderlayer.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L84)

___

### base

• **base**: [`AnnotationLayer`](annotation_renderlayer.AnnotationLayer.md)

___

### curRank

• **curRank**: `number` = `-1`

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:318](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/renderlayer.ts#L318)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[VisibilityTrackedRenderLayer](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md).[disposedStacks](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### isAnnotation

• **isAnnotation**: `boolean` = `true`

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:586](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/renderlayer.ts#L586)

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

### renderHelpers

• `Private` **renderHelpers**: [`AnnotationRenderHelper`](annotation_type_handler.AnnotationRenderHelper.md)[] = `[]`

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:319](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/renderlayer.ts#L319)

___

### renderScaleHistogram

• **renderScaleHistogram**: [`RenderScaleHistogram`](annotation_renderlayer._internal_.RenderScaleHistogram.md)

___

### role

• **role**: [`RenderLayerRole`](../enums/annotation_annotation_layer_state._internal_.RenderLayerRole.md) = `RenderLayerRole.DATA`

#### Inherited from

[VisibilityTrackedRenderLayer](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md).[role](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#role)

#### Defined in

[src/neuroglancer/renderlayer.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/renderlayer.ts#L48)

___

### tempChunkPosition

• `Private` **tempChunkPosition**: `Float32Array`

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:320](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/renderlayer.ts#L320)

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

### chunkTransform

• `get` **chunkTransform**(): [`ValueOrError`](../modules/util_error.md#valueorerror)<[`ChunkTransformParameters`](../interfaces/annotation_annotation_layer_state._internal_.ChunkTransformParameters.md)\>

#### Returns

[`ValueOrError`](../modules/util_error.md#valueorerror)<[`ChunkTransformParameters`](../interfaces/annotation_annotation_layer_state._internal_.ChunkTransformParameters.md)\>

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:392](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/renderlayer.ts#L392)

___

### gl

• `get` **gl**(): [`GL`](../interfaces/webgl_context.GL.md)

#### Returns

[`GL`](../interfaces/webgl_context.GL.md)

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:407](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/renderlayer.ts#L407)

## Methods

### addRef

▸ **addRef**(): [`C`](annotation_renderlayer._internal_.C.md)<`TBase`\>

#### Returns

[`C`](annotation_renderlayer._internal_.C.md)<`TBase`\>

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
| `attachment` | [`VisibleLayerInfo`](annotation_renderlayer._internal_.VisibleLayerInfo.md)<[`LayerView`](../interfaces/annotation_renderlayer._internal_.LayerView.md), [`AttachmentState`](../interfaces/annotation_renderlayer._internal_.AttachmentState.md)\> |

#### Returns

`void`

#### Overrides

[VisibilityTrackedRenderLayer](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md).[attach](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#attach)

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:362](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/renderlayer.ts#L362)

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

### handleRankChanged

▸ **handleRankChanged**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:322](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/renderlayer.ts#L322)

___

### isReady

▸ **isReady**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:561](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/renderlayer.ts#L561)

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

[VisibilityTrackedRenderLayer](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md).[transformPickedValue](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#transformpickedvalue)

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:544](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/renderlayer.ts#L544)

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

### updateAttachmentState

▸ **updateAttachmentState**(`attachment`): `undefined` \| [`AnnotationChunkRenderParameters`](../interfaces/annotation_renderlayer._internal_.AnnotationChunkRenderParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attachment` | [`VisibleLayerInfo`](annotation_renderlayer._internal_.VisibleLayerInfo.md)<[`LayerView`](../interfaces/annotation_renderlayer._internal_.LayerView.md), [`AttachmentState`](../interfaces/annotation_renderlayer._internal_.AttachmentState.md)\> |

#### Returns

`undefined` \| [`AnnotationChunkRenderParameters`](../interfaces/annotation_renderlayer._internal_.AnnotationChunkRenderParameters.md)

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

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:396](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/renderlayer.ts#L396)

___

### updateMouseState

▸ **updateMouseState**(`mouseState`, `_pickedValue`, `pickedOffset`, `data`): `void`

Optionally updates the mouse state based on the retrived pick information.  This might snap the
3-d position to the center of the picked point.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mouseState` | [`MouseSelectionState`](annotation_annotation_layer_state._internal_.MouseSelectionState.md) |
| `_pickedValue` | [`Uint64`](util_uint64.Uint64.md) |
| `pickedOffset` | `number` |
| `data` | `any` |

#### Returns

`void`

#### Overrides

[VisibilityTrackedRenderLayer](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md).[updateMouseState](annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md#updatemousestate)

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:484](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/renderlayer.ts#L484)
