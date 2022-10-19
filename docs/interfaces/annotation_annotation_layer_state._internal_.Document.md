[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / Document

# Interface: Document

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).Document

Any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree.

## Hierarchy

- [`Node`](../modules/annotation_annotation_layer_state._internal_.md#node)

- [`DocumentAndElementEventHandlers`](annotation_annotation_layer_state._internal_.DocumentAndElementEventHandlers.md)

- [`DocumentOrShadowRoot`](annotation_annotation_layer_state._internal_.DocumentOrShadowRoot.md)

- [`FontFaceSource`](annotation_annotation_layer_state._internal_.FontFaceSource.md)

- [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md)

- [`NonElementParentNode`](annotation_annotation_layer_state._internal_.NonElementParentNode.md)

- [`ParentNode`](annotation_annotation_layer_state._internal_.ParentNode.md)

- [`XPathEvaluatorBase`](annotation_annotation_layer_state._internal_.XPathEvaluatorBase.md)

  ↳ **`Document`**

## Table of contents

### Properties

- [ATTRIBUTE\_NODE](annotation_annotation_layer_state._internal_.Document.md#attribute_node)
- [CDATA\_SECTION\_NODE](annotation_annotation_layer_state._internal_.Document.md#cdata_section_node)
- [COMMENT\_NODE](annotation_annotation_layer_state._internal_.Document.md#comment_node)
- [DOCUMENT\_FRAGMENT\_NODE](annotation_annotation_layer_state._internal_.Document.md#document_fragment_node)
- [DOCUMENT\_NODE](annotation_annotation_layer_state._internal_.Document.md#document_node)
- [DOCUMENT\_POSITION\_CONTAINED\_BY](annotation_annotation_layer_state._internal_.Document.md#document_position_contained_by)
- [DOCUMENT\_POSITION\_CONTAINS](annotation_annotation_layer_state._internal_.Document.md#document_position_contains)
- [DOCUMENT\_POSITION\_DISCONNECTED](annotation_annotation_layer_state._internal_.Document.md#document_position_disconnected)
- [DOCUMENT\_POSITION\_FOLLOWING](annotation_annotation_layer_state._internal_.Document.md#document_position_following)
- [DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC](annotation_annotation_layer_state._internal_.Document.md#document_position_implementation_specific)
- [DOCUMENT\_POSITION\_PRECEDING](annotation_annotation_layer_state._internal_.Document.md#document_position_preceding)
- [DOCUMENT\_TYPE\_NODE](annotation_annotation_layer_state._internal_.Document.md#document_type_node)
- [ELEMENT\_NODE](annotation_annotation_layer_state._internal_.Document.md#element_node)
- [ENTITY\_NODE](annotation_annotation_layer_state._internal_.Document.md#entity_node)
- [ENTITY\_REFERENCE\_NODE](annotation_annotation_layer_state._internal_.Document.md#entity_reference_node)
- [NOTATION\_NODE](annotation_annotation_layer_state._internal_.Document.md#notation_node)
- [PROCESSING\_INSTRUCTION\_NODE](annotation_annotation_layer_state._internal_.Document.md#processing_instruction_node)
- [TEXT\_NODE](annotation_annotation_layer_state._internal_.Document.md#text_node)
- [URL](annotation_annotation_layer_state._internal_.Document.md#url)
- [activeElement](annotation_annotation_layer_state._internal_.Document.md#activeelement)
- [alinkColor](annotation_annotation_layer_state._internal_.Document.md#alinkcolor)
- [all](annotation_annotation_layer_state._internal_.Document.md#all)
- [anchors](annotation_annotation_layer_state._internal_.Document.md#anchors)
- [applets](annotation_annotation_layer_state._internal_.Document.md#applets)
- [baseURI](annotation_annotation_layer_state._internal_.Document.md#baseuri)
- [bgColor](annotation_annotation_layer_state._internal_.Document.md#bgcolor)
- [body](annotation_annotation_layer_state._internal_.Document.md#body)
- [characterSet](annotation_annotation_layer_state._internal_.Document.md#characterset)
- [charset](annotation_annotation_layer_state._internal_.Document.md#charset)
- [childElementCount](annotation_annotation_layer_state._internal_.Document.md#childelementcount)
- [childNodes](annotation_annotation_layer_state._internal_.Document.md#childnodes)
- [children](annotation_annotation_layer_state._internal_.Document.md#children)
- [compatMode](annotation_annotation_layer_state._internal_.Document.md#compatmode)
- [contentType](annotation_annotation_layer_state._internal_.Document.md#contenttype)
- [cookie](annotation_annotation_layer_state._internal_.Document.md#cookie)
- [currentScript](annotation_annotation_layer_state._internal_.Document.md#currentscript)
- [defaultView](annotation_annotation_layer_state._internal_.Document.md#defaultview)
- [designMode](annotation_annotation_layer_state._internal_.Document.md#designmode)
- [dir](annotation_annotation_layer_state._internal_.Document.md#dir)
- [doctype](annotation_annotation_layer_state._internal_.Document.md#doctype)
- [documentElement](annotation_annotation_layer_state._internal_.Document.md#documentelement)
- [documentURI](annotation_annotation_layer_state._internal_.Document.md#documenturi)
- [domain](annotation_annotation_layer_state._internal_.Document.md#domain)
- [embeds](annotation_annotation_layer_state._internal_.Document.md#embeds)
- [fgColor](annotation_annotation_layer_state._internal_.Document.md#fgcolor)
- [firstChild](annotation_annotation_layer_state._internal_.Document.md#firstchild)
- [firstElementChild](annotation_annotation_layer_state._internal_.Document.md#firstelementchild)
- [fonts](annotation_annotation_layer_state._internal_.Document.md#fonts)
- [forms](annotation_annotation_layer_state._internal_.Document.md#forms)
- [fullscreen](annotation_annotation_layer_state._internal_.Document.md#fullscreen)
- [fullscreenElement](annotation_annotation_layer_state._internal_.Document.md#fullscreenelement)
- [fullscreenEnabled](annotation_annotation_layer_state._internal_.Document.md#fullscreenenabled)
- [head](annotation_annotation_layer_state._internal_.Document.md#head)
- [hidden](annotation_annotation_layer_state._internal_.Document.md#hidden)
- [images](annotation_annotation_layer_state._internal_.Document.md#images)
- [implementation](annotation_annotation_layer_state._internal_.Document.md#implementation)
- [inputEncoding](annotation_annotation_layer_state._internal_.Document.md#inputencoding)
- [isConnected](annotation_annotation_layer_state._internal_.Document.md#isconnected)
- [lastChild](annotation_annotation_layer_state._internal_.Document.md#lastchild)
- [lastElementChild](annotation_annotation_layer_state._internal_.Document.md#lastelementchild)
- [lastModified](annotation_annotation_layer_state._internal_.Document.md#lastmodified)
- [linkColor](annotation_annotation_layer_state._internal_.Document.md#linkcolor)
- [links](annotation_annotation_layer_state._internal_.Document.md#links)
- [nextSibling](annotation_annotation_layer_state._internal_.Document.md#nextsibling)
- [nodeName](annotation_annotation_layer_state._internal_.Document.md#nodename)
- [nodeType](annotation_annotation_layer_state._internal_.Document.md#nodetype)
- [nodeValue](annotation_annotation_layer_state._internal_.Document.md#nodevalue)
- [onabort](annotation_annotation_layer_state._internal_.Document.md#onabort)
- [onanimationcancel](annotation_annotation_layer_state._internal_.Document.md#onanimationcancel)
- [onanimationend](annotation_annotation_layer_state._internal_.Document.md#onanimationend)
- [onanimationiteration](annotation_annotation_layer_state._internal_.Document.md#onanimationiteration)
- [onanimationstart](annotation_annotation_layer_state._internal_.Document.md#onanimationstart)
- [onauxclick](annotation_annotation_layer_state._internal_.Document.md#onauxclick)
- [onblur](annotation_annotation_layer_state._internal_.Document.md#onblur)
- [oncanplay](annotation_annotation_layer_state._internal_.Document.md#oncanplay)
- [oncanplaythrough](annotation_annotation_layer_state._internal_.Document.md#oncanplaythrough)
- [onchange](annotation_annotation_layer_state._internal_.Document.md#onchange)
- [onclick](annotation_annotation_layer_state._internal_.Document.md#onclick)
- [onclose](annotation_annotation_layer_state._internal_.Document.md#onclose)
- [oncontextmenu](annotation_annotation_layer_state._internal_.Document.md#oncontextmenu)
- [oncopy](annotation_annotation_layer_state._internal_.Document.md#oncopy)
- [oncuechange](annotation_annotation_layer_state._internal_.Document.md#oncuechange)
- [oncut](annotation_annotation_layer_state._internal_.Document.md#oncut)
- [ondblclick](annotation_annotation_layer_state._internal_.Document.md#ondblclick)
- [ondrag](annotation_annotation_layer_state._internal_.Document.md#ondrag)
- [ondragend](annotation_annotation_layer_state._internal_.Document.md#ondragend)
- [ondragenter](annotation_annotation_layer_state._internal_.Document.md#ondragenter)
- [ondragleave](annotation_annotation_layer_state._internal_.Document.md#ondragleave)
- [ondragover](annotation_annotation_layer_state._internal_.Document.md#ondragover)
- [ondragstart](annotation_annotation_layer_state._internal_.Document.md#ondragstart)
- [ondrop](annotation_annotation_layer_state._internal_.Document.md#ondrop)
- [ondurationchange](annotation_annotation_layer_state._internal_.Document.md#ondurationchange)
- [onemptied](annotation_annotation_layer_state._internal_.Document.md#onemptied)
- [onended](annotation_annotation_layer_state._internal_.Document.md#onended)
- [onerror](annotation_annotation_layer_state._internal_.Document.md#onerror)
- [onfocus](annotation_annotation_layer_state._internal_.Document.md#onfocus)
- [onformdata](annotation_annotation_layer_state._internal_.Document.md#onformdata)
- [onfullscreenchange](annotation_annotation_layer_state._internal_.Document.md#onfullscreenchange)
- [onfullscreenerror](annotation_annotation_layer_state._internal_.Document.md#onfullscreenerror)
- [ongotpointercapture](annotation_annotation_layer_state._internal_.Document.md#ongotpointercapture)
- [oninput](annotation_annotation_layer_state._internal_.Document.md#oninput)
- [oninvalid](annotation_annotation_layer_state._internal_.Document.md#oninvalid)
- [onkeydown](annotation_annotation_layer_state._internal_.Document.md#onkeydown)
- [onkeypress](annotation_annotation_layer_state._internal_.Document.md#onkeypress)
- [onkeyup](annotation_annotation_layer_state._internal_.Document.md#onkeyup)
- [onload](annotation_annotation_layer_state._internal_.Document.md#onload)
- [onloadeddata](annotation_annotation_layer_state._internal_.Document.md#onloadeddata)
- [onloadedmetadata](annotation_annotation_layer_state._internal_.Document.md#onloadedmetadata)
- [onloadstart](annotation_annotation_layer_state._internal_.Document.md#onloadstart)
- [onlostpointercapture](annotation_annotation_layer_state._internal_.Document.md#onlostpointercapture)
- [onmousedown](annotation_annotation_layer_state._internal_.Document.md#onmousedown)
- [onmouseenter](annotation_annotation_layer_state._internal_.Document.md#onmouseenter)
- [onmouseleave](annotation_annotation_layer_state._internal_.Document.md#onmouseleave)
- [onmousemove](annotation_annotation_layer_state._internal_.Document.md#onmousemove)
- [onmouseout](annotation_annotation_layer_state._internal_.Document.md#onmouseout)
- [onmouseover](annotation_annotation_layer_state._internal_.Document.md#onmouseover)
- [onmouseup](annotation_annotation_layer_state._internal_.Document.md#onmouseup)
- [onpaste](annotation_annotation_layer_state._internal_.Document.md#onpaste)
- [onpause](annotation_annotation_layer_state._internal_.Document.md#onpause)
- [onplay](annotation_annotation_layer_state._internal_.Document.md#onplay)
- [onplaying](annotation_annotation_layer_state._internal_.Document.md#onplaying)
- [onpointercancel](annotation_annotation_layer_state._internal_.Document.md#onpointercancel)
- [onpointerdown](annotation_annotation_layer_state._internal_.Document.md#onpointerdown)
- [onpointerenter](annotation_annotation_layer_state._internal_.Document.md#onpointerenter)
- [onpointerleave](annotation_annotation_layer_state._internal_.Document.md#onpointerleave)
- [onpointerlockchange](annotation_annotation_layer_state._internal_.Document.md#onpointerlockchange)
- [onpointerlockerror](annotation_annotation_layer_state._internal_.Document.md#onpointerlockerror)
- [onpointermove](annotation_annotation_layer_state._internal_.Document.md#onpointermove)
- [onpointerout](annotation_annotation_layer_state._internal_.Document.md#onpointerout)
- [onpointerover](annotation_annotation_layer_state._internal_.Document.md#onpointerover)
- [onpointerup](annotation_annotation_layer_state._internal_.Document.md#onpointerup)
- [onprogress](annotation_annotation_layer_state._internal_.Document.md#onprogress)
- [onratechange](annotation_annotation_layer_state._internal_.Document.md#onratechange)
- [onreadystatechange](annotation_annotation_layer_state._internal_.Document.md#onreadystatechange)
- [onreset](annotation_annotation_layer_state._internal_.Document.md#onreset)
- [onresize](annotation_annotation_layer_state._internal_.Document.md#onresize)
- [onscroll](annotation_annotation_layer_state._internal_.Document.md#onscroll)
- [onsecuritypolicyviolation](annotation_annotation_layer_state._internal_.Document.md#onsecuritypolicyviolation)
- [onseeked](annotation_annotation_layer_state._internal_.Document.md#onseeked)
- [onseeking](annotation_annotation_layer_state._internal_.Document.md#onseeking)
- [onselect](annotation_annotation_layer_state._internal_.Document.md#onselect)
- [onselectionchange](annotation_annotation_layer_state._internal_.Document.md#onselectionchange)
- [onselectstart](annotation_annotation_layer_state._internal_.Document.md#onselectstart)
- [onslotchange](annotation_annotation_layer_state._internal_.Document.md#onslotchange)
- [onstalled](annotation_annotation_layer_state._internal_.Document.md#onstalled)
- [onsubmit](annotation_annotation_layer_state._internal_.Document.md#onsubmit)
- [onsuspend](annotation_annotation_layer_state._internal_.Document.md#onsuspend)
- [ontimeupdate](annotation_annotation_layer_state._internal_.Document.md#ontimeupdate)
- [ontoggle](annotation_annotation_layer_state._internal_.Document.md#ontoggle)
- [ontouchcancel](annotation_annotation_layer_state._internal_.Document.md#ontouchcancel)
- [ontouchend](annotation_annotation_layer_state._internal_.Document.md#ontouchend)
- [ontouchmove](annotation_annotation_layer_state._internal_.Document.md#ontouchmove)
- [ontouchstart](annotation_annotation_layer_state._internal_.Document.md#ontouchstart)
- [ontransitioncancel](annotation_annotation_layer_state._internal_.Document.md#ontransitioncancel)
- [ontransitionend](annotation_annotation_layer_state._internal_.Document.md#ontransitionend)
- [ontransitionrun](annotation_annotation_layer_state._internal_.Document.md#ontransitionrun)
- [ontransitionstart](annotation_annotation_layer_state._internal_.Document.md#ontransitionstart)
- [onvisibilitychange](annotation_annotation_layer_state._internal_.Document.md#onvisibilitychange)
- [onvolumechange](annotation_annotation_layer_state._internal_.Document.md#onvolumechange)
- [onwaiting](annotation_annotation_layer_state._internal_.Document.md#onwaiting)
- [onwebkitanimationend](annotation_annotation_layer_state._internal_.Document.md#onwebkitanimationend)
- [onwebkitanimationiteration](annotation_annotation_layer_state._internal_.Document.md#onwebkitanimationiteration)
- [onwebkitanimationstart](annotation_annotation_layer_state._internal_.Document.md#onwebkitanimationstart)
- [onwebkittransitionend](annotation_annotation_layer_state._internal_.Document.md#onwebkittransitionend)
- [onwheel](annotation_annotation_layer_state._internal_.Document.md#onwheel)
- [ownerDocument](annotation_annotation_layer_state._internal_.Document.md#ownerdocument)
- [parentElement](annotation_annotation_layer_state._internal_.Document.md#parentelement)
- [parentNode](annotation_annotation_layer_state._internal_.Document.md#parentnode)
- [pictureInPictureElement](annotation_annotation_layer_state._internal_.Document.md#pictureinpictureelement)
- [pictureInPictureEnabled](annotation_annotation_layer_state._internal_.Document.md#pictureinpictureenabled)
- [plugins](annotation_annotation_layer_state._internal_.Document.md#plugins)
- [pointerLockElement](annotation_annotation_layer_state._internal_.Document.md#pointerlockelement)
- [previousSibling](annotation_annotation_layer_state._internal_.Document.md#previoussibling)
- [readyState](annotation_annotation_layer_state._internal_.Document.md#readystate)
- [referrer](annotation_annotation_layer_state._internal_.Document.md#referrer)
- [rootElement](annotation_annotation_layer_state._internal_.Document.md#rootelement)
- [scripts](annotation_annotation_layer_state._internal_.Document.md#scripts)
- [scrollingElement](annotation_annotation_layer_state._internal_.Document.md#scrollingelement)
- [styleSheets](annotation_annotation_layer_state._internal_.Document.md#stylesheets)
- [textContent](annotation_annotation_layer_state._internal_.Document.md#textcontent)
- [timeline](annotation_annotation_layer_state._internal_.Document.md#timeline)
- [title](annotation_annotation_layer_state._internal_.Document.md#title)
- [visibilityState](annotation_annotation_layer_state._internal_.Document.md#visibilitystate)
- [vlinkColor](annotation_annotation_layer_state._internal_.Document.md#vlinkcolor)

### Accessors

- [location](annotation_annotation_layer_state._internal_.Document.md#location)

### Methods

- [addEventListener](annotation_annotation_layer_state._internal_.Document.md#addeventlistener)
- [adoptNode](annotation_annotation_layer_state._internal_.Document.md#adoptnode)
- [append](annotation_annotation_layer_state._internal_.Document.md#append)
- [appendChild](annotation_annotation_layer_state._internal_.Document.md#appendchild)
- [captureEvents](annotation_annotation_layer_state._internal_.Document.md#captureevents)
- [caretRangeFromPoint](annotation_annotation_layer_state._internal_.Document.md#caretrangefrompoint)
- [clear](annotation_annotation_layer_state._internal_.Document.md#clear)
- [cloneNode](annotation_annotation_layer_state._internal_.Document.md#clonenode)
- [close](annotation_annotation_layer_state._internal_.Document.md#close)
- [compareDocumentPosition](annotation_annotation_layer_state._internal_.Document.md#comparedocumentposition)
- [contains](annotation_annotation_layer_state._internal_.Document.md#contains)
- [createAttribute](annotation_annotation_layer_state._internal_.Document.md#createattribute)
- [createAttributeNS](annotation_annotation_layer_state._internal_.Document.md#createattributens)
- [createCDATASection](annotation_annotation_layer_state._internal_.Document.md#createcdatasection)
- [createComment](annotation_annotation_layer_state._internal_.Document.md#createcomment)
- [createDocumentFragment](annotation_annotation_layer_state._internal_.Document.md#createdocumentfragment)
- [createElement](annotation_annotation_layer_state._internal_.Document.md#createelement)
- [createElementNS](annotation_annotation_layer_state._internal_.Document.md#createelementns)
- [createEvent](annotation_annotation_layer_state._internal_.Document.md#createevent)
- [createExpression](annotation_annotation_layer_state._internal_.Document.md#createexpression)
- [createNSResolver](annotation_annotation_layer_state._internal_.Document.md#creatensresolver)
- [createNodeIterator](annotation_annotation_layer_state._internal_.Document.md#createnodeiterator)
- [createProcessingInstruction](annotation_annotation_layer_state._internal_.Document.md#createprocessinginstruction)
- [createRange](annotation_annotation_layer_state._internal_.Document.md#createrange)
- [createTextNode](annotation_annotation_layer_state._internal_.Document.md#createtextnode)
- [createTreeWalker](annotation_annotation_layer_state._internal_.Document.md#createtreewalker)
- [dispatchEvent](annotation_annotation_layer_state._internal_.Document.md#dispatchevent)
- [elementFromPoint](annotation_annotation_layer_state._internal_.Document.md#elementfrompoint)
- [elementsFromPoint](annotation_annotation_layer_state._internal_.Document.md#elementsfrompoint)
- [evaluate](annotation_annotation_layer_state._internal_.Document.md#evaluate)
- [execCommand](annotation_annotation_layer_state._internal_.Document.md#execcommand)
- [exitFullscreen](annotation_annotation_layer_state._internal_.Document.md#exitfullscreen)
- [exitPictureInPicture](annotation_annotation_layer_state._internal_.Document.md#exitpictureinpicture)
- [exitPointerLock](annotation_annotation_layer_state._internal_.Document.md#exitpointerlock)
- [getAnimations](annotation_annotation_layer_state._internal_.Document.md#getanimations)
- [getElementById](annotation_annotation_layer_state._internal_.Document.md#getelementbyid)
- [getElementsByClassName](annotation_annotation_layer_state._internal_.Document.md#getelementsbyclassname)
- [getElementsByName](annotation_annotation_layer_state._internal_.Document.md#getelementsbyname)
- [getElementsByTagName](annotation_annotation_layer_state._internal_.Document.md#getelementsbytagname)
- [getElementsByTagNameNS](annotation_annotation_layer_state._internal_.Document.md#getelementsbytagnamens)
- [getRootNode](annotation_annotation_layer_state._internal_.Document.md#getrootnode)
- [getSelection](annotation_annotation_layer_state._internal_.Document.md#getselection)
- [hasChildNodes](annotation_annotation_layer_state._internal_.Document.md#haschildnodes)
- [hasFocus](annotation_annotation_layer_state._internal_.Document.md#hasfocus)
- [hasStorageAccess](annotation_annotation_layer_state._internal_.Document.md#hasstorageaccess)
- [importNode](annotation_annotation_layer_state._internal_.Document.md#importnode)
- [insertBefore](annotation_annotation_layer_state._internal_.Document.md#insertbefore)
- [isDefaultNamespace](annotation_annotation_layer_state._internal_.Document.md#isdefaultnamespace)
- [isEqualNode](annotation_annotation_layer_state._internal_.Document.md#isequalnode)
- [isSameNode](annotation_annotation_layer_state._internal_.Document.md#issamenode)
- [lookupNamespaceURI](annotation_annotation_layer_state._internal_.Document.md#lookupnamespaceuri)
- [lookupPrefix](annotation_annotation_layer_state._internal_.Document.md#lookupprefix)
- [normalize](annotation_annotation_layer_state._internal_.Document.md#normalize)
- [open](annotation_annotation_layer_state._internal_.Document.md#open)
- [prepend](annotation_annotation_layer_state._internal_.Document.md#prepend)
- [queryCommandEnabled](annotation_annotation_layer_state._internal_.Document.md#querycommandenabled)
- [queryCommandIndeterm](annotation_annotation_layer_state._internal_.Document.md#querycommandindeterm)
- [queryCommandState](annotation_annotation_layer_state._internal_.Document.md#querycommandstate)
- [queryCommandSupported](annotation_annotation_layer_state._internal_.Document.md#querycommandsupported)
- [queryCommandValue](annotation_annotation_layer_state._internal_.Document.md#querycommandvalue)
- [querySelector](annotation_annotation_layer_state._internal_.Document.md#queryselector)
- [querySelectorAll](annotation_annotation_layer_state._internal_.Document.md#queryselectorall)
- [releaseEvents](annotation_annotation_layer_state._internal_.Document.md#releaseevents)
- [removeChild](annotation_annotation_layer_state._internal_.Document.md#removechild)
- [removeEventListener](annotation_annotation_layer_state._internal_.Document.md#removeeventlistener)
- [replaceChild](annotation_annotation_layer_state._internal_.Document.md#replacechild)
- [replaceChildren](annotation_annotation_layer_state._internal_.Document.md#replacechildren)
- [requestStorageAccess](annotation_annotation_layer_state._internal_.Document.md#requeststorageaccess)
- [write](annotation_annotation_layer_state._internal_.Document.md#write)
- [writeln](annotation_annotation_layer_state._internal_.Document.md#writeln)

## Properties

### ATTRIBUTE\_NODE

• `Readonly` **ATTRIBUTE\_NODE**: `number`

#### Inherited from

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[ATTRIBUTE_NODE](annotation_annotation_layer_state._internal_.ParentNode.md#attribute_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10089

___

### CDATA\_SECTION\_NODE

• `Readonly` **CDATA\_SECTION\_NODE**: `number`

node is a CDATASection node.

#### Inherited from

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[CDATA_SECTION_NODE](annotation_annotation_layer_state._internal_.ParentNode.md#cdata_section_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10091

___

### COMMENT\_NODE

• `Readonly` **COMMENT\_NODE**: `number`

node is a Comment node.

#### Inherited from

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[COMMENT_NODE](annotation_annotation_layer_state._internal_.ParentNode.md#comment_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10093

___

### DOCUMENT\_FRAGMENT\_NODE

• `Readonly` **DOCUMENT\_FRAGMENT\_NODE**: `number`

node is a DocumentFragment node.

#### Inherited from

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[DOCUMENT_FRAGMENT_NODE](annotation_annotation_layer_state._internal_.ParentNode.md#document_fragment_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10095

___

### DOCUMENT\_NODE

• `Readonly` **DOCUMENT\_NODE**: `number`

node is a document.

#### Inherited from

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[DOCUMENT_NODE](annotation_annotation_layer_state._internal_.ParentNode.md#document_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10097

___

### DOCUMENT\_POSITION\_CONTAINED\_BY

• `Readonly` **DOCUMENT\_POSITION\_CONTAINED\_BY**: `number`

Set when other is a descendant of node.

#### Inherited from

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[DOCUMENT_POSITION_CONTAINED_BY](annotation_annotation_layer_state._internal_.ParentNode.md#document_position_contained_by)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10099

___

### DOCUMENT\_POSITION\_CONTAINS

• `Readonly` **DOCUMENT\_POSITION\_CONTAINS**: `number`

Set when other is an ancestor of node.

#### Inherited from

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[DOCUMENT_POSITION_CONTAINS](annotation_annotation_layer_state._internal_.ParentNode.md#document_position_contains)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10101

___

### DOCUMENT\_POSITION\_DISCONNECTED

• `Readonly` **DOCUMENT\_POSITION\_DISCONNECTED**: `number`

Set when node and other are not in the same tree.

#### Inherited from

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[DOCUMENT_POSITION_DISCONNECTED](annotation_annotation_layer_state._internal_.ParentNode.md#document_position_disconnected)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10103

___

### DOCUMENT\_POSITION\_FOLLOWING

• `Readonly` **DOCUMENT\_POSITION\_FOLLOWING**: `number`

Set when other is following node.

#### Inherited from

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[DOCUMENT_POSITION_FOLLOWING](annotation_annotation_layer_state._internal_.ParentNode.md#document_position_following)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10105

___

### DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC

• `Readonly` **DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC**: `number`

#### Inherited from

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC](annotation_annotation_layer_state._internal_.ParentNode.md#document_position_implementation_specific)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10106

___

### DOCUMENT\_POSITION\_PRECEDING

• `Readonly` **DOCUMENT\_POSITION\_PRECEDING**: `number`

Set when other is preceding node.

#### Inherited from

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[DOCUMENT_POSITION_PRECEDING](annotation_annotation_layer_state._internal_.ParentNode.md#document_position_preceding)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10108

___

### DOCUMENT\_TYPE\_NODE

• `Readonly` **DOCUMENT\_TYPE\_NODE**: `number`

node is a doctype.

#### Inherited from

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[DOCUMENT_TYPE_NODE](annotation_annotation_layer_state._internal_.ParentNode.md#document_type_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10110

___

### ELEMENT\_NODE

• `Readonly` **ELEMENT\_NODE**: `number`

node is an element.

#### Inherited from

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[ELEMENT_NODE](annotation_annotation_layer_state._internal_.ParentNode.md#element_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10112

___

### ENTITY\_NODE

• `Readonly` **ENTITY\_NODE**: `number`

#### Inherited from

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[ENTITY_NODE](annotation_annotation_layer_state._internal_.ParentNode.md#entity_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10113

___

### ENTITY\_REFERENCE\_NODE

• `Readonly` **ENTITY\_REFERENCE\_NODE**: `number`

#### Inherited from

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[ENTITY_REFERENCE_NODE](annotation_annotation_layer_state._internal_.ParentNode.md#entity_reference_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10114

___

### NOTATION\_NODE

• `Readonly` **NOTATION\_NODE**: `number`

#### Inherited from

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[NOTATION_NODE](annotation_annotation_layer_state._internal_.ParentNode.md#notation_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10115

___

### PROCESSING\_INSTRUCTION\_NODE

• `Readonly` **PROCESSING\_INSTRUCTION\_NODE**: `number`

node is a ProcessingInstruction node.

#### Inherited from

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[PROCESSING_INSTRUCTION_NODE](annotation_annotation_layer_state._internal_.ParentNode.md#processing_instruction_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10117

___

### TEXT\_NODE

• `Readonly` **TEXT\_NODE**: `number`

node is a Text node.

#### Inherited from

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[TEXT_NODE](annotation_annotation_layer_state._internal_.ParentNode.md#text_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10119

___

### URL

• `Readonly` **URL**: `string`

Sets or gets the URL for the current document.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4308

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

### alinkColor

• **alinkColor**: `string`

Sets or gets the color of all active links in the document.

**`deprecated`**

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4313

___

### all

• `Readonly` **all**: `HTMLAllCollection`

Returns a reference to the collection of elements contained by the object.

**`deprecated`**

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4318

___

### anchors

• `Readonly` **anchors**: `HTMLCollectionOf`<[`HTMLAnchorElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlanchorelement)\>

Retrieves a collection of all a objects that have a name and/or id property. Objects in this collection are in HTML source order.

**`deprecated`**

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4323

___

### applets

• `Readonly` **applets**: [`HTMLCollection`](../modules/annotation_annotation_layer_state._internal_.md#htmlcollection)

Retrieves a collection of all applet objects in the document.

**`deprecated`**

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4328

___

### baseURI

• `Readonly` **baseURI**: `string`

Returns node's node document's document base URL.

#### Inherited from

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[baseURI](annotation_annotation_layer_state._internal_.ParentNode.md#baseuri)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10042

___

### bgColor

• **bgColor**: `string`

Deprecated. Sets or retrieves a value that indicates the background color behind the object.

**`deprecated`**

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4333

___

### body

• **body**: [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)

Specifies the beginning and end of the document body.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4335

___

### characterSet

• `Readonly` **characterSet**: `string`

Returns document's encoding.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4337

___

### charset

• `Readonly` **charset**: `string`

Gets or sets the character set used to encode the object.

**`deprecated`** This is a legacy alias of `characterSet`.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4342

___

### childElementCount

• `Readonly` **childElementCount**: `number`

#### Inherited from

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[childElementCount](annotation_annotation_layer_state._internal_.ParentNode.md#childelementcount)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10407

___

### childNodes

• `Readonly` **childNodes**: `NodeListOf`<[`ChildNode`](annotation_annotation_layer_state._internal_.ChildNode.md)\>

Returns the children.

#### Inherited from

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[childNodes](annotation_annotation_layer_state._internal_.ParentNode.md#childnodes)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10044

___

### children

• `Readonly` **children**: [`HTMLCollection`](../modules/annotation_annotation_layer_state._internal_.md#htmlcollection)

Returns the child elements.

#### Inherited from

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[children](annotation_annotation_layer_state._internal_.ParentNode.md#children)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10409

___

### compatMode

• `Readonly` **compatMode**: `string`

Gets a value that indicates whether standards-compliant mode is switched on for the object.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4344

___

### contentType

• `Readonly` **contentType**: `string`

Returns document's content type.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4346

___

### cookie

• **cookie**: `string`

Returns the HTTP cookies that apply to the Document. If there are no cookies or cookies can't be applied to this resource, the empty string will be returned.

Can be set, to add a new cookie to the element's set of HTTP cookies.

If the contents are sandboxed into a unique origin (e.g. in an iframe with the sandbox attribute), a "SecurityError" DOMException will be thrown on getting and setting.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4354

___

### currentScript

• `Readonly` **currentScript**: ``null`` \| [`HTMLOrSVGScriptElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlorsvgscriptelement)

Returns the script element, or the SVG script element, that is currently executing, as long as the element represents a classic script. In the case of reentrant script execution, returns the one that most recently started executing amongst those that have not yet finished executing.

Returns null if the Document is not currently executing a script or SVG script element (e.g., because the running script is an event handler, or a timeout), or if the currently executing script or SVG script element represents a module script.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4360

___

### defaultView

• `Readonly` **defaultView**: ``null`` \| [`Window`](../modules/annotation_annotation_layer_state._internal_.md#window) & typeof `globalThis`

Returns the Window object of the active document.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4362

___

### designMode

• **designMode**: `string`

Sets or gets a value that indicates whether the document can be edited.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4364

___

### dir

• **dir**: `string`

Sets or retrieves a value that indicates the reading order of the object.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4366

___

### doctype

• `Readonly` **doctype**: ``null`` \| [`DocumentType`](../modules/annotation_annotation_layer_state._internal_.md#documenttype)

Gets an object representing the document type declaration associated with the current document.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4368

___

### documentElement

• `Readonly` **documentElement**: [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)

Gets a reference to the root node of the document.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4370

___

### documentURI

• `Readonly` **documentURI**: `string`

Returns document's URL.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4372

___

### domain

• **domain**: `string`

Sets or gets the security domain of the document.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4374

___

### embeds

• `Readonly` **embeds**: `HTMLCollectionOf`<[`HTMLEmbedElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlembedelement)\>

Retrieves a collection of all embed objects in the document.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4376

___

### fgColor

• **fgColor**: `string`

Sets or gets the foreground (text) color of the document.

**`deprecated`**

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4381

___

### firstChild

• `Readonly` **firstChild**: ``null`` \| [`ChildNode`](annotation_annotation_layer_state._internal_.ChildNode.md)

Returns the first child.

#### Inherited from

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[firstChild](annotation_annotation_layer_state._internal_.ParentNode.md#firstchild)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10046

___

### firstElementChild

• `Readonly` **firstElementChild**: ``null`` \| [`Element`](../modules/annotation_annotation_layer_state._internal_.md#element)

Returns the first child that is an element, and null otherwise.

#### Inherited from

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[firstElementChild](annotation_annotation_layer_state._internal_.ParentNode.md#firstelementchild)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10411

___

### fonts

• `Readonly` **fonts**: `FontFaceSet`

#### Inherited from

[FontFaceSource](annotation_annotation_layer_state._internal_.FontFaceSource.md).[fonts](annotation_annotation_layer_state._internal_.FontFaceSource.md#fonts)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5387

___

### forms

• `Readonly` **forms**: `HTMLCollectionOf`<`HTMLFormElement`\>

Retrieves a collection, in source order, of all form objects in the document.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4383

___

### fullscreen

• `Readonly` **fullscreen**: `boolean`

**`deprecated`**

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4385

___

### fullscreenElement

• `Readonly` **fullscreenElement**: ``null`` \| [`Element`](../modules/annotation_annotation_layer_state._internal_.md#element)

Returns document's fullscreen element.

#### Inherited from

[DocumentOrShadowRoot](annotation_annotation_layer_state._internal_.DocumentOrShadowRoot.md).[fullscreenElement](annotation_annotation_layer_state._internal_.DocumentOrShadowRoot.md#fullscreenelement)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4738

___

### fullscreenEnabled

• `Readonly` **fullscreenEnabled**: `boolean`

Returns true if document has the ability to display elements fullscreen and fullscreen is supported, or false otherwise.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4387

___

### head

• `Readonly` **head**: [`HTMLHeadElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlheadelement)

Returns the head element.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4389

___

### hidden

• `Readonly` **hidden**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4390

___

### images

• `Readonly` **images**: `HTMLCollectionOf`<[`HTMLImageElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlimageelement)\>

Retrieves a collection, in source order, of img objects in the document.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4392

___

### implementation

• `Readonly` **implementation**: [`DOMImplementation`](../modules/annotation_annotation_layer_state._internal_.md#domimplementation)

Gets the implementation object of the current document.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4394

___

### inputEncoding

• `Readonly` **inputEncoding**: `string`

Returns the character encoding used to create the webpage that is loaded into the document object.

**`deprecated`** This is a legacy alias of `characterSet`.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4399

___

### isConnected

• `Readonly` **isConnected**: `boolean`

Returns true if node is connected and false otherwise.

#### Inherited from

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[isConnected](annotation_annotation_layer_state._internal_.ParentNode.md#isconnected)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10048

___

### lastChild

• `Readonly` **lastChild**: ``null`` \| [`ChildNode`](annotation_annotation_layer_state._internal_.ChildNode.md)

Returns the last child.

#### Inherited from

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[lastChild](annotation_annotation_layer_state._internal_.ParentNode.md#lastchild)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10050

___

### lastElementChild

• `Readonly` **lastElementChild**: ``null`` \| [`Element`](../modules/annotation_annotation_layer_state._internal_.md#element)

Returns the last child that is an element, and null otherwise.

#### Inherited from

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[lastElementChild](annotation_annotation_layer_state._internal_.ParentNode.md#lastelementchild)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10413

___

### lastModified

• `Readonly` **lastModified**: `string`

Gets the date that the page was last modified, if the page supplies one.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4401

___

### linkColor

• **linkColor**: `string`

Sets or gets the color of the document links.

**`deprecated`**

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4406

___

### links

• `Readonly` **links**: `HTMLCollectionOf`<[`HTMLAnchorElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlanchorelement) \| [`HTMLAreaElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlareaelement)\>

Retrieves a collection of all a objects that specify the href property and all area objects in the document.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4408

___

### nextSibling

• `Readonly` **nextSibling**: ``null`` \| [`ChildNode`](annotation_annotation_layer_state._internal_.ChildNode.md)

Returns the next sibling.

#### Inherited from

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[nextSibling](annotation_annotation_layer_state._internal_.ParentNode.md#nextsibling)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10052

___

### nodeName

• `Readonly` **nodeName**: `string`

Returns a string appropriate for the type of node.

#### Inherited from

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[nodeName](annotation_annotation_layer_state._internal_.ParentNode.md#nodename)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10054

___

### nodeType

• `Readonly` **nodeType**: `number`

Returns the type of node.

#### Inherited from

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[nodeType](annotation_annotation_layer_state._internal_.ParentNode.md#nodetype)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10056

___

### nodeValue

• **nodeValue**: ``null`` \| `string`

#### Inherited from

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[nodeValue](annotation_annotation_layer_state._internal_.ParentNode.md#nodevalue)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10057

___

### onabort

• **onabort**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`UIEvent`](../modules/annotation_annotation_layer_state._internal_.md#uievent)) => `any`

Fires when the user aborts the download.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onabort](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onabort)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5647

___

### onanimationcancel

• **onanimationcancel**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`AnimationEvent`](../modules/annotation_annotation_layer_state._internal_.md#animationevent)) => `any`

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onanimationcancel](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onanimationcancel)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5648

___

### onanimationend

• **onanimationend**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`AnimationEvent`](../modules/annotation_annotation_layer_state._internal_.md#animationevent)) => `any`

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onanimationend](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onanimationend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5649

___

### onanimationiteration

• **onanimationiteration**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`AnimationEvent`](../modules/annotation_annotation_layer_state._internal_.md#animationevent)) => `any`

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onanimationiteration](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onanimationiteration)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5650

___

### onanimationstart

• **onanimationstart**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`AnimationEvent`](../modules/annotation_annotation_layer_state._internal_.md#animationevent)) => `any`

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onanimationstart](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onanimationstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5651

___

### onauxclick

• **onauxclick**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent)) => `any`

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onauxclick](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onauxclick)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5652

___

### onblur

• **onblur**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`FocusEvent`](../modules/annotation_annotation_layer_state._internal_.md#focusevent)) => `any`

Fires when the object loses the input focus.

**`param`** The focus event.

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onblur](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onblur)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5657

___

### oncanplay

• **oncanplay**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

Occurs when playback is possible, but would require further buffering.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[oncanplay](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#oncanplay)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5662

___

### oncanplaythrough

• **oncanplaythrough**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[oncanplaythrough](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#oncanplaythrough)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5663

___

### onchange

• **onchange**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

Fires when the contents of the object or selection have changed.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onchange](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onchange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5668

___

### onclick

• **onclick**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent)) => `any`

Fires when the user clicks the left mouse button on the object

**`param`** The mouse event.

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onclick](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onclick)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5673

___

### onclose

• **onclose**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onclose](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onclose)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5674

___

### oncontextmenu

• **oncontextmenu**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent)) => `any`

Fires when the user clicks the right mouse button in the client area, opening the context menu.

**`param`** The mouse event.

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[oncontextmenu](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#oncontextmenu)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5679

___

### oncopy

• **oncopy**: ``null`` \| (`this`: [`DocumentAndElementEventHandlers`](annotation_annotation_layer_state._internal_.DocumentAndElementEventHandlers.md), `ev`: [`ClipboardEvent`](../modules/annotation_annotation_layer_state._internal_.md#clipboardevent)) => `any`

#### Inherited from

[DocumentAndElementEventHandlers](annotation_annotation_layer_state._internal_.DocumentAndElementEventHandlers.md).[oncopy](annotation_annotation_layer_state._internal_.DocumentAndElementEventHandlers.md#oncopy)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4708

___

### oncuechange

• **oncuechange**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[oncuechange](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#oncuechange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5680

___

### oncut

• **oncut**: ``null`` \| (`this`: [`DocumentAndElementEventHandlers`](annotation_annotation_layer_state._internal_.DocumentAndElementEventHandlers.md), `ev`: [`ClipboardEvent`](../modules/annotation_annotation_layer_state._internal_.md#clipboardevent)) => `any`

#### Inherited from

[DocumentAndElementEventHandlers](annotation_annotation_layer_state._internal_.DocumentAndElementEventHandlers.md).[oncut](annotation_annotation_layer_state._internal_.DocumentAndElementEventHandlers.md#oncut)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4709

___

### ondblclick

• **ondblclick**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent)) => `any`

Fires when the user double-clicks the object.

**`param`** The mouse event.

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[ondblclick](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#ondblclick)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5685

___

### ondrag

• **ondrag**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`DragEvent`](../modules/annotation_annotation_layer_state._internal_.md#dragevent)) => `any`

Fires on the source object continuously during a drag operation.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[ondrag](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#ondrag)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5690

___

### ondragend

• **ondragend**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`DragEvent`](../modules/annotation_annotation_layer_state._internal_.md#dragevent)) => `any`

Fires on the source object when the user releases the mouse at the close of a drag operation.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[ondragend](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#ondragend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5695

___

### ondragenter

• **ondragenter**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`DragEvent`](../modules/annotation_annotation_layer_state._internal_.md#dragevent)) => `any`

Fires on the target element when the user drags the object to a valid drop target.

**`param`** The drag event.

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[ondragenter](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#ondragenter)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5700

___

### ondragleave

• **ondragleave**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`DragEvent`](../modules/annotation_annotation_layer_state._internal_.md#dragevent)) => `any`

Fires on the target object when the user moves the mouse out of a valid drop target during a drag operation.

**`param`** The drag event.

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[ondragleave](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#ondragleave)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5705

___

### ondragover

• **ondragover**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`DragEvent`](../modules/annotation_annotation_layer_state._internal_.md#dragevent)) => `any`

Fires on the target element continuously while the user drags the object over a valid drop target.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[ondragover](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#ondragover)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5710

___

### ondragstart

• **ondragstart**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`DragEvent`](../modules/annotation_annotation_layer_state._internal_.md#dragevent)) => `any`

Fires on the source object when the user starts to drag a text selection or selected object.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[ondragstart](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#ondragstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5715

___

### ondrop

• **ondrop**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`DragEvent`](../modules/annotation_annotation_layer_state._internal_.md#dragevent)) => `any`

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[ondrop](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#ondrop)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5716

___

### ondurationchange

• **ondurationchange**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

Occurs when the duration attribute is updated.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[ondurationchange](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#ondurationchange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5721

___

### onemptied

• **onemptied**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

Occurs when the media element is reset to its initial state.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onemptied](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onemptied)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5726

___

### onended

• **onended**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

Occurs when the end of playback is reached.

**`param`** The event

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onended](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onended)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5731

___

### onerror

• **onerror**: [`OnErrorEventHandler`](../modules/annotation_annotation_layer_state._internal_.md#onerroreventhandler)

Fires when an error occurs during object loading.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onerror](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onerror)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5736

___

### onfocus

• **onfocus**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`FocusEvent`](../modules/annotation_annotation_layer_state._internal_.md#focusevent)) => `any`

Fires when the object receives focus.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onfocus](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onfocus)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5741

___

### onformdata

• **onformdata**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`FormDataEvent`](../modules/annotation_annotation_layer_state._internal_.md#formdataevent)) => `any`

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onformdata](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onformdata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5742

___

### onfullscreenchange

• **onfullscreenchange**: ``null`` \| (`this`: [`Document`](../modules/annotation_annotation_layer_state._internal_.md#document), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4412

___

### onfullscreenerror

• **onfullscreenerror**: ``null`` \| (`this`: [`Document`](../modules/annotation_annotation_layer_state._internal_.md#document), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4413

___

### ongotpointercapture

• **ongotpointercapture**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/annotation_annotation_layer_state._internal_.md#pointerevent)) => `any`

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[ongotpointercapture](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#ongotpointercapture)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5743

___

### oninput

• **oninput**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[oninput](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#oninput)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5744

___

### oninvalid

• **oninvalid**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[oninvalid](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#oninvalid)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5745

___

### onkeydown

• **onkeydown**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`KeyboardEvent`](../modules/annotation_annotation_layer_state._internal_.md#keyboardevent)) => `any`

Fires when the user presses a key.

**`param`** The keyboard event

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onkeydown](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onkeydown)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5750

___

### onkeypress

• **onkeypress**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`KeyboardEvent`](../modules/annotation_annotation_layer_state._internal_.md#keyboardevent)) => `any`

Fires when the user presses an alphanumeric key.

**`param`** The event.

**`deprecated`**

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onkeypress](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onkeypress)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5756

___

### onkeyup

• **onkeyup**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`KeyboardEvent`](../modules/annotation_annotation_layer_state._internal_.md#keyboardevent)) => `any`

Fires when the user releases a key.

**`param`** The keyboard event

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onkeyup](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onkeyup)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5761

___

### onload

• **onload**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

Fires immediately after the browser loads the object.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onload](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onload)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5766

___

### onloadeddata

• **onloadeddata**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

Occurs when media data is loaded at the current playback position.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onloadeddata](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onloadeddata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5771

___

### onloadedmetadata

• **onloadedmetadata**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

Occurs when the duration and dimensions of the media have been determined.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onloadedmetadata](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onloadedmetadata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5776

___

### onloadstart

• **onloadstart**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

Occurs when Internet Explorer begins looking for media data.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onloadstart](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onloadstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5781

___

### onlostpointercapture

• **onlostpointercapture**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/annotation_annotation_layer_state._internal_.md#pointerevent)) => `any`

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onlostpointercapture](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onlostpointercapture)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5782

___

### onmousedown

• **onmousedown**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent)) => `any`

Fires when the user clicks the object with either mouse button.

**`param`** The mouse event.

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onmousedown](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onmousedown)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5787

___

### onmouseenter

• **onmouseenter**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent)) => `any`

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onmouseenter](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onmouseenter)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5788

___

### onmouseleave

• **onmouseleave**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent)) => `any`

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onmouseleave](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onmouseleave)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5789

___

### onmousemove

• **onmousemove**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent)) => `any`

Fires when the user moves the mouse over the object.

**`param`** The mouse event.

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onmousemove](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onmousemove)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5794

___

### onmouseout

• **onmouseout**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent)) => `any`

Fires when the user moves the mouse pointer outside the boundaries of the object.

**`param`** The mouse event.

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onmouseout](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onmouseout)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5799

___

### onmouseover

• **onmouseover**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent)) => `any`

Fires when the user moves the mouse pointer into the object.

**`param`** The mouse event.

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onmouseover](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onmouseover)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5804

___

### onmouseup

• **onmouseup**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent)) => `any`

Fires when the user releases a mouse button while the mouse is over the object.

**`param`** The mouse event.

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onmouseup](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onmouseup)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5809

___

### onpaste

• **onpaste**: ``null`` \| (`this`: [`DocumentAndElementEventHandlers`](annotation_annotation_layer_state._internal_.DocumentAndElementEventHandlers.md), `ev`: [`ClipboardEvent`](../modules/annotation_annotation_layer_state._internal_.md#clipboardevent)) => `any`

#### Inherited from

[DocumentAndElementEventHandlers](annotation_annotation_layer_state._internal_.DocumentAndElementEventHandlers.md).[onpaste](annotation_annotation_layer_state._internal_.DocumentAndElementEventHandlers.md#onpaste)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4710

___

### onpause

• **onpause**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

Occurs when playback is paused.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onpause](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onpause)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5814

___

### onplay

• **onplay**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

Occurs when the play method is requested.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onplay](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onplay)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5819

___

### onplaying

• **onplaying**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

Occurs when the audio or video has started playing.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onplaying](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onplaying)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5824

___

### onpointercancel

• **onpointercancel**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/annotation_annotation_layer_state._internal_.md#pointerevent)) => `any`

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onpointercancel](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onpointercancel)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5825

___

### onpointerdown

• **onpointerdown**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/annotation_annotation_layer_state._internal_.md#pointerevent)) => `any`

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onpointerdown](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onpointerdown)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5826

___

### onpointerenter

• **onpointerenter**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/annotation_annotation_layer_state._internal_.md#pointerevent)) => `any`

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onpointerenter](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onpointerenter)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5827

___

### onpointerleave

• **onpointerleave**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/annotation_annotation_layer_state._internal_.md#pointerevent)) => `any`

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onpointerleave](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onpointerleave)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5828

___

### onpointerlockchange

• **onpointerlockchange**: ``null`` \| (`this`: [`Document`](../modules/annotation_annotation_layer_state._internal_.md#document), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4414

___

### onpointerlockerror

• **onpointerlockerror**: ``null`` \| (`this`: [`Document`](../modules/annotation_annotation_layer_state._internal_.md#document), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4415

___

### onpointermove

• **onpointermove**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/annotation_annotation_layer_state._internal_.md#pointerevent)) => `any`

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onpointermove](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onpointermove)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5829

___

### onpointerout

• **onpointerout**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/annotation_annotation_layer_state._internal_.md#pointerevent)) => `any`

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onpointerout](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onpointerout)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5830

___

### onpointerover

• **onpointerover**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/annotation_annotation_layer_state._internal_.md#pointerevent)) => `any`

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onpointerover](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onpointerover)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5831

___

### onpointerup

• **onpointerup**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/annotation_annotation_layer_state._internal_.md#pointerevent)) => `any`

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onpointerup](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onpointerup)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5832

___

### onprogress

• **onprogress**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`ProgressEvent`](../modules/annotation_annotation_layer_state._internal_.md#progressevent)<[`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget)\>) => `any`

Occurs to indicate progress while downloading media data.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onprogress](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onprogress)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5837

___

### onratechange

• **onratechange**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

Occurs when the playback rate is increased or decreased.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onratechange](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onratechange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5842

___

### onreadystatechange

• **onreadystatechange**: ``null`` \| (`this`: [`Document`](../modules/annotation_annotation_layer_state._internal_.md#document), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

Fires when the state of the object has changed.

**`param`** The event

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4420

___

### onreset

• **onreset**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

Fires when the user resets a form.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onreset](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onreset)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5847

___

### onresize

• **onresize**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`UIEvent`](../modules/annotation_annotation_layer_state._internal_.md#uievent)) => `any`

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onresize](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onresize)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5848

___

### onscroll

• **onscroll**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

Fires when the user repositions the scroll box in the scroll bar on the object.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onscroll](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onscroll)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5853

___

### onsecuritypolicyviolation

• **onsecuritypolicyviolation**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`SecurityPolicyViolationEvent`](../modules/annotation_annotation_layer_state._internal_.md#securitypolicyviolationevent)) => `any`

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onsecuritypolicyviolation](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onsecuritypolicyviolation)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5854

___

### onseeked

• **onseeked**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

Occurs when the seek operation ends.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onseeked](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onseeked)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5859

___

### onseeking

• **onseeking**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

Occurs when the current playback position is moved.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onseeking](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onseeking)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5864

___

### onselect

• **onselect**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

Fires when the current selection changes.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onselect](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onselect)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5869

___

### onselectionchange

• **onselectionchange**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onselectionchange](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onselectionchange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5870

___

### onselectstart

• **onselectstart**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onselectstart](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onselectstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5871

___

### onslotchange

• **onslotchange**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onslotchange](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onslotchange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5872

___

### onstalled

• **onstalled**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

Occurs when the download has stopped.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onstalled](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onstalled)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5877

___

### onsubmit

• **onsubmit**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`SubmitEvent`](../modules/annotation_annotation_layer_state._internal_.md#submitevent)) => `any`

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onsubmit](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onsubmit)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5878

___

### onsuspend

• **onsuspend**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

Occurs if the load operation has been intentionally halted.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onsuspend](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onsuspend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5883

___

### ontimeupdate

• **ontimeupdate**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

Occurs to indicate the current playback position.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[ontimeupdate](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#ontimeupdate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5888

___

### ontoggle

• **ontoggle**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[ontoggle](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#ontoggle)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5889

___

### ontouchcancel

• `Optional` **ontouchcancel**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`TouchEvent`](../modules/annotation_annotation_layer_state._internal_.md#touchevent)) => `any`

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[ontouchcancel](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#ontouchcancel)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5890

___

### ontouchend

• `Optional` **ontouchend**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`TouchEvent`](../modules/annotation_annotation_layer_state._internal_.md#touchevent)) => `any`

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[ontouchend](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#ontouchend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5891

___

### ontouchmove

• `Optional` **ontouchmove**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`TouchEvent`](../modules/annotation_annotation_layer_state._internal_.md#touchevent)) => `any`

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[ontouchmove](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#ontouchmove)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5892

___

### ontouchstart

• `Optional` **ontouchstart**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`TouchEvent`](../modules/annotation_annotation_layer_state._internal_.md#touchevent)) => `any`

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[ontouchstart](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#ontouchstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5893

___

### ontransitioncancel

• **ontransitioncancel**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`TransitionEvent`](../modules/annotation_annotation_layer_state._internal_.md#transitionevent)) => `any`

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[ontransitioncancel](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#ontransitioncancel)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5894

___

### ontransitionend

• **ontransitionend**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`TransitionEvent`](../modules/annotation_annotation_layer_state._internal_.md#transitionevent)) => `any`

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[ontransitionend](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#ontransitionend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5895

___

### ontransitionrun

• **ontransitionrun**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`TransitionEvent`](../modules/annotation_annotation_layer_state._internal_.md#transitionevent)) => `any`

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[ontransitionrun](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#ontransitionrun)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5896

___

### ontransitionstart

• **ontransitionstart**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`TransitionEvent`](../modules/annotation_annotation_layer_state._internal_.md#transitionevent)) => `any`

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[ontransitionstart](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#ontransitionstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5897

___

### onvisibilitychange

• **onvisibilitychange**: ``null`` \| (`this`: [`Document`](../modules/annotation_annotation_layer_state._internal_.md#document), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4421

___

### onvolumechange

• **onvolumechange**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

Occurs when the volume is changed, or playback is muted or unmuted.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onvolumechange](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onvolumechange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5902

___

### onwaiting

• **onwaiting**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

Occurs when playback stops because the next frame of a video resource is not available.

**`param`** The event.

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onwaiting](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onwaiting)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5907

___

### onwebkitanimationend

• **onwebkitanimationend**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

**`deprecated`** This is a legacy alias of `onanimationend`.

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onwebkitanimationend](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onwebkitanimationend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5909

___

### onwebkitanimationiteration

• **onwebkitanimationiteration**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

**`deprecated`** This is a legacy alias of `onanimationiteration`.

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onwebkitanimationiteration](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onwebkitanimationiteration)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5911

___

### onwebkitanimationstart

• **onwebkitanimationstart**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

**`deprecated`** This is a legacy alias of `onanimationstart`.

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onwebkitanimationstart](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onwebkitanimationstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5913

___

### onwebkittransitionend

• **onwebkittransitionend**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

**`deprecated`** This is a legacy alias of `ontransitionend`.

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onwebkittransitionend](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onwebkittransitionend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5915

___

### onwheel

• **onwheel**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`WheelEvent`](../modules/annotation_annotation_layer_state._internal_.md#wheelevent)) => `any`

#### Inherited from

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[onwheel](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#onwheel)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5916

___

### ownerDocument

• `Readonly` **ownerDocument**: ``null``

Returns the node document. Returns null for documents.

#### Overrides

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[ownerDocument](annotation_annotation_layer_state._internal_.ParentNode.md#ownerdocument)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4422

___

### parentElement

• `Readonly` **parentElement**: ``null`` \| [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)

Returns the parent element.

#### Inherited from

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[parentElement](annotation_annotation_layer_state._internal_.ParentNode.md#parentelement)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10061

___

### parentNode

• `Readonly` **parentNode**: ``null`` \| [`ParentNode`](annotation_annotation_layer_state._internal_.ParentNode.md)

Returns the parent.

#### Inherited from

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[parentNode](annotation_annotation_layer_state._internal_.ParentNode.md#parentnode)

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

### pictureInPictureEnabled

• `Readonly` **pictureInPictureEnabled**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4423

___

### plugins

• `Readonly` **plugins**: `HTMLCollectionOf`<[`HTMLEmbedElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlembedelement)\>

Return an HTMLCollection of the embed elements in the Document.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4425

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

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[previousSibling](annotation_annotation_layer_state._internal_.ParentNode.md#previoussibling)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10065

___

### readyState

• `Readonly` **readyState**: [`DocumentReadyState`](../modules/annotation_annotation_layer_state._internal_.md#documentreadystate)

Retrieves a value that indicates the current state of the object.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4427

___

### referrer

• `Readonly` **referrer**: `string`

Gets the URL of the location that referred the user to the current page.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4429

___

### rootElement

• `Readonly` **rootElement**: ``null`` \| [`SVGSVGElement`](../modules/annotation_annotation_layer_state._internal_.md#svgsvgelement)

**`deprecated`**

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4431

___

### scripts

• `Readonly` **scripts**: `HTMLCollectionOf`<[`HTMLScriptElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlscriptelement)\>

Retrieves a collection of all script objects in the document.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4433

___

### scrollingElement

• `Readonly` **scrollingElement**: ``null`` \| [`Element`](../modules/annotation_annotation_layer_state._internal_.md#element)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4434

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

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[textContent](annotation_annotation_layer_state._internal_.ParentNode.md#textcontent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10066

___

### timeline

• `Readonly` **timeline**: [`DocumentTimeline`](../modules/annotation_annotation_layer_state._internal_.md#documenttimeline)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4435

___

### title

• **title**: `string`

Contains the title of the document.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4437

___

### visibilityState

• `Readonly` **visibilityState**: [`DocumentVisibilityState`](../modules/annotation_annotation_layer_state._internal_.md#documentvisibilitystate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4438

___

### vlinkColor

• **vlinkColor**: `string`

Sets or gets the color of the links that the user has visited.

**`deprecated`**

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4443

## Accessors

### location

• `get` **location**(): [`Location`](../modules/annotation_annotation_layer_state._internal_.md#location)

Contains information about the current URL.

#### Returns

[`Location`](../modules/annotation_annotation_layer_state._internal_.md#location)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4410

• `set` **location**(`href`): `void`

Contains information about the current URL.

#### Parameters

| Name | Type |
| :------ | :------ |
| `href` | `string` \| [`Location`](../modules/annotation_annotation_layer_state._internal_.md#location) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4411

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
| `K` | extends keyof [`DocumentEventMap`](annotation_annotation_layer_state._internal_.DocumentEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`Document`](../modules/annotation_annotation_layer_state._internal_.md#document), `ev`: [`DocumentEventMap`](annotation_annotation_layer_state._internal_.DocumentEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](annotation_annotation_layer_state._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[addEventListener](annotation_annotation_layer_state._internal_.ParentNode.md#addeventlistener)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4690

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

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[addEventListener](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#addeventlistener)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4691

___

### adoptNode

▸ **adoptNode**<`T`\>(`node`): `T`

Moves node from another document and returns it.

If node is a document, throws a "NotSupportedError" DOMException or, if node is a shadow root, throws a "HierarchyRequestError" DOMException.

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
| `...nodes` | (`string` \| [`Node`](../modules/annotation_annotation_layer_state._internal_.md#node))[] |

#### Returns

`void`

#### Inherited from

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[append](annotation_annotation_layer_state._internal_.ParentNode.md#append)

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

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[appendChild](annotation_annotation_layer_state._internal_.ParentNode.md#appendchild)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10067

___

### captureEvents

▸ **captureEvents**(): `void`

**`deprecated`**

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4451

___

### caretRangeFromPoint

▸ **caretRangeFromPoint**(`x`, `y`): ``null`` \| [`Range`](../modules/annotation_annotation_layer_state._internal_.md#range)

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

``null`` \| [`Range`](../modules/annotation_annotation_layer_state._internal_.md#range)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4453

___

### clear

▸ **clear**(): `void`

**`deprecated`**

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4455

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

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[cloneNode](annotation_annotation_layer_state._internal_.ParentNode.md#clonenode)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10069

___

### close

▸ **close**(): `void`

Closes an output stream and forces the sent data to display.

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4457

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

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[compareDocumentPosition](annotation_annotation_layer_state._internal_.ParentNode.md#comparedocumentposition)

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

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[contains](annotation_annotation_layer_state._internal_.ParentNode.md#contains)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10073

___

### createAttribute

▸ **createAttribute**(`localName`): [`Attr`](../modules/annotation_annotation_layer_state._internal_.md#attr)

Creates an attribute object with a specified name.

#### Parameters

| Name | Type |
| :------ | :------ |
| `localName` | `string` |

#### Returns

[`Attr`](../modules/annotation_annotation_layer_state._internal_.md#attr)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4462

___

### createAttributeNS

▸ **createAttributeNS**(`namespace`, `qualifiedName`): [`Attr`](../modules/annotation_annotation_layer_state._internal_.md#attr)

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |
| `qualifiedName` | `string` |

#### Returns

[`Attr`](../modules/annotation_annotation_layer_state._internal_.md#attr)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4463

___

### createCDATASection

▸ **createCDATASection**(`data`): [`CDATASection`](../modules/annotation_annotation_layer_state._internal_.md#cdatasection)

Returns a CDATASection node whose data is data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

[`CDATASection`](../modules/annotation_annotation_layer_state._internal_.md#cdatasection)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4465

___

### createComment

▸ **createComment**(`data`): [`Comment`](../modules/annotation_annotation_layer_state._internal_.md#comment)

Creates a comment object with the specified data.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` | Sets the comment object's data. |

#### Returns

[`Comment`](../modules/annotation_annotation_layer_state._internal_.md#comment)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4470

___

### createDocumentFragment

▸ **createDocumentFragment**(): [`DocumentFragment`](../modules/annotation_annotation_layer_state._internal_.md#documentfragment)

Creates a new document.

#### Returns

[`DocumentFragment`](../modules/annotation_annotation_layer_state._internal_.md#documentfragment)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4472

___

### createElement

▸ **createElement**<`K`\>(`tagName`, `options?`): [`HTMLElementTagNameMap`](annotation_annotation_layer_state._internal_.HTMLElementTagNameMap.md)[`K`]

Creates an instance of the element for the specified tag.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`HTMLElementTagNameMap`](annotation_annotation_layer_state._internal_.HTMLElementTagNameMap.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tagName` | `K` | The name of an element. |
| `options?` | [`ElementCreationOptions`](annotation_annotation_layer_state._internal_.ElementCreationOptions.md) | - |

#### Returns

[`HTMLElementTagNameMap`](annotation_annotation_layer_state._internal_.HTMLElementTagNameMap.md)[`K`]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4477

▸ **createElement**<`K`\>(`tagName`, `options?`): [`HTMLElementDeprecatedTagNameMap`](annotation_annotation_layer_state._internal_.HTMLElementDeprecatedTagNameMap.md)[`K`]

**`deprecated`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`HTMLElementDeprecatedTagNameMap`](annotation_annotation_layer_state._internal_.HTMLElementDeprecatedTagNameMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagName` | `K` |
| `options?` | [`ElementCreationOptions`](annotation_annotation_layer_state._internal_.ElementCreationOptions.md) |

#### Returns

[`HTMLElementDeprecatedTagNameMap`](annotation_annotation_layer_state._internal_.HTMLElementDeprecatedTagNameMap.md)[`K`]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4479

▸ **createElement**(`tagName`, `options?`): [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagName` | `string` |
| `options?` | [`ElementCreationOptions`](annotation_annotation_layer_state._internal_.ElementCreationOptions.md) |

#### Returns

[`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4480

___

### createElementNS

▸ **createElementNS**(`namespaceURI`, `qualifiedName`): [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)

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

[`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4496

▸ **createElementNS**<`K`\>(`namespaceURI`, `qualifiedName`): [`SVGElementTagNameMap`](annotation_annotation_layer_state._internal_.SVGElementTagNameMap.md)[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`SVGElementTagNameMap`](annotation_annotation_layer_state._internal_.SVGElementTagNameMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespaceURI` | ``"http://www.w3.org/2000/svg"`` |
| `qualifiedName` | `K` |

#### Returns

[`SVGElementTagNameMap`](annotation_annotation_layer_state._internal_.SVGElementTagNameMap.md)[`K`]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4497

▸ **createElementNS**(`namespaceURI`, `qualifiedName`): [`SVGElement`](../modules/annotation_annotation_layer_state._internal_.md#svgelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespaceURI` | ``"http://www.w3.org/2000/svg"`` |
| `qualifiedName` | `string` |

#### Returns

[`SVGElement`](../modules/annotation_annotation_layer_state._internal_.md#svgelement)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4498

▸ **createElementNS**(`namespaceURI`, `qualifiedName`, `options?`): [`Element`](../modules/annotation_annotation_layer_state._internal_.md#element)

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespaceURI` | ``null`` \| `string` |
| `qualifiedName` | `string` |
| `options?` | [`ElementCreationOptions`](annotation_annotation_layer_state._internal_.ElementCreationOptions.md) |

#### Returns

[`Element`](../modules/annotation_annotation_layer_state._internal_.md#element)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4499

▸ **createElementNS**(`namespace`, `qualifiedName`, `options?`): [`Element`](../modules/annotation_annotation_layer_state._internal_.md#element)

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |
| `qualifiedName` | `string` |
| `options?` | `string` \| [`ElementCreationOptions`](annotation_annotation_layer_state._internal_.ElementCreationOptions.md) |

#### Returns

[`Element`](../modules/annotation_annotation_layer_state._internal_.md#element)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4500

___

### createEvent

▸ **createEvent**(`eventInterface`): [`AnimationEvent`](../modules/annotation_annotation_layer_state._internal_.md#animationevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"AnimationEvent"`` |

#### Returns

[`AnimationEvent`](../modules/annotation_annotation_layer_state._internal_.md#animationevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4501

▸ **createEvent**(`eventInterface`): [`AnimationPlaybackEvent`](../modules/annotation_annotation_layer_state._internal_.md#animationplaybackevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"AnimationPlaybackEvent"`` |

#### Returns

[`AnimationPlaybackEvent`](../modules/annotation_annotation_layer_state._internal_.md#animationplaybackevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4502

▸ **createEvent**(`eventInterface`): [`AudioProcessingEvent`](../modules/annotation_annotation_layer_state._internal_.md#audioprocessingevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"AudioProcessingEvent"`` |

#### Returns

[`AudioProcessingEvent`](../modules/annotation_annotation_layer_state._internal_.md#audioprocessingevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4503

▸ **createEvent**(`eventInterface`): [`BeforeUnloadEvent`](../modules/annotation_annotation_layer_state._internal_.md#beforeunloadevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"BeforeUnloadEvent"`` |

#### Returns

[`BeforeUnloadEvent`](../modules/annotation_annotation_layer_state._internal_.md#beforeunloadevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4504

▸ **createEvent**(`eventInterface`): [`BlobEvent`](../modules/annotation_annotation_layer_state._internal_.md#blobevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"BlobEvent"`` |

#### Returns

[`BlobEvent`](../modules/annotation_annotation_layer_state._internal_.md#blobevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4505

▸ **createEvent**(`eventInterface`): [`ClipboardEvent`](../modules/annotation_annotation_layer_state._internal_.md#clipboardevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"ClipboardEvent"`` |

#### Returns

[`ClipboardEvent`](../modules/annotation_annotation_layer_state._internal_.md#clipboardevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4506

▸ **createEvent**(`eventInterface`): [`CloseEvent`](../modules/annotation_annotation_layer_state._internal_.md#closeevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"CloseEvent"`` |

#### Returns

[`CloseEvent`](../modules/annotation_annotation_layer_state._internal_.md#closeevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4507

▸ **createEvent**(`eventInterface`): [`CompositionEvent`](../modules/annotation_annotation_layer_state._internal_.md#compositionevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"CompositionEvent"`` |

#### Returns

[`CompositionEvent`](../modules/annotation_annotation_layer_state._internal_.md#compositionevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4508

▸ **createEvent**(`eventInterface`): [`CustomEvent`](../modules/annotation_annotation_layer_state._internal_.md#customevent)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"CustomEvent"`` |

#### Returns

[`CustomEvent`](../modules/annotation_annotation_layer_state._internal_.md#customevent)<`any`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4509

▸ **createEvent**(`eventInterface`): [`DeviceMotionEvent`](../modules/annotation_annotation_layer_state._internal_.md#devicemotionevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"DeviceMotionEvent"`` |

#### Returns

[`DeviceMotionEvent`](../modules/annotation_annotation_layer_state._internal_.md#devicemotionevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4510

▸ **createEvent**(`eventInterface`): [`DeviceOrientationEvent`](../modules/annotation_annotation_layer_state._internal_.md#deviceorientationevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"DeviceOrientationEvent"`` |

#### Returns

[`DeviceOrientationEvent`](../modules/annotation_annotation_layer_state._internal_.md#deviceorientationevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4511

▸ **createEvent**(`eventInterface`): [`DragEvent`](../modules/annotation_annotation_layer_state._internal_.md#dragevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"DragEvent"`` |

#### Returns

[`DragEvent`](../modules/annotation_annotation_layer_state._internal_.md#dragevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4512

▸ **createEvent**(`eventInterface`): [`ErrorEvent`](../modules/annotation_annotation_layer_state._internal_.md#errorevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"ErrorEvent"`` |

#### Returns

[`ErrorEvent`](../modules/annotation_annotation_layer_state._internal_.md#errorevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4513

▸ **createEvent**(`eventInterface`): [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"Event"`` |

#### Returns

[`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4514

▸ **createEvent**(`eventInterface`): [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"Events"`` |

#### Returns

[`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4515

▸ **createEvent**(`eventInterface`): [`FocusEvent`](../modules/annotation_annotation_layer_state._internal_.md#focusevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"FocusEvent"`` |

#### Returns

[`FocusEvent`](../modules/annotation_annotation_layer_state._internal_.md#focusevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4516

▸ **createEvent**(`eventInterface`): [`FontFaceSetLoadEvent`](../modules/annotation_annotation_layer_state._internal_.md#fontfacesetloadevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"FontFaceSetLoadEvent"`` |

#### Returns

[`FontFaceSetLoadEvent`](../modules/annotation_annotation_layer_state._internal_.md#fontfacesetloadevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4517

▸ **createEvent**(`eventInterface`): [`FormDataEvent`](../modules/annotation_annotation_layer_state._internal_.md#formdataevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"FormDataEvent"`` |

#### Returns

[`FormDataEvent`](../modules/annotation_annotation_layer_state._internal_.md#formdataevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4518

▸ **createEvent**(`eventInterface`): [`GamepadEvent`](../modules/annotation_annotation_layer_state._internal_.md#gamepadevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"GamepadEvent"`` |

#### Returns

[`GamepadEvent`](../modules/annotation_annotation_layer_state._internal_.md#gamepadevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4519

▸ **createEvent**(`eventInterface`): [`HashChangeEvent`](../modules/annotation_annotation_layer_state._internal_.md#hashchangeevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"HashChangeEvent"`` |

#### Returns

[`HashChangeEvent`](../modules/annotation_annotation_layer_state._internal_.md#hashchangeevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4520

▸ **createEvent**(`eventInterface`): [`IDBVersionChangeEvent`](../modules/annotation_annotation_layer_state._internal_.md#idbversionchangeevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"IDBVersionChangeEvent"`` |

#### Returns

[`IDBVersionChangeEvent`](../modules/annotation_annotation_layer_state._internal_.md#idbversionchangeevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4521

▸ **createEvent**(`eventInterface`): [`InputEvent`](../modules/annotation_annotation_layer_state._internal_.md#inputevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"InputEvent"`` |

#### Returns

[`InputEvent`](../modules/annotation_annotation_layer_state._internal_.md#inputevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4522

▸ **createEvent**(`eventInterface`): [`KeyboardEvent`](../modules/annotation_annotation_layer_state._internal_.md#keyboardevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"KeyboardEvent"`` |

#### Returns

[`KeyboardEvent`](../modules/annotation_annotation_layer_state._internal_.md#keyboardevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4523

▸ **createEvent**(`eventInterface`): [`MIDIConnectionEvent`](../modules/annotation_annotation_layer_state._internal_.md#midiconnectionevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"MIDIConnectionEvent"`` |

#### Returns

[`MIDIConnectionEvent`](../modules/annotation_annotation_layer_state._internal_.md#midiconnectionevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4524

▸ **createEvent**(`eventInterface`): [`MIDIMessageEvent`](../modules/annotation_annotation_layer_state._internal_.md#midimessageevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"MIDIMessageEvent"`` |

#### Returns

[`MIDIMessageEvent`](../modules/annotation_annotation_layer_state._internal_.md#midimessageevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4525

▸ **createEvent**(`eventInterface`): [`MediaEncryptedEvent`](../modules/annotation_annotation_layer_state._internal_.md#mediaencryptedevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"MediaEncryptedEvent"`` |

#### Returns

[`MediaEncryptedEvent`](../modules/annotation_annotation_layer_state._internal_.md#mediaencryptedevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4526

▸ **createEvent**(`eventInterface`): [`MediaKeyMessageEvent`](../modules/annotation_annotation_layer_state._internal_.md#mediakeymessageevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"MediaKeyMessageEvent"`` |

#### Returns

[`MediaKeyMessageEvent`](../modules/annotation_annotation_layer_state._internal_.md#mediakeymessageevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4527

▸ **createEvent**(`eventInterface`): [`MediaQueryListEvent`](../modules/annotation_annotation_layer_state._internal_.md#mediaquerylistevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"MediaQueryListEvent"`` |

#### Returns

[`MediaQueryListEvent`](../modules/annotation_annotation_layer_state._internal_.md#mediaquerylistevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4528

▸ **createEvent**(`eventInterface`): [`MediaRecorderErrorEvent`](../modules/annotation_annotation_layer_state._internal_.md#mediarecordererrorevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"MediaRecorderErrorEvent"`` |

#### Returns

[`MediaRecorderErrorEvent`](../modules/annotation_annotation_layer_state._internal_.md#mediarecordererrorevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4529

▸ **createEvent**(`eventInterface`): [`MediaStreamTrackEvent`](../modules/annotation_annotation_layer_state._internal_.md#mediastreamtrackevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"MediaStreamTrackEvent"`` |

#### Returns

[`MediaStreamTrackEvent`](../modules/annotation_annotation_layer_state._internal_.md#mediastreamtrackevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4530

▸ **createEvent**(`eventInterface`): `MessageEvent`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"MessageEvent"`` |

#### Returns

`MessageEvent`<`any`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4531

▸ **createEvent**(`eventInterface`): [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"MouseEvent"`` |

#### Returns

[`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4532

▸ **createEvent**(`eventInterface`): [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"MouseEvents"`` |

#### Returns

[`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4533

▸ **createEvent**(`eventInterface`): [`MutationEvent`](../modules/annotation_annotation_layer_state._internal_.md#mutationevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"MutationEvent"`` |

#### Returns

[`MutationEvent`](../modules/annotation_annotation_layer_state._internal_.md#mutationevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4534

▸ **createEvent**(`eventInterface`): [`MutationEvent`](../modules/annotation_annotation_layer_state._internal_.md#mutationevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"MutationEvents"`` |

#### Returns

[`MutationEvent`](../modules/annotation_annotation_layer_state._internal_.md#mutationevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4535

▸ **createEvent**(`eventInterface`): [`OfflineAudioCompletionEvent`](../modules/annotation_annotation_layer_state._internal_.md#offlineaudiocompletionevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"OfflineAudioCompletionEvent"`` |

#### Returns

[`OfflineAudioCompletionEvent`](../modules/annotation_annotation_layer_state._internal_.md#offlineaudiocompletionevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4536

▸ **createEvent**(`eventInterface`): [`PageTransitionEvent`](../modules/annotation_annotation_layer_state._internal_.md#pagetransitionevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"PageTransitionEvent"`` |

#### Returns

[`PageTransitionEvent`](../modules/annotation_annotation_layer_state._internal_.md#pagetransitionevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4537

▸ **createEvent**(`eventInterface`): [`PaymentMethodChangeEvent`](../modules/annotation_annotation_layer_state._internal_.md#paymentmethodchangeevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"PaymentMethodChangeEvent"`` |

#### Returns

[`PaymentMethodChangeEvent`](../modules/annotation_annotation_layer_state._internal_.md#paymentmethodchangeevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4538

▸ **createEvent**(`eventInterface`): [`PaymentRequestUpdateEvent`](../modules/annotation_annotation_layer_state._internal_.md#paymentrequestupdateevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"PaymentRequestUpdateEvent"`` |

#### Returns

[`PaymentRequestUpdateEvent`](../modules/annotation_annotation_layer_state._internal_.md#paymentrequestupdateevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4539

▸ **createEvent**(`eventInterface`): [`PointerEvent`](../modules/annotation_annotation_layer_state._internal_.md#pointerevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"PointerEvent"`` |

#### Returns

[`PointerEvent`](../modules/annotation_annotation_layer_state._internal_.md#pointerevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4540

▸ **createEvent**(`eventInterface`): [`PopStateEvent`](../modules/annotation_annotation_layer_state._internal_.md#popstateevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"PopStateEvent"`` |

#### Returns

[`PopStateEvent`](../modules/annotation_annotation_layer_state._internal_.md#popstateevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4541

▸ **createEvent**(`eventInterface`): [`ProgressEvent`](../modules/annotation_annotation_layer_state._internal_.md#progressevent)<[`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"ProgressEvent"`` |

#### Returns

[`ProgressEvent`](../modules/annotation_annotation_layer_state._internal_.md#progressevent)<[`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4542

▸ **createEvent**(`eventInterface`): [`PromiseRejectionEvent`](../modules/annotation_annotation_layer_state._internal_.md#promiserejectionevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"PromiseRejectionEvent"`` |

#### Returns

[`PromiseRejectionEvent`](../modules/annotation_annotation_layer_state._internal_.md#promiserejectionevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4543

▸ **createEvent**(`eventInterface`): [`RTCDTMFToneChangeEvent`](../modules/annotation_annotation_layer_state._internal_.md#rtcdtmftonechangeevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"RTCDTMFToneChangeEvent"`` |

#### Returns

[`RTCDTMFToneChangeEvent`](../modules/annotation_annotation_layer_state._internal_.md#rtcdtmftonechangeevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4544

▸ **createEvent**(`eventInterface`): [`RTCDataChannelEvent`](../modules/annotation_annotation_layer_state._internal_.md#rtcdatachannelevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"RTCDataChannelEvent"`` |

#### Returns

[`RTCDataChannelEvent`](../modules/annotation_annotation_layer_state._internal_.md#rtcdatachannelevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4545

▸ **createEvent**(`eventInterface`): [`RTCErrorEvent`](../modules/annotation_annotation_layer_state._internal_.md#rtcerrorevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"RTCErrorEvent"`` |

#### Returns

[`RTCErrorEvent`](../modules/annotation_annotation_layer_state._internal_.md#rtcerrorevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4546

▸ **createEvent**(`eventInterface`): [`RTCPeerConnectionIceErrorEvent`](../modules/annotation_annotation_layer_state._internal_.md#rtcpeerconnectioniceerrorevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"RTCPeerConnectionIceErrorEvent"`` |

#### Returns

[`RTCPeerConnectionIceErrorEvent`](../modules/annotation_annotation_layer_state._internal_.md#rtcpeerconnectioniceerrorevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4547

▸ **createEvent**(`eventInterface`): [`RTCPeerConnectionIceEvent`](../modules/annotation_annotation_layer_state._internal_.md#rtcpeerconnectioniceevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"RTCPeerConnectionIceEvent"`` |

#### Returns

[`RTCPeerConnectionIceEvent`](../modules/annotation_annotation_layer_state._internal_.md#rtcpeerconnectioniceevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4548

▸ **createEvent**(`eventInterface`): [`RTCTrackEvent`](../modules/annotation_annotation_layer_state._internal_.md#rtctrackevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"RTCTrackEvent"`` |

#### Returns

[`RTCTrackEvent`](../modules/annotation_annotation_layer_state._internal_.md#rtctrackevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4549

▸ **createEvent**(`eventInterface`): [`SecurityPolicyViolationEvent`](../modules/annotation_annotation_layer_state._internal_.md#securitypolicyviolationevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"SecurityPolicyViolationEvent"`` |

#### Returns

[`SecurityPolicyViolationEvent`](../modules/annotation_annotation_layer_state._internal_.md#securitypolicyviolationevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4550

▸ **createEvent**(`eventInterface`): [`SpeechSynthesisErrorEvent`](../modules/annotation_annotation_layer_state._internal_.md#speechsynthesiserrorevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"SpeechSynthesisErrorEvent"`` |

#### Returns

[`SpeechSynthesisErrorEvent`](../modules/annotation_annotation_layer_state._internal_.md#speechsynthesiserrorevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4551

▸ **createEvent**(`eventInterface`): [`SpeechSynthesisEvent`](../modules/annotation_annotation_layer_state._internal_.md#speechsynthesisevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"SpeechSynthesisEvent"`` |

#### Returns

[`SpeechSynthesisEvent`](../modules/annotation_annotation_layer_state._internal_.md#speechsynthesisevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4552

▸ **createEvent**(`eventInterface`): [`StorageEvent`](../modules/annotation_annotation_layer_state._internal_.md#storageevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"StorageEvent"`` |

#### Returns

[`StorageEvent`](../modules/annotation_annotation_layer_state._internal_.md#storageevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4553

▸ **createEvent**(`eventInterface`): [`SubmitEvent`](../modules/annotation_annotation_layer_state._internal_.md#submitevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"SubmitEvent"`` |

#### Returns

[`SubmitEvent`](../modules/annotation_annotation_layer_state._internal_.md#submitevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4554

▸ **createEvent**(`eventInterface`): [`TouchEvent`](../modules/annotation_annotation_layer_state._internal_.md#touchevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"TouchEvent"`` |

#### Returns

[`TouchEvent`](../modules/annotation_annotation_layer_state._internal_.md#touchevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4555

▸ **createEvent**(`eventInterface`): [`TrackEvent`](../modules/annotation_annotation_layer_state._internal_.md#trackevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"TrackEvent"`` |

#### Returns

[`TrackEvent`](../modules/annotation_annotation_layer_state._internal_.md#trackevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4556

▸ **createEvent**(`eventInterface`): [`TransitionEvent`](../modules/annotation_annotation_layer_state._internal_.md#transitionevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"TransitionEvent"`` |

#### Returns

[`TransitionEvent`](../modules/annotation_annotation_layer_state._internal_.md#transitionevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4557

▸ **createEvent**(`eventInterface`): [`UIEvent`](../modules/annotation_annotation_layer_state._internal_.md#uievent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"UIEvent"`` |

#### Returns

[`UIEvent`](../modules/annotation_annotation_layer_state._internal_.md#uievent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4558

▸ **createEvent**(`eventInterface`): [`UIEvent`](../modules/annotation_annotation_layer_state._internal_.md#uievent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"UIEvents"`` |

#### Returns

[`UIEvent`](../modules/annotation_annotation_layer_state._internal_.md#uievent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4559

▸ **createEvent**(`eventInterface`): [`WebGLContextEvent`](../modules/annotation_annotation_layer_state._internal_.md#webglcontextevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"WebGLContextEvent"`` |

#### Returns

[`WebGLContextEvent`](../modules/annotation_annotation_layer_state._internal_.md#webglcontextevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4560

▸ **createEvent**(`eventInterface`): [`WheelEvent`](../modules/annotation_annotation_layer_state._internal_.md#wheelevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"WheelEvent"`` |

#### Returns

[`WheelEvent`](../modules/annotation_annotation_layer_state._internal_.md#wheelevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4561

▸ **createEvent**(`eventInterface`): [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | `string` |

#### Returns

[`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4562

___

### createExpression

▸ **createExpression**(`expression`, `resolver?`): [`XPathExpression`](../modules/annotation_annotation_layer_state._internal_.md#xpathexpression)

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |
| `resolver?` | ``null`` \| [`XPathNSResolver`](../modules/annotation_annotation_layer_state._internal_.md#xpathnsresolver) |

#### Returns

[`XPathExpression`](../modules/annotation_annotation_layer_state._internal_.md#xpathexpression)

#### Inherited from

[XPathEvaluatorBase](annotation_annotation_layer_state._internal_.XPathEvaluatorBase.md).[createExpression](annotation_annotation_layer_state._internal_.XPathEvaluatorBase.md#createexpression)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:17084

___

### createNSResolver

▸ **createNSResolver**(`nodeResolver`): [`XPathNSResolver`](../modules/annotation_annotation_layer_state._internal_.md#xpathnsresolver)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeResolver` | [`Node`](../modules/annotation_annotation_layer_state._internal_.md#node) |

#### Returns

[`XPathNSResolver`](../modules/annotation_annotation_layer_state._internal_.md#xpathnsresolver)

#### Inherited from

[XPathEvaluatorBase](annotation_annotation_layer_state._internal_.XPathEvaluatorBase.md).[createNSResolver](annotation_annotation_layer_state._internal_.XPathEvaluatorBase.md#creatensresolver)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:17085

___

### createNodeIterator

▸ **createNodeIterator**(`root`, `whatToShow?`, `filter?`): [`NodeIterator`](../modules/annotation_annotation_layer_state._internal_.md#nodeiterator)

Creates a NodeIterator object that you can use to traverse filtered lists of nodes or elements in a document.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `root` | [`Node`](../modules/annotation_annotation_layer_state._internal_.md#node) | The root element or node to start traversing on. |
| `whatToShow?` | `number` | The type of nodes or elements to appear in the node list |
| `filter?` | ``null`` \| [`NodeFilter`](../modules/annotation_annotation_layer_state._internal_.md#nodefilter-1) | A custom NodeFilter function to use. For more information, see filter. Use null for no filter. |

#### Returns

[`NodeIterator`](../modules/annotation_annotation_layer_state._internal_.md#nodeiterator)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4569

___

### createProcessingInstruction

▸ **createProcessingInstruction**(`target`, `data`): [`ProcessingInstruction`](../modules/annotation_annotation_layer_state._internal_.md#processinginstruction)

Returns a ProcessingInstruction node whose target is target and data is data. If target does not match the Name production an "InvalidCharacterError" DOMException will be thrown. If data contains "?>" an "InvalidCharacterError" DOMException will be thrown.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `string` |
| `data` | `string` |

#### Returns

[`ProcessingInstruction`](../modules/annotation_annotation_layer_state._internal_.md#processinginstruction)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4571

___

### createRange

▸ **createRange**(): [`Range`](../modules/annotation_annotation_layer_state._internal_.md#range)

Returns an empty range object that has both of its boundary points positioned at the beginning of the document.

#### Returns

[`Range`](../modules/annotation_annotation_layer_state._internal_.md#range)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4573

___

### createTextNode

▸ **createTextNode**(`data`): [`Text`](../modules/annotation_annotation_layer_state._internal_.md#text)

Creates a text string from the specified value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` | String that specifies the nodeValue property of the text node. |

#### Returns

[`Text`](../modules/annotation_annotation_layer_state._internal_.md#text)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4578

___

### createTreeWalker

▸ **createTreeWalker**(`root`, `whatToShow?`, `filter?`): [`TreeWalker`](../modules/annotation_annotation_layer_state._internal_.md#treewalker)

Creates a TreeWalker object that you can use to traverse filtered lists of nodes or elements in a document.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `root` | [`Node`](../modules/annotation_annotation_layer_state._internal_.md#node) | The root element or node to start traversing on. |
| `whatToShow?` | `number` | The type of nodes or elements to appear in the node list. For more information, see whatToShow. |
| `filter?` | ``null`` \| [`NodeFilter`](../modules/annotation_annotation_layer_state._internal_.md#nodefilter-1) | A custom NodeFilter function to use. |

#### Returns

[`TreeWalker`](../modules/annotation_annotation_layer_state._internal_.md#treewalker)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4585

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

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[dispatchEvent](annotation_annotation_layer_state._internal_.ParentNode.md#dispatchevent)

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

### evaluate

▸ **evaluate**(`expression`, `contextNode`, `resolver?`, `type?`, `result?`): [`XPathResult`](../modules/annotation_annotation_layer_state._internal_.md#xpathresult)

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |
| `contextNode` | [`Node`](../modules/annotation_annotation_layer_state._internal_.md#node) |
| `resolver?` | ``null`` \| [`XPathNSResolver`](../modules/annotation_annotation_layer_state._internal_.md#xpathnsresolver) |
| `type?` | `number` |
| `result?` | ``null`` \| [`XPathResult`](../modules/annotation_annotation_layer_state._internal_.md#xpathresult) |

#### Returns

[`XPathResult`](../modules/annotation_annotation_layer_state._internal_.md#xpathresult)

#### Inherited from

[XPathEvaluatorBase](annotation_annotation_layer_state._internal_.XPathEvaluatorBase.md).[evaluate](annotation_annotation_layer_state._internal_.XPathEvaluatorBase.md#evaluate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:17086

___

### execCommand

▸ **execCommand**(`commandId`, `showUI?`, `value?`): `boolean`

Executes a command on the current document, current selection, or the given range.

**`deprecated`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commandId` | `string` | String that specifies the command to execute. This command can be any of the command identifiers that can be executed in script. |
| `showUI?` | `boolean` | Display the user interface, defaults to false. |
| `value?` | `string` | Value to assign. |

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4593

___

### exitFullscreen

▸ **exitFullscreen**(): `Promise`<`void`\>

Stops document's fullscreen element from being displayed fullscreen and resolves promise when done.

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4595

___

### exitPictureInPicture

▸ **exitPictureInPicture**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4596

___

### exitPointerLock

▸ **exitPointerLock**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4597

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

Returns a reference to the first object with the specified value of the ID attribute.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `elementId` | `string` | String that specifies the ID value. |

#### Returns

``null`` \| [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)

#### Overrides

[NonElementParentNode](annotation_annotation_layer_state._internal_.NonElementParentNode.md).[getElementById](annotation_annotation_layer_state._internal_.NonElementParentNode.md#getelementbyid)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4602

___

### getElementsByClassName

▸ **getElementsByClassName**(`classNames`): `HTMLCollectionOf`<[`Element`](../modules/annotation_annotation_layer_state._internal_.md#element)\>

Returns a HTMLCollection of the elements in the object on which the method was invoked (a document or an element) that have all the classes given by classNames. The classNames argument is interpreted as a space-separated list of classes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `classNames` | `string` |

#### Returns

`HTMLCollectionOf`<[`Element`](../modules/annotation_annotation_layer_state._internal_.md#element)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4604

___

### getElementsByName

▸ **getElementsByName**(`elementName`): `NodeListOf`<[`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)\>

Gets a collection of objects based on the value of the NAME or ID attribute.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `elementName` | `string` | Gets a collection of objects based on the value of the NAME or ID attribute. |

#### Returns

`NodeListOf`<[`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4609

___

### getElementsByTagName

▸ **getElementsByTagName**<`K`\>(`qualifiedName`): `HTMLCollectionOf`<[`HTMLElementTagNameMap`](annotation_annotation_layer_state._internal_.HTMLElementTagNameMap.md)[`K`]\>

Retrieves a collection of objects based on the specified element name.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`HTMLElementTagNameMap`](annotation_annotation_layer_state._internal_.HTMLElementTagNameMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `K` |

#### Returns

`HTMLCollectionOf`<[`HTMLElementTagNameMap`](annotation_annotation_layer_state._internal_.HTMLElementTagNameMap.md)[`K`]\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4614

▸ **getElementsByTagName**<`K`\>(`qualifiedName`): `HTMLCollectionOf`<[`SVGElementTagNameMap`](annotation_annotation_layer_state._internal_.SVGElementTagNameMap.md)[`K`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`SVGElementTagNameMap`](annotation_annotation_layer_state._internal_.SVGElementTagNameMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `K` |

#### Returns

`HTMLCollectionOf`<[`SVGElementTagNameMap`](annotation_annotation_layer_state._internal_.SVGElementTagNameMap.md)[`K`]\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4615

▸ **getElementsByTagName**(`qualifiedName`): `HTMLCollectionOf`<[`Element`](../modules/annotation_annotation_layer_state._internal_.md#element)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |

#### Returns

`HTMLCollectionOf`<[`Element`](../modules/annotation_annotation_layer_state._internal_.md#element)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4616

___

### getElementsByTagNameNS

▸ **getElementsByTagNameNS**(`namespaceURI`, `localName`): `HTMLCollectionOf`<[`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)\>

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

`HTMLCollectionOf`<[`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4626

▸ **getElementsByTagNameNS**(`namespaceURI`, `localName`): `HTMLCollectionOf`<[`SVGElement`](../modules/annotation_annotation_layer_state._internal_.md#svgelement)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespaceURI` | ``"http://www.w3.org/2000/svg"`` |
| `localName` | `string` |

#### Returns

`HTMLCollectionOf`<[`SVGElement`](../modules/annotation_annotation_layer_state._internal_.md#svgelement)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4627

▸ **getElementsByTagNameNS**(`namespace`, `localName`): `HTMLCollectionOf`<[`Element`](../modules/annotation_annotation_layer_state._internal_.md#element)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |
| `localName` | `string` |

#### Returns

`HTMLCollectionOf`<[`Element`](../modules/annotation_annotation_layer_state._internal_.md#element)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4628

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

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[getRootNode](annotation_annotation_layer_state._internal_.ParentNode.md#getrootnode)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10075

___

### getSelection

▸ **getSelection**(): ``null`` \| [`Selection`](../modules/annotation_annotation_layer_state._internal_.md#selection)

Returns an object representing the current selection of the document that is loaded into the object displaying a webpage.

#### Returns

``null`` \| [`Selection`](../modules/annotation_annotation_layer_state._internal_.md#selection)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4630

___

### hasChildNodes

▸ **hasChildNodes**(): `boolean`

Returns whether node has children.

#### Returns

`boolean`

#### Inherited from

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[hasChildNodes](annotation_annotation_layer_state._internal_.ParentNode.md#haschildnodes)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10077

___

### hasFocus

▸ **hasFocus**(): `boolean`

Gets a value indicating whether the object currently has focus.

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4632

___

### hasStorageAccess

▸ **hasStorageAccess**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

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
| `T` | extends [`Node`](../modules/annotation_annotation_layer_state._internal_.md#node) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `T` |
| `deep?` | `boolean` |

#### Returns

`T`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4639

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

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[insertBefore](annotation_annotation_layer_state._internal_.ParentNode.md#insertbefore)

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

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[isDefaultNamespace](annotation_annotation_layer_state._internal_.ParentNode.md#isdefaultnamespace)

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

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[isEqualNode](annotation_annotation_layer_state._internal_.ParentNode.md#isequalnode)

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

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[isSameNode](annotation_annotation_layer_state._internal_.ParentNode.md#issamenode)

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

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[lookupNamespaceURI](annotation_annotation_layer_state._internal_.ParentNode.md#lookupnamespaceuri)

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

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[lookupPrefix](annotation_annotation_layer_state._internal_.ParentNode.md#lookupprefix)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10084

___

### normalize

▸ **normalize**(): `void`

Removes empty exclusive Text nodes and concatenates the data of remaining contiguous exclusive Text nodes into the first of their nodes.

#### Returns

`void`

#### Inherited from

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[normalize](annotation_annotation_layer_state._internal_.ParentNode.md#normalize)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10086

___

### open

▸ **open**(`unused1?`, `unused2?`): [`Document`](../modules/annotation_annotation_layer_state._internal_.md#document)

Opens a new window and loads a document specified by a given URL. Also, opens a new window that uses the url parameter and the name parameter to collect the output of the write method and the writeln method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `unused1?` | `string` |
| `unused2?` | `string` |

#### Returns

[`Document`](../modules/annotation_annotation_layer_state._internal_.md#document)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4647

▸ **open**(`url`, `name`, `features`): ``null`` \| [`Window`](../modules/annotation_annotation_layer_state._internal_.md#window)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` \| [`URL`](../modules/annotation_annotation_layer_state._internal_.md#url) |
| `name` | `string` |
| `features` | `string` |

#### Returns

``null`` \| [`Window`](../modules/annotation_annotation_layer_state._internal_.md#window)

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
| `...nodes` | (`string` \| [`Node`](../modules/annotation_annotation_layer_state._internal_.md#node))[] |

#### Returns

`void`

#### Inherited from

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[prepend](annotation_annotation_layer_state._internal_.ParentNode.md#prepend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10425

___

### queryCommandEnabled

▸ **queryCommandEnabled**(`commandId`): `boolean`

Returns a Boolean value that indicates whether a specified command can be successfully executed using execCommand, given the current state of the document.

**`deprecated`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commandId` | `string` | Specifies a command identifier. |

#### Returns

`boolean`

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

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4659

___

### queryCommandState

▸ **queryCommandState**(`commandId`): `boolean`

Returns a Boolean value that indicates the current state of the command.

**`deprecated`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commandId` | `string` | String that specifies a command identifier. |

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4665

___

### queryCommandSupported

▸ **queryCommandSupported**(`commandId`): `boolean`

Returns a Boolean value that indicates whether the current command is supported on the current range.

**`deprecated`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commandId` | `string` | Specifies a command identifier. |

#### Returns

`boolean`

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

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4676

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

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[querySelector](annotation_annotation_layer_state._internal_.ParentNode.md#queryselector)

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

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[querySelector](annotation_annotation_layer_state._internal_.ParentNode.md#queryselector)

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

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[querySelector](annotation_annotation_layer_state._internal_.ParentNode.md#queryselector)

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

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[querySelectorAll](annotation_annotation_layer_state._internal_.ParentNode.md#queryselectorall)

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

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[querySelectorAll](annotation_annotation_layer_state._internal_.ParentNode.md#queryselectorall)

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

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[querySelectorAll](annotation_annotation_layer_state._internal_.ParentNode.md#queryselectorall)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10433

___

### releaseEvents

▸ **releaseEvents**(): `void`

**`deprecated`**

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4678

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

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[removeChild](annotation_annotation_layer_state._internal_.ParentNode.md#removechild)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10087

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

Removes the event listener in target's event listener list with the same type, callback, and options.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`DocumentEventMap`](annotation_annotation_layer_state._internal_.DocumentEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`Document`](../modules/annotation_annotation_layer_state._internal_.md#document), `ev`: [`DocumentEventMap`](annotation_annotation_layer_state._internal_.DocumentEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](annotation_annotation_layer_state._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[removeEventListener](annotation_annotation_layer_state._internal_.ParentNode.md#removeeventlistener)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4692

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

[GlobalEventHandlers](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md).[removeEventListener](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md#removeeventlistener)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4693

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

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[replaceChild](annotation_annotation_layer_state._internal_.ParentNode.md#replacechild)

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

[ParentNode](annotation_annotation_layer_state._internal_.ParentNode.md).[replaceChildren](annotation_annotation_layer_state._internal_.ParentNode.md#replacechildren)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10439

___

### requestStorageAccess

▸ **requestStorageAccess**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

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

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4689
