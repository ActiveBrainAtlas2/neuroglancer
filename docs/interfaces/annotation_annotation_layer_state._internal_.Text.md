[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / Text

# Interface: Text

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).Text

The textual content of Element or Attr. If an element has no markup within its content, it has a single child implementing Text that contains the element's text. However, if the element contains markup, it is parsed into information items and Text nodes that form its children.

## Hierarchy

- [`CharacterData`](../modules/annotation_annotation_layer_state._internal_.md#characterdata)

- [`Slottable`](annotation_annotation_layer_state._internal_.Slottable.md)

  ↳ **`Text`**

## Table of contents

### Properties

- [ATTRIBUTE\_NODE](annotation_annotation_layer_state._internal_.Text.md#attribute_node)
- [CDATA\_SECTION\_NODE](annotation_annotation_layer_state._internal_.Text.md#cdata_section_node)
- [COMMENT\_NODE](annotation_annotation_layer_state._internal_.Text.md#comment_node)
- [DOCUMENT\_FRAGMENT\_NODE](annotation_annotation_layer_state._internal_.Text.md#document_fragment_node)
- [DOCUMENT\_NODE](annotation_annotation_layer_state._internal_.Text.md#document_node)
- [DOCUMENT\_POSITION\_CONTAINED\_BY](annotation_annotation_layer_state._internal_.Text.md#document_position_contained_by)
- [DOCUMENT\_POSITION\_CONTAINS](annotation_annotation_layer_state._internal_.Text.md#document_position_contains)
- [DOCUMENT\_POSITION\_DISCONNECTED](annotation_annotation_layer_state._internal_.Text.md#document_position_disconnected)
- [DOCUMENT\_POSITION\_FOLLOWING](annotation_annotation_layer_state._internal_.Text.md#document_position_following)
- [DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC](annotation_annotation_layer_state._internal_.Text.md#document_position_implementation_specific)
- [DOCUMENT\_POSITION\_PRECEDING](annotation_annotation_layer_state._internal_.Text.md#document_position_preceding)
- [DOCUMENT\_TYPE\_NODE](annotation_annotation_layer_state._internal_.Text.md#document_type_node)
- [ELEMENT\_NODE](annotation_annotation_layer_state._internal_.Text.md#element_node)
- [ENTITY\_NODE](annotation_annotation_layer_state._internal_.Text.md#entity_node)
- [ENTITY\_REFERENCE\_NODE](annotation_annotation_layer_state._internal_.Text.md#entity_reference_node)
- [NOTATION\_NODE](annotation_annotation_layer_state._internal_.Text.md#notation_node)
- [PROCESSING\_INSTRUCTION\_NODE](annotation_annotation_layer_state._internal_.Text.md#processing_instruction_node)
- [TEXT\_NODE](annotation_annotation_layer_state._internal_.Text.md#text_node)
- [assignedSlot](annotation_annotation_layer_state._internal_.Text.md#assignedslot)
- [baseURI](annotation_annotation_layer_state._internal_.Text.md#baseuri)
- [childNodes](annotation_annotation_layer_state._internal_.Text.md#childnodes)
- [data](annotation_annotation_layer_state._internal_.Text.md#data)
- [firstChild](annotation_annotation_layer_state._internal_.Text.md#firstchild)
- [isConnected](annotation_annotation_layer_state._internal_.Text.md#isconnected)
- [lastChild](annotation_annotation_layer_state._internal_.Text.md#lastchild)
- [length](annotation_annotation_layer_state._internal_.Text.md#length)
- [nextElementSibling](annotation_annotation_layer_state._internal_.Text.md#nextelementsibling)
- [nextSibling](annotation_annotation_layer_state._internal_.Text.md#nextsibling)
- [nodeName](annotation_annotation_layer_state._internal_.Text.md#nodename)
- [nodeType](annotation_annotation_layer_state._internal_.Text.md#nodetype)
- [nodeValue](annotation_annotation_layer_state._internal_.Text.md#nodevalue)
- [ownerDocument](annotation_annotation_layer_state._internal_.Text.md#ownerdocument)
- [parentElement](annotation_annotation_layer_state._internal_.Text.md#parentelement)
- [parentNode](annotation_annotation_layer_state._internal_.Text.md#parentnode)
- [previousElementSibling](annotation_annotation_layer_state._internal_.Text.md#previouselementsibling)
- [previousSibling](annotation_annotation_layer_state._internal_.Text.md#previoussibling)
- [textContent](annotation_annotation_layer_state._internal_.Text.md#textcontent)
- [wholeText](annotation_annotation_layer_state._internal_.Text.md#wholetext)

### Methods

- [addEventListener](annotation_annotation_layer_state._internal_.Text.md#addeventlistener)
- [after](annotation_annotation_layer_state._internal_.Text.md#after)
- [appendChild](annotation_annotation_layer_state._internal_.Text.md#appendchild)
- [appendData](annotation_annotation_layer_state._internal_.Text.md#appenddata)
- [before](annotation_annotation_layer_state._internal_.Text.md#before)
- [cloneNode](annotation_annotation_layer_state._internal_.Text.md#clonenode)
- [compareDocumentPosition](annotation_annotation_layer_state._internal_.Text.md#comparedocumentposition)
- [contains](annotation_annotation_layer_state._internal_.Text.md#contains)
- [deleteData](annotation_annotation_layer_state._internal_.Text.md#deletedata)
- [dispatchEvent](annotation_annotation_layer_state._internal_.Text.md#dispatchevent)
- [getRootNode](annotation_annotation_layer_state._internal_.Text.md#getrootnode)
- [hasChildNodes](annotation_annotation_layer_state._internal_.Text.md#haschildnodes)
- [insertBefore](annotation_annotation_layer_state._internal_.Text.md#insertbefore)
- [insertData](annotation_annotation_layer_state._internal_.Text.md#insertdata)
- [isDefaultNamespace](annotation_annotation_layer_state._internal_.Text.md#isdefaultnamespace)
- [isEqualNode](annotation_annotation_layer_state._internal_.Text.md#isequalnode)
- [isSameNode](annotation_annotation_layer_state._internal_.Text.md#issamenode)
- [lookupNamespaceURI](annotation_annotation_layer_state._internal_.Text.md#lookupnamespaceuri)
- [lookupPrefix](annotation_annotation_layer_state._internal_.Text.md#lookupprefix)
- [normalize](annotation_annotation_layer_state._internal_.Text.md#normalize)
- [remove](annotation_annotation_layer_state._internal_.Text.md#remove)
- [removeChild](annotation_annotation_layer_state._internal_.Text.md#removechild)
- [removeEventListener](annotation_annotation_layer_state._internal_.Text.md#removeeventlistener)
- [replaceChild](annotation_annotation_layer_state._internal_.Text.md#replacechild)
- [replaceData](annotation_annotation_layer_state._internal_.Text.md#replacedata)
- [replaceWith](annotation_annotation_layer_state._internal_.Text.md#replacewith)
- [splitText](annotation_annotation_layer_state._internal_.Text.md#splittext)
- [substringData](annotation_annotation_layer_state._internal_.Text.md#substringdata)

## Properties

### ATTRIBUTE\_NODE

• `Readonly` **ATTRIBUTE\_NODE**: `number`

#### Inherited from

CharacterData.ATTRIBUTE\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10089

___

### CDATA\_SECTION\_NODE

• `Readonly` **CDATA\_SECTION\_NODE**: `number`

node is a CDATASection node.

#### Inherited from

CharacterData.CDATA\_SECTION\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10091

___

### COMMENT\_NODE

• `Readonly` **COMMENT\_NODE**: `number`

node is a Comment node.

#### Inherited from

CharacterData.COMMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10093

___

### DOCUMENT\_FRAGMENT\_NODE

• `Readonly` **DOCUMENT\_FRAGMENT\_NODE**: `number`

node is a DocumentFragment node.

#### Inherited from

CharacterData.DOCUMENT\_FRAGMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10095

___

### DOCUMENT\_NODE

• `Readonly` **DOCUMENT\_NODE**: `number`

node is a document.

#### Inherited from

CharacterData.DOCUMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10097

___

### DOCUMENT\_POSITION\_CONTAINED\_BY

• `Readonly` **DOCUMENT\_POSITION\_CONTAINED\_BY**: `number`

Set when other is a descendant of node.

#### Inherited from

CharacterData.DOCUMENT\_POSITION\_CONTAINED\_BY

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10099

___

### DOCUMENT\_POSITION\_CONTAINS

• `Readonly` **DOCUMENT\_POSITION\_CONTAINS**: `number`

Set when other is an ancestor of node.

#### Inherited from

CharacterData.DOCUMENT\_POSITION\_CONTAINS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10101

___

### DOCUMENT\_POSITION\_DISCONNECTED

• `Readonly` **DOCUMENT\_POSITION\_DISCONNECTED**: `number`

Set when node and other are not in the same tree.

#### Inherited from

CharacterData.DOCUMENT\_POSITION\_DISCONNECTED

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10103

___

### DOCUMENT\_POSITION\_FOLLOWING

• `Readonly` **DOCUMENT\_POSITION\_FOLLOWING**: `number`

Set when other is following node.

#### Inherited from

CharacterData.DOCUMENT\_POSITION\_FOLLOWING

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10105

___

### DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC

• `Readonly` **DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC**: `number`

#### Inherited from

CharacterData.DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10106

___

### DOCUMENT\_POSITION\_PRECEDING

• `Readonly` **DOCUMENT\_POSITION\_PRECEDING**: `number`

Set when other is preceding node.

#### Inherited from

CharacterData.DOCUMENT\_POSITION\_PRECEDING

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10108

___

### DOCUMENT\_TYPE\_NODE

• `Readonly` **DOCUMENT\_TYPE\_NODE**: `number`

node is a doctype.

#### Inherited from

CharacterData.DOCUMENT\_TYPE\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10110

___

### ELEMENT\_NODE

• `Readonly` **ELEMENT\_NODE**: `number`

node is an element.

#### Inherited from

CharacterData.ELEMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10112

___

### ENTITY\_NODE

• `Readonly` **ENTITY\_NODE**: `number`

#### Inherited from

CharacterData.ENTITY\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10113

___

### ENTITY\_REFERENCE\_NODE

• `Readonly` **ENTITY\_REFERENCE\_NODE**: `number`

#### Inherited from

CharacterData.ENTITY\_REFERENCE\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10114

___

### NOTATION\_NODE

• `Readonly` **NOTATION\_NODE**: `number`

#### Inherited from

CharacterData.NOTATION\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10115

___

### PROCESSING\_INSTRUCTION\_NODE

• `Readonly` **PROCESSING\_INSTRUCTION\_NODE**: `number`

node is a ProcessingInstruction node.

#### Inherited from

CharacterData.PROCESSING\_INSTRUCTION\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10117

___

### TEXT\_NODE

• `Readonly` **TEXT\_NODE**: `number`

node is a Text node.

#### Inherited from

CharacterData.TEXT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10119

___

### assignedSlot

• `Readonly` **assignedSlot**: ``null`` \| [`HTMLSlotElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlslotelement)

#### Inherited from

[Slottable](annotation_annotation_layer_state._internal_.Slottable.md).[assignedSlot](annotation_annotation_layer_state._internal_.Slottable.md#assignedslot)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13595

___

### baseURI

• `Readonly` **baseURI**: `string`

Returns node's node document's document base URL.

#### Inherited from

CharacterData.baseURI

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10042

___

### childNodes

• `Readonly` **childNodes**: `NodeListOf`<[`ChildNode`](annotation_annotation_layer_state._internal_.ChildNode.md)\>

Returns the children.

#### Inherited from

CharacterData.childNodes

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10044

___

### data

• **data**: `string`

#### Inherited from

CharacterData.data

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3553

___

### firstChild

• `Readonly` **firstChild**: ``null`` \| [`ChildNode`](annotation_annotation_layer_state._internal_.ChildNode.md)

Returns the first child.

#### Inherited from

CharacterData.firstChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10046

___

### isConnected

• `Readonly` **isConnected**: `boolean`

Returns true if node is connected and false otherwise.

#### Inherited from

CharacterData.isConnected

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10048

___

### lastChild

• `Readonly` **lastChild**: ``null`` \| [`ChildNode`](annotation_annotation_layer_state._internal_.ChildNode.md)

Returns the last child.

#### Inherited from

CharacterData.lastChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10050

___

### length

• `Readonly` **length**: `number`

#### Inherited from

CharacterData.length

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3554

___

### nextElementSibling

• `Readonly` **nextElementSibling**: ``null`` \| [`Element`](../modules/annotation_annotation_layer_state._internal_.md#element)

Returns the first following sibling that is an element, and null otherwise.

#### Inherited from

CharacterData.nextElementSibling

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10209

___

### nextSibling

• `Readonly` **nextSibling**: ``null`` \| [`ChildNode`](annotation_annotation_layer_state._internal_.ChildNode.md)

Returns the next sibling.

#### Inherited from

CharacterData.nextSibling

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10052

___

### nodeName

• `Readonly` **nodeName**: `string`

Returns a string appropriate for the type of node.

#### Inherited from

CharacterData.nodeName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10054

___

### nodeType

• `Readonly` **nodeType**: `number`

Returns the type of node.

#### Inherited from

CharacterData.nodeType

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10056

___

### nodeValue

• **nodeValue**: ``null`` \| `string`

#### Inherited from

CharacterData.nodeValue

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10057

___

### ownerDocument

• `Readonly` **ownerDocument**: [`Document`](../modules/annotation_annotation_layer_state._internal_.md#document)

#### Inherited from

CharacterData.ownerDocument

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3555

___

### parentElement

• `Readonly` **parentElement**: ``null`` \| [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)

Returns the parent element.

#### Inherited from

CharacterData.parentElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10061

___

### parentNode

• `Readonly` **parentNode**: ``null`` \| [`ParentNode`](annotation_annotation_layer_state._internal_.ParentNode.md)

Returns the parent.

#### Inherited from

CharacterData.parentNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10063

___

### previousElementSibling

• `Readonly` **previousElementSibling**: ``null`` \| [`Element`](../modules/annotation_annotation_layer_state._internal_.md#element)

Returns the first preceding sibling that is an element, and null otherwise.

#### Inherited from

CharacterData.previousElementSibling

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10211

___

### previousSibling

• `Readonly` **previousSibling**: ``null`` \| [`ChildNode`](annotation_annotation_layer_state._internal_.ChildNode.md)

Returns the previous sibling.

#### Inherited from

CharacterData.previousSibling

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10065

___

### textContent

• **textContent**: ``null`` \| `string`

#### Inherited from

CharacterData.textContent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10066

___

### wholeText

• `Readonly` **wholeText**: `string`

Returns the combined data of all direct Text node siblings.

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
| `callback` | ``null`` \| [`EventListenerOrEventListenerObject`](../modules/annotation_annotation_layer_state._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](annotation_annotation_layer_state._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

CharacterData.addEventListener

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
| `...nodes` | (`string` \| [`Node`](../modules/annotation_annotation_layer_state._internal_.md#node))[] |

#### Returns

`void`

#### Inherited from

CharacterData.after

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3574

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

CharacterData.appendChild

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

CharacterData.appendData

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
| `...nodes` | (`string` \| [`Node`](../modules/annotation_annotation_layer_state._internal_.md#node))[] |

#### Returns

`void`

#### Inherited from

CharacterData.before

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3580

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

CharacterData.cloneNode

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

CharacterData.compareDocumentPosition

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

CharacterData.contains

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

CharacterData.deleteData

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3557

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

CharacterData.dispatchEvent

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

CharacterData.getRootNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10075

___

### hasChildNodes

▸ **hasChildNodes**(): `boolean`

Returns whether node has children.

#### Returns

`boolean`

#### Inherited from

CharacterData.hasChildNodes

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

CharacterData.insertBefore

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

CharacterData.insertData

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

CharacterData.isDefaultNamespace

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

CharacterData.isEqualNode

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

CharacterData.isSameNode

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

CharacterData.lookupNamespaceURI

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

CharacterData.lookupPrefix

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10084

___

### normalize

▸ **normalize**(): `void`

Removes empty exclusive Text nodes and concatenates the data of remaining contiguous exclusive Text nodes into the first of their nodes.

#### Returns

`void`

#### Inherited from

CharacterData.normalize

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10086

___

### remove

▸ **remove**(): `void`

Removes node.

#### Returns

`void`

#### Inherited from

CharacterData.remove

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3582

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

CharacterData.removeChild

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

CharacterData.removeEventListener

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

CharacterData.replaceChild

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

CharacterData.replaceData

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
| `...nodes` | (`string` \| [`Node`](../modules/annotation_annotation_layer_state._internal_.md#node))[] |

#### Returns

`void`

#### Inherited from

CharacterData.replaceWith

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3588

___

### splitText

▸ **splitText**(`offset`): [`Text`](../modules/annotation_annotation_layer_state._internal_.md#text)

Splits data at the given offset and returns the remainder as Text node.

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `number` |

#### Returns

[`Text`](../modules/annotation_annotation_layer_state._internal_.md#text)

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

CharacterData.substringData

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3560
