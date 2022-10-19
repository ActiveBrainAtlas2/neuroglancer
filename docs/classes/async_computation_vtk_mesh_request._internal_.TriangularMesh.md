[neuroglancer](../README.md) / [Modules](../modules.md) / [async\_computation/vtk\_mesh\_request](../modules/async_computation_vtk_mesh_request.md) / [<internal\>](../modules/async_computation_vtk_mesh_request._internal_.md) / TriangularMesh

# Class: TriangularMesh

[async_computation/vtk_mesh_request](../modules/async_computation_vtk_mesh_request.md).[<internal>](../modules/async_computation_vtk_mesh_request._internal_.md).TriangularMesh

## Table of contents

### Constructors

- [constructor](async_computation_vtk_mesh_request._internal_.TriangularMesh.md#constructor)

### Properties

- [header](async_computation_vtk_mesh_request._internal_.TriangularMesh.md#header)
- [indices](async_computation_vtk_mesh_request._internal_.TriangularMesh.md#indices)
- [numTriangles](async_computation_vtk_mesh_request._internal_.TriangularMesh.md#numtriangles)
- [numVertices](async_computation_vtk_mesh_request._internal_.TriangularMesh.md#numvertices)
- [vertexAttributes](async_computation_vtk_mesh_request._internal_.TriangularMesh.md#vertexattributes)
- [vertexPositions](async_computation_vtk_mesh_request._internal_.TriangularMesh.md#vertexpositions)

## Constructors

### constructor

• **new TriangularMesh**(`header`, `numVertices`, `vertexPositions`, `numTriangles`, `indices`, `vertexAttributes`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `header` | [`VTKHeader`](../interfaces/async_computation_vtk_mesh_request._internal_.VTKHeader.md) |
| `numVertices` | `number` |
| `vertexPositions` | `Float32Array` |
| `numTriangles` | `number` |
| `indices` | `Uint32Array` |
| `vertexAttributes` | [`VertexAttribute`](../interfaces/async_computation_vtk_mesh_request._internal_.VertexAttribute.md)[] |

#### Defined in

[src/neuroglancer/datasource/vtk/parse.ts:55](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/datasource/vtk/parse.ts#L55)

## Properties

### header

• **header**: [`VTKHeader`](../interfaces/async_computation_vtk_mesh_request._internal_.VTKHeader.md)

___

### indices

• **indices**: `Uint32Array`

___

### numTriangles

• **numTriangles**: `number`

___

### numVertices

• **numVertices**: `number`

___

### vertexAttributes

• **vertexAttributes**: [`VertexAttribute`](../interfaces/async_computation_vtk_mesh_request._internal_.VertexAttribute.md)[]

___

### vertexPositions

• **vertexPositions**: `Float32Array`
