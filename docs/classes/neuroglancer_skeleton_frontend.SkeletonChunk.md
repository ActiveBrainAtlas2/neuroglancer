[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/skeleton/frontend](../modules/neuroglancer_skeleton_frontend.md) / SkeletonChunk

# Class: SkeletonChunk

[neuroglancer/skeleton/frontend](../modules/neuroglancer_skeleton_frontend.md).SkeletonChunk

## Hierarchy

- [`Chunk`](neuroglancer_chunk_manager_frontend.Chunk.md)

  ↳ **`SkeletonChunk`**

## Table of contents

### Constructors

- [constructor](neuroglancer_skeleton_frontend.SkeletonChunk.md#constructor)

### Properties

- [indexBuffer](neuroglancer_skeleton_frontend.SkeletonChunk.md#indexbuffer)
- [indices](neuroglancer_skeleton_frontend.SkeletonChunk.md#indices)
- [numIndices](neuroglancer_skeleton_frontend.SkeletonChunk.md#numindices)
- [numVertices](neuroglancer_skeleton_frontend.SkeletonChunk.md#numvertices)
- [source](neuroglancer_skeleton_frontend.SkeletonChunk.md#source)
- [state](neuroglancer_skeleton_frontend.SkeletonChunk.md#state)
- [vertexAttributeOffsets](neuroglancer_skeleton_frontend.SkeletonChunk.md#vertexattributeoffsets)
- [vertexAttributeTextures](neuroglancer_skeleton_frontend.SkeletonChunk.md#vertexattributetextures)
- [vertexAttributes](neuroglancer_skeleton_frontend.SkeletonChunk.md#vertexattributes)

### Accessors

- [gl](neuroglancer_skeleton_frontend.SkeletonChunk.md#gl)

### Methods

- [copyToGPU](neuroglancer_skeleton_frontend.SkeletonChunk.md#copytogpu)
- [freeGPUMemory](neuroglancer_skeleton_frontend.SkeletonChunk.md#freegpumemory)

## Constructors

### constructor

• **new SkeletonChunk**(`source`, `x`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`SkeletonSource`](neuroglancer_skeleton_frontend.SkeletonSource.md) |
| `x` | `any` |

#### Overrides

[Chunk](neuroglancer_chunk_manager_frontend.Chunk.md).[constructor](neuroglancer_chunk_manager_frontend.Chunk.md#constructor)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:586](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/skeleton/frontend.ts#L586)

## Properties

### indexBuffer

• **indexBuffer**: [`Buffer`](neuroglancer_webgl_buffer.Buffer.md)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:580](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/skeleton/frontend.ts#L580)

___

### indices

• **indices**: `Uint32Array`

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:579](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/skeleton/frontend.ts#L579)

___

### numIndices

• **numIndices**: `number`

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:581](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/skeleton/frontend.ts#L581)

___

### numVertices

• **numVertices**: `number`

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:582](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/skeleton/frontend.ts#L582)

___

### source

• **source**: [`SkeletonSource`](neuroglancer_skeleton_frontend.SkeletonSource.md)

#### Overrides

[Chunk](neuroglancer_chunk_manager_frontend.Chunk.md).[source](neuroglancer_chunk_manager_frontend.Chunk.md#source)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:577](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/skeleton/frontend.ts#L577)

___

### state

• **state**: [`ChunkState`](../enums/neuroglancer_chunk_manager_base.ChunkState.md) = `ChunkState.SYSTEM_MEMORY`

#### Inherited from

[Chunk](neuroglancer_chunk_manager_frontend.Chunk.md).[state](neuroglancer_chunk_manager_frontend.Chunk.md#state)

#### Defined in

[src/neuroglancer/chunk_manager/frontend.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/frontend.ts#L33)

___

### vertexAttributeOffsets

• **vertexAttributeOffsets**: `Uint32Array`

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:583](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/skeleton/frontend.ts#L583)

___

### vertexAttributeTextures

• **vertexAttributeTextures**: (``null`` \| [`WebGLTexture`](../modules/main_module._internal_.md#webgltexture))[]

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:584](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/skeleton/frontend.ts#L584)

___

### vertexAttributes

• **vertexAttributes**: `Uint8Array`

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:578](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/skeleton/frontend.ts#L578)

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

[src/neuroglancer/skeleton/frontend.ts:595](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/skeleton/frontend.ts#L595)

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

[src/neuroglancer/skeleton/frontend.ts:615](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/skeleton/frontend.ts#L615)
