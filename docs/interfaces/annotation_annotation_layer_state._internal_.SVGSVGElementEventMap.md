[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / SVGSVGElementEventMap

# Interface: SVGSVGElementEventMap

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).SVGSVGElementEventMap

## Hierarchy

- [`SVGElementEventMap`](annotation_annotation_layer_state._internal_.SVGElementEventMap.md)

- [`WindowEventHandlersEventMap`](annotation_annotation_layer_state._internal_.WindowEventHandlersEventMap.md)

  ↳ **`SVGSVGElementEventMap`**

## Table of contents

### Properties

- [abort](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#abort)
- [afterprint](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#afterprint)
- [animationcancel](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#animationcancel)
- [animationend](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#animationend)
- [animationiteration](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#animationiteration)
- [animationstart](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#animationstart)
- [auxclick](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#auxclick)
- [beforeinput](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#beforeinput)
- [beforeprint](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#beforeprint)
- [beforeunload](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#beforeunload)
- [blur](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#blur)
- [canplay](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#canplay)
- [canplaythrough](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#canplaythrough)
- [change](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#change)
- [click](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#click)
- [close](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#close)
- [compositionend](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#compositionend)
- [compositionstart](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#compositionstart)
- [compositionupdate](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#compositionupdate)
- [contextmenu](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#contextmenu)
- [copy](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#copy)
- [cuechange](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#cuechange)
- [cut](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#cut)
- [dblclick](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#dblclick)
- [drag](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#drag)
- [dragend](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#dragend)
- [dragenter](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#dragenter)
- [dragleave](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#dragleave)
- [dragover](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#dragover)
- [dragstart](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#dragstart)
- [drop](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#drop)
- [durationchange](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#durationchange)
- [emptied](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#emptied)
- [ended](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#ended)
- [error](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#error)
- [focus](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#focus)
- [focusin](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#focusin)
- [focusout](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#focusout)
- [formdata](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#formdata)
- [fullscreenchange](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#fullscreenchange)
- [fullscreenerror](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#fullscreenerror)
- [gamepadconnected](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#gamepadconnected)
- [gamepaddisconnected](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#gamepaddisconnected)
- [gotpointercapture](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#gotpointercapture)
- [hashchange](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#hashchange)
- [input](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#input)
- [invalid](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#invalid)
- [keydown](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#keydown)
- [keypress](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#keypress)
- [keyup](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#keyup)
- [languagechange](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#languagechange)
- [load](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#load)
- [loadeddata](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#loadeddata)
- [loadedmetadata](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#loadedmetadata)
- [loadstart](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#loadstart)
- [lostpointercapture](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#lostpointercapture)
- [message](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#message)
- [messageerror](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#messageerror)
- [mousedown](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#mousedown)
- [mouseenter](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#mouseenter)
- [mouseleave](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#mouseleave)
- [mousemove](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#mousemove)
- [mouseout](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#mouseout)
- [mouseover](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#mouseover)
- [mouseup](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#mouseup)
- [offline](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#offline)
- [online](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#online)
- [pagehide](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#pagehide)
- [pageshow](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#pageshow)
- [paste](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#paste)
- [pause](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#pause)
- [play](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#play)
- [playing](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#playing)
- [pointercancel](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#pointercancel)
- [pointerdown](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#pointerdown)
- [pointerenter](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#pointerenter)
- [pointerleave](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#pointerleave)
- [pointermove](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#pointermove)
- [pointerout](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#pointerout)
- [pointerover](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#pointerover)
- [pointerup](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#pointerup)
- [popstate](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#popstate)
- [progress](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#progress)
- [ratechange](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#ratechange)
- [rejectionhandled](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#rejectionhandled)
- [reset](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#reset)
- [resize](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#resize)
- [scroll](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#scroll)
- [securitypolicyviolation](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#securitypolicyviolation)
- [seeked](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#seeked)
- [seeking](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#seeking)
- [select](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#select)
- [selectionchange](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#selectionchange)
- [selectstart](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#selectstart)
- [slotchange](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#slotchange)
- [stalled](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#stalled)
- [storage](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#storage)
- [submit](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#submit)
- [suspend](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#suspend)
- [timeupdate](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#timeupdate)
- [toggle](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#toggle)
- [touchcancel](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#touchcancel)
- [touchend](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#touchend)
- [touchmove](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#touchmove)
- [touchstart](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#touchstart)
- [transitioncancel](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#transitioncancel)
- [transitionend](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#transitionend)
- [transitionrun](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#transitionrun)
- [transitionstart](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#transitionstart)
- [unhandledrejection](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#unhandledrejection)
- [unload](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#unload)
- [volumechange](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#volumechange)
- [waiting](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#waiting)
- [webkitanimationend](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#webkitanimationend)
- [webkitanimationiteration](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#webkitanimationiteration)
- [webkitanimationstart](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#webkitanimationstart)
- [webkittransitionend](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#webkittransitionend)
- [wheel](annotation_annotation_layer_state._internal_.SVGSVGElementEventMap.md#wheel)

## Properties

### abort

• **abort**: [`UIEvent`](../modules/annotation_annotation_layer_state._internal_.md#uievent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[abort](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#abort)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5545

___

### afterprint

• **afterprint**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[WindowEventHandlersEventMap](annotation_annotation_layer_state._internal_.WindowEventHandlersEventMap.md).[afterprint](annotation_annotation_layer_state._internal_.WindowEventHandlersEventMap.md#afterprint)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16745

___

### animationcancel

• **animationcancel**: [`AnimationEvent`](../modules/annotation_annotation_layer_state._internal_.md#animationevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[animationcancel](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#animationcancel)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5546

___

### animationend

• **animationend**: [`AnimationEvent`](../modules/annotation_annotation_layer_state._internal_.md#animationevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[animationend](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#animationend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5547

___

### animationiteration

• **animationiteration**: [`AnimationEvent`](../modules/annotation_annotation_layer_state._internal_.md#animationevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[animationiteration](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#animationiteration)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5548

___

### animationstart

• **animationstart**: [`AnimationEvent`](../modules/annotation_annotation_layer_state._internal_.md#animationevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[animationstart](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#animationstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5549

___

### auxclick

• **auxclick**: [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[auxclick](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#auxclick)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5550

___

### beforeinput

• **beforeinput**: [`InputEvent`](../modules/annotation_annotation_layer_state._internal_.md#inputevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[beforeinput](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#beforeinput)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5551

___

### beforeprint

• **beforeprint**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[WindowEventHandlersEventMap](annotation_annotation_layer_state._internal_.WindowEventHandlersEventMap.md).[beforeprint](annotation_annotation_layer_state._internal_.WindowEventHandlersEventMap.md#beforeprint)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16746

___

### beforeunload

• **beforeunload**: [`BeforeUnloadEvent`](../modules/annotation_annotation_layer_state._internal_.md#beforeunloadevent)

#### Inherited from

[WindowEventHandlersEventMap](annotation_annotation_layer_state._internal_.WindowEventHandlersEventMap.md).[beforeunload](annotation_annotation_layer_state._internal_.WindowEventHandlersEventMap.md#beforeunload)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16747

___

### blur

• **blur**: [`FocusEvent`](../modules/annotation_annotation_layer_state._internal_.md#focusevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[blur](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#blur)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5552

___

### canplay

• **canplay**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[canplay](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#canplay)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5553

___

### canplaythrough

• **canplaythrough**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[canplaythrough](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#canplaythrough)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5554

___

### change

• **change**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[change](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#change)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5555

___

### click

• **click**: [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[click](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#click)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5556

___

### close

• **close**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[close](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#close)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5557

___

### compositionend

• **compositionend**: [`CompositionEvent`](../modules/annotation_annotation_layer_state._internal_.md#compositionevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[compositionend](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#compositionend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5558

___

### compositionstart

• **compositionstart**: [`CompositionEvent`](../modules/annotation_annotation_layer_state._internal_.md#compositionevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[compositionstart](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#compositionstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5559

___

### compositionupdate

• **compositionupdate**: [`CompositionEvent`](../modules/annotation_annotation_layer_state._internal_.md#compositionevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[compositionupdate](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#compositionupdate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5560

___

### contextmenu

• **contextmenu**: [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[contextmenu](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#contextmenu)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5561

___

### copy

• **copy**: [`ClipboardEvent`](../modules/annotation_annotation_layer_state._internal_.md#clipboardevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[copy](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#copy)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4702

___

### cuechange

• **cuechange**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[cuechange](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#cuechange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5562

___

### cut

• **cut**: [`ClipboardEvent`](../modules/annotation_annotation_layer_state._internal_.md#clipboardevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[cut](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#cut)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4703

___

### dblclick

• **dblclick**: [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[dblclick](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#dblclick)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5563

___

### drag

• **drag**: [`DragEvent`](../modules/annotation_annotation_layer_state._internal_.md#dragevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[drag](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#drag)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5564

___

### dragend

• **dragend**: [`DragEvent`](../modules/annotation_annotation_layer_state._internal_.md#dragevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[dragend](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#dragend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5565

___

### dragenter

• **dragenter**: [`DragEvent`](../modules/annotation_annotation_layer_state._internal_.md#dragevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[dragenter](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#dragenter)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5566

___

### dragleave

• **dragleave**: [`DragEvent`](../modules/annotation_annotation_layer_state._internal_.md#dragevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[dragleave](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#dragleave)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5567

___

### dragover

• **dragover**: [`DragEvent`](../modules/annotation_annotation_layer_state._internal_.md#dragevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[dragover](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#dragover)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5568

___

### dragstart

• **dragstart**: [`DragEvent`](../modules/annotation_annotation_layer_state._internal_.md#dragevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[dragstart](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#dragstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5569

___

### drop

• **drop**: [`DragEvent`](../modules/annotation_annotation_layer_state._internal_.md#dragevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[drop](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#drop)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5570

___

### durationchange

• **durationchange**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[durationchange](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#durationchange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5571

___

### emptied

• **emptied**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[emptied](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#emptied)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5572

___

### ended

• **ended**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[ended](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#ended)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5573

___

### error

• **error**: [`ErrorEvent`](../modules/annotation_annotation_layer_state._internal_.md#errorevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[error](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#error)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5574

___

### focus

• **focus**: [`FocusEvent`](../modules/annotation_annotation_layer_state._internal_.md#focusevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[focus](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#focus)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5575

___

### focusin

• **focusin**: [`FocusEvent`](../modules/annotation_annotation_layer_state._internal_.md#focusevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[focusin](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#focusin)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5576

___

### focusout

• **focusout**: [`FocusEvent`](../modules/annotation_annotation_layer_state._internal_.md#focusevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[focusout](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#focusout)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5577

___

### formdata

• **formdata**: [`FormDataEvent`](../modules/annotation_annotation_layer_state._internal_.md#formdataevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[formdata](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#formdata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5578

___

### fullscreenchange

• **fullscreenchange**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[fullscreenchange](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#fullscreenchange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4846

___

### fullscreenerror

• **fullscreenerror**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[fullscreenerror](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#fullscreenerror)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4847

___

### gamepadconnected

• **gamepadconnected**: [`GamepadEvent`](../modules/annotation_annotation_layer_state._internal_.md#gamepadevent)

#### Inherited from

[WindowEventHandlersEventMap](annotation_annotation_layer_state._internal_.WindowEventHandlersEventMap.md).[gamepadconnected](annotation_annotation_layer_state._internal_.WindowEventHandlersEventMap.md#gamepadconnected)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16748

___

### gamepaddisconnected

• **gamepaddisconnected**: [`GamepadEvent`](../modules/annotation_annotation_layer_state._internal_.md#gamepadevent)

#### Inherited from

[WindowEventHandlersEventMap](annotation_annotation_layer_state._internal_.WindowEventHandlersEventMap.md).[gamepaddisconnected](annotation_annotation_layer_state._internal_.WindowEventHandlersEventMap.md#gamepaddisconnected)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16749

___

### gotpointercapture

• **gotpointercapture**: [`PointerEvent`](../modules/annotation_annotation_layer_state._internal_.md#pointerevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[gotpointercapture](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#gotpointercapture)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5579

___

### hashchange

• **hashchange**: [`HashChangeEvent`](../modules/annotation_annotation_layer_state._internal_.md#hashchangeevent)

#### Inherited from

[WindowEventHandlersEventMap](annotation_annotation_layer_state._internal_.WindowEventHandlersEventMap.md).[hashchange](annotation_annotation_layer_state._internal_.WindowEventHandlersEventMap.md#hashchange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16750

___

### input

• **input**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[input](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#input)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5580

___

### invalid

• **invalid**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[invalid](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#invalid)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5581

___

### keydown

• **keydown**: [`KeyboardEvent`](../modules/annotation_annotation_layer_state._internal_.md#keyboardevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[keydown](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#keydown)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5582

___

### keypress

• **keypress**: [`KeyboardEvent`](../modules/annotation_annotation_layer_state._internal_.md#keyboardevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[keypress](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#keypress)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5583

___

### keyup

• **keyup**: [`KeyboardEvent`](../modules/annotation_annotation_layer_state._internal_.md#keyboardevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[keyup](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#keyup)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5584

___

### languagechange

• **languagechange**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[WindowEventHandlersEventMap](annotation_annotation_layer_state._internal_.WindowEventHandlersEventMap.md).[languagechange](annotation_annotation_layer_state._internal_.WindowEventHandlersEventMap.md#languagechange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16751

___

### load

• **load**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[load](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#load)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5585

___

### loadeddata

• **loadeddata**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[loadeddata](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#loadeddata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5586

___

### loadedmetadata

• **loadedmetadata**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[loadedmetadata](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#loadedmetadata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5587

___

### loadstart

• **loadstart**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[loadstart](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#loadstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5588

___

### lostpointercapture

• **lostpointercapture**: [`PointerEvent`](../modules/annotation_annotation_layer_state._internal_.md#pointerevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[lostpointercapture](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#lostpointercapture)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5589

___

### message

• **message**: `MessageEvent`<`any`\>

#### Inherited from

[WindowEventHandlersEventMap](annotation_annotation_layer_state._internal_.WindowEventHandlersEventMap.md).[message](annotation_annotation_layer_state._internal_.WindowEventHandlersEventMap.md#message)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16752

___

### messageerror

• **messageerror**: `MessageEvent`<`any`\>

#### Inherited from

[WindowEventHandlersEventMap](annotation_annotation_layer_state._internal_.WindowEventHandlersEventMap.md).[messageerror](annotation_annotation_layer_state._internal_.WindowEventHandlersEventMap.md#messageerror)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16753

___

### mousedown

• **mousedown**: [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[mousedown](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#mousedown)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5590

___

### mouseenter

• **mouseenter**: [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[mouseenter](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#mouseenter)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5591

___

### mouseleave

• **mouseleave**: [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[mouseleave](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#mouseleave)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5592

___

### mousemove

• **mousemove**: [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[mousemove](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#mousemove)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5593

___

### mouseout

• **mouseout**: [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[mouseout](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#mouseout)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5594

___

### mouseover

• **mouseover**: [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[mouseover](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#mouseover)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5595

___

### mouseup

• **mouseup**: [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[mouseup](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#mouseup)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5596

___

### offline

• **offline**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[WindowEventHandlersEventMap](annotation_annotation_layer_state._internal_.WindowEventHandlersEventMap.md).[offline](annotation_annotation_layer_state._internal_.WindowEventHandlersEventMap.md#offline)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16754

___

### online

• **online**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[WindowEventHandlersEventMap](annotation_annotation_layer_state._internal_.WindowEventHandlersEventMap.md).[online](annotation_annotation_layer_state._internal_.WindowEventHandlersEventMap.md#online)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16755

___

### pagehide

• **pagehide**: [`PageTransitionEvent`](../modules/annotation_annotation_layer_state._internal_.md#pagetransitionevent)

#### Inherited from

[WindowEventHandlersEventMap](annotation_annotation_layer_state._internal_.WindowEventHandlersEventMap.md).[pagehide](annotation_annotation_layer_state._internal_.WindowEventHandlersEventMap.md#pagehide)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16756

___

### pageshow

• **pageshow**: [`PageTransitionEvent`](../modules/annotation_annotation_layer_state._internal_.md#pagetransitionevent)

#### Inherited from

[WindowEventHandlersEventMap](annotation_annotation_layer_state._internal_.WindowEventHandlersEventMap.md).[pageshow](annotation_annotation_layer_state._internal_.WindowEventHandlersEventMap.md#pageshow)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16757

___

### paste

• **paste**: [`ClipboardEvent`](../modules/annotation_annotation_layer_state._internal_.md#clipboardevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[paste](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#paste)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4704

___

### pause

• **pause**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[pause](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#pause)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5597

___

### play

• **play**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[play](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#play)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5598

___

### playing

• **playing**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[playing](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#playing)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5599

___

### pointercancel

• **pointercancel**: [`PointerEvent`](../modules/annotation_annotation_layer_state._internal_.md#pointerevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[pointercancel](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#pointercancel)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5600

___

### pointerdown

• **pointerdown**: [`PointerEvent`](../modules/annotation_annotation_layer_state._internal_.md#pointerevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[pointerdown](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#pointerdown)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5601

___

### pointerenter

• **pointerenter**: [`PointerEvent`](../modules/annotation_annotation_layer_state._internal_.md#pointerevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[pointerenter](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#pointerenter)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5602

___

### pointerleave

• **pointerleave**: [`PointerEvent`](../modules/annotation_annotation_layer_state._internal_.md#pointerevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[pointerleave](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#pointerleave)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5603

___

### pointermove

• **pointermove**: [`PointerEvent`](../modules/annotation_annotation_layer_state._internal_.md#pointerevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[pointermove](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#pointermove)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5604

___

### pointerout

• **pointerout**: [`PointerEvent`](../modules/annotation_annotation_layer_state._internal_.md#pointerevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[pointerout](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#pointerout)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5605

___

### pointerover

• **pointerover**: [`PointerEvent`](../modules/annotation_annotation_layer_state._internal_.md#pointerevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[pointerover](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#pointerover)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5606

___

### pointerup

• **pointerup**: [`PointerEvent`](../modules/annotation_annotation_layer_state._internal_.md#pointerevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[pointerup](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#pointerup)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5607

___

### popstate

• **popstate**: [`PopStateEvent`](../modules/annotation_annotation_layer_state._internal_.md#popstateevent)

#### Inherited from

[WindowEventHandlersEventMap](annotation_annotation_layer_state._internal_.WindowEventHandlersEventMap.md).[popstate](annotation_annotation_layer_state._internal_.WindowEventHandlersEventMap.md#popstate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16758

___

### progress

• **progress**: [`ProgressEvent`](../modules/annotation_annotation_layer_state._internal_.md#progressevent)<[`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget)\>

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[progress](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#progress)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5608

___

### ratechange

• **ratechange**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[ratechange](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#ratechange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5609

___

### rejectionhandled

• **rejectionhandled**: [`PromiseRejectionEvent`](../modules/annotation_annotation_layer_state._internal_.md#promiserejectionevent)

#### Inherited from

[WindowEventHandlersEventMap](annotation_annotation_layer_state._internal_.WindowEventHandlersEventMap.md).[rejectionhandled](annotation_annotation_layer_state._internal_.WindowEventHandlersEventMap.md#rejectionhandled)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16759

___

### reset

• **reset**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[reset](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#reset)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5610

___

### resize

• **resize**: [`UIEvent`](../modules/annotation_annotation_layer_state._internal_.md#uievent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[resize](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#resize)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5611

___

### scroll

• **scroll**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[scroll](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#scroll)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5612

___

### securitypolicyviolation

• **securitypolicyviolation**: [`SecurityPolicyViolationEvent`](../modules/annotation_annotation_layer_state._internal_.md#securitypolicyviolationevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[securitypolicyviolation](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#securitypolicyviolation)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5613

___

### seeked

• **seeked**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[seeked](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#seeked)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5614

___

### seeking

• **seeking**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[seeking](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#seeking)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5615

___

### select

• **select**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[select](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#select)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5616

___

### selectionchange

• **selectionchange**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[selectionchange](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#selectionchange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5617

___

### selectstart

• **selectstart**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[selectstart](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#selectstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5618

___

### slotchange

• **slotchange**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[slotchange](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#slotchange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5619

___

### stalled

• **stalled**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[stalled](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#stalled)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5620

___

### storage

• **storage**: [`StorageEvent`](../modules/annotation_annotation_layer_state._internal_.md#storageevent)

#### Inherited from

[WindowEventHandlersEventMap](annotation_annotation_layer_state._internal_.WindowEventHandlersEventMap.md).[storage](annotation_annotation_layer_state._internal_.WindowEventHandlersEventMap.md#storage)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16760

___

### submit

• **submit**: [`SubmitEvent`](../modules/annotation_annotation_layer_state._internal_.md#submitevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[submit](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#submit)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5621

___

### suspend

• **suspend**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[suspend](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#suspend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5622

___

### timeupdate

• **timeupdate**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[timeupdate](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#timeupdate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5623

___

### toggle

• **toggle**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[toggle](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#toggle)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5624

___

### touchcancel

• **touchcancel**: [`TouchEvent`](../modules/annotation_annotation_layer_state._internal_.md#touchevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[touchcancel](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#touchcancel)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5625

___

### touchend

• **touchend**: [`TouchEvent`](../modules/annotation_annotation_layer_state._internal_.md#touchevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[touchend](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#touchend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5626

___

### touchmove

• **touchmove**: [`TouchEvent`](../modules/annotation_annotation_layer_state._internal_.md#touchevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[touchmove](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#touchmove)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5627

___

### touchstart

• **touchstart**: [`TouchEvent`](../modules/annotation_annotation_layer_state._internal_.md#touchevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[touchstart](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#touchstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5628

___

### transitioncancel

• **transitioncancel**: [`TransitionEvent`](../modules/annotation_annotation_layer_state._internal_.md#transitionevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[transitioncancel](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#transitioncancel)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5629

___

### transitionend

• **transitionend**: [`TransitionEvent`](../modules/annotation_annotation_layer_state._internal_.md#transitionevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[transitionend](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#transitionend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5630

___

### transitionrun

• **transitionrun**: [`TransitionEvent`](../modules/annotation_annotation_layer_state._internal_.md#transitionevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[transitionrun](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#transitionrun)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5631

___

### transitionstart

• **transitionstart**: [`TransitionEvent`](../modules/annotation_annotation_layer_state._internal_.md#transitionevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[transitionstart](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#transitionstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5632

___

### unhandledrejection

• **unhandledrejection**: [`PromiseRejectionEvent`](../modules/annotation_annotation_layer_state._internal_.md#promiserejectionevent)

#### Inherited from

[WindowEventHandlersEventMap](annotation_annotation_layer_state._internal_.WindowEventHandlersEventMap.md).[unhandledrejection](annotation_annotation_layer_state._internal_.WindowEventHandlersEventMap.md#unhandledrejection)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16761

___

### unload

• **unload**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[WindowEventHandlersEventMap](annotation_annotation_layer_state._internal_.WindowEventHandlersEventMap.md).[unload](annotation_annotation_layer_state._internal_.WindowEventHandlersEventMap.md#unload)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16762

___

### volumechange

• **volumechange**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[volumechange](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#volumechange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5633

___

### waiting

• **waiting**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[waiting](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#waiting)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5634

___

### webkitanimationend

• **webkitanimationend**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[webkitanimationend](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#webkitanimationend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5635

___

### webkitanimationiteration

• **webkitanimationiteration**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[webkitanimationiteration](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#webkitanimationiteration)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5636

___

### webkitanimationstart

• **webkitanimationstart**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[webkitanimationstart](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#webkitanimationstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5637

___

### webkittransitionend

• **webkittransitionend**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[webkittransitionend](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#webkittransitionend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5638

___

### wheel

• **wheel**: [`WheelEvent`](../modules/annotation_annotation_layer_state._internal_.md#wheelevent)

#### Inherited from

[SVGElementEventMap](annotation_annotation_layer_state._internal_.SVGElementEventMap.md).[wheel](annotation_annotation_layer_state._internal_.SVGElementEventMap.md#wheel)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5639
