[neuroglancer](../README.md) / [Modules](../modules.md) / util/byte\_range\_http\_requests

# Module: util/byte\_range\_http\_requests

## Table of contents

### Functions

- [fetchSpecialHttpByteRange](util_byte_range_http_requests.md#fetchspecialhttpbyterange)

## Functions

### fetchSpecialHttpByteRange

▸ **fetchSpecialHttpByteRange**(`credentialsProvider`, `url`, `startOffset`, `endOffset`, `cancellationToken`): `Promise`<`ArrayBuffer`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `credentialsProvider` | `undefined` \| [`CredentialsProvider`](../classes/credentials_provider.CredentialsProvider.md)<`any`\> |
| `url` | `string` |
| `startOffset` | `number` \| [`Uint64`](../classes/util_uint64.Uint64.md) |
| `endOffset` | `number` \| [`Uint64`](../classes/util_uint64.Uint64.md) |
| `cancellationToken` | [`CancellationToken`](../interfaces/util_cancellation.CancellationToken.md) |

#### Returns

`Promise`<`ArrayBuffer`\>

#### Defined in

[src/neuroglancer/util/byte_range_http_requests.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/byte_range_http_requests.ts#L30)
