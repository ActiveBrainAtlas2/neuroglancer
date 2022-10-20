[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/segmentation\_graph/local](../modules/neuroglancer_segmentation_graph_local.md) / LocalSegmentationGraphSource

# Class: LocalSegmentationGraphSource

[neuroglancer/segmentation_graph/local](../modules/neuroglancer_segmentation_graph_local.md).LocalSegmentationGraphSource

## Hierarchy

- [`SegmentationGraphSource`](neuroglancer_segmentation_graph_source.SegmentationGraphSource.md)

  ↳ **`LocalSegmentationGraphSource`**

## Table of contents

### Constructors

- [constructor](neuroglancer_segmentation_graph_local.LocalSegmentationGraphSource.md#constructor)

### Properties

- [changed](neuroglancer_segmentation_graph_local.LocalSegmentationGraphSource.md#changed)
- [connections](neuroglancer_segmentation_graph_local.LocalSegmentationGraphSource.md#connections)
- [equivalences](neuroglancer_segmentation_graph_local.LocalSegmentationGraphSource.md#equivalences)
- [spanningTreeEdges](neuroglancer_segmentation_graph_local.LocalSegmentationGraphSource.md#spanningtreeedges)

### Accessors

- [highBitRepresentative](neuroglancer_segmentation_graph_local.LocalSegmentationGraphSource.md#highbitrepresentative)

### Methods

- [addSpanningTreeEdge](neuroglancer_segmentation_graph_local.LocalSegmentationGraphSource.md#addspanningtreeedge)
- [computeSplit](neuroglancer_segmentation_graph_local.LocalSegmentationGraphSource.md#computesplit)
- [connect](neuroglancer_segmentation_graph_local.LocalSegmentationGraphSource.md#connect)
- [deleteSet](neuroglancer_segmentation_graph_local.LocalSegmentationGraphSource.md#deleteset)
- [getSpanningTreeNeighbors](neuroglancer_segmentation_graph_local.LocalSegmentationGraphSource.md#getspanningtreeneighbors)
- [link](neuroglancer_segmentation_graph_local.LocalSegmentationGraphSource.md#link)
- [linkAll](neuroglancer_segmentation_graph_local.LocalSegmentationGraphSource.md#linkall)
- [merge](neuroglancer_segmentation_graph_local.LocalSegmentationGraphSource.md#merge)
- [normalizeAll](neuroglancer_segmentation_graph_local.LocalSegmentationGraphSource.md#normalizeall)
- [removeSpanningTreeEdge](neuroglancer_segmentation_graph_local.LocalSegmentationGraphSource.md#removespanningtreeedge)
- [restoreState](neuroglancer_segmentation_graph_local.LocalSegmentationGraphSource.md#restorestate)
- [split](neuroglancer_segmentation_graph_local.LocalSegmentationGraphSource.md#split)
- [toJSON](neuroglancer_segmentation_graph_local.LocalSegmentationGraphSource.md#tojson)
- [trackSegment](neuroglancer_segmentation_graph_local.LocalSegmentationGraphSource.md#tracksegment)

## Constructors

### constructor

• **new LocalSegmentationGraphSource**()

#### Inherited from

[SegmentationGraphSource](neuroglancer_segmentation_graph_source.SegmentationGraphSource.md).[constructor](neuroglancer_segmentation_graph_source.SegmentationGraphSource.md#constructor)

## Properties

### changed

• **changed**: [`Signal`](neuroglancer_util_signal.Signal.md)<() => `void`\>

#### Defined in

[src/neuroglancer/segmentation_graph/local.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_graph/local.ts#L31)

___

### connections

• **connections**: `Set`<[`LocalSegmentationGraphSourceConnection`](neuroglancer_segmentation_graph_local._internal_.LocalSegmentationGraphSourceConnection.md)\>

#### Defined in

[src/neuroglancer/segmentation_graph/local.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_graph/local.ts#L30)

___

### equivalences

• **equivalences**: [`SharedDisjointUint64Sets`](neuroglancer_shared_disjoint_sets.SharedDisjointUint64Sets.md)

#### Defined in

[src/neuroglancer/segmentation_graph/local.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_graph/local.ts#L29)

___

### spanningTreeEdges

• **spanningTreeEdges**: `Map`<`string`, `Set`<`string`\>\>

#### Defined in

[src/neuroglancer/segmentation_graph/local.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_graph/local.ts#L28)

## Accessors

### highBitRepresentative

• `get` **highBitRepresentative**(): `boolean`

#### Returns

`boolean`

#### Overrides

SegmentationGraphSource.highBitRepresentative

#### Defined in

[src/neuroglancer/segmentation_graph/local.ts:140](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_graph/local.ts#L140)

## Methods

### addSpanningTreeEdge

▸ `Private` **addSpanningTreeEdge**(`a`, `b`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |
| `b` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_graph/local.ts:62](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_graph/local.ts#L62)

___

### computeSplit

▸ **computeSplit**(`include`, `exclude`): `undefined` \| [`ComputedSplit`](../interfaces/neuroglancer_segmentation_graph_source.ComputedSplit.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `include` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |
| `exclude` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

`undefined` \| [`ComputedSplit`](../interfaces/neuroglancer_segmentation_graph_source.ComputedSplit.md)

#### Defined in

[src/neuroglancer/segmentation_graph/local.ts:202](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_graph/local.ts#L202)

___

### connect

▸ **connect**(`segmentsState`): [`SegmentationGraphSourceConnection`](neuroglancer_segmentation_graph_source.SegmentationGraphSourceConnection.md)<[`SegmentationGraphSource`](neuroglancer_segmentation_graph_source.SegmentationGraphSource.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `segmentsState` | [`VisibleSegmentsState`](../interfaces/neuroglancer_segmentation_display_state_base.VisibleSegmentsState.md) |

#### Returns

[`SegmentationGraphSourceConnection`](neuroglancer_segmentation_graph_source.SegmentationGraphSourceConnection.md)<[`SegmentationGraphSource`](neuroglancer_segmentation_graph_source.SegmentationGraphSource.md)\>

#### Overrides

[SegmentationGraphSource](neuroglancer_segmentation_graph_source.SegmentationGraphSource.md).[connect](neuroglancer_segmentation_graph_source.SegmentationGraphSource.md#connect)

#### Defined in

[src/neuroglancer/segmentation_graph/local.ts:241](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_graph/local.ts#L241)

___

### deleteSet

▸ `Private` **deleteSet**(`a`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_graph/local.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_graph/local.ts#L47)

___

### getSpanningTreeNeighbors

▸ `Private` **getSpanningTreeNeighbors**(`a`): [`IterableIterator`](../interfaces/main_module._internal_.IterableIterator.md)<[`Uint64`](neuroglancer_util_uint64.Uint64.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

[`IterableIterator`](../interfaces/main_module._internal_.IterableIterator.md)<[`Uint64`](neuroglancer_util_uint64.Uint64.md)\>

#### Defined in

[src/neuroglancer/segmentation_graph/local.ts:94](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_graph/local.ts#L94)

___

### link

▸ `Private` **link**(`a`, `b`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |
| `b` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_graph/local.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_graph/local.ts#L33)

___

### linkAll

▸ `Private` **linkAll**(`ids`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | [`Uint64`](neuroglancer_util_uint64.Uint64.md)[] |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_graph/local.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_graph/local.ts#L40)

___

### merge

▸ **merge**(`a`, `b`): `Promise`<[`Uint64`](neuroglancer_util_uint64.Uint64.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |
| `b` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

`Promise`<[`Uint64`](neuroglancer_util_uint64.Uint64.md)\>

#### Overrides

[SegmentationGraphSource](neuroglancer_segmentation_graph_source.SegmentationGraphSource.md).[merge](neuroglancer_segmentation_graph_source.SegmentationGraphSource.md#merge)

#### Defined in

[src/neuroglancer/segmentation_graph/local.ts:144](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_graph/local.ts#L144)

___

### normalizeAll

▸ `Private` **normalizeAll**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_graph/local.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_graph/local.ts#L54)

___

### removeSpanningTreeEdge

▸ `Private` **removeSpanningTreeEdge**(`a`, `b`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |
| `b` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_graph/local.ts:79](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_graph/local.ts#L79)

___

### restoreState

▸ **restoreState**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `unknown` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_graph/local.ts:104](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_graph/local.ts#L104)

___

### split

▸ **split**(`a`, `b`): `Promise`<{ `exclude`: [`Uint64`](neuroglancer_util_uint64.Uint64.md) ; `include`: [`Uint64`](neuroglancer_util_uint64.Uint64.md)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |
| `b` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

`Promise`<{ `exclude`: [`Uint64`](neuroglancer_util_uint64.Uint64.md) ; `include`: [`Uint64`](neuroglancer_util_uint64.Uint64.md)  }\>

#### Overrides

[SegmentationGraphSource](neuroglancer_segmentation_graph_source.SegmentationGraphSource.md).[split](neuroglancer_segmentation_graph_source.SegmentationGraphSource.md#split)

#### Defined in

[src/neuroglancer/segmentation_graph/local.ts:157](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_graph/local.ts#L157)

___

### toJSON

▸ **toJSON**(): `undefined` \| `string`[][]

#### Returns

`undefined` \| `string`[][]

#### Defined in

[src/neuroglancer/segmentation_graph/local.ts:124](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_graph/local.ts#L124)

___

### trackSegment

▸ **trackSegment**(`id`, `callback`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |
| `callback` | (`id`: ``null`` \| [`Uint64`](neuroglancer_util_uint64.Uint64.md)) => `void` |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Overrides

[SegmentationGraphSource](neuroglancer_segmentation_graph_source.SegmentationGraphSource.md).[trackSegment](neuroglancer_segmentation_graph_source.SegmentationGraphSource.md#tracksegment)

#### Defined in

[src/neuroglancer/segmentation_graph/local.ts:193](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/segmentation_graph/local.ts#L193)
