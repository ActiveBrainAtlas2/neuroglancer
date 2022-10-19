[neuroglancer](../README.md) / [Modules](../modules.md) / [segment\_color](../modules/segment_color.md) / [<internal\>](../modules/segment_color._internal_.md) / HashTableBase

# Class: HashTableBase

[segment_color](../modules/segment_color.md).[<internal>](../modules/segment_color._internal_.md).HashTableBase

## Hierarchy

- **`HashTableBase`**

  ↳ [`HashMapUint64`](uint64_map._internal_.HashMapUint64.md)

  ↳ [`HashSetUint64`](uint64_set._internal_.HashSetUint64.md)

## Table of contents

### Constructors

- [constructor](segment_color._internal_.HashTableBase.md#constructor)

### Properties

- [capacity](segment_color._internal_.HashTableBase.md#capacity)
- [emptyHigh](segment_color._internal_.HashTableBase.md#emptyhigh)
- [emptyLow](segment_color._internal_.HashTableBase.md#emptylow)
- [entryStride](segment_color._internal_.HashTableBase.md#entrystride)
- [generation](segment_color._internal_.HashTableBase.md#generation)
- [hashSeeds](segment_color._internal_.HashTableBase.md#hashseeds)
- [loadFactor](segment_color._internal_.HashTableBase.md#loadfactor)
- [maxAttempts](segment_color._internal_.HashTableBase.md#maxattempts)
- [maxRehashAttempts](segment_color._internal_.HashTableBase.md#maxrehashattempts)
- [mungedEmptyKey](segment_color._internal_.HashTableBase.md#mungedemptykey)
- [size](segment_color._internal_.HashTableBase.md#size)
- [table](segment_color._internal_.HashTableBase.md#table)
- [tableSize](segment_color._internal_.HashTableBase.md#tablesize)

### Methods

- [allocate](segment_color._internal_.HashTableBase.md#allocate)
- [backupPending](segment_color._internal_.HashTableBase.md#backuppending)
- [chooseAnotherEmptyKey](segment_color._internal_.HashTableBase.md#chooseanotheremptykey)
- [clear](segment_color._internal_.HashTableBase.md#clear)
- [clearTable](segment_color._internal_.HashTableBase.md#cleartable)
- [delete](segment_color._internal_.HashTableBase.md#delete)
- [getHash](segment_color._internal_.HashTableBase.md#gethash)
- [grow](segment_color._internal_.HashTableBase.md#grow)
- [has](segment_color._internal_.HashTableBase.md#has)
- [hasPair](segment_color._internal_.HashTableBase.md#haspair)
- [indexOf](segment_color._internal_.HashTableBase.md#indexof)
- [indexOfPair](segment_color._internal_.HashTableBase.md#indexofpair)
- [insertInternal](segment_color._internal_.HashTableBase.md#insertinternal)
- [keys](segment_color._internal_.HashTableBase.md#keys)
- [rehash](segment_color._internal_.HashTableBase.md#rehash)
- [restorePending](segment_color._internal_.HashTableBase.md#restorepending)
- [storePending](segment_color._internal_.HashTableBase.md#storepending)
- [swapPending](segment_color._internal_.HashTableBase.md#swappending)
- [tableWithMungedEmptyKey](segment_color._internal_.HashTableBase.md#tablewithmungedemptykey)
- [tryToInsert](segment_color._internal_.HashTableBase.md#trytoinsert)
- [updateHashFunctions](segment_color._internal_.HashTableBase.md#updatehashfunctions)
- [generateHashSeeds](segment_color._internal_.HashTableBase.md#generatehashseeds)

## Constructors

### constructor

• **new HashTableBase**(`hashSeeds?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `hashSeeds` | `Uint32Array` |

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L51)

## Properties

### capacity

• **capacity**: `number`

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L40)

___

### emptyHigh

• **emptyHigh**: `number` = `4294967295`

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L37)

___

### emptyLow

• **emptyLow**: `number` = `4294967295`

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L36)

___

### entryStride

• **entryStride**: `number`

Number of uint32 elements per entry in hash table.

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L45)

___

### generation

• **generation**: `number` = `0`

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L47)

___

### hashSeeds

• **hashSeeds**: `Uint32Array`

___

### loadFactor

• **loadFactor**: `number` = `DEFAULT_LOAD_FACTOR`

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L32)

___

### maxAttempts

• **maxAttempts**: `number` = `5`

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L39)

___

### maxRehashAttempts

• **maxRehashAttempts**: `number` = `5`

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L38)

___

### mungedEmptyKey

• **mungedEmptyKey**: `number` = `-1`

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L49)

___

### size

• **size**: `number` = `0`

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L33)

___

### table

• **table**: `Uint32Array`

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L34)

___

### tableSize

• **tableSize**: `number`

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:35](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L35)

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

[src/neuroglancer/gpu_hash/hash_table.ts:299](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L299)

___

### backupPending

▸ `Protected` **backupPending**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:266](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L266)

___

### chooseAnotherEmptyKey

▸ `Private` **chooseAnotherEmptyKey**(): `void`

Changes the empty key to a value that is not equal to the current empty key and is not present
in the table.

This is called when an attempt is made to insert the empty key.

#### Returns

`void`

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:180](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L180)

___

### clear

▸ **clear**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:244](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L244)

___

### clearTable

▸ `Private` **clearTable**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:234](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L234)

___

### delete

▸ **delete**(`x`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Uint64`](data_panel_layout._internal_.Uint64.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:221](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L221)

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

[src/neuroglancer/gpu_hash/hash_table.ts:127](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L127)

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

[src/neuroglancer/gpu_hash/hash_table.ts:334](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L334)

___

### has

▸ **has**(`x`): `boolean`

Returns true iff the specified element is present.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Uint64`](data_panel_layout._internal_.Uint64.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:210](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L210)

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

[src/neuroglancer/gpu_hash/hash_table.ts:217](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L217)

___

### indexOf

▸ **indexOf**(`x`): `number`

Returns the offset into the hash table of the specified element, or -1 if the element is not
present.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Uint64`](data_panel_layout._internal_.Uint64.md) |

#### Returns

`number`

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:170](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L170)

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

[src/neuroglancer/gpu_hash/hash_table.ts:152](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L152)

___

### insertInternal

▸ `Protected` **insertInternal**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:356](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L356)

___

### keys

▸ **keys**(`temp?`): [`Generator`](../interfaces/layer._internal_.Generator.md)<[`Uint64`](data_panel_layout._internal_.Uint64.md), `void`, `unknown`\>

Iterates over the Uint64 keys contained in the hash set.

The same temp value will be modified and yielded at every iteration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `temp` | [`Uint64`](data_panel_layout._internal_.Uint64.md) |

#### Returns

[`Generator`](../interfaces/layer._internal_.Generator.md)<[`Uint64`](data_panel_layout._internal_.Uint64.md), `void`, `unknown`\>

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:139](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L139)

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

[src/neuroglancer/gpu_hash/hash_table.ts:309](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L309)

___

### restorePending

▸ `Protected` **restorePending**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:271](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L271)

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

[src/neuroglancer/gpu_hash/hash_table.ts:261](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L261)

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

[src/neuroglancer/gpu_hash/hash_table.ts:254](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L254)

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

[src/neuroglancer/gpu_hash/hash_table.ts:80](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L80)

___

### tryToInsert

▸ `Private` **tryToInsert**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:276](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L276)

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

[src/neuroglancer/gpu_hash/hash_table.ts:61](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L61)

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

[src/neuroglancer/gpu_hash/hash_table.ts:123](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L123)
