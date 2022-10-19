[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / CanvasTransform

# Interface: CanvasTransform

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).CanvasTransform

## Hierarchy

- **`CanvasTransform`**

  ↳ [`CanvasRenderingContext2D`](annotation_annotation_layer_state._internal_.CanvasRenderingContext2D.md)

## Table of contents

### Methods

- [getTransform](annotation_annotation_layer_state._internal_.CanvasTransform.md#gettransform)
- [resetTransform](annotation_annotation_layer_state._internal_.CanvasTransform.md#resettransform)
- [rotate](annotation_annotation_layer_state._internal_.CanvasTransform.md#rotate)
- [scale](annotation_annotation_layer_state._internal_.CanvasTransform.md#scale)
- [setTransform](annotation_annotation_layer_state._internal_.CanvasTransform.md#settransform)
- [transform](annotation_annotation_layer_state._internal_.CanvasTransform.md#transform)
- [translate](annotation_annotation_layer_state._internal_.CanvasTransform.md#translate)

## Methods

### getTransform

▸ **getTransform**(): [`DOMMatrix`](../modules/annotation_annotation_layer_state._internal_.md#dommatrix)

#### Returns

[`DOMMatrix`](../modules/annotation_annotation_layer_state._internal_.md#dommatrix)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3518

___

### resetTransform

▸ **resetTransform**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3519

___

### rotate

▸ **rotate**(`angle`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `angle` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3520

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

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3521

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

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3522

▸ **setTransform**(`transform?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform?` | [`DOMMatrix2DInit`](annotation_annotation_layer_state._internal_.DOMMatrix2DInit.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3523

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

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3525
