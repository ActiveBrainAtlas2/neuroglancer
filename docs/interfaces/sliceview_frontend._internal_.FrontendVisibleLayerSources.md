[neuroglancer](../README.md) / [Modules](../modules.md) / [sliceview/frontend](../modules/sliceview_frontend.md) / [<internal\>](../modules/sliceview_frontend._internal_.md) / FrontendVisibleLayerSources

# Interface: FrontendVisibleLayerSources

[sliceview/frontend](../modules/sliceview_frontend.md).[<internal>](../modules/sliceview_frontend._internal_.md).FrontendVisibleLayerSources

## Hierarchy

- [`VisibleLayerSources`](sliceview_base.VisibleLayerSources.md)<[`SliceViewRenderLayer`](../classes/sliceview_renderlayer.SliceViewRenderLayer.md), [`SliceViewChunkSource`](../classes/sliceview_frontend.SliceViewChunkSource.md), [`FrontendTransformedSource`](sliceview_frontend.FrontendTransformedSource.md)\>

  ↳ **`FrontendVisibleLayerSources`**

## Table of contents

### Properties

- [allSources](sliceview_frontend._internal_.FrontendVisibleLayerSources.md#allsources)
- [displayDimensionRenderInfo](sliceview_frontend._internal_.FrontendVisibleLayerSources.md#displaydimensionrenderinfo)
- [disposers](sliceview_frontend._internal_.FrontendVisibleLayerSources.md#disposers)
- [lastSeenGeneration](sliceview_frontend._internal_.FrontendVisibleLayerSources.md#lastseengeneration)
- [messages](sliceview_frontend._internal_.FrontendVisibleLayerSources.md#messages)
- [transformGeneration](sliceview_frontend._internal_.FrontendVisibleLayerSources.md#transformgeneration)
- [visibleSources](sliceview_frontend._internal_.FrontendVisibleLayerSources.md#visiblesources)

## Properties

### allSources

• **allSources**: [`FrontendTransformedSource`](sliceview_frontend.FrontendTransformedSource.md)<[`SliceViewRenderLayer`](../classes/sliceview_renderlayer.SliceViewRenderLayer.md)<[`SliceViewChunkSource`](../classes/sliceview_frontend.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](../classes/sliceview_frontend.SliceViewChunk.md)\>, [`SliceViewSourceOptions`](sliceview_base.SliceViewSourceOptions.md)\>, [`SliceViewChunkSource`](../classes/sliceview_frontend.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](../classes/sliceview_frontend.SliceViewChunk.md)\>\>[][]

#### Inherited from

[VisibleLayerSources](sliceview_base.VisibleLayerSources.md).[allSources](sliceview_base.VisibleLayerSources.md#allsources)

#### Defined in

[src/neuroglancer/sliceview/base.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L219)

___

### displayDimensionRenderInfo

• **displayDimensionRenderInfo**: [`DisplayDimensionRenderInfo`](annotation_base._internal_.DisplayDimensionRenderInfo.md)

#### Inherited from

[VisibleLayerSources](sliceview_base.VisibleLayerSources.md).[displayDimensionRenderInfo](sliceview_base.VisibleLayerSources.md#displaydimensionrenderinfo)

#### Defined in

[src/neuroglancer/sliceview/base.ts:221](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L221)

___

### disposers

• **disposers**: [`Disposer`](../modules/util_disposable.md#disposer)[]

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L60)

___

### lastSeenGeneration

• **lastSeenGeneration**: `number`

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L59)

___

### messages

• **messages**: [`MessageList`](../classes/util_message_list.MessageList.md)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L61)

___

### transformGeneration

• **transformGeneration**: `number`

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L58)

___

### visibleSources

• **visibleSources**: [`FrontendTransformedSource`](sliceview_frontend.FrontendTransformedSource.md)<[`SliceViewRenderLayer`](../classes/sliceview_renderlayer.SliceViewRenderLayer.md)<[`SliceViewChunkSource`](../classes/sliceview_frontend.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](../classes/sliceview_frontend.SliceViewChunk.md)\>, [`SliceViewSourceOptions`](sliceview_base.SliceViewSourceOptions.md)\>, [`SliceViewChunkSource`](../classes/sliceview_frontend.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](../classes/sliceview_frontend.SliceViewChunk.md)\>\>[]

#### Inherited from

[VisibleLayerSources](sliceview_base.VisibleLayerSources.md).[visibleSources](sliceview_base.VisibleLayerSources.md#visiblesources)

#### Defined in

[src/neuroglancer/sliceview/base.ts:220](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L220)
