[neuroglancer](../README.md) / [Modules](../modules.md) / util/s3

# Module: util/s3

## Table of contents

### Modules

- [&lt;internal\&gt;](util_s3._internal_.md)

### Functions

- [cancellableFetchS3Ok](util_s3.md#cancellablefetchs3ok)
- [getS3PathCompletions](util_s3.md#gets3pathcompletions)
- [getS3RegionCredentials](util_s3.md#gets3regioncredentials)

## Functions

### cancellableFetchS3Ok

▸ **cancellableFetchS3Ok**<`T`\>(`credentialsProvider`, `bucket`, `path`, `requestInit`, `transformResponse`, `cancellationToken?`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `credentialsProvider` | [`CredentialsProvider`](../classes/credentials_provider.CredentialsProvider.md)<[`S3BucketCredentials`](../interfaces/util_s3._internal_.S3BucketCredentials.md)\> | `undefined` |
| `bucket` | `string` | `undefined` |
| `path` | `string` | `undefined` |
| `requestInit` | [`RequestInit`](../interfaces/annotation_annotation_layer_state._internal_.RequestInit.md) | `undefined` |
| `transformResponse` | [`ResponseTransform`](util_http_request.md#responsetransform)<`T`\> | `undefined` |
| `cancellationToken` | [`CancellationToken`](../interfaces/util_cancellation.CancellationToken.md) | `uncancelableToken` |

#### Returns

`Promise`<`T`\>

#### Defined in

[src/neuroglancer/util/s3.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/s3.ts#L56)

___

### getS3PathCompletions

▸ **getS3PathCompletions**(`bucket`, `path`, `cancellationToken`): `Promise`<[`BasicCompletionResult`](../interfaces/util_completion.BasicCompletionResult.md)<[`Completion`](../interfaces/util_completion.Completion.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `bucket` | `string` |
| `path` | `string` |
| `cancellationToken` | [`CancellationToken`](../interfaces/util_cancellation.CancellationToken.md) |

#### Returns

`Promise`<[`BasicCompletionResult`](../interfaces/util_completion.BasicCompletionResult.md)<[`Completion`](../interfaces/util_completion.Completion.md)\>\>

#### Defined in

[src/neuroglancer/util/s3.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/s3.ts#L67)

___

### getS3RegionCredentials

▸ **getS3RegionCredentials**(`bucket`): [`CredentialsProvider`](../classes/credentials_provider.CredentialsProvider.md)<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `bucket` | `string` |

#### Returns

[`CredentialsProvider`](../classes/credentials_provider.CredentialsProvider.md)<`unknown`\>

#### Defined in

[src/neuroglancer/util/s3.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/s3.ts#L48)
