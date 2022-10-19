[neuroglancer](../README.md) / [Modules](../modules.md) / [sliceview/base](../modules/sliceview_base.md) / VisibleLayerSources

# Interface: VisibleLayerSources<RLayer, Source, Transformed\>

[sliceview/base](../modules/sliceview_base.md).VisibleLayerSources

## Type parameters

| Name | Type |
| :------ | :------ |
| `RLayer` | extends [`MultiscaleVolumetricDataRenderLayer`](sliceview_base.MultiscaleVolumetricDataRenderLayer.md) |
| `Source` | extends [`SliceViewChunkSource`](sliceview_base.SliceViewChunkSource.md) |
| `Transformed` | extends [`TransformedSource`](sliceview_base.TransformedSource.md)<`RLayer`, `Source`\> |

## Hierarchy

- **`VisibleLayerSources`**

  ↳ [`FrontendVisibleLayerSources`](sliceview_frontend._internal_.FrontendVisibleLayerSources.md)

## Table of contents

### Properties

- [allSources](sliceview_base.VisibleLayerSources.md#allsources)
- [displayDimensionRenderInfo](sliceview_base.VisibleLayerSources.md#displaydimensionrenderinfo)
- [visibleSources](sliceview_base.VisibleLayerSources.md#visiblesources)

## Properties

### allSources

• **allSources**: `Transformed`[][]

#### Defined in

[src/neuroglancer/sliceview/base.ts:219](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L219)

___

### displayDimensionRenderInfo

• **displayDimensionRenderInfo**: [`DisplayDimensionRenderInfo`](annotation_base._internal_.DisplayDimensionRenderInfo.md)

#### Defined in

[src/neuroglancer/sliceview/base.ts:221](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L221)

___

### visibleSources

• **visibleSources**: `Transformed`[]

#### Defined in

[src/neuroglancer/sliceview/base.ts:220](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L220)
