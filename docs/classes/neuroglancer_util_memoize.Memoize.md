[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/util/memoize](../modules/neuroglancer_util_memoize.md) / Memoize

# Class: Memoize<Key, Value\>

[neuroglancer/util/memoize](../modules/neuroglancer_util_memoize.md).Memoize

## Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | `Key` |
| `Value` | extends [`RefCounted`](neuroglancer_util_disposable.RefCounted.md) |

## Hierarchy

- **`Memoize`**

  ↳ [`StringMemoize`](neuroglancer_util_memoize.StringMemoize.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_util_memoize.Memoize.md#constructor)

### Properties

- [map](neuroglancer_util_memoize.Memoize.md#map)

### Methods

- [get](neuroglancer_util_memoize.Memoize.md#get)

## Constructors

### constructor

• **new Memoize**<`Key`, `Value`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | `Key` |
| `Value` | extends [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)<`Value`\> |

## Properties

### map

• `Private` **map**: `Map`<`Key`, `Value`\>

#### Defined in

[src/neuroglancer/util/memoize.ts:21](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/memoize.ts#L21)

## Methods

### get

▸ **get**<`T`\>(`key`, `getter`): `T`

If getter throws an exception, no value is added.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Key` |
| `getter` | () => `T` |

#### Returns

`T`

#### Defined in

[src/neuroglancer/util/memoize.ts:26](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/memoize.ts#L26)
