[neuroglancer](../README.md) / [Modules](../modules.md) / util/zorder

# Module: util/zorder

## Table of contents

### Functions

- [decodeZIndexCompressed](util_zorder.md#decodezindexcompressed)
- [encodeZIndexCompressed](util_zorder.md#encodezindexcompressed)
- [encodeZIndexCompressed3d](util_zorder.md#encodezindexcompressed3d)
- [getOctreeChildIndex](util_zorder.md#getoctreechildindex)
- [zorder3LessThan](util_zorder.md#zorder3lessthan)

## Functions

### decodeZIndexCompressed

▸ **decodeZIndexCompressed**(`zindex`, `xBits`, `yBits`, `zBits`): `Uint32Array`

Decodes a "compressed" 3-d morton index.

Decoded bit `i` of `x`, `y`, and `z` is at bit `i + min(i, yBits) + min(i, zBits)`, `i + min(i +
1, xBits) + min(i, zBits)`, and `i + min(i + 1, xBits) + min(i + 1, zBits)` of `zindex`,
respectively, for `i` in `[0, xBits)`, `[0, yBits)`, `[0, zBits)`, respectively.

#### Parameters

| Name | Type |
| :------ | :------ |
| `zindex` | [`Uint64`](../classes/util_uint64.Uint64.md) |
| `xBits` | `number` |
| `yBits` | `number` |
| `zBits` | `number` |

#### Returns

`Uint32Array`

#### Defined in

[src/neuroglancer/util/zorder.ts:31](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/zorder.ts#L31)

___

### encodeZIndexCompressed

▸ **encodeZIndexCompressed**(`zindex`, `position`, `shape`): [`Uint64`](../classes/util_uint64.Uint64.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `zindex` | [`Uint64`](../classes/util_uint64.Uint64.md) |
| `position` | [`TypedArray`](util_array.md#typedarray) |
| `shape` | [`TypedArray`](util_array.md#typedarray) |

#### Returns

[`Uint64`](../classes/util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/util/zorder.ts:108](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/zorder.ts#L108)

___

### encodeZIndexCompressed3d

▸ **encodeZIndexCompressed3d**(`zindex`, `xBits`, `yBits`, `zBits`, `x`, `y`, `z`): [`Uint64`](../classes/util_uint64.Uint64.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `zindex` | [`Uint64`](../classes/util_uint64.Uint64.md) |
| `xBits` | `number` |
| `yBits` | `number` |
| `zBits` | `number` |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

#### Returns

[`Uint64`](../classes/util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/util/zorder.ts:72](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/zorder.ts#L72)

___

### getOctreeChildIndex

▸ **getOctreeChildIndex**(`x`, `y`, `z`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

#### Returns

`number`

#### Defined in

[src/neuroglancer/util/zorder.ts:20](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/zorder.ts#L20)

___

### zorder3LessThan

▸ **zorder3LessThan**(`x0`, `y0`, `z0`, `x1`, `y1`, `z1`): `boolean`

Returns `true` if `(x0, y0, z0)` occurs before `(x1, y1, z1)` in Z-curve order.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x0` | `number` |
| `y0` | `number` |
| `z0` | `number` |
| `x1` | `number` |
| `y1` | `number` |
| `z1` | `number` |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/util/zorder.ts:147](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/zorder.ts#L147)
