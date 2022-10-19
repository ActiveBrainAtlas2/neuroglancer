[neuroglancer](../README.md) / [Modules](../modules.md) / skeleton/backend

# Module: skeleton/backend

## Table of contents

### Classes

- [SkeletonChunk](../classes/skeleton_backend.SkeletonChunk.md)
- [SkeletonLayer](../classes/skeleton_backend.SkeletonLayer.md)
- [SkeletonSource](../classes/skeleton_backend.SkeletonSource.md)

### Functions

- [decodeSkeletonVertexPositionsAndIndices](skeleton_backend.md#decodeskeletonvertexpositionsandindices)

## Functions

### decodeSkeletonVertexPositionsAndIndices

▸ **decodeSkeletonVertexPositionsAndIndices**(`chunk`, `data`, `endianness`, `vertexByteOffset`, `numVertices`, `indexByteOffset?`, `numEdges?`): `void`

Extracts vertex positions and edge vertex indices of the specified endianness from `data'.

See documentation of decodeVertexPositionsAndIndices.

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`SkeletonChunk`](../classes/skeleton_backend.SkeletonChunk.md) |
| `data` | `ArrayBuffer` |
| `endianness` | [`Endianness`](../enums/util_endian.Endianness.md) |
| `vertexByteOffset` | `number` |
| `numVertices` | `number` |
| `indexByteOffset?` | `number` |
| `numEdges?` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/skeleton/backend.ts:154](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/backend.ts#L154)
