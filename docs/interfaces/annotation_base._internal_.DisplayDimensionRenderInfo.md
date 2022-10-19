[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/base](../modules/annotation_base.md) / [<internal\>](../modules/annotation_base._internal_.md) / DisplayDimensionRenderInfo

# Interface: DisplayDimensionRenderInfo

[annotation/base](../modules/annotation_base.md).[<internal>](../modules/annotation_base._internal_.md).DisplayDimensionRenderInfo

## Table of contents

### Properties

- [canonicalVoxelFactors](annotation_base._internal_.DisplayDimensionRenderInfo.md#canonicalvoxelfactors)
- [canonicalVoxelPhysicalSize](annotation_base._internal_.DisplayDimensionRenderInfo.md#canonicalvoxelphysicalsize)
- [displayDimensionIndices](annotation_base._internal_.DisplayDimensionRenderInfo.md#displaydimensionindices)
- [displayDimensionScales](annotation_base._internal_.DisplayDimensionRenderInfo.md#displaydimensionscales)
- [displayDimensionUnits](annotation_base._internal_.DisplayDimensionRenderInfo.md#displaydimensionunits)
- [displayRank](annotation_base._internal_.DisplayDimensionRenderInfo.md#displayrank)
- [globalDimensionNames](annotation_base._internal_.DisplayDimensionRenderInfo.md#globaldimensionnames)
- [globalRank](annotation_base._internal_.DisplayDimensionRenderInfo.md#globalrank)
- [voxelPhysicalScales](annotation_base._internal_.DisplayDimensionRenderInfo.md#voxelphysicalscales)

## Properties

### canonicalVoxelFactors

• **canonicalVoxelFactors**: `Float64Array`

Array of length 3.  Amount by which the voxel coordinates of each display dimensions must be
multiplied to convert to canonical voxels.  canonicalVoxelFactors[i] = voxelPhysicalScales[d] /
canonicalVoxelPhysicalSize, where d = dimensionIndices[i], or `1` for `i >= rank`.

#### Defined in

[src/neuroglancer/navigation_state.ts:704](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L704)

___

### canonicalVoxelPhysicalSize

• **canonicalVoxelPhysicalSize**: `number`

Physical scale corresponding to the canonical voxel.  Equal to minimum of
`voxelPhysicalScales.slice(0, rank)`, or `1` if `rank == 0`.

#### Defined in

[src/neuroglancer/navigation_state.ts:697](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L697)

___

### displayDimensionIndices

• **displayDimensionIndices**: `Int32Array`

Array of length 3.  The first `displayRank` elements specify the indices of the the global
dimensions that are displayed.  The remaining elements are `-1`.

#### Defined in

[src/neuroglancer/navigation_state.ts:670](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L670)

___

### displayDimensionScales

• **displayDimensionScales**: `Float64Array`

Scale corresponding to each dimension in `displayDimensionIndices`.
`displayDimensionScales[i]` is equal to `coordinateSpace.scales[displayDimensionIndices[i]]`,
or `1` if `displayDimensionIndices[i] == -1`.

#### Defined in

[src/neuroglancer/navigation_state.ts:691](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L691)

___

### displayDimensionUnits

• **displayDimensionUnits**: readonly `string`[]

Unit corresponding to each dimension in `displayDimensionIndices`.  `displayDimensionUnits[i]`
is equal to `coordinateSpace.units[displayDimensionIndices[i]]`, or `''` if
`displayDimensionIndices[i] == -1`.

#### Defined in

[src/neuroglancer/navigation_state.ts:684](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L684)

___

### displayRank

• **displayRank**: `number`

Number of displayed dimensions.  Must be <= 3.

#### Defined in

[src/neuroglancer/navigation_state.ts:664](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L664)

___

### globalDimensionNames

• **globalDimensionNames**: readonly `string`[]

Array of length `globalRank` specifying global dimension names.

#### Defined in

[src/neuroglancer/navigation_state.ts:659](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L659)

___

### globalRank

• **globalRank**: `number`

Number of global dimensions.

#### Defined in

[src/neuroglancer/navigation_state.ts:654](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L654)

___

### voxelPhysicalScales

• **voxelPhysicalScales**: `Float64Array`

Array of length 3.  `voxelPhysicalScales[i]` equals
`relativeDisplayScales[d] * coordinateSpace.scales[d]`,
where `d = displayDimensionIndices[i]`, or `1` for `i >= rank`.

#### Defined in

[src/neuroglancer/navigation_state.ts:677](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/navigation_state.ts#L677)
