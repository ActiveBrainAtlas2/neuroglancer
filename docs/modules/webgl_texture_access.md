[neuroglancer](../README.md) / [Modules](../modules.md) / webgl/texture\_access

# Module: webgl/texture\_access

**`license`**
Copyright 2016 Google Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Table of contents

### Classes

- [OneDimensionalTextureAccessHelper](../classes/webgl_texture_access.OneDimensionalTextureAccessHelper.md)
- [TextureAccessHelper](../classes/webgl_texture_access.TextureAccessHelper.md)
- [TextureFormat](../classes/webgl_texture_access.TextureFormat.md)

### Type Aliases

- [TextureAccessCoefficients](webgl_texture_access.md#textureaccesscoefficients)

### Variables

- [floatTextureFormatForNumComponents](webgl_texture_access.md#floattextureformatfornumcomponents)
- [integerTextureFormatForNumComponents](webgl_texture_access.md#integertextureformatfornumcomponents)
- [internalFloatFormatForNumComponents](webgl_texture_access.md#internalfloatformatfornumcomponents)
- [internalInt16FormatForNumComponents](webgl_texture_access.md#internalint16formatfornumcomponents)
- [internalInt32FormatForNumComponents](webgl_texture_access.md#internalint32formatfornumcomponents)
- [internalInt8FormatForNumComponents](webgl_texture_access.md#internalint8formatfornumcomponents)
- [internalUint16FormatForNumComponents](webgl_texture_access.md#internaluint16formatfornumcomponents)
- [internalUint32FormatForNumComponents](webgl_texture_access.md#internaluint32formatfornumcomponents)
- [internalUint8FormatForNumComponents](webgl_texture_access.md#internaluint8formatfornumcomponents)
- [textureSelectorForNumComponents](webgl_texture_access.md#textureselectorfornumcomponents)

### Functions

- [computeTextureFormat](webgl_texture_access.md#computetextureformat)
- [getSamplerPrefixForDataType](webgl_texture_access.md#getsamplerprefixfordatatype)
- [setOneDimensionalTextureData](webgl_texture_access.md#setonedimensionaltexturedata)
- [setThreeDimensionalTextureData](webgl_texture_access.md#setthreedimensionaltexturedata)
- [setTwoDimensionalTextureData](webgl_texture_access.md#settwodimensionaltexturedata)

## Type Aliases

### TextureAccessCoefficients

Ƭ **TextureAccessCoefficients**: [`vec3`](../classes/util_geom.vec3.md)

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/texture_access.ts#L34)

## Variables

### floatTextureFormatForNumComponents

• `Const` **floatTextureFormatForNumComponents**: `number`[]

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/texture_access.ts#L77)

___

### integerTextureFormatForNumComponents

• `Const` **integerTextureFormatForNumComponents**: `number`[]

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:70](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/texture_access.ts#L70)

___

### internalFloatFormatForNumComponents

• `Const` **internalFloatFormatForNumComponents**: `number`[]

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:127](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/texture_access.ts#L127)

___

### internalInt16FormatForNumComponents

• `Const` **internalInt16FormatForNumComponents**: `number`[]

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:106](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/texture_access.ts#L106)

___

### internalInt32FormatForNumComponents

• `Const` **internalInt32FormatForNumComponents**: `number`[]

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:120](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/texture_access.ts#L120)

___

### internalInt8FormatForNumComponents

• `Const` **internalInt8FormatForNumComponents**: `number`[]

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/texture_access.ts#L92)

___

### internalUint16FormatForNumComponents

• `Const` **internalUint16FormatForNumComponents**: `number`[]

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:99](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/texture_access.ts#L99)

___

### internalUint32FormatForNumComponents

• `Const` **internalUint32FormatForNumComponents**: `number`[]

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:113](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/texture_access.ts#L113)

___

### internalUint8FormatForNumComponents

• `Const` **internalUint8FormatForNumComponents**: `number`[]

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/texture_access.ts#L85)

___

### textureSelectorForNumComponents

• `Const` **textureSelectorForNumComponents**: `string`[]

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/texture_access.ts#L84)

## Functions

### computeTextureFormat

▸ **computeTextureFormat**(`format`, `dataType`, `numComponents?`): [`TextureFormat`](../classes/webgl_texture_access.TextureFormat.md)

Fills in a OneDimensionalTextureFormat object with the suitable texture format for the specified
DataType and number of components.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `format` | [`TextureFormat`](../classes/webgl_texture_access.TextureFormat.md) | `undefined` |
| `dataType` | [`DataType`](../enums/util_data_type.DataType.md) | `undefined` |
| `numComponents` | `number` | `1` |

#### Returns

[`TextureFormat`](../classes/webgl_texture_access.TextureFormat.md)

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:143](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/texture_access.ts#L143)

___

### getSamplerPrefixForDataType

▸ **getSamplerPrefixForDataType**(`dataType`): [`ShaderSamplerPrefix`](webgl_shader.md#shadersamplerprefix)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataType` | [`DataType`](../enums/util_data_type.DataType.md) |

#### Returns

[`ShaderSamplerPrefix`](webgl_shader.md#shadersamplerprefix)

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:135](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/texture_access.ts#L135)

___

### setOneDimensionalTextureData

▸ **setOneDimensionalTextureData**(`gl`, `format`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |
| `format` | [`TextureFormat`](../classes/webgl_texture_access.TextureFormat.md) |
| `data` | [`TypedArray`](util_array.md#typedarray) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:246](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/texture_access.ts#L246)

___

### setThreeDimensionalTextureData

▸ **setThreeDimensionalTextureData**(`gl`, `format`, `data`, `width`, `height`, `depth`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |
| `format` | [`TextureFormat`](../classes/webgl_texture_access.TextureFormat.md) |
| `data` | [`TypedArray`](util_array.md#typedarray) |
| `width` | `number` |
| `height` | `number` |
| `depth` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:303](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/texture_access.ts#L303)

___

### setTwoDimensionalTextureData

▸ **setTwoDimensionalTextureData**(`gl`, `format`, `data`, `width`, `height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/webgl_context.GL.md) |
| `format` | [`TextureFormat`](../classes/webgl_texture_access.TextureFormat.md) |
| `data` | [`TypedArray`](util_array.md#typedarray) |
| `width` | `number` |
| `height` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:281](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/webgl/texture_access.ts#L281)
