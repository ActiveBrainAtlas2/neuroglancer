[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / Iterator

# Interface: Iterator<T, TReturn, TNext\>

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).Iterator

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TReturn` | `any` |
| `TNext` | `undefined` |

## Hierarchy

- **`Iterator`**

  ↳ [`IterableIterator`](axes_lines._internal_.IterableIterator.md)

  ↳ [`Generator`](layer._internal_.Generator.md)

## Table of contents

### Methods

- [next](axes_lines._internal_.Iterator.md#next)
- [return](axes_lines._internal_.Iterator.md#return)
- [throw](axes_lines._internal_.Iterator.md#throw)

## Methods

### next

▸ **next**(...`args`): [`IteratorResult`](../modules/axes_lines._internal_.md#iteratorresult)<`T`, `TReturn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [] \| [`TNext`] |

#### Returns

[`IteratorResult`](../modules/axes_lines._internal_.md#iteratorresult)<`T`, `TReturn`\>

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:45

___

### return

▸ `Optional` **return**(`value?`): [`IteratorResult`](../modules/axes_lines._internal_.md#iteratorresult)<`T`, `TReturn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `TReturn` |

#### Returns

[`IteratorResult`](../modules/axes_lines._internal_.md#iteratorresult)<`T`, `TReturn`\>

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:46

___

### throw

▸ `Optional` **throw**(`e?`): [`IteratorResult`](../modules/axes_lines._internal_.md#iteratorresult)<`T`, `TReturn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

[`IteratorResult`](../modules/axes_lines._internal_.md#iteratorresult)<`T`, `TReturn`\>

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:47
