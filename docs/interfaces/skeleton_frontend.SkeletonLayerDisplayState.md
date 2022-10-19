[neuroglancer](../README.md) / [Modules](../modules.md) / [skeleton/frontend](../modules/skeleton_frontend.md) / SkeletonLayerDisplayState

# Interface: SkeletonLayerDisplayState

[skeleton/frontend](../modules/skeleton_frontend.md).SkeletonLayerDisplayState

## Hierarchy

- [`SegmentationDisplayState3D`](segmentation_display_state_frontend.SegmentationDisplayState3D.md)

  ↳ **`SkeletonLayerDisplayState`**

## Table of contents

### Properties

- [baseSegmentColoring](skeleton_frontend.SkeletonLayerDisplayState.md#basesegmentcoloring)
- [hideSegmentZero](skeleton_frontend.SkeletonLayerDisplayState.md#hidesegmentzero)
- [objectAlpha](skeleton_frontend.SkeletonLayerDisplayState.md#objectalpha)
- [renderScaleHistogram](skeleton_frontend.SkeletonLayerDisplayState.md#renderscalehistogram)
- [renderScaleTarget](skeleton_frontend.SkeletonLayerDisplayState.md#renderscaletarget)
- [saturation](skeleton_frontend.SkeletonLayerDisplayState.md#saturation)
- [segmentColorHash](skeleton_frontend.SkeletonLayerDisplayState.md#segmentcolorhash)
- [segmentDefaultColor](skeleton_frontend.SkeletonLayerDisplayState.md#segmentdefaultcolor)
- [segmentSelectionState](skeleton_frontend.SkeletonLayerDisplayState.md#segmentselectionstate)
- [segmentStatedColors](skeleton_frontend.SkeletonLayerDisplayState.md#segmentstatedcolors)
- [segmentationColorGroupState](skeleton_frontend.SkeletonLayerDisplayState.md#segmentationcolorgroupstate)
- [segmentationGroupState](skeleton_frontend.SkeletonLayerDisplayState.md#segmentationgroupstate)
- [shaderError](skeleton_frontend.SkeletonLayerDisplayState.md#shadererror)
- [skeletonRenderingOptions](skeleton_frontend.SkeletonLayerDisplayState.md#skeletonrenderingoptions)
- [transform](skeleton_frontend.SkeletonLayerDisplayState.md#transform)
- [transparentPickEnabled](skeleton_frontend.SkeletonLayerDisplayState.md#transparentpickenabled)

### Methods

- [filterBySegmentLabel](skeleton_frontend.SkeletonLayerDisplayState.md#filterbysegmentlabel)
- [moveToSegment](skeleton_frontend.SkeletonLayerDisplayState.md#movetosegment)
- [selectSegment](skeleton_frontend.SkeletonLayerDisplayState.md#selectsegment)

## Properties

### baseSegmentColoring

• **baseSegmentColoring**: [`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`boolean`\>

#### Inherited from

[SegmentationDisplayState3D](segmentation_display_state_frontend.SegmentationDisplayState3D.md).[baseSegmentColoring](segmentation_display_state_frontend.SegmentationDisplayState3D.md#basesegmentcoloring)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:152](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L152)

___

### hideSegmentZero

• **hideSegmentZero**: [`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`boolean`\>

#### Inherited from

[SegmentationDisplayState3D](segmentation_display_state_frontend.SegmentationDisplayState3D.md).[hideSegmentZero](segmentation_display_state_frontend.SegmentationDisplayState3D.md#hidesegmentzero)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:161](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L161)

___

### objectAlpha

• **objectAlpha**: [`TrackableAlphaValue`](../modules/mesh_frontend._internal_.md#trackablealphavalue)

#### Inherited from

[SegmentationDisplayState3D](segmentation_display_state_frontend.SegmentationDisplayState3D.md).[objectAlpha](segmentation_display_state_frontend.SegmentationDisplayState3D.md#objectalpha)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:642](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L642)

___

### renderScaleHistogram

• **renderScaleHistogram**: [`RenderScaleHistogram`](../classes/annotation_renderlayer._internal_.RenderScaleHistogram.md)

#### Inherited from

[SegmentationDisplayState3D](segmentation_display_state_frontend.SegmentationDisplayState3D.md).[renderScaleHistogram](segmentation_display_state_frontend.SegmentationDisplayState3D.md#renderscalehistogram)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:647](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L647)

___

### renderScaleTarget

• **renderScaleTarget**: [`TrackableValue`](../classes/annotation_annotation_layer_state._internal_.TrackableValue.md)<`number`\>

#### Inherited from

[SegmentationDisplayState3D](segmentation_display_state_frontend.SegmentationDisplayState3D.md).[renderScaleTarget](segmentation_display_state_frontend.SegmentationDisplayState3D.md#renderscaletarget)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:648](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L648)

___

### saturation

• **saturation**: [`TrackableAlphaValue`](../modules/mesh_frontend._internal_.md#trackablealphavalue)

#### Inherited from

[SegmentationDisplayState3D](segmentation_display_state_frontend.SegmentationDisplayState3D.md).[saturation](segmentation_display_state_frontend.SegmentationDisplayState3D.md#saturation)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:151](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L151)

___

### segmentColorHash

• **segmentColorHash**: [`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`number`\>

#### Inherited from

[SegmentationDisplayState3D](segmentation_display_state_frontend.SegmentationDisplayState3D.md).[segmentColorHash](segmentation_display_state_frontend.SegmentationDisplayState3D.md#segmentcolorhash)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:162](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L162)

___

### segmentDefaultColor

• **segmentDefaultColor**: [`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`undefined` \| [`vec3`](../classes/util_geom.vec3.md)\>

#### Inherited from

[SegmentationDisplayState3D](segmentation_display_state_frontend.SegmentationDisplayState3D.md).[segmentDefaultColor](segmentation_display_state_frontend.SegmentationDisplayState3D.md#segmentdefaultcolor)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:164](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L164)

___

### segmentSelectionState

• **segmentSelectionState**: [`SegmentSelectionState`](../classes/segmentation_display_state_frontend.SegmentSelectionState.md)

#### Inherited from

[SegmentationDisplayState3D](segmentation_display_state_frontend.SegmentationDisplayState3D.md).[segmentSelectionState](segmentation_display_state_frontend.SegmentationDisplayState3D.md#segmentselectionstate)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:150](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L150)

___

### segmentStatedColors

• **segmentStatedColors**: [`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`Uint64Map`](../classes/mesh_frontend._internal_.Uint64Map.md)\>

#### Inherited from

[SegmentationDisplayState3D](segmentation_display_state_frontend.SegmentationDisplayState3D.md).[segmentStatedColors](segmentation_display_state_frontend.SegmentationDisplayState3D.md#segmentstatedcolors)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:163](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L163)

___

### segmentationColorGroupState

• **segmentationColorGroupState**: [`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`SegmentationColorGroupState`](segmentation_display_state_frontend.SegmentationColorGroupState.md)\>

#### Inherited from

[SegmentationDisplayState3D](segmentation_display_state_frontend.SegmentationDisplayState3D.md).[segmentationColorGroupState](segmentation_display_state_frontend.SegmentationDisplayState3D.md#segmentationcolorgroupstate)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:154](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L154)

___

### segmentationGroupState

• **segmentationGroupState**: [`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`SegmentationGroupState`](segmentation_display_state_frontend.SegmentationGroupState.md)\>

#### Inherited from

[SegmentationDisplayState3D](segmentation_display_state_frontend.SegmentationDisplayState3D.md).[segmentationGroupState](segmentation_display_state_frontend.SegmentationDisplayState3D.md#segmentationgroupstate)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:153](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L153)

___

### shaderError

• **shaderError**: [`WatchableShaderError`](../modules/webgl_dynamic_shader.md#watchableshadererror)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:347](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L347)

___

### skeletonRenderingOptions

• **skeletonRenderingOptions**: [`SkeletonRenderingOptions`](../classes/skeleton_frontend.SkeletonRenderingOptions.md)

#### Defined in

[src/neuroglancer/skeleton/frontend.ts:348](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/skeleton/frontend.ts#L348)

___

### transform

• **transform**: [`WatchableRenderLayerTransform`](../modules/mesh_frontend._internal_.md#watchablerenderlayertransform)

#### Inherited from

[SegmentationDisplayState3D](segmentation_display_state_frontend.SegmentationDisplayState3D.md).[transform](segmentation_display_state_frontend.SegmentationDisplayState3D.md#transform)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:646](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L646)

___

### transparentPickEnabled

• **transparentPickEnabled**: [`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`boolean`\>

#### Inherited from

[SegmentationDisplayState3D](segmentation_display_state_frontend.SegmentationDisplayState3D.md).[transparentPickEnabled](segmentation_display_state_frontend.SegmentationDisplayState3D.md#transparentpickenabled)

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

[SegmentationDisplayState3D](segmentation_display_state_frontend.SegmentationDisplayState3D.md).[filterBySegmentLabel](segmentation_display_state_frontend.SegmentationDisplayState3D.md#filterbysegmentlabel)

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

[SegmentationDisplayState3D](segmentation_display_state_frontend.SegmentationDisplayState3D.md).[moveToSegment](segmentation_display_state_frontend.SegmentationDisplayState3D.md#movetosegment)

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

[SegmentationDisplayState3D](segmentation_display_state_frontend.SegmentationDisplayState3D.md).[selectSegment](segmentation_display_state_frontend.SegmentationDisplayState3D.md#selectsegment)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:156](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L156)
