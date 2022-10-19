[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / ShadowRoot

# Interface: ShadowRoot

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).ShadowRoot

## Hierarchy

- [`DocumentFragment`](../modules/annotation_annotation_layer_state._internal_.md#documentfragment)

- [`DocumentOrShadowRoot`](annotation_annotation_layer_state._internal_.DocumentOrShadowRoot.md)

- [`InnerHTML`](annotation_annotation_layer_state._internal_.InnerHTML.md)

  ↳ **`ShadowRoot`**

## Table of contents

### Properties

- [ATTRIBUTE\_NODE](annotation_annotation_layer_state._internal_.ShadowRoot.md#attribute_node)
- [CDATA\_SECTION\_NODE](annotation_annotation_layer_state._internal_.ShadowRoot.md#cdata_section_node)
- [COMMENT\_NODE](annotation_annotation_layer_state._internal_.ShadowRoot.md#comment_node)
- [DOCUMENT\_FRAGMENT\_NODE](annotation_annotation_layer_state._internal_.ShadowRoot.md#document_fragment_node)
- [DOCUMENT\_NODE](annotation_annotation_layer_state._internal_.ShadowRoot.md#document_node)
- [DOCUMENT\_POSITION\_CONTAINED\_BY](annotation_annotation_layer_state._internal_.ShadowRoot.md#document_position_contained_by)
- [DOCUMENT\_POSITION\_CONTAINS](annotation_annotation_layer_state._internal_.ShadowRoot.md#document_position_contains)
- [DOCUMENT\_POSITION\_DISCONNECTED](annotation_annotation_layer_state._internal_.ShadowRoot.md#document_position_disconnected)
- [DOCUMENT\_POSITION\_FOLLOWING](annotation_annotation_layer_state._internal_.ShadowRoot.md#document_position_following)
- [DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC](annotation_annotation_layer_state._internal_.ShadowRoot.md#document_position_implementation_specific)
- [DOCUMENT\_POSITION\_PRECEDING](annotation_annotation_layer_state._internal_.ShadowRoot.md#document_position_preceding)
- [DOCUMENT\_TYPE\_NODE](annotation_annotation_layer_state._internal_.ShadowRoot.md#document_type_node)
- [ELEMENT\_NODE](annotation_annotation_layer_state._internal_.ShadowRoot.md#element_node)
- [ENTITY\_NODE](annotation_annotation_layer_state._internal_.ShadowRoot.md#entity_node)
- [ENTITY\_REFERENCE\_NODE](annotation_annotation_layer_state._internal_.ShadowRoot.md#entity_reference_node)
- [NOTATION\_NODE](annotation_annotation_layer_state._internal_.ShadowRoot.md#notation_node)
- [PROCESSING\_INSTRUCTION\_NODE](annotation_annotation_layer_state._internal_.ShadowRoot.md#processing_instruction_node)
- [TEXT\_NODE](annotation_annotation_layer_state._internal_.ShadowRoot.md#text_node)
- [activeElement](annotation_annotation_layer_state._internal_.ShadowRoot.md#activeelement)
- [baseURI](annotation_annotation_layer_state._internal_.ShadowRoot.md#baseuri)
- [childElementCount](annotation_annotation_layer_state._internal_.ShadowRoot.md#childelementcount)
- [childNodes](annotation_annotation_layer_state._internal_.ShadowRoot.md#childnodes)
- [children](annotation_annotation_layer_state._internal_.ShadowRoot.md#children)
- [delegatesFocus](annotation_annotation_layer_state._internal_.ShadowRoot.md#delegatesfocus)
- [firstChild](annotation_annotation_layer_state._internal_.ShadowRoot.md#firstchild)
- [firstElementChild](annotation_annotation_layer_state._internal_.ShadowRoot.md#firstelementchild)
- [fullscreenElement](annotation_annotation_layer_state._internal_.ShadowRoot.md#fullscreenelement)
- [host](annotation_annotation_layer_state._internal_.ShadowRoot.md#host)
- [innerHTML](annotation_annotation_layer_state._internal_.ShadowRoot.md#innerhtml)
- [isConnected](annotation_annotation_layer_state._internal_.ShadowRoot.md#isconnected)
- [lastChild](annotation_annotation_layer_state._internal_.ShadowRoot.md#lastchild)
- [lastElementChild](annotation_annotation_layer_state._internal_.ShadowRoot.md#lastelementchild)
- [mode](annotation_annotation_layer_state._internal_.ShadowRoot.md#mode)
- [nextSibling](annotation_annotation_layer_state._internal_.ShadowRoot.md#nextsibling)
- [nodeName](annotation_annotation_layer_state._internal_.ShadowRoot.md#nodename)
- [nodeType](annotation_annotation_layer_state._internal_.ShadowRoot.md#nodetype)
- [nodeValue](annotation_annotation_layer_state._internal_.ShadowRoot.md#nodevalue)
- [onslotchange](annotation_annotation_layer_state._internal_.ShadowRoot.md#onslotchange)
- [ownerDocument](annotation_annotation_layer_state._internal_.ShadowRoot.md#ownerdocument)
- [parentElement](annotation_annotation_layer_state._internal_.ShadowRoot.md#parentelement)
- [parentNode](annotation_annotation_layer_state._internal_.ShadowRoot.md#parentnode)
- [pictureInPictureElement](annotation_annotation_layer_state._internal_.ShadowRoot.md#pictureinpictureelement)
- [pointerLockElement](annotation_annotation_layer_state._internal_.ShadowRoot.md#pointerlockelement)
- [previousSibling](annotation_annotation_layer_state._internal_.ShadowRoot.md#previoussibling)
- [slotAssignment](annotation_annotation_layer_state._internal_.ShadowRoot.md#slotassignment)
- [styleSheets](annotation_annotation_layer_state._internal_.ShadowRoot.md#stylesheets)
- [textContent](annotation_annotation_layer_state._internal_.ShadowRoot.md#textcontent)

### Methods

- [addEventListener](annotation_annotation_layer_state._internal_.ShadowRoot.md#addeventlistener)
- [append](annotation_annotation_layer_state._internal_.ShadowRoot.md#append)
- [appendChild](annotation_annotation_layer_state._internal_.ShadowRoot.md#appendchild)
- [cloneNode](annotation_annotation_layer_state._internal_.ShadowRoot.md#clonenode)
- [compareDocumentPosition](annotation_annotation_layer_state._internal_.ShadowRoot.md#comparedocumentposition)
- [contains](annotation_annotation_layer_state._internal_.ShadowRoot.md#contains)
- [dispatchEvent](annotation_annotation_layer_state._internal_.ShadowRoot.md#dispatchevent)
- [elementFromPoint](annotation_annotation_layer_state._internal_.ShadowRoot.md#elementfrompoint)
- [elementsFromPoint](annotation_annotation_layer_state._internal_.ShadowRoot.md#elementsfrompoint)
- [getAnimations](annotation_annotation_layer_state._internal_.ShadowRoot.md#getanimations)
- [getElementById](annotation_annotation_layer_state._internal_.ShadowRoot.md#getelementbyid)
- [getRootNode](annotation_annotation_layer_state._internal_.ShadowRoot.md#getrootnode)
- [hasChildNodes](annotation_annotation_layer_state._internal_.ShadowRoot.md#haschildnodes)
- [insertBefore](annotation_annotation_layer_state._internal_.ShadowRoot.md#insertbefore)
- [isDefaultNamespace](annotation_annotation_layer_state._internal_.ShadowRoot.md#isdefaultnamespace)
- [isEqualNode](annotation_annotation_layer_state._internal_.ShadowRoot.md#isequalnode)
- [isSameNode](annotation_annotation_layer_state._internal_.ShadowRoot.md#issamenode)
- [lookupNamespaceURI](annotation_annotation_layer_state._internal_.ShadowRoot.md#lookupnamespaceuri)
- [lookupPrefix](annotation_annotation_layer_state._internal_.ShadowRoot.md#lookupprefix)
- [normalize](annotation_annotation_layer_state._internal_.ShadowRoot.md#normalize)
- [prepend](annotation_annotation_layer_state._internal_.ShadowRoot.md#prepend)
- [querySelector](annotation_annotation_layer_state._internal_.ShadowRoot.md#queryselector)
- [querySelectorAll](annotation_annotation_layer_state._internal_.ShadowRoot.md#queryselectorall)
- [removeChild](annotation_annotation_layer_state._internal_.ShadowRoot.md#removechild)
- [removeEventListener](annotation_annotation_layer_state._internal_.ShadowRoot.md#removeeventlistener)
- [replaceChild](annotation_annotation_layer_state._internal_.ShadowRoot.md#replacechild)
- [replaceChildren](annotation_annotation_layer_state._internal_.ShadowRoot.md#replacechildren)

## Properties

### ATTRIBUTE\_NODE

• `Readonly` **ATTRIBUTE\_NODE**: `number`

#### Inherited from

DocumentFragment.ATTRIBUTE\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10089

___

### CDATA\_SECTION\_NODE

• `Readonly` **CDATA\_SECTION\_NODE**: `number`

node is a CDATASection node.

#### Inherited from

DocumentFragment.CDATA\_SECTION\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10091

___

### COMMENT\_NODE

• `Readonly` **COMMENT\_NODE**: `number`

node is a Comment node.

#### Inherited from

DocumentFragment.COMMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10093

___

### DOCUMENT\_FRAGMENT\_NODE

• `Readonly` **DOCUMENT\_FRAGMENT\_NODE**: `number`

node is a DocumentFragment node.

#### Inherited from

DocumentFragment.DOCUMENT\_FRAGMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10095

___

### DOCUMENT\_NODE

• `Readonly` **DOCUMENT\_NODE**: `number`

node is a document.

#### Inherited from

DocumentFragment.DOCUMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10097

___

### DOCUMENT\_POSITION\_CONTAINED\_BY

• `Readonly` **DOCUMENT\_POSITION\_CONTAINED\_BY**: `number`

Set when other is a descendant of node.

#### Inherited from

DocumentFragment.DOCUMENT\_POSITION\_CONTAINED\_BY

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10099

___

### DOCUMENT\_POSITION\_CONTAINS

• `Readonly` **DOCUMENT\_POSITION\_CONTAINS**: `number`

Set when other is an ancestor of node.

#### Inherited from

DocumentFragment.DOCUMENT\_POSITION\_CONTAINS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10101

___

### DOCUMENT\_POSITION\_DISCONNECTED

• `Readonly` **DOCUMENT\_POSITION\_DISCONNECTED**: `number`

Set when node and other are not in the same tree.

#### Inherited from

DocumentFragment.DOCUMENT\_POSITION\_DISCONNECTED

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10103

___

### DOCUMENT\_POSITION\_FOLLOWING

• `Readonly` **DOCUMENT\_POSITION\_FOLLOWING**: `number`

Set when other is following node.

#### Inherited from

DocumentFragment.DOCUMENT\_POSITION\_FOLLOWING

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10105

___

### DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC

• `Readonly` **DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC**: `number`

#### Inherited from

DocumentFragment.DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10106

___

### DOCUMENT\_POSITION\_PRECEDING

• `Readonly` **DOCUMENT\_POSITION\_PRECEDING**: `number`

Set when other is preceding node.

#### Inherited from

DocumentFragment.DOCUMENT\_POSITION\_PRECEDING

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10108

___

### DOCUMENT\_TYPE\_NODE

• `Readonly` **DOCUMENT\_TYPE\_NODE**: `number`

node is a doctype.

#### Inherited from

DocumentFragment.DOCUMENT\_TYPE\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10110

___

### ELEMENT\_NODE

• `Readonly` **ELEMENT\_NODE**: `number`

node is an element.

#### Inherited from

DocumentFragment.ELEMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10112

___

### ENTITY\_NODE

• `Readonly` **ENTITY\_NODE**: `number`

#### Inherited from

DocumentFragment.ENTITY\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10113

___

### ENTITY\_REFERENCE\_NODE

• `Readonly` **ENTITY\_REFERENCE\_NODE**: `number`

#### Inherited from

DocumentFragment.ENTITY\_REFERENCE\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10114

___

### NOTATION\_NODE

• `Readonly` **NOTATION\_NODE**: `number`

#### Inherited from

DocumentFragment.NOTATION\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10115

___

### PROCESSING\_INSTRUCTION\_NODE

• `Readonly` **PROCESSING\_INSTRUCTION\_NODE**: `number`

node is a ProcessingInstruction node.

#### Inherited from

DocumentFragment.PROCESSING\_INSTRUCTION\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10117

___

### TEXT\_NODE

• `Readonly` **TEXT\_NODE**: `number`

node is a Text node.

#### Inherited from

DocumentFragment.TEXT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10119

___

### activeElement

• `Readonly` **activeElement**: ``null`` \| [`Element`](../modules/annotation_annotation_layer_state._internal_.md#element)

Returns the deepest element in the document through which or to which key events are being routed. This is, roughly speaking, the focused element in the document.

For the purposes of this API, when a child browsing context is focused, its container is focused in the parent browsing context. For example, if the user moves the focus to a text control in an iframe, the iframe is the element returned by the activeElement API in the iframe's node document.

Similarly, when the focused element is in a different node tree than documentOrShadowRoot, the element returned will be the host that's located in the same node tree as documentOrShadowRoot if documentOrShadowRoot is a shadow-including inclusive ancestor of the focused element, and null if not.

#### Inherited from

[DocumentOrShadowRoot](annotation_annotation_layer_state._internal_.DocumentOrShadowRoot.md).[activeElement](annotation_annotation_layer_state._internal_.DocumentOrShadowRoot.md#activeelement)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4736

___

### baseURI

• `Readonly` **baseURI**: `string`

Returns node's node document's document base URL.

#### Inherited from

DocumentFragment.baseURI

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10042

___

### childElementCount

• `Readonly` **childElementCount**: `number`

#### Inherited from

DocumentFragment.childElementCount

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10407

___

### childNodes

• `Readonly` **childNodes**: `NodeListOf`<[`ChildNode`](annotation_annotation_layer_state._internal_.ChildNode.md)\>

Returns the children.

#### Inherited from

DocumentFragment.childNodes

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10044

___

### children

• `Readonly` **children**: [`HTMLCollection`](../modules/annotation_annotation_layer_state._internal_.md#htmlcollection)

Returns the child elements.

#### Inherited from

DocumentFragment.children

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10409

___

### delegatesFocus

• `Readonly` **delegatesFocus**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13563

___

### firstChild

• `Readonly` **firstChild**: ``null`` \| [`ChildNode`](annotation_annotation_layer_state._internal_.ChildNode.md)

Returns the first child.

#### Inherited from

DocumentFragment.firstChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10046

___

### firstElementChild

• `Readonly` **firstElementChild**: ``null`` \| [`Element`](../modules/annotation_annotation_layer_state._internal_.md#element)

Returns the first child that is an element, and null otherwise.

#### Inherited from

DocumentFragment.firstElementChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10411

___

### fullscreenElement

• `Readonly` **fullscreenElement**: ``null`` \| [`Element`](../modules/annotation_annotation_layer_state._internal_.md#element)

Returns document's fullscreen element.

#### Inherited from

[DocumentOrShadowRoot](annotation_annotation_layer_state._internal_.DocumentOrShadowRoot.md).[fullscreenElement](annotation_annotation_layer_state._internal_.DocumentOrShadowRoot.md#fullscreenelement)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4738

___

### host

• `Readonly` **host**: [`Element`](../modules/annotation_annotation_layer_state._internal_.md#element)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13564

___

### innerHTML

• **innerHTML**: `string`

#### Inherited from

[InnerHTML](annotation_annotation_layer_state._internal_.InnerHTML.md).[innerHTML](annotation_annotation_layer_state._internal_.InnerHTML.md#innerhtml)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8903

___

### isConnected

• `Readonly` **isConnected**: `boolean`

Returns true if node is connected and false otherwise.

#### Inherited from

DocumentFragment.isConnected

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10048

___

### lastChild

• `Readonly` **lastChild**: ``null`` \| [`ChildNode`](annotation_annotation_layer_state._internal_.ChildNode.md)

Returns the last child.

#### Inherited from

DocumentFragment.lastChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10050

___

### lastElementChild

• `Readonly` **lastElementChild**: ``null`` \| [`Element`](../modules/annotation_annotation_layer_state._internal_.md#element)

Returns the last child that is an element, and null otherwise.

#### Inherited from

DocumentFragment.lastElementChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10413

___

### mode

• `Readonly` **mode**: [`ShadowRootMode`](../modules/annotation_annotation_layer_state._internal_.md#shadowrootmode)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13565

___

### nextSibling

• `Readonly` **nextSibling**: ``null`` \| [`ChildNode`](annotation_annotation_layer_state._internal_.ChildNode.md)

Returns the next sibling.

#### Inherited from

DocumentFragment.nextSibling

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10052

___

### nodeName

• `Readonly` **nodeName**: `string`

Returns a string appropriate for the type of node.

#### Inherited from

DocumentFragment.nodeName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10054

___

### nodeType

• `Readonly` **nodeType**: `number`

Returns the type of node.

#### Inherited from

DocumentFragment.nodeType

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10056

___

### nodeValue

• **nodeValue**: ``null`` \| `string`

#### Inherited from

DocumentFragment.nodeValue

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10057

___

### onslotchange

• **onslotchange**: ``null`` \| (`this`: [`ShadowRoot`](../modules/annotation_annotation_layer_state._internal_.md#shadowroot), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13566

___

### ownerDocument

• `Readonly` **ownerDocument**: [`Document`](../modules/annotation_annotation_layer_state._internal_.md#document)

#### Inherited from

DocumentFragment.ownerDocument

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4719

___

### parentElement

• `Readonly` **parentElement**: ``null`` \| [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)

Returns the parent element.

#### Inherited from

DocumentFragment.parentElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10061

___

### parentNode

• `Readonly` **parentNode**: ``null`` \| [`ParentNode`](annotation_annotation_layer_state._internal_.ParentNode.md)

Returns the parent.

#### Inherited from

DocumentFragment.parentNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10063

___

### pictureInPictureElement

• `Readonly` **pictureInPictureElement**: ``null`` \| [`Element`](../modules/annotation_annotation_layer_state._internal_.md#element)

#### Inherited from

[DocumentOrShadowRoot](annotation_annotation_layer_state._internal_.DocumentOrShadowRoot.md).[pictureInPictureElement](annotation_annotation_layer_state._internal_.DocumentOrShadowRoot.md#pictureinpictureelement)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4739

___

### pointerLockElement

• `Readonly` **pointerLockElement**: ``null`` \| [`Element`](../modules/annotation_annotation_layer_state._internal_.md#element)

#### Inherited from

[DocumentOrShadowRoot](annotation_annotation_layer_state._internal_.DocumentOrShadowRoot.md).[pointerLockElement](annotation_annotation_layer_state._internal_.DocumentOrShadowRoot.md#pointerlockelement)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4740

___

### previousSibling

• `Readonly` **previousSibling**: ``null`` \| [`ChildNode`](annotation_annotation_layer_state._internal_.ChildNode.md)

Returns the previous sibling.

#### Inherited from

DocumentFragment.previousSibling

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10065

___

### slotAssignment

• `Readonly` **slotAssignment**: [`SlotAssignmentMode`](../modules/annotation_annotation_layer_state._internal_.md#slotassignmentmode)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13567

___

### styleSheets

• `Readonly` **styleSheets**: `StyleSheetList`

Retrieves a collection of styleSheet objects representing the style sheets that correspond to each instance of a link or style object in the document.

#### Inherited from

[DocumentOrShadowRoot](annotation_annotation_layer_state._internal_.DocumentOrShadowRoot.md).[styleSheets](annotation_annotation_layer_state._internal_.DocumentOrShadowRoot.md#stylesheets)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4742

___

### textContent

• **textContent**: ``null`` \| `string`

#### Inherited from

DocumentFragment.textContent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10066

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

Throws a "NotSupportedError" DOMException if context object is a shadow root.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"slotchange"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`ShadowRoot`](../modules/annotation_annotation_layer_state._internal_.md#shadowroot), `ev`: [`ShadowRootEventMap`](annotation_annotation_layer_state._internal_.ShadowRootEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](annotation_annotation_layer_state._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

DocumentFragment.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13569

▸ **addEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/annotation_annotation_layer_state._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](annotation_annotation_layer_state._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

DocumentFragment.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13570

___

### append

▸ **append**(...`nodes`): `void`

Inserts nodes after the last child of node, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...nodes` | (`string` \| [`Node`](../modules/annotation_annotation_layer_state._internal_.md#node))[] |

#### Returns

`void`

#### Inherited from

DocumentFragment.append

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10419

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

DocumentFragment.appendChild

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

DocumentFragment.cloneNode

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

DocumentFragment.compareDocumentPosition

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

DocumentFragment.contains

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

DocumentFragment.dispatchEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5138

___

### elementFromPoint

▸ **elementFromPoint**(`x`, `y`): ``null`` \| [`Element`](../modules/annotation_annotation_layer_state._internal_.md#element)

Returns the element for the specified x coordinate and the specified y coordinate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The x-offset |
| `y` | `number` | The y-offset |

#### Returns

``null`` \| [`Element`](../modules/annotation_annotation_layer_state._internal_.md#element)

#### Inherited from

[DocumentOrShadowRoot](annotation_annotation_layer_state._internal_.DocumentOrShadowRoot.md).[elementFromPoint](annotation_annotation_layer_state._internal_.DocumentOrShadowRoot.md#elementfrompoint)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4748

___

### elementsFromPoint

▸ **elementsFromPoint**(`x`, `y`): [`Element`](../modules/annotation_annotation_layer_state._internal_.md#element)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`Element`](../modules/annotation_annotation_layer_state._internal_.md#element)[]

#### Inherited from

[DocumentOrShadowRoot](annotation_annotation_layer_state._internal_.DocumentOrShadowRoot.md).[elementsFromPoint](annotation_annotation_layer_state._internal_.DocumentOrShadowRoot.md#elementsfrompoint)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4749

___

### getAnimations

▸ **getAnimations**(): [`Animation`](../modules/annotation_annotation_layer_state._internal_.md#animation)[]

#### Returns

[`Animation`](../modules/annotation_annotation_layer_state._internal_.md#animation)[]

#### Inherited from

[DocumentOrShadowRoot](annotation_annotation_layer_state._internal_.DocumentOrShadowRoot.md).[getAnimations](annotation_annotation_layer_state._internal_.DocumentOrShadowRoot.md#getanimations)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4750

___

### getElementById

▸ **getElementById**(`elementId`): ``null`` \| [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `elementId` | `string` |

#### Returns

``null`` \| [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)

#### Inherited from

DocumentFragment.getElementById

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4720

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

DocumentFragment.getRootNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10075

___

### hasChildNodes

▸ **hasChildNodes**(): `boolean`

Returns whether node has children.

#### Returns

`boolean`

#### Inherited from

DocumentFragment.hasChildNodes

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

DocumentFragment.insertBefore

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

DocumentFragment.isDefaultNamespace

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

DocumentFragment.isEqualNode

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

DocumentFragment.isSameNode

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

DocumentFragment.lookupNamespaceURI

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

DocumentFragment.lookupPrefix

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10084

___

### normalize

▸ **normalize**(): `void`

Removes empty exclusive Text nodes and concatenates the data of remaining contiguous exclusive Text nodes into the first of their nodes.

#### Returns

`void`

#### Inherited from

DocumentFragment.normalize

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10086

___

### prepend

▸ **prepend**(...`nodes`): `void`

Inserts nodes before the first child of node, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...nodes` | (`string` \| [`Node`](../modules/annotation_annotation_layer_state._internal_.md#node))[] |

#### Returns

`void`

#### Inherited from

DocumentFragment.prepend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10425

___

### querySelector

▸ **querySelector**<`K`\>(`selectors`): ``null`` \| [`HTMLElementTagNameMap`](annotation_annotation_layer_state._internal_.HTMLElementTagNameMap.md)[`K`]

Returns the first element that is a descendant of node that matches selectors.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`HTMLElementTagNameMap`](annotation_annotation_layer_state._internal_.HTMLElementTagNameMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `K` |

#### Returns

``null`` \| [`HTMLElementTagNameMap`](annotation_annotation_layer_state._internal_.HTMLElementTagNameMap.md)[`K`]

#### Inherited from

DocumentFragment.querySelector

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10427

▸ **querySelector**<`K`\>(`selectors`): ``null`` \| [`SVGElementTagNameMap`](annotation_annotation_layer_state._internal_.SVGElementTagNameMap.md)[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`SVGElementTagNameMap`](annotation_annotation_layer_state._internal_.SVGElementTagNameMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `K` |

#### Returns

``null`` \| [`SVGElementTagNameMap`](annotation_annotation_layer_state._internal_.SVGElementTagNameMap.md)[`K`]

#### Inherited from

DocumentFragment.querySelector

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10428

▸ **querySelector**<`E`\>(`selectors`): ``null`` \| `E`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`Element`](../modules/annotation_annotation_layer_state._internal_.md#element) = [`Element`](../modules/annotation_annotation_layer_state._internal_.md#element) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `string` |

#### Returns

``null`` \| `E`

#### Inherited from

DocumentFragment.querySelector

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10429

___

### querySelectorAll

▸ **querySelectorAll**<`K`\>(`selectors`): `NodeListOf`<[`HTMLElementTagNameMap`](annotation_annotation_layer_state._internal_.HTMLElementTagNameMap.md)[`K`]\>

Returns all element descendants of node that match selectors.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`HTMLElementTagNameMap`](annotation_annotation_layer_state._internal_.HTMLElementTagNameMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `K` |

#### Returns

`NodeListOf`<[`HTMLElementTagNameMap`](annotation_annotation_layer_state._internal_.HTMLElementTagNameMap.md)[`K`]\>

#### Inherited from

DocumentFragment.querySelectorAll

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10431

▸ **querySelectorAll**<`K`\>(`selectors`): `NodeListOf`<[`SVGElementTagNameMap`](annotation_annotation_layer_state._internal_.SVGElementTagNameMap.md)[`K`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`SVGElementTagNameMap`](annotation_annotation_layer_state._internal_.SVGElementTagNameMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `K` |

#### Returns

`NodeListOf`<[`SVGElementTagNameMap`](annotation_annotation_layer_state._internal_.SVGElementTagNameMap.md)[`K`]\>

#### Inherited from

DocumentFragment.querySelectorAll

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10432

▸ **querySelectorAll**<`E`\>(`selectors`): `NodeListOf`<`E`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`Element`](../modules/annotation_annotation_layer_state._internal_.md#element) = [`Element`](../modules/annotation_annotation_layer_state._internal_.md#element) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `string` |

#### Returns

`NodeListOf`<`E`\>

#### Inherited from

DocumentFragment.querySelectorAll

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10433

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

DocumentFragment.removeChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10087

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"slotchange"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`ShadowRoot`](../modules/annotation_annotation_layer_state._internal_.md#shadowroot), `ev`: [`ShadowRootEventMap`](annotation_annotation_layer_state._internal_.ShadowRootEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](annotation_annotation_layer_state._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

DocumentFragment.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13571

▸ **removeEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/annotation_annotation_layer_state._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`EventListenerOptions`](annotation_annotation_layer_state._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

DocumentFragment.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13572

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

DocumentFragment.replaceChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10088

___

### replaceChildren

▸ **replaceChildren**(...`nodes`): `void`

Replace all children of node with nodes, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...nodes` | (`string` \| [`Node`](../modules/annotation_annotation_layer_state._internal_.md#node))[] |

#### Returns

`void`

#### Inherited from

DocumentFragment.replaceChildren

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10439
