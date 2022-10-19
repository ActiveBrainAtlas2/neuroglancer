[neuroglancer](../README.md) / [Modules](../modules.md) / [single\_mesh/frontend](../modules/single_mesh_frontend.md) / VertexChunkData

# Class: VertexChunkData

[single_mesh/frontend](../modules/single_mesh_frontend.md).VertexChunkData

## Table of contents

### Constructors

- [constructor](single_mesh_frontend.VertexChunkData.md#constructor)

### Properties

- [normalTexture](single_mesh_frontend.VertexChunkData.md#normaltexture)
- [vertexAttributeTextures](single_mesh_frontend.VertexChunkData.md#vertexattributetextures)
- [vertexAttributes](single_mesh_frontend.VertexChunkData.md#vertexattributes)
- [vertexNormals](single_mesh_frontend.VertexChunkData.md#vertexnormals)
- [vertexPositions](single_mesh_frontend.VertexChunkData.md#vertexpositions)
- [vertexTexture](single_mesh_frontend.VertexChunkData.md#vertextexture)

### Methods

- [copyToGPU](single_mesh_frontend.VertexChunkData.md#copytogpu)
- [freeGPUMemory](single_mesh_frontend.VertexChunkData.md#freegpumemory)

## Constructors

### constructor

• **new VertexChunkData**()

## Properties

### normalTexture

• **normalTexture**: ``null`` \| [`WebGLTexture`](../modules/annotation_annotation_layer_state._internal_.md#webgltexture)

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:250](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/single_mesh/frontend.ts#L250)

___

### vertexAttributeTextures

• **vertexAttributeTextures**: (``null`` \| [`WebGLTexture`](../modules/annotation_annotation_layer_state._internal_.md#webgltexture))[]

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:252](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/single_mesh/frontend.ts#L252)

___

### vertexAttributes

• **vertexAttributes**: `Float32Array`[]

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:251](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/single_mesh/frontend.ts#L251)

___

### vertexNormals

• **vertexNormals**: `Float32Array`

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:248](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/single_mesh/frontend.ts#L248)

___

### vertexPositions

• **vertexPositions**: `Float32Array`

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:247](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/single_mesh/frontend.ts#L247)

___

### vertexTexture

• **vertexTexture**: ``null`` \| [`WebGLTexture`](../modules/annotation_annotation_layer_state._internal_.md#webgltexture)

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:249](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/single_mesh/frontend.ts#L249)

## Methods

### copyToGPU

▸ **copyToGPU**(`gl`, `attributeFormats`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |
| `attributeFormats` | [`TextureFormat`](webgl_texture_access.TextureFormat.md)[] |

#### Returns

`void`

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:254](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/single_mesh/frontend.ts#L254)

___

### freeGPUMemory

▸ **freeGPUMemory**(`gl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:268](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/single_mesh/frontend.ts#L268)
