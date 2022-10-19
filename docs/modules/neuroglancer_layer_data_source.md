[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/layer\_data\_source

# Module: neuroglancer/layer\_data\_source

## Table of contents

### Classes

- [LayerDataSource](../classes/neuroglancer_layer_data_source.LayerDataSource.md)
- [LoadedDataSubsource](../classes/neuroglancer_layer_data_source.LoadedDataSubsource.md)
- [LoadedLayerDataSource](../classes/neuroglancer_layer_data_source.LoadedLayerDataSource.md)

### Type Aliases

- [LayerDataSourceLoadState](neuroglancer_layer_data_source.md#layerdatasourceloadstate)

### Functions

- [layerDataSourceSpecificationFromJson](neuroglancer_layer_data_source.md#layerdatasourcespecificationfromjson)
- [layerDataSourceSpecificationToJson](neuroglancer_layer_data_source.md#layerdatasourcespecificationtojson)
- [parseDataSubsourceSpecificationFromJson](neuroglancer_layer_data_source.md#parsedatasubsourcespecificationfromjson)

## Type Aliases

### LayerDataSourceLoadState

Ƭ **LayerDataSourceLoadState**: { `error`: [`Error`](main_module._internal_.md#error)  } \| [`LoadedLayerDataSource`](../classes/neuroglancer_layer_data_source.LoadedLayerDataSource.md) \| `undefined`

#### Defined in

[src/neuroglancer/layer_data_source.ts:211](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_data_source.ts#L211)

## Functions

### layerDataSourceSpecificationFromJson

▸ **layerDataSourceSpecificationFromJson**(`obj`, `legacyTransform?`): [`DataSourceSpecification`](../interfaces/neuroglancer_datasource.DataSourceSpecification.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `obj` | `unknown` | `undefined` |
| `legacyTransform` | `undefined` \| [`CoordinateTransformSpecification`](../interfaces/neuroglancer_coordinate_transform.CoordinateTransformSpecification.md) | `undefined` |

#### Returns

[`DataSourceSpecification`](../interfaces/neuroglancer_datasource.DataSourceSpecification.md)

#### Defined in

[src/neuroglancer/layer_data_source.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_data_source.ts#L39)

___

### layerDataSourceSpecificationToJson

▸ **layerDataSourceSpecificationToJson**(`spec`): `string` \| { `enableDefaultSubsources`: `undefined` \| `boolean` ; `subsources`: `any` ; `transform`: `undefined` \| { `inputDimensions`: `any` ; `matrix`: `undefined` \| `number`[][] = m; `outputDimensions`: `any` ; `sourceRank`: `undefined` \| `number`  } ; `url`: `string` = spec.url }

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec` | [`DataSourceSpecification`](../interfaces/neuroglancer_datasource.DataSourceSpecification.md) |

#### Returns

`string` \| { `enableDefaultSubsources`: `undefined` \| `boolean` ; `subsources`: `any` ; `transform`: `undefined` \| { `inputDimensions`: `any` ; `matrix`: `undefined` \| `number`[][] = m; `outputDimensions`: `any` ; `sourceRank`: `undefined` \| `number`  } ; `url`: `string` = spec.url }

#### Defined in

[src/neuroglancer/layer_data_source.ts:68](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_data_source.ts#L68)

___

### parseDataSubsourceSpecificationFromJson

▸ **parseDataSubsourceSpecificationFromJson**(`json`): [`DataSubsourceSpecification`](../interfaces/neuroglancer_datasource.DataSubsourceSpecification.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `unknown` |

#### Returns

[`DataSubsourceSpecification`](../interfaces/neuroglancer_datasource.DataSubsourceSpecification.md)

#### Defined in

[src/neuroglancer/layer_data_source.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/layer_data_source.ts#L31)
