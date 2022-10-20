[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/credentials\_provider/chunk\_source\_frontend

# Module: neuroglancer/credentials\_provider/chunk\_source\_frontend

## Table of contents

### Modules

- [&lt;internal\&gt;](neuroglancer_credentials_provider_chunk_source_frontend._internal_.md)

### Functions

- [WithCredentialsProvider](neuroglancer_credentials_provider_chunk_source_frontend.md#withcredentialsprovider)
- [getCredentialsProviderCounterpart](neuroglancer_credentials_provider_chunk_source_frontend.md#getcredentialsprovidercounterpart)

## Functions

### WithCredentialsProvider

▸ **WithCredentialsProvider**<`Credentials`\>(): <TBase\>(`Base`: `TBase`) => (...`args`: `any`[]) => `C`<`Credentials`, `TBase`\> & `TBase`

Mixin for adding a credentialsProvider member to a ChunkSource.

#### Type parameters

| Name |
| :------ |
| `Credentials` |

#### Returns

`fn`

▸ <`TBase`\>(`Base`): (...`args`: `any`[]) => `C`<`Credentials`, `TBase`\> & `TBase`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TBase` | extends [`ChunkSourceConstructor`](../interfaces/neuroglancer_chunk_manager_frontend.ChunkSourceConstructor.md)<[`SharedObject`](../classes/neuroglancer_worker_rpc.SharedObject.md) & { `OPTIONS`: {} ; `key`: `any`  } & { `chunkManager`: [`ChunkManager`](../classes/neuroglancer_chunk_manager_frontend.ChunkManager.md)  }, `TBase`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `Base` | `TBase` |

##### Returns

(...`args`: `any`[]) => `C`<`Credentials`, `TBase`\> & `TBase`

#### Defined in

[src/neuroglancer/credentials_provider/chunk_source_frontend.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/credentials_provider/chunk_source_frontend.ts#L46)

___

### getCredentialsProviderCounterpart

▸ **getCredentialsProviderCounterpart**<`Credentials`\>(`chunkManager`, `credentialsProvider`): `undefined` \| { `gen`: `number` = ++this.referencedGeneration; `id`: ``null`` \| `number`  }

Returns a counterpart ref to be sent to the backend to retrieve a
SharedCredentialsProviderCounterpart that forwards to `credentialsProvider`.

#### Type parameters

| Name |
| :------ |
| `Credentials` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](../classes/neuroglancer_chunk_manager_frontend.ChunkManager.md) |
| `credentialsProvider` | [`MaybeOptionalCredentialsProvider`](neuroglancer_credentials_provider.md#maybeoptionalcredentialsprovider)<`Credentials`\> |

#### Returns

`undefined` \| { `gen`: `number` = ++this.referencedGeneration; `id`: ``null`` \| `number`  }

#### Defined in

[src/neuroglancer/credentials_provider/chunk_source_frontend.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/credentials_provider/chunk_source_frontend.ts#L31)
