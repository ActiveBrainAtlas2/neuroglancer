[neuroglancer](../README.md) / [Modules](../modules.md) / [single\_mesh/frontend](../modules/single_mesh_frontend.md) / SingleMeshChunk

# Class: SingleMeshChunk

[single_mesh/frontend](../modules/single_mesh_frontend.md).SingleMeshChunk

## Hierarchy

- [`Chunk`](chunk_manager_frontend.Chunk.md)

  ↳ **`SingleMeshChunk`**

## Table of contents

### Constructors

- [constructor](single_mesh_frontend.SingleMeshChunk.md#constructor)

### Properties

- [indexBuffer](single_mesh_frontend.SingleMeshChunk.md#indexbuffer)
- [indices](single_mesh_frontend.SingleMeshChunk.md#indices)
- [numIndices](single_mesh_frontend.SingleMeshChunk.md#numindices)
- [source](single_mesh_frontend.SingleMeshChunk.md#source)
- [state](single_mesh_frontend.SingleMeshChunk.md#state)
- [vertexData](single_mesh_frontend.SingleMeshChunk.md#vertexdata)

### Accessors

- [gl](single_mesh_frontend.SingleMeshChunk.md#gl)

### Methods

- [copyToGPU](single_mesh_frontend.SingleMeshChunk.md#copytogpu)
- [freeGPUMemory](single_mesh_frontend.SingleMeshChunk.md#freegpumemory)

## Constructors

### constructor

• **new SingleMeshChunk**(`source`, `x`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`SingleMeshSource`](single_mesh_frontend.SingleMeshSource.md) |
| `x` | `any` |

#### Overrides

[Chunk](chunk_manager_frontend.Chunk.md).[constructor](chunk_manager_frontend.Chunk.md#constructor)

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:286](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/single_mesh/frontend.ts#L286)

## Properties

### indexBuffer

• **indexBuffer**: [`Buffer`](webgl_buffer.Buffer.md)

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:281](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/single_mesh/frontend.ts#L281)

___

### indices

• **indices**: `Uint32Array`

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:283](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/single_mesh/frontend.ts#L283)

___

### numIndices

• **numIndices**: `number`

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:282](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/single_mesh/frontend.ts#L282)

___

### source

• **source**: [`SingleMeshSource`](single_mesh_frontend.SingleMeshSource.md)

#### Overrides

[Chunk](chunk_manager_frontend.Chunk.md).[source](chunk_manager_frontend.Chunk.md#source)

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:280](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/single_mesh/frontend.ts#L280)

___

### state

• **state**: [`ChunkState`](../enums/chunk_manager_base.ChunkState.md) = `ChunkState.SYSTEM_MEMORY`

#### Inherited from

[Chunk](chunk_manager_frontend.Chunk.md).[state](chunk_manager_frontend.Chunk.md#state)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L33)

___

### vertexData

• **vertexData**: [`VertexChunkData`](single_mesh_frontend.VertexChunkData.md)

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:284](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/single_mesh/frontend.ts#L284)

## Accessors

### gl

• `get` **gl**(): [`GL`](../interfaces/webgl_context.GL.md)

#### Returns

[`GL`](../interfaces/webgl_context.GL.md)

#### Inherited from

Chunk.gl

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L36)

## Methods

### copyToGPU

▸ **copyToGPU**(`gl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |

#### Returns

`void`

#### Overrides

[Chunk](chunk_manager_frontend.Chunk.md).[copyToGPU](chunk_manager_frontend.Chunk.md#copytogpu)

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:297](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/single_mesh/frontend.ts#L297)

___

### freeGPUMemory

▸ **freeGPUMemory**(`gl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |

#### Returns

`void`

#### Overrides

[Chunk](chunk_manager_frontend.Chunk.md).[freeGPUMemory](chunk_manager_frontend.Chunk.md#freegpumemory)

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:303](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/single_mesh/frontend.ts#L303)
