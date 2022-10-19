[neuroglancer](../README.md) / [Modules](../modules.md) / [layer](../modules/layer.md) / [<internal\>](../modules/layer._internal_.md) / FragmentChunk

# Class: FragmentChunk

[layer](../modules/layer.md).[<internal>](../modules/layer._internal_.md).FragmentChunk

## Hierarchy

- [`Chunk`](data_panel_layout._internal_.Chunk.md)

  ↳ **`FragmentChunk`**

## Table of contents

### Constructors

- [constructor](layer._internal_.FragmentChunk.md#constructor)

### Properties

- [indexBuffer](layer._internal_.FragmentChunk.md#indexbuffer)
- [meshData](layer._internal_.FragmentChunk.md#meshdata)
- [normalBuffer](layer._internal_.FragmentChunk.md#normalbuffer)
- [source](layer._internal_.FragmentChunk.md#source)
- [state](layer._internal_.FragmentChunk.md#state)
- [vertexBuffer](layer._internal_.FragmentChunk.md#vertexbuffer)

### Accessors

- [gl](layer._internal_.FragmentChunk.md#gl)

### Methods

- [copyToGPU](layer._internal_.FragmentChunk.md#copytogpu)
- [freeGPUMemory](layer._internal_.FragmentChunk.md#freegpumemory)

## Constructors

### constructor

• **new FragmentChunk**(`source`, `x`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`FragmentSource`](layer._internal_.FragmentSource.md) |
| `x` | `any` |

#### Overrides

[Chunk](data_panel_layout._internal_.Chunk.md).[constructor](data_panel_layout._internal_.Chunk.md#constructor)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:448](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/mesh/frontend.ts#L448)

## Properties

### indexBuffer

• **indexBuffer**: [`Buffer`](axes_lines._internal_.Buffer.md)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:444](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/mesh/frontend.ts#L444)

___

### meshData

• **meshData**: [`EncodedMeshData`](../interfaces/layer._internal_.EncodedMeshData.md)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:446](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/mesh/frontend.ts#L446)

___

### normalBuffer

• **normalBuffer**: [`Buffer`](axes_lines._internal_.Buffer.md)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:445](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/mesh/frontend.ts#L445)

___

### source

• **source**: [`FragmentSource`](layer._internal_.FragmentSource.md)

#### Overrides

[Chunk](data_panel_layout._internal_.Chunk.md).[source](data_panel_layout._internal_.Chunk.md#source)

#### Defined in

[src/neuroglancer/mesh/frontend.ts:442](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/mesh/frontend.ts#L442)

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

[src/neuroglancer/mesh/frontend.ts:443](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/mesh/frontend.ts#L443)

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

[src/neuroglancer/mesh/frontend.ts:453](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/mesh/frontend.ts#L453)

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

[src/neuroglancer/mesh/frontend.ts:458](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/mesh/frontend.ts#L458)
