[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/util/vector

# Module: neuroglancer/util/vector

## Table of contents

### Variables

- [kEmptyFloat32Vec](neuroglancer_util_vector.md#kemptyfloat32vec)
- [kEmptyFloat64Vec](neuroglancer_util_vector.md#kemptyfloat64vec)
- [kFloat64Vec3Of1](neuroglancer_util_vector.md#kfloat64vec3of1)

### Functions

- [add](neuroglancer_util_vector.md#add)
- [divide](neuroglancer_util_vector.md#divide)
- [equal](neuroglancer_util_vector.md#equal)
- [max](neuroglancer_util_vector.md#max)
- [min](neuroglancer_util_vector.md#min)
- [multiply](neuroglancer_util_vector.md#multiply)
- [prod](neuroglancer_util_vector.md#prod)
- [scale](neuroglancer_util_vector.md#scale)
- [scaleAndAdd](neuroglancer_util_vector.md#scaleandadd)
- [subtract](neuroglancer_util_vector.md#subtract)

## Variables

### kEmptyFloat32Vec

• `Const` **kEmptyFloat32Vec**: `Float32Array`

#### Defined in

[src/neuroglancer/util/vector.ts:101](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/vector.ts#L101)

___

### kEmptyFloat64Vec

• `Const` **kEmptyFloat64Vec**: `Float64Array`

#### Defined in

[src/neuroglancer/util/vector.ts:102](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/vector.ts#L102)

___

### kFloat64Vec3Of1

• `Const` **kFloat64Vec3Of1**: `Float64Array`

#### Defined in

[src/neuroglancer/util/vector.ts:103](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/vector.ts#L103)

## Functions

### add

▸ **add**<`Out`, `A`, `B`\>(`out`, `a`, `b`): `Out`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Out` | extends [`TypedArray`](neuroglancer_util_array.md#typedarray) |
| `A` | extends [`TypedArray`](neuroglancer_util_array.md#typedarray) |
| `B` | extends [`TypedArray`](neuroglancer_util_array.md#typedarray) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | `Out` |
| `a` | `A` |
| `b` | `B` |

#### Returns

`Out`

#### Defined in

[src/neuroglancer/util/vector.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/vector.ts#L27)

___

### divide

▸ **divide**<`Out`, `A`, `B`\>(`out`, `a`, `b`): `Out`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Out` | extends [`TypedArray`](neuroglancer_util_array.md#typedarray) |
| `A` | extends [`TypedArray`](neuroglancer_util_array.md#typedarray) |
| `B` | extends [`TypedArray`](neuroglancer_util_array.md#typedarray) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | `Out` |
| `a` | `A` |
| `b` | `B` |

#### Returns

`Out`

#### Defined in

[src/neuroglancer/util/vector.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/vector.ts#L51)

___

### equal

▸ **equal**<`T`, `U`\>(`a`, `b`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TypedArray`](neuroglancer_util_array.md#typedarray) |
| `U` | extends [`TypedArray`](neuroglancer_util_array.md#typedarray) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `T` |
| `b` | `U` |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/util/vector.ts:19](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/vector.ts#L19)

___

### max

▸ **max**<`Out`, `A`, `B`\>(`out`, `a`, `b`): `Out`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Out` | extends [`TypedArray`](neuroglancer_util_array.md#typedarray) |
| `A` | extends [`TypedArray`](neuroglancer_util_array.md#typedarray) |
| `B` | extends [`TypedArray`](neuroglancer_util_array.md#typedarray) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | `Out` |
| `a` | `A` |
| `b` | `B` |

#### Returns

`Out`

#### Defined in

[src/neuroglancer/util/vector.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/vector.ts#L92)

___

### min

▸ **min**<`Out`, `A`, `B`\>(`out`, `a`, `b`): `Out`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Out` | extends [`TypedArray`](neuroglancer_util_array.md#typedarray) |
| `A` | extends [`TypedArray`](neuroglancer_util_array.md#typedarray) |
| `B` | extends [`TypedArray`](neuroglancer_util_array.md#typedarray) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | `Out` |
| `a` | `A` |
| `b` | `B` |

#### Returns

`Out`

#### Defined in

[src/neuroglancer/util/vector.ts:83](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/vector.ts#L83)

___

### multiply

▸ **multiply**<`Out`, `A`, `B`\>(`out`, `a`, `b`): `Out`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Out` | extends [`TypedArray`](neuroglancer_util_array.md#typedarray) |
| `A` | extends [`TypedArray`](neuroglancer_util_array.md#typedarray) |
| `B` | extends [`TypedArray`](neuroglancer_util_array.md#typedarray) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | `Out` |
| `a` | `A` |
| `b` | `B` |

#### Returns

`Out`

#### Defined in

[src/neuroglancer/util/vector.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/vector.ts#L43)

___

### prod

▸ **prod**(`array`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | [`ArrayLike`](../interfaces/neuroglancer_async_computation_encode_compressed_segmentation_request._internal_.ArrayLike.md)<`number`\> |

#### Returns

`number`

#### Defined in

[src/neuroglancer/util/vector.ts:75](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/vector.ts#L75)

___

### scale

▸ **scale**<`Out`, `A`\>(`out`, `a`, `scale`): `Out`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Out` | extends [`TypedArray`](neuroglancer_util_array.md#typedarray) |
| `A` | extends [`TypedArray`](neuroglancer_util_array.md#typedarray) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | `Out` |
| `a` | `A` |
| `scale` | `number` |

#### Returns

`Out`

#### Defined in

[src/neuroglancer/util/vector.ts:67](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/vector.ts#L67)

___

### scaleAndAdd

▸ **scaleAndAdd**<`Out`, `A`, `B`\>(`out`, `a`, `b`, `scale`): `Out`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Out` | extends [`TypedArray`](neuroglancer_util_array.md#typedarray) |
| `A` | extends [`TypedArray`](neuroglancer_util_array.md#typedarray) |
| `B` | extends [`TypedArray`](neuroglancer_util_array.md#typedarray) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | `Out` |
| `a` | `A` |
| `b` | `B` |
| `scale` | `number` |

#### Returns

`Out`

#### Defined in

[src/neuroglancer/util/vector.ts:59](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/vector.ts#L59)

___

### subtract

▸ **subtract**<`Out`, `A`, `B`\>(`out`, `a`, `b`): `Out`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Out` | extends [`TypedArray`](neuroglancer_util_array.md#typedarray) |
| `A` | extends [`TypedArray`](neuroglancer_util_array.md#typedarray) |
| `B` | extends [`TypedArray`](neuroglancer_util_array.md#typedarray) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | `Out` |
| `a` | `A` |
| `b` | `B` |

#### Returns

`Out`

#### Defined in

[src/neuroglancer/util/vector.ts:35](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/vector.ts#L35)
