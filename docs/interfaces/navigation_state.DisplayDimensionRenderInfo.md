[neuroglancer](../README.md) / [Modules](../modules.md) / [navigation\_state](../modules/navigation_state.md) / DisplayDimensionRenderInfo

# Interface: DisplayDimensionRenderInfo

[navigation_state](../modules/navigation_state.md).DisplayDimensionRenderInfo

## Table of contents

### Properties

- [canonicalVoxelFactors](navigation_state.DisplayDimensionRenderInfo.md#canonicalvoxelfactors)
- [canonicalVoxelPhysicalSize](navigation_state.DisplayDimensionRenderInfo.md#canonicalvoxelphysicalsize)
- [displayDimensionIndices](navigation_state.DisplayDimensionRenderInfo.md#displaydimensionindices)
- [displayDimensionScales](navigation_state.DisplayDimensionRenderInfo.md#displaydimensionscales)
- [displayDimensionUnits](navigation_state.DisplayDimensionRenderInfo.md#displaydimensionunits)
- [displayRank](navigation_state.DisplayDimensionRenderInfo.md#displayrank)
- [globalDimensionNames](navigation_state.DisplayDimensionRenderInfo.md#globaldimensionnames)
- [globalRank](navigation_state.DisplayDimensionRenderInfo.md#globalrank)
- [voxelPhysicalScales](navigation_state.DisplayDimensionRenderInfo.md#voxelphysicalscales)

## Properties

### canonicalVoxelFactors

• **canonicalVoxelFactors**: `Float64Array`

Array of length 3.  Amount by which the voxel coordinates of each display dimensions must be
multiplied to convert to canonical voxels.  canonicalVoxelFactors[i] = voxelPhysicalScales[d] /
canonicalVoxelPhysicalSize, where d = dimensionIndices[i], or `1` for `i >= rank`.

#### Defined in

[src/neuroglancer/navigation_state.ts:704](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L704)

___

### canonicalVoxelPhysicalSize

• **canonicalVoxelPhysicalSize**: `number`

Physical scale corresponding to the canonical voxel.  Equal to minimum of
`voxelPhysicalScales.slice(0, rank)`, or `1` if `rank == 0`.

#### Defined in

[src/neuroglancer/navigation_state.ts:697](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L697)

___

### displayDimensionIndices

• **displayDimensionIndices**: `Int32Array`

Array of length 3.  The first `displayRank` elements specify the indices of the the global
dimensions that are displayed.  The remaining elements are `-1`.

#### Defined in

[src/neuroglancer/navigation_state.ts:670](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L670)

___

### displayDimensionScales

• **displayDimensionScales**: `Float64Array`

Scale corresponding to each dimension in `displayDimensionIndices`.
`displayDimensionScales[i]` is equal to `coordinateSpace.scales[displayDimensionIndices[i]]`,
or `1` if `displayDimensionIndices[i] == -1`.

#### Defined in

[src/neuroglancer/navigation_state.ts:691](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L691)

___

### displayDimensionUnits

• **displayDimensionUnits**: readonly `string`[]

Unit corresponding to each dimension in `displayDimensionIndices`.  `displayDimensionUnits[i]`
is equal to `coordinateSpace.units[displayDimensionIndices[i]]`, or `''` if
`displayDimensionIndices[i] == -1`.

#### Defined in

[src/neuroglancer/navigation_state.ts:684](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L684)

___

### displayRank

• **displayRank**: `number`

Number of displayed dimensions.  Must be <= 3.

#### Defined in

[src/neuroglancer/navigation_state.ts:664](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L664)

___

### globalDimensionNames

• **globalDimensionNames**: readonly `string`[]

Array of length `globalRank` specifying global dimension names.

#### Defined in

[src/neuroglancer/navigation_state.ts:659](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L659)

___

### globalRank

• **globalRank**: `number`

Number of global dimensions.

#### Defined in

[src/neuroglancer/navigation_state.ts:654](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L654)

___

### voxelPhysicalScales

• **voxelPhysicalScales**: `Float64Array`

Array of length 3.  `voxelPhysicalScales[i]` equals
`relativeDisplayScales[d] * coordinateSpace.scales[d]`,
where `d = displayDimensionIndices[i]`, or `1` for `i >= rank`.

#### Defined in

[src/neuroglancer/navigation_state.ts:677](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/8fef58ad/src/neuroglancer/navigation_state.ts#L677)
