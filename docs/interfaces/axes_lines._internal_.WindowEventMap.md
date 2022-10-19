[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / WindowEventMap

# Interface: WindowEventMap

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).WindowEventMap

## Hierarchy

- [`GlobalEventHandlersEventMap`](axes_lines._internal_.GlobalEventHandlersEventMap.md)

- [`WindowEventHandlersEventMap`](axes_lines._internal_.WindowEventHandlersEventMap.md)

  ↳ **`WindowEventMap`**

## Table of contents

### Properties

- [DOMContentLoaded](axes_lines._internal_.WindowEventMap.md#domcontentloaded)
- [abort](axes_lines._internal_.WindowEventMap.md#abort)
- [afterprint](axes_lines._internal_.WindowEventMap.md#afterprint)
- [animationcancel](axes_lines._internal_.WindowEventMap.md#animationcancel)
- [animationend](axes_lines._internal_.WindowEventMap.md#animationend)
- [animationiteration](axes_lines._internal_.WindowEventMap.md#animationiteration)
- [animationstart](axes_lines._internal_.WindowEventMap.md#animationstart)
- [auxclick](axes_lines._internal_.WindowEventMap.md#auxclick)
- [beforeinput](axes_lines._internal_.WindowEventMap.md#beforeinput)
- [beforeprint](axes_lines._internal_.WindowEventMap.md#beforeprint)
- [beforeunload](axes_lines._internal_.WindowEventMap.md#beforeunload)
- [blur](axes_lines._internal_.WindowEventMap.md#blur)
- [canplay](axes_lines._internal_.WindowEventMap.md#canplay)
- [canplaythrough](axes_lines._internal_.WindowEventMap.md#canplaythrough)
- [change](axes_lines._internal_.WindowEventMap.md#change)
- [click](axes_lines._internal_.WindowEventMap.md#click)
- [close](axes_lines._internal_.WindowEventMap.md#close)
- [compositionend](axes_lines._internal_.WindowEventMap.md#compositionend)
- [compositionstart](axes_lines._internal_.WindowEventMap.md#compositionstart)
- [compositionupdate](axes_lines._internal_.WindowEventMap.md#compositionupdate)
- [contextmenu](axes_lines._internal_.WindowEventMap.md#contextmenu)
- [cuechange](axes_lines._internal_.WindowEventMap.md#cuechange)
- [dblclick](axes_lines._internal_.WindowEventMap.md#dblclick)
- [devicemotion](axes_lines._internal_.WindowEventMap.md#devicemotion)
- [deviceorientation](axes_lines._internal_.WindowEventMap.md#deviceorientation)
- [drag](axes_lines._internal_.WindowEventMap.md#drag)
- [dragend](axes_lines._internal_.WindowEventMap.md#dragend)
- [dragenter](axes_lines._internal_.WindowEventMap.md#dragenter)
- [dragleave](axes_lines._internal_.WindowEventMap.md#dragleave)
- [dragover](axes_lines._internal_.WindowEventMap.md#dragover)
- [dragstart](axes_lines._internal_.WindowEventMap.md#dragstart)
- [drop](axes_lines._internal_.WindowEventMap.md#drop)
- [durationchange](axes_lines._internal_.WindowEventMap.md#durationchange)
- [emptied](axes_lines._internal_.WindowEventMap.md#emptied)
- [ended](axes_lines._internal_.WindowEventMap.md#ended)
- [error](axes_lines._internal_.WindowEventMap.md#error)
- [focus](axes_lines._internal_.WindowEventMap.md#focus)
- [focusin](axes_lines._internal_.WindowEventMap.md#focusin)
- [focusout](axes_lines._internal_.WindowEventMap.md#focusout)
- [formdata](axes_lines._internal_.WindowEventMap.md#formdata)
- [gamepadconnected](axes_lines._internal_.WindowEventMap.md#gamepadconnected)
- [gamepaddisconnected](axes_lines._internal_.WindowEventMap.md#gamepaddisconnected)
- [gotpointercapture](axes_lines._internal_.WindowEventMap.md#gotpointercapture)
- [hashchange](axes_lines._internal_.WindowEventMap.md#hashchange)
- [input](axes_lines._internal_.WindowEventMap.md#input)
- [invalid](axes_lines._internal_.WindowEventMap.md#invalid)
- [keydown](axes_lines._internal_.WindowEventMap.md#keydown)
- [keypress](axes_lines._internal_.WindowEventMap.md#keypress)
- [keyup](axes_lines._internal_.WindowEventMap.md#keyup)
- [languagechange](axes_lines._internal_.WindowEventMap.md#languagechange)
- [load](axes_lines._internal_.WindowEventMap.md#load)
- [loadeddata](axes_lines._internal_.WindowEventMap.md#loadeddata)
- [loadedmetadata](axes_lines._internal_.WindowEventMap.md#loadedmetadata)
- [loadstart](axes_lines._internal_.WindowEventMap.md#loadstart)
- [lostpointercapture](axes_lines._internal_.WindowEventMap.md#lostpointercapture)
- [message](axes_lines._internal_.WindowEventMap.md#message)
- [messageerror](axes_lines._internal_.WindowEventMap.md#messageerror)
- [mousedown](axes_lines._internal_.WindowEventMap.md#mousedown)
- [mouseenter](axes_lines._internal_.WindowEventMap.md#mouseenter)
- [mouseleave](axes_lines._internal_.WindowEventMap.md#mouseleave)
- [mousemove](axes_lines._internal_.WindowEventMap.md#mousemove)
- [mouseout](axes_lines._internal_.WindowEventMap.md#mouseout)
- [mouseover](axes_lines._internal_.WindowEventMap.md#mouseover)
- [mouseup](axes_lines._internal_.WindowEventMap.md#mouseup)
- [offline](axes_lines._internal_.WindowEventMap.md#offline)
- [online](axes_lines._internal_.WindowEventMap.md#online)
- [orientationchange](axes_lines._internal_.WindowEventMap.md#orientationchange)
- [pagehide](axes_lines._internal_.WindowEventMap.md#pagehide)
- [pageshow](axes_lines._internal_.WindowEventMap.md#pageshow)
- [pause](axes_lines._internal_.WindowEventMap.md#pause)
- [play](axes_lines._internal_.WindowEventMap.md#play)
- [playing](axes_lines._internal_.WindowEventMap.md#playing)
- [pointercancel](axes_lines._internal_.WindowEventMap.md#pointercancel)
- [pointerdown](axes_lines._internal_.WindowEventMap.md#pointerdown)
- [pointerenter](axes_lines._internal_.WindowEventMap.md#pointerenter)
- [pointerleave](axes_lines._internal_.WindowEventMap.md#pointerleave)
- [pointermove](axes_lines._internal_.WindowEventMap.md#pointermove)
- [pointerout](axes_lines._internal_.WindowEventMap.md#pointerout)
- [pointerover](axes_lines._internal_.WindowEventMap.md#pointerover)
- [pointerup](axes_lines._internal_.WindowEventMap.md#pointerup)
- [popstate](axes_lines._internal_.WindowEventMap.md#popstate)
- [progress](axes_lines._internal_.WindowEventMap.md#progress)
- [ratechange](axes_lines._internal_.WindowEventMap.md#ratechange)
- [rejectionhandled](axes_lines._internal_.WindowEventMap.md#rejectionhandled)
- [reset](axes_lines._internal_.WindowEventMap.md#reset)
- [resize](axes_lines._internal_.WindowEventMap.md#resize)
- [scroll](axes_lines._internal_.WindowEventMap.md#scroll)
- [securitypolicyviolation](axes_lines._internal_.WindowEventMap.md#securitypolicyviolation)
- [seeked](axes_lines._internal_.WindowEventMap.md#seeked)
- [seeking](axes_lines._internal_.WindowEventMap.md#seeking)
- [select](axes_lines._internal_.WindowEventMap.md#select)
- [selectionchange](axes_lines._internal_.WindowEventMap.md#selectionchange)
- [selectstart](axes_lines._internal_.WindowEventMap.md#selectstart)
- [slotchange](axes_lines._internal_.WindowEventMap.md#slotchange)
- [stalled](axes_lines._internal_.WindowEventMap.md#stalled)
- [storage](axes_lines._internal_.WindowEventMap.md#storage)
- [submit](axes_lines._internal_.WindowEventMap.md#submit)
- [suspend](axes_lines._internal_.WindowEventMap.md#suspend)
- [timeupdate](axes_lines._internal_.WindowEventMap.md#timeupdate)
- [toggle](axes_lines._internal_.WindowEventMap.md#toggle)
- [touchcancel](axes_lines._internal_.WindowEventMap.md#touchcancel)
- [touchend](axes_lines._internal_.WindowEventMap.md#touchend)
- [touchmove](axes_lines._internal_.WindowEventMap.md#touchmove)
- [touchstart](axes_lines._internal_.WindowEventMap.md#touchstart)
- [transitioncancel](axes_lines._internal_.WindowEventMap.md#transitioncancel)
- [transitionend](axes_lines._internal_.WindowEventMap.md#transitionend)
- [transitionrun](axes_lines._internal_.WindowEventMap.md#transitionrun)
- [transitionstart](axes_lines._internal_.WindowEventMap.md#transitionstart)
- [unhandledrejection](axes_lines._internal_.WindowEventMap.md#unhandledrejection)
- [unload](axes_lines._internal_.WindowEventMap.md#unload)
- [volumechange](axes_lines._internal_.WindowEventMap.md#volumechange)
- [waiting](axes_lines._internal_.WindowEventMap.md#waiting)
- [webkitanimationend](axes_lines._internal_.WindowEventMap.md#webkitanimationend)
- [webkitanimationiteration](axes_lines._internal_.WindowEventMap.md#webkitanimationiteration)
- [webkitanimationstart](axes_lines._internal_.WindowEventMap.md#webkitanimationstart)
- [webkittransitionend](axes_lines._internal_.WindowEventMap.md#webkittransitionend)
- [wheel](axes_lines._internal_.WindowEventMap.md#wheel)

## Properties

### DOMContentLoaded

• **DOMContentLoaded**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16609

___

### abort

• **abort**: [`UIEvent`](../modules/axes_lines._internal_.md#uievent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[abort](axes_lines._internal_.GlobalEventHandlersEventMap.md#abort)

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

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[animationcancel](axes_lines._internal_.GlobalEventHandlersEventMap.md#animationcancel)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5546

___

### animationend

• **animationend**: [`AnimationEvent`](../modules/axes_lines._internal_.md#animationevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[animationend](axes_lines._internal_.GlobalEventHandlersEventMap.md#animationend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5547

___

### animationiteration

• **animationiteration**: [`AnimationEvent`](../modules/axes_lines._internal_.md#animationevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[animationiteration](axes_lines._internal_.GlobalEventHandlersEventMap.md#animationiteration)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5548

___

### animationstart

• **animationstart**: [`AnimationEvent`](../modules/axes_lines._internal_.md#animationevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[animationstart](axes_lines._internal_.GlobalEventHandlersEventMap.md#animationstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5549

___

### auxclick

• **auxclick**: [`MouseEvent`](../modules/axes_lines._internal_.md#mouseevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[auxclick](axes_lines._internal_.GlobalEventHandlersEventMap.md#auxclick)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5550

___

### beforeinput

• **beforeinput**: [`InputEvent`](../modules/axes_lines._internal_.md#inputevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[beforeinput](axes_lines._internal_.GlobalEventHandlersEventMap.md#beforeinput)

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

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[blur](axes_lines._internal_.GlobalEventHandlersEventMap.md#blur)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5552

___

### canplay

• **canplay**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[canplay](axes_lines._internal_.GlobalEventHandlersEventMap.md#canplay)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5553

___

### canplaythrough

• **canplaythrough**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[canplaythrough](axes_lines._internal_.GlobalEventHandlersEventMap.md#canplaythrough)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5554

___

### change

• **change**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[change](axes_lines._internal_.GlobalEventHandlersEventMap.md#change)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5555

___

### click

• **click**: [`MouseEvent`](../modules/axes_lines._internal_.md#mouseevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[click](axes_lines._internal_.GlobalEventHandlersEventMap.md#click)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5556

___

### close

• **close**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[close](axes_lines._internal_.GlobalEventHandlersEventMap.md#close)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5557

___

### compositionend

• **compositionend**: [`CompositionEvent`](../modules/axes_lines._internal_.md#compositionevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[compositionend](axes_lines._internal_.GlobalEventHandlersEventMap.md#compositionend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5558

___

### compositionstart

• **compositionstart**: [`CompositionEvent`](../modules/axes_lines._internal_.md#compositionevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[compositionstart](axes_lines._internal_.GlobalEventHandlersEventMap.md#compositionstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5559

___

### compositionupdate

• **compositionupdate**: [`CompositionEvent`](../modules/axes_lines._internal_.md#compositionevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[compositionupdate](axes_lines._internal_.GlobalEventHandlersEventMap.md#compositionupdate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5560

___

### contextmenu

• **contextmenu**: [`MouseEvent`](../modules/axes_lines._internal_.md#mouseevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[contextmenu](axes_lines._internal_.GlobalEventHandlersEventMap.md#contextmenu)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5561

___

### cuechange

• **cuechange**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[cuechange](axes_lines._internal_.GlobalEventHandlersEventMap.md#cuechange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5562

___

### dblclick

• **dblclick**: [`MouseEvent`](../modules/axes_lines._internal_.md#mouseevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[dblclick](axes_lines._internal_.GlobalEventHandlersEventMap.md#dblclick)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5563

___

### devicemotion

• **devicemotion**: [`DeviceMotionEvent`](../modules/axes_lines._internal_.md#devicemotionevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16610

___

### deviceorientation

• **deviceorientation**: [`DeviceOrientationEvent`](../modules/axes_lines._internal_.md#deviceorientationevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16611

___

### drag

• **drag**: [`DragEvent`](../modules/axes_lines._internal_.md#dragevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[drag](axes_lines._internal_.GlobalEventHandlersEventMap.md#drag)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5564

___

### dragend

• **dragend**: [`DragEvent`](../modules/axes_lines._internal_.md#dragevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[dragend](axes_lines._internal_.GlobalEventHandlersEventMap.md#dragend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5565

___

### dragenter

• **dragenter**: [`DragEvent`](../modules/axes_lines._internal_.md#dragevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[dragenter](axes_lines._internal_.GlobalEventHandlersEventMap.md#dragenter)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5566

___

### dragleave

• **dragleave**: [`DragEvent`](../modules/axes_lines._internal_.md#dragevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[dragleave](axes_lines._internal_.GlobalEventHandlersEventMap.md#dragleave)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5567

___

### dragover

• **dragover**: [`DragEvent`](../modules/axes_lines._internal_.md#dragevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[dragover](axes_lines._internal_.GlobalEventHandlersEventMap.md#dragover)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5568

___

### dragstart

• **dragstart**: [`DragEvent`](../modules/axes_lines._internal_.md#dragevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[dragstart](axes_lines._internal_.GlobalEventHandlersEventMap.md#dragstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5569

___

### drop

• **drop**: [`DragEvent`](../modules/axes_lines._internal_.md#dragevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[drop](axes_lines._internal_.GlobalEventHandlersEventMap.md#drop)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5570

___

### durationchange

• **durationchange**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[durationchange](axes_lines._internal_.GlobalEventHandlersEventMap.md#durationchange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5571

___

### emptied

• **emptied**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[emptied](axes_lines._internal_.GlobalEventHandlersEventMap.md#emptied)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5572

___

### ended

• **ended**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[ended](axes_lines._internal_.GlobalEventHandlersEventMap.md#ended)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5573

___

### error

• **error**: [`ErrorEvent`](../modules/axes_lines._internal_.md#errorevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[error](axes_lines._internal_.GlobalEventHandlersEventMap.md#error)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5574

___

### focus

• **focus**: [`FocusEvent`](../modules/axes_lines._internal_.md#focusevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[focus](axes_lines._internal_.GlobalEventHandlersEventMap.md#focus)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5575

___

### focusin

• **focusin**: [`FocusEvent`](../modules/axes_lines._internal_.md#focusevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[focusin](axes_lines._internal_.GlobalEventHandlersEventMap.md#focusin)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5576

___

### focusout

• **focusout**: [`FocusEvent`](../modules/axes_lines._internal_.md#focusevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[focusout](axes_lines._internal_.GlobalEventHandlersEventMap.md#focusout)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5577

___

### formdata

• **formdata**: [`FormDataEvent`](../modules/axes_lines._internal_.md#formdataevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[formdata](axes_lines._internal_.GlobalEventHandlersEventMap.md#formdata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5578

___

### gamepadconnected

• **gamepadconnected**: [`GamepadEvent`](../modules/axes_lines._internal_.md#gamepadevent)

#### Overrides

[WindowEventHandlersEventMap](axes_lines._internal_.WindowEventHandlersEventMap.md).[gamepadconnected](axes_lines._internal_.WindowEventHandlersEventMap.md#gamepadconnected)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16612

___

### gamepaddisconnected

• **gamepaddisconnected**: [`GamepadEvent`](../modules/axes_lines._internal_.md#gamepadevent)

#### Overrides

[WindowEventHandlersEventMap](axes_lines._internal_.WindowEventHandlersEventMap.md).[gamepaddisconnected](axes_lines._internal_.WindowEventHandlersEventMap.md#gamepaddisconnected)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16613

___

### gotpointercapture

• **gotpointercapture**: [`PointerEvent`](../modules/axes_lines._internal_.md#pointerevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[gotpointercapture](axes_lines._internal_.GlobalEventHandlersEventMap.md#gotpointercapture)

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

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[input](axes_lines._internal_.GlobalEventHandlersEventMap.md#input)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5580

___

### invalid

• **invalid**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[invalid](axes_lines._internal_.GlobalEventHandlersEventMap.md#invalid)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5581

___

### keydown

• **keydown**: [`KeyboardEvent`](../modules/axes_lines._internal_.md#keyboardevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[keydown](axes_lines._internal_.GlobalEventHandlersEventMap.md#keydown)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5582

___

### keypress

• **keypress**: [`KeyboardEvent`](../modules/axes_lines._internal_.md#keyboardevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[keypress](axes_lines._internal_.GlobalEventHandlersEventMap.md#keypress)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5583

___

### keyup

• **keyup**: [`KeyboardEvent`](../modules/axes_lines._internal_.md#keyboardevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[keyup](axes_lines._internal_.GlobalEventHandlersEventMap.md#keyup)

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

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[load](axes_lines._internal_.GlobalEventHandlersEventMap.md#load)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5585

___

### loadeddata

• **loadeddata**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[loadeddata](axes_lines._internal_.GlobalEventHandlersEventMap.md#loadeddata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5586

___

### loadedmetadata

• **loadedmetadata**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[loadedmetadata](axes_lines._internal_.GlobalEventHandlersEventMap.md#loadedmetadata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5587

___

### loadstart

• **loadstart**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[loadstart](axes_lines._internal_.GlobalEventHandlersEventMap.md#loadstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5588

___

### lostpointercapture

• **lostpointercapture**: [`PointerEvent`](../modules/axes_lines._internal_.md#pointerevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[lostpointercapture](axes_lines._internal_.GlobalEventHandlersEventMap.md#lostpointercapture)

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

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[mousedown](axes_lines._internal_.GlobalEventHandlersEventMap.md#mousedown)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5590

___

### mouseenter

• **mouseenter**: [`MouseEvent`](../modules/axes_lines._internal_.md#mouseevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[mouseenter](axes_lines._internal_.GlobalEventHandlersEventMap.md#mouseenter)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5591

___

### mouseleave

• **mouseleave**: [`MouseEvent`](../modules/axes_lines._internal_.md#mouseevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[mouseleave](axes_lines._internal_.GlobalEventHandlersEventMap.md#mouseleave)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5592

___

### mousemove

• **mousemove**: [`MouseEvent`](../modules/axes_lines._internal_.md#mouseevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[mousemove](axes_lines._internal_.GlobalEventHandlersEventMap.md#mousemove)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5593

___

### mouseout

• **mouseout**: [`MouseEvent`](../modules/axes_lines._internal_.md#mouseevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[mouseout](axes_lines._internal_.GlobalEventHandlersEventMap.md#mouseout)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5594

___

### mouseover

• **mouseover**: [`MouseEvent`](../modules/axes_lines._internal_.md#mouseevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[mouseover](axes_lines._internal_.GlobalEventHandlersEventMap.md#mouseover)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5595

___

### mouseup

• **mouseup**: [`MouseEvent`](../modules/axes_lines._internal_.md#mouseevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[mouseup](axes_lines._internal_.GlobalEventHandlersEventMap.md#mouseup)

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

### orientationchange

• **orientationchange**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16614

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

### pause

• **pause**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[pause](axes_lines._internal_.GlobalEventHandlersEventMap.md#pause)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5597

___

### play

• **play**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[play](axes_lines._internal_.GlobalEventHandlersEventMap.md#play)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5598

___

### playing

• **playing**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[playing](axes_lines._internal_.GlobalEventHandlersEventMap.md#playing)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5599

___

### pointercancel

• **pointercancel**: [`PointerEvent`](../modules/axes_lines._internal_.md#pointerevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[pointercancel](axes_lines._internal_.GlobalEventHandlersEventMap.md#pointercancel)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5600

___

### pointerdown

• **pointerdown**: [`PointerEvent`](../modules/axes_lines._internal_.md#pointerevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[pointerdown](axes_lines._internal_.GlobalEventHandlersEventMap.md#pointerdown)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5601

___

### pointerenter

• **pointerenter**: [`PointerEvent`](../modules/axes_lines._internal_.md#pointerevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[pointerenter](axes_lines._internal_.GlobalEventHandlersEventMap.md#pointerenter)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5602

___

### pointerleave

• **pointerleave**: [`PointerEvent`](../modules/axes_lines._internal_.md#pointerevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[pointerleave](axes_lines._internal_.GlobalEventHandlersEventMap.md#pointerleave)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5603

___

### pointermove

• **pointermove**: [`PointerEvent`](../modules/axes_lines._internal_.md#pointerevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[pointermove](axes_lines._internal_.GlobalEventHandlersEventMap.md#pointermove)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5604

___

### pointerout

• **pointerout**: [`PointerEvent`](../modules/axes_lines._internal_.md#pointerevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[pointerout](axes_lines._internal_.GlobalEventHandlersEventMap.md#pointerout)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5605

___

### pointerover

• **pointerover**: [`PointerEvent`](../modules/axes_lines._internal_.md#pointerevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[pointerover](axes_lines._internal_.GlobalEventHandlersEventMap.md#pointerover)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5606

___

### pointerup

• **pointerup**: [`PointerEvent`](../modules/axes_lines._internal_.md#pointerevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[pointerup](axes_lines._internal_.GlobalEventHandlersEventMap.md#pointerup)

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

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[progress](axes_lines._internal_.GlobalEventHandlersEventMap.md#progress)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5608

___

### ratechange

• **ratechange**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[ratechange](axes_lines._internal_.GlobalEventHandlersEventMap.md#ratechange)

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

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[reset](axes_lines._internal_.GlobalEventHandlersEventMap.md#reset)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5610

___

### resize

• **resize**: [`UIEvent`](../modules/axes_lines._internal_.md#uievent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[resize](axes_lines._internal_.GlobalEventHandlersEventMap.md#resize)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5611

___

### scroll

• **scroll**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[scroll](axes_lines._internal_.GlobalEventHandlersEventMap.md#scroll)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5612

___

### securitypolicyviolation

• **securitypolicyviolation**: [`SecurityPolicyViolationEvent`](../modules/axes_lines._internal_.md#securitypolicyviolationevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[securitypolicyviolation](axes_lines._internal_.GlobalEventHandlersEventMap.md#securitypolicyviolation)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5613

___

### seeked

• **seeked**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[seeked](axes_lines._internal_.GlobalEventHandlersEventMap.md#seeked)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5614

___

### seeking

• **seeking**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[seeking](axes_lines._internal_.GlobalEventHandlersEventMap.md#seeking)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5615

___

### select

• **select**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[select](axes_lines._internal_.GlobalEventHandlersEventMap.md#select)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5616

___

### selectionchange

• **selectionchange**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[selectionchange](axes_lines._internal_.GlobalEventHandlersEventMap.md#selectionchange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5617

___

### selectstart

• **selectstart**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[selectstart](axes_lines._internal_.GlobalEventHandlersEventMap.md#selectstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5618

___

### slotchange

• **slotchange**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[slotchange](axes_lines._internal_.GlobalEventHandlersEventMap.md#slotchange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5619

___

### stalled

• **stalled**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[stalled](axes_lines._internal_.GlobalEventHandlersEventMap.md#stalled)

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

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[submit](axes_lines._internal_.GlobalEventHandlersEventMap.md#submit)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5621

___

### suspend

• **suspend**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[suspend](axes_lines._internal_.GlobalEventHandlersEventMap.md#suspend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5622

___

### timeupdate

• **timeupdate**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[timeupdate](axes_lines._internal_.GlobalEventHandlersEventMap.md#timeupdate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5623

___

### toggle

• **toggle**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[toggle](axes_lines._internal_.GlobalEventHandlersEventMap.md#toggle)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5624

___

### touchcancel

• **touchcancel**: [`TouchEvent`](../modules/axes_lines._internal_.md#touchevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[touchcancel](axes_lines._internal_.GlobalEventHandlersEventMap.md#touchcancel)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5625

___

### touchend

• **touchend**: [`TouchEvent`](../modules/axes_lines._internal_.md#touchevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[touchend](axes_lines._internal_.GlobalEventHandlersEventMap.md#touchend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5626

___

### touchmove

• **touchmove**: [`TouchEvent`](../modules/axes_lines._internal_.md#touchevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[touchmove](axes_lines._internal_.GlobalEventHandlersEventMap.md#touchmove)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5627

___

### touchstart

• **touchstart**: [`TouchEvent`](../modules/axes_lines._internal_.md#touchevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[touchstart](axes_lines._internal_.GlobalEventHandlersEventMap.md#touchstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5628

___

### transitioncancel

• **transitioncancel**: [`TransitionEvent`](../modules/axes_lines._internal_.md#transitionevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[transitioncancel](axes_lines._internal_.GlobalEventHandlersEventMap.md#transitioncancel)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5629

___

### transitionend

• **transitionend**: [`TransitionEvent`](../modules/axes_lines._internal_.md#transitionevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[transitionend](axes_lines._internal_.GlobalEventHandlersEventMap.md#transitionend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5630

___

### transitionrun

• **transitionrun**: [`TransitionEvent`](../modules/axes_lines._internal_.md#transitionevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[transitionrun](axes_lines._internal_.GlobalEventHandlersEventMap.md#transitionrun)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5631

___

### transitionstart

• **transitionstart**: [`TransitionEvent`](../modules/axes_lines._internal_.md#transitionevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[transitionstart](axes_lines._internal_.GlobalEventHandlersEventMap.md#transitionstart)

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

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[volumechange](axes_lines._internal_.GlobalEventHandlersEventMap.md#volumechange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5633

___

### waiting

• **waiting**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[waiting](axes_lines._internal_.GlobalEventHandlersEventMap.md#waiting)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5634

___

### webkitanimationend

• **webkitanimationend**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[webkitanimationend](axes_lines._internal_.GlobalEventHandlersEventMap.md#webkitanimationend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5635

___

### webkitanimationiteration

• **webkitanimationiteration**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[webkitanimationiteration](axes_lines._internal_.GlobalEventHandlersEventMap.md#webkitanimationiteration)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5636

___

### webkitanimationstart

• **webkitanimationstart**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[webkitanimationstart](axes_lines._internal_.GlobalEventHandlersEventMap.md#webkitanimationstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5637

___

### webkittransitionend

• **webkittransitionend**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[webkittransitionend](axes_lines._internal_.GlobalEventHandlersEventMap.md#webkittransitionend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5638

___

### wheel

• **wheel**: [`WheelEvent`](../modules/axes_lines._internal_.md#wheelevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[wheel](axes_lines._internal_.GlobalEventHandlersEventMap.md#wheel)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5639
