[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/datasource/vtk/parse](../modules/neuroglancer_datasource_vtk_parse.md) / TriangularMesh

# Class: TriangularMesh

[neuroglancer/datasource/vtk/parse](../modules/neuroglancer_datasource_vtk_parse.md).TriangularMesh

## Table of contents

### Constructors

- [constructor](neuroglancer_datasource_vtk_parse.TriangularMesh.md#constructor)

### Properties

- [header](neuroglancer_datasource_vtk_parse.TriangularMesh.md#header)
- [indices](neuroglancer_datasource_vtk_parse.TriangularMesh.md#indices)
- [numTriangles](neuroglancer_datasource_vtk_parse.TriangularMesh.md#numtriangles)
- [numVertices](neuroglancer_datasource_vtk_parse.TriangularMesh.md#numvertices)
- [vertexAttributes](neuroglancer_datasource_vtk_parse.TriangularMesh.md#vertexattributes)
- [vertexPositions](neuroglancer_datasource_vtk_parse.TriangularMesh.md#vertexpositions)

## Constructors

### constructor

• **new TriangularMesh**(`header`, `numVertices`, `vertexPositions`, `numTriangles`, `indices`, `vertexAttributes`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `header` | [`VTKHeader`](../interfaces/neuroglancer_datasource_vtk_parse.VTKHeader.md) |
| `numVertices` | `number` |
| `vertexPositions` | `Float32Array` |
| `numTriangles` | `number` |
| `indices` | `Uint32Array` |
| `vertexAttributes` | [`VertexAttribute`](../interfaces/neuroglancer_datasource_vtk_parse.VertexAttribute.md)[] |

#### Defined in

[src/neuroglancer/datasource/vtk/parse.ts:55](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/vtk/parse.ts#L55)

## Properties

### header

• **header**: [`VTKHeader`](../interfaces/neuroglancer_datasource_vtk_parse.VTKHeader.md)

#### Defined in

[src/neuroglancer/datasource/vtk/parse.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/vtk/parse.ts#L56)

___

### indices

• **indices**: `Uint32Array`

#### Defined in

[src/neuroglancer/datasource/vtk/parse.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/vtk/parse.ts#L57)

___

### numTriangles

• **numTriangles**: `number`

#### Defined in

[src/neuroglancer/datasource/vtk/parse.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/vtk/parse.ts#L57)

___

### numVertices

• **numVertices**: `number`

#### Defined in

[src/neuroglancer/datasource/vtk/parse.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/vtk/parse.ts#L56)

___

### vertexAttributes

• **vertexAttributes**: [`VertexAttribute`](../interfaces/neuroglancer_datasource_vtk_parse.VertexAttribute.md)[]

#### Defined in

[src/neuroglancer/datasource/vtk/parse.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/vtk/parse.ts#L58)

___

### vertexPositions

• **vertexPositions**: `Float32Array`

#### Defined in

[src/neuroglancer/datasource/vtk/parse.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/vtk/parse.ts#L56)
