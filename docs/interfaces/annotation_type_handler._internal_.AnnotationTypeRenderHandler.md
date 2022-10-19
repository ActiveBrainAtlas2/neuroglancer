[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/type\_handler](../modules/annotation_type_handler.md) / [<internal\>](../modules/annotation_type_handler._internal_.md) / AnnotationTypeRenderHandler

# Interface: AnnotationTypeRenderHandler<T\>

[annotation/type_handler](../modules/annotation_type_handler.md).[<internal>](../modules/annotation_type_handler._internal_.md).AnnotationTypeRenderHandler

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Annotation`](../modules/annotation.md#annotation) |

## Table of contents

### Properties

- [perspectiveViewRenderHelper](annotation_type_handler._internal_.AnnotationTypeRenderHandler.md#perspectiveviewrenderhelper)
- [pickIdsPerInstance](annotation_type_handler._internal_.AnnotationTypeRenderHandler.md#pickidsperinstance)
- [sliceViewRenderHelper](annotation_type_handler._internal_.AnnotationTypeRenderHandler.md#sliceviewrenderhelper)

### Methods

- [defineShaderNoOpSetters](annotation_type_handler._internal_.AnnotationTypeRenderHandler.md#defineshadernoopsetters)
- [getRepresentativePoint](annotation_type_handler._internal_.AnnotationTypeRenderHandler.md#getrepresentativepoint)
- [snapPosition](annotation_type_handler._internal_.AnnotationTypeRenderHandler.md#snapposition)
- [updateViaRepresentativePoint](annotation_type_handler._internal_.AnnotationTypeRenderHandler.md#updateviarepresentativepoint)

## Properties

### perspectiveViewRenderHelper

• **perspectiveViewRenderHelper**: [`AnnotationRenderHelperConstructor`](annotation_type_handler._internal_.AnnotationRenderHelperConstructor.md)

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:450](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/type_handler.ts#L450)

___

### pickIdsPerInstance

• **pickIdsPerInstance**: `number`

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:452](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/type_handler.ts#L452)

___

### sliceViewRenderHelper

• **sliceViewRenderHelper**: [`AnnotationRenderHelperConstructor`](annotation_type_handler._internal_.AnnotationRenderHelperConstructor.md)

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:451](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/type_handler.ts#L451)

## Methods

### defineShaderNoOpSetters

▸ **defineShaderNoOpSetters**(`builder`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`ShaderBuilder`](../classes/webgl_shader.ShaderBuilder.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:449](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/type_handler.ts#L449)

___

### getRepresentativePoint

▸ **getRepresentativePoint**(`out`, `annotation`, `partIndex`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | `Float32Array` |
| `annotation` | `T` |
| `partIndex` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:453](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/type_handler.ts#L453)

___

### snapPosition

▸ **snapPosition**(`position`, `data`, `offset`, `partIndex`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | `Float32Array` |
| `data` | `ArrayBuffer` |
| `offset` | `number` |
| `partIndex` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:455](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/type_handler.ts#L455)

___

### updateViaRepresentativePoint

▸ **updateViaRepresentativePoint**(`oldAnnotation`, `position`, `partIndex`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldAnnotation` | `T` |
| `position` | `Float32Array` |
| `partIndex` | `number` |

#### Returns

`T`

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:454](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/type_handler.ts#L454)
