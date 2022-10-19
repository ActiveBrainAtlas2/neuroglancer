[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/renderlayer](annotation_renderlayer.md) / <internal\>

# Module: <internal\>

## Table of contents

### Classes

- [AnnotationLayerSharedObject](../classes/annotation_renderlayer._internal_.AnnotationLayerSharedObject.md)
- [C](../classes/annotation_renderlayer._internal_.C.md)
- [PickIDManager](../classes/annotation_renderlayer._internal_.PickIDManager.md)
- [RenderScaleHistogram](../classes/annotation_renderlayer._internal_.RenderScaleHistogram.md)
- [SpatiallyIndexedAnnotationLayer](../classes/annotation_renderlayer._internal_.SpatiallyIndexedAnnotationLayer.md)
- [VisibilityTrackedRenderLayer](../classes/annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md)
- [VisibleLayerInfo](../classes/annotation_renderlayer._internal_.VisibleLayerInfo.md)

### Interfaces

- [AnnotationChunkRenderParameters](../interfaces/annotation_renderlayer._internal_.AnnotationChunkRenderParameters.md)
- [AnnotationGeometryDataInterface](../interfaces/annotation_renderlayer._internal_.AnnotationGeometryDataInterface.md)
- [AttachmentState](../interfaces/annotation_renderlayer._internal_.AttachmentState.md)
- [ChunkDisplayTransformParameters](../interfaces/annotation_renderlayer._internal_.ChunkDisplayTransformParameters.md)
- [LayerView](../interfaces/annotation_renderlayer._internal_.LayerView.md)
- [NestedStateManager](../interfaces/annotation_renderlayer._internal_.NestedStateManager.md)
- [SpatiallyIndexedValidAttachmentState](../interfaces/annotation_renderlayer._internal_.SpatiallyIndexedValidAttachmentState.md)
- [ThreeDimensionalReadyRenderContext](../interfaces/annotation_renderlayer._internal_.ThreeDimensionalReadyRenderContext.md)
- [ThreeDimensionalRenderContext](../interfaces/annotation_renderlayer._internal_.ThreeDimensionalRenderContext.md)
- [TransformedAnnotationSource](../interfaces/annotation_renderlayer._internal_.TransformedAnnotationSource.md)

### Type Aliases

- [AnnotationRenderLayer](annotation_renderlayer._internal_.md#annotationrenderlayer)
- [InstanceType](annotation_renderlayer._internal_.md#instancetype)
- [Pick](annotation_renderlayer._internal_.md#pick)

### Functions

- [AnnotationRenderLayer](annotation_renderlayer._internal_.md#annotationrenderlayer-1)

## Type Aliases

### AnnotationRenderLayer

Ƭ **AnnotationRenderLayer**: [`InstanceType`](annotation_renderlayer._internal_.md#instancetype)<[`ReturnType`](annotation_annotation_layer_state._internal_.md#returntype)<typeof [`AnnotationRenderLayer`](annotation_renderlayer._internal_.md#annotationrenderlayer)\>\>

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:591](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/renderlayer.ts#L591)

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

## Functions

### AnnotationRenderLayer

▸ **AnnotationRenderLayer**<`TBase`\>(`Base`, `renderHelperType`): [`MixinConstructor`](util_mixin.md#mixinconstructor)<typeof [`C`](../classes/annotation_renderlayer._internal_.C.md), `TBase`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TBase` | extends [`AnyConstructor`](util_mixin.md#anyconstructor)<[`VisibilityTrackedRenderLayer`](../classes/annotation_renderlayer._internal_.VisibilityTrackedRenderLayer.md)<[`LayerView`](../interfaces/annotation_renderlayer._internal_.LayerView.md), `unknown`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `Base` | `TBase` |
| `renderHelperType` | ``"sliceViewRenderHelper"`` \| ``"perspectiveViewRenderHelper"`` |

#### Returns

[`MixinConstructor`](util_mixin.md#mixinconstructor)<typeof [`C`](../classes/annotation_renderlayer._internal_.C.md), `TBase`\>

#### Defined in

[src/neuroglancer/annotation/renderlayer.ts:315](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/renderlayer.ts#L315)
