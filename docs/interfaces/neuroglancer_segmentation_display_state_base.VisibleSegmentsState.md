[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/segmentation\_display\_state/base](../modules/neuroglancer_segmentation_display_state_base.md) / VisibleSegmentsState

# Interface: VisibleSegmentsState

[neuroglancer/segmentation_display_state/base](../modules/neuroglancer_segmentation_display_state_base.md).VisibleSegmentsState

## Hierarchy

- **`VisibleSegmentsState`**

  ↳ [`SegmentationGroupState`](neuroglancer_segmentation_display_state_frontend.SegmentationGroupState.md)

## Table of contents

### Properties

- [segmentEquivalences](neuroglancer_segmentation_display_state_base.VisibleSegmentsState.md#segmentequivalences)
- [temporarySegmentEquivalences](neuroglancer_segmentation_display_state_base.VisibleSegmentsState.md#temporarysegmentequivalences)
- [temporaryVisibleSegments](neuroglancer_segmentation_display_state_base.VisibleSegmentsState.md#temporaryvisiblesegments)
- [useTemporarySegmentEquivalences](neuroglancer_segmentation_display_state_base.VisibleSegmentsState.md#usetemporarysegmentequivalences)
- [useTemporaryVisibleSegments](neuroglancer_segmentation_display_state_base.VisibleSegmentsState.md#usetemporaryvisiblesegments)
- [visibleSegments](neuroglancer_segmentation_display_state_base.VisibleSegmentsState.md#visiblesegments)

## Properties

### segmentEquivalences

• **segmentEquivalences**: [`SharedDisjointUint64Sets`](../classes/neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/base.ts:25](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/base.ts#L25)

___

### temporarySegmentEquivalences

• **temporarySegmentEquivalences**: [`SharedDisjointUint64Sets`](../classes/neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/base.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/base.ts#L30)

___

### temporaryVisibleSegments

• **temporaryVisibleSegments**: [`Uint64Set`](../classes/neuroglancer_uint64_set.Uint64Set.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/base.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/base.ts#L29)

___

### useTemporarySegmentEquivalences

• **useTemporarySegmentEquivalences**: [`SharedWatchableValue`](../classes/neuroglancer_shared_watchable_value.SharedWatchableValue.md)<`boolean`\>

#### Defined in

[src/neuroglancer/segmentation_display_state/base.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/base.ts#L32)

___

### useTemporaryVisibleSegments

• **useTemporaryVisibleSegments**: [`SharedWatchableValue`](../classes/neuroglancer_shared_watchable_value.SharedWatchableValue.md)<`boolean`\>

#### Defined in

[src/neuroglancer/segmentation_display_state/base.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/base.ts#L31)

___

### visibleSegments

• **visibleSegments**: [`Uint64Set`](../classes/neuroglancer_uint64_set.Uint64Set.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/base.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/base.ts#L24)
