[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/async\_computation

# Module: neuroglancer/async\_computation

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

[src/neuroglancer/async_computation/index.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/async_computation/index.ts#L29)
