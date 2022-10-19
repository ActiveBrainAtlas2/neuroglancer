[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / Path2D

# Interface: Path2D

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).Path2D

This Canvas 2D API interface is used to declare a path that can then be used on a CanvasRenderingContext2D object. The path methods of the CanvasRenderingContext2D interface are also present on this interface, which gives you the convenience of being able to retain and replay your path whenever desired.

## Hierarchy

- [`CanvasPath`](annotation_annotation_layer_state._internal_.CanvasPath.md)

  ↳ **`Path2D`**

## Table of contents

### Methods

- [addPath](annotation_annotation_layer_state._internal_.Path2D.md#addpath)
- [arc](annotation_annotation_layer_state._internal_.Path2D.md#arc)
- [arcTo](annotation_annotation_layer_state._internal_.Path2D.md#arcto)
- [bezierCurveTo](annotation_annotation_layer_state._internal_.Path2D.md#beziercurveto)
- [closePath](annotation_annotation_layer_state._internal_.Path2D.md#closepath)
- [ellipse](annotation_annotation_layer_state._internal_.Path2D.md#ellipse)
- [lineTo](annotation_annotation_layer_state._internal_.Path2D.md#lineto)
- [moveTo](annotation_annotation_layer_state._internal_.Path2D.md#moveto)
- [quadraticCurveTo](annotation_annotation_layer_state._internal_.Path2D.md#quadraticcurveto)
- [rect](annotation_annotation_layer_state._internal_.Path2D.md#rect)

## Methods

### addPath

▸ **addPath**(`path`, `transform?`): `void`

Adds to the path the path given by the argument.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`Path2D`](../modules/annotation_annotation_layer_state._internal_.md#path2d) |
| `transform?` | [`DOMMatrix2DInit`](annotation_annotation_layer_state._internal_.DOMMatrix2DInit.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10445

___

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

### closePath

▸ **closePath**(): `void`

#### Returns

`void`

#### Inherited from

[CanvasPath](annotation_annotation_layer_state._internal_.CanvasPath.md).[closePath](annotation_annotation_layer_state._internal_.CanvasPath.md#closepath)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3446

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
