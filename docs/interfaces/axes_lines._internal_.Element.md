[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / Element

# Interface: Element

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).Element

Element is the most general base class from which all objects in a Document inherit. It only has methods and properties common to all kinds of elements. More specific classes inherit from Element.

## Hierarchy

- [`Node`](../modules/axes_lines._internal_.md#node)

- [`ARIAMixin`](axes_lines._internal_.ARIAMixin.md)

- [`Animatable`](axes_lines._internal_.Animatable.md)

- [`ChildNode`](axes_lines._internal_.ChildNode.md)

- [`InnerHTML`](axes_lines._internal_.InnerHTML.md)

- [`NonDocumentTypeChildNode`](axes_lines._internal_.NonDocumentTypeChildNode.md)

- [`ParentNode`](axes_lines._internal_.ParentNode.md)

- [`Slottable`](axes_lines._internal_.Slottable.md)

  ↳ **`Element`**

## Table of contents

### Properties

- [ATTRIBUTE\_NODE](axes_lines._internal_.Element.md#attribute_node)
- [CDATA\_SECTION\_NODE](axes_lines._internal_.Element.md#cdata_section_node)
- [COMMENT\_NODE](axes_lines._internal_.Element.md#comment_node)
- [DOCUMENT\_FRAGMENT\_NODE](axes_lines._internal_.Element.md#document_fragment_node)
- [DOCUMENT\_NODE](axes_lines._internal_.Element.md#document_node)
- [DOCUMENT\_POSITION\_CONTAINED\_BY](axes_lines._internal_.Element.md#document_position_contained_by)
- [DOCUMENT\_POSITION\_CONTAINS](axes_lines._internal_.Element.md#document_position_contains)
- [DOCUMENT\_POSITION\_DISCONNECTED](axes_lines._internal_.Element.md#document_position_disconnected)
- [DOCUMENT\_POSITION\_FOLLOWING](axes_lines._internal_.Element.md#document_position_following)
- [DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC](axes_lines._internal_.Element.md#document_position_implementation_specific)
- [DOCUMENT\_POSITION\_PRECEDING](axes_lines._internal_.Element.md#document_position_preceding)
- [DOCUMENT\_TYPE\_NODE](axes_lines._internal_.Element.md#document_type_node)
- [ELEMENT\_NODE](axes_lines._internal_.Element.md#element_node)
- [ENTITY\_NODE](axes_lines._internal_.Element.md#entity_node)
- [ENTITY\_REFERENCE\_NODE](axes_lines._internal_.Element.md#entity_reference_node)
- [NOTATION\_NODE](axes_lines._internal_.Element.md#notation_node)
- [PROCESSING\_INSTRUCTION\_NODE](axes_lines._internal_.Element.md#processing_instruction_node)
- [TEXT\_NODE](axes_lines._internal_.Element.md#text_node)
- [ariaAtomic](axes_lines._internal_.Element.md#ariaatomic)
- [ariaAutoComplete](axes_lines._internal_.Element.md#ariaautocomplete)
- [ariaBusy](axes_lines._internal_.Element.md#ariabusy)
- [ariaChecked](axes_lines._internal_.Element.md#ariachecked)
- [ariaColCount](axes_lines._internal_.Element.md#ariacolcount)
- [ariaColIndex](axes_lines._internal_.Element.md#ariacolindex)
- [ariaColSpan](axes_lines._internal_.Element.md#ariacolspan)
- [ariaCurrent](axes_lines._internal_.Element.md#ariacurrent)
- [ariaDisabled](axes_lines._internal_.Element.md#ariadisabled)
- [ariaExpanded](axes_lines._internal_.Element.md#ariaexpanded)
- [ariaHasPopup](axes_lines._internal_.Element.md#ariahaspopup)
- [ariaHidden](axes_lines._internal_.Element.md#ariahidden)
- [ariaKeyShortcuts](axes_lines._internal_.Element.md#ariakeyshortcuts)
- [ariaLabel](axes_lines._internal_.Element.md#arialabel)
- [ariaLevel](axes_lines._internal_.Element.md#arialevel)
- [ariaLive](axes_lines._internal_.Element.md#arialive)
- [ariaModal](axes_lines._internal_.Element.md#ariamodal)
- [ariaMultiLine](axes_lines._internal_.Element.md#ariamultiline)
- [ariaMultiSelectable](axes_lines._internal_.Element.md#ariamultiselectable)
- [ariaOrientation](axes_lines._internal_.Element.md#ariaorientation)
- [ariaPlaceholder](axes_lines._internal_.Element.md#ariaplaceholder)
- [ariaPosInSet](axes_lines._internal_.Element.md#ariaposinset)
- [ariaPressed](axes_lines._internal_.Element.md#ariapressed)
- [ariaReadOnly](axes_lines._internal_.Element.md#ariareadonly)
- [ariaRequired](axes_lines._internal_.Element.md#ariarequired)
- [ariaRoleDescription](axes_lines._internal_.Element.md#ariaroledescription)
- [ariaRowCount](axes_lines._internal_.Element.md#ariarowcount)
- [ariaRowIndex](axes_lines._internal_.Element.md#ariarowindex)
- [ariaRowSpan](axes_lines._internal_.Element.md#ariarowspan)
- [ariaSelected](axes_lines._internal_.Element.md#ariaselected)
- [ariaSetSize](axes_lines._internal_.Element.md#ariasetsize)
- [ariaSort](axes_lines._internal_.Element.md#ariasort)
- [ariaValueMax](axes_lines._internal_.Element.md#ariavaluemax)
- [ariaValueMin](axes_lines._internal_.Element.md#ariavaluemin)
- [ariaValueNow](axes_lines._internal_.Element.md#ariavaluenow)
- [ariaValueText](axes_lines._internal_.Element.md#ariavaluetext)
- [assignedSlot](axes_lines._internal_.Element.md#assignedslot)
- [attributes](axes_lines._internal_.Element.md#attributes)
- [baseURI](axes_lines._internal_.Element.md#baseuri)
- [childElementCount](axes_lines._internal_.Element.md#childelementcount)
- [childNodes](axes_lines._internal_.Element.md#childnodes)
- [children](axes_lines._internal_.Element.md#children)
- [classList](axes_lines._internal_.Element.md#classlist)
- [className](axes_lines._internal_.Element.md#classname)
- [clientHeight](axes_lines._internal_.Element.md#clientheight)
- [clientLeft](axes_lines._internal_.Element.md#clientleft)
- [clientTop](axes_lines._internal_.Element.md#clienttop)
- [clientWidth](axes_lines._internal_.Element.md#clientwidth)
- [firstChild](axes_lines._internal_.Element.md#firstchild)
- [firstElementChild](axes_lines._internal_.Element.md#firstelementchild)
- [id](axes_lines._internal_.Element.md#id)
- [innerHTML](axes_lines._internal_.Element.md#innerhtml)
- [isConnected](axes_lines._internal_.Element.md#isconnected)
- [lastChild](axes_lines._internal_.Element.md#lastchild)
- [lastElementChild](axes_lines._internal_.Element.md#lastelementchild)
- [localName](axes_lines._internal_.Element.md#localname)
- [namespaceURI](axes_lines._internal_.Element.md#namespaceuri)
- [nextElementSibling](axes_lines._internal_.Element.md#nextelementsibling)
- [nextSibling](axes_lines._internal_.Element.md#nextsibling)
- [nodeName](axes_lines._internal_.Element.md#nodename)
- [nodeType](axes_lines._internal_.Element.md#nodetype)
- [nodeValue](axes_lines._internal_.Element.md#nodevalue)
- [onfullscreenchange](axes_lines._internal_.Element.md#onfullscreenchange)
- [onfullscreenerror](axes_lines._internal_.Element.md#onfullscreenerror)
- [outerHTML](axes_lines._internal_.Element.md#outerhtml)
- [ownerDocument](axes_lines._internal_.Element.md#ownerdocument)
- [parentElement](axes_lines._internal_.Element.md#parentelement)
- [parentNode](axes_lines._internal_.Element.md#parentnode)
- [part](axes_lines._internal_.Element.md#part)
- [prefix](axes_lines._internal_.Element.md#prefix)
- [previousElementSibling](axes_lines._internal_.Element.md#previouselementsibling)
- [previousSibling](axes_lines._internal_.Element.md#previoussibling)
- [scrollHeight](axes_lines._internal_.Element.md#scrollheight)
- [scrollLeft](axes_lines._internal_.Element.md#scrollleft)
- [scrollTop](axes_lines._internal_.Element.md#scrolltop)
- [scrollWidth](axes_lines._internal_.Element.md#scrollwidth)
- [shadowRoot](axes_lines._internal_.Element.md#shadowroot)
- [slot](axes_lines._internal_.Element.md#slot)
- [tagName](axes_lines._internal_.Element.md#tagname)
- [textContent](axes_lines._internal_.Element.md#textcontent)

### Methods

- [addEventListener](axes_lines._internal_.Element.md#addeventlistener)
- [after](axes_lines._internal_.Element.md#after)
- [animate](axes_lines._internal_.Element.md#animate)
- [append](axes_lines._internal_.Element.md#append)
- [appendChild](axes_lines._internal_.Element.md#appendchild)
- [attachShadow](axes_lines._internal_.Element.md#attachshadow)
- [before](axes_lines._internal_.Element.md#before)
- [cloneNode](axes_lines._internal_.Element.md#clonenode)
- [closest](axes_lines._internal_.Element.md#closest)
- [compareDocumentPosition](axes_lines._internal_.Element.md#comparedocumentposition)
- [contains](axes_lines._internal_.Element.md#contains)
- [dispatchEvent](axes_lines._internal_.Element.md#dispatchevent)
- [getAnimations](axes_lines._internal_.Element.md#getanimations)
- [getAttribute](axes_lines._internal_.Element.md#getattribute)
- [getAttributeNS](axes_lines._internal_.Element.md#getattributens)
- [getAttributeNames](axes_lines._internal_.Element.md#getattributenames)
- [getAttributeNode](axes_lines._internal_.Element.md#getattributenode)
- [getAttributeNodeNS](axes_lines._internal_.Element.md#getattributenodens)
- [getBoundingClientRect](axes_lines._internal_.Element.md#getboundingclientrect)
- [getClientRects](axes_lines._internal_.Element.md#getclientrects)
- [getElementsByClassName](axes_lines._internal_.Element.md#getelementsbyclassname)
- [getElementsByTagName](axes_lines._internal_.Element.md#getelementsbytagname)
- [getElementsByTagNameNS](axes_lines._internal_.Element.md#getelementsbytagnamens)
- [getRootNode](axes_lines._internal_.Element.md#getrootnode)
- [hasAttribute](axes_lines._internal_.Element.md#hasattribute)
- [hasAttributeNS](axes_lines._internal_.Element.md#hasattributens)
- [hasAttributes](axes_lines._internal_.Element.md#hasattributes)
- [hasChildNodes](axes_lines._internal_.Element.md#haschildnodes)
- [hasPointerCapture](axes_lines._internal_.Element.md#haspointercapture)
- [insertAdjacentElement](axes_lines._internal_.Element.md#insertadjacentelement)
- [insertAdjacentHTML](axes_lines._internal_.Element.md#insertadjacenthtml)
- [insertAdjacentText](axes_lines._internal_.Element.md#insertadjacenttext)
- [insertBefore](axes_lines._internal_.Element.md#insertbefore)
- [isDefaultNamespace](axes_lines._internal_.Element.md#isdefaultnamespace)
- [isEqualNode](axes_lines._internal_.Element.md#isequalnode)
- [isSameNode](axes_lines._internal_.Element.md#issamenode)
- [lookupNamespaceURI](axes_lines._internal_.Element.md#lookupnamespaceuri)
- [lookupPrefix](axes_lines._internal_.Element.md#lookupprefix)
- [matches](axes_lines._internal_.Element.md#matches)
- [normalize](axes_lines._internal_.Element.md#normalize)
- [prepend](axes_lines._internal_.Element.md#prepend)
- [querySelector](axes_lines._internal_.Element.md#queryselector)
- [querySelectorAll](axes_lines._internal_.Element.md#queryselectorall)
- [releasePointerCapture](axes_lines._internal_.Element.md#releasepointercapture)
- [remove](axes_lines._internal_.Element.md#remove)
- [removeAttribute](axes_lines._internal_.Element.md#removeattribute)
- [removeAttributeNS](axes_lines._internal_.Element.md#removeattributens)
- [removeAttributeNode](axes_lines._internal_.Element.md#removeattributenode)
- [removeChild](axes_lines._internal_.Element.md#removechild)
- [removeEventListener](axes_lines._internal_.Element.md#removeeventlistener)
- [replaceChild](axes_lines._internal_.Element.md#replacechild)
- [replaceChildren](axes_lines._internal_.Element.md#replacechildren)
- [replaceWith](axes_lines._internal_.Element.md#replacewith)
- [requestFullscreen](axes_lines._internal_.Element.md#requestfullscreen)
- [requestPointerLock](axes_lines._internal_.Element.md#requestpointerlock)
- [scroll](axes_lines._internal_.Element.md#scroll)
- [scrollBy](axes_lines._internal_.Element.md#scrollby)
- [scrollIntoView](axes_lines._internal_.Element.md#scrollintoview)
- [scrollTo](axes_lines._internal_.Element.md#scrollto)
- [setAttribute](axes_lines._internal_.Element.md#setattribute)
- [setAttributeNS](axes_lines._internal_.Element.md#setattributens)
- [setAttributeNode](axes_lines._internal_.Element.md#setattributenode)
- [setAttributeNodeNS](axes_lines._internal_.Element.md#setattributenodens)
- [setPointerCapture](axes_lines._internal_.Element.md#setpointercapture)
- [toggleAttribute](axes_lines._internal_.Element.md#toggleattribute)
- [webkitMatchesSelector](axes_lines._internal_.Element.md#webkitmatchesselector)

## Properties

### ATTRIBUTE\_NODE

• `Readonly` **ATTRIBUTE\_NODE**: `number`

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[ATTRIBUTE_NODE](axes_lines._internal_.ParentNode.md#attribute_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10089

___

### CDATA\_SECTION\_NODE

• `Readonly` **CDATA\_SECTION\_NODE**: `number`

node is a CDATASection node.

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[CDATA_SECTION_NODE](axes_lines._internal_.ParentNode.md#cdata_section_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10091

___

### COMMENT\_NODE

• `Readonly` **COMMENT\_NODE**: `number`

node is a Comment node.

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[COMMENT_NODE](axes_lines._internal_.ParentNode.md#comment_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10093

___

### DOCUMENT\_FRAGMENT\_NODE

• `Readonly` **DOCUMENT\_FRAGMENT\_NODE**: `number`

node is a DocumentFragment node.

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[DOCUMENT_FRAGMENT_NODE](axes_lines._internal_.ParentNode.md#document_fragment_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10095

___

### DOCUMENT\_NODE

• `Readonly` **DOCUMENT\_NODE**: `number`

node is a document.

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[DOCUMENT_NODE](axes_lines._internal_.ParentNode.md#document_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10097

___

### DOCUMENT\_POSITION\_CONTAINED\_BY

• `Readonly` **DOCUMENT\_POSITION\_CONTAINED\_BY**: `number`

Set when other is a descendant of node.

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[DOCUMENT_POSITION_CONTAINED_BY](axes_lines._internal_.ParentNode.md#document_position_contained_by)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10099

___

### DOCUMENT\_POSITION\_CONTAINS

• `Readonly` **DOCUMENT\_POSITION\_CONTAINS**: `number`

Set when other is an ancestor of node.

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[DOCUMENT_POSITION_CONTAINS](axes_lines._internal_.ParentNode.md#document_position_contains)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10101

___

### DOCUMENT\_POSITION\_DISCONNECTED

• `Readonly` **DOCUMENT\_POSITION\_DISCONNECTED**: `number`

Set when node and other are not in the same tree.

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[DOCUMENT_POSITION_DISCONNECTED](axes_lines._internal_.ParentNode.md#document_position_disconnected)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10103

___

### DOCUMENT\_POSITION\_FOLLOWING

• `Readonly` **DOCUMENT\_POSITION\_FOLLOWING**: `number`

Set when other is following node.

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[DOCUMENT_POSITION_FOLLOWING](axes_lines._internal_.ParentNode.md#document_position_following)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10105

___

### DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC

• `Readonly` **DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC**: `number`

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC](axes_lines._internal_.ParentNode.md#document_position_implementation_specific)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10106

___

### DOCUMENT\_POSITION\_PRECEDING

• `Readonly` **DOCUMENT\_POSITION\_PRECEDING**: `number`

Set when other is preceding node.

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[DOCUMENT_POSITION_PRECEDING](axes_lines._internal_.ParentNode.md#document_position_preceding)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10108

___

### DOCUMENT\_TYPE\_NODE

• `Readonly` **DOCUMENT\_TYPE\_NODE**: `number`

node is a doctype.

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[DOCUMENT_TYPE_NODE](axes_lines._internal_.ParentNode.md#document_type_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10110

___

### ELEMENT\_NODE

• `Readonly` **ELEMENT\_NODE**: `number`

node is an element.

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[ELEMENT_NODE](axes_lines._internal_.ParentNode.md#element_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10112

___

### ENTITY\_NODE

• `Readonly` **ENTITY\_NODE**: `number`

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[ENTITY_NODE](axes_lines._internal_.ParentNode.md#entity_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10113

___

### ENTITY\_REFERENCE\_NODE

• `Readonly` **ENTITY\_REFERENCE\_NODE**: `number`

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[ENTITY_REFERENCE_NODE](axes_lines._internal_.ParentNode.md#entity_reference_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10114

___

### NOTATION\_NODE

• `Readonly` **NOTATION\_NODE**: `number`

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[NOTATION_NODE](axes_lines._internal_.ParentNode.md#notation_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10115

___

### PROCESSING\_INSTRUCTION\_NODE

• `Readonly` **PROCESSING\_INSTRUCTION\_NODE**: `number`

node is a ProcessingInstruction node.

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[PROCESSING_INSTRUCTION_NODE](axes_lines._internal_.ParentNode.md#processing_instruction_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10117

___

### TEXT\_NODE

• `Readonly` **TEXT\_NODE**: `number`

node is a Text node.

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[TEXT_NODE](axes_lines._internal_.ParentNode.md#text_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10119

___

### ariaAtomic

• **ariaAtomic**: ``null`` \| `string`

#### Inherited from

[ARIAMixin](axes_lines._internal_.ARIAMixin.md).[ariaAtomic](axes_lines._internal_.ARIAMixin.md#ariaatomic)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1924

___

### ariaAutoComplete

• **ariaAutoComplete**: ``null`` \| `string`

#### Inherited from

[ARIAMixin](axes_lines._internal_.ARIAMixin.md).[ariaAutoComplete](axes_lines._internal_.ARIAMixin.md#ariaautocomplete)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1925

___

### ariaBusy

• **ariaBusy**: ``null`` \| `string`

#### Inherited from

[ARIAMixin](axes_lines._internal_.ARIAMixin.md).[ariaBusy](axes_lines._internal_.ARIAMixin.md#ariabusy)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1926

___

### ariaChecked

• **ariaChecked**: ``null`` \| `string`

#### Inherited from

[ARIAMixin](axes_lines._internal_.ARIAMixin.md).[ariaChecked](axes_lines._internal_.ARIAMixin.md#ariachecked)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1927

___

### ariaColCount

• **ariaColCount**: ``null`` \| `string`

#### Inherited from

[ARIAMixin](axes_lines._internal_.ARIAMixin.md).[ariaColCount](axes_lines._internal_.ARIAMixin.md#ariacolcount)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1928

___

### ariaColIndex

• **ariaColIndex**: ``null`` \| `string`

#### Inherited from

[ARIAMixin](axes_lines._internal_.ARIAMixin.md).[ariaColIndex](axes_lines._internal_.ARIAMixin.md#ariacolindex)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1929

___

### ariaColSpan

• **ariaColSpan**: ``null`` \| `string`

#### Inherited from

[ARIAMixin](axes_lines._internal_.ARIAMixin.md).[ariaColSpan](axes_lines._internal_.ARIAMixin.md#ariacolspan)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1930

___

### ariaCurrent

• **ariaCurrent**: ``null`` \| `string`

#### Inherited from

[ARIAMixin](axes_lines._internal_.ARIAMixin.md).[ariaCurrent](axes_lines._internal_.ARIAMixin.md#ariacurrent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1931

___

### ariaDisabled

• **ariaDisabled**: ``null`` \| `string`

#### Inherited from

[ARIAMixin](axes_lines._internal_.ARIAMixin.md).[ariaDisabled](axes_lines._internal_.ARIAMixin.md#ariadisabled)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1932

___

### ariaExpanded

• **ariaExpanded**: ``null`` \| `string`

#### Inherited from

[ARIAMixin](axes_lines._internal_.ARIAMixin.md).[ariaExpanded](axes_lines._internal_.ARIAMixin.md#ariaexpanded)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1933

___

### ariaHasPopup

• **ariaHasPopup**: ``null`` \| `string`

#### Inherited from

[ARIAMixin](axes_lines._internal_.ARIAMixin.md).[ariaHasPopup](axes_lines._internal_.ARIAMixin.md#ariahaspopup)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1934

___

### ariaHidden

• **ariaHidden**: ``null`` \| `string`

#### Inherited from

[ARIAMixin](axes_lines._internal_.ARIAMixin.md).[ariaHidden](axes_lines._internal_.ARIAMixin.md#ariahidden)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1935

___

### ariaKeyShortcuts

• **ariaKeyShortcuts**: ``null`` \| `string`

#### Inherited from

[ARIAMixin](axes_lines._internal_.ARIAMixin.md).[ariaKeyShortcuts](axes_lines._internal_.ARIAMixin.md#ariakeyshortcuts)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1936

___

### ariaLabel

• **ariaLabel**: ``null`` \| `string`

#### Inherited from

[ARIAMixin](axes_lines._internal_.ARIAMixin.md).[ariaLabel](axes_lines._internal_.ARIAMixin.md#arialabel)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1937

___

### ariaLevel

• **ariaLevel**: ``null`` \| `string`

#### Inherited from

[ARIAMixin](axes_lines._internal_.ARIAMixin.md).[ariaLevel](axes_lines._internal_.ARIAMixin.md#arialevel)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1938

___

### ariaLive

• **ariaLive**: ``null`` \| `string`

#### Inherited from

[ARIAMixin](axes_lines._internal_.ARIAMixin.md).[ariaLive](axes_lines._internal_.ARIAMixin.md#arialive)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1939

___

### ariaModal

• **ariaModal**: ``null`` \| `string`

#### Inherited from

[ARIAMixin](axes_lines._internal_.ARIAMixin.md).[ariaModal](axes_lines._internal_.ARIAMixin.md#ariamodal)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1940

___

### ariaMultiLine

• **ariaMultiLine**: ``null`` \| `string`

#### Inherited from

[ARIAMixin](axes_lines._internal_.ARIAMixin.md).[ariaMultiLine](axes_lines._internal_.ARIAMixin.md#ariamultiline)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1941

___

### ariaMultiSelectable

• **ariaMultiSelectable**: ``null`` \| `string`

#### Inherited from

[ARIAMixin](axes_lines._internal_.ARIAMixin.md).[ariaMultiSelectable](axes_lines._internal_.ARIAMixin.md#ariamultiselectable)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1942

___

### ariaOrientation

• **ariaOrientation**: ``null`` \| `string`

#### Inherited from

[ARIAMixin](axes_lines._internal_.ARIAMixin.md).[ariaOrientation](axes_lines._internal_.ARIAMixin.md#ariaorientation)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1943

___

### ariaPlaceholder

• **ariaPlaceholder**: ``null`` \| `string`

#### Inherited from

[ARIAMixin](axes_lines._internal_.ARIAMixin.md).[ariaPlaceholder](axes_lines._internal_.ARIAMixin.md#ariaplaceholder)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1944

___

### ariaPosInSet

• **ariaPosInSet**: ``null`` \| `string`

#### Inherited from

[ARIAMixin](axes_lines._internal_.ARIAMixin.md).[ariaPosInSet](axes_lines._internal_.ARIAMixin.md#ariaposinset)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1945

___

### ariaPressed

• **ariaPressed**: ``null`` \| `string`

#### Inherited from

[ARIAMixin](axes_lines._internal_.ARIAMixin.md).[ariaPressed](axes_lines._internal_.ARIAMixin.md#ariapressed)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1946

___

### ariaReadOnly

• **ariaReadOnly**: ``null`` \| `string`

#### Inherited from

[ARIAMixin](axes_lines._internal_.ARIAMixin.md).[ariaReadOnly](axes_lines._internal_.ARIAMixin.md#ariareadonly)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1947

___

### ariaRequired

• **ariaRequired**: ``null`` \| `string`

#### Inherited from

[ARIAMixin](axes_lines._internal_.ARIAMixin.md).[ariaRequired](axes_lines._internal_.ARIAMixin.md#ariarequired)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1948

___

### ariaRoleDescription

• **ariaRoleDescription**: ``null`` \| `string`

#### Inherited from

[ARIAMixin](axes_lines._internal_.ARIAMixin.md).[ariaRoleDescription](axes_lines._internal_.ARIAMixin.md#ariaroledescription)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1949

___

### ariaRowCount

• **ariaRowCount**: ``null`` \| `string`

#### Inherited from

[ARIAMixin](axes_lines._internal_.ARIAMixin.md).[ariaRowCount](axes_lines._internal_.ARIAMixin.md#ariarowcount)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1950

___

### ariaRowIndex

• **ariaRowIndex**: ``null`` \| `string`

#### Inherited from

[ARIAMixin](axes_lines._internal_.ARIAMixin.md).[ariaRowIndex](axes_lines._internal_.ARIAMixin.md#ariarowindex)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1951

___

### ariaRowSpan

• **ariaRowSpan**: ``null`` \| `string`

#### Inherited from

[ARIAMixin](axes_lines._internal_.ARIAMixin.md).[ariaRowSpan](axes_lines._internal_.ARIAMixin.md#ariarowspan)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1952

___

### ariaSelected

• **ariaSelected**: ``null`` \| `string`

#### Inherited from

[ARIAMixin](axes_lines._internal_.ARIAMixin.md).[ariaSelected](axes_lines._internal_.ARIAMixin.md#ariaselected)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1953

___

### ariaSetSize

• **ariaSetSize**: ``null`` \| `string`

#### Inherited from

[ARIAMixin](axes_lines._internal_.ARIAMixin.md).[ariaSetSize](axes_lines._internal_.ARIAMixin.md#ariasetsize)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1954

___

### ariaSort

• **ariaSort**: ``null`` \| `string`

#### Inherited from

[ARIAMixin](axes_lines._internal_.ARIAMixin.md).[ariaSort](axes_lines._internal_.ARIAMixin.md#ariasort)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1955

___

### ariaValueMax

• **ariaValueMax**: ``null`` \| `string`

#### Inherited from

[ARIAMixin](axes_lines._internal_.ARIAMixin.md).[ariaValueMax](axes_lines._internal_.ARIAMixin.md#ariavaluemax)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1956

___

### ariaValueMin

• **ariaValueMin**: ``null`` \| `string`

#### Inherited from

[ARIAMixin](axes_lines._internal_.ARIAMixin.md).[ariaValueMin](axes_lines._internal_.ARIAMixin.md#ariavaluemin)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1957

___

### ariaValueNow

• **ariaValueNow**: ``null`` \| `string`

#### Inherited from

[ARIAMixin](axes_lines._internal_.ARIAMixin.md).[ariaValueNow](axes_lines._internal_.ARIAMixin.md#ariavaluenow)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1958

___

### ariaValueText

• **ariaValueText**: ``null`` \| `string`

#### Inherited from

[ARIAMixin](axes_lines._internal_.ARIAMixin.md).[ariaValueText](axes_lines._internal_.ARIAMixin.md#ariavaluetext)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1959

___

### assignedSlot

• `Readonly` **assignedSlot**: ``null`` \| [`HTMLSlotElement`](../modules/axes_lines._internal_.md#htmlslotelement)

#### Inherited from

[Slottable](axes_lines._internal_.Slottable.md).[assignedSlot](axes_lines._internal_.Slottable.md#assignedslot)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13595

___

### attributes

• `Readonly` **attributes**: `NamedNodeMap`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4852

___

### baseURI

• `Readonly` **baseURI**: `string`

Returns node's node document's document base URL.

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[baseURI](axes_lines._internal_.ParentNode.md#baseuri)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10042

___

### childElementCount

• `Readonly` **childElementCount**: `number`

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[childElementCount](axes_lines._internal_.ParentNode.md#childelementcount)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10407

___

### childNodes

• `Readonly` **childNodes**: `NodeListOf`<[`ChildNode`](axes_lines._internal_.ChildNode.md)\>

Returns the children.

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[childNodes](axes_lines._internal_.ParentNode.md#childnodes)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10044

___

### children

• `Readonly` **children**: [`HTMLCollection`](../modules/axes_lines._internal_.md#htmlcollection)

Returns the child elements.

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[children](axes_lines._internal_.ParentNode.md#children)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10409

___

### classList

• `Readonly` **classList**: `DOMTokenList`

Allows for manipulation of element's class content attribute as a set of whitespace-separated tokens through a DOMTokenList object.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4854

___

### className

• **className**: `string`

Returns the value of element's class content attribute. Can be set to change it.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4856

___

### clientHeight

• `Readonly` **clientHeight**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4857

___

### clientLeft

• `Readonly` **clientLeft**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4858

___

### clientTop

• `Readonly` **clientTop**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4859

___

### clientWidth

• `Readonly` **clientWidth**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4860

___

### firstChild

• `Readonly` **firstChild**: ``null`` \| [`ChildNode`](axes_lines._internal_.ChildNode.md)

Returns the first child.

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[firstChild](axes_lines._internal_.ParentNode.md#firstchild)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10046

___

### firstElementChild

• `Readonly` **firstElementChild**: ``null`` \| [`Element`](../modules/axes_lines._internal_.md#element)

Returns the first child that is an element, and null otherwise.

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[firstElementChild](axes_lines._internal_.ParentNode.md#firstelementchild)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10411

___

### id

• **id**: `string`

Returns the value of element's id content attribute. Can be set to change it.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4862

___

### innerHTML

• **innerHTML**: `string`

#### Inherited from

[InnerHTML](axes_lines._internal_.InnerHTML.md).[innerHTML](axes_lines._internal_.InnerHTML.md#innerhtml)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8903

___

### isConnected

• `Readonly` **isConnected**: `boolean`

Returns true if node is connected and false otherwise.

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[isConnected](axes_lines._internal_.ParentNode.md#isconnected)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10048

___

### lastChild

• `Readonly` **lastChild**: ``null`` \| [`ChildNode`](axes_lines._internal_.ChildNode.md)

Returns the last child.

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[lastChild](axes_lines._internal_.ParentNode.md#lastchild)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10050

___

### lastElementChild

• `Readonly` **lastElementChild**: ``null`` \| [`Element`](../modules/axes_lines._internal_.md#element)

Returns the last child that is an element, and null otherwise.

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[lastElementChild](axes_lines._internal_.ParentNode.md#lastelementchild)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10413

___

### localName

• `Readonly` **localName**: `string`

Returns the local name.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4864

___

### namespaceURI

• `Readonly` **namespaceURI**: ``null`` \| `string`

Returns the namespace.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4866

___

### nextElementSibling

• `Readonly` **nextElementSibling**: ``null`` \| [`Element`](../modules/axes_lines._internal_.md#element)

Returns the first following sibling that is an element, and null otherwise.

#### Inherited from

[NonDocumentTypeChildNode](axes_lines._internal_.NonDocumentTypeChildNode.md).[nextElementSibling](axes_lines._internal_.NonDocumentTypeChildNode.md#nextelementsibling)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10209

___

### nextSibling

• `Readonly` **nextSibling**: ``null`` \| [`ChildNode`](axes_lines._internal_.ChildNode.md)

Returns the next sibling.

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[nextSibling](axes_lines._internal_.ParentNode.md#nextsibling)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10052

___

### nodeName

• `Readonly` **nodeName**: `string`

Returns a string appropriate for the type of node.

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[nodeName](axes_lines._internal_.ParentNode.md#nodename)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10054

___

### nodeType

• `Readonly` **nodeType**: `number`

Returns the type of node.

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[nodeType](axes_lines._internal_.ParentNode.md#nodetype)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10056

___

### nodeValue

• **nodeValue**: ``null`` \| `string`

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[nodeValue](axes_lines._internal_.ParentNode.md#nodevalue)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10057

___

### onfullscreenchange

• **onfullscreenchange**: ``null`` \| (`this`: [`Element`](../modules/axes_lines._internal_.md#element), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4867

___

### onfullscreenerror

• **onfullscreenerror**: ``null`` \| (`this`: [`Element`](../modules/axes_lines._internal_.md#element), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4868

___

### outerHTML

• **outerHTML**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4869

___

### ownerDocument

• `Readonly` **ownerDocument**: [`Document`](../modules/axes_lines._internal_.md#document)

Returns the node document. Returns null for documents.

#### Overrides

[ParentNode](axes_lines._internal_.ParentNode.md).[ownerDocument](axes_lines._internal_.ParentNode.md#ownerdocument)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4870

___

### parentElement

• `Readonly` **parentElement**: ``null`` \| [`HTMLElement`](../modules/axes_lines._internal_.md#htmlelement)

Returns the parent element.

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[parentElement](axes_lines._internal_.ParentNode.md#parentelement)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10061

___

### parentNode

• `Readonly` **parentNode**: ``null`` \| [`ParentNode`](axes_lines._internal_.ParentNode.md)

Returns the parent.

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[parentNode](axes_lines._internal_.ParentNode.md#parentnode)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10063

___

### part

• `Readonly` **part**: `DOMTokenList`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4871

___

### prefix

• `Readonly` **prefix**: ``null`` \| `string`

Returns the namespace prefix.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4873

___

### previousElementSibling

• `Readonly` **previousElementSibling**: ``null`` \| [`Element`](../modules/axes_lines._internal_.md#element)

Returns the first preceding sibling that is an element, and null otherwise.

#### Inherited from

[NonDocumentTypeChildNode](axes_lines._internal_.NonDocumentTypeChildNode.md).[previousElementSibling](axes_lines._internal_.NonDocumentTypeChildNode.md#previouselementsibling)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10211

___

### previousSibling

• `Readonly` **previousSibling**: ``null`` \| [`ChildNode`](axes_lines._internal_.ChildNode.md)

Returns the previous sibling.

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[previousSibling](axes_lines._internal_.ParentNode.md#previoussibling)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10065

___

### scrollHeight

• `Readonly` **scrollHeight**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4874

___

### scrollLeft

• **scrollLeft**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4875

___

### scrollTop

• **scrollTop**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4876

___

### scrollWidth

• `Readonly` **scrollWidth**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4877

___

### shadowRoot

• `Readonly` **shadowRoot**: ``null`` \| [`ShadowRoot`](../modules/axes_lines._internal_.md#shadowroot)

Returns element's shadow root, if any, and if shadow root's mode is "open", and null otherwise.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4879

___

### slot

• **slot**: `string`

Returns the value of element's slot content attribute. Can be set to change it.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4881

___

### tagName

• `Readonly` **tagName**: `string`

Returns the HTML-uppercased qualified name.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4883

___

### textContent

• **textContent**: ``null`` \| `string`

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[textContent](axes_lines._internal_.ParentNode.md#textcontent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10066

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`ElementEventMap`](axes_lines._internal_.ElementEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`Element`](../modules/axes_lines._internal_.md#element), `ev`: [`ElementEventMap`](axes_lines._internal_.ElementEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](axes_lines._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

[ParentNode](axes_lines._internal_.ParentNode.md).[addEventListener](axes_lines._internal_.ParentNode.md#addeventlistener)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4955

▸ **addEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/axes_lines._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](axes_lines._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

Node.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4956

___

### after

▸ **after**(...`nodes`): `void`

Inserts nodes just after node, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...nodes` | (`string` \| [`Node`](../modules/axes_lines._internal_.md#node))[] |

#### Returns

`void`

#### Inherited from

[ChildNode](axes_lines._internal_.ChildNode.md).[after](axes_lines._internal_.ChildNode.md#after)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3574

___

### animate

▸ **animate**(`keyframes`, `options?`): [`Animation`](../modules/axes_lines._internal_.md#animation)

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyframes` | ``null`` \| [`PropertyIndexedKeyframes`](axes_lines._internal_.PropertyIndexedKeyframes.md) \| [`Keyframe`](axes_lines._internal_.Keyframe.md)[] |
| `options?` | `number` \| [`KeyframeAnimationOptions`](axes_lines._internal_.KeyframeAnimationOptions.md) |

#### Returns

[`Animation`](../modules/axes_lines._internal_.md#animation)

#### Inherited from

[Animatable](axes_lines._internal_.Animatable.md).[animate](axes_lines._internal_.Animatable.md#animate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2047

___

### append

▸ **append**(...`nodes`): `void`

Inserts nodes after the last child of node, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...nodes` | (`string` \| [`Node`](../modules/axes_lines._internal_.md#node))[] |

#### Returns

`void`

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[append](axes_lines._internal_.ParentNode.md#append)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10419

___

### appendChild

▸ **appendChild**<`T`\>(`node`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Node`](../modules/axes_lines._internal_.md#node) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `T` |

#### Returns

`T`

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[appendChild](axes_lines._internal_.ParentNode.md#appendchild)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10067

___

### attachShadow

▸ **attachShadow**(`init`): [`ShadowRoot`](../modules/axes_lines._internal_.md#shadowroot)

Creates a shadow root for element and returns it.

#### Parameters

| Name | Type |
| :------ | :------ |
| `init` | [`ShadowRootInit`](axes_lines._internal_.ShadowRootInit.md) |

#### Returns

[`ShadowRoot`](../modules/axes_lines._internal_.md#shadowroot)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4885

___

### before

▸ **before**(...`nodes`): `void`

Inserts nodes just before node, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...nodes` | (`string` \| [`Node`](../modules/axes_lines._internal_.md#node))[] |

#### Returns

`void`

#### Inherited from

[ChildNode](axes_lines._internal_.ChildNode.md).[before](axes_lines._internal_.ChildNode.md#before)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3580

___

### cloneNode

▸ **cloneNode**(`deep?`): [`Node`](../modules/axes_lines._internal_.md#node)

Returns a copy of node. If deep is true, the copy also includes the node's descendants.

#### Parameters

| Name | Type |
| :------ | :------ |
| `deep?` | `boolean` |

#### Returns

[`Node`](../modules/axes_lines._internal_.md#node)

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[cloneNode](axes_lines._internal_.ParentNode.md#clonenode)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10069

___

### closest

▸ **closest**<`K`\>(`selector`): ``null`` \| [`HTMLElementTagNameMap`](axes_lines._internal_.HTMLElementTagNameMap.md)[`K`]

Returns the first (starting at element) inclusive ancestor that matches selectors, and null otherwise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`HTMLElementTagNameMap`](axes_lines._internal_.HTMLElementTagNameMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `K` |

#### Returns

``null`` \| [`HTMLElementTagNameMap`](axes_lines._internal_.HTMLElementTagNameMap.md)[`K`]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4887

▸ **closest**<`K`\>(`selector`): ``null`` \| [`SVGElementTagNameMap`](axes_lines._internal_.SVGElementTagNameMap.md)[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`SVGElementTagNameMap`](axes_lines._internal_.SVGElementTagNameMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `K` |

#### Returns

``null`` \| [`SVGElementTagNameMap`](axes_lines._internal_.SVGElementTagNameMap.md)[`K`]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4888

▸ **closest**<`E`\>(`selectors`): ``null`` \| `E`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`Element`](../modules/axes_lines._internal_.md#element) = [`Element`](../modules/axes_lines._internal_.md#element) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `string` |

#### Returns

``null`` \| `E`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4889

___

### compareDocumentPosition

▸ **compareDocumentPosition**(`other`): `number`

Returns a bitmask indicating the position of other relative to node.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Node`](../modules/axes_lines._internal_.md#node) |

#### Returns

`number`

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[compareDocumentPosition](axes_lines._internal_.ParentNode.md#comparedocumentposition)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10071

___

### contains

▸ **contains**(`other`): `boolean`

Returns true if other is an inclusive descendant of node, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | ``null`` \| [`Node`](../modules/axes_lines._internal_.md#node) |

#### Returns

`boolean`

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[contains](axes_lines._internal_.ParentNode.md#contains)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10073

___

### dispatchEvent

▸ **dispatchEvent**(`event`): `boolean`

Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Event`](../modules/axes_lines._internal_.md#event) |

#### Returns

`boolean`

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[dispatchEvent](axes_lines._internal_.ParentNode.md#dispatchevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5138

___

### getAnimations

▸ **getAnimations**(`options?`): [`Animation`](../modules/axes_lines._internal_.md#animation)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`GetAnimationsOptions`](axes_lines._internal_.GetAnimationsOptions.md) |

#### Returns

[`Animation`](../modules/axes_lines._internal_.md#animation)[]

#### Inherited from

[Animatable](axes_lines._internal_.Animatable.md).[getAnimations](axes_lines._internal_.Animatable.md#getanimations)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2048

___

### getAttribute

▸ **getAttribute**(`qualifiedName`): ``null`` \| `string`

Returns element's first attribute whose qualified name is qualifiedName, and null if there is no such attribute otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |

#### Returns

``null`` \| `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4891

___

### getAttributeNS

▸ **getAttributeNS**(`namespace`, `localName`): ``null`` \| `string`

Returns element's attribute whose namespace is namespace and local name is localName, and null if there is no such attribute otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |
| `localName` | `string` |

#### Returns

``null`` \| `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4893

___

### getAttributeNames

▸ **getAttributeNames**(): `string`[]

Returns the qualified names of all element's attributes. Can contain duplicates.

#### Returns

`string`[]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4895

___

### getAttributeNode

▸ **getAttributeNode**(`qualifiedName`): ``null`` \| [`Attr`](../modules/axes_lines._internal_.md#attr)

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |

#### Returns

``null`` \| [`Attr`](../modules/axes_lines._internal_.md#attr)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4896

___

### getAttributeNodeNS

▸ **getAttributeNodeNS**(`namespace`, `localName`): ``null`` \| [`Attr`](../modules/axes_lines._internal_.md#attr)

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |
| `localName` | `string` |

#### Returns

``null`` \| [`Attr`](../modules/axes_lines._internal_.md#attr)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4897

___

### getBoundingClientRect

▸ **getBoundingClientRect**(): [`DOMRect`](../modules/axes_lines._internal_.md#domrect)

#### Returns

[`DOMRect`](../modules/axes_lines._internal_.md#domrect)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4898

___

### getClientRects

▸ **getClientRects**(): `DOMRectList`

#### Returns

`DOMRectList`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4899

___

### getElementsByClassName

▸ **getElementsByClassName**(`classNames`): `HTMLCollectionOf`<[`Element`](../modules/axes_lines._internal_.md#element)\>

Returns a HTMLCollection of the elements in the object on which the method was invoked (a document or an element) that have all the classes given by classNames. The classNames argument is interpreted as a space-separated list of classes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `classNames` | `string` |

#### Returns

`HTMLCollectionOf`<[`Element`](../modules/axes_lines._internal_.md#element)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4901

___

### getElementsByTagName

▸ **getElementsByTagName**<`K`\>(`qualifiedName`): `HTMLCollectionOf`<[`HTMLElementTagNameMap`](axes_lines._internal_.HTMLElementTagNameMap.md)[`K`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`HTMLElementTagNameMap`](axes_lines._internal_.HTMLElementTagNameMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `K` |

#### Returns

`HTMLCollectionOf`<[`HTMLElementTagNameMap`](axes_lines._internal_.HTMLElementTagNameMap.md)[`K`]\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4902

▸ **getElementsByTagName**<`K`\>(`qualifiedName`): `HTMLCollectionOf`<[`SVGElementTagNameMap`](axes_lines._internal_.SVGElementTagNameMap.md)[`K`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`SVGElementTagNameMap`](axes_lines._internal_.SVGElementTagNameMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `K` |

#### Returns

`HTMLCollectionOf`<[`SVGElementTagNameMap`](axes_lines._internal_.SVGElementTagNameMap.md)[`K`]\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4903

▸ **getElementsByTagName**(`qualifiedName`): `HTMLCollectionOf`<[`Element`](../modules/axes_lines._internal_.md#element)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |

#### Returns

`HTMLCollectionOf`<[`Element`](../modules/axes_lines._internal_.md#element)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4904

___

### getElementsByTagNameNS

▸ **getElementsByTagNameNS**(`namespaceURI`, `localName`): `HTMLCollectionOf`<[`HTMLElement`](../modules/axes_lines._internal_.md#htmlelement)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespaceURI` | ``"http://www.w3.org/1999/xhtml"`` |
| `localName` | `string` |

#### Returns

`HTMLCollectionOf`<[`HTMLElement`](../modules/axes_lines._internal_.md#htmlelement)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4905

▸ **getElementsByTagNameNS**(`namespaceURI`, `localName`): `HTMLCollectionOf`<[`SVGElement`](../modules/axes_lines._internal_.md#svgelement)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespaceURI` | ``"http://www.w3.org/2000/svg"`` |
| `localName` | `string` |

#### Returns

`HTMLCollectionOf`<[`SVGElement`](../modules/axes_lines._internal_.md#svgelement)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4906

▸ **getElementsByTagNameNS**(`namespace`, `localName`): `HTMLCollectionOf`<[`Element`](../modules/axes_lines._internal_.md#element)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |
| `localName` | `string` |

#### Returns

`HTMLCollectionOf`<[`Element`](../modules/axes_lines._internal_.md#element)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4907

___

### getRootNode

▸ **getRootNode**(`options?`): [`Node`](../modules/axes_lines._internal_.md#node)

Returns node's root.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`GetRootNodeOptions`](axes_lines._internal_.GetRootNodeOptions.md) |

#### Returns

[`Node`](../modules/axes_lines._internal_.md#node)

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[getRootNode](axes_lines._internal_.ParentNode.md#getrootnode)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10075

___

### hasAttribute

▸ **hasAttribute**(`qualifiedName`): `boolean`

Returns true if element has an attribute whose qualified name is qualifiedName, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4909

___

### hasAttributeNS

▸ **hasAttributeNS**(`namespace`, `localName`): `boolean`

Returns true if element has an attribute whose namespace is namespace and local name is localName.

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |
| `localName` | `string` |

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4911

___

### hasAttributes

▸ **hasAttributes**(): `boolean`

Returns true if element has attributes, and false otherwise.

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4913

___

### hasChildNodes

▸ **hasChildNodes**(): `boolean`

Returns whether node has children.

#### Returns

`boolean`

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[hasChildNodes](axes_lines._internal_.ParentNode.md#haschildnodes)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10077

___

### hasPointerCapture

▸ **hasPointerCapture**(`pointerId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pointerId` | `number` |

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4914

___

### insertAdjacentElement

▸ **insertAdjacentElement**(`where`, `element`): ``null`` \| [`Element`](../modules/axes_lines._internal_.md#element)

#### Parameters

| Name | Type |
| :------ | :------ |
| `where` | [`InsertPosition`](../modules/axes_lines._internal_.md#insertposition) |
| `element` | [`Element`](../modules/axes_lines._internal_.md#element) |

#### Returns

``null`` \| [`Element`](../modules/axes_lines._internal_.md#element)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4915

___

### insertAdjacentHTML

▸ **insertAdjacentHTML**(`position`, `text`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | [`InsertPosition`](../modules/axes_lines._internal_.md#insertposition) |
| `text` | `string` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4916

___

### insertAdjacentText

▸ **insertAdjacentText**(`where`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `where` | [`InsertPosition`](../modules/axes_lines._internal_.md#insertposition) |
| `data` | `string` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4917

___

### insertBefore

▸ **insertBefore**<`T`\>(`node`, `child`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Node`](../modules/axes_lines._internal_.md#node) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `T` |
| `child` | ``null`` \| [`Node`](../modules/axes_lines._internal_.md#node) |

#### Returns

`T`

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[insertBefore](axes_lines._internal_.ParentNode.md#insertbefore)

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

[ParentNode](axes_lines._internal_.ParentNode.md).[isDefaultNamespace](axes_lines._internal_.ParentNode.md#isdefaultnamespace)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10079

___

### isEqualNode

▸ **isEqualNode**(`otherNode`): `boolean`

Returns whether node and otherNode have the same properties.

#### Parameters

| Name | Type |
| :------ | :------ |
| `otherNode` | ``null`` \| [`Node`](../modules/axes_lines._internal_.md#node) |

#### Returns

`boolean`

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[isEqualNode](axes_lines._internal_.ParentNode.md#isequalnode)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10081

___

### isSameNode

▸ **isSameNode**(`otherNode`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `otherNode` | ``null`` \| [`Node`](../modules/axes_lines._internal_.md#node) |

#### Returns

`boolean`

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[isSameNode](axes_lines._internal_.ParentNode.md#issamenode)

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

[ParentNode](axes_lines._internal_.ParentNode.md).[lookupNamespaceURI](axes_lines._internal_.ParentNode.md#lookupnamespaceuri)

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

[ParentNode](axes_lines._internal_.ParentNode.md).[lookupPrefix](axes_lines._internal_.ParentNode.md#lookupprefix)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10084

___

### matches

▸ **matches**(`selectors`): `boolean`

Returns true if matching selectors against element's root yields element, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `string` |

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4919

___

### normalize

▸ **normalize**(): `void`

Removes empty exclusive Text nodes and concatenates the data of remaining contiguous exclusive Text nodes into the first of their nodes.

#### Returns

`void`

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[normalize](axes_lines._internal_.ParentNode.md#normalize)

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
| `...nodes` | (`string` \| [`Node`](../modules/axes_lines._internal_.md#node))[] |

#### Returns

`void`

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[prepend](axes_lines._internal_.ParentNode.md#prepend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10425

___

### querySelector

▸ **querySelector**<`K`\>(`selectors`): ``null`` \| [`HTMLElementTagNameMap`](axes_lines._internal_.HTMLElementTagNameMap.md)[`K`]

Returns the first element that is a descendant of node that matches selectors.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`HTMLElementTagNameMap`](axes_lines._internal_.HTMLElementTagNameMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `K` |

#### Returns

``null`` \| [`HTMLElementTagNameMap`](axes_lines._internal_.HTMLElementTagNameMap.md)[`K`]

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[querySelector](axes_lines._internal_.ParentNode.md#queryselector)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10427

▸ **querySelector**<`K`\>(`selectors`): ``null`` \| [`SVGElementTagNameMap`](axes_lines._internal_.SVGElementTagNameMap.md)[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`SVGElementTagNameMap`](axes_lines._internal_.SVGElementTagNameMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `K` |

#### Returns

``null`` \| [`SVGElementTagNameMap`](axes_lines._internal_.SVGElementTagNameMap.md)[`K`]

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[querySelector](axes_lines._internal_.ParentNode.md#queryselector)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10428

▸ **querySelector**<`E`\>(`selectors`): ``null`` \| `E`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`Element`](../modules/axes_lines._internal_.md#element) = [`Element`](../modules/axes_lines._internal_.md#element) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `string` |

#### Returns

``null`` \| `E`

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[querySelector](axes_lines._internal_.ParentNode.md#queryselector)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10429

___

### querySelectorAll

▸ **querySelectorAll**<`K`\>(`selectors`): `NodeListOf`<[`HTMLElementTagNameMap`](axes_lines._internal_.HTMLElementTagNameMap.md)[`K`]\>

Returns all element descendants of node that match selectors.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`HTMLElementTagNameMap`](axes_lines._internal_.HTMLElementTagNameMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `K` |

#### Returns

`NodeListOf`<[`HTMLElementTagNameMap`](axes_lines._internal_.HTMLElementTagNameMap.md)[`K`]\>

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[querySelectorAll](axes_lines._internal_.ParentNode.md#queryselectorall)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10431

▸ **querySelectorAll**<`K`\>(`selectors`): `NodeListOf`<[`SVGElementTagNameMap`](axes_lines._internal_.SVGElementTagNameMap.md)[`K`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`SVGElementTagNameMap`](axes_lines._internal_.SVGElementTagNameMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `K` |

#### Returns

`NodeListOf`<[`SVGElementTagNameMap`](axes_lines._internal_.SVGElementTagNameMap.md)[`K`]\>

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[querySelectorAll](axes_lines._internal_.ParentNode.md#queryselectorall)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10432

▸ **querySelectorAll**<`E`\>(`selectors`): `NodeListOf`<`E`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`Element`](../modules/axes_lines._internal_.md#element) = [`Element`](../modules/axes_lines._internal_.md#element) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `string` |

#### Returns

`NodeListOf`<`E`\>

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[querySelectorAll](axes_lines._internal_.ParentNode.md#queryselectorall)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10433

___

### releasePointerCapture

▸ **releasePointerCapture**(`pointerId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pointerId` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4920

___

### remove

▸ **remove**(): `void`

Removes node.

#### Returns

`void`

#### Inherited from

[ChildNode](axes_lines._internal_.ChildNode.md).[remove](axes_lines._internal_.ChildNode.md#remove)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3582

___

### removeAttribute

▸ **removeAttribute**(`qualifiedName`): `void`

Removes element's first attribute whose qualified name is qualifiedName.

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4922

___

### removeAttributeNS

▸ **removeAttributeNS**(`namespace`, `localName`): `void`

Removes element's attribute whose namespace is namespace and local name is localName.

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |
| `localName` | `string` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4924

___

### removeAttributeNode

▸ **removeAttributeNode**(`attr`): [`Attr`](../modules/axes_lines._internal_.md#attr)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | [`Attr`](../modules/axes_lines._internal_.md#attr) |

#### Returns

[`Attr`](../modules/axes_lines._internal_.md#attr)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4925

___

### removeChild

▸ **removeChild**<`T`\>(`child`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Node`](../modules/axes_lines._internal_.md#node) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | `T` |

#### Returns

`T`

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[removeChild](axes_lines._internal_.ParentNode.md#removechild)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10087

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

Removes the event listener in target's event listener list with the same type, callback, and options.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`ElementEventMap`](axes_lines._internal_.ElementEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`Element`](../modules/axes_lines._internal_.md#element), `ev`: [`ElementEventMap`](axes_lines._internal_.ElementEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](axes_lines._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

[ParentNode](axes_lines._internal_.ParentNode.md).[removeEventListener](axes_lines._internal_.ParentNode.md#removeeventlistener)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4957

▸ **removeEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/axes_lines._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`EventListenerOptions`](axes_lines._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

Node.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4958

___

### replaceChild

▸ **replaceChild**<`T`\>(`node`, `child`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Node`](../modules/axes_lines._internal_.md#node) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../modules/axes_lines._internal_.md#node) |
| `child` | `T` |

#### Returns

`T`

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[replaceChild](axes_lines._internal_.ParentNode.md#replacechild)

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
| `...nodes` | (`string` \| [`Node`](../modules/axes_lines._internal_.md#node))[] |

#### Returns

`void`

#### Inherited from

[ParentNode](axes_lines._internal_.ParentNode.md).[replaceChildren](axes_lines._internal_.ParentNode.md#replacechildren)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10439

___

### replaceWith

▸ **replaceWith**(...`nodes`): `void`

Replaces node with nodes, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...nodes` | (`string` \| [`Node`](../modules/axes_lines._internal_.md#node))[] |

#### Returns

`void`

#### Inherited from

[ChildNode](axes_lines._internal_.ChildNode.md).[replaceWith](axes_lines._internal_.ChildNode.md#replacewith)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3588

___

### requestFullscreen

▸ **requestFullscreen**(`options?`): `Promise`<`void`\>

Displays element fullscreen and resolves promise when done.

When supplied, options's navigationUI member indicates whether showing navigation UI while in fullscreen is preferred or not. If set to "show", navigation simplicity is preferred over screen space, and if set to "hide", more screen space is preferred. User agents are always free to honor user preference over the application's. The default value "auto" indicates no application preference.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`FullscreenOptions`](axes_lines._internal_.FullscreenOptions.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4931

___

### requestPointerLock

▸ **requestPointerLock**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4932

___

### scroll

▸ **scroll**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ScrollToOptions`](axes_lines._internal_.ScrollToOptions.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4933

▸ **scroll**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4934

___

### scrollBy

▸ **scrollBy**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ScrollToOptions`](axes_lines._internal_.ScrollToOptions.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4935

▸ **scrollBy**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4936

___

### scrollIntoView

▸ **scrollIntoView**(`arg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg?` | `boolean` \| [`ScrollIntoViewOptions`](axes_lines._internal_.ScrollIntoViewOptions.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4937

___

### scrollTo

▸ **scrollTo**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ScrollToOptions`](axes_lines._internal_.ScrollToOptions.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4938

▸ **scrollTo**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4939

___

### setAttribute

▸ **setAttribute**(`qualifiedName`, `value`): `void`

Sets the value of element's first attribute whose qualified name is qualifiedName to value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4941

___

### setAttributeNS

▸ **setAttributeNS**(`namespace`, `qualifiedName`, `value`): `void`

Sets the value of element's attribute whose namespace is namespace and local name is localName to value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |
| `qualifiedName` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4943

___

### setAttributeNode

▸ **setAttributeNode**(`attr`): ``null`` \| [`Attr`](../modules/axes_lines._internal_.md#attr)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | [`Attr`](../modules/axes_lines._internal_.md#attr) |

#### Returns

``null`` \| [`Attr`](../modules/axes_lines._internal_.md#attr)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4944

___

### setAttributeNodeNS

▸ **setAttributeNodeNS**(`attr`): ``null`` \| [`Attr`](../modules/axes_lines._internal_.md#attr)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | [`Attr`](../modules/axes_lines._internal_.md#attr) |

#### Returns

``null`` \| [`Attr`](../modules/axes_lines._internal_.md#attr)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4945

___

### setPointerCapture

▸ **setPointerCapture**(`pointerId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pointerId` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4946

___

### toggleAttribute

▸ **toggleAttribute**(`qualifiedName`, `force?`): `boolean`

If force is not given, "toggles" qualifiedName, removing it if it is present and adding it if it is not present. If force is true, adds qualifiedName. If force is false, removes qualifiedName.

Returns true if qualifiedName is now present, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |
| `force?` | `boolean` |

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4952

___

### webkitMatchesSelector

▸ **webkitMatchesSelector**(`selectors`): `boolean`

**`deprecated`** This is a legacy alias of `matches`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `string` |

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4954
