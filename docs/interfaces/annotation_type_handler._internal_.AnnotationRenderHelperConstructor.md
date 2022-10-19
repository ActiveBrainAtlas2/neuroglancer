[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/type\_handler](../modules/annotation_type_handler.md) / [<internal\>](../modules/annotation_type_handler._internal_.md) / AnnotationRenderHelperConstructor

# Interface: AnnotationRenderHelperConstructor

[annotation/type_handler](../modules/annotation_type_handler.md).[<internal>](../modules/annotation_type_handler._internal_.md).AnnotationRenderHelperConstructor

## Table of contents

### Constructors

- [constructor](annotation_type_handler._internal_.AnnotationRenderHelperConstructor.md#constructor)

## Constructors

### constructor

• **new AnnotationRenderHelperConstructor**(`gl`, `annotationType`, `rank`, `properties`, `shaderControlState`, `fallbackShaderParameters`, `shaderError`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](webgl_context.GL.md) |
| `annotationType` | [`AnnotationType`](../enums/annotation.AnnotationType.md) |
| `rank` | `number` |
| `properties` | readonly [`Readonly`](../modules/annotation_annotation_layer_state._internal_.md#readonly)<[`AnnotationPropertySpec`](../modules/annotation.md#annotationpropertyspec)\>[] |
| `shaderControlState` | [`ShaderControlState`](../classes/webgl_shader_ui_controls.ShaderControlState.md) |
| `fallbackShaderParameters` | [`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`ShaderControlsBuilderState`](webgl_shader_ui_controls.ShaderControlsBuilderState.md)\> |
| `shaderError` | [`WatchableShaderError`](../modules/webgl_dynamic_shader.md#watchableshadererror) |

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:441](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/type_handler.ts#L441)
