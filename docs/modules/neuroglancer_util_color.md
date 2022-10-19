[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/util/color

# Module: neuroglancer/util/color

**`license`**
Copyright 2018 Google Inc.
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

- [TrackableOptionalRGB](../classes/neuroglancer_util_color.TrackableOptionalRGB.md)
- [TrackableRGB](../classes/neuroglancer_util_color.TrackableRGB.md)

### Functions

- [getRelativeLuminance](neuroglancer_util_color.md#getrelativeluminance)
- [packColor](neuroglancer_util_color.md#packcolor)
- [parseColorSerialization](neuroglancer_util_color.md#parsecolorserialization)
- [parseRGBAColorSpecification](neuroglancer_util_color.md#parsergbacolorspecification)
- [parseRGBColorSpecification](neuroglancer_util_color.md#parsergbcolorspecification)
- [serializeColor](neuroglancer_util_color.md#serializecolor)
- [srgbGammaExpand](neuroglancer_util_color.md#srgbgammaexpand)
- [unpackRGB](neuroglancer_util_color.md#unpackrgb)
- [unpackRGBA](neuroglancer_util_color.md#unpackrgba)
- [useWhiteBackground](neuroglancer_util_color.md#usewhitebackground)

## Functions

### getRelativeLuminance

▸ **getRelativeLuminance**(`color`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`vec3`](../classes/neuroglancer_util_geom.vec3.md) \| [`vec4`](../classes/neuroglancer_util_geom.vec4.md) |

#### Returns

`number`

#### Defined in

[src/neuroglancer/util/color.ts:126](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/color.ts#L126)

___

### packColor

▸ **packColor**(`x`): `number`

Returns an integer formed by concatenating the channels of the input color vector.
Each channel is clamped to the range [0.0, 1.0] before being converted to 8 bits.
An RGB color is packed into 24 bits, and a RGBA into 32 bits.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`vec3`](../classes/neuroglancer_util_geom.vec3.md) \| [`vec4`](../classes/neuroglancer_util_geom.vec4.md) |

#### Returns

`number`

#### Defined in

[src/neuroglancer/util/color.ts:74](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/color.ts#L74)

___

### parseColorSerialization

▸ **parseColorSerialization**(`x`): `number`[]

Parse the serialization of a color.

This is based on the definition here:
https://html.spec.whatwg.org/multipage/canvas.html#serialisation-of-a-color

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `string` |

#### Returns

`number`[]

#### Defined in

[src/neuroglancer/util/color.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/color.ts#L32)

___

### parseRGBAColorSpecification

▸ **parseRGBAColorSpecification**(`x`): [`vec4`](../classes/neuroglancer_util_geom.vec4.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

[`vec4`](../classes/neuroglancer_util_geom.vec4.md)

#### Defined in

[src/neuroglancer/util/color.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/color.ts#L50)

___

### parseRGBColorSpecification

▸ **parseRGBColorSpecification**(`x`): [`vec3`](../classes/neuroglancer_util_geom.vec3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

[`vec3`](../classes/neuroglancer_util_geom.vec3.md)

#### Defined in

[src/neuroglancer/util/color.ts:64](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/color.ts#L64)

___

### serializeColor

▸ **serializeColor**(`x`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`vec3`](../classes/neuroglancer_util_geom.vec3.md) \| [`vec4`](../classes/neuroglancer_util_geom.vec4.md) |

#### Returns

`string`

#### Defined in

[src/neuroglancer/util/color.ts:96](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/color.ts#L96)

___

### srgbGammaExpand

▸ **srgbGammaExpand**(`value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/neuroglancer/util/color.ts:117](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/color.ts#L117)

___

### unpackRGB

▸ **unpackRGB**(`value`): [`vec3`](../classes/neuroglancer_util_geom.vec3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`vec3`](../classes/neuroglancer_util_geom.vec3.md)

#### Defined in

[src/neuroglancer/util/color.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/color.ts#L85)

___

### unpackRGBA

▸ **unpackRGBA**(`value`): [`vec4`](../classes/neuroglancer_util_geom.vec4.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`vec4`](../classes/neuroglancer_util_geom.vec4.md)

#### Defined in

[src/neuroglancer/util/color.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/color.ts#L90)

___

### useWhiteBackground

▸ **useWhiteBackground**(`foregroundColor`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `foregroundColor` | [`vec3`](../classes/neuroglancer_util_geom.vec3.md) \| [`vec4`](../classes/neuroglancer_util_geom.vec4.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/util/color.ts:138](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/color.ts#L138)
