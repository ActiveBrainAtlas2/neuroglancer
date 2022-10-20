[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/mesh/frontend](../modules/neuroglancer_mesh_frontend.md) / ManifestChunk

# Class: ManifestChunk

[neuroglancer/mesh/frontend](../modules/neuroglancer_mesh_frontend.md).ManifestChunk

## Hierarchy

- [`Chunk`](neuroglancer_chunk_manager_frontend.Chunk.md)

  ↳ **`ManifestChunk`**

## Table of contents

### Constructors

- [constructor](neuroglancer_mesh_frontend.ManifestChunk.md#constructor)

### Properties

- [fragmentIds](neuroglancer_mesh_frontend.ManifestChunk.md#fragmentids)
- [source](neuroglancer_mesh_frontend.ManifestChunk.md#source)
- [state](neuroglancer_mesh_frontend.ManifestChunk.md#state)

### Accessors

- [gl](neuroglancer_mesh_frontend.ManifestChunk.md#gl)

### Methods

- [copyToGPU](neuroglancer_mesh_frontend.ManifestChunk.md#copytogpu)
- [freeGPUMemory](neuroglancer_mesh_frontend.ManifestChunk.md#freegpumemory)

## Constructors

### constructor

• **new ManifestChunk**(`source`, `x`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`MeshSource`](neuroglancer_mesh_frontend.MeshSource.md) |
| `x` | `any` |

#### Overrides

[Chunk](neuroglancer_chunk_manager_frontend.Chunk.md).[constructor](neuroglancer_chunk_manager_frontend.Chunk.md#constructor)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:435](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/frontend.ts#L435)

## Properties

### fragmentIds

• **fragmentIds**: `string`[]

#### Defined in

[src/neuroglancer/mesh/frontend.ts:433](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/frontend.ts#L433)

___

### source

• **source**: [`ChunkSource`](neuroglancer_chunk_manager_frontend.ChunkSource.md)

#### Inherited from

[Chunk](neuroglancer_chunk_manager_frontend.Chunk.md).[source](neuroglancer_chunk_manager_frontend.Chunk.md#source)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L34)

___

### state

• **state**: [`ChunkState`](../enums/neuroglancer_chunk_manager_base.ChunkState.md) = `ChunkState.SYSTEM_MEMORY`

#### Inherited from

[Chunk](neuroglancer_chunk_manager_frontend.Chunk.md).[state](neuroglancer_chunk_manager_frontend.Chunk.md#state)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L33)

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

▸ **copyToGPU**(`_gl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |

#### Returns

`void`

#### Inherited from

[Chunk](neuroglancer_chunk_manager_frontend.Chunk.md).[copyToGPU](neuroglancer_chunk_manager_frontend.Chunk.md#copytogpu)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L40)

___

### freeGPUMemory

▸ **freeGPUMemory**(`_gl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |

#### Returns

`void`

#### Inherited from

[Chunk](neuroglancer_chunk_manager_frontend.Chunk.md).[freeGPUMemory](neuroglancer_chunk_manager_frontend.Chunk.md#freegpumemory)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:44](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L44)
