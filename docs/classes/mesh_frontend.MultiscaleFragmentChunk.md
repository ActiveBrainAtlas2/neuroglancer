[neuroglancer](../README.md) / [Modules](../modules.md) / [mesh/frontend](../modules/mesh_frontend.md) / MultiscaleFragmentChunk

# Class: MultiscaleFragmentChunk

[mesh/frontend](../modules/mesh_frontend.md).MultiscaleFragmentChunk

## Hierarchy

- [`Chunk`](chunk_manager_frontend.Chunk.md)

  ↳ **`MultiscaleFragmentChunk`**

## Table of contents

### Constructors

- [constructor](mesh_frontend.MultiscaleFragmentChunk.md#constructor)

### Properties

- [indexBuffer](mesh_frontend.MultiscaleFragmentChunk.md#indexbuffer)
- [meshData](mesh_frontend.MultiscaleFragmentChunk.md#meshdata)
- [normalBuffer](mesh_frontend.MultiscaleFragmentChunk.md#normalbuffer)
- [source](mesh_frontend.MultiscaleFragmentChunk.md#source)
- [state](mesh_frontend.MultiscaleFragmentChunk.md#state)
- [vertexBuffer](mesh_frontend.MultiscaleFragmentChunk.md#vertexbuffer)

### Accessors

- [gl](mesh_frontend.MultiscaleFragmentChunk.md#gl)

### Methods

- [copyToGPU](mesh_frontend.MultiscaleFragmentChunk.md#copytogpu)
- [freeGPUMemory](mesh_frontend.MultiscaleFragmentChunk.md#freegpumemory)

## Constructors

### constructor

• **new MultiscaleFragmentChunk**(`source`, `x`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`MultiscaleFragmentSource`](mesh_frontend.MultiscaleFragmentSource.md) |
| `x` | `any` |

#### Overrides

[Chunk](chunk_manager_frontend.Chunk.md).[constructor](chunk_manager_frontend.Chunk.md#constructor)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:763](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/frontend.ts#L763)

## Properties

### indexBuffer

• **indexBuffer**: [`Buffer`](webgl_buffer.Buffer.md)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:760](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/frontend.ts#L760)

___

### meshData

• **meshData**: [`EncodedMeshData`](../interfaces/mesh_base.EncodedMeshData.md) & { `subChunkOffsets`: `Uint32Array`  }

#### Defined in

[src/neuroglancer/mesh/frontend.ts:757](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/frontend.ts#L757)

___

### normalBuffer

• **normalBuffer**: [`Buffer`](webgl_buffer.Buffer.md)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:761](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/frontend.ts#L761)

___

### source

• **source**: [`MultiscaleFragmentSource`](mesh_frontend.MultiscaleFragmentSource.md)

#### Overrides

[Chunk](chunk_manager_frontend.Chunk.md).[source](chunk_manager_frontend.Chunk.md#source)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:758](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/frontend.ts#L758)

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

[src/neuroglancer/mesh/frontend.ts:759](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/frontend.ts#L759)

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

[src/neuroglancer/mesh/frontend.ts:768](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/frontend.ts#L768)

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

[src/neuroglancer/mesh/frontend.ts:773](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/frontend.ts#L773)
