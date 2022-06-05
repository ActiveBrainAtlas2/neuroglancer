[neuroglancer](../README.md) / [Modules](../modules.md) / render\_scale\_statistics

# Module: render\_scale\_statistics

## Table of contents

### Classes

- [RenderScaleHistogram](../classes/render_scale_statistics.RenderScaleHistogram.md)

### Variables

- [numRenderScaleHistogramBins](render_scale_statistics.md#numrenderscalehistogrambins)
- [renderScaleHistogramBinSize](render_scale_statistics.md#renderscalehistogrambinsize)
- [renderScaleHistogramOrigin](render_scale_statistics.md#renderscalehistogramorigin)

### Functions

- [getRenderScaleFromHistogramOffset](render_scale_statistics.md#getrenderscalefromhistogramoffset)
- [getRenderScaleHistogramOffset](render_scale_statistics.md#getrenderscalehistogramoffset)
- [trackableRenderScaleTarget](render_scale_statistics.md#trackablerenderscaletarget)

## Variables

### numRenderScaleHistogramBins

• `Const` **numRenderScaleHistogramBins**: ``40``

#### Defined in

[src/neuroglancer/render_scale_statistics.ts:22](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/render_scale_statistics.ts#L22)

___

### renderScaleHistogramBinSize

• `Const` **renderScaleHistogramBinSize**: ``0.5``

#### Defined in

[src/neuroglancer/render_scale_statistics.ts:23](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/render_scale_statistics.ts#L23)

___

### renderScaleHistogramOrigin

• `Const` **renderScaleHistogramOrigin**: ``-4``

#### Defined in

[src/neuroglancer/render_scale_statistics.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/render_scale_statistics.ts#L24)

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

[src/neuroglancer/render_scale_statistics.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/render_scale_statistics.ts#L30)

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

[src/neuroglancer/render_scale_statistics.ts:26](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/render_scale_statistics.ts#L26)

___

### trackableRenderScaleTarget

▸ **trackableRenderScaleTarget**(`initialValue`): [`TrackableValue`](../classes/trackable_value.TrackableValue.md)<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialValue` | `number` |

#### Returns

[`TrackableValue`](../classes/trackable_value.TrackableValue.md)<`number`\>

#### Defined in

[src/neuroglancer/render_scale_statistics.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/b9eb98e6/src/neuroglancer/render_scale_statistics.ts#L34)
