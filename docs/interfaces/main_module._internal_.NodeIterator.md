[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / NodeIterator

# Interface: NodeIterator

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).NodeIterator

An iterator over the members of a list of the nodes in a subtree of the DOM. The nodes will be returned in document order.

## Table of contents

### Properties

- [filter](main_module._internal_.NodeIterator.md#filter)
- [pointerBeforeReferenceNode](main_module._internal_.NodeIterator.md#pointerbeforereferencenode)
- [referenceNode](main_module._internal_.NodeIterator.md#referencenode)
- [root](main_module._internal_.NodeIterator.md#root)
- [whatToShow](main_module._internal_.NodeIterator.md#whattoshow)

### Methods

- [detach](main_module._internal_.NodeIterator.md#detach)
- [nextNode](main_module._internal_.NodeIterator.md#nextnode)
- [previousNode](main_module._internal_.NodeIterator.md#previousnode)

## Properties

### filter

• `Readonly` **filter**: ``null`` \| [`NodeFilter`](../modules/main_module._internal_.md#nodefilter-1)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10160

___

### pointerBeforeReferenceNode

• `Readonly` **pointerBeforeReferenceNode**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10161

___

### referenceNode

• `Readonly` **referenceNode**: [`Node`](../modules/main_module._internal_.md#node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10162

___

### root

• `Readonly` **root**: [`Node`](../modules/main_module._internal_.md#node)

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

**`Deprecated`**

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10166

___

### nextNode

▸ **nextNode**(): ``null`` \| [`Node`](../modules/main_module._internal_.md#node)

#### Returns

``null`` \| [`Node`](../modules/main_module._internal_.md#node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10167

___

### previousNode

▸ **previousNode**(): ``null`` \| [`Node`](../modules/main_module._internal_.md#node)

#### Returns

``null`` \| [`Node`](../modules/main_module._internal_.md#node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10168
