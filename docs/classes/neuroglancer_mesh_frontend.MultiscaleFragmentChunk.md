[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/mesh/frontend](../modules/neuroglancer_mesh_frontend.md) / MultiscaleFragmentChunk

# Class: MultiscaleFragmentChunk

[neuroglancer/mesh/frontend](../modules/neuroglancer_mesh_frontend.md).MultiscaleFragmentChunk

## Hierarchy

- [`Chunk`](neuroglancer_chunk_manager_frontend.Chunk.md)

  ↳ **`MultiscaleFragmentChunk`**

## Table of contents

### Constructors

- [constructor](neuroglancer_mesh_frontend.MultiscaleFragmentChunk.md#constructor)

### Properties

- [indexBuffer](neuroglancer_mesh_frontend.MultiscaleFragmentChunk.md#indexbuffer)
- [meshData](neuroglancer_mesh_frontend.MultiscaleFragmentChunk.md#meshdata)
- [normalBuffer](neuroglancer_mesh_frontend.MultiscaleFragmentChunk.md#normalbuffer)
- [source](neuroglancer_mesh_frontend.MultiscaleFragmentChunk.md#source)
- [state](neuroglancer_mesh_frontend.MultiscaleFragmentChunk.md#state)
- [vertexBuffer](neuroglancer_mesh_frontend.MultiscaleFragmentChunk.md#vertexbuffer)

### Accessors

- [gl](neuroglancer_mesh_frontend.MultiscaleFragmentChunk.md#gl)

### Methods

- [copyToGPU](neuroglancer_mesh_frontend.MultiscaleFragmentChunk.md#copytogpu)
- [freeGPUMemory](neuroglancer_mesh_frontend.MultiscaleFragmentChunk.md#freegpumemory)

## Constructors

### constructor

• **new MultiscaleFragmentChunk**(`source`, `x`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`MultiscaleFragmentSource`](neuroglancer_mesh_frontend.MultiscaleFragmentSource.md) |
| `x` | `any` |

#### Overrides

[Chunk](neuroglancer_chunk_manager_frontend.Chunk.md).[constructor](neuroglancer_chunk_manager_frontend.Chunk.md#constructor)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:763](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/frontend.ts#L763)

## Properties

### indexBuffer

• **indexBuffer**: [`Buffer`](neuroglancer_webgl_buffer.Buffer.md)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:760](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/frontend.ts#L760)

___

### meshData

• **meshData**: [`EncodedMeshData`](../interfaces/neuroglancer_mesh_base.EncodedMeshData.md) & { `subChunkOffsets`: `Uint32Array`  }

#### Defined in

[src/neuroglancer/mesh/frontend.ts:757](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/frontend.ts#L757)

___

### normalBuffer

• **normalBuffer**: [`Buffer`](neuroglancer_webgl_buffer.Buffer.md)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:761](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/frontend.ts#L761)

___

### source

• **source**: [`MultiscaleFragmentSource`](neuroglancer_mesh_frontend.MultiscaleFragmentSource.md)

#### Overrides

[Chunk](neuroglancer_chunk_manager_frontend.Chunk.md).[source](neuroglancer_chunk_manager_frontend.Chunk.md#source)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:758](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/frontend.ts#L758)

___

### state

• **state**: [`ChunkState`](../enums/neuroglancer_chunk_manager_base.ChunkState.md) = `ChunkState.SYSTEM_MEMORY`

#### Inherited from

[Chunk](neuroglancer_chunk_manager_frontend.Chunk.md).[state](neuroglancer_chunk_manager_frontend.Chunk.md#state)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L33)

___

### vertexBuffer

• **vertexBuffer**: [`Buffer`](neuroglancer_webgl_buffer.Buffer.md)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:759](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/frontend.ts#L759)

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

[src/neuroglancer/mesh/frontend.ts:768](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/frontend.ts#L768)

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

[src/neuroglancer/mesh/frontend.ts:773](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/frontend.ts#L773)
