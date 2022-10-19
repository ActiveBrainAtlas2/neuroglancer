[neuroglancer](../README.md) / [Modules](../modules.md) / [segmentation\_display\_state/frontend](../modules/segmentation_display_state_frontend.md) / SegmentationGroupState

# Interface: SegmentationGroupState

[segmentation_display_state/frontend](../modules/segmentation_display_state_frontend.md).SegmentationGroupState

## Hierarchy

- [`VisibleSegmentsState`](segmentation_display_state_base.VisibleSegmentsState.md)

  ↳ **`SegmentationGroupState`**

## Implemented by

- [`SegmentationUserLayerGroupState`](../classes/segmentation_display_state_frontend._internal_.SegmentationUserLayerGroupState.md)

## Table of contents

### Properties

- [maxIdLength](segmentation_display_state_frontend.SegmentationGroupState.md#maxidlength)
- [segmentEquivalences](segmentation_display_state_frontend.SegmentationGroupState.md#segmentequivalences)
- [segmentPropertyMap](segmentation_display_state_frontend.SegmentationGroupState.md#segmentpropertymap)
- [temporarySegmentEquivalences](segmentation_display_state_frontend.SegmentationGroupState.md#temporarysegmentequivalences)
- [temporaryVisibleSegments](segmentation_display_state_frontend.SegmentationGroupState.md#temporaryvisiblesegments)
- [useTemporarySegmentEquivalences](segmentation_display_state_frontend.SegmentationGroupState.md#usetemporarysegmentequivalences)
- [useTemporaryVisibleSegments](segmentation_display_state_frontend.SegmentationGroupState.md#usetemporaryvisiblesegments)
- [visibleSegments](segmentation_display_state_frontend.SegmentationGroupState.md#visiblesegments)

## Properties

### maxIdLength

• **maxIdLength**: [`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`number`\>

Maximum length of base-10 representation of id seen.

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:139](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L139)

___

### segmentEquivalences

• **segmentEquivalences**: [`SharedDisjointUint64Sets`](../classes/mesh_backend._internal_.SharedDisjointUint64Sets.md)

#### Inherited from

[VisibleSegmentsState](segmentation_display_state_base.VisibleSegmentsState.md).[segmentEquivalences](segmentation_display_state_base.VisibleSegmentsState.md#segmentequivalences)

#### Defined in

[src/neuroglancer/segmentation_display_state/base.ts:25](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/base.ts#L25)

___

### segmentPropertyMap

• **segmentPropertyMap**: [`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`undefined` \| [`PreprocessedSegmentPropertyMap`](../classes/segmentation_display_state_property_map.PreprocessedSegmentPropertyMap.md)\>

#### Defined in

[src/neuroglancer/segmentation_display_state/frontend.ts:140](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/frontend.ts#L140)

___

### temporarySegmentEquivalences

• **temporarySegmentEquivalences**: [`SharedDisjointUint64Sets`](../classes/mesh_backend._internal_.SharedDisjointUint64Sets.md)

#### Inherited from

[VisibleSegmentsState](segmentation_display_state_base.VisibleSegmentsState.md).[temporarySegmentEquivalences](segmentation_display_state_base.VisibleSegmentsState.md#temporarysegmentequivalences)

#### Defined in

[src/neuroglancer/segmentation_display_state/base.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/base.ts#L30)

___

### temporaryVisibleSegments

• **temporaryVisibleSegments**: [`Uint64Set`](../classes/mesh_backend._internal_.Uint64Set.md)

#### Inherited from

[VisibleSegmentsState](segmentation_display_state_base.VisibleSegmentsState.md).[temporaryVisibleSegments](segmentation_display_state_base.VisibleSegmentsState.md#temporaryvisiblesegments)

#### Defined in

[src/neuroglancer/segmentation_display_state/base.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/base.ts#L29)

___

### useTemporarySegmentEquivalences

• **useTemporarySegmentEquivalences**: [`SharedWatchableValue`](../classes/chunk_manager_backend._internal_.SharedWatchableValue.md)<`boolean`\>

#### Inherited from

[VisibleSegmentsState](segmentation_display_state_base.VisibleSegmentsState.md).[useTemporarySegmentEquivalences](segmentation_display_state_base.VisibleSegmentsState.md#usetemporarysegmentequivalences)

#### Defined in

[src/neuroglancer/segmentation_display_state/base.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/base.ts#L32)

___

### useTemporaryVisibleSegments

• **useTemporaryVisibleSegments**: [`SharedWatchableValue`](../classes/chunk_manager_backend._internal_.SharedWatchableValue.md)<`boolean`\>

#### Inherited from

[VisibleSegmentsState](segmentation_display_state_base.VisibleSegmentsState.md).[useTemporaryVisibleSegments](segmentation_display_state_base.VisibleSegmentsState.md#usetemporaryvisiblesegments)

#### Defined in

[src/neuroglancer/segmentation_display_state/base.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/base.ts#L31)

___

### visibleSegments

• **visibleSegments**: [`Uint64Set`](../classes/mesh_backend._internal_.Uint64Set.md)

#### Inherited from

[VisibleSegmentsState](segmentation_display_state_base.VisibleSegmentsState.md).[visibleSegments](segmentation_display_state_base.VisibleSegmentsState.md#visiblesegments)

#### Defined in

[src/neuroglancer/segmentation_display_state/base.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_display_state/base.ts#L24)
