[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / ImageBitmapRenderingContext

# Interface: ImageBitmapRenderingContext

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).ImageBitmapRenderingContext

## Table of contents

### Properties

- [canvas](annotation_annotation_layer_state._internal_.ImageBitmapRenderingContext.md#canvas)

### Methods

- [transferFromImageBitmap](annotation_annotation_layer_state._internal_.ImageBitmapRenderingContext.md#transferfromimagebitmap)

## Properties

### canvas

• `Readonly` **canvas**: [`HTMLCanvasElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlcanvaselement)

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
| `bitmap` | ``null`` \| [`ImageBitmap`](../modules/annotation_annotation_layer_state._internal_.md#imagebitmap) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8877
