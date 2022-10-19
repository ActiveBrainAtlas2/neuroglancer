[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / HTMLElement

# Interface: HTMLElement

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).HTMLElement

Any HTML element. Some elements directly implement this interface, while others implement it via an interface that inherits it.

## Hierarchy

- [`Element`](../modules/main_module._internal_.md#element)

- [`DocumentAndElementEventHandlers`](main_module._internal_.DocumentAndElementEventHandlers.md)

- [`ElementCSSInlineStyle`](main_module._internal_.ElementCSSInlineStyle.md)

- [`ElementContentEditable`](main_module._internal_.ElementContentEditable.md)

- [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md)

- [`HTMLOrSVGElement`](main_module._internal_.HTMLOrSVGElement.md)

  ↳ **`HTMLElement`**

## Table of contents

### Properties

- [ATTRIBUTE\_NODE](main_module._internal_.HTMLElement.md#attribute_node)
- [CDATA\_SECTION\_NODE](main_module._internal_.HTMLElement.md#cdata_section_node)
- [COMMENT\_NODE](main_module._internal_.HTMLElement.md#comment_node)
- [DOCUMENT\_FRAGMENT\_NODE](main_module._internal_.HTMLElement.md#document_fragment_node)
- [DOCUMENT\_NODE](main_module._internal_.HTMLElement.md#document_node)
- [DOCUMENT\_POSITION\_CONTAINED\_BY](main_module._internal_.HTMLElement.md#document_position_contained_by)
- [DOCUMENT\_POSITION\_CONTAINS](main_module._internal_.HTMLElement.md#document_position_contains)
- [DOCUMENT\_POSITION\_DISCONNECTED](main_module._internal_.HTMLElement.md#document_position_disconnected)
- [DOCUMENT\_POSITION\_FOLLOWING](main_module._internal_.HTMLElement.md#document_position_following)
- [DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC](main_module._internal_.HTMLElement.md#document_position_implementation_specific)
- [DOCUMENT\_POSITION\_PRECEDING](main_module._internal_.HTMLElement.md#document_position_preceding)
- [DOCUMENT\_TYPE\_NODE](main_module._internal_.HTMLElement.md#document_type_node)
- [ELEMENT\_NODE](main_module._internal_.HTMLElement.md#element_node)
- [ENTITY\_NODE](main_module._internal_.HTMLElement.md#entity_node)
- [ENTITY\_REFERENCE\_NODE](main_module._internal_.HTMLElement.md#entity_reference_node)
- [NOTATION\_NODE](main_module._internal_.HTMLElement.md#notation_node)
- [PROCESSING\_INSTRUCTION\_NODE](main_module._internal_.HTMLElement.md#processing_instruction_node)
- [TEXT\_NODE](main_module._internal_.HTMLElement.md#text_node)
- [accessKey](main_module._internal_.HTMLElement.md#accesskey)
- [accessKeyLabel](main_module._internal_.HTMLElement.md#accesskeylabel)
- [ariaAtomic](main_module._internal_.HTMLElement.md#ariaatomic)
- [ariaAutoComplete](main_module._internal_.HTMLElement.md#ariaautocomplete)
- [ariaBusy](main_module._internal_.HTMLElement.md#ariabusy)
- [ariaChecked](main_module._internal_.HTMLElement.md#ariachecked)
- [ariaColCount](main_module._internal_.HTMLElement.md#ariacolcount)
- [ariaColIndex](main_module._internal_.HTMLElement.md#ariacolindex)
- [ariaColSpan](main_module._internal_.HTMLElement.md#ariacolspan)
- [ariaCurrent](main_module._internal_.HTMLElement.md#ariacurrent)
- [ariaDisabled](main_module._internal_.HTMLElement.md#ariadisabled)
- [ariaExpanded](main_module._internal_.HTMLElement.md#ariaexpanded)
- [ariaHasPopup](main_module._internal_.HTMLElement.md#ariahaspopup)
- [ariaHidden](main_module._internal_.HTMLElement.md#ariahidden)
- [ariaKeyShortcuts](main_module._internal_.HTMLElement.md#ariakeyshortcuts)
- [ariaLabel](main_module._internal_.HTMLElement.md#arialabel)
- [ariaLevel](main_module._internal_.HTMLElement.md#arialevel)
- [ariaLive](main_module._internal_.HTMLElement.md#arialive)
- [ariaModal](main_module._internal_.HTMLElement.md#ariamodal)
- [ariaMultiLine](main_module._internal_.HTMLElement.md#ariamultiline)
- [ariaMultiSelectable](main_module._internal_.HTMLElement.md#ariamultiselectable)
- [ariaOrientation](main_module._internal_.HTMLElement.md#ariaorientation)
- [ariaPlaceholder](main_module._internal_.HTMLElement.md#ariaplaceholder)
- [ariaPosInSet](main_module._internal_.HTMLElement.md#ariaposinset)
- [ariaPressed](main_module._internal_.HTMLElement.md#ariapressed)
- [ariaReadOnly](main_module._internal_.HTMLElement.md#ariareadonly)
- [ariaRequired](main_module._internal_.HTMLElement.md#ariarequired)
- [ariaRoleDescription](main_module._internal_.HTMLElement.md#ariaroledescription)
- [ariaRowCount](main_module._internal_.HTMLElement.md#ariarowcount)
- [ariaRowIndex](main_module._internal_.HTMLElement.md#ariarowindex)
- [ariaRowSpan](main_module._internal_.HTMLElement.md#ariarowspan)
- [ariaSelected](main_module._internal_.HTMLElement.md#ariaselected)
- [ariaSetSize](main_module._internal_.HTMLElement.md#ariasetsize)
- [ariaSort](main_module._internal_.HTMLElement.md#ariasort)
- [ariaValueMax](main_module._internal_.HTMLElement.md#ariavaluemax)
- [ariaValueMin](main_module._internal_.HTMLElement.md#ariavaluemin)
- [ariaValueNow](main_module._internal_.HTMLElement.md#ariavaluenow)
- [ariaValueText](main_module._internal_.HTMLElement.md#ariavaluetext)
- [assignedSlot](main_module._internal_.HTMLElement.md#assignedslot)
- [attributes](main_module._internal_.HTMLElement.md#attributes)
- [autocapitalize](main_module._internal_.HTMLElement.md#autocapitalize)
- [autofocus](main_module._internal_.HTMLElement.md#autofocus)
- [baseURI](main_module._internal_.HTMLElement.md#baseuri)
- [childElementCount](main_module._internal_.HTMLElement.md#childelementcount)
- [childNodes](main_module._internal_.HTMLElement.md#childnodes)
- [children](main_module._internal_.HTMLElement.md#children)
- [classList](main_module._internal_.HTMLElement.md#classlist)
- [className](main_module._internal_.HTMLElement.md#classname)
- [clientHeight](main_module._internal_.HTMLElement.md#clientheight)
- [clientLeft](main_module._internal_.HTMLElement.md#clientleft)
- [clientTop](main_module._internal_.HTMLElement.md#clienttop)
- [clientWidth](main_module._internal_.HTMLElement.md#clientwidth)
- [contentEditable](main_module._internal_.HTMLElement.md#contenteditable)
- [dataset](main_module._internal_.HTMLElement.md#dataset)
- [dir](main_module._internal_.HTMLElement.md#dir)
- [draggable](main_module._internal_.HTMLElement.md#draggable)
- [enterKeyHint](main_module._internal_.HTMLElement.md#enterkeyhint)
- [firstChild](main_module._internal_.HTMLElement.md#firstchild)
- [firstElementChild](main_module._internal_.HTMLElement.md#firstelementchild)
- [hidden](main_module._internal_.HTMLElement.md#hidden)
- [id](main_module._internal_.HTMLElement.md#id)
- [innerHTML](main_module._internal_.HTMLElement.md#innerhtml)
- [innerText](main_module._internal_.HTMLElement.md#innertext)
- [inputMode](main_module._internal_.HTMLElement.md#inputmode)
- [isConnected](main_module._internal_.HTMLElement.md#isconnected)
- [isContentEditable](main_module._internal_.HTMLElement.md#iscontenteditable)
- [lang](main_module._internal_.HTMLElement.md#lang)
- [lastChild](main_module._internal_.HTMLElement.md#lastchild)
- [lastElementChild](main_module._internal_.HTMLElement.md#lastelementchild)
- [localName](main_module._internal_.HTMLElement.md#localname)
- [namespaceURI](main_module._internal_.HTMLElement.md#namespaceuri)
- [nextElementSibling](main_module._internal_.HTMLElement.md#nextelementsibling)
- [nextSibling](main_module._internal_.HTMLElement.md#nextsibling)
- [nodeName](main_module._internal_.HTMLElement.md#nodename)
- [nodeType](main_module._internal_.HTMLElement.md#nodetype)
- [nodeValue](main_module._internal_.HTMLElement.md#nodevalue)
- [nonce](main_module._internal_.HTMLElement.md#nonce)
- [offsetHeight](main_module._internal_.HTMLElement.md#offsetheight)
- [offsetLeft](main_module._internal_.HTMLElement.md#offsetleft)
- [offsetParent](main_module._internal_.HTMLElement.md#offsetparent)
- [offsetTop](main_module._internal_.HTMLElement.md#offsettop)
- [offsetWidth](main_module._internal_.HTMLElement.md#offsetwidth)
- [onabort](main_module._internal_.HTMLElement.md#onabort)
- [onanimationcancel](main_module._internal_.HTMLElement.md#onanimationcancel)
- [onanimationend](main_module._internal_.HTMLElement.md#onanimationend)
- [onanimationiteration](main_module._internal_.HTMLElement.md#onanimationiteration)
- [onanimationstart](main_module._internal_.HTMLElement.md#onanimationstart)
- [onauxclick](main_module._internal_.HTMLElement.md#onauxclick)
- [onblur](main_module._internal_.HTMLElement.md#onblur)
- [oncanplay](main_module._internal_.HTMLElement.md#oncanplay)
- [oncanplaythrough](main_module._internal_.HTMLElement.md#oncanplaythrough)
- [onchange](main_module._internal_.HTMLElement.md#onchange)
- [onclick](main_module._internal_.HTMLElement.md#onclick)
- [onclose](main_module._internal_.HTMLElement.md#onclose)
- [oncontextmenu](main_module._internal_.HTMLElement.md#oncontextmenu)
- [oncopy](main_module._internal_.HTMLElement.md#oncopy)
- [oncuechange](main_module._internal_.HTMLElement.md#oncuechange)
- [oncut](main_module._internal_.HTMLElement.md#oncut)
- [ondblclick](main_module._internal_.HTMLElement.md#ondblclick)
- [ondrag](main_module._internal_.HTMLElement.md#ondrag)
- [ondragend](main_module._internal_.HTMLElement.md#ondragend)
- [ondragenter](main_module._internal_.HTMLElement.md#ondragenter)
- [ondragleave](main_module._internal_.HTMLElement.md#ondragleave)
- [ondragover](main_module._internal_.HTMLElement.md#ondragover)
- [ondragstart](main_module._internal_.HTMLElement.md#ondragstart)
- [ondrop](main_module._internal_.HTMLElement.md#ondrop)
- [ondurationchange](main_module._internal_.HTMLElement.md#ondurationchange)
- [onemptied](main_module._internal_.HTMLElement.md#onemptied)
- [onended](main_module._internal_.HTMLElement.md#onended)
- [onerror](main_module._internal_.HTMLElement.md#onerror)
- [onfocus](main_module._internal_.HTMLElement.md#onfocus)
- [onformdata](main_module._internal_.HTMLElement.md#onformdata)
- [onfullscreenchange](main_module._internal_.HTMLElement.md#onfullscreenchange)
- [onfullscreenerror](main_module._internal_.HTMLElement.md#onfullscreenerror)
- [ongotpointercapture](main_module._internal_.HTMLElement.md#ongotpointercapture)
- [oninput](main_module._internal_.HTMLElement.md#oninput)
- [oninvalid](main_module._internal_.HTMLElement.md#oninvalid)
- [onkeydown](main_module._internal_.HTMLElement.md#onkeydown)
- [onkeypress](main_module._internal_.HTMLElement.md#onkeypress)
- [onkeyup](main_module._internal_.HTMLElement.md#onkeyup)
- [onload](main_module._internal_.HTMLElement.md#onload)
- [onloadeddata](main_module._internal_.HTMLElement.md#onloadeddata)
- [onloadedmetadata](main_module._internal_.HTMLElement.md#onloadedmetadata)
- [onloadstart](main_module._internal_.HTMLElement.md#onloadstart)
- [onlostpointercapture](main_module._internal_.HTMLElement.md#onlostpointercapture)
- [onmousedown](main_module._internal_.HTMLElement.md#onmousedown)
- [onmouseenter](main_module._internal_.HTMLElement.md#onmouseenter)
- [onmouseleave](main_module._internal_.HTMLElement.md#onmouseleave)
- [onmousemove](main_module._internal_.HTMLElement.md#onmousemove)
- [onmouseout](main_module._internal_.HTMLElement.md#onmouseout)
- [onmouseover](main_module._internal_.HTMLElement.md#onmouseover)
- [onmouseup](main_module._internal_.HTMLElement.md#onmouseup)
- [onpaste](main_module._internal_.HTMLElement.md#onpaste)
- [onpause](main_module._internal_.HTMLElement.md#onpause)
- [onplay](main_module._internal_.HTMLElement.md#onplay)
- [onplaying](main_module._internal_.HTMLElement.md#onplaying)
- [onpointercancel](main_module._internal_.HTMLElement.md#onpointercancel)
- [onpointerdown](main_module._internal_.HTMLElement.md#onpointerdown)
- [onpointerenter](main_module._internal_.HTMLElement.md#onpointerenter)
- [onpointerleave](main_module._internal_.HTMLElement.md#onpointerleave)
- [onpointermove](main_module._internal_.HTMLElement.md#onpointermove)
- [onpointerout](main_module._internal_.HTMLElement.md#onpointerout)
- [onpointerover](main_module._internal_.HTMLElement.md#onpointerover)
- [onpointerup](main_module._internal_.HTMLElement.md#onpointerup)
- [onprogress](main_module._internal_.HTMLElement.md#onprogress)
- [onratechange](main_module._internal_.HTMLElement.md#onratechange)
- [onreset](main_module._internal_.HTMLElement.md#onreset)
- [onresize](main_module._internal_.HTMLElement.md#onresize)
- [onscroll](main_module._internal_.HTMLElement.md#onscroll)
- [onsecuritypolicyviolation](main_module._internal_.HTMLElement.md#onsecuritypolicyviolation)
- [onseeked](main_module._internal_.HTMLElement.md#onseeked)
- [onseeking](main_module._internal_.HTMLElement.md#onseeking)
- [onselect](main_module._internal_.HTMLElement.md#onselect)
- [onselectionchange](main_module._internal_.HTMLElement.md#onselectionchange)
- [onselectstart](main_module._internal_.HTMLElement.md#onselectstart)
- [onslotchange](main_module._internal_.HTMLElement.md#onslotchange)
- [onstalled](main_module._internal_.HTMLElement.md#onstalled)
- [onsubmit](main_module._internal_.HTMLElement.md#onsubmit)
- [onsuspend](main_module._internal_.HTMLElement.md#onsuspend)
- [ontimeupdate](main_module._internal_.HTMLElement.md#ontimeupdate)
- [ontoggle](main_module._internal_.HTMLElement.md#ontoggle)
- [ontouchcancel](main_module._internal_.HTMLElement.md#ontouchcancel)
- [ontouchend](main_module._internal_.HTMLElement.md#ontouchend)
- [ontouchmove](main_module._internal_.HTMLElement.md#ontouchmove)
- [ontouchstart](main_module._internal_.HTMLElement.md#ontouchstart)
- [ontransitioncancel](main_module._internal_.HTMLElement.md#ontransitioncancel)
- [ontransitionend](main_module._internal_.HTMLElement.md#ontransitionend)
- [ontransitionrun](main_module._internal_.HTMLElement.md#ontransitionrun)
- [ontransitionstart](main_module._internal_.HTMLElement.md#ontransitionstart)
- [onvolumechange](main_module._internal_.HTMLElement.md#onvolumechange)
- [onwaiting](main_module._internal_.HTMLElement.md#onwaiting)
- [onwebkitanimationend](main_module._internal_.HTMLElement.md#onwebkitanimationend)
- [onwebkitanimationiteration](main_module._internal_.HTMLElement.md#onwebkitanimationiteration)
- [onwebkitanimationstart](main_module._internal_.HTMLElement.md#onwebkitanimationstart)
- [onwebkittransitionend](main_module._internal_.HTMLElement.md#onwebkittransitionend)
- [onwheel](main_module._internal_.HTMLElement.md#onwheel)
- [outerHTML](main_module._internal_.HTMLElement.md#outerhtml)
- [outerText](main_module._internal_.HTMLElement.md#outertext)
- [ownerDocument](main_module._internal_.HTMLElement.md#ownerdocument)
- [parentElement](main_module._internal_.HTMLElement.md#parentelement)
- [parentNode](main_module._internal_.HTMLElement.md#parentnode)
- [part](main_module._internal_.HTMLElement.md#part)
- [prefix](main_module._internal_.HTMLElement.md#prefix)
- [previousElementSibling](main_module._internal_.HTMLElement.md#previouselementsibling)
- [previousSibling](main_module._internal_.HTMLElement.md#previoussibling)
- [scrollHeight](main_module._internal_.HTMLElement.md#scrollheight)
- [scrollLeft](main_module._internal_.HTMLElement.md#scrollleft)
- [scrollTop](main_module._internal_.HTMLElement.md#scrolltop)
- [scrollWidth](main_module._internal_.HTMLElement.md#scrollwidth)
- [shadowRoot](main_module._internal_.HTMLElement.md#shadowroot)
- [slot](main_module._internal_.HTMLElement.md#slot)
- [spellcheck](main_module._internal_.HTMLElement.md#spellcheck)
- [style](main_module._internal_.HTMLElement.md#style)
- [tabIndex](main_module._internal_.HTMLElement.md#tabindex)
- [tagName](main_module._internal_.HTMLElement.md#tagname)
- [textContent](main_module._internal_.HTMLElement.md#textcontent)
- [title](main_module._internal_.HTMLElement.md#title)
- [translate](main_module._internal_.HTMLElement.md#translate)

### Methods

- [addEventListener](main_module._internal_.HTMLElement.md#addeventlistener)
- [after](main_module._internal_.HTMLElement.md#after)
- [animate](main_module._internal_.HTMLElement.md#animate)
- [append](main_module._internal_.HTMLElement.md#append)
- [appendChild](main_module._internal_.HTMLElement.md#appendchild)
- [attachInternals](main_module._internal_.HTMLElement.md#attachinternals)
- [attachShadow](main_module._internal_.HTMLElement.md#attachshadow)
- [before](main_module._internal_.HTMLElement.md#before)
- [blur](main_module._internal_.HTMLElement.md#blur)
- [click](main_module._internal_.HTMLElement.md#click)
- [cloneNode](main_module._internal_.HTMLElement.md#clonenode)
- [closest](main_module._internal_.HTMLElement.md#closest)
- [compareDocumentPosition](main_module._internal_.HTMLElement.md#comparedocumentposition)
- [contains](main_module._internal_.HTMLElement.md#contains)
- [dispatchEvent](main_module._internal_.HTMLElement.md#dispatchevent)
- [focus](main_module._internal_.HTMLElement.md#focus)
- [getAnimations](main_module._internal_.HTMLElement.md#getanimations)
- [getAttribute](main_module._internal_.HTMLElement.md#getattribute)
- [getAttributeNS](main_module._internal_.HTMLElement.md#getattributens)
- [getAttributeNames](main_module._internal_.HTMLElement.md#getattributenames)
- [getAttributeNode](main_module._internal_.HTMLElement.md#getattributenode)
- [getAttributeNodeNS](main_module._internal_.HTMLElement.md#getattributenodens)
- [getBoundingClientRect](main_module._internal_.HTMLElement.md#getboundingclientrect)
- [getClientRects](main_module._internal_.HTMLElement.md#getclientrects)
- [getElementsByClassName](main_module._internal_.HTMLElement.md#getelementsbyclassname)
- [getElementsByTagName](main_module._internal_.HTMLElement.md#getelementsbytagname)
- [getElementsByTagNameNS](main_module._internal_.HTMLElement.md#getelementsbytagnamens)
- [getRootNode](main_module._internal_.HTMLElement.md#getrootnode)
- [hasAttribute](main_module._internal_.HTMLElement.md#hasattribute)
- [hasAttributeNS](main_module._internal_.HTMLElement.md#hasattributens)
- [hasAttributes](main_module._internal_.HTMLElement.md#hasattributes)
- [hasChildNodes](main_module._internal_.HTMLElement.md#haschildnodes)
- [hasPointerCapture](main_module._internal_.HTMLElement.md#haspointercapture)
- [insertAdjacentElement](main_module._internal_.HTMLElement.md#insertadjacentelement)
- [insertAdjacentHTML](main_module._internal_.HTMLElement.md#insertadjacenthtml)
- [insertAdjacentText](main_module._internal_.HTMLElement.md#insertadjacenttext)
- [insertBefore](main_module._internal_.HTMLElement.md#insertbefore)
- [isDefaultNamespace](main_module._internal_.HTMLElement.md#isdefaultnamespace)
- [isEqualNode](main_module._internal_.HTMLElement.md#isequalnode)
- [isSameNode](main_module._internal_.HTMLElement.md#issamenode)
- [lookupNamespaceURI](main_module._internal_.HTMLElement.md#lookupnamespaceuri)
- [lookupPrefix](main_module._internal_.HTMLElement.md#lookupprefix)
- [matches](main_module._internal_.HTMLElement.md#matches)
- [normalize](main_module._internal_.HTMLElement.md#normalize)
- [prepend](main_module._internal_.HTMLElement.md#prepend)
- [querySelector](main_module._internal_.HTMLElement.md#queryselector)
- [querySelectorAll](main_module._internal_.HTMLElement.md#queryselectorall)
- [releasePointerCapture](main_module._internal_.HTMLElement.md#releasepointercapture)
- [remove](main_module._internal_.HTMLElement.md#remove)
- [removeAttribute](main_module._internal_.HTMLElement.md#removeattribute)
- [removeAttributeNS](main_module._internal_.HTMLElement.md#removeattributens)
- [removeAttributeNode](main_module._internal_.HTMLElement.md#removeattributenode)
- [removeChild](main_module._internal_.HTMLElement.md#removechild)
- [removeEventListener](main_module._internal_.HTMLElement.md#removeeventlistener)
- [replaceChild](main_module._internal_.HTMLElement.md#replacechild)
- [replaceChildren](main_module._internal_.HTMLElement.md#replacechildren)
- [replaceWith](main_module._internal_.HTMLElement.md#replacewith)
- [requestFullscreen](main_module._internal_.HTMLElement.md#requestfullscreen)
- [requestPointerLock](main_module._internal_.HTMLElement.md#requestpointerlock)
- [scroll](main_module._internal_.HTMLElement.md#scroll)
- [scrollBy](main_module._internal_.HTMLElement.md#scrollby)
- [scrollIntoView](main_module._internal_.HTMLElement.md#scrollintoview)
- [scrollTo](main_module._internal_.HTMLElement.md#scrollto)
- [setAttribute](main_module._internal_.HTMLElement.md#setattribute)
- [setAttributeNS](main_module._internal_.HTMLElement.md#setattributens)
- [setAttributeNode](main_module._internal_.HTMLElement.md#setattributenode)
- [setAttributeNodeNS](main_module._internal_.HTMLElement.md#setattributenodens)
- [setPointerCapture](main_module._internal_.HTMLElement.md#setpointercapture)
- [toggleAttribute](main_module._internal_.HTMLElement.md#toggleattribute)
- [webkitMatchesSelector](main_module._internal_.HTMLElement.md#webkitmatchesselector)

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

### accessKey

• **accessKey**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6343

___

### accessKeyLabel

• `Readonly` **accessKeyLabel**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6344

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

• `Readonly` **assignedSlot**: ``null`` \| [`HTMLSlotElement`](../modules/main_module._internal_.md#htmlslotelement)

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

### autocapitalize

• **autocapitalize**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6345

___

### autofocus

• **autofocus**: `boolean`

#### Inherited from

[HTMLOrSVGElement](main_module._internal_.HTMLOrSVGElement.md).[autofocus](main_module._internal_.HTMLOrSVGElement.md#autofocus)

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

• `Readonly` **childNodes**: `NodeListOf`<[`ChildNode`](main_module._internal_.ChildNode.md)\>

Returns the children.

#### Inherited from

Element.childNodes

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10044

___

### children

• `Readonly` **children**: [`HTMLCollection`](../modules/main_module._internal_.md#htmlcollection)

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

• **className**: `string`

Returns the value of element's class content attribute. Can be set to change it.

#### Inherited from

Element.className

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4856

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

### contentEditable

• **contentEditable**: `string`

#### Inherited from

[ElementContentEditable](main_module._internal_.ElementContentEditable.md).[contentEditable](main_module._internal_.ElementContentEditable.md#contenteditable)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4971

___

### dataset

• `Readonly` **dataset**: [`DOMStringMap`](../modules/main_module._internal_.md#domstringmap)

#### Inherited from

[HTMLOrSVGElement](main_module._internal_.HTMLOrSVGElement.md).[dataset](main_module._internal_.HTMLOrSVGElement.md#dataset)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7548

___

### dir

• **dir**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6346

___

### draggable

• **draggable**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6347

___

### enterKeyHint

• **enterKeyHint**: `string`

#### Inherited from

[ElementContentEditable](main_module._internal_.ElementContentEditable.md).[enterKeyHint](main_module._internal_.ElementContentEditable.md#enterkeyhint)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4972

___

### firstChild

• `Readonly` **firstChild**: ``null`` \| [`ChildNode`](main_module._internal_.ChildNode.md)

Returns the first child.

#### Inherited from

Element.firstChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10046

___

### firstElementChild

• `Readonly` **firstElementChild**: ``null`` \| [`Element`](../modules/main_module._internal_.md#element)

Returns the first child that is an element, and null otherwise.

#### Inherited from

Element.firstElementChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10411

___

### hidden

• **hidden**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6348

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

### innerText

• **innerText**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6349

___

### inputMode

• **inputMode**: `string`

#### Inherited from

[ElementContentEditable](main_module._internal_.ElementContentEditable.md).[inputMode](main_module._internal_.ElementContentEditable.md#inputmode)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4973

___

### isConnected

• `Readonly` **isConnected**: `boolean`

Returns true if node is connected and false otherwise.

#### Inherited from

Element.isConnected

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10048

___

### isContentEditable

• `Readonly` **isContentEditable**: `boolean`

#### Inherited from

[ElementContentEditable](main_module._internal_.ElementContentEditable.md).[isContentEditable](main_module._internal_.ElementContentEditable.md#iscontenteditable)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4974

___

### lang

• **lang**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6350

___

### lastChild

• `Readonly` **lastChild**: ``null`` \| [`ChildNode`](main_module._internal_.ChildNode.md)

Returns the last child.

#### Inherited from

Element.lastChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10050

___

### lastElementChild

• `Readonly` **lastElementChild**: ``null`` \| [`Element`](../modules/main_module._internal_.md#element)

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

• `Readonly` **nextElementSibling**: ``null`` \| [`Element`](../modules/main_module._internal_.md#element)

Returns the first following sibling that is an element, and null otherwise.

#### Inherited from

Element.nextElementSibling

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10209

___

### nextSibling

• `Readonly` **nextSibling**: ``null`` \| [`ChildNode`](main_module._internal_.ChildNode.md)

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

[HTMLOrSVGElement](main_module._internal_.HTMLOrSVGElement.md).[nonce](main_module._internal_.HTMLOrSVGElement.md#nonce)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7549

___

### offsetHeight

• `Readonly` **offsetHeight**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6351

___

### offsetLeft

• `Readonly` **offsetLeft**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6352

___

### offsetParent

• `Readonly` **offsetParent**: ``null`` \| [`Element`](../modules/main_module._internal_.md#element)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6353

___

### offsetTop

• `Readonly` **offsetTop**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6354

___

### offsetWidth

• `Readonly` **offsetWidth**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6355

___

### onabort

• **onabort**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`UIEvent`](../modules/main_module._internal_.md#uievent)) => `any`

Fires when the user aborts the download.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onabort](main_module._internal_.GlobalEventHandlers.md#onabort)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5647

___

### onanimationcancel

• **onanimationcancel**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`AnimationEvent`](../modules/main_module._internal_.md#animationevent)) => `any`

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onanimationcancel](main_module._internal_.GlobalEventHandlers.md#onanimationcancel)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5648

___

### onanimationend

• **onanimationend**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`AnimationEvent`](../modules/main_module._internal_.md#animationevent)) => `any`

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onanimationend](main_module._internal_.GlobalEventHandlers.md#onanimationend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5649

___

### onanimationiteration

• **onanimationiteration**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`AnimationEvent`](../modules/main_module._internal_.md#animationevent)) => `any`

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onanimationiteration](main_module._internal_.GlobalEventHandlers.md#onanimationiteration)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5650

___

### onanimationstart

• **onanimationstart**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`AnimationEvent`](../modules/main_module._internal_.md#animationevent)) => `any`

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onanimationstart](main_module._internal_.GlobalEventHandlers.md#onanimationstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5651

___

### onauxclick

• **onauxclick**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/main_module._internal_.md#mouseevent)) => `any`

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onauxclick](main_module._internal_.GlobalEventHandlers.md#onauxclick)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5652

___

### onblur

• **onblur**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`FocusEvent`](../modules/main_module._internal_.md#focusevent)) => `any`

Fires when the object loses the input focus.

**`param`** The focus event.

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onblur](main_module._internal_.GlobalEventHandlers.md#onblur)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5657

___

### oncanplay

• **oncanplay**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

Occurs when playback is possible, but would require further buffering.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[oncanplay](main_module._internal_.GlobalEventHandlers.md#oncanplay)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5662

___

### oncanplaythrough

• **oncanplaythrough**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[oncanplaythrough](main_module._internal_.GlobalEventHandlers.md#oncanplaythrough)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5663

___

### onchange

• **onchange**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

Fires when the contents of the object or selection have changed.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onchange](main_module._internal_.GlobalEventHandlers.md#onchange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5668

___

### onclick

• **onclick**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/main_module._internal_.md#mouseevent)) => `any`

Fires when the user clicks the left mouse button on the object

**`param`** The mouse event.

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onclick](main_module._internal_.GlobalEventHandlers.md#onclick)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5673

___

### onclose

• **onclose**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onclose](main_module._internal_.GlobalEventHandlers.md#onclose)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5674

___

### oncontextmenu

• **oncontextmenu**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/main_module._internal_.md#mouseevent)) => `any`

Fires when the user clicks the right mouse button in the client area, opening the context menu.

**`param`** The mouse event.

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[oncontextmenu](main_module._internal_.GlobalEventHandlers.md#oncontextmenu)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5679

___

### oncopy

• **oncopy**: ``null`` \| (`this`: [`DocumentAndElementEventHandlers`](main_module._internal_.DocumentAndElementEventHandlers.md), `ev`: [`ClipboardEvent`](../modules/main_module._internal_.md#clipboardevent)) => `any`

#### Inherited from

[DocumentAndElementEventHandlers](main_module._internal_.DocumentAndElementEventHandlers.md).[oncopy](main_module._internal_.DocumentAndElementEventHandlers.md#oncopy)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4708

___

### oncuechange

• **oncuechange**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[oncuechange](main_module._internal_.GlobalEventHandlers.md#oncuechange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5680

___

### oncut

• **oncut**: ``null`` \| (`this`: [`DocumentAndElementEventHandlers`](main_module._internal_.DocumentAndElementEventHandlers.md), `ev`: [`ClipboardEvent`](../modules/main_module._internal_.md#clipboardevent)) => `any`

#### Inherited from

[DocumentAndElementEventHandlers](main_module._internal_.DocumentAndElementEventHandlers.md).[oncut](main_module._internal_.DocumentAndElementEventHandlers.md#oncut)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4709

___

### ondblclick

• **ondblclick**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/main_module._internal_.md#mouseevent)) => `any`

Fires when the user double-clicks the object.

**`param`** The mouse event.

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[ondblclick](main_module._internal_.GlobalEventHandlers.md#ondblclick)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5685

___

### ondrag

• **ondrag**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`DragEvent`](../modules/main_module._internal_.md#dragevent)) => `any`

Fires on the source object continuously during a drag operation.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[ondrag](main_module._internal_.GlobalEventHandlers.md#ondrag)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5690

___

### ondragend

• **ondragend**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`DragEvent`](../modules/main_module._internal_.md#dragevent)) => `any`

Fires on the source object when the user releases the mouse at the close of a drag operation.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[ondragend](main_module._internal_.GlobalEventHandlers.md#ondragend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5695

___

### ondragenter

• **ondragenter**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`DragEvent`](../modules/main_module._internal_.md#dragevent)) => `any`

Fires on the target element when the user drags the object to a valid drop target.

**`param`** The drag event.

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[ondragenter](main_module._internal_.GlobalEventHandlers.md#ondragenter)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5700

___

### ondragleave

• **ondragleave**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`DragEvent`](../modules/main_module._internal_.md#dragevent)) => `any`

Fires on the target object when the user moves the mouse out of a valid drop target during a drag operation.

**`param`** The drag event.

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[ondragleave](main_module._internal_.GlobalEventHandlers.md#ondragleave)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5705

___

### ondragover

• **ondragover**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`DragEvent`](../modules/main_module._internal_.md#dragevent)) => `any`

Fires on the target element continuously while the user drags the object over a valid drop target.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[ondragover](main_module._internal_.GlobalEventHandlers.md#ondragover)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5710

___

### ondragstart

• **ondragstart**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`DragEvent`](../modules/main_module._internal_.md#dragevent)) => `any`

Fires on the source object when the user starts to drag a text selection or selected object.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[ondragstart](main_module._internal_.GlobalEventHandlers.md#ondragstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5715

___

### ondrop

• **ondrop**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`DragEvent`](../modules/main_module._internal_.md#dragevent)) => `any`

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[ondrop](main_module._internal_.GlobalEventHandlers.md#ondrop)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5716

___

### ondurationchange

• **ondurationchange**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

Occurs when the duration attribute is updated.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[ondurationchange](main_module._internal_.GlobalEventHandlers.md#ondurationchange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5721

___

### onemptied

• **onemptied**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

Occurs when the media element is reset to its initial state.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onemptied](main_module._internal_.GlobalEventHandlers.md#onemptied)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5726

___

### onended

• **onended**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

Occurs when the end of playback is reached.

**`param`** The event

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onended](main_module._internal_.GlobalEventHandlers.md#onended)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5731

___

### onerror

• **onerror**: [`OnErrorEventHandler`](../modules/main_module._internal_.md#onerroreventhandler)

Fires when an error occurs during object loading.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onerror](main_module._internal_.GlobalEventHandlers.md#onerror)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5736

___

### onfocus

• **onfocus**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`FocusEvent`](../modules/main_module._internal_.md#focusevent)) => `any`

Fires when the object receives focus.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onfocus](main_module._internal_.GlobalEventHandlers.md#onfocus)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5741

___

### onformdata

• **onformdata**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`FormDataEvent`](../modules/main_module._internal_.md#formdataevent)) => `any`

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onformdata](main_module._internal_.GlobalEventHandlers.md#onformdata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5742

___

### onfullscreenchange

• **onfullscreenchange**: ``null`` \| (`this`: [`Element`](../modules/main_module._internal_.md#element), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

#### Inherited from

Element.onfullscreenchange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4867

___

### onfullscreenerror

• **onfullscreenerror**: ``null`` \| (`this`: [`Element`](../modules/main_module._internal_.md#element), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

#### Inherited from

Element.onfullscreenerror

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4868

___

### ongotpointercapture

• **ongotpointercapture**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/main_module._internal_.md#pointerevent)) => `any`

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[ongotpointercapture](main_module._internal_.GlobalEventHandlers.md#ongotpointercapture)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5743

___

### oninput

• **oninput**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[oninput](main_module._internal_.GlobalEventHandlers.md#oninput)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5744

___

### oninvalid

• **oninvalid**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[oninvalid](main_module._internal_.GlobalEventHandlers.md#oninvalid)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5745

___

### onkeydown

• **onkeydown**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`KeyboardEvent`](../modules/main_module._internal_.md#keyboardevent)) => `any`

Fires when the user presses a key.

**`param`** The keyboard event

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onkeydown](main_module._internal_.GlobalEventHandlers.md#onkeydown)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5750

___

### onkeypress

• **onkeypress**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`KeyboardEvent`](../modules/main_module._internal_.md#keyboardevent)) => `any`

Fires when the user presses an alphanumeric key.

**`param`** The event.

**`deprecated`**

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onkeypress](main_module._internal_.GlobalEventHandlers.md#onkeypress)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5756

___

### onkeyup

• **onkeyup**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`KeyboardEvent`](../modules/main_module._internal_.md#keyboardevent)) => `any`

Fires when the user releases a key.

**`param`** The keyboard event

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onkeyup](main_module._internal_.GlobalEventHandlers.md#onkeyup)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5761

___

### onload

• **onload**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

Fires immediately after the browser loads the object.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onload](main_module._internal_.GlobalEventHandlers.md#onload)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5766

___

### onloadeddata

• **onloadeddata**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

Occurs when media data is loaded at the current playback position.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onloadeddata](main_module._internal_.GlobalEventHandlers.md#onloadeddata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5771

___

### onloadedmetadata

• **onloadedmetadata**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

Occurs when the duration and dimensions of the media have been determined.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onloadedmetadata](main_module._internal_.GlobalEventHandlers.md#onloadedmetadata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5776

___

### onloadstart

• **onloadstart**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

Occurs when Internet Explorer begins looking for media data.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onloadstart](main_module._internal_.GlobalEventHandlers.md#onloadstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5781

___

### onlostpointercapture

• **onlostpointercapture**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/main_module._internal_.md#pointerevent)) => `any`

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onlostpointercapture](main_module._internal_.GlobalEventHandlers.md#onlostpointercapture)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5782

___

### onmousedown

• **onmousedown**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/main_module._internal_.md#mouseevent)) => `any`

Fires when the user clicks the object with either mouse button.

**`param`** The mouse event.

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onmousedown](main_module._internal_.GlobalEventHandlers.md#onmousedown)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5787

___

### onmouseenter

• **onmouseenter**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/main_module._internal_.md#mouseevent)) => `any`

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onmouseenter](main_module._internal_.GlobalEventHandlers.md#onmouseenter)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5788

___

### onmouseleave

• **onmouseleave**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/main_module._internal_.md#mouseevent)) => `any`

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onmouseleave](main_module._internal_.GlobalEventHandlers.md#onmouseleave)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5789

___

### onmousemove

• **onmousemove**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/main_module._internal_.md#mouseevent)) => `any`

Fires when the user moves the mouse over the object.

**`param`** The mouse event.

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onmousemove](main_module._internal_.GlobalEventHandlers.md#onmousemove)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5794

___

### onmouseout

• **onmouseout**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/main_module._internal_.md#mouseevent)) => `any`

Fires when the user moves the mouse pointer outside the boundaries of the object.

**`param`** The mouse event.

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onmouseout](main_module._internal_.GlobalEventHandlers.md#onmouseout)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5799

___

### onmouseover

• **onmouseover**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/main_module._internal_.md#mouseevent)) => `any`

Fires when the user moves the mouse pointer into the object.

**`param`** The mouse event.

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onmouseover](main_module._internal_.GlobalEventHandlers.md#onmouseover)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5804

___

### onmouseup

• **onmouseup**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/main_module._internal_.md#mouseevent)) => `any`

Fires when the user releases a mouse button while the mouse is over the object.

**`param`** The mouse event.

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onmouseup](main_module._internal_.GlobalEventHandlers.md#onmouseup)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5809

___

### onpaste

• **onpaste**: ``null`` \| (`this`: [`DocumentAndElementEventHandlers`](main_module._internal_.DocumentAndElementEventHandlers.md), `ev`: [`ClipboardEvent`](../modules/main_module._internal_.md#clipboardevent)) => `any`

#### Inherited from

[DocumentAndElementEventHandlers](main_module._internal_.DocumentAndElementEventHandlers.md).[onpaste](main_module._internal_.DocumentAndElementEventHandlers.md#onpaste)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4710

___

### onpause

• **onpause**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

Occurs when playback is paused.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onpause](main_module._internal_.GlobalEventHandlers.md#onpause)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5814

___

### onplay

• **onplay**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

Occurs when the play method is requested.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onplay](main_module._internal_.GlobalEventHandlers.md#onplay)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5819

___

### onplaying

• **onplaying**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

Occurs when the audio or video has started playing.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onplaying](main_module._internal_.GlobalEventHandlers.md#onplaying)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5824

___

### onpointercancel

• **onpointercancel**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/main_module._internal_.md#pointerevent)) => `any`

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onpointercancel](main_module._internal_.GlobalEventHandlers.md#onpointercancel)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5825

___

### onpointerdown

• **onpointerdown**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/main_module._internal_.md#pointerevent)) => `any`

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onpointerdown](main_module._internal_.GlobalEventHandlers.md#onpointerdown)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5826

___

### onpointerenter

• **onpointerenter**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/main_module._internal_.md#pointerevent)) => `any`

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onpointerenter](main_module._internal_.GlobalEventHandlers.md#onpointerenter)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5827

___

### onpointerleave

• **onpointerleave**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/main_module._internal_.md#pointerevent)) => `any`

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onpointerleave](main_module._internal_.GlobalEventHandlers.md#onpointerleave)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5828

___

### onpointermove

• **onpointermove**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/main_module._internal_.md#pointerevent)) => `any`

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onpointermove](main_module._internal_.GlobalEventHandlers.md#onpointermove)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5829

___

### onpointerout

• **onpointerout**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/main_module._internal_.md#pointerevent)) => `any`

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onpointerout](main_module._internal_.GlobalEventHandlers.md#onpointerout)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5830

___

### onpointerover

• **onpointerover**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/main_module._internal_.md#pointerevent)) => `any`

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onpointerover](main_module._internal_.GlobalEventHandlers.md#onpointerover)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5831

___

### onpointerup

• **onpointerup**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/main_module._internal_.md#pointerevent)) => `any`

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onpointerup](main_module._internal_.GlobalEventHandlers.md#onpointerup)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5832

___

### onprogress

• **onprogress**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`ProgressEvent`](../modules/main_module._internal_.md#progressevent)<[`EventTarget`](../modules/main_module._internal_.md#eventtarget)\>) => `any`

Occurs to indicate progress while downloading media data.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onprogress](main_module._internal_.GlobalEventHandlers.md#onprogress)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5837

___

### onratechange

• **onratechange**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

Occurs when the playback rate is increased or decreased.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onratechange](main_module._internal_.GlobalEventHandlers.md#onratechange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5842

___

### onreset

• **onreset**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

Fires when the user resets a form.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onreset](main_module._internal_.GlobalEventHandlers.md#onreset)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5847

___

### onresize

• **onresize**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`UIEvent`](../modules/main_module._internal_.md#uievent)) => `any`

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onresize](main_module._internal_.GlobalEventHandlers.md#onresize)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5848

___

### onscroll

• **onscroll**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

Fires when the user repositions the scroll box in the scroll bar on the object.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onscroll](main_module._internal_.GlobalEventHandlers.md#onscroll)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5853

___

### onsecuritypolicyviolation

• **onsecuritypolicyviolation**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`SecurityPolicyViolationEvent`](../modules/main_module._internal_.md#securitypolicyviolationevent)) => `any`

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onsecuritypolicyviolation](main_module._internal_.GlobalEventHandlers.md#onsecuritypolicyviolation)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5854

___

### onseeked

• **onseeked**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

Occurs when the seek operation ends.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onseeked](main_module._internal_.GlobalEventHandlers.md#onseeked)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5859

___

### onseeking

• **onseeking**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

Occurs when the current playback position is moved.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onseeking](main_module._internal_.GlobalEventHandlers.md#onseeking)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5864

___

### onselect

• **onselect**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

Fires when the current selection changes.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onselect](main_module._internal_.GlobalEventHandlers.md#onselect)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5869

___

### onselectionchange

• **onselectionchange**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onselectionchange](main_module._internal_.GlobalEventHandlers.md#onselectionchange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5870

___

### onselectstart

• **onselectstart**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onselectstart](main_module._internal_.GlobalEventHandlers.md#onselectstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5871

___

### onslotchange

• **onslotchange**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onslotchange](main_module._internal_.GlobalEventHandlers.md#onslotchange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5872

___

### onstalled

• **onstalled**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

Occurs when the download has stopped.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onstalled](main_module._internal_.GlobalEventHandlers.md#onstalled)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5877

___

### onsubmit

• **onsubmit**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`SubmitEvent`](../modules/main_module._internal_.md#submitevent)) => `any`

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onsubmit](main_module._internal_.GlobalEventHandlers.md#onsubmit)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5878

___

### onsuspend

• **onsuspend**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

Occurs if the load operation has been intentionally halted.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onsuspend](main_module._internal_.GlobalEventHandlers.md#onsuspend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5883

___

### ontimeupdate

• **ontimeupdate**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

Occurs to indicate the current playback position.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[ontimeupdate](main_module._internal_.GlobalEventHandlers.md#ontimeupdate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5888

___

### ontoggle

• **ontoggle**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[ontoggle](main_module._internal_.GlobalEventHandlers.md#ontoggle)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5889

___

### ontouchcancel

• `Optional` **ontouchcancel**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`TouchEvent`](../modules/main_module._internal_.md#touchevent)) => `any`

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[ontouchcancel](main_module._internal_.GlobalEventHandlers.md#ontouchcancel)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5890

___

### ontouchend

• `Optional` **ontouchend**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`TouchEvent`](../modules/main_module._internal_.md#touchevent)) => `any`

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[ontouchend](main_module._internal_.GlobalEventHandlers.md#ontouchend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5891

___

### ontouchmove

• `Optional` **ontouchmove**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`TouchEvent`](../modules/main_module._internal_.md#touchevent)) => `any`

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[ontouchmove](main_module._internal_.GlobalEventHandlers.md#ontouchmove)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5892

___

### ontouchstart

• `Optional` **ontouchstart**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`TouchEvent`](../modules/main_module._internal_.md#touchevent)) => `any`

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[ontouchstart](main_module._internal_.GlobalEventHandlers.md#ontouchstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5893

___

### ontransitioncancel

• **ontransitioncancel**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`TransitionEvent`](../modules/main_module._internal_.md#transitionevent)) => `any`

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[ontransitioncancel](main_module._internal_.GlobalEventHandlers.md#ontransitioncancel)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5894

___

### ontransitionend

• **ontransitionend**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`TransitionEvent`](../modules/main_module._internal_.md#transitionevent)) => `any`

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[ontransitionend](main_module._internal_.GlobalEventHandlers.md#ontransitionend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5895

___

### ontransitionrun

• **ontransitionrun**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`TransitionEvent`](../modules/main_module._internal_.md#transitionevent)) => `any`

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[ontransitionrun](main_module._internal_.GlobalEventHandlers.md#ontransitionrun)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5896

___

### ontransitionstart

• **ontransitionstart**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`TransitionEvent`](../modules/main_module._internal_.md#transitionevent)) => `any`

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[ontransitionstart](main_module._internal_.GlobalEventHandlers.md#ontransitionstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5897

___

### onvolumechange

• **onvolumechange**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

Occurs when the volume is changed, or playback is muted or unmuted.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onvolumechange](main_module._internal_.GlobalEventHandlers.md#onvolumechange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5902

___

### onwaiting

• **onwaiting**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

Occurs when playback stops because the next frame of a video resource is not available.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onwaiting](main_module._internal_.GlobalEventHandlers.md#onwaiting)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5907

___

### onwebkitanimationend

• **onwebkitanimationend**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

**`deprecated`** This is a legacy alias of `onanimationend`.

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onwebkitanimationend](main_module._internal_.GlobalEventHandlers.md#onwebkitanimationend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5909

___

### onwebkitanimationiteration

• **onwebkitanimationiteration**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

**`deprecated`** This is a legacy alias of `onanimationiteration`.

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onwebkitanimationiteration](main_module._internal_.GlobalEventHandlers.md#onwebkitanimationiteration)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5911

___

### onwebkitanimationstart

• **onwebkitanimationstart**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

**`deprecated`** This is a legacy alias of `onanimationstart`.

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onwebkitanimationstart](main_module._internal_.GlobalEventHandlers.md#onwebkitanimationstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5913

___

### onwebkittransitionend

• **onwebkittransitionend**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

**`deprecated`** This is a legacy alias of `ontransitionend`.

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onwebkittransitionend](main_module._internal_.GlobalEventHandlers.md#onwebkittransitionend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5915

___

### onwheel

• **onwheel**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`WheelEvent`](../modules/main_module._internal_.md#wheelevent)) => `any`

#### Inherited from

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[onwheel](main_module._internal_.GlobalEventHandlers.md#onwheel)

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

### outerText

• **outerText**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6356

___

### ownerDocument

• `Readonly` **ownerDocument**: [`Document`](../modules/main_module._internal_.md#document)

#### Inherited from

Element.ownerDocument

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4870

___

### parentElement

• `Readonly` **parentElement**: ``null`` \| [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

Returns the parent element.

#### Inherited from

Element.parentElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10061

___

### parentNode

• `Readonly` **parentNode**: ``null`` \| [`ParentNode`](main_module._internal_.ParentNode.md)

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

• `Readonly` **previousElementSibling**: ``null`` \| [`Element`](../modules/main_module._internal_.md#element)

Returns the first preceding sibling that is an element, and null otherwise.

#### Inherited from

Element.previousElementSibling

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10211

___

### previousSibling

• `Readonly` **previousSibling**: ``null`` \| [`ChildNode`](main_module._internal_.ChildNode.md)

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

• `Readonly` **shadowRoot**: ``null`` \| [`ShadowRoot`](../modules/main_module._internal_.md#shadowroot)

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

### spellcheck

• **spellcheck**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6357

___

### style

• `Readonly` **style**: `CSSStyleDeclaration`

#### Inherited from

[ElementCSSInlineStyle](main_module._internal_.ElementCSSInlineStyle.md).[style](main_module._internal_.ElementCSSInlineStyle.md#style)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4967

___

### tabIndex

• **tabIndex**: `number`

#### Inherited from

[HTMLOrSVGElement](main_module._internal_.HTMLOrSVGElement.md).[tabIndex](main_module._internal_.HTMLOrSVGElement.md#tabindex)

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

### title

• **title**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6358

___

### translate

• **translate**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6359

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`HTMLElementEventMap`](main_module._internal_.HTMLElementEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement), `ev`: [`HTMLElementEventMap`](main_module._internal_.HTMLElementEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](main_module._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[addEventListener](main_module._internal_.GlobalEventHandlers.md#addeventlistener)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6362

▸ **addEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/main_module._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](main_module._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[addEventListener](main_module._internal_.GlobalEventHandlers.md#addeventlistener)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6363

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

Element.after

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3574

___

### animate

▸ **animate**(`keyframes`, `options?`): [`Animation`](../modules/main_module._internal_.md#animation)

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyframes` | ``null`` \| [`PropertyIndexedKeyframes`](main_module._internal_.PropertyIndexedKeyframes.md) \| [`Keyframe`](main_module._internal_.Keyframe.md)[] |
| `options?` | `number` \| [`KeyframeAnimationOptions`](main_module._internal_.KeyframeAnimationOptions.md) |

#### Returns

[`Animation`](../modules/main_module._internal_.md#animation)

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
| `...nodes` | (`string` \| [`Node`](../modules/main_module._internal_.md#node))[] |

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
| `T` | extends [`Node`](../modules/main_module._internal_.md#node) |

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

### attachInternals

▸ **attachInternals**(): [`ElementInternals`](../modules/main_module._internal_.md#elementinternals)

#### Returns

[`ElementInternals`](../modules/main_module._internal_.md#elementinternals)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6360

___

### attachShadow

▸ **attachShadow**(`init`): [`ShadowRoot`](../modules/main_module._internal_.md#shadowroot)

Creates a shadow root for element and returns it.

#### Parameters

| Name | Type |
| :------ | :------ |
| `init` | [`ShadowRootInit`](main_module._internal_.ShadowRootInit.md) |

#### Returns

[`ShadowRoot`](../modules/main_module._internal_.md#shadowroot)

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
| `...nodes` | (`string` \| [`Node`](../modules/main_module._internal_.md#node))[] |

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

[HTMLOrSVGElement](main_module._internal_.HTMLOrSVGElement.md).[blur](main_module._internal_.HTMLOrSVGElement.md#blur)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7551

___

### click

▸ **click**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6361

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

Element.cloneNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10069

___

### closest

▸ **closest**<`K`\>(`selector`): ``null`` \| [`HTMLElementTagNameMap`](main_module._internal_.HTMLElementTagNameMap.md)[`K`]

Returns the first (starting at element) inclusive ancestor that matches selectors, and null otherwise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`HTMLElementTagNameMap`](main_module._internal_.HTMLElementTagNameMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `K` |

#### Returns

``null`` \| [`HTMLElementTagNameMap`](main_module._internal_.HTMLElementTagNameMap.md)[`K`]

#### Inherited from

Element.closest

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4887

▸ **closest**<`K`\>(`selector`): ``null`` \| [`SVGElementTagNameMap`](main_module._internal_.SVGElementTagNameMap.md)[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`SVGElementTagNameMap`](main_module._internal_.SVGElementTagNameMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `K` |

#### Returns

``null`` \| [`SVGElementTagNameMap`](main_module._internal_.SVGElementTagNameMap.md)[`K`]

#### Inherited from

Element.closest

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4888

▸ **closest**<`E`\>(`selectors`): ``null`` \| `E`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`Element`](../modules/main_module._internal_.md#element) = [`Element`](../modules/main_module._internal_.md#element) |

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
| `other` | [`Node`](../modules/main_module._internal_.md#node) |

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
| `other` | ``null`` \| [`Node`](../modules/main_module._internal_.md#node) |

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
| `event` | [`Event`](../modules/main_module._internal_.md#event) |

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
| `options?` | [`FocusOptions`](main_module._internal_.FocusOptions.md) |

#### Returns

`void`

#### Inherited from

[HTMLOrSVGElement](main_module._internal_.HTMLOrSVGElement.md).[focus](main_module._internal_.HTMLOrSVGElement.md#focus)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7552

___

### getAnimations

▸ **getAnimations**(`options?`): [`Animation`](../modules/main_module._internal_.md#animation)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`GetAnimationsOptions`](main_module._internal_.GetAnimationsOptions.md) |

#### Returns

[`Animation`](../modules/main_module._internal_.md#animation)[]

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

▸ **getAttributeNode**(`qualifiedName`): ``null`` \| [`Attr`](../modules/main_module._internal_.md#attr)

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |

#### Returns

``null`` \| [`Attr`](../modules/main_module._internal_.md#attr)

#### Inherited from

Element.getAttributeNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4896

___

### getAttributeNodeNS

▸ **getAttributeNodeNS**(`namespace`, `localName`): ``null`` \| [`Attr`](../modules/main_module._internal_.md#attr)

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |
| `localName` | `string` |

#### Returns

``null`` \| [`Attr`](../modules/main_module._internal_.md#attr)

#### Inherited from

Element.getAttributeNodeNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4897

___

### getBoundingClientRect

▸ **getBoundingClientRect**(): [`DOMRect`](../modules/main_module._internal_.md#domrect)

#### Returns

[`DOMRect`](../modules/main_module._internal_.md#domrect)

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

▸ **getElementsByClassName**(`classNames`): `HTMLCollectionOf`<[`Element`](../modules/main_module._internal_.md#element)\>

Returns a HTMLCollection of the elements in the object on which the method was invoked (a document or an element) that have all the classes given by classNames. The classNames argument is interpreted as a space-separated list of classes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `classNames` | `string` |

#### Returns

`HTMLCollectionOf`<[`Element`](../modules/main_module._internal_.md#element)\>

#### Inherited from

Element.getElementsByClassName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4901

___

### getElementsByTagName

▸ **getElementsByTagName**<`K`\>(`qualifiedName`): `HTMLCollectionOf`<[`HTMLElementTagNameMap`](main_module._internal_.HTMLElementTagNameMap.md)[`K`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`HTMLElementTagNameMap`](main_module._internal_.HTMLElementTagNameMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `K` |

#### Returns

`HTMLCollectionOf`<[`HTMLElementTagNameMap`](main_module._internal_.HTMLElementTagNameMap.md)[`K`]\>

#### Inherited from

Element.getElementsByTagName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4902

▸ **getElementsByTagName**<`K`\>(`qualifiedName`): `HTMLCollectionOf`<[`SVGElementTagNameMap`](main_module._internal_.SVGElementTagNameMap.md)[`K`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`SVGElementTagNameMap`](main_module._internal_.SVGElementTagNameMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `K` |

#### Returns

`HTMLCollectionOf`<[`SVGElementTagNameMap`](main_module._internal_.SVGElementTagNameMap.md)[`K`]\>

#### Inherited from

Element.getElementsByTagName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4903

▸ **getElementsByTagName**(`qualifiedName`): `HTMLCollectionOf`<[`Element`](../modules/main_module._internal_.md#element)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |

#### Returns

`HTMLCollectionOf`<[`Element`](../modules/main_module._internal_.md#element)\>

#### Inherited from

Element.getElementsByTagName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4904

___

### getElementsByTagNameNS

▸ **getElementsByTagNameNS**(`namespaceURI`, `localName`): `HTMLCollectionOf`<[`HTMLElement`](../modules/main_module._internal_.md#htmlelement)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespaceURI` | ``"http://www.w3.org/1999/xhtml"`` |
| `localName` | `string` |

#### Returns

`HTMLCollectionOf`<[`HTMLElement`](../modules/main_module._internal_.md#htmlelement)\>

#### Inherited from

Element.getElementsByTagNameNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4905

▸ **getElementsByTagNameNS**(`namespaceURI`, `localName`): `HTMLCollectionOf`<[`SVGElement`](../modules/main_module._internal_.md#svgelement)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespaceURI` | ``"http://www.w3.org/2000/svg"`` |
| `localName` | `string` |

#### Returns

`HTMLCollectionOf`<[`SVGElement`](../modules/main_module._internal_.md#svgelement)\>

#### Inherited from

Element.getElementsByTagNameNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4906

▸ **getElementsByTagNameNS**(`namespace`, `localName`): `HTMLCollectionOf`<[`Element`](../modules/main_module._internal_.md#element)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |
| `localName` | `string` |

#### Returns

`HTMLCollectionOf`<[`Element`](../modules/main_module._internal_.md#element)\>

#### Inherited from

Element.getElementsByTagNameNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4907

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

▸ **insertAdjacentElement**(`where`, `element`): ``null`` \| [`Element`](../modules/main_module._internal_.md#element)

#### Parameters

| Name | Type |
| :------ | :------ |
| `where` | [`InsertPosition`](../modules/main_module._internal_.md#insertposition) |
| `element` | [`Element`](../modules/main_module._internal_.md#element) |

#### Returns

``null`` \| [`Element`](../modules/main_module._internal_.md#element)

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
| `position` | [`InsertPosition`](../modules/main_module._internal_.md#insertposition) |
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
| `where` | [`InsertPosition`](../modules/main_module._internal_.md#insertposition) |
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
| `T` | extends [`Node`](../modules/main_module._internal_.md#node) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `T` |
| `child` | ``null`` \| [`Node`](../modules/main_module._internal_.md#node) |

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
| `otherNode` | ``null`` \| [`Node`](../modules/main_module._internal_.md#node) |

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
| `otherNode` | ``null`` \| [`Node`](../modules/main_module._internal_.md#node) |

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
| `...nodes` | (`string` \| [`Node`](../modules/main_module._internal_.md#node))[] |

#### Returns

`void`

#### Inherited from

Element.prepend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10425

___

### querySelector

▸ **querySelector**<`K`\>(`selectors`): ``null`` \| [`HTMLElementTagNameMap`](main_module._internal_.HTMLElementTagNameMap.md)[`K`]

Returns the first element that is a descendant of node that matches selectors.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`HTMLElementTagNameMap`](main_module._internal_.HTMLElementTagNameMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `K` |

#### Returns

``null`` \| [`HTMLElementTagNameMap`](main_module._internal_.HTMLElementTagNameMap.md)[`K`]

#### Inherited from

Element.querySelector

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10427

▸ **querySelector**<`K`\>(`selectors`): ``null`` \| [`SVGElementTagNameMap`](main_module._internal_.SVGElementTagNameMap.md)[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`SVGElementTagNameMap`](main_module._internal_.SVGElementTagNameMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `K` |

#### Returns

``null`` \| [`SVGElementTagNameMap`](main_module._internal_.SVGElementTagNameMap.md)[`K`]

#### Inherited from

Element.querySelector

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10428

▸ **querySelector**<`E`\>(`selectors`): ``null`` \| `E`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`Element`](../modules/main_module._internal_.md#element) = [`Element`](../modules/main_module._internal_.md#element) |

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

▸ **querySelectorAll**<`K`\>(`selectors`): `NodeListOf`<[`HTMLElementTagNameMap`](main_module._internal_.HTMLElementTagNameMap.md)[`K`]\>

Returns all element descendants of node that match selectors.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`HTMLElementTagNameMap`](main_module._internal_.HTMLElementTagNameMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `K` |

#### Returns

`NodeListOf`<[`HTMLElementTagNameMap`](main_module._internal_.HTMLElementTagNameMap.md)[`K`]\>

#### Inherited from

Element.querySelectorAll

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10431

▸ **querySelectorAll**<`K`\>(`selectors`): `NodeListOf`<[`SVGElementTagNameMap`](main_module._internal_.SVGElementTagNameMap.md)[`K`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`SVGElementTagNameMap`](main_module._internal_.SVGElementTagNameMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `K` |

#### Returns

`NodeListOf`<[`SVGElementTagNameMap`](main_module._internal_.SVGElementTagNameMap.md)[`K`]\>

#### Inherited from

Element.querySelectorAll

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10432

▸ **querySelectorAll**<`E`\>(`selectors`): `NodeListOf`<`E`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`Element`](../modules/main_module._internal_.md#element) = [`Element`](../modules/main_module._internal_.md#element) |

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

▸ **removeAttributeNode**(`attr`): [`Attr`](../modules/main_module._internal_.md#attr)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | [`Attr`](../modules/main_module._internal_.md#attr) |

#### Returns

[`Attr`](../modules/main_module._internal_.md#attr)

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
| `T` | extends [`Node`](../modules/main_module._internal_.md#node) |

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
| `K` | extends keyof [`HTMLElementEventMap`](main_module._internal_.HTMLElementEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement), `ev`: [`HTMLElementEventMap`](main_module._internal_.HTMLElementEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](main_module._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[removeEventListener](main_module._internal_.GlobalEventHandlers.md#removeeventlistener)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6364

▸ **removeEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/main_module._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`EventListenerOptions`](main_module._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

[GlobalEventHandlers](main_module._internal_.GlobalEventHandlers.md).[removeEventListener](main_module._internal_.GlobalEventHandlers.md#removeeventlistener)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6365

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
| `...nodes` | (`string` \| [`Node`](../modules/main_module._internal_.md#node))[] |

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
| `...nodes` | (`string` \| [`Node`](../modules/main_module._internal_.md#node))[] |

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
| `options?` | [`FullscreenOptions`](main_module._internal_.FullscreenOptions.md) |

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
| `options?` | [`ScrollToOptions`](main_module._internal_.ScrollToOptions.md) |

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
| `options?` | [`ScrollToOptions`](main_module._internal_.ScrollToOptions.md) |

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
| `arg?` | `boolean` \| [`ScrollIntoViewOptions`](main_module._internal_.ScrollIntoViewOptions.md) |

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
| `options?` | [`ScrollToOptions`](main_module._internal_.ScrollToOptions.md) |

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

▸ **setAttributeNode**(`attr`): ``null`` \| [`Attr`](../modules/main_module._internal_.md#attr)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | [`Attr`](../modules/main_module._internal_.md#attr) |

#### Returns

``null`` \| [`Attr`](../modules/main_module._internal_.md#attr)

#### Inherited from

Element.setAttributeNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4944

___

### setAttributeNodeNS

▸ **setAttributeNodeNS**(`attr`): ``null`` \| [`Attr`](../modules/main_module._internal_.md#attr)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | [`Attr`](../modules/main_module._internal_.md#attr) |

#### Returns

``null`` \| [`Attr`](../modules/main_module._internal_.md#attr)

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
