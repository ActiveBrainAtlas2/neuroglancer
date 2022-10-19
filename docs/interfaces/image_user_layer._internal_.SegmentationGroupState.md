[neuroglancer](../README.md) / [Modules](../modules.md) / [image\_user\_layer](../modules/image_user_layer.md) / [<internal\>](../modules/image_user_layer._internal_.md) / SegmentationGroupState

# Interface: SegmentationGroupState

[image_user_layer](../modules/image_user_layer.md).[<internal>](../modules/image_user_layer._internal_.md).SegmentationGroupState

## Hierarchy

- [`VisibleSegmentsState`](image_user_layer._internal_.VisibleSegmentsState.md)

  ↳ **`SegmentationGroupState`**

## Implemented by

- [`SegmentationUserLayerGroupState`](../classes/segmentation_user_layer.SegmentationUserLayerGroupState.md)

## Table of contents

### Properties

- [maxIdLength](image_user_layer._internal_.SegmentationGroupState.md#maxidlength)
- [segmentEquivalences](image_user_layer._internal_.SegmentationGroupState.md#segmentequivalences)
- [segmentPropertyMap](image_user_layer._internal_.SegmentationGroupState.md#segmentpropertymap)
- [temporarySegmentEquivalences](image_user_layer._internal_.SegmentationGroupState.md#temporarysegmentequivalences)
- [temporaryVisibleSegments](image_user_layer._internal_.SegmentationGroupState.md#temporaryvisiblesegments)
- [useTemporarySegmentEquivalences](image_user_layer._internal_.SegmentationGroupState.md#usetemporarysegmentequivalences)
- [useTemporaryVisibleSegments](image_user_layer._internal_.SegmentationGroupState.md#usetemporaryvisiblesegments)
- [visibleSegments](image_user_layer._internal_.SegmentationGroupState.md#visiblesegments)

## Properties

### maxIdLength

• **maxIdLength**: [`WatchableValueInterface`](trackable_value.WatchableValueInterface.md)<`number`\>

Maximum length of base-10 representation of id seen.

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:139](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_display_state/frontend.ts#L139)

___

### segmentEquivalences

• **segmentEquivalences**: [`SharedDisjointUint64Sets`](../classes/shared_disjoint_sets.SharedDisjointUint64Sets.md)

#### Inherited from

[VisibleSegmentsState](image_user_layer._internal_.VisibleSegmentsState.md).[segmentEquivalences](image_user_layer._internal_.VisibleSegmentsState.md#segmentequivalences)

#### Defined in

[src/neuroglancer/segmentation_display_state/base.ts:25](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_display_state/base.ts#L25)

___

### segmentPropertyMap

• **segmentPropertyMap**: [`WatchableValueInterface`](trackable_value.WatchableValueInterface.md)<`undefined` \| [`PreprocessedSegmentPropertyMap`](../classes/image_user_layer._internal_.PreprocessedSegmentPropertyMap.md)\>

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:140](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_display_state/frontend.ts#L140)

___

### temporarySegmentEquivalences

• **temporarySegmentEquivalences**: [`SharedDisjointUint64Sets`](../classes/shared_disjoint_sets.SharedDisjointUint64Sets.md)

#### Inherited from

[VisibleSegmentsState](image_user_layer._internal_.VisibleSegmentsState.md).[temporarySegmentEquivalences](image_user_layer._internal_.VisibleSegmentsState.md#temporarysegmentequivalences)

#### Defined in

[src/neuroglancer/segmentation_display_state/base.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_display_state/base.ts#L30)

___

### temporaryVisibleSegments

• **temporaryVisibleSegments**: [`Uint64Set`](../classes/uint64_set.Uint64Set.md)

#### Inherited from

[VisibleSegmentsState](image_user_layer._internal_.VisibleSegmentsState.md).[temporaryVisibleSegments](image_user_layer._internal_.VisibleSegmentsState.md#temporaryvisiblesegments)

#### Defined in

[src/neuroglancer/segmentation_display_state/base.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_display_state/base.ts#L29)

___

### useTemporarySegmentEquivalences

• **useTemporarySegmentEquivalences**: [`SharedWatchableValue`](../classes/shared_watchable_value.SharedWatchableValue.md)<`boolean`\>

#### Inherited from

[VisibleSegmentsState](image_user_layer._internal_.VisibleSegmentsState.md).[useTemporarySegmentEquivalences](image_user_layer._internal_.VisibleSegmentsState.md#usetemporarysegmentequivalences)

#### Defined in

[src/neuroglancer/segmentation_display_state/base.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_display_state/base.ts#L32)

___

### useTemporaryVisibleSegments

• **useTemporaryVisibleSegments**: [`SharedWatchableValue`](../classes/shared_watchable_value.SharedWatchableValue.md)<`boolean`\>

#### Inherited from

[VisibleSegmentsState](image_user_layer._internal_.VisibleSegmentsState.md).[useTemporaryVisibleSegments](image_user_layer._internal_.VisibleSegmentsState.md#usetemporaryvisiblesegments)

#### Defined in

[src/neuroglancer/segmentation_display_state/base.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_display_state/base.ts#L31)

___

### visibleSegments

• **visibleSegments**: [`Uint64Set`](../classes/uint64_set.Uint64Set.md)

#### Inherited from

[VisibleSegmentsState](image_user_layer._internal_.VisibleSegmentsState.md).[visibleSegments](image_user_layer._internal_.VisibleSegmentsState.md#visiblesegments)

#### Defined in

[src/neuroglancer/segmentation_display_state/base.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_display_state/base.ts#L24)
