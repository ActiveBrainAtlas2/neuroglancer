[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/sliceview/wire\_frame

# Module: neuroglancer/sliceview/wire\_frame

## Table of contents

### Variables

- [crossSectionBoxWireFrameShader](neuroglancer_sliceview_wire_frame.md#crosssectionboxwireframeshader)
- [projectionViewBoxWireFrameShader](neuroglancer_sliceview_wire_frame.md#projectionviewboxwireframeshader)

## Variables

### crossSectionBoxWireFrameShader

• `Const` **crossSectionBoxWireFrameShader**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `defineShader` | (`builder`: [`ShaderBuilder`](../classes/neuroglancer_webgl_shader.ShaderBuilder.md)) => `void` |
| `draw` | (`shader`: [`ShaderProgram`](../classes/neuroglancer_webgl_shader.ShaderProgram.md), `tsource`: [`TransformedSource`](../interfaces/neuroglancer_sliceview_base.TransformedSource.md)<[`SliceViewRenderLayer`](../interfaces/neuroglancer_sliceview_base.SliceViewRenderLayer.md), [`SliceViewChunkSource`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\>\>, `projectionParameters`: [`SliceViewProjectionParameters`](../classes/neuroglancer_sliceview_base.SliceViewProjectionParameters.md)) => `void` |
| `initialize` | (`shader`: [`ShaderProgram`](../classes/neuroglancer_webgl_shader.ShaderProgram.md), `projectionParameters`: [`SliceViewProjectionParameters`](../classes/neuroglancer_sliceview_base.SliceViewProjectionParameters.md)) => `void` |

#### Defined in

[src/neuroglancer/sliceview/wire_frame.ts:107](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/wire_frame.ts#L107)

___

### projectionViewBoxWireFrameShader

• `Const` **projectionViewBoxWireFrameShader**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `defineShader` | (`builder`: [`ShaderBuilder`](../classes/neuroglancer_webgl_shader.ShaderBuilder.md)) => `void` |
| `draw` | (`shader`: [`ShaderProgram`](../classes/neuroglancer_webgl_shader.ShaderProgram.md), `tsource`: [`TransformedSource`](../interfaces/neuroglancer_sliceview_base.TransformedSource.md)<[`SliceViewRenderLayer`](../interfaces/neuroglancer_sliceview_base.SliceViewRenderLayer.md), [`SliceViewChunkSource`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\>\>, `projectionParameters`: [`ProjectionParameters`](../classes/neuroglancer_projection_parameters.ProjectionParameters.md)) => `void` |
| `initialize` | (`shader`: [`ShaderProgram`](../classes/neuroglancer_webgl_shader.ShaderProgram.md), `projectionParameters`: [`ProjectionParameters`](../classes/neuroglancer_projection_parameters.ProjectionParameters.md)) => `void` |

#### Defined in

[src/neuroglancer/sliceview/wire_frame.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/wire_frame.ts#L46)
