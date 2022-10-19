[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/widget/layer\_control\_channel\_invlerp

# Module: neuroglancer/widget/layer\_control\_channel\_invlerp

## Table of contents

### Functions

- [channelInvlerpLayerControl](neuroglancer_widget_layer_control_channel_invlerp.md#channelinvlerplayercontrol)

## Functions

### channelInvlerpLayerControl

▸ **channelInvlerpLayerControl**<`LayerType`\>(`getter`): [`LayerControlFactory`](../interfaces/neuroglancer_widget_layer_control.LayerControlFactory.md)<`LayerType`, [`InvlerpWidget`](../classes/neuroglancer_widget_invlerp.InvlerpWidget.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `LayerType` | extends [`UserLayer`](../classes/neuroglancer_layer.UserLayer.md)<`LayerType`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `getter` | (`layer`: `LayerType`) => { `channelCoordinateSpaceCombiner`: `undefined` \| [`CoordinateSpaceCombiner`](../classes/neuroglancer_coordinate_transform.CoordinateSpaceCombiner.md) ; `dataType`: [`DataType`](../enums/neuroglancer_util_data_type.DataType.md) ; `defaultChannel`: `number`[] ; `histogramIndex`: `number` ; `histogramSpecifications`: [`HistogramSpecifications`](../classes/neuroglancer_webgl_empirical_cdf.HistogramSpecifications.md) ; `legendShaderOptions`: `undefined` \| [`LegendShaderOptions`](../interfaces/neuroglancer_widget_shader_controls.LegendShaderOptions.md) ; `watchableValue`: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`InvlerpParameters`](../interfaces/neuroglancer_webgl_shader_ui_controls.InvlerpParameters.md)\>  } |

#### Returns

[`LayerControlFactory`](../interfaces/neuroglancer_widget_layer_control.LayerControlFactory.md)<`LayerType`, [`InvlerpWidget`](../classes/neuroglancer_widget_invlerp.InvlerpWidget.md)\>

#### Defined in

[src/neuroglancer/widget/layer_control_channel_invlerp.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/layer_control_channel_invlerp.ts#L40)
