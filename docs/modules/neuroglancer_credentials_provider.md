[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/credentials\_provider

# Module: neuroglancer/credentials\_provider

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

### Modules

- [&lt;internal\&gt;](neuroglancer_credentials_provider._internal_.md)

### Classes

- [AnonymousFirstCredentialsProvider](../classes/neuroglancer_credentials_provider.AnonymousFirstCredentialsProvider.md)
- [CachingCredentialsManager](../classes/neuroglancer_credentials_provider.CachingCredentialsManager.md)
- [CachingMapBasedCredentialsManager](../classes/neuroglancer_credentials_provider.CachingMapBasedCredentialsManager.md)
- [CredentialsProvider](../classes/neuroglancer_credentials_provider.CredentialsProvider.md)
- [MapBasedCredentialsManager](../classes/neuroglancer_credentials_provider.MapBasedCredentialsManager.md)

### Interfaces

- [CredentialsManager](../interfaces/neuroglancer_credentials_provider.CredentialsManager.md)
- [CredentialsWithGeneration](../interfaces/neuroglancer_credentials_provider.CredentialsWithGeneration.md)

### Type Aliases

- [MaybeOptionalCredentialsProvider](neuroglancer_credentials_provider.md#maybeoptionalcredentialsprovider)
- [ProviderGetter](neuroglancer_credentials_provider.md#providergetter)

### Functions

- [makeCachedCredentialsGetter](neuroglancer_credentials_provider.md#makecachedcredentialsgetter)
- [makeCredentialsGetter](neuroglancer_credentials_provider.md#makecredentialsgetter)

## Type Aliases

### MaybeOptionalCredentialsProvider

Ƭ **MaybeOptionalCredentialsProvider**<`T`\>: `T` extends `undefined` ? `undefined` : [`CredentialsProvider`](../classes/neuroglancer_credentials_provider.CredentialsProvider.md)<[`Exclude`](neuroglancer_credentials_provider._internal_.md#exclude)<`T`, `undefined`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/neuroglancer/credentials_provider/index.ts:160](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/credentials_provider/index.ts#L160)

___

### ProviderGetter

Ƭ **ProviderGetter**<`Credentials`\>: (`parameters`: `any`, `credentialsManager`: [`CredentialsManager`](../interfaces/neuroglancer_credentials_provider.CredentialsManager.md)) => [`Owned`](neuroglancer_util_disposable.md#owned)<[`CredentialsProvider`](../classes/neuroglancer_credentials_provider.CredentialsProvider.md)<`Credentials`\>\>

#### Type parameters

| Name |
| :------ |
| `Credentials` |

#### Type declaration

▸ (`parameters`, `credentialsManager`): [`Owned`](neuroglancer_util_disposable.md#owned)<[`CredentialsProvider`](../classes/neuroglancer_credentials_provider.CredentialsProvider.md)<`Credentials`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | `any` |
| `credentialsManager` | [`CredentialsManager`](../interfaces/neuroglancer_credentials_provider.CredentialsManager.md) |

##### Returns

[`Owned`](neuroglancer_util_disposable.md#owned)<[`CredentialsProvider`](../classes/neuroglancer_credentials_provider.CredentialsProvider.md)<`Credentials`\>\>

#### Defined in

[src/neuroglancer/credentials_provider/index.ts:101](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/credentials_provider/index.ts#L101)

## Functions

### makeCachedCredentialsGetter

▸ **makeCachedCredentialsGetter**<`Credentials`\>(`getUncached`): (`invalidCredentials?`: [`CredentialsWithGeneration`](../interfaces/neuroglancer_credentials_provider.CredentialsWithGeneration.md)<`Credentials`\>, `cancellationToken?`: [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md)) => `Promise`<[`CredentialsWithGeneration`](../interfaces/neuroglancer_credentials_provider.CredentialsWithGeneration.md)<`Credentials`\>\>

#### Type parameters

| Name |
| :------ |
| `Credentials` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `getUncached` | (`invalidCredentials`: `undefined` \| [`CredentialsWithGeneration`](../interfaces/neuroglancer_credentials_provider.CredentialsWithGeneration.md)<`Credentials`\>, `cancellationToken`: [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md)) => `Promise`<[`CredentialsWithGeneration`](../interfaces/neuroglancer_credentials_provider.CredentialsWithGeneration.md)<`Credentials`\>\> |

#### Returns

`fn`

▸ (`invalidCredentials?`, `cancellationToken?`): `Promise`<[`CredentialsWithGeneration`](../interfaces/neuroglancer_credentials_provider.CredentialsWithGeneration.md)<`Credentials`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `invalidCredentials?` | [`CredentialsWithGeneration`](../interfaces/neuroglancer_credentials_provider.CredentialsWithGeneration.md)<`Credentials`\> |
| `cancellationToken?` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) |

##### Returns

`Promise`<[`CredentialsWithGeneration`](../interfaces/neuroglancer_credentials_provider.CredentialsWithGeneration.md)<`Credentials`\>\>

#### Defined in

[src/neuroglancer/credentials_provider/index.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/credentials_provider/index.ts#L47)

___

### makeCredentialsGetter

▸ **makeCredentialsGetter**<`Credentials`\>(`getWithoutGeneration`): (`invalidCredentials?`: [`CredentialsWithGeneration`](../interfaces/neuroglancer_credentials_provider.CredentialsWithGeneration.md)<`Credentials`\>, `cancellationToken?`: [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md)) => `Promise`<[`CredentialsWithGeneration`](../interfaces/neuroglancer_credentials_provider.CredentialsWithGeneration.md)<`Credentials`\>\>

#### Type parameters

| Name |
| :------ |
| `Credentials` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `getWithoutGeneration` | (`cancellationToken`: [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md)) => `Promise`<`Credentials`\> |

#### Returns

`fn`

▸ (`invalidCredentials?`, `cancellationToken?`): `Promise`<[`CredentialsWithGeneration`](../interfaces/neuroglancer_credentials_provider.CredentialsWithGeneration.md)<`Credentials`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `invalidCredentials?` | [`CredentialsWithGeneration`](../interfaces/neuroglancer_credentials_provider.CredentialsWithGeneration.md)<`Credentials`\> |
| `cancellationToken?` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) |

##### Returns

`Promise`<[`CredentialsWithGeneration`](../interfaces/neuroglancer_credentials_provider.CredentialsWithGeneration.md)<`Credentials`\>\>

#### Defined in

[src/neuroglancer/credentials_provider/index.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/credentials_provider/index.ts#L84)
