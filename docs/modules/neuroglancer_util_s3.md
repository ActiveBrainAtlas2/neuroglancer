[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/util/s3

# Module: neuroglancer/util/s3

## Table of contents

### Modules

- [&lt;internal\&gt;](neuroglancer_util_s3._internal_.md)

### Functions

- [cancellableFetchS3Ok](neuroglancer_util_s3.md#cancellablefetchs3ok)
- [getS3PathCompletions](neuroglancer_util_s3.md#gets3pathcompletions)
- [getS3RegionCredentials](neuroglancer_util_s3.md#gets3regioncredentials)

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
| `credentialsProvider` | [`CredentialsProvider`](../classes/neuroglancer_credentials_provider.CredentialsProvider.md)<[`S3BucketCredentials`](../interfaces/neuroglancer_util_s3._internal_.S3BucketCredentials.md)\> | `undefined` |
| `bucket` | `string` | `undefined` |
| `path` | `string` | `undefined` |
| `requestInit` | [`RequestInit`](../interfaces/main_module._internal_.RequestInit.md) | `undefined` |
| `transformResponse` | [`ResponseTransform`](neuroglancer_util_http_request.md#responsetransform)<`T`\> | `undefined` |
| `cancellationToken` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) | `uncancelableToken` |

#### Returns

`Promise`<`T`\>

#### Defined in

[src/neuroglancer/util/s3.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/s3.ts#L56)

___

### getS3PathCompletions

▸ **getS3PathCompletions**(`bucket`, `path`, `cancellationToken`): `Promise`<[`BasicCompletionResult`](../interfaces/neuroglancer_util_completion.BasicCompletionResult.md)<[`Completion`](../interfaces/neuroglancer_util_completion.Completion.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `bucket` | `string` |
| `path` | `string` |
| `cancellationToken` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) |

#### Returns

`Promise`<[`BasicCompletionResult`](../interfaces/neuroglancer_util_completion.BasicCompletionResult.md)<[`Completion`](../interfaces/neuroglancer_util_completion.Completion.md)\>\>

#### Defined in

[src/neuroglancer/util/s3.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/s3.ts#L67)

___

### getS3RegionCredentials

▸ **getS3RegionCredentials**(`bucket`): [`CredentialsProvider`](../classes/neuroglancer_credentials_provider.CredentialsProvider.md)<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `bucket` | `string` |

#### Returns

[`CredentialsProvider`](../classes/neuroglancer_credentials_provider.CredentialsProvider.md)<`unknown`\>

#### Defined in

[src/neuroglancer/util/s3.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/s3.ts#L48)
