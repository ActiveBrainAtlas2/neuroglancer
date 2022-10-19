[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/mesh/draco

# Module: neuroglancer/mesh/draco

## Table of contents

### Functions

- [decodeDracoPartitioned](neuroglancer_mesh_draco.md#decodedracopartitioned)

## Functions

### decodeDracoPartitioned

▸ **decodeDracoPartitioned**(`buffer`, `vertexQuantizationBits`, `partition`): `Promise`<[`RawPartitionedMeshData`](../interfaces/neuroglancer_mesh_backend.RawPartitionedMeshData.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `Uint8Array` |
| `vertexQuantizationBits` | `number` |
| `partition` | `boolean` |

#### Returns

`Promise`<[`RawPartitionedMeshData`](../interfaces/neuroglancer_mesh_backend.RawPartitionedMeshData.md)\>

#### Defined in

[src/neuroglancer/mesh/draco/index.ts:62](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/mesh/draco/index.ts#L62)
