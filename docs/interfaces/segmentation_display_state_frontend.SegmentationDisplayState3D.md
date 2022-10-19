[neuroglancer](../README.md) / [Modules](../modules.md) / [segmentation\_display\_state/frontend](../modules/segmentation_display_state_frontend.md) / SegmentationDisplayState3D

# Interface: SegmentationDisplayState3D

[segmentation_display_state/frontend](../modules/segmentation_display_state_frontend.md).SegmentationDisplayState3D

## Hierarchy

- [`SegmentationDisplayStateWithAlpha`](segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md)

  ↳ **`SegmentationDisplayState3D`**

  ↳↳ [`MeshDisplayState`](mesh_frontend.MeshDisplayState.md)

  ↳↳ [`SkeletonLayerDisplayState`](skeleton_frontend.SkeletonLayerDisplayState.md)

## Table of contents

### Properties

- [baseSegmentColoring](segmentation_display_state_frontend.SegmentationDisplayState3D.md#basesegmentcoloring)
- [hideSegmentZero](segmentation_display_state_frontend.SegmentationDisplayState3D.md#hidesegmentzero)
- [objectAlpha](segmentation_display_state_frontend.SegmentationDisplayState3D.md#objectalpha)
- [renderScaleHistogram](segmentation_display_state_frontend.SegmentationDisplayState3D.md#renderscalehistogram)
- [renderScaleTarget](segmentation_display_state_frontend.SegmentationDisplayState3D.md#renderscaletarget)
- [saturation](segmentation_display_state_frontend.SegmentationDisplayState3D.md#saturation)
- [segmentColorHash](segmentation_display_state_frontend.SegmentationDisplayState3D.md#segmentcolorhash)
- [segmentDefaultColor](segmentation_display_state_frontend.SegmentationDisplayState3D.md#segmentdefaultcolor)
- [segmentSelectionState](segmentation_display_state_frontend.SegmentationDisplayState3D.md#segmentselectionstate)
- [segmentStatedColors](segmentation_display_state_frontend.SegmentationDisplayState3D.md#segmentstatedcolors)
- [segmentationColorGroupState](segmentation_display_state_frontend.SegmentationDisplayState3D.md#segmentationcolorgroupstate)
- [segmentationGroupState](segmentation_display_state_frontend.SegmentationDisplayState3D.md#segmentationgroupstate)
- [transform](segmentation_display_state_frontend.SegmentationDisplayState3D.md#transform)
- [transparentPickEnabled](segmentation_display_state_frontend.SegmentationDisplayState3D.md#transparentpickenabled)

### Methods

- [filterBySegmentLabel](segmentation_display_state_frontend.SegmentationDisplayState3D.md#filterbysegmentlabel)
- [moveToSegment](segmentation_display_state_frontend.SegmentationDisplayState3D.md#movetosegment)
- [selectSegment](segmentation_display_state_frontend.SegmentationDisplayState3D.md#selectsegment)

## Properties

### baseSegmentColoring

• **baseSegmentColoring**: [`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`boolean`\>

#### Inherited from

[SegmentationDisplayStateWithAlpha](segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md).[baseSegmentColoring](segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md#basesegmentcoloring)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:152](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L152)

___

### hideSegmentZero

• **hideSegmentZero**: [`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`boolean`\>

#### Inherited from

[SegmentationDisplayStateWithAlpha](segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md).[hideSegmentZero](segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md#hidesegmentzero)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:161](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L161)

___

### objectAlpha

• **objectAlpha**: [`TrackableAlphaValue`](../modules/mesh_frontend._internal_.md#trackablealphavalue)

#### Inherited from

[SegmentationDisplayStateWithAlpha](segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md).[objectAlpha](segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md#objectalpha)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:642](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L642)

___

### renderScaleHistogram

• **renderScaleHistogram**: [`RenderScaleHistogram`](../classes/annotation_renderlayer._internal_.RenderScaleHistogram.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:647](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L647)

___

### renderScaleTarget

• **renderScaleTarget**: [`TrackableValue`](../classes/annotation_annotation_layer_state._internal_.TrackableValue.md)<`number`\>

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:648](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L648)

___

### saturation

• **saturation**: [`TrackableAlphaValue`](../modules/mesh_frontend._internal_.md#trackablealphavalue)

#### Inherited from

[SegmentationDisplayStateWithAlpha](segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md).[saturation](segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md#saturation)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:151](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L151)

___

### segmentColorHash

• **segmentColorHash**: [`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`number`\>

#### Inherited from

[SegmentationDisplayStateWithAlpha](segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md).[segmentColorHash](segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md#segmentcolorhash)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:162](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L162)

___

### segmentDefaultColor

• **segmentDefaultColor**: [`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`undefined` \| [`vec3`](../classes/util_geom.vec3.md)\>

#### Inherited from

[SegmentationDisplayStateWithAlpha](segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md).[segmentDefaultColor](segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md#segmentdefaultcolor)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:164](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L164)

___

### segmentSelectionState

• **segmentSelectionState**: [`SegmentSelectionState`](../classes/segmentation_display_state_frontend.SegmentSelectionState.md)

#### Inherited from

[SegmentationDisplayStateWithAlpha](segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md).[segmentSelectionState](segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md#segmentselectionstate)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:150](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L150)

___

### segmentStatedColors

• **segmentStatedColors**: [`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`Uint64Map`](../classes/mesh_frontend._internal_.Uint64Map.md)\>

#### Inherited from

[SegmentationDisplayStateWithAlpha](segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md).[segmentStatedColors](segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md#segmentstatedcolors)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:163](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L163)

___

### segmentationColorGroupState

• **segmentationColorGroupState**: [`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`SegmentationColorGroupState`](segmentation_display_state_frontend.SegmentationColorGroupState.md)\>

#### Inherited from

[SegmentationDisplayStateWithAlpha](segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md).[segmentationColorGroupState](segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md#segmentationcolorgroupstate)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:154](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L154)

___

### segmentationGroupState

• **segmentationGroupState**: [`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`SegmentationGroupState`](segmentation_display_state_frontend.SegmentationGroupState.md)\>

#### Inherited from

[SegmentationDisplayStateWithAlpha](segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md).[segmentationGroupState](segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md#segmentationgroupstate)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:153](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L153)

___

### transform

• **transform**: [`WatchableRenderLayerTransform`](../modules/mesh_frontend._internal_.md#watchablerenderlayertransform)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:646](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L646)

___

### transparentPickEnabled

• **transparentPickEnabled**: [`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`boolean`\>

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:652](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L652)

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

[SegmentationDisplayStateWithAlpha](segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md).[filterBySegmentLabel](segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md#filterbysegmentlabel)

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

[SegmentationDisplayStateWithAlpha](segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md).[moveToSegment](segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md#movetosegment)

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

[SegmentationDisplayStateWithAlpha](segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md).[selectSegment](segmentation_display_state_frontend.SegmentationDisplayStateWithAlpha.md#selectsegment)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:156](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L156)
