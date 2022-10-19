[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/webgl/texture\_access](../modules/neuroglancer_webgl_texture_access.md) / TextureAccessHelper

# Class: TextureAccessHelper

[neuroglancer/webgl/texture_access](../modules/neuroglancer_webgl_texture_access.md).TextureAccessHelper

## Table of contents

### Constructors

- [constructor](neuroglancer_webgl_texture_access.TextureAccessHelper.md#constructor)

### Properties

- [key](neuroglancer_webgl_texture_access.TextureAccessHelper.md#key)
- [readTextureValue](neuroglancer_webgl_texture_access.TextureAccessHelper.md#readtexturevalue)
- [textureDims](neuroglancer_webgl_texture_access.TextureAccessHelper.md#texturedims)

### Methods

- [getAccessor](neuroglancer_webgl_texture_access.TextureAccessHelper.md#getaccessor)
- [getReadTextureValueCode](neuroglancer_webgl_texture_access.TextureAccessHelper.md#getreadtexturevaluecode)

## Constructors

### constructor

• **new TextureAccessHelper**(`key`, `textureDims`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `textureDims` | `number` |

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:445](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/texture_access.ts#L445)

## Properties

### key

• **key**: `string`

___

### readTextureValue

• **readTextureValue**: `string`

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:444](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/texture_access.ts#L444)

___

### textureDims

• **textureDims**: `number`

## Methods

### getAccessor

▸ **getAccessor**(`functionName`, `samplerName`, `dataType`, `numComponents?`): [`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `functionName` | `string` | `undefined` |
| `samplerName` | `string` | `undefined` |
| `dataType` | [`DataType`](../enums/neuroglancer_util_data_type.DataType.md) | `undefined` |
| `numComponents` | `number` | `1` |

#### Returns

[`ShaderCodePart`](../modules/neuroglancer_webgl_shader.md#shadercodepart)[]

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:468](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/texture_access.ts#L468)

___

### getReadTextureValueCode

▸ **getReadTextureValueCode**(`texelsPerElement`, `samplerPrefix`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `texelsPerElement` | `number` |
| `samplerPrefix` | [`ShaderSamplerPrefix`](../modules/neuroglancer_webgl_shader.md#shadersamplerprefix) |

#### Returns

`string`

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:446](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/texture_access.ts#L446)
