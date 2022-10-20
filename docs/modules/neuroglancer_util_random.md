[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/util/random

# Module: neuroglancer/util/random

## Table of contents

### Functions

- [getRandomHexString](neuroglancer_util_random.md#getrandomhexstring)
- [getRandomUint32](neuroglancer_util_random.md#getrandomuint32)
- [getRandomValues](neuroglancer_util_random.md#getrandomvalues)

## Functions

### getRandomHexString

▸ **getRandomHexString**(`numBits?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `numBits` | `number` | `128` |

#### Returns

`string`

#### Defined in

[src/neuroglancer/util/random.ts:19](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/random.ts#L19)

___

### getRandomUint32

▸ **getRandomUint32**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/util/random.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/random.ts#L42)

___

### getRandomValues

▸ **getRandomValues**<`T`\>(`array`): `T`

Calls crypto.getRandomValues as many times as needed to fill array.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TypedArray`](neuroglancer_util_array.md#typedarray) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `T` |

#### Returns

`T`

#### Defined in

[src/neuroglancer/util/random.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/random.ts#L33)
