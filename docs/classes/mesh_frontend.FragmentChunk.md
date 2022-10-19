[neuroglancer](../README.md) / [Modules](../modules.md) / [mesh/frontend](../modules/mesh_frontend.md) / FragmentChunk

# Class: FragmentChunk

[mesh/frontend](../modules/mesh_frontend.md).FragmentChunk

## Hierarchy

- [`Chunk`](chunk_manager_frontend.Chunk.md)

  ↳ **`FragmentChunk`**

## Table of contents

### Constructors

- [constructor](mesh_frontend.FragmentChunk.md#constructor)

### Properties

- [indexBuffer](mesh_frontend.FragmentChunk.md#indexbuffer)
- [meshData](mesh_frontend.FragmentChunk.md#meshdata)
- [normalBuffer](mesh_frontend.FragmentChunk.md#normalbuffer)
- [source](mesh_frontend.FragmentChunk.md#source)
- [state](mesh_frontend.FragmentChunk.md#state)
- [vertexBuffer](mesh_frontend.FragmentChunk.md#vertexbuffer)

### Accessors

- [gl](mesh_frontend.FragmentChunk.md#gl)

### Methods

- [copyToGPU](mesh_frontend.FragmentChunk.md#copytogpu)
- [freeGPUMemory](mesh_frontend.FragmentChunk.md#freegpumemory)

## Constructors

### constructor

• **new FragmentChunk**(`source`, `x`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`FragmentSource`](mesh_frontend.FragmentSource.md) |
| `x` | `any` |

#### Overrides

[Chunk](chunk_manager_frontend.Chunk.md).[constructor](chunk_manager_frontend.Chunk.md#constructor)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:448](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/frontend.ts#L448)

## Properties

### indexBuffer

• **indexBuffer**: [`Buffer`](webgl_buffer.Buffer.md)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:444](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/frontend.ts#L444)

___

### meshData

• **meshData**: [`EncodedMeshData`](../interfaces/mesh_base.EncodedMeshData.md)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:446](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/frontend.ts#L446)

___

### normalBuffer

• **normalBuffer**: [`Buffer`](webgl_buffer.Buffer.md)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:445](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/frontend.ts#L445)

___

### source

• **source**: [`FragmentSource`](mesh_frontend.FragmentSource.md)

#### Overrides

[Chunk](chunk_manager_frontend.Chunk.md).[source](chunk_manager_frontend.Chunk.md#source)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:442](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/frontend.ts#L442)

___

### state

• **state**: [`ChunkState`](../enums/chunk_manager_base.ChunkState.md) = `ChunkState.SYSTEM_MEMORY`

#### Inherited from

[Chunk](chunk_manager_frontend.Chunk.md).[state](chunk_manager_frontend.Chunk.md#state)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L33)

___

### vertexBuffer

• **vertexBuffer**: [`Buffer`](webgl_buffer.Buffer.md)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:443](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/frontend.ts#L443)

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

[src/neuroglancer/mesh/frontend.ts:453](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/frontend.ts#L453)

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

[src/neuroglancer/mesh/frontend.ts:458](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/frontend.ts#L458)
