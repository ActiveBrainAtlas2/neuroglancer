[neuroglancer](../README.md) / [Modules](../modules.md) / util/random

# Module: util/random

## Table of contents

### Functions

- [getRandomHexString](util_random.md#getrandomhexstring)
- [getRandomUint32](util_random.md#getrandomuint32)
- [getRandomValues](util_random.md#getrandomvalues)

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

[src/neuroglancer/util/random.ts:19](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/random.ts#L19)

___

### getRandomUint32

▸ **getRandomUint32**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/util/random.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/random.ts#L42)

___

### getRandomValues

▸ **getRandomValues**<`T`\>(`array`): `T`

Calls crypto.getRandomValues as many times as needed to fill array.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TypedArray`](util_array.md#typedarray) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `T` |

#### Returns

`T`

#### Defined in

[src/neuroglancer/util/random.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/random.ts#L33)
