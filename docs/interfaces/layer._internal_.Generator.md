[neuroglancer](../README.md) / [Modules](../modules.md) / [layer](../modules/layer.md) / [<internal\>](../modules/layer._internal_.md) / Generator

# Interface: Generator<T, TReturn, TNext\>

[layer](../modules/layer.md).[<internal>](../modules/layer._internal_.md).Generator

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |
| `TReturn` | `any` |
| `TNext` | `unknown` |

## Hierarchy

- [`Iterator`](axes_lines._internal_.Iterator.md)<`T`, `TReturn`, `TNext`\>

  ↳ **`Generator`**

## Table of contents

### Methods

- [[iterator]](layer._internal_.Generator.md#[iterator])
- [next](layer._internal_.Generator.md#next)
- [return](layer._internal_.Generator.md#return)
- [throw](layer._internal_.Generator.md#throw)

## Methods

### [iterator]

▸ **[iterator]**(): [`Generator`](layer._internal_.Generator.md)<`T`, `TReturn`, `TNext`\>

#### Returns

[`Generator`](layer._internal_.Generator.md)<`T`, `TReturn`, `TNext`\>

#### Defined in

node_modules/typescript/lib/lib.es2015.generator.d.ts:28

___

### next

▸ **next**(...`args`): [`IteratorResult`](../modules/axes_lines._internal_.md#iteratorresult)<`T`, `TReturn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [] \| [`TNext`] |

#### Returns

[`IteratorResult`](../modules/axes_lines._internal_.md#iteratorresult)<`T`, `TReturn`\>

#### Overrides

[Iterator](axes_lines._internal_.Iterator.md).[next](axes_lines._internal_.Iterator.md#next)

#### Defined in

node_modules/typescript/lib/lib.es2015.generator.d.ts:25

___

### return

▸ **return**(`value`): [`IteratorResult`](../modules/axes_lines._internal_.md#iteratorresult)<`T`, `TReturn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `TReturn` |

#### Returns

[`IteratorResult`](../modules/axes_lines._internal_.md#iteratorresult)<`T`, `TReturn`\>

#### Overrides

[Iterator](axes_lines._internal_.Iterator.md).[return](axes_lines._internal_.Iterator.md#return)

#### Defined in

node_modules/typescript/lib/lib.es2015.generator.d.ts:26

___

### throw

▸ **throw**(`e`): [`IteratorResult`](../modules/axes_lines._internal_.md#iteratorresult)<`T`, `TReturn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |

#### Returns

[`IteratorResult`](../modules/axes_lines._internal_.md#iteratorresult)<`T`, `TReturn`\>

#### Overrides

[Iterator](axes_lines._internal_.Iterator.md).[throw](axes_lines._internal_.Iterator.md#throw)

#### Defined in

node_modules/typescript/lib/lib.es2015.generator.d.ts:27
