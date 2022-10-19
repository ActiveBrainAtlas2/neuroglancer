[neuroglancer](../README.md) / [Modules](../modules.md) / [mesh/frontend](../modules/mesh_frontend.md) / [<internal\>](../modules/mesh_frontend._internal_.md) / VertexPositionFormatHandler

# Interface: VertexPositionFormatHandler

[mesh/frontend](../modules/mesh_frontend.md).[<internal>](../modules/mesh_frontend._internal_.md).VertexPositionFormatHandler

## Table of contents

### Methods

- [bind](mesh_frontend._internal_.VertexPositionFormatHandler.md#bind)
- [defineShader](mesh_frontend._internal_.VertexPositionFormatHandler.md#defineshader)
- [endLayer](mesh_frontend._internal_.VertexPositionFormatHandler.md#endlayer)

## Methods

### bind

▸ **bind**(`gl`, `shader`, `fragmentChunk`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](../classes/webgl_shader.ShaderProgram.md) |
| `fragmentChunk` | [`FragmentChunk`](../classes/mesh_frontend.FragmentChunk.md) \| [`MultiscaleFragmentChunk`](../classes/mesh_frontend.MultiscaleFragmentChunk.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/mesh/frontend.ts:115](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/frontend.ts#L115)

___

### defineShader

▸ **defineShader**(`builder`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`ShaderBuilder`](../classes/webgl_shader.ShaderBuilder.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/mesh/frontend.ts:113](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/frontend.ts#L113)

___

### endLayer

▸ **endLayer**(`gl`, `shader`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](../classes/webgl_shader.ShaderProgram.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/mesh/frontend.ts:116](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/frontend.ts#L116)
