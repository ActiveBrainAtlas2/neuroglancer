[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/datasource/default\_provider

# Module: neuroglancer/datasource/default\_provider

**`license`**
Copyright 2017 Google Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

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

[src/neuroglancer/datasource/default_provider.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/default_provider.ts#L29)

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

[src/neuroglancer/datasource/default_provider.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/default_provider.ts#L36)

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

[src/neuroglancer/datasource/default_provider.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/default_provider.ts#L32)
