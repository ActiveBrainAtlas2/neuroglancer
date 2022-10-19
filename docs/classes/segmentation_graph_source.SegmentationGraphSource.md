[neuroglancer](../README.md) / [Modules](../modules.md) / [segmentation\_graph/source](../modules/segmentation_graph_source.md) / SegmentationGraphSource

# Class: SegmentationGraphSource

[segmentation_graph/source](../modules/segmentation_graph_source.md).SegmentationGraphSource

## Hierarchy

- **`SegmentationGraphSource`**

  ↳ [`LocalSegmentationGraphSource`](segmentation_graph_local.LocalSegmentationGraphSource.md)

## Table of contents

### Constructors

- [constructor](segmentation_graph_source.SegmentationGraphSource.md#constructor)

### Accessors

- [highBitRepresentative](segmentation_graph_source.SegmentationGraphSource.md#highbitrepresentative)

### Methods

- [connect](segmentation_graph_source.SegmentationGraphSource.md#connect)
- [merge](segmentation_graph_source.SegmentationGraphSource.md#merge)
- [split](segmentation_graph_source.SegmentationGraphSource.md#split)
- [trackSegment](segmentation_graph_source.SegmentationGraphSource.md#tracksegment)

## Constructors

### constructor

• **new SegmentationGraphSource**()

## Accessors

### highBitRepresentative

• `Abstract` `get` **highBitRepresentative**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/segmentation_graph/source.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_graph/source.ts#L27)

## Methods

### connect

▸ `Abstract` **connect**(`segmentsState`): [`SegmentationGraphSourceConnection`](segmentation_graph_source.SegmentationGraphSourceConnection.md)<[`SegmentationGraphSource`](segmentation_graph_source.SegmentationGraphSource.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `segmentsState` | [`VisibleSegmentsState`](../interfaces/segmentation_display_state_base.VisibleSegmentsState.md) |

#### Returns

[`SegmentationGraphSourceConnection`](segmentation_graph_source.SegmentationGraphSourceConnection.md)<[`SegmentationGraphSource`](segmentation_graph_source.SegmentationGraphSource.md)\>

#### Defined in

[src/neuroglancer/segmentation_graph/source.ts:23](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_graph/source.ts#L23)

___

### merge

▸ `Abstract` **merge**(`a`, `b`): `Promise`<[`Uint64`](util_uint64.Uint64.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Uint64`](util_uint64.Uint64.md) |
| `b` | [`Uint64`](util_uint64.Uint64.md) |

#### Returns

`Promise`<[`Uint64`](util_uint64.Uint64.md)\>

#### Defined in

[src/neuroglancer/segmentation_graph/source.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_graph/source.ts#L24)

___

### split

▸ `Abstract` **split**(`include`, `exclude`): `Promise`<{ `exclude`: [`Uint64`](util_uint64.Uint64.md) ; `include`: [`Uint64`](util_uint64.Uint64.md)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `include` | [`Uint64`](util_uint64.Uint64.md) |
| `exclude` | [`Uint64`](util_uint64.Uint64.md) |

#### Returns

`Promise`<{ `exclude`: [`Uint64`](util_uint64.Uint64.md) ; `include`: [`Uint64`](util_uint64.Uint64.md)  }\>

#### Defined in

[src/neuroglancer/segmentation_graph/source.ts:25](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_graph/source.ts#L25)

___

### trackSegment

▸ `Abstract` **trackSegment**(`id`, `callback`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`Uint64`](util_uint64.Uint64.md) |
| `callback` | (`id`: ``null`` \| [`Uint64`](util_uint64.Uint64.md)) => `void` |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_graph/source.ts:26](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/segmentation_graph/source.ts#L26)
