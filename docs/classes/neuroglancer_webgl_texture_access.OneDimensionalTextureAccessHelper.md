[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/webgl/texture\_access](../modules/neuroglancer_webgl_texture_access.md) / OneDimensionalTextureAccessHelper

# Class: OneDimensionalTextureAccessHelper

[neuroglancer/webgl/texture_access](../modules/neuroglancer_webgl_texture_access.md).OneDimensionalTextureAccessHelper

## Table of contents

### Constructors

- [constructor](neuroglancer_webgl_texture_access.OneDimensionalTextureAccessHelper.md#constructor)

### Properties

- [key](neuroglancer_webgl_texture_access.OneDimensionalTextureAccessHelper.md#key)
- [readTextureValue](neuroglancer_webgl_texture_access.OneDimensionalTextureAccessHelper.md#readtexturevalue)

### Methods

- [defineShader](neuroglancer_webgl_texture_access.OneDimensionalTextureAccessHelper.md#defineshader)
- [getAccessor](neuroglancer_webgl_texture_access.OneDimensionalTextureAccessHelper.md#getaccessor)
- [getReadTextureValueCode](neuroglancer_webgl_texture_access.OneDimensionalTextureAccessHelper.md#getreadtexturevaluecode)

## Constructors

### constructor

• **new OneDimensionalTextureAccessHelper**(`key`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:404](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/texture_access.ts#L404)

## Properties

### key

• **key**: `string`

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:404](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/texture_access.ts#L404)

___

### readTextureValue

• **readTextureValue**: `string`

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:403](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/texture_access.ts#L403)

## Methods

### defineShader

▸ **defineShader**(`builder`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`ShaderBuilder`](neuroglancer_webgl_shader.ShaderBuilder.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:405](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/texture_access.ts#L405)

___

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

[src/neuroglancer/webgl/texture_access.ts:432](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/texture_access.ts#L432)

___

### getReadTextureValueCode

▸ **getReadTextureValueCode**(`texelsPerElement`, `samplerPrefix`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `texelsPerElement` | `number` |
| `samplerPrefix` | [`ShaderSamplerPrefix`](../modules/neuroglancer_webgl_shader.md#shadersamplerprefix) |

#### Returns

`string`[]

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:409](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/webgl/texture_access.ts#L409)
