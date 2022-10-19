[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/chunk\_manager/backend](../modules/neuroglancer_chunk_manager_backend.md) / [<internal\>](../modules/neuroglancer_chunk_manager_backend._internal_.md) / Generator

# Interface: Generator<T, TReturn, TNext\>

[neuroglancer/chunk_manager/backend](../modules/neuroglancer_chunk_manager_backend.md).[<internal>](../modules/neuroglancer_chunk_manager_backend._internal_.md).Generator

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |
| `TReturn` | `any` |
| `TNext` | `unknown` |

## Hierarchy

- [`Iterator`](main_module._internal_.Iterator.md)<`T`, `TReturn`, `TNext`\>

  ↳ **`Generator`**

## Table of contents

### Methods

- [[iterator]](neuroglancer_chunk_manager_backend._internal_.Generator.md#[iterator])
- [next](neuroglancer_chunk_manager_backend._internal_.Generator.md#next)
- [return](neuroglancer_chunk_manager_backend._internal_.Generator.md#return)
- [throw](neuroglancer_chunk_manager_backend._internal_.Generator.md#throw)

## Methods

### [iterator]

▸ **[iterator]**(): [`Generator`](neuroglancer_chunk_manager_backend._internal_.Generator.md)<`T`, `TReturn`, `TNext`\>

#### Returns

[`Generator`](neuroglancer_chunk_manager_backend._internal_.Generator.md)<`T`, `TReturn`, `TNext`\>

#### Defined in

node_modules/typescript/lib/lib.es2015.generator.d.ts:28

___

### next

▸ **next**(...`args`): [`IteratorResult`](../modules/main_module._internal_.md#iteratorresult)<`T`, `TReturn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [] \| [`TNext`] |

#### Returns

[`IteratorResult`](../modules/main_module._internal_.md#iteratorresult)<`T`, `TReturn`\>

#### Overrides

[Iterator](main_module._internal_.Iterator.md).[next](main_module._internal_.Iterator.md#next)

#### Defined in

node_modules/typescript/lib/lib.es2015.generator.d.ts:25

___

### return

▸ **return**(`value`): [`IteratorResult`](../modules/main_module._internal_.md#iteratorresult)<`T`, `TReturn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `TReturn` |

#### Returns

[`IteratorResult`](../modules/main_module._internal_.md#iteratorresult)<`T`, `TReturn`\>

#### Overrides

[Iterator](main_module._internal_.Iterator.md).[return](main_module._internal_.Iterator.md#return)

#### Defined in

node_modules/typescript/lib/lib.es2015.generator.d.ts:26

___

### throw

▸ **throw**(`e`): [`IteratorResult`](../modules/main_module._internal_.md#iteratorresult)<`T`, `TReturn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |

#### Returns

[`IteratorResult`](../modules/main_module._internal_.md#iteratorresult)<`T`, `TReturn`\>

#### Overrides

[Iterator](main_module._internal_.Iterator.md).[throw](main_module._internal_.Iterator.md#throw)

#### Defined in

node_modules/typescript/lib/lib.es2015.generator.d.ts:27
