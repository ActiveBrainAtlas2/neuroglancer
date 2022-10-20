[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/widget/layer\_control\_enum

# Module: neuroglancer/widget/layer\_control\_enum

## Table of contents

### Functions

- [enumLayerControl](neuroglancer_widget_layer_control_enum.md#enumlayercontrol)

## Functions

### enumLayerControl

▸ **enumLayerControl**<`LayerType`, `T`\>(`getter`): [`LayerControlFactory`](../interfaces/neuroglancer_widget_layer_control.LayerControlFactory.md)<`LayerType`, [`EnumSelectWidget`](../classes/neuroglancer_widget_enum_widget.EnumSelectWidget.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `LayerType` | extends [`UserLayer`](../classes/neuroglancer_layer.UserLayer.md)<`LayerType`\> |
| `T` | extends `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `getter` | (`layer`: `LayerType`) => [`TrackableEnum`](../classes/neuroglancer_util_trackable_enum.TrackableEnum.md)<`T`\> |

#### Returns

[`LayerControlFactory`](../interfaces/neuroglancer_widget_layer_control.LayerControlFactory.md)<`LayerType`, [`EnumSelectWidget`](../classes/neuroglancer_widget_enum_widget.EnumSelectWidget.md)<`T`\>\>

#### Defined in

[src/neuroglancer/widget/layer_control_enum.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/layer_control_enum.ts#L27)
