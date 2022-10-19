[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/skeleton/frontend](../modules/neuroglancer_skeleton_frontend.md) / SkeletonLayer

# Class: SkeletonLayer

[neuroglancer/skeleton/frontend](../modules/neuroglancer_skeleton_frontend.md).SkeletonLayer

## Hierarchy

- [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)

  ↳ **`SkeletonLayer`**

## Table of contents

### Constructors

- [constructor](neuroglancer_skeleton_frontend.SkeletonLayer.md#constructor)

### Properties

- [chunkManager](neuroglancer_skeleton_frontend.SkeletonLayer.md#chunkmanager)
- [displayState](neuroglancer_skeleton_frontend.SkeletonLayer.md#displaystate)
- [disposedStacks](neuroglancer_skeleton_frontend.SkeletonLayer.md#disposedstacks)
- [fallbackShaderParameters](neuroglancer_skeleton_frontend.SkeletonLayer.md#fallbackshaderparameters)
- [layerChunkProgressInfo](neuroglancer_skeleton_frontend.SkeletonLayer.md#layerchunkprogressinfo)
- [redrawNeeded](neuroglancer_skeleton_frontend.SkeletonLayer.md#redrawneeded)
- [refCount](neuroglancer_skeleton_frontend.SkeletonLayer.md#refcount)
- [sharedObject](neuroglancer_skeleton_frontend.SkeletonLayer.md#sharedobject)
- [source](neuroglancer_skeleton_frontend.SkeletonLayer.md#source)
- [vertexAttributes](neuroglancer_skeleton_frontend.SkeletonLayer.md#vertexattributes)
- [wasDisposed](neuroglancer_skeleton_frontend.SkeletonLayer.md#wasdisposed)

### Accessors

- [gl](neuroglancer_skeleton_frontend.SkeletonLayer.md#gl)
- [visibility](neuroglancer_skeleton_frontend.SkeletonLayer.md#visibility)

### Methods

- [addRef](neuroglancer_skeleton_frontend.SkeletonLayer.md#addref)
- [dispose](neuroglancer_skeleton_frontend.SkeletonLayer.md#dispose)
- [disposed](neuroglancer_skeleton_frontend.SkeletonLayer.md#disposed)
- [draw](neuroglancer_skeleton_frontend.SkeletonLayer.md#draw)
- [isReady](neuroglancer_skeleton_frontend.SkeletonLayer.md#isready)
- [refCountReachedZero](neuroglancer_skeleton_frontend.SkeletonLayer.md#refcountreachedzero)
- [registerCancellable](neuroglancer_skeleton_frontend.SkeletonLayer.md#registercancellable)
- [registerDisposer](neuroglancer_skeleton_frontend.SkeletonLayer.md#registerdisposer)
- [registerEventListener](neuroglancer_skeleton_frontend.SkeletonLayer.md#registereventlistener)
- [unregisterDisposer](neuroglancer_skeleton_frontend.SkeletonLayer.md#unregisterdisposer)

## Constructors

### constructor

• **new SkeletonLayer**(`chunkManager`, `source`, `displayState`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md) |
| `source` | [`SkeletonSource`](neuroglancer_skeleton_frontend.SkeletonSource.md) |
| `displayState` | [`SkeletonLayerDisplayState`](../interfaces/neuroglancer_skeleton_frontend.SkeletonLayerDisplayState.md) |

#### Overrides

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[constructor](neuroglancer_util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:363](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L363)

## Properties

### chunkManager

• **chunkManager**: [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md)

___

### displayState

• **displayState**: [`SkeletonLayerDisplayState`](../interfaces/neuroglancer_skeleton_frontend.SkeletonLayerDisplayState.md)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[disposedStacks](neuroglancer_util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L52)

___

### fallbackShaderParameters

• **fallbackShaderParameters**: [`WatchableValue`](neuroglancer_trackable_value.WatchableValue.md)<[`ShaderControlsBuilderState`](../interfaces/neuroglancer_webgl_shader_ui_controls.ShaderControlsBuilderState.md)\>

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:356](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L356)

___

### layerChunkProgressInfo

• **layerChunkProgressInfo**: [`LayerChunkProgressInfo`](neuroglancer_chunk_manager_base.LayerChunkProgressInfo.md)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:352](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L352)

___

### redrawNeeded

• **redrawNeeded**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:353](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L353)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](neuroglancer_util_disposable.RefCounted.md).[refCount](neuroglancer_util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/disposable.ts#L45)

___

### sharedObject

• `Private` **sharedObject**: [`SegmentationLayerSharedObject`](neuroglancer_segmentation_display_state_frontend.SegmentationLayerSharedObject.md)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:354](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L354)

___

### source

• **source**: [`SkeletonSource`](neuroglancer_skeleton_frontend.SkeletonSource.md)

___

### vertexAttributes

• **vertexAttributes**: [`VertexAttributeRenderInfo`](../interfaces/neuroglancer_skeleton_frontend._internal_.VertexAttributeRenderInfo.md)[]

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:355](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L355)

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

[src/neuroglancer/skeleton/frontend.ts:395](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L395)

___

### visibility

• `get` **visibility**(): [`VisibilityPriorityAggregator`](neuroglancer_visibility_priority_frontend.VisibilityPriorityAggregator.md)

#### Returns

[`VisibilityPriorityAggregator`](neuroglancer_visibility_priority_frontend.VisibilityPriorityAggregator.md)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:359](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L359)

## Methods

### addRef

▸ **addRef**(): [`SkeletonLayer`](neuroglancer_skeleton_frontend.SkeletonLayer.md)

#### Returns

[`SkeletonLayer`](neuroglancer_skeleton_frontend.SkeletonLayer.md)

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

### draw

▸ **draw**(`renderContext`, `layer`, `renderHelper`, `renderOptions`, `attachment`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderContext` | [`PerspectiveViewRenderContext`](../interfaces/neuroglancer_perspective_view_render_layer.PerspectiveViewRenderContext.md) \| [`SliceViewPanelRenderContext`](../interfaces/neuroglancer_sliceview_renderlayer.SliceViewPanelRenderContext.md) |
| `layer` | [`RenderLayer`](neuroglancer_renderlayer.RenderLayer.md) |
| `renderHelper` | [`RenderHelper`](neuroglancer_skeleton_frontend._internal_.RenderHelper.md) |
| `renderOptions` | [`ViewSpecificSkeletonRenderingOptions`](../interfaces/neuroglancer_skeleton_frontend.ViewSpecificSkeletonRenderingOptions.md) |
| `attachment` | [`VisibleLayerInfo`](neuroglancer_layer.VisibleLayerInfo.md)<[`LayerView`](../interfaces/neuroglancer_layer.LayerView.md), [`ThreeDimensionalRenderLayerAttachmentState`](../interfaces/neuroglancer_renderlayer.ThreeDimensionalRenderLayerAttachmentState.md)\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:399](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L399)

___

### isReady

▸ **isReady**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:472](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L472)

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
