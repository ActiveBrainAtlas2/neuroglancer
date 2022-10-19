[neuroglancer](../README.md) / [Modules](../modules.md) / credentials\_provider/http\_request

# Module: credentials\_provider/http\_request

## Table of contents

### Functions

- [fetchWithCredentials](credentials_provider_http_request.md#fetchwithcredentials)

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
| `credentialsProvider` | [`CredentialsProvider`](../classes/credentials_provider.CredentialsProvider.md)<`Credentials`\> | `undefined` |
| `input` | [`RequestInfo`](annotation_annotation_layer_state._internal_.md#requestinfo) \| (`credentials`: `Credentials`) => [`RequestInfo`](annotation_annotation_layer_state._internal_.md#requestinfo) | `undefined` |
| `init` | [`RequestInit`](../interfaces/annotation_annotation_layer_state._internal_.RequestInit.md) | `undefined` |
| `transformResponse` | [`ResponseTransform`](util_http_request.md#responsetransform)<`T`\> | `undefined` |
| `applyCredentials` | (`credentials`: `Credentials`, `requestInit`: [`RequestInit`](../interfaces/annotation_annotation_layer_state._internal_.RequestInit.md)) => [`RequestInit`](../interfaces/annotation_annotation_layer_state._internal_.RequestInit.md) | `undefined` |
| `errorHandler` | (`httpError`: [`HttpError`](../classes/util_http_request.HttpError.md), `credentials`: `Credentials`) => ``"refresh"`` \| ``"retry"`` | `undefined` |
| `cancellationToken` | [`CancellationToken`](../interfaces/util_cancellation.CancellationToken.md) | `uncancelableToken` |

#### Returns

`Promise`<`T`\>

#### Defined in

[src/neuroglancer/credentials_provider/http_request.ts:35](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/credentials_provider/http_request.ts#L35)
