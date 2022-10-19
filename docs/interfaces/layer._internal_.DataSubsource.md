[neuroglancer](../README.md) / [Modules](../modules.md) / [layer](../modules/layer.md) / [<internal\>](../modules/layer._internal_.md) / DataSubsource

# Interface: DataSubsource

[layer](../modules/layer.md).[<internal>](../modules/layer._internal_.md).DataSubsource

## Table of contents

### Properties

- [annotation](layer._internal_.DataSubsource.md#annotation)
- [local](layer._internal_.DataSubsource.md#local)
- [mesh](layer._internal_.DataSubsource.md#mesh)
- [segmentPropertyMap](layer._internal_.DataSubsource.md#segmentpropertymap)
- [segmentationGraph](layer._internal_.DataSubsource.md#segmentationgraph)
- [singleMesh](layer._internal_.DataSubsource.md#singlemesh)
- [staticAnnotations](layer._internal_.DataSubsource.md#staticannotations)
- [volume](layer._internal_.DataSubsource.md#volume)

## Properties

### annotation

• `Optional` **annotation**: [`MultiscaleAnnotationSource`](../classes/image_user_layer._internal_.MultiscaleAnnotationSource.md)

#### Defined in

[src/neuroglancer/datasource/index.ts:119](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/datasource/index.ts#L119)

___

### local

• `Optional` **local**: [`LocalDataSource`](../enums/layer._internal_.LocalDataSource.md)

#### Defined in

[src/neuroglancer/datasource/index.ts:121](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/datasource/index.ts#L121)

___

### mesh

• `Optional` **mesh**: [`SkeletonSource`](../classes/layer._internal_.SkeletonSource.md) \| [`MeshSource`](../classes/layer._internal_.MeshSource.md) \| [`MultiscaleMeshSource`](../classes/layer._internal_.MultiscaleMeshSource.md)

#### Defined in

[src/neuroglancer/datasource/index.ts:118](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/datasource/index.ts#L118)

___

### segmentPropertyMap

• `Optional` **segmentPropertyMap**: [`SegmentPropertyMap`](../classes/image_user_layer._internal_.SegmentPropertyMap.md)

#### Defined in

[src/neuroglancer/datasource/index.ts:123](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/datasource/index.ts#L123)

___

### segmentationGraph

• `Optional` **segmentationGraph**: [`SegmentationGraphSource`](../classes/layer._internal_.SegmentationGraphSource.md)

#### Defined in

[src/neuroglancer/datasource/index.ts:124](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/datasource/index.ts#L124)

___

### singleMesh

• `Optional` **singleMesh**: [`SingleMeshSource`](../classes/layer._internal_.SingleMeshSource.md)

#### Defined in

[src/neuroglancer/datasource/index.ts:122](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/datasource/index.ts#L122)

___

### staticAnnotations

• `Optional` **staticAnnotations**: [`AnnotationSource`](../classes/image_user_layer._internal_.AnnotationSource.md)

#### Defined in

[src/neuroglancer/datasource/index.ts:120](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/datasource/index.ts#L120)

___

### volume

• `Optional` **volume**: [`MultiscaleVolumeChunkSource`](../classes/layer._internal_.MultiscaleVolumeChunkSource.md)

#### Defined in

[src/neuroglancer/datasource/index.ts:117](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/datasource/index.ts#L117)
