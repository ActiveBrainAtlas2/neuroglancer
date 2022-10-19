[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / PickState

# Interface: PickState

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).PickState

## Implemented by

- [`MouseSelectionState`](../classes/annotation_annotation_layer_state._internal_.MouseSelectionState.md)

## Table of contents

### Properties

- [pickedAnnotationBuffer](annotation_annotation_layer_state._internal_.PickState.md#pickedannotationbuffer)
- [pickedAnnotationBufferOffset](annotation_annotation_layer_state._internal_.PickState.md#pickedannotationbufferoffset)
- [pickedAnnotationId](annotation_annotation_layer_state._internal_.PickState.md#pickedannotationid)
- [pickedAnnotationLayer](annotation_annotation_layer_state._internal_.PickState.md#pickedannotationlayer)
- [pickedAnnotationType](annotation_annotation_layer_state._internal_.PickState.md#pickedannotationtype)
- [pickedOffset](annotation_annotation_layer_state._internal_.PickState.md#pickedoffset)
- [pickedRenderLayer](annotation_annotation_layer_state._internal_.PickState.md#pickedrenderlayer)
- [pickedValue](annotation_annotation_layer_state._internal_.PickState.md#pickedvalue)

## Properties

### pickedAnnotationBuffer

• **pickedAnnotationBuffer**: `undefined` \| `ArrayBuffer`

#### Defined in

[src/neuroglancer/layer.ts:902](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L902)

___

### pickedAnnotationBufferOffset

• **pickedAnnotationBufferOffset**: `undefined` \| `number`

#### Defined in

[src/neuroglancer/layer.ts:903](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L903)

___

### pickedAnnotationId

• **pickedAnnotationId**: `undefined` \| `string`

#### Defined in

[src/neuroglancer/layer.ts:901](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L901)

___

### pickedAnnotationLayer

• **pickedAnnotationLayer**: `undefined` \| [`AnnotationLayerState`](../classes/annotation_annotation_layer_state.AnnotationLayerState.md)

#### Defined in

[src/neuroglancer/layer.ts:900](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L900)

___

### pickedAnnotationType

• **pickedAnnotationType**: `undefined` \| [`AnnotationType`](../enums/annotation.AnnotationType.md)

#### Defined in

[src/neuroglancer/layer.ts:904](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L904)

___

### pickedOffset

• **pickedOffset**: `number`

#### Defined in

[src/neuroglancer/layer.ts:899](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L899)

___

### pickedRenderLayer

• **pickedRenderLayer**: ``null`` \| [`RenderLayer`](../classes/annotation_annotation_layer_state._internal_.RenderLayer.md)

#### Defined in

[src/neuroglancer/layer.ts:897](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L897)

___

### pickedValue

• **pickedValue**: [`Uint64`](../classes/util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/layer.ts:898](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/layer.ts#L898)
