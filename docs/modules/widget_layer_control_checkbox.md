[neuroglancer](../README.md) / [Modules](../modules.md) / widget/layer\_control\_checkbox

# Module: widget/layer\_control\_checkbox

## Table of contents

### Modules

- [&lt;internal\&gt;](widget_layer_control_checkbox._internal_.md)

### Functions

- [checkboxLayerControl](widget_layer_control_checkbox.md#checkboxlayercontrol)

## Functions

### checkboxLayerControl

▸ **checkboxLayerControl**<`LayerType`\>(`getter`): [`LayerControlFactory`](../interfaces/widget_layer_control.LayerControlFactory.md)<`LayerType`, [`TrackableBooleanCheckbox`](../classes/widget_layer_control_checkbox._internal_.TrackableBooleanCheckbox.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `LayerType` | extends [`UserLayer`](../classes/annotation_annotation_layer_state._internal_.UserLayer.md)<`LayerType`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `getter` | (`layer`: `LayerType`) => [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`boolean`\> |

#### Returns

[`LayerControlFactory`](../interfaces/widget_layer_control.LayerControlFactory.md)<`LayerType`, [`TrackableBooleanCheckbox`](../classes/widget_layer_control_checkbox._internal_.TrackableBooleanCheckbox.md)\>

#### Defined in

[src/neuroglancer/widget/layer_control_checkbox.ts:22](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/layer_control_checkbox.ts#L22)
