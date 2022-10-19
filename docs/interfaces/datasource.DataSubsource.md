[neuroglancer](../README.md) / [Modules](../modules.md) / [datasource](../modules/datasource.md) / DataSubsource

# Interface: DataSubsource

[datasource](../modules/datasource.md).DataSubsource

## Table of contents

### Properties

- [annotation](datasource.DataSubsource.md#annotation)
- [local](datasource.DataSubsource.md#local)
- [mesh](datasource.DataSubsource.md#mesh)
- [segmentPropertyMap](datasource.DataSubsource.md#segmentpropertymap)
- [segmentationGraph](datasource.DataSubsource.md#segmentationgraph)
- [singleMesh](datasource.DataSubsource.md#singlemesh)
- [staticAnnotations](datasource.DataSubsource.md#staticannotations)
- [volume](datasource.DataSubsource.md#volume)

## Properties

### annotation

• `Optional` **annotation**: [`MultiscaleAnnotationSource`](../classes/annotation_frontend_source.MultiscaleAnnotationSource.md)

#### Defined in

[src/neuroglancer/datasource/index.ts:119](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/datasource/index.ts#L119)

___

### local

• `Optional` **local**: [`LocalDataSource`](../enums/datasource.LocalDataSource.md)

#### Defined in

[src/neuroglancer/datasource/index.ts:121](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/datasource/index.ts#L121)

___

### mesh

• `Optional` **mesh**: [`SkeletonSource`](../classes/skeleton_frontend.SkeletonSource.md) \| [`MeshSource`](../classes/mesh_frontend.MeshSource.md) \| [`MultiscaleMeshSource`](../classes/mesh_frontend.MultiscaleMeshSource.md)

#### Defined in

[src/neuroglancer/datasource/index.ts:118](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/datasource/index.ts#L118)

___

### segmentPropertyMap

• `Optional` **segmentPropertyMap**: [`SegmentPropertyMap`](../classes/segmentation_display_state_property_map.SegmentPropertyMap.md)

#### Defined in

[src/neuroglancer/datasource/index.ts:123](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/datasource/index.ts#L123)

___

### segmentationGraph

• `Optional` **segmentationGraph**: [`SegmentationGraphSource`](../classes/segmentation_graph_source.SegmentationGraphSource.md)

#### Defined in

[src/neuroglancer/datasource/index.ts:124](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/datasource/index.ts#L124)

___

### singleMesh

• `Optional` **singleMesh**: [`SingleMeshSource`](../classes/single_mesh_frontend.SingleMeshSource.md)

#### Defined in

[src/neuroglancer/datasource/index.ts:122](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/datasource/index.ts#L122)

___

### staticAnnotations

• `Optional` **staticAnnotations**: [`AnnotationSource`](../classes/annotation.AnnotationSource.md)

#### Defined in

[src/neuroglancer/datasource/index.ts:120](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/datasource/index.ts#L120)

___

### volume

• `Optional` **volume**: [`MultiscaleVolumeChunkSource`](../classes/datasource._internal_.MultiscaleVolumeChunkSource.md)

#### Defined in

[src/neuroglancer/datasource/index.ts:117](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/datasource/index.ts#L117)
