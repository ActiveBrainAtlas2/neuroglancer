[neuroglancer](../README.md) / [Modules](../modules.md) / widget/layer\_control\_channel\_invlerp

# Module: widget/layer\_control\_channel\_invlerp

## Table of contents

### Functions

- [channelInvlerpLayerControl](widget_layer_control_channel_invlerp.md#channelinvlerplayercontrol)

## Functions

### channelInvlerpLayerControl

▸ **channelInvlerpLayerControl**<`LayerType`\>(`getter`): [`LayerControlFactory`](../interfaces/widget_layer_control.LayerControlFactory.md)<`LayerType`, [`InvlerpWidget`](../classes/widget_invlerp.InvlerpWidget.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `LayerType` | extends [`UserLayer`](../classes/annotation_annotation_layer_state._internal_.UserLayer.md)<`LayerType`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `getter` | (`layer`: `LayerType`) => { `channelCoordinateSpaceCombiner`: `undefined` \| [`CoordinateSpaceCombiner`](../classes/annotation_annotation_layer_state._internal_.CoordinateSpaceCombiner.md) ; `dataType`: [`DataType`](../enums/util_data_type.DataType.md) ; `defaultChannel`: `number`[] ; `histogramIndex`: `number` ; `histogramSpecifications`: [`HistogramSpecifications`](../classes/webgl_empirical_cdf.HistogramSpecifications.md) ; `legendShaderOptions`: `undefined` \| [`LegendShaderOptions`](../interfaces/widget_shader_controls.LegendShaderOptions.md) ; `watchableValue`: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`InvlerpParameters`](../interfaces/webgl_shader_ui_controls.InvlerpParameters.md)\>  } |

#### Returns

[`LayerControlFactory`](../interfaces/widget_layer_control.LayerControlFactory.md)<`LayerType`, [`InvlerpWidget`](../classes/widget_invlerp.InvlerpWidget.md)\>

#### Defined in

[src/neuroglancer/widget/layer_control_channel_invlerp.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/layer_control_channel_invlerp.ts#L40)
