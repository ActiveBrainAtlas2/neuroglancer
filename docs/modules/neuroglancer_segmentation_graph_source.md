[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/segmentation\_graph/source

# Module: neuroglancer/segmentation\_graph/source

## Table of contents

### Classes

- [SegmentationGraphSource](../classes/neuroglancer_segmentation_graph_source.SegmentationGraphSource.md)
- [SegmentationGraphSourceConnection](../classes/neuroglancer_segmentation_graph_source.SegmentationGraphSourceConnection.md)

### Interfaces

- [ComputedSplit](../interfaces/neuroglancer_segmentation_graph_source.ComputedSplit.md)

### Variables

- [UNKNOWN\_NEW\_SEGMENT\_ID](neuroglancer_segmentation_graph_source.md#unknown_new_segment_id)

### Functions

- [isBaseSegmentId](neuroglancer_segmentation_graph_source.md#isbasesegmentid)
- [trackWatchableValueSegment](neuroglancer_segmentation_graph_source.md#trackwatchablevaluesegment)

## Variables

### UNKNOWN\_NEW\_SEGMENT\_ID

• `Const` **UNKNOWN\_NEW\_SEGMENT\_ID**: [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/segmentation_graph/source.ts:94](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_graph/source.ts#L94)

## Functions

### isBaseSegmentId

▸ **isBaseSegmentId**(`segmentId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `segmentId` | [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/segmentation_graph/source.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_graph/source.ts#L90)

___

### trackWatchableValueSegment

▸ **trackWatchableValueSegment**(`graph`, `watchable`): [`Disposer`](neuroglancer_util_disposable.md#disposer)

#### Parameters

| Name | Type |
| :------ | :------ |
| `graph` | [`SegmentationGraphSource`](../classes/neuroglancer_segmentation_graph_source.SegmentationGraphSource.md) |
| `watchable` | [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`undefined` \| [`Uint64`](../classes/neuroglancer_util_uint64.Uint64.md)\> |

#### Returns

[`Disposer`](neuroglancer_util_disposable.md#disposer)

#### Defined in

[src/neuroglancer/segmentation_graph/source.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/segmentation_graph/source.ts#L49)
