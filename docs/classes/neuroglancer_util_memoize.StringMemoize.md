[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/util/memoize](../modules/neuroglancer_util_memoize.md) / StringMemoize

# Class: StringMemoize

[neuroglancer/util/memoize](../modules/neuroglancer_util_memoize.md).StringMemoize

## Hierarchy

- [`Memoize`](neuroglancer_util_memoize.Memoize.md)<`string`, [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)\>

  ↳ **`StringMemoize`**

## Table of contents

### Constructors

- [constructor](neuroglancer_util_memoize.StringMemoize.md#constructor)

### Methods

- [get](neuroglancer_util_memoize.StringMemoize.md#get)
- [getUncounted](neuroglancer_util_memoize.StringMemoize.md#getuncounted)

## Constructors

### constructor

• **new StringMemoize**()

#### Inherited from

[Memoize](neuroglancer_util_memoize.Memoize.md).[constructor](neuroglancer_util_memoize.Memoize.md#constructor)

## Methods

### get

▸ **get**<`T`\>(`x`, `getter`): `T`

If getter throws an exception, no value is added.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`RefCounted`](neuroglancer_util_disposable.RefCounted.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |
| `getter` | () => `T` |

#### Returns

`T`

#### Overrides

[Memoize](neuroglancer_util_memoize.Memoize.md).[get](neuroglancer_util_memoize.Memoize.md#get)

#### Defined in

[src/neuroglancer/util/memoize.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/memoize.ts#L43)

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

[src/neuroglancer/util/memoize.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/util/memoize.ts#L50)
