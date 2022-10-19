[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/segmentation\_user\_layer](../modules/neuroglancer_segmentation_user_layer.md) / [<internal\>](../modules/neuroglancer_segmentation_user_layer._internal_.md) / SegmentationUserLayerDisplayState

# Class: SegmentationUserLayerDisplayState

[neuroglancer/segmentation_user_layer](../modules/neuroglancer_segmentation_user_layer.md).[<internal>](../modules/neuroglancer_segmentation_user_layer._internal_.md).SegmentationUserLayerDisplayState

## Implements

- [`SegmentationDisplayState`](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#constructor)

### Properties

- [baseSegmentColoring](neuroglancer_segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#basesegmentcoloring)
- [filterBySegmentLabel](neuroglancer_segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#filterbysegmentlabel)
- [hideSegmentZero](neuroglancer_segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#hidesegmentzero)
- [ignoreNullVisibleSet](neuroglancer_segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#ignorenullvisibleset)
- [layer](neuroglancer_segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#layer)
- [linkedSegmentationColorGroup](neuroglancer_segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#linkedsegmentationcolorgroup)
- [linkedSegmentationGroup](neuroglancer_segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#linkedsegmentationgroup)
- [notSelectedAlpha](neuroglancer_segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#notselectedalpha)
- [objectAlpha](neuroglancer_segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#objectalpha)
- [originalSegmentationColorGroupState](neuroglancer_segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#originalsegmentationcolorgroupstate)
- [originalSegmentationGroupState](neuroglancer_segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#originalsegmentationgroupstate)
- [renderScaleHistogram](neuroglancer_segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#renderscalehistogram)
- [renderScaleTarget](neuroglancer_segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#renderscaletarget)
- [saturation](neuroglancer_segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#saturation)
- [segmentColorHash](neuroglancer_segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#segmentcolorhash)
- [segmentDefaultColor](neuroglancer_segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#segmentdefaultcolor)
- [segmentPropertyMap](neuroglancer_segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#segmentpropertymap)
- [segmentQuery](neuroglancer_segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#segmentquery)
- [segmentSelectionState](neuroglancer_segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#segmentselectionstate)
- [segmentStatedColors](neuroglancer_segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#segmentstatedcolors)
- [segmentationColorGroupState](neuroglancer_segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#segmentationcolorgroupstate)
- [segmentationGroupState](neuroglancer_segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#segmentationgroupstate)
- [selectSegment](neuroglancer_segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#selectsegment)
- [selectedAlpha](neuroglancer_segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#selectedalpha)
- [shaderError](neuroglancer_segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#shadererror)
- [silhouetteRendering](neuroglancer_segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#silhouetterendering)
- [skeletonRenderingOptions](neuroglancer_segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#skeletonrenderingoptions)
- [transparentPickEnabled](neuroglancer_segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#transparentpickenabled)

### Methods

- [moveToSegment](neuroglancer_segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#movetosegment)

## Constructors

### constructor

• **new SegmentationUserLayerDisplayState**(`layer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`SegmentationUserLayer`](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md) |

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:253](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L253)

## Properties

### baseSegmentColoring

• **baseSegmentColoring**: [`TrackableBoolean`](neuroglancer_trackable_boolean.TrackableBoolean.md)

#### Implementation of

[SegmentationDisplayState](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md).[baseSegmentColoring](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md#basesegmentcoloring)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:291](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L291)

___

### filterBySegmentLabel

• **filterBySegmentLabel**: (`id`: [`Uint64`](neuroglancer_util_uint64.Uint64.md)) => `void`

#### Type declaration

▸ (`id`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

##### Returns

`void`

#### Implementation of

[SegmentationDisplayState](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md).[filterBySegmentLabel](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md#filterbysegmentlabel)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:293](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L293)

___

### hideSegmentZero

• **hideSegmentZero**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`boolean`\>

#### Implementation of

[SegmentationDisplayState](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md).[hideSegmentZero](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md#hidesegmentzero)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:319](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L319)

___

### ignoreNullVisibleSet

• **ignoreNullVisibleSet**: [`TrackableBoolean`](neuroglancer_trackable_boolean.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:284](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L284)

___

### layer

• **layer**: [`SegmentationUserLayer`](neuroglancer_segmentation_user_layer.SegmentationUserLayer.md)

___

### linkedSegmentationColorGroup

• **linkedSegmentationColorGroup**: [`LinkedLayerGroup`](neuroglancer_layer.LinkedLayerGroup.md)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:304](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L304)

___

### linkedSegmentationGroup

• **linkedSegmentationGroup**: [`LinkedLayerGroup`](neuroglancer_layer.LinkedLayerGroup.md)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:299](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L299)

___

### notSelectedAlpha

• **notSelectedAlpha**: [`TrackableValue`](neuroglancer_trackable_value.TrackableValue.md)<`number`\>

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:281](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L281)

___

### objectAlpha

• **objectAlpha**: [`TrackableValue`](neuroglancer_trackable_value.TrackableValue.md)<`number`\>

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:283](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L283)

___

### originalSegmentationColorGroupState

• **originalSegmentationColorGroupState**: [`SegmentationUserLayerColorGroupState`](neuroglancer_segmentation_user_layer.SegmentationUserLayerColorGroupState.md)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:312](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L312)

___

### originalSegmentationGroupState

• **originalSegmentationGroupState**: [`SegmentationUserLayerGroupState`](neuroglancer_segmentation_user_layer.SegmentationUserLayerGroupState.md)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:309](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L309)

___

### renderScaleHistogram

• **renderScaleHistogram**: [`RenderScaleHistogram`](neuroglancer_render_scale_statistics.RenderScaleHistogram.md)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:287](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L287)

___

### renderScaleTarget

• **renderScaleTarget**: [`TrackableValue`](neuroglancer_trackable_value.TrackableValue.md)<`number`\>

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:288](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L288)

___

### saturation

• **saturation**: [`TrackableValue`](neuroglancer_trackable_value.TrackableValue.md)<`number`\>

#### Implementation of

[SegmentationDisplayState](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md).[saturation](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md#saturation)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:280](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L280)

___

### segmentColorHash

• **segmentColorHash**: [`TrackableValueInterface`](../interfaces/neuroglancer_trackable_value.TrackableValueInterface.md)<`number`\>

#### Implementation of

[SegmentationDisplayState](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md).[segmentColorHash](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md#segmentcolorhash)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:320](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L320)

___

### segmentDefaultColor

• **segmentDefaultColor**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`undefined` \| [`vec3`](neuroglancer_util_geom.vec3.md)\>

#### Implementation of

[SegmentationDisplayState](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md).[segmentDefaultColor](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md#segmentdefaultcolor)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:322](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L322)

___

### segmentPropertyMap

• **segmentPropertyMap**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`undefined` \| [`PreprocessedSegmentPropertyMap`](neuroglancer_segmentation_display_state_property_map.PreprocessedSegmentPropertyMap.md)\>

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:324](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L324)

___

### segmentQuery

• **segmentQuery**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`string`\>

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:323](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L323)

___

### segmentSelectionState

• **segmentSelectionState**: [`SegmentSelectionState`](neuroglancer_segmentation_display_state_frontend.SegmentSelectionState.md)

#### Implementation of

[SegmentationDisplayState](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md).[segmentSelectionState](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md#segmentselectionstate)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:278](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L278)

___

### segmentStatedColors

• **segmentStatedColors**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`Uint64Map`](neuroglancer_uint64_map.Uint64Map.md)\>

#### Implementation of

[SegmentationDisplayState](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md).[segmentStatedColors](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md#segmentstatedcolors)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:321](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L321)

___

### segmentationColorGroupState

• **segmentationColorGroupState**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`SegmentationUserLayerColorGroupState`](neuroglancer_segmentation_user_layer.SegmentationUserLayerColorGroupState.md)\>

#### Implementation of

[SegmentationDisplayState](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md).[segmentationColorGroupState](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md#segmentationcolorgroupstate)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:316](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L316)

___

### segmentationGroupState

• **segmentationGroupState**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<[`SegmentationUserLayerGroupState`](neuroglancer_segmentation_user_layer.SegmentationUserLayerGroupState.md)\>

#### Implementation of

[SegmentationDisplayState](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md).[segmentationGroupState](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md#segmentationgroupstate)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:315](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L315)

___

### selectSegment

• **selectSegment**: (`id`: [`Uint64`](neuroglancer_util_uint64.Uint64.md), `pin`: `boolean` \| ``"toggle"``) => `void`

#### Type declaration

▸ (`id`, `pin`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |
| `pin` | `boolean` \| ``"toggle"`` |

##### Returns

`void`

#### Implementation of

[SegmentationDisplayState](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md).[selectSegment](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md#selectsegment)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:289](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L289)

___

### selectedAlpha

• **selectedAlpha**: [`TrackableValue`](neuroglancer_trackable_value.TrackableValue.md)<`number`\>

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:279](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L279)

___

### shaderError

• **shaderError**: [`WatchableValue`](neuroglancer_trackable_value.WatchableValue.md)<`undefined` \| ``null`` \| [`ShaderCompilationError`](neuroglancer_webgl_shader.ShaderCompilationError.md) \| [`ShaderLinkError`](neuroglancer_webgl_shader.ShaderLinkError.md)\>

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:286](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L286)

___

### silhouetteRendering

• **silhouetteRendering**: [`TrackableValue`](neuroglancer_trackable_value.TrackableValue.md)<`number`\>

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:282](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L282)

___

### skeletonRenderingOptions

• **skeletonRenderingOptions**: [`SkeletonRenderingOptions`](neuroglancer_skeleton_frontend.SkeletonRenderingOptions.md)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:285](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L285)

___

### transparentPickEnabled

• **transparentPickEnabled**: [`TrackableBoolean`](neuroglancer_trackable_boolean.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:290](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L290)

## Methods

### moveToSegment

▸ **moveToSegment**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

`void`

#### Implementation of

[SegmentationDisplayState](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md).[moveToSegment](../interfaces/neuroglancer_segmentation_display_state_frontend.SegmentationDisplayState.md#movetosegment)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:295](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_user_layer.ts#L295)
