[neuroglancer](../README.md) / [Modules](../modules.md) / [layer](../modules/layer.md) / [<internal\>](../modules/layer._internal_.md) / GetDataSourceOptions

# Interface: GetDataSourceOptions

[layer](../modules/layer.md).[<internal>](../modules/layer._internal_.md).GetDataSourceOptions

## Hierarchy

- [`GetDataSourceOptionsBase`](layer._internal_.GetDataSourceOptionsBase.md)

  ↳ **`GetDataSourceOptions`**

## Table of contents

### Properties

- [cancellationToken](layer._internal_.GetDataSourceOptions.md#cancellationtoken)
- [chunkManager](layer._internal_.GetDataSourceOptions.md#chunkmanager)
- [credentialsManager](layer._internal_.GetDataSourceOptions.md#credentialsmanager)
- [globalCoordinateSpace](layer._internal_.GetDataSourceOptions.md#globalcoordinatespace)
- [providerProtocol](layer._internal_.GetDataSourceOptions.md#providerprotocol)
- [providerUrl](layer._internal_.GetDataSourceOptions.md#providerurl)
- [registry](layer._internal_.GetDataSourceOptions.md#registry)
- [transform](layer._internal_.GetDataSourceOptions.md#transform)
- [url](layer._internal_.GetDataSourceOptions.md#url)

## Properties

### cancellationToken

• **cancellationToken**: [`CancellationToken`](layer._internal_.CancellationToken.md)

#### Overrides

[GetDataSourceOptionsBase](layer._internal_.GetDataSourceOptionsBase.md).[cancellationToken](layer._internal_.GetDataSourceOptionsBase.md#cancellationtoken)

#### Defined in

[src/neuroglancer/datasource/index.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/datasource/index.ts#L85)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](../classes/data_panel_layout._internal_.ChunkManager.md)

#### Inherited from

[GetDataSourceOptionsBase](layer._internal_.GetDataSourceOptionsBase.md).[chunkManager](layer._internal_.GetDataSourceOptionsBase.md#chunkmanager)

#### Defined in

[src/neuroglancer/datasource/index.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/datasource/index.ts#L75)

___

### credentialsManager

• **credentialsManager**: [`CredentialsManager`](layer._internal_.CredentialsManager.md)

#### Defined in

[src/neuroglancer/datasource/index.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/datasource/index.ts#L87)

___

### globalCoordinateSpace

• **globalCoordinateSpace**: [`WatchableValueInterface`](trackable_value.WatchableValueInterface.md)<[`CoordinateSpace`](coordinate_transform.CoordinateSpace.md)\>

#### Inherited from

[GetDataSourceOptionsBase](layer._internal_.GetDataSourceOptionsBase.md).[globalCoordinateSpace](layer._internal_.GetDataSourceOptionsBase.md#globalcoordinatespace)

#### Defined in

[src/neuroglancer/datasource/index.ts:79](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/datasource/index.ts#L79)

___

### providerProtocol

• **providerProtocol**: `string`

#### Defined in

[src/neuroglancer/datasource/index.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/datasource/index.ts#L86)

___

### providerUrl

• **providerUrl**: `string`

#### Defined in

[src/neuroglancer/datasource/index.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/datasource/index.ts#L84)

___

### registry

• **registry**: [`DataSourceProviderRegistry`](../classes/layer._internal_.DataSourceProviderRegistry.md)

#### Defined in

[src/neuroglancer/datasource/index.ts:83](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/datasource/index.ts#L83)

___

### transform

• **transform**: `undefined` \| [`CoordinateTransformSpecification`](coordinate_transform.CoordinateTransformSpecification.md)

#### Inherited from

[GetDataSourceOptionsBase](layer._internal_.GetDataSourceOptionsBase.md).[transform](layer._internal_.GetDataSourceOptionsBase.md#transform)

#### Defined in

[src/neuroglancer/datasource/index.ts:78](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/datasource/index.ts#L78)

___

### url

• **url**: `string`

#### Inherited from

[GetDataSourceOptionsBase](layer._internal_.GetDataSourceOptionsBase.md).[url](layer._internal_.GetDataSourceOptionsBase.md#url)

#### Defined in

[src/neuroglancer/datasource/index.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/datasource/index.ts#L77)
