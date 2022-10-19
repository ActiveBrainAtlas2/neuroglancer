[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/annotation/type\_handler

# Module: neuroglancer/annotation/type\_handler

## Table of contents

### Modules

- [&lt;internal\&gt;](neuroglancer_annotation_type_handler._internal_.md)

### Classes

- [AnnotationRenderHelper](../classes/neuroglancer_annotation_type_handler.AnnotationRenderHelper.md)

### Interfaces

- [AnnotationRenderContext](../interfaces/neuroglancer_annotation_type_handler.AnnotationRenderContext.md)

### Type Aliases

- [AnnotationShaderGetter](neuroglancer_annotation_type_handler.md#annotationshadergetter)

### Functions

- [getAnnotationTypeRenderHandler](neuroglancer_annotation_type_handler.md#getannotationtyperenderhandler)
- [registerAnnotationTypeRenderHandler](neuroglancer_annotation_type_handler.md#registerannotationtyperenderhandler)

## Type Aliases

### AnnotationShaderGetter

Ƭ **AnnotationShaderGetter**: [`ParameterizedContextDependentShaderGetter`](../interfaces/neuroglancer_webgl_dynamic_shader.ParameterizedContextDependentShaderGetter.md)<[`ShaderModule`](neuroglancer_webgl_shader.md#shadermodule), [`ShaderControlsBuilderState`](../interfaces/neuroglancer_webgl_shader_ui_controls.ShaderControlsBuilderState.md)\>

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/type_handler.ts#L32)

## Functions

### getAnnotationTypeRenderHandler

▸ **getAnnotationTypeRenderHandler**(`type`): [`AnnotationTypeRenderHandler`](../interfaces/neuroglancer_annotation_type_handler._internal_.AnnotationTypeRenderHandler.md)<[`Annotation`](neuroglancer_annotation.md#annotation)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`AnnotationType`](../enums/neuroglancer_annotation.AnnotationType.md) |

#### Returns

[`AnnotationTypeRenderHandler`](../interfaces/neuroglancer_annotation_type_handler._internal_.AnnotationTypeRenderHandler.md)<[`Annotation`](neuroglancer_annotation.md#annotation)\>

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:466](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/type_handler.ts#L466)

___

### registerAnnotationTypeRenderHandler

▸ **registerAnnotationTypeRenderHandler**<`T`\>(`type`, `handler`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Annotation`](neuroglancer_annotation.md#annotation) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`AnnotationType`](../enums/neuroglancer_annotation.AnnotationType.md) |
| `handler` | [`AnnotationTypeRenderHandler`](../interfaces/neuroglancer_annotation_type_handler._internal_.AnnotationTypeRenderHandler.md)<`T`\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:461](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/type_handler.ts#L461)
