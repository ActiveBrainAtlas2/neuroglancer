[neuroglancer](../README.md) / [Modules](../modules.md) / [chunk\_manager/generic\_file\_source](../modules/chunk_manager_generic_file_source.md) / [<internal\>](../modules/chunk_manager_generic_file_source._internal_.md) / FileDataRequester

# Interface: FileDataRequester<Data\>

[chunk_manager/generic_file_source](../modules/chunk_manager_generic_file_source.md).[<internal>](../modules/chunk_manager_generic_file_source._internal_.md).FileDataRequester

## Type parameters

| Name |
| :------ |
| `Data` |

## Table of contents

### Properties

- [getPriority](chunk_manager_generic_file_source._internal_.FileDataRequester.md#getpriority)

### Methods

- [reject](chunk_manager_generic_file_source._internal_.FileDataRequester.md#reject)
- [resolve](chunk_manager_generic_file_source._internal_.FileDataRequester.md#resolve)

## Properties

### getPriority

• **getPriority**: [`PriorityGetter`](../modules/chunk_manager_generic_file_source.md#prioritygetter)

#### Defined in

[src/neuroglancer/chunk_manager/generic_file_source.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/generic_file_source.ts#L38)

## Methods

### reject

▸ **reject**(`error`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `any` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/generic_file_source.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/generic_file_source.ts#L37)

___

### resolve

▸ **resolve**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Data` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/generic_file_source.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/chunk_manager/generic_file_source.ts#L36)
