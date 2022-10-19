[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / CanvasRenderingContext2D

# Interface: CanvasRenderingContext2D

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).CanvasRenderingContext2D

The CanvasRenderingContext2D interface, part of the Canvas API, provides the 2D rendering context for the drawing surface of a <canvas> element. It is used for drawing shapes, text, images, and other objects.

## Hierarchy

- [`CanvasCompositing`](main_module._internal_.CanvasCompositing.md)

- [`CanvasDrawImage`](main_module._internal_.CanvasDrawImage.md)

- [`CanvasDrawPath`](main_module._internal_.CanvasDrawPath.md)

- [`CanvasFillStrokeStyles`](main_module._internal_.CanvasFillStrokeStyles.md)

- [`CanvasFilters`](main_module._internal_.CanvasFilters.md)

- [`CanvasImageData`](main_module._internal_.CanvasImageData.md)

- [`CanvasImageSmoothing`](main_module._internal_.CanvasImageSmoothing.md)

- [`CanvasPath`](main_module._internal_.CanvasPath.md)

- `CanvasPathDrawingStyles`

- [`CanvasRect`](main_module._internal_.CanvasRect.md)

- [`CanvasShadowStyles`](main_module._internal_.CanvasShadowStyles.md)

- [`CanvasState`](main_module._internal_.CanvasState.md)

- [`CanvasText`](main_module._internal_.CanvasText.md)

- [`CanvasTextDrawingStyles`](main_module._internal_.CanvasTextDrawingStyles.md)

- [`CanvasTransform`](main_module._internal_.CanvasTransform.md)

- [`CanvasUserInterface`](main_module._internal_.CanvasUserInterface.md)

  ↳ **`CanvasRenderingContext2D`**

## Table of contents

### Properties

- [canvas](main_module._internal_.CanvasRenderingContext2D.md#canvas)
- [direction](main_module._internal_.CanvasRenderingContext2D.md#direction)
- [fillStyle](main_module._internal_.CanvasRenderingContext2D.md#fillstyle)
- [filter](main_module._internal_.CanvasRenderingContext2D.md#filter)
- [font](main_module._internal_.CanvasRenderingContext2D.md#font)
- [globalAlpha](main_module._internal_.CanvasRenderingContext2D.md#globalalpha)
- [globalCompositeOperation](main_module._internal_.CanvasRenderingContext2D.md#globalcompositeoperation)
- [imageSmoothingEnabled](main_module._internal_.CanvasRenderingContext2D.md#imagesmoothingenabled)
- [imageSmoothingQuality](main_module._internal_.CanvasRenderingContext2D.md#imagesmoothingquality)
- [lineCap](main_module._internal_.CanvasRenderingContext2D.md#linecap)
- [lineDashOffset](main_module._internal_.CanvasRenderingContext2D.md#linedashoffset)
- [lineJoin](main_module._internal_.CanvasRenderingContext2D.md#linejoin)
- [lineWidth](main_module._internal_.CanvasRenderingContext2D.md#linewidth)
- [miterLimit](main_module._internal_.CanvasRenderingContext2D.md#miterlimit)
- [shadowBlur](main_module._internal_.CanvasRenderingContext2D.md#shadowblur)
- [shadowColor](main_module._internal_.CanvasRenderingContext2D.md#shadowcolor)
- [shadowOffsetX](main_module._internal_.CanvasRenderingContext2D.md#shadowoffsetx)
- [shadowOffsetY](main_module._internal_.CanvasRenderingContext2D.md#shadowoffsety)
- [strokeStyle](main_module._internal_.CanvasRenderingContext2D.md#strokestyle)
- [textAlign](main_module._internal_.CanvasRenderingContext2D.md#textalign)
- [textBaseline](main_module._internal_.CanvasRenderingContext2D.md#textbaseline)

### Methods

- [arc](main_module._internal_.CanvasRenderingContext2D.md#arc)
- [arcTo](main_module._internal_.CanvasRenderingContext2D.md#arcto)
- [beginPath](main_module._internal_.CanvasRenderingContext2D.md#beginpath)
- [bezierCurveTo](main_module._internal_.CanvasRenderingContext2D.md#beziercurveto)
- [clearRect](main_module._internal_.CanvasRenderingContext2D.md#clearrect)
- [clip](main_module._internal_.CanvasRenderingContext2D.md#clip)
- [closePath](main_module._internal_.CanvasRenderingContext2D.md#closepath)
- [createConicGradient](main_module._internal_.CanvasRenderingContext2D.md#createconicgradient)
- [createImageData](main_module._internal_.CanvasRenderingContext2D.md#createimagedata)
- [createLinearGradient](main_module._internal_.CanvasRenderingContext2D.md#createlineargradient)
- [createPattern](main_module._internal_.CanvasRenderingContext2D.md#createpattern)
- [createRadialGradient](main_module._internal_.CanvasRenderingContext2D.md#createradialgradient)
- [drawFocusIfNeeded](main_module._internal_.CanvasRenderingContext2D.md#drawfocusifneeded)
- [drawImage](main_module._internal_.CanvasRenderingContext2D.md#drawimage)
- [ellipse](main_module._internal_.CanvasRenderingContext2D.md#ellipse)
- [fill](main_module._internal_.CanvasRenderingContext2D.md#fill)
- [fillRect](main_module._internal_.CanvasRenderingContext2D.md#fillrect)
- [fillText](main_module._internal_.CanvasRenderingContext2D.md#filltext)
- [getContextAttributes](main_module._internal_.CanvasRenderingContext2D.md#getcontextattributes)
- [getImageData](main_module._internal_.CanvasRenderingContext2D.md#getimagedata)
- [getLineDash](main_module._internal_.CanvasRenderingContext2D.md#getlinedash)
- [getTransform](main_module._internal_.CanvasRenderingContext2D.md#gettransform)
- [isPointInPath](main_module._internal_.CanvasRenderingContext2D.md#ispointinpath)
- [isPointInStroke](main_module._internal_.CanvasRenderingContext2D.md#ispointinstroke)
- [lineTo](main_module._internal_.CanvasRenderingContext2D.md#lineto)
- [measureText](main_module._internal_.CanvasRenderingContext2D.md#measuretext)
- [moveTo](main_module._internal_.CanvasRenderingContext2D.md#moveto)
- [putImageData](main_module._internal_.CanvasRenderingContext2D.md#putimagedata)
- [quadraticCurveTo](main_module._internal_.CanvasRenderingContext2D.md#quadraticcurveto)
- [rect](main_module._internal_.CanvasRenderingContext2D.md#rect)
- [resetTransform](main_module._internal_.CanvasRenderingContext2D.md#resettransform)
- [restore](main_module._internal_.CanvasRenderingContext2D.md#restore)
- [rotate](main_module._internal_.CanvasRenderingContext2D.md#rotate)
- [save](main_module._internal_.CanvasRenderingContext2D.md#save)
- [scale](main_module._internal_.CanvasRenderingContext2D.md#scale)
- [setLineDash](main_module._internal_.CanvasRenderingContext2D.md#setlinedash)
- [setTransform](main_module._internal_.CanvasRenderingContext2D.md#settransform)
- [stroke](main_module._internal_.CanvasRenderingContext2D.md#stroke)
- [strokeRect](main_module._internal_.CanvasRenderingContext2D.md#strokerect)
- [strokeText](main_module._internal_.CanvasRenderingContext2D.md#stroketext)
- [transform](main_module._internal_.CanvasRenderingContext2D.md#transform)
- [translate](main_module._internal_.CanvasRenderingContext2D.md#translate)

## Properties

### canvas

• `Readonly` **canvas**: [`HTMLCanvasElement`](../modules/main_module._internal_.md#htmlcanvaselement)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3483

___

### direction

• **direction**: [`CanvasDirection`](../modules/main_module._internal_.md#canvasdirection)

#### Inherited from

[CanvasTextDrawingStyles](main_module._internal_.CanvasTextDrawingStyles.md).[direction](main_module._internal_.CanvasTextDrawingStyles.md#direction)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3511

___

### fillStyle

• **fillStyle**: `string` \| [`CanvasGradient`](../modules/main_module._internal_.md#canvasgradient) \| [`CanvasPattern`](../modules/main_module._internal_.md#canvaspattern)

#### Inherited from

[CanvasFillStrokeStyles](main_module._internal_.CanvasFillStrokeStyles.md).[fillStyle](main_module._internal_.CanvasFillStrokeStyles.md#fillstyle)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3402

___

### filter

• **filter**: `string`

#### Inherited from

[CanvasFilters](main_module._internal_.CanvasFilters.md).[filter](main_module._internal_.CanvasFilters.md#filter)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3411

___

### font

• **font**: `string`

#### Inherited from

[CanvasTextDrawingStyles](main_module._internal_.CanvasTextDrawingStyles.md).[font](main_module._internal_.CanvasTextDrawingStyles.md#font)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3512

___

### globalAlpha

• **globalAlpha**: `number`

#### Inherited from

[CanvasCompositing](main_module._internal_.CanvasCompositing.md).[globalAlpha](main_module._internal_.CanvasCompositing.md#globalalpha)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3377

___

### globalCompositeOperation

• **globalCompositeOperation**: [`GlobalCompositeOperation`](../modules/main_module._internal_.md#globalcompositeoperation)

#### Inherited from

[CanvasCompositing](main_module._internal_.CanvasCompositing.md).[globalCompositeOperation](main_module._internal_.CanvasCompositing.md#globalcompositeoperation)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3378

___

### imageSmoothingEnabled

• **imageSmoothingEnabled**: `boolean`

#### Inherited from

[CanvasImageSmoothing](main_module._internal_.CanvasImageSmoothing.md).[imageSmoothingEnabled](main_module._internal_.CanvasImageSmoothing.md#imagesmoothingenabled)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3438

___

### imageSmoothingQuality

• **imageSmoothingQuality**: [`ImageSmoothingQuality`](../modules/main_module._internal_.md#imagesmoothingquality)

#### Inherited from

[CanvasImageSmoothing](main_module._internal_.CanvasImageSmoothing.md).[imageSmoothingQuality](main_module._internal_.CanvasImageSmoothing.md#imagesmoothingquality)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3439

___

### lineCap

• **lineCap**: [`CanvasLineCap`](../modules/main_module._internal_.md#canvaslinecap)

#### Inherited from

CanvasPathDrawingStyles.lineCap

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3455

___

### lineDashOffset

• **lineDashOffset**: `number`

#### Inherited from

CanvasPathDrawingStyles.lineDashOffset

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3456

___

### lineJoin

• **lineJoin**: [`CanvasLineJoin`](../modules/main_module._internal_.md#canvaslinejoin)

#### Inherited from

CanvasPathDrawingStyles.lineJoin

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3457

___

### lineWidth

• **lineWidth**: `number`

#### Inherited from

CanvasPathDrawingStyles.lineWidth

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3458

___

### miterLimit

• **miterLimit**: `number`

#### Inherited from

CanvasPathDrawingStyles.miterLimit

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3459

___

### shadowBlur

• **shadowBlur**: `number`

#### Inherited from

[CanvasShadowStyles](main_module._internal_.CanvasShadowStyles.md).[shadowBlur](main_module._internal_.CanvasShadowStyles.md#shadowblur)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3493

___

### shadowColor

• **shadowColor**: `string`

#### Inherited from

[CanvasShadowStyles](main_module._internal_.CanvasShadowStyles.md).[shadowColor](main_module._internal_.CanvasShadowStyles.md#shadowcolor)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3494

___

### shadowOffsetX

• **shadowOffsetX**: `number`

#### Inherited from

[CanvasShadowStyles](main_module._internal_.CanvasShadowStyles.md).[shadowOffsetX](main_module._internal_.CanvasShadowStyles.md#shadowoffsetx)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3495

___

### shadowOffsetY

• **shadowOffsetY**: `number`

#### Inherited from

[CanvasShadowStyles](main_module._internal_.CanvasShadowStyles.md).[shadowOffsetY](main_module._internal_.CanvasShadowStyles.md#shadowoffsety)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3496

___

### strokeStyle

• **strokeStyle**: `string` \| [`CanvasGradient`](../modules/main_module._internal_.md#canvasgradient) \| [`CanvasPattern`](../modules/main_module._internal_.md#canvaspattern)

#### Inherited from

[CanvasFillStrokeStyles](main_module._internal_.CanvasFillStrokeStyles.md).[strokeStyle](main_module._internal_.CanvasFillStrokeStyles.md#strokestyle)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3403

___

### textAlign

• **textAlign**: [`CanvasTextAlign`](../modules/main_module._internal_.md#canvastextalign)

#### Inherited from

[CanvasTextDrawingStyles](main_module._internal_.CanvasTextDrawingStyles.md).[textAlign](main_module._internal_.CanvasTextDrawingStyles.md#textalign)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3513

___

### textBaseline

• **textBaseline**: [`CanvasTextBaseline`](../modules/main_module._internal_.md#canvastextbaseline)

#### Inherited from

[CanvasTextDrawingStyles](main_module._internal_.CanvasTextDrawingStyles.md).[textBaseline](main_module._internal_.CanvasTextDrawingStyles.md#textbaseline)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3514

## Methods

### arc

▸ **arc**(`x`, `y`, `radius`, `startAngle`, `endAngle`, `counterclockwise?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `radius` | `number` |
| `startAngle` | `number` |
| `endAngle` | `number` |
| `counterclockwise?` | `boolean` |

#### Returns

`void`

#### Inherited from

[CanvasPath](main_module._internal_.CanvasPath.md).[arc](main_module._internal_.CanvasPath.md#arc)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3443

___

### arcTo

▸ **arcTo**(`x1`, `y1`, `x2`, `y2`, `radius`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x1` | `number` |
| `y1` | `number` |
| `x2` | `number` |
| `y2` | `number` |
| `radius` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasPath](main_module._internal_.CanvasPath.md).[arcTo](main_module._internal_.CanvasPath.md#arcto)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3444

___

### beginPath

▸ **beginPath**(): `void`

#### Returns

`void`

#### Inherited from

[CanvasDrawPath](main_module._internal_.CanvasDrawPath.md).[beginPath](main_module._internal_.CanvasDrawPath.md#beginpath)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3388

___

### bezierCurveTo

▸ **bezierCurveTo**(`cp1x`, `cp1y`, `cp2x`, `cp2y`, `x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cp1x` | `number` |
| `cp1y` | `number` |
| `cp2x` | `number` |
| `cp2y` | `number` |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasPath](main_module._internal_.CanvasPath.md).[bezierCurveTo](main_module._internal_.CanvasPath.md#beziercurveto)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3445

___

### clearRect

▸ **clearRect**(`x`, `y`, `w`, `h`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `w` | `number` |
| `h` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasRect](main_module._internal_.CanvasRect.md).[clearRect](main_module._internal_.CanvasRect.md#clearrect)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3476

___

### clip

▸ **clip**(`fillRule?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fillRule?` | [`CanvasFillRule`](../modules/main_module._internal_.md#canvasfillrule) |

#### Returns

`void`

#### Inherited from

[CanvasDrawPath](main_module._internal_.CanvasDrawPath.md).[clip](main_module._internal_.CanvasDrawPath.md#clip)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3389

▸ **clip**(`path`, `fillRule?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`Path2D`](../modules/main_module._internal_.md#path2d) |
| `fillRule?` | [`CanvasFillRule`](../modules/main_module._internal_.md#canvasfillrule) |

#### Returns

`void`

#### Inherited from

[CanvasDrawPath](main_module._internal_.CanvasDrawPath.md).[clip](main_module._internal_.CanvasDrawPath.md#clip)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3390

___

### closePath

▸ **closePath**(): `void`

#### Returns

`void`

#### Inherited from

[CanvasPath](main_module._internal_.CanvasPath.md).[closePath](main_module._internal_.CanvasPath.md#closepath)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3446

___

### createConicGradient

▸ **createConicGradient**(`startAngle`, `x`, `y`): [`CanvasGradient`](../modules/main_module._internal_.md#canvasgradient)

#### Parameters

| Name | Type |
| :------ | :------ |
| `startAngle` | `number` |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`CanvasGradient`](../modules/main_module._internal_.md#canvasgradient)

#### Inherited from

[CanvasFillStrokeStyles](main_module._internal_.CanvasFillStrokeStyles.md).[createConicGradient](main_module._internal_.CanvasFillStrokeStyles.md#createconicgradient)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3404

___

### createImageData

▸ **createImageData**(`sw`, `sh`, `settings?`): [`ImageData`](../modules/main_module._internal_.md#imagedata)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sw` | `number` |
| `sh` | `number` |
| `settings?` | [`ImageDataSettings`](main_module._internal_.ImageDataSettings.md) |

#### Returns

[`ImageData`](../modules/main_module._internal_.md#imagedata)

#### Inherited from

[CanvasImageData](main_module._internal_.CanvasImageData.md).[createImageData](main_module._internal_.CanvasImageData.md#createimagedata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3430

▸ **createImageData**(`imagedata`): [`ImageData`](../modules/main_module._internal_.md#imagedata)

#### Parameters

| Name | Type |
| :------ | :------ |
| `imagedata` | [`ImageData`](../modules/main_module._internal_.md#imagedata) |

#### Returns

[`ImageData`](../modules/main_module._internal_.md#imagedata)

#### Inherited from

[CanvasImageData](main_module._internal_.CanvasImageData.md).[createImageData](main_module._internal_.CanvasImageData.md#createimagedata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3431

___

### createLinearGradient

▸ **createLinearGradient**(`x0`, `y0`, `x1`, `y1`): [`CanvasGradient`](../modules/main_module._internal_.md#canvasgradient)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x0` | `number` |
| `y0` | `number` |
| `x1` | `number` |
| `y1` | `number` |

#### Returns

[`CanvasGradient`](../modules/main_module._internal_.md#canvasgradient)

#### Inherited from

[CanvasFillStrokeStyles](main_module._internal_.CanvasFillStrokeStyles.md).[createLinearGradient](main_module._internal_.CanvasFillStrokeStyles.md#createlineargradient)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3405

___

### createPattern

▸ **createPattern**(`image`, `repetition`): ``null`` \| [`CanvasPattern`](../modules/main_module._internal_.md#canvaspattern)

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | [`CanvasImageSource`](../modules/main_module._internal_.md#canvasimagesource) |
| `repetition` | ``null`` \| `string` |

#### Returns

``null`` \| [`CanvasPattern`](../modules/main_module._internal_.md#canvaspattern)

#### Inherited from

[CanvasFillStrokeStyles](main_module._internal_.CanvasFillStrokeStyles.md).[createPattern](main_module._internal_.CanvasFillStrokeStyles.md#createpattern)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3406

___

### createRadialGradient

▸ **createRadialGradient**(`x0`, `y0`, `r0`, `x1`, `y1`, `r1`): [`CanvasGradient`](../modules/main_module._internal_.md#canvasgradient)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x0` | `number` |
| `y0` | `number` |
| `r0` | `number` |
| `x1` | `number` |
| `y1` | `number` |
| `r1` | `number` |

#### Returns

[`CanvasGradient`](../modules/main_module._internal_.md#canvasgradient)

#### Inherited from

[CanvasFillStrokeStyles](main_module._internal_.CanvasFillStrokeStyles.md).[createRadialGradient](main_module._internal_.CanvasFillStrokeStyles.md#createradialgradient)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3407

___

### drawFocusIfNeeded

▸ **drawFocusIfNeeded**(`element`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`Element`](../modules/main_module._internal_.md#element) |

#### Returns

`void`

#### Inherited from

[CanvasUserInterface](main_module._internal_.CanvasUserInterface.md).[drawFocusIfNeeded](main_module._internal_.CanvasUserInterface.md#drawfocusifneeded)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3529

▸ **drawFocusIfNeeded**(`path`, `element`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`Path2D`](../modules/main_module._internal_.md#path2d) |
| `element` | [`Element`](../modules/main_module._internal_.md#element) |

#### Returns

`void`

#### Inherited from

[CanvasUserInterface](main_module._internal_.CanvasUserInterface.md).[drawFocusIfNeeded](main_module._internal_.CanvasUserInterface.md#drawfocusifneeded)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3530

___

### drawImage

▸ **drawImage**(`image`, `dx`, `dy`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | [`CanvasImageSource`](../modules/main_module._internal_.md#canvasimagesource) |
| `dx` | `number` |
| `dy` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasDrawImage](main_module._internal_.CanvasDrawImage.md).[drawImage](main_module._internal_.CanvasDrawImage.md#drawimage)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3382

▸ **drawImage**(`image`, `dx`, `dy`, `dw`, `dh`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | [`CanvasImageSource`](../modules/main_module._internal_.md#canvasimagesource) |
| `dx` | `number` |
| `dy` | `number` |
| `dw` | `number` |
| `dh` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasDrawImage](main_module._internal_.CanvasDrawImage.md).[drawImage](main_module._internal_.CanvasDrawImage.md#drawimage)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3383

▸ **drawImage**(`image`, `sx`, `sy`, `sw`, `sh`, `dx`, `dy`, `dw`, `dh`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | [`CanvasImageSource`](../modules/main_module._internal_.md#canvasimagesource) |
| `sx` | `number` |
| `sy` | `number` |
| `sw` | `number` |
| `sh` | `number` |
| `dx` | `number` |
| `dy` | `number` |
| `dw` | `number` |
| `dh` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasDrawImage](main_module._internal_.CanvasDrawImage.md).[drawImage](main_module._internal_.CanvasDrawImage.md#drawimage)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3384

___

### ellipse

▸ **ellipse**(`x`, `y`, `radiusX`, `radiusY`, `rotation`, `startAngle`, `endAngle`, `counterclockwise?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `radiusX` | `number` |
| `radiusY` | `number` |
| `rotation` | `number` |
| `startAngle` | `number` |
| `endAngle` | `number` |
| `counterclockwise?` | `boolean` |

#### Returns

`void`

#### Inherited from

[CanvasPath](main_module._internal_.CanvasPath.md).[ellipse](main_module._internal_.CanvasPath.md#ellipse)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3447

___

### fill

▸ **fill**(`fillRule?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fillRule?` | [`CanvasFillRule`](../modules/main_module._internal_.md#canvasfillrule) |

#### Returns

`void`

#### Inherited from

[CanvasDrawPath](main_module._internal_.CanvasDrawPath.md).[fill](main_module._internal_.CanvasDrawPath.md#fill)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3391

▸ **fill**(`path`, `fillRule?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`Path2D`](../modules/main_module._internal_.md#path2d) |
| `fillRule?` | [`CanvasFillRule`](../modules/main_module._internal_.md#canvasfillrule) |

#### Returns

`void`

#### Inherited from

[CanvasDrawPath](main_module._internal_.CanvasDrawPath.md).[fill](main_module._internal_.CanvasDrawPath.md#fill)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3392

___

### fillRect

▸ **fillRect**(`x`, `y`, `w`, `h`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `w` | `number` |
| `h` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasRect](main_module._internal_.CanvasRect.md).[fillRect](main_module._internal_.CanvasRect.md#fillrect)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3477

___

### fillText

▸ **fillText**(`text`, `x`, `y`, `maxWidth?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `x` | `number` |
| `y` | `number` |
| `maxWidth?` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasText](main_module._internal_.CanvasText.md).[fillText](main_module._internal_.CanvasText.md#filltext)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3505

___

### getContextAttributes

▸ **getContextAttributes**(): [`CanvasRenderingContext2DSettings`](main_module._internal_.CanvasRenderingContext2DSettings.md)

#### Returns

[`CanvasRenderingContext2DSettings`](main_module._internal_.CanvasRenderingContext2DSettings.md)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3484

___

### getImageData

▸ **getImageData**(`sx`, `sy`, `sw`, `sh`, `settings?`): [`ImageData`](../modules/main_module._internal_.md#imagedata)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sx` | `number` |
| `sy` | `number` |
| `sw` | `number` |
| `sh` | `number` |
| `settings?` | [`ImageDataSettings`](main_module._internal_.ImageDataSettings.md) |

#### Returns

[`ImageData`](../modules/main_module._internal_.md#imagedata)

#### Inherited from

[CanvasImageData](main_module._internal_.CanvasImageData.md).[getImageData](main_module._internal_.CanvasImageData.md#getimagedata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3432

___

### getLineDash

▸ **getLineDash**(): `number`[]

#### Returns

`number`[]

#### Inherited from

CanvasPathDrawingStyles.getLineDash

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3460

___

### getTransform

▸ **getTransform**(): [`DOMMatrix`](../modules/main_module._internal_.md#dommatrix)

#### Returns

[`DOMMatrix`](../modules/main_module._internal_.md#dommatrix)

#### Inherited from

[CanvasTransform](main_module._internal_.CanvasTransform.md).[getTransform](main_module._internal_.CanvasTransform.md#gettransform)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3518

___

### isPointInPath

▸ **isPointInPath**(`x`, `y`, `fillRule?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `fillRule?` | [`CanvasFillRule`](../modules/main_module._internal_.md#canvasfillrule) |

#### Returns

`boolean`

#### Inherited from

[CanvasDrawPath](main_module._internal_.CanvasDrawPath.md).[isPointInPath](main_module._internal_.CanvasDrawPath.md#ispointinpath)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3393

▸ **isPointInPath**(`path`, `x`, `y`, `fillRule?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`Path2D`](../modules/main_module._internal_.md#path2d) |
| `x` | `number` |
| `y` | `number` |
| `fillRule?` | [`CanvasFillRule`](../modules/main_module._internal_.md#canvasfillrule) |

#### Returns

`boolean`

#### Inherited from

[CanvasDrawPath](main_module._internal_.CanvasDrawPath.md).[isPointInPath](main_module._internal_.CanvasDrawPath.md#ispointinpath)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3394

___

### isPointInStroke

▸ **isPointInStroke**(`x`, `y`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`boolean`

#### Inherited from

[CanvasDrawPath](main_module._internal_.CanvasDrawPath.md).[isPointInStroke](main_module._internal_.CanvasDrawPath.md#ispointinstroke)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3395

▸ **isPointInStroke**(`path`, `x`, `y`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`Path2D`](../modules/main_module._internal_.md#path2d) |
| `x` | `number` |
| `y` | `number` |

#### Returns

`boolean`

#### Inherited from

[CanvasDrawPath](main_module._internal_.CanvasDrawPath.md).[isPointInStroke](main_module._internal_.CanvasDrawPath.md#ispointinstroke)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3396

___

### lineTo

▸ **lineTo**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasPath](main_module._internal_.CanvasPath.md).[lineTo](main_module._internal_.CanvasPath.md#lineto)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3448

___

### measureText

▸ **measureText**(`text`): [`TextMetrics`](../modules/main_module._internal_.md#textmetrics)

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

[`TextMetrics`](../modules/main_module._internal_.md#textmetrics)

#### Inherited from

[CanvasText](main_module._internal_.CanvasText.md).[measureText](main_module._internal_.CanvasText.md#measuretext)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3506

___

### moveTo

▸ **moveTo**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasPath](main_module._internal_.CanvasPath.md).[moveTo](main_module._internal_.CanvasPath.md#moveto)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3449

___

### putImageData

▸ **putImageData**(`imagedata`, `dx`, `dy`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `imagedata` | [`ImageData`](../modules/main_module._internal_.md#imagedata) |
| `dx` | `number` |
| `dy` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasImageData](main_module._internal_.CanvasImageData.md).[putImageData](main_module._internal_.CanvasImageData.md#putimagedata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3433

▸ **putImageData**(`imagedata`, `dx`, `dy`, `dirtyX`, `dirtyY`, `dirtyWidth`, `dirtyHeight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `imagedata` | [`ImageData`](../modules/main_module._internal_.md#imagedata) |
| `dx` | `number` |
| `dy` | `number` |
| `dirtyX` | `number` |
| `dirtyY` | `number` |
| `dirtyWidth` | `number` |
| `dirtyHeight` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasImageData](main_module._internal_.CanvasImageData.md).[putImageData](main_module._internal_.CanvasImageData.md#putimagedata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3434

___

### quadraticCurveTo

▸ **quadraticCurveTo**(`cpx`, `cpy`, `x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cpx` | `number` |
| `cpy` | `number` |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasPath](main_module._internal_.CanvasPath.md).[quadraticCurveTo](main_module._internal_.CanvasPath.md#quadraticcurveto)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3450

___

### rect

▸ **rect**(`x`, `y`, `w`, `h`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `w` | `number` |
| `h` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasPath](main_module._internal_.CanvasPath.md).[rect](main_module._internal_.CanvasPath.md#rect)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3451

___

### resetTransform

▸ **resetTransform**(): `void`

#### Returns

`void`

#### Inherited from

[CanvasTransform](main_module._internal_.CanvasTransform.md).[resetTransform](main_module._internal_.CanvasTransform.md#resettransform)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3519

___

### restore

▸ **restore**(): `void`

#### Returns

`void`

#### Inherited from

[CanvasState](main_module._internal_.CanvasState.md).[restore](main_module._internal_.CanvasState.md#restore)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3500

___

### rotate

▸ **rotate**(`angle`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `angle` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasTransform](main_module._internal_.CanvasTransform.md).[rotate](main_module._internal_.CanvasTransform.md#rotate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3520

___

### save

▸ **save**(): `void`

#### Returns

`void`

#### Inherited from

[CanvasState](main_module._internal_.CanvasState.md).[save](main_module._internal_.CanvasState.md#save)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3501

___

### scale

▸ **scale**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasTransform](main_module._internal_.CanvasTransform.md).[scale](main_module._internal_.CanvasTransform.md#scale)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3521

___

### setLineDash

▸ **setLineDash**(`segments`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `segments` | `number`[] |

#### Returns

`void`

#### Inherited from

CanvasPathDrawingStyles.setLineDash

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3461

▸ **setLineDash**(`segments`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `segments` | [`Iterable`](main_module._internal_.Iterable.md)<`number`\> |

#### Returns

`void`

#### Inherited from

CanvasPathDrawingStyles.setLineDash

#### Defined in

node_modules/typescript/lib/lib.dom.iterable.d.ts:50

___

### setTransform

▸ **setTransform**(`a`, `b`, `c`, `d`, `e`, `f`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |
| `c` | `number` |
| `d` | `number` |
| `e` | `number` |
| `f` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasTransform](main_module._internal_.CanvasTransform.md).[setTransform](main_module._internal_.CanvasTransform.md#settransform)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3522

▸ **setTransform**(`transform?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform?` | [`DOMMatrix2DInit`](main_module._internal_.DOMMatrix2DInit.md) |

#### Returns

`void`

#### Inherited from

[CanvasTransform](main_module._internal_.CanvasTransform.md).[setTransform](main_module._internal_.CanvasTransform.md#settransform)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3523

___

### stroke

▸ **stroke**(): `void`

#### Returns

`void`

#### Inherited from

[CanvasDrawPath](main_module._internal_.CanvasDrawPath.md).[stroke](main_module._internal_.CanvasDrawPath.md#stroke)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3397

▸ **stroke**(`path`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`Path2D`](../modules/main_module._internal_.md#path2d) |

#### Returns

`void`

#### Inherited from

[CanvasDrawPath](main_module._internal_.CanvasDrawPath.md).[stroke](main_module._internal_.CanvasDrawPath.md#stroke)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3398

___

### strokeRect

▸ **strokeRect**(`x`, `y`, `w`, `h`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `w` | `number` |
| `h` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasRect](main_module._internal_.CanvasRect.md).[strokeRect](main_module._internal_.CanvasRect.md#strokerect)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3478

___

### strokeText

▸ **strokeText**(`text`, `x`, `y`, `maxWidth?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `x` | `number` |
| `y` | `number` |
| `maxWidth?` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasText](main_module._internal_.CanvasText.md).[strokeText](main_module._internal_.CanvasText.md#stroketext)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3507

___

### transform

▸ **transform**(`a`, `b`, `c`, `d`, `e`, `f`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |
| `c` | `number` |
| `d` | `number` |
| `e` | `number` |
| `f` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasTransform](main_module._internal_.CanvasTransform.md).[transform](main_module._internal_.CanvasTransform.md#transform)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3524

___

### translate

▸ **translate**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasTransform](main_module._internal_.CanvasTransform.md).[translate](main_module._internal_.CanvasTransform.md#translate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3525
