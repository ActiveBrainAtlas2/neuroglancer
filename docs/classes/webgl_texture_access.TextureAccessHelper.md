[neuroglancer](../README.md) / [Modules](../modules.md) / [webgl/texture\_access](../modules/webgl_texture_access.md) / TextureAccessHelper

# Class: TextureAccessHelper

[webgl/texture_access](../modules/webgl_texture_access.md).TextureAccessHelper

## Table of contents

### Constructors

- [constructor](webgl_texture_access.TextureAccessHelper.md#constructor)

### Properties

- [key](webgl_texture_access.TextureAccessHelper.md#key)
- [readTextureValue](webgl_texture_access.TextureAccessHelper.md#readtexturevalue)
- [textureDims](webgl_texture_access.TextureAccessHelper.md#texturedims)

### Methods

- [getAccessor](webgl_texture_access.TextureAccessHelper.md#getaccessor)
- [getReadTextureValueCode](webgl_texture_access.TextureAccessHelper.md#getreadtexturevaluecode)

## Constructors

### constructor

• **new TextureAccessHelper**(`key`, `textureDims`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `textureDims` | `number` |

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:445](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/texture_access.ts#L445)

## Properties

### key

• **key**: `string`

___

### readTextureValue

• **readTextureValue**: `string`

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:444](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/texture_access.ts#L444)

___

### textureDims

• **textureDims**: `number`

## Methods

### getAccessor

▸ **getAccessor**(`functionName`, `samplerName`, `dataType`, `numComponents?`): [`ShaderCodePart`](../modules/webgl_shader.md#shadercodepart)[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `functionName` | `string` | `undefined` |
| `samplerName` | `string` | `undefined` |
| `dataType` | [`DataType`](../enums/util_data_type.DataType.md) | `undefined` |
| `numComponents` | `number` | `1` |

#### Returns

[`ShaderCodePart`](../modules/webgl_shader.md#shadercodepart)[]

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:468](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/texture_access.ts#L468)

___

### getReadTextureValueCode

▸ **getReadTextureValueCode**(`texelsPerElement`, `samplerPrefix`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `texelsPerElement` | `number` |
| `samplerPrefix` | [`ShaderSamplerPrefix`](../modules/webgl_shader.md#shadersamplerprefix) |

#### Returns

`string`

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:446](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/texture_access.ts#L446)
