[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / ImageBitmapRenderingContext

# Interface: ImageBitmapRenderingContext

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).ImageBitmapRenderingContext

## Table of contents

### Properties

- [canvas](axes_lines._internal_.ImageBitmapRenderingContext.md#canvas)

### Methods

- [transferFromImageBitmap](axes_lines._internal_.ImageBitmapRenderingContext.md#transferfromimagebitmap)

## Properties

### canvas

• `Readonly` **canvas**: [`HTMLCanvasElement`](../modules/axes_lines._internal_.md#htmlcanvaselement)

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
| `bitmap` | ``null`` \| [`ImageBitmap`](../modules/axes_lines._internal_.md#imagebitmap) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8877
