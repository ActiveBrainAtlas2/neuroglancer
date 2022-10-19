[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / CanvasDrawPath

# Interface: CanvasDrawPath

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).CanvasDrawPath

## Hierarchy

- **`CanvasDrawPath`**

  ↳ [`CanvasRenderingContext2D`](main_module._internal_.CanvasRenderingContext2D.md)

## Table of contents

### Methods

- [beginPath](main_module._internal_.CanvasDrawPath.md#beginpath)
- [clip](main_module._internal_.CanvasDrawPath.md#clip)
- [fill](main_module._internal_.CanvasDrawPath.md#fill)
- [isPointInPath](main_module._internal_.CanvasDrawPath.md#ispointinpath)
- [isPointInStroke](main_module._internal_.CanvasDrawPath.md#ispointinstroke)
- [stroke](main_module._internal_.CanvasDrawPath.md#stroke)

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
| `fillRule?` | [`CanvasFillRule`](../modules/main_module._internal_.md#canvasfillrule) |

#### Returns

`void`

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

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3390

___

### fill

▸ **fill**(`fillRule?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fillRule?` | [`CanvasFillRule`](../modules/main_module._internal_.md#canvasfillrule) |

#### Returns

`void`

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
| `fillRule?` | [`CanvasFillRule`](../modules/main_module._internal_.md#canvasfillrule) |

#### Returns

`boolean`

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
| `path` | [`Path2D`](../modules/main_module._internal_.md#path2d) |
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
| `path` | [`Path2D`](../modules/main_module._internal_.md#path2d) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3398
