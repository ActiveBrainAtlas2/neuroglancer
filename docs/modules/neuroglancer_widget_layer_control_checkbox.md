[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/widget/layer\_control\_checkbox

# Module: neuroglancer/widget/layer\_control\_checkbox

## Table of contents

### Functions

- [checkboxLayerControl](neuroglancer_widget_layer_control_checkbox.md#checkboxlayercontrol)

## Functions

### checkboxLayerControl

▸ **checkboxLayerControl**<`LayerType`\>(`getter`): [`LayerControlFactory`](../interfaces/neuroglancer_widget_layer_control.LayerControlFactory.md)<`LayerType`, [`TrackableBooleanCheckbox`](../classes/neuroglancer_trackable_boolean.TrackableBooleanCheckbox.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `LayerType` | extends [`UserLayer`](../classes/neuroglancer_layer.UserLayer.md)<`LayerType`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `getter` | (`layer`: `LayerType`) => [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`boolean`\> |

#### Returns

[`LayerControlFactory`](../interfaces/neuroglancer_widget_layer_control.LayerControlFactory.md)<`LayerType`, [`TrackableBooleanCheckbox`](../classes/neuroglancer_trackable_boolean.TrackableBooleanCheckbox.md)\>

#### Defined in

[src/neuroglancer/widget/layer_control_checkbox.ts:22](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/layer_control_checkbox.ts#L22)
