[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/util/disjoint\_sets](../modules/neuroglancer_util_disjoint_sets.md) / DisjointUint64Sets

# Class: DisjointUint64Sets

[neuroglancer/util/disjoint_sets](../modules/neuroglancer_util_disjoint_sets.md).DisjointUint64Sets

Represents a collection of disjoint sets of Uint64 values.

Supports merging sets, retrieving the minimum Uint64 value contained in a set (the representative
value), and iterating over the elements contained in a set.

## Table of contents

### Constructors

- [constructor](neuroglancer_util_disjoint_sets.DisjointUint64Sets.md#constructor)

### Properties

- [generation](neuroglancer_util_disjoint_sets.DisjointUint64Sets.md#generation)
- [highBitRepresentative](neuroglancer_util_disjoint_sets.DisjointUint64Sets.md#highbitrepresentative)
- [map](neuroglancer_util_disjoint_sets.DisjointUint64Sets.md#map)

### Accessors

- [size](neuroglancer_util_disjoint_sets.DisjointUint64Sets.md#size)

### Methods

- [[iterator]](neuroglancer_util_disjoint_sets.DisjointUint64Sets.md#[iterator])
- [clear](neuroglancer_util_disjoint_sets.DisjointUint64Sets.md#clear)
- [deleteSet](neuroglancer_util_disjoint_sets.DisjointUint64Sets.md#deleteset)
- [get](neuroglancer_util_disjoint_sets.DisjointUint64Sets.md#get)
- [isMinElement](neuroglancer_util_disjoint_sets.DisjointUint64Sets.md#isminelement)
- [link](neuroglancer_util_disjoint_sets.DisjointUint64Sets.md#link)
- [linkAll](neuroglancer_util_disjoint_sets.DisjointUint64Sets.md#linkall)
- [makeSet](neuroglancer_util_disjoint_sets.DisjointUint64Sets.md#makeset)
- [mappings](neuroglancer_util_disjoint_sets.DisjointUint64Sets.md#mappings)
- [roots](neuroglancer_util_disjoint_sets.DisjointUint64Sets.md#roots)
- [setElements](neuroglancer_util_disjoint_sets.DisjointUint64Sets.md#setelements)
- [toJSON](neuroglancer_util_disjoint_sets.DisjointUint64Sets.md#tojson)

## Constructors

### constructor

• **new DisjointUint64Sets**()

## Properties

### generation

• **generation**: `number` = `0`

#### Defined in

[src/neuroglancer/util/disjoint_sets.ts:103](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disjoint_sets.ts#L103)

___

### highBitRepresentative

• **highBitRepresentative**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`boolean`\>

#### Defined in

[src/neuroglancer/util/disjoint_sets.ts:102](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disjoint_sets.ts#L102)

___

### map

• `Private` **map**: `Map`<`string`, [`Uint64`](neuroglancer_util_uint64.Uint64.md)\>

#### Defined in

[src/neuroglancer/util/disjoint_sets.ts:101](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disjoint_sets.ts#L101)

## Accessors

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/util/disjoint_sets.ts:191](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disjoint_sets.ts#L191)

## Methods

### [iterator]

▸ **[iterator]**(): [`Generator`](../interfaces/neuroglancer_chunk_manager_backend._internal_.Generator.md)<[[`Uint64`](neuroglancer_util_uint64.Uint64.md), [`Uint64`](neuroglancer_util_uint64.Uint64.md)], `void`, `unknown`\>

#### Returns

[`Generator`](../interfaces/neuroglancer_chunk_manager_backend._internal_.Generator.md)<[[`Uint64`](neuroglancer_util_uint64.Uint64.md), [`Uint64`](neuroglancer_util_uint64.Uint64.md)], `void`, `unknown`\>

#### Defined in

[src/neuroglancer/util/disjoint_sets.ts:211](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disjoint_sets.ts#L211)

___

### clear

▸ **clear**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/util/disjoint_sets.ts:181](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disjoint_sets.ts#L181)

___

### deleteSet

▸ **deleteSet**(`x`): `boolean`

Unlinks all members of the specified set.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/util/disjoint_sets.ts:161](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disjoint_sets.ts#L161)

___

### get

▸ **get**(`x`): [`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

[`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/util/disjoint_sets.ts:105](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disjoint_sets.ts#L105)

___

### isMinElement

▸ **isMinElement**(`x`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/util/disjoint_sets.ts:114](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disjoint_sets.ts#L114)

___

### link

▸ **link**(`a`, `b`): `boolean`

Union the sets containing `a` and `b`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |
| `b` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

`boolean`

`false` if `a` and `b` are already in the same set, otherwise `true`.

#### Defined in

[src/neuroglancer/util/disjoint_sets.ts:137](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disjoint_sets.ts#L137)

___

### linkAll

▸ **linkAll**(`ids`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | [`Uint64`](neuroglancer_util_uint64.Uint64.md)[] |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/disjoint_sets.ts:152](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disjoint_sets.ts#L152)

___

### makeSet

▸ `Private` **makeSet**(`x`): [`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

[`Uint64`](neuroglancer_util_uint64.Uint64.md)

#### Defined in

[src/neuroglancer/util/disjoint_sets.ts:119](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disjoint_sets.ts#L119)

___

### mappings

▸ **mappings**(`temp?`): [`Generator`](../interfaces/neuroglancer_chunk_manager_backend._internal_.Generator.md)<[[`Uint64`](neuroglancer_util_uint64.Uint64.md), [`Uint64`](neuroglancer_util_uint64.Uint64.md)], `void`, `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `temp` | [[`Uint64`](neuroglancer_util_uint64.Uint64.md), [`Uint64`](neuroglancer_util_uint64.Uint64.md)] |

#### Returns

[`Generator`](../interfaces/neuroglancer_chunk_manager_backend._internal_.Generator.md)<[[`Uint64`](neuroglancer_util_uint64.Uint64.md), [`Uint64`](neuroglancer_util_uint64.Uint64.md)], `void`, `unknown`\>

#### Defined in

[src/neuroglancer/util/disjoint_sets.ts:195](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disjoint_sets.ts#L195)

___

### roots

▸ **roots**(): [`Generator`](../interfaces/neuroglancer_chunk_manager_backend._internal_.Generator.md)<[`Uint64`](neuroglancer_util_uint64.Uint64.md), `void`, `unknown`\>

#### Returns

[`Generator`](../interfaces/neuroglancer_chunk_manager_backend._internal_.Generator.md)<[`Uint64`](neuroglancer_util_uint64.Uint64.md), `void`, `unknown`\>

#### Defined in

[src/neuroglancer/util/disjoint_sets.ts:203](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disjoint_sets.ts#L203)

___

### setElements

▸ **setElements**(`a`): [`IterableIterator`](../interfaces/main_module._internal_.IterableIterator.md)<[`Uint64`](neuroglancer_util_uint64.Uint64.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

[`IterableIterator`](../interfaces/main_module._internal_.IterableIterator.md)<[`Uint64`](neuroglancer_util_uint64.Uint64.md)\>

#### Defined in

[src/neuroglancer/util/disjoint_sets.ts:171](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disjoint_sets.ts#L171)

___

### toJSON

▸ **toJSON**(): `string`[][]

Returns an array of arrays of strings, where the arrays contained in the outer array correspond
to the disjoint sets, and the strings are the base-10 string representations of the members of
each set.  The members are sorted in numerical order, and the sets are sorted in numerical
order of their smallest elements.

#### Returns

`string`[][]

#### Defined in

[src/neuroglancer/util/disjoint_sets.ts:221](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/disjoint_sets.ts#L221)
