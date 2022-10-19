[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / SVGPolygonElement

# Interface: SVGPolygonElement

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).SVGPolygonElement

Provides access to the properties of <polygon> elements, as well as methods to manipulate them.

## Hierarchy

- [`SVGGeometryElement`](../modules/annotation_annotation_layer_state._internal_.md#svggeometryelement)

- [`SVGAnimatedPoints`](annotation_annotation_layer_state._internal_.SVGAnimatedPoints.md)

  ↳ **`SVGPolygonElement`**

## Table of contents

### Properties

- [ATTRIBUTE\_NODE](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#attribute_node)
- [CDATA\_SECTION\_NODE](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#cdata_section_node)
- [COMMENT\_NODE](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#comment_node)
- [DOCUMENT\_FRAGMENT\_NODE](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#document_fragment_node)
- [DOCUMENT\_NODE](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#document_node)
- [DOCUMENT\_POSITION\_CONTAINED\_BY](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#document_position_contained_by)
- [DOCUMENT\_POSITION\_CONTAINS](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#document_position_contains)
- [DOCUMENT\_POSITION\_DISCONNECTED](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#document_position_disconnected)
- [DOCUMENT\_POSITION\_FOLLOWING](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#document_position_following)
- [DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#document_position_implementation_specific)
- [DOCUMENT\_POSITION\_PRECEDING](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#document_position_preceding)
- [DOCUMENT\_TYPE\_NODE](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#document_type_node)
- [ELEMENT\_NODE](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#element_node)
- [ENTITY\_NODE](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#entity_node)
- [ENTITY\_REFERENCE\_NODE](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#entity_reference_node)
- [NOTATION\_NODE](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#notation_node)
- [PROCESSING\_INSTRUCTION\_NODE](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#processing_instruction_node)
- [TEXT\_NODE](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#text_node)
- [animatedPoints](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#animatedpoints)
- [ariaAtomic](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ariaatomic)
- [ariaAutoComplete](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ariaautocomplete)
- [ariaBusy](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ariabusy)
- [ariaChecked](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ariachecked)
- [ariaColCount](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ariacolcount)
- [ariaColIndex](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ariacolindex)
- [ariaColSpan](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ariacolspan)
- [ariaCurrent](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ariacurrent)
- [ariaDisabled](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ariadisabled)
- [ariaExpanded](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ariaexpanded)
- [ariaHasPopup](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ariahaspopup)
- [ariaHidden](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ariahidden)
- [ariaKeyShortcuts](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ariakeyshortcuts)
- [ariaLabel](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#arialabel)
- [ariaLevel](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#arialevel)
- [ariaLive](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#arialive)
- [ariaModal](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ariamodal)
- [ariaMultiLine](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ariamultiline)
- [ariaMultiSelectable](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ariamultiselectable)
- [ariaOrientation](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ariaorientation)
- [ariaPlaceholder](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ariaplaceholder)
- [ariaPosInSet](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ariaposinset)
- [ariaPressed](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ariapressed)
- [ariaReadOnly](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ariareadonly)
- [ariaRequired](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ariarequired)
- [ariaRoleDescription](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ariaroledescription)
- [ariaRowCount](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ariarowcount)
- [ariaRowIndex](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ariarowindex)
- [ariaRowSpan](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ariarowspan)
- [ariaSelected](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ariaselected)
- [ariaSetSize](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ariasetsize)
- [ariaSort](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ariasort)
- [ariaValueMax](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ariavaluemax)
- [ariaValueMin](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ariavaluemin)
- [ariaValueNow](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ariavaluenow)
- [ariaValueText](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ariavaluetext)
- [assignedSlot](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#assignedslot)
- [attributes](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#attributes)
- [autofocus](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#autofocus)
- [baseURI](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#baseuri)
- [childElementCount](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#childelementcount)
- [childNodes](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#childnodes)
- [children](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#children)
- [classList](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#classlist)
- [className](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#classname)
- [clientHeight](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#clientheight)
- [clientLeft](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#clientleft)
- [clientTop](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#clienttop)
- [clientWidth](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#clientwidth)
- [dataset](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#dataset)
- [firstChild](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#firstchild)
- [firstElementChild](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#firstelementchild)
- [id](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#id)
- [innerHTML](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#innerhtml)
- [isConnected](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#isconnected)
- [lastChild](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#lastchild)
- [lastElementChild](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#lastelementchild)
- [localName](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#localname)
- [namespaceURI](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#namespaceuri)
- [nextElementSibling](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#nextelementsibling)
- [nextSibling](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#nextsibling)
- [nodeName](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#nodename)
- [nodeType](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#nodetype)
- [nodeValue](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#nodevalue)
- [nonce](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#nonce)
- [onabort](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onabort)
- [onanimationcancel](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onanimationcancel)
- [onanimationend](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onanimationend)
- [onanimationiteration](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onanimationiteration)
- [onanimationstart](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onanimationstart)
- [onauxclick](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onauxclick)
- [onblur](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onblur)
- [oncanplay](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#oncanplay)
- [oncanplaythrough](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#oncanplaythrough)
- [onchange](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onchange)
- [onclick](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onclick)
- [onclose](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onclose)
- [oncontextmenu](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#oncontextmenu)
- [oncopy](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#oncopy)
- [oncuechange](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#oncuechange)
- [oncut](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#oncut)
- [ondblclick](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ondblclick)
- [ondrag](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ondrag)
- [ondragend](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ondragend)
- [ondragenter](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ondragenter)
- [ondragleave](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ondragleave)
- [ondragover](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ondragover)
- [ondragstart](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ondragstart)
- [ondrop](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ondrop)
- [ondurationchange](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ondurationchange)
- [onemptied](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onemptied)
- [onended](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onended)
- [onerror](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onerror)
- [onfocus](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onfocus)
- [onformdata](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onformdata)
- [onfullscreenchange](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onfullscreenchange)
- [onfullscreenerror](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onfullscreenerror)
- [ongotpointercapture](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ongotpointercapture)
- [oninput](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#oninput)
- [oninvalid](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#oninvalid)
- [onkeydown](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onkeydown)
- [onkeypress](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onkeypress)
- [onkeyup](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onkeyup)
- [onload](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onload)
- [onloadeddata](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onloadeddata)
- [onloadedmetadata](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onloadedmetadata)
- [onloadstart](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onloadstart)
- [onlostpointercapture](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onlostpointercapture)
- [onmousedown](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onmousedown)
- [onmouseenter](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onmouseenter)
- [onmouseleave](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onmouseleave)
- [onmousemove](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onmousemove)
- [onmouseout](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onmouseout)
- [onmouseover](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onmouseover)
- [onmouseup](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onmouseup)
- [onpaste](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onpaste)
- [onpause](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onpause)
- [onplay](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onplay)
- [onplaying](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onplaying)
- [onpointercancel](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onpointercancel)
- [onpointerdown](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onpointerdown)
- [onpointerenter](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onpointerenter)
- [onpointerleave](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onpointerleave)
- [onpointermove](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onpointermove)
- [onpointerout](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onpointerout)
- [onpointerover](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onpointerover)
- [onpointerup](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onpointerup)
- [onprogress](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onprogress)
- [onratechange](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onratechange)
- [onreset](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onreset)
- [onresize](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onresize)
- [onscroll](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onscroll)
- [onsecuritypolicyviolation](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onsecuritypolicyviolation)
- [onseeked](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onseeked)
- [onseeking](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onseeking)
- [onselect](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onselect)
- [onselectionchange](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onselectionchange)
- [onselectstart](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onselectstart)
- [onslotchange](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onslotchange)
- [onstalled](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onstalled)
- [onsubmit](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onsubmit)
- [onsuspend](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onsuspend)
- [ontimeupdate](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ontimeupdate)
- [ontoggle](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ontoggle)
- [ontouchcancel](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ontouchcancel)
- [ontouchend](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ontouchend)
- [ontouchmove](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ontouchmove)
- [ontouchstart](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ontouchstart)
- [ontransitioncancel](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ontransitioncancel)
- [ontransitionend](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ontransitionend)
- [ontransitionrun](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ontransitionrun)
- [ontransitionstart](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ontransitionstart)
- [onvolumechange](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onvolumechange)
- [onwaiting](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onwaiting)
- [onwebkitanimationend](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onwebkitanimationend)
- [onwebkitanimationiteration](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onwebkitanimationiteration)
- [onwebkitanimationstart](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onwebkitanimationstart)
- [onwebkittransitionend](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onwebkittransitionend)
- [onwheel](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#onwheel)
- [outerHTML](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#outerhtml)
- [ownerDocument](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ownerdocument)
- [ownerSVGElement](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ownersvgelement)
- [parentElement](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#parentelement)
- [parentNode](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#parentnode)
- [part](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#part)
- [pathLength](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#pathlength)
- [points](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#points)
- [prefix](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#prefix)
- [previousElementSibling](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#previouselementsibling)
- [previousSibling](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#previoussibling)
- [requiredExtensions](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#requiredextensions)
- [scrollHeight](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#scrollheight)
- [scrollLeft](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#scrollleft)
- [scrollTop](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#scrolltop)
- [scrollWidth](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#scrollwidth)
- [shadowRoot](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#shadowroot)
- [slot](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#slot)
- [style](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#style)
- [systemLanguage](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#systemlanguage)
- [tabIndex](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#tabindex)
- [tagName](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#tagname)
- [textContent](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#textcontent)
- [transform](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#transform)
- [viewportElement](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#viewportelement)

### Methods

- [addEventListener](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#addeventlistener)
- [after](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#after)
- [animate](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#animate)
- [append](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#append)
- [appendChild](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#appendchild)
- [attachShadow](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#attachshadow)
- [before](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#before)
- [blur](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#blur)
- [cloneNode](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#clonenode)
- [closest](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#closest)
- [compareDocumentPosition](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#comparedocumentposition)
- [contains](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#contains)
- [dispatchEvent](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#dispatchevent)
- [focus](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#focus)
- [getAnimations](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#getanimations)
- [getAttribute](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#getattribute)
- [getAttributeNS](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#getattributens)
- [getAttributeNames](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#getattributenames)
- [getAttributeNode](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#getattributenode)
- [getAttributeNodeNS](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#getattributenodens)
- [getBBox](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#getbbox)
- [getBoundingClientRect](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#getboundingclientrect)
- [getCTM](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#getctm)
- [getClientRects](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#getclientrects)
- [getElementsByClassName](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#getelementsbyclassname)
- [getElementsByTagName](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#getelementsbytagname)
- [getElementsByTagNameNS](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#getelementsbytagnamens)
- [getPointAtLength](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#getpointatlength)
- [getRootNode](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#getrootnode)
- [getScreenCTM](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#getscreenctm)
- [getTotalLength](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#gettotallength)
- [hasAttribute](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#hasattribute)
- [hasAttributeNS](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#hasattributens)
- [hasAttributes](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#hasattributes)
- [hasChildNodes](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#haschildnodes)
- [hasPointerCapture](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#haspointercapture)
- [insertAdjacentElement](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#insertadjacentelement)
- [insertAdjacentHTML](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#insertadjacenthtml)
- [insertAdjacentText](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#insertadjacenttext)
- [insertBefore](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#insertbefore)
- [isDefaultNamespace](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#isdefaultnamespace)
- [isEqualNode](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#isequalnode)
- [isPointInFill](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ispointinfill)
- [isPointInStroke](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#ispointinstroke)
- [isSameNode](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#issamenode)
- [lookupNamespaceURI](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#lookupnamespaceuri)
- [lookupPrefix](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#lookupprefix)
- [matches](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#matches)
- [normalize](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#normalize)
- [prepend](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#prepend)
- [querySelector](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#queryselector)
- [querySelectorAll](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#queryselectorall)
- [releasePointerCapture](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#releasepointercapture)
- [remove](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#remove)
- [removeAttribute](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#removeattribute)
- [removeAttributeNS](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#removeattributens)
- [removeAttributeNode](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#removeattributenode)
- [removeChild](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#removechild)
- [removeEventListener](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#removeeventlistener)
- [replaceChild](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#replacechild)
- [replaceChildren](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#replacechildren)
- [replaceWith](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#replacewith)
- [requestFullscreen](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#requestfullscreen)
- [requestPointerLock](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#requestpointerlock)
- [scroll](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#scroll)
- [scrollBy](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#scrollby)
- [scrollIntoView](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#scrollintoview)
- [scrollTo](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#scrollto)
- [setAttribute](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#setattribute)
- [setAttributeNS](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#setattributens)
- [setAttributeNode](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#setattributenode)
- [setAttributeNodeNS](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#setattributenodens)
- [setPointerCapture](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#setpointercapture)
- [toggleAttribute](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#toggleattribute)
- [webkitMatchesSelector](annotation_annotation_layer_state._internal_.SVGPolygonElement.md#webkitmatchesselector)

## Properties

### ATTRIBUTE\_NODE

• `Readonly` **ATTRIBUTE\_NODE**: `number`

#### Inherited from

SVGGeometryElement.ATTRIBUTE\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10089

___

### CDATA\_SECTION\_NODE

• `Readonly` **CDATA\_SECTION\_NODE**: `number`

node is a CDATASection node.

#### Inherited from

SVGGeometryElement.CDATA\_SECTION\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10091

___

### COMMENT\_NODE

• `Readonly` **COMMENT\_NODE**: `number`

node is a Comment node.

#### Inherited from

SVGGeometryElement.COMMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10093

___

### DOCUMENT\_FRAGMENT\_NODE

• `Readonly` **DOCUMENT\_FRAGMENT\_NODE**: `number`

node is a DocumentFragment node.

#### Inherited from

SVGGeometryElement.DOCUMENT\_FRAGMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10095

___

### DOCUMENT\_NODE

• `Readonly` **DOCUMENT\_NODE**: `number`

node is a document.

#### Inherited from

SVGGeometryElement.DOCUMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10097

___

### DOCUMENT\_POSITION\_CONTAINED\_BY

• `Readonly` **DOCUMENT\_POSITION\_CONTAINED\_BY**: `number`

Set when other is a descendant of node.

#### Inherited from

SVGGeometryElement.DOCUMENT\_POSITION\_CONTAINED\_BY

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10099

___

### DOCUMENT\_POSITION\_CONTAINS

• `Readonly` **DOCUMENT\_POSITION\_CONTAINS**: `number`

Set when other is an ancestor of node.

#### Inherited from

SVGGeometryElement.DOCUMENT\_POSITION\_CONTAINS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10101

___

### DOCUMENT\_POSITION\_DISCONNECTED

• `Readonly` **DOCUMENT\_POSITION\_DISCONNECTED**: `number`

Set when node and other are not in the same tree.

#### Inherited from

SVGGeometryElement.DOCUMENT\_POSITION\_DISCONNECTED

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10103

___

### DOCUMENT\_POSITION\_FOLLOWING

• `Readonly` **DOCUMENT\_POSITION\_FOLLOWING**: `number`

Set when other is following node.

#### Inherited from

SVGGeometryElement.DOCUMENT\_POSITION\_FOLLOWING

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10105

___

### DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC

• `Readonly` **DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC**: `number`

#### Inherited from

SVGGeometryElement.DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10106

___

### DOCUMENT\_POSITION\_PRECEDING

• `Readonly` **DOCUMENT\_POSITION\_PRECEDING**: `number`

Set when other is preceding node.

#### Inherited from

SVGGeometryElement.DOCUMENT\_POSITION\_PRECEDING

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10108

___

### DOCUMENT\_TYPE\_NODE

• `Readonly` **DOCUMENT\_TYPE\_NODE**: `number`

node is a doctype.

#### Inherited from

SVGGeometryElement.DOCUMENT\_TYPE\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10110

___

### ELEMENT\_NODE

• `Readonly` **ELEMENT\_NODE**: `number`

node is an element.

#### Inherited from

SVGGeometryElement.ELEMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10112

___

### ENTITY\_NODE

• `Readonly` **ENTITY\_NODE**: `number`

#### Inherited from

SVGGeometryElement.ENTITY\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10113

___

### ENTITY\_REFERENCE\_NODE

• `Readonly` **ENTITY\_REFERENCE\_NODE**: `number`

#### Inherited from

SVGGeometryElement.ENTITY\_REFERENCE\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10114

___

### NOTATION\_NODE

• `Readonly` **NOTATION\_NODE**: `number`

#### Inherited from

SVGGeometryElement.NOTATION\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10115

___

### PROCESSING\_INSTRUCTION\_NODE

• `Readonly` **PROCESSING\_INSTRUCTION\_NODE**: `number`

node is a ProcessingInstruction node.

#### Inherited from

SVGGeometryElement.PROCESSING\_INSTRUCTION\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10117

___

### TEXT\_NODE

• `Readonly` **TEXT\_NODE**: `number`

node is a Text node.

#### Inherited from

SVGGeometryElement.TEXT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10119

___

### animatedPoints

• `Readonly` **animatedPoints**: `SVGPointList`

#### Inherited from

[SVGAnimatedPoints](annotation_annotation_layer_state._internal_.SVGAnimatedPoints.md).[animatedPoints](annotation_annotation_layer_state._internal_.SVGAnimatedPoints.md#animatedpoints)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11800

___

### ariaAtomic

• **ariaAtomic**: ``null`` \| `string`

#### Inherited from

SVGGeometryElement.ariaAtomic

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1924

___

### ariaAutoComplete

• **ariaAutoComplete**: ``null`` \| `string`

#### Inherited from

SVGGeometryElement.ariaAutoComplete

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1925

___

### ariaBusy

• **ariaBusy**: ``null`` \| `string`

#### Inherited from

SVGGeometryElement.ariaBusy

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1926

___

### ariaChecked

• **ariaChecked**: ``null`` \| `string`

#### Inherited from

SVGGeometryElement.ariaChecked

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1927

___

### ariaColCount

• **ariaColCount**: ``null`` \| `string`

#### Inherited from

SVGGeometryElement.ariaColCount

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1928

___

### ariaColIndex

• **ariaColIndex**: ``null`` \| `string`

#### Inherited from

SVGGeometryElement.ariaColIndex

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1929

___

### ariaColSpan

• **ariaColSpan**: ``null`` \| `string`

#### Inherited from

SVGGeometryElement.ariaColSpan

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1930

___

### ariaCurrent

• **ariaCurrent**: ``null`` \| `string`

#### Inherited from

SVGGeometryElement.ariaCurrent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1931

___

### ariaDisabled

• **ariaDisabled**: ``null`` \| `string`

#### Inherited from

SVGGeometryElement.ariaDisabled

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1932

___

### ariaExpanded

• **ariaExpanded**: ``null`` \| `string`

#### Inherited from

SVGGeometryElement.ariaExpanded

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1933

___

### ariaHasPopup

• **ariaHasPopup**: ``null`` \| `string`

#### Inherited from

SVGGeometryElement.ariaHasPopup

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1934

___

### ariaHidden

• **ariaHidden**: ``null`` \| `string`

#### Inherited from

SVGGeometryElement.ariaHidden

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1935

___

### ariaKeyShortcuts

• **ariaKeyShortcuts**: ``null`` \| `string`

#### Inherited from

SVGGeometryElement.ariaKeyShortcuts

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1936

___

### ariaLabel

• **ariaLabel**: ``null`` \| `string`

#### Inherited from

SVGGeometryElement.ariaLabel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1937

___

### ariaLevel

• **ariaLevel**: ``null`` \| `string`

#### Inherited from

SVGGeometryElement.ariaLevel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1938

___

### ariaLive

• **ariaLive**: ``null`` \| `string`

#### Inherited from

SVGGeometryElement.ariaLive

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1939

___

### ariaModal

• **ariaModal**: ``null`` \| `string`

#### Inherited from

SVGGeometryElement.ariaModal

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1940

___

### ariaMultiLine

• **ariaMultiLine**: ``null`` \| `string`

#### Inherited from

SVGGeometryElement.ariaMultiLine

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1941

___

### ariaMultiSelectable

• **ariaMultiSelectable**: ``null`` \| `string`

#### Inherited from

SVGGeometryElement.ariaMultiSelectable

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1942

___

### ariaOrientation

• **ariaOrientation**: ``null`` \| `string`

#### Inherited from

SVGGeometryElement.ariaOrientation

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1943

___

### ariaPlaceholder

• **ariaPlaceholder**: ``null`` \| `string`

#### Inherited from

SVGGeometryElement.ariaPlaceholder

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1944

___

### ariaPosInSet

• **ariaPosInSet**: ``null`` \| `string`

#### Inherited from

SVGGeometryElement.ariaPosInSet

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1945

___

### ariaPressed

• **ariaPressed**: ``null`` \| `string`

#### Inherited from

SVGGeometryElement.ariaPressed

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1946

___

### ariaReadOnly

• **ariaReadOnly**: ``null`` \| `string`

#### Inherited from

SVGGeometryElement.ariaReadOnly

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1947

___

### ariaRequired

• **ariaRequired**: ``null`` \| `string`

#### Inherited from

SVGGeometryElement.ariaRequired

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1948

___

### ariaRoleDescription

• **ariaRoleDescription**: ``null`` \| `string`

#### Inherited from

SVGGeometryElement.ariaRoleDescription

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1949

___

### ariaRowCount

• **ariaRowCount**: ``null`` \| `string`

#### Inherited from

SVGGeometryElement.ariaRowCount

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1950

___

### ariaRowIndex

• **ariaRowIndex**: ``null`` \| `string`

#### Inherited from

SVGGeometryElement.ariaRowIndex

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1951

___

### ariaRowSpan

• **ariaRowSpan**: ``null`` \| `string`

#### Inherited from

SVGGeometryElement.ariaRowSpan

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1952

___

### ariaSelected

• **ariaSelected**: ``null`` \| `string`

#### Inherited from

SVGGeometryElement.ariaSelected

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1953

___

### ariaSetSize

• **ariaSetSize**: ``null`` \| `string`

#### Inherited from

SVGGeometryElement.ariaSetSize

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1954

___

### ariaSort

• **ariaSort**: ``null`` \| `string`

#### Inherited from

SVGGeometryElement.ariaSort

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1955

___

### ariaValueMax

• **ariaValueMax**: ``null`` \| `string`

#### Inherited from

SVGGeometryElement.ariaValueMax

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1956

___

### ariaValueMin

• **ariaValueMin**: ``null`` \| `string`

#### Inherited from

SVGGeometryElement.ariaValueMin

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1957

___

### ariaValueNow

• **ariaValueNow**: ``null`` \| `string`

#### Inherited from

SVGGeometryElement.ariaValueNow

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1958

___

### ariaValueText

• **ariaValueText**: ``null`` \| `string`

#### Inherited from

SVGGeometryElement.ariaValueText

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1959

___

### assignedSlot

• `Readonly` **assignedSlot**: ``null`` \| [`HTMLSlotElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlslotelement)

#### Inherited from

SVGGeometryElement.assignedSlot

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13595

___

### attributes

• `Readonly` **attributes**: `NamedNodeMap`

#### Inherited from

SVGGeometryElement.attributes

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4852

___

### autofocus

• **autofocus**: `boolean`

#### Inherited from

SVGGeometryElement.autofocus

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7547

___

### baseURI

• `Readonly` **baseURI**: `string`

Returns node's node document's document base URL.

#### Inherited from

SVGGeometryElement.baseURI

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10042

___

### childElementCount

• `Readonly` **childElementCount**: `number`

#### Inherited from

SVGGeometryElement.childElementCount

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10407

___

### childNodes

• `Readonly` **childNodes**: `NodeListOf`<[`ChildNode`](annotation_annotation_layer_state._internal_.ChildNode.md)\>

Returns the children.

#### Inherited from

SVGGeometryElement.childNodes

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10044

___

### children

• `Readonly` **children**: [`HTMLCollection`](../modules/annotation_annotation_layer_state._internal_.md#htmlcollection)

Returns the child elements.

#### Inherited from

SVGGeometryElement.children

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10409

___

### classList

• `Readonly` **classList**: `DOMTokenList`

Allows for manipulation of element's class content attribute as a set of whitespace-separated tokens through a DOMTokenList object.

#### Inherited from

SVGGeometryElement.classList

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4854

___

### className

• `Readonly` **className**: `any`

**`deprecated`**

#### Inherited from

SVGGeometryElement.className

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11963

___

### clientHeight

• `Readonly` **clientHeight**: `number`

#### Inherited from

SVGGeometryElement.clientHeight

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4857

___

### clientLeft

• `Readonly` **clientLeft**: `number`

#### Inherited from

SVGGeometryElement.clientLeft

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4858

___

### clientTop

• `Readonly` **clientTop**: `number`

#### Inherited from

SVGGeometryElement.clientTop

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4859

___

### clientWidth

• `Readonly` **clientWidth**: `number`

#### Inherited from

SVGGeometryElement.clientWidth

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4860

___

### dataset

• `Readonly` **dataset**: [`DOMStringMap`](../modules/annotation_annotation_layer_state._internal_.md#domstringmap)

#### Inherited from

SVGGeometryElement.dataset

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7548

___

### firstChild

• `Readonly` **firstChild**: ``null`` \| [`ChildNode`](annotation_annotation_layer_state._internal_.ChildNode.md)

Returns the first child.

#### Inherited from

SVGGeometryElement.firstChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10046

___

### firstElementChild

• `Readonly` **firstElementChild**: ``null`` \| [`Element`](../modules/annotation_annotation_layer_state._internal_.md#element)

Returns the first child that is an element, and null otherwise.

#### Inherited from

SVGGeometryElement.firstElementChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10411

___

### id

• **id**: `string`

Returns the value of element's id content attribute. Can be set to change it.

#### Inherited from

SVGGeometryElement.id

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4862

___

### innerHTML

• **innerHTML**: `string`

#### Inherited from

SVGGeometryElement.innerHTML

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8903

___

### isConnected

• `Readonly` **isConnected**: `boolean`

Returns true if node is connected and false otherwise.

#### Inherited from

SVGGeometryElement.isConnected

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10048

___

### lastChild

• `Readonly` **lastChild**: ``null`` \| [`ChildNode`](annotation_annotation_layer_state._internal_.ChildNode.md)

Returns the last child.

#### Inherited from

SVGGeometryElement.lastChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10050

___

### lastElementChild

• `Readonly` **lastElementChild**: ``null`` \| [`Element`](../modules/annotation_annotation_layer_state._internal_.md#element)

Returns the last child that is an element, and null otherwise.

#### Inherited from

SVGGeometryElement.lastElementChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10413

___

### localName

• `Readonly` **localName**: `string`

Returns the local name.

#### Inherited from

SVGGeometryElement.localName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4864

___

### namespaceURI

• `Readonly` **namespaceURI**: ``null`` \| `string`

Returns the namespace.

#### Inherited from

SVGGeometryElement.namespaceURI

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4866

___

### nextElementSibling

• `Readonly` **nextElementSibling**: ``null`` \| [`Element`](../modules/annotation_annotation_layer_state._internal_.md#element)

Returns the first following sibling that is an element, and null otherwise.

#### Inherited from

SVGGeometryElement.nextElementSibling

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10209

___

### nextSibling

• `Readonly` **nextSibling**: ``null`` \| [`ChildNode`](annotation_annotation_layer_state._internal_.ChildNode.md)

Returns the next sibling.

#### Inherited from

SVGGeometryElement.nextSibling

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10052

___

### nodeName

• `Readonly` **nodeName**: `string`

Returns a string appropriate for the type of node.

#### Inherited from

SVGGeometryElement.nodeName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10054

___

### nodeType

• `Readonly` **nodeType**: `number`

Returns the type of node.

#### Inherited from

SVGGeometryElement.nodeType

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10056

___

### nodeValue

• **nodeValue**: ``null`` \| `string`

#### Inherited from

SVGGeometryElement.nodeValue

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10057

___

### nonce

• `Optional` **nonce**: `string`

#### Inherited from

SVGGeometryElement.nonce

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7549

___

### onabort

• **onabort**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`UIEvent`](../modules/annotation_annotation_layer_state._internal_.md#uievent)) => `any`

Fires when the user aborts the download.

**`param`** The event.

#### Inherited from

SVGGeometryElement.onabort

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5647

___

### onanimationcancel

• **onanimationcancel**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`AnimationEvent`](../modules/annotation_annotation_layer_state._internal_.md#animationevent)) => `any`

#### Inherited from

SVGGeometryElement.onanimationcancel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5648

___

### onanimationend

• **onanimationend**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`AnimationEvent`](../modules/annotation_annotation_layer_state._internal_.md#animationevent)) => `any`

#### Inherited from

SVGGeometryElement.onanimationend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5649

___

### onanimationiteration

• **onanimationiteration**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`AnimationEvent`](../modules/annotation_annotation_layer_state._internal_.md#animationevent)) => `any`

#### Inherited from

SVGGeometryElement.onanimationiteration

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5650

___

### onanimationstart

• **onanimationstart**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`AnimationEvent`](../modules/annotation_annotation_layer_state._internal_.md#animationevent)) => `any`

#### Inherited from

SVGGeometryElement.onanimationstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5651

___

### onauxclick

• **onauxclick**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent)) => `any`

#### Inherited from

SVGGeometryElement.onauxclick

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5652

___

### onblur

• **onblur**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`FocusEvent`](../modules/annotation_annotation_layer_state._internal_.md#focusevent)) => `any`

Fires when the object loses the input focus.

**`param`** The focus event.

#### Inherited from

SVGGeometryElement.onblur

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5657

___

### oncanplay

• **oncanplay**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

Occurs when playback is possible, but would require further buffering.

**`param`** The event.

#### Inherited from

SVGGeometryElement.oncanplay

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5662

___

### oncanplaythrough

• **oncanplaythrough**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

#### Inherited from

SVGGeometryElement.oncanplaythrough

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5663

___

### onchange

• **onchange**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

Fires when the contents of the object or selection have changed.

**`param`** The event.

#### Inherited from

SVGGeometryElement.onchange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5668

___

### onclick

• **onclick**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent)) => `any`

Fires when the user clicks the left mouse button on the object

**`param`** The mouse event.

#### Inherited from

SVGGeometryElement.onclick

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5673

___

### onclose

• **onclose**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

#### Inherited from

SVGGeometryElement.onclose

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5674

___

### oncontextmenu

• **oncontextmenu**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent)) => `any`

Fires when the user clicks the right mouse button in the client area, opening the context menu.

**`param`** The mouse event.

#### Inherited from

SVGGeometryElement.oncontextmenu

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5679

___

### oncopy

• **oncopy**: ``null`` \| (`this`: [`DocumentAndElementEventHandlers`](annotation_annotation_layer_state._internal_.DocumentAndElementEventHandlers.md), `ev`: [`ClipboardEvent`](../modules/annotation_annotation_layer_state._internal_.md#clipboardevent)) => `any`

#### Inherited from

SVGGeometryElement.oncopy

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4708

___

### oncuechange

• **oncuechange**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

#### Inherited from

SVGGeometryElement.oncuechange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5680

___

### oncut

• **oncut**: ``null`` \| (`this`: [`DocumentAndElementEventHandlers`](annotation_annotation_layer_state._internal_.DocumentAndElementEventHandlers.md), `ev`: [`ClipboardEvent`](../modules/annotation_annotation_layer_state._internal_.md#clipboardevent)) => `any`

#### Inherited from

SVGGeometryElement.oncut

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4709

___

### ondblclick

• **ondblclick**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent)) => `any`

Fires when the user double-clicks the object.

**`param`** The mouse event.

#### Inherited from

SVGGeometryElement.ondblclick

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5685

___

### ondrag

• **ondrag**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`DragEvent`](../modules/annotation_annotation_layer_state._internal_.md#dragevent)) => `any`

Fires on the source object continuously during a drag operation.

**`param`** The event.

#### Inherited from

SVGGeometryElement.ondrag

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5690

___

### ondragend

• **ondragend**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`DragEvent`](../modules/annotation_annotation_layer_state._internal_.md#dragevent)) => `any`

Fires on the source object when the user releases the mouse at the close of a drag operation.

**`param`** The event.

#### Inherited from

SVGGeometryElement.ondragend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5695

___

### ondragenter

• **ondragenter**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`DragEvent`](../modules/annotation_annotation_layer_state._internal_.md#dragevent)) => `any`

Fires on the target element when the user drags the object to a valid drop target.

**`param`** The drag event.

#### Inherited from

SVGGeometryElement.ondragenter

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5700

___

### ondragleave

• **ondragleave**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`DragEvent`](../modules/annotation_annotation_layer_state._internal_.md#dragevent)) => `any`

Fires on the target object when the user moves the mouse out of a valid drop target during a drag operation.

**`param`** The drag event.

#### Inherited from

SVGGeometryElement.ondragleave

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5705

___

### ondragover

• **ondragover**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`DragEvent`](../modules/annotation_annotation_layer_state._internal_.md#dragevent)) => `any`

Fires on the target element continuously while the user drags the object over a valid drop target.

**`param`** The event.

#### Inherited from

SVGGeometryElement.ondragover

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5710

___

### ondragstart

• **ondragstart**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`DragEvent`](../modules/annotation_annotation_layer_state._internal_.md#dragevent)) => `any`

Fires on the source object when the user starts to drag a text selection or selected object.

**`param`** The event.

#### Inherited from

SVGGeometryElement.ondragstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5715

___

### ondrop

• **ondrop**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`DragEvent`](../modules/annotation_annotation_layer_state._internal_.md#dragevent)) => `any`

#### Inherited from

SVGGeometryElement.ondrop

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5716

___

### ondurationchange

• **ondurationchange**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

Occurs when the duration attribute is updated.

**`param`** The event.

#### Inherited from

SVGGeometryElement.ondurationchange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5721

___

### onemptied

• **onemptied**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

Occurs when the media element is reset to its initial state.

**`param`** The event.

#### Inherited from

SVGGeometryElement.onemptied

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5726

___

### onended

• **onended**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

Occurs when the end of playback is reached.

**`param`** The event

#### Inherited from

SVGGeometryElement.onended

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5731

___

### onerror

• **onerror**: [`OnErrorEventHandler`](../modules/annotation_annotation_layer_state._internal_.md#onerroreventhandler)

Fires when an error occurs during object loading.

**`param`** The event.

#### Inherited from

SVGGeometryElement.onerror

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5736

___

### onfocus

• **onfocus**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`FocusEvent`](../modules/annotation_annotation_layer_state._internal_.md#focusevent)) => `any`

Fires when the object receives focus.

**`param`** The event.

#### Inherited from

SVGGeometryElement.onfocus

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5741

___

### onformdata

• **onformdata**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`FormDataEvent`](../modules/annotation_annotation_layer_state._internal_.md#formdataevent)) => `any`

#### Inherited from

SVGGeometryElement.onformdata

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5742

___

### onfullscreenchange

• **onfullscreenchange**: ``null`` \| (`this`: [`Element`](../modules/annotation_annotation_layer_state._internal_.md#element), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

#### Inherited from

SVGGeometryElement.onfullscreenchange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4867

___

### onfullscreenerror

• **onfullscreenerror**: ``null`` \| (`this`: [`Element`](../modules/annotation_annotation_layer_state._internal_.md#element), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

#### Inherited from

SVGGeometryElement.onfullscreenerror

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4868

___

### ongotpointercapture

• **ongotpointercapture**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/annotation_annotation_layer_state._internal_.md#pointerevent)) => `any`

#### Inherited from

SVGGeometryElement.ongotpointercapture

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5743

___

### oninput

• **oninput**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

#### Inherited from

SVGGeometryElement.oninput

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5744

___

### oninvalid

• **oninvalid**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

#### Inherited from

SVGGeometryElement.oninvalid

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5745

___

### onkeydown

• **onkeydown**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`KeyboardEvent`](../modules/annotation_annotation_layer_state._internal_.md#keyboardevent)) => `any`

Fires when the user presses a key.

**`param`** The keyboard event

#### Inherited from

SVGGeometryElement.onkeydown

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5750

___

### onkeypress

• **onkeypress**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`KeyboardEvent`](../modules/annotation_annotation_layer_state._internal_.md#keyboardevent)) => `any`

Fires when the user presses an alphanumeric key.

**`param`** The event.

**`deprecated`**

#### Inherited from

SVGGeometryElement.onkeypress

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5756

___

### onkeyup

• **onkeyup**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`KeyboardEvent`](../modules/annotation_annotation_layer_state._internal_.md#keyboardevent)) => `any`

Fires when the user releases a key.

**`param`** The keyboard event

#### Inherited from

SVGGeometryElement.onkeyup

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5761

___

### onload

• **onload**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

Fires immediately after the browser loads the object.

**`param`** The event.

#### Inherited from

SVGGeometryElement.onload

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5766

___

### onloadeddata

• **onloadeddata**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

Occurs when media data is loaded at the current playback position.

**`param`** The event.

#### Inherited from

SVGGeometryElement.onloadeddata

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5771

___

### onloadedmetadata

• **onloadedmetadata**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

Occurs when the duration and dimensions of the media have been determined.

**`param`** The event.

#### Inherited from

SVGGeometryElement.onloadedmetadata

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5776

___

### onloadstart

• **onloadstart**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

Occurs when Internet Explorer begins looking for media data.

**`param`** The event.

#### Inherited from

SVGGeometryElement.onloadstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5781

___

### onlostpointercapture

• **onlostpointercapture**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/annotation_annotation_layer_state._internal_.md#pointerevent)) => `any`

#### Inherited from

SVGGeometryElement.onlostpointercapture

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5782

___

### onmousedown

• **onmousedown**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent)) => `any`

Fires when the user clicks the object with either mouse button.

**`param`** The mouse event.

#### Inherited from

SVGGeometryElement.onmousedown

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5787

___

### onmouseenter

• **onmouseenter**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent)) => `any`

#### Inherited from

SVGGeometryElement.onmouseenter

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5788

___

### onmouseleave

• **onmouseleave**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent)) => `any`

#### Inherited from

SVGGeometryElement.onmouseleave

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5789

___

### onmousemove

• **onmousemove**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent)) => `any`

Fires when the user moves the mouse over the object.

**`param`** The mouse event.

#### Inherited from

SVGGeometryElement.onmousemove

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5794

___

### onmouseout

• **onmouseout**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent)) => `any`

Fires when the user moves the mouse pointer outside the boundaries of the object.

**`param`** The mouse event.

#### Inherited from

SVGGeometryElement.onmouseout

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5799

___

### onmouseover

• **onmouseover**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent)) => `any`

Fires when the user moves the mouse pointer into the object.

**`param`** The mouse event.

#### Inherited from

SVGGeometryElement.onmouseover

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5804

___

### onmouseup

• **onmouseup**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent)) => `any`

Fires when the user releases a mouse button while the mouse is over the object.

**`param`** The mouse event.

#### Inherited from

SVGGeometryElement.onmouseup

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5809

___

### onpaste

• **onpaste**: ``null`` \| (`this`: [`DocumentAndElementEventHandlers`](annotation_annotation_layer_state._internal_.DocumentAndElementEventHandlers.md), `ev`: [`ClipboardEvent`](../modules/annotation_annotation_layer_state._internal_.md#clipboardevent)) => `any`

#### Inherited from

SVGGeometryElement.onpaste

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4710

___

### onpause

• **onpause**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

Occurs when playback is paused.

**`param`** The event.

#### Inherited from

SVGGeometryElement.onpause

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5814

___

### onplay

• **onplay**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

Occurs when the play method is requested.

**`param`** The event.

#### Inherited from

SVGGeometryElement.onplay

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5819

___

### onplaying

• **onplaying**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

Occurs when the audio or video has started playing.

**`param`** The event.

#### Inherited from

SVGGeometryElement.onplaying

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5824

___

### onpointercancel

• **onpointercancel**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/annotation_annotation_layer_state._internal_.md#pointerevent)) => `any`

#### Inherited from

SVGGeometryElement.onpointercancel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5825

___

### onpointerdown

• **onpointerdown**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/annotation_annotation_layer_state._internal_.md#pointerevent)) => `any`

#### Inherited from

SVGGeometryElement.onpointerdown

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5826

___

### onpointerenter

• **onpointerenter**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/annotation_annotation_layer_state._internal_.md#pointerevent)) => `any`

#### Inherited from

SVGGeometryElement.onpointerenter

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5827

___

### onpointerleave

• **onpointerleave**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/annotation_annotation_layer_state._internal_.md#pointerevent)) => `any`

#### Inherited from

SVGGeometryElement.onpointerleave

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5828

___

### onpointermove

• **onpointermove**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/annotation_annotation_layer_state._internal_.md#pointerevent)) => `any`

#### Inherited from

SVGGeometryElement.onpointermove

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5829

___

### onpointerout

• **onpointerout**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/annotation_annotation_layer_state._internal_.md#pointerevent)) => `any`

#### Inherited from

SVGGeometryElement.onpointerout

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5830

___

### onpointerover

• **onpointerover**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/annotation_annotation_layer_state._internal_.md#pointerevent)) => `any`

#### Inherited from

SVGGeometryElement.onpointerover

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5831

___

### onpointerup

• **onpointerup**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/annotation_annotation_layer_state._internal_.md#pointerevent)) => `any`

#### Inherited from

SVGGeometryElement.onpointerup

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5832

___

### onprogress

• **onprogress**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`ProgressEvent`](../modules/annotation_annotation_layer_state._internal_.md#progressevent)<[`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget)\>) => `any`

Occurs to indicate progress while downloading media data.

**`param`** The event.

#### Inherited from

SVGGeometryElement.onprogress

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5837

___

### onratechange

• **onratechange**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

Occurs when the playback rate is increased or decreased.

**`param`** The event.

#### Inherited from

SVGGeometryElement.onratechange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5842

___

### onreset

• **onreset**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

Fires when the user resets a form.

**`param`** The event.

#### Inherited from

SVGGeometryElement.onreset

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5847

___

### onresize

• **onresize**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`UIEvent`](../modules/annotation_annotation_layer_state._internal_.md#uievent)) => `any`

#### Inherited from

SVGGeometryElement.onresize

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5848

___

### onscroll

• **onscroll**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

Fires when the user repositions the scroll box in the scroll bar on the object.

**`param`** The event.

#### Inherited from

SVGGeometryElement.onscroll

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5853

___

### onsecuritypolicyviolation

• **onsecuritypolicyviolation**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`SecurityPolicyViolationEvent`](../modules/annotation_annotation_layer_state._internal_.md#securitypolicyviolationevent)) => `any`

#### Inherited from

SVGGeometryElement.onsecuritypolicyviolation

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5854

___

### onseeked

• **onseeked**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

Occurs when the seek operation ends.

**`param`** The event.

#### Inherited from

SVGGeometryElement.onseeked

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5859

___

### onseeking

• **onseeking**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

Occurs when the current playback position is moved.

**`param`** The event.

#### Inherited from

SVGGeometryElement.onseeking

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5864

___

### onselect

• **onselect**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

Fires when the current selection changes.

**`param`** The event.

#### Inherited from

SVGGeometryElement.onselect

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5869

___

### onselectionchange

• **onselectionchange**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

#### Inherited from

SVGGeometryElement.onselectionchange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5870

___

### onselectstart

• **onselectstart**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

#### Inherited from

SVGGeometryElement.onselectstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5871

___

### onslotchange

• **onslotchange**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

#### Inherited from

SVGGeometryElement.onslotchange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5872

___

### onstalled

• **onstalled**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

Occurs when the download has stopped.

**`param`** The event.

#### Inherited from

SVGGeometryElement.onstalled

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5877

___

### onsubmit

• **onsubmit**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`SubmitEvent`](../modules/annotation_annotation_layer_state._internal_.md#submitevent)) => `any`

#### Inherited from

SVGGeometryElement.onsubmit

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5878

___

### onsuspend

• **onsuspend**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

Occurs if the load operation has been intentionally halted.

**`param`** The event.

#### Inherited from

SVGGeometryElement.onsuspend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5883

___

### ontimeupdate

• **ontimeupdate**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

Occurs to indicate the current playback position.

**`param`** The event.

#### Inherited from

SVGGeometryElement.ontimeupdate

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5888

___

### ontoggle

• **ontoggle**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

#### Inherited from

SVGGeometryElement.ontoggle

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5889

___

### ontouchcancel

• `Optional` **ontouchcancel**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`TouchEvent`](../modules/annotation_annotation_layer_state._internal_.md#touchevent)) => `any`

#### Inherited from

SVGGeometryElement.ontouchcancel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5890

___

### ontouchend

• `Optional` **ontouchend**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`TouchEvent`](../modules/annotation_annotation_layer_state._internal_.md#touchevent)) => `any`

#### Inherited from

SVGGeometryElement.ontouchend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5891

___

### ontouchmove

• `Optional` **ontouchmove**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`TouchEvent`](../modules/annotation_annotation_layer_state._internal_.md#touchevent)) => `any`

#### Inherited from

SVGGeometryElement.ontouchmove

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5892

___

### ontouchstart

• `Optional` **ontouchstart**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`TouchEvent`](../modules/annotation_annotation_layer_state._internal_.md#touchevent)) => `any`

#### Inherited from

SVGGeometryElement.ontouchstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5893

___

### ontransitioncancel

• **ontransitioncancel**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`TransitionEvent`](../modules/annotation_annotation_layer_state._internal_.md#transitionevent)) => `any`

#### Inherited from

SVGGeometryElement.ontransitioncancel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5894

___

### ontransitionend

• **ontransitionend**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`TransitionEvent`](../modules/annotation_annotation_layer_state._internal_.md#transitionevent)) => `any`

#### Inherited from

SVGGeometryElement.ontransitionend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5895

___

### ontransitionrun

• **ontransitionrun**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`TransitionEvent`](../modules/annotation_annotation_layer_state._internal_.md#transitionevent)) => `any`

#### Inherited from

SVGGeometryElement.ontransitionrun

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5896

___

### ontransitionstart

• **ontransitionstart**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`TransitionEvent`](../modules/annotation_annotation_layer_state._internal_.md#transitionevent)) => `any`

#### Inherited from

SVGGeometryElement.ontransitionstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5897

___

### onvolumechange

• **onvolumechange**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

Occurs when the volume is changed, or playback is muted or unmuted.

**`param`** The event.

#### Inherited from

SVGGeometryElement.onvolumechange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5902

___

### onwaiting

• **onwaiting**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

Occurs when playback stops because the next frame of a video resource is not available.

**`param`** The event.

#### Inherited from

SVGGeometryElement.onwaiting

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5907

___

### onwebkitanimationend

• **onwebkitanimationend**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

**`deprecated`** This is a legacy alias of `onanimationend`.

#### Inherited from

SVGGeometryElement.onwebkitanimationend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5909

___

### onwebkitanimationiteration

• **onwebkitanimationiteration**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

**`deprecated`** This is a legacy alias of `onanimationiteration`.

#### Inherited from

SVGGeometryElement.onwebkitanimationiteration

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5911

___

### onwebkitanimationstart

• **onwebkitanimationstart**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

**`deprecated`** This is a legacy alias of `onanimationstart`.

#### Inherited from

SVGGeometryElement.onwebkitanimationstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5913

___

### onwebkittransitionend

• **onwebkittransitionend**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)) => `any`

**`deprecated`** This is a legacy alias of `ontransitionend`.

#### Inherited from

SVGGeometryElement.onwebkittransitionend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5915

___

### onwheel

• **onwheel**: ``null`` \| (`this`: [`GlobalEventHandlers`](annotation_annotation_layer_state._internal_.GlobalEventHandlers.md), `ev`: [`WheelEvent`](../modules/annotation_annotation_layer_state._internal_.md#wheelevent)) => `any`

#### Inherited from

SVGGeometryElement.onwheel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5916

___

### outerHTML

• **outerHTML**: `string`

#### Inherited from

SVGGeometryElement.outerHTML

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4869

___

### ownerDocument

• `Readonly` **ownerDocument**: [`Document`](../modules/annotation_annotation_layer_state._internal_.md#document)

#### Inherited from

SVGGeometryElement.ownerDocument

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4870

___

### ownerSVGElement

• `Readonly` **ownerSVGElement**: ``null`` \| [`SVGSVGElement`](../modules/annotation_annotation_layer_state._internal_.md#svgsvgelement)

#### Inherited from

SVGGeometryElement.ownerSVGElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11964

___

### parentElement

• `Readonly` **parentElement**: ``null`` \| [`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)

Returns the parent element.

#### Inherited from

SVGGeometryElement.parentElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10061

___

### parentNode

• `Readonly` **parentNode**: ``null`` \| [`ParentNode`](annotation_annotation_layer_state._internal_.ParentNode.md)

Returns the parent.

#### Inherited from

SVGGeometryElement.parentNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10063

___

### part

• `Readonly` **part**: `DOMTokenList`

#### Inherited from

SVGGeometryElement.part

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4871

___

### pathLength

• `Readonly` **pathLength**: [`SVGAnimatedNumber`](../modules/annotation_annotation_layer_state._internal_.md#svganimatednumber)

#### Inherited from

SVGGeometryElement.pathLength

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12556

___

### points

• `Readonly` **points**: `SVGPointList`

#### Inherited from

[SVGAnimatedPoints](annotation_annotation_layer_state._internal_.SVGAnimatedPoints.md).[points](annotation_annotation_layer_state._internal_.SVGAnimatedPoints.md#points)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11801

___

### prefix

• `Readonly` **prefix**: ``null`` \| `string`

Returns the namespace prefix.

#### Inherited from

SVGGeometryElement.prefix

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4873

___

### previousElementSibling

• `Readonly` **previousElementSibling**: ``null`` \| [`Element`](../modules/annotation_annotation_layer_state._internal_.md#element)

Returns the first preceding sibling that is an element, and null otherwise.

#### Inherited from

SVGGeometryElement.previousElementSibling

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10211

___

### previousSibling

• `Readonly` **previousSibling**: ``null`` \| [`ChildNode`](annotation_annotation_layer_state._internal_.ChildNode.md)

Returns the previous sibling.

#### Inherited from

SVGGeometryElement.previousSibling

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10065

___

### requiredExtensions

• `Readonly` **requiredExtensions**: `SVGStringList`

#### Inherited from

SVGGeometryElement.requiredExtensions

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13146

___

### scrollHeight

• `Readonly` **scrollHeight**: `number`

#### Inherited from

SVGGeometryElement.scrollHeight

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4874

___

### scrollLeft

• **scrollLeft**: `number`

#### Inherited from

SVGGeometryElement.scrollLeft

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4875

___

### scrollTop

• **scrollTop**: `number`

#### Inherited from

SVGGeometryElement.scrollTop

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4876

___

### scrollWidth

• `Readonly` **scrollWidth**: `number`

#### Inherited from

SVGGeometryElement.scrollWidth

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4877

___

### shadowRoot

• `Readonly` **shadowRoot**: ``null`` \| [`ShadowRoot`](../modules/annotation_annotation_layer_state._internal_.md#shadowroot)

Returns element's shadow root, if any, and if shadow root's mode is "open", and null otherwise.

#### Inherited from

SVGGeometryElement.shadowRoot

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4879

___

### slot

• **slot**: `string`

Returns the value of element's slot content attribute. Can be set to change it.

#### Inherited from

SVGGeometryElement.slot

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4881

___

### style

• `Readonly` **style**: `CSSStyleDeclaration`

#### Inherited from

SVGGeometryElement.style

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4967

___

### systemLanguage

• `Readonly` **systemLanguage**: `SVGStringList`

#### Inherited from

SVGGeometryElement.systemLanguage

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13147

___

### tabIndex

• **tabIndex**: `number`

#### Inherited from

SVGGeometryElement.tabIndex

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7550

___

### tagName

• `Readonly` **tagName**: `string`

Returns the HTML-uppercased qualified name.

#### Inherited from

SVGGeometryElement.tagName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4883

___

### textContent

• **textContent**: ``null`` \| `string`

#### Inherited from

SVGGeometryElement.textContent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10066

___

### transform

• `Readonly` **transform**: [`SVGAnimatedTransformList`](../modules/annotation_annotation_layer_state._internal_.md#svganimatedtransformlist)

#### Inherited from

SVGGeometryElement.transform

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12598

___

### viewportElement

• `Readonly` **viewportElement**: ``null`` \| [`SVGElement`](../modules/annotation_annotation_layer_state._internal_.md#svgelement)

#### Inherited from

SVGGeometryElement.viewportElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11965

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`SVGElementEventMap`](annotation_annotation_layer_state._internal_.SVGElementEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`SVGPolygonElement`](../modules/annotation_annotation_layer_state._internal_.md#svgpolygonelement), `ev`: [`SVGElementEventMap`](annotation_annotation_layer_state._internal_.SVGElementEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](annotation_annotation_layer_state._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

SVGGeometryElement.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12880

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

SVGGeometryElement.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12881

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

SVGGeometryElement.after

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3574

___

### animate

▸ **animate**(`keyframes`, `options?`): [`Animation`](../modules/annotation_annotation_layer_state._internal_.md#animation)

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyframes` | ``null`` \| [`PropertyIndexedKeyframes`](annotation_annotation_layer_state._internal_.PropertyIndexedKeyframes.md) \| [`Keyframe`](annotation_annotation_layer_state._internal_.Keyframe.md)[] |
| `options?` | `number` \| [`KeyframeAnimationOptions`](annotation_annotation_layer_state._internal_.KeyframeAnimationOptions.md) |

#### Returns

[`Animation`](../modules/annotation_annotation_layer_state._internal_.md#animation)

#### Inherited from

SVGGeometryElement.animate

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
| `...nodes` | (`string` \| [`Node`](../modules/annotation_annotation_layer_state._internal_.md#node))[] |

#### Returns

`void`

#### Inherited from

SVGGeometryElement.append

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

SVGGeometryElement.appendChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10067

___

### attachShadow

▸ **attachShadow**(`init`): [`ShadowRoot`](../modules/annotation_annotation_layer_state._internal_.md#shadowroot)

Creates a shadow root for element and returns it.

#### Parameters

| Name | Type |
| :------ | :------ |
| `init` | [`ShadowRootInit`](annotation_annotation_layer_state._internal_.ShadowRootInit.md) |

#### Returns

[`ShadowRoot`](../modules/annotation_annotation_layer_state._internal_.md#shadowroot)

#### Inherited from

SVGGeometryElement.attachShadow

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
| `...nodes` | (`string` \| [`Node`](../modules/annotation_annotation_layer_state._internal_.md#node))[] |

#### Returns

`void`

#### Inherited from

SVGGeometryElement.before

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3580

___

### blur

▸ **blur**(): `void`

#### Returns

`void`

#### Inherited from

SVGGeometryElement.blur

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7551

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

SVGGeometryElement.cloneNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10069

___

### closest

▸ **closest**<`K`\>(`selector`): ``null`` \| [`HTMLElementTagNameMap`](annotation_annotation_layer_state._internal_.HTMLElementTagNameMap.md)[`K`]

Returns the first (starting at element) inclusive ancestor that matches selectors, and null otherwise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`HTMLElementTagNameMap`](annotation_annotation_layer_state._internal_.HTMLElementTagNameMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `K` |

#### Returns

``null`` \| [`HTMLElementTagNameMap`](annotation_annotation_layer_state._internal_.HTMLElementTagNameMap.md)[`K`]

#### Inherited from

SVGGeometryElement.closest

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4887

▸ **closest**<`K`\>(`selector`): ``null`` \| [`SVGElementTagNameMap`](annotation_annotation_layer_state._internal_.SVGElementTagNameMap.md)[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`SVGElementTagNameMap`](annotation_annotation_layer_state._internal_.SVGElementTagNameMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `K` |

#### Returns

``null`` \| [`SVGElementTagNameMap`](annotation_annotation_layer_state._internal_.SVGElementTagNameMap.md)[`K`]

#### Inherited from

SVGGeometryElement.closest

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4888

▸ **closest**<`E`\>(`selectors`): ``null`` \| `E`

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

SVGGeometryElement.closest

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4889

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

SVGGeometryElement.compareDocumentPosition

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

SVGGeometryElement.contains

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

SVGGeometryElement.dispatchEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5138

___

### focus

▸ **focus**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`FocusOptions`](annotation_annotation_layer_state._internal_.FocusOptions.md) |

#### Returns

`void`

#### Inherited from

SVGGeometryElement.focus

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7552

___

### getAnimations

▸ **getAnimations**(`options?`): [`Animation`](../modules/annotation_annotation_layer_state._internal_.md#animation)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`GetAnimationsOptions`](annotation_annotation_layer_state._internal_.GetAnimationsOptions.md) |

#### Returns

[`Animation`](../modules/annotation_annotation_layer_state._internal_.md#animation)[]

#### Inherited from

SVGGeometryElement.getAnimations

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

SVGGeometryElement.getAttribute

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

SVGGeometryElement.getAttributeNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4893

___

### getAttributeNames

▸ **getAttributeNames**(): `string`[]

Returns the qualified names of all element's attributes. Can contain duplicates.

#### Returns

`string`[]

#### Inherited from

SVGGeometryElement.getAttributeNames

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4895

___

### getAttributeNode

▸ **getAttributeNode**(`qualifiedName`): ``null`` \| [`Attr`](../modules/annotation_annotation_layer_state._internal_.md#attr)

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |

#### Returns

``null`` \| [`Attr`](../modules/annotation_annotation_layer_state._internal_.md#attr)

#### Inherited from

SVGGeometryElement.getAttributeNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4896

___

### getAttributeNodeNS

▸ **getAttributeNodeNS**(`namespace`, `localName`): ``null`` \| [`Attr`](../modules/annotation_annotation_layer_state._internal_.md#attr)

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |
| `localName` | `string` |

#### Returns

``null`` \| [`Attr`](../modules/annotation_annotation_layer_state._internal_.md#attr)

#### Inherited from

SVGGeometryElement.getAttributeNodeNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4897

___

### getBBox

▸ **getBBox**(`options?`): [`DOMRect`](../modules/annotation_annotation_layer_state._internal_.md#domrect)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`SVGBoundingBoxOptions`](annotation_annotation_layer_state._internal_.SVGBoundingBoxOptions.md) |

#### Returns

[`DOMRect`](../modules/annotation_annotation_layer_state._internal_.md#domrect)

#### Inherited from

SVGGeometryElement.getBBox

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12599

___

### getBoundingClientRect

▸ **getBoundingClientRect**(): [`DOMRect`](../modules/annotation_annotation_layer_state._internal_.md#domrect)

#### Returns

[`DOMRect`](../modules/annotation_annotation_layer_state._internal_.md#domrect)

#### Inherited from

SVGGeometryElement.getBoundingClientRect

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4898

___

### getCTM

▸ **getCTM**(): ``null`` \| [`DOMMatrix`](../modules/annotation_annotation_layer_state._internal_.md#dommatrix)

#### Returns

``null`` \| [`DOMMatrix`](../modules/annotation_annotation_layer_state._internal_.md#dommatrix)

#### Inherited from

SVGGeometryElement.getCTM

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12600

___

### getClientRects

▸ **getClientRects**(): `DOMRectList`

#### Returns

`DOMRectList`

#### Inherited from

SVGGeometryElement.getClientRects

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4899

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

#### Inherited from

SVGGeometryElement.getElementsByClassName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4901

___

### getElementsByTagName

▸ **getElementsByTagName**<`K`\>(`qualifiedName`): `HTMLCollectionOf`<[`HTMLElementTagNameMap`](annotation_annotation_layer_state._internal_.HTMLElementTagNameMap.md)[`K`]\>

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

#### Inherited from

SVGGeometryElement.getElementsByTagName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4902

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

#### Inherited from

SVGGeometryElement.getElementsByTagName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4903

▸ **getElementsByTagName**(`qualifiedName`): `HTMLCollectionOf`<[`Element`](../modules/annotation_annotation_layer_state._internal_.md#element)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |

#### Returns

`HTMLCollectionOf`<[`Element`](../modules/annotation_annotation_layer_state._internal_.md#element)\>

#### Inherited from

SVGGeometryElement.getElementsByTagName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4904

___

### getElementsByTagNameNS

▸ **getElementsByTagNameNS**(`namespaceURI`, `localName`): `HTMLCollectionOf`<[`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespaceURI` | ``"http://www.w3.org/1999/xhtml"`` |
| `localName` | `string` |

#### Returns

`HTMLCollectionOf`<[`HTMLElement`](../modules/annotation_annotation_layer_state._internal_.md#htmlelement)\>

#### Inherited from

SVGGeometryElement.getElementsByTagNameNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4905

▸ **getElementsByTagNameNS**(`namespaceURI`, `localName`): `HTMLCollectionOf`<[`SVGElement`](../modules/annotation_annotation_layer_state._internal_.md#svgelement)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespaceURI` | ``"http://www.w3.org/2000/svg"`` |
| `localName` | `string` |

#### Returns

`HTMLCollectionOf`<[`SVGElement`](../modules/annotation_annotation_layer_state._internal_.md#svgelement)\>

#### Inherited from

SVGGeometryElement.getElementsByTagNameNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4906

▸ **getElementsByTagNameNS**(`namespace`, `localName`): `HTMLCollectionOf`<[`Element`](../modules/annotation_annotation_layer_state._internal_.md#element)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |
| `localName` | `string` |

#### Returns

`HTMLCollectionOf`<[`Element`](../modules/annotation_annotation_layer_state._internal_.md#element)\>

#### Inherited from

SVGGeometryElement.getElementsByTagNameNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4907

___

### getPointAtLength

▸ **getPointAtLength**(`distance`): [`DOMPoint`](../modules/annotation_annotation_layer_state._internal_.md#dompoint)

#### Parameters

| Name | Type |
| :------ | :------ |
| `distance` | `number` |

#### Returns

[`DOMPoint`](../modules/annotation_annotation_layer_state._internal_.md#dompoint)

#### Inherited from

SVGGeometryElement.getPointAtLength

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12557

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

SVGGeometryElement.getRootNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10075

___

### getScreenCTM

▸ **getScreenCTM**(): ``null`` \| [`DOMMatrix`](../modules/annotation_annotation_layer_state._internal_.md#dommatrix)

#### Returns

``null`` \| [`DOMMatrix`](../modules/annotation_annotation_layer_state._internal_.md#dommatrix)

#### Inherited from

SVGGeometryElement.getScreenCTM

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12601

___

### getTotalLength

▸ **getTotalLength**(): `number`

#### Returns

`number`

#### Inherited from

SVGGeometryElement.getTotalLength

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12558

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

SVGGeometryElement.hasAttribute

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

SVGGeometryElement.hasAttributeNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4911

___

### hasAttributes

▸ **hasAttributes**(): `boolean`

Returns true if element has attributes, and false otherwise.

#### Returns

`boolean`

#### Inherited from

SVGGeometryElement.hasAttributes

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4913

___

### hasChildNodes

▸ **hasChildNodes**(): `boolean`

Returns whether node has children.

#### Returns

`boolean`

#### Inherited from

SVGGeometryElement.hasChildNodes

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

SVGGeometryElement.hasPointerCapture

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4914

___

### insertAdjacentElement

▸ **insertAdjacentElement**(`where`, `element`): ``null`` \| [`Element`](../modules/annotation_annotation_layer_state._internal_.md#element)

#### Parameters

| Name | Type |
| :------ | :------ |
| `where` | [`InsertPosition`](../modules/annotation_annotation_layer_state._internal_.md#insertposition) |
| `element` | [`Element`](../modules/annotation_annotation_layer_state._internal_.md#element) |

#### Returns

``null`` \| [`Element`](../modules/annotation_annotation_layer_state._internal_.md#element)

#### Inherited from

SVGGeometryElement.insertAdjacentElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4915

___

### insertAdjacentHTML

▸ **insertAdjacentHTML**(`position`, `text`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | [`InsertPosition`](../modules/annotation_annotation_layer_state._internal_.md#insertposition) |
| `text` | `string` |

#### Returns

`void`

#### Inherited from

SVGGeometryElement.insertAdjacentHTML

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4916

___

### insertAdjacentText

▸ **insertAdjacentText**(`where`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `where` | [`InsertPosition`](../modules/annotation_annotation_layer_state._internal_.md#insertposition) |
| `data` | `string` |

#### Returns

`void`

#### Inherited from

SVGGeometryElement.insertAdjacentText

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4917

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

SVGGeometryElement.insertBefore

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

SVGGeometryElement.isDefaultNamespace

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

SVGGeometryElement.isEqualNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10081

___

### isPointInFill

▸ **isPointInFill**(`point?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point?` | [`DOMPointInit`](annotation_annotation_layer_state._internal_.DOMPointInit.md) |

#### Returns

`boolean`

#### Inherited from

SVGGeometryElement.isPointInFill

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12559

___

### isPointInStroke

▸ **isPointInStroke**(`point?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point?` | [`DOMPointInit`](annotation_annotation_layer_state._internal_.DOMPointInit.md) |

#### Returns

`boolean`

#### Inherited from

SVGGeometryElement.isPointInStroke

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12560

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

SVGGeometryElement.isSameNode

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

SVGGeometryElement.lookupNamespaceURI

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

SVGGeometryElement.lookupPrefix

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

SVGGeometryElement.matches

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4919

___

### normalize

▸ **normalize**(): `void`

Removes empty exclusive Text nodes and concatenates the data of remaining contiguous exclusive Text nodes into the first of their nodes.

#### Returns

`void`

#### Inherited from

SVGGeometryElement.normalize

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

SVGGeometryElement.prepend

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

SVGGeometryElement.querySelector

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

SVGGeometryElement.querySelector

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

SVGGeometryElement.querySelector

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

SVGGeometryElement.querySelectorAll

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

SVGGeometryElement.querySelectorAll

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

SVGGeometryElement.querySelectorAll

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

SVGGeometryElement.releasePointerCapture

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4920

___

### remove

▸ **remove**(): `void`

Removes node.

#### Returns

`void`

#### Inherited from

SVGGeometryElement.remove

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

SVGGeometryElement.removeAttribute

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

SVGGeometryElement.removeAttributeNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4924

___

### removeAttributeNode

▸ **removeAttributeNode**(`attr`): [`Attr`](../modules/annotation_annotation_layer_state._internal_.md#attr)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | [`Attr`](../modules/annotation_annotation_layer_state._internal_.md#attr) |

#### Returns

[`Attr`](../modules/annotation_annotation_layer_state._internal_.md#attr)

#### Inherited from

SVGGeometryElement.removeAttributeNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4925

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

SVGGeometryElement.removeChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10087

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`SVGElementEventMap`](annotation_annotation_layer_state._internal_.SVGElementEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`SVGPolygonElement`](../modules/annotation_annotation_layer_state._internal_.md#svgpolygonelement), `ev`: [`SVGElementEventMap`](annotation_annotation_layer_state._internal_.SVGElementEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](annotation_annotation_layer_state._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

SVGGeometryElement.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12882

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

SVGGeometryElement.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12883

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

SVGGeometryElement.replaceChild

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

SVGGeometryElement.replaceChildren

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
| `...nodes` | (`string` \| [`Node`](../modules/annotation_annotation_layer_state._internal_.md#node))[] |

#### Returns

`void`

#### Inherited from

SVGGeometryElement.replaceWith

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
| `options?` | [`FullscreenOptions`](annotation_annotation_layer_state._internal_.FullscreenOptions.md) |

#### Returns

`Promise`<`void`\>

#### Inherited from

SVGGeometryElement.requestFullscreen

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4931

___

### requestPointerLock

▸ **requestPointerLock**(): `void`

#### Returns

`void`

#### Inherited from

SVGGeometryElement.requestPointerLock

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4932

___

### scroll

▸ **scroll**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ScrollToOptions`](annotation_annotation_layer_state._internal_.ScrollToOptions.md) |

#### Returns

`void`

#### Inherited from

SVGGeometryElement.scroll

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

SVGGeometryElement.scroll

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4934

___

### scrollBy

▸ **scrollBy**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ScrollToOptions`](annotation_annotation_layer_state._internal_.ScrollToOptions.md) |

#### Returns

`void`

#### Inherited from

SVGGeometryElement.scrollBy

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

SVGGeometryElement.scrollBy

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4936

___

### scrollIntoView

▸ **scrollIntoView**(`arg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg?` | `boolean` \| [`ScrollIntoViewOptions`](annotation_annotation_layer_state._internal_.ScrollIntoViewOptions.md) |

#### Returns

`void`

#### Inherited from

SVGGeometryElement.scrollIntoView

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4937

___

### scrollTo

▸ **scrollTo**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ScrollToOptions`](annotation_annotation_layer_state._internal_.ScrollToOptions.md) |

#### Returns

`void`

#### Inherited from

SVGGeometryElement.scrollTo

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

SVGGeometryElement.scrollTo

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

SVGGeometryElement.setAttribute

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

SVGGeometryElement.setAttributeNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4943

___

### setAttributeNode

▸ **setAttributeNode**(`attr`): ``null`` \| [`Attr`](../modules/annotation_annotation_layer_state._internal_.md#attr)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | [`Attr`](../modules/annotation_annotation_layer_state._internal_.md#attr) |

#### Returns

``null`` \| [`Attr`](../modules/annotation_annotation_layer_state._internal_.md#attr)

#### Inherited from

SVGGeometryElement.setAttributeNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4944

___

### setAttributeNodeNS

▸ **setAttributeNodeNS**(`attr`): ``null`` \| [`Attr`](../modules/annotation_annotation_layer_state._internal_.md#attr)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | [`Attr`](../modules/annotation_annotation_layer_state._internal_.md#attr) |

#### Returns

``null`` \| [`Attr`](../modules/annotation_annotation_layer_state._internal_.md#attr)

#### Inherited from

SVGGeometryElement.setAttributeNodeNS

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

SVGGeometryElement.setPointerCapture

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

SVGGeometryElement.toggleAttribute

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

SVGGeometryElement.webkitMatchesSelector

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4954
