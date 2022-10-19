[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/webgl/texture\_access

# Module: neuroglancer/webgl/texture\_access

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

- [OneDimensionalTextureAccessHelper](../classes/neuroglancer_webgl_texture_access.OneDimensionalTextureAccessHelper.md)
- [TextureAccessHelper](../classes/neuroglancer_webgl_texture_access.TextureAccessHelper.md)
- [TextureFormat](../classes/neuroglancer_webgl_texture_access.TextureFormat.md)

### Type Aliases

- [TextureAccessCoefficients](neuroglancer_webgl_texture_access.md#textureaccesscoefficients)

### Variables

- [floatTextureFormatForNumComponents](neuroglancer_webgl_texture_access.md#floattextureformatfornumcomponents)
- [integerTextureFormatForNumComponents](neuroglancer_webgl_texture_access.md#integertextureformatfornumcomponents)
- [internalFloatFormatForNumComponents](neuroglancer_webgl_texture_access.md#internalfloatformatfornumcomponents)
- [internalInt16FormatForNumComponents](neuroglancer_webgl_texture_access.md#internalint16formatfornumcomponents)
- [internalInt32FormatForNumComponents](neuroglancer_webgl_texture_access.md#internalint32formatfornumcomponents)
- [internalInt8FormatForNumComponents](neuroglancer_webgl_texture_access.md#internalint8formatfornumcomponents)
- [internalUint16FormatForNumComponents](neuroglancer_webgl_texture_access.md#internaluint16formatfornumcomponents)
- [internalUint32FormatForNumComponents](neuroglancer_webgl_texture_access.md#internaluint32formatfornumcomponents)
- [internalUint8FormatForNumComponents](neuroglancer_webgl_texture_access.md#internaluint8formatfornumcomponents)
- [textureSelectorForNumComponents](neuroglancer_webgl_texture_access.md#textureselectorfornumcomponents)

### Functions

- [computeTextureFormat](neuroglancer_webgl_texture_access.md#computetextureformat)
- [getSamplerPrefixForDataType](neuroglancer_webgl_texture_access.md#getsamplerprefixfordatatype)
- [setOneDimensionalTextureData](neuroglancer_webgl_texture_access.md#setonedimensionaltexturedata)
- [setThreeDimensionalTextureData](neuroglancer_webgl_texture_access.md#setthreedimensionaltexturedata)
- [setTwoDimensionalTextureData](neuroglancer_webgl_texture_access.md#settwodimensionaltexturedata)

## Type Aliases

### TextureAccessCoefficients

Ƭ **TextureAccessCoefficients**: [`vec3`](../classes/neuroglancer_util_geom.vec3.md)

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/texture_access.ts#L34)

## Variables

### floatTextureFormatForNumComponents

• `Const` **floatTextureFormatForNumComponents**: `number`[]

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/texture_access.ts#L77)

___

### integerTextureFormatForNumComponents

• `Const` **integerTextureFormatForNumComponents**: `number`[]

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:70](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/texture_access.ts#L70)

___

### internalFloatFormatForNumComponents

• `Const` **internalFloatFormatForNumComponents**: `number`[]

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:127](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/texture_access.ts#L127)

___

### internalInt16FormatForNumComponents

• `Const` **internalInt16FormatForNumComponents**: `number`[]

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:106](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/texture_access.ts#L106)

___

### internalInt32FormatForNumComponents

• `Const` **internalInt32FormatForNumComponents**: `number`[]

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:120](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/texture_access.ts#L120)

___

### internalInt8FormatForNumComponents

• `Const` **internalInt8FormatForNumComponents**: `number`[]

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/texture_access.ts#L92)

___

### internalUint16FormatForNumComponents

• `Const` **internalUint16FormatForNumComponents**: `number`[]

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:99](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/texture_access.ts#L99)

___

### internalUint32FormatForNumComponents

• `Const` **internalUint32FormatForNumComponents**: `number`[]

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:113](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/texture_access.ts#L113)

___

### internalUint8FormatForNumComponents

• `Const` **internalUint8FormatForNumComponents**: `number`[]

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/texture_access.ts#L85)

___

### textureSelectorForNumComponents

• `Const` **textureSelectorForNumComponents**: `string`[]

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/texture_access.ts#L84)

## Functions

### computeTextureFormat

▸ **computeTextureFormat**(`format`, `dataType`, `numComponents?`): [`TextureFormat`](../classes/neuroglancer_webgl_texture_access.TextureFormat.md)

Fills in a OneDimensionalTextureFormat object with the suitable texture format for the specified
DataType and number of components.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `format` | [`TextureFormat`](../classes/neuroglancer_webgl_texture_access.TextureFormat.md) | `undefined` |
| `dataType` | [`DataType`](../enums/neuroglancer_util_data_type.DataType.md) | `undefined` |
| `numComponents` | `number` | `1` |

#### Returns

[`TextureFormat`](../classes/neuroglancer_webgl_texture_access.TextureFormat.md)

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:143](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/texture_access.ts#L143)

___

### getSamplerPrefixForDataType

▸ **getSamplerPrefixForDataType**(`dataType`): [`ShaderSamplerPrefix`](neuroglancer_webgl_shader.md#shadersamplerprefix)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataType` | [`DataType`](../enums/neuroglancer_util_data_type.DataType.md) |

#### Returns

[`ShaderSamplerPrefix`](neuroglancer_webgl_shader.md#shadersamplerprefix)

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:135](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/texture_access.ts#L135)

___

### setOneDimensionalTextureData

▸ **setOneDimensionalTextureData**(`gl`, `format`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `format` | [`TextureFormat`](../classes/neuroglancer_webgl_texture_access.TextureFormat.md) |
| `data` | [`TypedArray`](neuroglancer_util_array.md#typedarray) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:246](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/texture_access.ts#L246)

___

### setThreeDimensionalTextureData

▸ **setThreeDimensionalTextureData**(`gl`, `format`, `data`, `width`, `height`, `depth`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `format` | [`TextureFormat`](../classes/neuroglancer_webgl_texture_access.TextureFormat.md) |
| `data` | [`TypedArray`](neuroglancer_util_array.md#typedarray) |
| `width` | `number` |
| `height` | `number` |
| `depth` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:303](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/texture_access.ts#L303)

___

### setTwoDimensionalTextureData

▸ **setTwoDimensionalTextureData**(`gl`, `format`, `data`, `width`, `height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`GL`](../interfaces/neuroglancer_webgl_context.GL.md) |
| `format` | [`TextureFormat`](../classes/neuroglancer_webgl_texture_access.TextureFormat.md) |
| `data` | [`TypedArray`](neuroglancer_util_array.md#typedarray) |
| `width` | `number` |
| `height` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/webgl/texture_access.ts:281](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/webgl/texture_access.ts#L281)
