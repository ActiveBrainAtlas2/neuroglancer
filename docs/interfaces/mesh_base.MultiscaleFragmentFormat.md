[neuroglancer](../README.md) / [Modules](../modules.md) / [mesh/base](../modules/mesh_base.md) / MultiscaleFragmentFormat

# Interface: MultiscaleFragmentFormat

[mesh/base](../modules/mesh_base.md).MultiscaleFragmentFormat

## Table of contents

### Properties

- [fragmentRelativeVertices](mesh_base.MultiscaleFragmentFormat.md#fragmentrelativevertices)
- [vertexPositionFormat](mesh_base.MultiscaleFragmentFormat.md#vertexpositionformat)

## Properties

### fragmentRelativeVertices

• **fragmentRelativeVertices**: `boolean`

If `true`, vertex positions are specified relative to the fragment bounds, meaning (0, 0, 0) is
the start corner of the fragment and (1, 1, 1) is the end corner.

If `false`, vertex positions are in "model" coordinates.

#### Defined in

[src/neuroglancer/mesh/base.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/base.ts#L41)

___

### vertexPositionFormat

• **vertexPositionFormat**: [`VertexPositionFormat`](../enums/mesh_base.VertexPositionFormat.md)

#### Defined in

[src/neuroglancer/mesh/base.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/base.ts#L43)
