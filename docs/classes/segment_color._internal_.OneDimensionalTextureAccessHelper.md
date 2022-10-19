[neuroglancer](../README.md) / [Modules](../modules.md) / [segment\_color](../modules/segment_color.md) / [<internal\>](../modules/segment_color._internal_.md) / OneDimensionalTextureAccessHelper

# Class: OneDimensionalTextureAccessHelper

[segment_color](../modules/segment_color.md).[<internal>](../modules/segment_color._internal_.md).OneDimensionalTextureAccessHelper

## Table of contents

### Constructors

- [constructor](segment_color._internal_.OneDimensionalTextureAccessHelper.md#constructor)

### Properties

- [key](segment_color._internal_.OneDimensionalTextureAccessHelper.md#key)
- [readTextureValue](segment_color._internal_.OneDimensionalTextureAccessHelper.md#readtexturevalue)

### Methods

- [defineShader](segment_color._internal_.OneDimensionalTextureAccessHelper.md#defineshader)
- [getAccessor](segment_color._internal_.OneDimensionalTextureAccessHelper.md#getaccessor)
- [getReadTextureValueCode](segment_color._internal_.OneDimensionalTextureAccessHelper.md#getreadtexturevaluecode)

## Constructors

### constructor

• **new OneDimensionalTextureAccessHelper**(`key`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:404](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/texture_access.ts#L404)

## Properties

### key

• **key**: `string`

___

### readTextureValue

• **readTextureValue**: `string`

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:403](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/texture_access.ts#L403)

## Methods

### defineShader

▸ **defineShader**(`builder`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`ShaderBuilder`](image_user_layer._internal_.ShaderBuilder.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:405](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/texture_access.ts#L405)

___

### getAccessor

▸ **getAccessor**(`functionName`, `samplerName`, `dataType`, `numComponents?`): [`ShaderCodePart`](../modules/image_user_layer._internal_.md#shadercodepart)[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `functionName` | `string` | `undefined` |
| `samplerName` | `string` | `undefined` |
| `dataType` | [`DataType`](../enums/image_user_layer._internal_.DataType.md) | `undefined` |
| `numComponents` | `number` | `1` |

#### Returns

[`ShaderCodePart`](../modules/image_user_layer._internal_.md#shadercodepart)[]

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:432](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/texture_access.ts#L432)

___

### getReadTextureValueCode

▸ **getReadTextureValueCode**(`texelsPerElement`, `samplerPrefix`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `texelsPerElement` | `number` |
| `samplerPrefix` | [`ShaderSamplerPrefix`](../modules/layer._internal_.md#shadersamplerprefix) |

#### Returns

`string`[]

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:409](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/webgl/texture_access.ts#L409)
