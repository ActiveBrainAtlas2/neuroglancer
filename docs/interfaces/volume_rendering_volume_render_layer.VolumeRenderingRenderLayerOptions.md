[neuroglancer](../README.md) / [Modules](../modules.md) / [volume\_rendering/volume\_render\_layer](../modules/volume_rendering_volume_render_layer.md) / VolumeRenderingRenderLayerOptions

# Interface: VolumeRenderingRenderLayerOptions

[volume_rendering/volume_render_layer](../modules/volume_rendering_volume_render_layer.md).VolumeRenderingRenderLayerOptions

## Table of contents

### Properties

- [channelCoordinateSpace](volume_rendering_volume_render_layer.VolumeRenderingRenderLayerOptions.md#channelcoordinatespace)
- [localPosition](volume_rendering_volume_render_layer.VolumeRenderingRenderLayerOptions.md#localposition)
- [multiscaleSource](volume_rendering_volume_render_layer.VolumeRenderingRenderLayerOptions.md#multiscalesource)
- [renderScaleHistogram](volume_rendering_volume_render_layer.VolumeRenderingRenderLayerOptions.md#renderscalehistogram)
- [renderScaleTarget](volume_rendering_volume_render_layer.VolumeRenderingRenderLayerOptions.md#renderscaletarget)
- [shaderControlState](volume_rendering_volume_render_layer.VolumeRenderingRenderLayerOptions.md#shadercontrolstate)
- [shaderError](volume_rendering_volume_render_layer.VolumeRenderingRenderLayerOptions.md#shadererror)
- [transform](volume_rendering_volume_render_layer.VolumeRenderingRenderLayerOptions.md#transform)

## Properties

### channelCoordinateSpace

• **channelCoordinateSpace**: [`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`CoordinateSpace`](annotation_annotation_layer_state._internal_.CoordinateSpace.md)\>

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/volume_rendering/volume_render_layer.ts#L54)

___

### localPosition

• **localPosition**: [`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`Float32Array`\>

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:55](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/volume_rendering/volume_render_layer.ts#L55)

___

### multiscaleSource

• **multiscaleSource**: [`MultiscaleVolumeChunkSource`](../classes/datasource._internal_.MultiscaleVolumeChunkSource.md)

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/volume_rendering/volume_render_layer.ts#L50)

___

### renderScaleHistogram

• **renderScaleHistogram**: [`RenderScaleHistogram`](../classes/annotation_renderlayer._internal_.RenderScaleHistogram.md)

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/volume_rendering/volume_render_layer.ts#L57)

___

### renderScaleTarget

• **renderScaleTarget**: [`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`number`\>

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/volume_rendering/volume_render_layer.ts#L56)

___

### shaderControlState

• **shaderControlState**: [`ShaderControlState`](../classes/webgl_shader_ui_controls.ShaderControlState.md)

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/volume_rendering/volume_render_layer.ts#L53)

___

### shaderError

• **shaderError**: [`WatchableShaderError`](../modules/webgl_dynamic_shader.md#watchableshadererror)

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/volume_rendering/volume_render_layer.ts#L52)

___

### transform

• **transform**: [`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`RenderLayerTransformOrError`](../modules/annotation_annotation_layer_state._internal_.md#renderlayertransformorerror)\>

#### Defined in

[src/neuroglancer/volume_rendering/volume_render_layer.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/volume_rendering/volume_render_layer.ts#L51)
