[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/mesh/base](../modules/neuroglancer_mesh_base.md) / MultiscaleFragmentFormat

# Interface: MultiscaleFragmentFormat

[neuroglancer/mesh/base](../modules/neuroglancer_mesh_base.md).MultiscaleFragmentFormat

## Table of contents

### Properties

- [fragmentRelativeVertices](neuroglancer_mesh_base.MultiscaleFragmentFormat.md#fragmentrelativevertices)
- [vertexPositionFormat](neuroglancer_mesh_base.MultiscaleFragmentFormat.md#vertexpositionformat)

## Properties

### fragmentRelativeVertices

• **fragmentRelativeVertices**: `boolean`

If `true`, vertex positions are specified relative to the fragment bounds, meaning (0, 0, 0) is
the start corner of the fragment and (1, 1, 1) is the end corner.

If `false`, vertex positions are in "model" coordinates.

#### Defined in

[src/neuroglancer/mesh/base.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/base.ts#L41)

___

### vertexPositionFormat

• **vertexPositionFormat**: [`VertexPositionFormat`](../enums/neuroglancer_mesh_base.VertexPositionFormat.md)

#### Defined in

[src/neuroglancer/mesh/base.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/base.ts#L43)
