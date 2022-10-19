[neuroglancer](../README.md) / [Modules](../modules.md) / [datasource](../modules/datasource.md) / GetDataSourceOptions

# Interface: GetDataSourceOptions

[datasource](../modules/datasource.md).GetDataSourceOptions

## Hierarchy

- [`GetDataSourceOptionsBase`](datasource.GetDataSourceOptionsBase.md)

  ↳ **`GetDataSourceOptions`**

## Table of contents

### Properties

- [cancellationToken](datasource.GetDataSourceOptions.md#cancellationtoken)
- [chunkManager](datasource.GetDataSourceOptions.md#chunkmanager)
- [credentialsManager](datasource.GetDataSourceOptions.md#credentialsmanager)
- [globalCoordinateSpace](datasource.GetDataSourceOptions.md#globalcoordinatespace)
- [providerProtocol](datasource.GetDataSourceOptions.md#providerprotocol)
- [providerUrl](datasource.GetDataSourceOptions.md#providerurl)
- [registry](datasource.GetDataSourceOptions.md#registry)
- [transform](datasource.GetDataSourceOptions.md#transform)
- [url](datasource.GetDataSourceOptions.md#url)

## Properties

### cancellationToken

• **cancellationToken**: [`CancellationToken`](util_cancellation.CancellationToken.md)

#### Overrides

[GetDataSourceOptionsBase](datasource.GetDataSourceOptionsBase.md).[cancellationToken](datasource.GetDataSourceOptionsBase.md#cancellationtoken)

#### Defined in

[src/neuroglancer/datasource/index.ts:85](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/datasource/index.ts#L85)

___

### chunkManager

• **chunkManager**: [`ChunkManager`](../classes/chunk_manager_frontend.ChunkManager.md)

#### Inherited from

[GetDataSourceOptionsBase](datasource.GetDataSourceOptionsBase.md).[chunkManager](datasource.GetDataSourceOptionsBase.md#chunkmanager)

#### Defined in

[src/neuroglancer/datasource/index.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/datasource/index.ts#L75)

___

### credentialsManager

• **credentialsManager**: [`CredentialsManager`](credentials_provider.CredentialsManager.md)

#### Defined in

[src/neuroglancer/datasource/index.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/datasource/index.ts#L87)

___

### globalCoordinateSpace

• **globalCoordinateSpace**: [`WatchableValueInterface`](annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<[`CoordinateSpace`](annotation_annotation_layer_state._internal_.CoordinateSpace.md)\>

#### Inherited from

[GetDataSourceOptionsBase](datasource.GetDataSourceOptionsBase.md).[globalCoordinateSpace](datasource.GetDataSourceOptionsBase.md#globalcoordinatespace)

#### Defined in

[src/neuroglancer/datasource/index.ts:79](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/datasource/index.ts#L79)

___

### providerProtocol

• **providerProtocol**: `string`

#### Defined in

[src/neuroglancer/datasource/index.ts:86](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/datasource/index.ts#L86)

___

### providerUrl

• **providerUrl**: `string`

#### Defined in

[src/neuroglancer/datasource/index.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/datasource/index.ts#L84)

___

### registry

• **registry**: [`DataSourceProviderRegistry`](../classes/datasource.DataSourceProviderRegistry.md)

#### Defined in

[src/neuroglancer/datasource/index.ts:83](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/datasource/index.ts#L83)

___

### transform

• **transform**: `undefined` \| [`CoordinateTransformSpecification`](annotation_annotation_layer_state._internal_.CoordinateTransformSpecification.md)

#### Inherited from

[GetDataSourceOptionsBase](datasource.GetDataSourceOptionsBase.md).[transform](datasource.GetDataSourceOptionsBase.md#transform)

#### Defined in

[src/neuroglancer/datasource/index.ts:78](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/datasource/index.ts#L78)

___

### url

• **url**: `string`

#### Inherited from

[GetDataSourceOptionsBase](datasource.GetDataSourceOptionsBase.md).[url](datasource.GetDataSourceOptionsBase.md#url)

#### Defined in

[src/neuroglancer/datasource/index.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/datasource/index.ts#L77)
