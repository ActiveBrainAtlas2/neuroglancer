[neuroglancer](../README.md) / [Modules](../modules.md) / [segmentation\_user\_layer](../modules/segmentation_user_layer.md) / [<internal\>](../modules/segmentation_user_layer._internal_.md) / LocalSegmentationGraphSource

# Class: LocalSegmentationGraphSource

[segmentation_user_layer](../modules/segmentation_user_layer.md).[<internal>](../modules/segmentation_user_layer._internal_.md).LocalSegmentationGraphSource

## Hierarchy

- [`SegmentationGraphSource`](layer._internal_.SegmentationGraphSource.md)

  ↳ **`LocalSegmentationGraphSource`**

## Table of contents

### Constructors

- [constructor](segmentation_user_layer._internal_.LocalSegmentationGraphSource.md#constructor)

### Properties

- [changed](segmentation_user_layer._internal_.LocalSegmentationGraphSource.md#changed)
- [connections](segmentation_user_layer._internal_.LocalSegmentationGraphSource.md#connections)
- [equivalences](segmentation_user_layer._internal_.LocalSegmentationGraphSource.md#equivalences)
- [spanningTreeEdges](segmentation_user_layer._internal_.LocalSegmentationGraphSource.md#spanningtreeedges)

### Accessors

- [highBitRepresentative](segmentation_user_layer._internal_.LocalSegmentationGraphSource.md#highbitrepresentative)

### Methods

- [addSpanningTreeEdge](segmentation_user_layer._internal_.LocalSegmentationGraphSource.md#addspanningtreeedge)
- [computeSplit](segmentation_user_layer._internal_.LocalSegmentationGraphSource.md#computesplit)
- [connect](segmentation_user_layer._internal_.LocalSegmentationGraphSource.md#connect)
- [deleteSet](segmentation_user_layer._internal_.LocalSegmentationGraphSource.md#deleteset)
- [getSpanningTreeNeighbors](segmentation_user_layer._internal_.LocalSegmentationGraphSource.md#getspanningtreeneighbors)
- [link](segmentation_user_layer._internal_.LocalSegmentationGraphSource.md#link)
- [linkAll](segmentation_user_layer._internal_.LocalSegmentationGraphSource.md#linkall)
- [merge](segmentation_user_layer._internal_.LocalSegmentationGraphSource.md#merge)
- [normalizeAll](segmentation_user_layer._internal_.LocalSegmentationGraphSource.md#normalizeall)
- [removeSpanningTreeEdge](segmentation_user_layer._internal_.LocalSegmentationGraphSource.md#removespanningtreeedge)
- [restoreState](segmentation_user_layer._internal_.LocalSegmentationGraphSource.md#restorestate)
- [split](segmentation_user_layer._internal_.LocalSegmentationGraphSource.md#split)
- [toJSON](segmentation_user_layer._internal_.LocalSegmentationGraphSource.md#tojson)
- [trackSegment](segmentation_user_layer._internal_.LocalSegmentationGraphSource.md#tracksegment)

## Constructors

### constructor

• **new LocalSegmentationGraphSource**()

#### Inherited from

[SegmentationGraphSource](layer._internal_.SegmentationGraphSource.md).[constructor](layer._internal_.SegmentationGraphSource.md#constructor)

## Properties

### changed

• **changed**: [`Signal`](coordinate_transform._internal_.Signal.md)<() => `void`\>

#### Defined in

[src/neuroglancer/segmentation_graph/local.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_graph/local.ts#L31)

___

### connections

• **connections**: `Set`<[`LocalSegmentationGraphSourceConnection`](segmentation_user_layer._internal_.LocalSegmentationGraphSourceConnection.md)\>

#### Defined in

[src/neuroglancer/segmentation_graph/local.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_graph/local.ts#L30)

___

### equivalences

• **equivalences**: [`SharedDisjointUint64Sets`](shared_disjoint_sets.SharedDisjointUint64Sets.md)

#### Defined in

[src/neuroglancer/segmentation_graph/local.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_graph/local.ts#L29)

___

### spanningTreeEdges

• **spanningTreeEdges**: `Map`<`string`, `Set`<`string`\>\>

#### Defined in

[src/neuroglancer/segmentation_graph/local.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_graph/local.ts#L28)

## Accessors

### highBitRepresentative

• `get` **highBitRepresentative**(): `boolean`

#### Returns

`boolean`

#### Overrides

SegmentationGraphSource.highBitRepresentative

#### Defined in

[src/neuroglancer/segmentation_graph/local.ts:140](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_graph/local.ts#L140)

## Methods

### addSpanningTreeEdge

▸ `Private` **addSpanningTreeEdge**(`a`, `b`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Uint64`](data_panel_layout._internal_.Uint64.md) |
| `b` | [`Uint64`](data_panel_layout._internal_.Uint64.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_graph/local.ts:62](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_graph/local.ts#L62)

___

### computeSplit

▸ **computeSplit**(`include`, `exclude`): `undefined` \| [`ComputedSplit`](../interfaces/layer._internal_.ComputedSplit.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `include` | [`Uint64`](data_panel_layout._internal_.Uint64.md) |
| `exclude` | [`Uint64`](data_panel_layout._internal_.Uint64.md) |

#### Returns

`undefined` \| [`ComputedSplit`](../interfaces/layer._internal_.ComputedSplit.md)

#### Defined in

[src/neuroglancer/segmentation_graph/local.ts:202](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_graph/local.ts#L202)

___

### connect

▸ **connect**(`segmentsState`): [`SegmentationGraphSourceConnection`](layer._internal_.SegmentationGraphSourceConnection.md)<[`SegmentationGraphSource`](layer._internal_.SegmentationGraphSource.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `segmentsState` | [`VisibleSegmentsState`](../interfaces/image_user_layer._internal_.VisibleSegmentsState.md) |

#### Returns

[`SegmentationGraphSourceConnection`](layer._internal_.SegmentationGraphSourceConnection.md)<[`SegmentationGraphSource`](layer._internal_.SegmentationGraphSource.md)\>

#### Overrides

[SegmentationGraphSource](layer._internal_.SegmentationGraphSource.md).[connect](layer._internal_.SegmentationGraphSource.md#connect)

#### Defined in

[src/neuroglancer/segmentation_graph/local.ts:241](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_graph/local.ts#L241)

___

### deleteSet

▸ `Private` **deleteSet**(`a`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Uint64`](data_panel_layout._internal_.Uint64.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_graph/local.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_graph/local.ts#L47)

___

### getSpanningTreeNeighbors

▸ `Private` **getSpanningTreeNeighbors**(`a`): [`IterableIterator`](../interfaces/axes_lines._internal_.IterableIterator.md)<[`Uint64`](data_panel_layout._internal_.Uint64.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Uint64`](data_panel_layout._internal_.Uint64.md) |

#### Returns

[`IterableIterator`](../interfaces/axes_lines._internal_.IterableIterator.md)<[`Uint64`](data_panel_layout._internal_.Uint64.md)\>

#### Defined in

[src/neuroglancer/segmentation_graph/local.ts:94](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_graph/local.ts#L94)

___

### link

▸ `Private` **link**(`a`, `b`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Uint64`](data_panel_layout._internal_.Uint64.md) |
| `b` | [`Uint64`](data_panel_layout._internal_.Uint64.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_graph/local.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_graph/local.ts#L33)

___

### linkAll

▸ `Private` **linkAll**(`ids`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | [`Uint64`](data_panel_layout._internal_.Uint64.md)[] |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_graph/local.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_graph/local.ts#L40)

___

### merge

▸ **merge**(`a`, `b`): `Promise`<[`Uint64`](data_panel_layout._internal_.Uint64.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Uint64`](data_panel_layout._internal_.Uint64.md) |
| `b` | [`Uint64`](data_panel_layout._internal_.Uint64.md) |

#### Returns

`Promise`<[`Uint64`](data_panel_layout._internal_.Uint64.md)\>

#### Overrides

[SegmentationGraphSource](layer._internal_.SegmentationGraphSource.md).[merge](layer._internal_.SegmentationGraphSource.md#merge)

#### Defined in

[src/neuroglancer/segmentation_graph/local.ts:144](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_graph/local.ts#L144)

___

### normalizeAll

▸ `Private` **normalizeAll**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_graph/local.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_graph/local.ts#L54)

___

### removeSpanningTreeEdge

▸ `Private` **removeSpanningTreeEdge**(`a`, `b`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Uint64`](data_panel_layout._internal_.Uint64.md) |
| `b` | [`Uint64`](data_panel_layout._internal_.Uint64.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/segmentation_graph/local.ts:79](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_graph/local.ts#L79)

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

[src/neuroglancer/segmentation_graph/local.ts:104](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_graph/local.ts#L104)

___

### split

▸ **split**(`a`, `b`): `Promise`<{ `exclude`: [`Uint64`](data_panel_layout._internal_.Uint64.md) ; `include`: [`Uint64`](data_panel_layout._internal_.Uint64.md)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Uint64`](data_panel_layout._internal_.Uint64.md) |
| `b` | [`Uint64`](data_panel_layout._internal_.Uint64.md) |

#### Returns

`Promise`<{ `exclude`: [`Uint64`](data_panel_layout._internal_.Uint64.md) ; `include`: [`Uint64`](data_panel_layout._internal_.Uint64.md)  }\>

#### Overrides

[SegmentationGraphSource](layer._internal_.SegmentationGraphSource.md).[split](layer._internal_.SegmentationGraphSource.md#split)

#### Defined in

[src/neuroglancer/segmentation_graph/local.ts:157](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_graph/local.ts#L157)

___

### toJSON

▸ **toJSON**(): `undefined` \| `string`[][]

#### Returns

`undefined` \| `string`[][]

#### Defined in

[src/neuroglancer/segmentation_graph/local.ts:124](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_graph/local.ts#L124)

___

### trackSegment

▸ **trackSegment**(`id`, `callback`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`Uint64`](data_panel_layout._internal_.Uint64.md) |
| `callback` | (`id`: ``null`` \| [`Uint64`](data_panel_layout._internal_.Uint64.md)) => `void` |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Overrides

[SegmentationGraphSource](layer._internal_.SegmentationGraphSource.md).[trackSegment](layer._internal_.SegmentationGraphSource.md#tracksegment)

#### Defined in

[src/neuroglancer/segmentation_graph/local.ts:193](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/segmentation_graph/local.ts#L193)
