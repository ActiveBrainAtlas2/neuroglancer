[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/widget/layer\_control\_range

# Module: neuroglancer/widget/layer\_control\_range

## Table of contents

### Functions

- [rangeLayerControl](neuroglancer_widget_layer_control_range.md#rangelayercontrol)

## Functions

### rangeLayerControl

▸ **rangeLayerControl**<`LayerType`\>(`getter`): [`LayerControlFactory`](../interfaces/neuroglancer_widget_layer_control.LayerControlFactory.md)<`LayerType`, [`RangeWidget`](../classes/neuroglancer_widget_range.RangeWidget.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `LayerType` | extends [`UserLayer`](../classes/neuroglancer_layer.UserLayer.md)<`LayerType`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `getter` | (`layer`: `LayerType`) => { `options?`: [`RangeWidgetOptions`](../interfaces/neuroglancer_widget_range.RangeWidgetOptions.md) ; `value`: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`number`\>  } |

#### Returns

[`LayerControlFactory`](../interfaces/neuroglancer_widget_layer_control.LayerControlFactory.md)<`LayerType`, [`RangeWidget`](../classes/neuroglancer_widget_range.RangeWidget.md)\>

#### Defined in

[src/neuroglancer/widget/layer_control_range.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/widget/layer_control_range.ts#L27)
