[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / CanvasRenderingContext2D

# Interface: CanvasRenderingContext2D

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).CanvasRenderingContext2D

The CanvasRenderingContext2D interface, part of the Canvas API, provides the 2D rendering context for the drawing surface of a <canvas> element. It is used for drawing shapes, text, images, and other objects.

## Hierarchy

- [`CanvasCompositing`](annotation_annotation_layer_state._internal_.CanvasCompositing.md)

- [`CanvasDrawImage`](annotation_annotation_layer_state._internal_.CanvasDrawImage.md)

- [`CanvasDrawPath`](annotation_annotation_layer_state._internal_.CanvasDrawPath.md)

- [`CanvasFillStrokeStyles`](annotation_annotation_layer_state._internal_.CanvasFillStrokeStyles.md)

- [`CanvasFilters`](annotation_annotation_layer_state._internal_.CanvasFilters.md)

- [`CanvasImageData`](annotation_annotation_layer_state._internal_.CanvasImageData.md)

- [`CanvasImageSmoothing`](annotation_annotation_layer_state._internal_.CanvasImageSmoothing.md)

- [`CanvasPath`](annotation_annotation_layer_state._internal_.CanvasPath.md)

- `CanvasPathDrawingStyles`

- [`CanvasRect`](annotation_annotation_layer_state._internal_.CanvasRect.md)

- [`CanvasShadowStyles`](annotation_annotation_layer_state._internal_.CanvasShadowStyles.md)

- [`CanvasState`](annotation_annotation_layer_state._internal_.CanvasState.md)

- [`CanvasText`](annotation_annotation_layer_state._internal_.CanvasText.md)

- [`CanvasTextDrawingStyles`](annotation_annotation_layer_state._internal_.CanvasTextDrawingStyles.md)

- [`CanvasTransform`](annotation_annotation_layer_state._internal_.CanvasTransform.md)

- [`CanvasUserInterface`](annotation_annotation_layer_state._internal_.CanvasUserInterface.md)

  ↳ **`CanvasRenderingContext2D`**

## Table of contents

### Properties

- [canvas](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#canvas)
- [direction](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#direction)
- [fillStyle](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#fillstyle)
- [filter](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#filter)
- [font](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#font)
- [globalAlpha](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#globalalpha)
- [globalCompositeOperation](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#globalcompositeoperation)
- [imageSmoothingEnabled](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#imagesmoothingenabled)
- [imageSmoothingQuality](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#imagesmoothingquality)
- [lineCap](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#linecap)
- [lineDashOffset](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#linedashoffset)
- [lineJoin](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#linejoin)
- [lineWidth](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#linewidth)
- [miterLimit](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#miterlimit)
- [shadowBlur](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#shadowblur)
- [shadowColor](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#shadowcolor)
- [shadowOffsetX](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#shadowoffsetx)
- [shadowOffsetY](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#shadowoffsety)
- [strokeStyle](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#strokestyle)
- [textAlign](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#textalign)
- [textBaseline](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#textbaseline)

### Methods

- [arc](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#arc)
- [arcTo](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#arcto)
- [beginPath](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#beginpath)
- [bezierCurveTo](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#beziercurveto)
- [clearRect](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#clearrect)
- [clip](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#clip)
- [closePath](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#closepath)
- [createConicGradient](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#createconicgradient)
- [createImageData](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#createimagedata)
- [createLinearGradient](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#createlineargradient)
- [createPattern](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#createpattern)
- [createRadialGradient](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#createradialgradient)
- [drawFocusIfNeeded](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#drawfocusifneeded)
- [drawImage](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#drawimage)
- [ellipse](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#ellipse)
- [fill](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#fill)
- [fillRect](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#fillrect)
- [fillText](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#filltext)
- [getContextAttributes](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#getcontextattributes)
- [getImageData](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#getimagedata)
- [getLineDash](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#getlinedash)
- [getTransform](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#gettransform)
- [isPointInPath](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#ispointinpath)
- [isPointInStroke](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#ispointinstroke)
- [lineTo](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#lineto)
- [measureText](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#measuretext)
- [moveTo](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#moveto)
- [putImageData](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#putimagedata)
- [quadraticCurveTo](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#quadraticcurveto)
- [rect](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#rect)
- [resetTransform](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#resettransform)
- [restore](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#restore)
- [rotate](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#rotate)
- [save](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#save)
- [scale](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#scale)
- [setLineDash](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#setlinedash)
- [setTransform](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#settransform)
- [stroke](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#stroke)
- [strokeRect](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#strokerect)
- [strokeText](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#stroketext)
- [transform](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#transform)
- [translate](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md#translate)

## Properties

### canvas

• `Readonly` **canvas**: [`HTMLCanvasElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlcanvaselement)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3483

___

### direction

• **direction**: [`CanvasDirection`](../modules/annotation_annotation_layer_state._internal_.md#canvasdirection)

#### Inherited from

[CanvasTextDrawingStyles](annotation_annotation_layer_state._internal_.CanvasTextDrawingStyles.md).[direction](annotation_annotation_layer_state._internal_.CanvasTextDrawingStyles.md#direction)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3511

___

### fillStyle

• **fillStyle**: `string` \| [`CanvasGradient`](../modules/annotation_annotation_layer_state._internal_.md#canvasgradient) \| [`CanvasPattern`](../modules/annotation_annotation_layer_state._internal_.md#canvaspattern)

#### Inherited from

[CanvasFillStrokeStyles](annotation_annotation_layer_state._internal_.CanvasFillStrokeStyles.md).[fillStyle](annotation_annotation_layer_state._internal_.CanvasFillStrokeStyles.md#fillstyle)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3402

___

### filter

• **filter**: `string`

#### Inherited from

[CanvasFilters](annotation_annotation_layer_state._internal_.CanvasFilters.md).[filter](annotation_annotation_layer_state._internal_.CanvasFilters.md#filter)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3411

___

### font

• **font**: `string`

#### Inherited from

[CanvasTextDrawingStyles](annotation_annotation_layer_state._internal_.CanvasTextDrawingStyles.md).[font](annotation_annotation_layer_state._internal_.CanvasTextDrawingStyles.md#font)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3512

___

### globalAlpha

• **globalAlpha**: `number`

#### Inherited from

[CanvasCompositing](annotation_annotation_layer_state._internal_.CanvasCompositing.md).[globalAlpha](annotation_annotation_layer_state._internal_.CanvasCompositing.md#globalalpha)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3377

___

### globalCompositeOperation

• **globalCompositeOperation**: [`GlobalCompositeOperation`](../modules/annotation_annotation_layer_state._internal_.md#globalcompositeoperation)

#### Inherited from

[CanvasCompositing](annotation_annotation_layer_state._internal_.CanvasCompositing.md).[globalCompositeOperation](annotation_annotation_layer_state._internal_.CanvasCompositing.md#globalcompositeoperation)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3378

___

### imageSmoothingEnabled

• **imageSmoothingEnabled**: `boolean`

#### Inherited from

[CanvasImageSmoothing](annotation_annotation_layer_state._internal_.CanvasImageSmoothing.md).[imageSmoothingEnabled](annotation_annotation_layer_state._internal_.CanvasImageSmoothing.md#imagesmoothingenabled)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3438

___

### imageSmoothingQuality

• **imageSmoothingQuality**: [`ImageSmoothingQuality`](../modules/annotation_annotation_layer_state._internal_.md#imagesmoothingquality)

#### Inherited from

[CanvasImageSmoothing](annotation_annotation_layer_state._internal_.CanvasImageSmoothing.md).[imageSmoothingQuality](annotation_annotation_layer_state._internal_.CanvasImageSmoothing.md#imagesmoothingquality)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3439

___

### lineCap

• **lineCap**: [`CanvasLineCap`](../modules/annotation_annotation_layer_state._internal_.md#canvaslinecap)

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

• **lineJoin**: [`CanvasLineJoin`](../modules/annotation_annotation_layer_state._internal_.md#canvaslinejoin)

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

[CanvasShadowStyles](annotation_annotation_layer_state._internal_.CanvasShadowStyles.md).[shadowBlur](annotation_annotation_layer_state._internal_.CanvasShadowStyles.md#shadowblur)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3493

___

### shadowColor

• **shadowColor**: `string`

#### Inherited from

[CanvasShadowStyles](annotation_annotation_layer_state._internal_.CanvasShadowStyles.md).[shadowColor](annotation_annotation_layer_state._internal_.CanvasShadowStyles.md#shadowcolor)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3494

___

### shadowOffsetX

• **shadowOffsetX**: `number`

#### Inherited from

[CanvasShadowStyles](annotation_annotation_layer_state._internal_.CanvasShadowStyles.md).[shadowOffsetX](annotation_annotation_layer_state._internal_.CanvasShadowStyles.md#shadowoffsetx)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3495

___

### shadowOffsetY

• **shadowOffsetY**: `number`

#### Inherited from

[CanvasShadowStyles](annotation_annotation_layer_state._internal_.CanvasShadowStyles.md).[shadowOffsetY](annotation_annotation_layer_state._internal_.CanvasShadowStyles.md#shadowoffsety)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3496

___

### strokeStyle

• **strokeStyle**: `string` \| [`CanvasGradient`](../modules/annotation_annotation_layer_state._internal_.md#canvasgradient) \| [`CanvasPattern`](../modules/annotation_annotation_layer_state._internal_.md#canvaspattern)

#### Inherited from

[CanvasFillStrokeStyles](annotation_annotation_layer_state._internal_.CanvasFillStrokeStyles.md).[strokeStyle](annotation_annotation_layer_state._internal_.CanvasFillStrokeStyles.md#strokestyle)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3403

___

### textAlign

• **textAlign**: [`CanvasTextAlign`](../modules/annotation_annotation_layer_state._internal_.md#canvastextalign)

#### Inherited from

[CanvasTextDrawingStyles](annotation_annotation_layer_state._internal_.CanvasTextDrawingStyles.md).[textAlign](annotation_annotation_layer_state._internal_.CanvasTextDrawingStyles.md#textalign)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3513

___

### textBaseline

• **textBaseline**: [`CanvasTextBaseline`](../modules/annotation_annotation_layer_state._internal_.md#canvastextbaseline)

#### Inherited from

[CanvasTextDrawingStyles](annotation_annotation_layer_state._internal_.CanvasTextDrawingStyles.md).[textBaseline](annotation_annotation_layer_state._internal_.CanvasTextDrawingStyles.md#textbaseline)

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

[CanvasPath](annotation_annotation_layer_state._internal_.CanvasPath.md).[arc](annotation_annotation_layer_state._internal_.CanvasPath.md#arc)

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

[CanvasPath](annotation_annotation_layer_state._internal_.CanvasPath.md).[arcTo](annotation_annotation_layer_state._internal_.CanvasPath.md#arcto)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3444

___

### beginPath

▸ **beginPath**(): `void`

#### Returns

`void`

#### Inherited from

[CanvasDrawPath](annotation_annotation_layer_state._internal_.CanvasDrawPath.md).[beginPath](annotation_annotation_layer_state._internal_.CanvasDrawPath.md#beginpath)

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

[CanvasPath](annotation_annotation_layer_state._internal_.CanvasPath.md).[bezierCurveTo](annotation_annotation_layer_state._internal_.CanvasPath.md#beziercurveto)

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

[CanvasRect](annotation_annotation_layer_state._internal_.CanvasRect.md).[clearRect](annotation_annotation_layer_state._internal_.CanvasRect.md#clearrect)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3476

___

### clip

▸ **clip**(`fillRule?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fillRule?` | [`CanvasFillRule`](../modules/annotation_annotation_layer_state._internal_.md#canvasfillrule) |

#### Returns

`void`

#### Inherited from

[CanvasDrawPath](annotation_annotation_layer_state._internal_.CanvasDrawPath.md).[clip](annotation_annotation_layer_state._internal_.CanvasDrawPath.md#clip)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3389

▸ **clip**(`path`, `fillRule?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`Path2D`](../modules/annotation_annotation_layer_state._internal_.md#path2d) |
| `fillRule?` | [`CanvasFillRule`](../modules/annotation_annotation_layer_state._internal_.md#canvasfillrule) |

#### Returns

`void`

#### Inherited from

[CanvasDrawPath](annotation_annotation_layer_state._internal_.CanvasDrawPath.md).[clip](annotation_annotation_layer_state._internal_.CanvasDrawPath.md#clip)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3390

___

### closePath

▸ **closePath**(): `void`

#### Returns

`void`

#### Inherited from

[CanvasPath](annotation_annotation_layer_state._internal_.CanvasPath.md).[closePath](annotation_annotation_layer_state._internal_.CanvasPath.md#closepath)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3446

___

### createConicGradient

▸ **createConicGradient**(`startAngle`, `x`, `y`): [`CanvasGradient`](../modules/annotation_annotation_layer_state._internal_.md#canvasgradient)

#### Parameters

| Name | Type |
| :------ | :------ |
| `startAngle` | `number` |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`CanvasGradient`](../modules/annotation_annotation_layer_state._internal_.md#canvasgradient)

#### Inherited from

[CanvasFillStrokeStyles](annotation_annotation_layer_state._internal_.CanvasFillStrokeStyles.md).[createConicGradient](annotation_annotation_layer_state._internal_.CanvasFillStrokeStyles.md#createconicgradient)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3404

___

### createImageData

▸ **createImageData**(`sw`, `sh`, `settings?`): [`ImageData`](../modules/annotation_annotation_layer_state._internal_.md#imagedata)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sw` | `number` |
| `sh` | `number` |
| `settings?` | [`ImageDataSettings`](annotation_annotation_layer_state._internal_.ImageDataSettings.md) |

#### Returns

[`ImageData`](../modules/annotation_annotation_layer_state._internal_.md#imagedata)

#### Inherited from

[CanvasImageData](annotation_annotation_layer_state._internal_.CanvasImageData.md).[createImageData](annotation_annotation_layer_state._internal_.CanvasImageData.md#createimagedata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3430

▸ **createImageData**(`imagedata`): [`ImageData`](../modules/annotation_annotation_layer_state._internal_.md#imagedata)

#### Parameters

| Name | Type |
| :------ | :------ |
| `imagedata` | [`ImageData`](../modules/annotation_annotation_layer_state._internal_.md#imagedata) |

#### Returns

[`ImageData`](../modules/annotation_annotation_layer_state._internal_.md#imagedata)

#### Inherited from

[CanvasImageData](annotation_annotation_layer_state._internal_.CanvasImageData.md).[createImageData](annotation_annotation_layer_state._internal_.CanvasImageData.md#createimagedata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3431

___

### createLinearGradient

▸ **createLinearGradient**(`x0`, `y0`, `x1`, `y1`): [`CanvasGradient`](../modules/annotation_annotation_layer_state._internal_.md#canvasgradient)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x0` | `number` |
| `y0` | `number` |
| `x1` | `number` |
| `y1` | `number` |

#### Returns

[`CanvasGradient`](../modules/annotation_annotation_layer_state._internal_.md#canvasgradient)

#### Inherited from

[CanvasFillStrokeStyles](annotation_annotation_layer_state._internal_.CanvasFillStrokeStyles.md).[createLinearGradient](annotation_annotation_layer_state._internal_.CanvasFillStrokeStyles.md#createlineargradient)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3405

___

### createPattern

▸ **createPattern**(`image`, `repetition`): ``null`` \| [`CanvasPattern`](../modules/annotation_annotation_layer_state._internal_.md#canvaspattern)

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | [`CanvasImageSource`](../modules/annotation_annotation_layer_state._internal_.md#canvasimagesource) |
| `repetition` | ``null`` \| `string` |

#### Returns

``null`` \| [`CanvasPattern`](../modules/annotation_annotation_layer_state._internal_.md#canvaspattern)

#### Inherited from

[CanvasFillStrokeStyles](annotation_annotation_layer_state._internal_.CanvasFillStrokeStyles.md).[createPattern](annotation_annotation_layer_state._internal_.CanvasFillStrokeStyles.md#createpattern)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3406

___

### createRadialGradient

▸ **createRadialGradient**(`x0`, `y0`, `r0`, `x1`, `y1`, `r1`): [`CanvasGradient`](../modules/annotation_annotation_layer_state._internal_.md#canvasgradient)

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

[`CanvasGradient`](../modules/annotation_annotation_layer_state._internal_.md#canvasgradient)

#### Inherited from

[CanvasFillStrokeStyles](annotation_annotation_layer_state._internal_.CanvasFillStrokeStyles.md).[createRadialGradient](annotation_annotation_layer_state._internal_.CanvasFillStrokeStyles.md#createradialgradient)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3407

___

### drawFocusIfNeeded

▸ **drawFocusIfNeeded**(`element`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`Element`](../modules/annotation_annotation_layer_state._internal_.md#element) |

#### Returns

`void`

#### Inherited from

[CanvasUserInterface](annotation_annotation_layer_state._internal_.CanvasUserInterface.md).[drawFocusIfNeeded](annotation_annotation_layer_state._internal_.CanvasUserInterface.md#drawfocusifneeded)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3529

▸ **drawFocusIfNeeded**(`path`, `element`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`Path2D`](../modules/annotation_annotation_layer_state._internal_.md#path2d) |
| `element` | [`Element`](../modules/annotation_annotation_layer_state._internal_.md#element) |

#### Returns

`void`

#### Inherited from

[CanvasUserInterface](annotation_annotation_layer_state._internal_.CanvasUserInterface.md).[drawFocusIfNeeded](annotation_annotation_layer_state._internal_.CanvasUserInterface.md#drawfocusifneeded)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3530

___

### drawImage

▸ **drawImage**(`image`, `dx`, `dy`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | [`CanvasImageSource`](../modules/annotation_annotation_layer_state._internal_.md#canvasimagesource) |
| `dx` | `number` |
| `dy` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasDrawImage](annotation_annotation_layer_state._internal_.CanvasDrawImage.md).[drawImage](annotation_annotation_layer_state._internal_.CanvasDrawImage.md#drawimage)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3382

▸ **drawImage**(`image`, `dx`, `dy`, `dw`, `dh`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | [`CanvasImageSource`](../modules/annotation_annotation_layer_state._internal_.md#canvasimagesource) |
| `dx` | `number` |
| `dy` | `number` |
| `dw` | `number` |
| `dh` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasDrawImage](annotation_annotation_layer_state._internal_.CanvasDrawImage.md).[drawImage](annotation_annotation_layer_state._internal_.CanvasDrawImage.md#drawimage)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3383

▸ **drawImage**(`image`, `sx`, `sy`, `sw`, `sh`, `dx`, `dy`, `dw`, `dh`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | [`CanvasImageSource`](../modules/annotation_annotation_layer_state._internal_.md#canvasimagesource) |
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

[CanvasDrawImage](annotation_annotation_layer_state._internal_.CanvasDrawImage.md).[drawImage](annotation_annotation_layer_state._internal_.CanvasDrawImage.md#drawimage)

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

[CanvasPath](annotation_annotation_layer_state._internal_.CanvasPath.md).[ellipse](annotation_annotation_layer_state._internal_.CanvasPath.md#ellipse)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3447

___

### fill

▸ **fill**(`fillRule?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fillRule?` | [`CanvasFillRule`](../modules/annotation_annotation_layer_state._internal_.md#canvasfillrule) |

#### Returns

`void`

#### Inherited from

[CanvasDrawPath](annotation_annotation_layer_state._internal_.CanvasDrawPath.md).[fill](annotation_annotation_layer_state._internal_.CanvasDrawPath.md#fill)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3391

▸ **fill**(`path`, `fillRule?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`Path2D`](../modules/annotation_annotation_layer_state._internal_.md#path2d) |
| `fillRule?` | [`CanvasFillRule`](../modules/annotation_annotation_layer_state._internal_.md#canvasfillrule) |

#### Returns

`void`

#### Inherited from

[CanvasDrawPath](annotation_annotation_layer_state._internal_.CanvasDrawPath.md).[fill](annotation_annotation_layer_state._internal_.CanvasDrawPath.md#fill)

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

[CanvasRect](annotation_annotation_layer_state._internal_.CanvasRect.md).[fillRect](annotation_annotation_layer_state._internal_.CanvasRect.md#fillrect)

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

[CanvasText](annotation_annotation_layer_state._internal_.CanvasText.md).[fillText](annotation_annotation_layer_state._internal_.CanvasText.md#filltext)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3505

___

### getContextAttributes

▸ **getContextAttributes**(): [`CanvasRenderingContext2DSettings`](annotation_annotation_layer_state._internal_.CanvasRenderingContext2DSettings.md)

#### Returns

[`CanvasRenderingContext2DSettings`](annotation_annotation_layer_state._internal_.CanvasRenderingContext2DSettings.md)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3484

___

### getImageData

▸ **getImageData**(`sx`, `sy`, `sw`, `sh`, `settings?`): [`ImageData`](../modules/annotation_annotation_layer_state._internal_.md#imagedata)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sx` | `number` |
| `sy` | `number` |
| `sw` | `number` |
| `sh` | `number` |
| `settings?` | [`ImageDataSettings`](annotation_annotation_layer_state._internal_.ImageDataSettings.md) |

#### Returns

[`ImageData`](../modules/annotation_annotation_layer_state._internal_.md#imagedata)

#### Inherited from

[CanvasImageData](annotation_annotation_layer_state._internal_.CanvasImageData.md).[getImageData](annotation_annotation_layer_state._internal_.CanvasImageData.md#getimagedata)

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

▸ **getTransform**(): [`DOMMatrix`](../modules/annotation_annotation_layer_state._internal_.md#dommatrix)

#### Returns

[`DOMMatrix`](../modules/annotation_annotation_layer_state._internal_.md#dommatrix)

#### Inherited from

[CanvasTransform](annotation_annotation_layer_state._internal_.CanvasTransform.md).[getTransform](annotation_annotation_layer_state._internal_.CanvasTransform.md#gettransform)

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
| `fillRule?` | [`CanvasFillRule`](../modules/annotation_annotation_layer_state._internal_.md#canvasfillrule) |

#### Returns

`boolean`

#### Inherited from

[CanvasDrawPath](annotation_annotation_layer_state._internal_.CanvasDrawPath.md).[isPointInPath](annotation_annotation_layer_state._internal_.CanvasDrawPath.md#ispointinpath)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3393

▸ **isPointInPath**(`path`, `x`, `y`, `fillRule?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`Path2D`](../modules/annotation_annotation_layer_state._internal_.md#path2d) |
| `x` | `number` |
| `y` | `number` |
| `fillRule?` | [`CanvasFillRule`](../modules/annotation_annotation_layer_state._internal_.md#canvasfillrule) |

#### Returns

`boolean`

#### Inherited from

[CanvasDrawPath](annotation_annotation_layer_state._internal_.CanvasDrawPath.md).[isPointInPath](annotation_annotation_layer_state._internal_.CanvasDrawPath.md#ispointinpath)

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

[CanvasDrawPath](annotation_annotation_layer_state._internal_.CanvasDrawPath.md).[isPointInStroke](annotation_annotation_layer_state._internal_.CanvasDrawPath.md#ispointinstroke)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3395

▸ **isPointInStroke**(`path`, `x`, `y`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`Path2D`](../modules/annotation_annotation_layer_state._internal_.md#path2d) |
| `x` | `number` |
| `y` | `number` |

#### Returns

`boolean`

#### Inherited from

[CanvasDrawPath](annotation_annotation_layer_state._internal_.CanvasDrawPath.md).[isPointInStroke](annotation_annotation_layer_state._internal_.CanvasDrawPath.md#ispointinstroke)

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

[CanvasPath](annotation_annotation_layer_state._internal_.CanvasPath.md).[lineTo](annotation_annotation_layer_state._internal_.CanvasPath.md#lineto)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3448

___

### measureText

▸ **measureText**(`text`): [`TextMetrics`](../modules/annotation_annotation_layer_state._internal_.md#textmetrics)

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

[`TextMetrics`](../modules/annotation_annotation_layer_state._internal_.md#textmetrics)

#### Inherited from

[CanvasText](annotation_annotation_layer_state._internal_.CanvasText.md).[measureText](annotation_annotation_layer_state._internal_.CanvasText.md#measuretext)

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

[CanvasPath](annotation_annotation_layer_state._internal_.CanvasPath.md).[moveTo](annotation_annotation_layer_state._internal_.CanvasPath.md#moveto)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3449

___

### putImageData

▸ **putImageData**(`imagedata`, `dx`, `dy`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `imagedata` | [`ImageData`](../modules/annotation_annotation_layer_state._internal_.md#imagedata) |
| `dx` | `number` |
| `dy` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasImageData](annotation_annotation_layer_state._internal_.CanvasImageData.md).[putImageData](annotation_annotation_layer_state._internal_.CanvasImageData.md#putimagedata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3433

▸ **putImageData**(`imagedata`, `dx`, `dy`, `dirtyX`, `dirtyY`, `dirtyWidth`, `dirtyHeight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `imagedata` | [`ImageData`](../modules/annotation_annotation_layer_state._internal_.md#imagedata) |
| `dx` | `number` |
| `dy` | `number` |
| `dirtyX` | `number` |
| `dirtyY` | `number` |
| `dirtyWidth` | `number` |
| `dirtyHeight` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasImageData](annotation_annotation_layer_state._internal_.CanvasImageData.md).[putImageData](annotation_annotation_layer_state._internal_.CanvasImageData.md#putimagedata)

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

[CanvasPath](annotation_annotation_layer_state._internal_.CanvasPath.md).[quadraticCurveTo](annotation_annotation_layer_state._internal_.CanvasPath.md#quadraticcurveto)

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

[CanvasPath](annotation_annotation_layer_state._internal_.CanvasPath.md).[rect](annotation_annotation_layer_state._internal_.CanvasPath.md#rect)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3451

___

### resetTransform

▸ **resetTransform**(): `void`

#### Returns

`void`

#### Inherited from

[CanvasTransform](annotation_annotation_layer_state._internal_.CanvasTransform.md).[resetTransform](annotation_annotation_layer_state._internal_.CanvasTransform.md#resettransform)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3519

___

### restore

▸ **restore**(): `void`

#### Returns

`void`

#### Inherited from

[CanvasState](annotation_annotation_layer_state._internal_.CanvasState.md).[restore](annotation_annotation_layer_state._internal_.CanvasState.md#restore)

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

[CanvasTransform](annotation_annotation_layer_state._internal_.CanvasTransform.md).[rotate](annotation_annotation_layer_state._internal_.CanvasTransform.md#rotate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3520

___

### save

▸ **save**(): `void`

#### Returns

`void`

#### Inherited from

[CanvasState](annotation_annotation_layer_state._internal_.CanvasState.md).[save](annotation_annotation_layer_state._internal_.CanvasState.md#save)

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

[CanvasTransform](annotation_annotation_layer_state._internal_.CanvasTransform.md).[scale](annotation_annotation_layer_state._internal_.CanvasTransform.md#scale)

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
| `segments` | [`Iterable`](annotation_annotation_layer_state._internal_.Iterable.md)<`number`\> |

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

[CanvasTransform](annotation_annotation_layer_state._internal_.CanvasTransform.md).[setTransform](annotation_annotation_layer_state._internal_.CanvasTransform.md#settransform)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3522

▸ **setTransform**(`transform?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform?` | [`DOMMatrix2DInit`](annotation_annotation_layer_state._internal_.DOMMatrix2DInit.md) |

#### Returns

`void`

#### Inherited from

[CanvasTransform](annotation_annotation_layer_state._internal_.CanvasTransform.md).[setTransform](annotation_annotation_layer_state._internal_.CanvasTransform.md#settransform)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3523

___

### stroke

▸ **stroke**(): `void`

#### Returns

`void`

#### Inherited from

[CanvasDrawPath](annotation_annotation_layer_state._internal_.CanvasDrawPath.md).[stroke](annotation_annotation_layer_state._internal_.CanvasDrawPath.md#stroke)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3397

▸ **stroke**(`path`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`Path2D`](../modules/annotation_annotation_layer_state._internal_.md#path2d) |

#### Returns

`void`

#### Inherited from

[CanvasDrawPath](annotation_annotation_layer_state._internal_.CanvasDrawPath.md).[stroke](annotation_annotation_layer_state._internal_.CanvasDrawPath.md#stroke)

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

[CanvasRect](annotation_annotation_layer_state._internal_.CanvasRect.md).[strokeRect](annotation_annotation_layer_state._internal_.CanvasRect.md#strokerect)

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

[CanvasText](annotation_annotation_layer_state._internal_.CanvasText.md).[strokeText](annotation_annotation_layer_state._internal_.CanvasText.md#stroketext)

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

[CanvasTransform](annotation_annotation_layer_state._internal_.CanvasTransform.md).[transform](annotation_annotation_layer_state._internal_.CanvasTransform.md#transform)

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

[CanvasTransform](annotation_annotation_layer_state._internal_.CanvasTransform.md).[translate](annotation_annotation_layer_state._internal_.CanvasTransform.md#translate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3525
