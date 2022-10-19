[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/datasource/boss/credentials\_provider

# Module: neuroglancer/datasource/boss/credentials\_provider

**`license`**
Copyright 2016 Google Inc.
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

### Classes

- [BossCredentialsProvider](../classes/neuroglancer_datasource_boss_credentials_provider.BossCredentialsProvider.md)

### Type Aliases

- [BossToken](neuroglancer_datasource_boss_credentials_provider.md#bosstoken)

### Functions

- [authenticateKeycloakOIDC](neuroglancer_datasource_boss_credentials_provider.md#authenticatekeycloakoidc)

## Type Aliases

### BossToken

Ƭ **BossToken**: `string`

#### Defined in

[src/neuroglancer/datasource/boss/credentials_provider.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/boss/credentials_provider.ts#L32)

## Functions

### authenticateKeycloakOIDC

▸ **authenticateKeycloakOIDC**(`options`, `cancellationToken?`): `Promise`<`string`\>

Obtain a Keycloak OIDC authentication token.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `options` | `Object` | `undefined` |
| `options.authServer` | `string` | `undefined` |
| `options.clientId` | `string` | `undefined` |
| `options.realm` | `string` | `undefined` |
| `cancellationToken` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) | `uncancelableToken` |

#### Returns

`Promise`<`string`\>

A Promise that resolves to an authentication token.

#### Defined in

[src/neuroglancer/datasource/boss/credentials_provider.ts:117](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/boss/credentials_provider.ts#L117)
