[neuroglancer](../README.md) / [Modules](../modules.md) / webgl/trivial\_shaders

# Module: webgl/trivial\_shaders

## Table of contents

### Functions

- [defineCopyFragmentShader](webgl_trivial_shaders.md#definecopyfragmentshader)
- [elementWiseTextureShader](webgl_trivial_shaders.md#elementwisetextureshader)
- [trivialColorShader](webgl_trivial_shaders.md#trivialcolorshader)
- [trivialTextureShader](webgl_trivial_shaders.md#trivialtextureshader)
- [trivialUniformColorShader](webgl_trivial_shaders.md#trivialuniformcolorshader)

## Functions

### defineCopyFragmentShader

▸ **defineCopyFragmentShader**(`builder`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`ShaderBuilder`](../classes/webgl_shader.ShaderBuilder.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/trivial_shaders.ts:21](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/trivial_shaders.ts#L21)

___

### elementWiseTextureShader

▸ **elementWiseTextureShader**(`gl`, `shaderModule?`, `numTextures?`): [`ShaderProgram`](../classes/webgl_shader.ShaderProgram.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) | `undefined` |
| `shaderModule` | [`ShaderModule`](webgl_shader.md#shadermodule) | `defineCopyFragmentShader` |
| `numTextures` | `number` | `1` |

#### Returns

[`ShaderProgram`](../classes/webgl_shader.ShaderProgram.md)

#### Defined in

[src/neuroglancer/webgl/trivial_shaders.ts:26](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/trivial_shaders.ts#L26)

___

### trivialColorShader

▸ **trivialColorShader**(`gl`): [`ShaderProgram`](../classes/webgl_shader.ShaderProgram.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |

#### Returns

[`ShaderProgram`](../classes/webgl_shader.ShaderProgram.md)

#### Defined in

[src/neuroglancer/webgl/trivial_shaders.ts:62](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/trivial_shaders.ts#L62)

___

### trivialTextureShader

▸ **trivialTextureShader**(`gl`): [`ShaderProgram`](../classes/webgl_shader.ShaderProgram.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |

#### Returns

[`ShaderProgram`](../classes/webgl_shader.ShaderProgram.md)

#### Defined in

[src/neuroglancer/webgl/trivial_shaders.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/trivial_shaders.ts#L58)

___

### trivialUniformColorShader

▸ **trivialUniformColorShader**(`gl`): [`ShaderProgram`](../classes/webgl_shader.ShaderProgram.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |

#### Returns

[`ShaderProgram`](../classes/webgl_shader.ShaderProgram.md)

#### Defined in

[src/neuroglancer/webgl/trivial_shaders.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/trivial_shaders.ts#L76)
