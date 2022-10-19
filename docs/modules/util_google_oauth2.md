[neuroglancer](../README.md) / [Modules](../modules.md) / util/google\_oauth2

# Module: util/google\_oauth2

## Table of contents

### Classes

- [GoogleOAuth2CredentialsProvider](../classes/util_google_oauth2.GoogleOAuth2CredentialsProvider.md)

### Interfaces

- [OAuth2Token](../interfaces/util_google_oauth2.OAuth2Token.md)

### Variables

- [AUTH\_SERVER](util_google_oauth2.md#auth_server)

### Functions

- [authenticateGoogleOAuth2](util_google_oauth2.md#authenticategoogleoauth2)
- [embedRelayFrame](util_google_oauth2.md#embedrelayframe)
- [fetchWithGoogleCredentials](util_google_oauth2.md#fetchwithgooglecredentials)

## Variables

### AUTH\_SERVER

• `Const` **AUTH\_SERVER**: ``"https://accounts.google.com/o/oauth2/auth"``

#### Defined in

[src/neuroglancer/util/google_oauth2.ts:26](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/google_oauth2.ts#L26)

## Functions

### authenticateGoogleOAuth2

▸ **authenticateGoogleOAuth2**(`options`, `cancellationToken?`): `Promise`<[`OAuth2Token`](../interfaces/util_google_oauth2.OAuth2Token.md)\>

Obtain a Google OAuth2 authentication token.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `options` | `Object` | `undefined` |
| `options.approvalPrompt?` | ``"auto"`` \| ``"force"`` | `undefined` |
| `options.authUser?` | `number` | `undefined` |
| `options.clientId` | `string` | `undefined` |
| `options.immediate?` | `boolean` | `undefined` |
| `options.loginHint?` | `string` | `undefined` |
| `options.scopes` | `string`[] | `undefined` |
| `cancellationToken` | [`CancellationToken`](../interfaces/util_cancellation.CancellationToken.md) | `uncancelableToken` |

#### Returns

`Promise`<[`OAuth2Token`](../interfaces/util_google_oauth2.OAuth2Token.md)\>

A Promise that resolves to an authentication token.

#### Defined in

[src/neuroglancer/util/google_oauth2.ts:204](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/google_oauth2.ts#L204)

___

### embedRelayFrame

▸ **embedRelayFrame**(`proxyName`, `rpcToken`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `proxyName` | `string` |
| `rpcToken` | `string` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/google_oauth2.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/google_oauth2.ts#L30)

___

### fetchWithGoogleCredentials

▸ **fetchWithGoogleCredentials**(`credentialsProvider`, `input`, `init?`): `Promise`<[`Response`](annotation_annotation_layer_state._internal_.md#response)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `credentialsProvider` | [`CredentialsProvider`](../classes/credentials_provider.CredentialsProvider.md)<[`OAuth2Token`](../interfaces/util_google_oauth2.OAuth2Token.md)\> |
| `input` | `string` \| [`Request`](annotation_annotation_layer_state._internal_.md#request) |
| `init` | [`RequestInit`](../interfaces/annotation_annotation_layer_state._internal_.RequestInit.md) |

#### Returns

`Promise`<[`Response`](annotation_annotation_layer_state._internal_.md#response)\>

#### Defined in

[src/neuroglancer/util/google_oauth2.ts:338](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/google_oauth2.ts#L338)
