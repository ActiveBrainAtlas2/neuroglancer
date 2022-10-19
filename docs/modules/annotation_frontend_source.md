[neuroglancer](../README.md) / [Modules](../modules.md) / annotation/frontend\_source

# Module: annotation/frontend\_source

## Table of contents

### Modules

- [&lt;internal\&gt;](annotation_frontend_source._internal_.md)

### Classes

- [AnnotationGeometryChunk](../classes/annotation_frontend_source.AnnotationGeometryChunk.md)
- [AnnotationGeometryChunkSource](../classes/annotation_frontend_source.AnnotationGeometryChunkSource.md)
- [AnnotationGeometryData](../classes/annotation_frontend_source.AnnotationGeometryData.md)
- [AnnotationMetadataChunk](../classes/annotation_frontend_source.AnnotationMetadataChunk.md)
- [AnnotationMetadataChunkSource](../classes/annotation_frontend_source.AnnotationMetadataChunkSource.md)
- [AnnotationSubsetGeometryChunk](../classes/annotation_frontend_source.AnnotationSubsetGeometryChunk.md)
- [AnnotationSubsetGeometryChunkSource](../classes/annotation_frontend_source.AnnotationSubsetGeometryChunkSource.md)
- [MultiscaleAnnotationSource](../classes/annotation_frontend_source.MultiscaleAnnotationSource.md)

### Interfaces

- [AnnotationGeometryChunkSourceOptions](../interfaces/annotation_frontend_source.AnnotationGeometryChunkSourceOptions.md)

### Functions

- [computeNumPickIds](annotation_frontend_source.md#computenumpickids)
- [deleteAnnotation](annotation_frontend_source.md#deleteannotation)
- [makeTemporaryChunk](annotation_frontend_source.md#maketemporarychunk)
- [updateAnnotation](annotation_frontend_source.md#updateannotation)

## Functions

### computeNumPickIds

▸ **computeNumPickIds**(`serializedAnnotations`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `serializedAnnotations` | [`SerializedAnnotations`](../interfaces/annotation.SerializedAnnotations.md) |

#### Returns

`number`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L38)

___

### deleteAnnotation

▸ **deleteAnnotation**(`chunk`, `type`, `id`, `propertySerializer`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`AnnotationGeometryData`](../classes/annotation_frontend_source.AnnotationGeometryData.md) |
| `type` | [`AnnotationType`](../enums/annotation.AnnotationType.md) |
| `id` | `string` |
| `propertySerializer` | [`AnnotationPropertySerializer`](../classes/annotation.AnnotationPropertySerializer.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:274](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L274)

___

### makeTemporaryChunk

▸ **makeTemporaryChunk**(): [`AnnotationGeometryChunk`](../classes/annotation_frontend_source.AnnotationGeometryChunk.md)

#### Returns

[`AnnotationGeometryChunk`](../classes/annotation_frontend_source.AnnotationGeometryChunk.md)

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:331](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L331)

___

### updateAnnotation

▸ **updateAnnotation**(`chunk`, `annotation`, `propertySerializer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`AnnotationGeometryData`](../classes/annotation_frontend_source.AnnotationGeometryData.md) |
| `annotation` | [`Annotation`](annotation.md#annotation) |
| `propertySerializer` | [`AnnotationPropertySerializer`](../classes/annotation.AnnotationPropertySerializer.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/frontend_source.ts:231](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/frontend_source.ts#L231)
