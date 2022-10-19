[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / DocumentEventMap

# Interface: DocumentEventMap

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).DocumentEventMap

## Hierarchy

- [`DocumentAndElementEventHandlersEventMap`](axes_lines._internal_.DocumentAndElementEventHandlersEventMap.md)

- [`GlobalEventHandlersEventMap`](axes_lines._internal_.GlobalEventHandlersEventMap.md)

  ↳ **`DocumentEventMap`**

## Table of contents

### Properties

- [DOMContentLoaded](axes_lines._internal_.DocumentEventMap.md#domcontentloaded)
- [abort](axes_lines._internal_.DocumentEventMap.md#abort)
- [animationcancel](axes_lines._internal_.DocumentEventMap.md#animationcancel)
- [animationend](axes_lines._internal_.DocumentEventMap.md#animationend)
- [animationiteration](axes_lines._internal_.DocumentEventMap.md#animationiteration)
- [animationstart](axes_lines._internal_.DocumentEventMap.md#animationstart)
- [auxclick](axes_lines._internal_.DocumentEventMap.md#auxclick)
- [beforeinput](axes_lines._internal_.DocumentEventMap.md#beforeinput)
- [blur](axes_lines._internal_.DocumentEventMap.md#blur)
- [canplay](axes_lines._internal_.DocumentEventMap.md#canplay)
- [canplaythrough](axes_lines._internal_.DocumentEventMap.md#canplaythrough)
- [change](axes_lines._internal_.DocumentEventMap.md#change)
- [click](axes_lines._internal_.DocumentEventMap.md#click)
- [close](axes_lines._internal_.DocumentEventMap.md#close)
- [compositionend](axes_lines._internal_.DocumentEventMap.md#compositionend)
- [compositionstart](axes_lines._internal_.DocumentEventMap.md#compositionstart)
- [compositionupdate](axes_lines._internal_.DocumentEventMap.md#compositionupdate)
- [contextmenu](axes_lines._internal_.DocumentEventMap.md#contextmenu)
- [copy](axes_lines._internal_.DocumentEventMap.md#copy)
- [cuechange](axes_lines._internal_.DocumentEventMap.md#cuechange)
- [cut](axes_lines._internal_.DocumentEventMap.md#cut)
- [dblclick](axes_lines._internal_.DocumentEventMap.md#dblclick)
- [drag](axes_lines._internal_.DocumentEventMap.md#drag)
- [dragend](axes_lines._internal_.DocumentEventMap.md#dragend)
- [dragenter](axes_lines._internal_.DocumentEventMap.md#dragenter)
- [dragleave](axes_lines._internal_.DocumentEventMap.md#dragleave)
- [dragover](axes_lines._internal_.DocumentEventMap.md#dragover)
- [dragstart](axes_lines._internal_.DocumentEventMap.md#dragstart)
- [drop](axes_lines._internal_.DocumentEventMap.md#drop)
- [durationchange](axes_lines._internal_.DocumentEventMap.md#durationchange)
- [emptied](axes_lines._internal_.DocumentEventMap.md#emptied)
- [ended](axes_lines._internal_.DocumentEventMap.md#ended)
- [error](axes_lines._internal_.DocumentEventMap.md#error)
- [focus](axes_lines._internal_.DocumentEventMap.md#focus)
- [focusin](axes_lines._internal_.DocumentEventMap.md#focusin)
- [focusout](axes_lines._internal_.DocumentEventMap.md#focusout)
- [formdata](axes_lines._internal_.DocumentEventMap.md#formdata)
- [fullscreenchange](axes_lines._internal_.DocumentEventMap.md#fullscreenchange)
- [fullscreenerror](axes_lines._internal_.DocumentEventMap.md#fullscreenerror)
- [gotpointercapture](axes_lines._internal_.DocumentEventMap.md#gotpointercapture)
- [input](axes_lines._internal_.DocumentEventMap.md#input)
- [invalid](axes_lines._internal_.DocumentEventMap.md#invalid)
- [keydown](axes_lines._internal_.DocumentEventMap.md#keydown)
- [keypress](axes_lines._internal_.DocumentEventMap.md#keypress)
- [keyup](axes_lines._internal_.DocumentEventMap.md#keyup)
- [load](axes_lines._internal_.DocumentEventMap.md#load)
- [loadeddata](axes_lines._internal_.DocumentEventMap.md#loadeddata)
- [loadedmetadata](axes_lines._internal_.DocumentEventMap.md#loadedmetadata)
- [loadstart](axes_lines._internal_.DocumentEventMap.md#loadstart)
- [lostpointercapture](axes_lines._internal_.DocumentEventMap.md#lostpointercapture)
- [mousedown](axes_lines._internal_.DocumentEventMap.md#mousedown)
- [mouseenter](axes_lines._internal_.DocumentEventMap.md#mouseenter)
- [mouseleave](axes_lines._internal_.DocumentEventMap.md#mouseleave)
- [mousemove](axes_lines._internal_.DocumentEventMap.md#mousemove)
- [mouseout](axes_lines._internal_.DocumentEventMap.md#mouseout)
- [mouseover](axes_lines._internal_.DocumentEventMap.md#mouseover)
- [mouseup](axes_lines._internal_.DocumentEventMap.md#mouseup)
- [paste](axes_lines._internal_.DocumentEventMap.md#paste)
- [pause](axes_lines._internal_.DocumentEventMap.md#pause)
- [play](axes_lines._internal_.DocumentEventMap.md#play)
- [playing](axes_lines._internal_.DocumentEventMap.md#playing)
- [pointercancel](axes_lines._internal_.DocumentEventMap.md#pointercancel)
- [pointerdown](axes_lines._internal_.DocumentEventMap.md#pointerdown)
- [pointerenter](axes_lines._internal_.DocumentEventMap.md#pointerenter)
- [pointerleave](axes_lines._internal_.DocumentEventMap.md#pointerleave)
- [pointerlockchange](axes_lines._internal_.DocumentEventMap.md#pointerlockchange)
- [pointerlockerror](axes_lines._internal_.DocumentEventMap.md#pointerlockerror)
- [pointermove](axes_lines._internal_.DocumentEventMap.md#pointermove)
- [pointerout](axes_lines._internal_.DocumentEventMap.md#pointerout)
- [pointerover](axes_lines._internal_.DocumentEventMap.md#pointerover)
- [pointerup](axes_lines._internal_.DocumentEventMap.md#pointerup)
- [progress](axes_lines._internal_.DocumentEventMap.md#progress)
- [ratechange](axes_lines._internal_.DocumentEventMap.md#ratechange)
- [readystatechange](axes_lines._internal_.DocumentEventMap.md#readystatechange)
- [reset](axes_lines._internal_.DocumentEventMap.md#reset)
- [resize](axes_lines._internal_.DocumentEventMap.md#resize)
- [scroll](axes_lines._internal_.DocumentEventMap.md#scroll)
- [securitypolicyviolation](axes_lines._internal_.DocumentEventMap.md#securitypolicyviolation)
- [seeked](axes_lines._internal_.DocumentEventMap.md#seeked)
- [seeking](axes_lines._internal_.DocumentEventMap.md#seeking)
- [select](axes_lines._internal_.DocumentEventMap.md#select)
- [selectionchange](axes_lines._internal_.DocumentEventMap.md#selectionchange)
- [selectstart](axes_lines._internal_.DocumentEventMap.md#selectstart)
- [slotchange](axes_lines._internal_.DocumentEventMap.md#slotchange)
- [stalled](axes_lines._internal_.DocumentEventMap.md#stalled)
- [submit](axes_lines._internal_.DocumentEventMap.md#submit)
- [suspend](axes_lines._internal_.DocumentEventMap.md#suspend)
- [timeupdate](axes_lines._internal_.DocumentEventMap.md#timeupdate)
- [toggle](axes_lines._internal_.DocumentEventMap.md#toggle)
- [touchcancel](axes_lines._internal_.DocumentEventMap.md#touchcancel)
- [touchend](axes_lines._internal_.DocumentEventMap.md#touchend)
- [touchmove](axes_lines._internal_.DocumentEventMap.md#touchmove)
- [touchstart](axes_lines._internal_.DocumentEventMap.md#touchstart)
- [transitioncancel](axes_lines._internal_.DocumentEventMap.md#transitioncancel)
- [transitionend](axes_lines._internal_.DocumentEventMap.md#transitionend)
- [transitionrun](axes_lines._internal_.DocumentEventMap.md#transitionrun)
- [transitionstart](axes_lines._internal_.DocumentEventMap.md#transitionstart)
- [visibilitychange](axes_lines._internal_.DocumentEventMap.md#visibilitychange)
- [volumechange](axes_lines._internal_.DocumentEventMap.md#volumechange)
- [waiting](axes_lines._internal_.DocumentEventMap.md#waiting)
- [webkitanimationend](axes_lines._internal_.DocumentEventMap.md#webkitanimationend)
- [webkitanimationiteration](axes_lines._internal_.DocumentEventMap.md#webkitanimationiteration)
- [webkitanimationstart](axes_lines._internal_.DocumentEventMap.md#webkitanimationstart)
- [webkittransitionend](axes_lines._internal_.DocumentEventMap.md#webkittransitionend)
- [wheel](axes_lines._internal_.DocumentEventMap.md#wheel)

## Properties

### DOMContentLoaded

• **DOMContentLoaded**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4296

___

### abort

• **abort**: [`UIEvent`](../modules/axes_lines._internal_.md#uievent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[abort](axes_lines._internal_.GlobalEventHandlersEventMap.md#abort)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5545

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

### copy

• **copy**: [`ClipboardEvent`](../modules/axes_lines._internal_.md#clipboardevent)

#### Inherited from

[DocumentAndElementEventHandlersEventMap](axes_lines._internal_.DocumentAndElementEventHandlersEventMap.md).[copy](axes_lines._internal_.DocumentAndElementEventHandlersEventMap.md#copy)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4702

___

### cuechange

• **cuechange**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[cuechange](axes_lines._internal_.GlobalEventHandlersEventMap.md#cuechange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5562

___

### cut

• **cut**: [`ClipboardEvent`](../modules/axes_lines._internal_.md#clipboardevent)

#### Inherited from

[DocumentAndElementEventHandlersEventMap](axes_lines._internal_.DocumentAndElementEventHandlersEventMap.md).[cut](axes_lines._internal_.DocumentAndElementEventHandlersEventMap.md#cut)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4703

___

### dblclick

• **dblclick**: [`MouseEvent`](../modules/axes_lines._internal_.md#mouseevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[dblclick](axes_lines._internal_.GlobalEventHandlersEventMap.md#dblclick)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5563

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

### fullscreenchange

• **fullscreenchange**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4297

___

### fullscreenerror

• **fullscreenerror**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4298

___

### gotpointercapture

• **gotpointercapture**: [`PointerEvent`](../modules/axes_lines._internal_.md#pointerevent)

#### Inherited from

[GlobalEventHandlersEventMap](axes_lines._internal_.GlobalEventHandlersEventMap.md).[gotpointercapture](axes_lines._internal_.GlobalEventHandlersEventMap.md#gotpointercapture)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5579

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

### paste

• **paste**: [`ClipboardEvent`](../modules/axes_lines._internal_.md#clipboardevent)

#### Inherited from

[DocumentAndElementEventHandlersEventMap](axes_lines._internal_.DocumentAndElementEventHandlersEventMap.md).[paste](axes_lines._internal_.DocumentAndElementEventHandlersEventMap.md#paste)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4704

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

### pointerlockchange

• **pointerlockchange**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4299

___

### pointerlockerror

• **pointerlockerror**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4300

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

### readystatechange

• **readystatechange**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4301

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

### visibilitychange

• **visibilitychange**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4302

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
