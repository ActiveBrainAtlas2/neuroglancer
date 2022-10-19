[neuroglancer](../README.md) / [Modules](../modules.md) / [util/memoize](../modules/util_memoize.md) / StringMemoize

# Class: StringMemoize

[util/memoize](../modules/util_memoize.md).StringMemoize

## Hierarchy

- [`Memoize`](util_memoize.Memoize.md)<`string`, [`RefCounted`](util_disposable.RefCounted.md)\>

  ↳ **`StringMemoize`**

## Table of contents

### Constructors

- [constructor](util_memoize.StringMemoize.md#constructor)

### Methods

- [get](util_memoize.StringMemoize.md#get)
- [getUncounted](util_memoize.StringMemoize.md#getuncounted)

## Constructors

### constructor

• **new StringMemoize**()

#### Inherited from

[Memoize](util_memoize.Memoize.md).[constructor](util_memoize.Memoize.md#constructor)

## Methods

### get

▸ **get**<`T`\>(`x`, `getter`): `T`

If getter throws an exception, no value is added.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`RefCounted`](util_disposable.RefCounted.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |
| `getter` | () => `T` |

#### Returns

`T`

#### Overrides

[Memoize](util_memoize.Memoize.md).[get](util_memoize.Memoize.md#get)

#### Defined in

[src/neuroglancer/util/memoize.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/memoize.ts#L43)

___

### getUncounted

▸ **getUncounted**<`T`\>(`x`, `getter`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |
| `getter` | () => `T` |

#### Returns

`T`

#### Defined in

[src/neuroglancer/util/memoize.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/util/memoize.ts#L50)
