[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / SVGElement

# Interface: SVGElement

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).SVGElement

All of the SVG DOM interfaces that correspond directly to elements in the SVG language derive from the SVGElement interface.

## Hierarchy

- [`Element`](../modules/axes_lines._internal_.md#element)

- [`DocumentAndElementEventHandlers`](axes_lines._internal_.DocumentAndElementEventHandlers.md)

- [`ElementCSSInlineStyle`](axes_lines._internal_.ElementCSSInlineStyle.md)

- [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md)

- [`HTMLOrSVGElement`](axes_lines._internal_.HTMLOrSVGElement.md)

  ↳ **`SVGElement`**

## Table of contents

### Properties

- [ATTRIBUTE\_NODE](axes_lines._internal_.SVGElement.md#attribute_node)
- [CDATA\_SECTION\_NODE](axes_lines._internal_.SVGElement.md#cdata_section_node)
- [COMMENT\_NODE](axes_lines._internal_.SVGElement.md#comment_node)
- [DOCUMENT\_FRAGMENT\_NODE](axes_lines._internal_.SVGElement.md#document_fragment_node)
- [DOCUMENT\_NODE](axes_lines._internal_.SVGElement.md#document_node)
- [DOCUMENT\_POSITION\_CONTAINED\_BY](axes_lines._internal_.SVGElement.md#document_position_contained_by)
- [DOCUMENT\_POSITION\_CONTAINS](axes_lines._internal_.SVGElement.md#document_position_contains)
- [DOCUMENT\_POSITION\_DISCONNECTED](axes_lines._internal_.SVGElement.md#document_position_disconnected)
- [DOCUMENT\_POSITION\_FOLLOWING](axes_lines._internal_.SVGElement.md#document_position_following)
- [DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC](axes_lines._internal_.SVGElement.md#document_position_implementation_specific)
- [DOCUMENT\_POSITION\_PRECEDING](axes_lines._internal_.SVGElement.md#document_position_preceding)
- [DOCUMENT\_TYPE\_NODE](axes_lines._internal_.SVGElement.md#document_type_node)
- [ELEMENT\_NODE](axes_lines._internal_.SVGElement.md#element_node)
- [ENTITY\_NODE](axes_lines._internal_.SVGElement.md#entity_node)
- [ENTITY\_REFERENCE\_NODE](axes_lines._internal_.SVGElement.md#entity_reference_node)
- [NOTATION\_NODE](axes_lines._internal_.SVGElement.md#notation_node)
- [PROCESSING\_INSTRUCTION\_NODE](axes_lines._internal_.SVGElement.md#processing_instruction_node)
- [TEXT\_NODE](axes_lines._internal_.SVGElement.md#text_node)
- [ariaAtomic](axes_lines._internal_.SVGElement.md#ariaatomic)
- [ariaAutoComplete](axes_lines._internal_.SVGElement.md#ariaautocomplete)
- [ariaBusy](axes_lines._internal_.SVGElement.md#ariabusy)
- [ariaChecked](axes_lines._internal_.SVGElement.md#ariachecked)
- [ariaColCount](axes_lines._internal_.SVGElement.md#ariacolcount)
- [ariaColIndex](axes_lines._internal_.SVGElement.md#ariacolindex)
- [ariaColSpan](axes_lines._internal_.SVGElement.md#ariacolspan)
- [ariaCurrent](axes_lines._internal_.SVGElement.md#ariacurrent)
- [ariaDisabled](axes_lines._internal_.SVGElement.md#ariadisabled)
- [ariaExpanded](axes_lines._internal_.SVGElement.md#ariaexpanded)
- [ariaHasPopup](axes_lines._internal_.SVGElement.md#ariahaspopup)
- [ariaHidden](axes_lines._internal_.SVGElement.md#ariahidden)
- [ariaKeyShortcuts](axes_lines._internal_.SVGElement.md#ariakeyshortcuts)
- [ariaLabel](axes_lines._internal_.SVGElement.md#arialabel)
- [ariaLevel](axes_lines._internal_.SVGElement.md#arialevel)
- [ariaLive](axes_lines._internal_.SVGElement.md#arialive)
- [ariaModal](axes_lines._internal_.SVGElement.md#ariamodal)
- [ariaMultiLine](axes_lines._internal_.SVGElement.md#ariamultiline)
- [ariaMultiSelectable](axes_lines._internal_.SVGElement.md#ariamultiselectable)
- [ariaOrientation](axes_lines._internal_.SVGElement.md#ariaorientation)
- [ariaPlaceholder](axes_lines._internal_.SVGElement.md#ariaplaceholder)
- [ariaPosInSet](axes_lines._internal_.SVGElement.md#ariaposinset)
- [ariaPressed](axes_lines._internal_.SVGElement.md#ariapressed)
- [ariaReadOnly](axes_lines._internal_.SVGElement.md#ariareadonly)
- [ariaRequired](axes_lines._internal_.SVGElement.md#ariarequired)
- [ariaRoleDescription](axes_lines._internal_.SVGElement.md#ariaroledescription)
- [ariaRowCount](axes_lines._internal_.SVGElement.md#ariarowcount)
- [ariaRowIndex](axes_lines._internal_.SVGElement.md#ariarowindex)
- [ariaRowSpan](axes_lines._internal_.SVGElement.md#ariarowspan)
- [ariaSelected](axes_lines._internal_.SVGElement.md#ariaselected)
- [ariaSetSize](axes_lines._internal_.SVGElement.md#ariasetsize)
- [ariaSort](axes_lines._internal_.SVGElement.md#ariasort)
- [ariaValueMax](axes_lines._internal_.SVGElement.md#ariavaluemax)
- [ariaValueMin](axes_lines._internal_.SVGElement.md#ariavaluemin)
- [ariaValueNow](axes_lines._internal_.SVGElement.md#ariavaluenow)
- [ariaValueText](axes_lines._internal_.SVGElement.md#ariavaluetext)
- [assignedSlot](axes_lines._internal_.SVGElement.md#assignedslot)
- [attributes](axes_lines._internal_.SVGElement.md#attributes)
- [autofocus](axes_lines._internal_.SVGElement.md#autofocus)
- [baseURI](axes_lines._internal_.SVGElement.md#baseuri)
- [childElementCount](axes_lines._internal_.SVGElement.md#childelementcount)
- [childNodes](axes_lines._internal_.SVGElement.md#childnodes)
- [children](axes_lines._internal_.SVGElement.md#children)
- [classList](axes_lines._internal_.SVGElement.md#classlist)
- [className](axes_lines._internal_.SVGElement.md#classname)
- [clientHeight](axes_lines._internal_.SVGElement.md#clientheight)
- [clientLeft](axes_lines._internal_.SVGElement.md#clientleft)
- [clientTop](axes_lines._internal_.SVGElement.md#clienttop)
- [clientWidth](axes_lines._internal_.SVGElement.md#clientwidth)
- [dataset](axes_lines._internal_.SVGElement.md#dataset)
- [firstChild](axes_lines._internal_.SVGElement.md#firstchild)
- [firstElementChild](axes_lines._internal_.SVGElement.md#firstelementchild)
- [id](axes_lines._internal_.SVGElement.md#id)
- [innerHTML](axes_lines._internal_.SVGElement.md#innerhtml)
- [isConnected](axes_lines._internal_.SVGElement.md#isconnected)
- [lastChild](axes_lines._internal_.SVGElement.md#lastchild)
- [lastElementChild](axes_lines._internal_.SVGElement.md#lastelementchild)
- [localName](axes_lines._internal_.SVGElement.md#localname)
- [namespaceURI](axes_lines._internal_.SVGElement.md#namespaceuri)
- [nextElementSibling](axes_lines._internal_.SVGElement.md#nextelementsibling)
- [nextSibling](axes_lines._internal_.SVGElement.md#nextsibling)
- [nodeName](axes_lines._internal_.SVGElement.md#nodename)
- [nodeType](axes_lines._internal_.SVGElement.md#nodetype)
- [nodeValue](axes_lines._internal_.SVGElement.md#nodevalue)
- [nonce](axes_lines._internal_.SVGElement.md#nonce)
- [onabort](axes_lines._internal_.SVGElement.md#onabort)
- [onanimationcancel](axes_lines._internal_.SVGElement.md#onanimationcancel)
- [onanimationend](axes_lines._internal_.SVGElement.md#onanimationend)
- [onanimationiteration](axes_lines._internal_.SVGElement.md#onanimationiteration)
- [onanimationstart](axes_lines._internal_.SVGElement.md#onanimationstart)
- [onauxclick](axes_lines._internal_.SVGElement.md#onauxclick)
- [onblur](axes_lines._internal_.SVGElement.md#onblur)
- [oncanplay](axes_lines._internal_.SVGElement.md#oncanplay)
- [oncanplaythrough](axes_lines._internal_.SVGElement.md#oncanplaythrough)
- [onchange](axes_lines._internal_.SVGElement.md#onchange)
- [onclick](axes_lines._internal_.SVGElement.md#onclick)
- [onclose](axes_lines._internal_.SVGElement.md#onclose)
- [oncontextmenu](axes_lines._internal_.SVGElement.md#oncontextmenu)
- [oncopy](axes_lines._internal_.SVGElement.md#oncopy)
- [oncuechange](axes_lines._internal_.SVGElement.md#oncuechange)
- [oncut](axes_lines._internal_.SVGElement.md#oncut)
- [ondblclick](axes_lines._internal_.SVGElement.md#ondblclick)
- [ondrag](axes_lines._internal_.SVGElement.md#ondrag)
- [ondragend](axes_lines._internal_.SVGElement.md#ondragend)
- [ondragenter](axes_lines._internal_.SVGElement.md#ondragenter)
- [ondragleave](axes_lines._internal_.SVGElement.md#ondragleave)
- [ondragover](axes_lines._internal_.SVGElement.md#ondragover)
- [ondragstart](axes_lines._internal_.SVGElement.md#ondragstart)
- [ondrop](axes_lines._internal_.SVGElement.md#ondrop)
- [ondurationchange](axes_lines._internal_.SVGElement.md#ondurationchange)
- [onemptied](axes_lines._internal_.SVGElement.md#onemptied)
- [onended](axes_lines._internal_.SVGElement.md#onended)
- [onerror](axes_lines._internal_.SVGElement.md#onerror)
- [onfocus](axes_lines._internal_.SVGElement.md#onfocus)
- [onformdata](axes_lines._internal_.SVGElement.md#onformdata)
- [onfullscreenchange](axes_lines._internal_.SVGElement.md#onfullscreenchange)
- [onfullscreenerror](axes_lines._internal_.SVGElement.md#onfullscreenerror)
- [ongotpointercapture](axes_lines._internal_.SVGElement.md#ongotpointercapture)
- [oninput](axes_lines._internal_.SVGElement.md#oninput)
- [oninvalid](axes_lines._internal_.SVGElement.md#oninvalid)
- [onkeydown](axes_lines._internal_.SVGElement.md#onkeydown)
- [onkeypress](axes_lines._internal_.SVGElement.md#onkeypress)
- [onkeyup](axes_lines._internal_.SVGElement.md#onkeyup)
- [onload](axes_lines._internal_.SVGElement.md#onload)
- [onloadeddata](axes_lines._internal_.SVGElement.md#onloadeddata)
- [onloadedmetadata](axes_lines._internal_.SVGElement.md#onloadedmetadata)
- [onloadstart](axes_lines._internal_.SVGElement.md#onloadstart)
- [onlostpointercapture](axes_lines._internal_.SVGElement.md#onlostpointercapture)
- [onmousedown](axes_lines._internal_.SVGElement.md#onmousedown)
- [onmouseenter](axes_lines._internal_.SVGElement.md#onmouseenter)
- [onmouseleave](axes_lines._internal_.SVGElement.md#onmouseleave)
- [onmousemove](axes_lines._internal_.SVGElement.md#onmousemove)
- [onmouseout](axes_lines._internal_.SVGElement.md#onmouseout)
- [onmouseover](axes_lines._internal_.SVGElement.md#onmouseover)
- [onmouseup](axes_lines._internal_.SVGElement.md#onmouseup)
- [onpaste](axes_lines._internal_.SVGElement.md#onpaste)
- [onpause](axes_lines._internal_.SVGElement.md#onpause)
- [onplay](axes_lines._internal_.SVGElement.md#onplay)
- [onplaying](axes_lines._internal_.SVGElement.md#onplaying)
- [onpointercancel](axes_lines._internal_.SVGElement.md#onpointercancel)
- [onpointerdown](axes_lines._internal_.SVGElement.md#onpointerdown)
- [onpointerenter](axes_lines._internal_.SVGElement.md#onpointerenter)
- [onpointerleave](axes_lines._internal_.SVGElement.md#onpointerleave)
- [onpointermove](axes_lines._internal_.SVGElement.md#onpointermove)
- [onpointerout](axes_lines._internal_.SVGElement.md#onpointerout)
- [onpointerover](axes_lines._internal_.SVGElement.md#onpointerover)
- [onpointerup](axes_lines._internal_.SVGElement.md#onpointerup)
- [onprogress](axes_lines._internal_.SVGElement.md#onprogress)
- [onratechange](axes_lines._internal_.SVGElement.md#onratechange)
- [onreset](axes_lines._internal_.SVGElement.md#onreset)
- [onresize](axes_lines._internal_.SVGElement.md#onresize)
- [onscroll](axes_lines._internal_.SVGElement.md#onscroll)
- [onsecuritypolicyviolation](axes_lines._internal_.SVGElement.md#onsecuritypolicyviolation)
- [onseeked](axes_lines._internal_.SVGElement.md#onseeked)
- [onseeking](axes_lines._internal_.SVGElement.md#onseeking)
- [onselect](axes_lines._internal_.SVGElement.md#onselect)
- [onselectionchange](axes_lines._internal_.SVGElement.md#onselectionchange)
- [onselectstart](axes_lines._internal_.SVGElement.md#onselectstart)
- [onslotchange](axes_lines._internal_.SVGElement.md#onslotchange)
- [onstalled](axes_lines._internal_.SVGElement.md#onstalled)
- [onsubmit](axes_lines._internal_.SVGElement.md#onsubmit)
- [onsuspend](axes_lines._internal_.SVGElement.md#onsuspend)
- [ontimeupdate](axes_lines._internal_.SVGElement.md#ontimeupdate)
- [ontoggle](axes_lines._internal_.SVGElement.md#ontoggle)
- [ontouchcancel](axes_lines._internal_.SVGElement.md#ontouchcancel)
- [ontouchend](axes_lines._internal_.SVGElement.md#ontouchend)
- [ontouchmove](axes_lines._internal_.SVGElement.md#ontouchmove)
- [ontouchstart](axes_lines._internal_.SVGElement.md#ontouchstart)
- [ontransitioncancel](axes_lines._internal_.SVGElement.md#ontransitioncancel)
- [ontransitionend](axes_lines._internal_.SVGElement.md#ontransitionend)
- [ontransitionrun](axes_lines._internal_.SVGElement.md#ontransitionrun)
- [ontransitionstart](axes_lines._internal_.SVGElement.md#ontransitionstart)
- [onvolumechange](axes_lines._internal_.SVGElement.md#onvolumechange)
- [onwaiting](axes_lines._internal_.SVGElement.md#onwaiting)
- [onwebkitanimationend](axes_lines._internal_.SVGElement.md#onwebkitanimationend)
- [onwebkitanimationiteration](axes_lines._internal_.SVGElement.md#onwebkitanimationiteration)
- [onwebkitanimationstart](axes_lines._internal_.SVGElement.md#onwebkitanimationstart)
- [onwebkittransitionend](axes_lines._internal_.SVGElement.md#onwebkittransitionend)
- [onwheel](axes_lines._internal_.SVGElement.md#onwheel)
- [outerHTML](axes_lines._internal_.SVGElement.md#outerhtml)
- [ownerDocument](axes_lines._internal_.SVGElement.md#ownerdocument)
- [ownerSVGElement](axes_lines._internal_.SVGElement.md#ownersvgelement)
- [parentElement](axes_lines._internal_.SVGElement.md#parentelement)
- [parentNode](axes_lines._internal_.SVGElement.md#parentnode)
- [part](axes_lines._internal_.SVGElement.md#part)
- [prefix](axes_lines._internal_.SVGElement.md#prefix)
- [previousElementSibling](axes_lines._internal_.SVGElement.md#previouselementsibling)
- [previousSibling](axes_lines._internal_.SVGElement.md#previoussibling)
- [scrollHeight](axes_lines._internal_.SVGElement.md#scrollheight)
- [scrollLeft](axes_lines._internal_.SVGElement.md#scrollleft)
- [scrollTop](axes_lines._internal_.SVGElement.md#scrolltop)
- [scrollWidth](axes_lines._internal_.SVGElement.md#scrollwidth)
- [shadowRoot](axes_lines._internal_.SVGElement.md#shadowroot)
- [slot](axes_lines._internal_.SVGElement.md#slot)
- [style](axes_lines._internal_.SVGElement.md#style)
- [tabIndex](axes_lines._internal_.SVGElement.md#tabindex)
- [tagName](axes_lines._internal_.SVGElement.md#tagname)
- [textContent](axes_lines._internal_.SVGElement.md#textcontent)
- [viewportElement](axes_lines._internal_.SVGElement.md#viewportelement)

### Methods

- [addEventListener](axes_lines._internal_.SVGElement.md#addeventlistener)
- [after](axes_lines._internal_.SVGElement.md#after)
- [animate](axes_lines._internal_.SVGElement.md#animate)
- [append](axes_lines._internal_.SVGElement.md#append)
- [appendChild](axes_lines._internal_.SVGElement.md#appendchild)
- [attachShadow](axes_lines._internal_.SVGElement.md#attachshadow)
- [before](axes_lines._internal_.SVGElement.md#before)
- [blur](axes_lines._internal_.SVGElement.md#blur)
- [cloneNode](axes_lines._internal_.SVGElement.md#clonenode)
- [closest](axes_lines._internal_.SVGElement.md#closest)
- [compareDocumentPosition](axes_lines._internal_.SVGElement.md#comparedocumentposition)
- [contains](axes_lines._internal_.SVGElement.md#contains)
- [dispatchEvent](axes_lines._internal_.SVGElement.md#dispatchevent)
- [focus](axes_lines._internal_.SVGElement.md#focus)
- [getAnimations](axes_lines._internal_.SVGElement.md#getanimations)
- [getAttribute](axes_lines._internal_.SVGElement.md#getattribute)
- [getAttributeNS](axes_lines._internal_.SVGElement.md#getattributens)
- [getAttributeNames](axes_lines._internal_.SVGElement.md#getattributenames)
- [getAttributeNode](axes_lines._internal_.SVGElement.md#getattributenode)
- [getAttributeNodeNS](axes_lines._internal_.SVGElement.md#getattributenodens)
- [getBoundingClientRect](axes_lines._internal_.SVGElement.md#getboundingclientrect)
- [getClientRects](axes_lines._internal_.SVGElement.md#getclientrects)
- [getElementsByClassName](axes_lines._internal_.SVGElement.md#getelementsbyclassname)
- [getElementsByTagName](axes_lines._internal_.SVGElement.md#getelementsbytagname)
- [getElementsByTagNameNS](axes_lines._internal_.SVGElement.md#getelementsbytagnamens)
- [getRootNode](axes_lines._internal_.SVGElement.md#getrootnode)
- [hasAttribute](axes_lines._internal_.SVGElement.md#hasattribute)
- [hasAttributeNS](axes_lines._internal_.SVGElement.md#hasattributens)
- [hasAttributes](axes_lines._internal_.SVGElement.md#hasattributes)
- [hasChildNodes](axes_lines._internal_.SVGElement.md#haschildnodes)
- [hasPointerCapture](axes_lines._internal_.SVGElement.md#haspointercapture)
- [insertAdjacentElement](axes_lines._internal_.SVGElement.md#insertadjacentelement)
- [insertAdjacentHTML](axes_lines._internal_.SVGElement.md#insertadjacenthtml)
- [insertAdjacentText](axes_lines._internal_.SVGElement.md#insertadjacenttext)
- [insertBefore](axes_lines._internal_.SVGElement.md#insertbefore)
- [isDefaultNamespace](axes_lines._internal_.SVGElement.md#isdefaultnamespace)
- [isEqualNode](axes_lines._internal_.SVGElement.md#isequalnode)
- [isSameNode](axes_lines._internal_.SVGElement.md#issamenode)
- [lookupNamespaceURI](axes_lines._internal_.SVGElement.md#lookupnamespaceuri)
- [lookupPrefix](axes_lines._internal_.SVGElement.md#lookupprefix)
- [matches](axes_lines._internal_.SVGElement.md#matches)
- [normalize](axes_lines._internal_.SVGElement.md#normalize)
- [prepend](axes_lines._internal_.SVGElement.md#prepend)
- [querySelector](axes_lines._internal_.SVGElement.md#queryselector)
- [querySelectorAll](axes_lines._internal_.SVGElement.md#queryselectorall)
- [releasePointerCapture](axes_lines._internal_.SVGElement.md#releasepointercapture)
- [remove](axes_lines._internal_.SVGElement.md#remove)
- [removeAttribute](axes_lines._internal_.SVGElement.md#removeattribute)
- [removeAttributeNS](axes_lines._internal_.SVGElement.md#removeattributens)
- [removeAttributeNode](axes_lines._internal_.SVGElement.md#removeattributenode)
- [removeChild](axes_lines._internal_.SVGElement.md#removechild)
- [removeEventListener](axes_lines._internal_.SVGElement.md#removeeventlistener)
- [replaceChild](axes_lines._internal_.SVGElement.md#replacechild)
- [replaceChildren](axes_lines._internal_.SVGElement.md#replacechildren)
- [replaceWith](axes_lines._internal_.SVGElement.md#replacewith)
- [requestFullscreen](axes_lines._internal_.SVGElement.md#requestfullscreen)
- [requestPointerLock](axes_lines._internal_.SVGElement.md#requestpointerlock)
- [scroll](axes_lines._internal_.SVGElement.md#scroll)
- [scrollBy](axes_lines._internal_.SVGElement.md#scrollby)
- [scrollIntoView](axes_lines._internal_.SVGElement.md#scrollintoview)
- [scrollTo](axes_lines._internal_.SVGElement.md#scrollto)
- [setAttribute](axes_lines._internal_.SVGElement.md#setattribute)
- [setAttributeNS](axes_lines._internal_.SVGElement.md#setattributens)
- [setAttributeNode](axes_lines._internal_.SVGElement.md#setattributenode)
- [setAttributeNodeNS](axes_lines._internal_.SVGElement.md#setattributenodens)
- [setPointerCapture](axes_lines._internal_.SVGElement.md#setpointercapture)
- [toggleAttribute](axes_lines._internal_.SVGElement.md#toggleattribute)
- [webkitMatchesSelector](axes_lines._internal_.SVGElement.md#webkitmatchesselector)

## Properties

### ATTRIBUTE\_NODE

• `Readonly` **ATTRIBUTE\_NODE**: `number`

#### Inherited from

Element.ATTRIBUTE\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10089

___

### CDATA\_SECTION\_NODE

• `Readonly` **CDATA\_SECTION\_NODE**: `number`

node is a CDATASection node.

#### Inherited from

Element.CDATA\_SECTION\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10091

___

### COMMENT\_NODE

• `Readonly` **COMMENT\_NODE**: `number`

node is a Comment node.

#### Inherited from

Element.COMMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10093

___

### DOCUMENT\_FRAGMENT\_NODE

• `Readonly` **DOCUMENT\_FRAGMENT\_NODE**: `number`

node is a DocumentFragment node.

#### Inherited from

Element.DOCUMENT\_FRAGMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10095

___

### DOCUMENT\_NODE

• `Readonly` **DOCUMENT\_NODE**: `number`

node is a document.

#### Inherited from

Element.DOCUMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10097

___

### DOCUMENT\_POSITION\_CONTAINED\_BY

• `Readonly` **DOCUMENT\_POSITION\_CONTAINED\_BY**: `number`

Set when other is a descendant of node.

#### Inherited from

Element.DOCUMENT\_POSITION\_CONTAINED\_BY

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10099

___

### DOCUMENT\_POSITION\_CONTAINS

• `Readonly` **DOCUMENT\_POSITION\_CONTAINS**: `number`

Set when other is an ancestor of node.

#### Inherited from

Element.DOCUMENT\_POSITION\_CONTAINS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10101

___

### DOCUMENT\_POSITION\_DISCONNECTED

• `Readonly` **DOCUMENT\_POSITION\_DISCONNECTED**: `number`

Set when node and other are not in the same tree.

#### Inherited from

Element.DOCUMENT\_POSITION\_DISCONNECTED

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10103

___

### DOCUMENT\_POSITION\_FOLLOWING

• `Readonly` **DOCUMENT\_POSITION\_FOLLOWING**: `number`

Set when other is following node.

#### Inherited from

Element.DOCUMENT\_POSITION\_FOLLOWING

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10105

___

### DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC

• `Readonly` **DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC**: `number`

#### Inherited from

Element.DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10106

___

### DOCUMENT\_POSITION\_PRECEDING

• `Readonly` **DOCUMENT\_POSITION\_PRECEDING**: `number`

Set when other is preceding node.

#### Inherited from

Element.DOCUMENT\_POSITION\_PRECEDING

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10108

___

### DOCUMENT\_TYPE\_NODE

• `Readonly` **DOCUMENT\_TYPE\_NODE**: `number`

node is a doctype.

#### Inherited from

Element.DOCUMENT\_TYPE\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10110

___

### ELEMENT\_NODE

• `Readonly` **ELEMENT\_NODE**: `number`

node is an element.

#### Inherited from

Element.ELEMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10112

___

### ENTITY\_NODE

• `Readonly` **ENTITY\_NODE**: `number`

#### Inherited from

Element.ENTITY\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10113

___

### ENTITY\_REFERENCE\_NODE

• `Readonly` **ENTITY\_REFERENCE\_NODE**: `number`

#### Inherited from

Element.ENTITY\_REFERENCE\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10114

___

### NOTATION\_NODE

• `Readonly` **NOTATION\_NODE**: `number`

#### Inherited from

Element.NOTATION\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10115

___

### PROCESSING\_INSTRUCTION\_NODE

• `Readonly` **PROCESSING\_INSTRUCTION\_NODE**: `number`

node is a ProcessingInstruction node.

#### Inherited from

Element.PROCESSING\_INSTRUCTION\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10117

___

### TEXT\_NODE

• `Readonly` **TEXT\_NODE**: `number`

node is a Text node.

#### Inherited from

Element.TEXT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10119

___

### ariaAtomic

• **ariaAtomic**: ``null`` \| `string`

#### Inherited from

Element.ariaAtomic

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1924

___

### ariaAutoComplete

• **ariaAutoComplete**: ``null`` \| `string`

#### Inherited from

Element.ariaAutoComplete

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1925

___

### ariaBusy

• **ariaBusy**: ``null`` \| `string`

#### Inherited from

Element.ariaBusy

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1926

___

### ariaChecked

• **ariaChecked**: ``null`` \| `string`

#### Inherited from

Element.ariaChecked

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1927

___

### ariaColCount

• **ariaColCount**: ``null`` \| `string`

#### Inherited from

Element.ariaColCount

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1928

___

### ariaColIndex

• **ariaColIndex**: ``null`` \| `string`

#### Inherited from

Element.ariaColIndex

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1929

___

### ariaColSpan

• **ariaColSpan**: ``null`` \| `string`

#### Inherited from

Element.ariaColSpan

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1930

___

### ariaCurrent

• **ariaCurrent**: ``null`` \| `string`

#### Inherited from

Element.ariaCurrent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1931

___

### ariaDisabled

• **ariaDisabled**: ``null`` \| `string`

#### Inherited from

Element.ariaDisabled

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1932

___

### ariaExpanded

• **ariaExpanded**: ``null`` \| `string`

#### Inherited from

Element.ariaExpanded

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1933

___

### ariaHasPopup

• **ariaHasPopup**: ``null`` \| `string`

#### Inherited from

Element.ariaHasPopup

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1934

___

### ariaHidden

• **ariaHidden**: ``null`` \| `string`

#### Inherited from

Element.ariaHidden

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1935

___

### ariaKeyShortcuts

• **ariaKeyShortcuts**: ``null`` \| `string`

#### Inherited from

Element.ariaKeyShortcuts

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1936

___

### ariaLabel

• **ariaLabel**: ``null`` \| `string`

#### Inherited from

Element.ariaLabel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1937

___

### ariaLevel

• **ariaLevel**: ``null`` \| `string`

#### Inherited from

Element.ariaLevel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1938

___

### ariaLive

• **ariaLive**: ``null`` \| `string`

#### Inherited from

Element.ariaLive

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1939

___

### ariaModal

• **ariaModal**: ``null`` \| `string`

#### Inherited from

Element.ariaModal

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1940

___

### ariaMultiLine

• **ariaMultiLine**: ``null`` \| `string`

#### Inherited from

Element.ariaMultiLine

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1941

___

### ariaMultiSelectable

• **ariaMultiSelectable**: ``null`` \| `string`

#### Inherited from

Element.ariaMultiSelectable

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1942

___

### ariaOrientation

• **ariaOrientation**: ``null`` \| `string`

#### Inherited from

Element.ariaOrientation

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1943

___

### ariaPlaceholder

• **ariaPlaceholder**: ``null`` \| `string`

#### Inherited from

Element.ariaPlaceholder

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1944

___

### ariaPosInSet

• **ariaPosInSet**: ``null`` \| `string`

#### Inherited from

Element.ariaPosInSet

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1945

___

### ariaPressed

• **ariaPressed**: ``null`` \| `string`

#### Inherited from

Element.ariaPressed

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1946

___

### ariaReadOnly

• **ariaReadOnly**: ``null`` \| `string`

#### Inherited from

Element.ariaReadOnly

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1947

___

### ariaRequired

• **ariaRequired**: ``null`` \| `string`

#### Inherited from

Element.ariaRequired

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1948

___

### ariaRoleDescription

• **ariaRoleDescription**: ``null`` \| `string`

#### Inherited from

Element.ariaRoleDescription

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1949

___

### ariaRowCount

• **ariaRowCount**: ``null`` \| `string`

#### Inherited from

Element.ariaRowCount

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1950

___

### ariaRowIndex

• **ariaRowIndex**: ``null`` \| `string`

#### Inherited from

Element.ariaRowIndex

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1951

___

### ariaRowSpan

• **ariaRowSpan**: ``null`` \| `string`

#### Inherited from

Element.ariaRowSpan

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1952

___

### ariaSelected

• **ariaSelected**: ``null`` \| `string`

#### Inherited from

Element.ariaSelected

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1953

___

### ariaSetSize

• **ariaSetSize**: ``null`` \| `string`

#### Inherited from

Element.ariaSetSize

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1954

___

### ariaSort

• **ariaSort**: ``null`` \| `string`

#### Inherited from

Element.ariaSort

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1955

___

### ariaValueMax

• **ariaValueMax**: ``null`` \| `string`

#### Inherited from

Element.ariaValueMax

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1956

___

### ariaValueMin

• **ariaValueMin**: ``null`` \| `string`

#### Inherited from

Element.ariaValueMin

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1957

___

### ariaValueNow

• **ariaValueNow**: ``null`` \| `string`

#### Inherited from

Element.ariaValueNow

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1958

___

### ariaValueText

• **ariaValueText**: ``null`` \| `string`

#### Inherited from

Element.ariaValueText

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1959

___

### assignedSlot

• `Readonly` **assignedSlot**: ``null`` \| [`HTMLSlotElement`](../modules/axes_lines._internal_.md#htmlslotelement)

#### Inherited from

Element.assignedSlot

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13595

___

### attributes

• `Readonly` **attributes**: `NamedNodeMap`

#### Inherited from

Element.attributes

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4852

___

### autofocus

• **autofocus**: `boolean`

#### Inherited from

[HTMLOrSVGElement](axes_lines._internal_.HTMLOrSVGElement.md).[autofocus](axes_lines._internal_.HTMLOrSVGElement.md#autofocus)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7547

___

### baseURI

• `Readonly` **baseURI**: `string`

Returns node's node document's document base URL.

#### Inherited from

Element.baseURI

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10042

___

### childElementCount

• `Readonly` **childElementCount**: `number`

#### Inherited from

Element.childElementCount

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10407

___

### childNodes

• `Readonly` **childNodes**: `NodeListOf`<[`ChildNode`](axes_lines._internal_.ChildNode.md)\>

Returns the children.

#### Inherited from

Element.childNodes

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10044

___

### children

• `Readonly` **children**: [`HTMLCollection`](../modules/axes_lines._internal_.md#htmlcollection)

Returns the child elements.

#### Inherited from

Element.children

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10409

___

### classList

• `Readonly` **classList**: `DOMTokenList`

Allows for manipulation of element's class content attribute as a set of whitespace-separated tokens through a DOMTokenList object.

#### Inherited from

Element.classList

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4854

___

### className

• `Readonly` **className**: `any`

**`deprecated`**

#### Overrides

Element.className

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11963

___

### clientHeight

• `Readonly` **clientHeight**: `number`

#### Inherited from

Element.clientHeight

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4857

___

### clientLeft

• `Readonly` **clientLeft**: `number`

#### Inherited from

Element.clientLeft

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4858

___

### clientTop

• `Readonly` **clientTop**: `number`

#### Inherited from

Element.clientTop

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4859

___

### clientWidth

• `Readonly` **clientWidth**: `number`

#### Inherited from

Element.clientWidth

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4860

___

### dataset

• `Readonly` **dataset**: [`DOMStringMap`](../modules/axes_lines._internal_.md#domstringmap)

#### Inherited from

[HTMLOrSVGElement](axes_lines._internal_.HTMLOrSVGElement.md).[dataset](axes_lines._internal_.HTMLOrSVGElement.md#dataset)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7548

___

### firstChild

• `Readonly` **firstChild**: ``null`` \| [`ChildNode`](axes_lines._internal_.ChildNode.md)

Returns the first child.

#### Inherited from

Element.firstChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10046

___

### firstElementChild

• `Readonly` **firstElementChild**: ``null`` \| [`Element`](../modules/axes_lines._internal_.md#element)

Returns the first child that is an element, and null otherwise.

#### Inherited from

Element.firstElementChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10411

___

### id

• **id**: `string`

Returns the value of element's id content attribute. Can be set to change it.

#### Inherited from

Element.id

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4862

___

### innerHTML

• **innerHTML**: `string`

#### Inherited from

Element.innerHTML

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8903

___

### isConnected

• `Readonly` **isConnected**: `boolean`

Returns true if node is connected and false otherwise.

#### Inherited from

Element.isConnected

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10048

___

### lastChild

• `Readonly` **lastChild**: ``null`` \| [`ChildNode`](axes_lines._internal_.ChildNode.md)

Returns the last child.

#### Inherited from

Element.lastChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10050

___

### lastElementChild

• `Readonly` **lastElementChild**: ``null`` \| [`Element`](../modules/axes_lines._internal_.md#element)

Returns the last child that is an element, and null otherwise.

#### Inherited from

Element.lastElementChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10413

___

### localName

• `Readonly` **localName**: `string`

Returns the local name.

#### Inherited from

Element.localName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4864

___

### namespaceURI

• `Readonly` **namespaceURI**: ``null`` \| `string`

Returns the namespace.

#### Inherited from

Element.namespaceURI

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4866

___

### nextElementSibling

• `Readonly` **nextElementSibling**: ``null`` \| [`Element`](../modules/axes_lines._internal_.md#element)

Returns the first following sibling that is an element, and null otherwise.

#### Inherited from

Element.nextElementSibling

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10209

___

### nextSibling

• `Readonly` **nextSibling**: ``null`` \| [`ChildNode`](axes_lines._internal_.ChildNode.md)

Returns the next sibling.

#### Inherited from

Element.nextSibling

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10052

___

### nodeName

• `Readonly` **nodeName**: `string`

Returns a string appropriate for the type of node.

#### Inherited from

Element.nodeName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10054

___

### nodeType

• `Readonly` **nodeType**: `number`

Returns the type of node.

#### Inherited from

Element.nodeType

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10056

___

### nodeValue

• **nodeValue**: ``null`` \| `string`

#### Inherited from

Element.nodeValue

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10057

___

### nonce

• `Optional` **nonce**: `string`

#### Inherited from

[HTMLOrSVGElement](axes_lines._internal_.HTMLOrSVGElement.md).[nonce](axes_lines._internal_.HTMLOrSVGElement.md#nonce)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7549

___

### onabort

• **onabort**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`UIEvent`](../modules/axes_lines._internal_.md#uievent)) => `any`

Fires when the user aborts the download.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onabort](axes_lines._internal_.GlobalEventHandlers.md#onabort)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5647

___

### onanimationcancel

• **onanimationcancel**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`AnimationEvent`](../modules/axes_lines._internal_.md#animationevent)) => `any`

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onanimationcancel](axes_lines._internal_.GlobalEventHandlers.md#onanimationcancel)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5648

___

### onanimationend

• **onanimationend**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`AnimationEvent`](../modules/axes_lines._internal_.md#animationevent)) => `any`

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onanimationend](axes_lines._internal_.GlobalEventHandlers.md#onanimationend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5649

___

### onanimationiteration

• **onanimationiteration**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`AnimationEvent`](../modules/axes_lines._internal_.md#animationevent)) => `any`

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onanimationiteration](axes_lines._internal_.GlobalEventHandlers.md#onanimationiteration)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5650

___

### onanimationstart

• **onanimationstart**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`AnimationEvent`](../modules/axes_lines._internal_.md#animationevent)) => `any`

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onanimationstart](axes_lines._internal_.GlobalEventHandlers.md#onanimationstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5651

___

### onauxclick

• **onauxclick**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/axes_lines._internal_.md#mouseevent)) => `any`

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onauxclick](axes_lines._internal_.GlobalEventHandlers.md#onauxclick)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5652

___

### onblur

• **onblur**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`FocusEvent`](../modules/axes_lines._internal_.md#focusevent)) => `any`

Fires when the object loses the input focus.

**`param`** The focus event.

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onblur](axes_lines._internal_.GlobalEventHandlers.md#onblur)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5657

___

### oncanplay

• **oncanplay**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

Occurs when playback is possible, but would require further buffering.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[oncanplay](axes_lines._internal_.GlobalEventHandlers.md#oncanplay)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5662

___

### oncanplaythrough

• **oncanplaythrough**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[oncanplaythrough](axes_lines._internal_.GlobalEventHandlers.md#oncanplaythrough)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5663

___

### onchange

• **onchange**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

Fires when the contents of the object or selection have changed.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onchange](axes_lines._internal_.GlobalEventHandlers.md#onchange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5668

___

### onclick

• **onclick**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/axes_lines._internal_.md#mouseevent)) => `any`

Fires when the user clicks the left mouse button on the object

**`param`** The mouse event.

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onclick](axes_lines._internal_.GlobalEventHandlers.md#onclick)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5673

___

### onclose

• **onclose**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onclose](axes_lines._internal_.GlobalEventHandlers.md#onclose)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5674

___

### oncontextmenu

• **oncontextmenu**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/axes_lines._internal_.md#mouseevent)) => `any`

Fires when the user clicks the right mouse button in the client area, opening the context menu.

**`param`** The mouse event.

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[oncontextmenu](axes_lines._internal_.GlobalEventHandlers.md#oncontextmenu)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5679

___

### oncopy

• **oncopy**: ``null`` \| (`this`: [`DocumentAndElementEventHandlers`](axes_lines._internal_.DocumentAndElementEventHandlers.md), `ev`: [`ClipboardEvent`](../modules/axes_lines._internal_.md#clipboardevent)) => `any`

#### Inherited from

[DocumentAndElementEventHandlers](axes_lines._internal_.DocumentAndElementEventHandlers.md).[oncopy](axes_lines._internal_.DocumentAndElementEventHandlers.md#oncopy)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4708

___

### oncuechange

• **oncuechange**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[oncuechange](axes_lines._internal_.GlobalEventHandlers.md#oncuechange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5680

___

### oncut

• **oncut**: ``null`` \| (`this`: [`DocumentAndElementEventHandlers`](axes_lines._internal_.DocumentAndElementEventHandlers.md), `ev`: [`ClipboardEvent`](../modules/axes_lines._internal_.md#clipboardevent)) => `any`

#### Inherited from

[DocumentAndElementEventHandlers](axes_lines._internal_.DocumentAndElementEventHandlers.md).[oncut](axes_lines._internal_.DocumentAndElementEventHandlers.md#oncut)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4709

___

### ondblclick

• **ondblclick**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/axes_lines._internal_.md#mouseevent)) => `any`

Fires when the user double-clicks the object.

**`param`** The mouse event.

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[ondblclick](axes_lines._internal_.GlobalEventHandlers.md#ondblclick)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5685

___

### ondrag

• **ondrag**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`DragEvent`](../modules/axes_lines._internal_.md#dragevent)) => `any`

Fires on the source object continuously during a drag operation.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[ondrag](axes_lines._internal_.GlobalEventHandlers.md#ondrag)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5690

___

### ondragend

• **ondragend**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`DragEvent`](../modules/axes_lines._internal_.md#dragevent)) => `any`

Fires on the source object when the user releases the mouse at the close of a drag operation.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[ondragend](axes_lines._internal_.GlobalEventHandlers.md#ondragend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5695

___

### ondragenter

• **ondragenter**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`DragEvent`](../modules/axes_lines._internal_.md#dragevent)) => `any`

Fires on the target element when the user drags the object to a valid drop target.

**`param`** The drag event.

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[ondragenter](axes_lines._internal_.GlobalEventHandlers.md#ondragenter)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5700

___

### ondragleave

• **ondragleave**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`DragEvent`](../modules/axes_lines._internal_.md#dragevent)) => `any`

Fires on the target object when the user moves the mouse out of a valid drop target during a drag operation.

**`param`** The drag event.

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[ondragleave](axes_lines._internal_.GlobalEventHandlers.md#ondragleave)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5705

___

### ondragover

• **ondragover**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`DragEvent`](../modules/axes_lines._internal_.md#dragevent)) => `any`

Fires on the target element continuously while the user drags the object over a valid drop target.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[ondragover](axes_lines._internal_.GlobalEventHandlers.md#ondragover)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5710

___

### ondragstart

• **ondragstart**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`DragEvent`](../modules/axes_lines._internal_.md#dragevent)) => `any`

Fires on the source object when the user starts to drag a text selection or selected object.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[ondragstart](axes_lines._internal_.GlobalEventHandlers.md#ondragstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5715

___

### ondrop

• **ondrop**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`DragEvent`](../modules/axes_lines._internal_.md#dragevent)) => `any`

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[ondrop](axes_lines._internal_.GlobalEventHandlers.md#ondrop)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5716

___

### ondurationchange

• **ondurationchange**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

Occurs when the duration attribute is updated.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[ondurationchange](axes_lines._internal_.GlobalEventHandlers.md#ondurationchange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5721

___

### onemptied

• **onemptied**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

Occurs when the media element is reset to its initial state.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onemptied](axes_lines._internal_.GlobalEventHandlers.md#onemptied)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5726

___

### onended

• **onended**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

Occurs when the end of playback is reached.

**`param`** The event

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onended](axes_lines._internal_.GlobalEventHandlers.md#onended)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5731

___

### onerror

• **onerror**: [`OnErrorEventHandler`](../modules/axes_lines._internal_.md#onerroreventhandler)

Fires when an error occurs during object loading.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onerror](axes_lines._internal_.GlobalEventHandlers.md#onerror)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5736

___

### onfocus

• **onfocus**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`FocusEvent`](../modules/axes_lines._internal_.md#focusevent)) => `any`

Fires when the object receives focus.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onfocus](axes_lines._internal_.GlobalEventHandlers.md#onfocus)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5741

___

### onformdata

• **onformdata**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`FormDataEvent`](../modules/axes_lines._internal_.md#formdataevent)) => `any`

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onformdata](axes_lines._internal_.GlobalEventHandlers.md#onformdata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5742

___

### onfullscreenchange

• **onfullscreenchange**: ``null`` \| (`this`: [`Element`](../modules/axes_lines._internal_.md#element), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

#### Inherited from

Element.onfullscreenchange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4867

___

### onfullscreenerror

• **onfullscreenerror**: ``null`` \| (`this`: [`Element`](../modules/axes_lines._internal_.md#element), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

#### Inherited from

Element.onfullscreenerror

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4868

___

### ongotpointercapture

• **ongotpointercapture**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/axes_lines._internal_.md#pointerevent)) => `any`

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[ongotpointercapture](axes_lines._internal_.GlobalEventHandlers.md#ongotpointercapture)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5743

___

### oninput

• **oninput**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[oninput](axes_lines._internal_.GlobalEventHandlers.md#oninput)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5744

___

### oninvalid

• **oninvalid**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[oninvalid](axes_lines._internal_.GlobalEventHandlers.md#oninvalid)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5745

___

### onkeydown

• **onkeydown**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`KeyboardEvent`](../modules/axes_lines._internal_.md#keyboardevent)) => `any`

Fires when the user presses a key.

**`param`** The keyboard event

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onkeydown](axes_lines._internal_.GlobalEventHandlers.md#onkeydown)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5750

___

### onkeypress

• **onkeypress**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`KeyboardEvent`](../modules/axes_lines._internal_.md#keyboardevent)) => `any`

Fires when the user presses an alphanumeric key.

**`param`** The event.

**`deprecated`**

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onkeypress](axes_lines._internal_.GlobalEventHandlers.md#onkeypress)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5756

___

### onkeyup

• **onkeyup**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`KeyboardEvent`](../modules/axes_lines._internal_.md#keyboardevent)) => `any`

Fires when the user releases a key.

**`param`** The keyboard event

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onkeyup](axes_lines._internal_.GlobalEventHandlers.md#onkeyup)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5761

___

### onload

• **onload**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

Fires immediately after the browser loads the object.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onload](axes_lines._internal_.GlobalEventHandlers.md#onload)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5766

___

### onloadeddata

• **onloadeddata**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

Occurs when media data is loaded at the current playback position.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onloadeddata](axes_lines._internal_.GlobalEventHandlers.md#onloadeddata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5771

___

### onloadedmetadata

• **onloadedmetadata**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

Occurs when the duration and dimensions of the media have been determined.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onloadedmetadata](axes_lines._internal_.GlobalEventHandlers.md#onloadedmetadata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5776

___

### onloadstart

• **onloadstart**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

Occurs when Internet Explorer begins looking for media data.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onloadstart](axes_lines._internal_.GlobalEventHandlers.md#onloadstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5781

___

### onlostpointercapture

• **onlostpointercapture**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/axes_lines._internal_.md#pointerevent)) => `any`

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onlostpointercapture](axes_lines._internal_.GlobalEventHandlers.md#onlostpointercapture)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5782

___

### onmousedown

• **onmousedown**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/axes_lines._internal_.md#mouseevent)) => `any`

Fires when the user clicks the object with either mouse button.

**`param`** The mouse event.

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onmousedown](axes_lines._internal_.GlobalEventHandlers.md#onmousedown)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5787

___

### onmouseenter

• **onmouseenter**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/axes_lines._internal_.md#mouseevent)) => `any`

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onmouseenter](axes_lines._internal_.GlobalEventHandlers.md#onmouseenter)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5788

___

### onmouseleave

• **onmouseleave**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/axes_lines._internal_.md#mouseevent)) => `any`

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onmouseleave](axes_lines._internal_.GlobalEventHandlers.md#onmouseleave)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5789

___

### onmousemove

• **onmousemove**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/axes_lines._internal_.md#mouseevent)) => `any`

Fires when the user moves the mouse over the object.

**`param`** The mouse event.

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onmousemove](axes_lines._internal_.GlobalEventHandlers.md#onmousemove)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5794

___

### onmouseout

• **onmouseout**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/axes_lines._internal_.md#mouseevent)) => `any`

Fires when the user moves the mouse pointer outside the boundaries of the object.

**`param`** The mouse event.

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onmouseout](axes_lines._internal_.GlobalEventHandlers.md#onmouseout)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5799

___

### onmouseover

• **onmouseover**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/axes_lines._internal_.md#mouseevent)) => `any`

Fires when the user moves the mouse pointer into the object.

**`param`** The mouse event.

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onmouseover](axes_lines._internal_.GlobalEventHandlers.md#onmouseover)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5804

___

### onmouseup

• **onmouseup**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/axes_lines._internal_.md#mouseevent)) => `any`

Fires when the user releases a mouse button while the mouse is over the object.

**`param`** The mouse event.

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onmouseup](axes_lines._internal_.GlobalEventHandlers.md#onmouseup)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5809

___

### onpaste

• **onpaste**: ``null`` \| (`this`: [`DocumentAndElementEventHandlers`](axes_lines._internal_.DocumentAndElementEventHandlers.md), `ev`: [`ClipboardEvent`](../modules/axes_lines._internal_.md#clipboardevent)) => `any`

#### Inherited from

[DocumentAndElementEventHandlers](axes_lines._internal_.DocumentAndElementEventHandlers.md).[onpaste](axes_lines._internal_.DocumentAndElementEventHandlers.md#onpaste)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4710

___

### onpause

• **onpause**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

Occurs when playback is paused.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onpause](axes_lines._internal_.GlobalEventHandlers.md#onpause)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5814

___

### onplay

• **onplay**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

Occurs when the play method is requested.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onplay](axes_lines._internal_.GlobalEventHandlers.md#onplay)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5819

___

### onplaying

• **onplaying**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

Occurs when the audio or video has started playing.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onplaying](axes_lines._internal_.GlobalEventHandlers.md#onplaying)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5824

___

### onpointercancel

• **onpointercancel**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/axes_lines._internal_.md#pointerevent)) => `any`

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onpointercancel](axes_lines._internal_.GlobalEventHandlers.md#onpointercancel)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5825

___

### onpointerdown

• **onpointerdown**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/axes_lines._internal_.md#pointerevent)) => `any`

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onpointerdown](axes_lines._internal_.GlobalEventHandlers.md#onpointerdown)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5826

___

### onpointerenter

• **onpointerenter**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/axes_lines._internal_.md#pointerevent)) => `any`

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onpointerenter](axes_lines._internal_.GlobalEventHandlers.md#onpointerenter)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5827

___

### onpointerleave

• **onpointerleave**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/axes_lines._internal_.md#pointerevent)) => `any`

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onpointerleave](axes_lines._internal_.GlobalEventHandlers.md#onpointerleave)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5828

___

### onpointermove

• **onpointermove**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/axes_lines._internal_.md#pointerevent)) => `any`

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onpointermove](axes_lines._internal_.GlobalEventHandlers.md#onpointermove)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5829

___

### onpointerout

• **onpointerout**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/axes_lines._internal_.md#pointerevent)) => `any`

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onpointerout](axes_lines._internal_.GlobalEventHandlers.md#onpointerout)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5830

___

### onpointerover

• **onpointerover**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/axes_lines._internal_.md#pointerevent)) => `any`

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onpointerover](axes_lines._internal_.GlobalEventHandlers.md#onpointerover)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5831

___

### onpointerup

• **onpointerup**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/axes_lines._internal_.md#pointerevent)) => `any`

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onpointerup](axes_lines._internal_.GlobalEventHandlers.md#onpointerup)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5832

___

### onprogress

• **onprogress**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`ProgressEvent`](../modules/axes_lines._internal_.md#progressevent)<[`EventTarget`](../modules/axes_lines._internal_.md#eventtarget)\>) => `any`

Occurs to indicate progress while downloading media data.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onprogress](axes_lines._internal_.GlobalEventHandlers.md#onprogress)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5837

___

### onratechange

• **onratechange**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

Occurs when the playback rate is increased or decreased.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onratechange](axes_lines._internal_.GlobalEventHandlers.md#onratechange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5842

___

### onreset

• **onreset**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

Fires when the user resets a form.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onreset](axes_lines._internal_.GlobalEventHandlers.md#onreset)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5847

___

### onresize

• **onresize**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`UIEvent`](../modules/axes_lines._internal_.md#uievent)) => `any`

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onresize](axes_lines._internal_.GlobalEventHandlers.md#onresize)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5848

___

### onscroll

• **onscroll**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

Fires when the user repositions the scroll box in the scroll bar on the object.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onscroll](axes_lines._internal_.GlobalEventHandlers.md#onscroll)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5853

___

### onsecuritypolicyviolation

• **onsecuritypolicyviolation**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`SecurityPolicyViolationEvent`](../modules/axes_lines._internal_.md#securitypolicyviolationevent)) => `any`

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onsecuritypolicyviolation](axes_lines._internal_.GlobalEventHandlers.md#onsecuritypolicyviolation)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5854

___

### onseeked

• **onseeked**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

Occurs when the seek operation ends.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onseeked](axes_lines._internal_.GlobalEventHandlers.md#onseeked)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5859

___

### onseeking

• **onseeking**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

Occurs when the current playback position is moved.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onseeking](axes_lines._internal_.GlobalEventHandlers.md#onseeking)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5864

___

### onselect

• **onselect**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

Fires when the current selection changes.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onselect](axes_lines._internal_.GlobalEventHandlers.md#onselect)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5869

___

### onselectionchange

• **onselectionchange**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onselectionchange](axes_lines._internal_.GlobalEventHandlers.md#onselectionchange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5870

___

### onselectstart

• **onselectstart**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onselectstart](axes_lines._internal_.GlobalEventHandlers.md#onselectstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5871

___

### onslotchange

• **onslotchange**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onslotchange](axes_lines._internal_.GlobalEventHandlers.md#onslotchange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5872

___

### onstalled

• **onstalled**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

Occurs when the download has stopped.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onstalled](axes_lines._internal_.GlobalEventHandlers.md#onstalled)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5877

___

### onsubmit

• **onsubmit**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`SubmitEvent`](../modules/axes_lines._internal_.md#submitevent)) => `any`

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onsubmit](axes_lines._internal_.GlobalEventHandlers.md#onsubmit)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5878

___

### onsuspend

• **onsuspend**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

Occurs if the load operation has been intentionally halted.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onsuspend](axes_lines._internal_.GlobalEventHandlers.md#onsuspend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5883

___

### ontimeupdate

• **ontimeupdate**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

Occurs to indicate the current playback position.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[ontimeupdate](axes_lines._internal_.GlobalEventHandlers.md#ontimeupdate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5888

___

### ontoggle

• **ontoggle**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[ontoggle](axes_lines._internal_.GlobalEventHandlers.md#ontoggle)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5889

___

### ontouchcancel

• `Optional` **ontouchcancel**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`TouchEvent`](../modules/axes_lines._internal_.md#touchevent)) => `any`

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[ontouchcancel](axes_lines._internal_.GlobalEventHandlers.md#ontouchcancel)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5890

___

### ontouchend

• `Optional` **ontouchend**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`TouchEvent`](../modules/axes_lines._internal_.md#touchevent)) => `any`

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[ontouchend](axes_lines._internal_.GlobalEventHandlers.md#ontouchend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5891

___

### ontouchmove

• `Optional` **ontouchmove**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`TouchEvent`](../modules/axes_lines._internal_.md#touchevent)) => `any`

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[ontouchmove](axes_lines._internal_.GlobalEventHandlers.md#ontouchmove)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5892

___

### ontouchstart

• `Optional` **ontouchstart**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`TouchEvent`](../modules/axes_lines._internal_.md#touchevent)) => `any`

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[ontouchstart](axes_lines._internal_.GlobalEventHandlers.md#ontouchstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5893

___

### ontransitioncancel

• **ontransitioncancel**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`TransitionEvent`](../modules/axes_lines._internal_.md#transitionevent)) => `any`

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[ontransitioncancel](axes_lines._internal_.GlobalEventHandlers.md#ontransitioncancel)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5894

___

### ontransitionend

• **ontransitionend**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`TransitionEvent`](../modules/axes_lines._internal_.md#transitionevent)) => `any`

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[ontransitionend](axes_lines._internal_.GlobalEventHandlers.md#ontransitionend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5895

___

### ontransitionrun

• **ontransitionrun**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`TransitionEvent`](../modules/axes_lines._internal_.md#transitionevent)) => `any`

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[ontransitionrun](axes_lines._internal_.GlobalEventHandlers.md#ontransitionrun)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5896

___

### ontransitionstart

• **ontransitionstart**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`TransitionEvent`](../modules/axes_lines._internal_.md#transitionevent)) => `any`

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[ontransitionstart](axes_lines._internal_.GlobalEventHandlers.md#ontransitionstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5897

___

### onvolumechange

• **onvolumechange**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

Occurs when the volume is changed, or playback is muted or unmuted.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onvolumechange](axes_lines._internal_.GlobalEventHandlers.md#onvolumechange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5902

___

### onwaiting

• **onwaiting**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

Occurs when playback stops because the next frame of a video resource is not available.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onwaiting](axes_lines._internal_.GlobalEventHandlers.md#onwaiting)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5907

___

### onwebkitanimationend

• **onwebkitanimationend**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

**`deprecated`** This is a legacy alias of `onanimationend`.

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onwebkitanimationend](axes_lines._internal_.GlobalEventHandlers.md#onwebkitanimationend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5909

___

### onwebkitanimationiteration

• **onwebkitanimationiteration**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

**`deprecated`** This is a legacy alias of `onanimationiteration`.

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onwebkitanimationiteration](axes_lines._internal_.GlobalEventHandlers.md#onwebkitanimationiteration)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5911

___

### onwebkitanimationstart

• **onwebkitanimationstart**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

**`deprecated`** This is a legacy alias of `onanimationstart`.

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onwebkitanimationstart](axes_lines._internal_.GlobalEventHandlers.md#onwebkitanimationstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5913

___

### onwebkittransitionend

• **onwebkittransitionend**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/axes_lines._internal_.md#event)) => `any`

**`deprecated`** This is a legacy alias of `ontransitionend`.

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onwebkittransitionend](axes_lines._internal_.GlobalEventHandlers.md#onwebkittransitionend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5915

___

### onwheel

• **onwheel**: ``null`` \| (`this`: [`GlobalEventHandlers`](axes_lines._internal_.GlobalEventHandlers.md), `ev`: [`WheelEvent`](../modules/axes_lines._internal_.md#wheelevent)) => `any`

#### Inherited from

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[onwheel](axes_lines._internal_.GlobalEventHandlers.md#onwheel)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5916

___

### outerHTML

• **outerHTML**: `string`

#### Inherited from

Element.outerHTML

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4869

___

### ownerDocument

• `Readonly` **ownerDocument**: [`Document`](../modules/axes_lines._internal_.md#document)

#### Inherited from

Element.ownerDocument

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4870

___

### ownerSVGElement

• `Readonly` **ownerSVGElement**: ``null`` \| [`SVGSVGElement`](../modules/axes_lines._internal_.md#svgsvgelement)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11964

___

### parentElement

• `Readonly` **parentElement**: ``null`` \| [`HTMLElement`](../modules/axes_lines._internal_.md#htmlelement)

Returns the parent element.

#### Inherited from

Element.parentElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10061

___

### parentNode

• `Readonly` **parentNode**: ``null`` \| [`ParentNode`](axes_lines._internal_.ParentNode.md)

Returns the parent.

#### Inherited from

Element.parentNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10063

___

### part

• `Readonly` **part**: `DOMTokenList`

#### Inherited from

Element.part

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4871

___

### prefix

• `Readonly` **prefix**: ``null`` \| `string`

Returns the namespace prefix.

#### Inherited from

Element.prefix

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4873

___

### previousElementSibling

• `Readonly` **previousElementSibling**: ``null`` \| [`Element`](../modules/axes_lines._internal_.md#element)

Returns the first preceding sibling that is an element, and null otherwise.

#### Inherited from

Element.previousElementSibling

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10211

___

### previousSibling

• `Readonly` **previousSibling**: ``null`` \| [`ChildNode`](axes_lines._internal_.ChildNode.md)

Returns the previous sibling.

#### Inherited from

Element.previousSibling

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10065

___

### scrollHeight

• `Readonly` **scrollHeight**: `number`

#### Inherited from

Element.scrollHeight

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4874

___

### scrollLeft

• **scrollLeft**: `number`

#### Inherited from

Element.scrollLeft

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4875

___

### scrollTop

• **scrollTop**: `number`

#### Inherited from

Element.scrollTop

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4876

___

### scrollWidth

• `Readonly` **scrollWidth**: `number`

#### Inherited from

Element.scrollWidth

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4877

___

### shadowRoot

• `Readonly` **shadowRoot**: ``null`` \| [`ShadowRoot`](../modules/axes_lines._internal_.md#shadowroot)

Returns element's shadow root, if any, and if shadow root's mode is "open", and null otherwise.

#### Inherited from

Element.shadowRoot

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4879

___

### slot

• **slot**: `string`

Returns the value of element's slot content attribute. Can be set to change it.

#### Inherited from

Element.slot

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4881

___

### style

• `Readonly` **style**: `CSSStyleDeclaration`

#### Inherited from

[ElementCSSInlineStyle](axes_lines._internal_.ElementCSSInlineStyle.md).[style](axes_lines._internal_.ElementCSSInlineStyle.md#style)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4967

___

### tabIndex

• **tabIndex**: `number`

#### Inherited from

[HTMLOrSVGElement](axes_lines._internal_.HTMLOrSVGElement.md).[tabIndex](axes_lines._internal_.HTMLOrSVGElement.md#tabindex)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7550

___

### tagName

• `Readonly` **tagName**: `string`

Returns the HTML-uppercased qualified name.

#### Inherited from

Element.tagName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4883

___

### textContent

• **textContent**: ``null`` \| `string`

#### Inherited from

Element.textContent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10066

___

### viewportElement

• `Readonly` **viewportElement**: ``null`` \| [`SVGElement`](../modules/axes_lines._internal_.md#svgelement)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11965

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`SVGElementEventMap`](axes_lines._internal_.SVGElementEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`SVGElement`](../modules/axes_lines._internal_.md#svgelement), `ev`: [`SVGElementEventMap`](axes_lines._internal_.SVGElementEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](axes_lines._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[addEventListener](axes_lines._internal_.GlobalEventHandlers.md#addeventlistener)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11966

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

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[addEventListener](axes_lines._internal_.GlobalEventHandlers.md#addeventlistener)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11967

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

Element.after

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

Element.animate

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

Element.append

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

Element.appendChild

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

#### Inherited from

Element.attachShadow

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

Element.before

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3580

___

### blur

▸ **blur**(): `void`

#### Returns

`void`

#### Inherited from

[HTMLOrSVGElement](axes_lines._internal_.HTMLOrSVGElement.md).[blur](axes_lines._internal_.HTMLOrSVGElement.md#blur)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7551

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

Element.cloneNode

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

#### Inherited from

Element.closest

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

#### Inherited from

Element.closest

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

#### Inherited from

Element.closest

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

Element.compareDocumentPosition

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

Element.contains

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

Element.dispatchEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5138

___

### focus

▸ **focus**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`FocusOptions`](axes_lines._internal_.FocusOptions.md) |

#### Returns

`void`

#### Inherited from

[HTMLOrSVGElement](axes_lines._internal_.HTMLOrSVGElement.md).[focus](axes_lines._internal_.HTMLOrSVGElement.md#focus)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7552

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

Element.getAnimations

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

#### Inherited from

Element.getAttribute

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

#### Inherited from

Element.getAttributeNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4893

___

### getAttributeNames

▸ **getAttributeNames**(): `string`[]

Returns the qualified names of all element's attributes. Can contain duplicates.

#### Returns

`string`[]

#### Inherited from

Element.getAttributeNames

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

#### Inherited from

Element.getAttributeNode

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

#### Inherited from

Element.getAttributeNodeNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4897

___

### getBoundingClientRect

▸ **getBoundingClientRect**(): [`DOMRect`](../modules/axes_lines._internal_.md#domrect)

#### Returns

[`DOMRect`](../modules/axes_lines._internal_.md#domrect)

#### Inherited from

Element.getBoundingClientRect

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4898

___

### getClientRects

▸ **getClientRects**(): `DOMRectList`

#### Returns

`DOMRectList`

#### Inherited from

Element.getClientRects

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

#### Inherited from

Element.getElementsByClassName

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

#### Inherited from

Element.getElementsByTagName

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

#### Inherited from

Element.getElementsByTagName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4903

▸ **getElementsByTagName**(`qualifiedName`): `HTMLCollectionOf`<[`Element`](../modules/axes_lines._internal_.md#element)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |

#### Returns

`HTMLCollectionOf`<[`Element`](../modules/axes_lines._internal_.md#element)\>

#### Inherited from

Element.getElementsByTagName

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

#### Inherited from

Element.getElementsByTagNameNS

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

#### Inherited from

Element.getElementsByTagNameNS

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

#### Inherited from

Element.getElementsByTagNameNS

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

Element.getRootNode

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

#### Inherited from

Element.hasAttribute

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

#### Inherited from

Element.hasAttributeNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4911

___

### hasAttributes

▸ **hasAttributes**(): `boolean`

Returns true if element has attributes, and false otherwise.

#### Returns

`boolean`

#### Inherited from

Element.hasAttributes

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4913

___

### hasChildNodes

▸ **hasChildNodes**(): `boolean`

Returns whether node has children.

#### Returns

`boolean`

#### Inherited from

Element.hasChildNodes

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

#### Inherited from

Element.hasPointerCapture

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

#### Inherited from

Element.insertAdjacentElement

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

#### Inherited from

Element.insertAdjacentHTML

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

#### Inherited from

Element.insertAdjacentText

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

Element.insertBefore

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

Element.isDefaultNamespace

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

Element.isEqualNode

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

Element.isSameNode

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

Element.lookupNamespaceURI

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

Element.lookupPrefix

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

#### Inherited from

Element.matches

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4919

___

### normalize

▸ **normalize**(): `void`

Removes empty exclusive Text nodes and concatenates the data of remaining contiguous exclusive Text nodes into the first of their nodes.

#### Returns

`void`

#### Inherited from

Element.normalize

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

Element.prepend

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

Element.querySelector

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

Element.querySelector

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

Element.querySelector

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

Element.querySelectorAll

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

Element.querySelectorAll

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

Element.querySelectorAll

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

#### Inherited from

Element.releasePointerCapture

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4920

___

### remove

▸ **remove**(): `void`

Removes node.

#### Returns

`void`

#### Inherited from

Element.remove

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

#### Inherited from

Element.removeAttribute

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

#### Inherited from

Element.removeAttributeNS

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

#### Inherited from

Element.removeAttributeNode

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

Element.removeChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10087

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`SVGElementEventMap`](axes_lines._internal_.SVGElementEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`SVGElement`](../modules/axes_lines._internal_.md#svgelement), `ev`: [`SVGElementEventMap`](axes_lines._internal_.SVGElementEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](axes_lines._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[removeEventListener](axes_lines._internal_.GlobalEventHandlers.md#removeeventlistener)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11968

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

[GlobalEventHandlers](axes_lines._internal_.GlobalEventHandlers.md).[removeEventListener](axes_lines._internal_.GlobalEventHandlers.md#removeeventlistener)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11969

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

Element.replaceChild

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

Element.replaceChildren

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

Element.replaceWith

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

#### Inherited from

Element.requestFullscreen

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4931

___

### requestPointerLock

▸ **requestPointerLock**(): `void`

#### Returns

`void`

#### Inherited from

Element.requestPointerLock

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

#### Inherited from

Element.scroll

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

#### Inherited from

Element.scroll

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

#### Inherited from

Element.scrollBy

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

#### Inherited from

Element.scrollBy

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

#### Inherited from

Element.scrollIntoView

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

#### Inherited from

Element.scrollTo

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

#### Inherited from

Element.scrollTo

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

#### Inherited from

Element.setAttribute

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

#### Inherited from

Element.setAttributeNS

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

#### Inherited from

Element.setAttributeNode

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

#### Inherited from

Element.setAttributeNodeNS

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

#### Inherited from

Element.setPointerCapture

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

#### Inherited from

Element.toggleAttribute

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

#### Inherited from

Element.webkitMatchesSelector

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4954
