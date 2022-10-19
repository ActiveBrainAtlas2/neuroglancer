[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/annotation/renderlayer](neuroglancer_annotation_renderlayer.md) / <internal\>

# Module: <internal\>

## Table of contents

### Classes

- [AnnotationLayerSharedObject](../classes/neuroglancer_annotation_renderlayer._internal_.AnnotationLayerSharedObject.md)
- [C](../classes/neuroglancer_annotation_renderlayer._internal_.C.md)
- [SpatiallyIndexedAnnotationLayer](../classes/neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md)

### Interfaces

- [AnnotationChunkRenderParameters](../interfaces/neuroglancer_annotation_renderlayer._internal_.AnnotationChunkRenderParameters.md)
- [AnnotationGeometryDataInterface](../interfaces/neuroglancer_annotation_renderlayer._internal_.AnnotationGeometryDataInterface.md)
- [AttachmentState](../interfaces/neuroglancer_annotation_renderlayer._internal_.AttachmentState.md)
- [SpatiallyIndexedValidAttachmentState](../interfaces/neuroglancer_annotation_renderlayer._internal_.SpatiallyIndexedValidAttachmentState.md)
- [TransformedAnnotationSource](../interfaces/neuroglancer_annotation_renderlayer._internal_.TransformedAnnotationSource.md)

### Type Aliases

- [AnnotationRenderLayer](neuroglancer_annotation_renderlayer._internal_.md#annotationrenderlayer)
- [InstanceType](neuroglancer_annotation_renderlayer._internal_.md#instancetype)
- [Pick](neuroglancer_annotation_renderlayer._internal_.md#pick)
- [ReturnType](neuroglancer_annotation_renderlayer._internal_.md#returntype)

### Functions

- [AnnotationRenderLayer](neuroglancer_annotation_renderlayer._internal_.md#annotationrenderlayer-1)

## Type Aliases

### AnnotationRenderLayer

Ƭ **AnnotationRenderLayer**: [`InstanceType`](neuroglancer_annotation_renderlayer._internal_.md#instancetype)<[`ReturnType`](neuroglancer_annotation_renderlayer._internal_.md#returntype)<typeof [`AnnotationRenderLayer`](neuroglancer_annotation_renderlayer._internal_.md#annotationrenderlayer)\>\>

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:591](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/renderlayer.ts#L591)

___

### InstanceType

Ƭ **InstanceType**<`T`\>: `T` extends (...`args`: `any`) => infer R ? `R` : `any`

Obtain the return type of a constructor function type

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`) => `any` |

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1607

___

### Pick

Ƭ **Pick**<`T`, `K`\>: { [P in K]: T[P] }

From T, pick a set of properties whose keys are in the union K

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` |

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1558

___

### ReturnType

Ƭ **ReturnType**<`T`\>: `T` extends (...`args`: `any`) => infer R ? `R` : `any`

Obtain the return type of a function type

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`) => `any` |

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1602

## Functions

### AnnotationRenderLayer

▸ **AnnotationRenderLayer**<`TBase`\>(`Base`, `renderHelperType`): [`MixinConstructor`](neuroglancer_util_mixin.md#mixinconstructor)<typeof [`C`](../classes/neuroglancer_annotation_renderlayer._internal_.C.md), `TBase`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TBase` | extends [`AnyConstructor`](neuroglancer_util_mixin.md#anyconstructor)<[`VisibilityTrackedRenderLayer`](../classes/neuroglancer_renderlayer.VisibilityTrackedRenderLayer.md)<[`LayerView`](../interfaces/neuroglancer_layer.LayerView.md), `unknown`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `Base` | `TBase` |
| `renderHelperType` | ``"sliceViewRenderHelper"`` \| ``"perspectiveViewRenderHelper"`` |

#### Returns

[`MixinConstructor`](neuroglancer_util_mixin.md#mixinconstructor)<typeof [`C`](../classes/neuroglancer_annotation_renderlayer._internal_.C.md), `TBase`\>

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:315](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/renderlayer.ts#L315)
