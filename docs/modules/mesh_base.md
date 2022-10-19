[neuroglancer](../README.md) / [Modules](../modules.md) / mesh/base

# Module: mesh/base

## Table of contents

### Enumerations

- [VertexPositionFormat](../enums/mesh_base.VertexPositionFormat.md)

### Interfaces

- [EncodedMeshData](../interfaces/mesh_base.EncodedMeshData.md)
- [MultiscaleFragmentFormat](../interfaces/mesh_base.MultiscaleFragmentFormat.md)

### Type Aliases

- [EncodedVertexPositions](mesh_base.md#encodedvertexpositions)
- [MeshVertexIndices](mesh_base.md#meshvertexindices)
- [OctahedronVertexNormals](mesh_base.md#octahedronvertexnormals)

### Variables

- [FRAGMENT\_SOURCE\_RPC\_ID](mesh_base.md#fragment_source_rpc_id)
- [MESH\_LAYER\_RPC\_ID](mesh_base.md#mesh_layer_rpc_id)
- [MULTISCALE\_FRAGMENT\_SOURCE\_RPC\_ID](mesh_base.md#multiscale_fragment_source_rpc_id)
- [MULTISCALE\_MESH\_LAYER\_RPC\_ID](mesh_base.md#multiscale_mesh_layer_rpc_id)

## Type Aliases

### EncodedVertexPositions

Ƭ **EncodedVertexPositions**: `Float32Array` \| `Uint32Array` \| `Uint16Array`

#### Defined in

[src/neuroglancer/mesh/base.ts:23](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/base.ts#L23)

___

### MeshVertexIndices

Ƭ **MeshVertexIndices**: `Uint16Array` \| `Uint32Array`

#### Defined in

[src/neuroglancer/mesh/base.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/base.ts#L24)

___

### OctahedronVertexNormals

Ƭ **OctahedronVertexNormals**: `Uint8Array`

#### Defined in

[src/neuroglancer/mesh/base.ts:25](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/base.ts#L25)

## Variables

### FRAGMENT\_SOURCE\_RPC\_ID

• `Const` **FRAGMENT\_SOURCE\_RPC\_ID**: ``"mesh/FragmentSource"``

#### Defined in

[src/neuroglancer/mesh/base.ts:19](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/base.ts#L19)

___

### MESH\_LAYER\_RPC\_ID

• `Const` **MESH\_LAYER\_RPC\_ID**: ``"mesh/MeshLayer"``

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

#### Defined in

[src/neuroglancer/mesh/base.ts:17](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/base.ts#L17)

___

### MULTISCALE\_FRAGMENT\_SOURCE\_RPC\_ID

• `Const` **MULTISCALE\_FRAGMENT\_SOURCE\_RPC\_ID**: ``"mesh/MultiscaleFragmentSource"``

#### Defined in

[src/neuroglancer/mesh/base.ts:21](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/base.ts#L21)

___

### MULTISCALE\_MESH\_LAYER\_RPC\_ID

• `Const` **MULTISCALE\_MESH\_LAYER\_RPC\_ID**: ``"mesh/MultiscaleMeshLayer"``

#### Defined in

[src/neuroglancer/mesh/base.ts:18](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/base.ts#L18)
