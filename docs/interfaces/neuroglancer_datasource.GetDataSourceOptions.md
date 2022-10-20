[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/datasource](../modules/neuroglancer_datasource.md) / GetDataSourceOptions

# Interface: GetDataSourceOptions

[neuroglancer/datasource](../modules/neuroglancer_datasource.md).GetDataSourceOptions

## Hierarchy

- [`GetDataSourceOptionsBase`](neuroglancer_datasource.GetDataSourceOptionsBase.md)

  ↳ **`GetDataSourceOptions`**

## Table of contents

### Properties

- [cancellationToken](neuroglancer_datasource.GetDataSourceOptions.md#cancellationtoken)
- [chunkManager](neuroglancer_datasource.GetDataSourceOptions.md#chunkmanager)
- [credentialsManager](neuroglancer_datasource.GetDataSourceOptions.md#credentialsmanager)
- [globalCoordinateSpace](neuroglancer_datasource.GetDataSourceOptions.md#globalcoordinatespace)
- [providerProtocol](neuroglancer_datasource.GetDataSourceOptions.md#providerprotocol)
- [providerUrl](neuroglancer_datasource.GetDataSourceOptions.md#providerurl)
- [registry](neuroglancer_datasource.GetDataSourceOptions.md#registry)
- [transform](neuroglancer_datasource.GetDataSourceOptions.md#transform)
- [url](neuroglancer_datasource.GetDataSourceOptions.md#url)

## Properties

### cancellationToken

• **cancellationToken**: [`CancellationToken`](neuroglancer_util_cancellation.CancellationToken.md)

#### Overrides

[GetDataSourceOptionsBase](neuroglancer_datasource.GetDataSourceOptionsBase.md).[cancellationToken](neuroglancer_datasource.GetDataSourceOptionsBase.md#cancellationtoken)

#### Defined in

[src/neuroglancer/datasource/index.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/index.ts#L85)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](../classes/neuroglancer_chunk_manager_frontend.ChunkManager.md)

#### Inherited from

[GetDataSourceOptionsBase](neuroglancer_datasource.GetDataSourceOptionsBase.md).[chunkManager](neuroglancer_datasource.GetDataSourceOptionsBase.md#chunkmanager)

#### Defined in

[src/neuroglancer/datasource/index.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/index.ts#L75)

___

### credentialsManager

• **credentialsManager**: [`CredentialsManager`](neuroglancer_credentials_provider.CredentialsManager.md)

#### Defined in

[src/neuroglancer/datasource/index.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/index.ts#L87)

___

### globalCoordinateSpace

• **globalCoordinateSpace**: [`WatchableValueInterface`](neuroglancer_trackable_value.WatchableValueInterface.md)<[`CoordinateSpace`](neuroglancer_coordinate_transform.CoordinateSpace.md)\>

#### Inherited from

[GetDataSourceOptionsBase](neuroglancer_datasource.GetDataSourceOptionsBase.md).[globalCoordinateSpace](neuroglancer_datasource.GetDataSourceOptionsBase.md#globalcoordinatespace)

#### Defined in

[src/neuroglancer/datasource/index.ts:79](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/index.ts#L79)

___

### providerProtocol

• **providerProtocol**: `string`

#### Defined in

[src/neuroglancer/datasource/index.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/index.ts#L86)

___

### providerUrl

• **providerUrl**: `string`

#### Defined in

[src/neuroglancer/datasource/index.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/index.ts#L84)

___

### registry

• **registry**: [`DataSourceProviderRegistry`](../classes/neuroglancer_datasource.DataSourceProviderRegistry.md)

#### Defined in

[src/neuroglancer/datasource/index.ts:83](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/index.ts#L83)

___

### transform

• **transform**: `undefined` \| [`CoordinateTransformSpecification`](neuroglancer_coordinate_transform.CoordinateTransformSpecification.md)

#### Inherited from

[GetDataSourceOptionsBase](neuroglancer_datasource.GetDataSourceOptionsBase.md).[transform](neuroglancer_datasource.GetDataSourceOptionsBase.md#transform)

#### Defined in

[src/neuroglancer/datasource/index.ts:78](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/index.ts#L78)

___

### url

• **url**: `string`

#### Inherited from

[GetDataSourceOptionsBase](neuroglancer_datasource.GetDataSourceOptionsBase.md).[url](neuroglancer_datasource.GetDataSourceOptionsBase.md#url)

#### Defined in

[src/neuroglancer/datasource/index.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/index.ts#L77)
