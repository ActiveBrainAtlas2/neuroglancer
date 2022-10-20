[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/chunk\_manager/backend](../modules/neuroglancer_chunk_manager_backend.md) / [<internal\>](../modules/neuroglancer_chunk_manager_backend._internal_.md) / DebouncedFunc

# Interface: DebouncedFunc<T\>

[neuroglancer/chunk_manager/backend](../modules/neuroglancer_chunk_manager_backend.md).[<internal>](../modules/neuroglancer_chunk_manager_backend._internal_.md).DebouncedFunc

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`[]) => `any` |

## Callable

### DebouncedFunc

▸ **DebouncedFunc**(...`args`): `undefined` \| [`ReturnType`](../modules/neuroglancer_annotation_renderlayer._internal_.md#returntype)<`T`\>

Call the original function, but applying the debounce rules.

If the debounced function can be run immediately, this calls it and returns its return
value.

Otherwise, it returns the return value of the last invocation, or undefined if the debounced
function was not invoked yet.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`Parameters`](../modules/neuroglancer_async_computation_handler._internal_.md#parameters)<`T`\> |

#### Returns

`undefined` \| [`ReturnType`](../modules/neuroglancer_annotation_renderlayer._internal_.md#returntype)<`T`\>

#### Defined in

node_modules/@types/lodash/common/function.d.ts:384

## Table of contents

### Methods

- [cancel](neuroglancer_chunk_manager_backend._internal_.DebouncedFunc.md#cancel)
- [flush](neuroglancer_chunk_manager_backend._internal_.DebouncedFunc.md#flush)

## Methods

### cancel

▸ **cancel**(): `void`

Throw away any pending invocation of the debounced function.

#### Returns

`void`

#### Defined in

node_modules/@types/lodash/common/function.d.ts:389

___

### flush

▸ **flush**(): `undefined` \| [`ReturnType`](../modules/neuroglancer_annotation_renderlayer._internal_.md#returntype)<`T`\>

If there is a pending invocation of the debounced function, invoke it immediately and return
its return value.

Otherwise, return the value from the last invocation, or undefined if the debounced function
was never invoked.

#### Returns

`undefined` \| [`ReturnType`](../modules/neuroglancer_annotation_renderlayer._internal_.md#returntype)<`T`\>

#### Defined in

node_modules/@types/lodash/common/function.d.ts:398
