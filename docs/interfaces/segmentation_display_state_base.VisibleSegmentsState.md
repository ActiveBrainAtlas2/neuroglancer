[neuroglancer](../README.md) / [Modules](../modules.md) / [segmentation\_display\_state/base](../modules/segmentation_display_state_base.md) / VisibleSegmentsState

# Interface: VisibleSegmentsState

[segmentation_display_state/base](../modules/segmentation_display_state_base.md).VisibleSegmentsState

## Hierarchy

- **`VisibleSegmentsState`**

  ↳ [`SegmentationGroupState`](segmentation_display_state_frontend.SegmentationGroupState.md)

## Table of contents

### Properties

- [segmentEquivalences](segmentation_display_state_base.VisibleSegmentsState.md#segmentequivalences)
- [temporarySegmentEquivalences](segmentation_display_state_base.VisibleSegmentsState.md#temporarysegmentequivalences)
- [temporaryVisibleSegments](segmentation_display_state_base.VisibleSegmentsState.md#temporaryvisiblesegments)
- [useTemporarySegmentEquivalences](segmentation_display_state_base.VisibleSegmentsState.md#usetemporarysegmentequivalences)
- [useTemporaryVisibleSegments](segmentation_display_state_base.VisibleSegmentsState.md#usetemporaryvisiblesegments)
- [visibleSegments](segmentation_display_state_base.VisibleSegmentsState.md#visiblesegments)

## Properties

### segmentEquivalences

• **segmentEquivalences**: [`SharedDisjointUint64Sets`](../classes/mesh_backend._internal_.SharedDisjointUint64Sets.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/base.ts:25](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/base.ts#L25)

___

### temporarySegmentEquivalences

• **temporarySegmentEquivalences**: [`SharedDisjointUint64Sets`](../classes/mesh_backend._internal_.SharedDisjointUint64Sets.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/base.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/base.ts#L30)

___

### temporaryVisibleSegments

• **temporaryVisibleSegments**: [`Uint64Set`](../classes/mesh_backend._internal_.Uint64Set.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/base.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/base.ts#L29)

___

### useTemporarySegmentEquivalences

• **useTemporarySegmentEquivalences**: [`SharedWatchableValue`](../classes/chunk_manager_backend._internal_.SharedWatchableValue.md)<`boolean`\>

#### Defined in

[src/neuroglancer/segmentation_display_state/base.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/base.ts#L32)

___

### useTemporaryVisibleSegments

• **useTemporaryVisibleSegments**: [`SharedWatchableValue`](../classes/chunk_manager_backend._internal_.SharedWatchableValue.md)<`boolean`\>

#### Defined in

[src/neuroglancer/segmentation_display_state/base.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/base.ts#L31)

___

### visibleSegments

• **visibleSegments**: [`Uint64Set`](../classes/mesh_backend._internal_.Uint64Set.md)

#### Defined in

[src/neuroglancer/segmentation_display_state/base.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/base.ts#L24)
