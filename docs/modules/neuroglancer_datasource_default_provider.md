[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/datasource/default\_provider

# Module: neuroglancer/datasource/default\_provider

## Table of contents

### Interfaces

- [ProviderOptions](../interfaces/neuroglancer_datasource_default_provider.ProviderOptions.md)

### Type Aliases

- [ProviderFactory](neuroglancer_datasource_default_provider.md#providerfactory)

### Functions

- [getDefaultDataSourceProvider](neuroglancer_datasource_default_provider.md#getdefaultdatasourceprovider)
- [registerProvider](neuroglancer_datasource_default_provider.md#registerprovider)

## Type Aliases

### ProviderFactory

Ƭ **ProviderFactory**: (`options`: [`ProviderOptions`](../interfaces/neuroglancer_datasource_default_provider.ProviderOptions.md)) => [`Owned`](neuroglancer_util_disposable.md#owned)<[`DataSourceProvider`](../classes/neuroglancer_datasource.DataSourceProvider.md)\>

#### Type declaration

▸ (`options`): [`Owned`](neuroglancer_util_disposable.md#owned)<[`DataSourceProvider`](../classes/neuroglancer_datasource.DataSourceProvider.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ProviderOptions`](../interfaces/neuroglancer_datasource_default_provider.ProviderOptions.md) |

##### Returns

[`Owned`](neuroglancer_util_disposable.md#owned)<[`DataSourceProvider`](../classes/neuroglancer_datasource.DataSourceProvider.md)\>

#### Defined in

[src/neuroglancer/datasource/default_provider.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/default_provider.ts#L29)

## Functions

### getDefaultDataSourceProvider

▸ **getDefaultDataSourceProvider**(`options`): [`DataSourceProviderRegistry`](../classes/neuroglancer_datasource.DataSourceProviderRegistry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ProviderOptions`](../interfaces/neuroglancer_datasource_default_provider.ProviderOptions.md) |

#### Returns

[`DataSourceProviderRegistry`](../classes/neuroglancer_datasource.DataSourceProviderRegistry.md)

#### Defined in

[src/neuroglancer/datasource/default_provider.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/default_provider.ts#L36)

___

### registerProvider

▸ **registerProvider**(`name`, `factory`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `factory` | [`ProviderFactory`](neuroglancer_datasource_default_provider.md#providerfactory) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/datasource/default_provider.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/default_provider.ts#L32)
