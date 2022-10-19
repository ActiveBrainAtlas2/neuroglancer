[neuroglancer](../README.md) / [Modules](../modules.md) / async\_computation/handler

# Module: async\_computation/handler

## Table of contents

### Functions

- [registerAsyncComputation](async_computation_handler.md#registerasynccomputation)

## Functions

### registerAsyncComputation

▸ **registerAsyncComputation**<`Signature`\>(`request`, `handler`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Signature` | extends (...`args`: `any`) => `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`AsyncComputationSpec`](../interfaces/async_computation.AsyncComputationSpec.md)<`Signature`\> |
| `handler` | (...`args`: [`Parameters`](annotation_annotation_layer_state._internal_.md#parameters)<`Signature`\>) => `Promise`<{ `transfer?`: [`Transferable`](annotation_annotation_layer_state._internal_.md#transferable)[] ; `value`: [`ReturnType`](annotation_annotation_layer_state._internal_.md#returntype)<`Signature`\>  }\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/async_computation/handler.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/async_computation/handler.ts#L47)
