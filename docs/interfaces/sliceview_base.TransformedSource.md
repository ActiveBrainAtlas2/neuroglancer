[neuroglancer](../README.md) / [Modules](../modules.md) / [sliceview/base](../modules/sliceview_base.md) / TransformedSource

# Interface: TransformedSource<RLayer, Source\>

[sliceview/base](../modules/sliceview_base.md).TransformedSource

## Type parameters

| Name | Type |
| :------ | :------ |
| `RLayer` | extends [`MultiscaleVolumetricDataRenderLayer`](sliceview_base.MultiscaleVolumetricDataRenderLayer.md) = [`SliceViewRenderLayer`](sliceview_base.SliceViewRenderLayer.md) |
| `Source` | extends [`SliceViewChunkSource`](sliceview_base.SliceViewChunkSource.md) = [`SliceViewChunkSource`](sliceview_base.SliceViewChunkSource.md) |

## Hierarchy

- **`TransformedSource`**

  ↳ [`FrontendTransformedSource`](sliceview_frontend.FrontendTransformedSource.md)

## Table of contents

### Properties

- [chunkDisplayDimensionIndices](sliceview_base.TransformedSource.md#chunkdisplaydimensionindices)
- [chunkLayout](sliceview_base.TransformedSource.md#chunklayout)
- [combinedGlobalLocalToChunkTransform](sliceview_base.TransformedSource.md#combinedgloballocaltochunktransform)
- [curPositionInChunks](sliceview_base.TransformedSource.md#curpositioninchunks)
- [effectiveVoxelSize](sliceview_base.TransformedSource.md#effectivevoxelsize)
- [fixedLayerToChunkTransform](sliceview_base.TransformedSource.md#fixedlayertochunktransform)
- [fixedPositionWithinChunk](sliceview_base.TransformedSource.md#fixedpositionwithinchunk)
- [layerRank](sliceview_base.TransformedSource.md#layerrank)
- [lowerChunkDisplayBound](sliceview_base.TransformedSource.md#lowerchunkdisplaybound)
- [lowerClipBound](sliceview_base.TransformedSource.md#lowerclipbound)
- [lowerClipDisplayBound](sliceview_base.TransformedSource.md#lowerclipdisplaybound)
- [nonDisplayLowerClipBound](sliceview_base.TransformedSource.md#nondisplaylowerclipbound)
- [nonDisplayUpperClipBound](sliceview_base.TransformedSource.md#nondisplayupperclipbound)
- [renderLayer](sliceview_base.TransformedSource.md#renderlayer)
- [source](sliceview_base.TransformedSource.md#source)
- [upperChunkDisplayBound](sliceview_base.TransformedSource.md#upperchunkdisplaybound)
- [upperClipBound](sliceview_base.TransformedSource.md#upperclipbound)
- [upperClipDisplayBound](sliceview_base.TransformedSource.md#upperclipdisplaybound)

## Properties

### chunkDisplayDimensionIndices

• **chunkDisplayDimensionIndices**: `number`[]

Dimensions of the chunk corresponding to the 3 display dimensions of the slice view.

#### Defined in

[src/neuroglancer/sliceview/base.ts:109](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L109)

___

### chunkLayout

• **chunkLayout**: [`ChunkLayout`](../classes/sliceview_chunk_layout.ChunkLayout.md)

#### Defined in

[src/neuroglancer/sliceview/base.ts:79](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L79)

___

### combinedGlobalLocalToChunkTransform

• **combinedGlobalLocalToChunkTransform**: `Float32Array`

Transform from dimensions of layer space to dimensions of chunk space.

Matrix has dimensions `(globalRank + localRank + 1) * layerRank`.

Input space is `[global dimensions, local dimensions]`.  Output space is the "chunk clip"
coordinate space, in units of voxels.

#### Defined in

[src/neuroglancer/sliceview/base.ts:125](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L125)

___

### curPositionInChunks

• **curPositionInChunks**: `Float32Array`

When `computeVisibleChunks` invokes the `addChunk` callback, this is set to the position of the
chunk.

#### Defined in

[src/neuroglancer/sliceview/base.ts:144](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L144)

___

### effectiveVoxelSize

• **effectiveVoxelSize**: [`vec3`](../classes/util_geom.vec3.md)

Approximate voxel size in each of the display dimensions.

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

#### Defined in

[src/neuroglancer/sliceview/base.ts:138](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L138)

___

### fixedPositionWithinChunk

• **fixedPositionWithinChunk**: `Uint32Array`

#### Defined in

[src/neuroglancer/sliceview/base.ts:146](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L146)

___

### layerRank

• **layerRank**: `number`

Rank of "layer" space and the "chunk clip" space, which is >= rank of chunk space.

#### Defined in

[src/neuroglancer/sliceview/base.ts:114](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L114)

___

### lowerChunkDisplayBound

• **lowerChunkDisplayBound**: [`vec3`](../classes/util_geom.vec3.md)

#### Defined in

[src/neuroglancer/sliceview/base.ts:102](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L102)

___

### lowerClipBound

• **lowerClipBound**: `Float32Array`

Arrays of length `rank` specifying the clip bounds (in voxels) for all dimensions.

#### Defined in

[src/neuroglancer/sliceview/base.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L92)

___

### lowerClipDisplayBound

• **lowerClipDisplayBound**: [`vec3`](../classes/util_geom.vec3.md)

#### Defined in

[src/neuroglancer/sliceview/base.ts:96](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L96)

___

### nonDisplayLowerClipBound

• **nonDisplayLowerClipBound**: `Float32Array`

Arrays of length `rank` specifying the clip bounds (in voxels) for dimensions not in
`chunkDisplayDimensionIndices` and not channel dimensions.  The values for display/channel
dimensions are set to -/+infinity.

#### Defined in

[src/neuroglancer/sliceview/base.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L86)

___

### nonDisplayUpperClipBound

• **nonDisplayUpperClipBound**: `Float32Array`

#### Defined in

[src/neuroglancer/sliceview/base.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L87)

___

### renderLayer

• **renderLayer**: `RLayer`

#### Defined in

[src/neuroglancer/sliceview/base.ts:70](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L70)

___

### source

• **source**: `Source`

#### Defined in

[src/neuroglancer/sliceview/base.ts:72](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L72)

___

### upperChunkDisplayBound

• **upperChunkDisplayBound**: [`vec3`](../classes/util_geom.vec3.md)

#### Defined in

[src/neuroglancer/sliceview/base.ts:104](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L104)

___

### upperClipBound

• **upperClipBound**: `Float32Array`

#### Defined in

[src/neuroglancer/sliceview/base.ts:93](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L93)

___

### upperClipDisplayBound

• **upperClipDisplayBound**: [`vec3`](../classes/util_geom.vec3.md)

#### Defined in

[src/neuroglancer/sliceview/base.ts:98](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/sliceview/base.ts#L98)
