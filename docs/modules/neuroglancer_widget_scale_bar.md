[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/widget/scale\_bar

# Module: neuroglancer/widget/scale\_bar

## Table of contents

### Classes

- [MultipleScaleBarTextures](../classes/neuroglancer_widget_scale_bar.MultipleScaleBarTextures.md)
- [ScaleBarDimensions](../classes/neuroglancer_widget_scale_bar.ScaleBarDimensions.md)
- [ScaleBarTexture](../classes/neuroglancer_widget_scale_bar.ScaleBarTexture.md)
- [TrackableScaleBarOptions](../classes/neuroglancer_widget_scale_bar.TrackableScaleBarOptions.md)

### Interfaces

- [LengthUnit](../interfaces/neuroglancer_widget_scale_bar.LengthUnit.md)
- [ScaleBarOptions](../interfaces/neuroglancer_widget_scale_bar.ScaleBarOptions.md)
- [ScaleBarTextureOptions](../interfaces/neuroglancer_widget_scale_bar.ScaleBarTextureOptions.md)

### Variables

- [ALLOWED\_UNITS](neuroglancer_widget_scale_bar.md#allowed_units)
- [defaultScaleBarOptions](neuroglancer_widget_scale_bar.md#defaultscalebaroptions)
- [defaultScaleBarTextureOptions](neuroglancer_widget_scale_bar.md#defaultscalebartextureoptions)

### Functions

- [pickLengthUnit](neuroglancer_widget_scale_bar.md#picklengthunit)
- [pickVolumeUnit](neuroglancer_widget_scale_bar.md#pickvolumeunit)

## Variables

### ALLOWED\_UNITS

• `Const` **ALLOWED\_UNITS**: [`LengthUnit`](../interfaces/neuroglancer_widget_scale_bar.LengthUnit.md)[]

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/scale_bar.ts#L59)

___

### defaultScaleBarOptions

• `Const` **defaultScaleBarOptions**: [`ScaleBarOptions`](../interfaces/neuroglancer_widget_scale_bar.ScaleBarOptions.md)

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:356](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/scale_bar.ts#L356)

___

### defaultScaleBarTextureOptions

• `Const` **defaultScaleBarTextureOptions**: [`ScaleBarTextureOptions`](../interfaces/neuroglancer_widget_scale_bar.ScaleBarTextureOptions.md)

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:347](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/scale_bar.ts#L347)

## Functions

### pickLengthUnit

▸ **pickLengthUnit**(`lengthInNanometers`): [`LengthUnit`](../interfaces/neuroglancer_widget_scale_bar.LengthUnit.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `lengthInNanometers` | `number` |

#### Returns

[`LengthUnit`](../interfaces/neuroglancer_widget_scale_bar.LengthUnit.md)

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:68](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/scale_bar.ts#L68)

___

### pickVolumeUnit

▸ **pickVolumeUnit**(`volumeInCubicNanometers`): [`LengthUnit`](../interfaces/neuroglancer_widget_scale_bar.LengthUnit.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `volumeInCubicNanometers` | `number` |

#### Returns

[`LengthUnit`](../interfaces/neuroglancer_widget_scale_bar.LengthUnit.md)

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/scale_bar.ts#L81)
