[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/util/pairing\_heap](../modules/neuroglancer_util_pairing_heap.md) / PairingHeapOperations

# Interface: PairingHeapOperations<T\>

[neuroglancer/util/pairing_heap](../modules/neuroglancer_util_pairing_heap.md).PairingHeapOperations

## Type parameters

| Name |
| :------ |
| `T` |

## Implemented by

- [`default`](../classes/neuroglancer_util_pairing_heap_0.default.md)
- [`default`](../classes/neuroglancer_util_pairing_heap_1.default.md)

## Table of contents

### Properties

- [compare](neuroglancer_util_pairing_heap.PairingHeapOperations.md#compare)
- [entries](neuroglancer_util_pairing_heap.PairingHeapOperations.md#entries)
- [meld](neuroglancer_util_pairing_heap.PairingHeapOperations.md#meld)
- [remove](neuroglancer_util_pairing_heap.PairingHeapOperations.md#remove)
- [removeMin](neuroglancer_util_pairing_heap.PairingHeapOperations.md#removemin)
- [removedEntries](neuroglancer_util_pairing_heap.PairingHeapOperations.md#removedentries)

## Properties

### compare

• **compare**: [`ComparisonFunction`](neuroglancer_util_pairing_heap.ComparisonFunction.md)<`T`\>

#### Defined in

[src/neuroglancer/util/pairing_heap.ts:25](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/pairing_heap.ts#L25)

___

### entries

• **entries**: (`root`: ``null`` \| `T`) => [`Iterator`](main_module._internal_.Iterator.md)<`T`, `any`, `undefined`\>

#### Type declaration

▸ (`root`): [`Iterator`](main_module._internal_.Iterator.md)<`T`, `any`, `undefined`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `root` | ``null`` \| `T` |

##### Returns

[`Iterator`](main_module._internal_.Iterator.md)<`T`, `any`, `undefined`\>

#### Defined in

[src/neuroglancer/util/pairing_heap.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/pairing_heap.ts#L28)

___

### meld

• **meld**: (`a`: ``null`` \| `T`, `b`: ``null`` \| `T`) => ``null`` \| `T`

#### Type declaration

▸ (`a`, `b`): ``null`` \| `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | ``null`` \| `T` |
| `b` | ``null`` \| `T` |

##### Returns

``null`` \| `T`

#### Defined in

[src/neuroglancer/util/pairing_heap.ts:24](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/pairing_heap.ts#L24)

___

### remove

• **remove**: (`root`: `T`, `node`: `T`) => ``null`` \| `T`

#### Type declaration

▸ (`root`, `node`): ``null`` \| `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `root` | `T` |
| `node` | `T` |

##### Returns

``null`` \| `T`

#### Defined in

[src/neuroglancer/util/pairing_heap.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/pairing_heap.ts#L27)

___

### removeMin

• **removeMin**: (`root`: `T`) => ``null`` \| `T`

#### Type declaration

▸ (`root`): ``null`` \| `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `root` | `T` |

##### Returns

``null`` \| `T`

#### Defined in

[src/neuroglancer/util/pairing_heap.ts:26](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/pairing_heap.ts#L26)

___

### removedEntries

• **removedEntries**: (`root`: ``null`` \| `T`) => [`Iterator`](main_module._internal_.Iterator.md)<`T`, `any`, `undefined`\>

#### Type declaration

▸ (`root`): [`Iterator`](main_module._internal_.Iterator.md)<`T`, `any`, `undefined`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `root` | ``null`` \| `T` |

##### Returns

[`Iterator`](main_module._internal_.Iterator.md)<`T`, `any`, `undefined`\>

#### Defined in

[src/neuroglancer/util/pairing_heap.ts:29](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/pairing_heap.ts#L29)
