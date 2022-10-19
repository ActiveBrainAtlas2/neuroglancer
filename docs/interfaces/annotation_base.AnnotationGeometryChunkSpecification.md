[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/base](../modules/annotation_base.md) / AnnotationGeometryChunkSpecification

# Interface: AnnotationGeometryChunkSpecification

[annotation/base](../modules/annotation_base.md).AnnotationGeometryChunkSpecification

## Hierarchy

- [`SliceViewChunkSpecification`](sliceview_base.SliceViewChunkSpecification.md)

  ↳ **`AnnotationGeometryChunkSpecification`**

## Table of contents

### Properties

- [chunkDataSize](annotation_base.AnnotationGeometryChunkSpecification.md#chunkdatasize)
- [chunkToMultiscaleTransform](annotation_base.AnnotationGeometryChunkSpecification.md#chunktomultiscaletransform)
- [limit](annotation_base.AnnotationGeometryChunkSpecification.md#limit)
- [lowerChunkBound](annotation_base.AnnotationGeometryChunkSpecification.md#lowerchunkbound)
- [lowerVoxelBound](annotation_base.AnnotationGeometryChunkSpecification.md#lowervoxelbound)
- [rank](annotation_base.AnnotationGeometryChunkSpecification.md#rank)
- [upperChunkBound](annotation_base.AnnotationGeometryChunkSpecification.md#upperchunkbound)
- [upperVoxelBound](annotation_base.AnnotationGeometryChunkSpecification.md#uppervoxelbound)

## Properties

### chunkDataSize

• **chunkDataSize**: `Uint32Array` \| `Float32Array`

Size of chunk in voxels.

#### Inherited from

[SliceViewChunkSpecification](sliceview_base.SliceViewChunkSpecification.md).[chunkDataSize](sliceview_base.SliceViewChunkSpecification.md#chunkdatasize)

#### Defined in

[src/neuroglancer/sliceview/base.ts:548](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L548)

___

### chunkToMultiscaleTransform

• **chunkToMultiscaleTransform**: `Float32Array`

Must equal the `chunkToMultiscaleTransform` in the `SliceViewSingleResolutionSource`.

#### Defined in

[src/neuroglancer/annotation/base.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/base.ts#L34)

___

### limit

• **limit**: `number`

Specifies the maximum density of annotations provided by this chunk source, as `limit` per the
chunk volume.  The higher the value, the sooner chunks from this source will be subsampled.  To
disable subsampling completely, set `limit` to 0.

#### Defined in

[src/neuroglancer/annotation/base.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/annotation/base.ts#L41)

___

### lowerChunkBound

• **lowerChunkBound**: `Float32Array`

All valid chunks are in the range [lowerChunkBound, upperChunkBound).

These are specified in units of chunks (not voxels).

#### Inherited from

[SliceViewChunkSpecification](sliceview_base.SliceViewChunkSpecification.md).[lowerChunkBound](sliceview_base.SliceViewChunkSpecification.md#lowerchunkbound)

#### Defined in

[src/neuroglancer/sliceview/base.ts:555](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L555)

___

### lowerVoxelBound

• **lowerVoxelBound**: `Float32Array`

#### Inherited from

[SliceViewChunkSpecification](sliceview_base.SliceViewChunkSpecification.md).[lowerVoxelBound](sliceview_base.SliceViewChunkSpecification.md#lowervoxelbound)

#### Defined in

[src/neuroglancer/sliceview/base.ts:558](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L558)

___

### rank

• **rank**: `number`

#### Inherited from

[SliceViewChunkSpecification](sliceview_base.SliceViewChunkSpecification.md).[rank](sliceview_base.SliceViewChunkSpecification.md#rank)

#### Defined in

[src/neuroglancer/sliceview/base.ts:543](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L543)

___

### upperChunkBound

• **upperChunkBound**: `Float32Array`

#### Inherited from

[SliceViewChunkSpecification](sliceview_base.SliceViewChunkSpecification.md).[upperChunkBound](sliceview_base.SliceViewChunkSpecification.md#upperchunkbound)

#### Defined in

[src/neuroglancer/sliceview/base.ts:556](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L556)

___

### upperVoxelBound

• **upperVoxelBound**: `Float32Array`

#### Inherited from

[SliceViewChunkSpecification](sliceview_base.SliceViewChunkSpecification.md).[upperVoxelBound](sliceview_base.SliceViewChunkSpecification.md#uppervoxelbound)

#### Defined in

[src/neuroglancer/sliceview/base.ts:559](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L559)
