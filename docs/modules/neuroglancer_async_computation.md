[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/async\_computation

# Module: neuroglancer/async\_computation

**`license`**
Copyright 2019 Google Inc.
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

### Interfaces

- [AsyncComputationSpec](../interfaces/neuroglancer_async_computation.AsyncComputationSpec.md)

### Functions

- [asyncComputation](neuroglancer_async_computation.md#asynccomputation)

## Functions

### asyncComputation

▸ **asyncComputation**<`Signature`\>(`id`): [`AsyncComputationSpec`](../interfaces/neuroglancer_async_computation.AsyncComputationSpec.md)<`Signature`\>

Declares an asynchronous operation.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Signature` | extends (...`args`: `any`) => `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`AsyncComputationSpec`](../interfaces/neuroglancer_async_computation.AsyncComputationSpec.md)<`Signature`\>

#### Defined in

[src/neuroglancer/async_computation/index.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/async_computation/index.ts#L29)
