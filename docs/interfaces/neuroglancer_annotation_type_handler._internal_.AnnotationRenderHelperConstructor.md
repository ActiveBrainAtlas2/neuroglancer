[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/annotation/type\_handler](../modules/neuroglancer_annotation_type_handler.md) / [<internal\>](../modules/neuroglancer_annotation_type_handler._internal_.md) / AnnotationRenderHelperConstructor

# Interface: AnnotationRenderHelperConstructor

[neuroglancer/annotation/type_handler](../modules/neuroglancer_annotation_type_handler.md).[<internal>](../modules/neuroglancer_annotation_type_handler._internal_.md).AnnotationRenderHelperConstructor

## Table of contents

### Constructors

- [constructor](neuroglancer_annotation_type_handler._internal_.AnnotationRenderHelperConstructor.md#constructor)

## Constructors

### constructor

• **new AnnotationRenderHelperConstructor**(`gl`, `annotationType`, `rank`, `properties`, `shaderControlState`, `fallbackShaderParameters`, `shaderError`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](neuroglancer_webgl_context.GL.md) |
| `annotationType` | [`AnnotationType`](../enums/neuroglancer_annotation.AnnotationType.md) |
| `rank` | `number` |
| `properties` | readonly [`Readonly`](../modules/neuroglancer_annotation_frontend_source._internal_.md#readonly)<[`AnnotationPropertySpec`](../modules/neuroglancer_annotation.md#annotationpropertyspec)\>[] |
| `shaderControlState` | [`ShaderControlState`](../classes/neuroglancer_webgl_shader_ui_controls.ShaderControlState.md) |
| `fallbackShaderParameters` | [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<[`ShaderControlsBuilderState`](neuroglancer_webgl_shader_ui_controls.ShaderControlsBuilderState.md)\> |
| `shaderError` | [`WatchableShaderError`](../modules/neuroglancer_webgl_dynamic_shader.md#watchableshadererror) |

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:441](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/type_handler.ts#L441)
