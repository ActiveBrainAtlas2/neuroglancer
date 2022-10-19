[neuroglancer](../README.md) / [Modules](../modules.md) / [util/memoize](../modules/util_memoize.md) / Memoize

# Class: Memoize<Key, Value\>

[util/memoize](../modules/util_memoize.md).Memoize

## Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | `Key` |
| `Value` | extends [`RefCounted`](util_disposable.RefCounted.md) |

## Hierarchy

- **`Memoize`**

  ↳ [`StringMemoize`](util_memoize.StringMemoize.md)

## Table of contents

### Constructors

- [constructor](util_memoize.Memoize.md#constructor)

### Properties

- [map](util_memoize.Memoize.md#map)

### Methods

- [get](util_memoize.Memoize.md#get)

## Constructors

### constructor

• **new Memoize**<`Key`, `Value`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | `Key` |
| `Value` | extends [`RefCounted`](util_disposable.RefCounted.md)<`Value`\> |

## Properties

### map

• `Private` **map**: `Map`<`Key`, `Value`\>

#### Defined in

[src/neuroglancer/util/memoize.ts:21](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/memoize.ts#L21)

## Methods

### get

▸ **get**<`T`\>(`key`, `getter`): `T`

If getter throws an exception, no value is added.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`RefCounted`](util_disposable.RefCounted.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Key` |
| `getter` | () => `T` |

#### Returns

`T`

#### Defined in

[src/neuroglancer/util/memoize.ts:26](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/memoize.ts#L26)
