[neuroglancer](../README.md) / [Modules](../modules.md) / [skeleton/frontend](../modules/skeleton_frontend.md) / SkeletonChunk

# Class: SkeletonChunk

[skeleton/frontend](../modules/skeleton_frontend.md).SkeletonChunk

## Hierarchy

- [`Chunk`](chunk_manager_frontend.Chunk.md)

  ↳ **`SkeletonChunk`**

## Table of contents

### Constructors

- [constructor](skeleton_frontend.SkeletonChunk.md#constructor)

### Properties

- [indexBuffer](skeleton_frontend.SkeletonChunk.md#indexbuffer)
- [indices](skeleton_frontend.SkeletonChunk.md#indices)
- [numIndices](skeleton_frontend.SkeletonChunk.md#numindices)
- [numVertices](skeleton_frontend.SkeletonChunk.md#numvertices)
- [source](skeleton_frontend.SkeletonChunk.md#source)
- [state](skeleton_frontend.SkeletonChunk.md#state)
- [vertexAttributeOffsets](skeleton_frontend.SkeletonChunk.md#vertexattributeoffsets)
- [vertexAttributeTextures](skeleton_frontend.SkeletonChunk.md#vertexattributetextures)
- [vertexAttributes](skeleton_frontend.SkeletonChunk.md#vertexattributes)

### Accessors

- [gl](skeleton_frontend.SkeletonChunk.md#gl)

### Methods

- [copyToGPU](skeleton_frontend.SkeletonChunk.md#copytogpu)
- [freeGPUMemory](skeleton_frontend.SkeletonChunk.md#freegpumemory)

## Constructors

### constructor

• **new SkeletonChunk**(`source`, `x`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`SkeletonSource`](skeleton_frontend.SkeletonSource.md) |
| `x` | `any` |

#### Overrides

[Chunk](chunk_manager_frontend.Chunk.md).[constructor](chunk_manager_frontend.Chunk.md#constructor)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:586](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L586)

## Properties

### indexBuffer

• **indexBuffer**: [`Buffer`](webgl_buffer.Buffer.md)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:580](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L580)

___

### indices

• **indices**: `Uint32Array`

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:579](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L579)

___

### numIndices

• **numIndices**: `number`

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:581](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L581)

___

### numVertices

• **numVertices**: `number`

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:582](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L582)

___

### source

• **source**: [`SkeletonSource`](skeleton_frontend.SkeletonSource.md)

#### Overrides

[Chunk](chunk_manager_frontend.Chunk.md).[source](chunk_manager_frontend.Chunk.md#source)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:577](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L577)

___

### state

• **state**: [`ChunkState`](../enums/chunk_manager_base.ChunkState.md) = `ChunkState.SYSTEM_MEMORY`

#### Inherited from

[Chunk](chunk_manager_frontend.Chunk.md).[state](chunk_manager_frontend.Chunk.md#state)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/frontend.ts#L33)

___

### vertexAttributeOffsets

• **vertexAttributeOffsets**: `Uint32Array`

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:583](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L583)

___

### vertexAttributeTextures

• **vertexAttributeTextures**: (``null`` \| [`WebGLTexture`](../modules/annotation_annotation_layer_state._internal_.md#webgltexture))[]

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:584](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L584)

___

### vertexAttributes

• **vertexAttributes**: `Uint8Array`

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:578](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L578)

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

[src/neuroglancer/skeleton/frontend.ts:595](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L595)

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

[src/neuroglancer/skeleton/frontend.ts:615](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L615)
