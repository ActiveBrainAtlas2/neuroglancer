[neuroglancer](../README.md) / [Modules](../modules.md) / [util/pairing\_heap](../modules/util_pairing_heap.md) / PairingHeapOperations

# Interface: PairingHeapOperations<T\>

[util/pairing_heap](../modules/util_pairing_heap.md).PairingHeapOperations

## Type parameters

| Name |
| :------ |
| `T` |

## Implemented by

- [`default`](../classes/util_pairing_heap_0.default.md)
- [`default`](../classes/util_pairing_heap_1.default.md)

## Table of contents

### Properties

- [compare](util_pairing_heap.PairingHeapOperations.md#compare)

### Methods

- [entries](util_pairing_heap.PairingHeapOperations.md#entries)
- [meld](util_pairing_heap.PairingHeapOperations.md#meld)
- [remove](util_pairing_heap.PairingHeapOperations.md#remove)
- [removeMin](util_pairing_heap.PairingHeapOperations.md#removemin)
- [removedEntries](util_pairing_heap.PairingHeapOperations.md#removedentries)

## Properties

### compare

• **compare**: [`ComparisonFunction`](util_pairing_heap.ComparisonFunction.md)<`T`\>

#### Defined in

[src/neuroglancer/util/pairing_heap.ts:25](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/pairing_heap.ts#L25)

## Methods

### entries

▸ **entries**(`root`): [`Iterator`](annotation_annotation_layer_state._internal_.Iterator.md)<`T`, `any`, `undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `root` | ``null`` \| `T` |

#### Returns

[`Iterator`](annotation_annotation_layer_state._internal_.Iterator.md)<`T`, `any`, `undefined`\>

#### Defined in

[src/neuroglancer/util/pairing_heap.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/pairing_heap.ts#L28)

___

### meld

▸ **meld**(`a`, `b`): ``null`` \| `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | ``null`` \| `T` |
| `b` | ``null`` \| `T` |

#### Returns

``null`` \| `T`

#### Defined in

[src/neuroglancer/util/pairing_heap.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/pairing_heap.ts#L24)

___

### remove

▸ **remove**(`root`, `node`): ``null`` \| `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `root` | `T` |
| `node` | `T` |

#### Returns

``null`` \| `T`

#### Defined in

[src/neuroglancer/util/pairing_heap.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/pairing_heap.ts#L27)

___

### removeMin

▸ **removeMin**(`root`): ``null`` \| `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `root` | `T` |

#### Returns

``null`` \| `T`

#### Defined in

[src/neuroglancer/util/pairing_heap.ts:26](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/pairing_heap.ts#L26)

___

### removedEntries

▸ **removedEntries**(`root`): [`Iterator`](annotation_annotation_layer_state._internal_.Iterator.md)<`T`, `any`, `undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `root` | ``null`` \| `T` |

#### Returns

[`Iterator`](annotation_annotation_layer_state._internal_.Iterator.md)<`T`, `any`, `undefined`\>

#### Defined in

[src/neuroglancer/util/pairing_heap.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/pairing_heap.ts#L29)
