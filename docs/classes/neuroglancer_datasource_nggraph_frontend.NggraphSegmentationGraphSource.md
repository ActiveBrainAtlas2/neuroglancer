[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/datasource/nggraph/frontend](../modules/neuroglancer_datasource_nggraph_frontend.md) / NggraphSegmentationGraphSource

# Class: NggraphSegmentationGraphSource

[neuroglancer/datasource/nggraph/frontend](../modules/neuroglancer_datasource_nggraph_frontend.md).NggraphSegmentationGraphSource

## Hierarchy

- [`SegmentationGraphSource`](neuroglancer_segmentation_graph_source.SegmentationGraphSource.md)

  ↳ **`NggraphSegmentationGraphSource`**

## Table of contents

### Constructors

- [constructor](neuroglancer_datasource_nggraph_frontend.NggraphSegmentationGraphSource.md#constructor)

### Properties

- [chunkManager](neuroglancer_datasource_nggraph_frontend.NggraphSegmentationGraphSource.md#chunkmanager)
- [entityName](neuroglancer_datasource_nggraph_frontend.NggraphSegmentationGraphSource.md#entityname)
- [nextWatchId](neuroglancer_datasource_nggraph_frontend.NggraphSegmentationGraphSource.md#nextwatchid)
- [numOpenFailures](neuroglancer_datasource_nggraph_frontend.NggraphSegmentationGraphSource.md#numopenfailures)
- [serverUrl](neuroglancer_datasource_nggraph_frontend.NggraphSegmentationGraphSource.md#serverurl)
- [startingWebsocket](neuroglancer_datasource_nggraph_frontend.NggraphSegmentationGraphSource.md#startingwebsocket)
- [watches](neuroglancer_datasource_nggraph_frontend.NggraphSegmentationGraphSource.md#watches)
- [watchesById](neuroglancer_datasource_nggraph_frontend.NggraphSegmentationGraphSource.md#watchesbyid)
- [websocket](neuroglancer_datasource_nggraph_frontend.NggraphSegmentationGraphSource.md#websocket)

### Accessors

- [highBitRepresentative](neuroglancer_datasource_nggraph_frontend.NggraphSegmentationGraphSource.md#highbitrepresentative)

### Methods

- [connect](neuroglancer_datasource_nggraph_frontend.NggraphSegmentationGraphSource.md#connect)
- [merge](neuroglancer_datasource_nggraph_frontend.NggraphSegmentationGraphSource.md#merge)
- [split](neuroglancer_datasource_nggraph_frontend.NggraphSegmentationGraphSource.md#split)
- [startWebsocket](neuroglancer_datasource_nggraph_frontend.NggraphSegmentationGraphSource.md#startwebsocket)
- [trackSegment](neuroglancer_datasource_nggraph_frontend.NggraphSegmentationGraphSource.md#tracksegment)
- [watchSegment](neuroglancer_datasource_nggraph_frontend.NggraphSegmentationGraphSource.md#watchsegment)

## Constructors

### constructor

• **new NggraphSegmentationGraphSource**(`chunkManager`, `serverUrl`, `entityName`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md) |
| `serverUrl` | `string` |
| `entityName` | `string` |

#### Overrides

[SegmentationGraphSource](neuroglancer_segmentation_graph_source.SegmentationGraphSource.md).[constructor](neuroglancer_segmentation_graph_source.SegmentationGraphSource.md#constructor)

#### Defined in

[src/neuroglancer/datasource/nggraph/frontend.ts:298](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/nggraph/frontend.ts#L298)

## Properties

### chunkManager

• **chunkManager**: [`ChunkManager`](neuroglancer_chunk_manager_frontend.ChunkManager.md)

___

### entityName

• **entityName**: `string`

___

### nextWatchId

• `Private` **nextWatchId**: `number` = `0`

#### Defined in

[src/neuroglancer/datasource/nggraph/frontend.ts:295](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/nggraph/frontend.ts#L295)

___

### numOpenFailures

• `Private` **numOpenFailures**: `number` = `0`

#### Defined in

[src/neuroglancer/datasource/nggraph/frontend.ts:296](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/nggraph/frontend.ts#L296)

___

### serverUrl

• **serverUrl**: `string`

___

### startingWebsocket

• `Private` **startingWebsocket**: `boolean` = `false`

#### Defined in

[src/neuroglancer/datasource/nggraph/frontend.ts:291](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/nggraph/frontend.ts#L291)

___

### watches

• `Private` **watches**: `Set`<[`WatchInfo`](../interfaces/neuroglancer_datasource_nggraph_frontend._internal_.WatchInfo.md)\>

#### Defined in

[src/neuroglancer/datasource/nggraph/frontend.ts:294](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/nggraph/frontend.ts#L294)

___

### watchesById

• `Private` **watchesById**: `Map`<`number`, [`WatchInfo`](../interfaces/neuroglancer_datasource_nggraph_frontend._internal_.WatchInfo.md)\>

#### Defined in

[src/neuroglancer/datasource/nggraph/frontend.ts:293](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/nggraph/frontend.ts#L293)

___

### websocket

• `Private` **websocket**: `undefined` \| [`WebSocket`](../modules/neuroglancer_datasource_nggraph_frontend._internal_.md#websocket) = `undefined`

#### Defined in

[src/neuroglancer/datasource/nggraph/frontend.ts:292](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/nggraph/frontend.ts#L292)

## Accessors

### highBitRepresentative

• `get` **highBitRepresentative**(): `boolean`

#### Returns

`boolean`

#### Overrides

SegmentationGraphSource.highBitRepresentative

#### Defined in

[src/neuroglancer/datasource/nggraph/frontend.ts:303](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/nggraph/frontend.ts#L303)

## Methods

### connect

▸ **connect**(`segmentsState`): [`GraphConnection`](neuroglancer_datasource_nggraph_frontend._internal_.GraphConnection.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `segmentsState` | [`VisibleSegmentsState`](../interfaces/neuroglancer_segmentation_display_state_base.VisibleSegmentsState.md) |

#### Returns

[`GraphConnection`](neuroglancer_datasource_nggraph_frontend._internal_.GraphConnection.md)

#### Overrides

[SegmentationGraphSource](neuroglancer_segmentation_graph_source.SegmentationGraphSource.md).[connect](neuroglancer_segmentation_graph_source.SegmentationGraphSource.md#connect)

#### Defined in

[src/neuroglancer/datasource/nggraph/frontend.ts:387](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/nggraph/frontend.ts#L387)

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

[src/neuroglancer/datasource/nggraph/frontend.ts:442](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/nggraph/frontend.ts#L442)

___

### split

▸ **split**(`include`, `exclude`): `Promise`<{ `exclude`: [`Uint64`](neuroglancer_util_uint64.Uint64.md) ; `include`: [`Uint64`](neuroglancer_util_uint64.Uint64.md)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `include` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |
| `exclude` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

`Promise`<{ `exclude`: [`Uint64`](neuroglancer_util_uint64.Uint64.md) ; `include`: [`Uint64`](neuroglancer_util_uint64.Uint64.md)  }\>

#### Overrides

[SegmentationGraphSource](neuroglancer_segmentation_graph_source.SegmentationGraphSource.md).[split](neuroglancer_segmentation_graph_source.SegmentationGraphSource.md#split)

#### Defined in

[src/neuroglancer/datasource/nggraph/frontend.ts:455](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/nggraph/frontend.ts#L455)

___

### startWebsocket

▸ `Private` **startWebsocket**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/datasource/nggraph/frontend.ts:307](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/nggraph/frontend.ts#L307)

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

[src/neuroglancer/datasource/nggraph/frontend.ts:391](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/nggraph/frontend.ts#L391)

___

### watchSegment

▸ **watchSegment**(`segment`, `callback`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `segment` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |
| `callback` | [`GraphSegmentUpdateCallback`](../modules/neuroglancer_datasource_nggraph_frontend._internal_.md#graphsegmentupdatecallback) |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/neuroglancer/datasource/nggraph/frontend.ts:404](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/nggraph/frontend.ts#L404)
