[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / CanvasFillStrokeStyles

# Interface: CanvasFillStrokeStyles

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).CanvasFillStrokeStyles

## Hierarchy

- **`CanvasFillStrokeStyles`**

  ↳ [`CanvasRenderingContext2D`](main_module._internal_.CanvasRenderingContext2D.md)

## Table of contents

### Properties

- [fillStyle](main_module._internal_.CanvasFillStrokeStyles.md#fillstyle)
- [strokeStyle](main_module._internal_.CanvasFillStrokeStyles.md#strokestyle)

### Methods

- [createConicGradient](main_module._internal_.CanvasFillStrokeStyles.md#createconicgradient)
- [createLinearGradient](main_module._internal_.CanvasFillStrokeStyles.md#createlineargradient)
- [createPattern](main_module._internal_.CanvasFillStrokeStyles.md#createpattern)
- [createRadialGradient](main_module._internal_.CanvasFillStrokeStyles.md#createradialgradient)

## Properties

### fillStyle

• **fillStyle**: `string` \| [`CanvasGradient`](../modules/main_module._internal_.md#canvasgradient) \| [`CanvasPattern`](../modules/main_module._internal_.md#canvaspattern)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3402

___

### strokeStyle

• **strokeStyle**: `string` \| [`CanvasGradient`](../modules/main_module._internal_.md#canvasgradient) \| [`CanvasPattern`](../modules/main_module._internal_.md#canvaspattern)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3403

## Methods

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

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3404

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

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3407
