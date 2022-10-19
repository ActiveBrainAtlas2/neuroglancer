[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/mesh/frontend](../modules/neuroglancer_mesh_frontend.md) / FragmentChunk

# Class: FragmentChunk

[neuroglancer/mesh/frontend](../modules/neuroglancer_mesh_frontend.md).FragmentChunk

## Hierarchy

- [`Chunk`](neuroglancer_chunk_manager_frontend.Chunk.md)

  ↳ **`FragmentChunk`**

## Table of contents

### Constructors

- [constructor](neuroglancer_mesh_frontend.FragmentChunk.md#constructor)

### Properties

- [indexBuffer](neuroglancer_mesh_frontend.FragmentChunk.md#indexbuffer)
- [meshData](neuroglancer_mesh_frontend.FragmentChunk.md#meshdata)
- [normalBuffer](neuroglancer_mesh_frontend.FragmentChunk.md#normalbuffer)
- [source](neuroglancer_mesh_frontend.FragmentChunk.md#source)
- [state](neuroglancer_mesh_frontend.FragmentChunk.md#state)
- [vertexBuffer](neuroglancer_mesh_frontend.FragmentChunk.md#vertexbuffer)

### Accessors

- [gl](neuroglancer_mesh_frontend.FragmentChunk.md#gl)

### Methods

- [copyToGPU](neuroglancer_mesh_frontend.FragmentChunk.md#copytogpu)
- [freeGPUMemory](neuroglancer_mesh_frontend.FragmentChunk.md#freegpumemory)

## Constructors

### constructor

• **new FragmentChunk**(`source`, `x`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`FragmentSource`](neuroglancer_mesh_frontend.FragmentSource.md) |
| `x` | `any` |

#### Overrides

[Chunk](neuroglancer_chunk_manager_frontend.Chunk.md).[constructor](neuroglancer_chunk_manager_frontend.Chunk.md#constructor)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:448](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/mesh/frontend.ts#L448)

## Properties

### indexBuffer

• **indexBuffer**: [`Buffer`](neuroglancer_webgl_buffer.Buffer.md)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:444](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/mesh/frontend.ts#L444)

___

### meshData

• **meshData**: [`EncodedMeshData`](../interfaces/neuroglancer_mesh_base.EncodedMeshData.md)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:446](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/mesh/frontend.ts#L446)

___

### normalBuffer

• **normalBuffer**: [`Buffer`](neuroglancer_webgl_buffer.Buffer.md)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:445](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/mesh/frontend.ts#L445)

___

### source

• **source**: [`FragmentSource`](neuroglancer_mesh_frontend.FragmentSource.md)

#### Overrides

[Chunk](neuroglancer_chunk_manager_frontend.Chunk.md).[source](neuroglancer_chunk_manager_frontend.Chunk.md#source)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:442](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/mesh/frontend.ts#L442)

___

### state

• **state**: [`ChunkState`](../enums/neuroglancer_chunk_manager_base.ChunkState.md) = `ChunkState.SYSTEM_MEMORY`

#### Inherited from

[Chunk](neuroglancer_chunk_manager_frontend.Chunk.md).[state](neuroglancer_chunk_manager_frontend.Chunk.md#state)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L33)

___

### vertexBuffer

• **vertexBuffer**: [`Buffer`](neuroglancer_webgl_buffer.Buffer.md)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:443](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/mesh/frontend.ts#L443)

## Accessors

### gl

• `get` **gl**(): [`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Returns

[`GL`](../interfaces/neuroglancer_webgl_context.GL.md)

#### Inherited from

Chunk.gl

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L36)

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

[src/neuroglancer/mesh/frontend.ts:453](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/mesh/frontend.ts#L453)

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

[src/neuroglancer/mesh/frontend.ts:458](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/mesh/frontend.ts#L458)
