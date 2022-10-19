[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / TransformedBoundingBox

# Interface: TransformedBoundingBox

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).TransformedBoundingBox

## Table of contents

### Properties

- [box](annotation_annotation_layer_state._internal_.TransformedBoundingBox.md#box)
- [transform](annotation_annotation_layer_state._internal_.TransformedBoundingBox.md#transform)

## Properties

### box

• **box**: [`BoundingBox`](annotation_annotation_layer_state._internal_.BoundingBox.md)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:307](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/coordinate_transform.ts#L307)

___

### transform

• **transform**: `Float64Array`

Transform from "box" coordinate space to target coordinate space.

#### Defined in

[src/neuroglancer/coordinate_transform.ts:312](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/coordinate_transform.ts#L312)
