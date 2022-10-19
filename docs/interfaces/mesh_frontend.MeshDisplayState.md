[neuroglancer](../README.md) / [Modules](../modules.md) / [mesh/frontend](../modules/mesh_frontend.md) / MeshDisplayState

# Interface: MeshDisplayState

[mesh/frontend](../modules/mesh_frontend.md).MeshDisplayState

## Hierarchy

- [`SegmentationDisplayState3D`](segmentation_display_state_frontend.SegmentationDisplayState3D.md)

  ↳ **`MeshDisplayState`**

## Table of contents

### Properties

- [baseSegmentColoring](mesh_frontend.MeshDisplayState.md#basesegmentcoloring)
- [hideSegmentZero](mesh_frontend.MeshDisplayState.md#hidesegmentzero)
- [objectAlpha](mesh_frontend.MeshDisplayState.md#objectalpha)
- [renderScaleHistogram](mesh_frontend.MeshDisplayState.md#renderscalehistogram)
- [renderScaleTarget](mesh_frontend.MeshDisplayState.md#renderscaletarget)
- [saturation](mesh_frontend.MeshDisplayState.md#saturation)
- [segmentColorHash](mesh_frontend.MeshDisplayState.md#segmentcolorhash)
- [segmentDefaultColor](mesh_frontend.MeshDisplayState.md#segmentdefaultcolor)
- [segmentSelectionState](mesh_frontend.MeshDisplayState.md#segmentselectionstate)
- [segmentStatedColors](mesh_frontend.MeshDisplayState.md#segmentstatedcolors)
- [segmentationColorGroupState](mesh_frontend.MeshDisplayState.md#segmentationcolorgroupstate)
- [segmentationGroupState](mesh_frontend.MeshDisplayState.md#segmentationgroupstate)
- [silhouetteRendering](mesh_frontend.MeshDisplayState.md#silhouetterendering)
- [transform](mesh_frontend.MeshDisplayState.md#transform)
- [transparentPickEnabled](mesh_frontend.MeshDisplayState.md#transparentpickenabled)

### Methods

- [filterBySegmentLabel](mesh_frontend.MeshDisplayState.md#filterbysegmentlabel)
- [moveToSegment](mesh_frontend.MeshDisplayState.md#movetosegment)
- [selectSegment](mesh_frontend.MeshDisplayState.md#selectsegment)

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

### silhouetteRendering

• **silhouetteRendering**: [`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`number`\>

#### Defined in

[src/neuroglancer/mesh/frontend.ts:302](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/mesh/frontend.ts#L302)

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
