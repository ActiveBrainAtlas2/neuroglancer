[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/frontend](../modules/neuroglancer_sliceview_frontend.md) / [<internal\>](../modules/neuroglancer_sliceview_frontend._internal_.md) / FrontendVisibleLayerSources

# Interface: FrontendVisibleLayerSources

[neuroglancer/sliceview/frontend](../modules/neuroglancer_sliceview_frontend.md).[<internal>](../modules/neuroglancer_sliceview_frontend._internal_.md).FrontendVisibleLayerSources

## Hierarchy

- [`VisibleLayerSources`](neuroglancer_sliceview_base.VisibleLayerSources.md)<[`SliceViewRenderLayer`](../classes/neuroglancer_sliceview_renderlayer.SliceViewRenderLayer.md), [`SliceViewChunkSource`](../classes/neuroglancer_sliceview_frontend.SliceViewChunkSource.md), [`FrontendTransformedSource`](neuroglancer_sliceview_frontend.FrontendTransformedSource.md)\>

  ↳ **`FrontendVisibleLayerSources`**

## Table of contents

### Properties

- [allSources](neuroglancer_sliceview_frontend._internal_.FrontendVisibleLayerSources.md#allsources)
- [displayDimensionRenderInfo](neuroglancer_sliceview_frontend._internal_.FrontendVisibleLayerSources.md#displaydimensionrenderinfo)
- [disposers](neuroglancer_sliceview_frontend._internal_.FrontendVisibleLayerSources.md#disposers)
- [lastSeenGeneration](neuroglancer_sliceview_frontend._internal_.FrontendVisibleLayerSources.md#lastseengeneration)
- [messages](neuroglancer_sliceview_frontend._internal_.FrontendVisibleLayerSources.md#messages)
- [transformGeneration](neuroglancer_sliceview_frontend._internal_.FrontendVisibleLayerSources.md#transformgeneration)
- [visibleSources](neuroglancer_sliceview_frontend._internal_.FrontendVisibleLayerSources.md#visiblesources)

## Properties

### allSources

• **allSources**: [`FrontendTransformedSource`](neuroglancer_sliceview_frontend.FrontendTransformedSource.md)<[`SliceViewRenderLayer`](../classes/neuroglancer_sliceview_renderlayer.SliceViewRenderLayer.md)<[`SliceViewChunkSource`](../classes/neuroglancer_sliceview_frontend.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](neuroglancer_sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](../classes/neuroglancer_sliceview_frontend.SliceViewChunk.md)\>, [`SliceViewSourceOptions`](neuroglancer_sliceview_base.SliceViewSourceOptions.md)\>, [`SliceViewChunkSource`](../classes/neuroglancer_sliceview_frontend.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](neuroglancer_sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](../classes/neuroglancer_sliceview_frontend.SliceViewChunk.md)\>\>[][]

#### Inherited from

[VisibleLayerSources](neuroglancer_sliceview_base.VisibleLayerSources.md).[allSources](neuroglancer_sliceview_base.VisibleLayerSources.md#allsources)

#### Defined in

[src/neuroglancer/sliceview/base.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L219)

___

### displayDimensionRenderInfo

• **displayDimensionRenderInfo**: [`DisplayDimensionRenderInfo`](neuroglancer_navigation_state.DisplayDimensionRenderInfo.md)

#### Inherited from

[VisibleLayerSources](neuroglancer_sliceview_base.VisibleLayerSources.md).[displayDimensionRenderInfo](neuroglancer_sliceview_base.VisibleLayerSources.md#displaydimensionrenderinfo)

#### Defined in

[src/neuroglancer/sliceview/base.ts:221](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L221)

___

### disposers

• **disposers**: [`Disposer`](../modules/neuroglancer_util_disposable.md#disposer)[]

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/frontend.ts#L60)

___

### lastSeenGeneration

• **lastSeenGeneration**: `number`

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/frontend.ts#L59)

___

### messages

• **messages**: [`MessageList`](../classes/neuroglancer_util_message_list.MessageList.md)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/frontend.ts#L61)

___

### transformGeneration

• **transformGeneration**: `number`

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/frontend.ts#L58)

___

### visibleSources

• **visibleSources**: [`FrontendTransformedSource`](neuroglancer_sliceview_frontend.FrontendTransformedSource.md)<[`SliceViewRenderLayer`](../classes/neuroglancer_sliceview_renderlayer.SliceViewRenderLayer.md)<[`SliceViewChunkSource`](../classes/neuroglancer_sliceview_frontend.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](neuroglancer_sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](../classes/neuroglancer_sliceview_frontend.SliceViewChunk.md)\>, [`SliceViewSourceOptions`](neuroglancer_sliceview_base.SliceViewSourceOptions.md)\>, [`SliceViewChunkSource`](../classes/neuroglancer_sliceview_frontend.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](neuroglancer_sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](../classes/neuroglancer_sliceview_frontend.SliceViewChunk.md)\>\>[]

#### Inherited from

[VisibleLayerSources](neuroglancer_sliceview_base.VisibleLayerSources.md).[visibleSources](neuroglancer_sliceview_base.VisibleLayerSources.md#visiblesources)

#### Defined in

[src/neuroglancer/sliceview/base.ts:220](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L220)
