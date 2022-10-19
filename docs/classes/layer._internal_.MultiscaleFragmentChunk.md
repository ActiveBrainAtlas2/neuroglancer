[neuroglancer](../README.md) / [Modules](../modules.md) / [layer](../modules/layer.md) / [<internal\>](../modules/layer._internal_.md) / MultiscaleFragmentChunk

# Class: MultiscaleFragmentChunk

[layer](../modules/layer.md).[<internal>](../modules/layer._internal_.md).MultiscaleFragmentChunk

## Hierarchy

- [`Chunk`](data_panel_layout._internal_.Chunk.md)

  ↳ **`MultiscaleFragmentChunk`**

## Table of contents

### Constructors

- [constructor](layer._internal_.MultiscaleFragmentChunk.md#constructor)

### Properties

- [indexBuffer](layer._internal_.MultiscaleFragmentChunk.md#indexbuffer)
- [meshData](layer._internal_.MultiscaleFragmentChunk.md#meshdata)
- [normalBuffer](layer._internal_.MultiscaleFragmentChunk.md#normalbuffer)
- [source](layer._internal_.MultiscaleFragmentChunk.md#source)
- [state](layer._internal_.MultiscaleFragmentChunk.md#state)
- [vertexBuffer](layer._internal_.MultiscaleFragmentChunk.md#vertexbuffer)

### Accessors

- [gl](layer._internal_.MultiscaleFragmentChunk.md#gl)

### Methods

- [copyToGPU](layer._internal_.MultiscaleFragmentChunk.md#copytogpu)
- [freeGPUMemory](layer._internal_.MultiscaleFragmentChunk.md#freegpumemory)

## Constructors

### constructor

• **new MultiscaleFragmentChunk**(`source`, `x`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`MultiscaleFragmentSource`](layer._internal_.MultiscaleFragmentSource.md) |
| `x` | `any` |

#### Overrides

[Chunk](data_panel_layout._internal_.Chunk.md).[constructor](data_panel_layout._internal_.Chunk.md#constructor)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:763](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/mesh/frontend.ts#L763)

## Properties

### indexBuffer

• **indexBuffer**: [`Buffer`](axes_lines._internal_.Buffer.md)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:760](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/mesh/frontend.ts#L760)

___

### meshData

• **meshData**: [`EncodedMeshData`](../interfaces/layer._internal_.EncodedMeshData.md) & { `subChunkOffsets`: `Uint32Array`  }

#### Defined in

[src/neuroglancer/mesh/frontend.ts:757](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/mesh/frontend.ts#L757)

___

### normalBuffer

• **normalBuffer**: [`Buffer`](axes_lines._internal_.Buffer.md)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:761](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/mesh/frontend.ts#L761)

___

### source

• **source**: [`MultiscaleFragmentSource`](layer._internal_.MultiscaleFragmentSource.md)

#### Overrides

[Chunk](data_panel_layout._internal_.Chunk.md).[source](data_panel_layout._internal_.Chunk.md#source)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:758](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/mesh/frontend.ts#L758)

___

### state

• **state**: [`ChunkState`](../enums/data_panel_layout._internal_.ChunkState.md) = `ChunkState.SYSTEM_MEMORY`

#### Inherited from

[Chunk](data_panel_layout._internal_.Chunk.md).[state](data_panel_layout._internal_.Chunk.md#state)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L33)

___

### vertexBuffer

• **vertexBuffer**: [`Buffer`](axes_lines._internal_.Buffer.md)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:759](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/mesh/frontend.ts#L759)

## Accessors

### gl

• `get` **gl**(): [`GL`](../interfaces/axes_lines._internal_.GL.md)

#### Returns

[`GL`](../interfaces/axes_lines._internal_.GL.md)

#### Inherited from

Chunk.gl

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L36)

## Methods

### copyToGPU

▸ **copyToGPU**(`gl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/axes_lines._internal_.GL.md) |

#### Returns

`void`

#### Overrides

[Chunk](data_panel_layout._internal_.Chunk.md).[copyToGPU](data_panel_layout._internal_.Chunk.md#copytogpu)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:768](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/mesh/frontend.ts#L768)

___

### freeGPUMemory

▸ **freeGPUMemory**(`gl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/axes_lines._internal_.GL.md) |

#### Returns

`void`

#### Overrides

[Chunk](data_panel_layout._internal_.Chunk.md).[freeGPUMemory](data_panel_layout._internal_.Chunk.md#freegpumemory)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:773](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/mesh/frontend.ts#L773)
