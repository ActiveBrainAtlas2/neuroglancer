[neuroglancer](../README.md) / [Modules](../modules.md) / util/hash

# Module: util/hash

## Table of contents

### Functions

- [murmurHash3\_x86\_128Hash64Bits](util_hash.md#murmurhash3_x86_128hash64bits)
- [murmurHash3\_x86\_32Finalize](util_hash.md#murmurhash3_x86_32finalize)
- [murmurHash3\_x86\_32Hash64Bits](util_hash.md#murmurhash3_x86_32hash64bits)
- [murmurHash3\_x86\_32Mix](util_hash.md#murmurhash3_x86_32mix)
- [simpleStringHash](util_hash.md#simplestringhash)

## Functions

### murmurHash3\_x86\_128Hash64Bits

▸ **murmurHash3_x86_128Hash64Bits**(`out`, `seed`, `low`, `high`): [`Uint64`](../classes/util_uint64.Uint64.md)

MurmurHash3_x86_128, specialized for 8 bytes of input.

Only the low 8 bytes of output are returned.

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | [`Uint64`](../classes/util_uint64.Uint64.md) |
| `seed` | `number` |
| `low` | `number` |
| `high` | `number` |

#### Returns

[`Uint64`](../classes/util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/util/hash.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/hash.ts#L87)

___

### murmurHash3\_x86\_32Finalize

▸ **murmurHash3_x86_32Finalize**(`h`, `len`): `number`

MurmurHash3_x86_32 finalization function

#### Parameters

| Name | Type |
| :------ | :------ |
| `h` | `number` |
| `len` | `number` |

#### Returns

`number`

#### Defined in

[src/neuroglancer/util/hash.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/hash.ts#L48)

___

### murmurHash3\_x86\_32Hash64Bits

▸ **murmurHash3_x86_32Hash64Bits**(`seed`, `low`, `high`): `number`

MurmurHash3_x86_32, specialized for 8 bytes of input.

#### Parameters

| Name | Type |
| :------ | :------ |
| `seed` | `number` |
| `low` | `number` |
| `high` | `number` |

#### Returns

`number`

#### Defined in

[src/neuroglancer/util/hash.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/hash.ts#L61)

___

### murmurHash3\_x86\_32Mix

▸ **murmurHash3_x86_32Mix**(`h`, `k`): `number`

MurmurHash3_x86_32 mixing function

#### Parameters

| Name | Type |
| :------ | :------ |
| `h` | `number` |
| `k` | `number` |

#### Returns

`number`

#### Defined in

[src/neuroglancer/util/hash.ts:35](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/hash.ts#L35)

___

### simpleStringHash

▸ **simpleStringHash**(`s`): `number`

This is a very simple string hash function.  It isn't secure, but
is suitable for sharding of requests.

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`number`

#### Defined in

[src/neuroglancer/util/hash.ts:23](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/hash.ts#L23)
