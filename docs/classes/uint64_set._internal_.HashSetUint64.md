[neuroglancer](../README.md) / [Modules](../modules.md) / [uint64\_set](../modules/uint64_set.md) / [<internal\>](../modules/uint64_set._internal_.md) / HashSetUint64

# Class: HashSetUint64

[uint64_set](../modules/uint64_set.md).[<internal>](../modules/uint64_set._internal_.md).HashSetUint64

## Hierarchy

- [`HashTableBase`](segment_color._internal_.HashTableBase.md)

  ↳ **`HashSetUint64`**

## Table of contents

### Constructors

- [constructor](uint64_set._internal_.HashSetUint64.md#constructor)

### Properties

- [capacity](uint64_set._internal_.HashSetUint64.md#capacity)
- [emptyHigh](uint64_set._internal_.HashSetUint64.md#emptyhigh)
- [emptyLow](uint64_set._internal_.HashSetUint64.md#emptylow)
- [entryStride](uint64_set._internal_.HashSetUint64.md#entrystride)
- [generation](uint64_set._internal_.HashSetUint64.md#generation)
- [hashSeeds](uint64_set._internal_.HashSetUint64.md#hashseeds)
- [loadFactor](uint64_set._internal_.HashSetUint64.md#loadfactor)
- [maxAttempts](uint64_set._internal_.HashSetUint64.md#maxattempts)
- [maxRehashAttempts](uint64_set._internal_.HashSetUint64.md#maxrehashattempts)
- [mungedEmptyKey](uint64_set._internal_.HashSetUint64.md#mungedemptykey)
- [size](uint64_set._internal_.HashSetUint64.md#size)
- [table](uint64_set._internal_.HashSetUint64.md#table)
- [tableSize](uint64_set._internal_.HashSetUint64.md#tablesize)

### Methods

- [[iterator]](uint64_set._internal_.HashSetUint64.md#[iterator])
- [add](uint64_set._internal_.HashSetUint64.md#add)
- [backupPending](uint64_set._internal_.HashSetUint64.md#backuppending)
- [clear](uint64_set._internal_.HashSetUint64.md#clear)
- [delete](uint64_set._internal_.HashSetUint64.md#delete)
- [getHash](uint64_set._internal_.HashSetUint64.md#gethash)
- [has](uint64_set._internal_.HashSetUint64.md#has)
- [hasPair](uint64_set._internal_.HashSetUint64.md#haspair)
- [indexOf](uint64_set._internal_.HashSetUint64.md#indexof)
- [indexOfPair](uint64_set._internal_.HashSetUint64.md#indexofpair)
- [insertInternal](uint64_set._internal_.HashSetUint64.md#insertinternal)
- [keys](uint64_set._internal_.HashSetUint64.md#keys)
- [restorePending](uint64_set._internal_.HashSetUint64.md#restorepending)
- [storePending](uint64_set._internal_.HashSetUint64.md#storepending)
- [swapPending](uint64_set._internal_.HashSetUint64.md#swappending)
- [tableWithMungedEmptyKey](uint64_set._internal_.HashSetUint64.md#tablewithmungedemptykey)
- [generateHashSeeds](uint64_set._internal_.HashSetUint64.md#generatehashseeds)

## Constructors

### constructor

• **new HashSetUint64**(`hashSeeds?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `hashSeeds` | `Uint32Array` |

#### Inherited from

[HashTableBase](segment_color._internal_.HashTableBase.md).[constructor](segment_color._internal_.HashTableBase.md#constructor)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:51](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L51)

## Properties

### capacity

• **capacity**: `number`

#### Inherited from

[HashTableBase](segment_color._internal_.HashTableBase.md).[capacity](segment_color._internal_.HashTableBase.md#capacity)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:40](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L40)

___

### emptyHigh

• **emptyHigh**: `number` = `4294967295`

#### Inherited from

[HashTableBase](segment_color._internal_.HashTableBase.md).[emptyHigh](segment_color._internal_.HashTableBase.md#emptyhigh)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L37)

___

### emptyLow

• **emptyLow**: `number` = `4294967295`

#### Inherited from

[HashTableBase](segment_color._internal_.HashTableBase.md).[emptyLow](segment_color._internal_.HashTableBase.md#emptylow)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L36)

___

### entryStride

• **entryStride**: `number`

Number of uint32 elements per entry in hash table.

#### Inherited from

[HashTableBase](segment_color._internal_.HashTableBase.md).[entryStride](segment_color._internal_.HashTableBase.md#entrystride)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L45)

___

### generation

• **generation**: `number` = `0`

#### Inherited from

[HashTableBase](segment_color._internal_.HashTableBase.md).[generation](segment_color._internal_.HashTableBase.md#generation)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L47)

___

### hashSeeds

• **hashSeeds**: `Uint32Array`

#### Inherited from

[HashTableBase](segment_color._internal_.HashTableBase.md).[hashSeeds](segment_color._internal_.HashTableBase.md#hashseeds)

___

### loadFactor

• **loadFactor**: `number` = `DEFAULT_LOAD_FACTOR`

#### Inherited from

[HashTableBase](segment_color._internal_.HashTableBase.md).[loadFactor](segment_color._internal_.HashTableBase.md#loadfactor)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:32](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L32)

___

### maxAttempts

• **maxAttempts**: `number` = `5`

#### Inherited from

[HashTableBase](segment_color._internal_.HashTableBase.md).[maxAttempts](segment_color._internal_.HashTableBase.md#maxattempts)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:39](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L39)

___

### maxRehashAttempts

• **maxRehashAttempts**: `number` = `5`

#### Inherited from

[HashTableBase](segment_color._internal_.HashTableBase.md).[maxRehashAttempts](segment_color._internal_.HashTableBase.md#maxrehashattempts)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L38)

___

### mungedEmptyKey

• **mungedEmptyKey**: `number` = `-1`

#### Inherited from

[HashTableBase](segment_color._internal_.HashTableBase.md).[mungedEmptyKey](segment_color._internal_.HashTableBase.md#mungedemptykey)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:49](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L49)

___

### size

• **size**: `number` = `0`

#### Inherited from

[HashTableBase](segment_color._internal_.HashTableBase.md).[size](segment_color._internal_.HashTableBase.md#size)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L33)

___

### table

• **table**: `Uint32Array`

#### Inherited from

[HashTableBase](segment_color._internal_.HashTableBase.md).[table](segment_color._internal_.HashTableBase.md#table)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:34](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L34)

___

### tableSize

• **tableSize**: `number`

#### Inherited from

[HashTableBase](segment_color._internal_.HashTableBase.md).[tableSize](segment_color._internal_.HashTableBase.md#tablesize)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:35](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L35)

## Methods

### [iterator]

▸ **[iterator]**(): [`Generator`](../interfaces/layer._internal_.Generator.md)<[`Uint64`](data_panel_layout._internal_.Uint64.md), `void`, `unknown`\>

Iterates over the keys.  The same temporary value will be modified and yielded at every
iteration.

#### Returns

[`Generator`](../interfaces/layer._internal_.Generator.md)<[`Uint64`](data_panel_layout._internal_.Uint64.md), `void`, `unknown`\>

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:396](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L396)

___

### add

▸ **add**(`x`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Uint64`](data_panel_layout._internal_.Uint64.md) |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:378](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L378)

___

### backupPending

▸ `Protected` **backupPending**(): `void`

#### Returns

`void`

#### Inherited from

[HashTableBase](segment_color._internal_.HashTableBase.md).[backupPending](segment_color._internal_.HashTableBase.md#backuppending)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:266](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L266)

___

### clear

▸ **clear**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[HashTableBase](segment_color._internal_.HashTableBase.md).[clear](segment_color._internal_.HashTableBase.md#clear)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:244](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L244)

___

### delete

▸ **delete**(`x`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Uint64`](data_panel_layout._internal_.Uint64.md) |

#### Returns

`boolean`

#### Inherited from

[HashTableBase](segment_color._internal_.HashTableBase.md).[delete](segment_color._internal_.HashTableBase.md#delete)

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

#### Inherited from

[HashTableBase](segment_color._internal_.HashTableBase.md).[getHash](segment_color._internal_.HashTableBase.md#gethash)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:127](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L127)

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

#### Inherited from

[HashTableBase](segment_color._internal_.HashTableBase.md).[has](segment_color._internal_.HashTableBase.md#has)

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

#### Inherited from

[HashTableBase](segment_color._internal_.HashTableBase.md).[hasPair](segment_color._internal_.HashTableBase.md#haspair)

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

#### Inherited from

[HashTableBase](segment_color._internal_.HashTableBase.md).[indexOf](segment_color._internal_.HashTableBase.md#indexof)

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

#### Inherited from

[HashTableBase](segment_color._internal_.HashTableBase.md).[indexOfPair](segment_color._internal_.HashTableBase.md#indexofpair)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:152](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L152)

___

### insertInternal

▸ `Protected` **insertInternal**(): `void`

#### Returns

`void`

#### Inherited from

[HashTableBase](segment_color._internal_.HashTableBase.md).[insertInternal](segment_color._internal_.HashTableBase.md#insertinternal)

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

#### Inherited from

[HashTableBase](segment_color._internal_.HashTableBase.md).[keys](segment_color._internal_.HashTableBase.md#keys)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:139](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L139)

___

### restorePending

▸ `Protected` **restorePending**(): `void`

#### Returns

`void`

#### Inherited from

[HashTableBase](segment_color._internal_.HashTableBase.md).[restorePending](segment_color._internal_.HashTableBase.md#restorepending)

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

#### Inherited from

[HashTableBase](segment_color._internal_.HashTableBase.md).[storePending](segment_color._internal_.HashTableBase.md#storepending)

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

#### Inherited from

[HashTableBase](segment_color._internal_.HashTableBase.md).[swapPending](segment_color._internal_.HashTableBase.md#swappending)

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

#### Inherited from

[HashTableBase](segment_color._internal_.HashTableBase.md).[tableWithMungedEmptyKey](segment_color._internal_.HashTableBase.md#tablewithmungedemptykey)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:80](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L80)

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

[HashTableBase](segment_color._internal_.HashTableBase.md).[generateHashSeeds](segment_color._internal_.HashTableBase.md#generatehashseeds)

#### Defined in

[src/neuroglancer/gpu_hash/hash_table.ts:123](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/gpu_hash/hash_table.ts#L123)
