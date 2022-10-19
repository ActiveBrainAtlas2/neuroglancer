[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/mesh/frontend](../modules/neuroglancer_mesh_frontend.md) / MultiscaleManifestChunk

# Class: MultiscaleManifestChunk

[neuroglancer/mesh/frontend](../modules/neuroglancer_mesh_frontend.md).MultiscaleManifestChunk

## Hierarchy

- [`Chunk`](neuroglancer_chunk_manager_frontend.Chunk.md)

  ↳ **`MultiscaleManifestChunk`**

## Table of contents

### Constructors

- [constructor](neuroglancer_mesh_frontend.MultiscaleManifestChunk.md#constructor)

### Properties

- [manifest](neuroglancer_mesh_frontend.MultiscaleManifestChunk.md#manifest)
- [source](neuroglancer_mesh_frontend.MultiscaleManifestChunk.md#source)
- [state](neuroglancer_mesh_frontend.MultiscaleManifestChunk.md#state)

### Accessors

- [gl](neuroglancer_mesh_frontend.MultiscaleManifestChunk.md#gl)

### Methods

- [copyToGPU](neuroglancer_mesh_frontend.MultiscaleManifestChunk.md#copytogpu)
- [freeGPUMemory](neuroglancer_mesh_frontend.MultiscaleManifestChunk.md#freegpumemory)

## Constructors

### constructor

• **new MultiscaleManifestChunk**(`source`, `x`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`MultiscaleMeshSource`](neuroglancer_mesh_frontend.MultiscaleMeshSource.md) |
| `x` | `any` |

#### Overrides

[Chunk](neuroglancer_chunk_manager_frontend.Chunk.md).[constructor](neuroglancer_chunk_manager_frontend.Chunk.md#constructor)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:750](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/mesh/frontend.ts#L750)

## Properties

### manifest

• **manifest**: [`MultiscaleMeshManifest`](../interfaces/neuroglancer_mesh_multiscale.MultiscaleMeshManifest.md)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:747](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/mesh/frontend.ts#L747)

___

### source

• **source**: [`MultiscaleMeshSource`](neuroglancer_mesh_frontend.MultiscaleMeshSource.md)

#### Overrides

[Chunk](neuroglancer_chunk_manager_frontend.Chunk.md).[source](neuroglancer_chunk_manager_frontend.Chunk.md#source)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:748](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/mesh/frontend.ts#L748)

___

### state

• **state**: [`ChunkState`](../enums/neuroglancer_chunk_manager_base.ChunkState.md) = `ChunkState.SYSTEM_MEMORY`

#### Inherited from

[Chunk](neuroglancer_chunk_manager_frontend.Chunk.md).[state](neuroglancer_chunk_manager_frontend.Chunk.md#state)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L33)

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

[src/neuroglancer/chunk_manager/frontend.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L40)

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

[src/neuroglancer/chunk_manager/frontend.ts:44](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/frontend.ts#L44)
