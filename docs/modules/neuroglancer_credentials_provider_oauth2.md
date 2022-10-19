[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/credentials\_provider/oauth2

# Module: neuroglancer/credentials\_provider/oauth2

## Table of contents

### Interfaces

- [OAuth2Credentials](../interfaces/neuroglancer_credentials_provider_oauth2.OAuth2Credentials.md)

### Functions

- [fetchWithOAuth2Credentials](neuroglancer_credentials_provider_oauth2.md#fetchwithoauth2credentials)

## Functions

### fetchWithOAuth2Credentials

▸ **fetchWithOAuth2Credentials**<`T`\>(`credentialsProvider`, `input`, `init`, `transformResponse`, `cancellationToken?`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `credentialsProvider` | `undefined` \| [`CredentialsProvider`](../classes/neuroglancer_credentials_provider.CredentialsProvider.md)<[`OAuth2Credentials`](../interfaces/neuroglancer_credentials_provider_oauth2.OAuth2Credentials.md)\> | `undefined` |
| `input` | [`RequestInfo`](main_module._internal_.md#requestinfo) | `undefined` |
| `init` | [`RequestInit`](../interfaces/main_module._internal_.RequestInit.md) | `undefined` |
| `transformResponse` | [`ResponseTransform`](neuroglancer_util_http_request.md#responsetransform)<`T`\> | `undefined` |
| `cancellationToken` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) | `uncancelableToken` |

#### Returns

`Promise`<`T`\>

#### Defined in

[src/neuroglancer/credentials_provider/oauth2.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/credentials_provider/oauth2.ts#L31)
