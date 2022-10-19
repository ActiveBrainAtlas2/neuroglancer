[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / CDATASection

# Interface: CDATASection

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).CDATASection

A CDATA section that can be used within XML to include extended portions of unescaped text. The symbols < and & don’t need escaping as they normally do when inside a CDATA section.

## Hierarchy

- [`Text`](../modules/main_module._internal_.md#text)

  ↳ **`CDATASection`**

## Table of contents

### Properties

- [ATTRIBUTE\_NODE](main_module._internal_.CDATASection.md#attribute_node)
- [CDATA\_SECTION\_NODE](main_module._internal_.CDATASection.md#cdata_section_node)
- [COMMENT\_NODE](main_module._internal_.CDATASection.md#comment_node)
- [DOCUMENT\_FRAGMENT\_NODE](main_module._internal_.CDATASection.md#document_fragment_node)
- [DOCUMENT\_NODE](main_module._internal_.CDATASection.md#document_node)
- [DOCUMENT\_POSITION\_CONTAINED\_BY](main_module._internal_.CDATASection.md#document_position_contained_by)
- [DOCUMENT\_POSITION\_CONTAINS](main_module._internal_.CDATASection.md#document_position_contains)
- [DOCUMENT\_POSITION\_DISCONNECTED](main_module._internal_.CDATASection.md#document_position_disconnected)
- [DOCUMENT\_POSITION\_FOLLOWING](main_module._internal_.CDATASection.md#document_position_following)
- [DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC](main_module._internal_.CDATASection.md#document_position_implementation_specific)
- [DOCUMENT\_POSITION\_PRECEDING](main_module._internal_.CDATASection.md#document_position_preceding)
- [DOCUMENT\_TYPE\_NODE](main_module._internal_.CDATASection.md#document_type_node)
- [ELEMENT\_NODE](main_module._internal_.CDATASection.md#element_node)
- [ENTITY\_NODE](main_module._internal_.CDATASection.md#entity_node)
- [ENTITY\_REFERENCE\_NODE](main_module._internal_.CDATASection.md#entity_reference_node)
- [NOTATION\_NODE](main_module._internal_.CDATASection.md#notation_node)
- [PROCESSING\_INSTRUCTION\_NODE](main_module._internal_.CDATASection.md#processing_instruction_node)
- [TEXT\_NODE](main_module._internal_.CDATASection.md#text_node)
- [assignedSlot](main_module._internal_.CDATASection.md#assignedslot)
- [baseURI](main_module._internal_.CDATASection.md#baseuri)
- [childNodes](main_module._internal_.CDATASection.md#childnodes)
- [data](main_module._internal_.CDATASection.md#data)
- [firstChild](main_module._internal_.CDATASection.md#firstchild)
- [isConnected](main_module._internal_.CDATASection.md#isconnected)
- [lastChild](main_module._internal_.CDATASection.md#lastchild)
- [length](main_module._internal_.CDATASection.md#length)
- [nextElementSibling](main_module._internal_.CDATASection.md#nextelementsibling)
- [nextSibling](main_module._internal_.CDATASection.md#nextsibling)
- [nodeName](main_module._internal_.CDATASection.md#nodename)
- [nodeType](main_module._internal_.CDATASection.md#nodetype)
- [nodeValue](main_module._internal_.CDATASection.md#nodevalue)
- [ownerDocument](main_module._internal_.CDATASection.md#ownerdocument)
- [parentElement](main_module._internal_.CDATASection.md#parentelement)
- [parentNode](main_module._internal_.CDATASection.md#parentnode)
- [previousElementSibling](main_module._internal_.CDATASection.md#previouselementsibling)
- [previousSibling](main_module._internal_.CDATASection.md#previoussibling)
- [textContent](main_module._internal_.CDATASection.md#textcontent)
- [wholeText](main_module._internal_.CDATASection.md#wholetext)

### Methods

- [addEventListener](main_module._internal_.CDATASection.md#addeventlistener)
- [after](main_module._internal_.CDATASection.md#after)
- [appendChild](main_module._internal_.CDATASection.md#appendchild)
- [appendData](main_module._internal_.CDATASection.md#appenddata)
- [before](main_module._internal_.CDATASection.md#before)
- [cloneNode](main_module._internal_.CDATASection.md#clonenode)
- [compareDocumentPosition](main_module._internal_.CDATASection.md#comparedocumentposition)
- [contains](main_module._internal_.CDATASection.md#contains)
- [deleteData](main_module._internal_.CDATASection.md#deletedata)
- [dispatchEvent](main_module._internal_.CDATASection.md#dispatchevent)
- [getRootNode](main_module._internal_.CDATASection.md#getrootnode)
- [hasChildNodes](main_module._internal_.CDATASection.md#haschildnodes)
- [insertBefore](main_module._internal_.CDATASection.md#insertbefore)
- [insertData](main_module._internal_.CDATASection.md#insertdata)
- [isDefaultNamespace](main_module._internal_.CDATASection.md#isdefaultnamespace)
- [isEqualNode](main_module._internal_.CDATASection.md#isequalnode)
- [isSameNode](main_module._internal_.CDATASection.md#issamenode)
- [lookupNamespaceURI](main_module._internal_.CDATASection.md#lookupnamespaceuri)
- [lookupPrefix](main_module._internal_.CDATASection.md#lookupprefix)
- [normalize](main_module._internal_.CDATASection.md#normalize)
- [remove](main_module._internal_.CDATASection.md#remove)
- [removeChild](main_module._internal_.CDATASection.md#removechild)
- [removeEventListener](main_module._internal_.CDATASection.md#removeeventlistener)
- [replaceChild](main_module._internal_.CDATASection.md#replacechild)
- [replaceData](main_module._internal_.CDATASection.md#replacedata)
- [replaceWith](main_module._internal_.CDATASection.md#replacewith)
- [splitText](main_module._internal_.CDATASection.md#splittext)
- [substringData](main_module._internal_.CDATASection.md#substringdata)

## Properties

### ATTRIBUTE\_NODE

• `Readonly` **ATTRIBUTE\_NODE**: `number`

#### Inherited from

Text.ATTRIBUTE\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10089

___

### CDATA\_SECTION\_NODE

• `Readonly` **CDATA\_SECTION\_NODE**: `number`

node is a CDATASection node.

#### Inherited from

Text.CDATA\_SECTION\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10091

___

### COMMENT\_NODE

• `Readonly` **COMMENT\_NODE**: `number`

node is a Comment node.

#### Inherited from

Text.COMMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10093

___

### DOCUMENT\_FRAGMENT\_NODE

• `Readonly` **DOCUMENT\_FRAGMENT\_NODE**: `number`

node is a DocumentFragment node.

#### Inherited from

Text.DOCUMENT\_FRAGMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10095

___

### DOCUMENT\_NODE

• `Readonly` **DOCUMENT\_NODE**: `number`

node is a document.

#### Inherited from

Text.DOCUMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10097

___

### DOCUMENT\_POSITION\_CONTAINED\_BY

• `Readonly` **DOCUMENT\_POSITION\_CONTAINED\_BY**: `number`

Set when other is a descendant of node.

#### Inherited from

Text.DOCUMENT\_POSITION\_CONTAINED\_BY

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10099

___

### DOCUMENT\_POSITION\_CONTAINS

• `Readonly` **DOCUMENT\_POSITION\_CONTAINS**: `number`

Set when other is an ancestor of node.

#### Inherited from

Text.DOCUMENT\_POSITION\_CONTAINS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10101

___

### DOCUMENT\_POSITION\_DISCONNECTED

• `Readonly` **DOCUMENT\_POSITION\_DISCONNECTED**: `number`

Set when node and other are not in the same tree.

#### Inherited from

Text.DOCUMENT\_POSITION\_DISCONNECTED

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10103

___

### DOCUMENT\_POSITION\_FOLLOWING

• `Readonly` **DOCUMENT\_POSITION\_FOLLOWING**: `number`

Set when other is following node.

#### Inherited from

Text.DOCUMENT\_POSITION\_FOLLOWING

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10105

___

### DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC

• `Readonly` **DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC**: `number`

#### Inherited from

Text.DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10106

___

### DOCUMENT\_POSITION\_PRECEDING

• `Readonly` **DOCUMENT\_POSITION\_PRECEDING**: `number`

Set when other is preceding node.

#### Inherited from

Text.DOCUMENT\_POSITION\_PRECEDING

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10108

___

### DOCUMENT\_TYPE\_NODE

• `Readonly` **DOCUMENT\_TYPE\_NODE**: `number`

node is a doctype.

#### Inherited from

Text.DOCUMENT\_TYPE\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10110

___

### ELEMENT\_NODE

• `Readonly` **ELEMENT\_NODE**: `number`

node is an element.

#### Inherited from

Text.ELEMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10112

___

### ENTITY\_NODE

• `Readonly` **ENTITY\_NODE**: `number`

#### Inherited from

Text.ENTITY\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10113

___

### ENTITY\_REFERENCE\_NODE

• `Readonly` **ENTITY\_REFERENCE\_NODE**: `number`

#### Inherited from

Text.ENTITY\_REFERENCE\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10114

___

### NOTATION\_NODE

• `Readonly` **NOTATION\_NODE**: `number`

#### Inherited from

Text.NOTATION\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10115

___

### PROCESSING\_INSTRUCTION\_NODE

• `Readonly` **PROCESSING\_INSTRUCTION\_NODE**: `number`

node is a ProcessingInstruction node.

#### Inherited from

Text.PROCESSING\_INSTRUCTION\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10117

___

### TEXT\_NODE

• `Readonly` **TEXT\_NODE**: `number`

node is a Text node.

#### Inherited from

Text.TEXT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10119

___

### assignedSlot

• `Readonly` **assignedSlot**: ``null`` \| [`HTMLSlotElement`](../modules/main_module._internal_.md#htmlslotelement)

#### Inherited from

Text.assignedSlot

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13595

___

### baseURI

• `Readonly` **baseURI**: `string`

Returns node's node document's document base URL.

#### Inherited from

Text.baseURI

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10042

___

### childNodes

• `Readonly` **childNodes**: `NodeListOf`<[`ChildNode`](main_module._internal_.ChildNode.md)\>

Returns the children.

#### Inherited from

Text.childNodes

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10044

___

### data

• **data**: `string`

#### Inherited from

Text.data

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3553

___

### firstChild

• `Readonly` **firstChild**: ``null`` \| [`ChildNode`](main_module._internal_.ChildNode.md)

Returns the first child.

#### Inherited from

Text.firstChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10046

___

### isConnected

• `Readonly` **isConnected**: `boolean`

Returns true if node is connected and false otherwise.

#### Inherited from

Text.isConnected

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10048

___

### lastChild

• `Readonly` **lastChild**: ``null`` \| [`ChildNode`](main_module._internal_.ChildNode.md)

Returns the last child.

#### Inherited from

Text.lastChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10050

___

### length

• `Readonly` **length**: `number`

#### Inherited from

Text.length

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3554

___

### nextElementSibling

• `Readonly` **nextElementSibling**: ``null`` \| [`Element`](../modules/main_module._internal_.md#element)

Returns the first following sibling that is an element, and null otherwise.

#### Inherited from

Text.nextElementSibling

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10209

___

### nextSibling

• `Readonly` **nextSibling**: ``null`` \| [`ChildNode`](main_module._internal_.ChildNode.md)

Returns the next sibling.

#### Inherited from

Text.nextSibling

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10052

___

### nodeName

• `Readonly` **nodeName**: `string`

Returns a string appropriate for the type of node.

#### Inherited from

Text.nodeName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10054

___

### nodeType

• `Readonly` **nodeType**: `number`

Returns the type of node.

#### Inherited from

Text.nodeType

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10056

___

### nodeValue

• **nodeValue**: ``null`` \| `string`

#### Inherited from

Text.nodeValue

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10057

___

### ownerDocument

• `Readonly` **ownerDocument**: [`Document`](../modules/main_module._internal_.md#document)

#### Inherited from

Text.ownerDocument

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3555

___

### parentElement

• `Readonly` **parentElement**: ``null`` \| [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

Returns the parent element.

#### Inherited from

Text.parentElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10061

___

### parentNode

• `Readonly` **parentNode**: ``null`` \| [`ParentNode`](main_module._internal_.ParentNode.md)

Returns the parent.

#### Inherited from

Text.parentNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10063

___

### previousElementSibling

• `Readonly` **previousElementSibling**: ``null`` \| [`Element`](../modules/main_module._internal_.md#element)

Returns the first preceding sibling that is an element, and null otherwise.

#### Inherited from

Text.previousElementSibling

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10211

___

### previousSibling

• `Readonly` **previousSibling**: ``null`` \| [`ChildNode`](main_module._internal_.ChildNode.md)

Returns the previous sibling.

#### Inherited from

Text.previousSibling

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10065

___

### textContent

• **textContent**: ``null`` \| `string`

#### Inherited from

Text.textContent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10066

___

### wholeText

• `Readonly` **wholeText**: `string`

Returns the combined data of all direct Text node siblings.

#### Inherited from

Text.wholeText

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13950

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
| `callback` | ``null`` \| [`EventListenerOrEventListenerObject`](../modules/main_module._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](main_module._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

Text.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5136

___

### after

▸ **after**(...`nodes`): `void`

Inserts nodes just after node, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...nodes` | (`string` \| [`Node`](../modules/main_module._internal_.md#node))[] |

#### Returns

`void`

#### Inherited from

Text.after

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3574

___

### appendChild

▸ **appendChild**<`T`\>(`node`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Node`](../modules/main_module._internal_.md#node) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `T` |

#### Returns

`T`

#### Inherited from

Text.appendChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10067

___

### appendData

▸ **appendData**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

`void`

#### Inherited from

Text.appendData

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3556

___

### before

▸ **before**(...`nodes`): `void`

Inserts nodes just before node, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...nodes` | (`string` \| [`Node`](../modules/main_module._internal_.md#node))[] |

#### Returns

`void`

#### Inherited from

Text.before

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3580

___

### cloneNode

▸ **cloneNode**(`deep?`): [`Node`](../modules/main_module._internal_.md#node)

Returns a copy of node. If deep is true, the copy also includes the node's descendants.

#### Parameters

| Name | Type |
| :------ | :------ |
| `deep?` | `boolean` |

#### Returns

[`Node`](../modules/main_module._internal_.md#node)

#### Inherited from

Text.cloneNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10069

___

### compareDocumentPosition

▸ **compareDocumentPosition**(`other`): `number`

Returns a bitmask indicating the position of other relative to node.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Node`](../modules/main_module._internal_.md#node) |

#### Returns

`number`

#### Inherited from

Text.compareDocumentPosition

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10071

___

### contains

▸ **contains**(`other`): `boolean`

Returns true if other is an inclusive descendant of node, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | ``null`` \| [`Node`](../modules/main_module._internal_.md#node) |

#### Returns

`boolean`

#### Inherited from

Text.contains

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10073

___

### deleteData

▸ **deleteData**(`offset`, `count`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `number` |
| `count` | `number` |

#### Returns

`void`

#### Inherited from

Text.deleteData

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3557

___

### dispatchEvent

▸ **dispatchEvent**(`event`): `boolean`

Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Event`](../modules/main_module._internal_.md#event) |

#### Returns

`boolean`

#### Inherited from

Text.dispatchEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5138

___

### getRootNode

▸ **getRootNode**(`options?`): [`Node`](../modules/main_module._internal_.md#node)

Returns node's root.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`GetRootNodeOptions`](main_module._internal_.GetRootNodeOptions.md) |

#### Returns

[`Node`](../modules/main_module._internal_.md#node)

#### Inherited from

Text.getRootNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10075

___

### hasChildNodes

▸ **hasChildNodes**(): `boolean`

Returns whether node has children.

#### Returns

`boolean`

#### Inherited from

Text.hasChildNodes

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10077

___

### insertBefore

▸ **insertBefore**<`T`\>(`node`, `child`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Node`](../modules/main_module._internal_.md#node) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `T` |
| `child` | ``null`` \| [`Node`](../modules/main_module._internal_.md#node) |

#### Returns

`T`

#### Inherited from

Text.insertBefore

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10078

___

### insertData

▸ **insertData**(`offset`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `number` |
| `data` | `string` |

#### Returns

`void`

#### Inherited from

Text.insertData

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3558

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

Text.isDefaultNamespace

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10079

___

### isEqualNode

▸ **isEqualNode**(`otherNode`): `boolean`

Returns whether node and otherNode have the same properties.

#### Parameters

| Name | Type |
| :------ | :------ |
| `otherNode` | ``null`` \| [`Node`](../modules/main_module._internal_.md#node) |

#### Returns

`boolean`

#### Inherited from

Text.isEqualNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10081

___

### isSameNode

▸ **isSameNode**(`otherNode`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `otherNode` | ``null`` \| [`Node`](../modules/main_module._internal_.md#node) |

#### Returns

`boolean`

#### Inherited from

Text.isSameNode

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

Text.lookupNamespaceURI

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

Text.lookupPrefix

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10084

___

### normalize

▸ **normalize**(): `void`

Removes empty exclusive Text nodes and concatenates the data of remaining contiguous exclusive Text nodes into the first of their nodes.

#### Returns

`void`

#### Inherited from

Text.normalize

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10086

___

### remove

▸ **remove**(): `void`

Removes node.

#### Returns

`void`

#### Inherited from

Text.remove

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3582

___

### removeChild

▸ **removeChild**<`T`\>(`child`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Node`](../modules/main_module._internal_.md#node) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | `T` |

#### Returns

`T`

#### Inherited from

Text.removeChild

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
| `callback` | ``null`` \| [`EventListenerOrEventListenerObject`](../modules/main_module._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`EventListenerOptions`](main_module._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

Text.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5140

___

### replaceChild

▸ **replaceChild**<`T`\>(`node`, `child`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Node`](../modules/main_module._internal_.md#node) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../modules/main_module._internal_.md#node) |
| `child` | `T` |

#### Returns

`T`

#### Inherited from

Text.replaceChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10088

___

### replaceData

▸ **replaceData**(`offset`, `count`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `number` |
| `count` | `number` |
| `data` | `string` |

#### Returns

`void`

#### Inherited from

Text.replaceData

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3559

___

### replaceWith

▸ **replaceWith**(...`nodes`): `void`

Replaces node with nodes, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...nodes` | (`string` \| [`Node`](../modules/main_module._internal_.md#node))[] |

#### Returns

`void`

#### Inherited from

Text.replaceWith

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3588

___

### splitText

▸ **splitText**(`offset`): [`Text`](../modules/main_module._internal_.md#text)

Splits data at the given offset and returns the remainder as Text node.

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `number` |

#### Returns

[`Text`](../modules/main_module._internal_.md#text)

#### Inherited from

Text.splitText

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13952

___

### substringData

▸ **substringData**(`offset`, `count`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `number` |
| `count` | `number` |

#### Returns

`string`

#### Inherited from

Text.substringData

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3560
