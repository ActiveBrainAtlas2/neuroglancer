[neuroglancer](../README.md) / [Modules](../modules.md) / mesh/triangle\_strips

# Module: mesh/triangle\_strips

**`license`**
Copyright 2019 Google Inc.
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

### Functions

- [computeTriangleStrips](mesh_triangle_strips.md#computetrianglestrips)
- [getBaseIndex](mesh_triangle_strips.md#getbaseindex)
- [getEdgeIndex](mesh_triangle_strips.md#getedgeindex)
- [getEdgeMapSize](mesh_triangle_strips.md#getedgemapsize)
- [getNextEdge](mesh_triangle_strips.md#getnextedge)
- [vertexAIndex](mesh_triangle_strips.md#vertexaindex)
- [vertexBIndex](mesh_triangle_strips.md#vertexbindex)
- [vertexCIndex](mesh_triangle_strips.md#vertexcindex)

## Functions

### computeTriangleStrips

▸ **computeTriangleStrips**<`T`\>(`indices`, `subChunkOffsets?`): [`MeshVertexIndices`](mesh_base.md#meshvertexindices)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`MeshVertexIndices`](mesh_base.md#meshvertexindices) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `indices` | `T` |
| `subChunkOffsets?` | `Uint32Array` |

#### Returns

[`MeshVertexIndices`](mesh_base.md#meshvertexindices)

#### Defined in

[src/neuroglancer/mesh/triangle_strips.ts:260](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/triangle_strips.ts#L260)

___

### getBaseIndex

▸ **getBaseIndex**(`entry`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `entry` | `number` |

#### Returns

`number`

#### Defined in

[src/neuroglancer/mesh/triangle_strips.ts:119](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/triangle_strips.ts#L119)

___

### getEdgeIndex

▸ **getEdgeIndex**(`entry`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `entry` | `number` |

#### Returns

`number`

#### Defined in

[src/neuroglancer/mesh/triangle_strips.ts:123](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/triangle_strips.ts#L123)

___

### getEdgeMapSize

▸ **getEdgeMapSize**(`numIndices`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `numIndices` | `number` |

#### Returns

`number`

#### Defined in

[src/neuroglancer/mesh/triangle_strips.ts:154](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/triangle_strips.ts#L154)

___

### getNextEdge

▸ **getNextEdge**(`edgeIndexAndFlipped`): `number`

Computes the edge index and flipped state in a triangle strip for the next edge after the given
edge.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `edgeIndexAndFlipped` | `number` | Bits 0,1 specify the `edgeIndex` in the range `[0, 2]` corresponding     to the last edge that was traversed.  Bit 2 specifies the `flipped` state.  If `flipped` is     equal to 0, the last two emitted vertices are B and C relative to `edgeIndex`.  If `flipped`     is equal to 1, the last two emitted vertices are A and C relative to `edgeIndex`. |

#### Returns

`number`

The next `edgeIndexAndFlipped` value specifying `nextEdgeIndex` and `nextFlipped`.  If
    `flipped == 0`, `nextEdgeIndex` corresponds to the B-C edge relative to `edgeIndex`; if
    `flipped == 1`, `nextEdgeIndex` correspond to the A-C edge relative to `edgeIndex`.  The
    `nextFlipped` value is equal to 1 iff `vertexCIndex(edgeIndex) ==
    vertexAIndex(nextEdgeIndex)`.

#### Defined in

[src/neuroglancer/mesh/triangle_strips.ts:115](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/triangle_strips.ts#L115)

___

### vertexAIndex

▸ **vertexAIndex**(`edgeIndex`): `number`

Computes the first vertex offset for the given edge.

#### Parameters

| Name | Type |
| :------ | :------ |
| `edgeIndex` | `number` |

#### Returns

`number`

`[0, 0, 1][edgeIndex]`

#### Defined in

[src/neuroglancer/mesh/triangle_strips.ts:132](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/triangle_strips.ts#L132)

___

### vertexBIndex

▸ **vertexBIndex**(`edgeIndex`): `number`

Computes the second vertex offset for the given edge.

#### Parameters

| Name | Type |
| :------ | :------ |
| `edgeIndex` | `number` |

#### Returns

`number`

`[1, 2, 2][edgeIndex]`

#### Defined in

[src/neuroglancer/mesh/triangle_strips.ts:141](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/triangle_strips.ts#L141)

___

### vertexCIndex

▸ **vertexCIndex**(`edgeIndex`): `number`

Computes the opposite vertex offset for the given edge.

#### Parameters

| Name | Type |
| :------ | :------ |
| `edgeIndex` | `number` |

#### Returns

`number`

`[2, 1, 0][edgeIndex]`

#### Defined in

[src/neuroglancer/mesh/triangle_strips.ts:150](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/triangle_strips.ts#L150)
