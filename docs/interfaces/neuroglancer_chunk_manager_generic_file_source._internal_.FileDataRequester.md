[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/chunk\_manager/generic\_file\_source](../modules/neuroglancer_chunk_manager_generic_file_source.md) / [<internal\>](../modules/neuroglancer_chunk_manager_generic_file_source._internal_.md) / FileDataRequester

# Interface: FileDataRequester<Data\>

[neuroglancer/chunk_manager/generic_file_source](../modules/neuroglancer_chunk_manager_generic_file_source.md).[<internal>](../modules/neuroglancer_chunk_manager_generic_file_source._internal_.md).FileDataRequester

## Type parameters

| Name |
| :------ |
| `Data` |

## Table of contents

### Properties

- [getPriority](neuroglancer_chunk_manager_generic_file_source._internal_.FileDataRequester.md#getpriority)
- [reject](neuroglancer_chunk_manager_generic_file_source._internal_.FileDataRequester.md#reject)
- [resolve](neuroglancer_chunk_manager_generic_file_source._internal_.FileDataRequester.md#resolve)

## Properties

### getPriority

• **getPriority**: [`PriorityGetter`](../modules/neuroglancer_chunk_manager_generic_file_source.md#prioritygetter)

#### Defined in

[src/neuroglancer/chunk_manager/generic_file_source.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/generic_file_source.ts#L38)

___

### reject

• **reject**: (`error`: `any`) => `void`

#### Type declaration

▸ (`error`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `any` |

##### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/generic_file_source.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/generic_file_source.ts#L37)

___

### resolve

• **resolve**: (`data`: `Data`) => `void`

#### Type declaration

▸ (`data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Data` |

##### Returns

`void`

#### Defined in

[src/neuroglancer/chunk_manager/generic_file_source.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/generic_file_source.ts#L36)
