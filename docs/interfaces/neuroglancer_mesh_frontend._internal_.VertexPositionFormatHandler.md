[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/mesh/frontend](../modules/neuroglancer_mesh_frontend.md) / [<internal\>](../modules/neuroglancer_mesh_frontend._internal_.md) / VertexPositionFormatHandler

# Interface: VertexPositionFormatHandler

[neuroglancer/mesh/frontend](../modules/neuroglancer_mesh_frontend.md).[<internal>](../modules/neuroglancer_mesh_frontend._internal_.md).VertexPositionFormatHandler

## Table of contents

### Properties

- [bind](neuroglancer_mesh_frontend._internal_.VertexPositionFormatHandler.md#bind)
- [defineShader](neuroglancer_mesh_frontend._internal_.VertexPositionFormatHandler.md#defineshader)
- [endLayer](neuroglancer_mesh_frontend._internal_.VertexPositionFormatHandler.md#endlayer)

## Properties

### bind

• **bind**: (`gl`: [`GL`](neuroglancer_webgl_context.GL.md), `shader`: [`ShaderProgram`](../classes/neuroglancer_webgl_shader.ShaderProgram.md), `fragmentChunk`: [`FragmentChunk`](../classes/neuroglancer_mesh_frontend.FragmentChunk.md) \| [`MultiscaleFragmentChunk`](../classes/neuroglancer_mesh_frontend.MultiscaleFragmentChunk.md)) => `void`

#### Type declaration

▸ (`gl`, `shader`, `fragmentChunk`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](neuroglancer_webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](../classes/neuroglancer_webgl_shader.ShaderProgram.md) |
| `fragmentChunk` | [`FragmentChunk`](../classes/neuroglancer_mesh_frontend.FragmentChunk.md) \| [`MultiscaleFragmentChunk`](../classes/neuroglancer_mesh_frontend.MultiscaleFragmentChunk.md) |

##### Returns

`void`

#### Defined in

[src/neuroglancer/mesh/frontend.ts:114](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/frontend.ts#L114)

___

### defineShader

• **defineShader**: (`builder`: [`ShaderBuilder`](../classes/neuroglancer_webgl_shader.ShaderBuilder.md)) => `void`

#### Type declaration

▸ (`builder`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`ShaderBuilder`](../classes/neuroglancer_webgl_shader.ShaderBuilder.md) |

##### Returns

`void`

#### Defined in

[src/neuroglancer/mesh/frontend.ts:113](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/frontend.ts#L113)

___

### endLayer

• **endLayer**: (`gl`: [`GL`](neuroglancer_webgl_context.GL.md), `shader`: [`ShaderProgram`](../classes/neuroglancer_webgl_shader.ShaderProgram.md)) => `void`

#### Type declaration

▸ (`gl`, `shader`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](neuroglancer_webgl_context.GL.md) |
| `shader` | [`ShaderProgram`](../classes/neuroglancer_webgl_shader.ShaderProgram.md) |

##### Returns

`void`

#### Defined in

[src/neuroglancer/mesh/frontend.ts:116](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/frontend.ts#L116)
