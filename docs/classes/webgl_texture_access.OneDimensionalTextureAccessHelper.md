[neuroglancer](../README.md) / [Modules](../modules.md) / [webgl/texture\_access](../modules/webgl_texture_access.md) / OneDimensionalTextureAccessHelper

# Class: OneDimensionalTextureAccessHelper

[webgl/texture_access](../modules/webgl_texture_access.md).OneDimensionalTextureAccessHelper

## Table of contents

### Constructors

- [constructor](webgl_texture_access.OneDimensionalTextureAccessHelper.md#constructor)

### Properties

- [key](webgl_texture_access.OneDimensionalTextureAccessHelper.md#key)
- [readTextureValue](webgl_texture_access.OneDimensionalTextureAccessHelper.md#readtexturevalue)

### Methods

- [defineShader](webgl_texture_access.OneDimensionalTextureAccessHelper.md#defineshader)
- [getAccessor](webgl_texture_access.OneDimensionalTextureAccessHelper.md#getaccessor)
- [getReadTextureValueCode](webgl_texture_access.OneDimensionalTextureAccessHelper.md#getreadtexturevaluecode)

## Constructors

### constructor

• **new OneDimensionalTextureAccessHelper**(`key`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:404](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/texture_access.ts#L404)

## Properties

### key

• **key**: `string`

___

### readTextureValue

• **readTextureValue**: `string`

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:403](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/texture_access.ts#L403)

## Methods

### defineShader

▸ **defineShader**(`builder`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`ShaderBuilder`](webgl_shader.ShaderBuilder.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:405](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/texture_access.ts#L405)

___

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

[src/neuroglancer/webgl/texture_access.ts:432](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/texture_access.ts#L432)

___

### getReadTextureValueCode

▸ **getReadTextureValueCode**(`texelsPerElement`, `samplerPrefix`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `texelsPerElement` | `number` |
| `samplerPrefix` | [`ShaderSamplerPrefix`](../modules/webgl_shader.md#shadersamplerprefix) |

#### Returns

`string`[]

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:409](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/texture_access.ts#L409)
