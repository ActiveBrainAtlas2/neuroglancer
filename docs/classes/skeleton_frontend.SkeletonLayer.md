[neuroglancer](../README.md) / [Modules](../modules.md) / [skeleton/frontend](../modules/skeleton_frontend.md) / SkeletonLayer

# Class: SkeletonLayer

[skeleton/frontend](../modules/skeleton_frontend.md).SkeletonLayer

## Hierarchy

- [`RefCounted`](util_disposable.RefCounted.md)

  ↳ **`SkeletonLayer`**

## Table of contents

### Constructors

- [constructor](skeleton_frontend.SkeletonLayer.md#constructor)

### Properties

- [chunkManager](skeleton_frontend.SkeletonLayer.md#chunkmanager)
- [displayState](skeleton_frontend.SkeletonLayer.md#displaystate)
- [disposedStacks](skeleton_frontend.SkeletonLayer.md#disposedstacks)
- [fallbackShaderParameters](skeleton_frontend.SkeletonLayer.md#fallbackshaderparameters)
- [layerChunkProgressInfo](skeleton_frontend.SkeletonLayer.md#layerchunkprogressinfo)
- [redrawNeeded](skeleton_frontend.SkeletonLayer.md#redrawneeded)
- [refCount](skeleton_frontend.SkeletonLayer.md#refcount)
- [sharedObject](skeleton_frontend.SkeletonLayer.md#sharedobject)
- [source](skeleton_frontend.SkeletonLayer.md#source)
- [vertexAttributes](skeleton_frontend.SkeletonLayer.md#vertexattributes)
- [wasDisposed](skeleton_frontend.SkeletonLayer.md#wasdisposed)

### Accessors

- [gl](skeleton_frontend.SkeletonLayer.md#gl)
- [visibility](skeleton_frontend.SkeletonLayer.md#visibility)

### Methods

- [addRef](skeleton_frontend.SkeletonLayer.md#addref)
- [dispose](skeleton_frontend.SkeletonLayer.md#dispose)
- [disposed](skeleton_frontend.SkeletonLayer.md#disposed)
- [draw](skeleton_frontend.SkeletonLayer.md#draw)
- [isReady](skeleton_frontend.SkeletonLayer.md#isready)
- [refCountReachedZero](skeleton_frontend.SkeletonLayer.md#refcountreachedzero)
- [registerCancellable](skeleton_frontend.SkeletonLayer.md#registercancellable)
- [registerDisposer](skeleton_frontend.SkeletonLayer.md#registerdisposer)
- [registerEventListener](skeleton_frontend.SkeletonLayer.md#registereventlistener)
- [unregisterDisposer](skeleton_frontend.SkeletonLayer.md#unregisterdisposer)

## Constructors

### constructor

• **new SkeletonLayer**(`chunkManager`, `source`, `displayState`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](chunk_manager_frontend.ChunkManager.md) |
| `source` | [`SkeletonSource`](skeleton_frontend.SkeletonSource.md) |
| `displayState` | [`SkeletonLayerDisplayState`](../interfaces/skeleton_frontend.SkeletonLayerDisplayState.md) |

#### Overrides

[RefCounted](util_disposable.RefCounted.md).[constructor](util_disposable.RefCounted.md#constructor)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:363](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L363)

## Properties

### chunkManager

• **chunkManager**: [`ChunkManager`](chunk_manager_frontend.ChunkManager.md)

___

### displayState

• **displayState**: [`SkeletonLayerDisplayState`](../interfaces/skeleton_frontend.SkeletonLayerDisplayState.md)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposedStacks](util_disposable.RefCounted.md#disposedstacks)

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### fallbackShaderParameters

• **fallbackShaderParameters**: [`WatchableValue`](annotation_annotation_layer_state._internal_.WatchableValue.md)<[`ShaderControlsBuilderState`](../interfaces/webgl_shader_ui_controls.ShaderControlsBuilderState.md)\>

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:356](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L356)

___

### layerChunkProgressInfo

• **layerChunkProgressInfo**: [`LayerChunkProgressInfo`](chunk_manager_base.LayerChunkProgressInfo.md)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:352](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L352)

___

### redrawNeeded

• **redrawNeeded**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:353](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L353)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCount](util_disposable.RefCounted.md#refcount)

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### sharedObject

• `Private` **sharedObject**: [`SegmentationLayerSharedObject`](segmentation_display_state_frontend.SegmentationLayerSharedObject.md)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:354](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L354)

___

### source

• **source**: [`SkeletonSource`](skeleton_frontend.SkeletonSource.md)

___

### vertexAttributes

• **vertexAttributes**: [`VertexAttributeRenderInfo`](../interfaces/skeleton_frontend._internal_.VertexAttributeRenderInfo.md)[]

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:355](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L355)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[wasDisposed](util_disposable.RefCounted.md#wasdisposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

## Accessors

### gl

• `get` **gl**(): [`GL`](../interfaces/webgl_context.GL.md)

#### Returns

[`GL`](../interfaces/webgl_context.GL.md)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:395](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L395)

___

### visibility

• `get` **visibility**(): [`VisibilityPriorityAggregator`](visibility_priority_frontend.VisibilityPriorityAggregator.md)

#### Returns

[`VisibilityPriorityAggregator`](visibility_priority_frontend.VisibilityPriorityAggregator.md)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:359](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L359)

## Methods

### addRef

▸ **addRef**(): [`SkeletonLayer`](skeleton_frontend.SkeletonLayer.md)

#### Returns

[`SkeletonLayer`](skeleton_frontend.SkeletonLayer.md)

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[addRef](util_disposable.RefCounted.md#addref)

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[dispose](util_disposable.RefCounted.md#dispose)

#### Defined in

[src/neuroglancer/util/disposable.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L53)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[disposed](util_disposable.RefCounted.md#disposed)

#### Defined in

[src/neuroglancer/util/disposable.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L75)

___

### draw

▸ **draw**(`renderContext`, `layer`, `renderHelper`, `renderOptions`, `attachment`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderContext` | [`PerspectiveViewRenderContext`](../interfaces/perspective_view_render_layer.PerspectiveViewRenderContext.md) \| [`SliceViewPanelRenderContext`](../interfaces/sliceview_renderlayer.SliceViewPanelRenderContext.md) |
| `layer` | [`RenderLayer`](annotation_annotation_layer_state._internal_.RenderLayer.md) |
| `renderHelper` | [`RenderHelper`](skeleton_frontend._internal_.RenderHelper.md) |
| `renderOptions` | [`ViewSpecificSkeletonRenderingOptions`](../interfaces/skeleton_frontend.ViewSpecificSkeletonRenderingOptions.md) |
| `attachment` | [`VisibleLayerInfo`](annotation_renderlayer._internal_.VisibleLayerInfo.md)<[`LayerView`](../interfaces/annotation_renderlayer._internal_.LayerView.md), [`ThreeDimensionalRenderLayerAttachmentState`](../interfaces/mesh_frontend._internal_.ThreeDimensionalRenderLayerAttachmentState.md)\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:399](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L399)

___

### isReady

▸ **isReady**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:472](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L472)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

[RefCounted](util_disposable.RefCounted.md).[refCountReachedZero](util_disposable.RefCounted.md#refcountreachedzero)

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

[RefCounted](util_disposable.RefCounted.md).[registerCancellable](util_disposable.RefCounted.md#registercancellable)

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

[RefCounted](util_disposable.RefCounted.md).[registerDisposer](util_disposable.RefCounted.md#registerdisposer)

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

[RefCounted](util_disposable.RefCounted.md).[registerEventListener](util_disposable.RefCounted.md#registereventlistener)

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L95)

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

[RefCounted](util_disposable.RefCounted.md).[unregisterDisposer](util_disposable.RefCounted.md#unregisterdisposer)

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)
