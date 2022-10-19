[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / Generator

# Interface: Generator<T, TReturn, TNext\>

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).Generator

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |
| `TReturn` | `any` |
| `TNext` | `unknown` |

## Hierarchy

- [`Iterator`](annotation_annotation_layer_state._internal_.Iterator.md)<`T`, `TReturn`, `TNext`\>

  ↳ **`Generator`**

## Table of contents

### Methods

- [[iterator]](annotation_annotation_layer_state._internal_.Generator.md#[iterator])
- [next](annotation_annotation_layer_state._internal_.Generator.md#next)
- [return](annotation_annotation_layer_state._internal_.Generator.md#return)
- [throw](annotation_annotation_layer_state._internal_.Generator.md#throw)

## Methods

### [iterator]

▸ **[iterator]**(): [`Generator`](annotation_annotation_layer_state._internal_.Generator.md)<`T`, `TReturn`, `TNext`\>

#### Returns

[`Generator`](annotation_annotation_layer_state._internal_.Generator.md)<`T`, `TReturn`, `TNext`\>

#### Defined in

node_modules/typescript/lib/lib.es2015.generator.d.ts:28

___

### next

▸ **next**(...`args`): [`IteratorResult`](../modules/annotation_annotation_layer_state._internal_.md#iteratorresult)<`T`, `TReturn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [] \| [`TNext`] |

#### Returns

[`IteratorResult`](../modules/annotation_annotation_layer_state._internal_.md#iteratorresult)<`T`, `TReturn`\>

#### Overrides

[Iterator](annotation_annotation_layer_state._internal_.Iterator.md).[next](annotation_annotation_layer_state._internal_.Iterator.md#next)

#### Defined in

node_modules/typescript/lib/lib.es2015.generator.d.ts:25

___

### return

▸ **return**(`value`): [`IteratorResult`](../modules/annotation_annotation_layer_state._internal_.md#iteratorresult)<`T`, `TReturn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `TReturn` |

#### Returns

[`IteratorResult`](../modules/annotation_annotation_layer_state._internal_.md#iteratorresult)<`T`, `TReturn`\>

#### Overrides

[Iterator](annotation_annotation_layer_state._internal_.Iterator.md).[return](annotation_annotation_layer_state._internal_.Iterator.md#return)

#### Defined in

node_modules/typescript/lib/lib.es2015.generator.d.ts:26

___

### throw

▸ **throw**(`e`): [`IteratorResult`](../modules/annotation_annotation_layer_state._internal_.md#iteratorresult)<`T`, `TReturn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |

#### Returns

[`IteratorResult`](../modules/annotation_annotation_layer_state._internal_.md#iteratorresult)<`T`, `TReturn`\>

#### Overrides

[Iterator](annotation_annotation_layer_state._internal_.Iterator.md).[throw](annotation_annotation_layer_state._internal_.Iterator.md#throw)

#### Defined in

node_modules/typescript/lib/lib.es2015.generator.d.ts:27
