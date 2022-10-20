[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/datasource](../modules/neuroglancer_datasource.md) / DataSubsource

# Interface: DataSubsource

[neuroglancer/datasource](../modules/neuroglancer_datasource.md).DataSubsource

## Table of contents

### Properties

- [annotation](neuroglancer_datasource.DataSubsource.md#annotation)
- [local](neuroglancer_datasource.DataSubsource.md#local)
- [mesh](neuroglancer_datasource.DataSubsource.md#mesh)
- [segmentPropertyMap](neuroglancer_datasource.DataSubsource.md#segmentpropertymap)
- [segmentationGraph](neuroglancer_datasource.DataSubsource.md#segmentationgraph)
- [singleMesh](neuroglancer_datasource.DataSubsource.md#singlemesh)
- [staticAnnotations](neuroglancer_datasource.DataSubsource.md#staticannotations)
- [volume](neuroglancer_datasource.DataSubsource.md#volume)

## Properties

### annotation

• `Optional` **annotation**: [`MultiscaleAnnotationSource`](../classes/neuroglancer_annotation_frontend_source.MultiscaleAnnotationSource.md)

#### Defined in

[src/neuroglancer/datasource/index.ts:119](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/index.ts#L119)

___

### local

• `Optional` **local**: [`LocalDataSource`](../enums/neuroglancer_datasource.LocalDataSource.md)

#### Defined in

[src/neuroglancer/datasource/index.ts:121](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/index.ts#L121)

___

### mesh

• `Optional` **mesh**: [`SkeletonSource`](../classes/neuroglancer_skeleton_frontend.SkeletonSource.md) \| [`MeshSource`](../classes/neuroglancer_mesh_frontend.MeshSource.md) \| [`MultiscaleMeshSource`](../classes/neuroglancer_mesh_frontend.MultiscaleMeshSource.md)

#### Defined in

[src/neuroglancer/datasource/index.ts:118](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/index.ts#L118)

___

### segmentPropertyMap

• `Optional` **segmentPropertyMap**: [`SegmentPropertyMap`](../classes/neuroglancer_segmentation_display_state_property_map.SegmentPropertyMap.md)

#### Defined in

[src/neuroglancer/datasource/index.ts:123](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/index.ts#L123)

___

### segmentationGraph

• `Optional` **segmentationGraph**: [`SegmentationGraphSource`](../classes/neuroglancer_segmentation_graph_source.SegmentationGraphSource.md)

#### Defined in

[src/neuroglancer/datasource/index.ts:124](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/index.ts#L124)

___

### singleMesh

• `Optional` **singleMesh**: [`SingleMeshSource`](../classes/neuroglancer_single_mesh_frontend.SingleMeshSource.md)

#### Defined in

[src/neuroglancer/datasource/index.ts:122](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/index.ts#L122)

___

### staticAnnotations

• `Optional` **staticAnnotations**: [`AnnotationSource`](../classes/neuroglancer_annotation.AnnotationSource.md)

#### Defined in

[src/neuroglancer/datasource/index.ts:120](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/index.ts#L120)

___

### volume

• `Optional` **volume**: [`MultiscaleVolumeChunkSource`](../classes/neuroglancer_sliceview_volume_frontend.MultiscaleVolumeChunkSource.md)

#### Defined in

[src/neuroglancer/datasource/index.ts:117](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/index.ts#L117)
