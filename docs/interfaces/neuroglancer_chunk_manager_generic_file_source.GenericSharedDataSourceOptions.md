[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/chunk\_manager/generic\_file\_source](../modules/neuroglancer_chunk_manager_generic_file_source.md) / GenericSharedDataSourceOptions

# Interface: GenericSharedDataSourceOptions<Key, Data\>

[neuroglancer/chunk_manager/generic_file_source](../modules/neuroglancer_chunk_manager_generic_file_source.md).GenericSharedDataSourceOptions

## Type parameters

| Name |
| :------ |
| `Key` |
| `Data` |

## Table of contents

### Properties

- [sourceQueueLevel](neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSourceOptions.md#sourcequeuelevel)

### Methods

- [download](neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSourceOptions.md#download)
- [encodeKey](neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSourceOptions.md#encodekey)

## Properties

### sourceQueueLevel

• `Optional` **sourceQueueLevel**: `number`

#### Defined in

[src/neuroglancer/chunk_manager/generic_file_source.ts:78](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/generic_file_source.ts#L78)

## Methods

### download

▸ **download**(`key`, `cancellationToken`): `Promise`<{ `data`: `Data` ; `size`: `number`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Key` |
| `cancellationToken` | [`CancellationToken`](neuroglancer_util_cancellation.CancellationToken.md) |

#### Returns

`Promise`<{ `data`: `Data` ; `size`: `number`  }\>

#### Defined in

[src/neuroglancer/chunk_manager/generic_file_source.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/generic_file_source.ts#L77)

___

### encodeKey

▸ `Optional` **encodeKey**(`key`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Key` |

#### Returns

`string`

#### Defined in

[src/neuroglancer/chunk_manager/generic_file_source.ts:76](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/generic_file_source.ts#L76)
