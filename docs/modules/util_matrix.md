[neuroglancer](../README.md) / [Modules](../modules.md) / util/matrix

# Module: util/matrix

## Table of contents

### Functions

- [copy](util_matrix.md#copy)
- [createHomogeneousScaleMatrix](util_matrix.md#createhomogeneousscalematrix)
- [createIdentity](util_matrix.md#createidentity)
- [dimensionTransform](util_matrix.md#dimensiontransform)
- [equal](util_matrix.md#equal)
- [extendHomogeneousTransform](util_matrix.md#extendhomogeneoustransform)
- [identity](util_matrix.md#identity)
- [inverse](util_matrix.md#inverse)
- [inverseInplace](util_matrix.md#inverseinplace)
- [isIdentity](util_matrix.md#isidentity)
- [multiply](util_matrix.md#multiply)
- [transformPoint](util_matrix.md#transformpoint)
- [transformVector](util_matrix.md#transformvector)
- [transpose](util_matrix.md#transpose)

## Functions

### copy

▸ **copy**<`T`\>(`b`, `ldb`, `a`, `lda`, `m`, `n`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TypedArray`](util_array.md#typedarray) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `T` |
| `ldb` | `number` |
| `a` | `T` |
| `lda` | `number` |
| `m` | `number` |
| `n` | `number` |

#### Returns

`T`

#### Defined in

[src/neuroglancer/util/matrix.ts:77](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/matrix.ts#L77)

___

### createHomogeneousScaleMatrix

▸ **createHomogeneousScaleMatrix**<`T`\>(`c`, `scales`, `square?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TypedArray`](util_array.md#typedarray) |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `c` | (`length`: `number`) => `T` | `undefined` |
| `scales` | [`ArrayLike`](../interfaces/async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`number`\> | `undefined` |
| `square` | `boolean` | `true` |

#### Returns

`T`

#### Defined in

[src/neuroglancer/util/matrix.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/matrix.ts#L54)

___

### createIdentity

▸ **createIdentity**<`T`\>(`c`, `rows`, `cols?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TypedArray`](util_array.md#typedarray) |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `c` | (`n`: `number`) => `T` | `undefined` |
| `rows` | `number` | `undefined` |
| `cols` | `number` | `rows` |

#### Returns

`T`

#### Defined in

[src/neuroglancer/util/matrix.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/matrix.ts#L48)

___

### dimensionTransform

▸ **dimensionTransform**(`matrix`, `newRank`): `Float64Array`

Convert a transformation matrix of rank 3 to a new transformation matrix with a higher rank.
Only the values in the upper left corner are retained in this process

#### Parameters

| Name | Type |
| :------ | :------ |
| `matrix` | `Float64Array` |
| `newRank` | `number` |

#### Returns

`Float64Array`

#### Defined in

[src/neuroglancer/util/matrix.ts:257](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/matrix.ts#L257)

___

### equal

▸ **equal**<`T`\>(`a`, `lda`, `b`, `ldb`, `m`, `n`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TypedArray`](util_array.md#typedarray) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `T` |
| `lda` | `number` |
| `b` | `T` |
| `ldb` | `number` |
| `m` | `number` |
| `n` | `number` |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/util/matrix.ts:203](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/matrix.ts#L203)

___

### extendHomogeneousTransform

▸ **extendHomogeneousTransform**<`T`\>(`b`, `bRank`, `a`, `aRank`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TypedArray`](util_array.md#typedarray) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `T` |
| `bRank` | `number` |
| `a` | `T` |
| `aRank` | `number` |

#### Returns

`T`

#### Defined in

[src/neuroglancer/util/matrix.ts:89](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/matrix.ts#L89)

___

### identity

▸ **identity**<`T`\>(`a`, `lda`, `n`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TypedArray`](util_array.md#typedarray) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `T` |
| `lda` | `number` |
| `n` | `number` |

#### Returns

`T`

#### Defined in

[src/neuroglancer/util/matrix.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/matrix.ts#L39)

___

### inverse

▸ **inverse**<`T`\>(`b`, `ldb`, `a`, `lda`, `n`): `number`

Computes the inverse and returns the determinant.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TypedArray`](util_array.md#typedarray) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `T` |
| `ldb` | `number` |
| `a` | `T` |
| `lda` | `number` |
| `n` | `number` |

#### Returns

`number`

#### Defined in

[src/neuroglancer/util/matrix.ts:196](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/matrix.ts#L196)

___

### inverseInplace

▸ **inverseInplace**<`T`\>(`a`, `lda`, `n`): `number`

Computes the inverse of a square matrix in place, and returns the determinant.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TypedArray`](util_array.md#typedarray) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `T` |
| `lda` | `number` |
| `n` | `number` |

#### Returns

`number`

#### Defined in

[src/neuroglancer/util/matrix.ts:108](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/matrix.ts#L108)

___

### isIdentity

▸ **isIdentity**<`T`\>(`a`, `lda`, `n`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TypedArray`](util_array.md#typedarray) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `T` |
| `lda` | `number` |
| `n` | `number` |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/util/matrix.ts:68](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/matrix.ts#L68)

___

### multiply

▸ **multiply**<`T`\>(`c`, `ldc`, `a`, `lda`, `b`, `ldb`, `m`, `n`, `k`): `T`

Sets the `m * k` matrix `c` to the product of `m * n` matrix `a` and `n * k` matrix `b`.

`a`, `b` and `c` are column-major with column strides of `lda`, `ldb`, and `ldc`, respectively.
`c` must not overlap `a` or `b`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TypedArray`](util_array.md#typedarray) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | `T` |
| `ldc` | `number` |
| `a` | `T` |
| `lda` | `number` |
| `b` | `T` |
| `ldb` | `number` |
| `m` | `number` |
| `n` | `number` |
| `k` | `number` |

#### Returns

`T`

#### Defined in

[src/neuroglancer/util/matrix.ts:25](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/matrix.ts#L25)

___

### transformPoint

▸ **transformPoint**<`Out`, `Matrix`, `Vector`\>(`out`, `mat`, `matrixStride`, `vec`, `rank`): `Out`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Out` | extends [`TypedArray`](util_array.md#typedarray) |
| `Matrix` | extends [`TypedArray`](util_array.md#typedarray) |
| `Vector` | extends [`TypedArray`](util_array.md#typedarray) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | `Out` |
| `mat` | `Matrix` |
| `matrixStride` | `number` |
| `vec` | `Vector` |
| `rank` | `number` |

#### Returns

`Out`

#### Defined in

[src/neuroglancer/util/matrix.ts:226](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/matrix.ts#L226)

___

### transformVector

▸ **transformVector**<`Out`, `Matrix`, `Vector`\>(`out`, `mat`, `matrixStride`, `vec`, `rank`): `Out`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Out` | extends [`TypedArray`](util_array.md#typedarray) |
| `Matrix` | extends [`TypedArray`](util_array.md#typedarray) |
| `Vector` | extends [`TypedArray`](util_array.md#typedarray) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | `Out` |
| `mat` | `Matrix` |
| `matrixStride` | `number` |
| `vec` | `Vector` |
| `rank` | `number` |

#### Returns

`Out`

#### Defined in

[src/neuroglancer/util/matrix.ts:239](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/matrix.ts#L239)

___

### transpose

▸ **transpose**<`T`\>(`b`, `ldb`, `a`, `lda`, `m`, `n`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TypedArray`](util_array.md#typedarray) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `T` |
| `ldb` | `number` |
| `a` | `T` |
| `lda` | `number` |
| `m` | `number` |
| `n` | `number` |

#### Returns

`T`

#### Defined in

[src/neuroglancer/util/matrix.ts:215](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/matrix.ts#L215)
