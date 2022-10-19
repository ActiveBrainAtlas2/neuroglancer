[neuroglancer](../README.md) / [Modules](../modules.md) / [layer](../modules/layer.md) / [<internal\>](../modules/layer._internal_.md) / VertexChunkData

# Class: VertexChunkData

[layer](../modules/layer.md).[<internal>](../modules/layer._internal_.md).VertexChunkData

## Table of contents

### Constructors

- [constructor](layer._internal_.VertexChunkData.md#constructor)

### Properties

- [normalTexture](layer._internal_.VertexChunkData.md#normaltexture)
- [vertexAttributeTextures](layer._internal_.VertexChunkData.md#vertexattributetextures)
- [vertexAttributes](layer._internal_.VertexChunkData.md#vertexattributes)
- [vertexNormals](layer._internal_.VertexChunkData.md#vertexnormals)
- [vertexPositions](layer._internal_.VertexChunkData.md#vertexpositions)
- [vertexTexture](layer._internal_.VertexChunkData.md#vertextexture)

### Methods

- [copyToGPU](layer._internal_.VertexChunkData.md#copytogpu)
- [freeGPUMemory](layer._internal_.VertexChunkData.md#freegpumemory)

## Constructors

### constructor

• **new VertexChunkData**()

## Properties

### normalTexture

• **normalTexture**: ``null`` \| [`WebGLTexture`](../modules/axes_lines._internal_.md#webgltexture)

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:250](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/single_mesh/frontend.ts#L250)

___

### vertexAttributeTextures

• **vertexAttributeTextures**: (``null`` \| [`WebGLTexture`](../modules/axes_lines._internal_.md#webgltexture))[]

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:252](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/single_mesh/frontend.ts#L252)

___

### vertexAttributes

• **vertexAttributes**: `Float32Array`[]

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:251](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/single_mesh/frontend.ts#L251)

___

### vertexNormals

• **vertexNormals**: `Float32Array`

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:248](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/single_mesh/frontend.ts#L248)

___

### vertexPositions

• **vertexPositions**: `Float32Array`

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:247](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/single_mesh/frontend.ts#L247)

___

### vertexTexture

• **vertexTexture**: ``null`` \| [`WebGLTexture`](../modules/axes_lines._internal_.md#webgltexture)

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:249](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/single_mesh/frontend.ts#L249)

## Methods

### copyToGPU

▸ **copyToGPU**(`gl`, `attributeFormats`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/axes_lines._internal_.GL.md) |
| `attributeFormats` | [`TextureFormat`](layer._internal_.TextureFormat.md)[] |

#### Returns

`void`

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:254](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/single_mesh/frontend.ts#L254)

___

### freeGPUMemory

▸ **freeGPUMemory**(`gl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/axes_lines._internal_.GL.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:268](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/single_mesh/frontend.ts#L268)
