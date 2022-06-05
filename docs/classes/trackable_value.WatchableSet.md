[neuroglancer](../README.md) / [Modules](../modules.md) / [trackable\_value](../modules/trackable_value.md) / WatchableSet

# Class: WatchableSet<T\>

[trackable_value](../modules/trackable_value.md).WatchableSet

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](trackable_value.WatchableSet.md#constructor)

### Properties

- [changed](trackable_value.WatchableSet.md#changed)
- [values](trackable_value.WatchableSet.md#values)

### Accessors

- [size](trackable_value.WatchableSet.md#size)

### Methods

- [[iterator]](trackable_value.WatchableSet.md#[iterator])
- [add](trackable_value.WatchableSet.md#add)
- [clear](trackable_value.WatchableSet.md#clear)
- [delete](trackable_value.WatchableSet.md#delete)
- [has](trackable_value.WatchableSet.md#has)

## Constructors

### constructor

• **new WatchableSet**<`T`\>(`values?`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values?` | `Iterable`<`T`\> |

#### Defined in

[src/neuroglancer/trackable_value.ts:261](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/trackable_value.ts#L261)

## Properties

### changed

• **changed**: `NullarySignal`

#### Defined in

[src/neuroglancer/trackable_value.ts:259](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/trackable_value.ts#L259)

___

### values

• **values**: `Set`<`T`\>

#### Defined in

[src/neuroglancer/trackable_value.ts:260](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/trackable_value.ts#L260)

## Accessors

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/trackable_value.ts:287](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/trackable_value.ts#L287)

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<`T`\>

#### Returns

`IterableIterator`<`T`\>

#### Defined in

[src/neuroglancer/trackable_value.ts:290](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/trackable_value.ts#L290)

___

### add

▸ **add**(`x`): [`WatchableSet`](trackable_value.WatchableSet.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `T` |

#### Returns

[`WatchableSet`](trackable_value.WatchableSet.md)<`T`\>

#### Defined in

[src/neuroglancer/trackable_value.ts:268](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/trackable_value.ts#L268)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/trackable_value.ts:293](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/trackable_value.ts#L293)

___

### delete

▸ **delete**(`x`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `T` |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/trackable_value.ts:276](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/trackable_value.ts#L276)

___

### has

▸ **has**(`x`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `T` |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/trackable_value.ts:284](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/285e65d7/src/neuroglancer/trackable_value.ts#L284)
