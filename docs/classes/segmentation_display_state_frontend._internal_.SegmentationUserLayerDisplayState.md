[neuroglancer](../README.md) / [Modules](../modules.md) / [segmentation\_display\_state/frontend](../modules/segmentation_display_state_frontend.md) / [<internal\>](../modules/segmentation_display_state_frontend._internal_.md) / SegmentationUserLayerDisplayState

# Class: SegmentationUserLayerDisplayState

[segmentation_display_state/frontend](../modules/segmentation_display_state_frontend.md).[<internal>](../modules/segmentation_display_state_frontend._internal_.md).SegmentationUserLayerDisplayState

## Implements

- [`SegmentationDisplayState`](../interfaces/segmentation_display_state_frontend.SegmentationDisplayState.md)

## Table of contents

### Constructors

- [constructor](segmentation_display_state_frontend._internal_.SegmentationUserLayerDisplayState.md#constructor)

### Properties

- [baseSegmentColoring](segmentation_display_state_frontend._internal_.SegmentationUserLayerDisplayState.md#basesegmentcoloring)
- [filterBySegmentLabel](segmentation_display_state_frontend._internal_.SegmentationUserLayerDisplayState.md#filterbysegmentlabel)
- [hideSegmentZero](segmentation_display_state_frontend._internal_.SegmentationUserLayerDisplayState.md#hidesegmentzero)
- [ignoreNullVisibleSet](segmentation_display_state_frontend._internal_.SegmentationUserLayerDisplayState.md#ignorenullvisibleset)
- [layer](segmentation_display_state_frontend._internal_.SegmentationUserLayerDisplayState.md#layer)
- [linkedSegmentationColorGroup](segmentation_display_state_frontend._internal_.SegmentationUserLayerDisplayState.md#linkedsegmentationcolorgroup)
- [linkedSegmentationGroup](segmentation_display_state_frontend._internal_.SegmentationUserLayerDisplayState.md#linkedsegmentationgroup)
- [notSelectedAlpha](segmentation_display_state_frontend._internal_.SegmentationUserLayerDisplayState.md#notselectedalpha)
- [objectAlpha](segmentation_display_state_frontend._internal_.SegmentationUserLayerDisplayState.md#objectalpha)
- [originalSegmentationColorGroupState](segmentation_display_state_frontend._internal_.SegmentationUserLayerDisplayState.md#originalsegmentationcolorgroupstate)
- [originalSegmentationGroupState](segmentation_display_state_frontend._internal_.SegmentationUserLayerDisplayState.md#originalsegmentationgroupstate)
- [renderScaleHistogram](segmentation_display_state_frontend._internal_.SegmentationUserLayerDisplayState.md#renderscalehistogram)
- [renderScaleTarget](segmentation_display_state_frontend._internal_.SegmentationUserLayerDisplayState.md#renderscaletarget)
- [saturation](segmentation_display_state_frontend._internal_.SegmentationUserLayerDisplayState.md#saturation)
- [segmentColorHash](segmentation_display_state_frontend._internal_.SegmentationUserLayerDisplayState.md#segmentcolorhash)
- [segmentDefaultColor](segmentation_display_state_frontend._internal_.SegmentationUserLayerDisplayState.md#segmentdefaultcolor)
- [segmentPropertyMap](segmentation_display_state_frontend._internal_.SegmentationUserLayerDisplayState.md#segmentpropertymap)
- [segmentQuery](segmentation_display_state_frontend._internal_.SegmentationUserLayerDisplayState.md#segmentquery)
- [segmentSelectionState](segmentation_display_state_frontend._internal_.SegmentationUserLayerDisplayState.md#segmentselectionstate)
- [segmentStatedColors](segmentation_display_state_frontend._internal_.SegmentationUserLayerDisplayState.md#segmentstatedcolors)
- [segmentationColorGroupState](segmentation_display_state_frontend._internal_.SegmentationUserLayerDisplayState.md#segmentationcolorgroupstate)
- [segmentationGroupState](segmentation_display_state_frontend._internal_.SegmentationUserLayerDisplayState.md#segmentationgroupstate)
- [selectSegment](segmentation_display_state_frontend._internal_.SegmentationUserLayerDisplayState.md#selectsegment)
- [selectedAlpha](segmentation_display_state_frontend._internal_.SegmentationUserLayerDisplayState.md#selectedalpha)
- [shaderError](segmentation_display_state_frontend._internal_.SegmentationUserLayerDisplayState.md#shadererror)
- [silhouetteRendering](segmentation_display_state_frontend._internal_.SegmentationUserLayerDisplayState.md#silhouetterendering)
- [skeletonRenderingOptions](segmentation_display_state_frontend._internal_.SegmentationUserLayerDisplayState.md#skeletonrenderingoptions)
- [transparentPickEnabled](segmentation_display_state_frontend._internal_.SegmentationUserLayerDisplayState.md#transparentpickenabled)

### Methods

- [moveToSegment](segmentation_display_state_frontend._internal_.SegmentationUserLayerDisplayState.md#movetosegment)

## Constructors

### constructor

• **new SegmentationUserLayerDisplayState**(`layer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`SegmentationUserLayer`](segmentation_display_state_frontend._internal_.SegmentationUserLayer.md) |

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:253](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L253)

## Properties

### baseSegmentColoring

• **baseSegmentColoring**: [`TrackableBoolean`](annotation_annotation_layer_state._internal_.TrackableBoolean.md)

#### Implementation of

[SegmentationDisplayState](../interfaces/segmentation_display_state_frontend.SegmentationDisplayState.md).[baseSegmentColoring](../interfaces/segmentation_display_state_frontend.SegmentationDisplayState.md#basesegmentcoloring)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:291](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L291)

___

### filterBySegmentLabel

• **filterBySegmentLabel**: (`id`: [`Uint64`](util_uint64.Uint64.md)) => `void`

#### Type declaration

▸ (`id`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`Uint64`](util_uint64.Uint64.md) |

##### Returns

`void`

#### Implementation of

[SegmentationDisplayState](../interfaces/segmentation_display_state_frontend.SegmentationDisplayState.md).[filterBySegmentLabel](../interfaces/segmentation_display_state_frontend.SegmentationDisplayState.md#filterbysegmentlabel)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:293](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L293)

___

### hideSegmentZero

• **hideSegmentZero**: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`boolean`\>

#### Implementation of

[SegmentationDisplayState](../interfaces/segmentation_display_state_frontend.SegmentationDisplayState.md).[hideSegmentZero](../interfaces/segmentation_display_state_frontend.SegmentationDisplayState.md#hidesegmentzero)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:319](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L319)

___

### ignoreNullVisibleSet

• **ignoreNullVisibleSet**: [`TrackableBoolean`](annotation_annotation_layer_state._internal_.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:284](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L284)

___

### layer

• **layer**: [`SegmentationUserLayer`](segmentation_display_state_frontend._internal_.SegmentationUserLayer.md)

___

### linkedSegmentationColorGroup

• **linkedSegmentationColorGroup**: [`LinkedLayerGroup`](segmentation_display_state_frontend._internal_.LinkedLayerGroup.md)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:304](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L304)

___

### linkedSegmentationGroup

• **linkedSegmentationGroup**: [`LinkedLayerGroup`](segmentation_display_state_frontend._internal_.LinkedLayerGroup.md)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:299](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L299)

___

### notSelectedAlpha

• **notSelectedAlpha**: [`TrackableValue`](annotation_annotation_layer_state._internal_.TrackableValue.md)<`number`\>

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:281](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L281)

___

### objectAlpha

• **objectAlpha**: [`TrackableValue`](annotation_annotation_layer_state._internal_.TrackableValue.md)<`number`\>

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:283](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L283)

___

### originalSegmentationColorGroupState

• **originalSegmentationColorGroupState**: [`SegmentationUserLayerColorGroupState`](segmentation_display_state_frontend._internal_.SegmentationUserLayerColorGroupState.md)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:312](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L312)

___

### originalSegmentationGroupState

• **originalSegmentationGroupState**: [`SegmentationUserLayerGroupState`](segmentation_display_state_frontend._internal_.SegmentationUserLayerGroupState.md)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:309](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L309)

___

### renderScaleHistogram

• **renderScaleHistogram**: [`RenderScaleHistogram`](annotation_renderlayer._internal_.RenderScaleHistogram.md)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:287](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L287)

___

### renderScaleTarget

• **renderScaleTarget**: [`TrackableValue`](annotation_annotation_layer_state._internal_.TrackableValue.md)<`number`\>

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:288](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L288)

___

### saturation

• **saturation**: [`TrackableValue`](annotation_annotation_layer_state._internal_.TrackableValue.md)<`number`\>

#### Implementation of

[SegmentationDisplayState](../interfaces/segmentation_display_state_frontend.SegmentationDisplayState.md).[saturation](../interfaces/segmentation_display_state_frontend.SegmentationDisplayState.md#saturation)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:280](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L280)

___

### segmentColorHash

• **segmentColorHash**: [`TrackableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.TrackableValueInterface.md)<`number`\>

#### Implementation of

[SegmentationDisplayState](../interfaces/segmentation_display_state_frontend.SegmentationDisplayState.md).[segmentColorHash](../interfaces/segmentation_display_state_frontend.SegmentationDisplayState.md#segmentcolorhash)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:320](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L320)

___

### segmentDefaultColor

• **segmentDefaultColor**: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`undefined` \| [`vec3`](util_geom.vec3.md)\>

#### Implementation of

[SegmentationDisplayState](../interfaces/segmentation_display_state_frontend.SegmentationDisplayState.md).[segmentDefaultColor](../interfaces/segmentation_display_state_frontend.SegmentationDisplayState.md#segmentdefaultcolor)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:322](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L322)

___

### segmentPropertyMap

• **segmentPropertyMap**: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`undefined` \| [`PreprocessedSegmentPropertyMap`](segmentation_display_state_property_map.PreprocessedSegmentPropertyMap.md)\>

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:324](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L324)

___

### segmentQuery

• **segmentQuery**: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`string`\>

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:323](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L323)

___

### segmentSelectionState

• **segmentSelectionState**: [`SegmentSelectionState`](segmentation_display_state_frontend.SegmentSelectionState.md)

#### Implementation of

[SegmentationDisplayState](../interfaces/segmentation_display_state_frontend.SegmentationDisplayState.md).[segmentSelectionState](../interfaces/segmentation_display_state_frontend.SegmentationDisplayState.md#segmentselectionstate)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:278](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L278)

___

### segmentStatedColors

• **segmentStatedColors**: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`Uint64Map`](mesh_frontend._internal_.Uint64Map.md)\>

#### Implementation of

[SegmentationDisplayState](../interfaces/segmentation_display_state_frontend.SegmentationDisplayState.md).[segmentStatedColors](../interfaces/segmentation_display_state_frontend.SegmentationDisplayState.md#segmentstatedcolors)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:321](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L321)

___

### segmentationColorGroupState

• **segmentationColorGroupState**: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`SegmentationUserLayerColorGroupState`](segmentation_display_state_frontend._internal_.SegmentationUserLayerColorGroupState.md)\>

#### Implementation of

[SegmentationDisplayState](../interfaces/segmentation_display_state_frontend.SegmentationDisplayState.md).[segmentationColorGroupState](../interfaces/segmentation_display_state_frontend.SegmentationDisplayState.md#segmentationcolorgroupstate)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:316](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L316)

___

### segmentationGroupState

• **segmentationGroupState**: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`SegmentationUserLayerGroupState`](segmentation_display_state_frontend._internal_.SegmentationUserLayerGroupState.md)\>

#### Implementation of

[SegmentationDisplayState](../interfaces/segmentation_display_state_frontend.SegmentationDisplayState.md).[segmentationGroupState](../interfaces/segmentation_display_state_frontend.SegmentationDisplayState.md#segmentationgroupstate)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:315](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L315)

___

### selectSegment

• **selectSegment**: (`id`: [`Uint64`](util_uint64.Uint64.md), `pin`: `boolean` \| ``"toggle"``) => `void`

#### Type declaration

▸ (`id`, `pin`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`Uint64`](util_uint64.Uint64.md) |
| `pin` | `boolean` \| ``"toggle"`` |

##### Returns

`void`

#### Implementation of

[SegmentationDisplayState](../interfaces/segmentation_display_state_frontend.SegmentationDisplayState.md).[selectSegment](../interfaces/segmentation_display_state_frontend.SegmentationDisplayState.md#selectsegment)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:289](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L289)

___

### selectedAlpha

• **selectedAlpha**: [`TrackableValue`](annotation_annotation_layer_state._internal_.TrackableValue.md)<`number`\>

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:279](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L279)

___

### shaderError

• **shaderError**: [`WatchableValue`](annotation_annotation_layer_state._internal_.WatchableValue.md)<`undefined` \| ``null`` \| [`ShaderCompilationError`](webgl_shader.ShaderCompilationError.md) \| [`ShaderLinkError`](webgl_shader.ShaderLinkError.md)\>

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:286](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L286)

___

### silhouetteRendering

• **silhouetteRendering**: [`TrackableValue`](annotation_annotation_layer_state._internal_.TrackableValue.md)<`number`\>

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:282](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L282)

___

### skeletonRenderingOptions

• **skeletonRenderingOptions**: [`SkeletonRenderingOptions`](skeleton_frontend.SkeletonRenderingOptions.md)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:285](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L285)

___

### transparentPickEnabled

• **transparentPickEnabled**: [`TrackableBoolean`](annotation_annotation_layer_state._internal_.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:290](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L290)

## Methods

### moveToSegment

▸ **moveToSegment**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`Uint64`](util_uint64.Uint64.md) |

#### Returns

`void`

#### Implementation of

[SegmentationDisplayState](../interfaces/segmentation_display_state_frontend.SegmentationDisplayState.md).[moveToSegment](../interfaces/segmentation_display_state_frontend.SegmentationDisplayState.md#movetosegment)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:295](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_user_layer.ts#L295)
