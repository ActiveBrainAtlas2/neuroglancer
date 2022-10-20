[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/volume\_rendering/volume\_render\_layer](../modules/neuroglancer_volume_rendering_volume_render_layer.md) / VolumeRenderingRenderLayerOptions

# Interface: VolumeRenderingRenderLayerOptions

[neuroglancer/volume_rendering/volume_render_layer](../modules/neuroglancer_volume_rendering_volume_render_layer.md).VolumeRenderingRenderLayerOptions

## Table of contents

### Properties

- [channelCoordinateSpace](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayerOptions.md#channelcoordinatespace)
- [localPosition](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayerOptions.md#localposition)
- [multiscaleSource](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayerOptions.md#multiscalesource)
- [renderScaleHistogram](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayerOptions.md#renderscalehistogram)
- [renderScaleTarget](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayerOptions.md#renderscaletarget)
- [shaderControlState](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayerOptions.md#shadercontrolstate)
- [shaderError](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayerOptions.md#shadererror)
- [transform](neuroglancer_volume_rendering_volume_render_layer.VolumeRenderingRenderLayerOptions.md#transform)

## Properties

### channelCoordinateSpace

• **channelCoordinateSpace**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<[`CoordinateSpace`](neuroglancer_coordinate_transform.CoordinateSpace.md)\>

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/volume_rendering/volume_render_layer.ts#L54)

___

### localPosition

• **localPosition**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`Float32Array`\>

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:55](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/volume_rendering/volume_render_layer.ts#L55)

___

### multiscaleSource

• **multiscaleSource**: [`MultiscaleVolumeChunkSource`](../classes/neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md)

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/volume_rendering/volume_render_layer.ts#L50)

___

### renderScaleHistogram

• **renderScaleHistogram**: [`RenderScaleHistogram`](../classes/neuroglancer_render_scale_statistics.RenderScaleHistogram.md)

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/volume_rendering/volume_render_layer.ts#L57)

___

### renderScaleTarget

• **renderScaleTarget**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`number`\>

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/volume_rendering/volume_render_layer.ts#L56)

___

### shaderControlState

• **shaderControlState**: [`ShaderControlState`](../classes/neuroglancer_webgl_shader_ui_controls.ShaderControlState.md)

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/volume_rendering/volume_render_layer.ts#L53)

___

### shaderError

• **shaderError**: [`WatchableShaderError`](../modules/neuroglancer_webgl_dynamic_shader.md#watchableshadererror)

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/volume_rendering/volume_render_layer.ts#L52)

___

### transform

• **transform**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<[`RenderLayerTransformOrError`](../modules/neuroglancer_render_coordinate_transform.md#renderlayertransformorerror)\>

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/volume_rendering/volume_render_layer.ts#L51)
