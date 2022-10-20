[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/util/uint64](../modules/neuroglancer_util_uint64.md) / Uint64

# Class: Uint64

[neuroglancer/util/uint64](../modules/neuroglancer_util_uint64.md).Uint64

## Table of contents

### Constructors

- [constructor](neuroglancer_util_uint64.Uint64.md#constructor)

### Properties

- [high](neuroglancer_util_uint64.Uint64.md#high)
- [low](neuroglancer_util_uint64.Uint64.md#low)
- [ONE](neuroglancer_util_uint64.Uint64.md#one)
- [ZERO](neuroglancer_util_uint64.Uint64.md#zero)

### Methods

- [assign](neuroglancer_util_uint64.Uint64.md#assign)
- [clone](neuroglancer_util_uint64.Uint64.md#clone)
- [parseString](neuroglancer_util_uint64.Uint64.md#parsestring)
- [setFromNumber](neuroglancer_util_uint64.Uint64.md#setfromnumber)
- [toJSON](neuroglancer_util_uint64.Uint64.md#tojson)
- [toNumber](neuroglancer_util_uint64.Uint64.md#tonumber)
- [toString](neuroglancer_util_uint64.Uint64.md#tostring)
- [tryParseString](neuroglancer_util_uint64.Uint64.md#tryparsestring)
- [valid](neuroglancer_util_uint64.Uint64.md#valid)
- [absDifference](neuroglancer_util_uint64.Uint64.md#absdifference)
- [add](neuroglancer_util_uint64.Uint64.md#add)
- [addUint32](neuroglancer_util_uint64.Uint64.md#adduint32)
- [and](neuroglancer_util_uint64.Uint64.md#and)
- [compare](neuroglancer_util_uint64.Uint64.md#compare)
- [decrement](neuroglancer_util_uint64.Uint64.md#decrement)
- [equal](neuroglancer_util_uint64.Uint64.md#equal)
- [increment](neuroglancer_util_uint64.Uint64.md#increment)
- [less](neuroglancer_util_uint64.Uint64.md#less)
- [lowMask](neuroglancer_util_uint64.Uint64.md#lowmask)
- [lshift](neuroglancer_util_uint64.Uint64.md#lshift)
- [max](neuroglancer_util_uint64.Uint64.md#max)
- [min](neuroglancer_util_uint64.Uint64.md#min)
- [multiplyUint32](neuroglancer_util_uint64.Uint64.md#multiplyuint32)
- [or](neuroglancer_util_uint64.Uint64.md#or)
- [parseString](neuroglancer_util_uint64.Uint64.md#parsestring-1)
- [random](neuroglancer_util_uint64.Uint64.md#random)
- [rshift](neuroglancer_util_uint64.Uint64.md#rshift)
- [subtract](neuroglancer_util_uint64.Uint64.md#subtract)
- [xor](neuroglancer_util_uint64.Uint64.md#xor)

## Constructors

### constructor

• **new Uint64**(`low?`, `high?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `low` | `number` | `0` |
| `high` | `number` | `0` |

#### Defined in

[src/neuroglancer/util/uint64.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/uint64.ts#L81)

## Properties

### high

• **high**: `number` = `0`

#### Defined in

[src/neuroglancer/util/uint64.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/uint64.ts#L81)

___

### low

• **low**: `number` = `0`

#### Defined in

[src/neuroglancer/util/uint64.ts:81](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/uint64.ts#L81)

___

### ONE

▪ `Static` **ONE**: [`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/util/uint64.ts:124](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/uint64.ts#L124)

___

### ZERO

▪ `Static` **ZERO**: [`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/util/uint64.ts:123](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/uint64.ts#L123)

## Methods

### assign

▸ **assign**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/uint64.ts:87](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/uint64.ts#L87)

___

### clone

▸ **clone**(): [`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Returns

[`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/util/uint64.ts:83](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/uint64.ts#L83)

___

### parseString

▸ **parseString**(`s`, `base?`): [`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `s` | `string` | `undefined` |
| `base` | `number` | `10` |

#### Returns

[`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/util/uint64.ts:180](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/uint64.ts#L180)

___

### setFromNumber

▸ **setFromNumber**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/uint64.ts:325](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/uint64.ts#L325)

___

### toJSON

▸ **toJSON**(): `string`

#### Returns

`string`

#### Defined in

[src/neuroglancer/util/uint64.ts:197](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/uint64.ts#L197)

___

### toNumber

▸ **toNumber**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/util/uint64.ts:321](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/uint64.ts#L321)

___

### toString

▸ **toString**(`base?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `base` | `number` | `10` |

#### Returns

`string`

#### Defined in

[src/neuroglancer/util/uint64.ts:92](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/uint64.ts#L92)

___

### tryParseString

▸ **tryParseString**(`s`, `base?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `s` | `string` | `undefined` |
| `base` | `number` | `10` |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/util/uint64.ts:143](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/uint64.ts#L143)

___

### valid

▸ **valid**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/util/uint64.ts:192](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/uint64.ts#L192)

___

### absDifference

▸ `Static` **absDifference**(`out`, `a`, `b`): [`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |
| `a` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |
| `b` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

[`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/util/uint64.ts:297](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/uint64.ts#L297)

___

### add

▸ `Static` **add**(`out`, `a`, `b`): [`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |
| `a` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |
| `b` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

[`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/util/uint64.ts:249](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/uint64.ts#L249)

___

### addUint32

▸ `Static` **addUint32**(`out`, `a`, `b`): [`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |
| `a` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |
| `b` | `number` |

#### Returns

[`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/util/uint64.ts:259](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/uint64.ts#L259)

___

### and

▸ `Static` **and**(`out`, `a`, `b`): [`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |
| `a` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |
| `b` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

[`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/util/uint64.ts:243](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/uint64.ts#L243)

___

### compare

▸ `Static` **compare**(`a`, `b`): `number`

Returns a negative number if a is strictly less than b, 0 if a is equal to b, or a positive
number if a is strictly greater than b.

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |
| `b` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

`number`

#### Defined in

[src/neuroglancer/util/uint64.ts:119](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/uint64.ts#L119)

___

### decrement

▸ `Static` **decrement**(`out`, `input`): [`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |
| `input` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

[`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/util/uint64.ts:269](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/uint64.ts#L269)

___

### equal

▸ `Static` **equal**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |
| `b` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/util/uint64.ts:126](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/uint64.ts#L126)

___

### increment

▸ `Static` **increment**(`out`, `input`): [`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |
| `input` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

[`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/util/uint64.ts:279](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/uint64.ts#L279)

___

### less

▸ `Static` **less**(`a`, `b`): `boolean`

Returns true if a is strictly less than b.

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |
| `b` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/util/uint64.ts:111](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/uint64.ts#L111)

___

### lowMask

▸ `Static` **lowMask**(`out`, `bits`): [`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |
| `bits` | `number` |

#### Returns

[`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/util/uint64.ts:308](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/uint64.ts#L308)

___

### lshift

▸ `Static` **lshift**(`out`, `input`, `bits`): [`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |
| `input` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |
| `bits` | `number` |

#### Returns

[`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/util/uint64.ts:201](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/uint64.ts#L201)

___

### max

▸ `Static` **max**(`a`, `b`): [`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |
| `b` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

[`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/util/uint64.ts:134](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/uint64.ts#L134)

___

### min

▸ `Static` **min**(`a`, `b`): [`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |
| `b` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

[`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/util/uint64.ts:130](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/uint64.ts#L130)

___

### multiplyUint32

▸ `Static` **multiplyUint32**(`out`, `a`, `b`): [`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |
| `a` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |
| `b` | `number` |

#### Returns

[`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/util/uint64.ts:301](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/uint64.ts#L301)

___

### or

▸ `Static` **or**(`out`, `a`, `b`): [`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |
| `a` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |
| `b` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

[`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/util/uint64.ts:231](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/uint64.ts#L231)

___

### parseString

▸ `Static` **parseString**(`s`, `base?`): [`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `s` | `string` | `undefined` |
| `base` | `number` | `10` |

#### Returns

[`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/util/uint64.ts:187](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/uint64.ts#L187)

___

### random

▸ `Static` **random**(): [`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Returns

[`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/util/uint64.ts:138](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/uint64.ts#L138)

___

### rshift

▸ `Static` **rshift**(`out`, `input`, `bits`): [`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |
| `input` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |
| `bits` | `number` |

#### Returns

[`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/util/uint64.ts:216](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/uint64.ts#L216)

___

### subtract

▸ `Static` **subtract**(`out`, `a`, `b`): [`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |
| `a` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |
| `b` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

[`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/util/uint64.ts:287](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/uint64.ts#L287)

___

### xor

▸ `Static` **xor**(`out`, `a`, `b`): [`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `out` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |
| `a` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |
| `b` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

[`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/util/uint64.ts:237](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/uint64.ts#L237)
