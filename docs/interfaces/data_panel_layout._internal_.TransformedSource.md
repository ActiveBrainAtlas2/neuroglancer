[neuroglancer](../README.md) / [Modules](../modules.md) / [data\_panel\_layout](../modules/data_panel_layout.md) / [<internal\>](../modules/data_panel_layout._internal_.md) / TransformedSource

# Interface: TransformedSource<RLayer, Source\>

[data_panel_layout](../modules/data_panel_layout.md).[<internal>](../modules/data_panel_layout._internal_.md).TransformedSource

## Type parameters

| Name | Type |
| :------ | :------ |
| `RLayer` | extends [`MultiscaleVolumetricDataRenderLayer`](data_panel_layout._internal_.MultiscaleVolumetricDataRenderLayer.md) = [`SliceViewRenderLayer`](data_panel_layout._internal_.SliceViewRenderLayer-1.md) |
| `Source` | extends [`SliceViewChunkSource`](data_panel_layout._internal_.SliceViewChunkSource-1.md) = [`SliceViewChunkSource`](data_panel_layout._internal_.SliceViewChunkSource-1.md) |

## Hierarchy

- **`TransformedSource`**

  ↳ [`FrontendTransformedSource`](data_panel_layout._internal_.FrontendTransformedSource.md)

## Table of contents

### Properties

- [chunkDisplayDimensionIndices](data_panel_layout._internal_.TransformedSource.md#chunkdisplaydimensionindices)
- [chunkLayout](data_panel_layout._internal_.TransformedSource.md#chunklayout)
- [combinedGlobalLocalToChunkTransform](data_panel_layout._internal_.TransformedSource.md#combinedgloballocaltochunktransform)
- [curPositionInChunks](data_panel_layout._internal_.TransformedSource.md#curpositioninchunks)
- [effectiveVoxelSize](data_panel_layout._internal_.TransformedSource.md#effectivevoxelsize)
- [fixedLayerToChunkTransform](data_panel_layout._internal_.TransformedSource.md#fixedlayertochunktransform)
- [fixedPositionWithinChunk](data_panel_layout._internal_.TransformedSource.md#fixedpositionwithinchunk)
- [layerRank](data_panel_layout._internal_.TransformedSource.md#layerrank)
- [lowerChunkDisplayBound](data_panel_layout._internal_.TransformedSource.md#lowerchunkdisplaybound)
- [lowerClipBound](data_panel_layout._internal_.TransformedSource.md#lowerclipbound)
- [lowerClipDisplayBound](data_panel_layout._internal_.TransformedSource.md#lowerclipdisplaybound)
- [nonDisplayLowerClipBound](data_panel_layout._internal_.TransformedSource.md#nondisplaylowerclipbound)
- [nonDisplayUpperClipBound](data_panel_layout._internal_.TransformedSource.md#nondisplayupperclipbound)
- [renderLayer](data_panel_layout._internal_.TransformedSource.md#renderlayer)
- [source](data_panel_layout._internal_.TransformedSource.md#source)
- [upperChunkDisplayBound](data_panel_layout._internal_.TransformedSource.md#upperchunkdisplaybound)
- [upperClipBound](data_panel_layout._internal_.TransformedSource.md#upperclipbound)
- [upperClipDisplayBound](data_panel_layout._internal_.TransformedSource.md#upperclipdisplaybound)

## Properties

### chunkDisplayDimensionIndices

• **chunkDisplayDimensionIndices**: `number`[]

Dimensions of the chunk corresponding to the 3 display dimensions of the slice view.

#### Defined in

[src/neuroglancer/sliceview/base.ts:109](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L109)

___

### chunkLayout

• **chunkLayout**: [`ChunkLayout`](../classes/data_panel_layout._internal_.ChunkLayout.md)

#### Defined in

[src/neuroglancer/sliceview/base.ts:79](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L79)

___

### combinedGlobalLocalToChunkTransform

• **combinedGlobalLocalToChunkTransform**: `Float32Array`

Transform from dimensions of layer space to dimensions of chunk space.

Matrix has dimensions `(globalRank + localRank + 1) * layerRank`.

Input space is `[global dimensions, local dimensions]`.  Output space is the "chunk clip"
coordinate space, in units of voxels.

#### Defined in

[src/neuroglancer/sliceview/base.ts:125](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L125)

___

### curPositionInChunks

• **curPositionInChunks**: `Float32Array`

When `computeVisibleChunks` invokes the `addChunk` callback, this is set to the position of the
chunk.

#### Defined in

[src/neuroglancer/sliceview/base.ts:144](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L144)

___

### effectiveVoxelSize

• **effectiveVoxelSize**: [`vec3`](../classes/axes_lines._internal_.vec3.md)

Approximate voxel size in each of the display dimensions.

#### Defined in

[src/neuroglancer/sliceview/base.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L77)

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

[src/neuroglancer/sliceview/base.ts:138](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L138)

___

### fixedPositionWithinChunk

• **fixedPositionWithinChunk**: `Uint32Array`

#### Defined in

[src/neuroglancer/sliceview/base.ts:146](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L146)

___

### layerRank

• **layerRank**: `number`

Rank of "layer" space and the "chunk clip" space, which is >= rank of chunk space.

#### Defined in

[src/neuroglancer/sliceview/base.ts:114](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L114)

___

### lowerChunkDisplayBound

• **lowerChunkDisplayBound**: [`vec3`](../classes/axes_lines._internal_.vec3.md)

#### Defined in

[src/neuroglancer/sliceview/base.ts:102](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L102)

___

### lowerClipBound

• **lowerClipBound**: `Float32Array`

Arrays of length `rank` specifying the clip bounds (in voxels) for all dimensions.

#### Defined in

[src/neuroglancer/sliceview/base.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L92)

___

### lowerClipDisplayBound

• **lowerClipDisplayBound**: [`vec3`](../classes/axes_lines._internal_.vec3.md)

#### Defined in

[src/neuroglancer/sliceview/base.ts:96](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L96)

___

### nonDisplayLowerClipBound

• **nonDisplayLowerClipBound**: `Float32Array`

Arrays of length `rank` specifying the clip bounds (in voxels) for dimensions not in
`chunkDisplayDimensionIndices` and not channel dimensions.  The values for display/channel
dimensions are set to -/+infinity.

#### Defined in

[src/neuroglancer/sliceview/base.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L86)

___

### nonDisplayUpperClipBound

• **nonDisplayUpperClipBound**: `Float32Array`

#### Defined in

[src/neuroglancer/sliceview/base.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L87)

___

### renderLayer

• **renderLayer**: `RLayer`

#### Defined in

[src/neuroglancer/sliceview/base.ts:70](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L70)

___

### source

• **source**: `Source`

#### Defined in

[src/neuroglancer/sliceview/base.ts:72](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L72)

___

### upperChunkDisplayBound

• **upperChunkDisplayBound**: [`vec3`](../classes/axes_lines._internal_.vec3.md)

#### Defined in

[src/neuroglancer/sliceview/base.ts:104](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L104)

___

### upperClipBound

• **upperClipBound**: `Float32Array`

#### Defined in

[src/neuroglancer/sliceview/base.ts:93](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L93)

___

### upperClipDisplayBound

• **upperClipDisplayBound**: [`vec3`](../classes/axes_lines._internal_.vec3.md)

#### Defined in

[src/neuroglancer/sliceview/base.ts:98](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/sliceview/base.ts#L98)
