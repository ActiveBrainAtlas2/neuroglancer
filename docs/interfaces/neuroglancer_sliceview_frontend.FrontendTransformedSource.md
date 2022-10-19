[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/frontend](../modules/neuroglancer_sliceview_frontend.md) / FrontendTransformedSource

# Interface: FrontendTransformedSource<RLayer, Source\>

[neuroglancer/sliceview/frontend](../modules/neuroglancer_sliceview_frontend.md).FrontendTransformedSource

## Type parameters

| Name | Type |
| :------ | :------ |
| `RLayer` | extends [`SliceViewRenderLayer`](../classes/neuroglancer_sliceview_renderlayer.SliceViewRenderLayer.md) = [`SliceViewRenderLayer`](../classes/neuroglancer_sliceview_renderlayer.SliceViewRenderLayer.md) |
| `Source` | extends [`SliceViewChunkSource`](../classes/neuroglancer_sliceview_frontend.SliceViewChunkSource.md) = [`SliceViewChunkSource`](../classes/neuroglancer_sliceview_frontend.SliceViewChunkSource.md) |

## Hierarchy

- [`TransformedSource`](neuroglancer_sliceview_base.TransformedSource.md)<`RLayer`, `Source`\>

  ↳ **`FrontendTransformedSource`**

  ↳↳ [`TransformedAnnotationSource`](neuroglancer_annotation_renderlayer._internal_.TransformedAnnotationSource.md)

  ↳↳ [`TransformedVolumeSource`](neuroglancer_volume_rendering_volume_render_layer._internal_.TransformedVolumeSource.md)

## Table of contents

### Properties

- [chunkDisplayDimensionIndices](neuroglancer_sliceview_frontend.FrontendTransformedSource.md#chunkdisplaydimensionindices)
- [chunkDisplayTransform](neuroglancer_sliceview_frontend.FrontendTransformedSource.md#chunkdisplaytransform)
- [chunkLayout](neuroglancer_sliceview_frontend.FrontendTransformedSource.md#chunklayout)
- [chunkTransform](neuroglancer_sliceview_frontend.FrontendTransformedSource.md#chunktransform)
- [combinedGlobalLocalToChunkTransform](neuroglancer_sliceview_frontend.FrontendTransformedSource.md#combinedgloballocaltochunktransform)
- [curPositionInChunks](neuroglancer_sliceview_frontend.FrontendTransformedSource.md#curpositioninchunks)
- [effectiveVoxelSize](neuroglancer_sliceview_frontend.FrontendTransformedSource.md#effectivevoxelsize)
- [fixedLayerToChunkTransform](neuroglancer_sliceview_frontend.FrontendTransformedSource.md#fixedlayertochunktransform)
- [fixedPositionWithinChunk](neuroglancer_sliceview_frontend.FrontendTransformedSource.md#fixedpositionwithinchunk)
- [layerRank](neuroglancer_sliceview_frontend.FrontendTransformedSource.md#layerrank)
- [lowerChunkDisplayBound](neuroglancer_sliceview_frontend.FrontendTransformedSource.md#lowerchunkdisplaybound)
- [lowerClipBound](neuroglancer_sliceview_frontend.FrontendTransformedSource.md#lowerclipbound)
- [lowerClipDisplayBound](neuroglancer_sliceview_frontend.FrontendTransformedSource.md#lowerclipdisplaybound)
- [nonDisplayLowerClipBound](neuroglancer_sliceview_frontend.FrontendTransformedSource.md#nondisplaylowerclipbound)
- [nonDisplayUpperClipBound](neuroglancer_sliceview_frontend.FrontendTransformedSource.md#nondisplayupperclipbound)
- [renderLayer](neuroglancer_sliceview_frontend.FrontendTransformedSource.md#renderlayer)
- [source](neuroglancer_sliceview_frontend.FrontendTransformedSource.md#source)
- [upperChunkDisplayBound](neuroglancer_sliceview_frontend.FrontendTransformedSource.md#upperchunkdisplaybound)
- [upperClipBound](neuroglancer_sliceview_frontend.FrontendTransformedSource.md#upperclipbound)
- [upperClipDisplayBound](neuroglancer_sliceview_frontend.FrontendTransformedSource.md#upperclipdisplaybound)

## Properties

### chunkDisplayDimensionIndices

• **chunkDisplayDimensionIndices**: `number`[]

Dimensions of the chunk corresponding to the 3 display dimensions of the slice view.

#### Inherited from

[TransformedSource](neuroglancer_sliceview_base.TransformedSource.md).[chunkDisplayDimensionIndices](neuroglancer_sliceview_base.TransformedSource.md#chunkdisplaydimensionindices)

#### Defined in

[src/neuroglancer/sliceview/base.ts:109](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L109)

___

### chunkDisplayTransform

• **chunkDisplayTransform**: [`ChunkDisplayTransformParameters`](neuroglancer_render_coordinate_transform.ChunkDisplayTransformParameters.md)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/frontend.ts#L53)

___

### chunkLayout

• **chunkLayout**: [`ChunkLayout`](../classes/neuroglancer_sliceview_chunk_layout.ChunkLayout.md)

#### Inherited from

[TransformedSource](neuroglancer_sliceview_base.TransformedSource.md).[chunkLayout](neuroglancer_sliceview_base.TransformedSource.md#chunklayout)

#### Defined in

[src/neuroglancer/sliceview/base.ts:79](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L79)

___

### chunkTransform

• **chunkTransform**: [`ChunkTransformParameters`](neuroglancer_render_coordinate_transform.ChunkTransformParameters.md)

#### Defined in

[src/neuroglancer/sliceview/frontend.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/frontend.ts#L52)

___

### combinedGlobalLocalToChunkTransform

• **combinedGlobalLocalToChunkTransform**: `Float32Array`

Transform from dimensions of layer space to dimensions of chunk space.

Matrix has dimensions `(globalRank + localRank + 1) * layerRank`.

Input space is `[global dimensions, local dimensions]`.  Output space is the "chunk clip"
coordinate space, in units of voxels.

#### Inherited from

[TransformedSource](neuroglancer_sliceview_base.TransformedSource.md).[combinedGlobalLocalToChunkTransform](neuroglancer_sliceview_base.TransformedSource.md#combinedgloballocaltochunktransform)

#### Defined in

[src/neuroglancer/sliceview/base.ts:125](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L125)

___

### curPositionInChunks

• **curPositionInChunks**: `Float32Array`

When `computeVisibleChunks` invokes the `addChunk` callback, this is set to the position of the
chunk.

#### Inherited from

[TransformedSource](neuroglancer_sliceview_base.TransformedSource.md).[curPositionInChunks](neuroglancer_sliceview_base.TransformedSource.md#curpositioninchunks)

#### Defined in

[src/neuroglancer/sliceview/base.ts:144](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L144)

___

### effectiveVoxelSize

• **effectiveVoxelSize**: [`vec3`](../classes/neuroglancer_util_geom.vec3.md)

Approximate voxel size in each of the display dimensions.

#### Inherited from

[TransformedSource](neuroglancer_sliceview_base.TransformedSource.md).[effectiveVoxelSize](neuroglancer_sliceview_base.TransformedSource.md#effectivevoxelsize)

#### Defined in

[src/neuroglancer/sliceview/base.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L77)

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

[TransformedSource](neuroglancer_sliceview_base.TransformedSource.md).[fixedLayerToChunkTransform](neuroglancer_sliceview_base.TransformedSource.md#fixedlayertochunktransform)

#### Defined in

[src/neuroglancer/sliceview/base.ts:138](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L138)

___

### fixedPositionWithinChunk

• **fixedPositionWithinChunk**: `Uint32Array`

#### Inherited from

[TransformedSource](neuroglancer_sliceview_base.TransformedSource.md).[fixedPositionWithinChunk](neuroglancer_sliceview_base.TransformedSource.md#fixedpositionwithinchunk)

#### Defined in

[src/neuroglancer/sliceview/base.ts:146](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L146)

___

### layerRank

• **layerRank**: `number`

Rank of "layer" space and the "chunk clip" space, which is >= rank of chunk space.

#### Inherited from

[TransformedSource](neuroglancer_sliceview_base.TransformedSource.md).[layerRank](neuroglancer_sliceview_base.TransformedSource.md#layerrank)

#### Defined in

[src/neuroglancer/sliceview/base.ts:114](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L114)

___

### lowerChunkDisplayBound

• **lowerChunkDisplayBound**: [`vec3`](../classes/neuroglancer_util_geom.vec3.md)

#### Inherited from

[TransformedSource](neuroglancer_sliceview_base.TransformedSource.md).[lowerChunkDisplayBound](neuroglancer_sliceview_base.TransformedSource.md#lowerchunkdisplaybound)

#### Defined in

[src/neuroglancer/sliceview/base.ts:102](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L102)

___

### lowerClipBound

• **lowerClipBound**: `Float32Array`

Arrays of length `rank` specifying the clip bounds (in voxels) for all dimensions.

#### Inherited from

[TransformedSource](neuroglancer_sliceview_base.TransformedSource.md).[lowerClipBound](neuroglancer_sliceview_base.TransformedSource.md#lowerclipbound)

#### Defined in

[src/neuroglancer/sliceview/base.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L92)

___

### lowerClipDisplayBound

• **lowerClipDisplayBound**: [`vec3`](../classes/neuroglancer_util_geom.vec3.md)

#### Inherited from

[TransformedSource](neuroglancer_sliceview_base.TransformedSource.md).[lowerClipDisplayBound](neuroglancer_sliceview_base.TransformedSource.md#lowerclipdisplaybound)

#### Defined in

[src/neuroglancer/sliceview/base.ts:96](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L96)

___

### nonDisplayLowerClipBound

• **nonDisplayLowerClipBound**: `Float32Array`

Arrays of length `rank` specifying the clip bounds (in voxels) for dimensions not in
`chunkDisplayDimensionIndices` and not channel dimensions.  The values for display/channel
dimensions are set to -/+infinity.

#### Inherited from

[TransformedSource](neuroglancer_sliceview_base.TransformedSource.md).[nonDisplayLowerClipBound](neuroglancer_sliceview_base.TransformedSource.md#nondisplaylowerclipbound)

#### Defined in

[src/neuroglancer/sliceview/base.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L86)

___

### nonDisplayUpperClipBound

• **nonDisplayUpperClipBound**: `Float32Array`

#### Inherited from

[TransformedSource](neuroglancer_sliceview_base.TransformedSource.md).[nonDisplayUpperClipBound](neuroglancer_sliceview_base.TransformedSource.md#nondisplayupperclipbound)

#### Defined in

[src/neuroglancer/sliceview/base.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L87)

___

### renderLayer

• **renderLayer**: `RLayer`

#### Inherited from

[TransformedSource](neuroglancer_sliceview_base.TransformedSource.md).[renderLayer](neuroglancer_sliceview_base.TransformedSource.md#renderlayer)

#### Defined in

[src/neuroglancer/sliceview/base.ts:70](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L70)

___

### source

• **source**: `Source`

#### Inherited from

[TransformedSource](neuroglancer_sliceview_base.TransformedSource.md).[source](neuroglancer_sliceview_base.TransformedSource.md#source)

#### Defined in

[src/neuroglancer/sliceview/base.ts:72](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L72)

___

### upperChunkDisplayBound

• **upperChunkDisplayBound**: [`vec3`](../classes/neuroglancer_util_geom.vec3.md)

#### Inherited from

[TransformedSource](neuroglancer_sliceview_base.TransformedSource.md).[upperChunkDisplayBound](neuroglancer_sliceview_base.TransformedSource.md#upperchunkdisplaybound)

#### Defined in

[src/neuroglancer/sliceview/base.ts:104](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L104)

___

### upperClipBound

• **upperClipBound**: `Float32Array`

#### Inherited from

[TransformedSource](neuroglancer_sliceview_base.TransformedSource.md).[upperClipBound](neuroglancer_sliceview_base.TransformedSource.md#upperclipbound)

#### Defined in

[src/neuroglancer/sliceview/base.ts:93](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L93)

___

### upperClipDisplayBound

• **upperClipDisplayBound**: [`vec3`](../classes/neuroglancer_util_geom.vec3.md)

#### Inherited from

[TransformedSource](neuroglancer_sliceview_base.TransformedSource.md).[upperClipDisplayBound](neuroglancer_sliceview_base.TransformedSource.md#upperclipdisplaybound)

#### Defined in

[src/neuroglancer/sliceview/base.ts:98](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L98)
