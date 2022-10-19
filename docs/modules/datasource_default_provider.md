[neuroglancer](../README.md) / [Modules](../modules.md) / datasource/default\_provider

# Module: datasource/default\_provider

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

- [ProviderOptions](../interfaces/datasource_default_provider.ProviderOptions.md)

### Type Aliases

- [ProviderFactory](datasource_default_provider.md#providerfactory)

### Functions

- [getDefaultDataSourceProvider](datasource_default_provider.md#getdefaultdatasourceprovider)
- [registerProvider](datasource_default_provider.md#registerprovider)

## Type Aliases

### ProviderFactory

Ƭ **ProviderFactory**: (`options`: [`ProviderOptions`](../interfaces/datasource_default_provider.ProviderOptions.md)) => [`Owned`](util_disposable.md#owned)<[`DataSourceProvider`](../classes/datasource.DataSourceProvider.md)\>

#### Type declaration

▸ (`options`): [`Owned`](util_disposable.md#owned)<[`DataSourceProvider`](../classes/datasource.DataSourceProvider.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ProviderOptions`](../interfaces/datasource_default_provider.ProviderOptions.md) |

##### Returns

[`Owned`](util_disposable.md#owned)<[`DataSourceProvider`](../classes/datasource.DataSourceProvider.md)\>

#### Defined in

[src/neuroglancer/datasource/default_provider.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/datasource/default_provider.ts#L29)

## Functions

### getDefaultDataSourceProvider

▸ **getDefaultDataSourceProvider**(`options`): [`DataSourceProviderRegistry`](../classes/datasource.DataSourceProviderRegistry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ProviderOptions`](../interfaces/datasource_default_provider.ProviderOptions.md) |

#### Returns

[`DataSourceProviderRegistry`](../classes/datasource.DataSourceProviderRegistry.md)

#### Defined in

[src/neuroglancer/datasource/default_provider.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/datasource/default_provider.ts#L36)

___

### registerProvider

▸ **registerProvider**(`name`, `factory`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `factory` | [`ProviderFactory`](datasource_default_provider.md#providerfactory) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/datasource/default_provider.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/datasource/default_provider.ts#L32)
