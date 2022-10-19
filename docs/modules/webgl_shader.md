[neuroglancer](../README.md) / [Modules](../modules.md) / webgl/shader

# Module: webgl/shader

## Table of contents

### Modules

- [&lt;internal\&gt;](webgl_shader._internal_.md)

### Enumerations

- [ShaderType](../enums/webgl_shader.ShaderType.md)

### Classes

- [ShaderBuilder](../classes/webgl_shader.ShaderBuilder.md)
- [ShaderCode](../classes/webgl_shader.ShaderCode.md)
- [ShaderCompilationError](../classes/webgl_shader.ShaderCompilationError.md)
- [ShaderLinkError](../classes/webgl_shader.ShaderLinkError.md)
- [ShaderProgram](../classes/webgl_shader.ShaderProgram.md)

### Interfaces

- [ShaderErrorMessage](../interfaces/webgl_shader.ShaderErrorMessage.md)
- [VertexShaderInputBinder](../interfaces/webgl_shader.VertexShaderInputBinder.md)

### Type Aliases

- [AttributeIndex](webgl_shader.md#attributeindex)
- [AttributeType](webgl_shader.md#attributetype)
- [DebugOutputType](webgl_shader.md#debugoutputtype)
- [ShaderCodePart](webgl_shader.md#shadercodepart)
- [ShaderInitializer](webgl_shader.md#shaderinitializer)
- [ShaderInterpolationMode](webgl_shader.md#shaderinterpolationmode)
- [ShaderModule](webgl_shader.md#shadermodule)
- [ShaderSamplerPrefix](webgl_shader.md#shadersamplerprefix)
- [ShaderSamplerType](webgl_shader.md#shadersamplertype)

### Variables

- [textureTargetForSamplerType](webgl_shader.md#texturetargetforsamplertype)

### Functions

- [drawArraysInstanced](webgl_shader.md#drawarraysinstanced)
- [getShader](webgl_shader.md#getshader)
- [parseShaderErrors](webgl_shader.md#parseshadererrors)
- [shaderContainsIdentifiers](webgl_shader.md#shadercontainsidentifiers)

## Type Aliases

### AttributeIndex

Ƭ **AttributeIndex**: `number`

#### Defined in

[src/neuroglancer/webgl/shader.ts:123](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader.ts#L123)

___

### AttributeType

Ƭ **AttributeType**: `number`

#### Defined in

[src/neuroglancer/webgl/shader.ts:125](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader.ts#L125)

___

### DebugOutputType

Ƭ **DebugOutputType**: ``"float"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"``

#### Defined in

[src/neuroglancer/webgl/shader.ts:344](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader.ts#L344)

___

### ShaderCodePart

Ƭ **ShaderCodePart**: `string` \| [`ShaderCodePartArray`](../interfaces/webgl_shader._internal_.ShaderCodePartArray.md) \| [`ShaderCodePartFunction`](../interfaces/webgl_shader._internal_.ShaderCodePartFunction.md)

#### Defined in

[src/neuroglancer/webgl/shader.ts:284](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader.ts#L284)

___

### ShaderInitializer

Ƭ **ShaderInitializer**: (`x`: [`ShaderProgram`](../classes/webgl_shader.ShaderProgram.md)) => `void`

#### Type declaration

▸ (`x`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`ShaderProgram`](../classes/webgl_shader.ShaderProgram.md) |

##### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/shader.ts:324](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader.ts#L324)

___

### ShaderInterpolationMode

Ƭ **ShaderInterpolationMode**: ``""`` \| ``"centroid"`` \| ``"flat centroid"`` \| ``"smooth centroid"`` \| ``"flat"`` \| ``"smooth"``

#### Defined in

[src/neuroglancer/webgl/shader.ts:332](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader.ts#L332)

___

### ShaderModule

Ƭ **ShaderModule**: (`x`: [`ShaderBuilder`](../classes/webgl_shader.ShaderBuilder.md)) => `void`

#### Type declaration

▸ (`x`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`ShaderBuilder`](../classes/webgl_shader.ShaderBuilder.md) |

##### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/shader.ts:325](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader.ts#L325)

___

### ShaderSamplerPrefix

Ƭ **ShaderSamplerPrefix**: ``"i"`` \| ``"u"`` \| ``""``

#### Defined in

[src/neuroglancer/webgl/shader.ts:327](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader.ts#L327)

___

### ShaderSamplerType

Ƭ **ShaderSamplerType**: ``"sampler2D"`` \| ``"usampler2D"`` \| ``"isampler2D"`` \| ``"sampler3D"`` \| ``"usampler3D"`` \| ``"isampler3D"``

#### Defined in

[src/neuroglancer/webgl/shader.ts:329](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader.ts#L329)

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

[src/neuroglancer/webgl/shader.ts:335](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader.ts#L335)

## Functions

### drawArraysInstanced

▸ **drawArraysInstanced**(`gl`, `mode`, `first`, `count`, `instanceCount`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`WebGL2RenderingContext`](annotation_annotation_layer_state._internal_.md#webgl2renderingcontext) |
| `mode` | `number` |
| `first` | `number` |
| `count` | `number` |
| `instanceCount` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/shader.ts:226](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader.ts#L226)

___

### getShader

▸ **getShader**(`gl`, `source`, `shaderType`): [`WebGLShader`](annotation_annotation_layer_state._internal_.md#webglshader)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`WebGL2RenderingContext`](annotation_annotation_layer_state._internal_.md#webgl2renderingcontext) |
| `source` | `string` |
| `shaderType` | [`ShaderType`](../enums/webgl_shader.ShaderType.md) |

#### Returns

[`WebGLShader`](annotation_annotation_layer_state._internal_.md#webglshader)

#### Defined in

[src/neuroglancer/webgl/shader.ts:91](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader.ts#L91)

___

### parseShaderErrors

▸ **parseShaderErrors**(`log`): [`ShaderErrorMessage`](../interfaces/webgl_shader.ShaderErrorMessage.md)[]

Parses the output of getShaderInfoLog into a list of messages.

#### Parameters

| Name | Type |
| :------ | :------ |
| `log` | `string` |

#### Returns

[`ShaderErrorMessage`](../interfaces/webgl_shader.ShaderErrorMessage.md)[]

#### Defined in

[src/neuroglancer/webgl/shader.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader.ts#L36)

___

### shaderContainsIdentifiers

▸ **shaderContainsIdentifiers**(`code`, `identifiers`): `Set`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |
| `identifiers` | [`Iterable`](../interfaces/annotation_annotation_layer_state._internal_.Iterable.md)<`string`\> |

#### Returns

`Set`<`string`\>

#### Defined in

[src/neuroglancer/webgl/shader.ts:531](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/shader.ts#L531)
