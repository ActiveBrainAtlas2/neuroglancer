[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/credentials\_provider/http\_request

# Module: neuroglancer/credentials\_provider/http\_request

## Table of contents

### Functions

- [fetchWithCredentials](neuroglancer_credentials_provider_http_request.md#fetchwithcredentials)

## Functions

### fetchWithCredentials

▸ **fetchWithCredentials**<`Credentials`, `T`\>(`credentialsProvider`, `input`, `init`, `transformResponse`, `applyCredentials`, `errorHandler`, `cancellationToken?`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `Credentials` |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `credentialsProvider` | [`CredentialsProvider`](../classes/neuroglancer_credentials_provider.CredentialsProvider.md)<`Credentials`\> | `undefined` |
| `input` | [`RequestInfo`](main_module._internal_.md#requestinfo) \| (`credentials`: `Credentials`) => [`RequestInfo`](main_module._internal_.md#requestinfo) | `undefined` |
| `init` | [`RequestInit`](../interfaces/main_module._internal_.RequestInit.md) | `undefined` |
| `transformResponse` | [`ResponseTransform`](neuroglancer_util_http_request.md#responsetransform)<`T`\> | `undefined` |
| `applyCredentials` | (`credentials`: `Credentials`, `requestInit`: [`RequestInit`](../interfaces/main_module._internal_.RequestInit.md)) => [`RequestInit`](../interfaces/main_module._internal_.RequestInit.md) | `undefined` |
| `errorHandler` | (`httpError`: [`HttpError`](../classes/neuroglancer_util_http_request.HttpError.md), `credentials`: `Credentials`) => ``"refresh"`` \| ``"retry"`` | `undefined` |
| `cancellationToken` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) | `uncancelableToken` |

#### Returns

`Promise`<`T`\>

#### Defined in

[src/neuroglancer/credentials_provider/http_request.ts:35](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/credentials_provider/http_request.ts#L35)
