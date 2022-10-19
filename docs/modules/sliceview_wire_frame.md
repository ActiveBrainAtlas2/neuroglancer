[neuroglancer](../README.md) / [Modules](../modules.md) / sliceview/wire\_frame

# Module: sliceview/wire\_frame

## Table of contents

### Variables

- [crossSectionBoxWireFrameShader](sliceview_wire_frame.md#crosssectionboxwireframeshader)
- [projectionViewBoxWireFrameShader](sliceview_wire_frame.md#projectionviewboxwireframeshader)

## Variables

### crossSectionBoxWireFrameShader

• `Const` **crossSectionBoxWireFrameShader**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `defineShader` | (`builder`: [`ShaderBuilder`](../classes/webgl_shader.ShaderBuilder.md)) => `void` |
| `draw` | (`shader`: [`ShaderProgram`](../classes/webgl_shader.ShaderProgram.md), `tsource`: [`TransformedSource`](../interfaces/sliceview_base.TransformedSource.md)<[`SliceViewRenderLayer`](../interfaces/sliceview_base.SliceViewRenderLayer.md), [`SliceViewChunkSource`](../interfaces/sliceview_base.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\>\>, `projectionParameters`: [`SliceViewProjectionParameters`](../classes/sliceview_base.SliceViewProjectionParameters.md)) => `void` |
| `initialize` | (`shader`: [`ShaderProgram`](../classes/webgl_shader.ShaderProgram.md), `projectionParameters`: [`SliceViewProjectionParameters`](../classes/sliceview_base.SliceViewProjectionParameters.md)) => `void` |

#### Defined in

[src/neuroglancer/sliceview/wire_frame.ts:107](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/wire_frame.ts#L107)

___

### projectionViewBoxWireFrameShader

• `Const` **projectionViewBoxWireFrameShader**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `defineShader` | (`builder`: [`ShaderBuilder`](../classes/webgl_shader.ShaderBuilder.md)) => `void` |
| `draw` | (`shader`: [`ShaderProgram`](../classes/webgl_shader.ShaderProgram.md), `tsource`: [`TransformedSource`](../interfaces/sliceview_base.TransformedSource.md)<[`SliceViewRenderLayer`](../interfaces/sliceview_base.SliceViewRenderLayer.md), [`SliceViewChunkSource`](../interfaces/sliceview_base.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](../interfaces/sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>\>\>, `projectionParameters`: [`ProjectionParameters`](../classes/annotation_base._internal_.ProjectionParameters.md)) => `void` |
| `initialize` | (`shader`: [`ShaderProgram`](../classes/webgl_shader.ShaderProgram.md), `projectionParameters`: [`ProjectionParameters`](../classes/annotation_base._internal_.ProjectionParameters.md)) => `void` |

#### Defined in

[src/neuroglancer/sliceview/wire_frame.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/wire_frame.ts#L46)
