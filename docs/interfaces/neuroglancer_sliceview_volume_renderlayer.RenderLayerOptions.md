[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/volume/renderlayer](../modules/neuroglancer_sliceview_volume_renderlayer.md) / RenderLayerOptions

# Interface: RenderLayerOptions<ShaderParameters\>

[neuroglancer/sliceview/volume/renderlayer](../modules/neuroglancer_sliceview_volume_renderlayer.md).RenderLayerOptions

## Type parameters

| Name |
| :------ |
| `ShaderParameters` |

## Hierarchy

- [`RenderLayerBaseOptions`](neuroglancer_sliceview_volume_renderlayer.RenderLayerBaseOptions.md)

  ↳ **`RenderLayerOptions`**

## Table of contents

### Properties

- [channelCoordinateSpace](neuroglancer_sliceview_volume_renderlayer.RenderLayerOptions.md#channelcoordinatespace)
- [dataHistogramSpecifications](neuroglancer_sliceview_volume_renderlayer.RenderLayerOptions.md#datahistogramspecifications)
- [fallbackShaderParameters](neuroglancer_sliceview_volume_renderlayer.RenderLayerOptions.md#fallbackshaderparameters)
- [localPosition](neuroglancer_sliceview_volume_renderlayer.RenderLayerOptions.md#localposition)
- [renderScaleHistogram](neuroglancer_sliceview_volume_renderlayer.RenderLayerOptions.md#renderscalehistogram)
- [renderScaleTarget](neuroglancer_sliceview_volume_renderlayer.RenderLayerOptions.md#renderscaletarget)
- [shaderError](neuroglancer_sliceview_volume_renderlayer.RenderLayerOptions.md#shadererror)
- [shaderParameters](neuroglancer_sliceview_volume_renderlayer.RenderLayerOptions.md#shaderparameters)
- [transform](neuroglancer_sliceview_volume_renderlayer.RenderLayerOptions.md#transform)

### Methods

- [encodeShaderParameters](neuroglancer_sliceview_volume_renderlayer.RenderLayerOptions.md#encodeshaderparameters)

## Properties

### channelCoordinateSpace

• `Optional` **channelCoordinateSpace**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<[`CoordinateSpace`](neuroglancer_coordinate_transform.CoordinateSpace.md)\>

#### Inherited from

[RenderLayerBaseOptions](neuroglancer_sliceview_volume_renderlayer.RenderLayerBaseOptions.md).[channelCoordinateSpace](neuroglancer_sliceview_volume_renderlayer.RenderLayerBaseOptions.md#channelcoordinatespace)

#### Defined in

[src/neuroglancer/sliceview/volume/renderlayer.ts:207](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/renderlayer.ts#L207)

___

### dataHistogramSpecifications

• `Optional` **dataHistogramSpecifications**: [`HistogramSpecifications`](../classes/neuroglancer_webgl_empirical_cdf.HistogramSpecifications.md)

#### Inherited from

[RenderLayerBaseOptions](neuroglancer_sliceview_volume_renderlayer.RenderLayerBaseOptions.md).[dataHistogramSpecifications](neuroglancer_sliceview_volume_renderlayer.RenderLayerBaseOptions.md#datahistogramspecifications)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/renderlayer.ts#L47)

___

### fallbackShaderParameters

• `Optional` **fallbackShaderParameters**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`ShaderParameters`\>

#### Defined in

[src/neuroglancer/sliceview/volume/renderlayer.ts:211](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/renderlayer.ts#L211)

___

### localPosition

• **localPosition**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`Float32Array`\>

Specifies the position within the "local" coordinate space.

#### Inherited from

[RenderLayerBaseOptions](neuroglancer_sliceview_volume_renderlayer.RenderLayerBaseOptions.md).[localPosition](neuroglancer_sliceview_volume_renderlayer.RenderLayerBaseOptions.md#localposition)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/renderlayer.ts#L46)

___

### renderScaleHistogram

• `Optional` **renderScaleHistogram**: [`RenderScaleHistogram`](../classes/neuroglancer_render_scale_statistics.RenderScaleHistogram.md)

#### Inherited from

[RenderLayerBaseOptions](neuroglancer_sliceview_volume_renderlayer.RenderLayerBaseOptions.md).[renderScaleHistogram](neuroglancer_sliceview_volume_renderlayer.RenderLayerBaseOptions.md#renderscalehistogram)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/renderlayer.ts#L41)

___

### renderScaleTarget

• `Optional` **renderScaleTarget**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`number`\>

#### Inherited from

[RenderLayerBaseOptions](neuroglancer_sliceview_volume_renderlayer.RenderLayerBaseOptions.md).[renderScaleTarget](neuroglancer_sliceview_volume_renderlayer.RenderLayerBaseOptions.md#renderscaletarget)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/renderlayer.ts#L40)

___

### shaderError

• `Optional` **shaderError**: [`WatchableShaderError`](../modules/neuroglancer_webgl_dynamic_shader.md#watchableshadererror)

#### Inherited from

[RenderLayerBaseOptions](neuroglancer_sliceview_volume_renderlayer.RenderLayerBaseOptions.md).[shaderError](neuroglancer_sliceview_volume_renderlayer.RenderLayerBaseOptions.md#shadererror)

#### Defined in

[src/neuroglancer/sliceview/volume/renderlayer.ts:206](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/renderlayer.ts#L206)

___

### shaderParameters

• **shaderParameters**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`ShaderParameters`\>

#### Defined in

[src/neuroglancer/sliceview/volume/renderlayer.ts:212](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/renderlayer.ts#L212)

___

### transform

• **transform**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<[`RenderLayerTransformOrError`](../modules/neuroglancer_render_coordinate_transform.md#renderlayertransformorerror)\>

Specifies the transform from the "model" coordinate space (specified by the multiscale source)
to the "render layer" coordinate space.

#### Inherited from

[RenderLayerBaseOptions](neuroglancer_sliceview_volume_renderlayer.RenderLayerBaseOptions.md).[transform](neuroglancer_sliceview_volume_renderlayer.RenderLayerBaseOptions.md#transform)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/renderlayer.ts#L39)

## Methods

### encodeShaderParameters

▸ `Optional` **encodeShaderParameters**(`parameters`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | `ShaderParameters` |

#### Returns

`any`

#### Defined in

[src/neuroglancer/sliceview/volume/renderlayer.ts:213](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/renderlayer.ts#L213)
