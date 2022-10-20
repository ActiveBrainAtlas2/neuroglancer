[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/webgl/shader

# Module: neuroglancer/webgl/shader

## Table of contents

### Modules

- [&lt;internal\&gt;](neuroglancer_webgl_shader._internal_.md)

### Enumerations

- [ShaderType](../enums/neuroglancer_webgl_shader.ShaderType.md)

### Classes

- [ShaderBuilder](../classes/neuroglancer_webgl_shader.ShaderBuilder.md)
- [ShaderCode](../classes/neuroglancer_webgl_shader.ShaderCode.md)
- [ShaderCompilationError](../classes/neuroglancer_webgl_shader.ShaderCompilationError.md)
- [ShaderLinkError](../classes/neuroglancer_webgl_shader.ShaderLinkError.md)
- [ShaderProgram](../classes/neuroglancer_webgl_shader.ShaderProgram.md)

### Interfaces

- [ShaderErrorMessage](../interfaces/neuroglancer_webgl_shader.ShaderErrorMessage.md)
- [VertexShaderInputBinder](../interfaces/neuroglancer_webgl_shader.VertexShaderInputBinder.md)

### Type Aliases

- [AttributeIndex](neuroglancer_webgl_shader.md#attributeindex)
- [AttributeType](neuroglancer_webgl_shader.md#attributetype)
- [DebugOutputType](neuroglancer_webgl_shader.md#debugoutputtype)
- [ShaderCodePart](neuroglancer_webgl_shader.md#shadercodepart)
- [ShaderInitializer](neuroglancer_webgl_shader.md#shaderinitializer)
- [ShaderInterpolationMode](neuroglancer_webgl_shader.md#shaderinterpolationmode)
- [ShaderModule](neuroglancer_webgl_shader.md#shadermodule)
- [ShaderSamplerPrefix](neuroglancer_webgl_shader.md#shadersamplerprefix)
- [ShaderSamplerType](neuroglancer_webgl_shader.md#shadersamplertype)

### Variables

- [textureTargetForSamplerType](neuroglancer_webgl_shader.md#texturetargetforsamplertype)

### Functions

- [drawArraysInstanced](neuroglancer_webgl_shader.md#drawarraysinstanced)
- [getShader](neuroglancer_webgl_shader.md#getshader)
- [parseShaderErrors](neuroglancer_webgl_shader.md#parseshadererrors)
- [shaderContainsIdentifiers](neuroglancer_webgl_shader.md#shadercontainsidentifiers)

## Type Aliases

### AttributeIndex

Ƭ **AttributeIndex**: `number`

#### Defined in

[src/neuroglancer/webgl/shader.ts:123](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/shader.ts#L123)

___

### AttributeType

Ƭ **AttributeType**: `number`

#### Defined in

[src/neuroglancer/webgl/shader.ts:125](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/shader.ts#L125)

___

### DebugOutputType

Ƭ **DebugOutputType**: ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"``

#### Defined in

[src/neuroglancer/webgl/shader.ts:344](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/shader.ts#L344)

___

### ShaderCodePart

Ƭ **ShaderCodePart**: `string` \| [`ShaderCodePartArray`](../interfaces/neuroglancer_webgl_shader._internal_.ShaderCodePartArray.md) \| [`ShaderCodePartFunction`](../interfaces/neuroglancer_webgl_shader._internal_.ShaderCodePartFunction.md)

#### Defined in

[src/neuroglancer/webgl/shader.ts:284](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/shader.ts#L284)

___

### ShaderInitializer

Ƭ **ShaderInitializer**: (`x`: [`ShaderProgram`](../classes/neuroglancer_webgl_shader.ShaderProgram.md)) => `void`

#### Type declaration

▸ (`x`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`ShaderProgram`](../classes/neuroglancer_webgl_shader.ShaderProgram.md) |

##### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/shader.ts:324](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/shader.ts#L324)

___

### ShaderInterpolationMode

Ƭ **ShaderInterpolationMode**: ``""`` \| ``"centroid"`` \| ``"flat centroid"`` \| ``"smooth centroid"`` \| ``"flat"`` \| ``"smooth"``

#### Defined in

[src/neuroglancer/webgl/shader.ts:332](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/shader.ts#L332)

___

### ShaderModule

Ƭ **ShaderModule**: (`x`: [`ShaderBuilder`](../classes/neuroglancer_webgl_shader.ShaderBuilder.md)) => `void`

#### Type declaration

▸ (`x`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`ShaderBuilder`](../classes/neuroglancer_webgl_shader.ShaderBuilder.md) |

##### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/shader.ts:325](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/shader.ts#L325)

___

### ShaderSamplerPrefix

Ƭ **ShaderSamplerPrefix**: ``"i"`` \| ``"u"`` \| ``""``

#### Defined in

[src/neuroglancer/webgl/shader.ts:327](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/shader.ts#L327)

___

### ShaderSamplerType

Ƭ **ShaderSamplerType**: ``"sampler2D"`` \| ``"usampler2D"`` \| ``"isampler2D"`` \| ``"sampler3D"`` \| ``"usampler3D"`` \| ``"isampler3D"``

#### Defined in

[src/neuroglancer/webgl/shader.ts:329](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/shader.ts#L329)

## Variables

### textureTargetForSamplerType

• `Const` **textureTargetForSamplerType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `isampler2D` | `number` |
| `isampler3D` | `number` |
| `sampler2D` | `number` |
| `sampler3D` | `number` |
| `usampler2D` | `number` |
| `usampler3D` | `number` |

#### Defined in

[src/neuroglancer/webgl/shader.ts:335](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/shader.ts#L335)

## Functions

### drawArraysInstanced

▸ **drawArraysInstanced**(`gl`, `mode`, `first`, `count`, `instanceCount`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`WebGL2RenderingContext`](main_module._internal_.md#webgl2renderingcontext) |
| `mode` | `number` |
| `first` | `number` |
| `count` | `number` |
| `instanceCount` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/shader.ts:226](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/shader.ts#L226)

___

### getShader

▸ **getShader**(`gl`, `source`, `shaderType`): [`WebGLShader`](main_module._internal_.md#webglshader)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`WebGL2RenderingContext`](main_module._internal_.md#webgl2renderingcontext) |
| `source` | `string` |
| `shaderType` | [`ShaderType`](../enums/neuroglancer_webgl_shader.ShaderType.md) |

#### Returns

[`WebGLShader`](main_module._internal_.md#webglshader)

#### Defined in

[src/neuroglancer/webgl/shader.ts:91](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/shader.ts#L91)

___

### parseShaderErrors

▸ **parseShaderErrors**(`log`): [`ShaderErrorMessage`](../interfaces/neuroglancer_webgl_shader.ShaderErrorMessage.md)[]

Parses the output of getShaderInfoLog into a list of messages.

#### Parameters

| Name | Type |
| :------ | :------ |
| `log` | `string` |

#### Returns

[`ShaderErrorMessage`](../interfaces/neuroglancer_webgl_shader.ShaderErrorMessage.md)[]

#### Defined in

[src/neuroglancer/webgl/shader.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/shader.ts#L36)

___

### shaderContainsIdentifiers

▸ **shaderContainsIdentifiers**(`code`, `identifiers`): `Set`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |
| `identifiers` | [`Iterable`](../interfaces/main_module._internal_.Iterable.md)<`string`\> |

#### Returns

`Set`<`string`\>

#### Defined in

[src/neuroglancer/webgl/shader.ts:531](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/shader.ts#L531)
