[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / ImageData

# Interface: ImageData

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).ImageData

The underlying pixel data of an area of a <canvas> element. It is created using the ImageData() constructor or creator methods on the CanvasRenderingContext2D object associated with a canvas: createImageData() and getImageData(). It can also be used to set a part of the canvas by using putImageData().

## Table of contents

### Properties

- [colorSpace](annotation_annotation_layer_state._internal_.ImageData.md#colorspace)
- [data](annotation_annotation_layer_state._internal_.ImageData.md#data)
- [height](annotation_annotation_layer_state._internal_.ImageData.md#height)
- [width](annotation_annotation_layer_state._internal_.ImageData.md#width)

## Properties

### colorSpace

• `Readonly` **colorSpace**: [`PredefinedColorSpace`](../modules/annotation_annotation_layer_state._internal_.md#predefinedcolorspace)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8887

___

### data

• `Readonly` **data**: `Uint8ClampedArray`

Returns the one-dimensional array containing the data in RGBA order, as integers in the range 0 to 255.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8889

___

### height

• `Readonly` **height**: `number`

Returns the actual dimensions of the data in the ImageData object, in pixels.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8891

___

### width

• `Readonly` **width**: `number`

Returns the actual dimensions of the data in the ImageData object, in pixels.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8893
