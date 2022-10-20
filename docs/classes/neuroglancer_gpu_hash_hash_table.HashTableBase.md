[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/gpu\_hash/hash\_table](../modules/neuroglancer_gpu_hash_hash_table.md) / HashTableBase

# Class: HashTableBase

[neuroglancer/gpu_hash/hash_table](../modules/neuroglancer_gpu_hash_hash_table.md).HashTableBase

## Hierarchy

- **`HashTableBase`**

  ↳ [`HashSetUint64`](neuroglancer_gpu_hash_hash_table.HashSetUint64.md)

  ↳ [`HashMapUint64`](neuroglancer_gpu_hash_hash_table.HashMapUint64.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_gpu_hash_hash_table.HashTableBase.md#constructor)

### Properties

- [capacity](neuroglancer_gpu_hash_hash_table.HashTableBase.md#capacity)
- [emptyHigh](neuroglancer_gpu_hash_hash_table.HashTableBase.md#emptyhigh)
- [emptyLow](neuroglancer_gpu_hash_hash_table.HashTableBase.md#emptylow)
- [entryStride](neuroglancer_gpu_hash_hash_table.HashTableBase.md#entrystride)
- [generation](neuroglancer_gpu_hash_hash_table.HashTableBase.md#generation)
- [hashSeeds](neuroglancer_gpu_hash_hash_table.HashTableBase.md#hashseeds)
- [loadFactor](neuroglancer_gpu_hash_hash_table.HashTableBase.md#loadfactor)
- [maxAttempts](neuroglancer_gpu_hash_hash_table.HashTableBase.md#maxattempts)
- [maxRehashAttempts](neuroglancer_gpu_hash_hash_table.HashTableBase.md#maxrehashattempts)
- [mungedEmptyKey](neuroglancer_gpu_hash_hash_table.HashTableBase.md#mungedemptykey)
- [size](neuroglancer_gpu_hash_hash_table.HashTableBase.md#size)
- [table](neuroglancer_gpu_hash_hash_table.HashTableBase.md#table)
- [tableSize](neuroglancer_gpu_hash_hash_table.HashTableBase.md#tablesize)

### Methods

- [allocate](neuroglancer_gpu_hash_hash_table.HashTableBase.md#allocate)
- [backupPending](neuroglancer_gpu_hash_hash_table.HashTableBase.md#backuppending)
- [chooseAnotherEmptyKey](neuroglancer_gpu_hash_hash_table.HashTableBase.md#chooseanotheremptykey)
- [clear](neuroglancer_gpu_hash_hash_table.HashTableBase.md#clear)
- [clearTable](neuroglancer_gpu_hash_hash_table.HashTableBase.md#cleartable)
- [delete](neuroglancer_gpu_hash_hash_table.HashTableBase.md#delete)
- [getHash](neuroglancer_gpu_hash_hash_table.HashTableBase.md#gethash)
- [grow](neuroglancer_gpu_hash_hash_table.HashTableBase.md#grow)
- [has](neuroglancer_gpu_hash_hash_table.HashTableBase.md#has)
- [hasPair](neuroglancer_gpu_hash_hash_table.HashTableBase.md#haspair)
- [indexOf](neuroglancer_gpu_hash_hash_table.HashTableBase.md#indexof)
- [indexOfPair](neuroglancer_gpu_hash_hash_table.HashTableBase.md#indexofpair)
- [insertInternal](neuroglancer_gpu_hash_hash_table.HashTableBase.md#insertinternal)
- [keys](neuroglancer_gpu_hash_hash_table.HashTableBase.md#keys)
- [rehash](neuroglancer_gpu_hash_hash_table.HashTableBase.md#rehash)
- [restorePending](neuroglancer_gpu_hash_hash_table.HashTableBase.md#restorepending)
- [storePending](neuroglancer_gpu_hash_hash_table.HashTableBase.md#storepending)
- [swapPending](neuroglancer_gpu_hash_hash_table.HashTableBase.md#swappending)
- [tableWithMungedEmptyKey](neuroglancer_gpu_hash_hash_table.HashTableBase.md#tablewithmungedemptykey)
- [tryToInsert](neuroglancer_gpu_hash_hash_table.HashTableBase.md#trytoinsert)
- [updateHashFunctions](neuroglancer_gpu_hash_hash_table.HashTableBase.md#updatehashfunctions)
- [generateHashSeeds](neuroglancer_gpu_hash_hash_table.HashTableBase.md#generatehashseeds)

## Constructors

### constructor

• **new HashTableBase**(`hashSeeds?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `hashSeeds` | `Uint32Array` |

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L51)

## Properties

### capacity

• **capacity**: `number`

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L40)

___

### emptyHigh

• **emptyHigh**: `number` = `4294967295`

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L37)

___

### emptyLow

• **emptyLow**: `number` = `4294967295`

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L36)

___

### entryStride

• **entryStride**: `number`

Number of uint32 elements per entry in hash table.

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L45)

___

### generation

• **generation**: `number` = `0`

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L47)

___

### hashSeeds

• **hashSeeds**: `Uint32Array`

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L51)

___

### loadFactor

• **loadFactor**: `number` = `DEFAULT_LOAD_FACTOR`

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L32)

___

### maxAttempts

• **maxAttempts**: `number` = `5`

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L39)

___

### maxRehashAttempts

• **maxRehashAttempts**: `number` = `5`

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L38)

___

### mungedEmptyKey

• **mungedEmptyKey**: `number` = `-1`

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L49)

___

### size

• **size**: `number` = `0`

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L33)

___

### table

• **table**: `Uint32Array`

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L34)

___

### tableSize

• **tableSize**: `number`

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:35](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L35)

## Methods

### allocate

▸ `Private` **allocate**(`tableSize`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableSize` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:299](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L299)

___

### backupPending

▸ `Protected` **backupPending**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:266](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L266)

___

### chooseAnotherEmptyKey

▸ `Private` **chooseAnotherEmptyKey**(): `void`

Changes the empty key to a value that is not equal to the current empty key and is not present
in the table.

This is called when an attempt is made to insert the empty key.

#### Returns

`void`

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:180](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L180)

___

### clear

▸ **clear**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:244](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L244)

___

### clearTable

▸ `Private` **clearTable**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L234)

___

### delete

▸ **delete**(`x`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Uint64`](neuroglancer_util_uint64.Uint64.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:221](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L221)

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

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:127](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L127)

___

### grow

▸ `Private` **grow**(`desiredTableSize`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `desiredTableSize` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:334](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L334)

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

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:152](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L152)

___

### insertInternal

▸ `Protected` **insertInternal**(): `void`

#### Returns

`void`

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

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:139](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L139)

___

### rehash

▸ `Private` **rehash**(`oldTable`, `tableSize`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldTable` | `Uint32Array` |
| `tableSize` | `number` |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:309](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L309)

___

### restorePending

▸ `Protected` **restorePending**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:271](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L271)

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

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:261](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L261)

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

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:254](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L254)

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

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:80](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L80)

___

### tryToInsert

▸ `Private` **tryToInsert**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:276](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L276)

___

### updateHashFunctions

▸ `Private` **updateHashFunctions**(`numHashes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `numHashes` | `number` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L61)

___

### generateHashSeeds

▸ `Static` **generateHashSeeds**(`numAlternatives?`): `Uint32Array`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `numAlternatives` | `number` | `NUM_ALTERNATIVES` |

#### Returns

`Uint32Array`

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:123](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/gpu_hash/hash_table.ts#L123)
