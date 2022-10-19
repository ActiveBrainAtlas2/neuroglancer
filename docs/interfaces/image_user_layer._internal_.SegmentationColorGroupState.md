[neuroglancer](../README.md) / [Modules](../modules.md) / [image\_user\_layer](../modules/image_user_layer.md) / [<internal\>](../modules/image_user_layer._internal_.md) / SegmentationColorGroupState

# Interface: SegmentationColorGroupState

[image_user_layer](../modules/image_user_layer.md).[<internal>](../modules/image_user_layer._internal_.md).SegmentationColorGroupState

## Implemented by

- [`SegmentationUserLayerColorGroupState`](../classes/segmentation_user_layer.SegmentationUserLayerColorGroupState.md)

## Table of contents

### Properties

- [segmentColorHash](image_user_layer._internal_.SegmentationColorGroupState.md#segmentcolorhash)
- [segmentDefaultColor](image_user_layer._internal_.SegmentationColorGroupState.md#segmentdefaultcolor)
- [segmentStatedColors](image_user_layer._internal_.SegmentationColorGroupState.md#segmentstatedcolors)

## Properties

### segmentColorHash

• **segmentColorHash**: [`SegmentColorHash`](../classes/segment_color.SegmentColorHash.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:144](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_display_state/frontend.ts#L144)

___

### segmentDefaultColor

• **segmentDefaultColor**: [`WatchableValueInterface`](trackable_value.WatchableValueInterface.md)<`undefined` \| [`vec3`](../classes/axes_lines._internal_.vec3.md)\>

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:146](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_display_state/frontend.ts#L146)

___

### segmentStatedColors

• **segmentStatedColors**: [`Uint64Map`](../classes/uint64_map.Uint64Map.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:145](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_display_state/frontend.ts#L145)
