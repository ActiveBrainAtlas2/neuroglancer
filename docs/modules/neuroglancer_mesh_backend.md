[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/mesh/backend

# Module: neuroglancer/mesh/backend

## Table of contents

### Classes

- [FragmentChunk](../classes/neuroglancer_mesh_backend.FragmentChunk.md)
- [FragmentSource](../classes/neuroglancer_mesh_backend.FragmentSource.md)
- [ManifestChunk](../classes/neuroglancer_mesh_backend.ManifestChunk.md)
- [MeshLayer](../classes/neuroglancer_mesh_backend.MeshLayer.md)
- [MeshSource](../classes/neuroglancer_mesh_backend.MeshSource.md)
- [MultiscaleFragmentChunk](../classes/neuroglancer_mesh_backend.MultiscaleFragmentChunk.md)
- [MultiscaleFragmentSource](../classes/neuroglancer_mesh_backend.MultiscaleFragmentSource.md)
- [MultiscaleManifestChunk](../classes/neuroglancer_mesh_backend.MultiscaleManifestChunk.md)
- [MultiscaleMeshLayer](../classes/neuroglancer_mesh_backend.MultiscaleMeshLayer.md)
- [MultiscaleMeshSource](../classes/neuroglancer_mesh_backend.MultiscaleMeshSource.md)

### Interfaces

- [RawMeshData](../interfaces/neuroglancer_mesh_backend.RawMeshData.md)
- [RawPartitionedMeshData](../interfaces/neuroglancer_mesh_backend.RawPartitionedMeshData.md)

### Type Aliases

- [FragmentId](neuroglancer_mesh_backend.md#fragmentid)

### Functions

- [assignMeshFragmentData](neuroglancer_mesh_backend.md#assignmeshfragmentdata)
- [assignMultiscaleMeshFragmentData](neuroglancer_mesh_backend.md#assignmultiscalemeshfragmentdata)
- [computeOctreeChildOffsets](neuroglancer_mesh_backend.md#computeoctreechildoffsets)
- [computeVertexNormals](neuroglancer_mesh_backend.md#computevertexnormals)
- [decodeJsonManifestChunk](neuroglancer_mesh_backend.md#decodejsonmanifestchunk)
- [decodeTriangleVertexPositionsAndIndices](neuroglancer_mesh_backend.md#decodetrianglevertexpositionsandindices)
- [decodeVertexPositionsAndIndices](neuroglancer_mesh_backend.md#decodevertexpositionsandindices)
- [encodeNormals32fx3ToOctahedron8x2](neuroglancer_mesh_backend.md#encodenormals32fx3tooctahedron8x2)
- [generateHigherOctreeLevel](neuroglancer_mesh_backend.md#generatehigheroctreelevel)

## Type Aliases

### FragmentId

Ƭ **FragmentId**: `string`

#### Defined in

[src/neuroglancer/mesh/backend.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/mesh/backend.ts#L43)

## Functions

### assignMeshFragmentData

▸ **assignMeshFragmentData**(`chunk`, `data`, `vertexPositionFormat?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `chunk` | [`FragmentChunk`](../classes/neuroglancer_mesh_backend.FragmentChunk.md) | `undefined` |
| `data` | [`RawMeshData`](../interfaces/neuroglancer_mesh_backend.RawMeshData.md) | `undefined` |
| `vertexPositionFormat` | [`VertexPositionFormat`](../enums/neuroglancer_mesh_base.VertexPositionFormat.md) | `VertexPositionFormat.float32` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/mesh/backend.ts:670](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/mesh/backend.ts#L670)

___

### assignMultiscaleMeshFragmentData

▸ **assignMultiscaleMeshFragmentData**(`chunk`, `data`, `vertexPositionFormat`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`MultiscaleFragmentChunk`](../classes/neuroglancer_mesh_backend.MultiscaleFragmentChunk.md) |
| `data` | [`RawPartitionedMeshData`](../interfaces/neuroglancer_mesh_backend.RawPartitionedMeshData.md) |
| `vertexPositionFormat` | [`VertexPositionFormat`](../enums/neuroglancer_mesh_base.VertexPositionFormat.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/mesh/backend.ts:676](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/mesh/backend.ts#L676)

___

### computeOctreeChildOffsets

▸ **computeOctreeChildOffsets**(`octree`, `childStart`, `childEnd`, `parentEnd`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `octree` | `Uint32Array` |
| `childStart` | `number` |
| `childEnd` | `number` |
| `parentEnd` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/mesh/backend.ts:706](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/mesh/backend.ts#L706)

___

### computeVertexNormals

▸ **computeVertexNormals**(`positions`, `indices`): `Float32Array`

Computes normal vectors for each vertex of a triangular mesh.

The normal vector for each triangle with vertices (v0, v1, v2) is computed as the (normalized)
cross product of (v1 - v0, v2 - v1).  The normal vector for each vertex is obtained by averaging
the normal vector of each of the triangles that contains it.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `positions` | `Uint8Array` \| `Uint16Array` \| `Uint32Array` \| `Float32Array` | The vertex positions in [x0, y0, z0, x1, y1, z1, ...] format. |
| `indices` | `Uint8Array` \| `Uint16Array` \| `Uint32Array` | The indices of the triangle vertices.  Each triplet of consecutive values     specifies a triangle. |

#### Returns

`Float32Array`

#### Defined in

[src/neuroglancer/mesh/backend.ts:167](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/mesh/backend.ts#L167)

___

### decodeJsonManifestChunk

▸ **decodeJsonManifestChunk**(`chunk`, `response`, `keysPropertyName`): `void`

Assigns chunk.fragmentKeys to response[keysPropertyName].

Verifies that response[keysPropertyName] is an array of strings.

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`ManifestChunk`](../classes/neuroglancer_mesh_backend.ManifestChunk.md) |
| `response` | `any` |
| `keysPropertyName` | `string` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/mesh/backend.ts:150](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/mesh/backend.ts#L150)

___

### decodeTriangleVertexPositionsAndIndices

▸ **decodeTriangleVertexPositionsAndIndices**(`data`, `endianness`, `vertexByteOffset`, `numVertices`, `indexByteOffset?`, `numTriangles?`): [`RawMeshData`](../interfaces/neuroglancer_mesh_backend.RawMeshData.md)

Extracts vertex positions and triangle vertex indices of the specified endianness from `data'.

Vertex normals are computed.

See decodeVertexPositionsAndIndices above.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `ArrayBuffer` |
| `endianness` | [`Endianness`](../enums/neuroglancer_util_endian.Endianness.md) |
| `vertexByteOffset` | `number` |
| `numVertices` | `number` |
| `indexByteOffset?` | `number` |
| `numTriangles?` | `number` |

#### Returns

[`RawMeshData`](../interfaces/neuroglancer_mesh_backend.RawMeshData.md)

#### Defined in

[src/neuroglancer/mesh/backend.ts:289](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/mesh/backend.ts#L289)

___

### decodeVertexPositionsAndIndices

▸ **decodeVertexPositionsAndIndices**(`verticesPerPrimitive`, `data`, `endianness`, `vertexByteOffset`, `numVertices`, `indexByteOffset?`, `numPrimitives?`): [`RawMeshData`](../interfaces/neuroglancer_mesh_backend.RawMeshData.md)

Extracts vertex positions and indices of the specified endianness from `data'.

The vertexByteOffset specifies the byte offset into `data' of the start of the vertex position
data.  The vertex data must consist of verticesPerPrimitive * numVertices 32-bit float values.

If indexByteOffset is not specified, it defaults to the end of the vertex position data.  If
numPrimitives is not specified, it is assumed that the index data continues until the end of the
array.

#### Parameters

| Name | Type |
| :------ | :------ |
| `verticesPerPrimitive` | `number` |
| `data` | `ArrayBuffer` |
| `endianness` | [`Endianness`](../enums/neuroglancer_util_endian.Endianness.md) |
| `vertexByteOffset` | `number` |
| `numVertices` | `number` |
| `indexByteOffset?` | `number` |
| `numPrimitives?` | `number` |

#### Returns

[`RawMeshData`](../interfaces/neuroglancer_mesh_backend.RawMeshData.md)

#### Defined in

[src/neuroglancer/mesh/backend.ts:254](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/mesh/backend.ts#L254)

___

### encodeNormals32fx3ToOctahedron8x2

▸ **encodeNormals32fx3ToOctahedron8x2**(`out`, `normals`): `void`

Encodes normal vectors represented as 3x32-bit floating vectors into a 2x8-bit octahedron
representation.

Zina H. Cigolle, Sam Donow, Daniel Evangelakos, Michael Mara, Morgan McGuire, and Quirin Meyer,
Survey of Efficient Representations for Independent Unit Vectors, Journal of Computer Graphics
Techniques (JCGT), vol. 3, no. 2, 1-30, 2014

Available online http://jcgt.org/published/0003/02/01/

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | `Uint8Array` |
| `normals` | `Float32Array` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/mesh/backend.ts:225](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/mesh/backend.ts#L225)

___

### generateHigherOctreeLevel

▸ **generateHigherOctreeLevel**(`octree`, `priorStart`, `priorEnd`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `octree` | `Uint32Array` |
| `priorStart` | `number` |
| `priorEnd` | `number` |

#### Returns

`number`

#### Defined in

[src/neuroglancer/mesh/backend.ts:683](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/mesh/backend.ts#L683)
