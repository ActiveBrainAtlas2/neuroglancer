[neuroglancer](../README.md) / [Modules](../modules.md) / [layer](../modules/layer.md) / [<internal\>](../modules/layer._internal_.md) / SkeletonChunk

# Class: SkeletonChunk

[layer](../modules/layer.md).[<internal>](../modules/layer._internal_.md).SkeletonChunk

## Hierarchy

- [`Chunk`](data_panel_layout._internal_.Chunk.md)

  ↳ **`SkeletonChunk`**

## Table of contents

### Constructors

- [constructor](layer._internal_.SkeletonChunk.md#constructor)

### Properties

- [indexBuffer](layer._internal_.SkeletonChunk.md#indexbuffer)
- [indices](layer._internal_.SkeletonChunk.md#indices)
- [numIndices](layer._internal_.SkeletonChunk.md#numindices)
- [numVertices](layer._internal_.SkeletonChunk.md#numvertices)
- [source](layer._internal_.SkeletonChunk.md#source)
- [state](layer._internal_.SkeletonChunk.md#state)
- [vertexAttributeOffsets](layer._internal_.SkeletonChunk.md#vertexattributeoffsets)
- [vertexAttributeTextures](layer._internal_.SkeletonChunk.md#vertexattributetextures)
- [vertexAttributes](layer._internal_.SkeletonChunk.md#vertexattributes)

### Accessors

- [gl](layer._internal_.SkeletonChunk.md#gl)

### Methods

- [copyToGPU](layer._internal_.SkeletonChunk.md#copytogpu)
- [freeGPUMemory](layer._internal_.SkeletonChunk.md#freegpumemory)

## Constructors

### constructor

• **new SkeletonChunk**(`source`, `x`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`SkeletonSource`](layer._internal_.SkeletonSource.md) |
| `x` | `any` |

#### Overrides

[Chunk](data_panel_layout._internal_.Chunk.md).[constructor](data_panel_layout._internal_.Chunk.md#constructor)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:586](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/skeleton/frontend.ts#L586)

## Properties

### indexBuffer

• **indexBuffer**: [`Buffer`](axes_lines._internal_.Buffer.md)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:580](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/skeleton/frontend.ts#L580)

___

### indices

• **indices**: `Uint32Array`

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:579](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/skeleton/frontend.ts#L579)

___

### numIndices

• **numIndices**: `number`

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:581](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/skeleton/frontend.ts#L581)

___

### numVertices

• **numVertices**: `number`

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:582](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/skeleton/frontend.ts#L582)

___

### source

• **source**: [`SkeletonSource`](layer._internal_.SkeletonSource.md)

#### Overrides

[Chunk](data_panel_layout._internal_.Chunk.md).[source](data_panel_layout._internal_.Chunk.md#source)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:577](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/skeleton/frontend.ts#L577)

___

### state

• **state**: [`ChunkState`](../enums/data_panel_layout._internal_.ChunkState.md) = `ChunkState.SYSTEM_MEMORY`

#### Inherited from

[Chunk](data_panel_layout._internal_.Chunk.md).[state](data_panel_layout._internal_.Chunk.md#state)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/chunk_manager/frontend.ts#L33)

___

### vertexAttributeOffsets

• **vertexAttributeOffsets**: `Uint32Array`

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:583](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/skeleton/frontend.ts#L583)

___

### vertexAttributeTextures

• **vertexAttributeTextures**: (``null`` \| [`WebGLTexture`](../modules/axes_lines._internal_.md#webgltexture))[]

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:584](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/skeleton/frontend.ts#L584)

___

### vertexAttributes

• **vertexAttributes**: `Uint8Array`

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:578](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/skeleton/frontend.ts#L578)

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

[src/neuroglancer/skeleton/frontend.ts:595](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/skeleton/frontend.ts#L595)

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

[src/neuroglancer/skeleton/frontend.ts:615](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/skeleton/frontend.ts#L615)
