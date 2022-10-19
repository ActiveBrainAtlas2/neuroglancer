[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / Memoize

# Class: Memoize<Key, Value\>

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).Memoize

## Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | `Key` |
| `Value` | extends [`RefCounted`](axes_lines._internal_.RefCounted.md) |

## Hierarchy

- **`Memoize`**

  ↳ [`StringMemoize`](data_panel_layout._internal_.StringMemoize.md)

## Table of contents

### Constructors

- [constructor](axes_lines._internal_.Memoize.md#constructor)

### Properties

- [map](axes_lines._internal_.Memoize.md#map)

### Methods

- [get](axes_lines._internal_.Memoize.md#get)

## Constructors

### constructor

• **new Memoize**<`Key`, `Value`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | `Key` |
| `Value` | extends [`RefCounted`](axes_lines._internal_.RefCounted.md)<`Value`\> |

## Properties

### map

• `Private` **map**: `Map`<`Key`, `Value`\>

#### Defined in

[src/neuroglancer/util/memoize.ts:21](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/memoize.ts#L21)

## Methods

### get

▸ **get**<`T`\>(`key`, `getter`): `T`

If getter throws an exception, no value is added.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`RefCounted`](axes_lines._internal_.RefCounted.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Key` |
| `getter` | () => `T` |

#### Returns

`T`

#### Defined in

[src/neuroglancer/util/memoize.ts:26](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/memoize.ts#L26)
