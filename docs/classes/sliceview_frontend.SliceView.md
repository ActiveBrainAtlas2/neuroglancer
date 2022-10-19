[neuroglancer](../README.md) / [Modules](../modules.md) / [sliceview/frontend](../modules/sliceview_frontend.md) / SliceView

# Class: SliceView

[sliceview/frontend](../modules/sliceview_frontend.md).SliceView

## Hierarchy

- [`Base`](../modules/sliceview_frontend._internal_.md#base)

  ↳ **`SliceView`**

## Table of contents

### Constructors

- [constructor](sliceview_frontend.SliceView.md#constructor)

### Properties

- [RPC\_TYPE\_ID](sliceview_frontend.SliceView.md#rpc_type_id)
- [chunkManager](sliceview_frontend.SliceView.md#chunkmanager)
- [disposedStacks](sliceview_frontend.SliceView.md#disposedstacks)
- [gl](sliceview_frontend.SliceView.md#gl)
- [histogramGenerator](sliceview_frontend.SliceView.md#histogramgenerator)
- [histogramInputTextures](sliceview_frontend.SliceView.md#histograminputtextures)
- [isOwner](sliceview_frontend.SliceView.md#isowner)
- [layerManager](sliceview_frontend.SliceView.md#layermanager)
- [navigationState](sliceview_frontend.SliceView.md#navigationstate)
- [offscreenFramebuffer](sliceview_frontend.SliceView.md#offscreenframebuffer)
- [offscreenFramebuffersWithHistograms](sliceview_frontend.SliceView.md#offscreenframebufferswithhistograms)
- [projectionParameters](sliceview_frontend.SliceView.md#projectionparameters)
- [refCount](sliceview_frontend.SliceView.md#refcount)
- [referencedGeneration](sliceview_frontend.SliceView.md#referencedgeneration)
- [renderingStale](sliceview_frontend.SliceView.md#renderingstale)
- [rpc](sliceview_frontend.SliceView.md#rpc)
- [rpcId](sliceview_frontend.SliceView.md#rpcid)
- [sharedProjectionParameters](sliceview_frontend.SliceView.md#sharedprojectionparameters)
- [unreferencedGeneration](sliceview_frontend.SliceView.md#unreferencedgeneration)
- [updateVisibleLayers](sliceview_frontend.SliceView.md#updatevisiblelayers)
- [viewChanged](sliceview_frontend.SliceView.md#viewchanged)
- [visibility](sliceview_frontend.SliceView.md#visibility)
- [visibleChunksStale](sliceview_frontend.SliceView.md#visiblechunksstale)
- [visibleLayerList](sliceview_frontend.SliceView.md#visiblelayerlist)
- [visibleLayers](sliceview_frontend.SliceView.md#visiblelayers)
- [visibleSourcesStale](sliceview_frontend.SliceView.md#visiblesourcesstale)
- [wasDisposed](sliceview_frontend.SliceView.md#wasdisposed)
- [wireFrame](sliceview_frontend.SliceView.md#wireframe)

### Accessors

- [displayDimensionRenderInfo](sliceview_frontend.SliceView.md#displaydimensionrenderinfo)
- [valid](sliceview_frontend.SliceView.md#valid)

### Methods

- [addCounterpartRef](sliceview_frontend.SliceView.md#addcounterpartref)
- [addRef](sliceview_frontend.SliceView.md#addref)
- [bindVisibleRenderLayer](sliceview_frontend.SliceView.md#bindvisiblerenderlayer)
- [computeHistograms](sliceview_frontend.SliceView.md#computehistograms)
- [counterpartRefCountReachedZero](sliceview_frontend.SliceView.md#counterpartrefcountreachedzero)
- [dispose](sliceview_frontend.SliceView.md#dispose)
- [disposed](sliceview_frontend.SliceView.md#disposed)
- [flushBackendProjectionParameters](sliceview_frontend.SliceView.md#flushbackendprojectionparameters)
- [forEachVisibleChunk](sliceview_frontend.SliceView.md#foreachvisiblechunk)
- [getOffscreenFramebufferWithHistograms](sliceview_frontend.SliceView.md#getoffscreenframebufferwithhistograms)
- [getTransformedSources](sliceview_frontend.SliceView.md#gettransformedsources)
- [initializeCounterpart](sliceview_frontend.SliceView.md#initializecounterpart)
- [initializeSharedObject](sliceview_frontend.SliceView.md#initializesharedobject)
- [invalidateVisibleChunks](sliceview_frontend.SliceView.md#invalidatevisiblechunks)
- [invalidateVisibleSources](sliceview_frontend.SliceView.md#invalidatevisiblesources)
- [isReady](sliceview_frontend.SliceView.md#isready)
- [ownerDispose](sliceview_frontend.SliceView.md#ownerdispose)
- [refCountReachedZero](sliceview_frontend.SliceView.md#refcountreachedzero)
- [registerCancellable](sliceview_frontend.SliceView.md#registercancellable)
- [registerDisposer](sliceview_frontend.SliceView.md#registerdisposer)
- [registerEventListener](sliceview_frontend.SliceView.md#registereventlistener)
- [unregisterDisposer](sliceview_frontend.SliceView.md#unregisterdisposer)
- [updateRendering](sliceview_frontend.SliceView.md#updaterendering)
- [updateVisibleLayersNow](sliceview_frontend.SliceView.md#updatevisiblelayersnow)
- [updateVisibleSources](sliceview_frontend.SliceView.md#updatevisiblesources)

## Constructors

### constructor

• **new SliceView**(`chunkManager`, `layerManager`, `navigationState`, `wireFrame`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](chunk_manager_frontend.ChunkManager.md) |
| `layerManager` | [`LayerManager`](annotation_annotation_layer_state._internal_.LayerManager.md) |
| `navigationState` | [`NavigationState`](annotation_polygon._internal_.NavigationState.md)<[`TrackableZoomInterface`](../modules/annotation_polygon._internal_.md#trackablezoominterface)\> |
| `wireFrame` | [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`boolean`\> |

#### Overrides

Base.constructor

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:144](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L144)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

Base.RPC\_TYPE\_ID

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L245)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](chunk_manager_frontend.ChunkManager.md)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

Base.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L52)

___

### gl

• **gl**: [`GL`](../interfaces/webgl_context.GL.md)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:103](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L103)

___

### histogramGenerator

• `Private` **histogramGenerator**: [`TextureHistogramGenerator`](webgl_empirical_cdf.TextureHistogramGenerator.md)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:127](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L127)

___

### histogramInputTextures

• **histogramInputTextures**: [`TextureBuffer`](webgl_offscreen.TextureBuffer.md)[] = `[]`

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:120](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L120)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

Base.isOwner

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L171)

___

### layerManager

• **layerManager**: [`LayerManager`](annotation_annotation_layer_state._internal_.LayerManager.md)

___

### navigationState

• **navigationState**: [`NavigationState`](annotation_polygon._internal_.NavigationState.md)<[`TrackableZoomInterface`](../modules/annotation_polygon._internal_.md#trackablezoominterface)\>

___

### offscreenFramebuffer

• **offscreenFramebuffer**: [`FramebufferConfiguration`](webgl_offscreen.FramebufferConfiguration.md)<[`TextureBuffer`](webgl_offscreen.TextureBuffer.md), [`DepthTextureBuffer`](webgl_offscreen.DepthTextureBuffer.md)\>

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:116](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L116)

___

### offscreenFramebuffersWithHistograms

• **offscreenFramebuffersWithHistograms**: [`FramebufferConfiguration`](webgl_offscreen.FramebufferConfiguration.md)<[`TextureBuffer`](webgl_offscreen.TextureBuffer.md), [`DepthTextureBuffer`](webgl_offscreen.DepthTextureBuffer.md)\>[]

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:121](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L121)

___

### projectionParameters

• **projectionParameters**: [`DerivedProjectionParameters`](perspective_view_panel._internal_.DerivedProjectionParameters.md)<[`SliceViewProjectionParameters`](sliceview_base.SliceViewProjectionParameters.md)\>

#### Overrides

Base.projectionParameters

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:136](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L136)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

Base.refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

Base.referencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L173)

___

### renderingStale

• **renderingStale**: `boolean` = `true`

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:108](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L108)

___

### rpc

• **rpc**: [`RPC`](annotation_annotation_layer_state._internal_.RPC.md)

#### Overrides

Base.rpc

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:105](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L105)

___

### rpcId

• **rpcId**: `number`

#### Overrides

Base.rpcId

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:106](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L106)

___

### sharedProjectionParameters

• **sharedProjectionParameters**: [`SharedProjectionParameters`](perspective_view_panel._internal_.SharedProjectionParameters.md)<[`SliceViewProjectionParameters`](sliceview_base.SliceViewProjectionParameters.md)\>

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:138](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L138)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

Base.unreferencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L172)

___

### updateVisibleLayers

• `Private` **updateVisibleLayers**: [`DebouncedFunc`](../interfaces/annotation_annotation_layer_state._internal_.DebouncedFunc.md)<() => `void`\>

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:253](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L253)

___

### viewChanged

• **viewChanged**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:104](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L104)

___

### visibility

• **visibility**: [`VisibilityPriorityAggregator`](visibility_priority_frontend.VisibilityPriorityAggregator.md)

#### Inherited from

Base.visibility

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/visibility_priority/frontend.ts#L92)

___

### visibleChunksStale

• **visibleChunksStale**: `boolean` = `true`

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:110](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L110)

___

### visibleLayerList

• **visibleLayerList**: [`SliceViewRenderLayer`](sliceview_renderlayer.SliceViewRenderLayer.md)<[`SliceViewChunkSource`](sliceview_frontend.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](sliceview_frontend.SliceViewChunk.md)\>, [`SliceViewSourceOptions`](../interfaces/sliceview_base.SliceViewSourceOptions.md)\>[]

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:112](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L112)

___

### visibleLayers

• **visibleLayers**: `Map`<[`SliceViewRenderLayer`](sliceview_renderlayer.SliceViewRenderLayer.md)<[`SliceViewChunkSource`](sliceview_frontend.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](sliceview_frontend.SliceViewChunk.md)\>, [`SliceViewSourceOptions`](../interfaces/sliceview_base.SliceViewSourceOptions.md)\>, [`FrontendVisibleLayerSources`](../interfaces/sliceview_frontend._internal_.FrontendVisibleLayerSources.md)\>

#### Overrides

Base.visibleLayers

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:114](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L114)

___

### visibleSourcesStale

• **visibleSourcesStale**: `boolean` = `true`

#### Inherited from

Base.visibleSourcesStale

#### Defined in

[src/neuroglancer/sliceview/base.ts:263](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L263)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

Base.wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L46)

___

### wireFrame

• **wireFrame**: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`boolean`\>

## Accessors

### displayDimensionRenderInfo

• `get` **displayDimensionRenderInfo**(): [`WatchableDisplayDimensionRenderInfo`](annotation_polygon._internal_.WatchableDisplayDimensionRenderInfo.md)

#### Returns

[`WatchableDisplayDimensionRenderInfo`](annotation_polygon._internal_.WatchableDisplayDimensionRenderInfo.md)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:123](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L123)

___

### valid

• `get` **valid**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:352](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L352)

## Methods

### addCounterpartRef

▸ **addCounterpartRef**(): `Object`

Precondition: this.isOwner === true.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `gen` | `number` |
| `id` | ``null`` \| `number` |

#### Inherited from

Base.addCounterpartRef

#### Defined in

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`SliceView`](sliceview_frontend.SliceView.md)

#### Returns

[`SliceView`](sliceview_frontend.SliceView.md)

#### Inherited from

Base.addRef

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L48)

___

### bindVisibleRenderLayer

▸ `Private` **bindVisibleRenderLayer**(`renderLayer`, `disposers`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderLayer` | [`SliceViewRenderLayer`](sliceview_renderlayer.SliceViewRenderLayer.md)<[`SliceViewChunkSource`](sliceview_frontend.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](sliceview_frontend.SliceViewChunk.md)\>, [`SliceViewSourceOptions`](../interfaces/sliceview_base.SliceViewSourceOptions.md)\> |
| `disposers` | [`Disposer`](../modules/util_disposable.md#disposer)[] |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:262](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L262)

___

### computeHistograms

▸ **computeHistograms**(`count`, `histogramSpecifications`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |
| `histogramSpecifications` | [`HistogramSpecifications`](webgl_empirical_cdf.HistogramSpecifications.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:129](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L129)

___

### counterpartRefCountReachedZero

▸ **counterpartRefCountReachedZero**(`generation`): `void`

Precondition: this.isOwner === true.

This should be called when the counterpart's refCount is decremented and reaches zero.

#### Parameters

| Name | Type |
| :------ | :------ |
| `generation` | `number` |

#### Returns

`void`

#### Inherited from

Base.counterpartRefCountReachedZero

#### Defined in

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L234)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

Base.dispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

Base.disposed

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:418](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L418)

___

### flushBackendProjectionParameters

▸ **flushBackendProjectionParameters**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:140](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L140)

___

### forEachVisibleChunk

▸ **forEachVisibleChunk**(`tsource`, `chunkLayout`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tsource` | [`FrontendTransformedSource`](../interfaces/sliceview_frontend.FrontendTransformedSource.md)<[`SliceViewRenderLayer`](sliceview_renderlayer.SliceViewRenderLayer.md)<[`SliceViewChunkSource`](sliceview_frontend.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](sliceview_frontend.SliceViewChunk.md)\>, [`SliceViewSourceOptions`](../interfaces/sliceview_base.SliceViewSourceOptions.md)\>, [`SliceViewChunkSource`](sliceview_frontend.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](sliceview_frontend.SliceViewChunk.md)\>\> |
| `chunkLayout` | [`ChunkLayout`](sliceview_chunk_layout.ChunkLayout.md) |
| `callback` | (`key`: `string`) => `void` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:217](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L217)

___

### getOffscreenFramebufferWithHistograms

▸ `Private` **getOffscreenFramebufferWithHistograms**(`count`): [`FramebufferConfiguration`](webgl_offscreen.FramebufferConfiguration.md)<[`TextureBuffer`](webgl_offscreen.TextureBuffer.md), [`DepthTextureBuffer`](webgl_offscreen.DepthTextureBuffer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

[`FramebufferConfiguration`](webgl_offscreen.FramebufferConfiguration.md)<[`TextureBuffer`](webgl_offscreen.TextureBuffer.md), [`DepthTextureBuffer`](webgl_offscreen.DepthTextureBuffer.md)\>

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:356](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L356)

___

### getTransformedSources

▸ **getTransformedSources**(`layer`, `messages`): [`FrontendTransformedSource`](../interfaces/sliceview_frontend.FrontendTransformedSource.md)<[`SliceViewRenderLayer`](sliceview_renderlayer.SliceViewRenderLayer.md)<[`SliceViewChunkSource`](sliceview_frontend.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](sliceview_frontend.SliceViewChunk.md)\>, [`SliceViewSourceOptions`](../interfaces/sliceview_base.SliceViewSourceOptions.md)\>, [`SliceViewChunkSource`](sliceview_frontend.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](sliceview_frontend.SliceViewChunk.md)\>\>[][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`SliceViewRenderLayer`](sliceview_renderlayer.SliceViewRenderLayer.md)<[`SliceViewChunkSource`](sliceview_frontend.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](sliceview_frontend.SliceViewChunk.md)\>, [`SliceViewSourceOptions`](../interfaces/sliceview_base.SliceViewSourceOptions.md)\> |
| `messages` | [`MessageList`](util_message_list.MessageList.md) |

#### Returns

[`FrontendTransformedSource`](../interfaces/sliceview_frontend.FrontendTransformedSource.md)<[`SliceViewRenderLayer`](sliceview_renderlayer.SliceViewRenderLayer.md)<[`SliceViewChunkSource`](sliceview_frontend.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](sliceview_frontend.SliceViewChunk.md)\>, [`SliceViewSourceOptions`](../interfaces/sliceview_base.SliceViewSourceOptions.md)\>, [`SliceViewChunkSource`](sliceview_frontend.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](sliceview_frontend.SliceViewChunk.md)\>\>[][]

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:428](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L428)

___

### initializeCounterpart

▸ **initializeCounterpart**(`rpc`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](annotation_annotation_layer_state._internal_.RPC.md) |
| `options` | `any` |

#### Returns

`void`

#### Inherited from

Base.initializeCounterpart

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:94](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/visibility_priority/frontend.ts#L94)

___

### initializeSharedObject

▸ **initializeSharedObject**(`rpc`, `rpcId?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](annotation_annotation_layer_state._internal_.RPC.md) |
| `rpcId` | `number` |

#### Returns

`void`

#### Inherited from

Base.initializeSharedObject

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L175)

___

### invalidateVisibleChunks

▸ **invalidateVisibleChunks**(): `void`

#### Returns

`void`

#### Overrides

Base.invalidateVisibleChunks

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:347](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L347)

___

### invalidateVisibleSources

▸ **invalidateVisibleSources**(): `void`

#### Returns

`void`

#### Overrides

Base.invalidateVisibleSources

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:257](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L257)

___

### isReady

▸ **isReady**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:227](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L227)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

Base.ownerDispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

Base.refCountReachedZero

#### Defined in

[src/neuroglancer/worker_rpc.ts:203](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/worker_rpc.ts#L203)

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

Base.registerCancellable

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

Base.registerDisposer

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

Base.registerEventListener

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

Base.unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/disposable.ts#L85)

___

### updateRendering

▸ **updateRendering**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:377](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L377)

___

### updateVisibleLayersNow

▸ `Private` **updateVisibleLayersNow**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:275](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L275)

___

### updateVisibleSources

▸ **updateVisibleSources**(): `void`

Computes the list of sources to use for each visible layer, based on the
current pixelSize.

#### Returns

`void`

#### Inherited from

Base.updateVisibleSources

#### Defined in

[src/neuroglancer/sliceview/base.ts:286](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L286)
