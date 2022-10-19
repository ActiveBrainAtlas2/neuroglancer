[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / Attr

# Interface: Attr

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).Attr

A DOM element's attribute as an object. In most DOM methods, you will probably directly retrieve the attribute as a string (e.g., Element.getAttribute(), but certain functions (e.g., Element.getAttributeNode()) or means of iterating give Attr types.

## Hierarchy

- [`Node`](../modules/annotation_annotation_layer_state._internal_.md#node)

  ↳ **`Attr`**

## Table of contents

### Properties

- [ATTRIBUTE\_NODE](annotation_annotation_layer_state._internal_.Attr.md#attribute_node)
- [CDATA\_SECTION\_NODE](annotation_annotation_layer_state._internal_.Attr.md#cdata_section_node)
- [COMMENT\_NODE](annotation_annotation_layer_state._internal_.Attr.md#comment_node)
- [DOCUMENT\_FRAGMENT\_NODE](annotation_annotation_layer_state._internal_.Attr.md#document_fragment_node)
- [DOCUMENT\_NODE](annotation_annotation_layer_state._internal_.Attr.md#document_node)
- [DOCUMENT\_POSITION\_CONTAINED\_BY](annotation_annotation_layer_state._internal_.Attr.md#document_position_contained_by)
- [DOCUMENT\_POSITION\_CONTAINS](annotation_annotation_layer_state._internal_.Attr.md#document_position_contains)
- [DOCUMENT\_POSITION\_DISCONNECTED](annotation_annotation_layer_state._internal_.Attr.md#document_position_disconnected)
- [DOCUMENT\_POSITION\_FOLLOWING](annotation_annotation_layer_state._internal_.Attr.md#document_position_following)
- [DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC](annotation_annotation_layer_state._internal_.Attr.md#document_position_implementation_specific)
- [DOCUMENT\_POSITION\_PRECEDING](annotation_annotation_layer_state._internal_.Attr.md#document_position_preceding)
- [DOCUMENT\_TYPE\_NODE](annotation_annotation_layer_state._internal_.Attr.md#document_type_node)
- [ELEMENT\_NODE](annotation_annotation_layer_state._internal_.Attr.md#element_node)
- [ENTITY\_NODE](annotation_annotation_layer_state._internal_.Attr.md#entity_node)
- [ENTITY\_REFERENCE\_NODE](annotation_annotation_layer_state._internal_.Attr.md#entity_reference_node)
- [NOTATION\_NODE](annotation_annotation_layer_state._internal_.Attr.md#notation_node)
- [PROCESSING\_INSTRUCTION\_NODE](annotation_annotation_layer_state._internal_.Attr.md#processing_instruction_node)
- [TEXT\_NODE](annotation_annotation_layer_state._internal_.Attr.md#text_node)
- [baseURI](annotation_annotation_layer_state._internal_.Attr.md#baseuri)
- [childNodes](annotation_annotation_layer_state._internal_.Attr.md#childnodes)
- [firstChild](annotation_annotation_layer_state._internal_.Attr.md#firstchild)
- [isConnected](annotation_annotation_layer_state._internal_.Attr.md#isconnected)
- [lastChild](annotation_annotation_layer_state._internal_.Attr.md#lastchild)
- [localName](annotation_annotation_layer_state._internal_.Attr.md#localname)
- [name](annotation_annotation_layer_state._internal_.Attr.md#name)
- [namespaceURI](annotation_annotation_layer_state._internal_.Attr.md#namespaceuri)
- [nextSibling](annotation_annotation_layer_state._internal_.Attr.md#nextsibling)
- [nodeName](annotation_annotation_layer_state._internal_.Attr.md#nodename)
- [nodeType](annotation_annotation_layer_state._internal_.Attr.md#nodetype)
- [nodeValue](annotation_annotation_layer_state._internal_.Attr.md#nodevalue)
- [ownerDocument](annotation_annotation_layer_state._internal_.Attr.md#ownerdocument)
- [ownerElement](annotation_annotation_layer_state._internal_.Attr.md#ownerelement)
- [parentElement](annotation_annotation_layer_state._internal_.Attr.md#parentelement)
- [parentNode](annotation_annotation_layer_state._internal_.Attr.md#parentnode)
- [prefix](annotation_annotation_layer_state._internal_.Attr.md#prefix)
- [previousSibling](annotation_annotation_layer_state._internal_.Attr.md#previoussibling)
- [specified](annotation_annotation_layer_state._internal_.Attr.md#specified)
- [textContent](annotation_annotation_layer_state._internal_.Attr.md#textcontent)
- [value](annotation_annotation_layer_state._internal_.Attr.md#value)

### Methods

- [addEventListener](annotation_annotation_layer_state._internal_.Attr.md#addeventlistener)
- [appendChild](annotation_annotation_layer_state._internal_.Attr.md#appendchild)
- [cloneNode](annotation_annotation_layer_state._internal_.Attr.md#clonenode)
- [compareDocumentPosition](annotation_annotation_layer_state._internal_.Attr.md#comparedocumentposition)
- [contains](annotation_annotation_layer_state._internal_.Attr.md#contains)
- [dispatchEvent](annotation_annotation_layer_state._internal_.Attr.md#dispatchevent)
- [getRootNode](annotation_annotation_layer_state._internal_.Attr.md#getrootnode)
- [hasChildNodes](annotation_annotation_layer_state._internal_.Attr.md#haschildnodes)
- [insertBefore](annotation_annotation_layer_state._internal_.Attr.md#insertbefore)
- [isDefaultNamespace](annotation_annotation_layer_state._internal_.Attr.md#isdefaultnamespace)
- [isEqualNode](annotation_annotation_layer_state._internal_.Attr.md#isequalnode)
- [isSameNode](annotation_annotation_layer_state._internal_.Attr.md#issamenode)
- [lookupNamespaceURI](annotation_annotation_layer_state._internal_.Attr.md#lookupnamespaceuri)
- [lookupPrefix](annotation_annotation_layer_state._internal_.Attr.md#lookupprefix)
- [normalize](annotation_annotation_layer_state._internal_.Attr.md#normalize)
- [removeChild](annotation_annotation_layer_state._internal_.Attr.md#removechild)
- [removeEventListener](annotation_annotation_layer_state._internal_.Attr.md#removeeventlistener)
- [replaceChild](annotation_annotation_layer_state._internal_.Attr.md#replacechild)

## Properties

### ATTRIBUTE\_NODE

• `Readonly` **ATTRIBUTE\_NODE**: `number`

#### Inherited from

Node.ATTRIBUTE\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10089

___

### CDATA\_SECTION\_NODE

• `Readonly` **CDATA\_SECTION\_NODE**: `number`

node is a CDATASection node.

#### Inherited from

Node.CDATA\_SECTION\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10091

___

### COMMENT\_NODE

• `Readonly` **COMMENT\_NODE**: `number`

node is a Comment node.

#### Inherited from

Node.COMMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10093

___

### DOCUMENT\_FRAGMENT\_NODE

• `Readonly` **DOCUMENT\_FRAGMENT\_NODE**: `number`

node is a DocumentFragment node.

#### Inherited from

Node.DOCUMENT\_FRAGMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10095

___

### DOCUMENT\_NODE

• `Readonly` **DOCUMENT\_NODE**: `number`

node is a document.

#### Inherited from

Node.DOCUMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10097

___

### DOCUMENT\_POSITION\_CONTAINED\_BY

• `Readonly` **DOCUMENT\_POSITION\_CONTAINED\_BY**: `number`

Set when other is a descendant of node.

#### Inherited from

Node.DOCUMENT\_POSITION\_CONTAINED\_BY

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10099

___

### DOCUMENT\_POSITION\_CONTAINS

• `Readonly` **DOCUMENT\_POSITION\_CONTAINS**: `number`

Set when other is an ancestor of node.

#### Inherited from

Node.DOCUMENT\_POSITION\_CONTAINS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10101

___

### DOCUMENT\_POSITION\_DISCONNECTED

• `Readonly` **DOCUMENT\_POSITION\_DISCONNECTED**: `number`

Set when node and other are not in the same tree.

#### Inherited from

Node.DOCUMENT\_POSITION\_DISCONNECTED

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10103

___

### DOCUMENT\_POSITION\_FOLLOWING

• `Readonly` **DOCUMENT\_POSITION\_FOLLOWING**: `number`

Set when other is following node.

#### Inherited from

Node.DOCUMENT\_POSITION\_FOLLOWING

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10105

___

### DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC

• `Readonly` **DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC**: `number`

#### Inherited from

Node.DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10106

___

### DOCUMENT\_POSITION\_PRECEDING

• `Readonly` **DOCUMENT\_POSITION\_PRECEDING**: `number`

Set when other is preceding node.

#### Inherited from

Node.DOCUMENT\_POSITION\_PRECEDING

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10108

___

### DOCUMENT\_TYPE\_NODE

• `Readonly` **DOCUMENT\_TYPE\_NODE**: `number`

node is a doctype.

#### Inherited from

Node.DOCUMENT\_TYPE\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10110

___

### ELEMENT\_NODE

• `Readonly` **ELEMENT\_NODE**: `number`

node is an element.

#### Inherited from

Node.ELEMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10112

___

### ENTITY\_NODE

• `Readonly` **ENTITY\_NODE**: `number`

#### Inherited from

Node.ENTITY\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10113

___

### ENTITY\_REFERENCE\_NODE

• `Readonly` **ENTITY\_REFERENCE\_NODE**: `number`

#### Inherited from

Node.ENTITY\_REFERENCE\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10114

___

### NOTATION\_NODE

• `Readonly` **NOTATION\_NODE**: `number`

#### Inherited from

Node.NOTATION\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10115

___

### PROCESSING\_INSTRUCTION\_NODE

• `Readonly` **PROCESSING\_INSTRUCTION\_NODE**: `number`

node is a ProcessingInstruction node.

#### Inherited from

Node.PROCESSING\_INSTRUCTION\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10117

___

### TEXT\_NODE

• `Readonly` **TEXT\_NODE**: `number`

node is a Text node.

#### Inherited from

Node.TEXT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10119

___

### baseURI

• `Readonly` **baseURI**: `string`

Returns node's node document's document base URL.

#### Inherited from

Node.baseURI

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10042

___

### childNodes

• `Readonly` **childNodes**: `NodeListOf`<[`ChildNode`](annotation_annotation_layer_state._internal_.ChildNode.md)\>

Returns the children.

#### Inherited from

Node.childNodes

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10044

___

### firstChild

• `Readonly` **firstChild**: ``null`` \| [`ChildNode`](annotation_annotation_layer_state._internal_.ChildNode.md)

Returns the first child.

#### Inherited from

Node.firstChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10046

___

### isConnected

• `Readonly` **isConnected**: `boolean`

Returns true if node is connected and false otherwise.

#### Inherited from

Node.isConnected

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10048

___

### lastChild

• `Readonly` **lastChild**: ``null`` \| [`ChildNode`](annotation_annotation_layer_state._internal_.ChildNode.md)

Returns the last child.

#### Inherited from

Node.lastChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10050

___

### localName

• `Readonly` **localName**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2140

___

### name

• `Readonly` **name**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2141

___

### namespaceURI

• `Readonly` **namespaceURI**: ``null`` \| `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2142

___

### nextSibling

• `Readonly` **nextSibling**: ``null`` \| [`ChildNode`](annotation_annotation_layer_state._internal_.ChildNode.md)

Returns the next sibling.

#### Inherited from

Node.nextSibling

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10052

___

### nodeName

• `Readonly` **nodeName**: `string`

Returns a string appropriate for the type of node.

#### Inherited from

Node.nodeName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10054

___

### nodeType

• `Readonly` **nodeType**: `number`

Returns the type of node.

#### Inherited from

Node.nodeType

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10056

___

### nodeValue

• **nodeValue**: ``null`` \| `string`

#### Inherited from

Node.nodeValue

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10057

___

### ownerDocument

• `Readonly` **ownerDocument**: [`Document`](../modules/annotation_annotation_layer_state._internal_.md#document)

#### Overrides

Node.ownerDocument

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2143

___

### ownerElement

• `Readonly` **ownerElement**: ``null`` \| [`Element`](../modules/annotation_annotation_layer_state._internal_.md#element)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2144

___

### parentElement

• `Readonly` **parentElement**: ``null`` \| [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)

Returns the parent element.

#### Inherited from

Node.parentElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10061

___

### parentNode

• `Readonly` **parentNode**: ``null`` \| [`ParentNode`](annotation_annotation_layer_state._internal_.ParentNode.md)

Returns the parent.

#### Inherited from

Node.parentNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10063

___

### prefix

• `Readonly` **prefix**: ``null`` \| `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2145

___

### previousSibling

• `Readonly` **previousSibling**: ``null`` \| [`ChildNode`](annotation_annotation_layer_state._internal_.ChildNode.md)

Returns the previous sibling.

#### Inherited from

Node.previousSibling

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10065

___

### specified

• `Readonly` **specified**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2146

___

### textContent

• **textContent**: ``null`` \| `string`

#### Inherited from

Node.textContent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10066

___

### value

• **value**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2147

## Methods

### addEventListener

▸ **addEventListener**(`type`, `callback`, `options?`): `void`

Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `callback` | ``null`` \| [`EventListenerOrEventListenerObject`](../modules/annotation_annotation_layer_state._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](annotation_annotation_layer_state._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

Node.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5136

___

### appendChild

▸ **appendChild**<`T`\>(`node`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Node`](../modules/annotation_annotation_layer_state._internal_.md#node) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `T` |

#### Returns

`T`

#### Inherited from

Node.appendChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10067

___

### cloneNode

▸ **cloneNode**(`deep?`): [`Node`](../modules/annotation_annotation_layer_state._internal_.md#node)

Returns a copy of node. If deep is true, the copy also includes the node's descendants.

#### Parameters

| Name | Type |
| :------ | :------ |
| `deep?` | `boolean` |

#### Returns

[`Node`](../modules/annotation_annotation_layer_state._internal_.md#node)

#### Inherited from

Node.cloneNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10069

___

### compareDocumentPosition

▸ **compareDocumentPosition**(`other`): `number`

Returns a bitmask indicating the position of other relative to node.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Node`](../modules/annotation_annotation_layer_state._internal_.md#node) |

#### Returns

`number`

#### Inherited from

Node.compareDocumentPosition

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10071

___

### contains

▸ **contains**(`other`): `boolean`

Returns true if other is an inclusive descendant of node, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | ``null`` \| [`Node`](../modules/annotation_annotation_layer_state._internal_.md#node) |

#### Returns

`boolean`

#### Inherited from

Node.contains

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10073

___

### dispatchEvent

▸ **dispatchEvent**(`event`): `boolean`

Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event) |

#### Returns

`boolean`

#### Inherited from

Node.dispatchEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5138

___

### getRootNode

▸ **getRootNode**(`options?`): [`Node`](../modules/annotation_annotation_layer_state._internal_.md#node)

Returns node's root.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`GetRootNodeOptions`](annotation_annotation_layer_state._internal_.GetRootNodeOptions.md) |

#### Returns

[`Node`](../modules/annotation_annotation_layer_state._internal_.md#node)

#### Inherited from

Node.getRootNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10075

___

### hasChildNodes

▸ **hasChildNodes**(): `boolean`

Returns whether node has children.

#### Returns

`boolean`

#### Inherited from

Node.hasChildNodes

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10077

___

### insertBefore

▸ **insertBefore**<`T`\>(`node`, `child`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Node`](../modules/annotation_annotation_layer_state._internal_.md#node) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `T` |
| `child` | ``null`` \| [`Node`](../modules/annotation_annotation_layer_state._internal_.md#node) |

#### Returns

`T`

#### Inherited from

Node.insertBefore

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10078

___

### isDefaultNamespace

▸ **isDefaultNamespace**(`namespace`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |

#### Returns

`boolean`

#### Inherited from

Node.isDefaultNamespace

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10079

___

### isEqualNode

▸ **isEqualNode**(`otherNode`): `boolean`

Returns whether node and otherNode have the same properties.

#### Parameters

| Name | Type |
| :------ | :------ |
| `otherNode` | ``null`` \| [`Node`](../modules/annotation_annotation_layer_state._internal_.md#node) |

#### Returns

`boolean`

#### Inherited from

Node.isEqualNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10081

___

### isSameNode

▸ **isSameNode**(`otherNode`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `otherNode` | ``null`` \| [`Node`](../modules/annotation_annotation_layer_state._internal_.md#node) |

#### Returns

`boolean`

#### Inherited from

Node.isSameNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10082

___

### lookupNamespaceURI

▸ **lookupNamespaceURI**(`prefix`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | ``null`` \| `string` |

#### Returns

``null`` \| `string`

#### Inherited from

Node.lookupNamespaceURI

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10083

___

### lookupPrefix

▸ **lookupPrefix**(`namespace`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |

#### Returns

``null`` \| `string`

#### Inherited from

Node.lookupPrefix

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10084

___

### normalize

▸ **normalize**(): `void`

Removes empty exclusive Text nodes and concatenates the data of remaining contiguous exclusive Text nodes into the first of their nodes.

#### Returns

`void`

#### Inherited from

Node.normalize

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10086

___

### removeChild

▸ **removeChild**<`T`\>(`child`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Node`](../modules/annotation_annotation_layer_state._internal_.md#node) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | `T` |

#### Returns

`T`

#### Inherited from

Node.removeChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10087

___

### removeEventListener

▸ **removeEventListener**(`type`, `callback`, `options?`): `void`

Removes the event listener in target's event listener list with the same type, callback, and options.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `callback` | ``null`` \| [`EventListenerOrEventListenerObject`](../modules/annotation_annotation_layer_state._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`EventListenerOptions`](annotation_annotation_layer_state._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

Node.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5140

___

### replaceChild

▸ **replaceChild**<`T`\>(`node`, `child`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Node`](../modules/annotation_annotation_layer_state._internal_.md#node) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../modules/annotation_annotation_layer_state._internal_.md#node) |
| `child` | `T` |

#### Returns

`T`

#### Inherited from

Node.replaceChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10088
