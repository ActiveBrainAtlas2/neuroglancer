[neuroglancer](../README.md) / [Modules](../modules.md) / annotation/type\_handler

# Module: annotation/type\_handler

## Table of contents

### Modules

- [&lt;internal\&gt;](annotation_type_handler._internal_.md)

### Classes

- [AnnotationRenderHelper](../classes/annotation_type_handler.AnnotationRenderHelper.md)

### Interfaces

- [AnnotationRenderContext](../interfaces/annotation_type_handler.AnnotationRenderContext.md)

### Type Aliases

- [AnnotationShaderGetter](annotation_type_handler.md#annotationshadergetter)

### Functions

- [getAnnotationTypeRenderHandler](annotation_type_handler.md#getannotationtyperenderhandler)
- [registerAnnotationTypeRenderHandler](annotation_type_handler.md#registerannotationtyperenderhandler)

## Type Aliases

### AnnotationShaderGetter

Ƭ **AnnotationShaderGetter**: [`ParameterizedContextDependentShaderGetter`](../interfaces/webgl_dynamic_shader.ParameterizedContextDependentShaderGetter.md)<[`ShaderModule`](webgl_shader.md#shadermodule), [`ShaderControlsBuilderState`](../interfaces/webgl_shader_ui_controls.ShaderControlsBuilderState.md)\>

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/type_handler.ts#L32)

## Functions

### getAnnotationTypeRenderHandler

▸ **getAnnotationTypeRenderHandler**(`type`): [`AnnotationTypeRenderHandler`](../interfaces/annotation_type_handler._internal_.AnnotationTypeRenderHandler.md)<[`Annotation`](annotation.md#annotation)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`AnnotationType`](../enums/annotation.AnnotationType.md) |

#### Returns

[`AnnotationTypeRenderHandler`](../interfaces/annotation_type_handler._internal_.AnnotationTypeRenderHandler.md)<[`Annotation`](annotation.md#annotation)\>

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:466](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/type_handler.ts#L466)

___

### registerAnnotationTypeRenderHandler

▸ **registerAnnotationTypeRenderHandler**<`T`\>(`type`, `handler`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Annotation`](annotation.md#annotation) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`AnnotationType`](../enums/annotation.AnnotationType.md) |
| `handler` | [`AnnotationTypeRenderHandler`](../interfaces/annotation_type_handler._internal_.AnnotationTypeRenderHandler.md)<`T`\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:461](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/type_handler.ts#L461)
