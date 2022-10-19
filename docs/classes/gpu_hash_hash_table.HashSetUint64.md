[neuroglancer](../README.md) / [Modules](../modules.md) / [gpu\_hash/hash\_table](../modules/gpu_hash_hash_table.md) / HashSetUint64

# Class: HashSetUint64

[gpu_hash/hash_table](../modules/gpu_hash_hash_table.md).HashSetUint64

## Hierarchy

- [`HashTableBase`](gpu_hash_hash_table.HashTableBase.md)

  ↳ **`HashSetUint64`**

## Table of contents

### Constructors

- [constructor](gpu_hash_hash_table.HashSetUint64.md#constructor)

### Properties

- [capacity](gpu_hash_hash_table.HashSetUint64.md#capacity)
- [emptyHigh](gpu_hash_hash_table.HashSetUint64.md#emptyhigh)
- [emptyLow](gpu_hash_hash_table.HashSetUint64.md#emptylow)
- [entryStride](gpu_hash_hash_table.HashSetUint64.md#entrystride)
- [generation](gpu_hash_hash_table.HashSetUint64.md#generation)
- [hashSeeds](gpu_hash_hash_table.HashSetUint64.md#hashseeds)
- [loadFactor](gpu_hash_hash_table.HashSetUint64.md#loadfactor)
- [maxAttempts](gpu_hash_hash_table.HashSetUint64.md#maxattempts)
- [maxRehashAttempts](gpu_hash_hash_table.HashSetUint64.md#maxrehashattempts)
- [mungedEmptyKey](gpu_hash_hash_table.HashSetUint64.md#mungedemptykey)
- [size](gpu_hash_hash_table.HashSetUint64.md#size)
- [table](gpu_hash_hash_table.HashSetUint64.md#table)
- [tableSize](gpu_hash_hash_table.HashSetUint64.md#tablesize)

### Methods

- [[iterator]](gpu_hash_hash_table.HashSetUint64.md#[iterator])
- [add](gpu_hash_hash_table.HashSetUint64.md#add)
- [backupPending](gpu_hash_hash_table.HashSetUint64.md#backuppending)
- [clear](gpu_hash_hash_table.HashSetUint64.md#clear)
- [delete](gpu_hash_hash_table.HashSetUint64.md#delete)
- [getHash](gpu_hash_hash_table.HashSetUint64.md#gethash)
- [has](gpu_hash_hash_table.HashSetUint64.md#has)
- [hasPair](gpu_hash_hash_table.HashSetUint64.md#haspair)
- [indexOf](gpu_hash_hash_table.HashSetUint64.md#indexof)
- [indexOfPair](gpu_hash_hash_table.HashSetUint64.md#indexofpair)
- [insertInternal](gpu_hash_hash_table.HashSetUint64.md#insertinternal)
- [keys](gpu_hash_hash_table.HashSetUint64.md#keys)
- [restorePending](gpu_hash_hash_table.HashSetUint64.md#restorepending)
- [storePending](gpu_hash_hash_table.HashSetUint64.md#storepending)
- [swapPending](gpu_hash_hash_table.HashSetUint64.md#swappending)
- [tableWithMungedEmptyKey](gpu_hash_hash_table.HashSetUint64.md#tablewithmungedemptykey)
- [generateHashSeeds](gpu_hash_hash_table.HashSetUint64.md#generatehashseeds)

## Constructors

### constructor

• **new HashSetUint64**(`hashSeeds?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `hashSeeds` | `Uint32Array` |

#### Inherited from

[HashTableBase](gpu_hash_hash_table.HashTableBase.md).[constructor](gpu_hash_hash_table.HashTableBase.md#constructor)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/hash_table.ts#L51)

## Properties

### capacity

• **capacity**: `number`

#### Inherited from

[HashTableBase](gpu_hash_hash_table.HashTableBase.md).[capacity](gpu_hash_hash_table.HashTableBase.md#capacity)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/hash_table.ts#L40)

___

### emptyHigh

• **emptyHigh**: `number` = `4294967295`

#### Inherited from

[HashTableBase](gpu_hash_hash_table.HashTableBase.md).[emptyHigh](gpu_hash_hash_table.HashTableBase.md#emptyhigh)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/hash_table.ts#L37)

___

### emptyLow

• **emptyLow**: `number` = `4294967295`

#### Inherited from

[HashTableBase](gpu_hash_hash_table.HashTableBase.md).[emptyLow](gpu_hash_hash_table.HashTableBase.md#emptylow)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/hash_table.ts#L36)

___

### entryStride

• **entryStride**: `number`

Number of uint32 elements per entry in hash table.

#### Inherited from

[HashTableBase](gpu_hash_hash_table.HashTableBase.md).[entryStride](gpu_hash_hash_table.HashTableBase.md#entrystride)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/hash_table.ts#L45)

___

### generation

• **generation**: `number` = `0`

#### Inherited from

[HashTableBase](gpu_hash_hash_table.HashTableBase.md).[generation](gpu_hash_hash_table.HashTableBase.md#generation)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/hash_table.ts#L47)

___

### hashSeeds

• **hashSeeds**: `Uint32Array`

#### Inherited from

[HashTableBase](gpu_hash_hash_table.HashTableBase.md).[hashSeeds](gpu_hash_hash_table.HashTableBase.md#hashseeds)

___

### loadFactor

• **loadFactor**: `number` = `DEFAULT_LOAD_FACTOR`

#### Inherited from

[HashTableBase](gpu_hash_hash_table.HashTableBase.md).[loadFactor](gpu_hash_hash_table.HashTableBase.md#loadfactor)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/hash_table.ts#L32)

___

### maxAttempts

• **maxAttempts**: `number` = `5`

#### Inherited from

[HashTableBase](gpu_hash_hash_table.HashTableBase.md).[maxAttempts](gpu_hash_hash_table.HashTableBase.md#maxattempts)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/hash_table.ts#L39)

___

### maxRehashAttempts

• **maxRehashAttempts**: `number` = `5`

#### Inherited from

[HashTableBase](gpu_hash_hash_table.HashTableBase.md).[maxRehashAttempts](gpu_hash_hash_table.HashTableBase.md#maxrehashattempts)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/hash_table.ts#L38)

___

### mungedEmptyKey

• **mungedEmptyKey**: `number` = `-1`

#### Inherited from

[HashTableBase](gpu_hash_hash_table.HashTableBase.md).[mungedEmptyKey](gpu_hash_hash_table.HashTableBase.md#mungedemptykey)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/hash_table.ts#L49)

___

### size

• **size**: `number` = `0`

#### Inherited from

[HashTableBase](gpu_hash_hash_table.HashTableBase.md).[size](gpu_hash_hash_table.HashTableBase.md#size)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/hash_table.ts#L33)

___

### table

• **table**: `Uint32Array`

#### Inherited from

[HashTableBase](gpu_hash_hash_table.HashTableBase.md).[table](gpu_hash_hash_table.HashTableBase.md#table)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/hash_table.ts#L34)

___

### tableSize

• **tableSize**: `number`

#### Inherited from

[HashTableBase](gpu_hash_hash_table.HashTableBase.md).[tableSize](gpu_hash_hash_table.HashTableBase.md#tablesize)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:35](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/hash_table.ts#L35)

## Methods

### [iterator]

▸ **[iterator]**(): [`Generator`](../interfaces/annotation_annotation_layer_state._internal_.Generator.md)<[`Uint64`](util_uint64.Uint64.md), `void`, `unknown`\>

Iterates over the keys.  The same temporary value will be modified and yielded at every
iteration.

#### Returns

[`Generator`](../interfaces/annotation_annotation_layer_state._internal_.Generator.md)<[`Uint64`](util_uint64.Uint64.md), `void`, `unknown`\>

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:396](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/hash_table.ts#L396)

___

### add

▸ **add**(`x`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Uint64`](util_uint64.Uint64.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:378](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/hash_table.ts#L378)

___

### backupPending

▸ `Protected` **backupPending**(): `void`

#### Returns

`void`

#### Inherited from

[HashTableBase](gpu_hash_hash_table.HashTableBase.md).[backupPending](gpu_hash_hash_table.HashTableBase.md#backuppending)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:266](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/hash_table.ts#L266)

___

### clear

▸ **clear**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[HashTableBase](gpu_hash_hash_table.HashTableBase.md).[clear](gpu_hash_hash_table.HashTableBase.md#clear)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:244](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/hash_table.ts#L244)

___

### delete

▸ **delete**(`x`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Uint64`](util_uint64.Uint64.md) |

#### Returns

`boolean`

#### Inherited from

[HashTableBase](gpu_hash_hash_table.HashTableBase.md).[delete](gpu_hash_hash_table.HashTableBase.md#delete)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:221](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/hash_table.ts#L221)

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

[HashTableBase](gpu_hash_hash_table.HashTableBase.md).[getHash](gpu_hash_hash_table.HashTableBase.md#gethash)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:127](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/hash_table.ts#L127)

___

### has

▸ **has**(`x`): `boolean`

Returns true iff the specified element is present.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Uint64`](util_uint64.Uint64.md) |

#### Returns

`boolean`

#### Inherited from

[HashTableBase](gpu_hash_hash_table.HashTableBase.md).[has](gpu_hash_hash_table.HashTableBase.md#has)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:210](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/hash_table.ts#L210)

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

[HashTableBase](gpu_hash_hash_table.HashTableBase.md).[hasPair](gpu_hash_hash_table.HashTableBase.md#haspair)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:217](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/hash_table.ts#L217)

___

### indexOf

▸ **indexOf**(`x`): `number`

Returns the offset into the hash table of the specified element, or -1 if the element is not
present.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Uint64`](util_uint64.Uint64.md) |

#### Returns

`number`

#### Inherited from

[HashTableBase](gpu_hash_hash_table.HashTableBase.md).[indexOf](gpu_hash_hash_table.HashTableBase.md#indexof)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/hash_table.ts#L170)

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

[HashTableBase](gpu_hash_hash_table.HashTableBase.md).[indexOfPair](gpu_hash_hash_table.HashTableBase.md#indexofpair)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:152](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/hash_table.ts#L152)

___

### insertInternal

▸ `Protected` **insertInternal**(): `void`

#### Returns

`void`

#### Inherited from

[HashTableBase](gpu_hash_hash_table.HashTableBase.md).[insertInternal](gpu_hash_hash_table.HashTableBase.md#insertinternal)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:356](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/hash_table.ts#L356)

___

### keys

▸ **keys**(`temp?`): [`Generator`](../interfaces/annotation_annotation_layer_state._internal_.Generator.md)<[`Uint64`](util_uint64.Uint64.md), `void`, `unknown`\>

Iterates over the Uint64 keys contained in the hash set.

The same temp value will be modified and yielded at every iteration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `temp` | [`Uint64`](util_uint64.Uint64.md) |

#### Returns

[`Generator`](../interfaces/annotation_annotation_layer_state._internal_.Generator.md)<[`Uint64`](util_uint64.Uint64.md), `void`, `unknown`\>

#### Inherited from

[HashTableBase](gpu_hash_hash_table.HashTableBase.md).[keys](gpu_hash_hash_table.HashTableBase.md#keys)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:139](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/hash_table.ts#L139)

___

### restorePending

▸ `Protected` **restorePending**(): `void`

#### Returns

`void`

#### Inherited from

[HashTableBase](gpu_hash_hash_table.HashTableBase.md).[restorePending](gpu_hash_hash_table.HashTableBase.md#restorepending)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:271](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/hash_table.ts#L271)

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

#### Inherited from

[HashTableBase](gpu_hash_hash_table.HashTableBase.md).[storePending](gpu_hash_hash_table.HashTableBase.md#storepending)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:261](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/hash_table.ts#L261)

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

#### Inherited from

[HashTableBase](gpu_hash_hash_table.HashTableBase.md).[swapPending](gpu_hash_hash_table.HashTableBase.md#swappending)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:254](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/hash_table.ts#L254)

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

[HashTableBase](gpu_hash_hash_table.HashTableBase.md).[tableWithMungedEmptyKey](gpu_hash_hash_table.HashTableBase.md#tablewithmungedemptykey)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:80](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/hash_table.ts#L80)

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

[HashTableBase](gpu_hash_hash_table.HashTableBase.md).[generateHashSeeds](gpu_hash_hash_table.HashTableBase.md#generatehashseeds)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:123](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/gpu_hash/hash_table.ts#L123)
