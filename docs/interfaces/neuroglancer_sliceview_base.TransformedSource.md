[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/base](../modules/neuroglancer_sliceview_base.md) / TransformedSource

# Interface: TransformedSource<RLayer, Source\>

[neuroglancer/sliceview/base](../modules/neuroglancer_sliceview_base.md).TransformedSource

## Type parameters

| Name | Type |
| :------ | :------ |
| `RLayer` | extends [`MultiscaleVolumetricDataRenderLayer`](neuroglancer_sliceview_base.MultiscaleVolumetricDataRenderLayer.md) = [`SliceViewRenderLayer`](neuroglancer_sliceview_base.SliceViewRenderLayer.md) |
| `Source` | extends [`SliceViewChunkSource`](neuroglancer_sliceview_base.SliceViewChunkSource.md) = [`SliceViewChunkSource`](neuroglancer_sliceview_base.SliceViewChunkSource.md) |

## Hierarchy

- **`TransformedSource`**

  ↳ [`FrontendTransformedSource`](neuroglancer_sliceview_frontend.FrontendTransformedSource.md)

## Table of contents

### Properties

- [chunkDisplayDimensionIndices](neuroglancer_sliceview_base.TransformedSource.md#chunkdisplaydimensionindices)
- [chunkLayout](neuroglancer_sliceview_base.TransformedSource.md#chunklayout)
- [combinedGlobalLocalToChunkTransform](neuroglancer_sliceview_base.TransformedSource.md#combinedgloballocaltochunktransform)
- [curPositionInChunks](neuroglancer_sliceview_base.TransformedSource.md#curpositioninchunks)
- [effectiveVoxelSize](neuroglancer_sliceview_base.TransformedSource.md#effectivevoxelsize)
- [fixedLayerToChunkTransform](neuroglancer_sliceview_base.TransformedSource.md#fixedlayertochunktransform)
- [fixedPositionWithinChunk](neuroglancer_sliceview_base.TransformedSource.md#fixedpositionwithinchunk)
- [layerRank](neuroglancer_sliceview_base.TransformedSource.md#layerrank)
- [lowerChunkDisplayBound](neuroglancer_sliceview_base.TransformedSource.md#lowerchunkdisplaybound)
- [lowerClipBound](neuroglancer_sliceview_base.TransformedSource.md#lowerclipbound)
- [lowerClipDisplayBound](neuroglancer_sliceview_base.TransformedSource.md#lowerclipdisplaybound)
- [nonDisplayLowerClipBound](neuroglancer_sliceview_base.TransformedSource.md#nondisplaylowerclipbound)
- [nonDisplayUpperClipBound](neuroglancer_sliceview_base.TransformedSource.md#nondisplayupperclipbound)
- [renderLayer](neuroglancer_sliceview_base.TransformedSource.md#renderlayer)
- [source](neuroglancer_sliceview_base.TransformedSource.md#source)
- [upperChunkDisplayBound](neuroglancer_sliceview_base.TransformedSource.md#upperchunkdisplaybound)
- [upperClipBound](neuroglancer_sliceview_base.TransformedSource.md#upperclipbound)
- [upperClipDisplayBound](neuroglancer_sliceview_base.TransformedSource.md#upperclipdisplaybound)

## Properties

### chunkDisplayDimensionIndices

• **chunkDisplayDimensionIndices**: `number`[]

Dimensions of the chunk corresponding to the 3 display dimensions of the slice view.

#### Defined in

[src/neuroglancer/sliceview/base.ts:109](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L109)

___

### chunkLayout

• **chunkLayout**: [`ChunkLayout`](../classes/neuroglancer_sliceview_chunk_layout.ChunkLayout.md)

#### Defined in

[src/neuroglancer/sliceview/base.ts:79](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L79)

___

### combinedGlobalLocalToChunkTransform

• **combinedGlobalLocalToChunkTransform**: `Float32Array`

Transform from dimensions of layer space to dimensions of chunk space.

Matrix has dimensions `(globalRank + localRank + 1) * layerRank`.

Input space is `[global dimensions, local dimensions]`.  Output space is the "chunk clip"
coordinate space, in units of voxels.

#### Defined in

[src/neuroglancer/sliceview/base.ts:125](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L125)

___

### curPositionInChunks

• **curPositionInChunks**: `Float32Array`

When `computeVisibleChunks` invokes the `addChunk` callback, this is set to the position of the
chunk.

#### Defined in

[src/neuroglancer/sliceview/base.ts:144](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L144)

___

### effectiveVoxelSize

• **effectiveVoxelSize**: [`vec3`](../classes/neuroglancer_util_geom.vec3.md)

Approximate voxel size in each of the display dimensions.

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

#### Defined in

[src/neuroglancer/sliceview/base.ts:138](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L138)

___

### fixedPositionWithinChunk

• **fixedPositionWithinChunk**: `Uint32Array`

#### Defined in

[src/neuroglancer/sliceview/base.ts:146](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L146)

___

### layerRank

• **layerRank**: `number`

Rank of "layer" space and the "chunk clip" space, which is >= rank of chunk space.

#### Defined in

[src/neuroglancer/sliceview/base.ts:114](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L114)

___

### lowerChunkDisplayBound

• **lowerChunkDisplayBound**: [`vec3`](../classes/neuroglancer_util_geom.vec3.md)

#### Defined in

[src/neuroglancer/sliceview/base.ts:102](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L102)

___

### lowerClipBound

• **lowerClipBound**: `Float32Array`

Arrays of length `rank` specifying the clip bounds (in voxels) for all dimensions.

#### Defined in

[src/neuroglancer/sliceview/base.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L92)

___

### lowerClipDisplayBound

• **lowerClipDisplayBound**: [`vec3`](../classes/neuroglancer_util_geom.vec3.md)

#### Defined in

[src/neuroglancer/sliceview/base.ts:96](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L96)

___

### nonDisplayLowerClipBound

• **nonDisplayLowerClipBound**: `Float32Array`

Arrays of length `rank` specifying the clip bounds (in voxels) for dimensions not in
`chunkDisplayDimensionIndices` and not channel dimensions.  The values for display/channel
dimensions are set to -/+infinity.

#### Defined in

[src/neuroglancer/sliceview/base.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L86)

___

### nonDisplayUpperClipBound

• **nonDisplayUpperClipBound**: `Float32Array`

#### Defined in

[src/neuroglancer/sliceview/base.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L87)

___

### renderLayer

• **renderLayer**: `RLayer`

#### Defined in

[src/neuroglancer/sliceview/base.ts:70](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L70)

___

### source

• **source**: `Source`

#### Defined in

[src/neuroglancer/sliceview/base.ts:72](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L72)

___

### upperChunkDisplayBound

• **upperChunkDisplayBound**: [`vec3`](../classes/neuroglancer_util_geom.vec3.md)

#### Defined in

[src/neuroglancer/sliceview/base.ts:104](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L104)

___

### upperClipBound

• **upperClipBound**: `Float32Array`

#### Defined in

[src/neuroglancer/sliceview/base.ts:93](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L93)

___

### upperClipDisplayBound

• **upperClipDisplayBound**: [`vec3`](../classes/neuroglancer_util_geom.vec3.md)

#### Defined in

[src/neuroglancer/sliceview/base.ts:98](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/base.ts#L98)
