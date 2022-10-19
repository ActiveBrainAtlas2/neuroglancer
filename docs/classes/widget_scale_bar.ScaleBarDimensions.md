[neuroglancer](../README.md) / [Modules](../modules.md) / [widget/scale\_bar](../modules/widget_scale_bar.md) / ScaleBarDimensions

# Class: ScaleBarDimensions

[widget/scale_bar](../modules/widget_scale_bar.md).ScaleBarDimensions

## Table of contents

### Constructors

- [constructor](widget_scale_bar.ScaleBarDimensions.md#constructor)

### Properties

- [allowedSignificands](widget_scale_bar.ScaleBarDimensions.md#allowedsignificands)
- [lengthInPixels](widget_scale_bar.ScaleBarDimensions.md#lengthinpixels)
- [physicalBaseUnit](widget_scale_bar.ScaleBarDimensions.md#physicalbaseunit)
- [physicalLength](widget_scale_bar.ScaleBarDimensions.md#physicallength)
- [physicalSizePerPixel](widget_scale_bar.ScaleBarDimensions.md#physicalsizeperpixel)
- [physicalUnit](widget_scale_bar.ScaleBarDimensions.md#physicalunit)
- [prevPhysicalSizePerPixel](widget_scale_bar.ScaleBarDimensions.md#prevphysicalsizeperpixel)
- [prevPhysicalUnit](widget_scale_bar.ScaleBarDimensions.md#prevphysicalunit)
- [prevTargetLengthInPixels](widget_scale_bar.ScaleBarDimensions.md#prevtargetlengthinpixels)
- [targetLengthInPixels](widget_scale_bar.ScaleBarDimensions.md#targetlengthinpixels)

### Methods

- [update](widget_scale_bar.ScaleBarDimensions.md#update)

## Constructors

### constructor

• **new ScaleBarDimensions**()

## Properties

### allowedSignificands

• **allowedSignificands**: `number`[] = `DEFAULT_ALLOWED_SIGNIFICANDS`

Allowed significand values.  1 is not included, but is always considered
part of the set.

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:99](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/scale_bar.ts#L99)

___

### lengthInPixels

• **lengthInPixels**: `number`

Length that scale bar should be drawn, in pixels.

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:121](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/scale_bar.ts#L121)

___

### physicalBaseUnit

• **physicalBaseUnit**: `string`

Base physical unit, e.g. "m" (for meters) or "s" (for seconds).

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:114](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/scale_bar.ts#L114)

___

### physicalLength

• **physicalLength**: `number`

Physical length with which to label the scale bar.

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:126](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/scale_bar.ts#L126)

___

### physicalSizePerPixel

• **physicalSizePerPixel**: `number` = `0`

Pixel size in base physical units.

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:109](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/scale_bar.ts#L109)

___

### physicalUnit

• **physicalUnit**: `string`

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:127](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/scale_bar.ts#L127)

___

### prevPhysicalSizePerPixel

• **prevPhysicalSizePerPixel**: `number` = `0`

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:129](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/scale_bar.ts#L129)

___

### prevPhysicalUnit

• **prevPhysicalUnit**: `string` = `'\0'`

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:131](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/scale_bar.ts#L131)

___

### prevTargetLengthInPixels

• **prevTargetLengthInPixels**: `number` = `0`

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:130](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/scale_bar.ts#L130)

___

### targetLengthInPixels

• **targetLengthInPixels**: `number` = `0`

The target length in pixels.  The closest

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:104](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/scale_bar.ts#L104)

## Methods

### update

▸ **update**(): `boolean`

Updates physicalLength, physicalUnit, and lengthInPixels to be the optimal values corresponding
to targetLengthInPixels and physicalSizePerPixel.

#### Returns

`boolean`

true if the scale bar has changed, false if it is unchanged.

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:139](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/scale_bar.ts#L139)
