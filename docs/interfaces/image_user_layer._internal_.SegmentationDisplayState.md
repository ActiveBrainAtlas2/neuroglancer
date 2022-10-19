[neuroglancer](../README.md) / [Modules](../modules.md) / [image\_user\_layer](../modules/image_user_layer.md) / [<internal\>](../modules/image_user_layer._internal_.md) / SegmentationDisplayState

# Interface: SegmentationDisplayState

[image_user_layer](../modules/image_user_layer.md).[<internal>](../modules/image_user_layer._internal_.md).SegmentationDisplayState

## Implemented by

- [`SegmentationUserLayerDisplayState`](../classes/segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md)

## Table of contents

### Properties

- [baseSegmentColoring](image_user_layer._internal_.SegmentationDisplayState.md#basesegmentcoloring)
- [hideSegmentZero](image_user_layer._internal_.SegmentationDisplayState.md#hidesegmentzero)
- [saturation](image_user_layer._internal_.SegmentationDisplayState.md#saturation)
- [segmentColorHash](image_user_layer._internal_.SegmentationDisplayState.md#segmentcolorhash)
- [segmentDefaultColor](image_user_layer._internal_.SegmentationDisplayState.md#segmentdefaultcolor)
- [segmentSelectionState](image_user_layer._internal_.SegmentationDisplayState.md#segmentselectionstate)
- [segmentStatedColors](image_user_layer._internal_.SegmentationDisplayState.md#segmentstatedcolors)
- [segmentationColorGroupState](image_user_layer._internal_.SegmentationDisplayState.md#segmentationcolorgroupstate)
- [segmentationGroupState](image_user_layer._internal_.SegmentationDisplayState.md#segmentationgroupstate)

### Methods

- [filterBySegmentLabel](image_user_layer._internal_.SegmentationDisplayState.md#filterbysegmentlabel)
- [moveToSegment](image_user_layer._internal_.SegmentationDisplayState.md#movetosegment)
- [selectSegment](image_user_layer._internal_.SegmentationDisplayState.md#selectsegment)

## Properties

### baseSegmentColoring

• **baseSegmentColoring**: [`WatchableValueInterface`](trackable_value.WatchableValueInterface.md)<`boolean`\>

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:152](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_display_state/frontend.ts#L152)

___

### hideSegmentZero

• **hideSegmentZero**: [`WatchableValueInterface`](trackable_value.WatchableValueInterface.md)<`boolean`\>

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:161](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_display_state/frontend.ts#L161)

___

### saturation

• **saturation**: [`TrackableAlphaValue`](../modules/trackable_alpha.md#trackablealphavalue)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:151](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_display_state/frontend.ts#L151)

___

### segmentColorHash

• **segmentColorHash**: [`WatchableValueInterface`](trackable_value.WatchableValueInterface.md)<`number`\>

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:162](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_display_state/frontend.ts#L162)

___

### segmentDefaultColor

• **segmentDefaultColor**: [`WatchableValueInterface`](trackable_value.WatchableValueInterface.md)<`undefined` \| [`vec3`](../classes/axes_lines._internal_.vec3.md)\>

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:164](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_display_state/frontend.ts#L164)

___

### segmentSelectionState

• **segmentSelectionState**: [`SegmentSelectionState`](../classes/image_user_layer._internal_.SegmentSelectionState.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:150](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_display_state/frontend.ts#L150)

___

### segmentStatedColors

• **segmentStatedColors**: [`WatchableValueInterface`](trackable_value.WatchableValueInterface.md)<[`Uint64Map`](../classes/uint64_map.Uint64Map.md)\>

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:163](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_display_state/frontend.ts#L163)

___

### segmentationColorGroupState

• **segmentationColorGroupState**: [`WatchableValueInterface`](trackable_value.WatchableValueInterface.md)<[`SegmentationColorGroupState`](image_user_layer._internal_.SegmentationColorGroupState.md)\>

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:154](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_display_state/frontend.ts#L154)

___

### segmentationGroupState

• **segmentationGroupState**: [`WatchableValueInterface`](trackable_value.WatchableValueInterface.md)<[`SegmentationGroupState`](image_user_layer._internal_.SegmentationGroupState.md)\>

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:153](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_display_state/frontend.ts#L153)

## Methods

### filterBySegmentLabel

▸ **filterBySegmentLabel**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`Uint64`](../classes/data_panel_layout._internal_.Uint64.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:157](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_display_state/frontend.ts#L157)

___

### moveToSegment

▸ **moveToSegment**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`Uint64`](../classes/data_panel_layout._internal_.Uint64.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:158](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_display_state/frontend.ts#L158)

___

### selectSegment

▸ **selectSegment**(`id`, `pin`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`Uint64`](../classes/data_panel_layout._internal_.Uint64.md) |
| `pin` | `boolean` \| ``"toggle"`` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:156](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_display_state/frontend.ts#L156)
