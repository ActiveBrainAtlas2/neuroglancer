[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/datasource/nggraph/frontend](neuroglancer_datasource_nggraph_frontend.md) / <internal\>

# Module: <internal\>

## Table of contents

### Classes

- [GraphConnection](../classes/neuroglancer_datasource_nggraph_frontend._internal_.GraphConnection.md)

### Interfaces

- [ActiveSegmentQuery](../interfaces/neuroglancer_datasource_nggraph_frontend._internal_.ActiveSegmentQuery.md)
- [GraphSegmentInfo](../interfaces/neuroglancer_datasource_nggraph_frontend._internal_.GraphSegmentInfo.md)
- [WatchInfo](../interfaces/neuroglancer_datasource_nggraph_frontend._internal_.WatchInfo.md)
- [WebSocket](../interfaces/neuroglancer_datasource_nggraph_frontend._internal_.WebSocket.md)
- [WebSocketEventMap](../interfaces/neuroglancer_datasource_nggraph_frontend._internal_.WebSocketEventMap.md)

### Type Aliases

- [GraphSegmentUpdate](neuroglancer_datasource_nggraph_frontend._internal_.md#graphsegmentupdate)
- [GraphSegmentUpdateCallback](neuroglancer_datasource_nggraph_frontend._internal_.md#graphsegmentupdatecallback)

### Variables

- [WebSocket](neuroglancer_datasource_nggraph_frontend._internal_.md#websocket)

## Type Aliases

### GraphSegmentUpdate

Ƭ **GraphSegmentUpdate**: [`GraphSegmentInfo`](../interfaces/neuroglancer_datasource_nggraph_frontend._internal_.GraphSegmentInfo.md) \| ``"invalid"`` \| ``"error"``

#### Defined in

[src/neuroglancer/datasource/nggraph/frontend.ts:72](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/nggraph/frontend.ts#L72)

___

### GraphSegmentUpdateCallback

Ƭ **GraphSegmentUpdateCallback**: (`info`: [`GraphSegmentUpdate`](neuroglancer_datasource_nggraph_frontend._internal_.md#graphsegmentupdate)) => `void`

#### Type declaration

▸ (`info`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `info` | [`GraphSegmentUpdate`](neuroglancer_datasource_nggraph_frontend._internal_.md#graphsegmentupdate) |

##### Returns

`void`

#### Defined in

[src/neuroglancer/datasource/nggraph/frontend.ts:282](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/nggraph/frontend.ts#L282)

## Variables

### WebSocket

• **WebSocket**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CLOSED` | `number` |
| `CLOSING` | `number` |
| `CONNECTING` | `number` |
| `OPEN` | `number` |
| `prototype` | [`WebSocket`](neuroglancer_datasource_nggraph_frontend._internal_.md#websocket) |

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16580
