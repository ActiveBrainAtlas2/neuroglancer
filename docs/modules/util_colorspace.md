[neuroglancer](../README.md) / [Modules](../modules.md) / util/colorspace

# Module: util/colorspace

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

### Functions

- [hsvToRgb](util_colorspace.md#hsvtorgb)
- [rgbToHsv](util_colorspace.md#rgbtohsv)

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

[src/neuroglancer/util/colorspace.ts:22](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/colorspace.ts#L22)

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

[src/neuroglancer/util/colorspace.ts:70](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/colorspace.ts#L70)
