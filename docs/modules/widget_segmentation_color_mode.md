[neuroglancer](../README.md) / [Modules](../modules.md) / widget/segmentation\_color\_mode

# Module: widget/segmentation\_color\_mode

## Table of contents

### Functions

- [colorSeedLayerControl](widget_segmentation_color_mode.md#colorseedlayercontrol)
- [fixedColorLayerControl](widget_segmentation_color_mode.md#fixedcolorlayercontrol)

## Functions

### colorSeedLayerControl

▸ **colorSeedLayerControl**(): [`LayerControlFactory`](../interfaces/widget_layer_control.LayerControlFactory.md)<[`SegmentationUserLayer`](../classes/segmentation_display_state_frontend._internal_.SegmentationUserLayer.md)\>

#### Returns

[`LayerControlFactory`](../interfaces/widget_layer_control.LayerControlFactory.md)<[`SegmentationUserLayer`](../classes/segmentation_display_state_frontend._internal_.SegmentationUserLayer.md)\>

#### Defined in

[src/neuroglancer/widget/segmentation_color_mode.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/segmentation_color_mode.ts#L37)

___

### fixedColorLayerControl

▸ **fixedColorLayerControl**(): [`LayerControlFactory`](../interfaces/widget_layer_control.LayerControlFactory.md)<[`SegmentationUserLayer`](../classes/segmentation_display_state_frontend._internal_.SegmentationUserLayer.md), [`ColorWidget`](../classes/widget_color.ColorWidget.md)<[`vec3`](../classes/util_geom.vec3.md) \| `undefined`\>\>

#### Returns

[`LayerControlFactory`](../interfaces/widget_layer_control.LayerControlFactory.md)<[`SegmentationUserLayer`](../classes/segmentation_display_state_frontend._internal_.SegmentationUserLayer.md), [`ColorWidget`](../classes/widget_color.ColorWidget.md)<[`vec3`](../classes/util_geom.vec3.md) \| `undefined`\>\>

#### Defined in

[src/neuroglancer/widget/segmentation_color_mode.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/widget/segmentation_color_mode.ts#L75)
