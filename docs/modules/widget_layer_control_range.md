[neuroglancer](../README.md) / [Modules](../modules.md) / widget/layer\_control\_range

# Module: widget/layer\_control\_range

## Table of contents

### Functions

- [rangeLayerControl](widget_layer_control_range.md#rangelayercontrol)

## Functions

### rangeLayerControl

▸ **rangeLayerControl**<`LayerType`\>(`getter`): [`LayerControlFactory`](../interfaces/widget_layer_control.LayerControlFactory.md)<`LayerType`, [`RangeWidget`](../classes/widget_range.RangeWidget.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `LayerType` | extends [`UserLayer`](../classes/annotation_annotation_layer_state._internal_.UserLayer.md)<`LayerType`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `getter` | (`layer`: `LayerType`) => { `options?`: [`RangeWidgetOptions`](../interfaces/widget_range.RangeWidgetOptions.md) ; `value`: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`number`\>  } |

#### Returns

[`LayerControlFactory`](../interfaces/widget_layer_control.LayerControlFactory.md)<`LayerType`, [`RangeWidget`](../classes/widget_range.RangeWidget.md)\>

#### Defined in

[src/neuroglancer/widget/layer_control_range.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/layer_control_range.ts#L27)
