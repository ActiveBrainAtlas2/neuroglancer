[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/util/gcs\_bucket\_listing

# Module: neuroglancer/util/gcs\_bucket\_listing

## Table of contents

### Functions

- [getGcsBucketListing](neuroglancer_util_gcs_bucket_listing.md#getgcsbucketlisting)
- [getGcsPathCompletions](neuroglancer_util_gcs_bucket_listing.md#getgcspathcompletions)

## Functions

### getGcsBucketListing

▸ **getGcsBucketListing**(`credentialsProvider`, `bucket`, `prefix`, `delimiter`, `cancellationToken`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `credentialsProvider` | `undefined` \| [`CredentialsProvider`](../classes/neuroglancer_credentials_provider.CredentialsProvider.md)<`any`\> |
| `bucket` | `string` |
| `prefix` | `string` |
| `delimiter` | `string` |
| `cancellationToken` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/neuroglancer/util/gcs_bucket_listing.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/gcs_bucket_listing.ts#L24)

___

### getGcsPathCompletions

▸ **getGcsPathCompletions**(`credentialsProvider`, `enteredBucketUrl`, `bucket`, `path`, `cancellationToken`): `Promise`<[`BasicCompletionResult`](../interfaces/neuroglancer_util_completion.BasicCompletionResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `credentialsProvider` | `undefined` \| [`CredentialsProvider`](../classes/neuroglancer_credentials_provider.CredentialsProvider.md)<`any`\> |
| `enteredBucketUrl` | `string` |
| `bucket` | `string` |
| `path` | `string` |
| `cancellationToken` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) |

#### Returns

`Promise`<[`BasicCompletionResult`](../interfaces/neuroglancer_util_completion.BasicCompletionResult.md)\>

#### Defined in

[src/neuroglancer/util/gcs_bucket_listing.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/gcs_bucket_listing.ts#L51)
