[neuroglancer](../README.md) / [Modules](../modules.md) / [image\_user\_layer](../modules/image_user_layer.md) / [<internal\>](../modules/image_user_layer._internal_.md) / VisibleSegmentsState

# Interface: VisibleSegmentsState

[image_user_layer](../modules/image_user_layer.md).[<internal>](../modules/image_user_layer._internal_.md).VisibleSegmentsState

## Hierarchy

- **`VisibleSegmentsState`**

  ↳ [`SegmentationGroupState`](image_user_layer._internal_.SegmentationGroupState.md)

## Table of contents

### Properties

- [segmentEquivalences](image_user_layer._internal_.VisibleSegmentsState.md#segmentequivalences)
- [temporarySegmentEquivalences](image_user_layer._internal_.VisibleSegmentsState.md#temporarysegmentequivalences)
- [temporaryVisibleSegments](image_user_layer._internal_.VisibleSegmentsState.md#temporaryvisiblesegments)
- [useTemporarySegmentEquivalences](image_user_layer._internal_.VisibleSegmentsState.md#usetemporarysegmentequivalences)
- [useTemporaryVisibleSegments](image_user_layer._internal_.VisibleSegmentsState.md#usetemporaryvisiblesegments)
- [visibleSegments](image_user_layer._internal_.VisibleSegmentsState.md#visiblesegments)

## Properties

### segmentEquivalences

• **segmentEquivalences**: [`SharedDisjointUint64Sets`](../classes/shared_disjoint_sets.SharedDisjointUint64Sets.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/base.ts:25](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_display_state/base.ts#L25)

___

### temporarySegmentEquivalences

• **temporarySegmentEquivalences**: [`SharedDisjointUint64Sets`](../classes/shared_disjoint_sets.SharedDisjointUint64Sets.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/base.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_display_state/base.ts#L30)

___

### temporaryVisibleSegments

• **temporaryVisibleSegments**: [`Uint64Set`](../classes/uint64_set.Uint64Set.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/base.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_display_state/base.ts#L29)

___

### useTemporarySegmentEquivalences

• **useTemporarySegmentEquivalences**: [`SharedWatchableValue`](../classes/shared_watchable_value.SharedWatchableValue.md)<`boolean`\>

#### Defined in

[src/neuroglancer/segmentation_display_state/base.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_display_state/base.ts#L32)

___

### useTemporaryVisibleSegments

• **useTemporaryVisibleSegments**: [`SharedWatchableValue`](../classes/shared_watchable_value.SharedWatchableValue.md)<`boolean`\>

#### Defined in

[src/neuroglancer/segmentation_display_state/base.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_display_state/base.ts#L31)

___

### visibleSegments

• **visibleSegments**: [`Uint64Set`](../classes/uint64_set.Uint64Set.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/base.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_display_state/base.ts#L24)
