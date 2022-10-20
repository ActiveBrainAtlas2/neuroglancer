[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/annotation/base

# Module: neuroglancer/annotation/base

## Table of contents

### Interfaces

- [AnnotationGeometryChunkSpecification](../interfaces/neuroglancer_annotation_base.AnnotationGeometryChunkSpecification.md)

### Variables

- [ANNOTATION\_COMMIT\_UPDATE\_RESULT\_RPC\_ID](neuroglancer_annotation_base.md#annotation_commit_update_result_rpc_id)
- [ANNOTATION\_COMMIT\_UPDATE\_RPC\_ID](neuroglancer_annotation_base.md#annotation_commit_update_rpc_id)
- [ANNOTATION\_GEOMETRY\_CHUNK\_SOURCE\_RPC\_ID](neuroglancer_annotation_base.md#annotation_geometry_chunk_source_rpc_id)
- [ANNOTATION\_METADATA\_CHUNK\_SOURCE\_RPC\_ID](neuroglancer_annotation_base.md#annotation_metadata_chunk_source_rpc_id)
- [ANNOTATION\_PERSPECTIVE\_RENDER\_LAYER\_UPDATE\_SOURCES\_RPC\_ID](neuroglancer_annotation_base.md#annotation_perspective_render_layer_update_sources_rpc_id)
- [ANNOTATION\_REFERENCE\_ADD\_RPC\_ID](neuroglancer_annotation_base.md#annotation_reference_add_rpc_id)
- [ANNOTATION\_REFERENCE\_DELETE\_RPC\_ID](neuroglancer_annotation_base.md#annotation_reference_delete_rpc_id)
- [ANNOTATION\_RENDER\_LAYER\_RPC\_ID](neuroglancer_annotation_base.md#annotation_render_layer_rpc_id)
- [ANNOTATION\_RENDER\_LAYER\_UPDATE\_SEGMENTATION\_RPC\_ID](neuroglancer_annotation_base.md#annotation_render_layer_update_segmentation_rpc_id)
- [ANNOTATION\_SPATIALLY\_INDEXED\_RENDER\_LAYER\_RPC\_ID](neuroglancer_annotation_base.md#annotation_spatially_indexed_render_layer_rpc_id)
- [ANNOTATION\_SUBSET\_GEOMETRY\_CHUNK\_SOURCE\_RPC\_ID](neuroglancer_annotation_base.md#annotation_subset_geometry_chunk_source_rpc_id)

### Functions

- [forEachVisibleAnnotationChunk](neuroglancer_annotation_base.md#foreachvisibleannotationchunk)

## Variables

### ANNOTATION\_COMMIT\_UPDATE\_RESULT\_RPC\_ID

• `Const` **ANNOTATION\_COMMIT\_UPDATE\_RESULT\_RPC\_ID**: ``"annotation.commit"``

#### Defined in

[src/neuroglancer/annotation/base.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/base.ts#L28)

___

### ANNOTATION\_COMMIT\_UPDATE\_RPC\_ID

• `Const` **ANNOTATION\_COMMIT\_UPDATE\_RPC\_ID**: ``"annotation.commit"``

#### Defined in

[src/neuroglancer/annotation/base.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/base.ts#L27)

___

### ANNOTATION\_GEOMETRY\_CHUNK\_SOURCE\_RPC\_ID

• `Const` **ANNOTATION\_GEOMETRY\_CHUNK\_SOURCE\_RPC\_ID**: ``"annotation.GeometryChunkSource"``

#### Defined in

[src/neuroglancer/annotation/base.ts:22](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/base.ts#L22)

___

### ANNOTATION\_METADATA\_CHUNK\_SOURCE\_RPC\_ID

• `Const` **ANNOTATION\_METADATA\_CHUNK\_SOURCE\_RPC\_ID**: ``"annotation.MetadataChunkSource"``

#### Defined in

[src/neuroglancer/annotation/base.ts:21](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/base.ts#L21)

___

### ANNOTATION\_PERSPECTIVE\_RENDER\_LAYER\_UPDATE\_SOURCES\_RPC\_ID

• `Const` **ANNOTATION\_PERSPECTIVE\_RENDER\_LAYER\_UPDATE\_SOURCES\_RPC\_ID**: ``"annotation/PerspectiveRenderLayer:updateSources"``

#### Defined in

[src/neuroglancer/annotation/base.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/base.ts#L46)

___

### ANNOTATION\_REFERENCE\_ADD\_RPC\_ID

• `Const` **ANNOTATION\_REFERENCE\_ADD\_RPC\_ID**: ``"annotation.reference.add"``

#### Defined in

[src/neuroglancer/annotation/base.ts:25](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/base.ts#L25)

___

### ANNOTATION\_REFERENCE\_DELETE\_RPC\_ID

• `Const` **ANNOTATION\_REFERENCE\_DELETE\_RPC\_ID**: ``"annotation.reference.delete"``

#### Defined in

[src/neuroglancer/annotation/base.ts:26](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/base.ts#L26)

___

### ANNOTATION\_RENDER\_LAYER\_RPC\_ID

• `Const` **ANNOTATION\_RENDER\_LAYER\_RPC\_ID**: ``"annotation/RenderLayer"``

#### Defined in

[src/neuroglancer/annotation/base.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/base.ts#L48)

___

### ANNOTATION\_RENDER\_LAYER\_UPDATE\_SEGMENTATION\_RPC\_ID

• `Const` **ANNOTATION\_RENDER\_LAYER\_UPDATE\_SEGMENTATION\_RPC\_ID**: ``"annotation/RenderLayer.updateSegmentation"``

#### Defined in

[src/neuroglancer/annotation/base.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/base.ts#L49)

___

### ANNOTATION\_SPATIALLY\_INDEXED\_RENDER\_LAYER\_RPC\_ID

• `Const` **ANNOTATION\_SPATIALLY\_INDEXED\_RENDER\_LAYER\_RPC\_ID**: ``"annotation/SpatiallyIndexedRenderLayer"``

#### Defined in

[src/neuroglancer/annotation/base.ts:44](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/base.ts#L44)

___

### ANNOTATION\_SUBSET\_GEOMETRY\_CHUNK\_SOURCE\_RPC\_ID

• `Const` **ANNOTATION\_SUBSET\_GEOMETRY\_CHUNK\_SOURCE\_RPC\_ID**: ``"annotation.SubsetGeometryChunkSource"``

#### Defined in

[src/neuroglancer/annotation/base.ts:23](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/base.ts#L23)

## Functions

### forEachVisibleAnnotationChunk

▸ **forEachVisibleAnnotationChunk**<`RLayer`, `Source`, `Transformed`\>(`projectionParameters`, `localPosition`, `renderScaleTarget`, `transformedSources`, `beginScale`, `callback`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RLayer` | extends [`MultiscaleVolumetricDataRenderLayer`](../interfaces/neuroglancer_sliceview_base.MultiscaleVolumetricDataRenderLayer.md) |
| `Source` | extends [`SliceViewChunkSource`](../interfaces/neuroglancer_sliceview_base.SliceViewChunkSource.md)<[`AnnotationGeometryChunkSpecification`](../interfaces/neuroglancer_annotation_base.AnnotationGeometryChunkSpecification.md), `Source`\> |
| `Transformed` | extends [`TransformedSource`](../interfaces/neuroglancer_sliceview_base.TransformedSource.md)<`RLayer`, `Source`, `Transformed`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `projectionParameters` | [`ProjectionParameters`](../classes/neuroglancer_projection_parameters.ProjectionParameters.md) |
| `localPosition` | `Float32Array` |
| `renderScaleTarget` | `number` |
| `transformedSources` | readonly `Transformed`[] |
| `beginScale` | (`source`: `Transformed`, `index`: `number`) => `void` |
| `callback` | (`source`: `Transformed`, `index`: `number`, `drawFraction`: `number`, `physicalSpacing`: `number`, `pixelSpacing`: `number`) => `void` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/annotation/base.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/annotation/base.ts#L54)
