[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/gpu\_hash/hash\_table](../modules/neuroglancer_gpu_hash_hash_table.md) / HashMapUint64

# Class: HashMapUint64

[neuroglancer/gpu_hash/hash_table](../modules/neuroglancer_gpu_hash_hash_table.md).HashMapUint64

## Hierarchy

- [`HashTableBase`](neuroglancer_gpu_hash_hash_table.HashTableBase.md)

  ↳ **`HashMapUint64`**

## Table of contents

### Constructors

- [constructor](neuroglancer_gpu_hash_hash_table.HashMapUint64.md#constructor)

### Properties

- [capacity](neuroglancer_gpu_hash_hash_table.HashMapUint64.md#capacity)
- [emptyHigh](neuroglancer_gpu_hash_hash_table.HashMapUint64.md#emptyhigh)
- [emptyLow](neuroglancer_gpu_hash_hash_table.HashMapUint64.md#emptylow)
- [entryStride](neuroglancer_gpu_hash_hash_table.HashMapUint64.md#entrystride)
- [generation](neuroglancer_gpu_hash_hash_table.HashMapUint64.md#generation)
- [hashSeeds](neuroglancer_gpu_hash_hash_table.HashMapUint64.md#hashseeds)
- [loadFactor](neuroglancer_gpu_hash_hash_table.HashMapUint64.md#loadfactor)
- [maxAttempts](neuroglancer_gpu_hash_hash_table.HashMapUint64.md#maxattempts)
- [maxRehashAttempts](neuroglancer_gpu_hash_hash_table.HashMapUint64.md#maxrehashattempts)
- [mungedEmptyKey](neuroglancer_gpu_hash_hash_table.HashMapUint64.md#mungedemptykey)
- [size](neuroglancer_gpu_hash_hash_table.HashMapUint64.md#size)
- [table](neuroglancer_gpu_hash_hash_table.HashMapUint64.md#table)
- [tableSize](neuroglancer_gpu_hash_hash_table.HashMapUint64.md#tablesize)

### Methods

- [[iterator]](neuroglancer_gpu_hash_hash_table.HashMapUint64.md#[iterator])
- [backupPending](neuroglancer_gpu_hash_hash_table.HashMapUint64.md#backuppending)
- [clear](neuroglancer_gpu_hash_hash_table.HashMapUint64.md#clear)
- [delete](neuroglancer_gpu_hash_hash_table.HashMapUint64.md#delete)
- [entries](neuroglancer_gpu_hash_hash_table.HashMapUint64.md#entries)
- [get](neuroglancer_gpu_hash_hash_table.HashMapUint64.md#get)
- [getHash](neuroglancer_gpu_hash_hash_table.HashMapUint64.md#gethash)
- [has](neuroglancer_gpu_hash_hash_table.HashMapUint64.md#has)
- [hasPair](neuroglancer_gpu_hash_hash_table.HashMapUint64.md#haspair)
- [indexOf](neuroglancer_gpu_hash_hash_table.HashMapUint64.md#indexof)
- [indexOfPair](neuroglancer_gpu_hash_hash_table.HashMapUint64.md#indexofpair)
- [insertInternal](neuroglancer_gpu_hash_hash_table.HashMapUint64.md#insertinternal)
- [keys](neuroglancer_gpu_hash_hash_table.HashMapUint64.md#keys)
- [restorePending](neuroglancer_gpu_hash_hash_table.HashMapUint64.md#restorepending)
- [set](neuroglancer_gpu_hash_hash_table.HashMapUint64.md#set)
- [storePending](neuroglancer_gpu_hash_hash_table.HashMapUint64.md#storepending)
- [swapPending](neuroglancer_gpu_hash_hash_table.HashMapUint64.md#swappending)
- [tableWithMungedEmptyKey](neuroglancer_gpu_hash_hash_table.HashMapUint64.md#tablewithmungedemptykey)
- [generateHashSeeds](neuroglancer_gpu_hash_hash_table.HashMapUint64.md#generatehashseeds)

## Constructors

### constructor

• **new HashMapUint64**(`hashSeeds?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `hashSeeds` | `Uint32Array` |

#### Inherited from

[HashTableBase](neuroglancer_gpu_hash_hash_table.HashTableBase.md).[constructor](neuroglancer_gpu_hash_hash_table.HashTableBase.md#constructor)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L51)

## Properties

### capacity

• **capacity**: `number`

#### Inherited from

[HashTableBase](neuroglancer_gpu_hash_hash_table.HashTableBase.md).[capacity](neuroglancer_gpu_hash_hash_table.HashTableBase.md#capacity)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L40)

___

### emptyHigh

• **emptyHigh**: `number` = `4294967295`

#### Inherited from

[HashTableBase](neuroglancer_gpu_hash_hash_table.HashTableBase.md).[emptyHigh](neuroglancer_gpu_hash_hash_table.HashTableBase.md#emptyhigh)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L37)

___

### emptyLow

• **emptyLow**: `number` = `4294967295`

#### Inherited from

[HashTableBase](neuroglancer_gpu_hash_hash_table.HashTableBase.md).[emptyLow](neuroglancer_gpu_hash_hash_table.HashTableBase.md#emptylow)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L36)

___

### entryStride

• **entryStride**: `number`

Number of uint32 elements per entry in hash table.

#### Inherited from

[HashTableBase](neuroglancer_gpu_hash_hash_table.HashTableBase.md).[entryStride](neuroglancer_gpu_hash_hash_table.HashTableBase.md#entrystride)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L45)

___

### generation

• **generation**: `number` = `0`

#### Inherited from

[HashTableBase](neuroglancer_gpu_hash_hash_table.HashTableBase.md).[generation](neuroglancer_gpu_hash_hash_table.HashTableBase.md#generation)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L47)

___

### hashSeeds

• **hashSeeds**: `Uint32Array`

#### Inherited from

[HashTableBase](neuroglancer_gpu_hash_hash_table.HashTableBase.md).[hashSeeds](neuroglancer_gpu_hash_hash_table.HashTableBase.md#hashseeds)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L51)

___

### loadFactor

• **loadFactor**: `number` = `DEFAULT_LOAD_FACTOR`

#### Inherited from

[HashTableBase](neuroglancer_gpu_hash_hash_table.HashTableBase.md).[loadFactor](neuroglancer_gpu_hash_hash_table.HashTableBase.md#loadfactor)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L32)

___

### maxAttempts

• **maxAttempts**: `number` = `5`

#### Inherited from

[HashTableBase](neuroglancer_gpu_hash_hash_table.HashTableBase.md).[maxAttempts](neuroglancer_gpu_hash_hash_table.HashTableBase.md#maxattempts)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L39)

___

### maxRehashAttempts

• **maxRehashAttempts**: `number` = `5`

#### Inherited from

[HashTableBase](neuroglancer_gpu_hash_hash_table.HashTableBase.md).[maxRehashAttempts](neuroglancer_gpu_hash_hash_table.HashTableBase.md#maxrehashattempts)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L38)

___

### mungedEmptyKey

• **mungedEmptyKey**: `number` = `-1`

#### Inherited from

[HashTableBase](neuroglancer_gpu_hash_hash_table.HashTableBase.md).[mungedEmptyKey](neuroglancer_gpu_hash_hash_table.HashTableBase.md#mungedemptykey)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L49)

___

### size

• **size**: `number` = `0`

#### Inherited from

[HashTableBase](neuroglancer_gpu_hash_hash_table.HashTableBase.md).[size](neuroglancer_gpu_hash_hash_table.HashTableBase.md#size)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L33)

___

### table

• **table**: `Uint32Array`

#### Inherited from

[HashTableBase](neuroglancer_gpu_hash_hash_table.HashTableBase.md).[table](neuroglancer_gpu_hash_hash_table.HashTableBase.md#table)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L34)

___

### tableSize

• **tableSize**: `number`

#### Inherited from

[HashTableBase](neuroglancer_gpu_hash_hash_table.HashTableBase.md).[tableSize](neuroglancer_gpu_hash_hash_table.HashTableBase.md#tablesize)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:35](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L35)

## Methods

### [iterator]

▸ **[iterator]**(): [`Generator`](../interfaces/neuroglancer_chunk_manager_backend._internal_.Generator.md)<[[`Uint64`](neuroglancer_util_uint64.Uint64.md), [`Uint64`](neuroglancer_util_uint64.Uint64.md)], `void`, `unknown`\>

Iterates over entries.  The same temporary value will be modified and yielded at every
iteration.

#### Returns

[`Generator`](../interfaces/neuroglancer_chunk_manager_backend._internal_.Generator.md)<[[`Uint64`](neuroglancer_util_uint64.Uint64.md), [`Uint64`](neuroglancer_util_uint64.Uint64.md)], `void`, `unknown`\>

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:464](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L464)

___

### backupPending

▸ `Protected` **backupPending**(): `void`

#### Returns

`void`

#### Overrides

[HashTableBase](neuroglancer_gpu_hash_hash_table.HashTableBase.md).[backupPending](neuroglancer_gpu_hash_hash_table.HashTableBase.md#backuppending)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:448](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L448)

___

### clear

▸ **clear**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[HashTableBase](neuroglancer_gpu_hash_hash_table.HashTableBase.md).[clear](neuroglancer_gpu_hash_hash_table.HashTableBase.md#clear)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:244](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L244)

___

### delete

▸ **delete**(`x`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

`boolean`

#### Inherited from

[HashTableBase](neuroglancer_gpu_hash_hash_table.HashTableBase.md).[delete](neuroglancer_gpu_hash_hash_table.HashTableBase.md#delete)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:221](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L221)

___

### entries

▸ **entries**(`temp?`): [`Generator`](../interfaces/neuroglancer_chunk_manager_backend._internal_.Generator.md)<[[`Uint64`](neuroglancer_util_uint64.Uint64.md), [`Uint64`](neuroglancer_util_uint64.Uint64.md)], `void`, `unknown`\>

Iterates over entries.  The same temporary value will be modified and yielded at every
iteration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `temp` | [[`Uint64`](neuroglancer_util_uint64.Uint64.md), [`Uint64`](neuroglancer_util_uint64.Uint64.md)] |

#### Returns

[`Generator`](../interfaces/neuroglancer_chunk_manager_backend._internal_.Generator.md)<[[`Uint64`](neuroglancer_util_uint64.Uint64.md), [`Uint64`](neuroglancer_util_uint64.Uint64.md)], `void`, `unknown`\>

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:472](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L472)

___

### get

▸ **get**(`key`, `value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |
| `value` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:424](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L424)

___

### getHash

▸ **getHash**(`hashIndex`, `low`, `high`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hashIndex` | `number` |
| `low` | `number` |
| `high` | `number` |

#### Returns

`number`

#### Inherited from

[HashTableBase](neuroglancer_gpu_hash_hash_table.HashTableBase.md).[getHash](neuroglancer_gpu_hash_hash_table.HashTableBase.md#gethash)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:127](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L127)

___

### has

▸ **has**(`x`): `boolean`

Returns true iff the specified element is present.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

`boolean`

#### Inherited from

[HashTableBase](neuroglancer_gpu_hash_hash_table.HashTableBase.md).[has](neuroglancer_gpu_hash_hash_table.HashTableBase.md#has)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:210](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L210)

___

### hasPair

▸ **hasPair**(`low`, `high`): `boolean`

Returns true iff the specified element is present.

#### Parameters

| Name | Type |
| :------ | :------ |
| `low` | `number` |
| `high` | `number` |

#### Returns

`boolean`

#### Inherited from

[HashTableBase](neuroglancer_gpu_hash_hash_table.HashTableBase.md).[hasPair](neuroglancer_gpu_hash_hash_table.HashTableBase.md#haspair)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:217](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L217)

___

### indexOf

▸ **indexOf**(`x`): `number`

Returns the offset into the hash table of the specified element, or -1 if the element is not
present.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

`number`

#### Inherited from

[HashTableBase](neuroglancer_gpu_hash_hash_table.HashTableBase.md).[indexOf](neuroglancer_gpu_hash_hash_table.HashTableBase.md#indexof)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L170)

___

### indexOfPair

▸ **indexOfPair**(`low`, `high`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `low` | `number` |
| `high` | `number` |

#### Returns

`number`

#### Inherited from

[HashTableBase](neuroglancer_gpu_hash_hash_table.HashTableBase.md).[indexOfPair](neuroglancer_gpu_hash_hash_table.HashTableBase.md#indexofpair)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:152](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L152)

___

### insertInternal

▸ `Protected` **insertInternal**(): `void`

#### Returns

`void`

#### Inherited from

[HashTableBase](neuroglancer_gpu_hash_hash_table.HashTableBase.md).[insertInternal](neuroglancer_gpu_hash_hash_table.HashTableBase.md#insertinternal)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:356](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L356)

___

### keys

▸ **keys**(`temp?`): [`Generator`](../interfaces/neuroglancer_chunk_manager_backend._internal_.Generator.md)<[`Uint64`](neuroglancer_util_uint64.Uint64.md), `void`, `unknown`\>

Iterates over the Uint64 keys contained in the hash set.

The same temp value will be modified and yielded at every iteration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `temp` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

[`Generator`](../interfaces/neuroglancer_chunk_manager_backend._internal_.Generator.md)<[`Uint64`](neuroglancer_util_uint64.Uint64.md), `void`, `unknown`\>

#### Inherited from

[HashTableBase](neuroglancer_gpu_hash_hash_table.HashTableBase.md).[keys](neuroglancer_gpu_hash_hash_table.HashTableBase.md#keys)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:139](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L139)

___

### restorePending

▸ `Protected` **restorePending**(): `void`

#### Returns

`void`

#### Overrides

[HashTableBase](neuroglancer_gpu_hash_hash_table.HashTableBase.md).[restorePending](neuroglancer_gpu_hash_hash_table.HashTableBase.md#restorepending)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:454](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L454)

___

### set

▸ **set**(`key`, `value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |
| `value` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:408](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L408)

___

### storePending

▸ `Protected` **storePending**(`table`, `offset`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `Uint32Array` |
| `offset` | `number` |

#### Returns

`void`

#### Overrides

[HashTableBase](neuroglancer_gpu_hash_hash_table.HashTableBase.md).[storePending](neuroglancer_gpu_hash_hash_table.HashTableBase.md#storepending)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:442](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L442)

___

### swapPending

▸ `Protected` **swapPending**(`table`, `offset`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `Uint32Array` |
| `offset` | `number` |

#### Returns

`void`

#### Overrides

[HashTableBase](neuroglancer_gpu_hash_hash_table.HashTableBase.md).[swapPending](neuroglancer_gpu_hash_hash_table.HashTableBase.md#swappending)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:435](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L435)

___

### tableWithMungedEmptyKey

▸ **tableWithMungedEmptyKey**(`callback`): `void`

Invokes callback with a modified version of the hash table data array.

Replaces all slots that appear to be valid entries for (emptyLow, emptyHigh), i.e. slots that
contain (emptyLow, emptyHigh) and to which (emptyLow, emptyHigh) hashes, with (mungedEmptyKey,
mungedEmptyKey).

mungedEmptyKey is chosen to be a 32-bit value with the property that the 64-bit value
(mungedEmptyKey, mungedEmptyKey) does not hash to any of the same slots as (emptyLow,
emptyHigh).

This allows the modified data array to be used for lookups without special casing the empty
key.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`table`: `Uint32Array`) => `void` |

#### Returns

`void`

#### Inherited from

[HashTableBase](neuroglancer_gpu_hash_hash_table.HashTableBase.md).[tableWithMungedEmptyKey](neuroglancer_gpu_hash_hash_table.HashTableBase.md#tablewithmungedemptykey)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:80](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L80)

___

### generateHashSeeds

▸ `Static` **generateHashSeeds**(`numAlternatives?`): `Uint32Array`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `numAlternatives` | `number` | `NUM_ALTERNATIVES` |

#### Returns

`Uint32Array`

#### Inherited from

[HashTableBase](neuroglancer_gpu_hash_hash_table.HashTableBase.md).[generateHashSeeds](neuroglancer_gpu_hash_hash_table.HashTableBase.md#generatehashseeds)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:123](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L123)
