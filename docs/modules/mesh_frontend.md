[neuroglancer](../README.md) / [Modules](../modules.md) / mesh/frontend

# Module: mesh/frontend

## Table of contents

### Modules

- [&lt;internal\&gt;](mesh_frontend._internal_.md)

### Classes

- [FragmentChunk](../classes/mesh_frontend.FragmentChunk.md)
- [FragmentSource](../classes/mesh_frontend.FragmentSource.md)
- [ManifestChunk](../classes/mesh_frontend.ManifestChunk.md)
- [MeshLayer](../classes/mesh_frontend.MeshLayer.md)
- [MeshShaderManager](../classes/mesh_frontend.MeshShaderManager.md)
- [MeshSource](../classes/mesh_frontend.MeshSource.md)
- [MultiscaleFragmentChunk](../classes/mesh_frontend.MultiscaleFragmentChunk.md)
- [MultiscaleFragmentSource](../classes/mesh_frontend.MultiscaleFragmentSource.md)
- [MultiscaleManifestChunk](../classes/mesh_frontend.MultiscaleManifestChunk.md)
- [MultiscaleMeshLayer](../classes/mesh_frontend.MultiscaleMeshLayer.md)
- [MultiscaleMeshSource](../classes/mesh_frontend.MultiscaleMeshSource.md)

### Interfaces

- [MeshDisplayState](../interfaces/mesh_frontend.MeshDisplayState.md)
- [MeshSourceOptions](../interfaces/mesh_frontend.MeshSourceOptions.md)
- [MultiscaleMeshSourceOptions](../interfaces/mesh_frontend.MultiscaleMeshSourceOptions.md)

### Functions

- [decodeNormalOctahedronSnorm8](mesh_frontend.md#decodenormaloctahedronsnorm8)

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

[src/neuroglancer/mesh/frontend.ts:88](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/frontend.ts#L88)
