[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / IterableIterator

# Interface: IterableIterator<T\>

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).IterableIterator

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Iterator`](main_module._internal_.Iterator.md)<`T`\>

  ↳ **`IterableIterator`**

## Table of contents

### Methods

- [[iterator]](main_module._internal_.IterableIterator.md#[iterator])
- [next](main_module._internal_.IterableIterator.md#next)
- [return](main_module._internal_.IterableIterator.md#return)
- [throw](main_module._internal_.IterableIterator.md#throw)

## Methods

### [iterator]

▸ **[iterator]**(): [`IterableIterator`](main_module._internal_.IterableIterator.md)<`T`\>

#### Returns

[`IterableIterator`](main_module._internal_.IterableIterator.md)<`T`\>

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:55

___

### next

▸ **next**(...`args`): [`IteratorResult`](../modules/main_module._internal_.md#iteratorresult)<`T`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [] \| [`undefined`] |

#### Returns

[`IteratorResult`](../modules/main_module._internal_.md#iteratorresult)<`T`, `any`\>

#### Inherited from

[Iterator](main_module._internal_.Iterator.md).[next](main_module._internal_.Iterator.md#next)

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:45

___

### return

▸ `Optional` **return**(`value?`): [`IteratorResult`](../modules/main_module._internal_.md#iteratorresult)<`T`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `any` |

#### Returns

[`IteratorResult`](../modules/main_module._internal_.md#iteratorresult)<`T`, `any`\>

#### Inherited from

[Iterator](main_module._internal_.Iterator.md).[return](main_module._internal_.Iterator.md#return)

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:46

___

### throw

▸ `Optional` **throw**(`e?`): [`IteratorResult`](../modules/main_module._internal_.md#iteratorresult)<`T`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

[`IteratorResult`](../modules/main_module._internal_.md#iteratorresult)<`T`, `any`\>

#### Inherited from

[Iterator](main_module._internal_.Iterator.md).[throw](main_module._internal_.Iterator.md#throw)

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:47
