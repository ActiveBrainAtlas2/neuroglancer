[neuroglancer](../README.md) / [Modules](../modules.md) / [volume\_rendering/volume\_render\_layer](../modules/volume_rendering_volume_render_layer.md) / [<internal\>](../modules/volume_rendering_volume_render_layer._internal_.md) / TransformedVolumeSource

# Interface: TransformedVolumeSource

[volume_rendering/volume_render_layer](../modules/volume_rendering_volume_render_layer.md).[<internal>](../modules/volume_rendering_volume_render_layer._internal_.md).TransformedVolumeSource

## Hierarchy

- [`FrontendTransformedSource`](sliceview_frontend.FrontendTransformedSource.md)<[`SliceViewRenderLayer`](../classes/sliceview_renderlayer.SliceViewRenderLayer.md), [`VolumeChunkSource`](../classes/datasource._internal_.VolumeChunkSource.md)\>

  ↳ **`TransformedVolumeSource`**

## Table of contents

### Properties

- [chunkDisplayDimensionIndices](volume_rendering_volume_render_layer._internal_.TransformedVolumeSource.md#chunkdisplaydimensionindices)
- [chunkDisplayTransform](volume_rendering_volume_render_layer._internal_.TransformedVolumeSource.md#chunkdisplaytransform)
- [chunkLayout](volume_rendering_volume_render_layer._internal_.TransformedVolumeSource.md#chunklayout)
- [chunkTransform](volume_rendering_volume_render_layer._internal_.TransformedVolumeSource.md#chunktransform)
- [combinedGlobalLocalToChunkTransform](volume_rendering_volume_render_layer._internal_.TransformedVolumeSource.md#combinedgloballocaltochunktransform)
- [curPositionInChunks](volume_rendering_volume_render_layer._internal_.TransformedVolumeSource.md#curpositioninchunks)
- [effectiveVoxelSize](volume_rendering_volume_render_layer._internal_.TransformedVolumeSource.md#effectivevoxelsize)
- [fixedLayerToChunkTransform](volume_rendering_volume_render_layer._internal_.TransformedVolumeSource.md#fixedlayertochunktransform)
- [fixedPositionWithinChunk](volume_rendering_volume_render_layer._internal_.TransformedVolumeSource.md#fixedpositionwithinchunk)
- [layerRank](volume_rendering_volume_render_layer._internal_.TransformedVolumeSource.md#layerrank)
- [lowerChunkDisplayBound](volume_rendering_volume_render_layer._internal_.TransformedVolumeSource.md#lowerchunkdisplaybound)
- [lowerClipBound](volume_rendering_volume_render_layer._internal_.TransformedVolumeSource.md#lowerclipbound)
- [lowerClipDisplayBound](volume_rendering_volume_render_layer._internal_.TransformedVolumeSource.md#lowerclipdisplaybound)
- [nonDisplayLowerClipBound](volume_rendering_volume_render_layer._internal_.TransformedVolumeSource.md#nondisplaylowerclipbound)
- [nonDisplayUpperClipBound](volume_rendering_volume_render_layer._internal_.TransformedVolumeSource.md#nondisplayupperclipbound)
- [renderLayer](volume_rendering_volume_render_layer._internal_.TransformedVolumeSource.md#renderlayer)
- [source](volume_rendering_volume_render_layer._internal_.TransformedVolumeSource.md#source)
- [upperChunkDisplayBound](volume_rendering_volume_render_layer._internal_.TransformedVolumeSource.md#upperchunkdisplaybound)
- [upperClipBound](volume_rendering_volume_render_layer._internal_.TransformedVolumeSource.md#upperclipbound)
- [upperClipDisplayBound](volume_rendering_volume_render_layer._internal_.TransformedVolumeSource.md#upperclipdisplaybound)

## Properties

### chunkDisplayDimensionIndices

• **chunkDisplayDimensionIndices**: `number`[]

Dimensions of the chunk corresponding to the 3 display dimensions of the slice view.

#### Inherited from

[FrontendTransformedSource](sliceview_frontend.FrontendTransformedSource.md).[chunkDisplayDimensionIndices](sliceview_frontend.FrontendTransformedSource.md#chunkdisplaydimensionindices)

#### Defined in

[src/neuroglancer/sliceview/base.ts:109](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L109)

___

### chunkDisplayTransform

• **chunkDisplayTransform**: [`ChunkDisplayTransformParameters`](annotation_renderlayer._internal_.ChunkDisplayTransformParameters.md)

#### Inherited from

[FrontendTransformedSource](sliceview_frontend.FrontendTransformedSource.md).[chunkDisplayTransform](sliceview_frontend.FrontendTransformedSource.md#chunkdisplaytransform)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L53)

___

### chunkLayout

• **chunkLayout**: [`ChunkLayout`](../classes/sliceview_chunk_layout.ChunkLayout.md)

#### Inherited from

[FrontendTransformedSource](sliceview_frontend.FrontendTransformedSource.md).[chunkLayout](sliceview_frontend.FrontendTransformedSource.md#chunklayout)

#### Defined in

[src/neuroglancer/sliceview/base.ts:79](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L79)

___

### chunkTransform

• **chunkTransform**: [`ChunkTransformParameters`](annotation_annotation_layer_state._internal_.ChunkTransformParameters.md)

#### Inherited from

[FrontendTransformedSource](sliceview_frontend.FrontendTransformedSource.md).[chunkTransform](sliceview_frontend.FrontendTransformedSource.md#chunktransform)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/frontend.ts#L52)

___

### combinedGlobalLocalToChunkTransform

• **combinedGlobalLocalToChunkTransform**: `Float32Array`

Transform from dimensions of layer space to dimensions of chunk space.

Matrix has dimensions `(globalRank + localRank + 1) * layerRank`.

Input space is `[global dimensions, local dimensions]`.  Output space is the "chunk clip"
coordinate space, in units of voxels.

#### Inherited from

[FrontendTransformedSource](sliceview_frontend.FrontendTransformedSource.md).[combinedGlobalLocalToChunkTransform](sliceview_frontend.FrontendTransformedSource.md#combinedgloballocaltochunktransform)

#### Defined in

[src/neuroglancer/sliceview/base.ts:125](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L125)

___

### curPositionInChunks

• **curPositionInChunks**: `Float32Array`

When `computeVisibleChunks` invokes the `addChunk` callback, this is set to the position of the
chunk.

#### Inherited from

[FrontendTransformedSource](sliceview_frontend.FrontendTransformedSource.md).[curPositionInChunks](sliceview_frontend.FrontendTransformedSource.md#curpositioninchunks)

#### Defined in

[src/neuroglancer/sliceview/base.ts:144](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L144)

___

### effectiveVoxelSize

• **effectiveVoxelSize**: [`vec3`](../classes/util_geom.vec3.md)

Approximate voxel size in each of the display dimensions.

#### Inherited from

[FrontendTransformedSource](sliceview_frontend.FrontendTransformedSource.md).[effectiveVoxelSize](sliceview_frontend.FrontendTransformedSource.md#effectivevoxelsize)

#### Defined in

[src/neuroglancer/sliceview/base.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L77)

___

### fixedLayerToChunkTransform

• **fixedLayerToChunkTransform**: `Float32Array`

Transform from non-display dimensions of layer space to non-display dimensions of chunk space.

Same as `combinedGlobalLocalToChunkTransform`, except that rows corresponding to "display"
chunk dimensions are all 0.

Matrix has dimensions `(globalRank + localRank + 1) * layerRank`.

Input space is `[global dimensions, local dimensions]`.  Output space is the "chunk clip"
coordinate space, in units of voxels.

#### Inherited from

[FrontendTransformedSource](sliceview_frontend.FrontendTransformedSource.md).[fixedLayerToChunkTransform](sliceview_frontend.FrontendTransformedSource.md#fixedlayertochunktransform)

#### Defined in

[src/neuroglancer/sliceview/base.ts:138](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L138)

___

### fixedPositionWithinChunk

• **fixedPositionWithinChunk**: `Uint32Array`

#### Inherited from

[FrontendTransformedSource](sliceview_frontend.FrontendTransformedSource.md).[fixedPositionWithinChunk](sliceview_frontend.FrontendTransformedSource.md#fixedpositionwithinchunk)

#### Defined in

[src/neuroglancer/sliceview/base.ts:146](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L146)

___

### layerRank

• **layerRank**: `number`

Rank of "layer" space and the "chunk clip" space, which is >= rank of chunk space.

#### Inherited from

[FrontendTransformedSource](sliceview_frontend.FrontendTransformedSource.md).[layerRank](sliceview_frontend.FrontendTransformedSource.md#layerrank)

#### Defined in

[src/neuroglancer/sliceview/base.ts:114](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L114)

___

### lowerChunkDisplayBound

• **lowerChunkDisplayBound**: [`vec3`](../classes/util_geom.vec3.md)

#### Inherited from

[FrontendTransformedSource](sliceview_frontend.FrontendTransformedSource.md).[lowerChunkDisplayBound](sliceview_frontend.FrontendTransformedSource.md#lowerchunkdisplaybound)

#### Defined in

[src/neuroglancer/sliceview/base.ts:102](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L102)

___

### lowerClipBound

• **lowerClipBound**: `Float32Array`

Arrays of length `rank` specifying the clip bounds (in voxels) for all dimensions.

#### Inherited from

[FrontendTransformedSource](sliceview_frontend.FrontendTransformedSource.md).[lowerClipBound](sliceview_frontend.FrontendTransformedSource.md#lowerclipbound)

#### Defined in

[src/neuroglancer/sliceview/base.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L92)

___

### lowerClipDisplayBound

• **lowerClipDisplayBound**: [`vec3`](../classes/util_geom.vec3.md)

#### Inherited from

[FrontendTransformedSource](sliceview_frontend.FrontendTransformedSource.md).[lowerClipDisplayBound](sliceview_frontend.FrontendTransformedSource.md#lowerclipdisplaybound)

#### Defined in

[src/neuroglancer/sliceview/base.ts:96](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L96)

___

### nonDisplayLowerClipBound

• **nonDisplayLowerClipBound**: `Float32Array`

Arrays of length `rank` specifying the clip bounds (in voxels) for dimensions not in
`chunkDisplayDimensionIndices` and not channel dimensions.  The values for display/channel
dimensions are set to -/+infinity.

#### Inherited from

[FrontendTransformedSource](sliceview_frontend.FrontendTransformedSource.md).[nonDisplayLowerClipBound](sliceview_frontend.FrontendTransformedSource.md#nondisplaylowerclipbound)

#### Defined in

[src/neuroglancer/sliceview/base.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L86)

___

### nonDisplayUpperClipBound

• **nonDisplayUpperClipBound**: `Float32Array`

#### Inherited from

[FrontendTransformedSource](sliceview_frontend.FrontendTransformedSource.md).[nonDisplayUpperClipBound](sliceview_frontend.FrontendTransformedSource.md#nondisplayupperclipbound)

#### Defined in

[src/neuroglancer/sliceview/base.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L87)

___

### renderLayer

• **renderLayer**: [`SliceViewRenderLayer`](../classes/sliceview_renderlayer.SliceViewRenderLayer.md)<[`SliceViewChunkSource`](../classes/sliceview_frontend.SliceViewChunkSource.md)<[`SliceViewChunkSpecification`](sliceview_base.SliceViewChunkSpecification.md)<`Uint32Array` \| `Float32Array`\>, [`SliceViewChunk`](../classes/sliceview_frontend.SliceViewChunk.md)\>, [`SliceViewSourceOptions`](sliceview_base.SliceViewSourceOptions.md)\>

#### Inherited from

[FrontendTransformedSource](sliceview_frontend.FrontendTransformedSource.md).[renderLayer](sliceview_frontend.FrontendTransformedSource.md#renderlayer)

#### Defined in

[src/neuroglancer/sliceview/base.ts:70](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L70)

___

### source

• **source**: [`VolumeChunkSource`](../classes/datasource._internal_.VolumeChunkSource.md)

#### Inherited from

[FrontendTransformedSource](sliceview_frontend.FrontendTransformedSource.md).[source](sliceview_frontend.FrontendTransformedSource.md#source)

#### Defined in

[src/neuroglancer/sliceview/base.ts:72](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L72)

___

### upperChunkDisplayBound

• **upperChunkDisplayBound**: [`vec3`](../classes/util_geom.vec3.md)

#### Inherited from

[FrontendTransformedSource](sliceview_frontend.FrontendTransformedSource.md).[upperChunkDisplayBound](sliceview_frontend.FrontendTransformedSource.md#upperchunkdisplaybound)

#### Defined in

[src/neuroglancer/sliceview/base.ts:104](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L104)

___

### upperClipBound

• **upperClipBound**: `Float32Array`

#### Inherited from

[FrontendTransformedSource](sliceview_frontend.FrontendTransformedSource.md).[upperClipBound](sliceview_frontend.FrontendTransformedSource.md#upperclipbound)

#### Defined in

[src/neuroglancer/sliceview/base.ts:93](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L93)

___

### upperClipDisplayBound

• **upperClipDisplayBound**: [`vec3`](../classes/util_geom.vec3.md)

#### Inherited from

[FrontendTransformedSource](sliceview_frontend.FrontendTransformedSource.md).[upperClipDisplayBound](sliceview_frontend.FrontendTransformedSource.md#upperclipdisplaybound)

#### Defined in

[src/neuroglancer/sliceview/base.ts:98](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L98)
