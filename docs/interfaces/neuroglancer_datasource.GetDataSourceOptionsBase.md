[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/datasource](../modules/neuroglancer_datasource.md) / GetDataSourceOptionsBase

# Interface: GetDataSourceOptionsBase

[neuroglancer/datasource](../modules/neuroglancer_datasource.md).GetDataSourceOptionsBase

## Hierarchy

- **`GetDataSourceOptionsBase`**

  ↳ [`GetDataSourceOptions`](neuroglancer_datasource.GetDataSourceOptions.md)

## Table of contents

### Properties

- [cancellationToken](neuroglancer_datasource.GetDataSourceOptionsBase.md#cancellationtoken)
- [chunkManager](neuroglancer_datasource.GetDataSourceOptionsBase.md#chunkmanager)
- [globalCoordinateSpace](neuroglancer_datasource.GetDataSourceOptionsBase.md#globalcoordinatespace)
- [transform](neuroglancer_datasource.GetDataSourceOptionsBase.md#transform)
- [url](neuroglancer_datasource.GetDataSourceOptionsBase.md#url)

## Properties

### cancellationToken

• `Optional` **cancellationToken**: [`CancellationToken`](neuroglancer_util_cancellation.CancellationToken.md)

#### Defined in

[src/neuroglancer/datasource/index.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/index.ts#L76)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](../classes/neuroglancer_chunk_manager_frontend.ChunkManager.md)

#### Defined in

[src/neuroglancer/datasource/index.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/index.ts#L75)

___

### globalCoordinateSpace

• **globalCoordinateSpace**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<[`CoordinateSpace`](neuroglancer_coordinate_transform.CoordinateSpace.md)\>

#### Defined in

[src/neuroglancer/datasource/index.ts:79](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/index.ts#L79)

___

### transform

• **transform**: `undefined` \| [`CoordinateTransformSpecification`](neuroglancer_coordinate_transform.CoordinateTransformSpecification.md)

#### Defined in

[src/neuroglancer/datasource/index.ts:78](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/index.ts#L78)

___

### url

• **url**: `string`

#### Defined in

[src/neuroglancer/datasource/index.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/index.ts#L77)
