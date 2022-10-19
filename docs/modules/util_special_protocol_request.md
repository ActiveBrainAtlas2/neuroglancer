[neuroglancer](../README.md) / [Modules](../modules.md) / util/special\_protocol\_request

# Module: util/special\_protocol\_request

## Table of contents

### Type Aliases

- [SpecialProtocolCredentials](util_special_protocol_request.md#specialprotocolcredentials)
- [SpecialProtocolCredentialsProvider](util_special_protocol_request.md#specialprotocolcredentialsprovider)

### Functions

- [cancellableFetchSpecialOk](util_special_protocol_request.md#cancellablefetchspecialok)
- [parseSpecialUrl](util_special_protocol_request.md#parsespecialurl)

## Type Aliases

### SpecialProtocolCredentials

Ƭ **SpecialProtocolCredentials**: `any`

#### Defined in

[src/neuroglancer/util/special_protocol_request.ts:23](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/special_protocol_request.ts#L23)

___

### SpecialProtocolCredentialsProvider

Ƭ **SpecialProtocolCredentialsProvider**: [`MaybeOptionalCredentialsProvider`](credentials_provider.md#maybeoptionalcredentialsprovider)<[`SpecialProtocolCredentials`](util_special_protocol_request.md#specialprotocolcredentials)\>

#### Defined in

[src/neuroglancer/util/special_protocol_request.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/special_protocol_request.ts#L24)

## Functions

### cancellableFetchSpecialOk

▸ **cancellableFetchSpecialOk**<`T`\>(`credentialsProvider`, `url`, `init`, `transformResponse`, `cancellationToken?`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `credentialsProvider` | `undefined` \| [`CredentialsProvider`](../classes/credentials_provider.CredentialsProvider.md)<`any`\> | `undefined` |
| `url` | `string` | `undefined` |
| `init` | [`RequestInit`](../interfaces/annotation_annotation_layer_state._internal_.RequestInit.md) | `undefined` |
| `transformResponse` | [`ResponseTransform`](util_http_request.md#responsetransform)<`T`\> | `undefined` |
| `cancellationToken` | [`CancellationToken`](../interfaces/util_cancellation.CancellationToken.md) | `uncancelableToken` |

#### Returns

`Promise`<`T`\>

#### Defined in

[src/neuroglancer/util/special_protocol_request.ts:99](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/special_protocol_request.ts#L99)

___

### parseSpecialUrl

▸ **parseSpecialUrl**(`url`, `credentialsManager`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `credentialsManager` | [`CredentialsManager`](../interfaces/credentials_provider.CredentialsManager.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `credentialsProvider` | [`SpecialProtocolCredentialsProvider`](util_special_protocol_request.md#specialprotocolcredentialsprovider) |
| `url` | `string` |

#### Defined in

[src/neuroglancer/util/special_protocol_request.ts:44](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/special_protocol_request.ts#L44)
