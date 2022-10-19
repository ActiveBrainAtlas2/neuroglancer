[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / HTMLCollection

# Interface: HTMLCollection

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).HTMLCollection

## Hierarchy

- `HTMLCollectionBase`

  ↳ **`HTMLCollection`**

## Table of contents

### Properties

- [length](annotation_annotation_layer_state._internal_.HTMLCollection.md#length)

### Methods

- [[iterator]](annotation_annotation_layer_state._internal_.HTMLCollection.md#[iterator])
- [item](annotation_annotation_layer_state._internal_.HTMLCollection.md#item)
- [namedItem](annotation_annotation_layer_state._internal_.HTMLCollection.md#nameditem)

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

▸ **[iterator]**(): [`IterableIterator`](annotation_annotation_layer_state._internal_.IterableIterator.md)<[`Element`](../modules/annotation_annotation_layer_state._internal_.md#element)\>

#### Returns

[`IterableIterator`](annotation_annotation_layer_state._internal_.IterableIterator.md)<[`Element`](../modules/annotation_annotation_layer_state._internal_.md#element)\>

#### Inherited from

HTMLCollectionBase.\_\_@iterator@87

#### Defined in

node_modules/typescript/lib/lib.dom.iterable.d.ts:97

___

### item

▸ **item**(`index`): ``null`` \| [`Element`](../modules/annotation_annotation_layer_state._internal_.md#element)

Retrieves an object from various collections.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| [`Element`](../modules/annotation_annotation_layer_state._internal_.md#element)

#### Inherited from

HTMLCollectionBase.item

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6190

___

### namedItem

▸ **namedItem**(`name`): ``null`` \| [`Element`](../modules/annotation_annotation_layer_state._internal_.md#element)

Retrieves a select object or an object from an options collection.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

``null`` \| [`Element`](../modules/annotation_annotation_layer_state._internal_.md#element)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6196
