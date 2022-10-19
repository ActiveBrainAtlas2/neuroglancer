[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / HTMLCollection

# Interface: HTMLCollection

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).HTMLCollection

## Hierarchy

- `HTMLCollectionBase`

  ↳ **`HTMLCollection`**

## Table of contents

### Properties

- [length](axes_lines._internal_.HTMLCollection.md#length)

### Methods

- [[iterator]](axes_lines._internal_.HTMLCollection.md#[iterator])
- [item](axes_lines._internal_.HTMLCollection.md#item)
- [namedItem](axes_lines._internal_.HTMLCollection.md#nameditem)

## Properties

### length

• `Readonly` **length**: `number`

Sets or retrieves the number of objects in a collection.

#### Inherited from

HTMLCollectionBase.length

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6188

## Methods

### [iterator]

▸ **[iterator]**(): [`IterableIterator`](axes_lines._internal_.IterableIterator.md)<[`Element`](../modules/axes_lines._internal_.md#element)\>

#### Returns

[`IterableIterator`](axes_lines._internal_.IterableIterator.md)<[`Element`](../modules/axes_lines._internal_.md#element)\>

#### Inherited from

HTMLCollectionBase.\_\_@iterator@87

#### Defined in

node_modules/typescript/lib/lib.dom.iterable.d.ts:97

___

### item

▸ **item**(`index`): ``null`` \| [`Element`](../modules/axes_lines._internal_.md#element)

Retrieves an object from various collections.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| [`Element`](../modules/axes_lines._internal_.md#element)

#### Inherited from

HTMLCollectionBase.item

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6190

___

### namedItem

▸ **namedItem**(`name`): ``null`` \| [`Element`](../modules/axes_lines._internal_.md#element)

Retrieves a select object or an object from an options collection.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

``null`` \| [`Element`](../modules/axes_lines._internal_.md#element)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6196
