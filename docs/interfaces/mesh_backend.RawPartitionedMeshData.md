[neuroglancer](../README.md) / [Modules](../modules.md) / [mesh/backend](../modules/mesh_backend.md) / RawPartitionedMeshData

# Interface: RawPartitionedMeshData

[mesh/backend](../modules/mesh_backend.md).RawPartitionedMeshData

## Hierarchy

- [`RawMeshData`](mesh_backend.RawMeshData.md)

  ↳ **`RawPartitionedMeshData`**

## Table of contents

### Properties

- [indices](mesh_backend.RawPartitionedMeshData.md#indices)
- [subChunkOffsets](mesh_backend.RawPartitionedMeshData.md#subchunkoffsets)
- [vertexPositions](mesh_backend.RawPartitionedMeshData.md#vertexpositions)

## Properties

### indices

• **indices**: [`MeshVertexIndices`](../modules/mesh_base.md#meshvertexindices)

#### Inherited from

[RawMeshData](mesh_backend.RawMeshData.md).[indices](mesh_backend.RawMeshData.md#indices)

#### Defined in

[src/neuroglancer/mesh/backend.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/backend.ts#L87)

___

### subChunkOffsets

• **subChunkOffsets**: `Uint32Array`

#### Defined in

[src/neuroglancer/mesh/backend.ts:91](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/backend.ts#L91)

___

### vertexPositions

• **vertexPositions**: `Uint32Array` \| `Float32Array`

#### Inherited from

[RawMeshData](mesh_backend.RawMeshData.md).[vertexPositions](mesh_backend.RawMeshData.md#vertexpositions)

#### Defined in

[src/neuroglancer/mesh/backend.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/backend.ts#L86)
