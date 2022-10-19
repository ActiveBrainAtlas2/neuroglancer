[neuroglancer](../README.md) / [Modules](../modules.md) / [data\_panel\_layout](../modules/data_panel_layout.md) / [<internal\>](../modules/data_panel_layout._internal_.md) / VisibleLayerSources

# Interface: VisibleLayerSources<RLayer, Source, Transformed\>

[data_panel_layout](../modules/data_panel_layout.md).[<internal>](../modules/data_panel_layout._internal_.md).VisibleLayerSources

## Type parameters

| Name | Type |
| :------ | :------ |
| `RLayer` | extends [`MultiscaleVolumetricDataRenderLayer`](data_panel_layout._internal_.MultiscaleVolumetricDataRenderLayer.md) |
| `Source` | extends [`SliceViewChunkSource`](data_panel_layout._internal_.SliceViewChunkSource-1.md) |
| `Transformed` | extends [`TransformedSource`](data_panel_layout._internal_.TransformedSource.md)<`RLayer`, `Source`\> |

## Hierarchy

- **`VisibleLayerSources`**

  ↳ [`FrontendVisibleLayerSources`](data_panel_layout._internal_.FrontendVisibleLayerSources.md)

## Table of contents

### Properties

- [allSources](data_panel_layout._internal_.VisibleLayerSources.md#allsources)
- [displayDimensionRenderInfo](data_panel_layout._internal_.VisibleLayerSources.md#displaydimensionrenderinfo)
- [visibleSources](data_panel_layout._internal_.VisibleLayerSources.md#visiblesources)

## Properties

### allSources

• **allSources**: `Transformed`[][]

#### Defined in

[src/neuroglancer/sliceview/base.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L219)

___

### displayDimensionRenderInfo

• **displayDimensionRenderInfo**: [`DisplayDimensionRenderInfo`](navigation_state.DisplayDimensionRenderInfo.md)

#### Defined in

[src/neuroglancer/sliceview/base.ts:221](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L221)

___

### visibleSources

• **visibleSources**: `Transformed`[]

#### Defined in

[src/neuroglancer/sliceview/base.ts:220](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L220)
