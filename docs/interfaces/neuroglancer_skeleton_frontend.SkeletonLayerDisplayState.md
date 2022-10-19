[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/skeleton/frontend](../modules/neuroglancer_skeleton_frontend.md) / SkeletonLayerDisplayState

# Interface: SkeletonLayerDisplayState

[neuroglancer/skeleton/frontend](../modules/neuroglancer_skeleton_frontend.md).SkeletonLayerDisplayState

## Hierarchy

- [`SegmentationDisplayState3D`](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md)

  ↳ **`SkeletonLayerDisplayState`**

## Table of contents

### Properties

- [baseSegmentColoring](neuroglancer_skeleton_frontend.SkeletonLayerDisplayState.md#basesegmentcoloring)
- [hideSegmentZero](neuroglancer_skeleton_frontend.SkeletonLayerDisplayState.md#hidesegmentzero)
- [objectAlpha](neuroglancer_skeleton_frontend.SkeletonLayerDisplayState.md#objectalpha)
- [renderScaleHistogram](neuroglancer_skeleton_frontend.SkeletonLayerDisplayState.md#renderscalehistogram)
- [renderScaleTarget](neuroglancer_skeleton_frontend.SkeletonLayerDisplayState.md#renderscaletarget)
- [saturation](neuroglancer_skeleton_frontend.SkeletonLayerDisplayState.md#saturation)
- [segmentColorHash](neuroglancer_skeleton_frontend.SkeletonLayerDisplayState.md#segmentcolorhash)
- [segmentDefaultColor](neuroglancer_skeleton_frontend.SkeletonLayerDisplayState.md#segmentdefaultcolor)
- [segmentSelectionState](neuroglancer_skeleton_frontend.SkeletonLayerDisplayState.md#segmentselectionstate)
- [segmentStatedColors](neuroglancer_skeleton_frontend.SkeletonLayerDisplayState.md#segmentstatedcolors)
- [segmentationColorGroupState](neuroglancer_skeleton_frontend.SkeletonLayerDisplayState.md#segmentationcolorgroupstate)
- [segmentationGroupState](neuroglancer_skeleton_frontend.SkeletonLayerDisplayState.md#segmentationgroupstate)
- [shaderError](neuroglancer_skeleton_frontend.SkeletonLayerDisplayState.md#shadererror)
- [skeletonRenderingOptions](neuroglancer_skeleton_frontend.SkeletonLayerDisplayState.md#skeletonrenderingoptions)
- [transform](neuroglancer_skeleton_frontend.SkeletonLayerDisplayState.md#transform)
- [transparentPickEnabled](neuroglancer_skeleton_frontend.SkeletonLayerDisplayState.md#transparentpickenabled)

### Methods

- [filterBySegmentLabel](neuroglancer_skeleton_frontend.SkeletonLayerDisplayState.md#filterbysegmentlabel)
- [moveToSegment](neuroglancer_skeleton_frontend.SkeletonLayerDisplayState.md#movetosegment)
- [selectSegment](neuroglancer_skeleton_frontend.SkeletonLayerDisplayState.md#selectsegment)

## Properties

### baseSegmentColoring

• **baseSegmentColoring**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`boolean`\>

#### Inherited from

[SegmentationDisplayState3D](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md).[baseSegmentColoring](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md#basesegmentcoloring)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:152](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/frontend.ts#L152)

___

### hideSegmentZero

• **hideSegmentZero**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`boolean`\>

#### Inherited from

[SegmentationDisplayState3D](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md).[hideSegmentZero](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md#hidesegmentzero)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:161](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/frontend.ts#L161)

___

### objectAlpha

• **objectAlpha**: [`TrackableAlphaValue`](../modules/neuroglancer_trackable_alpha.md#trackablealphavalue)

#### Inherited from

[SegmentationDisplayState3D](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md).[objectAlpha](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md#objectalpha)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:642](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/frontend.ts#L642)

___

### renderScaleHistogram

• **renderScaleHistogram**: [`RenderScaleHistogram`](../classes/neuroglancer_render_scale_statistics.RenderScaleHistogram.md)

#### Inherited from

[SegmentationDisplayState3D](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md).[renderScaleHistogram](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md#renderscalehistogram)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:647](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/frontend.ts#L647)

___

### renderScaleTarget

• **renderScaleTarget**: [`TrackableValue`](../classes/neuroglancer_trackable_value.TrackableValue.md)<`number`\>

#### Inherited from

[SegmentationDisplayState3D](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md).[renderScaleTarget](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md#renderscaletarget)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:648](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/frontend.ts#L648)

___

### saturation

• **saturation**: [`TrackableAlphaValue`](../modules/neuroglancer_trackable_alpha.md#trackablealphavalue)

#### Inherited from

[SegmentationDisplayState3D](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md).[saturation](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md#saturation)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:151](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/frontend.ts#L151)

___

### segmentColorHash

• **segmentColorHash**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`number`\>

#### Inherited from

[SegmentationDisplayState3D](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md).[segmentColorHash](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md#segmentcolorhash)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:162](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/frontend.ts#L162)

___

### segmentDefaultColor

• **segmentDefaultColor**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`undefined` \| [`vec3`](../classes/neuroglancer_util_geom.vec3.md)\>

#### Inherited from

[SegmentationDisplayState3D](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md).[segmentDefaultColor](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md#segmentdefaultcolor)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:164](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/frontend.ts#L164)

___

### segmentSelectionState

• **segmentSelectionState**: [`SegmentSelectionState`](../classes/neuroglancer_segmentation_display_state_frontend.SegmentSelectionState.md)

#### Inherited from

[SegmentationDisplayState3D](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md).[segmentSelectionState](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md#segmentselectionstate)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:150](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/frontend.ts#L150)

___

### segmentStatedColors

• **segmentStatedColors**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<[`Uint64Map`](../classes/neuroglancer_uint64_map.Uint64Map.md)\>

#### Inherited from

[SegmentationDisplayState3D](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md).[segmentStatedColors](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md#segmentstatedcolors)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:163](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/frontend.ts#L163)

___

### segmentationColorGroupState

• **segmentationColorGroupState**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<[`SegmentationColorGroupState`](neuroglancer_segmentation_display_state_frontend.SegmentationColorGroupState.md)\>

#### Inherited from

[SegmentationDisplayState3D](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md).[segmentationColorGroupState](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md#segmentationcolorgroupstate)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:154](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/frontend.ts#L154)

___

### segmentationGroupState

• **segmentationGroupState**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<[`SegmentationGroupState`](neuroglancer_segmentation_display_state_frontend.SegmentationGroupState.md)\>

#### Inherited from

[SegmentationDisplayState3D](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md).[segmentationGroupState](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md#segmentationgroupstate)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:153](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/frontend.ts#L153)

___

### shaderError

• **shaderError**: [`WatchableShaderError`](../modules/neuroglancer_webgl_dynamic_shader.md#watchableshadererror)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:347](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L347)

___

### skeletonRenderingOptions

• **skeletonRenderingOptions**: [`SkeletonRenderingOptions`](../classes/neuroglancer_skeleton_frontend.SkeletonRenderingOptions.md)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:348](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/skeleton/frontend.ts#L348)

___

### transform

• **transform**: [`WatchableRenderLayerTransform`](../modules/neuroglancer_render_coordinate_transform.md#watchablerenderlayertransform)

#### Inherited from

[SegmentationDisplayState3D](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md).[transform](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md#transform)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:646](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/frontend.ts#L646)

___

### transparentPickEnabled

• **transparentPickEnabled**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`boolean`\>

#### Inherited from

[SegmentationDisplayState3D](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md).[transparentPickEnabled](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md#transparentpickenabled)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:652](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/frontend.ts#L652)

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

[SegmentationDisplayState3D](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md).[filterBySegmentLabel](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md#filterbysegmentlabel)

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

[SegmentationDisplayState3D](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md).[moveToSegment](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md#movetosegment)

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

[SegmentationDisplayState3D](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md).[selectSegment](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md#selectsegment)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:156](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/frontend.ts#L156)
