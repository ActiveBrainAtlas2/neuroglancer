[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / ImageBitmapRenderingContext

# Interface: ImageBitmapRenderingContext

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).ImageBitmapRenderingContext

## Table of contents

### Properties

- [canvas](main_module._internal_.ImageBitmapRenderingContext.md#canvas)

### Methods

- [transferFromImageBitmap](main_module._internal_.ImageBitmapRenderingContext.md#transferfromimagebitmap)

## Properties

### canvas

• `Readonly` **canvas**: [`HTMLCanvasElement`](../modules/main_module._internal_.md#htmlcanvaselement)

Returns the canvas element that the context is bound to.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8875

## Methods

### transferFromImageBitmap

▸ **transferFromImageBitmap**(`bitmap`): `void`

Transfers the underlying bitmap data from imageBitmap to context, and the bitmap becomes the contents of the canvas element to which context is bound.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bitmap` | ``null`` \| [`ImageBitmap`](../modules/main_module._internal_.md#imagebitmap) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8877
