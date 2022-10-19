[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / CanvasDrawPath

# Interface: CanvasDrawPath

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).CanvasDrawPath

## Hierarchy

- **`CanvasDrawPath`**

  ↳ [`CanvasRenderingContext2D`](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md)

## Table of contents

### Methods

- [beginPath](annotation_annotation_layer_state._internal_.CanvasDrawPath.md#beginpath)
- [clip](annotation_annotation_layer_state._internal_.CanvasDrawPath.md#clip)
- [fill](annotation_annotation_layer_state._internal_.CanvasDrawPath.md#fill)
- [isPointInPath](annotation_annotation_layer_state._internal_.CanvasDrawPath.md#ispointinpath)
- [isPointInStroke](annotation_annotation_layer_state._internal_.CanvasDrawPath.md#ispointinstroke)
- [stroke](annotation_annotation_layer_state._internal_.CanvasDrawPath.md#stroke)

## Methods

### beginPath

▸ **beginPath**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3388

___

### clip

▸ **clip**(`fillRule?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fillRule?` | [`CanvasFillRule`](../modules/annotation_annotation_layer_state._internal_.md#canvasfillrule) |

#### Returns

`void`

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

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3390

___

### fill

▸ **fill**(`fillRule?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fillRule?` | [`CanvasFillRule`](../modules/annotation_annotation_layer_state._internal_.md#canvasfillrule) |

#### Returns

`void`

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

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3392

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

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3396

___

### stroke

▸ **stroke**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3397

▸ **stroke**(`path`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`Path2D`](../modules/annotation_annotation_layer_state._internal_.md#path2d) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3398
