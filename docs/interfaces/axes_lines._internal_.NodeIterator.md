[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / NodeIterator

# Interface: NodeIterator

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).NodeIterator

An iterator over the members of a list of the nodes in a subtree of the DOM. The nodes will be returned in document order.

## Table of contents

### Properties

- [filter](axes_lines._internal_.NodeIterator.md#filter)
- [pointerBeforeReferenceNode](axes_lines._internal_.NodeIterator.md#pointerbeforereferencenode)
- [referenceNode](axes_lines._internal_.NodeIterator.md#referencenode)
- [root](axes_lines._internal_.NodeIterator.md#root)
- [whatToShow](axes_lines._internal_.NodeIterator.md#whattoshow)

### Methods

- [detach](axes_lines._internal_.NodeIterator.md#detach)
- [nextNode](axes_lines._internal_.NodeIterator.md#nextnode)
- [previousNode](axes_lines._internal_.NodeIterator.md#previousnode)

## Properties

### filter

• `Readonly` **filter**: ``null`` \| [`NodeFilter`](../modules/axes_lines._internal_.md#nodefilter-1)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10160

___

### pointerBeforeReferenceNode

• `Readonly` **pointerBeforeReferenceNode**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10161

___

### referenceNode

• `Readonly` **referenceNode**: [`Node`](../modules/axes_lines._internal_.md#node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10162

___

### root

• `Readonly` **root**: [`Node`](../modules/axes_lines._internal_.md#node)

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

▸ **nextNode**(): ``null`` \| [`Node`](../modules/axes_lines._internal_.md#node)

#### Returns

``null`` \| [`Node`](../modules/axes_lines._internal_.md#node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10167

___

### previousNode

▸ **previousNode**(): ``null`` \| [`Node`](../modules/axes_lines._internal_.md#node)

#### Returns

``null`` \| [`Node`](../modules/axes_lines._internal_.md#node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10168
