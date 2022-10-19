[neuroglancer](../README.md) / [Modules](../modules.md) / util/http\_path\_completion

# Module: util/http\_path\_completion

## Table of contents

### Functions

- [completeHttpPath](util_http_path_completion.md#completehttppath)
- [getHtmlDirectoryListing](util_http_path_completion.md#gethtmldirectorylisting)
- [getHtmlPathCompletions](util_http_path_completion.md#gethtmlpathcompletions)

## Functions

### completeHttpPath

▸ **completeHttpPath**(`credentialsManager`, `url`, `cancellationToken`): `Promise`<[`BasicCompletionResult`](../interfaces/util_completion.BasicCompletionResult.md)<[`Completion`](../interfaces/util_completion.Completion.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `credentialsManager` | [`CredentialsManager`](../interfaces/credentials_provider.CredentialsManager.md) |
| `url` | `string` |
| `cancellationToken` | [`CancellationToken`](../interfaces/util_cancellation.CancellationToken.md) |

#### Returns

`Promise`<[`BasicCompletionResult`](../interfaces/util_completion.BasicCompletionResult.md)<[`Completion`](../interfaces/util_completion.Completion.md)\>\>

#### Defined in

[src/neuroglancer/util/http_path_completion.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/http_path_completion.ts#L95)

___

### getHtmlDirectoryListing

▸ **getHtmlDirectoryListing**(`url`, `cancellationToken`): `Promise`<`string`[]\>

Obtains a directory listing from a server that supports HTML directory listings.

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `cancellationToken` | [`CancellationToken`](../interfaces/util_cancellation.CancellationToken.md) |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/neuroglancer/util/http_path_completion.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/http_path_completion.ts#L29)

___

### getHtmlPathCompletions

▸ **getHtmlPathCompletions**(`url`, `cancellationToken`): `Promise`<[`BasicCompletionResult`](../interfaces/util_completion.BasicCompletionResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `cancellationToken` | [`CancellationToken`](../interfaces/util_cancellation.CancellationToken.md) |

#### Returns

`Promise`<[`BasicCompletionResult`](../interfaces/util_completion.BasicCompletionResult.md)\>

#### Defined in

[src/neuroglancer/util/http_path_completion.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/http_path_completion.ts#L53)
