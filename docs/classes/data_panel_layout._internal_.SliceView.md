[neuroglancer](../README.md) / [Modules](../modules.md) / [data\_panel\_layout](../modules/data_panel_layout.md) / [<internal\>](../modules/data_panel_layout._internal_.md) / SliceView

# Class: SliceView

[data_panel_layout](../modules/data_panel_layout.md).[<internal>](../modules/data_panel_layout._internal_.md).SliceView

## Hierarchy

- [`Base`](../modules/data_panel_layout._internal_.md#base)

  ↳ **`SliceView`**

## Table of contents

### Constructors

- [constructor](data_panel_layout._internal_.SliceView.md#constructor)

### Properties

- [RPC\_TYPE\_ID](data_panel_layout._internal_.SliceView.md#rpc_type_id)
- [chunkManager](data_panel_layout._internal_.SliceView.md#chunkmanager)
- [disposedStacks](data_panel_layout._internal_.SliceView.md#disposedstacks)
- [gl](data_panel_layout._internal_.SliceView.md#gl)
- [histogramGenerator](data_panel_layout._internal_.SliceView.md#histogramgenerator)
- [histogramInputTextures](data_panel_layout._internal_.SliceView.md#histograminputtextures)
- [isOwner](data_panel_layout._internal_.SliceView.md#isowner)
- [layerManager](data_panel_layout._internal_.SliceView.md#layermanager)
- [navigationState](data_panel_layout._internal_.SliceView.md#navigationstate)
- [offscreenFramebuffer](data_panel_layout._internal_.SliceView.md#offscreenframebuffer)
- [offscreenFramebuffersWithHistograms](data_panel_layout._internal_.SliceView.md#offscreenframebufferswithhistograms)
- [projectionParameters](data_panel_layout._internal_.SliceView.md#projectionparameters)
- [refCount](data_panel_layout._internal_.SliceView.md#refcount)
- [referencedGeneration](data_panel_layout._internal_.SliceView.md#referencedgeneration)
- [renderingStale](data_panel_layout._internal_.SliceView.md#renderingstale)
- [rpc](data_panel_layout._internal_.SliceView.md#rpc)
- [rpcId](data_panel_layout._internal_.SliceView.md#rpcid)
- [sharedProjectionParameters](data_panel_layout._internal_.SliceView.md#sharedprojectionparameters)
- [unreferencedGeneration](data_panel_layout._internal_.SliceView.md#unreferencedgeneration)
- [updateVisibleLayers](data_panel_layout._internal_.SliceView.md#updatevisiblelayers)
- [viewChanged](data_panel_layout._internal_.SliceView.md#viewchanged)
- [visibility](data_panel_layout._internal_.SliceView.md#visibility)
- [visibleChunksStale](data_panel_layout._internal_.SliceView.md#visiblechunksstale)
- [visibleLayerList](data_panel_layout._internal_.SliceView.md#visiblelayerlist)
- [visibleLayers](data_panel_layout._internal_.SliceView.md#visiblelayers)
- [visibleSourcesStale](data_panel_layout._internal_.SliceView.md#visiblesourcesstale)
- [wasDisposed](data_panel_layout._internal_.SliceView.md#wasdisposed)
- [wireFrame](data_panel_layout._internal_.SliceView.md#wireframe)

### Accessors

- [displayDimensionRenderInfo](data_panel_layout._internal_.SliceView.md#displaydimensionrenderinfo)
- [valid](data_panel_layout._internal_.SliceView.md#valid)

### Methods

- [addCounterpartRef](data_panel_layout._internal_.SliceView.md#addcounterpartref)
- [addRef](data_panel_layout._internal_.SliceView.md#addref)
- [bindVisibleRenderLayer](data_panel_layout._internal_.SliceView.md#bindvisiblerenderlayer)
- [computeHistograms](data_panel_layout._internal_.SliceView.md#computehistograms)
- [counterpartRefCountReachedZero](data_panel_layout._internal_.SliceView.md#counterpartrefcountreachedzero)
- [dispose](data_panel_layout._internal_.SliceView.md#dispose)
- [disposed](data_panel_layout._internal_.SliceView.md#disposed)
- [flushBackendProjectionParameters](data_panel_layout._internal_.SliceView.md#flushbackendprojectionparameters)
- [forEachVisibleChunk](data_panel_layout._internal_.SliceView.md#foreachvisiblechunk)
- [getOffscreenFramebufferWithHistograms](data_panel_layout._internal_.SliceView.md#getoffscreenframebufferwithhistograms)
- [getTransformedSources](data_panel_layout._internal_.SliceView.md#gettransformedsources)
- [initializeCounterpart](data_panel_layout._internal_.SliceView.md#initializecounterpart)
- [initializeSharedObject](data_panel_layout._internal_.SliceView.md#initializesharedobject)
- [invalidateVisibleChunks](data_panel_layout._internal_.SliceView.md#invalidatevisiblechunks)
- [invalidateVisibleSources](data_panel_layout._internal_.SliceView.md#invalidatevisiblesources)
- [isReady](data_panel_layout._internal_.SliceView.md#isready)
- [ownerDispose](data_panel_layout._internal_.SliceView.md#ownerdispose)
- [refCountReachedZero](data_panel_layout._internal_.SliceView.md#refcountreachedzero)
- [registerCancellable](data_panel_layout._internal_.SliceView.md#registercancellable)
- [registerDisposer](data_panel_layout._internal_.SliceView.md#registerdisposer)
- [registerEventListener](data_panel_layout._internal_.SliceView.md#registereventlistener)
- [unregisterDisposer](data_panel_layout._internal_.SliceView.md#unregisterdisposer)
- [updateRendering](data_panel_layout._internal_.SliceView.md#updaterendering)
- [updateVisibleLayersNow](data_panel_layout._internal_.SliceView.md#updatevisiblelayersnow)
- [updateVisibleSources](data_panel_layout._internal_.SliceView.md#updatevisiblesources)

## Constructors

### constructor

• **new SliceView**(`chunkManager`, `layerManager`, `navigationState`, `wireFrame`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](data_panel_layout._internal_.ChunkManager.md) |
| `layerManager` | [`LayerManager`](layer.LayerManager.md) |
| `navigationState` | [`NavigationState`](navigation_state.NavigationState.md)<[`TrackableZoomInterface`](../modules/navigation_state.md#trackablezoominterface)\> |
| `wireFrame` | [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<`boolean`\> |

#### Overrides

Base.constructor

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:144](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L144)

## Properties

### RPC\_TYPE\_ID

• **RPC\_TYPE\_ID**: `string`

Should be set to a constant specifying the SharedObject type identifier on the prototype of
final derived owner classes.  It is not used on counterpart (non-owner) classes.

#### Inherited from

Base.RPC\_TYPE\_ID

#### Defined in

[src/neuroglancer/worker_rpc.ts:245](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L245)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](data_panel_layout._internal_.ChunkManager.md)

___

### disposedStacks

• **disposedStacks**: `any`

#### Inherited from

Base.disposedStacks

#### Defined in

[src/neuroglancer/util/disposable.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L52)

___

### gl

• **gl**: [`GL`](../interfaces/axes_lines._internal_.GL.md)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:103](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L103)

___

### histogramGenerator

• `Private` **histogramGenerator**: [`TextureHistogramGenerator`](data_panel_layout._internal_.TextureHistogramGenerator.md)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:127](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L127)

___

### histogramInputTextures

• **histogramInputTextures**: [`TextureBuffer`](data_panel_layout._internal_.TextureBuffer.md)[] = `[]`

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:120](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L120)

___

### isOwner

• **isOwner**: `undefined` \| `boolean`

#### Inherited from

Base.isOwner

#### Defined in

[src/neuroglancer/worker_rpc.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L171)

___

### layerManager

• **layerManager**: [`LayerManager`](layer.LayerManager.md)

___

### navigationState

• **navigationState**: [`NavigationState`](navigation_state.NavigationState.md)<[`TrackableZoomInterface`](../modules/navigation_state.md#trackablezoominterface)\>

___

### offscreenFramebuffer

• **offscreenFramebuffer**: [`FramebufferConfiguration`](data_panel_layout._internal_.FramebufferConfiguration.md)<[`TextureBuffer`](data_panel_layout._internal_.TextureBuffer.md), [`DepthTextureBuffer`](data_panel_layout._internal_.DepthTextureBuffer.md)\>

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:116](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L116)

___

### offscreenFramebuffersWithHistograms

• **offscreenFramebuffersWithHistograms**: [`FramebufferConfiguration`](data_panel_layout._internal_.FramebufferConfiguration.md)<[`TextureBuffer`](data_panel_layout._internal_.TextureBuffer.md), [`DepthTextureBuffer`](data_panel_layout._internal_.DepthTextureBuffer.md)\>[]

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:121](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L121)

___

### projectionParameters

• **projectionParameters**: [`DerivedProjectionParameters`](renderlayer.DerivedProjectionParameters.md)<[`SliceViewProjectionParameters`](data_panel_layout._internal_.SliceViewProjectionParameters.md)\>

#### Overrides

Base.projectionParameters

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:136](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L136)

___

### refCount

• **refCount**: `number` = `1`

#### Inherited from

Base.refCount

#### Defined in

[src/neuroglancer/util/disposable.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L45)

___

### referencedGeneration

• **referencedGeneration**: `number`

#### Inherited from

Base.referencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L173)

___

### renderingStale

• **renderingStale**: `boolean` = `true`

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:108](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L108)

___

### rpc

• **rpc**: [`RPC`](worker_rpc.RPC.md)

#### Overrides

Base.rpc

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:105](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L105)

___

### rpcId

• **rpcId**: `number`

#### Overrides

Base.rpcId

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:106](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L106)

___

### sharedProjectionParameters

• **sharedProjectionParameters**: [`SharedProjectionParameters`](renderlayer.SharedProjectionParameters.md)<[`SliceViewProjectionParameters`](data_panel_layout._internal_.SliceViewProjectionParameters.md)\>

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:138](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L138)

___

### unreferencedGeneration

• **unreferencedGeneration**: `number`

#### Inherited from

Base.unreferencedGeneration

#### Defined in

[src/neuroglancer/worker_rpc.ts:172](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L172)

___

### updateVisibleLayers

• `Private` **updateVisibleLayers**: [`DebouncedFunc`](../interfaces/data_panel_layout._internal_.DebouncedFunc.md)<() => `void`\>

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:253](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L253)

___

### viewChanged

• **viewChanged**: [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:104](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L104)

___

### visibility

• **visibility**: [`VisibilityPriorityAggregator`](data_panel_layout._internal_.VisibilityPriorityAggregator.md)

#### Inherited from

Base.visibility

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/visibility_priority/frontend.ts#L92)

___

### visibleChunksStale

• **visibleChunksStale**: `boolean` = `true`

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:110](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L110)

___

### visibleLayerList

• **visibleLayerList**: [`SliceViewRenderLayer`](data_panel_layout._internal_.SliceViewRenderLayer.md)<[`SliceViewChunkSource`](data_panel_layout._internal_.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/data_panel_layout._internal_.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](data_panel_layout._internal_.SliceViewChunk.md)\>, [`SliceViewSourceOptions`](../interfaces/data_panel_layout._internal_.SliceViewSourceOptions.md)\>[]

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:112](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L112)

___

### visibleLayers

• **visibleLayers**: `Map`<[`SliceViewRenderLayer`](data_panel_layout._internal_.SliceViewRenderLayer.md)<[`SliceViewChunkSource`](data_panel_layout._internal_.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/data_panel_layout._internal_.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](data_panel_layout._internal_.SliceViewChunk.md)\>, [`SliceViewSourceOptions`](../interfaces/data_panel_layout._internal_.SliceViewSourceOptions.md)\>, [`FrontendVisibleLayerSources`](../interfaces/data_panel_layout._internal_.FrontendVisibleLayerSources.md)\>

#### Overrides

Base.visibleLayers

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:114](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L114)

___

### visibleSourcesStale

• **visibleSourcesStale**: `boolean` = `true`

#### Inherited from

Base.visibleSourcesStale

#### Defined in

[src/neuroglancer/sliceview/base.ts:263](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L263)

___

### wasDisposed

• **wasDisposed**: `undefined` \| `boolean`

#### Inherited from

Base.wasDisposed

#### Defined in

[src/neuroglancer/util/disposable.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L46)

___

### wireFrame

• **wireFrame**: [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<`boolean`\>

## Accessors

### displayDimensionRenderInfo

• `get` **displayDimensionRenderInfo**(): [`WatchableDisplayDimensionRenderInfo`](navigation_state.WatchableDisplayDimensionRenderInfo.md)

#### Returns

[`WatchableDisplayDimensionRenderInfo`](navigation_state.WatchableDisplayDimensionRenderInfo.md)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:123](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L123)

___

### valid

• `get` **valid**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:352](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L352)

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

[src/neuroglancer/worker_rpc.ts:199](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L199)

___

### addRef

▸ **addRef**(): [`SliceView`](data_panel_layout._internal_.SliceView.md)

#### Returns

[`SliceView`](data_panel_layout._internal_.SliceView.md)

#### Inherited from

Base.addRef

#### Defined in

[src/neuroglancer/util/disposable.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L48)

___

### bindVisibleRenderLayer

▸ `Private` **bindVisibleRenderLayer**(`renderLayer`, `disposers`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderLayer` | [`SliceViewRenderLayer`](data_panel_layout._internal_.SliceViewRenderLayer.md)<[`SliceViewChunkSource`](data_panel_layout._internal_.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/data_panel_layout._internal_.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](data_panel_layout._internal_.SliceViewChunk.md)\>, [`SliceViewSourceOptions`](../interfaces/data_panel_layout._internal_.SliceViewSourceOptions.md)\> |
| `disposers` | [`Disposer`](../modules/axes_lines._internal_.md#disposer)[] |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:262](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L262)

___

### computeHistograms

▸ **computeHistograms**(`count`, `histogramSpecifications`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |
| `histogramSpecifications` | [`HistogramSpecifications`](data_panel_layout._internal_.HistogramSpecifications.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:129](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L129)

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

[src/neuroglancer/worker_rpc.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L234)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

Base.dispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L192)

___

### disposed

▸ **disposed**(): `void`

#### Returns

`void`

#### Overrides

Base.disposed

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:418](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L418)

___

### flushBackendProjectionParameters

▸ **flushBackendProjectionParameters**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:140](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L140)

___

### forEachVisibleChunk

▸ **forEachVisibleChunk**(`tsource`, `chunkLayout`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tsource` | [`FrontendTransformedSource`](../interfaces/data_panel_layout._internal_.FrontendTransformedSource.md)<[`SliceViewRenderLayer`](data_panel_layout._internal_.SliceViewRenderLayer.md)<[`SliceViewChunkSource`](data_panel_layout._internal_.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/data_panel_layout._internal_.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](data_panel_layout._internal_.SliceViewChunk.md)\>, [`SliceViewSourceOptions`](../interfaces/data_panel_layout._internal_.SliceViewSourceOptions.md)\>, [`SliceViewChunkSource`](data_panel_layout._internal_.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/data_panel_layout._internal_.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](data_panel_layout._internal_.SliceViewChunk.md)\>\> |
| `chunkLayout` | [`ChunkLayout`](data_panel_layout._internal_.ChunkLayout.md) |
| `callback` | (`key`: `string`) => `void` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:217](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L217)

___

### getOffscreenFramebufferWithHistograms

▸ `Private` **getOffscreenFramebufferWithHistograms**(`count`): [`FramebufferConfiguration`](data_panel_layout._internal_.FramebufferConfiguration.md)<[`TextureBuffer`](data_panel_layout._internal_.TextureBuffer.md), [`DepthTextureBuffer`](data_panel_layout._internal_.DepthTextureBuffer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

[`FramebufferConfiguration`](data_panel_layout._internal_.FramebufferConfiguration.md)<[`TextureBuffer`](data_panel_layout._internal_.TextureBuffer.md), [`DepthTextureBuffer`](data_panel_layout._internal_.DepthTextureBuffer.md)\>

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:356](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L356)

___

### getTransformedSources

▸ **getTransformedSources**(`layer`, `messages`): [`FrontendTransformedSource`](../interfaces/data_panel_layout._internal_.FrontendTransformedSource.md)<[`SliceViewRenderLayer`](data_panel_layout._internal_.SliceViewRenderLayer.md)<[`SliceViewChunkSource`](data_panel_layout._internal_.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/data_panel_layout._internal_.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](data_panel_layout._internal_.SliceViewChunk.md)\>, [`SliceViewSourceOptions`](../interfaces/data_panel_layout._internal_.SliceViewSourceOptions.md)\>, [`SliceViewChunkSource`](data_panel_layout._internal_.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/data_panel_layout._internal_.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](data_panel_layout._internal_.SliceViewChunk.md)\>\>[][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`SliceViewRenderLayer`](data_panel_layout._internal_.SliceViewRenderLayer.md)<[`SliceViewChunkSource`](data_panel_layout._internal_.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/data_panel_layout._internal_.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](data_panel_layout._internal_.SliceViewChunk.md)\>, [`SliceViewSourceOptions`](../interfaces/data_panel_layout._internal_.SliceViewSourceOptions.md)\> |
| `messages` | [`MessageList`](data_panel_layout._internal_.MessageList.md) |

#### Returns

[`FrontendTransformedSource`](../interfaces/data_panel_layout._internal_.FrontendTransformedSource.md)<[`SliceViewRenderLayer`](data_panel_layout._internal_.SliceViewRenderLayer.md)<[`SliceViewChunkSource`](data_panel_layout._internal_.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/data_panel_layout._internal_.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](data_panel_layout._internal_.SliceViewChunk.md)\>, [`SliceViewSourceOptions`](../interfaces/data_panel_layout._internal_.SliceViewSourceOptions.md)\>, [`SliceViewChunkSource`](data_panel_layout._internal_.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/data_panel_layout._internal_.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](data_panel_layout._internal_.SliceViewChunk.md)\>\>[][]

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:428](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L428)

___

### initializeCounterpart

▸ **initializeCounterpart**(`rpc`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](worker_rpc.RPC.md) |
| `options` | `any` |

#### Returns

`void`

#### Inherited from

Base.initializeCounterpart

#### Defined in

[src/neuroglancer/visibility_priority/frontend.ts:94](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/visibility_priority/frontend.ts#L94)

___

### initializeSharedObject

▸ **initializeSharedObject**(`rpc`, `rpcId?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rpc` | [`RPC`](worker_rpc.RPC.md) |
| `rpcId` | `number` |

#### Returns

`void`

#### Inherited from

Base.initializeSharedObject

#### Defined in

[src/neuroglancer/worker_rpc.ts:175](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L175)

___

### invalidateVisibleChunks

▸ **invalidateVisibleChunks**(): `void`

#### Returns

`void`

#### Overrides

Base.invalidateVisibleChunks

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:347](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L347)

___

### invalidateVisibleSources

▸ **invalidateVisibleSources**(): `void`

#### Returns

`void`

#### Overrides

Base.invalidateVisibleSources

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:257](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L257)

___

### isReady

▸ **isReady**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:227](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L227)

___

### ownerDispose

▸ `Protected` **ownerDispose**(): `void`

Precondition: this.isOwner === true.

#### Returns

`void`

#### Inherited from

Base.ownerDispose

#### Defined in

[src/neuroglancer/worker_rpc.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L219)

___

### refCountReachedZero

▸ `Protected` **refCountReachedZero**(): `void`

#### Returns

`void`

#### Inherited from

Base.refCountReachedZero

#### Defined in

[src/neuroglancer/worker_rpc.ts:203](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/worker_rpc.ts#L203)

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

[src/neuroglancer/util/disposable.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L100)

___

### registerDisposer

▸ **registerDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/axes_lines._internal_.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

Base.registerDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L76)

___

### registerEventListener

▸ **registerEventListener**(`target`, `type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](../modules/axes_lines._internal_.md#eventtarget) |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/axes_lines._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](../interfaces/axes_lines._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

Base.registerEventListener

#### Defined in

[src/neuroglancer/util/disposable.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L95)

___

### unregisterDisposer

▸ **unregisterDisposer**<`T`\>(`f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Disposer`](../modules/axes_lines._internal_.md#disposer) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Inherited from

Base.unregisterDisposer

#### Defined in

[src/neuroglancer/util/disposable.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/disposable.ts#L85)

___

### updateRendering

▸ **updateRendering**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:377](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L377)

___

### updateVisibleLayersNow

▸ `Private` **updateVisibleLayersNow**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:275](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L275)

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

[src/neuroglancer/sliceview/base.ts:286](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L286)
