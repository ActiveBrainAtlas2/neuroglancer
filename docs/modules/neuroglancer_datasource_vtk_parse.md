[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/datasource/vtk/parse

# Module: neuroglancer/datasource/vtk/parse

## Table of contents

### Classes

- [TriangularMesh](../classes/neuroglancer_datasource_vtk_parse.TriangularMesh.md)

### Interfaces

- [VTKHeader](../interfaces/neuroglancer_datasource_vtk_parse.VTKHeader.md)
- [VertexAttribute](../interfaces/neuroglancer_datasource_vtk_parse.VertexAttribute.md)

### Functions

- [getTriangularMeshSize](neuroglancer_datasource_vtk_parse.md#gettriangularmeshsize)
- [parseVTK](neuroglancer_datasource_vtk_parse.md#parsevtk)

## Functions

### getTriangularMeshSize

▸ **getTriangularMeshSize**(`mesh`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mesh` | [`TriangularMesh`](../classes/neuroglancer_datasource_vtk_parse.TriangularMesh.md) |

#### Returns

`number`

#### Defined in

[src/neuroglancer/datasource/vtk/parse.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/vtk/parse.ts#L61)

___

### parseVTK

▸ **parseVTK**(`data`): [`TriangularMesh`](../classes/neuroglancer_datasource_vtk_parse.TriangularMesh.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`ArrayBufferView`](../interfaces/main_module._internal_.ArrayBufferView.md) |

#### Returns

[`TriangularMesh`](../classes/neuroglancer_datasource_vtk_parse.TriangularMesh.md)

#### Defined in

[src/neuroglancer/datasource/vtk/parse.ts:220](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/vtk/parse.ts#L220)
