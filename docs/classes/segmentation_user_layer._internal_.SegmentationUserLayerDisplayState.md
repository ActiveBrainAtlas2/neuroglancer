[neuroglancer](../README.md) / [Modules](../modules.md) / [segmentation\_user\_layer](../modules/segmentation_user_layer.md) / [<internal\>](../modules/segmentation_user_layer._internal_.md) / SegmentationUserLayerDisplayState

# Class: SegmentationUserLayerDisplayState

[segmentation_user_layer](../modules/segmentation_user_layer.md).[<internal>](../modules/segmentation_user_layer._internal_.md).SegmentationUserLayerDisplayState

## Implements

- [`SegmentationDisplayState`](../interfaces/image_user_layer._internal_.SegmentationDisplayState.md)

## Table of contents

### Constructors

- [constructor](segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#constructor)

### Properties

- [baseSegmentColoring](segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#basesegmentcoloring)
- [filterBySegmentLabel](segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#filterbysegmentlabel)
- [hideSegmentZero](segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#hidesegmentzero)
- [ignoreNullVisibleSet](segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#ignorenullvisibleset)
- [layer](segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#layer)
- [linkedSegmentationColorGroup](segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#linkedsegmentationcolorgroup)
- [linkedSegmentationGroup](segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#linkedsegmentationgroup)
- [notSelectedAlpha](segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#notselectedalpha)
- [objectAlpha](segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#objectalpha)
- [originalSegmentationColorGroupState](segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#originalsegmentationcolorgroupstate)
- [originalSegmentationGroupState](segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#originalsegmentationgroupstate)
- [renderScaleHistogram](segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#renderscalehistogram)
- [renderScaleTarget](segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#renderscaletarget)
- [saturation](segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#saturation)
- [segmentColorHash](segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#segmentcolorhash)
- [segmentDefaultColor](segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#segmentdefaultcolor)
- [segmentPropertyMap](segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#segmentpropertymap)
- [segmentQuery](segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#segmentquery)
- [segmentSelectionState](segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#segmentselectionstate)
- [segmentStatedColors](segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#segmentstatedcolors)
- [segmentationColorGroupState](segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#segmentationcolorgroupstate)
- [segmentationGroupState](segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#segmentationgroupstate)
- [selectSegment](segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#selectsegment)
- [selectedAlpha](segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#selectedalpha)
- [shaderError](segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#shadererror)
- [silhouetteRendering](segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#silhouetterendering)
- [skeletonRenderingOptions](segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#skeletonrenderingoptions)
- [transparentPickEnabled](segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#transparentpickenabled)

### Methods

- [moveToSegment](segmentation_user_layer._internal_.SegmentationUserLayerDisplayState.md#movetosegment)

## Constructors

### constructor

• **new SegmentationUserLayerDisplayState**(`layer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`SegmentationUserLayer`](segmentation_user_layer.SegmentationUserLayer.md) |

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:253](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L253)

## Properties

### baseSegmentColoring

• **baseSegmentColoring**: [`TrackableBoolean`](trackable_boolean.TrackableBoolean.md)

#### Implementation of

[SegmentationDisplayState](../interfaces/image_user_layer._internal_.SegmentationDisplayState.md).[baseSegmentColoring](../interfaces/image_user_layer._internal_.SegmentationDisplayState.md#basesegmentcoloring)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:291](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L291)

___

### filterBySegmentLabel

• **filterBySegmentLabel**: (`id`: [`Uint64`](data_panel_layout._internal_.Uint64.md)) => `void`

#### Type declaration

▸ (`id`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`Uint64`](data_panel_layout._internal_.Uint64.md) |

##### Returns

`void`

#### Implementation of

[SegmentationDisplayState](../interfaces/image_user_layer._internal_.SegmentationDisplayState.md).[filterBySegmentLabel](../interfaces/image_user_layer._internal_.SegmentationDisplayState.md#filterbysegmentlabel)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:293](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L293)

___

### hideSegmentZero

• **hideSegmentZero**: [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<`boolean`\>

#### Implementation of

[SegmentationDisplayState](../interfaces/image_user_layer._internal_.SegmentationDisplayState.md).[hideSegmentZero](../interfaces/image_user_layer._internal_.SegmentationDisplayState.md#hidesegmentzero)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:319](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L319)

___

### ignoreNullVisibleSet

• **ignoreNullVisibleSet**: [`TrackableBoolean`](trackable_boolean.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:284](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L284)

___

### layer

• **layer**: [`SegmentationUserLayer`](segmentation_user_layer.SegmentationUserLayer.md)

___

### linkedSegmentationColorGroup

• **linkedSegmentationColorGroup**: [`LinkedLayerGroup`](layer.LinkedLayerGroup.md)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:304](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L304)

___

### linkedSegmentationGroup

• **linkedSegmentationGroup**: [`LinkedLayerGroup`](layer.LinkedLayerGroup.md)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:299](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L299)

___

### notSelectedAlpha

• **notSelectedAlpha**: [`TrackableValue`](trackable_value.TrackableValue.md)<`number`\>

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:281](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L281)

___

### objectAlpha

• **objectAlpha**: [`TrackableValue`](trackable_value.TrackableValue.md)<`number`\>

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:283](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L283)

___

### originalSegmentationColorGroupState

• **originalSegmentationColorGroupState**: [`SegmentationUserLayerColorGroupState`](segmentation_user_layer.SegmentationUserLayerColorGroupState.md)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:312](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L312)

___

### originalSegmentationGroupState

• **originalSegmentationGroupState**: [`SegmentationUserLayerGroupState`](segmentation_user_layer.SegmentationUserLayerGroupState.md)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:309](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L309)

___

### renderScaleHistogram

• **renderScaleHistogram**: [`RenderScaleHistogram`](render_scale_statistics.RenderScaleHistogram.md)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:287](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L287)

___

### renderScaleTarget

• **renderScaleTarget**: [`TrackableValue`](trackable_value.TrackableValue.md)<`number`\>

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:288](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L288)

___

### saturation

• **saturation**: [`TrackableValue`](trackable_value.TrackableValue.md)<`number`\>

#### Implementation of

[SegmentationDisplayState](../interfaces/image_user_layer._internal_.SegmentationDisplayState.md).[saturation](../interfaces/image_user_layer._internal_.SegmentationDisplayState.md#saturation)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:280](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L280)

___

### segmentColorHash

• **segmentColorHash**: [`TrackableValueInterface`](../interfaces/trackable_value.TrackableValueInterface.md)<`number`\>

#### Implementation of

[SegmentationDisplayState](../interfaces/image_user_layer._internal_.SegmentationDisplayState.md).[segmentColorHash](../interfaces/image_user_layer._internal_.SegmentationDisplayState.md#segmentcolorhash)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:320](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L320)

___

### segmentDefaultColor

• **segmentDefaultColor**: [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<`undefined` \| [`vec3`](axes_lines._internal_.vec3.md)\>

#### Implementation of

[SegmentationDisplayState](../interfaces/image_user_layer._internal_.SegmentationDisplayState.md).[segmentDefaultColor](../interfaces/image_user_layer._internal_.SegmentationDisplayState.md#segmentdefaultcolor)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:322](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L322)

___

### segmentPropertyMap

• **segmentPropertyMap**: [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<`undefined` \| [`PreprocessedSegmentPropertyMap`](image_user_layer._internal_.PreprocessedSegmentPropertyMap.md)\>

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:324](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L324)

___

### segmentQuery

• **segmentQuery**: [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<`string`\>

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:323](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L323)

___

### segmentSelectionState

• **segmentSelectionState**: [`SegmentSelectionState`](image_user_layer._internal_.SegmentSelectionState.md)

#### Implementation of

[SegmentationDisplayState](../interfaces/image_user_layer._internal_.SegmentationDisplayState.md).[segmentSelectionState](../interfaces/image_user_layer._internal_.SegmentationDisplayState.md#segmentselectionstate)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:278](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L278)

___

### segmentStatedColors

• **segmentStatedColors**: [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<[`Uint64Map`](uint64_map.Uint64Map.md)\>

#### Implementation of

[SegmentationDisplayState](../interfaces/image_user_layer._internal_.SegmentationDisplayState.md).[segmentStatedColors](../interfaces/image_user_layer._internal_.SegmentationDisplayState.md#segmentstatedcolors)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:321](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L321)

___

### segmentationColorGroupState

• **segmentationColorGroupState**: [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<[`SegmentationUserLayerColorGroupState`](segmentation_user_layer.SegmentationUserLayerColorGroupState.md)\>

#### Implementation of

[SegmentationDisplayState](../interfaces/image_user_layer._internal_.SegmentationDisplayState.md).[segmentationColorGroupState](../interfaces/image_user_layer._internal_.SegmentationDisplayState.md#segmentationcolorgroupstate)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:316](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L316)

___

### segmentationGroupState

• **segmentationGroupState**: [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<[`SegmentationUserLayerGroupState`](segmentation_user_layer.SegmentationUserLayerGroupState.md)\>

#### Implementation of

[SegmentationDisplayState](../interfaces/image_user_layer._internal_.SegmentationDisplayState.md).[segmentationGroupState](../interfaces/image_user_layer._internal_.SegmentationDisplayState.md#segmentationgroupstate)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:315](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L315)

___

### selectSegment

• **selectSegment**: (`id`: [`Uint64`](data_panel_layout._internal_.Uint64.md), `pin`: `boolean` \| ``"toggle"``) => `void`

#### Type declaration

▸ (`id`, `pin`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`Uint64`](data_panel_layout._internal_.Uint64.md) |
| `pin` | `boolean` \| ``"toggle"`` |

##### Returns

`void`

#### Implementation of

[SegmentationDisplayState](../interfaces/image_user_layer._internal_.SegmentationDisplayState.md).[selectSegment](../interfaces/image_user_layer._internal_.SegmentationDisplayState.md#selectsegment)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:289](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L289)

___

### selectedAlpha

• **selectedAlpha**: [`TrackableValue`](trackable_value.TrackableValue.md)<`number`\>

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:279](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L279)

___

### shaderError

• **shaderError**: [`WatchableValue`](trackable_value.WatchableValue.md)<`undefined` \| ``null`` \| [`ShaderCompilationError`](image_user_layer._internal_.ShaderCompilationError.md) \| [`ShaderLinkError`](image_user_layer._internal_.ShaderLinkError.md)\>

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:286](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L286)

___

### silhouetteRendering

• **silhouetteRendering**: [`TrackableValue`](trackable_value.TrackableValue.md)<`number`\>

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:282](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L282)

___

### skeletonRenderingOptions

• **skeletonRenderingOptions**: [`SkeletonRenderingOptions`](segmentation_user_layer._internal_.SkeletonRenderingOptions.md)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:285](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L285)

___

### transparentPickEnabled

• **transparentPickEnabled**: [`TrackableBoolean`](trackable_boolean.TrackableBoolean.md)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:290](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L290)

## Methods

### moveToSegment

▸ **moveToSegment**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`Uint64`](data_panel_layout._internal_.Uint64.md) |

#### Returns

`void`

#### Implementation of

[SegmentationDisplayState](../interfaces/image_user_layer._internal_.SegmentationDisplayState.md).[moveToSegment](../interfaces/image_user_layer._internal_.SegmentationDisplayState.md#movetosegment)

#### Defined in

[src/neuroglancer/segmentation_user_layer.ts:295](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_user_layer.ts#L295)
