[neuroglancer](../README.md) / [Modules](../modules.md) / [coordinate\_transform](../modules/coordinate_transform.md) / [<internal\>](../modules/coordinate_transform._internal_.md) / ReadonlySignal

# Interface: ReadonlySignal<Callable\>

[coordinate_transform](../modules/coordinate_transform.md).[<internal>](../modules/coordinate_transform._internal_.md).ReadonlySignal

Interface for a signal excluding the dispatch method.

Unlike Signal, this interface is covariant in the type of Callable.

## Type parameters

| Name | Type |
| :------ | :------ |
| `Callable` | extends `Function` |

## Table of contents

### Properties

- [count](coordinate_transform._internal_.ReadonlySignal.md#count)

### Methods

- [add](coordinate_transform._internal_.ReadonlySignal.md#add)
- [remove](coordinate_transform._internal_.ReadonlySignal.md#remove)

## Properties

### count

• `Readonly` **count**: `number`

#### Defined in

[src/neuroglancer/util/signal.ts:113](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/signal.ts#L113)

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

[src/neuroglancer/util/signal.ts:114](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/signal.ts#L114)

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

[src/neuroglancer/util/signal.ts:115](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/signal.ts#L115)
