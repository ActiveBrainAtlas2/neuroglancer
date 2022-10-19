[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / DebouncedFunc

# Interface: DebouncedFunc<T\>

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).DebouncedFunc

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`[]) => `any` |

## Callable

### DebouncedFunc

▸ **DebouncedFunc**(...`args`): `undefined` \| [`ReturnType`](../modules/annotation_annotation_layer_state._internal_.md#returntype)<`T`\>

Call the original function, but applying the debounce rules.

If the debounced function can be run immediately, this calls it and returns its return
value.

Otherwise, it returns the return value of the last invocation, or undefined if the debounced
function was not invoked yet.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`Parameters`](../modules/annotation_annotation_layer_state._internal_.md#parameters)<`T`\> |

#### Returns

`undefined` \| [`ReturnType`](../modules/annotation_annotation_layer_state._internal_.md#returntype)<`T`\>

#### Defined in

node_modules/@types/lodash/common/function.d.ts:384

## Table of contents

### Methods

- [cancel](annotation_annotation_layer_state._internal_.DebouncedFunc.md#cancel)
- [flush](annotation_annotation_layer_state._internal_.DebouncedFunc.md#flush)

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

▸ **flush**(): `undefined` \| [`ReturnType`](../modules/annotation_annotation_layer_state._internal_.md#returntype)<`T`\>

If there is a pending invocation of the debounced function, invoke it immediately and return
its return value.

Otherwise, return the value from the last invocation, or undefined if the debounced function
was never invoked.

#### Returns

`undefined` \| [`ReturnType`](../modules/annotation_annotation_layer_state._internal_.md#returntype)<`T`\>

#### Defined in

node_modules/@types/lodash/common/function.d.ts:398
