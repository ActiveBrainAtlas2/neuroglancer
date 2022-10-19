[neuroglancer](../README.md) / [Modules](../modules.md) / util/gcs\_bucket\_listing

# Module: util/gcs\_bucket\_listing

## Table of contents

### Functions

- [getGcsBucketListing](util_gcs_bucket_listing.md#getgcsbucketlisting)
- [getGcsPathCompletions](util_gcs_bucket_listing.md#getgcspathcompletions)

## Functions

### getGcsBucketListing

▸ **getGcsBucketListing**(`credentialsProvider`, `bucket`, `prefix`, `delimiter`, `cancellationToken`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `credentialsProvider` | `undefined` \| [`CredentialsProvider`](../classes/credentials_provider.CredentialsProvider.md)<`any`\> |
| `bucket` | `string` |
| `prefix` | `string` |
| `delimiter` | `string` |
| `cancellationToken` | [`CancellationToken`](../interfaces/util_cancellation.CancellationToken.md) |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/neuroglancer/util/gcs_bucket_listing.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/gcs_bucket_listing.ts#L24)

___

### getGcsPathCompletions

▸ **getGcsPathCompletions**(`credentialsProvider`, `enteredBucketUrl`, `bucket`, `path`, `cancellationToken`): `Promise`<[`BasicCompletionResult`](../interfaces/util_completion.BasicCompletionResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `credentialsProvider` | `undefined` \| [`CredentialsProvider`](../classes/credentials_provider.CredentialsProvider.md)<`any`\> |
| `enteredBucketUrl` | `string` |
| `bucket` | `string` |
| `path` | `string` |
| `cancellationToken` | [`CancellationToken`](../interfaces/util_cancellation.CancellationToken.md) |

#### Returns

`Promise`<[`BasicCompletionResult`](../interfaces/util_completion.BasicCompletionResult.md)\>

#### Defined in

[src/neuroglancer/util/gcs_bucket_listing.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/gcs_bucket_listing.ts#L51)
