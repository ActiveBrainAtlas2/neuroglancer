[neuroglancer](../README.md) / [Modules](../modules.md) / [data\_panel\_layout](../modules/data_panel_layout.md) / [<internal\>](../modules/data_panel_layout._internal_.md) / FrontendVisibleLayerSources

# Interface: FrontendVisibleLayerSources

[data_panel_layout](../modules/data_panel_layout.md).[<internal>](../modules/data_panel_layout._internal_.md).FrontendVisibleLayerSources

## Hierarchy

- [`VisibleLayerSources`](data_panel_layout._internal_.VisibleLayerSources.md)<[`SliceViewRenderLayer`](../classes/data_panel_layout._internal_.SliceViewRenderLayer.md), [`SliceViewChunkSource`](../classes/data_panel_layout._internal_.SliceViewChunkSource.md), [`FrontendTransformedSource`](data_panel_layout._internal_.FrontendTransformedSource.md)\>

  ↳ **`FrontendVisibleLayerSources`**

## Table of contents

### Properties

- [allSources](data_panel_layout._internal_.FrontendVisibleLayerSources.md#allsources)
- [displayDimensionRenderInfo](data_panel_layout._internal_.FrontendVisibleLayerSources.md#displaydimensionrenderinfo)
- [disposers](data_panel_layout._internal_.FrontendVisibleLayerSources.md#disposers)
- [lastSeenGeneration](data_panel_layout._internal_.FrontendVisibleLayerSources.md#lastseengeneration)
- [messages](data_panel_layout._internal_.FrontendVisibleLayerSources.md#messages)
- [transformGeneration](data_panel_layout._internal_.FrontendVisibleLayerSources.md#transformgeneration)
- [visibleSources](data_panel_layout._internal_.FrontendVisibleLayerSources.md#visiblesources)

## Properties

### allSources

• **allSources**: [`FrontendTransformedSource`](data_panel_layout._internal_.FrontendTransformedSource.md)<[`SliceViewRenderLayer`](../classes/data_panel_layout._internal_.SliceViewRenderLayer.md)<[`SliceViewChunkSource`](../classes/data_panel_layout._internal_.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](data_panel_layout._internal_.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](../classes/data_panel_layout._internal_.SliceViewChunk.md)\>, [`SliceViewSourceOptions`](data_panel_layout._internal_.SliceViewSourceOptions.md)\>, [`SliceViewChunkSource`](../classes/data_panel_layout._internal_.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](data_panel_layout._internal_.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](../classes/data_panel_layout._internal_.SliceViewChunk.md)\>\>[][]

#### Inherited from

[VisibleLayerSources](data_panel_layout._internal_.VisibleLayerSources.md).[allSources](data_panel_layout._internal_.VisibleLayerSources.md#allsources)

#### Defined in

[src/neuroglancer/sliceview/base.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L219)

___

### displayDimensionRenderInfo

• **displayDimensionRenderInfo**: [`DisplayDimensionRenderInfo`](navigation_state.DisplayDimensionRenderInfo.md)

#### Inherited from

[VisibleLayerSources](data_panel_layout._internal_.VisibleLayerSources.md).[displayDimensionRenderInfo](data_panel_layout._internal_.VisibleLayerSources.md#displaydimensionrenderinfo)

#### Defined in

[src/neuroglancer/sliceview/base.ts:221](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L221)

___

### disposers

• **disposers**: [`Disposer`](../modules/axes_lines._internal_.md#disposer)[]

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L60)

___

### lastSeenGeneration

• **lastSeenGeneration**: `number`

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L59)

___

### messages

• **messages**: [`MessageList`](../classes/data_panel_layout._internal_.MessageList.md)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L61)

___

### transformGeneration

• **transformGeneration**: `number`

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/frontend.ts#L58)

___

### visibleSources

• **visibleSources**: [`FrontendTransformedSource`](data_panel_layout._internal_.FrontendTransformedSource.md)<[`SliceViewRenderLayer`](../classes/data_panel_layout._internal_.SliceViewRenderLayer.md)<[`SliceViewChunkSource`](../classes/data_panel_layout._internal_.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](data_panel_layout._internal_.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](../classes/data_panel_layout._internal_.SliceViewChunk.md)\>, [`SliceViewSourceOptions`](data_panel_layout._internal_.SliceViewSourceOptions.md)\>, [`SliceViewChunkSource`](../classes/data_panel_layout._internal_.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](data_panel_layout._internal_.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](../classes/data_panel_layout._internal_.SliceViewChunk.md)\>\>[]

#### Inherited from

[VisibleLayerSources](data_panel_layout._internal_.VisibleLayerSources.md).[visibleSources](data_panel_layout._internal_.VisibleLayerSources.md#visiblesources)

#### Defined in

[src/neuroglancer/sliceview/base.ts:220](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L220)
