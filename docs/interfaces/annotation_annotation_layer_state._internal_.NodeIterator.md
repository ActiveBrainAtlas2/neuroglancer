[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / NodeIterator

# Interface: NodeIterator

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).NodeIterator

An iterator over the members of a list of the nodes in a subtree of the DOM. The nodes will be returned in document order.

## Table of contents

### Properties

- [filter](annotation_annotation_layer_state._internal_.NodeIterator.md#filter)
- [pointerBeforeReferenceNode](annotation_annotation_layer_state._internal_.NodeIterator.md#pointerbeforereferencenode)
- [referenceNode](annotation_annotation_layer_state._internal_.NodeIterator.md#referencenode)
- [root](annotation_annotation_layer_state._internal_.NodeIterator.md#root)
- [whatToShow](annotation_annotation_layer_state._internal_.NodeIterator.md#whattoshow)

### Methods

- [detach](annotation_annotation_layer_state._internal_.NodeIterator.md#detach)
- [nextNode](annotation_annotation_layer_state._internal_.NodeIterator.md#nextnode)
- [previousNode](annotation_annotation_layer_state._internal_.NodeIterator.md#previousnode)

## Properties

### filter

• `Readonly` **filter**: ``null`` \| [`NodeFilter`](../modules/annotation_annotation_layer_state._internal_.md#nodefilter-1)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10160

___

### pointerBeforeReferenceNode

• `Readonly` **pointerBeforeReferenceNode**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10161

___

### referenceNode

• `Readonly` **referenceNode**: [`Node`](../modules/annotation_annotation_layer_state._internal_.md#node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10162

___

### root

• `Readonly` **root**: [`Node`](../modules/annotation_annotation_layer_state._internal_.md#node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10163

___

### whatToShow

• `Readonly` **whatToShow**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10164

## Methods

### detach

▸ **detach**(): `void`

**`deprecated`**

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10166

___

### nextNode

▸ **nextNode**(): ``null`` \| [`Node`](../modules/annotation_annotation_layer_state._internal_.md#node)

#### Returns

``null`` \| [`Node`](../modules/annotation_annotation_layer_state._internal_.md#node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10167

___

### previousNode

▸ **previousNode**(): ``null`` \| [`Node`](../modules/annotation_annotation_layer_state._internal_.md#node)

#### Returns

``null`` \| [`Node`](../modules/annotation_annotation_layer_state._internal_.md#node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10168
