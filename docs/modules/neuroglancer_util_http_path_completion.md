[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/util/http\_path\_completion

# Module: neuroglancer/util/http\_path\_completion

## Table of contents

### Functions

- [completeHttpPath](neuroglancer_util_http_path_completion.md#completehttppath)
- [getHtmlDirectoryListing](neuroglancer_util_http_path_completion.md#gethtmldirectorylisting)
- [getHtmlPathCompletions](neuroglancer_util_http_path_completion.md#gethtmlpathcompletions)

## Functions

### completeHttpPath

▸ **completeHttpPath**(`credentialsManager`, `url`, `cancellationToken`): `Promise`<[`BasicCompletionResult`](../interfaces/neuroglancer_util_completion.BasicCompletionResult.md)<[`Completion`](../interfaces/neuroglancer_util_completion.Completion.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `credentialsManager` | [`CredentialsManager`](../interfaces/neuroglancer_credentials_provider.CredentialsManager.md) |
| `url` | `string` |
| `cancellationToken` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) |

#### Returns

`Promise`<[`BasicCompletionResult`](../interfaces/neuroglancer_util_completion.BasicCompletionResult.md)<[`Completion`](../interfaces/neuroglancer_util_completion.Completion.md)\>\>

#### Defined in

[src/neuroglancer/util/http_path_completion.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/http_path_completion.ts#L95)

___

### getHtmlDirectoryListing

▸ **getHtmlDirectoryListing**(`url`, `cancellationToken`): `Promise`<`string`[]\>

Obtains a directory listing from a server that supports HTML directory listings.

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `cancellationToken` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/neuroglancer/util/http_path_completion.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/http_path_completion.ts#L29)

___

### getHtmlPathCompletions

▸ **getHtmlPathCompletions**(`url`, `cancellationToken`): `Promise`<[`BasicCompletionResult`](../interfaces/neuroglancer_util_completion.BasicCompletionResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `cancellationToken` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) |

#### Returns

`Promise`<[`BasicCompletionResult`](../interfaces/neuroglancer_util_completion.BasicCompletionResult.md)\>

#### Defined in

[src/neuroglancer/util/http_path_completion.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/http_path_completion.ts#L53)
