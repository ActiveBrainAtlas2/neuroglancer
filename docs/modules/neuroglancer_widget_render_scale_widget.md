[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/widget/render\_scale\_widget

# Module: neuroglancer/widget/render\_scale\_widget

## Table of contents

### Classes

- [RenderScaleWidget](../classes/neuroglancer_widget_render_scale_widget.RenderScaleWidget.md)

### Interfaces

- [RenderScaleWidgetOptions](../interfaces/neuroglancer_widget_render_scale_widget.RenderScaleWidgetOptions.md)

### Functions

- [renderScaleLayerControl](neuroglancer_widget_render_scale_widget.md#renderscalelayercontrol)

## Functions

### renderScaleLayerControl

▸ **renderScaleLayerControl**<`LayerType`\>(`getter`): [`LayerControlFactory`](../interfaces/neuroglancer_widget_layer_control.LayerControlFactory.md)<`LayerType`, [`RenderScaleWidget`](../classes/neuroglancer_widget_render_scale_widget.RenderScaleWidget.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `LayerType` | extends [`UserLayer`](../classes/neuroglancer_layer.UserLayer.md)<`LayerType`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `getter` | (`layer`: `LayerType`) => [`RenderScaleWidgetOptions`](../interfaces/neuroglancer_widget_render_scale_widget.RenderScaleWidgetOptions.md) |

#### Returns

[`LayerControlFactory`](../interfaces/neuroglancer_widget_layer_control.LayerControlFactory.md)<`LayerType`, [`RenderScaleWidget`](../classes/neuroglancer_widget_render_scale_widget.RenderScaleWidget.md)\>

#### Defined in

[src/neuroglancer/widget/render_scale_widget.ts:305](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/render_scale_widget.ts#L305)
