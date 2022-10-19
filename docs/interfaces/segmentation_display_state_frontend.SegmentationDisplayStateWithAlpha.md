[neuroglancer](../README.md) / [Modules](../modules.md) / [segmentation\_display\_state/frontend](../modules/segmentation_display_state_frontend.md) / SegmentationDisplayStateWithAlpha

# Interface: SegmentationDisplayStateWithAlpha

[segmentation_display_state/frontend](../modules/segmentation_display_state_frontend.md).SegmentationDisplayStateWithAlpha

## Hierarchy

- [`SegmentationDisplayState`](segmentation_display_state_frontend.SegmentationDisplayState.md)

  ↳ **`SegmentationDisplayStateWithAlpha`**

  ↳↳ [`SegmentationDisplayState3D`](segmentation_display_state_frontend.SegmentationDisplayState3D.md)

## Table of contents

### Properties

- [baseSegmentColoring](segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md#basesegmentcoloring)
- [hideSegmentZero](segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md#hidesegmentzero)
- [objectAlpha](segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md#objectalpha)
- [saturation](segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md#saturation)
- [segmentColorHash](segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md#segmentcolorhash)
- [segmentDefaultColor](segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md#segmentdefaultcolor)
- [segmentSelectionState](segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md#segmentselectionstate)
- [segmentStatedColors](segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md#segmentstatedcolors)
- [segmentationColorGroupState](segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md#segmentationcolorgroupstate)
- [segmentationGroupState](segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md#segmentationgroupstate)

### Methods

- [filterBySegmentLabel](segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md#filterbysegmentlabel)
- [moveToSegment](segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md#movetosegment)
- [selectSegment](segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md#selectsegment)

## Properties

### baseSegmentColoring

• **baseSegmentColoring**: [`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`boolean`\>

#### Inherited from

[SegmentationDisplayState](segmentation_display_state_frontend.SegmentationDisplayState.md).[baseSegmentColoring](segmentation_display_state_frontend.SegmentationDisplayState.md#basesegmentcoloring)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:152](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L152)

___

### hideSegmentZero

• **hideSegmentZero**: [`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`boolean`\>

#### Inherited from

[SegmentationDisplayState](segmentation_display_state_frontend.SegmentationDisplayState.md).[hideSegmentZero](segmentation_display_state_frontend.SegmentationDisplayState.md#hidesegmentzero)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:161](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L161)

___

### objectAlpha

• **objectAlpha**: [`TrackableAlphaValue`](../modules/mesh_frontend._internal_.md#trackablealphavalue)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:642](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L642)

___

### saturation

• **saturation**: [`TrackableAlphaValue`](../modules/mesh_frontend._internal_.md#trackablealphavalue)

#### Inherited from

[SegmentationDisplayState](segmentation_display_state_frontend.SegmentationDisplayState.md).[saturation](segmentation_display_state_frontend.SegmentationDisplayState.md#saturation)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:151](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L151)

___

### segmentColorHash

• **segmentColorHash**: [`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`number`\>

#### Inherited from

[SegmentationDisplayState](segmentation_display_state_frontend.SegmentationDisplayState.md).[segmentColorHash](segmentation_display_state_frontend.SegmentationDisplayState.md#segmentcolorhash)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:162](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L162)

___

### segmentDefaultColor

• **segmentDefaultColor**: [`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`undefined` \| [`vec3`](../classes/util_geom.vec3.md)\>

#### Inherited from

[SegmentationDisplayState](segmentation_display_state_frontend.SegmentationDisplayState.md).[segmentDefaultColor](segmentation_display_state_frontend.SegmentationDisplayState.md#segmentdefaultcolor)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:164](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L164)

___

### segmentSelectionState

• **segmentSelectionState**: [`SegmentSelectionState`](../classes/segmentation_display_state_frontend.SegmentSelectionState.md)

#### Inherited from

[SegmentationDisplayState](segmentation_display_state_frontend.SegmentationDisplayState.md).[segmentSelectionState](segmentation_display_state_frontend.SegmentationDisplayState.md#segmentselectionstate)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:150](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L150)

___

### segmentStatedColors

• **segmentStatedColors**: [`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`Uint64Map`](../classes/mesh_frontend._internal_.Uint64Map.md)\>

#### Inherited from

[SegmentationDisplayState](segmentation_display_state_frontend.SegmentationDisplayState.md).[segmentStatedColors](segmentation_display_state_frontend.SegmentationDisplayState.md#segmentstatedcolors)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:163](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L163)

___

### segmentationColorGroupState

• **segmentationColorGroupState**: [`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`SegmentationColorGroupState`](segmentation_display_state_frontend.SegmentationColorGroupState.md)\>

#### Inherited from

[SegmentationDisplayState](segmentation_display_state_frontend.SegmentationDisplayState.md).[segmentationColorGroupState](segmentation_display_state_frontend.SegmentationDisplayState.md#segmentationcolorgroupstate)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:154](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L154)

___

### segmentationGroupState

• **segmentationGroupState**: [`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`SegmentationGroupState`](segmentation_display_state_frontend.SegmentationGroupState.md)\>

#### Inherited from

[SegmentationDisplayState](segmentation_display_state_frontend.SegmentationDisplayState.md).[segmentationGroupState](segmentation_display_state_frontend.SegmentationDisplayState.md#segmentationgroupstate)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:153](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L153)

## Methods

### filterBySegmentLabel

▸ **filterBySegmentLabel**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`Uint64`](../classes/util_uint64.Uint64.md) |

#### Returns

`void`

#### Inherited from

[SegmentationDisplayState](segmentation_display_state_frontend.SegmentationDisplayState.md).[filterBySegmentLabel](segmentation_display_state_frontend.SegmentationDisplayState.md#filterbysegmentlabel)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:157](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L157)

___

### moveToSegment

▸ **moveToSegment**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`Uint64`](../classes/util_uint64.Uint64.md) |

#### Returns

`void`

#### Inherited from

[SegmentationDisplayState](segmentation_display_state_frontend.SegmentationDisplayState.md).[moveToSegment](segmentation_display_state_frontend.SegmentationDisplayState.md#movetosegment)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:158](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L158)

___

### selectSegment

▸ **selectSegment**(`id`, `pin`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`Uint64`](../classes/util_uint64.Uint64.md) |
| `pin` | `boolean` \| ``"toggle"`` |

#### Returns

`void`

#### Inherited from

[SegmentationDisplayState](segmentation_display_state_frontend.SegmentationDisplayState.md).[selectSegment](segmentation_display_state_frontend.SegmentationDisplayState.md#selectsegment)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:156](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L156)
