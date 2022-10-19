[neuroglancer](../README.md) / [Modules](../modules.md) / credentials\_provider/chunk\_source\_frontend

# Module: credentials\_provider/chunk\_source\_frontend

**`license`**
Copyright 2017 Google Inc.
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

### Modules

- [&lt;internal\&gt;](credentials_provider_chunk_source_frontend._internal_.md)

### Functions

- [WithCredentialsProvider](credentials_provider_chunk_source_frontend.md#withcredentialsprovider)
- [getCredentialsProviderCounterpart](credentials_provider_chunk_source_frontend.md#getcredentialsprovidercounterpart)

## Functions

### WithCredentialsProvider

▸ **WithCredentialsProvider**<`Credentials`\>(): <TBase\>(`Base`: `TBase`) => { `prototype`: `C`<`any`, `any`\> ; `encodeOptions`: (`options`: [`WithCredentialsOptions`](credentials_provider_chunk_source_frontend._internal_.md#withcredentialsoptions)) => `any`  } & `TBase`

Mixin for adding a credentialsProvider member to a ChunkSource.

#### Type parameters

| Name |
| :------ |
| `Credentials` |

#### Returns

`fn`

▸ <`TBase`\>(`Base`): { `prototype`: `C`<`any`, `any`\> ; `encodeOptions`: (`options`: [`WithCredentialsOptions`](credentials_provider_chunk_source_frontend._internal_.md#withcredentialsoptions)) => `any`  } & `TBase`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TBase` | extends [`ChunkSourceConstructor`](../interfaces/chunk_manager_frontend.ChunkSourceConstructor.md)<[`SharedObject`](../classes/annotation_annotation_layer_state._internal_.SharedObject.md) & { `OPTIONS`: {} ; `key`: `any`  } & { `chunkManager`: [`ChunkManager`](../classes/chunk_manager_frontend.ChunkManager.md)  }, `TBase`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `Base` | `TBase` |

##### Returns

{ `prototype`: `C`<`any`, `any`\> ; `encodeOptions`: (`options`: [`WithCredentialsOptions`](credentials_provider_chunk_source_frontend._internal_.md#withcredentialsoptions)) => `any`  } & `TBase`

#### Defined in

[src/neuroglancer/credentials_provider/chunk_source_frontend.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/credentials_provider/chunk_source_frontend.ts#L46)

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
| `chunkManager` | [`ChunkManager`](../classes/chunk_manager_frontend.ChunkManager.md) |
| `credentialsProvider` | [`MaybeOptionalCredentialsProvider`](credentials_provider.md#maybeoptionalcredentialsprovider)<`Credentials`\> |

#### Returns

`undefined` \| { `gen`: `number` = ++this.referencedGeneration; `id`: ``null`` \| `number`  }

#### Defined in

[src/neuroglancer/credentials_provider/chunk_source_frontend.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/credentials_provider/chunk_source_frontend.ts#L31)
