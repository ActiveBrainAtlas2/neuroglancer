[neuroglancer](../README.md) / [Modules](../modules.md) / [layer](../modules/layer.md) / [<internal\>](../modules/layer._internal_.md) / SingleMeshChunk

# Class: SingleMeshChunk

[layer](../modules/layer.md).[<internal>](../modules/layer._internal_.md).SingleMeshChunk

## Hierarchy

- [`Chunk`](data_panel_layout._internal_.Chunk.md)

  ↳ **`SingleMeshChunk`**

## Table of contents

### Constructors

- [constructor](layer._internal_.SingleMeshChunk.md#constructor)

### Properties

- [indexBuffer](layer._internal_.SingleMeshChunk.md#indexbuffer)
- [indices](layer._internal_.SingleMeshChunk.md#indices)
- [numIndices](layer._internal_.SingleMeshChunk.md#numindices)
- [source](layer._internal_.SingleMeshChunk.md#source)
- [state](layer._internal_.SingleMeshChunk.md#state)
- [vertexData](layer._internal_.SingleMeshChunk.md#vertexdata)

### Accessors

- [gl](layer._internal_.SingleMeshChunk.md#gl)

### Methods

- [copyToGPU](layer._internal_.SingleMeshChunk.md#copytogpu)
- [freeGPUMemory](layer._internal_.SingleMeshChunk.md#freegpumemory)

## Constructors

### constructor

• **new SingleMeshChunk**(`source`, `x`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`SingleMeshSource`](layer._internal_.SingleMeshSource.md) |
| `x` | `any` |

#### Overrides

[Chunk](data_panel_layout._internal_.Chunk.md).[constructor](data_panel_layout._internal_.Chunk.md#constructor)

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:286](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/single_mesh/frontend.ts#L286)

## Properties

### indexBuffer

• **indexBuffer**: [`Buffer`](axes_lines._internal_.Buffer.md)

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:281](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/single_mesh/frontend.ts#L281)

___

### indices

• **indices**: `Uint32Array`

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:283](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/single_mesh/frontend.ts#L283)

___

### numIndices

• **numIndices**: `number`

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:282](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/single_mesh/frontend.ts#L282)

___

### source

• **source**: [`SingleMeshSource`](layer._internal_.SingleMeshSource.md)

#### Overrides

[Chunk](data_panel_layout._internal_.Chunk.md).[source](data_panel_layout._internal_.Chunk.md#source)

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:280](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/single_mesh/frontend.ts#L280)

___

### state

• **state**: [`ChunkState`](../enums/data_panel_layout._internal_.ChunkState.md) = `ChunkState.SYSTEM_MEMORY`

#### Inherited from

[Chunk](data_panel_layout._internal_.Chunk.md).[state](data_panel_layout._internal_.Chunk.md#state)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L33)

___

### vertexData

• **vertexData**: [`VertexChunkData`](layer._internal_.VertexChunkData.md)

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:284](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/single_mesh/frontend.ts#L284)

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

[src/neuroglancer/single_mesh/frontend.ts:297](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/single_mesh/frontend.ts#L297)

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

[src/neuroglancer/single_mesh/frontend.ts:303](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/single_mesh/frontend.ts#L303)
