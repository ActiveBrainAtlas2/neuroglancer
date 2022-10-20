[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / XMLDocument

# Interface: XMLDocument

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).XMLDocument

An XML document. It inherits from the generic Document and does not add any specific methods or properties to it: nevertheless, several algorithms behave differently with the two types of documents.

## Hierarchy

- [`Document`](../modules/main_module._internal_.md#document)

  ↳ **`XMLDocument`**

## Table of contents

### Properties

- [ATTRIBUTE\_NODE](main_module._internal_.XMLDocument.md#attribute_node)
- [CDATA\_SECTION\_NODE](main_module._internal_.XMLDocument.md#cdata_section_node)
- [COMMENT\_NODE](main_module._internal_.XMLDocument.md#comment_node)
- [DOCUMENT\_FRAGMENT\_NODE](main_module._internal_.XMLDocument.md#document_fragment_node)
- [DOCUMENT\_NODE](main_module._internal_.XMLDocument.md#document_node)
- [DOCUMENT\_POSITION\_CONTAINED\_BY](main_module._internal_.XMLDocument.md#document_position_contained_by)
- [DOCUMENT\_POSITION\_CONTAINS](main_module._internal_.XMLDocument.md#document_position_contains)
- [DOCUMENT\_POSITION\_DISCONNECTED](main_module._internal_.XMLDocument.md#document_position_disconnected)
- [DOCUMENT\_POSITION\_FOLLOWING](main_module._internal_.XMLDocument.md#document_position_following)
- [DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC](main_module._internal_.XMLDocument.md#document_position_implementation_specific)
- [DOCUMENT\_POSITION\_PRECEDING](main_module._internal_.XMLDocument.md#document_position_preceding)
- [DOCUMENT\_TYPE\_NODE](main_module._internal_.XMLDocument.md#document_type_node)
- [ELEMENT\_NODE](main_module._internal_.XMLDocument.md#element_node)
- [ENTITY\_NODE](main_module._internal_.XMLDocument.md#entity_node)
- [ENTITY\_REFERENCE\_NODE](main_module._internal_.XMLDocument.md#entity_reference_node)
- [NOTATION\_NODE](main_module._internal_.XMLDocument.md#notation_node)
- [PROCESSING\_INSTRUCTION\_NODE](main_module._internal_.XMLDocument.md#processing_instruction_node)
- [TEXT\_NODE](main_module._internal_.XMLDocument.md#text_node)
- [URL](main_module._internal_.XMLDocument.md#url)
- [activeElement](main_module._internal_.XMLDocument.md#activeelement)
- [alinkColor](main_module._internal_.XMLDocument.md#alinkcolor)
- [all](main_module._internal_.XMLDocument.md#all)
- [anchors](main_module._internal_.XMLDocument.md#anchors)
- [applets](main_module._internal_.XMLDocument.md#applets)
- [baseURI](main_module._internal_.XMLDocument.md#baseuri)
- [bgColor](main_module._internal_.XMLDocument.md#bgcolor)
- [body](main_module._internal_.XMLDocument.md#body)
- [characterSet](main_module._internal_.XMLDocument.md#characterset)
- [charset](main_module._internal_.XMLDocument.md#charset)
- [childElementCount](main_module._internal_.XMLDocument.md#childelementcount)
- [childNodes](main_module._internal_.XMLDocument.md#childnodes)
- [children](main_module._internal_.XMLDocument.md#children)
- [compatMode](main_module._internal_.XMLDocument.md#compatmode)
- [contentType](main_module._internal_.XMLDocument.md#contenttype)
- [cookie](main_module._internal_.XMLDocument.md#cookie)
- [currentScript](main_module._internal_.XMLDocument.md#currentscript)
- [defaultView](main_module._internal_.XMLDocument.md#defaultview)
- [designMode](main_module._internal_.XMLDocument.md#designmode)
- [dir](main_module._internal_.XMLDocument.md#dir)
- [doctype](main_module._internal_.XMLDocument.md#doctype)
- [documentElement](main_module._internal_.XMLDocument.md#documentelement)
- [documentURI](main_module._internal_.XMLDocument.md#documenturi)
- [domain](main_module._internal_.XMLDocument.md#domain)
- [embeds](main_module._internal_.XMLDocument.md#embeds)
- [fgColor](main_module._internal_.XMLDocument.md#fgcolor)
- [firstChild](main_module._internal_.XMLDocument.md#firstchild)
- [firstElementChild](main_module._internal_.XMLDocument.md#firstelementchild)
- [fonts](main_module._internal_.XMLDocument.md#fonts)
- [forms](main_module._internal_.XMLDocument.md#forms)
- [fullscreen](main_module._internal_.XMLDocument.md#fullscreen)
- [fullscreenElement](main_module._internal_.XMLDocument.md#fullscreenelement)
- [fullscreenEnabled](main_module._internal_.XMLDocument.md#fullscreenenabled)
- [head](main_module._internal_.XMLDocument.md#head)
- [hidden](main_module._internal_.XMLDocument.md#hidden)
- [images](main_module._internal_.XMLDocument.md#images)
- [implementation](main_module._internal_.XMLDocument.md#implementation)
- [inputEncoding](main_module._internal_.XMLDocument.md#inputencoding)
- [isConnected](main_module._internal_.XMLDocument.md#isconnected)
- [lastChild](main_module._internal_.XMLDocument.md#lastchild)
- [lastElementChild](main_module._internal_.XMLDocument.md#lastelementchild)
- [lastModified](main_module._internal_.XMLDocument.md#lastmodified)
- [linkColor](main_module._internal_.XMLDocument.md#linkcolor)
- [links](main_module._internal_.XMLDocument.md#links)
- [nextSibling](main_module._internal_.XMLDocument.md#nextsibling)
- [nodeName](main_module._internal_.XMLDocument.md#nodename)
- [nodeType](main_module._internal_.XMLDocument.md#nodetype)
- [nodeValue](main_module._internal_.XMLDocument.md#nodevalue)
- [onabort](main_module._internal_.XMLDocument.md#onabort)
- [onanimationcancel](main_module._internal_.XMLDocument.md#onanimationcancel)
- [onanimationend](main_module._internal_.XMLDocument.md#onanimationend)
- [onanimationiteration](main_module._internal_.XMLDocument.md#onanimationiteration)
- [onanimationstart](main_module._internal_.XMLDocument.md#onanimationstart)
- [onauxclick](main_module._internal_.XMLDocument.md#onauxclick)
- [onblur](main_module._internal_.XMLDocument.md#onblur)
- [oncanplay](main_module._internal_.XMLDocument.md#oncanplay)
- [oncanplaythrough](main_module._internal_.XMLDocument.md#oncanplaythrough)
- [onchange](main_module._internal_.XMLDocument.md#onchange)
- [onclick](main_module._internal_.XMLDocument.md#onclick)
- [onclose](main_module._internal_.XMLDocument.md#onclose)
- [oncontextmenu](main_module._internal_.XMLDocument.md#oncontextmenu)
- [oncopy](main_module._internal_.XMLDocument.md#oncopy)
- [oncuechange](main_module._internal_.XMLDocument.md#oncuechange)
- [oncut](main_module._internal_.XMLDocument.md#oncut)
- [ondblclick](main_module._internal_.XMLDocument.md#ondblclick)
- [ondrag](main_module._internal_.XMLDocument.md#ondrag)
- [ondragend](main_module._internal_.XMLDocument.md#ondragend)
- [ondragenter](main_module._internal_.XMLDocument.md#ondragenter)
- [ondragleave](main_module._internal_.XMLDocument.md#ondragleave)
- [ondragover](main_module._internal_.XMLDocument.md#ondragover)
- [ondragstart](main_module._internal_.XMLDocument.md#ondragstart)
- [ondrop](main_module._internal_.XMLDocument.md#ondrop)
- [ondurationchange](main_module._internal_.XMLDocument.md#ondurationchange)
- [onemptied](main_module._internal_.XMLDocument.md#onemptied)
- [onended](main_module._internal_.XMLDocument.md#onended)
- [onerror](main_module._internal_.XMLDocument.md#onerror)
- [onfocus](main_module._internal_.XMLDocument.md#onfocus)
- [onformdata](main_module._internal_.XMLDocument.md#onformdata)
- [onfullscreenchange](main_module._internal_.XMLDocument.md#onfullscreenchange)
- [onfullscreenerror](main_module._internal_.XMLDocument.md#onfullscreenerror)
- [ongotpointercapture](main_module._internal_.XMLDocument.md#ongotpointercapture)
- [oninput](main_module._internal_.XMLDocument.md#oninput)
- [oninvalid](main_module._internal_.XMLDocument.md#oninvalid)
- [onkeydown](main_module._internal_.XMLDocument.md#onkeydown)
- [onkeypress](main_module._internal_.XMLDocument.md#onkeypress)
- [onkeyup](main_module._internal_.XMLDocument.md#onkeyup)
- [onload](main_module._internal_.XMLDocument.md#onload)
- [onloadeddata](main_module._internal_.XMLDocument.md#onloadeddata)
- [onloadedmetadata](main_module._internal_.XMLDocument.md#onloadedmetadata)
- [onloadstart](main_module._internal_.XMLDocument.md#onloadstart)
- [onlostpointercapture](main_module._internal_.XMLDocument.md#onlostpointercapture)
- [onmousedown](main_module._internal_.XMLDocument.md#onmousedown)
- [onmouseenter](main_module._internal_.XMLDocument.md#onmouseenter)
- [onmouseleave](main_module._internal_.XMLDocument.md#onmouseleave)
- [onmousemove](main_module._internal_.XMLDocument.md#onmousemove)
- [onmouseout](main_module._internal_.XMLDocument.md#onmouseout)
- [onmouseover](main_module._internal_.XMLDocument.md#onmouseover)
- [onmouseup](main_module._internal_.XMLDocument.md#onmouseup)
- [onpaste](main_module._internal_.XMLDocument.md#onpaste)
- [onpause](main_module._internal_.XMLDocument.md#onpause)
- [onplay](main_module._internal_.XMLDocument.md#onplay)
- [onplaying](main_module._internal_.XMLDocument.md#onplaying)
- [onpointercancel](main_module._internal_.XMLDocument.md#onpointercancel)
- [onpointerdown](main_module._internal_.XMLDocument.md#onpointerdown)
- [onpointerenter](main_module._internal_.XMLDocument.md#onpointerenter)
- [onpointerleave](main_module._internal_.XMLDocument.md#onpointerleave)
- [onpointerlockchange](main_module._internal_.XMLDocument.md#onpointerlockchange)
- [onpointerlockerror](main_module._internal_.XMLDocument.md#onpointerlockerror)
- [onpointermove](main_module._internal_.XMLDocument.md#onpointermove)
- [onpointerout](main_module._internal_.XMLDocument.md#onpointerout)
- [onpointerover](main_module._internal_.XMLDocument.md#onpointerover)
- [onpointerup](main_module._internal_.XMLDocument.md#onpointerup)
- [onprogress](main_module._internal_.XMLDocument.md#onprogress)
- [onratechange](main_module._internal_.XMLDocument.md#onratechange)
- [onreadystatechange](main_module._internal_.XMLDocument.md#onreadystatechange)
- [onreset](main_module._internal_.XMLDocument.md#onreset)
- [onresize](main_module._internal_.XMLDocument.md#onresize)
- [onscroll](main_module._internal_.XMLDocument.md#onscroll)
- [onsecuritypolicyviolation](main_module._internal_.XMLDocument.md#onsecuritypolicyviolation)
- [onseeked](main_module._internal_.XMLDocument.md#onseeked)
- [onseeking](main_module._internal_.XMLDocument.md#onseeking)
- [onselect](main_module._internal_.XMLDocument.md#onselect)
- [onselectionchange](main_module._internal_.XMLDocument.md#onselectionchange)
- [onselectstart](main_module._internal_.XMLDocument.md#onselectstart)
- [onslotchange](main_module._internal_.XMLDocument.md#onslotchange)
- [onstalled](main_module._internal_.XMLDocument.md#onstalled)
- [onsubmit](main_module._internal_.XMLDocument.md#onsubmit)
- [onsuspend](main_module._internal_.XMLDocument.md#onsuspend)
- [ontimeupdate](main_module._internal_.XMLDocument.md#ontimeupdate)
- [ontoggle](main_module._internal_.XMLDocument.md#ontoggle)
- [ontouchcancel](main_module._internal_.XMLDocument.md#ontouchcancel)
- [ontouchend](main_module._internal_.XMLDocument.md#ontouchend)
- [ontouchmove](main_module._internal_.XMLDocument.md#ontouchmove)
- [ontouchstart](main_module._internal_.XMLDocument.md#ontouchstart)
- [ontransitioncancel](main_module._internal_.XMLDocument.md#ontransitioncancel)
- [ontransitionend](main_module._internal_.XMLDocument.md#ontransitionend)
- [ontransitionrun](main_module._internal_.XMLDocument.md#ontransitionrun)
- [ontransitionstart](main_module._internal_.XMLDocument.md#ontransitionstart)
- [onvisibilitychange](main_module._internal_.XMLDocument.md#onvisibilitychange)
- [onvolumechange](main_module._internal_.XMLDocument.md#onvolumechange)
- [onwaiting](main_module._internal_.XMLDocument.md#onwaiting)
- [onwebkitanimationend](main_module._internal_.XMLDocument.md#onwebkitanimationend)
- [onwebkitanimationiteration](main_module._internal_.XMLDocument.md#onwebkitanimationiteration)
- [onwebkitanimationstart](main_module._internal_.XMLDocument.md#onwebkitanimationstart)
- [onwebkittransitionend](main_module._internal_.XMLDocument.md#onwebkittransitionend)
- [onwheel](main_module._internal_.XMLDocument.md#onwheel)
- [ownerDocument](main_module._internal_.XMLDocument.md#ownerdocument)
- [parentElement](main_module._internal_.XMLDocument.md#parentelement)
- [parentNode](main_module._internal_.XMLDocument.md#parentnode)
- [pictureInPictureElement](main_module._internal_.XMLDocument.md#pictureinpictureelement)
- [pictureInPictureEnabled](main_module._internal_.XMLDocument.md#pictureinpictureenabled)
- [plugins](main_module._internal_.XMLDocument.md#plugins)
- [pointerLockElement](main_module._internal_.XMLDocument.md#pointerlockelement)
- [previousSibling](main_module._internal_.XMLDocument.md#previoussibling)
- [readyState](main_module._internal_.XMLDocument.md#readystate)
- [referrer](main_module._internal_.XMLDocument.md#referrer)
- [rootElement](main_module._internal_.XMLDocument.md#rootelement)
- [scripts](main_module._internal_.XMLDocument.md#scripts)
- [scrollingElement](main_module._internal_.XMLDocument.md#scrollingelement)
- [styleSheets](main_module._internal_.XMLDocument.md#stylesheets)
- [textContent](main_module._internal_.XMLDocument.md#textcontent)
- [timeline](main_module._internal_.XMLDocument.md#timeline)
- [title](main_module._internal_.XMLDocument.md#title)
- [visibilityState](main_module._internal_.XMLDocument.md#visibilitystate)
- [vlinkColor](main_module._internal_.XMLDocument.md#vlinkcolor)

### Accessors

- [location](main_module._internal_.XMLDocument.md#location)

### Methods

- [addEventListener](main_module._internal_.XMLDocument.md#addeventlistener)
- [adoptNode](main_module._internal_.XMLDocument.md#adoptnode)
- [append](main_module._internal_.XMLDocument.md#append)
- [appendChild](main_module._internal_.XMLDocument.md#appendchild)
- [captureEvents](main_module._internal_.XMLDocument.md#captureevents)
- [caretRangeFromPoint](main_module._internal_.XMLDocument.md#caretrangefrompoint)
- [clear](main_module._internal_.XMLDocument.md#clear)
- [cloneNode](main_module._internal_.XMLDocument.md#clonenode)
- [close](main_module._internal_.XMLDocument.md#close)
- [compareDocumentPosition](main_module._internal_.XMLDocument.md#comparedocumentposition)
- [contains](main_module._internal_.XMLDocument.md#contains)
- [createAttribute](main_module._internal_.XMLDocument.md#createattribute)
- [createAttributeNS](main_module._internal_.XMLDocument.md#createattributens)
- [createCDATASection](main_module._internal_.XMLDocument.md#createcdatasection)
- [createComment](main_module._internal_.XMLDocument.md#createcomment)
- [createDocumentFragment](main_module._internal_.XMLDocument.md#createdocumentfragment)
- [createElement](main_module._internal_.XMLDocument.md#createelement)
- [createElementNS](main_module._internal_.XMLDocument.md#createelementns)
- [createEvent](main_module._internal_.XMLDocument.md#createevent)
- [createExpression](main_module._internal_.XMLDocument.md#createexpression)
- [createNSResolver](main_module._internal_.XMLDocument.md#creatensresolver)
- [createNodeIterator](main_module._internal_.XMLDocument.md#createnodeiterator)
- [createProcessingInstruction](main_module._internal_.XMLDocument.md#createprocessinginstruction)
- [createRange](main_module._internal_.XMLDocument.md#createrange)
- [createTextNode](main_module._internal_.XMLDocument.md#createtextnode)
- [createTreeWalker](main_module._internal_.XMLDocument.md#createtreewalker)
- [dispatchEvent](main_module._internal_.XMLDocument.md#dispatchevent)
- [elementFromPoint](main_module._internal_.XMLDocument.md#elementfrompoint)
- [elementsFromPoint](main_module._internal_.XMLDocument.md#elementsfrompoint)
- [evaluate](main_module._internal_.XMLDocument.md#evaluate)
- [execCommand](main_module._internal_.XMLDocument.md#execcommand)
- [exitFullscreen](main_module._internal_.XMLDocument.md#exitfullscreen)
- [exitPictureInPicture](main_module._internal_.XMLDocument.md#exitpictureinpicture)
- [exitPointerLock](main_module._internal_.XMLDocument.md#exitpointerlock)
- [getAnimations](main_module._internal_.XMLDocument.md#getanimations)
- [getElementById](main_module._internal_.XMLDocument.md#getelementbyid)
- [getElementsByClassName](main_module._internal_.XMLDocument.md#getelementsbyclassname)
- [getElementsByName](main_module._internal_.XMLDocument.md#getelementsbyname)
- [getElementsByTagName](main_module._internal_.XMLDocument.md#getelementsbytagname)
- [getElementsByTagNameNS](main_module._internal_.XMLDocument.md#getelementsbytagnamens)
- [getRootNode](main_module._internal_.XMLDocument.md#getrootnode)
- [getSelection](main_module._internal_.XMLDocument.md#getselection)
- [hasChildNodes](main_module._internal_.XMLDocument.md#haschildnodes)
- [hasFocus](main_module._internal_.XMLDocument.md#hasfocus)
- [hasStorageAccess](main_module._internal_.XMLDocument.md#hasstorageaccess)
- [importNode](main_module._internal_.XMLDocument.md#importnode)
- [insertBefore](main_module._internal_.XMLDocument.md#insertbefore)
- [isDefaultNamespace](main_module._internal_.XMLDocument.md#isdefaultnamespace)
- [isEqualNode](main_module._internal_.XMLDocument.md#isequalnode)
- [isSameNode](main_module._internal_.XMLDocument.md#issamenode)
- [lookupNamespaceURI](main_module._internal_.XMLDocument.md#lookupnamespaceuri)
- [lookupPrefix](main_module._internal_.XMLDocument.md#lookupprefix)
- [normalize](main_module._internal_.XMLDocument.md#normalize)
- [open](main_module._internal_.XMLDocument.md#open)
- [prepend](main_module._internal_.XMLDocument.md#prepend)
- [queryCommandEnabled](main_module._internal_.XMLDocument.md#querycommandenabled)
- [queryCommandIndeterm](main_module._internal_.XMLDocument.md#querycommandindeterm)
- [queryCommandState](main_module._internal_.XMLDocument.md#querycommandstate)
- [queryCommandSupported](main_module._internal_.XMLDocument.md#querycommandsupported)
- [queryCommandValue](main_module._internal_.XMLDocument.md#querycommandvalue)
- [querySelector](main_module._internal_.XMLDocument.md#queryselector)
- [querySelectorAll](main_module._internal_.XMLDocument.md#queryselectorall)
- [releaseEvents](main_module._internal_.XMLDocument.md#releaseevents)
- [removeChild](main_module._internal_.XMLDocument.md#removechild)
- [removeEventListener](main_module._internal_.XMLDocument.md#removeeventlistener)
- [replaceChild](main_module._internal_.XMLDocument.md#replacechild)
- [replaceChildren](main_module._internal_.XMLDocument.md#replacechildren)
- [requestStorageAccess](main_module._internal_.XMLDocument.md#requeststorageaccess)
- [write](main_module._internal_.XMLDocument.md#write)
- [writeln](main_module._internal_.XMLDocument.md#writeln)

## Properties

### ATTRIBUTE\_NODE

• `Readonly` **ATTRIBUTE\_NODE**: `number`

#### Inherited from

Document.ATTRIBUTE\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10089

___

### CDATA\_SECTION\_NODE

• `Readonly` **CDATA\_SECTION\_NODE**: `number`

node is a CDATASection node.

#### Inherited from

Document.CDATA\_SECTION\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10091

___

### COMMENT\_NODE

• `Readonly` **COMMENT\_NODE**: `number`

node is a Comment node.

#### Inherited from

Document.COMMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10093

___

### DOCUMENT\_FRAGMENT\_NODE

• `Readonly` **DOCUMENT\_FRAGMENT\_NODE**: `number`

node is a DocumentFragment node.

#### Inherited from

Document.DOCUMENT\_FRAGMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10095

___

### DOCUMENT\_NODE

• `Readonly` **DOCUMENT\_NODE**: `number`

node is a document.

#### Inherited from

Document.DOCUMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10097

___

### DOCUMENT\_POSITION\_CONTAINED\_BY

• `Readonly` **DOCUMENT\_POSITION\_CONTAINED\_BY**: `number`

Set when other is a descendant of node.

#### Inherited from

Document.DOCUMENT\_POSITION\_CONTAINED\_BY

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10099

___

### DOCUMENT\_POSITION\_CONTAINS

• `Readonly` **DOCUMENT\_POSITION\_CONTAINS**: `number`

Set when other is an ancestor of node.

#### Inherited from

Document.DOCUMENT\_POSITION\_CONTAINS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10101

___

### DOCUMENT\_POSITION\_DISCONNECTED

• `Readonly` **DOCUMENT\_POSITION\_DISCONNECTED**: `number`

Set when node and other are not in the same tree.

#### Inherited from

Document.DOCUMENT\_POSITION\_DISCONNECTED

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10103

___

### DOCUMENT\_POSITION\_FOLLOWING

• `Readonly` **DOCUMENT\_POSITION\_FOLLOWING**: `number`

Set when other is following node.

#### Inherited from

Document.DOCUMENT\_POSITION\_FOLLOWING

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10105

___

### DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC

• `Readonly` **DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC**: `number`

#### Inherited from

Document.DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10106

___

### DOCUMENT\_POSITION\_PRECEDING

• `Readonly` **DOCUMENT\_POSITION\_PRECEDING**: `number`

Set when other is preceding node.

#### Inherited from

Document.DOCUMENT\_POSITION\_PRECEDING

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10108

___

### DOCUMENT\_TYPE\_NODE

• `Readonly` **DOCUMENT\_TYPE\_NODE**: `number`

node is a doctype.

#### Inherited from

Document.DOCUMENT\_TYPE\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10110

___

### ELEMENT\_NODE

• `Readonly` **ELEMENT\_NODE**: `number`

node is an element.

#### Inherited from

Document.ELEMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10112

___

### ENTITY\_NODE

• `Readonly` **ENTITY\_NODE**: `number`

#### Inherited from

Document.ENTITY\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10113

___

### ENTITY\_REFERENCE\_NODE

• `Readonly` **ENTITY\_REFERENCE\_NODE**: `number`

#### Inherited from

Document.ENTITY\_REFERENCE\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10114

___

### NOTATION\_NODE

• `Readonly` **NOTATION\_NODE**: `number`

#### Inherited from

Document.NOTATION\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10115

___

### PROCESSING\_INSTRUCTION\_NODE

• `Readonly` **PROCESSING\_INSTRUCTION\_NODE**: `number`

node is a ProcessingInstruction node.

#### Inherited from

Document.PROCESSING\_INSTRUCTION\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10117

___

### TEXT\_NODE

• `Readonly` **TEXT\_NODE**: `number`

node is a Text node.

#### Inherited from

Document.TEXT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10119

___

### URL

• `Readonly` **URL**: `string`

Sets or gets the URL for the current document.

#### Inherited from

Document.URL

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4308

___

### activeElement

• `Readonly` **activeElement**: ``null`` \| [`Element`](../modules/main_module._internal_.md#element)

Returns the deepest element in the document through which or to which key events are being routed. This is, roughly speaking, the focused element in the document.

For the purposes of this API, when a child browsing context is focused, its container is focused in the parent browsing context. For example, if the user moves the focus to a text control in an iframe, the iframe is the element returned by the activeElement API in the iframe's node document.

Similarly, when the focused element is in a different node tree than documentOrShadowRoot, the element returned will be the host that's located in the same node tree as documentOrShadowRoot if documentOrShadowRoot is a shadow-including inclusive ancestor of the focused element, and null if not.

#### Inherited from

Document.activeElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4736

___

### alinkColor

• **alinkColor**: `string`

Sets or gets the color of all active links in the document.

**`Deprecated`**

#### Inherited from

Document.alinkColor

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4313

___

### all

• `Readonly` **all**: `HTMLAllCollection`

Returns a reference to the collection of elements contained by the object.

**`Deprecated`**

#### Inherited from

Document.all

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4318

___

### anchors

• `Readonly` **anchors**: `HTMLCollectionOf`<[`HTMLAnchorElement`](../modules/main_module._internal_.md#htmlanchorelement)\>

Retrieves a collection of all a objects that have a name and/or id property. Objects in this collection are in HTML source order.

**`Deprecated`**

#### Inherited from

Document.anchors

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4323

___

### applets

• `Readonly` **applets**: [`HTMLCollection`](../modules/main_module._internal_.md#htmlcollection)

Retrieves a collection of all applet objects in the document.

**`Deprecated`**

#### Inherited from

Document.applets

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4328

___

### baseURI

• `Readonly` **baseURI**: `string`

Returns node's node document's document base URL.

#### Inherited from

Document.baseURI

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10042

___

### bgColor

• **bgColor**: `string`

Deprecated. Sets or retrieves a value that indicates the background color behind the object.

**`Deprecated`**

#### Inherited from

Document.bgColor

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4333

___

### body

• **body**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

Specifies the beginning and end of the document body.

#### Inherited from

Document.body

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4335

___

### characterSet

• `Readonly` **characterSet**: `string`

Returns document's encoding.

#### Inherited from

Document.characterSet

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4337

___

### charset

• `Readonly` **charset**: `string`

Gets or sets the character set used to encode the object.

**`Deprecated`**

This is a legacy alias of `characterSet`.

#### Inherited from

Document.charset

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4342

___

### childElementCount

• `Readonly` **childElementCount**: `number`

#### Inherited from

Document.childElementCount

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10407

___

### childNodes

• `Readonly` **childNodes**: `NodeListOf`<[`ChildNode`](main_module._internal_.ChildNode.md)\>

Returns the children.

#### Inherited from

Document.childNodes

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10044

___

### children

• `Readonly` **children**: [`HTMLCollection`](../modules/main_module._internal_.md#htmlcollection)

Returns the child elements.

#### Inherited from

Document.children

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10409

___

### compatMode

• `Readonly` **compatMode**: `string`

Gets a value that indicates whether standards-compliant mode is switched on for the object.

#### Inherited from

Document.compatMode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4344

___

### contentType

• `Readonly` **contentType**: `string`

Returns document's content type.

#### Inherited from

Document.contentType

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4346

___

### cookie

• **cookie**: `string`

Returns the HTTP cookies that apply to the Document. If there are no cookies or cookies can't be applied to this resource, the empty string will be returned.

Can be set, to add a new cookie to the element's set of HTTP cookies.

If the contents are sandboxed into a unique origin (e.g. in an iframe with the sandbox attribute), a "SecurityError" DOMException will be thrown on getting and setting.

#### Inherited from

Document.cookie

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4354

___

### currentScript

• `Readonly` **currentScript**: ``null`` \| [`HTMLOrSVGScriptElement`](../modules/main_module._internal_.md#htmlorsvgscriptelement)

Returns the script element, or the SVG script element, that is currently executing, as long as the element represents a classic script. In the case of reentrant script execution, returns the one that most recently started executing amongst those that have not yet finished executing.

Returns null if the Document is not currently executing a script or SVG script element (e.g., because the running script is an event handler, or a timeout), or if the currently executing script or SVG script element represents a module script.

#### Inherited from

Document.currentScript

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4360

___

### defaultView

• `Readonly` **defaultView**: ``null`` \| [`Window`](../modules/main_module._internal_.md#window) & typeof `globalThis`

Returns the Window object of the active document.

#### Inherited from

Document.defaultView

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4362

___

### designMode

• **designMode**: `string`

Sets or gets a value that indicates whether the document can be edited.

#### Inherited from

Document.designMode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4364

___

### dir

• **dir**: `string`

Sets or retrieves a value that indicates the reading order of the object.

#### Inherited from

Document.dir

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4366

___

### doctype

• `Readonly` **doctype**: ``null`` \| [`DocumentType`](../modules/main_module._internal_.md#documenttype)

Gets an object representing the document type declaration associated with the current document.

#### Inherited from

Document.doctype

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4368

___

### documentElement

• `Readonly` **documentElement**: [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

Gets a reference to the root node of the document.

#### Inherited from

Document.documentElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4370

___

### documentURI

• `Readonly` **documentURI**: `string`

Returns document's URL.

#### Inherited from

Document.documentURI

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4372

___

### domain

• **domain**: `string`

Sets or gets the security domain of the document.

#### Inherited from

Document.domain

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4374

___

### embeds

• `Readonly` **embeds**: `HTMLCollectionOf`<[`HTMLEmbedElement`](../modules/main_module._internal_.md#htmlembedelement)\>

Retrieves a collection of all embed objects in the document.

#### Inherited from

Document.embeds

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4376

___

### fgColor

• **fgColor**: `string`

Sets or gets the foreground (text) color of the document.

**`Deprecated`**

#### Inherited from

Document.fgColor

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4381

___

### firstChild

• `Readonly` **firstChild**: ``null`` \| [`ChildNode`](main_module._internal_.ChildNode.md)

Returns the first child.

#### Inherited from

Document.firstChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10046

___

### firstElementChild

• `Readonly` **firstElementChild**: ``null`` \| [`Element`](../modules/main_module._internal_.md#element)

Returns the first child that is an element, and null otherwise.

#### Inherited from

Document.firstElementChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10411

___

### fonts

• `Readonly` **fonts**: `FontFaceSet`

#### Inherited from

Document.fonts

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5387

___

### forms

• `Readonly` **forms**: `HTMLCollectionOf`<`HTMLFormElement`\>

Retrieves a collection, in source order, of all form objects in the document.

#### Inherited from

Document.forms

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4383

___

### fullscreen

• `Readonly` **fullscreen**: `boolean`

**`Deprecated`**

#### Inherited from

Document.fullscreen

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4385

___

### fullscreenElement

• `Readonly` **fullscreenElement**: ``null`` \| [`Element`](../modules/main_module._internal_.md#element)

Returns document's fullscreen element.

#### Inherited from

Document.fullscreenElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4738

___

### fullscreenEnabled

• `Readonly` **fullscreenEnabled**: `boolean`

Returns true if document has the ability to display elements fullscreen and fullscreen is supported, or false otherwise.

#### Inherited from

Document.fullscreenEnabled

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4387

___

### head

• `Readonly` **head**: [`HTMLHeadElement`](../modules/main_module._internal_.md#htmlheadelement)

Returns the head element.

#### Inherited from

Document.head

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4389

___

### hidden

• `Readonly` **hidden**: `boolean`

#### Inherited from

Document.hidden

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4390

___

### images

• `Readonly` **images**: `HTMLCollectionOf`<[`HTMLImageElement`](../modules/main_module._internal_.md#htmlimageelement)\>

Retrieves a collection, in source order, of img objects in the document.

#### Inherited from

Document.images

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4392

___

### implementation

• `Readonly` **implementation**: [`DOMImplementation`](../modules/main_module._internal_.md#domimplementation)

Gets the implementation object of the current document.

#### Inherited from

Document.implementation

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4394

___

### inputEncoding

• `Readonly` **inputEncoding**: `string`

Returns the character encoding used to create the webpage that is loaded into the document object.

**`Deprecated`**

This is a legacy alias of `characterSet`.

#### Inherited from

Document.inputEncoding

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4399

___

### isConnected

• `Readonly` **isConnected**: `boolean`

Returns true if node is connected and false otherwise.

#### Inherited from

Document.isConnected

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10048

___

### lastChild

• `Readonly` **lastChild**: ``null`` \| [`ChildNode`](main_module._internal_.ChildNode.md)

Returns the last child.

#### Inherited from

Document.lastChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10050

___

### lastElementChild

• `Readonly` **lastElementChild**: ``null`` \| [`Element`](../modules/main_module._internal_.md#element)

Returns the last child that is an element, and null otherwise.

#### Inherited from

Document.lastElementChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10413

___

### lastModified

• `Readonly` **lastModified**: `string`

Gets the date that the page was last modified, if the page supplies one.

#### Inherited from

Document.lastModified

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4401

___

### linkColor

• **linkColor**: `string`

Sets or gets the color of the document links.

**`Deprecated`**

#### Inherited from

Document.linkColor

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4406

___

### links

• `Readonly` **links**: `HTMLCollectionOf`<[`HTMLAnchorElement`](../modules/main_module._internal_.md#htmlanchorelement) \| [`HTMLAreaElement`](../modules/main_module._internal_.md#htmlareaelement)\>

Retrieves a collection of all a objects that specify the href property and all area objects in the document.

#### Inherited from

Document.links

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4408

___

### nextSibling

• `Readonly` **nextSibling**: ``null`` \| [`ChildNode`](main_module._internal_.ChildNode.md)

Returns the next sibling.

#### Inherited from

Document.nextSibling

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10052

___

### nodeName

• `Readonly` **nodeName**: `string`

Returns a string appropriate for the type of node.

#### Inherited from

Document.nodeName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10054

___

### nodeType

• `Readonly` **nodeType**: `number`

Returns the type of node.

#### Inherited from

Document.nodeType

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10056

___

### nodeValue

• **nodeValue**: ``null`` \| `string`

#### Inherited from

Document.nodeValue

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10057

___

### onabort

• **onabort**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`UIEvent`](../modules/main_module._internal_.md#uievent)) => `any`

Fires when the user aborts the download.

**`Param`**

The event.

#### Inherited from

Document.onabort

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5647

___

### onanimationcancel

• **onanimationcancel**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`AnimationEvent`](../modules/main_module._internal_.md#animationevent)) => `any`

#### Inherited from

Document.onanimationcancel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5648

___

### onanimationend

• **onanimationend**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`AnimationEvent`](../modules/main_module._internal_.md#animationevent)) => `any`

#### Inherited from

Document.onanimationend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5649

___

### onanimationiteration

• **onanimationiteration**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`AnimationEvent`](../modules/main_module._internal_.md#animationevent)) => `any`

#### Inherited from

Document.onanimationiteration

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5650

___

### onanimationstart

• **onanimationstart**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`AnimationEvent`](../modules/main_module._internal_.md#animationevent)) => `any`

#### Inherited from

Document.onanimationstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5651

___

### onauxclick

• **onauxclick**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/main_module._internal_.md#mouseevent)) => `any`

#### Inherited from

Document.onauxclick

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5652

___

### onblur

• **onblur**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`FocusEvent`](../modules/main_module._internal_.md#focusevent)) => `any`

Fires when the object loses the input focus.

**`Param`**

The focus event.

#### Inherited from

Document.onblur

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5657

___

### oncanplay

• **oncanplay**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

Occurs when playback is possible, but would require further buffering.

**`Param`**

The event.

#### Inherited from

Document.oncanplay

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5662

___

### oncanplaythrough

• **oncanplaythrough**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

#### Inherited from

Document.oncanplaythrough

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5663

___

### onchange

• **onchange**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

Fires when the contents of the object or selection have changed.

**`Param`**

The event.

#### Inherited from

Document.onchange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5668

___

### onclick

• **onclick**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/main_module._internal_.md#mouseevent)) => `any`

Fires when the user clicks the left mouse button on the object

**`Param`**

The mouse event.

#### Inherited from

Document.onclick

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5673

___

### onclose

• **onclose**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

#### Inherited from

Document.onclose

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5674

___

### oncontextmenu

• **oncontextmenu**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/main_module._internal_.md#mouseevent)) => `any`

Fires when the user clicks the right mouse button in the client area, opening the context menu.

**`Param`**

The mouse event.

#### Inherited from

Document.oncontextmenu

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5679

___

### oncopy

• **oncopy**: ``null`` \| (`this`: [`DocumentAndElementEventHandlers`](main_module._internal_.DocumentAndElementEventHandlers.md), `ev`: [`ClipboardEvent`](../modules/main_module._internal_.md#clipboardevent)) => `any`

#### Inherited from

Document.oncopy

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4708

___

### oncuechange

• **oncuechange**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

#### Inherited from

Document.oncuechange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5680

___

### oncut

• **oncut**: ``null`` \| (`this`: [`DocumentAndElementEventHandlers`](main_module._internal_.DocumentAndElementEventHandlers.md), `ev`: [`ClipboardEvent`](../modules/main_module._internal_.md#clipboardevent)) => `any`

#### Inherited from

Document.oncut

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4709

___

### ondblclick

• **ondblclick**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/main_module._internal_.md#mouseevent)) => `any`

Fires when the user double-clicks the object.

**`Param`**

The mouse event.

#### Inherited from

Document.ondblclick

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5685

___

### ondrag

• **ondrag**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`DragEvent`](../modules/main_module._internal_.md#dragevent)) => `any`

Fires on the source object continuously during a drag operation.

**`Param`**

The event.

#### Inherited from

Document.ondrag

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5690

___

### ondragend

• **ondragend**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`DragEvent`](../modules/main_module._internal_.md#dragevent)) => `any`

Fires on the source object when the user releases the mouse at the close of a drag operation.

**`Param`**

The event.

#### Inherited from

Document.ondragend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5695

___

### ondragenter

• **ondragenter**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`DragEvent`](../modules/main_module._internal_.md#dragevent)) => `any`

Fires on the target element when the user drags the object to a valid drop target.

**`Param`**

The drag event.

#### Inherited from

Document.ondragenter

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5700

___

### ondragleave

• **ondragleave**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`DragEvent`](../modules/main_module._internal_.md#dragevent)) => `any`

Fires on the target object when the user moves the mouse out of a valid drop target during a drag operation.

**`Param`**

The drag event.

#### Inherited from

Document.ondragleave

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5705

___

### ondragover

• **ondragover**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`DragEvent`](../modules/main_module._internal_.md#dragevent)) => `any`

Fires on the target element continuously while the user drags the object over a valid drop target.

**`Param`**

The event.

#### Inherited from

Document.ondragover

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5710

___

### ondragstart

• **ondragstart**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`DragEvent`](../modules/main_module._internal_.md#dragevent)) => `any`

Fires on the source object when the user starts to drag a text selection or selected object.

**`Param`**

The event.

#### Inherited from

Document.ondragstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5715

___

### ondrop

• **ondrop**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`DragEvent`](../modules/main_module._internal_.md#dragevent)) => `any`

#### Inherited from

Document.ondrop

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5716

___

### ondurationchange

• **ondurationchange**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

Occurs when the duration attribute is updated.

**`Param`**

The event.

#### Inherited from

Document.ondurationchange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5721

___

### onemptied

• **onemptied**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

Occurs when the media element is reset to its initial state.

**`Param`**

The event.

#### Inherited from

Document.onemptied

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5726

___

### onended

• **onended**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

Occurs when the end of playback is reached.

**`Param`**

The event

#### Inherited from

Document.onended

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5731

___

### onerror

• **onerror**: [`OnErrorEventHandler`](../modules/main_module._internal_.md#onerroreventhandler)

Fires when an error occurs during object loading.

**`Param`**

The event.

#### Inherited from

Document.onerror

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5736

___

### onfocus

• **onfocus**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`FocusEvent`](../modules/main_module._internal_.md#focusevent)) => `any`

Fires when the object receives focus.

**`Param`**

The event.

#### Inherited from

Document.onfocus

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5741

___

### onformdata

• **onformdata**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`FormDataEvent`](../modules/main_module._internal_.md#formdataevent)) => `any`

#### Inherited from

Document.onformdata

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5742

___

### onfullscreenchange

• **onfullscreenchange**: ``null`` \| (`this`: [`Document`](../modules/main_module._internal_.md#document), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

#### Inherited from

Document.onfullscreenchange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4412

___

### onfullscreenerror

• **onfullscreenerror**: ``null`` \| (`this`: [`Document`](../modules/main_module._internal_.md#document), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

#### Inherited from

Document.onfullscreenerror

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4413

___

### ongotpointercapture

• **ongotpointercapture**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/main_module._internal_.md#pointerevent)) => `any`

#### Inherited from

Document.ongotpointercapture

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5743

___

### oninput

• **oninput**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

#### Inherited from

Document.oninput

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5744

___

### oninvalid

• **oninvalid**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

#### Inherited from

Document.oninvalid

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5745

___

### onkeydown

• **onkeydown**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`KeyboardEvent`](../modules/main_module._internal_.md#keyboardevent)) => `any`

Fires when the user presses a key.

**`Param`**

The keyboard event

#### Inherited from

Document.onkeydown

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5750

___

### onkeypress

• **onkeypress**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`KeyboardEvent`](../modules/main_module._internal_.md#keyboardevent)) => `any`

Fires when the user presses an alphanumeric key.

**`Param`**

The event.

**`Deprecated`**

#### Inherited from

Document.onkeypress

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5756

___

### onkeyup

• **onkeyup**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`KeyboardEvent`](../modules/main_module._internal_.md#keyboardevent)) => `any`

Fires when the user releases a key.

**`Param`**

The keyboard event

#### Inherited from

Document.onkeyup

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5761

___

### onload

• **onload**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

Fires immediately after the browser loads the object.

**`Param`**

The event.

#### Inherited from

Document.onload

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5766

___

### onloadeddata

• **onloadeddata**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

Occurs when media data is loaded at the current playback position.

**`Param`**

The event.

#### Inherited from

Document.onloadeddata

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5771

___

### onloadedmetadata

• **onloadedmetadata**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

Occurs when the duration and dimensions of the media have been determined.

**`Param`**

The event.

#### Inherited from

Document.onloadedmetadata

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5776

___

### onloadstart

• **onloadstart**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

Occurs when Internet Explorer begins looking for media data.

**`Param`**

The event.

#### Inherited from

Document.onloadstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5781

___

### onlostpointercapture

• **onlostpointercapture**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/main_module._internal_.md#pointerevent)) => `any`

#### Inherited from

Document.onlostpointercapture

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5782

___

### onmousedown

• **onmousedown**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/main_module._internal_.md#mouseevent)) => `any`

Fires when the user clicks the object with either mouse button.

**`Param`**

The mouse event.

#### Inherited from

Document.onmousedown

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5787

___

### onmouseenter

• **onmouseenter**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/main_module._internal_.md#mouseevent)) => `any`

#### Inherited from

Document.onmouseenter

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5788

___

### onmouseleave

• **onmouseleave**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/main_module._internal_.md#mouseevent)) => `any`

#### Inherited from

Document.onmouseleave

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5789

___

### onmousemove

• **onmousemove**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/main_module._internal_.md#mouseevent)) => `any`

Fires when the user moves the mouse over the object.

**`Param`**

The mouse event.

#### Inherited from

Document.onmousemove

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5794

___

### onmouseout

• **onmouseout**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/main_module._internal_.md#mouseevent)) => `any`

Fires when the user moves the mouse pointer outside the boundaries of the object.

**`Param`**

The mouse event.

#### Inherited from

Document.onmouseout

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5799

___

### onmouseover

• **onmouseover**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/main_module._internal_.md#mouseevent)) => `any`

Fires when the user moves the mouse pointer into the object.

**`Param`**

The mouse event.

#### Inherited from

Document.onmouseover

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5804

___

### onmouseup

• **onmouseup**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/main_module._internal_.md#mouseevent)) => `any`

Fires when the user releases a mouse button while the mouse is over the object.

**`Param`**

The mouse event.

#### Inherited from

Document.onmouseup

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5809

___

### onpaste

• **onpaste**: ``null`` \| (`this`: [`DocumentAndElementEventHandlers`](main_module._internal_.DocumentAndElementEventHandlers.md), `ev`: [`ClipboardEvent`](../modules/main_module._internal_.md#clipboardevent)) => `any`

#### Inherited from

Document.onpaste

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4710

___

### onpause

• **onpause**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

Occurs when playback is paused.

**`Param`**

The event.

#### Inherited from

Document.onpause

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5814

___

### onplay

• **onplay**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

Occurs when the play method is requested.

**`Param`**

The event.

#### Inherited from

Document.onplay

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5819

___

### onplaying

• **onplaying**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

Occurs when the audio or video has started playing.

**`Param`**

The event.

#### Inherited from

Document.onplaying

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5824

___

### onpointercancel

• **onpointercancel**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/main_module._internal_.md#pointerevent)) => `any`

#### Inherited from

Document.onpointercancel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5825

___

### onpointerdown

• **onpointerdown**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/main_module._internal_.md#pointerevent)) => `any`

#### Inherited from

Document.onpointerdown

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5826

___

### onpointerenter

• **onpointerenter**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/main_module._internal_.md#pointerevent)) => `any`

#### Inherited from

Document.onpointerenter

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5827

___

### onpointerleave

• **onpointerleave**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/main_module._internal_.md#pointerevent)) => `any`

#### Inherited from

Document.onpointerleave

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5828

___

### onpointerlockchange

• **onpointerlockchange**: ``null`` \| (`this`: [`Document`](../modules/main_module._internal_.md#document), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

#### Inherited from

Document.onpointerlockchange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4414

___

### onpointerlockerror

• **onpointerlockerror**: ``null`` \| (`this`: [`Document`](../modules/main_module._internal_.md#document), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

#### Inherited from

Document.onpointerlockerror

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4415

___

### onpointermove

• **onpointermove**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/main_module._internal_.md#pointerevent)) => `any`

#### Inherited from

Document.onpointermove

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5829

___

### onpointerout

• **onpointerout**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/main_module._internal_.md#pointerevent)) => `any`

#### Inherited from

Document.onpointerout

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5830

___

### onpointerover

• **onpointerover**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/main_module._internal_.md#pointerevent)) => `any`

#### Inherited from

Document.onpointerover

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5831

___

### onpointerup

• **onpointerup**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/main_module._internal_.md#pointerevent)) => `any`

#### Inherited from

Document.onpointerup

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5832

___

### onprogress

• **onprogress**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`ProgressEvent`](../modules/main_module._internal_.md#progressevent)<[`EventTarget`](../modules/main_module._internal_.md#eventtarget)\>) => `any`

Occurs to indicate progress while downloading media data.

**`Param`**

The event.

#### Inherited from

Document.onprogress

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5837

___

### onratechange

• **onratechange**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

Occurs when the playback rate is increased or decreased.

**`Param`**

The event.

#### Inherited from

Document.onratechange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5842

___

### onreadystatechange

• **onreadystatechange**: ``null`` \| (`this`: [`Document`](../modules/main_module._internal_.md#document), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

Fires when the state of the object has changed.

**`Param`**

The event

#### Inherited from

Document.onreadystatechange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4420

___

### onreset

• **onreset**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

Fires when the user resets a form.

**`Param`**

The event.

#### Inherited from

Document.onreset

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5847

___

### onresize

• **onresize**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`UIEvent`](../modules/main_module._internal_.md#uievent)) => `any`

#### Inherited from

Document.onresize

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5848

___

### onscroll

• **onscroll**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

Fires when the user repositions the scroll box in the scroll bar on the object.

**`Param`**

The event.

#### Inherited from

Document.onscroll

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5853

___

### onsecuritypolicyviolation

• **onsecuritypolicyviolation**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`SecurityPolicyViolationEvent`](../modules/main_module._internal_.md#securitypolicyviolationevent)) => `any`

#### Inherited from

Document.onsecuritypolicyviolation

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5854

___

### onseeked

• **onseeked**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

Occurs when the seek operation ends.

**`Param`**

The event.

#### Inherited from

Document.onseeked

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5859

___

### onseeking

• **onseeking**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

Occurs when the current playback position is moved.

**`Param`**

The event.

#### Inherited from

Document.onseeking

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5864

___

### onselect

• **onselect**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

Fires when the current selection changes.

**`Param`**

The event.

#### Inherited from

Document.onselect

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5869

___

### onselectionchange

• **onselectionchange**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

#### Inherited from

Document.onselectionchange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5870

___

### onselectstart

• **onselectstart**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

#### Inherited from

Document.onselectstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5871

___

### onslotchange

• **onslotchange**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

#### Inherited from

Document.onslotchange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5872

___

### onstalled

• **onstalled**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

Occurs when the download has stopped.

**`Param`**

The event.

#### Inherited from

Document.onstalled

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5877

___

### onsubmit

• **onsubmit**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`SubmitEvent`](../modules/main_module._internal_.md#submitevent)) => `any`

#### Inherited from

Document.onsubmit

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5878

___

### onsuspend

• **onsuspend**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

Occurs if the load operation has been intentionally halted.

**`Param`**

The event.

#### Inherited from

Document.onsuspend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5883

___

### ontimeupdate

• **ontimeupdate**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

Occurs to indicate the current playback position.

**`Param`**

The event.

#### Inherited from

Document.ontimeupdate

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5888

___

### ontoggle

• **ontoggle**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

#### Inherited from

Document.ontoggle

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5889

___

### ontouchcancel

• `Optional` **ontouchcancel**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`TouchEvent`](../modules/main_module._internal_.md#touchevent)) => `any`

#### Inherited from

Document.ontouchcancel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5890

___

### ontouchend

• `Optional` **ontouchend**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`TouchEvent`](../modules/main_module._internal_.md#touchevent)) => `any`

#### Inherited from

Document.ontouchend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5891

___

### ontouchmove

• `Optional` **ontouchmove**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`TouchEvent`](../modules/main_module._internal_.md#touchevent)) => `any`

#### Inherited from

Document.ontouchmove

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5892

___

### ontouchstart

• `Optional` **ontouchstart**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`TouchEvent`](../modules/main_module._internal_.md#touchevent)) => `any`

#### Inherited from

Document.ontouchstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5893

___

### ontransitioncancel

• **ontransitioncancel**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`TransitionEvent`](../modules/main_module._internal_.md#transitionevent)) => `any`

#### Inherited from

Document.ontransitioncancel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5894

___

### ontransitionend

• **ontransitionend**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`TransitionEvent`](../modules/main_module._internal_.md#transitionevent)) => `any`

#### Inherited from

Document.ontransitionend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5895

___

### ontransitionrun

• **ontransitionrun**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`TransitionEvent`](../modules/main_module._internal_.md#transitionevent)) => `any`

#### Inherited from

Document.ontransitionrun

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5896

___

### ontransitionstart

• **ontransitionstart**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`TransitionEvent`](../modules/main_module._internal_.md#transitionevent)) => `any`

#### Inherited from

Document.ontransitionstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5897

___

### onvisibilitychange

• **onvisibilitychange**: ``null`` \| (`this`: [`Document`](../modules/main_module._internal_.md#document), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

#### Inherited from

Document.onvisibilitychange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4421

___

### onvolumechange

• **onvolumechange**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

Occurs when the volume is changed, or playback is muted or unmuted.

**`Param`**

The event.

#### Inherited from

Document.onvolumechange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5902

___

### onwaiting

• **onwaiting**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

Occurs when playback stops because the next frame of a video resource is not available.

**`Param`**

The event.

#### Inherited from

Document.onwaiting

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5907

___

### onwebkitanimationend

• **onwebkitanimationend**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

**`Deprecated`**

This is a legacy alias of `onanimationend`.

#### Inherited from

Document.onwebkitanimationend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5909

___

### onwebkitanimationiteration

• **onwebkitanimationiteration**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

**`Deprecated`**

This is a legacy alias of `onanimationiteration`.

#### Inherited from

Document.onwebkitanimationiteration

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5911

___

### onwebkitanimationstart

• **onwebkitanimationstart**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

**`Deprecated`**

This is a legacy alias of `onanimationstart`.

#### Inherited from

Document.onwebkitanimationstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5913

___

### onwebkittransitionend

• **onwebkittransitionend**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/main_module._internal_.md#event)) => `any`

**`Deprecated`**

This is a legacy alias of `ontransitionend`.

#### Inherited from

Document.onwebkittransitionend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5915

___

### onwheel

• **onwheel**: ``null`` \| (`this`: [`GlobalEventHandlers`](main_module._internal_.GlobalEventHandlers.md), `ev`: [`WheelEvent`](../modules/main_module._internal_.md#wheelevent)) => `any`

#### Inherited from

Document.onwheel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5916

___

### ownerDocument

• `Readonly` **ownerDocument**: ``null``

#### Inherited from

Document.ownerDocument

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4422

___

### parentElement

• `Readonly` **parentElement**: ``null`` \| [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

Returns the parent element.

#### Inherited from

Document.parentElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10061

___

### parentNode

• `Readonly` **parentNode**: ``null`` \| [`ParentNode`](main_module._internal_.ParentNode.md)

Returns the parent.

#### Inherited from

Document.parentNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10063

___

### pictureInPictureElement

• `Readonly` **pictureInPictureElement**: ``null`` \| [`Element`](../modules/main_module._internal_.md#element)

#### Inherited from

Document.pictureInPictureElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4739

___

### pictureInPictureEnabled

• `Readonly` **pictureInPictureEnabled**: `boolean`

#### Inherited from

Document.pictureInPictureEnabled

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4423

___

### plugins

• `Readonly` **plugins**: `HTMLCollectionOf`<[`HTMLEmbedElement`](../modules/main_module._internal_.md#htmlembedelement)\>

Return an HTMLCollection of the embed elements in the Document.

#### Inherited from

Document.plugins

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4425

___

### pointerLockElement

• `Readonly` **pointerLockElement**: ``null`` \| [`Element`](../modules/main_module._internal_.md#element)

#### Inherited from

Document.pointerLockElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4740

___

### previousSibling

• `Readonly` **previousSibling**: ``null`` \| [`ChildNode`](main_module._internal_.ChildNode.md)

Returns the previous sibling.

#### Inherited from

Document.previousSibling

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10065

___

### readyState

• `Readonly` **readyState**: [`DocumentReadyState`](../modules/main_module._internal_.md#documentreadystate)

Retrieves a value that indicates the current state of the object.

#### Inherited from

Document.readyState

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4427

___

### referrer

• `Readonly` **referrer**: `string`

Gets the URL of the location that referred the user to the current page.

#### Inherited from

Document.referrer

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4429

___

### rootElement

• `Readonly` **rootElement**: ``null`` \| [`SVGSVGElement`](../modules/main_module._internal_.md#svgsvgelement)

**`Deprecated`**

#### Inherited from

Document.rootElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4431

___

### scripts

• `Readonly` **scripts**: `HTMLCollectionOf`<[`HTMLScriptElement`](../modules/main_module._internal_.md#htmlscriptelement)\>

Retrieves a collection of all script objects in the document.

#### Inherited from

Document.scripts

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4433

___

### scrollingElement

• `Readonly` **scrollingElement**: ``null`` \| [`Element`](../modules/main_module._internal_.md#element)

#### Inherited from

Document.scrollingElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4434

___

### styleSheets

• `Readonly` **styleSheets**: `StyleSheetList`

Retrieves a collection of styleSheet objects representing the style sheets that correspond to each instance of a link or style object in the document.

#### Inherited from

Document.styleSheets

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4742

___

### textContent

• **textContent**: ``null`` \| `string`

#### Inherited from

Document.textContent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10066

___

### timeline

• `Readonly` **timeline**: [`DocumentTimeline`](../modules/main_module._internal_.md#documenttimeline)

#### Inherited from

Document.timeline

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4435

___

### title

• **title**: `string`

Contains the title of the document.

#### Inherited from

Document.title

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4437

___

### visibilityState

• `Readonly` **visibilityState**: [`DocumentVisibilityState`](../modules/main_module._internal_.md#documentvisibilitystate)

#### Inherited from

Document.visibilityState

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4438

___

### vlinkColor

• **vlinkColor**: `string`

Sets or gets the color of the links that the user has visited.

**`Deprecated`**

#### Inherited from

Document.vlinkColor

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4443

## Accessors

### location

• `get` **location**(): [`Location`](../modules/main_module._internal_.md#location)

Contains information about the current URL.

#### Returns

[`Location`](../modules/main_module._internal_.md#location)

#### Inherited from

Document.location

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4410

• `set` **location**(`href`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `href` | `string` \| [`Location`](../modules/main_module._internal_.md#location) |

#### Returns

`void`

#### Inherited from

Document.location

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4411

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`DocumentEventMap`](main_module._internal_.DocumentEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`XMLDocument`](../modules/main_module._internal_.md#xmldocument), `ev`: [`DocumentEventMap`](main_module._internal_.DocumentEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](main_module._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

Document.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16904

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

Document.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16905

___

### adoptNode

▸ **adoptNode**<`T`\>(`node`): `T`

Moves node from another document and returns it.

If node is a document, throws a "NotSupportedError" DOMException or, if node is a shadow root, throws a "HierarchyRequestError" DOMException.

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

Document.adoptNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4449

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

Document.append

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

Document.appendChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10067

___

### captureEvents

▸ **captureEvents**(): `void`

**`Deprecated`**

#### Returns

`void`

#### Inherited from

Document.captureEvents

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4451

___

### caretRangeFromPoint

▸ **caretRangeFromPoint**(`x`, `y`): ``null`` \| [`Range`](../modules/main_module._internal_.md#range)

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

``null`` \| [`Range`](../modules/main_module._internal_.md#range)

#### Inherited from

Document.caretRangeFromPoint

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4453

___

### clear

▸ **clear**(): `void`

**`Deprecated`**

#### Returns

`void`

#### Inherited from

Document.clear

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4455

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

Document.cloneNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10069

___

### close

▸ **close**(): `void`

Closes an output stream and forces the sent data to display.

#### Returns

`void`

#### Inherited from

Document.close

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4457

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

Document.compareDocumentPosition

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

Document.contains

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10073

___

### createAttribute

▸ **createAttribute**(`localName`): [`Attr`](../modules/main_module._internal_.md#attr)

Creates an attribute object with a specified name.

#### Parameters

| Name | Type |
| :------ | :------ |
| `localName` | `string` |

#### Returns

[`Attr`](../modules/main_module._internal_.md#attr)

#### Inherited from

Document.createAttribute

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4462

___

### createAttributeNS

▸ **createAttributeNS**(`namespace`, `qualifiedName`): [`Attr`](../modules/main_module._internal_.md#attr)

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |
| `qualifiedName` | `string` |

#### Returns

[`Attr`](../modules/main_module._internal_.md#attr)

#### Inherited from

Document.createAttributeNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4463

___

### createCDATASection

▸ **createCDATASection**(`data`): [`CDATASection`](../modules/main_module._internal_.md#cdatasection)

Returns a CDATASection node whose data is data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

[`CDATASection`](../modules/main_module._internal_.md#cdatasection)

#### Inherited from

Document.createCDATASection

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4465

___

### createComment

▸ **createComment**(`data`): [`Comment`](../modules/main_module._internal_.md#comment)

Creates a comment object with the specified data.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` | Sets the comment object's data. |

#### Returns

[`Comment`](../modules/main_module._internal_.md#comment)

#### Inherited from

Document.createComment

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4470

___

### createDocumentFragment

▸ **createDocumentFragment**(): [`DocumentFragment`](../modules/main_module._internal_.md#documentfragment)

Creates a new document.

#### Returns

[`DocumentFragment`](../modules/main_module._internal_.md#documentfragment)

#### Inherited from

Document.createDocumentFragment

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4472

___

### createElement

▸ **createElement**<`K`\>(`tagName`, `options?`): [`HTMLElementTagNameMap`](main_module._internal_.HTMLElementTagNameMap.md)[`K`]

Creates an instance of the element for the specified tag.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`HTMLElementTagNameMap`](main_module._internal_.HTMLElementTagNameMap.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tagName` | `K` | The name of an element. |
| `options?` | [`ElementCreationOptions`](main_module._internal_.ElementCreationOptions.md) | - |

#### Returns

[`HTMLElementTagNameMap`](main_module._internal_.HTMLElementTagNameMap.md)[`K`]

#### Inherited from

Document.createElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4477

▸ **createElement**<`K`\>(`tagName`, `options?`): [`HTMLElementDeprecatedTagNameMap`](main_module._internal_.HTMLElementDeprecatedTagNameMap.md)[`K`]

**`Deprecated`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`HTMLElementDeprecatedTagNameMap`](main_module._internal_.HTMLElementDeprecatedTagNameMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagName` | `K` |
| `options?` | [`ElementCreationOptions`](main_module._internal_.ElementCreationOptions.md) |

#### Returns

[`HTMLElementDeprecatedTagNameMap`](main_module._internal_.HTMLElementDeprecatedTagNameMap.md)[`K`]

#### Inherited from

Document.createElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4479

▸ **createElement**(`tagName`, `options?`): [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagName` | `string` |
| `options?` | [`ElementCreationOptions`](main_module._internal_.ElementCreationOptions.md) |

#### Returns

[`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Inherited from

Document.createElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4480

___

### createElementNS

▸ **createElementNS**(`namespaceURI`, `qualifiedName`): [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

Returns an element with namespace namespace. Its namespace prefix will be everything before ":" (U+003E) in qualifiedName or null. Its local name will be everything after ":" (U+003E) in qualifiedName or qualifiedName.

If localName does not match the Name production an "InvalidCharacterError" DOMException will be thrown.

If one of the following conditions is true a "NamespaceError" DOMException will be thrown:

localName does not match the QName production.
Namespace prefix is not null and namespace is the empty string.
Namespace prefix is "xml" and namespace is not the XML namespace.
qualifiedName or namespace prefix is "xmlns" and namespace is not the XMLNS namespace.
namespace is the XMLNS namespace and neither qualifiedName nor namespace prefix is "xmlns".

When supplied, options's is can be used to create a customized built-in element.

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespaceURI` | ``"http://www.w3.org/1999/xhtml"`` |
| `qualifiedName` | `string` |

#### Returns

[`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Inherited from

Document.createElementNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4496

▸ **createElementNS**<`K`\>(`namespaceURI`, `qualifiedName`): [`SVGElementTagNameMap`](main_module._internal_.SVGElementTagNameMap.md)[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`SVGElementTagNameMap`](main_module._internal_.SVGElementTagNameMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespaceURI` | ``"http://www.w3.org/2000/svg"`` |
| `qualifiedName` | `K` |

#### Returns

[`SVGElementTagNameMap`](main_module._internal_.SVGElementTagNameMap.md)[`K`]

#### Inherited from

Document.createElementNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4497

▸ **createElementNS**(`namespaceURI`, `qualifiedName`): [`SVGElement`](../modules/main_module._internal_.md#svgelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespaceURI` | ``"http://www.w3.org/2000/svg"`` |
| `qualifiedName` | `string` |

#### Returns

[`SVGElement`](../modules/main_module._internal_.md#svgelement)

#### Inherited from

Document.createElementNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4498

▸ **createElementNS**(`namespaceURI`, `qualifiedName`, `options?`): [`Element`](../modules/main_module._internal_.md#element)

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespaceURI` | ``null`` \| `string` |
| `qualifiedName` | `string` |
| `options?` | [`ElementCreationOptions`](main_module._internal_.ElementCreationOptions.md) |

#### Returns

[`Element`](../modules/main_module._internal_.md#element)

#### Inherited from

Document.createElementNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4499

▸ **createElementNS**(`namespace`, `qualifiedName`, `options?`): [`Element`](../modules/main_module._internal_.md#element)

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |
| `qualifiedName` | `string` |
| `options?` | `string` \| [`ElementCreationOptions`](main_module._internal_.ElementCreationOptions.md) |

#### Returns

[`Element`](../modules/main_module._internal_.md#element)

#### Inherited from

Document.createElementNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4500

___

### createEvent

▸ **createEvent**(`eventInterface`): [`AnimationEvent`](../modules/main_module._internal_.md#animationevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"AnimationEvent"`` |

#### Returns

[`AnimationEvent`](../modules/main_module._internal_.md#animationevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4501

▸ **createEvent**(`eventInterface`): [`AnimationPlaybackEvent`](../modules/main_module._internal_.md#animationplaybackevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"AnimationPlaybackEvent"`` |

#### Returns

[`AnimationPlaybackEvent`](../modules/main_module._internal_.md#animationplaybackevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4502

▸ **createEvent**(`eventInterface`): [`AudioProcessingEvent`](../modules/main_module._internal_.md#audioprocessingevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"AudioProcessingEvent"`` |

#### Returns

[`AudioProcessingEvent`](../modules/main_module._internal_.md#audioprocessingevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4503

▸ **createEvent**(`eventInterface`): [`BeforeUnloadEvent`](../modules/main_module._internal_.md#beforeunloadevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"BeforeUnloadEvent"`` |

#### Returns

[`BeforeUnloadEvent`](../modules/main_module._internal_.md#beforeunloadevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4504

▸ **createEvent**(`eventInterface`): [`BlobEvent`](../modules/main_module._internal_.md#blobevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"BlobEvent"`` |

#### Returns

[`BlobEvent`](../modules/main_module._internal_.md#blobevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4505

▸ **createEvent**(`eventInterface`): [`ClipboardEvent`](../modules/main_module._internal_.md#clipboardevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"ClipboardEvent"`` |

#### Returns

[`ClipboardEvent`](../modules/main_module._internal_.md#clipboardevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4506

▸ **createEvent**(`eventInterface`): [`CloseEvent`](../modules/main_module._internal_.md#closeevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"CloseEvent"`` |

#### Returns

[`CloseEvent`](../modules/main_module._internal_.md#closeevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4507

▸ **createEvent**(`eventInterface`): [`CompositionEvent`](../modules/main_module._internal_.md#compositionevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"CompositionEvent"`` |

#### Returns

[`CompositionEvent`](../modules/main_module._internal_.md#compositionevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4508

▸ **createEvent**(`eventInterface`): [`CustomEvent`](../modules/main_module._internal_.md#customevent)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"CustomEvent"`` |

#### Returns

[`CustomEvent`](../modules/main_module._internal_.md#customevent)<`any`\>

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4509

▸ **createEvent**(`eventInterface`): [`DeviceMotionEvent`](../modules/main_module._internal_.md#devicemotionevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"DeviceMotionEvent"`` |

#### Returns

[`DeviceMotionEvent`](../modules/main_module._internal_.md#devicemotionevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4510

▸ **createEvent**(`eventInterface`): [`DeviceOrientationEvent`](../modules/main_module._internal_.md#deviceorientationevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"DeviceOrientationEvent"`` |

#### Returns

[`DeviceOrientationEvent`](../modules/main_module._internal_.md#deviceorientationevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4511

▸ **createEvent**(`eventInterface`): [`DragEvent`](../modules/main_module._internal_.md#dragevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"DragEvent"`` |

#### Returns

[`DragEvent`](../modules/main_module._internal_.md#dragevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4512

▸ **createEvent**(`eventInterface`): [`ErrorEvent`](../modules/main_module._internal_.md#errorevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"ErrorEvent"`` |

#### Returns

[`ErrorEvent`](../modules/main_module._internal_.md#errorevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4513

▸ **createEvent**(`eventInterface`): [`Event`](../modules/main_module._internal_.md#event)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"Event"`` |

#### Returns

[`Event`](../modules/main_module._internal_.md#event)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4514

▸ **createEvent**(`eventInterface`): [`Event`](../modules/main_module._internal_.md#event)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"Events"`` |

#### Returns

[`Event`](../modules/main_module._internal_.md#event)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4515

▸ **createEvent**(`eventInterface`): [`FocusEvent`](../modules/main_module._internal_.md#focusevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"FocusEvent"`` |

#### Returns

[`FocusEvent`](../modules/main_module._internal_.md#focusevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4516

▸ **createEvent**(`eventInterface`): [`FontFaceSetLoadEvent`](../modules/main_module._internal_.md#fontfacesetloadevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"FontFaceSetLoadEvent"`` |

#### Returns

[`FontFaceSetLoadEvent`](../modules/main_module._internal_.md#fontfacesetloadevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4517

▸ **createEvent**(`eventInterface`): [`FormDataEvent`](../modules/main_module._internal_.md#formdataevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"FormDataEvent"`` |

#### Returns

[`FormDataEvent`](../modules/main_module._internal_.md#formdataevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4518

▸ **createEvent**(`eventInterface`): [`GamepadEvent`](../modules/main_module._internal_.md#gamepadevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"GamepadEvent"`` |

#### Returns

[`GamepadEvent`](../modules/main_module._internal_.md#gamepadevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4519

▸ **createEvent**(`eventInterface`): [`HashChangeEvent`](../modules/main_module._internal_.md#hashchangeevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"HashChangeEvent"`` |

#### Returns

[`HashChangeEvent`](../modules/main_module._internal_.md#hashchangeevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4520

▸ **createEvent**(`eventInterface`): [`IDBVersionChangeEvent`](../modules/main_module._internal_.md#idbversionchangeevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"IDBVersionChangeEvent"`` |

#### Returns

[`IDBVersionChangeEvent`](../modules/main_module._internal_.md#idbversionchangeevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4521

▸ **createEvent**(`eventInterface`): [`InputEvent`](../modules/main_module._internal_.md#inputevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"InputEvent"`` |

#### Returns

[`InputEvent`](../modules/main_module._internal_.md#inputevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4522

▸ **createEvent**(`eventInterface`): [`KeyboardEvent`](../modules/main_module._internal_.md#keyboardevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"KeyboardEvent"`` |

#### Returns

[`KeyboardEvent`](../modules/main_module._internal_.md#keyboardevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4523

▸ **createEvent**(`eventInterface`): [`MIDIConnectionEvent`](../modules/main_module._internal_.md#midiconnectionevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"MIDIConnectionEvent"`` |

#### Returns

[`MIDIConnectionEvent`](../modules/main_module._internal_.md#midiconnectionevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4524

▸ **createEvent**(`eventInterface`): [`MIDIMessageEvent`](../modules/main_module._internal_.md#midimessageevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"MIDIMessageEvent"`` |

#### Returns

[`MIDIMessageEvent`](../modules/main_module._internal_.md#midimessageevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4525

▸ **createEvent**(`eventInterface`): [`MediaEncryptedEvent`](../modules/main_module._internal_.md#mediaencryptedevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"MediaEncryptedEvent"`` |

#### Returns

[`MediaEncryptedEvent`](../modules/main_module._internal_.md#mediaencryptedevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4526

▸ **createEvent**(`eventInterface`): [`MediaKeyMessageEvent`](../modules/main_module._internal_.md#mediakeymessageevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"MediaKeyMessageEvent"`` |

#### Returns

[`MediaKeyMessageEvent`](../modules/main_module._internal_.md#mediakeymessageevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4527

▸ **createEvent**(`eventInterface`): [`MediaQueryListEvent`](../modules/main_module._internal_.md#mediaquerylistevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"MediaQueryListEvent"`` |

#### Returns

[`MediaQueryListEvent`](../modules/main_module._internal_.md#mediaquerylistevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4528

▸ **createEvent**(`eventInterface`): [`MediaRecorderErrorEvent`](../modules/main_module._internal_.md#mediarecordererrorevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"MediaRecorderErrorEvent"`` |

#### Returns

[`MediaRecorderErrorEvent`](../modules/main_module._internal_.md#mediarecordererrorevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4529

▸ **createEvent**(`eventInterface`): [`MediaStreamTrackEvent`](../modules/main_module._internal_.md#mediastreamtrackevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"MediaStreamTrackEvent"`` |

#### Returns

[`MediaStreamTrackEvent`](../modules/main_module._internal_.md#mediastreamtrackevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4530

▸ **createEvent**(`eventInterface`): `MessageEvent`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"MessageEvent"`` |

#### Returns

`MessageEvent`<`any`\>

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4531

▸ **createEvent**(`eventInterface`): [`MouseEvent`](../modules/main_module._internal_.md#mouseevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"MouseEvent"`` |

#### Returns

[`MouseEvent`](../modules/main_module._internal_.md#mouseevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4532

▸ **createEvent**(`eventInterface`): [`MouseEvent`](../modules/main_module._internal_.md#mouseevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"MouseEvents"`` |

#### Returns

[`MouseEvent`](../modules/main_module._internal_.md#mouseevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4533

▸ **createEvent**(`eventInterface`): [`MutationEvent`](../modules/main_module._internal_.md#mutationevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"MutationEvent"`` |

#### Returns

[`MutationEvent`](../modules/main_module._internal_.md#mutationevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4534

▸ **createEvent**(`eventInterface`): [`MutationEvent`](../modules/main_module._internal_.md#mutationevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"MutationEvents"`` |

#### Returns

[`MutationEvent`](../modules/main_module._internal_.md#mutationevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4535

▸ **createEvent**(`eventInterface`): [`OfflineAudioCompletionEvent`](../modules/main_module._internal_.md#offlineaudiocompletionevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"OfflineAudioCompletionEvent"`` |

#### Returns

[`OfflineAudioCompletionEvent`](../modules/main_module._internal_.md#offlineaudiocompletionevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4536

▸ **createEvent**(`eventInterface`): [`PageTransitionEvent`](../modules/main_module._internal_.md#pagetransitionevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"PageTransitionEvent"`` |

#### Returns

[`PageTransitionEvent`](../modules/main_module._internal_.md#pagetransitionevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4537

▸ **createEvent**(`eventInterface`): [`PaymentMethodChangeEvent`](../modules/main_module._internal_.md#paymentmethodchangeevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"PaymentMethodChangeEvent"`` |

#### Returns

[`PaymentMethodChangeEvent`](../modules/main_module._internal_.md#paymentmethodchangeevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4538

▸ **createEvent**(`eventInterface`): [`PaymentRequestUpdateEvent`](../modules/main_module._internal_.md#paymentrequestupdateevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"PaymentRequestUpdateEvent"`` |

#### Returns

[`PaymentRequestUpdateEvent`](../modules/main_module._internal_.md#paymentrequestupdateevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4539

▸ **createEvent**(`eventInterface`): [`PointerEvent`](../modules/main_module._internal_.md#pointerevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"PointerEvent"`` |

#### Returns

[`PointerEvent`](../modules/main_module._internal_.md#pointerevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4540

▸ **createEvent**(`eventInterface`): [`PopStateEvent`](../modules/main_module._internal_.md#popstateevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"PopStateEvent"`` |

#### Returns

[`PopStateEvent`](../modules/main_module._internal_.md#popstateevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4541

▸ **createEvent**(`eventInterface`): [`ProgressEvent`](../modules/main_module._internal_.md#progressevent)<[`EventTarget`](../modules/main_module._internal_.md#eventtarget)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"ProgressEvent"`` |

#### Returns

[`ProgressEvent`](../modules/main_module._internal_.md#progressevent)<[`EventTarget`](../modules/main_module._internal_.md#eventtarget)\>

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4542

▸ **createEvent**(`eventInterface`): [`PromiseRejectionEvent`](../modules/main_module._internal_.md#promiserejectionevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"PromiseRejectionEvent"`` |

#### Returns

[`PromiseRejectionEvent`](../modules/main_module._internal_.md#promiserejectionevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4543

▸ **createEvent**(`eventInterface`): [`RTCDTMFToneChangeEvent`](../modules/main_module._internal_.md#rtcdtmftonechangeevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"RTCDTMFToneChangeEvent"`` |

#### Returns

[`RTCDTMFToneChangeEvent`](../modules/main_module._internal_.md#rtcdtmftonechangeevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4544

▸ **createEvent**(`eventInterface`): [`RTCDataChannelEvent`](../modules/main_module._internal_.md#rtcdatachannelevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"RTCDataChannelEvent"`` |

#### Returns

[`RTCDataChannelEvent`](../modules/main_module._internal_.md#rtcdatachannelevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4545

▸ **createEvent**(`eventInterface`): [`RTCErrorEvent`](../modules/main_module._internal_.md#rtcerrorevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"RTCErrorEvent"`` |

#### Returns

[`RTCErrorEvent`](../modules/main_module._internal_.md#rtcerrorevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4546

▸ **createEvent**(`eventInterface`): [`RTCPeerConnectionIceErrorEvent`](../modules/main_module._internal_.md#rtcpeerconnectioniceerrorevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"RTCPeerConnectionIceErrorEvent"`` |

#### Returns

[`RTCPeerConnectionIceErrorEvent`](../modules/main_module._internal_.md#rtcpeerconnectioniceerrorevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4547

▸ **createEvent**(`eventInterface`): [`RTCPeerConnectionIceEvent`](../modules/main_module._internal_.md#rtcpeerconnectioniceevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"RTCPeerConnectionIceEvent"`` |

#### Returns

[`RTCPeerConnectionIceEvent`](../modules/main_module._internal_.md#rtcpeerconnectioniceevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4548

▸ **createEvent**(`eventInterface`): [`RTCTrackEvent`](../modules/main_module._internal_.md#rtctrackevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"RTCTrackEvent"`` |

#### Returns

[`RTCTrackEvent`](../modules/main_module._internal_.md#rtctrackevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4549

▸ **createEvent**(`eventInterface`): [`SecurityPolicyViolationEvent`](../modules/main_module._internal_.md#securitypolicyviolationevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"SecurityPolicyViolationEvent"`` |

#### Returns

[`SecurityPolicyViolationEvent`](../modules/main_module._internal_.md#securitypolicyviolationevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4550

▸ **createEvent**(`eventInterface`): [`SpeechSynthesisErrorEvent`](../modules/main_module._internal_.md#speechsynthesiserrorevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"SpeechSynthesisErrorEvent"`` |

#### Returns

[`SpeechSynthesisErrorEvent`](../modules/main_module._internal_.md#speechsynthesiserrorevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4551

▸ **createEvent**(`eventInterface`): [`SpeechSynthesisEvent`](../modules/main_module._internal_.md#speechsynthesisevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"SpeechSynthesisEvent"`` |

#### Returns

[`SpeechSynthesisEvent`](../modules/main_module._internal_.md#speechsynthesisevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4552

▸ **createEvent**(`eventInterface`): [`StorageEvent`](../modules/main_module._internal_.md#storageevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"StorageEvent"`` |

#### Returns

[`StorageEvent`](../modules/main_module._internal_.md#storageevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4553

▸ **createEvent**(`eventInterface`): [`SubmitEvent`](../modules/main_module._internal_.md#submitevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"SubmitEvent"`` |

#### Returns

[`SubmitEvent`](../modules/main_module._internal_.md#submitevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4554

▸ **createEvent**(`eventInterface`): [`TouchEvent`](../modules/main_module._internal_.md#touchevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"TouchEvent"`` |

#### Returns

[`TouchEvent`](../modules/main_module._internal_.md#touchevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4555

▸ **createEvent**(`eventInterface`): [`TrackEvent`](../modules/main_module._internal_.md#trackevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"TrackEvent"`` |

#### Returns

[`TrackEvent`](../modules/main_module._internal_.md#trackevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4556

▸ **createEvent**(`eventInterface`): [`TransitionEvent`](../modules/main_module._internal_.md#transitionevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"TransitionEvent"`` |

#### Returns

[`TransitionEvent`](../modules/main_module._internal_.md#transitionevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4557

▸ **createEvent**(`eventInterface`): [`UIEvent`](../modules/main_module._internal_.md#uievent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"UIEvent"`` |

#### Returns

[`UIEvent`](../modules/main_module._internal_.md#uievent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4558

▸ **createEvent**(`eventInterface`): [`UIEvent`](../modules/main_module._internal_.md#uievent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"UIEvents"`` |

#### Returns

[`UIEvent`](../modules/main_module._internal_.md#uievent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4559

▸ **createEvent**(`eventInterface`): [`WebGLContextEvent`](../modules/main_module._internal_.md#webglcontextevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"WebGLContextEvent"`` |

#### Returns

[`WebGLContextEvent`](../modules/main_module._internal_.md#webglcontextevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4560

▸ **createEvent**(`eventInterface`): [`WheelEvent`](../modules/main_module._internal_.md#wheelevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"WheelEvent"`` |

#### Returns

[`WheelEvent`](../modules/main_module._internal_.md#wheelevent)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4561

▸ **createEvent**(`eventInterface`): [`Event`](../modules/main_module._internal_.md#event)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | `string` |

#### Returns

[`Event`](../modules/main_module._internal_.md#event)

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4562

___

### createExpression

▸ **createExpression**(`expression`, `resolver?`): [`XPathExpression`](../modules/main_module._internal_.md#xpathexpression)

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |
| `resolver?` | ``null`` \| [`XPathNSResolver`](../modules/main_module._internal_.md#xpathnsresolver) |

#### Returns

[`XPathExpression`](../modules/main_module._internal_.md#xpathexpression)

#### Inherited from

Document.createExpression

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:17084

___

### createNSResolver

▸ **createNSResolver**(`nodeResolver`): [`XPathNSResolver`](../modules/main_module._internal_.md#xpathnsresolver)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeResolver` | [`Node`](../modules/main_module._internal_.md#node) |

#### Returns

[`XPathNSResolver`](../modules/main_module._internal_.md#xpathnsresolver)

#### Inherited from

Document.createNSResolver

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:17085

___

### createNodeIterator

▸ **createNodeIterator**(`root`, `whatToShow?`, `filter?`): [`NodeIterator`](../modules/main_module._internal_.md#nodeiterator)

Creates a NodeIterator object that you can use to traverse filtered lists of nodes or elements in a document.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `root` | [`Node`](../modules/main_module._internal_.md#node) | The root element or node to start traversing on. |
| `whatToShow?` | `number` | The type of nodes or elements to appear in the node list |
| `filter?` | ``null`` \| [`NodeFilter`](../modules/main_module._internal_.md#nodefilter-1) | A custom NodeFilter function to use. For more information, see filter. Use null for no filter. |

#### Returns

[`NodeIterator`](../modules/main_module._internal_.md#nodeiterator)

#### Inherited from

Document.createNodeIterator

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4569

___

### createProcessingInstruction

▸ **createProcessingInstruction**(`target`, `data`): [`ProcessingInstruction`](../modules/main_module._internal_.md#processinginstruction)

Returns a ProcessingInstruction node whose target is target and data is data. If target does not match the Name production an "InvalidCharacterError" DOMException will be thrown. If data contains "?>" an "InvalidCharacterError" DOMException will be thrown.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `string` |
| `data` | `string` |

#### Returns

[`ProcessingInstruction`](../modules/main_module._internal_.md#processinginstruction)

#### Inherited from

Document.createProcessingInstruction

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4571

___

### createRange

▸ **createRange**(): [`Range`](../modules/main_module._internal_.md#range)

Returns an empty range object that has both of its boundary points positioned at the beginning of the document.

#### Returns

[`Range`](../modules/main_module._internal_.md#range)

#### Inherited from

Document.createRange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4573

___

### createTextNode

▸ **createTextNode**(`data`): [`Text`](../modules/main_module._internal_.md#text)

Creates a text string from the specified value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` | String that specifies the nodeValue property of the text node. |

#### Returns

[`Text`](../modules/main_module._internal_.md#text)

#### Inherited from

Document.createTextNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4578

___

### createTreeWalker

▸ **createTreeWalker**(`root`, `whatToShow?`, `filter?`): [`TreeWalker`](../modules/main_module._internal_.md#treewalker)

Creates a TreeWalker object that you can use to traverse filtered lists of nodes or elements in a document.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `root` | [`Node`](../modules/main_module._internal_.md#node) | The root element or node to start traversing on. |
| `whatToShow?` | `number` | The type of nodes or elements to appear in the node list. For more information, see whatToShow. |
| `filter?` | ``null`` \| [`NodeFilter`](../modules/main_module._internal_.md#nodefilter-1) | A custom NodeFilter function to use. |

#### Returns

[`TreeWalker`](../modules/main_module._internal_.md#treewalker)

#### Inherited from

Document.createTreeWalker

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4585

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

Document.dispatchEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5138

___

### elementFromPoint

▸ **elementFromPoint**(`x`, `y`): ``null`` \| [`Element`](../modules/main_module._internal_.md#element)

Returns the element for the specified x coordinate and the specified y coordinate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The x-offset |
| `y` | `number` | The y-offset |

#### Returns

``null`` \| [`Element`](../modules/main_module._internal_.md#element)

#### Inherited from

Document.elementFromPoint

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4748

___

### elementsFromPoint

▸ **elementsFromPoint**(`x`, `y`): [`Element`](../modules/main_module._internal_.md#element)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`Element`](../modules/main_module._internal_.md#element)[]

#### Inherited from

Document.elementsFromPoint

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4749

___

### evaluate

▸ **evaluate**(`expression`, `contextNode`, `resolver?`, `type?`, `result?`): [`XPathResult`](../modules/main_module._internal_.md#xpathresult)

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |
| `contextNode` | [`Node`](../modules/main_module._internal_.md#node) |
| `resolver?` | ``null`` \| [`XPathNSResolver`](../modules/main_module._internal_.md#xpathnsresolver) |
| `type?` | `number` |
| `result?` | ``null`` \| [`XPathResult`](../modules/main_module._internal_.md#xpathresult) |

#### Returns

[`XPathResult`](../modules/main_module._internal_.md#xpathresult)

#### Inherited from

Document.evaluate

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:17086

___

### execCommand

▸ **execCommand**(`commandId`, `showUI?`, `value?`): `boolean`

Executes a command on the current document, current selection, or the given range.

**`Deprecated`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commandId` | `string` | String that specifies the command to execute. This command can be any of the command identifiers that can be executed in script. |
| `showUI?` | `boolean` | Display the user interface, defaults to false. |
| `value?` | `string` | Value to assign. |

#### Returns

`boolean`

#### Inherited from

Document.execCommand

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4593

___

### exitFullscreen

▸ **exitFullscreen**(): `Promise`<`void`\>

Stops document's fullscreen element from being displayed fullscreen and resolves promise when done.

#### Returns

`Promise`<`void`\>

#### Inherited from

Document.exitFullscreen

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4595

___

### exitPictureInPicture

▸ **exitPictureInPicture**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

Document.exitPictureInPicture

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4596

___

### exitPointerLock

▸ **exitPointerLock**(): `void`

#### Returns

`void`

#### Inherited from

Document.exitPointerLock

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4597

___

### getAnimations

▸ **getAnimations**(): [`Animation`](../modules/main_module._internal_.md#animation)[]

#### Returns

[`Animation`](../modules/main_module._internal_.md#animation)[]

#### Inherited from

Document.getAnimations

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4750

___

### getElementById

▸ **getElementById**(`elementId`): ``null`` \| [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

Returns a reference to the first object with the specified value of the ID attribute.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `elementId` | `string` | String that specifies the ID value. |

#### Returns

``null`` \| [`HTMLElement`](../modules/main_module._internal_.md#htmlelement)

#### Inherited from

Document.getElementById

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4602

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

Document.getElementsByClassName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4604

___

### getElementsByName

▸ **getElementsByName**(`elementName`): `NodeListOf`<[`HTMLElement`](../modules/main_module._internal_.md#htmlelement)\>

Gets a collection of objects based on the value of the NAME or ID attribute.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `elementName` | `string` | Gets a collection of objects based on the value of the NAME or ID attribute. |

#### Returns

`NodeListOf`<[`HTMLElement`](../modules/main_module._internal_.md#htmlelement)\>

#### Inherited from

Document.getElementsByName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4609

___

### getElementsByTagName

▸ **getElementsByTagName**<`K`\>(`qualifiedName`): `HTMLCollectionOf`<[`HTMLElementTagNameMap`](main_module._internal_.HTMLElementTagNameMap.md)[`K`]\>

Retrieves a collection of objects based on the specified element name.

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

Document.getElementsByTagName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4614

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

Document.getElementsByTagName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4615

▸ **getElementsByTagName**(`qualifiedName`): `HTMLCollectionOf`<[`Element`](../modules/main_module._internal_.md#element)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |

#### Returns

`HTMLCollectionOf`<[`Element`](../modules/main_module._internal_.md#element)\>

#### Inherited from

Document.getElementsByTagName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4616

___

### getElementsByTagNameNS

▸ **getElementsByTagNameNS**(`namespaceURI`, `localName`): `HTMLCollectionOf`<[`HTMLElement`](../modules/main_module._internal_.md#htmlelement)\>

If namespace and localName are "*" returns a HTMLCollection of all descendant elements.

If only namespace is "*" returns a HTMLCollection of all descendant elements whose local name is localName.

If only localName is "*" returns a HTMLCollection of all descendant elements whose namespace is namespace.

Otherwise, returns a HTMLCollection of all descendant elements whose namespace is namespace and local name is localName.

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespaceURI` | ``"http://www.w3.org/1999/xhtml"`` |
| `localName` | `string` |

#### Returns

`HTMLCollectionOf`<[`HTMLElement`](../modules/main_module._internal_.md#htmlelement)\>

#### Inherited from

Document.getElementsByTagNameNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4626

▸ **getElementsByTagNameNS**(`namespaceURI`, `localName`): `HTMLCollectionOf`<[`SVGElement`](../modules/main_module._internal_.md#svgelement)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespaceURI` | ``"http://www.w3.org/2000/svg"`` |
| `localName` | `string` |

#### Returns

`HTMLCollectionOf`<[`SVGElement`](../modules/main_module._internal_.md#svgelement)\>

#### Inherited from

Document.getElementsByTagNameNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4627

▸ **getElementsByTagNameNS**(`namespace`, `localName`): `HTMLCollectionOf`<[`Element`](../modules/main_module._internal_.md#element)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |
| `localName` | `string` |

#### Returns

`HTMLCollectionOf`<[`Element`](../modules/main_module._internal_.md#element)\>

#### Inherited from

Document.getElementsByTagNameNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4628

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

Document.getRootNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10075

___

### getSelection

▸ **getSelection**(): ``null`` \| [`Selection`](../modules/main_module._internal_.md#selection)

Returns an object representing the current selection of the document that is loaded into the object displaying a webpage.

#### Returns

``null`` \| [`Selection`](../modules/main_module._internal_.md#selection)

#### Inherited from

Document.getSelection

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4630

___

### hasChildNodes

▸ **hasChildNodes**(): `boolean`

Returns whether node has children.

#### Returns

`boolean`

#### Inherited from

Document.hasChildNodes

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10077

___

### hasFocus

▸ **hasFocus**(): `boolean`

Gets a value indicating whether the object currently has focus.

#### Returns

`boolean`

#### Inherited from

Document.hasFocus

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4632

___

### hasStorageAccess

▸ **hasStorageAccess**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Inherited from

Document.hasStorageAccess

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4633

___

### importNode

▸ **importNode**<`T`\>(`node`, `deep?`): `T`

Returns a copy of node. If deep is true, the copy also includes the node's descendants.

If node is a document or a shadow root, throws a "NotSupportedError" DOMException.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Node`](../modules/main_module._internal_.md#node) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `T` |
| `deep?` | `boolean` |

#### Returns

`T`

#### Inherited from

Document.importNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4639

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

Document.insertBefore

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

Document.isDefaultNamespace

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

Document.isEqualNode

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

Document.isSameNode

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

Document.lookupNamespaceURI

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

Document.lookupPrefix

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10084

___

### normalize

▸ **normalize**(): `void`

Removes empty exclusive Text nodes and concatenates the data of remaining contiguous exclusive Text nodes into the first of their nodes.

#### Returns

`void`

#### Inherited from

Document.normalize

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10086

___

### open

▸ **open**(`unused1?`, `unused2?`): [`Document`](../modules/main_module._internal_.md#document)

Opens a new window and loads a document specified by a given URL. Also, opens a new window that uses the url parameter and the name parameter to collect the output of the write method and the writeln method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `unused1?` | `string` |
| `unused2?` | `string` |

#### Returns

[`Document`](../modules/main_module._internal_.md#document)

#### Inherited from

Document.open

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4647

▸ **open**(`url`, `name`, `features`): ``null`` \| [`Window`](../modules/main_module._internal_.md#window)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` \| [`URL`](../modules/main_module._internal_.md#url) |
| `name` | `string` |
| `features` | `string` |

#### Returns

``null`` \| [`Window`](../modules/main_module._internal_.md#window)

#### Inherited from

Document.open

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4648

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

Document.prepend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10425

___

### queryCommandEnabled

▸ **queryCommandEnabled**(`commandId`): `boolean`

Returns a Boolean value that indicates whether a specified command can be successfully executed using execCommand, given the current state of the document.

**`Deprecated`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commandId` | `string` | Specifies a command identifier. |

#### Returns

`boolean`

#### Inherited from

Document.queryCommandEnabled

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4654

___

### queryCommandIndeterm

▸ **queryCommandIndeterm**(`commandId`): `boolean`

Returns a Boolean value that indicates whether the specified command is in the indeterminate state.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commandId` | `string` | String that specifies a command identifier. |

#### Returns

`boolean`

#### Inherited from

Document.queryCommandIndeterm

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4659

___

### queryCommandState

▸ **queryCommandState**(`commandId`): `boolean`

Returns a Boolean value that indicates the current state of the command.

**`Deprecated`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commandId` | `string` | String that specifies a command identifier. |

#### Returns

`boolean`

#### Inherited from

Document.queryCommandState

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4665

___

### queryCommandSupported

▸ **queryCommandSupported**(`commandId`): `boolean`

Returns a Boolean value that indicates whether the current command is supported on the current range.

**`Deprecated`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commandId` | `string` | Specifies a command identifier. |

#### Returns

`boolean`

#### Inherited from

Document.queryCommandSupported

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4671

___

### queryCommandValue

▸ **queryCommandValue**(`commandId`): `string`

Returns the current value of the document, range, or current selection for the given command.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commandId` | `string` | String that specifies a command identifier. |

#### Returns

`string`

#### Inherited from

Document.queryCommandValue

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4676

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

Document.querySelector

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

Document.querySelector

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

Document.querySelector

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

Document.querySelectorAll

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

Document.querySelectorAll

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

Document.querySelectorAll

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10433

___

### releaseEvents

▸ **releaseEvents**(): `void`

**`Deprecated`**

#### Returns

`void`

#### Inherited from

Document.releaseEvents

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4678

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

Document.removeChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10087

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`DocumentEventMap`](main_module._internal_.DocumentEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`XMLDocument`](../modules/main_module._internal_.md#xmldocument), `ev`: [`DocumentEventMap`](main_module._internal_.DocumentEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](main_module._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

Document.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16906

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

Document.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16907

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

Document.replaceChild

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

Document.replaceChildren

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10439

___

### requestStorageAccess

▸ **requestStorageAccess**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

Document.requestStorageAccess

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4679

___

### write

▸ **write**(...`text`): `void`

Writes one or more HTML expressions to a document in the specified window.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...text` | `string`[] |

#### Returns

`void`

#### Inherited from

Document.write

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4684

___

### writeln

▸ **writeln**(...`text`): `void`

Writes one or more HTML expressions, followed by a carriage return, to a document in the specified window.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...text` | `string`[] |

#### Returns

`void`

#### Inherited from

Document.writeln

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4689
