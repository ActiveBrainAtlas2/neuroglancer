[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / CanvasPattern

# Interface: CanvasPattern

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).CanvasPattern

An opaque object describing a pattern, based on an image, a canvas, or a video, created by the CanvasRenderingContext2D.createPattern() method.

## Table of contents

### Methods

- [setTransform](annotation_annotation_layer_state._internal_.CanvasPattern.md#settransform)

## Methods

### setTransform

▸ **setTransform**(`transform?`): `void`

Sets the transformation matrix that will be used when rendering the pattern during a fill or stroke painting operation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform?` | [`DOMMatrix2DInit`](annotation_annotation_layer_state._internal_.DOMMatrix2DInit.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3467
