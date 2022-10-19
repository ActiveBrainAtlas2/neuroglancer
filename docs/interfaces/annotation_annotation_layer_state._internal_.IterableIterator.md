[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / IterableIterator

# Interface: IterableIterator<T\>

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).IterableIterator

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Iterator`](annotation_annotation_layer_state._internal_.Iterator.md)<`T`\>

  ↳ **`IterableIterator`**

## Table of contents

### Methods

- [[iterator]](annotation_annotation_layer_state._internal_.IterableIterator.md#[iterator])
- [next](annotation_annotation_layer_state._internal_.IterableIterator.md#next)
- [return](annotation_annotation_layer_state._internal_.IterableIterator.md#return)
- [throw](annotation_annotation_layer_state._internal_.IterableIterator.md#throw)

## Methods

### [iterator]

▸ **[iterator]**(): [`IterableIterator`](annotation_annotation_layer_state._internal_.IterableIterator.md)<`T`\>

#### Returns

[`IterableIterator`](annotation_annotation_layer_state._internal_.IterableIterator.md)<`T`\>

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:55

___

### next

▸ **next**(...`args`): [`IteratorResult`](../modules/annotation_annotation_layer_state._internal_.md#iteratorresult)<`T`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [] \| [`undefined`] |

#### Returns

[`IteratorResult`](../modules/annotation_annotation_layer_state._internal_.md#iteratorresult)<`T`, `any`\>

#### Inherited from

[Iterator](annotation_annotation_layer_state._internal_.Iterator.md).[next](annotation_annotation_layer_state._internal_.Iterator.md#next)

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:45

___

### return

▸ `Optional` **return**(`value?`): [`IteratorResult`](../modules/annotation_annotation_layer_state._internal_.md#iteratorresult)<`T`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `any` |

#### Returns

[`IteratorResult`](../modules/annotation_annotation_layer_state._internal_.md#iteratorresult)<`T`, `any`\>

#### Inherited from

[Iterator](annotation_annotation_layer_state._internal_.Iterator.md).[return](annotation_annotation_layer_state._internal_.Iterator.md#return)

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:46

___

### throw

▸ `Optional` **throw**(`e?`): [`IteratorResult`](../modules/annotation_annotation_layer_state._internal_.md#iteratorresult)<`T`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

[`IteratorResult`](../modules/annotation_annotation_layer_state._internal_.md#iteratorresult)<`T`, `any`\>

#### Inherited from

[Iterator](annotation_annotation_layer_state._internal_.Iterator.md).[throw](annotation_annotation_layer_state._internal_.Iterator.md#throw)

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:47
