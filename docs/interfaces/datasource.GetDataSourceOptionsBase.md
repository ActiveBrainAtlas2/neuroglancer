[neuroglancer](../README.md) / [Modules](../modules.md) / [datasource](../modules/datasource.md) / GetDataSourceOptionsBase

# Interface: GetDataSourceOptionsBase

[datasource](../modules/datasource.md).GetDataSourceOptionsBase

## Hierarchy

- **`GetDataSourceOptionsBase`**

  ↳ [`GetDataSourceOptions`](datasource.GetDataSourceOptions.md)

## Table of contents

### Properties

- [cancellationToken](datasource.GetDataSourceOptionsBase.md#cancellationtoken)
- [chunkManager](datasource.GetDataSourceOptionsBase.md#chunkmanager)
- [globalCoordinateSpace](datasource.GetDataSourceOptionsBase.md#globalcoordinatespace)
- [transform](datasource.GetDataSourceOptionsBase.md#transform)
- [url](datasource.GetDataSourceOptionsBase.md#url)

## Properties

### cancellationToken

• `Optional` **cancellationToken**: [`CancellationToken`](util_cancellation.CancellationToken.md)

#### Defined in

[src/neuroglancer/datasource/index.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/datasource/index.ts#L76)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](../classes/chunk_manager_frontend.ChunkManager.md)

#### Defined in

[src/neuroglancer/datasource/index.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/datasource/index.ts#L75)

___

### globalCoordinateSpace

• **globalCoordinateSpace**: [`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`CoordinateSpace`](annotation_annotation_layer_state._internal_.CoordinateSpace.md)\>

#### Defined in

[src/neuroglancer/datasource/index.ts:79](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/datasource/index.ts#L79)

___

### transform

• **transform**: `undefined` \| [`CoordinateTransformSpecification`](annotation_annotation_layer_state._internal_.CoordinateTransformSpecification.md)

#### Defined in

[src/neuroglancer/datasource/index.ts:78](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/datasource/index.ts#L78)

___

### url

• **url**: `string`

#### Defined in

[src/neuroglancer/datasource/index.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/datasource/index.ts#L77)
