[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/mesh/backend](../modules/neuroglancer_mesh_backend.md) / RawPartitionedMeshData

# Interface: RawPartitionedMeshData

[neuroglancer/mesh/backend](../modules/neuroglancer_mesh_backend.md).RawPartitionedMeshData

## Hierarchy

- [`RawMeshData`](neuroglancer_mesh_backend.RawMeshData.md)

  ↳ **`RawPartitionedMeshData`**

## Table of contents

### Properties

- [indices](neuroglancer_mesh_backend.RawPartitionedMeshData.md#indices)
- [subChunkOffsets](neuroglancer_mesh_backend.RawPartitionedMeshData.md#subchunkoffsets)
- [vertexPositions](neuroglancer_mesh_backend.RawPartitionedMeshData.md#vertexpositions)

## Properties

### indices

• **indices**: [`MeshVertexIndices`](../modules/neuroglancer_mesh_base.md#meshvertexindices)

#### Inherited from

[RawMeshData](neuroglancer_mesh_backend.RawMeshData.md).[indices](neuroglancer_mesh_backend.RawMeshData.md#indices)

#### Defined in

[src/neuroglancer/mesh/backend.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/mesh/backend.ts#L87)

___

### subChunkOffsets

• **subChunkOffsets**: `Uint32Array`

#### Defined in

[src/neuroglancer/mesh/backend.ts:91](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/mesh/backend.ts#L91)

___

### vertexPositions

• **vertexPositions**: `Uint32Array` \| `Float32Array`

#### Inherited from

[RawMeshData](neuroglancer_mesh_backend.RawMeshData.md).[vertexPositions](neuroglancer_mesh_backend.RawMeshData.md#vertexpositions)

#### Defined in

[src/neuroglancer/mesh/backend.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/mesh/backend.ts#L86)
