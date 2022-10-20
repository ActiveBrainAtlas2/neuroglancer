[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/chunk\_manager/generic\_file\_source

# Module: neuroglancer/chunk\_manager/generic\_file\_source

## Table of contents

### Modules

- [&lt;internal\&gt;](neuroglancer_chunk_manager_generic_file_source._internal_.md)

### Classes

- [GenericSharedDataSource](../classes/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSource.md)

### Interfaces

- [GenericSharedDataSourceOptions](../interfaces/neuroglancer_chunk_manager_generic_file_source.GenericSharedDataSourceOptions.md)

### Type Aliases

- [PriorityGetter](neuroglancer_chunk_manager_generic_file_source.md#prioritygetter)

## Type Aliases

### PriorityGetter

Ƭ **PriorityGetter**: () => { `priority`: `number` ; `priorityTier`: [`ChunkPriorityTier`](../enums/neuroglancer_chunk_manager_base.ChunkPriorityTier.md)  }

#### Type declaration

▸ (): `Object`

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `priority` | `number` |
| `priorityTier` | [`ChunkPriorityTier`](../enums/neuroglancer_chunk_manager_base.ChunkPriorityTier.md) |

#### Defined in

[src/neuroglancer/chunk_manager/generic_file_source.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/chunk_manager/generic_file_source.ts#L31)
