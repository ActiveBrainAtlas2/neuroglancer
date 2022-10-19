[neuroglancer](../README.md) / [Modules](../modules.md) / widget/layer\_control\_color

# Module: widget/layer\_control\_color

## Table of contents

### Functions

- [colorLayerControl](widget_layer_control_color.md#colorlayercontrol)

## Functions

### colorLayerControl

▸ **colorLayerControl**<`LayerType`, `Color`\>(`getter`): [`LayerControlFactory`](../interfaces/widget_layer_control.LayerControlFactory.md)<`LayerType`, [`ColorWidget`](../classes/widget_color.ColorWidget.md)<`Color`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `LayerType` | extends [`UserLayer`](../classes/annotation_annotation_layer_state._internal_.UserLayer.md)<`LayerType`\> |
| `Color` | extends `undefined` \| [`vec3`](../classes/util_geom.vec3.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `getter` | (`layer`: `LayerType`) => [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`Color`\> |

#### Returns

[`LayerControlFactory`](../interfaces/widget_layer_control.LayerControlFactory.md)<`LayerType`, [`ColorWidget`](../classes/widget_color.ColorWidget.md)<`Color`\>\>

#### Defined in

[src/neuroglancer/widget/layer_control_color.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/layer_control_color.ts#L28)
