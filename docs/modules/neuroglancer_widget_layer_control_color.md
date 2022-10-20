[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/widget/layer\_control\_color

# Module: neuroglancer/widget/layer\_control\_color

## Table of contents

### Functions

- [colorLayerControl](neuroglancer_widget_layer_control_color.md#colorlayercontrol)

## Functions

### colorLayerControl

▸ **colorLayerControl**<`LayerType`, `Color`\>(`getter`): [`LayerControlFactory`](../interfaces/neuroglancer_widget_layer_control.LayerControlFactory.md)<`LayerType`, [`ColorWidget`](../classes/neuroglancer_widget_color.ColorWidget.md)<`Color`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `LayerType` | extends [`UserLayer`](../classes/neuroglancer_layer.UserLayer.md)<`LayerType`\> |
| `Color` | extends `undefined` \| [`vec3`](../classes/neuroglancer_util_geom.vec3.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `getter` | (`layer`: `LayerType`) => [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`Color`\> |

#### Returns

[`LayerControlFactory`](../interfaces/neuroglancer_widget_layer_control.LayerControlFactory.md)<`LayerType`, [`ColorWidget`](../classes/neuroglancer_widget_color.ColorWidget.md)<`Color`\>\>

#### Defined in

[src/neuroglancer/widget/layer_control_color.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/layer_control_color.ts#L28)
