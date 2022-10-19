[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/annotation/renderlayer](../modules/neuroglancer_annotation_renderlayer.md) / AnnotationLayer

# Class: AnnotationLayer

[neuroglancer/annotation/renderlayer](../modules/neuroglancer_annotation_renderlayer.md).AnnotationLayer

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`AnnotationLayer`**

## Table of contents

### Constructors

- [constructor](neuroglancer_annotation_renderlayer.AnnotationLayer.md#constructor)

### Properties

- [buffer](neuroglancer_annotation_renderlayer.AnnotationLayer.md#buffer)
- [chunkManager](neuroglancer_annotation_renderlayer.AnnotationLayer.md#chunkmanager)
- [disposedStacks](neuroglancer_annotation_renderlayer.AnnotationLayer.md#disposedstacks)
- [generation](neuroglancer_annotation_renderlayer.AnnotationLayer.md#generation)
- [handleChangeAffectingBuffer](neuroglancer_annotation_renderlayer.AnnotationLayer.md#handlechangeaffectingbuffer)
- [layerChunkProgressInfo](neuroglancer_annotation_renderlayer.AnnotationLayer.md#layerchunkprogressinfo)
- [numPickIds](neuroglancer_annotation_renderlayer.AnnotationLayer.md#numpickids)
- [redrawNeeded](neuroglancer_annotation_renderlayer.AnnotationLayer.md#redrawneeded)
- [refCount](neuroglancer_annotation_renderlayer.AnnotationLayer.md#refcount)
- [segmentationStates](neuroglancer_annotation_renderlayer.AnnotationLayer.md#segmentationstates)
- [serializedAnnotations](neuroglancer_annotation_renderlayer.AnnotationLayer.md#serializedannotations)
- [sharedObject](neuroglancer_annotation_renderlayer.AnnotationLayer.md#sharedobject)
- [state](neuroglancer_annotation_renderlayer.AnnotationLayer.md#state)
- [wasDisposed](neuroglancer_annotation_renderlayer.AnnotationLayer.md#wasdisposed)

### Accessors

- [gl](neuroglancer_annotation_renderlayer.AnnotationLayer.md#gl)
- [hoverState](neuroglancer_annotation_renderlayer.AnnotationLayer.md#hoverstate)
- [source](neuroglancer_annotation_renderlayer.AnnotationLayer.md#source)
- [transform](neuroglancer_annotation_renderlayer.AnnotationLayer.md#transform)
- [visibility](neuroglancer_annotation_renderlayer.AnnotationLayer.md#visibility)

### Methods

- [addRef](neuroglancer_annotation_renderlayer.AnnotationLayer.md#addref)
- [dispose](neuroglancer_annotation_renderlayer.AnnotationLayer.md#dispose)
- [disposed](neuroglancer_annotation_renderlayer.AnnotationLayer.md#disposed)
- [refCountReachedZero](neuroglancer_annotation_renderlayer.AnnotationLayer.md#refcountreachedzero)
- [registerCancellable](neuroglancer_annotation_renderlayer.AnnotationLayer.md#registercancellable)
- [registerDisposer](neuroglancer_annotation_renderlayer.AnnotationLayer.md#registerdisposer)
- [registerEventListener](neuroglancer_annotation_renderlayer.AnnotationLayer.md#registereventlistener)
- [unregisterDisposer](neuroglancer_annotation_renderlayer.AnnotationLayer.md#unregisterdisposer)
- [updateBuffer](neuroglancer_annotation_renderlayer.AnnotationLayer.md#updatebuffer)

## Constructors

### constructor

• **new AnnotationLayer**(`chunkManager`, `state`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md) |
| `state` | [`AnnotationLayerState`](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:194](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/renderlayer.ts#L194)

## Properties

### buffer

• **buffer**: `undefined` \| [`Buffer`](neuroglancer_webgl_buffer.Buffer.md)

Stores a serialized representation of the information needed to render the annotations.

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:138](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/renderlayer.ts#L138)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### generation

• `Private` **generation**: `number` = `-1`

The value of this.state.annotationSet.changed.count when `buffer` was last updated.

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:145](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/renderlayer.ts#L145)

___

### handleChangeAffectingBuffer

• `Private` **handleChangeAffectingBuffer**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:160](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/renderlayer.ts#L160)

___

### layerChunkProgressInfo

• **layerChunkProgressInfo**: [`LayerChunkProgressInfo`](neuroglancer_chunk_manager_base.LayerChunkProgressInfo.md)

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:133](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/renderlayer.ts#L133)

___

### numPickIds

• **numPickIds**: `number` = `0`

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:140](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/renderlayer.ts#L140)

___

### redrawNeeded

• **redrawNeeded**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:147](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/renderlayer.ts#L147)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### segmentationStates

• **segmentationStates**: [`CachedWatchableValue`](neuroglancer_trackable_value.CachedWatchableValue.md)<`undefined` \| [`OptionalSegmentationDisplayState`](../modules/neuroglancer_annotation_annotation_layer_state.md#optionalsegmentationdisplaystate)[]\>

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/renderlayer.ts#L175)

___

### serializedAnnotations

• **serializedAnnotations**: `undefined` \| [`SerializedAnnotations`](../interfaces/neuroglancer_annotation.SerializedAnnotations.md) = `undefined`

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:148](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/renderlayer.ts#L148)

___

### sharedObject

• **sharedObject**: `undefined` \| [`AnnotationLayerSharedObject`](neuroglancer_annotation_renderlayer._internal_.AnnotationLayerSharedObject.md)

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:165](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/renderlayer.ts#L165)

___

### state

• **state**: [`AnnotationLayerState`](neuroglancer_annotation_annotation_layer_state.AnnotationLayerState.md)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[wasDisposed](neuroglancer_util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### gl

• `get` **gl**(): [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Returns

[`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:223](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/renderlayer.ts#L223)

___

### hoverState

• `get` **hoverState**(): [`AnnotationHoverState`](neuroglancer_annotation_annotation_layer_state.AnnotationHoverState.md)

#### Returns

[`AnnotationHoverState`](neuroglancer_annotation_annotation_layer_state.AnnotationHoverState.md)

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:156](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/renderlayer.ts#L156)

___

### source

• `get` **source**(): [`AnnotationSource`](neuroglancer_annotation.AnnotationSource.md) \| [`MultiscaleAnnotationSource`](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md)

#### Returns

[`AnnotationSource`](neuroglancer_annotation.AnnotationSource.md) \| [`MultiscaleAnnotationSource`](neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md)

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:150](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/renderlayer.ts#L150)

___

### transform

• `get` **transform**(): [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`RenderLayerTransformOrError`](../modules/neuroglancer_render_coordinate_transform.md#renderlayertransformorerror)\>

#### Returns

[`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`RenderLayerTransformOrError`](../modules/neuroglancer_render_coordinate_transform.md#renderlayertransformorerror)\>

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:153](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/renderlayer.ts#L153)

___

### visibility

• `get` **visibility**(): `undefined` \| [`VisibilityPriorityAggregator`](neuroglancer_visibility_priority_frontend.VisibilityPriorityAggregator.md)

#### Returns

`undefined` \| [`VisibilityPriorityAggregator`](neuroglancer_visibility_priority_frontend.VisibilityPriorityAggregator.md)

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:167](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/renderlayer.ts#L167)

## Methods

### addRef

▸ **addRef**(): [`AnnotationLayer`](neuroglancer_annotation_renderlayer.AnnotationLayer.md)

#### Returns

[`AnnotationLayer`](neuroglancer_annotation_renderlayer.AnnotationLayer.md)

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[addRef](neuroglancer_util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[dispose](neuroglancer_util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposed](neuroglancer_util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L75)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCountReachedZero](neuroglancer_util_disposable.RefCounted.md#refcountreachedzero)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerCancellable](neuroglancer_util_disposable.RefCounted.md#registercancellable)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerDisposer](neuroglancer_util_disposable.RefCounted.md#registerdisposer)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[registerEventListener](neuroglancer_util_disposable.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L95)

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

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[unregisterDisposer](neuroglancer_util_disposable.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L85)

___

### updateBuffer

▸ **updateBuffer**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:227](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/renderlayer.ts#L227)
