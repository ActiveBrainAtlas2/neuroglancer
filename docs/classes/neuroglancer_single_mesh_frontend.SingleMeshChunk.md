[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/single\_mesh/frontend](../modules/neuroglancer_single_mesh_frontend.md) / SingleMeshChunk

# Class: SingleMeshChunk

[neuroglancer/single_mesh/frontend](../modules/neuroglancer_single_mesh_frontend.md).SingleMeshChunk

## Hierarchy

- [`Chunk`](neuroglancer_chunk_manager_frontend.Chunk.md)

  ↳ **`SingleMeshChunk`**

## Table of contents

### Constructors

- [constructor](neuroglancer_single_mesh_frontend.SingleMeshChunk.md#constructor)

### Properties

- [indexBuffer](neuroglancer_single_mesh_frontend.SingleMeshChunk.md#indexbuffer)
- [indices](neuroglancer_single_mesh_frontend.SingleMeshChunk.md#indices)
- [numIndices](neuroglancer_single_mesh_frontend.SingleMeshChunk.md#numindices)
- [source](neuroglancer_single_mesh_frontend.SingleMeshChunk.md#source)
- [state](neuroglancer_single_mesh_frontend.SingleMeshChunk.md#state)
- [vertexData](neuroglancer_single_mesh_frontend.SingleMeshChunk.md#vertexdata)

### Accessors

- [gl](neuroglancer_single_mesh_frontend.SingleMeshChunk.md#gl)

### Methods

- [copyToGPU](neuroglancer_single_mesh_frontend.SingleMeshChunk.md#copytogpu)
- [freeGPUMemory](neuroglancer_single_mesh_frontend.SingleMeshChunk.md#freegpumemory)

## Constructors

### constructor

• **new SingleMeshChunk**(`source`, `x`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`SingleMeshSource`](neuroglancer_single_mesh_frontend.SingleMeshSource.md) |
| `x` | `any` |

#### Overrides

[Chunk](neuroglancer_chunk_manager_frontend.Chunk.md).[constructor](neuroglancer_chunk_manager_frontend.Chunk.md#constructor)

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:286](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/single_mesh/frontend.ts#L286)

## Properties

### indexBuffer

• **indexBuffer**: [`Buffer`](neuroglancer_webgl_buffer.Buffer.md)

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:281](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/single_mesh/frontend.ts#L281)

___

### indices

• **indices**: `Uint32Array`

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:283](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/single_mesh/frontend.ts#L283)

___

### numIndices

• **numIndices**: `number`

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:282](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/single_mesh/frontend.ts#L282)

___

### source

• **source**: [`SingleMeshSource`](neuroglancer_single_mesh_frontend.SingleMeshSource.md)

#### Overrides

[Chunk](neuroglancer_chunk_manager_frontend.Chunk.md).[source](neuroglancer_chunk_manager_frontend.Chunk.md#source)

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:280](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/single_mesh/frontend.ts#L280)

___

### state

• **state**: [`ChunkState`](../enums/neuroglancer_chunk_manager_base.ChunkState.md) = `ChunkState.SYSTEM_MEMORY`

#### Inherited from

[Chunk](neuroglancer_chunk_manager_frontend.Chunk.md).[state](neuroglancer_chunk_manager_frontend.Chunk.md#state)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L33)

___

### vertexData

• **vertexData**: [`VertexChunkData`](neuroglancer_single_mesh_frontend.VertexChunkData.md)

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:284](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/single_mesh/frontend.ts#L284)

## Accessors

### gl

• `get` **gl**(): [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Returns

[`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Inherited from

Chunk.gl

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L36)

## Methods

### copyToGPU

▸ **copyToGPU**(`gl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |

#### Returns

`void`

#### Overrides

[Chunk](neuroglancer_chunk_manager_frontend.Chunk.md).[copyToGPU](neuroglancer_chunk_manager_frontend.Chunk.md#copytogpu)

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:297](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/single_mesh/frontend.ts#L297)

___

### freeGPUMemory

▸ **freeGPUMemory**(`gl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |

#### Returns

`void`

#### Overrides

[Chunk](neuroglancer_chunk_manager_frontend.Chunk.md).[freeGPUMemory](neuroglancer_chunk_manager_frontend.Chunk.md#freegpumemory)

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:303](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/single_mesh/frontend.ts#L303)
