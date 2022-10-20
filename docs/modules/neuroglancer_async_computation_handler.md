[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/async\_computation/handler

# Module: neuroglancer/async\_computation/handler

## Table of contents

### Modules

- [&lt;internal\&gt;](neuroglancer_async_computation_handler._internal_.md)

### Functions

- [registerAsyncComputation](neuroglancer_async_computation_handler.md#registerasynccomputation)

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
| `request` | [`AsyncComputationSpec`](../interfaces/neuroglancer_async_computation.AsyncComputationSpec.md)<`Signature`\> |
| `handler` | (...`args`: [`Parameters`](neuroglancer_async_computation_handler._internal_.md#parameters)<`Signature`\>) => `Promise`<{ `transfer?`: [`Transferable`](main_module._internal_.md#transferable)[] ; `value`: [`ReturnType`](neuroglancer_annotation_renderlayer._internal_.md#returntype)<`Signature`\>  }\> |

#### Returns

`void`

#### Defined in

[src/neuroglancer/async_computation/handler.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/async_computation/handler.ts#L47)
