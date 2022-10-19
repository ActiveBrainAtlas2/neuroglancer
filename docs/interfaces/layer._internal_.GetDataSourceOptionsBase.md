[neuroglancer](../README.md) / [Modules](../modules.md) / [layer](../modules/layer.md) / [<internal\>](../modules/layer._internal_.md) / GetDataSourceOptionsBase

# Interface: GetDataSourceOptionsBase

[layer](../modules/layer.md).[<internal>](../modules/layer._internal_.md).GetDataSourceOptionsBase

## Hierarchy

- **`GetDataSourceOptionsBase`**

  ↳ [`GetDataSourceOptions`](layer._internal_.GetDataSourceOptions.md)

## Table of contents

### Properties

- [cancellationToken](layer._internal_.GetDataSourceOptionsBase.md#cancellationtoken)
- [chunkManager](layer._internal_.GetDataSourceOptionsBase.md#chunkmanager)
- [globalCoordinateSpace](layer._internal_.GetDataSourceOptionsBase.md#globalcoordinatespace)
- [transform](layer._internal_.GetDataSourceOptionsBase.md#transform)
- [url](layer._internal_.GetDataSourceOptionsBase.md#url)

## Properties

### cancellationToken

• `Optional` **cancellationToken**: [`CancellationToken`](layer._internal_.CancellationToken.md)

#### Defined in

[src/neuroglancer/datasource/index.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/datasource/index.ts#L76)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](../classes/data_panel_layout._internal_.ChunkManager.md)

#### Defined in

[src/neuroglancer/datasource/index.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/datasource/index.ts#L75)

___

### globalCoordinateSpace

• **globalCoordinateSpace**: [`WatchableValueInterface`](trackable_value.WatchableValueInterface.md)<[`CoordinateSpace`](coordinate_transform.CoordinateSpace.md)\>

#### Defined in

[src/neuroglancer/datasource/index.ts:79](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/datasource/index.ts#L79)

___

### transform

• **transform**: `undefined` \| [`CoordinateTransformSpecification`](coordinate_transform.CoordinateTransformSpecification.md)

#### Defined in

[src/neuroglancer/datasource/index.ts:78](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/datasource/index.ts#L78)

___

### url

• **url**: `string`

#### Defined in

[src/neuroglancer/datasource/index.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/datasource/index.ts#L77)
