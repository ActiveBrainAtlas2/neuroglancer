[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/datasource/vtk/parse

# Module: neuroglancer/datasource/vtk/parse

**`license`**
Copyright 2016 Google Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

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

[src/neuroglancer/datasource/vtk/parse.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/vtk/parse.ts#L61)

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

[src/neuroglancer/datasource/vtk/parse.ts:220](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/vtk/parse.ts#L220)
