[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/datasource/precomputed/backend

# Module: neuroglancer/datasource/precomputed/backend

## Table of contents

### Modules

- [&lt;internal\&gt;](neuroglancer_datasource_precomputed_backend._internal_.md)

### Classes

- [PrecomputedAnnotationSourceBackend](../classes/neuroglancer_datasource_precomputed_backend.PrecomputedAnnotationSourceBackend.md)
- [PrecomputedAnnotationSpatialIndexSourceBackend](../classes/neuroglancer_datasource_precomputed_backend.PrecomputedAnnotationSpatialIndexSourceBackend.md)
- [PrecomputedIndexedSegmentPropertySourceBackend](../classes/neuroglancer_datasource_precomputed_backend.PrecomputedIndexedSegmentPropertySourceBackend.md)
- [PrecomputedMeshSource](../classes/neuroglancer_datasource_precomputed_backend.PrecomputedMeshSource.md)
- [PrecomputedMultiscaleMeshSource](../classes/neuroglancer_datasource_precomputed_backend.PrecomputedMultiscaleMeshSource.md)
- [PrecomputedSkeletonSource](../classes/neuroglancer_datasource_precomputed_backend.PrecomputedSkeletonSource.md)
- [PrecomputedVolumeChunkSource](../classes/neuroglancer_datasource_precomputed_backend.PrecomputedVolumeChunkSource.md)

### Functions

- [decodeFragmentChunk](neuroglancer_datasource_precomputed_backend.md#decodefragmentchunk)
- [decodeManifestChunk](neuroglancer_datasource_precomputed_backend.md#decodemanifestchunk)

## Functions

### decodeFragmentChunk

▸ **decodeFragmentChunk**(`chunk`, `response`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`FragmentChunk`](../classes/neuroglancer_mesh_backend.FragmentChunk.md) |
| `response` | `ArrayBuffer` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/datasource/precomputed/backend.ts:315](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/precomputed/backend.ts#L315)

___

### decodeManifestChunk

▸ **decodeManifestChunk**(`chunk`, `response`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`ManifestChunk`](../classes/neuroglancer_mesh_backend.ManifestChunk.md) |
| `response` | `any` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/datasource/precomputed/backend.ts:311](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/precomputed/backend.ts#L311)
