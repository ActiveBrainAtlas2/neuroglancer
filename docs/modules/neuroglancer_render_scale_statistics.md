[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/render\_scale\_statistics

# Module: neuroglancer/render\_scale\_statistics

## Table of contents

### Classes

- [RenderScaleHistogram](../classes/neuroglancer_render_scale_statistics.RenderScaleHistogram.md)

### Variables

- [numRenderScaleHistogramBins](neuroglancer_render_scale_statistics.md#numrenderscalehistogrambins)
- [renderScaleHistogramBinSize](neuroglancer_render_scale_statistics.md#renderscalehistogrambinsize)
- [renderScaleHistogramOrigin](neuroglancer_render_scale_statistics.md#renderscalehistogramorigin)

### Functions

- [getRenderScaleFromHistogramOffset](neuroglancer_render_scale_statistics.md#getrenderscalefromhistogramoffset)
- [getRenderScaleHistogramOffset](neuroglancer_render_scale_statistics.md#getrenderscalehistogramoffset)
- [trackableRenderScaleTarget](neuroglancer_render_scale_statistics.md#trackablerenderscaletarget)

## Variables

### numRenderScaleHistogramBins

• `Const` **numRenderScaleHistogramBins**: ``40``

#### Defined in

[src/neuroglancer/render_scale_statistics.ts:22](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/render_scale_statistics.ts#L22)

___

### renderScaleHistogramBinSize

• `Const` **renderScaleHistogramBinSize**: ``0.5``

#### Defined in

[src/neuroglancer/render_scale_statistics.ts:23](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/render_scale_statistics.ts#L23)

___

### renderScaleHistogramOrigin

• `Const` **renderScaleHistogramOrigin**: ``-4``

#### Defined in

[src/neuroglancer/render_scale_statistics.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/render_scale_statistics.ts#L24)

## Functions

### getRenderScaleFromHistogramOffset

▸ **getRenderScaleFromHistogramOffset**(`offset`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `number` |

#### Returns

`number`

#### Defined in

[src/neuroglancer/render_scale_statistics.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/render_scale_statistics.ts#L30)

___

### getRenderScaleHistogramOffset

▸ **getRenderScaleHistogramOffset**(`renderScale`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderScale` | `number` |

#### Returns

`number`

#### Defined in

[src/neuroglancer/render_scale_statistics.ts:26](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/render_scale_statistics.ts#L26)

___

### trackableRenderScaleTarget

▸ **trackableRenderScaleTarget**(`initialValue`): [`TrackableValue`](../classes/neuroglancer_trackable_value.TrackableValue.md)<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialValue` | `number` |

#### Returns

[`TrackableValue`](../classes/neuroglancer_trackable_value.TrackableValue.md)<`number`\>

#### Defined in

[src/neuroglancer/render_scale_statistics.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/render_scale_statistics.ts#L34)
