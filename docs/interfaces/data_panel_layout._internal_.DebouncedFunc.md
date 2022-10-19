[neuroglancer](../README.md) / [Modules](../modules.md) / [data\_panel\_layout](../modules/data_panel_layout.md) / [<internal\>](../modules/data_panel_layout._internal_.md) / DebouncedFunc

# Interface: DebouncedFunc<T\>

[data_panel_layout](../modules/data_panel_layout.md).[<internal>](../modules/data_panel_layout._internal_.md).DebouncedFunc

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`[]) => `any` |

## Callable

### DebouncedFunc

▸ **DebouncedFunc**(...`args`): `undefined` \| [`ReturnType`](../modules/data_panel_layout._internal_.md#returntype)<`T`\>

Call the original function, but applying the debounce rules.

If the debounced function can be run immediately, this calls it and returns its return
value.

Otherwise, it returns the return value of the last invocation, or undefined if the debounced
function was not invoked yet.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`Parameters`](../modules/data_panel_layout._internal_.md#parameters)<`T`\> |

#### Returns

`undefined` \| [`ReturnType`](../modules/data_panel_layout._internal_.md#returntype)<`T`\>

#### Defined in

node_modules/@types/lodash/common/function.d.ts:384

## Table of contents

### Methods

- [cancel](data_panel_layout._internal_.DebouncedFunc.md#cancel)
- [flush](data_panel_layout._internal_.DebouncedFunc.md#flush)

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

▸ **flush**(): `undefined` \| [`ReturnType`](../modules/data_panel_layout._internal_.md#returntype)<`T`\>

If there is a pending invocation of the debounced function, invoke it immediately and return
its return value.

Otherwise, return the value from the last invocation, or undefined if the debounced function
was never invoked.

#### Returns

`undefined` \| [`ReturnType`](../modules/data_panel_layout._internal_.md#returntype)<`T`\>

#### Defined in

node_modules/@types/lodash/common/function.d.ts:398
