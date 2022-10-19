[neuroglancer](../README.md) / [Modules](../modules.md) / layer\_data\_source

# Module: layer\_data\_source

## Table of contents

### Classes

- [LayerDataSource](../classes/layer_data_source.LayerDataSource.md)
- [LoadedDataSubsource](../classes/layer_data_source.LoadedDataSubsource.md)
- [LoadedLayerDataSource](../classes/layer_data_source.LoadedLayerDataSource.md)

### Type Aliases

- [LayerDataSourceLoadState](layer_data_source.md#layerdatasourceloadstate)

### Functions

- [layerDataSourceSpecificationFromJson](layer_data_source.md#layerdatasourcespecificationfromjson)
- [layerDataSourceSpecificationToJson](layer_data_source.md#layerdatasourcespecificationtojson)
- [parseDataSubsourceSpecificationFromJson](layer_data_source.md#parsedatasubsourcespecificationfromjson)

## Type Aliases

### LayerDataSourceLoadState

Ƭ **LayerDataSourceLoadState**: { `error`: [`Error`](axes_lines._internal_.md#error)  } \| [`LoadedLayerDataSource`](../classes/layer_data_source.LoadedLayerDataSource.md) \| `undefined`

#### Defined in

[src/neuroglancer/layer_data_source.ts:211](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer_data_source.ts#L211)

## Functions

### layerDataSourceSpecificationFromJson

▸ **layerDataSourceSpecificationFromJson**(`obj`, `legacyTransform?`): [`DataSourceSpecification`](../interfaces/image_user_layer._internal_.DataSourceSpecification.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `obj` | `unknown` | `undefined` |
| `legacyTransform` | `undefined` \| [`CoordinateTransformSpecification`](../interfaces/coordinate_transform.CoordinateTransformSpecification.md) | `undefined` |

#### Returns

[`DataSourceSpecification`](../interfaces/image_user_layer._internal_.DataSourceSpecification.md)

#### Defined in

[src/neuroglancer/layer_data_source.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer_data_source.ts#L39)

___

### layerDataSourceSpecificationToJson

▸ **layerDataSourceSpecificationToJson**(`spec`): `string` \| { `enableDefaultSubsources`: `undefined` \| `boolean` ; `subsources`: `any` ; `transform`: `undefined` \| { `inputDimensions`: `any` ; `matrix`: `undefined` \| `number`[][] = m; `outputDimensions`: `any` ; `sourceRank`: `undefined` \| `number`  } ; `url`: `string` = spec.url }

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec` | [`DataSourceSpecification`](../interfaces/image_user_layer._internal_.DataSourceSpecification.md) |

#### Returns

`string` \| { `enableDefaultSubsources`: `undefined` \| `boolean` ; `subsources`: `any` ; `transform`: `undefined` \| { `inputDimensions`: `any` ; `matrix`: `undefined` \| `number`[][] = m; `outputDimensions`: `any` ; `sourceRank`: `undefined` \| `number`  } ; `url`: `string` = spec.url }

#### Defined in

[src/neuroglancer/layer_data_source.ts:68](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer_data_source.ts#L68)

___

### parseDataSubsourceSpecificationFromJson

▸ **parseDataSubsourceSpecificationFromJson**(`json`): [`DataSubsourceSpecification`](../interfaces/image_user_layer._internal_.DataSubsourceSpecification.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `unknown` |

#### Returns

[`DataSubsourceSpecification`](../interfaces/image_user_layer._internal_.DataSubsourceSpecification.md)

#### Defined in

[src/neuroglancer/layer_data_source.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/layer_data_source.ts#L31)
