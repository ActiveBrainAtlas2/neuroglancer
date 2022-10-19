[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/annotation/frontend\_source

# Module: neuroglancer/annotation/frontend\_source

## Table of contents

### Modules

- [&lt;internal\&gt;](neuroglancer_annotation_frontend_source._internal_.md)

### Classes

- [AnnotationGeometryChunk](../classes/neuroglancer_annotation_frontend_source.AnnotationGeometryChunk.md)
- [AnnotationGeometryChunkSource](../classes/neuroglancer_annotation_frontend_source.AnnotationGeometryChunkSource.md)
- [AnnotationGeometryData](../classes/neuroglancer_annotation_frontend_source.AnnotationGeometryData.md)
- [AnnotationMetadataChunk](../classes/neuroglancer_annotation_frontend_source.AnnotationMetadataChunk.md)
- [AnnotationMetadataChunkSource](../classes/neuroglancer_annotation_frontend_source.AnnotationMetadataChunkSource.md)
- [AnnotationSubsetGeometryChunk](../classes/neuroglancer_annotation_frontend_source.AnnotationSubsetGeometryChunk.md)
- [AnnotationSubsetGeometryChunkSource](../classes/neuroglancer_annotation_frontend_source.AnnotationSubsetGeometryChunkSource.md)
- [MultiscaleAnnotationSource](../classes/neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md)

### Interfaces

- [AnnotationGeometryChunkSourceOptions](../interfaces/neuroglancer_annotation_frontend_source.AnnotationGeometryChunkSourceOptions.md)

### Functions

- [computeNumPickIds](neuroglancer_annotation_frontend_source.md#computenumpickids)
- [deleteAnnotation](neuroglancer_annotation_frontend_source.md#deleteannotation)
- [makeTemporaryChunk](neuroglancer_annotation_frontend_source.md#maketemporarychunk)
- [updateAnnotation](neuroglancer_annotation_frontend_source.md#updateannotation)

## Functions

### computeNumPickIds

▸ **computeNumPickIds**(`serializedAnnotations`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `serializedAnnotations` | [`SerializedAnnotations`](../interfaces/neuroglancer_annotation.SerializedAnnotations.md) |

#### Returns

`number`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/frontend_source.ts#L38)

___

### deleteAnnotation

▸ **deleteAnnotation**(`chunk`, `type`, `id`, `propertySerializer`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`AnnotationGeometryData`](../classes/neuroglancer_annotation_frontend_source.AnnotationGeometryData.md) |
| `type` | [`AnnotationType`](../enums/neuroglancer_annotation.AnnotationType.md) |
| `id` | `string` |
| `propertySerializer` | [`AnnotationPropertySerializer`](../classes/neuroglancer_annotation.AnnotationPropertySerializer.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:274](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/frontend_source.ts#L274)

___

### makeTemporaryChunk

▸ **makeTemporaryChunk**(): [`AnnotationGeometryChunk`](../classes/neuroglancer_annotation_frontend_source.AnnotationGeometryChunk.md)

#### Returns

[`AnnotationGeometryChunk`](../classes/neuroglancer_annotation_frontend_source.AnnotationGeometryChunk.md)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:331](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/frontend_source.ts#L331)

___

### updateAnnotation

▸ **updateAnnotation**(`chunk`, `annotation`, `propertySerializer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`AnnotationGeometryData`](../classes/neuroglancer_annotation_frontend_source.AnnotationGeometryData.md) |
| `annotation` | [`Annotation`](neuroglancer_annotation.md#annotation) |
| `propertySerializer` | [`AnnotationPropertySerializer`](../classes/neuroglancer_annotation.AnnotationPropertySerializer.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:231](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/annotation/frontend_source.ts#L231)
