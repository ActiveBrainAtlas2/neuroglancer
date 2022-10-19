[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/datasource/brainmaps/api

# Module: neuroglancer/datasource/brainmaps/api

## Table of contents

### References

- [OAuth2Credentials](neuroglancer_datasource_brainmaps_api.md#oauth2credentials)

### Interfaces

- [BatchMeshFragment](../interfaces/neuroglancer_datasource_brainmaps_api.BatchMeshFragment.md)
- [BatchMeshFragmentPayload](../interfaces/neuroglancer_datasource_brainmaps_api.BatchMeshFragmentPayload.md)
- [BrainmapsInstance](../interfaces/neuroglancer_datasource_brainmaps_api.BrainmapsInstance.md)
- [ChangeSpecPayload](../interfaces/neuroglancer_datasource_brainmaps_api.ChangeSpecPayload.md)
- [ChangeStackAwarePayload](../interfaces/neuroglancer_datasource_brainmaps_api.ChangeStackAwarePayload.md)
- [GeometryAwarePayload](../interfaces/neuroglancer_datasource_brainmaps_api.GeometryAwarePayload.md)
- [GeometryPayload](../interfaces/neuroglancer_datasource_brainmaps_api.GeometryPayload.md)
- [HttpCall](../interfaces/neuroglancer_datasource_brainmaps_api.HttpCall.md)
- [ImageFormatOptionsPayload](../interfaces/neuroglancer_datasource_brainmaps_api.ImageFormatOptionsPayload.md)
- [MeshFragmentPayload](../interfaces/neuroglancer_datasource_brainmaps_api.MeshFragmentPayload.md)
- [SkeletonPayload](../interfaces/neuroglancer_datasource_brainmaps_api.SkeletonPayload.md)
- [SubvolumePayload](../interfaces/neuroglancer_datasource_brainmaps_api.SubvolumePayload.md)

### Type Aliases

- [BrainmapsCredentialsProvider](neuroglancer_datasource_brainmaps_api.md#brainmapscredentialsprovider)

### Variables

- [credentialsKey](neuroglancer_datasource_brainmaps_api.md#credentialskey)

### Functions

- [makeRequest](neuroglancer_datasource_brainmaps_api.md#makerequest)

## References

### OAuth2Credentials

Re-exports [OAuth2Credentials](../interfaces/neuroglancer_credentials_provider_oauth2.OAuth2Credentials.md)

## Type Aliases

### BrainmapsCredentialsProvider

Ƭ **BrainmapsCredentialsProvider**: [`CredentialsProvider`](../classes/neuroglancer_credentials_provider.CredentialsProvider.md)<[`OAuth2Credentials`](../interfaces/neuroglancer_credentials_provider_oauth2.OAuth2Credentials.md)\>

#### Defined in

[src/neuroglancer/datasource/brainmaps/api.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/brainmaps/api.ts#L24)

## Variables

### credentialsKey

• `Const` **credentialsKey**: ``"google-brainmaps"``

Key used for retrieving the CredentialsProvider from a CredentialsManager.

#### Defined in

[src/neuroglancer/datasource/brainmaps/api.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/brainmaps/api.ts#L29)

## Functions

### makeRequest

▸ **makeRequest**(`instance`, `credentialsProvider`, `httpCall`, `cancellationToken?`): `Promise`<`ArrayBuffer`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `instance` | [`BrainmapsInstance`](../interfaces/neuroglancer_datasource_brainmaps_api.BrainmapsInstance.md) |
| `credentialsProvider` | [`BrainmapsCredentialsProvider`](neuroglancer_datasource_brainmaps_api.md#brainmapscredentialsprovider) |
| `httpCall` | [`HttpCall`](../interfaces/neuroglancer_datasource_brainmaps_api.HttpCall.md) & { `responseType`: ``"arraybuffer"``  } |
| `cancellationToken?` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) |

#### Returns

`Promise`<`ArrayBuffer`\>

#### Defined in

[src/neuroglancer/datasource/brainmaps/api.ts:100](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/brainmaps/api.ts#L100)

▸ **makeRequest**(`instance`, `credentialsProvider`, `httpCall`, `cancellationToken?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `instance` | [`BrainmapsInstance`](../interfaces/neuroglancer_datasource_brainmaps_api.BrainmapsInstance.md) |
| `credentialsProvider` | [`BrainmapsCredentialsProvider`](neuroglancer_datasource_brainmaps_api.md#brainmapscredentialsprovider) |
| `httpCall` | [`HttpCall`](../interfaces/neuroglancer_datasource_brainmaps_api.HttpCall.md) & { `responseType`: ``"json"``  } |
| `cancellationToken?` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/neuroglancer/datasource/brainmaps/api.ts:104](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/datasource/brainmaps/api.ts#L104)
