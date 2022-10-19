[neuroglancer](../README.md) / [Modules](../modules.md) / async\_computation/request

# Module: async\_computation/request

## Table of contents

### Functions

- [requestAsyncComputation](async_computation_request.md#requestasynccomputation)

## Functions

### requestAsyncComputation

▸ **requestAsyncComputation**<`Signature`\>(`request`, `cancellationToken`, `transfer`, ...`args`): `Promise`<[`ReturnType`](annotation_annotation_layer_state._internal_.md#returntype)<`Signature`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Signature` | extends (...`args`: `any`) => `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`AsyncComputationSpec`](../interfaces/async_computation.AsyncComputationSpec.md)<`Signature`\> |
| `cancellationToken` | [`CancellationToken`](../interfaces/util_cancellation.CancellationToken.md) |
| `transfer` | `undefined` \| [`Transferable`](annotation_annotation_layer_state._internal_.md#transferable)[] |
| `...args` | [`Parameters`](annotation_annotation_layer_state._internal_.md#parameters)<`Signature`\> |

#### Returns

`Promise`<[`ReturnType`](annotation_annotation_layer_state._internal_.md#returntype)<`Signature`\>\>

#### Defined in

[src/neuroglancer/async_computation/request.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/async_computation/request.ts#L69)
