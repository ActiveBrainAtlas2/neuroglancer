[neuroglancer](../README.md) / [Modules](../modules.md) / [layer](../modules/layer.md) / [<internal\>](../modules/layer._internal_.md) / MultiscaleFragmentFormat

# Interface: MultiscaleFragmentFormat

[layer](../modules/layer.md).[<internal>](../modules/layer._internal_.md).MultiscaleFragmentFormat

## Table of contents

### Properties

- [fragmentRelativeVertices](layer._internal_.MultiscaleFragmentFormat.md#fragmentrelativevertices)
- [vertexPositionFormat](layer._internal_.MultiscaleFragmentFormat.md#vertexpositionformat)

## Properties

### fragmentRelativeVertices

• **fragmentRelativeVertices**: `boolean`

If `true`, vertex positions are specified relative to the fragment bounds, meaning (0, 0, 0) is
the start corner of the fragment and (1, 1, 1) is the end corner.

If `false`, vertex positions are in "model" coordinates.

#### Defined in

[src/neuroglancer/mesh/base.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/mesh/base.ts#L41)

___

### vertexPositionFormat

• **vertexPositionFormat**: [`VertexPositionFormat`](../enums/layer._internal_.VertexPositionFormat.md)

#### Defined in

[src/neuroglancer/mesh/base.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/mesh/base.ts#L43)
