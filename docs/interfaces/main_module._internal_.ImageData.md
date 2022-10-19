[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / ImageData

# Interface: ImageData

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).ImageData

The underlying pixel data of an area of a <canvas> element. It is created using the ImageData() constructor or creator methods on the CanvasRenderingContext2D object associated with a canvas: createImageData() and getImageData(). It can also be used to set a part of the canvas by using putImageData().

## Table of contents

### Properties

- [colorSpace](main_module._internal_.ImageData.md#colorspace)
- [data](main_module._internal_.ImageData.md#data)
- [height](main_module._internal_.ImageData.md#height)
- [width](main_module._internal_.ImageData.md#width)

## Properties

### colorSpace

• `Readonly` **colorSpace**: [`PredefinedColorSpace`](../modules/main_module._internal_.md#predefinedcolorspace)

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
