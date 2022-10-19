[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/mesh/frontend

# Module: neuroglancer/mesh/frontend

## Table of contents

### Modules

- [&lt;internal\&gt;](neuroglancer_mesh_frontend._internal_.md)

### Classes

- [FragmentChunk](../classes/neuroglancer_mesh_frontend.FragmentChunk.md)
- [FragmentSource](../classes/neuroglancer_mesh_frontend.FragmentSource.md)
- [ManifestChunk](../classes/neuroglancer_mesh_frontend.ManifestChunk.md)
- [MeshLayer](../classes/neuroglancer_mesh_frontend.MeshLayer.md)
- [MeshShaderManager](../classes/neuroglancer_mesh_frontend.MeshShaderManager.md)
- [MeshSource](../classes/neuroglancer_mesh_frontend.MeshSource.md)
- [MultiscaleFragmentChunk](../classes/neuroglancer_mesh_frontend.MultiscaleFragmentChunk.md)
- [MultiscaleFragmentSource](../classes/neuroglancer_mesh_frontend.MultiscaleFragmentSource.md)
- [MultiscaleManifestChunk](../classes/neuroglancer_mesh_frontend.MultiscaleManifestChunk.md)
- [MultiscaleMeshLayer](../classes/neuroglancer_mesh_frontend.MultiscaleMeshLayer.md)
- [MultiscaleMeshSource](../classes/neuroglancer_mesh_frontend.MultiscaleMeshSource.md)

### Interfaces

- [MeshDisplayState](../interfaces/neuroglancer_mesh_frontend.MeshDisplayState.md)
- [MeshSourceOptions](../interfaces/neuroglancer_mesh_frontend.MeshSourceOptions.md)
- [MultiscaleMeshSourceOptions](../interfaces/neuroglancer_mesh_frontend.MultiscaleMeshSourceOptions.md)

### Functions

- [decodeNormalOctahedronSnorm8](neuroglancer_mesh_frontend.md#decodenormaloctahedronsnorm8)

## Functions

### decodeNormalOctahedronSnorm8

▸ **decodeNormalOctahedronSnorm8**(`normals`): `Float32Array`

Javascript implementation of normal decoding, for debugging.

#### Parameters

| Name | Type |
| :------ | :------ |
| `normals` | `Uint8Array` |

#### Returns

`Float32Array`

#### Defined in

[src/neuroglancer/mesh/frontend.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/mesh/frontend.ts#L88)
