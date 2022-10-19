[neuroglancer](../README.md) / [Modules](../modules.md) / segmentation\_graph/source

# Module: segmentation\_graph/source

## Table of contents

### Classes

- [SegmentationGraphSource](../classes/segmentation_graph_source.SegmentationGraphSource.md)
- [SegmentationGraphSourceConnection](../classes/segmentation_graph_source.SegmentationGraphSourceConnection.md)

### Interfaces

- [ComputedSplit](../interfaces/segmentation_graph_source.ComputedSplit.md)

### Variables

- [UNKNOWN\_NEW\_SEGMENT\_ID](segmentation_graph_source.md#unknown_new_segment_id)

### Functions

- [isBaseSegmentId](segmentation_graph_source.md#isbasesegmentid)
- [trackWatchableValueSegment](segmentation_graph_source.md#trackwatchablevaluesegment)

## Variables

### UNKNOWN\_NEW\_SEGMENT\_ID

• `Const` **UNKNOWN\_NEW\_SEGMENT\_ID**: [`Uint64`](../classes/util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/segmentation_graph/source.ts:94](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_graph/source.ts#L94)

## Functions

### isBaseSegmentId

▸ **isBaseSegmentId**(`segmentId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `segmentId` | [`Uint64`](../classes/util_uint64.Uint64.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/segmentation_graph/source.ts:90](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_graph/source.ts#L90)

___

### trackWatchableValueSegment

▸ **trackWatchableValueSegment**(`graph`, `watchable`): [`Disposer`](util_disposable.md#disposer)

#### Parameters

| Name | Type |
| :------ | :------ |
| `graph` | [`SegmentationGraphSource`](../classes/segmentation_graph_source.SegmentationGraphSource.md) |
| `watchable` | [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`undefined` \| [`Uint64`](../classes/util_uint64.Uint64.md)\> |

#### Returns

[`Disposer`](util_disposable.md#disposer)

#### Defined in

[src/neuroglancer/segmentation_graph/source.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_graph/source.ts#L49)
