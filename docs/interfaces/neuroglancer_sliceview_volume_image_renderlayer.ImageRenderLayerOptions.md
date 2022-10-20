[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/volume/image\_renderlayer](../modules/neuroglancer_sliceview_volume_image_renderlayer.md) / ImageRenderLayerOptions

# Interface: ImageRenderLayerOptions

[neuroglancer/sliceview/volume/image_renderlayer](../modules/neuroglancer_sliceview_volume_image_renderlayer.md).ImageRenderLayerOptions

## Hierarchy

- [`RenderLayerBaseOptions`](neuroglancer_sliceview_volume_renderlayer.RenderLayerBaseOptions.md)

  ↳ **`ImageRenderLayerOptions`**

## Table of contents

### Properties

- [blendMode](neuroglancer_sliceview_volume_image_renderlayer.ImageRenderLayerOptions.md#blendmode)
- [channelCoordinateSpace](neuroglancer_sliceview_volume_image_renderlayer.ImageRenderLayerOptions.md#channelcoordinatespace)
- [dataHistogramSpecifications](neuroglancer_sliceview_volume_image_renderlayer.ImageRenderLayerOptions.md#datahistogramspecifications)
- [localPosition](neuroglancer_sliceview_volume_image_renderlayer.ImageRenderLayerOptions.md#localposition)
- [opacity](neuroglancer_sliceview_volume_image_renderlayer.ImageRenderLayerOptions.md#opacity)
- [renderScaleHistogram](neuroglancer_sliceview_volume_image_renderlayer.ImageRenderLayerOptions.md#renderscalehistogram)
- [renderScaleTarget](neuroglancer_sliceview_volume_image_renderlayer.ImageRenderLayerOptions.md#renderscaletarget)
- [shaderControlState](neuroglancer_sliceview_volume_image_renderlayer.ImageRenderLayerOptions.md#shadercontrolstate)
- [shaderError](neuroglancer_sliceview_volume_image_renderlayer.ImageRenderLayerOptions.md#shadererror)
- [transform](neuroglancer_sliceview_volume_image_renderlayer.ImageRenderLayerOptions.md#transform)

## Properties

### blendMode

• **blendMode**: [`TrackableBlendModeValue`](../modules/neuroglancer_trackable_blend.md#trackableblendmodevalue)

#### Defined in

[src/neuroglancer/sliceview/volume/image_renderlayer.ts:44](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/image_renderlayer.ts#L44)

___

### channelCoordinateSpace

• `Optional` **channelCoordinateSpace**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<[`CoordinateSpace`](neuroglancer_coordinate_transform.CoordinateSpace.md)\>

#### Inherited from

[RenderLayerBaseOptions](neuroglancer_sliceview_volume_renderlayer.RenderLayerBaseOptions.md).[channelCoordinateSpace](neuroglancer_sliceview_volume_renderlayer.RenderLayerBaseOptions.md#channelcoordinatespace)

#### Defined in

[src/neuroglancer/sliceview/volume/renderlayer.ts:207](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/renderlayer.ts#L207)

___

### dataHistogramSpecifications

• `Optional` **dataHistogramSpecifications**: [`HistogramSpecifications`](../classes/neuroglancer_webgl_empirical_cdf.HistogramSpecifications.md)

#### Inherited from

[RenderLayerBaseOptions](neuroglancer_sliceview_volume_renderlayer.RenderLayerBaseOptions.md).[dataHistogramSpecifications](neuroglancer_sliceview_volume_renderlayer.RenderLayerBaseOptions.md#datahistogramspecifications)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/renderlayer.ts#L47)

___

### localPosition

• **localPosition**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`Float32Array`\>

Specifies the position within the "local" coordinate space.

#### Inherited from

[RenderLayerBaseOptions](neuroglancer_sliceview_volume_renderlayer.RenderLayerBaseOptions.md).[localPosition](neuroglancer_sliceview_volume_renderlayer.RenderLayerBaseOptions.md#localposition)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/renderlayer.ts#L46)

___

### opacity

• **opacity**: [`TrackableAlphaValue`](../modules/neuroglancer_trackable_alpha.md#trackablealphavalue)

#### Defined in

[src/neuroglancer/sliceview/volume/image_renderlayer.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/image_renderlayer.ts#L43)

___

### renderScaleHistogram

• `Optional` **renderScaleHistogram**: [`RenderScaleHistogram`](../classes/neuroglancer_render_scale_statistics.RenderScaleHistogram.md)

#### Inherited from

[RenderLayerBaseOptions](neuroglancer_sliceview_volume_renderlayer.RenderLayerBaseOptions.md).[renderScaleHistogram](neuroglancer_sliceview_volume_renderlayer.RenderLayerBaseOptions.md#renderscalehistogram)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/renderlayer.ts#L41)

___

### renderScaleTarget

• `Optional` **renderScaleTarget**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`number`\>

#### Inherited from

[RenderLayerBaseOptions](neuroglancer_sliceview_volume_renderlayer.RenderLayerBaseOptions.md).[renderScaleTarget](neuroglancer_sliceview_volume_renderlayer.RenderLayerBaseOptions.md#renderscaletarget)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/renderlayer.ts#L40)

___

### shaderControlState

• **shaderControlState**: [`ShaderControlState`](../classes/neuroglancer_webgl_shader_ui_controls.ShaderControlState.md)

#### Defined in

[src/neuroglancer/sliceview/volume/image_renderlayer.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/image_renderlayer.ts#L45)

___

### shaderError

• **shaderError**: [`WatchableShaderError`](../modules/neuroglancer_webgl_dynamic_shader.md#watchableshadererror)

#### Overrides

[RenderLayerBaseOptions](neuroglancer_sliceview_volume_renderlayer.RenderLayerBaseOptions.md).[shaderError](neuroglancer_sliceview_volume_renderlayer.RenderLayerBaseOptions.md#shadererror)

#### Defined in

[src/neuroglancer/sliceview/volume/image_renderlayer.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/volume/image_renderlayer.ts#L42)

___

### transform

• **transform**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<[`RenderLayerTransformOrError`](../modules/neuroglancer_render_coordinate_transform.md#renderlayertransformorerror)\>

Specifies the transform from the "model" coordinate space (specified by the multiscale source)
to the "render layer" coordinate space.

#### Inherited from

[RenderLayerBaseOptions](neuroglancer_sliceview_volume_renderlayer.RenderLayerBaseOptions.md).[transform](neuroglancer_sliceview_volume_renderlayer.RenderLayerBaseOptions.md#transform)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/sliceview/renderlayer.ts#L39)
