[neuroglancer](../README.md) / [Modules](../modules.md) / [util/signal](../modules/util_signal.md) / ReadonlySignal

# Interface: ReadonlySignal<Callable\>

[util/signal](../modules/util_signal.md).ReadonlySignal

Interface for a signal excluding the dispatch method.

Unlike Signal, this interface is covariant in the type of Callable.

## Type parameters

| Name | Type |
| :------ | :------ |
| `Callable` | extends `Function` |

## Table of contents

### Properties

- [count](util_signal.ReadonlySignal.md#count)

### Methods

- [add](util_signal.ReadonlySignal.md#add)
- [remove](util_signal.ReadonlySignal.md#remove)

## Properties

### count

• `Readonly` **count**: `number`

#### Defined in

[src/neuroglancer/util/signal.ts:113](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/signal.ts#L113)

## Methods

### add

▸ **add**(`handler`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | `Callable` |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/neuroglancer/util/signal.ts:114](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/signal.ts#L114)

___

### remove

▸ **remove**(`handler`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | `Callable` |

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/util/signal.ts:115](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/signal.ts#L115)
