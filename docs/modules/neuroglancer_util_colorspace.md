[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/util/colorspace

# Module: neuroglancer/util/colorspace

## Table of contents

### Functions

- [hsvToRgb](neuroglancer_util_colorspace.md#hsvtorgb)
- [rgbToHsv](neuroglancer_util_colorspace.md#rgbtohsv)

## Functions

### hsvToRgb

▸ **hsvToRgb**(`out`, `h`, `s`, `v`): `Float32Array`

Converts an HSV color (with h, s, v in [0,1]) to RGB (in range [0,1]).

Based on goog/color/color.js in the Google Closure library.

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | `Float32Array` |
| `h` | `number` |
| `s` | `number` |
| `v` | `number` |

#### Returns

`Float32Array`

#### Defined in

[src/neuroglancer/util/colorspace.ts:22](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/colorspace.ts#L22)

___

### rgbToHsv

▸ **rgbToHsv**(`out`, `r`, `g`, `b`): `Float32Array`

Converts from RGB values (with r,g,b in range [0,1]) to an array of HSV values (in range [0, 1])

Based on goog/color/color.js in the Google Closure library.

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | `Float32Array` |
| `r` | `number` |
| `g` | `number` |
| `b` | `number` |

#### Returns

`Float32Array`

#### Defined in

[src/neuroglancer/util/colorspace.ts:70](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/colorspace.ts#L70)
