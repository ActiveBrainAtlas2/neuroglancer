[neuroglancer](../README.md) / [Modules](../modules.md) / single\_mesh/frontend

# Module: single\_mesh/frontend

## Table of contents

### Modules

- [&lt;internal\&gt;](single_mesh_frontend._internal_.md)

### Classes

- [SingleMeshChunk](../classes/single_mesh_frontend.SingleMeshChunk.md)
- [SingleMeshDisplayState](../classes/single_mesh_frontend.SingleMeshDisplayState.md)
- [SingleMeshLayer](../classes/single_mesh_frontend.SingleMeshLayer.md)
- [SingleMeshShaderManager](../classes/single_mesh_frontend.SingleMeshShaderManager.md)
- [SingleMeshSource](../classes/single_mesh_frontend.SingleMeshSource.md)
- [VertexChunkData](../classes/single_mesh_frontend.VertexChunkData.md)

### Functions

- [getAttributeTextureFormats](single_mesh_frontend.md#getattributetextureformats)
- [getShaderAttributeType](single_mesh_frontend.md#getshaderattributetype)
- [getSingleMeshSource](single_mesh_frontend.md#getsinglemeshsource)
- [pickAttributeNames](single_mesh_frontend.md#pickattributenames)

## Functions

### getAttributeTextureFormats

▸ **getAttributeTextureFormats**(`vertexAttributes`): [`TextureFormat`](../classes/webgl_texture_access.TextureFormat.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `vertexAttributes` | [`VertexAttributeInfo`](../interfaces/single_mesh_base.VertexAttributeInfo.md)[] |

#### Returns

[`TextureFormat`](../classes/webgl_texture_access.TextureFormat.md)[]

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:310](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/single_mesh/frontend.ts#L310)

___

### getShaderAttributeType

▸ **getShaderAttributeType**(`info`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | `Object` |
| `info.dataType` | [`DataType`](../enums/util_data_type.DataType.md) |
| `info.numComponents` | `number` |

#### Returns

`string`

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/single_mesh/frontend.ts#L54)

___

### getSingleMeshSource

▸ **getSingleMeshSource**(`chunkManager`, `credentialsManager`, `url`): `Promise`<[`SingleMeshSource`](../classes/single_mesh_frontend.SingleMeshSource.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunkManager` | [`ChunkManager`](../classes/chunk_manager_frontend.ChunkManager.md) |
| `credentialsManager` | [`CredentialsManager`](../interfaces/credentials_provider.CredentialsManager.md) |
| `url` | `string` |

#### Returns

`Promise`<[`SingleMeshSource`](../classes/single_mesh_frontend.SingleMeshSource.md)\>

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:487](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/single_mesh/frontend.ts#L487)

___

### pickAttributeNames

▸ **pickAttributeNames**(`existingNames`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `existingNames` | `string`[] |

#### Returns

`string`[]

#### Defined in

[src/neuroglancer/single_mesh/frontend.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/single_mesh/frontend.ts#L67)
