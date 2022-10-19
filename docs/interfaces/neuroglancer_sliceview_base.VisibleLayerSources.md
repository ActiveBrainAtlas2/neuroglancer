[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/base](../modules/neuroglancer_sliceview_base.md) / VisibleLayerSources

# Interface: VisibleLayerSources<RLayer, Source, Transformed\>

[neuroglancer/sliceview/base](../modules/neuroglancer_sliceview_base.md).VisibleLayerSources

## Type parameters

| Name | Type |
| :------ | :------ |
| `RLayer` | extends [`MultiscaleVolumetricDataRenderLayer`](neuroglancer_sliceview_base.MultiscaleVolumetricDataRenderLayer.md) |
| `Source` | extends [`SliceViewChunkSource`](neuroglancer_sliceview_base.SliceViewChunkSource.md) |
| `Transformed` | extends [`TransformedSource`](neuroglancer_sliceview_base.TransformedSource.md)<`RLayer`, `Source`\> |

## Hierarchy

- **`VisibleLayerSources`**

  ↳ [`FrontendVisibleLayerSources`](neuroglancer_sliceview_frontend._internal_.FrontendVisibleLayerSources.md)

## Table of contents

### Properties

- [allSources](neuroglancer_sliceview_base.VisibleLayerSources.md#allsources)
- [displayDimensionRenderInfo](neuroglancer_sliceview_base.VisibleLayerSources.md#displaydimensionrenderinfo)
- [visibleSources](neuroglancer_sliceview_base.VisibleLayerSources.md#visiblesources)

## Properties

### allSources

• **allSources**: `Transformed`[][]

#### Defined in

[src/neuroglancer/sliceview/base.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L219)

___

### displayDimensionRenderInfo

• **displayDimensionRenderInfo**: [`DisplayDimensionRenderInfo`](neuroglancer_navigation_state.DisplayDimensionRenderInfo.md)

#### Defined in

[src/neuroglancer/sliceview/base.ts:221](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L221)

___

### visibleSources

• **visibleSources**: `Transformed`[]

#### Defined in

[src/neuroglancer/sliceview/base.ts:220](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L220)
