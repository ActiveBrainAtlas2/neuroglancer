[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / SVGSVGElementEventMap

# Interface: SVGSVGElementEventMap

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).SVGSVGElementEventMap

## Hierarchy

- [`SVGElementEventMap`](axes_lines._internal_.SVGElementEventMap.md)

- [`WindowEventHandlersEventMap`](axes_lines._internal_.WindowEventHandlersEventMap.md)

  ↳ **`SVGSVGElementEventMap`**

## Table of contents

### Properties

- [abort](axes_lines._internal_.SVGSVGElementEventMap.md#abort)
- [afterprint](axes_lines._internal_.SVGSVGElementEventMap.md#afterprint)
- [animationcancel](axes_lines._internal_.SVGSVGElementEventMap.md#animationcancel)
- [animationend](axes_lines._internal_.SVGSVGElementEventMap.md#animationend)
- [animationiteration](axes_lines._internal_.SVGSVGElementEventMap.md#animationiteration)
- [animationstart](axes_lines._internal_.SVGSVGElementEventMap.md#animationstart)
- [auxclick](axes_lines._internal_.SVGSVGElementEventMap.md#auxclick)
- [beforeinput](axes_lines._internal_.SVGSVGElementEventMap.md#beforeinput)
- [beforeprint](axes_lines._internal_.SVGSVGElementEventMap.md#beforeprint)
- [beforeunload](axes_lines._internal_.SVGSVGElementEventMap.md#beforeunload)
- [blur](axes_lines._internal_.SVGSVGElementEventMap.md#blur)
- [canplay](axes_lines._internal_.SVGSVGElementEventMap.md#canplay)
- [canplaythrough](axes_lines._internal_.SVGSVGElementEventMap.md#canplaythrough)
- [change](axes_lines._internal_.SVGSVGElementEventMap.md#change)
- [click](axes_lines._internal_.SVGSVGElementEventMap.md#click)
- [close](axes_lines._internal_.SVGSVGElementEventMap.md#close)
- [compositionend](axes_lines._internal_.SVGSVGElementEventMap.md#compositionend)
- [compositionstart](axes_lines._internal_.SVGSVGElementEventMap.md#compositionstart)
- [compositionupdate](axes_lines._internal_.SVGSVGElementEventMap.md#compositionupdate)
- [contextmenu](axes_lines._internal_.SVGSVGElementEventMap.md#contextmenu)
- [copy](axes_lines._internal_.SVGSVGElementEventMap.md#copy)
- [cuechange](axes_lines._internal_.SVGSVGElementEventMap.md#cuechange)
- [cut](axes_lines._internal_.SVGSVGElementEventMap.md#cut)
- [dblclick](axes_lines._internal_.SVGSVGElementEventMap.md#dblclick)
- [drag](axes_lines._internal_.SVGSVGElementEventMap.md#drag)
- [dragend](axes_lines._internal_.SVGSVGElementEventMap.md#dragend)
- [dragenter](axes_lines._internal_.SVGSVGElementEventMap.md#dragenter)
- [dragleave](axes_lines._internal_.SVGSVGElementEventMap.md#dragleave)
- [dragover](axes_lines._internal_.SVGSVGElementEventMap.md#dragover)
- [dragstart](axes_lines._internal_.SVGSVGElementEventMap.md#dragstart)
- [drop](axes_lines._internal_.SVGSVGElementEventMap.md#drop)
- [durationchange](axes_lines._internal_.SVGSVGElementEventMap.md#durationchange)
- [emptied](axes_lines._internal_.SVGSVGElementEventMap.md#emptied)
- [ended](axes_lines._internal_.SVGSVGElementEventMap.md#ended)
- [error](axes_lines._internal_.SVGSVGElementEventMap.md#error)
- [focus](axes_lines._internal_.SVGSVGElementEventMap.md#focus)
- [focusin](axes_lines._internal_.SVGSVGElementEventMap.md#focusin)
- [focusout](axes_lines._internal_.SVGSVGElementEventMap.md#focusout)
- [formdata](axes_lines._internal_.SVGSVGElementEventMap.md#formdata)
- [fullscreenchange](axes_lines._internal_.SVGSVGElementEventMap.md#fullscreenchange)
- [fullscreenerror](axes_lines._internal_.SVGSVGElementEventMap.md#fullscreenerror)
- [gamepadconnected](axes_lines._internal_.SVGSVGElementEventMap.md#gamepadconnected)
- [gamepaddisconnected](axes_lines._internal_.SVGSVGElementEventMap.md#gamepaddisconnected)
- [gotpointercapture](axes_lines._internal_.SVGSVGElementEventMap.md#gotpointercapture)
- [hashchange](axes_lines._internal_.SVGSVGElementEventMap.md#hashchange)
- [input](axes_lines._internal_.SVGSVGElementEventMap.md#input)
- [invalid](axes_lines._internal_.SVGSVGElementEventMap.md#invalid)
- [keydown](axes_lines._internal_.SVGSVGElementEventMap.md#keydown)
- [keypress](axes_lines._internal_.SVGSVGElementEventMap.md#keypress)
- [keyup](axes_lines._internal_.SVGSVGElementEventMap.md#keyup)
- [languagechange](axes_lines._internal_.SVGSVGElementEventMap.md#languagechange)
- [load](axes_lines._internal_.SVGSVGElementEventMap.md#load)
- [loadeddata](axes_lines._internal_.SVGSVGElementEventMap.md#loadeddata)
- [loadedmetadata](axes_lines._internal_.SVGSVGElementEventMap.md#loadedmetadata)
- [loadstart](axes_lines._internal_.SVGSVGElementEventMap.md#loadstart)
- [lostpointercapture](axes_lines._internal_.SVGSVGElementEventMap.md#lostpointercapture)
- [message](axes_lines._internal_.SVGSVGElementEventMap.md#message)
- [messageerror](axes_lines._internal_.SVGSVGElementEventMap.md#messageerror)
- [mousedown](axes_lines._internal_.SVGSVGElementEventMap.md#mousedown)
- [mouseenter](axes_lines._internal_.SVGSVGElementEventMap.md#mouseenter)
- [mouseleave](axes_lines._internal_.SVGSVGElementEventMap.md#mouseleave)
- [mousemove](axes_lines._internal_.SVGSVGElementEventMap.md#mousemove)
- [mouseout](axes_lines._internal_.SVGSVGElementEventMap.md#mouseout)
- [mouseover](axes_lines._internal_.SVGSVGElementEventMap.md#mouseover)
- [mouseup](axes_lines._internal_.SVGSVGElementEventMap.md#mouseup)
- [offline](axes_lines._internal_.SVGSVGElementEventMap.md#offline)
- [online](axes_lines._internal_.SVGSVGElementEventMap.md#online)
- [pagehide](axes_lines._internal_.SVGSVGElementEventMap.md#pagehide)
- [pageshow](axes_lines._internal_.SVGSVGElementEventMap.md#pageshow)
- [paste](axes_lines._internal_.SVGSVGElementEventMap.md#paste)
- [pause](axes_lines._internal_.SVGSVGElementEventMap.md#pause)
- [play](axes_lines._internal_.SVGSVGElementEventMap.md#play)
- [playing](axes_lines._internal_.SVGSVGElementEventMap.md#playing)
- [pointercancel](axes_lines._internal_.SVGSVGElementEventMap.md#pointercancel)
- [pointerdown](axes_lines._internal_.SVGSVGElementEventMap.md#pointerdown)
- [pointerenter](axes_lines._internal_.SVGSVGElementEventMap.md#pointerenter)
- [pointerleave](axes_lines._internal_.SVGSVGElementEventMap.md#pointerleave)
- [pointermove](axes_lines._internal_.SVGSVGElementEventMap.md#pointermove)
- [pointerout](axes_lines._internal_.SVGSVGElementEventMap.md#pointerout)
- [pointerover](axes_lines._internal_.SVGSVGElementEventMap.md#pointerover)
- [pointerup](axes_lines._internal_.SVGSVGElementEventMap.md#pointerup)
- [popstate](axes_lines._internal_.SVGSVGElementEventMap.md#popstate)
- [progress](axes_lines._internal_.SVGSVGElementEventMap.md#progress)
- [ratechange](axes_lines._internal_.SVGSVGElementEventMap.md#ratechange)
- [rejectionhandled](axes_lines._internal_.SVGSVGElementEventMap.md#rejectionhandled)
- [reset](axes_lines._internal_.SVGSVGElementEventMap.md#reset)
- [resize](axes_lines._internal_.SVGSVGElementEventMap.md#resize)
- [scroll](axes_lines._internal_.SVGSVGElementEventMap.md#scroll)
- [securitypolicyviolation](axes_lines._internal_.SVGSVGElementEventMap.md#securitypolicyviolation)
- [seeked](axes_lines._internal_.SVGSVGElementEventMap.md#seeked)
- [seeking](axes_lines._internal_.SVGSVGElementEventMap.md#seeking)
- [select](axes_lines._internal_.SVGSVGElementEventMap.md#select)
- [selectionchange](axes_lines._internal_.SVGSVGElementEventMap.md#selectionchange)
- [selectstart](axes_lines._internal_.SVGSVGElementEventMap.md#selectstart)
- [slotchange](axes_lines._internal_.SVGSVGElementEventMap.md#slotchange)
- [stalled](axes_lines._internal_.SVGSVGElementEventMap.md#stalled)
- [storage](axes_lines._internal_.SVGSVGElementEventMap.md#storage)
- [submit](axes_lines._internal_.SVGSVGElementEventMap.md#submit)
- [suspend](axes_lines._internal_.SVGSVGElementEventMap.md#suspend)
- [timeupdate](axes_lines._internal_.SVGSVGElementEventMap.md#timeupdate)
- [toggle](axes_lines._internal_.SVGSVGElementEventMap.md#toggle)
- [touchcancel](axes_lines._internal_.SVGSVGElementEventMap.md#touchcancel)
- [touchend](axes_lines._internal_.SVGSVGElementEventMap.md#touchend)
- [touchmove](axes_lines._internal_.SVGSVGElementEventMap.md#touchmove)
- [touchstart](axes_lines._internal_.SVGSVGElementEventMap.md#touchstart)
- [transitioncancel](axes_lines._internal_.SVGSVGElementEventMap.md#transitioncancel)
- [transitionend](axes_lines._internal_.SVGSVGElementEventMap.md#transitionend)
- [transitionrun](axes_lines._internal_.SVGSVGElementEventMap.md#transitionrun)
- [transitionstart](axes_lines._internal_.SVGSVGElementEventMap.md#transitionstart)
- [unhandledrejection](axes_lines._internal_.SVGSVGElementEventMap.md#unhandledrejection)
- [unload](axes_lines._internal_.SVGSVGElementEventMap.md#unload)
- [volumechange](axes_lines._internal_.SVGSVGElementEventMap.md#volumechange)
- [waiting](axes_lines._internal_.SVGSVGElementEventMap.md#waiting)
- [webkitanimationend](axes_lines._internal_.SVGSVGElementEventMap.md#webkitanimationend)
- [webkitanimationiteration](axes_lines._internal_.SVGSVGElementEventMap.md#webkitanimationiteration)
- [webkitanimationstart](axes_lines._internal_.SVGSVGElementEventMap.md#webkitanimationstart)
- [webkittransitionend](axes_lines._internal_.SVGSVGElementEventMap.md#webkittransitionend)
- [wheel](axes_lines._internal_.SVGSVGElementEventMap.md#wheel)

## Properties

### abort

• **abort**: [`UIEvent`](../modules/axes_lines._internal_.md#uievent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[abort](axes_lines._internal_.SVGElementEventMap.md#abort)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5545

___

### afterprint

• **afterprint**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[WindowEventHandlersEventMap](axes_lines._internal_.WindowEventHandlersEventMap.md).[afterprint](axes_lines._internal_.WindowEventHandlersEventMap.md#afterprint)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16745

___

### animationcancel

• **animationcancel**: [`AnimationEvent`](../modules/axes_lines._internal_.md#animationevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[animationcancel](axes_lines._internal_.SVGElementEventMap.md#animationcancel)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5546

___

### animationend

• **animationend**: [`AnimationEvent`](../modules/axes_lines._internal_.md#animationevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[animationend](axes_lines._internal_.SVGElementEventMap.md#animationend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5547

___

### animationiteration

• **animationiteration**: [`AnimationEvent`](../modules/axes_lines._internal_.md#animationevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[animationiteration](axes_lines._internal_.SVGElementEventMap.md#animationiteration)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5548

___

### animationstart

• **animationstart**: [`AnimationEvent`](../modules/axes_lines._internal_.md#animationevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[animationstart](axes_lines._internal_.SVGElementEventMap.md#animationstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5549

___

### auxclick

• **auxclick**: [`MouseEvent`](../modules/axes_lines._internal_.md#mouseevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[auxclick](axes_lines._internal_.SVGElementEventMap.md#auxclick)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5550

___

### beforeinput

• **beforeinput**: [`InputEvent`](../modules/axes_lines._internal_.md#inputevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[beforeinput](axes_lines._internal_.SVGElementEventMap.md#beforeinput)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5551

___

### beforeprint

• **beforeprint**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[WindowEventHandlersEventMap](axes_lines._internal_.WindowEventHandlersEventMap.md).[beforeprint](axes_lines._internal_.WindowEventHandlersEventMap.md#beforeprint)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16746

___

### beforeunload

• **beforeunload**: [`BeforeUnloadEvent`](../modules/axes_lines._internal_.md#beforeunloadevent)

#### Inherited from

[WindowEventHandlersEventMap](axes_lines._internal_.WindowEventHandlersEventMap.md).[beforeunload](axes_lines._internal_.WindowEventHandlersEventMap.md#beforeunload)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16747

___

### blur

• **blur**: [`FocusEvent`](../modules/axes_lines._internal_.md#focusevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[blur](axes_lines._internal_.SVGElementEventMap.md#blur)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5552

___

### canplay

• **canplay**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[canplay](axes_lines._internal_.SVGElementEventMap.md#canplay)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5553

___

### canplaythrough

• **canplaythrough**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[canplaythrough](axes_lines._internal_.SVGElementEventMap.md#canplaythrough)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5554

___

### change

• **change**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[change](axes_lines._internal_.SVGElementEventMap.md#change)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5555

___

### click

• **click**: [`MouseEvent`](../modules/axes_lines._internal_.md#mouseevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[click](axes_lines._internal_.SVGElementEventMap.md#click)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5556

___

### close

• **close**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[close](axes_lines._internal_.SVGElementEventMap.md#close)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5557

___

### compositionend

• **compositionend**: [`CompositionEvent`](../modules/axes_lines._internal_.md#compositionevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[compositionend](axes_lines._internal_.SVGElementEventMap.md#compositionend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5558

___

### compositionstart

• **compositionstart**: [`CompositionEvent`](../modules/axes_lines._internal_.md#compositionevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[compositionstart](axes_lines._internal_.SVGElementEventMap.md#compositionstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5559

___

### compositionupdate

• **compositionupdate**: [`CompositionEvent`](../modules/axes_lines._internal_.md#compositionevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[compositionupdate](axes_lines._internal_.SVGElementEventMap.md#compositionupdate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5560

___

### contextmenu

• **contextmenu**: [`MouseEvent`](../modules/axes_lines._internal_.md#mouseevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[contextmenu](axes_lines._internal_.SVGElementEventMap.md#contextmenu)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5561

___

### copy

• **copy**: [`ClipboardEvent`](../modules/axes_lines._internal_.md#clipboardevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[copy](axes_lines._internal_.SVGElementEventMap.md#copy)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4702

___

### cuechange

• **cuechange**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[cuechange](axes_lines._internal_.SVGElementEventMap.md#cuechange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5562

___

### cut

• **cut**: [`ClipboardEvent`](../modules/axes_lines._internal_.md#clipboardevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[cut](axes_lines._internal_.SVGElementEventMap.md#cut)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4703

___

### dblclick

• **dblclick**: [`MouseEvent`](../modules/axes_lines._internal_.md#mouseevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[dblclick](axes_lines._internal_.SVGElementEventMap.md#dblclick)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5563

___

### drag

• **drag**: [`DragEvent`](../modules/axes_lines._internal_.md#dragevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[drag](axes_lines._internal_.SVGElementEventMap.md#drag)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5564

___

### dragend

• **dragend**: [`DragEvent`](../modules/axes_lines._internal_.md#dragevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[dragend](axes_lines._internal_.SVGElementEventMap.md#dragend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5565

___

### dragenter

• **dragenter**: [`DragEvent`](../modules/axes_lines._internal_.md#dragevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[dragenter](axes_lines._internal_.SVGElementEventMap.md#dragenter)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5566

___

### dragleave

• **dragleave**: [`DragEvent`](../modules/axes_lines._internal_.md#dragevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[dragleave](axes_lines._internal_.SVGElementEventMap.md#dragleave)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5567

___

### dragover

• **dragover**: [`DragEvent`](../modules/axes_lines._internal_.md#dragevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[dragover](axes_lines._internal_.SVGElementEventMap.md#dragover)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5568

___

### dragstart

• **dragstart**: [`DragEvent`](../modules/axes_lines._internal_.md#dragevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[dragstart](axes_lines._internal_.SVGElementEventMap.md#dragstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5569

___

### drop

• **drop**: [`DragEvent`](../modules/axes_lines._internal_.md#dragevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[drop](axes_lines._internal_.SVGElementEventMap.md#drop)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5570

___

### durationchange

• **durationchange**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[durationchange](axes_lines._internal_.SVGElementEventMap.md#durationchange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5571

___

### emptied

• **emptied**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[emptied](axes_lines._internal_.SVGElementEventMap.md#emptied)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5572

___

### ended

• **ended**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[ended](axes_lines._internal_.SVGElementEventMap.md#ended)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5573

___

### error

• **error**: [`ErrorEvent`](../modules/axes_lines._internal_.md#errorevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[error](axes_lines._internal_.SVGElementEventMap.md#error)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5574

___

### focus

• **focus**: [`FocusEvent`](../modules/axes_lines._internal_.md#focusevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[focus](axes_lines._internal_.SVGElementEventMap.md#focus)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5575

___

### focusin

• **focusin**: [`FocusEvent`](../modules/axes_lines._internal_.md#focusevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[focusin](axes_lines._internal_.SVGElementEventMap.md#focusin)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5576

___

### focusout

• **focusout**: [`FocusEvent`](../modules/axes_lines._internal_.md#focusevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[focusout](axes_lines._internal_.SVGElementEventMap.md#focusout)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5577

___

### formdata

• **formdata**: [`FormDataEvent`](../modules/axes_lines._internal_.md#formdataevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[formdata](axes_lines._internal_.SVGElementEventMap.md#formdata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5578

___

### fullscreenchange

• **fullscreenchange**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[fullscreenchange](axes_lines._internal_.SVGElementEventMap.md#fullscreenchange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4846

___

### fullscreenerror

• **fullscreenerror**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[fullscreenerror](axes_lines._internal_.SVGElementEventMap.md#fullscreenerror)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4847

___

### gamepadconnected

• **gamepadconnected**: [`GamepadEvent`](../modules/axes_lines._internal_.md#gamepadevent)

#### Inherited from

[WindowEventHandlersEventMap](axes_lines._internal_.WindowEventHandlersEventMap.md).[gamepadconnected](axes_lines._internal_.WindowEventHandlersEventMap.md#gamepadconnected)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16748

___

### gamepaddisconnected

• **gamepaddisconnected**: [`GamepadEvent`](../modules/axes_lines._internal_.md#gamepadevent)

#### Inherited from

[WindowEventHandlersEventMap](axes_lines._internal_.WindowEventHandlersEventMap.md).[gamepaddisconnected](axes_lines._internal_.WindowEventHandlersEventMap.md#gamepaddisconnected)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16749

___

### gotpointercapture

• **gotpointercapture**: [`PointerEvent`](../modules/axes_lines._internal_.md#pointerevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[gotpointercapture](axes_lines._internal_.SVGElementEventMap.md#gotpointercapture)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5579

___

### hashchange

• **hashchange**: [`HashChangeEvent`](../modules/axes_lines._internal_.md#hashchangeevent)

#### Inherited from

[WindowEventHandlersEventMap](axes_lines._internal_.WindowEventHandlersEventMap.md).[hashchange](axes_lines._internal_.WindowEventHandlersEventMap.md#hashchange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16750

___

### input

• **input**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[input](axes_lines._internal_.SVGElementEventMap.md#input)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5580

___

### invalid

• **invalid**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[invalid](axes_lines._internal_.SVGElementEventMap.md#invalid)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5581

___

### keydown

• **keydown**: [`KeyboardEvent`](../modules/axes_lines._internal_.md#keyboardevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[keydown](axes_lines._internal_.SVGElementEventMap.md#keydown)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5582

___

### keypress

• **keypress**: [`KeyboardEvent`](../modules/axes_lines._internal_.md#keyboardevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[keypress](axes_lines._internal_.SVGElementEventMap.md#keypress)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5583

___

### keyup

• **keyup**: [`KeyboardEvent`](../modules/axes_lines._internal_.md#keyboardevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[keyup](axes_lines._internal_.SVGElementEventMap.md#keyup)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5584

___

### languagechange

• **languagechange**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[WindowEventHandlersEventMap](axes_lines._internal_.WindowEventHandlersEventMap.md).[languagechange](axes_lines._internal_.WindowEventHandlersEventMap.md#languagechange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16751

___

### load

• **load**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[load](axes_lines._internal_.SVGElementEventMap.md#load)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5585

___

### loadeddata

• **loadeddata**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[loadeddata](axes_lines._internal_.SVGElementEventMap.md#loadeddata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5586

___

### loadedmetadata

• **loadedmetadata**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[loadedmetadata](axes_lines._internal_.SVGElementEventMap.md#loadedmetadata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5587

___

### loadstart

• **loadstart**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[loadstart](axes_lines._internal_.SVGElementEventMap.md#loadstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5588

___

### lostpointercapture

• **lostpointercapture**: [`PointerEvent`](../modules/axes_lines._internal_.md#pointerevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[lostpointercapture](axes_lines._internal_.SVGElementEventMap.md#lostpointercapture)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5589

___

### message

• **message**: `MessageEvent`<`any`\>

#### Inherited from

[WindowEventHandlersEventMap](axes_lines._internal_.WindowEventHandlersEventMap.md).[message](axes_lines._internal_.WindowEventHandlersEventMap.md#message)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16752

___

### messageerror

• **messageerror**: `MessageEvent`<`any`\>

#### Inherited from

[WindowEventHandlersEventMap](axes_lines._internal_.WindowEventHandlersEventMap.md).[messageerror](axes_lines._internal_.WindowEventHandlersEventMap.md#messageerror)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16753

___

### mousedown

• **mousedown**: [`MouseEvent`](../modules/axes_lines._internal_.md#mouseevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[mousedown](axes_lines._internal_.SVGElementEventMap.md#mousedown)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5590

___

### mouseenter

• **mouseenter**: [`MouseEvent`](../modules/axes_lines._internal_.md#mouseevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[mouseenter](axes_lines._internal_.SVGElementEventMap.md#mouseenter)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5591

___

### mouseleave

• **mouseleave**: [`MouseEvent`](../modules/axes_lines._internal_.md#mouseevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[mouseleave](axes_lines._internal_.SVGElementEventMap.md#mouseleave)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5592

___

### mousemove

• **mousemove**: [`MouseEvent`](../modules/axes_lines._internal_.md#mouseevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[mousemove](axes_lines._internal_.SVGElementEventMap.md#mousemove)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5593

___

### mouseout

• **mouseout**: [`MouseEvent`](../modules/axes_lines._internal_.md#mouseevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[mouseout](axes_lines._internal_.SVGElementEventMap.md#mouseout)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5594

___

### mouseover

• **mouseover**: [`MouseEvent`](../modules/axes_lines._internal_.md#mouseevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[mouseover](axes_lines._internal_.SVGElementEventMap.md#mouseover)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5595

___

### mouseup

• **mouseup**: [`MouseEvent`](../modules/axes_lines._internal_.md#mouseevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[mouseup](axes_lines._internal_.SVGElementEventMap.md#mouseup)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5596

___

### offline

• **offline**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[WindowEventHandlersEventMap](axes_lines._internal_.WindowEventHandlersEventMap.md).[offline](axes_lines._internal_.WindowEventHandlersEventMap.md#offline)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16754

___

### online

• **online**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[WindowEventHandlersEventMap](axes_lines._internal_.WindowEventHandlersEventMap.md).[online](axes_lines._internal_.WindowEventHandlersEventMap.md#online)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16755

___

### pagehide

• **pagehide**: [`PageTransitionEvent`](../modules/axes_lines._internal_.md#pagetransitionevent)

#### Inherited from

[WindowEventHandlersEventMap](axes_lines._internal_.WindowEventHandlersEventMap.md).[pagehide](axes_lines._internal_.WindowEventHandlersEventMap.md#pagehide)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16756

___

### pageshow

• **pageshow**: [`PageTransitionEvent`](../modules/axes_lines._internal_.md#pagetransitionevent)

#### Inherited from

[WindowEventHandlersEventMap](axes_lines._internal_.WindowEventHandlersEventMap.md).[pageshow](axes_lines._internal_.WindowEventHandlersEventMap.md#pageshow)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16757

___

### paste

• **paste**: [`ClipboardEvent`](../modules/axes_lines._internal_.md#clipboardevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[paste](axes_lines._internal_.SVGElementEventMap.md#paste)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4704

___

### pause

• **pause**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[pause](axes_lines._internal_.SVGElementEventMap.md#pause)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5597

___

### play

• **play**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[play](axes_lines._internal_.SVGElementEventMap.md#play)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5598

___

### playing

• **playing**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[playing](axes_lines._internal_.SVGElementEventMap.md#playing)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5599

___

### pointercancel

• **pointercancel**: [`PointerEvent`](../modules/axes_lines._internal_.md#pointerevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[pointercancel](axes_lines._internal_.SVGElementEventMap.md#pointercancel)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5600

___

### pointerdown

• **pointerdown**: [`PointerEvent`](../modules/axes_lines._internal_.md#pointerevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[pointerdown](axes_lines._internal_.SVGElementEventMap.md#pointerdown)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5601

___

### pointerenter

• **pointerenter**: [`PointerEvent`](../modules/axes_lines._internal_.md#pointerevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[pointerenter](axes_lines._internal_.SVGElementEventMap.md#pointerenter)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5602

___

### pointerleave

• **pointerleave**: [`PointerEvent`](../modules/axes_lines._internal_.md#pointerevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[pointerleave](axes_lines._internal_.SVGElementEventMap.md#pointerleave)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5603

___

### pointermove

• **pointermove**: [`PointerEvent`](../modules/axes_lines._internal_.md#pointerevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[pointermove](axes_lines._internal_.SVGElementEventMap.md#pointermove)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5604

___

### pointerout

• **pointerout**: [`PointerEvent`](../modules/axes_lines._internal_.md#pointerevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[pointerout](axes_lines._internal_.SVGElementEventMap.md#pointerout)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5605

___

### pointerover

• **pointerover**: [`PointerEvent`](../modules/axes_lines._internal_.md#pointerevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[pointerover](axes_lines._internal_.SVGElementEventMap.md#pointerover)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5606

___

### pointerup

• **pointerup**: [`PointerEvent`](../modules/axes_lines._internal_.md#pointerevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[pointerup](axes_lines._internal_.SVGElementEventMap.md#pointerup)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5607

___

### popstate

• **popstate**: [`PopStateEvent`](../modules/axes_lines._internal_.md#popstateevent)

#### Inherited from

[WindowEventHandlersEventMap](axes_lines._internal_.WindowEventHandlersEventMap.md).[popstate](axes_lines._internal_.WindowEventHandlersEventMap.md#popstate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16758

___

### progress

• **progress**: [`ProgressEvent`](../modules/axes_lines._internal_.md#progressevent)<[`EventTarget`](../modules/axes_lines._internal_.md#eventtarget)\>

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[progress](axes_lines._internal_.SVGElementEventMap.md#progress)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5608

___

### ratechange

• **ratechange**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[ratechange](axes_lines._internal_.SVGElementEventMap.md#ratechange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5609

___

### rejectionhandled

• **rejectionhandled**: [`PromiseRejectionEvent`](../modules/axes_lines._internal_.md#promiserejectionevent)

#### Inherited from

[WindowEventHandlersEventMap](axes_lines._internal_.WindowEventHandlersEventMap.md).[rejectionhandled](axes_lines._internal_.WindowEventHandlersEventMap.md#rejectionhandled)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16759

___

### reset

• **reset**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[reset](axes_lines._internal_.SVGElementEventMap.md#reset)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5610

___

### resize

• **resize**: [`UIEvent`](../modules/axes_lines._internal_.md#uievent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[resize](axes_lines._internal_.SVGElementEventMap.md#resize)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5611

___

### scroll

• **scroll**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[scroll](axes_lines._internal_.SVGElementEventMap.md#scroll)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5612

___

### securitypolicyviolation

• **securitypolicyviolation**: [`SecurityPolicyViolationEvent`](../modules/axes_lines._internal_.md#securitypolicyviolationevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[securitypolicyviolation](axes_lines._internal_.SVGElementEventMap.md#securitypolicyviolation)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5613

___

### seeked

• **seeked**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[seeked](axes_lines._internal_.SVGElementEventMap.md#seeked)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5614

___

### seeking

• **seeking**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[seeking](axes_lines._internal_.SVGElementEventMap.md#seeking)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5615

___

### select

• **select**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[select](axes_lines._internal_.SVGElementEventMap.md#select)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5616

___

### selectionchange

• **selectionchange**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[selectionchange](axes_lines._internal_.SVGElementEventMap.md#selectionchange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5617

___

### selectstart

• **selectstart**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[selectstart](axes_lines._internal_.SVGElementEventMap.md#selectstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5618

___

### slotchange

• **slotchange**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[slotchange](axes_lines._internal_.SVGElementEventMap.md#slotchange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5619

___

### stalled

• **stalled**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[stalled](axes_lines._internal_.SVGElementEventMap.md#stalled)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5620

___

### storage

• **storage**: [`StorageEvent`](../modules/axes_lines._internal_.md#storageevent)

#### Inherited from

[WindowEventHandlersEventMap](axes_lines._internal_.WindowEventHandlersEventMap.md).[storage](axes_lines._internal_.WindowEventHandlersEventMap.md#storage)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16760

___

### submit

• **submit**: [`SubmitEvent`](../modules/axes_lines._internal_.md#submitevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[submit](axes_lines._internal_.SVGElementEventMap.md#submit)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5621

___

### suspend

• **suspend**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[suspend](axes_lines._internal_.SVGElementEventMap.md#suspend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5622

___

### timeupdate

• **timeupdate**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[timeupdate](axes_lines._internal_.SVGElementEventMap.md#timeupdate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5623

___

### toggle

• **toggle**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[toggle](axes_lines._internal_.SVGElementEventMap.md#toggle)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5624

___

### touchcancel

• **touchcancel**: [`TouchEvent`](../modules/axes_lines._internal_.md#touchevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[touchcancel](axes_lines._internal_.SVGElementEventMap.md#touchcancel)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5625

___

### touchend

• **touchend**: [`TouchEvent`](../modules/axes_lines._internal_.md#touchevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[touchend](axes_lines._internal_.SVGElementEventMap.md#touchend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5626

___

### touchmove

• **touchmove**: [`TouchEvent`](../modules/axes_lines._internal_.md#touchevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[touchmove](axes_lines._internal_.SVGElementEventMap.md#touchmove)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5627

___

### touchstart

• **touchstart**: [`TouchEvent`](../modules/axes_lines._internal_.md#touchevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[touchstart](axes_lines._internal_.SVGElementEventMap.md#touchstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5628

___

### transitioncancel

• **transitioncancel**: [`TransitionEvent`](../modules/axes_lines._internal_.md#transitionevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[transitioncancel](axes_lines._internal_.SVGElementEventMap.md#transitioncancel)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5629

___

### transitionend

• **transitionend**: [`TransitionEvent`](../modules/axes_lines._internal_.md#transitionevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[transitionend](axes_lines._internal_.SVGElementEventMap.md#transitionend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5630

___

### transitionrun

• **transitionrun**: [`TransitionEvent`](../modules/axes_lines._internal_.md#transitionevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[transitionrun](axes_lines._internal_.SVGElementEventMap.md#transitionrun)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5631

___

### transitionstart

• **transitionstart**: [`TransitionEvent`](../modules/axes_lines._internal_.md#transitionevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[transitionstart](axes_lines._internal_.SVGElementEventMap.md#transitionstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5632

___

### unhandledrejection

• **unhandledrejection**: [`PromiseRejectionEvent`](../modules/axes_lines._internal_.md#promiserejectionevent)

#### Inherited from

[WindowEventHandlersEventMap](axes_lines._internal_.WindowEventHandlersEventMap.md).[unhandledrejection](axes_lines._internal_.WindowEventHandlersEventMap.md#unhandledrejection)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16761

___

### unload

• **unload**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[WindowEventHandlersEventMap](axes_lines._internal_.WindowEventHandlersEventMap.md).[unload](axes_lines._internal_.WindowEventHandlersEventMap.md#unload)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16762

___

### volumechange

• **volumechange**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[volumechange](axes_lines._internal_.SVGElementEventMap.md#volumechange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5633

___

### waiting

• **waiting**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[waiting](axes_lines._internal_.SVGElementEventMap.md#waiting)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5634

___

### webkitanimationend

• **webkitanimationend**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[webkitanimationend](axes_lines._internal_.SVGElementEventMap.md#webkitanimationend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5635

___

### webkitanimationiteration

• **webkitanimationiteration**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[webkitanimationiteration](axes_lines._internal_.SVGElementEventMap.md#webkitanimationiteration)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5636

___

### webkitanimationstart

• **webkitanimationstart**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[webkitanimationstart](axes_lines._internal_.SVGElementEventMap.md#webkitanimationstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5637

___

### webkittransitionend

• **webkittransitionend**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[webkittransitionend](axes_lines._internal_.SVGElementEventMap.md#webkittransitionend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5638

___

### wheel

• **wheel**: [`WheelEvent`](../modules/axes_lines._internal_.md#wheelevent)

#### Inherited from

[SVGElementEventMap](axes_lines._internal_.SVGElementEventMap.md).[wheel](axes_lines._internal_.SVGElementEventMap.md#wheel)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5639
