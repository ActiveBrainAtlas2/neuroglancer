[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/datasource/boss/api

# Module: neuroglancer/datasource/boss/api

## Table of contents

### Type Aliases

- [BossToken](neuroglancer_datasource_boss_api.md#bosstoken)

### Variables

- [credentialsKey](neuroglancer_datasource_boss_api.md#credentialskey)

### Functions

- [fetchWithBossCredentials](neuroglancer_datasource_boss_api.md#fetchwithbosscredentials)

## Type Aliases

### BossToken

Ƭ **BossToken**: `string`

#### Defined in

[src/neuroglancer/datasource/boss/api.ts:22](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/boss/api.ts#L22)

## Variables

### credentialsKey

• `Const` **credentialsKey**: ``"boss"``

Key used for retrieving the CredentialsProvider from a CredentialsManager.

#### Defined in

[src/neuroglancer/datasource/boss/api.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/boss/api.ts#L27)

## Functions

### fetchWithBossCredentials

▸ **fetchWithBossCredentials**<`T`\>(`credentialsProvider`, `input`, `init`, `transformResponse`, `cancellationToken?`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `credentialsProvider` | [`CredentialsProvider`](../classes/neuroglancer_credentials_provider.CredentialsProvider.md)<`string`\> | `undefined` |
| `input` | [`RequestInfo`](main_module._internal_.md#requestinfo) | `undefined` |
| `init` | [`RequestInit`](../interfaces/main_module._internal_.RequestInit.md) | `undefined` |
| `transformResponse` | [`ResponseTransform`](neuroglancer_util_http_request.md#responsetransform)<`T`\> | `undefined` |
| `cancellationToken` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) | `uncancelableToken` |

#### Returns

`Promise`<`T`\>

#### Defined in

[src/neuroglancer/datasource/boss/api.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/boss/api.ts#L29)
