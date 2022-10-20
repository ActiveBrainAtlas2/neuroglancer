[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/segmentation\_display\_state/frontend](../modules/neuroglancer_segmentation_display_state_frontend.md) / SegmentationDisplayState

# Interface: SegmentationDisplayState

[neuroglancer/segmentation_display_state/frontend](../modules/neuroglancer_segmentation_display_state_frontend.md).SegmentationDisplayState

## Hierarchy

- **`SegmentationDisplayState`**

  ↳ [`SegmentationDisplayStateWithAlpha`](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md)

  ↳ [`SliceViewSegmentationDisplayState`](neuroglancer_sliceview_volume_segmentation_renderlayer.SliceViewSegmentationDisplayState.md)

## Implemented by

- [`SegmentationUserLayerDisplayState`](../classes/neuroglancer_segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md)

## Table of contents

### Properties

- [baseSegmentColoring](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md#basesegmentcoloring)
- [filterBySegmentLabel](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md#filterbysegmentlabel)
- [hideSegmentZero](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md#hidesegmentzero)
- [moveToSegment](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md#movetosegment)
- [saturation](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md#saturation)
- [segmentColorHash](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md#segmentcolorhash)
- [segmentDefaultColor](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md#segmentdefaultcolor)
- [segmentSelectionState](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md#segmentselectionstate)
- [segmentStatedColors](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md#segmentstatedcolors)
- [segmentationColorGroupState](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md#segmentationcolorgroupstate)
- [segmentationGroupState](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md#segmentationgroupstate)
- [selectSegment](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md#selectsegment)

## Properties

### baseSegmentColoring

• **baseSegmentColoring**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`boolean`\>

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:152](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L152)

___

### filterBySegmentLabel

• **filterBySegmentLabel**: (`id`: [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md)) => `void`

#### Type declaration

▸ (`id`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md) |

##### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:157](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L157)

___

### hideSegmentZero

• **hideSegmentZero**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`boolean`\>

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:161](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L161)

___

### moveToSegment

• **moveToSegment**: (`id`: [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md)) => `void`

#### Type declaration

▸ (`id`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md) |

##### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:158](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L158)

___

### saturation

• **saturation**: [`TrackableAlphaValue`](../modules/neuroglancer_trackable_alpha.md#trackablealphavalue)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:151](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L151)

___

### segmentColorHash

• **segmentColorHash**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`number`\>

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:162](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L162)

___

### segmentDefaultColor

• **segmentDefaultColor**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`undefined` \| [`vec3`](../classes/neuroglancer_util_geom.vec3.md)\>

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:164](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L164)

___

### segmentSelectionState

• **segmentSelectionState**: [`SegmentSelectionState`](../classes/neuroglancer_segmentation_display_state_frontend.SegmentSelectionState.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:150](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L150)

___

### segmentStatedColors

• **segmentStatedColors**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<[`Uint64Map`](../classes/neuroglancer_uint64_map.Uint64Map.md)\>

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:163](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L163)

___

### segmentationColorGroupState

• **segmentationColorGroupState**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<[`SegmentationColorGroupState`](neuroglancer_segmentation_display_state_frontend.SegmentationColorGroupState.md)\>

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:154](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L154)

___

### segmentationGroupState

• **segmentationGroupState**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<[`SegmentationGroupState`](neuroglancer_segmentation_display_state_frontend.SegmentationGroupState.md)\>

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:153](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L153)

___

### selectSegment

• **selectSegment**: (`id`: [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md), `pin`: `boolean` \| ``"toggle"``) => `void`

#### Type declaration

▸ (`id`, `pin`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md) |
| `pin` | `boolean` \| ``"toggle"`` |

##### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:156](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L156)
