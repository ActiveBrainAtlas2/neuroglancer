[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/annotation/type\_handler](../modules/neuroglancer_annotation_type_handler.md) / [<internal\>](../modules/neuroglancer_annotation_type_handler._internal_.md) / AnnotationTypeRenderHandler

# Interface: AnnotationTypeRenderHandler<T\>

[neuroglancer/annotation/type_handler](../modules/neuroglancer_annotation_type_handler.md).[<internal>](../modules/neuroglancer_annotation_type_handler._internal_.md).AnnotationTypeRenderHandler

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Annotation`](../modules/neuroglancer_annotation.md#annotation) |

## Table of contents

### Properties

- [defineShaderNoOpSetters](neuroglancer_annotation_type_handler._internal_.AnnotationTypeRenderHandler.md#defineshadernoopsetters)
- [perspectiveViewRenderHelper](neuroglancer_annotation_type_handler._internal_.AnnotationTypeRenderHandler.md#perspectiveviewrenderhelper)
- [pickIdsPerInstance](neuroglancer_annotation_type_handler._internal_.AnnotationTypeRenderHandler.md#pickidsperinstance)
- [sliceViewRenderHelper](neuroglancer_annotation_type_handler._internal_.AnnotationTypeRenderHandler.md#sliceviewrenderhelper)

### Methods

- [getRepresentativePoint](neuroglancer_annotation_type_handler._internal_.AnnotationTypeRenderHandler.md#getrepresentativepoint)
- [snapPosition](neuroglancer_annotation_type_handler._internal_.AnnotationTypeRenderHandler.md#snapposition)
- [updateViaRepresentativePoint](neuroglancer_annotation_type_handler._internal_.AnnotationTypeRenderHandler.md#updateviarepresentativepoint)

## Properties

### defineShaderNoOpSetters

• **defineShaderNoOpSetters**: (`builder`: [`ShaderBuilder`](../classes/neuroglancer_webgl_shader.ShaderBuilder.md)) => `void`

#### Type declaration

▸ (`builder`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`ShaderBuilder`](../classes/neuroglancer_webgl_shader.ShaderBuilder.md) |

##### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:449](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/type_handler.ts#L449)

___

### perspectiveViewRenderHelper

• **perspectiveViewRenderHelper**: [`AnnotationRenderHelperConstructor`](neuroglancer_annotation_type_handler._internal_.AnnotationRenderHelperConstructor.md)

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:450](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/type_handler.ts#L450)

___

### pickIdsPerInstance

• **pickIdsPerInstance**: `number`

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:452](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/type_handler.ts#L452)

___

### sliceViewRenderHelper

• **sliceViewRenderHelper**: [`AnnotationRenderHelperConstructor`](neuroglancer_annotation_type_handler._internal_.AnnotationRenderHelperConstructor.md)

#### Defined in

[src/neuroglancer/annotation/type_handler.ts:451](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/type_handler.ts#L451)

## Methods

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

[src/neuroglancer/annotation/type_handler.ts:453](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/type_handler.ts#L453)

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

[src/neuroglancer/annotation/type_handler.ts:455](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/type_handler.ts#L455)

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

[src/neuroglancer/annotation/type_handler.ts:454](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/type_handler.ts#L454)
