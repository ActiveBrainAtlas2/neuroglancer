[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/datasource/boss/credentials\_provider

# Module: neuroglancer/datasource/boss/credentials\_provider

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

[src/neuroglancer/datasource/boss/credentials_provider.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/boss/credentials_provider.ts#L32)

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

[src/neuroglancer/datasource/boss/credentials_provider.ts:117](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/datasource/boss/credentials_provider.ts#L117)
