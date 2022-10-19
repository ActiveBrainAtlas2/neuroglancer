[neuroglancer](../README.md) / [Modules](../modules.md) / credentials\_provider/oauth2

# Module: credentials\_provider/oauth2

## Table of contents

### Interfaces

- [OAuth2Credentials](../interfaces/credentials_provider_oauth2.OAuth2Credentials.md)

### Functions

- [fetchWithOAuth2Credentials](credentials_provider_oauth2.md#fetchwithoauth2credentials)

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
| `credentialsProvider` | `undefined` \| [`CredentialsProvider`](../classes/credentials_provider.CredentialsProvider.md)<[`OAuth2Credentials`](../interfaces/credentials_provider_oauth2.OAuth2Credentials.md)\> | `undefined` |
| `input` | [`RequestInfo`](annotation_annotation_layer_state._internal_.md#requestinfo) | `undefined` |
| `init` | [`RequestInit`](../interfaces/annotation_annotation_layer_state._internal_.RequestInit.md) | `undefined` |
| `transformResponse` | [`ResponseTransform`](util_http_request.md#responsetransform)<`T`\> | `undefined` |
| `cancellationToken` | [`CancellationToken`](../interfaces/util_cancellation.CancellationToken.md) | `uncancelableToken` |

#### Returns

`Promise`<`T`\>

#### Defined in

[src/neuroglancer/credentials_provider/oauth2.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/credentials_provider/oauth2.ts#L31)
