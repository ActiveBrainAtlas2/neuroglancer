[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / CanvasGradient

# Interface: CanvasGradient

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).CanvasGradient

An opaque object describing a gradient. It is returned by the methods CanvasRenderingContext2D.createLinearGradient() or CanvasRenderingContext2D.createRadialGradient().

## Table of contents

### Methods

- [addColorStop](main_module._internal_.CanvasGradient.md#addcolorstop)

## Methods

### addColorStop

▸ **addColorStop**(`offset`, `color`): `void`

Adds a color stop with the given color to the gradient at the given offset. 0.0 is the offset at one end of the gradient, 1.0 is the offset at the other end.

Throws an "IndexSizeError" DOMException if the offset is out of range. Throws a "SyntaxError" DOMException if the color cannot be parsed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `number` |
| `color` | `string` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3421
