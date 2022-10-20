[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/renderlayer](../modules/neuroglancer_sliceview_renderlayer.md) / SliceViewRenderLayerOptions

# Interface: SliceViewRenderLayerOptions

[neuroglancer/sliceview/renderlayer](../modules/neuroglancer_sliceview_renderlayer.md).SliceViewRenderLayerOptions

## Hierarchy

- **`SliceViewRenderLayerOptions`**

  ↳ [`RenderLayerBaseOptions`](neuroglancer_sliceview_volume_renderlayer.RenderLayerBaseOptions.md)

## Table of contents

### Properties

- [dataHistogramSpecifications](neuroglancer_sliceview_renderlayer.SliceViewRenderLayerOptions.md#datahistogramspecifications)
- [localPosition](neuroglancer_sliceview_renderlayer.SliceViewRenderLayerOptions.md#localposition)
- [renderScaleHistogram](neuroglancer_sliceview_renderlayer.SliceViewRenderLayerOptions.md#renderscalehistogram)
- [renderScaleTarget](neuroglancer_sliceview_renderlayer.SliceViewRenderLayerOptions.md#renderscaletarget)
- [transform](neuroglancer_sliceview_renderlayer.SliceViewRenderLayerOptions.md#transform)

## Properties

### dataHistogramSpecifications

• `Optional` **dataHistogramSpecifications**: [`HistogramSpecifications`](../classes/neuroglancer_webgl_empirical_cdf.HistogramSpecifications.md)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/renderlayer.ts#L47)

___

### localPosition

• **localPosition**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`Float32Array`\>

Specifies the position within the "local" coordinate space.

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/renderlayer.ts#L46)

___

### renderScaleHistogram

• `Optional` **renderScaleHistogram**: [`RenderScaleHistogram`](../classes/neuroglancer_render_scale_statistics.RenderScaleHistogram.md)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/renderlayer.ts#L41)

___

### renderScaleTarget

• `Optional` **renderScaleTarget**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`number`\>

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/renderlayer.ts#L40)

___

### transform

• **transform**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<[`RenderLayerTransformOrError`](../modules/neuroglancer_render_coordinate_transform.md#renderlayertransformorerror)\>

Specifies the transform from the "model" coordinate space (specified by the multiscale source)
to the "render layer" coordinate space.

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/renderlayer.ts#L39)
