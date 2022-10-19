[neuroglancer](../README.md) / [Modules](../modules.md) / widget/render\_scale\_widget

# Module: widget/render\_scale\_widget

## Table of contents

### Classes

- [RenderScaleWidget](../classes/widget_render_scale_widget.RenderScaleWidget.md)

### Interfaces

- [RenderScaleWidgetOptions](../interfaces/widget_render_scale_widget.RenderScaleWidgetOptions.md)

### Functions

- [renderScaleLayerControl](widget_render_scale_widget.md#renderscalelayercontrol)

## Functions

### renderScaleLayerControl

▸ **renderScaleLayerControl**<`LayerType`\>(`getter`): [`LayerControlFactory`](../interfaces/widget_layer_control.LayerControlFactory.md)<`LayerType`, [`RenderScaleWidget`](../classes/widget_render_scale_widget.RenderScaleWidget.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `LayerType` | extends [`UserLayer`](../classes/annotation_annotation_layer_state._internal_.UserLayer.md)<`LayerType`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `getter` | (`layer`: `LayerType`) => [`RenderScaleWidgetOptions`](../interfaces/widget_render_scale_widget.RenderScaleWidgetOptions.md) |

#### Returns

[`LayerControlFactory`](../interfaces/widget_layer_control.LayerControlFactory.md)<`LayerType`, [`RenderScaleWidget`](../classes/widget_render_scale_widget.RenderScaleWidget.md)\>

#### Defined in

[src/neuroglancer/widget/render_scale_widget.ts:305](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/render_scale_widget.ts#L305)
