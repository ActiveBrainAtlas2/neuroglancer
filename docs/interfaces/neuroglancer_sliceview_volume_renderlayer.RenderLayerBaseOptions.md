[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/volume/renderlayer](../modules/neuroglancer_sliceview_volume_renderlayer.md) / RenderLayerBaseOptions

# Interface: RenderLayerBaseOptions

[neuroglancer/sliceview/volume/renderlayer](../modules/neuroglancer_sliceview_volume_renderlayer.md).RenderLayerBaseOptions

## Hierarchy

- [`SliceViewRenderLayerOptions`](neuroglancer_sliceview_renderlayer.SliceViewRenderLayerOptions.md)

  ↳ **`RenderLayerBaseOptions`**

  ↳↳ [`ImageRenderLayerOptions`](neuroglancer_sliceview_volume_image_renderlayer.ImageRenderLayerOptions.md)

  ↳↳ [`RenderLayerOptions`](neuroglancer_sliceview_volume_renderlayer.RenderLayerOptions.md)

  ↳↳ [`SliceViewSegmentationDisplayState`](neuroglancer_sliceview_volume_segmentation_renderlayer.SliceViewSegmentationDisplayState.md)

## Table of contents

### Properties

- [channelCoordinateSpace](neuroglancer_sliceview_volume_renderlayer.RenderLayerBaseOptions.md#channelcoordinatespace)
- [dataHistogramSpecifications](neuroglancer_sliceview_volume_renderlayer.RenderLayerBaseOptions.md#datahistogramspecifications)
- [localPosition](neuroglancer_sliceview_volume_renderlayer.RenderLayerBaseOptions.md#localposition)
- [renderScaleHistogram](neuroglancer_sliceview_volume_renderlayer.RenderLayerBaseOptions.md#renderscalehistogram)
- [renderScaleTarget](neuroglancer_sliceview_volume_renderlayer.RenderLayerBaseOptions.md#renderscaletarget)
- [shaderError](neuroglancer_sliceview_volume_renderlayer.RenderLayerBaseOptions.md#shadererror)
- [transform](neuroglancer_sliceview_volume_renderlayer.RenderLayerBaseOptions.md#transform)

## Properties

### channelCoordinateSpace

• `Optional` **channelCoordinateSpace**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<[`CoordinateSpace`](neuroglancer_coordinate_transform.CoordinateSpace.md)\>

#### Defined in

[src/neuroglancer/sliceview/volume/renderlayer.ts:207](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/renderlayer.ts#L207)

___

### dataHistogramSpecifications

• `Optional` **dataHistogramSpecifications**: [`HistogramSpecifications`](../classes/neuroglancer_webgl_empirical_cdf.HistogramSpecifications.md)

#### Inherited from

[SliceViewRenderLayerOptions](neuroglancer_sliceview_renderlayer.SliceViewRenderLayerOptions.md).[dataHistogramSpecifications](neuroglancer_sliceview_renderlayer.SliceViewRenderLayerOptions.md#datahistogramspecifications)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/renderlayer.ts#L47)

___

### localPosition

• **localPosition**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`Float32Array`\>

Specifies the position within the "local" coordinate space.

#### Inherited from

[SliceViewRenderLayerOptions](neuroglancer_sliceview_renderlayer.SliceViewRenderLayerOptions.md).[localPosition](neuroglancer_sliceview_renderlayer.SliceViewRenderLayerOptions.md#localposition)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/renderlayer.ts#L46)

___

### renderScaleHistogram

• `Optional` **renderScaleHistogram**: [`RenderScaleHistogram`](../classes/neuroglancer_render_scale_statistics.RenderScaleHistogram.md)

#### Inherited from

[SliceViewRenderLayerOptions](neuroglancer_sliceview_renderlayer.SliceViewRenderLayerOptions.md).[renderScaleHistogram](neuroglancer_sliceview_renderlayer.SliceViewRenderLayerOptions.md#renderscalehistogram)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/renderlayer.ts#L41)

___

### renderScaleTarget

• `Optional` **renderScaleTarget**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`number`\>

#### Inherited from

[SliceViewRenderLayerOptions](neuroglancer_sliceview_renderlayer.SliceViewRenderLayerOptions.md).[renderScaleTarget](neuroglancer_sliceview_renderlayer.SliceViewRenderLayerOptions.md#renderscaletarget)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/renderlayer.ts#L40)

___

### shaderError

• `Optional` **shaderError**: [`WatchableShaderError`](../modules/neuroglancer_webgl_dynamic_shader.md#watchableshadererror)

#### Defined in

[src/neuroglancer/sliceview/volume/renderlayer.ts:206](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/renderlayer.ts#L206)

___

### transform

• **transform**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<[`RenderLayerTransformOrError`](../modules/neuroglancer_render_coordinate_transform.md#renderlayertransformorerror)\>

Specifies the transform from the "model" coordinate space (specified by the multiscale source)
to the "render layer" coordinate space.

#### Inherited from

[SliceViewRenderLayerOptions](neuroglancer_sliceview_renderlayer.SliceViewRenderLayerOptions.md).[transform](neuroglancer_sliceview_renderlayer.SliceViewRenderLayerOptions.md#transform)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/renderlayer.ts#L39)
