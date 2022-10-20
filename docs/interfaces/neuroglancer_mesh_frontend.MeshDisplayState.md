[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/mesh/frontend](../modules/neuroglancer_mesh_frontend.md) / MeshDisplayState

# Interface: MeshDisplayState

[neuroglancer/mesh/frontend](../modules/neuroglancer_mesh_frontend.md).MeshDisplayState

## Hierarchy

- [`SegmentationDisplayState3D`](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md)

  ↳ **`MeshDisplayState`**

## Table of contents

### Properties

- [baseSegmentColoring](neuroglancer_mesh_frontend.MeshDisplayState.md#basesegmentcoloring)
- [filterBySegmentLabel](neuroglancer_mesh_frontend.MeshDisplayState.md#filterbysegmentlabel)
- [hideSegmentZero](neuroglancer_mesh_frontend.MeshDisplayState.md#hidesegmentzero)
- [moveToSegment](neuroglancer_mesh_frontend.MeshDisplayState.md#movetosegment)
- [objectAlpha](neuroglancer_mesh_frontend.MeshDisplayState.md#objectalpha)
- [renderScaleHistogram](neuroglancer_mesh_frontend.MeshDisplayState.md#renderscalehistogram)
- [renderScaleTarget](neuroglancer_mesh_frontend.MeshDisplayState.md#renderscaletarget)
- [saturation](neuroglancer_mesh_frontend.MeshDisplayState.md#saturation)
- [segmentColorHash](neuroglancer_mesh_frontend.MeshDisplayState.md#segmentcolorhash)
- [segmentDefaultColor](neuroglancer_mesh_frontend.MeshDisplayState.md#segmentdefaultcolor)
- [segmentSelectionState](neuroglancer_mesh_frontend.MeshDisplayState.md#segmentselectionstate)
- [segmentStatedColors](neuroglancer_mesh_frontend.MeshDisplayState.md#segmentstatedcolors)
- [segmentationColorGroupState](neuroglancer_mesh_frontend.MeshDisplayState.md#segmentationcolorgroupstate)
- [segmentationGroupState](neuroglancer_mesh_frontend.MeshDisplayState.md#segmentationgroupstate)
- [selectSegment](neuroglancer_mesh_frontend.MeshDisplayState.md#selectsegment)
- [silhouetteRendering](neuroglancer_mesh_frontend.MeshDisplayState.md#silhouetterendering)
- [transform](neuroglancer_mesh_frontend.MeshDisplayState.md#transform)
- [transparentPickEnabled](neuroglancer_mesh_frontend.MeshDisplayState.md#transparentpickenabled)

## Properties

### baseSegmentColoring

• **baseSegmentColoring**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`boolean`\>

#### Inherited from

[SegmentationDisplayState3D](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md).[baseSegmentColoring](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md#basesegmentcoloring)

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

#### Inherited from

[SegmentationDisplayState3D](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md).[filterBySegmentLabel](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md#filterbysegmentlabel)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:157](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L157)

___

### hideSegmentZero

• **hideSegmentZero**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`boolean`\>

#### Inherited from

[SegmentationDisplayState3D](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md).[hideSegmentZero](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md#hidesegmentzero)

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

#### Inherited from

[SegmentationDisplayState3D](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md).[moveToSegment](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md#movetosegment)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:158](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L158)

___

### objectAlpha

• **objectAlpha**: [`TrackableAlphaValue`](../modules/neuroglancer_trackable_alpha.md#trackablealphavalue)

#### Inherited from

[SegmentationDisplayState3D](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md).[objectAlpha](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md#objectalpha)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:642](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L642)

___

### renderScaleHistogram

• **renderScaleHistogram**: [`RenderScaleHistogram`](../classes/neuroglancer_render_scale_statistics.RenderScaleHistogram.md)

#### Inherited from

[SegmentationDisplayState3D](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md).[renderScaleHistogram](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md#renderscalehistogram)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:647](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L647)

___

### renderScaleTarget

• **renderScaleTarget**: [`TrackableValue`](../classes/neuroglancer_trackable_value.TrackableValue.md)<`number`\>

#### Inherited from

[SegmentationDisplayState3D](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md).[renderScaleTarget](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md#renderscaletarget)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:648](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L648)

___

### saturation

• **saturation**: [`TrackableAlphaValue`](../modules/neuroglancer_trackable_alpha.md#trackablealphavalue)

#### Inherited from

[SegmentationDisplayState3D](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md).[saturation](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md#saturation)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:151](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L151)

___

### segmentColorHash

• **segmentColorHash**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`number`\>

#### Inherited from

[SegmentationDisplayState3D](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md).[segmentColorHash](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md#segmentcolorhash)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:162](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L162)

___

### segmentDefaultColor

• **segmentDefaultColor**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`undefined` \| [`vec3`](../classes/neuroglancer_util_geom.vec3.md)\>

#### Inherited from

[SegmentationDisplayState3D](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md).[segmentDefaultColor](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md#segmentdefaultcolor)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:164](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L164)

___

### segmentSelectionState

• **segmentSelectionState**: [`SegmentSelectionState`](../classes/neuroglancer_segmentation_display_state_frontend.SegmentSelectionState.md)

#### Inherited from

[SegmentationDisplayState3D](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md).[segmentSelectionState](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md#segmentselectionstate)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:150](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L150)

___

### segmentStatedColors

• **segmentStatedColors**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<[`Uint64Map`](../classes/neuroglancer_uint64_map.Uint64Map.md)\>

#### Inherited from

[SegmentationDisplayState3D](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md).[segmentStatedColors](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md#segmentstatedcolors)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:163](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L163)

___

### segmentationColorGroupState

• **segmentationColorGroupState**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<[`SegmentationColorGroupState`](neuroglancer_segmentation_display_state_frontend.SegmentationColorGroupState.md)\>

#### Inherited from

[SegmentationDisplayState3D](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md).[segmentationColorGroupState](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md#segmentationcolorgroupstate)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:154](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L154)

___

### segmentationGroupState

• **segmentationGroupState**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<[`SegmentationGroupState`](neuroglancer_segmentation_display_state_frontend.SegmentationGroupState.md)\>

#### Inherited from

[SegmentationDisplayState3D](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md).[segmentationGroupState](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md#segmentationgroupstate)

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

#### Inherited from

[SegmentationDisplayState3D](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md).[selectSegment](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md#selectsegment)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:156](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L156)

___

### silhouetteRendering

• **silhouetteRendering**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`number`\>

#### Defined in

[src/neuroglancer/mesh/frontend.ts:302](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/mesh/frontend.ts#L302)

___

### transform

• **transform**: [`WatchableRenderLayerTransform`](../modules/neuroglancer_render_coordinate_transform.md#watchablerenderlayertransform)

#### Inherited from

[SegmentationDisplayState3D](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md).[transform](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md#transform)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:646](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L646)

___

### transparentPickEnabled

• **transparentPickEnabled**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`boolean`\>

#### Inherited from

[SegmentationDisplayState3D](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md).[transparentPickEnabled](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState3D.md#transparentpickenabled)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:652](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_display_state/frontend.ts#L652)
