[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/util/array

# Module: neuroglancer/util/array

## Table of contents

### Interfaces

- [ArraySpliceOp](../interfaces/neuroglancer_util_array.ArraySpliceOp.md)
- [WritableArrayLike](../interfaces/neuroglancer_util_array.WritableArrayLike.md)

### Type Aliases

- [TypedArray](neuroglancer_util_array.md#typedarray)
- [TypedArrayConstructor](neuroglancer_util_array.md#typedarrayconstructor)

### Functions

- [arraysEqual](neuroglancer_util_array.md#arraysequal)
- [arraysEqualWithPredicate](neuroglancer_util_array.md#arraysequalwithpredicate)
- [binarySearch](neuroglancer_util_array.md#binarysearch)
- [binarySearchLowerBound](neuroglancer_util_array.md#binarysearchlowerbound)
- [filterArrayInplace](neuroglancer_util_array.md#filterarrayinplace)
- [findMatchingIndices](neuroglancer_util_array.md#findmatchingindices)
- [gatherUpdate](neuroglancer_util_array.md#gatherupdate)
- [getFortranOrderStrides](neuroglancer_util_array.md#getfortranorderstrides)
- [getIndicesComplement](neuroglancer_util_array.md#getindicescomplement)
- [getInsertPermutation](neuroglancer_util_array.md#getinsertpermutation)
- [getMergeSplices](neuroglancer_util_array.md#getmergesplices)
- [maybePadArray](neuroglancer_util_array.md#maybepadarray)
- [mergeSequences](neuroglancer_util_array.md#mergesequences)
- [partitionArray](neuroglancer_util_array.md#partitionarray)
- [scatterUpdate](neuroglancer_util_array.md#scatterupdate)
- [spliceArray](neuroglancer_util_array.md#splicearray)
- [tile2dArray](neuroglancer_util_array.md#tile2darray)
- [transposeArray2d](neuroglancer_util_array.md#transposearray2d)
- [transposeNestedArrays](neuroglancer_util_array.md#transposenestedarrays)

## Type Aliases

### TypedArray

Ƭ **TypedArray**: `Int8Array` \| `Uint8Array` \| `Int16Array` \| `Uint16Array` \| `Int32Array` \| `Uint32Array` \| `Float32Array` \| `Float64Array`

#### Defined in

[src/neuroglancer/util/array.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/array.ts#L63)

___

### TypedArrayConstructor

Ƭ **TypedArrayConstructor**: typeof `Int8Array` \| typeof `Uint8Array` \| typeof `Int16Array` \| typeof `Uint16Array` \| typeof `Int32Array` \| typeof `Uint32Array` \| typeof `Float32Array` \| typeof `Float64Array`

#### Defined in

[src/neuroglancer/util/array.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/array.ts#L60)

## Functions

### arraysEqual

▸ **arraysEqual**<`T`\>(`a`, `b`): `boolean`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ArrayLike`](../interfaces/neuroglancer_async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`T`\> |
| `b` | [`ArrayLike`](../interfaces/neuroglancer_async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`T`\> |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/util/array.ts:195](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/array.ts#L195)

___

### arraysEqualWithPredicate

▸ **arraysEqualWithPredicate**<`T`\>(`a`, `b`, `elementsEqual?`): `boolean`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ArrayLike`](../interfaces/neuroglancer_async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`T`\> |
| `b` | [`ArrayLike`](../interfaces/neuroglancer_async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`T`\> |
| `elementsEqual` | (`a`: `T`, `b`: `T`) => `boolean` |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/util/array.ts:204](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/array.ts#L204)

___

### binarySearch

▸ **binarySearch**<`T`\>(`haystack`, `needle`, `compare`, `low?`, `high?`): `number`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `haystack` | [`ArrayLike`](../interfaces/neuroglancer_async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`T`\> | `undefined` |
| `needle` | `T` | `undefined` |
| `compare` | (`a`: `T`, `b`: `T`) => `number` | `undefined` |
| `low` | `number` | `0` |
| `high` | `number` | `haystack.length` |

#### Returns

`number`

#### Defined in

[src/neuroglancer/util/array.ts:130](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/array.ts#L130)

___

### binarySearchLowerBound

▸ **binarySearchLowerBound**(`begin`, `end`, `predicate`): `number`

Returns the first index in `[begin, end)` for which `predicate` is `true`, or returns `end` if no
such index exists.

For any index `i` in `(begin, end)`, it must be the case that `predicate(i) >= predicate(i - 1)`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `begin` | `number` |
| `end` | `number` |
| `predicate` | (`index`: `number`) => `boolean` |

#### Returns

`number`

#### Defined in

[src/neuroglancer/util/array.ts:154](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/array.ts#L154)

___

### filterArrayInplace

▸ **filterArrayInplace**<`T`\>(`array`, `predicate`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `T`[] |
| `predicate` | (`x`: `T`, `index`: `number`, `array`: `T`[]) => `boolean` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/array.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/array.ts#L47)

___

### findMatchingIndices

▸ **findMatchingIndices**<`T`\>(`input`, `value`): `number`[]

Returns an array of indices into `input` that equal (under `===`) `value`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `T`[] |
| `value` | `T` |

#### Returns

`number`[]

#### Defined in

[src/neuroglancer/util/array.ts:173](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/array.ts#L173)

___

### gatherUpdate

▸ **gatherUpdate**<`T`, `Dest`, `Source`\>(`dest`, `source`, `indices`): `Dest`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `Dest` | extends `Object` |
| `Source` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dest` | `Dest` |
| `source` | `Source` |
| `indices` | [`ArrayLike`](../interfaces/neuroglancer_async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`number`\> |

#### Returns

`Dest`

#### Defined in

[src/neuroglancer/util/array.ts:248](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/array.ts#L248)

___

### getFortranOrderStrides

▸ **getFortranOrderStrides**(`size`, `baseStride?`): `number`[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `size` | [`ArrayLike`](../interfaces/neuroglancer_async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`number`\> | `undefined` |
| `baseStride` | `number` | `1` |

#### Returns

`number`[]

#### Defined in

[src/neuroglancer/util/array.ts:80](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/array.ts#L80)

___

### getIndicesComplement

▸ **getIndicesComplement**(`indices`, `max`): `number`[]

Returns an array of the indices in `[0, ..., max)` not in `indices`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `indices` | `number`[] |
| `max` | `number` |

#### Returns

`number`[]

#### Defined in

[src/neuroglancer/util/array.ts:186](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/array.ts#L186)

___

### getInsertPermutation

▸ **getInsertPermutation**(`n`, `sourceIndex`, `targetIndex`): `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |
| `sourceIndex` | `number` |
| `targetIndex` | `number` |

#### Returns

`number`[]

#### Defined in

[src/neuroglancer/util/array.ts:214](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/array.ts#L214)

___

### getMergeSplices

▸ **getMergeSplices**<`T`\>(`oldArray`, `newArray`, `compare`): [`ArraySpliceOp`](../interfaces/neuroglancer_util_array.ArraySpliceOp.md)[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldArray` | readonly `T`[] |
| `newArray` | readonly `T`[] |
| `compare` | (`a`: `T`, `b`: `T`) => `number` |

#### Returns

[`ArraySpliceOp`](../interfaces/neuroglancer_util_array.ArraySpliceOp.md)[]

#### Defined in

[src/neuroglancer/util/array.ts:300](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/array.ts#L300)

___

### maybePadArray

▸ **maybePadArray**<`T`\>(`array`, `newSize`): `T`

Returns an array of size newSize that starts with the contents of array.
Either returns array if it has the correct size, or a new array with zero
padding at the end.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TypedArray`](neuroglancer_util_array.md#typedarray) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `T` |
| `newSize` | `number` |

#### Returns

`T`

#### Defined in

[src/neuroglancer/util/array.ts:71](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/array.ts#L71)

___

### mergeSequences

▸ **mergeSequences**(`aCount`, `bCount`, `compare`, `aCallback`, `bCallback`, `abCallback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aCount` | `number` |
| `bCount` | `number` |
| `compare` | (`a`: `number`, `b`: `number`) => `number` |
| `aCallback` | (`a`: `number`) => `void` |
| `bCallback` | (`b`: `number`) => `void` |
| `abCallback` | (`a`: `number`, `b`: `number`) => `void` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/array.ts:347](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/array.ts#L347)

___

### partitionArray

▸ **partitionArray**<`T`\>(`array`, `start`, `end`, `predicate`): `number`

Partitions array[start:end] such that all elements for which predicate
returns true are before the elements for which predicate returns false.

predicate will be called exactly once for each element in array[start:end],
in order.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `T`[] |
| `start` | `number` |
| `end` | `number` |
| `predicate` | (`x`: `T`) => `boolean` |

#### Returns

`number`

The index of the first element for which predicate returns
false, or end if there is no such element.

#### Defined in

[src/neuroglancer/util/array.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/array.ts#L32)

___

### scatterUpdate

▸ **scatterUpdate**<`T`, `Dest`, `Source`\>(`dest`, `source`, `indices`): `Dest`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `Dest` | extends `Object` |
| `Source` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dest` | `Dest` |
| `source` | `Source` |
| `indices` | [`ArrayLike`](../interfaces/neuroglancer_async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`number`\> |

#### Returns

`Dest`

#### Defined in

[src/neuroglancer/util/array.ts:237](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/array.ts#L237)

___

### spliceArray

▸ **spliceArray**<`T`\>(`array`, `splices`): `any`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `T`[] |
| `splices` | readonly [`Readonly`](neuroglancer_annotation_frontend_source._internal_.md#readonly)<[`ArraySpliceOp`](../interfaces/neuroglancer_util_array.ArraySpliceOp.md)\>[] |

#### Returns

`any`[]

#### Defined in

[src/neuroglancer/util/array.ts:279](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/array.ts#L279)

___

### tile2dArray

▸ **tile2dArray**<`T`\>(`array`, `majorDimension`, `minorTiles`, `majorTiles`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TypedArray`](neuroglancer_util_array.md#typedarray) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `T` |
| `majorDimension` | `number` |
| `minorTiles` | `number` |
| `majorTiles` | `number` |

#### Returns

`T`

#### Defined in

[src/neuroglancer/util/array.ts:107](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/array.ts#L107)

___

### transposeArray2d

▸ **transposeArray2d**<`T`\>(`array`, `majorSize`, `minorSize`): `T`

Converts an array of shape [majorSize, minorSize] to
[minorSize, majorSize].

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TypedArray`](neuroglancer_util_array.md#typedarray) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `T` |
| `majorSize` | `number` |
| `minorSize` | `number` |

#### Returns

`T`

#### Defined in

[src/neuroglancer/util/array.ts:95](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/array.ts#L95)

___

### transposeNestedArrays

▸ **transposeNestedArrays**<`T`\>(`x`): `T`[][]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `T`[][] |

#### Returns

`T`[][]

#### Defined in

[src/neuroglancer/util/array.ts:258](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/array.ts#L258)
