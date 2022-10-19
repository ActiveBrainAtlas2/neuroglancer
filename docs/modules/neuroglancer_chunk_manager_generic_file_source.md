[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/chunk\_manager/generic\_file\_source

# Module: neuroglancer/chunk\_manager/generic\_file\_source

**`license`**
Copyright 2016 Google Inc.
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

[src/neuroglancer/chunk_manager/generic_file_source.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/chunk_manager/generic_file_source.ts#L31)
