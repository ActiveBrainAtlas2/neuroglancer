[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/segmentation\_display\_state/frontend](../modules/neuroglancer_segmentation_display_state_frontend.md) / SegmentationGroupState

# Interface: SegmentationGroupState

[neuroglancer/segmentation_display_state/frontend](../modules/neuroglancer_segmentation_display_state_frontend.md).SegmentationGroupState

## Hierarchy

- [`VisibleSegmentsState`](neuroglancer_segmentation_display_state_base.VisibleSegmentsState.md)

  ↳ **`SegmentationGroupState`**

## Implemented by

- [`SegmentationUserLayerGroupState`](../classes/neuroglancer_segmentation_user_layer.SegmentationUserLayerGroupState.md)

## Table of contents

### Properties

- [maxIdLength](neuroglancer_segmentation_display_state_frontend.SegmentationGroupState.md#maxidlength)
- [segmentEquivalences](neuroglancer_segmentation_display_state_frontend.SegmentationGroupState.md#segmentequivalences)
- [segmentPropertyMap](neuroglancer_segmentation_display_state_frontend.SegmentationGroupState.md#segmentpropertymap)
- [temporarySegmentEquivalences](neuroglancer_segmentation_display_state_frontend.SegmentationGroupState.md#temporarysegmentequivalences)
- [temporaryVisibleSegments](neuroglancer_segmentation_display_state_frontend.SegmentationGroupState.md#temporaryvisiblesegments)
- [useTemporarySegmentEquivalences](neuroglancer_segmentation_display_state_frontend.SegmentationGroupState.md#usetemporarysegmentequivalences)
- [useTemporaryVisibleSegments](neuroglancer_segmentation_display_state_frontend.SegmentationGroupState.md#usetemporaryvisiblesegments)
- [visibleSegments](neuroglancer_segmentation_display_state_frontend.SegmentationGroupState.md#visiblesegments)

## Properties

### maxIdLength

• **maxIdLength**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`number`\>

Maximum length of base-10 representation of id seen.

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:139](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/frontend.ts#L139)

___

### segmentEquivalences

• **segmentEquivalences**: [`SharedDisjointUint64Sets`](../classes/neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md)

#### Inherited from

[VisibleSegmentsState](neuroglancer_segmentation_display_state_base.VisibleSegmentsState.md).[segmentEquivalences](neuroglancer_segmentation_display_state_base.VisibleSegmentsState.md#segmentequivalences)

#### Defined in

[src/neuroglancer/segmentation_display_state/base.ts:25](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/base.ts#L25)

___

### segmentPropertyMap

• **segmentPropertyMap**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<`undefined` \| [`PreprocessedSegmentPropertyMap`](../classes/neuroglancer_segmentation_display_state_property_map.PreprocessedSegmentPropertyMap.md)\>

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:140](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/frontend.ts#L140)

___

### temporarySegmentEquivalences

• **temporarySegmentEquivalences**: [`SharedDisjointUint64Sets`](../classes/neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md)

#### Inherited from

[VisibleSegmentsState](neuroglancer_segmentation_display_state_base.VisibleSegmentsState.md).[temporarySegmentEquivalences](neuroglancer_segmentation_display_state_base.VisibleSegmentsState.md#temporarysegmentequivalences)

#### Defined in

[src/neuroglancer/segmentation_display_state/base.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/base.ts#L30)

___

### temporaryVisibleSegments

• **temporaryVisibleSegments**: [`Uint64Set`](../classes/neuroglancer_uint64_set.Uint64Set.md)

#### Inherited from

[VisibleSegmentsState](neuroglancer_segmentation_display_state_base.VisibleSegmentsState.md).[temporaryVisibleSegments](neuroglancer_segmentation_display_state_base.VisibleSegmentsState.md#temporaryvisiblesegments)

#### Defined in

[src/neuroglancer/segmentation_display_state/base.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/base.ts#L29)

___

### useTemporarySegmentEquivalences

• **useTemporarySegmentEquivalences**: [`SharedWatchableValue`](../classes/neuroglancer_shared_watchable_value.SharedWatchableValue.md)<`boolean`\>

#### Inherited from

[VisibleSegmentsState](neuroglancer_segmentation_display_state_base.VisibleSegmentsState.md).[useTemporarySegmentEquivalences](neuroglancer_segmentation_display_state_base.VisibleSegmentsState.md#usetemporarysegmentequivalences)

#### Defined in

[src/neuroglancer/segmentation_display_state/base.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/base.ts#L32)

___

### useTemporaryVisibleSegments

• **useTemporaryVisibleSegments**: [`SharedWatchableValue`](../classes/neuroglancer_shared_watchable_value.SharedWatchableValue.md)<`boolean`\>

#### Inherited from

[VisibleSegmentsState](neuroglancer_segmentation_display_state_base.VisibleSegmentsState.md).[useTemporaryVisibleSegments](neuroglancer_segmentation_display_state_base.VisibleSegmentsState.md#usetemporaryvisiblesegments)

#### Defined in

[src/neuroglancer/segmentation_display_state/base.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/base.ts#L31)

___

### visibleSegments

• **visibleSegments**: [`Uint64Set`](../classes/neuroglancer_uint64_set.Uint64Set.md)

#### Inherited from

[VisibleSegmentsState](neuroglancer_segmentation_display_state_base.VisibleSegmentsState.md).[visibleSegments](neuroglancer_segmentation_display_state_base.VisibleSegmentsState.md#visiblesegments)

#### Defined in

[src/neuroglancer/segmentation_display_state/base.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_display_state/base.ts#L24)
