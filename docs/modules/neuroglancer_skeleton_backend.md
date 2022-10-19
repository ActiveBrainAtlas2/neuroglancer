[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/skeleton/backend

# Module: neuroglancer/skeleton/backend

## Table of contents

### Classes

- [SkeletonChunk](../classes/neuroglancer_skeleton_backend.SkeletonChunk.md)
- [SkeletonLayer](../classes/neuroglancer_skeleton_backend.SkeletonLayer.md)
- [SkeletonSource](../classes/neuroglancer_skeleton_backend.SkeletonSource.md)

### Functions

- [decodeSkeletonVertexPositionsAndIndices](neuroglancer_skeleton_backend.md#decodeskeletonvertexpositionsandindices)

## Functions

### decodeSkeletonVertexPositionsAndIndices

▸ **decodeSkeletonVertexPositionsAndIndices**(`chunk`, `data`, `endianness`, `vertexByteOffset`, `numVertices`, `indexByteOffset?`, `numEdges?`): `void`

Extracts vertex positions and edge vertex indices of the specified endianness from `data'.

See documentation of decodeVertexPositionsAndIndices.

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`SkeletonChunk`](../classes/neuroglancer_skeleton_backend.SkeletonChunk.md) |
| `data` | `ArrayBuffer` |
| `endianness` | [`Endianness`](../enums/neuroglancer_util_endian.Endianness.md) |
| `vertexByteOffset` | `number` |
| `numVertices` | `number` |
| `indexByteOffset?` | `number` |
| `numEdges?` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/skeleton/backend.ts:154](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/backend.ts#L154)
