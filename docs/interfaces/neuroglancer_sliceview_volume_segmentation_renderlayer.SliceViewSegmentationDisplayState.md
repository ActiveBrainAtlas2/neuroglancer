[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/sliceview/volume/segmentation\_renderlayer](../modules/neuroglancer_sliceview_volume_segmentation_renderlayer.md) / SliceViewSegmentationDisplayState

# Interface: SliceViewSegmentationDisplayState

[neuroglancer/sliceview/volume/segmentation_renderlayer](../modules/neuroglancer_sliceview_volume_segmentation_renderlayer.md).SliceViewSegmentationDisplayState

## Hierarchy

- [`SegmentationDisplayState`](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md)

- [`RenderLayerBaseOptions`](neuroglancer_sliceview_volume_renderlayer.RenderLayerBaseOptions.md)

  ↳ **`SliceViewSegmentationDisplayState`**

## Table of contents

### Properties

- [baseSegmentColoring](neuroglancer_sliceview_volume_segmentation_renderlayer.SliceViewSegmentationDisplayState.md#basesegmentcoloring)
- [channelCoordinateSpace](neuroglancer_sliceview_volume_segmentation_renderlayer.SliceViewSegmentationDisplayState.md#channelcoordinatespace)
- [dataHistogramSpecifications](neuroglancer_sliceview_volume_segmentation_renderlayer.SliceViewSegmentationDisplayState.md#datahistogramspecifications)
- [hideSegmentZero](neuroglancer_sliceview_volume_segmentation_renderlayer.SliceViewSegmentationDisplayState.md#hidesegmentzero)
- [ignoreNullVisibleSet](neuroglancer_sliceview_volume_segmentation_renderlayer.SliceViewSegmentationDisplayState.md#ignorenullvisibleset)
- [localPosition](neuroglancer_sliceview_volume_segmentation_renderlayer.SliceViewSegmentationDisplayState.md#localposition)
- [notSelectedAlpha](neuroglancer_sliceview_volume_segmentation_renderlayer.SliceViewSegmentationDisplayState.md#notselectedalpha)
- [renderScaleHistogram](neuroglancer_sliceview_volume_segmentation_renderlayer.SliceViewSegmentationDisplayState.md#renderscalehistogram)
- [renderScaleTarget](neuroglancer_sliceview_volume_segmentation_renderlayer.SliceViewSegmentationDisplayState.md#renderscaletarget)
- [saturation](neuroglancer_sliceview_volume_segmentation_renderlayer.SliceViewSegmentationDisplayState.md#saturation)
- [segmentColorHash](neuroglancer_sliceview_volume_segmentation_renderlayer.SliceViewSegmentationDisplayState.md#segmentcolorhash)
- [segmentDefaultColor](neuroglancer_sliceview_volume_segmentation_renderlayer.SliceViewSegmentationDisplayState.md#segmentdefaultcolor)
- [segmentSelectionState](neuroglancer_sliceview_volume_segmentation_renderlayer.SliceViewSegmentationDisplayState.md#segmentselectionstate)
- [segmentStatedColors](neuroglancer_sliceview_volume_segmentation_renderlayer.SliceViewSegmentationDisplayState.md#segmentstatedcolors)
- [segmentationColorGroupState](neuroglancer_sliceview_volume_segmentation_renderlayer.SliceViewSegmentationDisplayState.md#segmentationcolorgroupstate)
- [segmentationGroupState](neuroglancer_sliceview_volume_segmentation_renderlayer.SliceViewSegmentationDisplayState.md#segmentationgroupstate)
- [selectedAlpha](neuroglancer_sliceview_volume_segmentation_renderlayer.SliceViewSegmentationDisplayState.md#selectedalpha)
- [shaderError](neuroglancer_sliceview_volume_segmentation_renderlayer.SliceViewSegmentationDisplayState.md#shadererror)
- [transform](neuroglancer_sliceview_volume_segmentation_renderlayer.SliceViewSegmentationDisplayState.md#transform)

### Methods

- [filterBySegmentLabel](neuroglancer_sliceview_volume_segmentation_renderlayer.SliceViewSegmentationDisplayState.md#filterbysegmentlabel)
- [moveToSegment](neuroglancer_sliceview_volume_segmentation_renderlayer.SliceViewSegmentationDisplayState.md#movetosegment)
- [selectSegment](neuroglancer_sliceview_volume_segmentation_renderlayer.SliceViewSegmentationDisplayState.md#selectsegment)

## Properties

### baseSegmentColoring

• **baseSegmentColoring**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`boolean`\>

#### Inherited from

[SegmentationDisplayState](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md).[baseSegmentColoring](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md#basesegmentcoloring)

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:152](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/frontend.ts#L152)

___

### channelCoordinateSpace

• `Optional` **channelCoordinateSpace**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<[`CoordinateSpace`](neuroglancer_coordinate_transform.CoordinateSpace.md)\>

#### Inherited from

[RenderLayerBaseOptions](neuroglancer_sliceview_volume_renderlayer.RenderLayerBaseOptions.md).[channelCoordinateSpace](neuroglancer_sliceview_volume_renderlayer.RenderLayerBaseOptions.md#channelcoordinatespace)

#### Defined in

[src/neuroglancer/sliceview/volume/renderlayer.ts:207](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/renderlayer.ts#L207)

___

### dataHistogramSpecifications

• `Optional` **dataHistogramSpecifications**: [`HistogramSpecifications`](../classes/neuroglancer_webgl_empirical_cdf.HistogramSpecifications.md)

#### Inherited from

[RenderLayerBaseOptions](neuroglancer_sliceview_volume_renderlayer.RenderLayerBaseOptions.md).[dataHistogramSpecifications](neuroglancer_sliceview_volume_renderlayer.RenderLayerBaseOptions.md#datahistogramspecifications)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/renderlayer.ts#L47)

___

### hideSegmentZero

• **hideSegmentZero**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`boolean`\>

#### Overrides

[SegmentationDisplayState](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md).[hideSegmentZero](neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md#hidesegmentzero)

#### Defined in

[src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts#L52)

___

### ignoreNullVisibleSet

• **ignoreNullVisibleSet**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`boolean`\>

#### Defined in

[src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts#L53)

___

### localPosition

• **localPosition**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`Float32Array`\>

Specifies the position within the "local" coordinate space.

#### Inherited from

[RenderLayerBaseOptions](neuroglancer_sliceview_volume_renderlayer.RenderLayerBaseOptions.md).[localPosition](neuroglancer_sliceview_volume_renderlayer.RenderLayerBaseOptions.md#localposition)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/renderlayer.ts#L46)

___

### notSelectedAlpha

• **notSelectedAlpha**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`number`\>

#### Defined in

[src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts#L51)

___

### renderScaleHistogram

• `Optional` **renderScaleHistogram**: [`RenderScaleHistogram`](../classes/neuroglancer_render_scale_statistics.RenderScaleHistogram.md)

#### Inherited from

[RenderLayerBaseOptions](neuroglancer_sliceview_volume_renderlayer.RenderLayerBaseOptions.md).[renderScaleHistogram](neuroglancer_sliceview_volume_renderlayer.RenderLayerBaseOptions.md#renderscalehistogram)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/renderlayer.ts#L41)

___

### renderScaleTarget

• `Optional` **renderScaleTarget**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`number`\>

#### Inherited from

[RenderLayerBaseOptions](neuroglancer_sliceview_volume_renderlayer.RenderLayerBaseOptions.md).[renderScaleTarget](neuroglancer_sliceview_volume_renderlayer.RenderLayerBaseOptions.md#renderscaletarget)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/renderlayer.ts#L40)

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

___

### selectedAlpha

• **selectedAlpha**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`number`\>

#### Defined in

[src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/segmentation_renderlayer.ts#L50)

___

### shaderError

• `Optional` **shaderError**: [`WatchableShaderError`](../modules/neuroglancer_webgl_dynamic_shader.md#watchableshadererror)

#### Inherited from

[RenderLayerBaseOptions](neuroglancer_sliceview_volume_renderlayer.RenderLayerBaseOptions.md).[shaderError](neuroglancer_sliceview_volume_renderlayer.RenderLayerBaseOptions.md#shadererror)

#### Defined in

[src/neuroglancer/sliceview/volume/renderlayer.ts:206](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/volume/renderlayer.ts#L206)

___

### transform

• **transform**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<[`RenderLayerTransformOrError`](../modules/neuroglancer_render_coordinate_transform.md#renderlayertransformorerror)\>

Specifies the transform from the "model" coordinate space (specified by the multiscale source)
to the "render layer" coordinate space.

#### Inherited from

[RenderLayerBaseOptions](neuroglancer_sliceview_volume_renderlayer.RenderLayerBaseOptions.md).[transform](neuroglancer_sliceview_volume_renderlayer.RenderLayerBaseOptions.md#transform)

#### Defined in

[src/neuroglancer/sliceview/renderlayer.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/sliceview/renderlayer.ts#L39)

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
