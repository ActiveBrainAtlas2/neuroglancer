[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/async\_computation/request

# Module: neuroglancer/async\_computation/request

## Table of contents

### Functions

- [requestAsyncComputation](neuroglancer_async_computation_request.md#requestasynccomputation)

## Functions

### requestAsyncComputation

▸ **requestAsyncComputation**<`Signature`\>(`request`, `cancellationToken`, `transfer`, ...`args`): `Promise`<[`ReturnType`](neuroglancer_annotation_renderlayer._internal_.md#returntype)<`Signature`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Signature` | extends (...`args`: `any`) => `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`AsyncComputationSpec`](../interfaces/neuroglancer_async_computation.AsyncComputationSpec.md)<`Signature`\> |
| `cancellationToken` | [`CancellationToken`](../interfaces/neuroglancer_util_cancellation.CancellationToken.md) |
| `transfer` | `undefined` \| [`Transferable`](main_module._internal_.md#transferable)[] |
| `...args` | [`Parameters`](neuroglancer_async_computation_handler._internal_.md#parameters)<`Signature`\> |

#### Returns

`Promise`<[`ReturnType`](neuroglancer_annotation_renderlayer._internal_.md#returntype)<`Signature`\>\>

#### Defined in

[src/neuroglancer/async_computation/request.ts:69](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/async_computation/request.ts#L69)
