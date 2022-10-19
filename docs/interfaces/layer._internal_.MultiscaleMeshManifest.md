[neuroglancer](../README.md) / [Modules](../modules.md) / [layer](../modules/layer.md) / [<internal\>](../modules/layer._internal_.md) / MultiscaleMeshManifest

# Interface: MultiscaleMeshManifest

[layer](../modules/layer.md).[<internal>](../modules/layer._internal_.md).MultiscaleMeshManifest

## Table of contents

### Properties

- [chunkGridSpatialOrigin](layer._internal_.MultiscaleMeshManifest.md#chunkgridspatialorigin)
- [chunkShape](layer._internal_.MultiscaleMeshManifest.md#chunkshape)
- [clipLowerBound](layer._internal_.MultiscaleMeshManifest.md#cliplowerbound)
- [clipUpperBound](layer._internal_.MultiscaleMeshManifest.md#clipupperbound)
- [lodScales](layer._internal_.MultiscaleMeshManifest.md#lodscales)
- [octree](layer._internal_.MultiscaleMeshManifest.md#octree)
- [vertexOffsets](layer._internal_.MultiscaleMeshManifest.md#vertexoffsets)

## Properties

### chunkGridSpatialOrigin

• **chunkGridSpatialOrigin**: [`vec3`](../classes/axes_lines._internal_.vec3.md)

Starting corner position of (0, 0, 0) chunk in object coordinates.

#### Defined in

[src/neuroglancer/mesh/multiscale.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/mesh/multiscale.ts#L31)

___

### chunkShape

• **chunkShape**: [`vec3`](../classes/axes_lines._internal_.vec3.md)

Size of finest-resolution (base) chunk in object coordinates.

#### Defined in

[src/neuroglancer/mesh/multiscale.ts:26](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/mesh/multiscale.ts#L26)

___

### clipLowerBound

• **clipLowerBound**: [`vec3`](../classes/axes_lines._internal_.vec3.md)

Axis-aligned bounding box lower bound of object in object coordinates to use for clipping and
level-of-detail calculations.

#### Defined in

[src/neuroglancer/mesh/multiscale.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/mesh/multiscale.ts#L37)

___

### clipUpperBound

• **clipUpperBound**: [`vec3`](../classes/axes_lines._internal_.vec3.md)

Axis-aligned bounding box upper bound of object in object coordinates to use for clipping and
level-of-detail calculations.

#### Defined in

[src/neuroglancer/mesh/multiscale.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/mesh/multiscale.ts#L43)

___

### lodScales

• **lodScales**: `Float32Array`

Specifies the number of levels of detail (as `lodScales.length`), and the resolution in object
coordinates for each level of detail.  If `lodScales[lod] === 0`, then level-of-detail `lod`
does not exist.

Level of detail `0` is the finest resolution.

The non-zero values must be non-decreasing.

For each chunk, the chosen `lod` is the largest value such that
`lodScales[lod] <= detailCutoff * pixelSize`, where `pixelSize` is the maximum spatial distance
spanned by a single viewport pixel within the projected image of the chunk.

#### Defined in

[src/neuroglancer/mesh/multiscale.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/mesh/multiscale.ts#L58)

___

### octree

• **octree**: `Uint32Array`

Row-major `[n, 5]` array where each row is of the form `[x, y, z, start, end_and_empty]`, where
`x`, `y`, and `z` are the chunk grid coordinates of the entry at a particular level of detail.
Row `n-1` corresponds to level of detail `lodScales.length - 1`, the root of the octree.  Given
a row corresponding to an octree node at level of detail `lod`, bits `start` specifies the row
number of the first child octree node at level of detail `lod-1`, and bits `[0,30]` of
`end_and_empty` specify one past the row number of the last child octree node.  Bit `31` of
`end_and_empty` is set to `1` if the mesh for the octree node is empty and should not be
requested/rendered.

#### Defined in

[src/neuroglancer/mesh/multiscale.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/mesh/multiscale.ts#L76)

___

### vertexOffsets

• **vertexOffsets**: `Float32Array`

C order `[numLods, 3]` array specifying the xyz vertex position offset in object coordinates
for each level of detail.

#### Defined in

[src/neuroglancer/mesh/multiscale.ts:64](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/mesh/multiscale.ts#L64)
