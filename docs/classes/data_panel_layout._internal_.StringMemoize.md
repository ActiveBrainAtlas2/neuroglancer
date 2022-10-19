[neuroglancer](../README.md) / [Modules](../modules.md) / [data\_panel\_layout](../modules/data_panel_layout.md) / [<internal\>](../modules/data_panel_layout._internal_.md) / StringMemoize

# Class: StringMemoize

[data_panel_layout](../modules/data_panel_layout.md).[<internal>](../modules/data_panel_layout._internal_.md).StringMemoize

## Hierarchy

- [`Memoize`](axes_lines._internal_.Memoize.md)<`string`, [`RefCounted`](axes_lines._internal_.RefCounted.md)\>

  ↳ **`StringMemoize`**

## Table of contents

### Constructors

- [constructor](data_panel_layout._internal_.StringMemoize.md#constructor)

### Methods

- [get](data_panel_layout._internal_.StringMemoize.md#get)
- [getUncounted](data_panel_layout._internal_.StringMemoize.md#getuncounted)

## Constructors

### constructor

• **new StringMemoize**()

#### Inherited from

[Memoize](axes_lines._internal_.Memoize.md).[constructor](axes_lines._internal_.Memoize.md#constructor)

## Methods

### get

▸ **get**<`T`\>(`x`, `getter`): `T`

If getter throws an exception, no value is added.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`RefCounted`](axes_lines._internal_.RefCounted.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |
| `getter` | () => `T` |

#### Returns

`T`

#### Overrides

[Memoize](axes_lines._internal_.Memoize.md).[get](axes_lines._internal_.Memoize.md#get)

#### Defined in

[src/neuroglancer/util/memoize.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/memoize.ts#L43)

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

[src/neuroglancer/util/memoize.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/memoize.ts#L50)
