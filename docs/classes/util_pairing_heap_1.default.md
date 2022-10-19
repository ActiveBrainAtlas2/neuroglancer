[neuroglancer](../README.md) / [Modules](../modules.md) / [util/pairing\_heap.1](../modules/util_pairing_heap_1.md) / default

# Class: default<T\>

[util/pairing_heap.1](../modules/util_pairing_heap_1.md).default

Pairing heap.

The root node is the minimum element according to comparator.

**`final`**

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Node`](../interfaces/util_pairing_heap_1._internal_.Node.md)<`T`\> |

## Implements

- [`PairingHeapOperations`](../interfaces/util_pairing_heap.PairingHeapOperations.md)<`T`\>

## Table of contents

### Constructors

- [constructor](util_pairing_heap_1.default.md#constructor)

### Properties

- [compare](util_pairing_heap_1.default.md#compare)

### Methods

- [combineChildren](util_pairing_heap_1.default.md#combinechildren)
- [entries](util_pairing_heap_1.default.md#entries)
- [meld](util_pairing_heap_1.default.md#meld)
- [remove](util_pairing_heap_1.default.md#remove)
- [removeMin](util_pairing_heap_1.default.md#removemin)
- [removedEntries](util_pairing_heap_1.default.md#removedentries)

## Constructors

### constructor

• **new default**<`T`\>(`compare`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Node`](../interfaces/util_pairing_heap_1._internal_.Node.md)<`T`, `T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compare` | (`a`: `T`, `b`: `T`) => `boolean` | Returns true iff a < b. |

#### Defined in

[src/neuroglancer/util/pairing_heap.1.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/pairing_heap.1.ts#L37)

## Properties

### compare

• **compare**: (`a`: `T`, `b`: `T`) => `boolean`

#### Type declaration

▸ (`a`, `b`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `T` |
| `b` | `T` |

##### Returns

`boolean`

#### Implementation of

[PairingHeapOperations](../interfaces/util_pairing_heap.PairingHeapOperations.md).[compare](../interfaces/util_pairing_heap.PairingHeapOperations.md#compare)

## Methods

### combineChildren

▸ `Private` **combineChildren**(`node`): ``null`` \| `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `T` |

#### Returns

``null`` \| `T`

#### Defined in

[src/neuroglancer/util/pairing_heap.1.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/pairing_heap.1.ts#L61)

___

### entries

▸ **entries**(`root`): [`IterableIterator`](../interfaces/annotation_annotation_layer_state._internal_.IterableIterator.md)<`T`\>

Returns a new iterator over the entries in the heap.

#### Parameters

| Name | Type |
| :------ | :------ |
| `root` | `T` |

#### Returns

[`IterableIterator`](../interfaces/annotation_annotation_layer_state._internal_.IterableIterator.md)<`T`\>

#### Implementation of

[PairingHeapOperations](../interfaces/util_pairing_heap.PairingHeapOperations.md).[entries](../interfaces/util_pairing_heap.PairingHeapOperations.md#entries)

#### Defined in

[src/neuroglancer/util/pairing_heap.1.ts:134](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/pairing_heap.1.ts#L134)

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

#### Implementation of

[PairingHeapOperations](../interfaces/util_pairing_heap.PairingHeapOperations.md).[meld](../interfaces/util_pairing_heap.PairingHeapOperations.md#meld)

#### Defined in

[src/neuroglancer/util/pairing_heap.1.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/pairing_heap.1.ts#L39)

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

#### Implementation of

[PairingHeapOperations](../interfaces/util_pairing_heap.PairingHeapOperations.md).[remove](../interfaces/util_pairing_heap.PairingHeapOperations.md#remove)

#### Defined in

[src/neuroglancer/util/pairing_heap.1.ts:110](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/pairing_heap.1.ts#L110)

___

### removeMin

▸ **removeMin**(`root`): ``null`` \| `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `root` | `T` |

#### Returns

``null`` \| `T`

#### Implementation of

[PairingHeapOperations](../interfaces/util_pairing_heap.PairingHeapOperations.md).[removeMin](../interfaces/util_pairing_heap.PairingHeapOperations.md#removemin)

#### Defined in

[src/neuroglancer/util/pairing_heap.1.ts:102](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/pairing_heap.1.ts#L102)

___

### removedEntries

▸ **removedEntries**(`root`): [`IterableIterator`](../interfaces/annotation_annotation_layer_state._internal_.IterableIterator.md)<`T`\>

Returns a new iterator over the entries in the heap.  The entries
will be removed as they are iterated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `root` | `T` |

#### Returns

[`IterableIterator`](../interfaces/annotation_annotation_layer_state._internal_.IterableIterator.md)<`T`\>

#### Implementation of

[PairingHeapOperations](../interfaces/util_pairing_heap.PairingHeapOperations.md).[removedEntries](../interfaces/util_pairing_heap.PairingHeapOperations.md#removedentries)

#### Defined in

[src/neuroglancer/util/pairing_heap.1.ts:150](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/pairing_heap.1.ts#L150)
