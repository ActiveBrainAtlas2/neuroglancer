[neuroglancer](../README.md) / [Modules](../modules.md) / [datasource/state\_share](../modules/datasource_state_share.md) / [<internal\>](../modules/datasource_state_share._internal_.md) / WatchableSet

# Class: WatchableSet<T\>

[datasource/state_share](../modules/datasource_state_share.md).[<internal>](../modules/datasource_state_share._internal_.md).WatchableSet

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](datasource_state_share._internal_.WatchableSet.md#constructor)

### Properties

- [changed](datasource_state_share._internal_.WatchableSet.md#changed)
- [values](datasource_state_share._internal_.WatchableSet.md#values)

### Accessors

- [size](datasource_state_share._internal_.WatchableSet.md#size)

### Methods

- [[iterator]](datasource_state_share._internal_.WatchableSet.md#[iterator])
- [add](datasource_state_share._internal_.WatchableSet.md#add)
- [clear](datasource_state_share._internal_.WatchableSet.md#clear)
- [delete](datasource_state_share._internal_.WatchableSet.md#delete)
- [has](datasource_state_share._internal_.WatchableSet.md#has)

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
| `values?` | [`Iterable`](../interfaces/annotation_annotation_layer_state._internal_.Iterable.md)<`T`\> |

#### Defined in

[src/neuroglancer/trackable_value.ts:261](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L261)

## Properties

### changed

• **changed**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Defined in

[src/neuroglancer/trackable_value.ts:259](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L259)

___

### values

• **values**: `Set`<`T`\>

#### Defined in

[src/neuroglancer/trackable_value.ts:260](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L260)

## Accessors

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Defined in

[src/neuroglancer/trackable_value.ts:287](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L287)

## Methods

### [iterator]

▸ **[iterator]**(): [`IterableIterator`](../interfaces/annotation_annotation_layer_state._internal_.IterableIterator.md)<`T`\>

#### Returns

[`IterableIterator`](../interfaces/annotation_annotation_layer_state._internal_.IterableIterator.md)<`T`\>

#### Defined in

[src/neuroglancer/trackable_value.ts:290](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L290)

___

### add

▸ **add**(`x`): [`WatchableSet`](datasource_state_share._internal_.WatchableSet.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `T` |

#### Returns

[`WatchableSet`](datasource_state_share._internal_.WatchableSet.md)<`T`\>

#### Defined in

[src/neuroglancer/trackable_value.ts:268](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L268)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/trackable_value.ts:293](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L293)

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

[src/neuroglancer/trackable_value.ts:276](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L276)

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

[src/neuroglancer/trackable_value.ts:284](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L284)
