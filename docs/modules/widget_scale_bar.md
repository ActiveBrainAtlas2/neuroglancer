[neuroglancer](../README.md) / [Modules](../modules.md) / widget/scale\_bar

# Module: widget/scale\_bar

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

- [MultipleScaleBarTextures](../classes/widget_scale_bar.MultipleScaleBarTextures.md)
- [ScaleBarDimensions](../classes/widget_scale_bar.ScaleBarDimensions.md)
- [ScaleBarTexture](../classes/widget_scale_bar.ScaleBarTexture.md)
- [TrackableScaleBarOptions](../classes/widget_scale_bar.TrackableScaleBarOptions.md)

### Interfaces

- [LengthUnit](../interfaces/widget_scale_bar.LengthUnit.md)
- [ScaleBarOptions](../interfaces/widget_scale_bar.ScaleBarOptions.md)
- [ScaleBarTextureOptions](../interfaces/widget_scale_bar.ScaleBarTextureOptions.md)

### Variables

- [ALLOWED\_UNITS](widget_scale_bar.md#allowed_units)
- [defaultScaleBarOptions](widget_scale_bar.md#defaultscalebaroptions)
- [defaultScaleBarTextureOptions](widget_scale_bar.md#defaultscalebartextureoptions)

### Functions

- [pickLengthUnit](widget_scale_bar.md#picklengthunit)
- [pickVolumeUnit](widget_scale_bar.md#pickvolumeunit)

## Variables

### ALLOWED\_UNITS

• `Const` **ALLOWED\_UNITS**: [`LengthUnit`](../interfaces/widget_scale_bar.LengthUnit.md)[]

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/scale_bar.ts#L59)

___

### defaultScaleBarOptions

• `Const` **defaultScaleBarOptions**: [`ScaleBarOptions`](../interfaces/widget_scale_bar.ScaleBarOptions.md)

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:356](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/scale_bar.ts#L356)

___

### defaultScaleBarTextureOptions

• `Const` **defaultScaleBarTextureOptions**: [`ScaleBarTextureOptions`](../interfaces/widget_scale_bar.ScaleBarTextureOptions.md)

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:347](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/scale_bar.ts#L347)

## Functions

### pickLengthUnit

▸ **pickLengthUnit**(`lengthInNanometers`): [`LengthUnit`](../interfaces/widget_scale_bar.LengthUnit.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `lengthInNanometers` | `number` |

#### Returns

[`LengthUnit`](../interfaces/widget_scale_bar.LengthUnit.md)

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:68](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/scale_bar.ts#L68)

___

### pickVolumeUnit

▸ **pickVolumeUnit**(`volumeInCubicNanometers`): [`LengthUnit`](../interfaces/widget_scale_bar.LengthUnit.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `volumeInCubicNanometers` | `number` |

#### Returns

[`LengthUnit`](../interfaces/widget_scale_bar.LengthUnit.md)

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/scale_bar.ts#L81)
