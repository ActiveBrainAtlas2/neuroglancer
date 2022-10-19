[neuroglancer](../README.md) / [Modules](../modules.md) / util/s3\_bucket\_listing

# Module: util/s3\_bucket\_listing

**`license`**
Copyright 2019 Google Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Table of contents

### Functions

- [getS3BucketListing](util_s3_bucket_listing.md#gets3bucketlisting)
- [getS3CompatiblePathCompletions](util_s3_bucket_listing.md#gets3compatiblepathcompletions)

## Functions

### getS3BucketListing

▸ **getS3BucketListing**(`credentialsProvider`, `bucketUrl`, `prefix`, `delimiter`, `cancellationToken`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `credentialsProvider` | `undefined` \| [`CredentialsProvider`](../classes/credentials_provider.CredentialsProvider.md)<`any`\> |
| `bucketUrl` | `string` |
| `prefix` | `string` |
| `delimiter` | `string` |
| `cancellationToken` | [`CancellationToken`](../interfaces/util_cancellation.CancellationToken.md) |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/neuroglancer/util/s3_bucket_listing.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/s3_bucket_listing.ts#L27)

___

### getS3CompatiblePathCompletions

▸ **getS3CompatiblePathCompletions**(`credentialsProvider`, `enteredBucketUrl`, `bucketUrl`, `path`, `cancellationToken`): `Promise`<[`BasicCompletionResult`](../interfaces/util_completion.BasicCompletionResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `credentialsProvider` | `undefined` \| [`CredentialsProvider`](../classes/credentials_provider.CredentialsProvider.md)<`any`\> |
| `enteredBucketUrl` | `string` |
| `bucketUrl` | `string` |
| `path` | `string` |
| `cancellationToken` | [`CancellationToken`](../interfaces/util_cancellation.CancellationToken.md) |

#### Returns

`Promise`<[`BasicCompletionResult`](../interfaces/util_completion.BasicCompletionResult.md)\>

#### Defined in

[src/neuroglancer/util/s3_bucket_listing.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/s3_bucket_listing.ts#L52)
