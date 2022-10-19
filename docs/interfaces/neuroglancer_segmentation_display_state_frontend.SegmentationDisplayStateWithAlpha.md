[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/segmentation\_display\_state/frontend](../modules/neuroglancer_segmentation_display_state_frontend.md) / SegmentationDisplayStateWithAlpha

# Interface: SegmentationDisplayStateWithAlpha

[neuroglancer/segmentation_display_state/frontend](../modules/neuroglancer_segmentation_display_state_frontend.md).SegmentationDisplayStateWithAlpha

## Hierarchy

- [`SegmentationDisplayState`](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md)

  ↳ **`SegmentationDisplayStateWithAlpha`**

  ↳↳ [`SegmentationDisplayState3D`](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md)

## Table of contents

### Properties

- [baseSegmentColoring](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md#basesegmentcoloring)
- [hideSegmentZero](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md#hidesegmentzero)
- [objectAlpha](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md#objectalpha)
- [saturation](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md#saturation)
- [segmentColorHash](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md#segmentcolorhash)
- [segmentDefaultColor](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md#segmentdefaultcolor)
- [segmentSelectionState](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md#segmentselectionstate)
- [segmentStatedColors](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md#segmentstatedcolors)
- [segmentationColorGroupState](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md#segmentationcolorgroupstate)
- [segmentationGroupState](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md#segmentationgroupstate)

### Methods

- [filterBySegmentLabel](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md#filterbysegmentlabel)
- [moveToSegment](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md#movetosegment)
- [selectSegment](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md#selectsegment)

## Properties

### baseSegmentColoring

• **baseSegmentColoring**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`boolean`\>

#### Inherited from

[SegmentationDisplayState](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md).[baseSegmentColoring](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md#basesegmentcoloring)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:152](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/frontend.ts#L152)

___

### hideSegmentZero

• **hideSegmentZero**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`boolean`\>

#### Inherited from

[SegmentationDisplayState](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md).[hideSegmentZero](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md#hidesegmentzero)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:161](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/frontend.ts#L161)

___

### objectAlpha

• **objectAlpha**: [`TrackableAlphaValue`](../modules/neuroglancer_trackable_alpha.md#trackablealphavalue)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:642](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/frontend.ts#L642)

___

### saturation

• **saturation**: [`TrackableAlphaValue`](../modules/neuroglancer_trackable_alpha.md#trackablealphavalue)

#### Inherited from

[SegmentationDisplayState](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md).[saturation](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md#saturation)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:151](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/frontend.ts#L151)

___

### segmentColorHash

• **segmentColorHash**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`number`\>

#### Inherited from

[SegmentationDisplayState](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md).[segmentColorHash](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md#segmentcolorhash)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:162](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/frontend.ts#L162)

___

### segmentDefaultColor

• **segmentDefaultColor**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`undefined` \| [`vec3`](../classes/neuroglancer_util_geom.vec3.md)\>

#### Inherited from

[SegmentationDisplayState](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md).[segmentDefaultColor](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md#segmentdefaultcolor)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:164](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/frontend.ts#L164)

___

### segmentSelectionState

• **segmentSelectionState**: [`SegmentSelectionState`](../classes/neuroglancer_segmentation_display_state_frontend.SegmentSelectionState.md)

#### Inherited from

[SegmentationDisplayState](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md).[segmentSelectionState](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md#segmentselectionstate)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:150](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/frontend.ts#L150)

___

### segmentStatedColors

• **segmentStatedColors**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<[`Uint64Map`](../classes/neuroglancer_uint64_map.Uint64Map.md)\>

#### Inherited from

[SegmentationDisplayState](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md).[segmentStatedColors](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md#segmentstatedcolors)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:163](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/frontend.ts#L163)

___

### segmentationColorGroupState

• **segmentationColorGroupState**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<[`SegmentationColorGroupState`](neuroglancer_segmentation_display_state_frontend.SegmentationColorGroupState.md)\>

#### Inherited from

[SegmentationDisplayState](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md).[segmentationColorGroupState](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md#segmentationcolorgroupstate)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:154](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/frontend.ts#L154)

___

### segmentationGroupState

• **segmentationGroupState**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<[`SegmentationGroupState`](neuroglancer_segmentation_display_state_frontend.SegmentationGroupState.md)\>

#### Inherited from

[SegmentationDisplayState](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md).[segmentationGroupState](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md#segmentationgroupstate)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:153](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/frontend.ts#L153)

## Methods

### filterBySegmentLabel

▸ **filterBySegmentLabel**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md) |

#### Returns

`void`

#### Inherited from

[SegmentationDisplayState](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md).[filterBySegmentLabel](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md#filterbysegmentlabel)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:157](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/frontend.ts#L157)

___

### moveToSegment

▸ **moveToSegment**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md) |

#### Returns

`void`

#### Inherited from

[SegmentationDisplayState](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md).[moveToSegment](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md#movetosegment)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:158](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/frontend.ts#L158)

___

### selectSegment

▸ **selectSegment**(`id`, `pin`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md) |
| `pin` | `boolean` \| ``"toggle"`` |

#### Returns

`void`

#### Inherited from

[SegmentationDisplayState](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md).[selectSegment](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md#selectsegment)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:156](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/frontend.ts#L156)
