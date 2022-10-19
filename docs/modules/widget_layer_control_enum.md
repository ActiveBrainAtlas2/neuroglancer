[neuroglancer](../README.md) / [Modules](../modules.md) / widget/layer\_control\_enum

# Module: widget/layer\_control\_enum

## Table of contents

### Functions

- [enumLayerControl](widget_layer_control_enum.md#enumlayercontrol)

## Functions

### enumLayerControl

▸ **enumLayerControl**<`LayerType`, `T`\>(`getter`): [`LayerControlFactory`](../interfaces/widget_layer_control.LayerControlFactory.md)<`LayerType`, [`EnumSelectWidget`](../classes/widget_enum_widget.EnumSelectWidget.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `LayerType` | extends [`UserLayer`](../classes/annotation_annotation_layer_state._internal_.UserLayer.md)<`LayerType`\> |
| `T` | extends `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `getter` | (`layer`: `LayerType`) => [`TrackableEnum`](../classes/util_trackable_enum.TrackableEnum.md)<`T`\> |

#### Returns

[`LayerControlFactory`](../interfaces/widget_layer_control.LayerControlFactory.md)<`LayerType`, [`EnumSelectWidget`](../classes/widget_enum_widget.EnumSelectWidget.md)<`T`\>\>

#### Defined in

[src/neuroglancer/widget/layer_control_enum.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/layer_control_enum.ts#L27)
