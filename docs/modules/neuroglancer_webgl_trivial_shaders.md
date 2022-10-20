[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/webgl/trivial\_shaders

# Module: neuroglancer/webgl/trivial\_shaders

## Table of contents

### Functions

- [defineCopyFragmentShader](neuroglancer_webgl_trivial_shaders.md#definecopyfragmentshader)
- [elementWiseTextureShader](neuroglancer_webgl_trivial_shaders.md#elementwisetextureshader)
- [trivialColorShader](neuroglancer_webgl_trivial_shaders.md#trivialcolorshader)
- [trivialTextureShader](neuroglancer_webgl_trivial_shaders.md#trivialtextureshader)
- [trivialUniformColorShader](neuroglancer_webgl_trivial_shaders.md#trivialuniformcolorshader)

## Functions

### defineCopyFragmentShader

▸ **defineCopyFragmentShader**(`builder`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`ShaderBuilder`](../classes/neuroglancer_webgl_shader.ShaderBuilder.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/trivial_shaders.ts:21](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/trivial_shaders.ts#L21)

___

### elementWiseTextureShader

▸ **elementWiseTextureShader**(`gl`, `shaderModule?`, `numTextures?`): [`ShaderProgram`](../classes/neuroglancer_webgl_shader.ShaderProgram.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) | `undefined` |
| `shaderModule` | [`ShaderModule`](neuroglancer_webgl_shader.md#shadermodule) | `defineCopyFragmentShader` |
| `numTextures` | `number` | `1` |

#### Returns

[`ShaderProgram`](../classes/neuroglancer_webgl_shader.ShaderProgram.md)

#### Defined in

[src/neuroglancer/webgl/trivial_shaders.ts:26](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/trivial_shaders.ts#L26)

___

### trivialColorShader

▸ **trivialColorShader**(`gl`): [`ShaderProgram`](../classes/neuroglancer_webgl_shader.ShaderProgram.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |

#### Returns

[`ShaderProgram`](../classes/neuroglancer_webgl_shader.ShaderProgram.md)

#### Defined in

[src/neuroglancer/webgl/trivial_shaders.ts:62](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/trivial_shaders.ts#L62)

___

### trivialTextureShader

▸ **trivialTextureShader**(`gl`): [`ShaderProgram`](../classes/neuroglancer_webgl_shader.ShaderProgram.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |

#### Returns

[`ShaderProgram`](../classes/neuroglancer_webgl_shader.ShaderProgram.md)

#### Defined in

[src/neuroglancer/webgl/trivial_shaders.ts:58](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/trivial_shaders.ts#L58)

___

### trivialUniformColorShader

▸ **trivialUniformColorShader**(`gl`): [`ShaderProgram`](../classes/neuroglancer_webgl_shader.ShaderProgram.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |

#### Returns

[`ShaderProgram`](../classes/neuroglancer_webgl_shader.ShaderProgram.md)

#### Defined in

[src/neuroglancer/webgl/trivial_shaders.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/trivial_shaders.ts#L76)
