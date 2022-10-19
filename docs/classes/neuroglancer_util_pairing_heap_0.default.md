[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/util/pairing\_heap.0](../modules/neuroglancer_util_pairing_heap_0.md) / default

# Class: default<T\>

[neuroglancer/util/pairing_heap.0](../modules/neuroglancer_util_pairing_heap_0.md).default

Pairing heap.

The root node is the minimum element according to comparator.

**`final`**

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Node`](../interfaces/neuroglancer_util_pairing_heap_0._internal_.Node.md)<`T`\> |

## Implements

- [`PairingHeapOperations`](../interfaces/neuroglancer_util_pairing_heap.PairingHeapOperations.md)<`T`\>

## Table of contents

### Constructors

- [constructor](neuroglancer_util_pairing_heap_0.default.md#constructor)

### Properties

- [compare](neuroglancer_util_pairing_heap_0.default.md#compare)

### Methods

- [combineChildren](neuroglancer_util_pairing_heap_0.default.md#combinechildren)
- [entries](neuroglancer_util_pairing_heap_0.default.md#entries)
- [meld](neuroglancer_util_pairing_heap_0.default.md#meld)
- [remove](neuroglancer_util_pairing_heap_0.default.md#remove)
- [removeMin](neuroglancer_util_pairing_heap_0.default.md#removemin)
- [removedEntries](neuroglancer_util_pairing_heap_0.default.md#removedentries)

## Constructors

### constructor

• **new default**<`T`\>(`compare`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Node`](../interfaces/neuroglancer_util_pairing_heap_0._internal_.Node.md)<`T`, `T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compare` | (`a`: `T`, `b`: `T`) => `boolean` | Returns true iff a < b. |

#### Defined in

[src/neuroglancer/util/pairing_heap.0.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/pairing_heap.0.ts#L37)

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

[PairingHeapOperations](../interfaces/neuroglancer_util_pairing_heap.PairingHeapOperations.md).[compare](../interfaces/neuroglancer_util_pairing_heap.PairingHeapOperations.md#compare)

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

[src/neuroglancer/util/pairing_heap.0.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/pairing_heap.0.ts#L61)

___

### entries

▸ **entries**(`root`): [`IterableIterator`](../interfaces/main_module._internal_.IterableIterator.md)<`T`\>

Returns a new iterator over the entries in the heap.

#### Parameters

| Name | Type |
| :------ | :------ |
| `root` | `T` |

#### Returns

[`IterableIterator`](../interfaces/main_module._internal_.IterableIterator.md)<`T`\>

#### Implementation of

[PairingHeapOperations](../interfaces/neuroglancer_util_pairing_heap.PairingHeapOperations.md).[entries](../interfaces/neuroglancer_util_pairing_heap.PairingHeapOperations.md#entries)

#### Defined in

[src/neuroglancer/util/pairing_heap.0.ts:134](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/pairing_heap.0.ts#L134)

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

[PairingHeapOperations](../interfaces/neuroglancer_util_pairing_heap.PairingHeapOperations.md).[meld](../interfaces/neuroglancer_util_pairing_heap.PairingHeapOperations.md#meld)

#### Defined in

[src/neuroglancer/util/pairing_heap.0.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/pairing_heap.0.ts#L39)

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

[PairingHeapOperations](../interfaces/neuroglancer_util_pairing_heap.PairingHeapOperations.md).[remove](../interfaces/neuroglancer_util_pairing_heap.PairingHeapOperations.md#remove)

#### Defined in

[src/neuroglancer/util/pairing_heap.0.ts:110](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/pairing_heap.0.ts#L110)

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

[PairingHeapOperations](../interfaces/neuroglancer_util_pairing_heap.PairingHeapOperations.md).[removeMin](../interfaces/neuroglancer_util_pairing_heap.PairingHeapOperations.md#removemin)

#### Defined in

[src/neuroglancer/util/pairing_heap.0.ts:102](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/pairing_heap.0.ts#L102)

___

### removedEntries

▸ **removedEntries**(`root`): [`IterableIterator`](../interfaces/main_module._internal_.IterableIterator.md)<`T`\>

Returns a new iterator over the entries in the heap.  The entries
will be removed as they are iterated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `root` | `T` |

#### Returns

[`IterableIterator`](../interfaces/main_module._internal_.IterableIterator.md)<`T`\>

#### Implementation of

[PairingHeapOperations](../interfaces/neuroglancer_util_pairing_heap.PairingHeapOperations.md).[removedEntries](../interfaces/neuroglancer_util_pairing_heap.PairingHeapOperations.md#removedentries)

#### Defined in

[src/neuroglancer/util/pairing_heap.0.ts:150](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/pairing_heap.0.ts#L150)
