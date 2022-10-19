[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / DocumentEventMap

# Interface: DocumentEventMap

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).DocumentEventMap

## Hierarchy

- [`DocumentAndElementEventHandlersEventMap`](main_module._internal_.DocumentAndElementEventHandlersEventMap.md)

- [`GlobalEventHandlersEventMap`](main_module._internal_.GlobalEventHandlersEventMap.md)

  ↳ **`DocumentEventMap`**

## Table of contents

### Properties

- [DOMContentLoaded](main_module._internal_.DocumentEventMap.md#domcontentloaded)
- [abort](main_module._internal_.DocumentEventMap.md#abort)
- [animationcancel](main_module._internal_.DocumentEventMap.md#animationcancel)
- [animationend](main_module._internal_.DocumentEventMap.md#animationend)
- [animationiteration](main_module._internal_.DocumentEventMap.md#animationiteration)
- [animationstart](main_module._internal_.DocumentEventMap.md#animationstart)
- [auxclick](main_module._internal_.DocumentEventMap.md#auxclick)
- [beforeinput](main_module._internal_.DocumentEventMap.md#beforeinput)
- [blur](main_module._internal_.DocumentEventMap.md#blur)
- [canplay](main_module._internal_.DocumentEventMap.md#canplay)
- [canplaythrough](main_module._internal_.DocumentEventMap.md#canplaythrough)
- [change](main_module._internal_.DocumentEventMap.md#change)
- [click](main_module._internal_.DocumentEventMap.md#click)
- [close](main_module._internal_.DocumentEventMap.md#close)
- [compositionend](main_module._internal_.DocumentEventMap.md#compositionend)
- [compositionstart](main_module._internal_.DocumentEventMap.md#compositionstart)
- [compositionupdate](main_module._internal_.DocumentEventMap.md#compositionupdate)
- [contextmenu](main_module._internal_.DocumentEventMap.md#contextmenu)
- [copy](main_module._internal_.DocumentEventMap.md#copy)
- [cuechange](main_module._internal_.DocumentEventMap.md#cuechange)
- [cut](main_module._internal_.DocumentEventMap.md#cut)
- [dblclick](main_module._internal_.DocumentEventMap.md#dblclick)
- [drag](main_module._internal_.DocumentEventMap.md#drag)
- [dragend](main_module._internal_.DocumentEventMap.md#dragend)
- [dragenter](main_module._internal_.DocumentEventMap.md#dragenter)
- [dragleave](main_module._internal_.DocumentEventMap.md#dragleave)
- [dragover](main_module._internal_.DocumentEventMap.md#dragover)
- [dragstart](main_module._internal_.DocumentEventMap.md#dragstart)
- [drop](main_module._internal_.DocumentEventMap.md#drop)
- [durationchange](main_module._internal_.DocumentEventMap.md#durationchange)
- [emptied](main_module._internal_.DocumentEventMap.md#emptied)
- [ended](main_module._internal_.DocumentEventMap.md#ended)
- [error](main_module._internal_.DocumentEventMap.md#error)
- [focus](main_module._internal_.DocumentEventMap.md#focus)
- [focusin](main_module._internal_.DocumentEventMap.md#focusin)
- [focusout](main_module._internal_.DocumentEventMap.md#focusout)
- [formdata](main_module._internal_.DocumentEventMap.md#formdata)
- [fullscreenchange](main_module._internal_.DocumentEventMap.md#fullscreenchange)
- [fullscreenerror](main_module._internal_.DocumentEventMap.md#fullscreenerror)
- [gotpointercapture](main_module._internal_.DocumentEventMap.md#gotpointercapture)
- [input](main_module._internal_.DocumentEventMap.md#input)
- [invalid](main_module._internal_.DocumentEventMap.md#invalid)
- [keydown](main_module._internal_.DocumentEventMap.md#keydown)
- [keypress](main_module._internal_.DocumentEventMap.md#keypress)
- [keyup](main_module._internal_.DocumentEventMap.md#keyup)
- [load](main_module._internal_.DocumentEventMap.md#load)
- [loadeddata](main_module._internal_.DocumentEventMap.md#loadeddata)
- [loadedmetadata](main_module._internal_.DocumentEventMap.md#loadedmetadata)
- [loadstart](main_module._internal_.DocumentEventMap.md#loadstart)
- [lostpointercapture](main_module._internal_.DocumentEventMap.md#lostpointercapture)
- [mousedown](main_module._internal_.DocumentEventMap.md#mousedown)
- [mouseenter](main_module._internal_.DocumentEventMap.md#mouseenter)
- [mouseleave](main_module._internal_.DocumentEventMap.md#mouseleave)
- [mousemove](main_module._internal_.DocumentEventMap.md#mousemove)
- [mouseout](main_module._internal_.DocumentEventMap.md#mouseout)
- [mouseover](main_module._internal_.DocumentEventMap.md#mouseover)
- [mouseup](main_module._internal_.DocumentEventMap.md#mouseup)
- [paste](main_module._internal_.DocumentEventMap.md#paste)
- [pause](main_module._internal_.DocumentEventMap.md#pause)
- [play](main_module._internal_.DocumentEventMap.md#play)
- [playing](main_module._internal_.DocumentEventMap.md#playing)
- [pointercancel](main_module._internal_.DocumentEventMap.md#pointercancel)
- [pointerdown](main_module._internal_.DocumentEventMap.md#pointerdown)
- [pointerenter](main_module._internal_.DocumentEventMap.md#pointerenter)
- [pointerleave](main_module._internal_.DocumentEventMap.md#pointerleave)
- [pointerlockchange](main_module._internal_.DocumentEventMap.md#pointerlockchange)
- [pointerlockerror](main_module._internal_.DocumentEventMap.md#pointerlockerror)
- [pointermove](main_module._internal_.DocumentEventMap.md#pointermove)
- [pointerout](main_module._internal_.DocumentEventMap.md#pointerout)
- [pointerover](main_module._internal_.DocumentEventMap.md#pointerover)
- [pointerup](main_module._internal_.DocumentEventMap.md#pointerup)
- [progress](main_module._internal_.DocumentEventMap.md#progress)
- [ratechange](main_module._internal_.DocumentEventMap.md#ratechange)
- [readystatechange](main_module._internal_.DocumentEventMap.md#readystatechange)
- [reset](main_module._internal_.DocumentEventMap.md#reset)
- [resize](main_module._internal_.DocumentEventMap.md#resize)
- [scroll](main_module._internal_.DocumentEventMap.md#scroll)
- [securitypolicyviolation](main_module._internal_.DocumentEventMap.md#securitypolicyviolation)
- [seeked](main_module._internal_.DocumentEventMap.md#seeked)
- [seeking](main_module._internal_.DocumentEventMap.md#seeking)
- [select](main_module._internal_.DocumentEventMap.md#select)
- [selectionchange](main_module._internal_.DocumentEventMap.md#selectionchange)
- [selectstart](main_module._internal_.DocumentEventMap.md#selectstart)
- [slotchange](main_module._internal_.DocumentEventMap.md#slotchange)
- [stalled](main_module._internal_.DocumentEventMap.md#stalled)
- [submit](main_module._internal_.DocumentEventMap.md#submit)
- [suspend](main_module._internal_.DocumentEventMap.md#suspend)
- [timeupdate](main_module._internal_.DocumentEventMap.md#timeupdate)
- [toggle](main_module._internal_.DocumentEventMap.md#toggle)
- [touchcancel](main_module._internal_.DocumentEventMap.md#touchcancel)
- [touchend](main_module._internal_.DocumentEventMap.md#touchend)
- [touchmove](main_module._internal_.DocumentEventMap.md#touchmove)
- [touchstart](main_module._internal_.DocumentEventMap.md#touchstart)
- [transitioncancel](main_module._internal_.DocumentEventMap.md#transitioncancel)
- [transitionend](main_module._internal_.DocumentEventMap.md#transitionend)
- [transitionrun](main_module._internal_.DocumentEventMap.md#transitionrun)
- [transitionstart](main_module._internal_.DocumentEventMap.md#transitionstart)
- [visibilitychange](main_module._internal_.DocumentEventMap.md#visibilitychange)
- [volumechange](main_module._internal_.DocumentEventMap.md#volumechange)
- [waiting](main_module._internal_.DocumentEventMap.md#waiting)
- [webkitanimationend](main_module._internal_.DocumentEventMap.md#webkitanimationend)
- [webkitanimationiteration](main_module._internal_.DocumentEventMap.md#webkitanimationiteration)
- [webkitanimationstart](main_module._internal_.DocumentEventMap.md#webkitanimationstart)
- [webkittransitionend](main_module._internal_.DocumentEventMap.md#webkittransitionend)
- [wheel](main_module._internal_.DocumentEventMap.md#wheel)

## Properties

### DOMContentLoaded

• **DOMContentLoaded**: [`Event`](../modules/main_module._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4296

___

### abort

• **abort**: [`UIEvent`](../modules/main_module._internal_.md#uievent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[abort](main_module._internal_.GlobalEventHandlersEventMap.md#abort)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5545

___

### animationcancel

• **animationcancel**: [`AnimationEvent`](../modules/main_module._internal_.md#animationevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[animationcancel](main_module._internal_.GlobalEventHandlersEventMap.md#animationcancel)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5546

___

### animationend

• **animationend**: [`AnimationEvent`](../modules/main_module._internal_.md#animationevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[animationend](main_module._internal_.GlobalEventHandlersEventMap.md#animationend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5547

___

### animationiteration

• **animationiteration**: [`AnimationEvent`](../modules/main_module._internal_.md#animationevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[animationiteration](main_module._internal_.GlobalEventHandlersEventMap.md#animationiteration)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5548

___

### animationstart

• **animationstart**: [`AnimationEvent`](../modules/main_module._internal_.md#animationevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[animationstart](main_module._internal_.GlobalEventHandlersEventMap.md#animationstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5549

___

### auxclick

• **auxclick**: [`MouseEvent`](../modules/main_module._internal_.md#mouseevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[auxclick](main_module._internal_.GlobalEventHandlersEventMap.md#auxclick)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5550

___

### beforeinput

• **beforeinput**: [`InputEvent`](../modules/main_module._internal_.md#inputevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[beforeinput](main_module._internal_.GlobalEventHandlersEventMap.md#beforeinput)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5551

___

### blur

• **blur**: [`FocusEvent`](../modules/main_module._internal_.md#focusevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[blur](main_module._internal_.GlobalEventHandlersEventMap.md#blur)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5552

___

### canplay

• **canplay**: [`Event`](../modules/main_module._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[canplay](main_module._internal_.GlobalEventHandlersEventMap.md#canplay)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5553

___

### canplaythrough

• **canplaythrough**: [`Event`](../modules/main_module._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[canplaythrough](main_module._internal_.GlobalEventHandlersEventMap.md#canplaythrough)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5554

___

### change

• **change**: [`Event`](../modules/main_module._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[change](main_module._internal_.GlobalEventHandlersEventMap.md#change)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5555

___

### click

• **click**: [`MouseEvent`](../modules/main_module._internal_.md#mouseevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[click](main_module._internal_.GlobalEventHandlersEventMap.md#click)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5556

___

### close

• **close**: [`Event`](../modules/main_module._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[close](main_module._internal_.GlobalEventHandlersEventMap.md#close)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5557

___

### compositionend

• **compositionend**: [`CompositionEvent`](../modules/main_module._internal_.md#compositionevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[compositionend](main_module._internal_.GlobalEventHandlersEventMap.md#compositionend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5558

___

### compositionstart

• **compositionstart**: [`CompositionEvent`](../modules/main_module._internal_.md#compositionevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[compositionstart](main_module._internal_.GlobalEventHandlersEventMap.md#compositionstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5559

___

### compositionupdate

• **compositionupdate**: [`CompositionEvent`](../modules/main_module._internal_.md#compositionevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[compositionupdate](main_module._internal_.GlobalEventHandlersEventMap.md#compositionupdate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5560

___

### contextmenu

• **contextmenu**: [`MouseEvent`](../modules/main_module._internal_.md#mouseevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[contextmenu](main_module._internal_.GlobalEventHandlersEventMap.md#contextmenu)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5561

___

### copy

• **copy**: [`ClipboardEvent`](../modules/main_module._internal_.md#clipboardevent)

#### Inherited from

[DocumentAndElementEventHandlersEventMap](main_module._internal_.DocumentAndElementEventHandlersEventMap.md).[copy](main_module._internal_.DocumentAndElementEventHandlersEventMap.md#copy)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4702

___

### cuechange

• **cuechange**: [`Event`](../modules/main_module._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[cuechange](main_module._internal_.GlobalEventHandlersEventMap.md#cuechange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5562

___

### cut

• **cut**: [`ClipboardEvent`](../modules/main_module._internal_.md#clipboardevent)

#### Inherited from

[DocumentAndElementEventHandlersEventMap](main_module._internal_.DocumentAndElementEventHandlersEventMap.md).[cut](main_module._internal_.DocumentAndElementEventHandlersEventMap.md#cut)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4703

___

### dblclick

• **dblclick**: [`MouseEvent`](../modules/main_module._internal_.md#mouseevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[dblclick](main_module._internal_.GlobalEventHandlersEventMap.md#dblclick)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5563

___

### drag

• **drag**: [`DragEvent`](../modules/main_module._internal_.md#dragevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[drag](main_module._internal_.GlobalEventHandlersEventMap.md#drag)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5564

___

### dragend

• **dragend**: [`DragEvent`](../modules/main_module._internal_.md#dragevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[dragend](main_module._internal_.GlobalEventHandlersEventMap.md#dragend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5565

___

### dragenter

• **dragenter**: [`DragEvent`](../modules/main_module._internal_.md#dragevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[dragenter](main_module._internal_.GlobalEventHandlersEventMap.md#dragenter)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5566

___

### dragleave

• **dragleave**: [`DragEvent`](../modules/main_module._internal_.md#dragevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[dragleave](main_module._internal_.GlobalEventHandlersEventMap.md#dragleave)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5567

___

### dragover

• **dragover**: [`DragEvent`](../modules/main_module._internal_.md#dragevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[dragover](main_module._internal_.GlobalEventHandlersEventMap.md#dragover)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5568

___

### dragstart

• **dragstart**: [`DragEvent`](../modules/main_module._internal_.md#dragevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[dragstart](main_module._internal_.GlobalEventHandlersEventMap.md#dragstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5569

___

### drop

• **drop**: [`DragEvent`](../modules/main_module._internal_.md#dragevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[drop](main_module._internal_.GlobalEventHandlersEventMap.md#drop)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5570

___

### durationchange

• **durationchange**: [`Event`](../modules/main_module._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[durationchange](main_module._internal_.GlobalEventHandlersEventMap.md#durationchange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5571

___

### emptied

• **emptied**: [`Event`](../modules/main_module._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[emptied](main_module._internal_.GlobalEventHandlersEventMap.md#emptied)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5572

___

### ended

• **ended**: [`Event`](../modules/main_module._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[ended](main_module._internal_.GlobalEventHandlersEventMap.md#ended)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5573

___

### error

• **error**: [`ErrorEvent`](../modules/main_module._internal_.md#errorevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[error](main_module._internal_.GlobalEventHandlersEventMap.md#error)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5574

___

### focus

• **focus**: [`FocusEvent`](../modules/main_module._internal_.md#focusevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[focus](main_module._internal_.GlobalEventHandlersEventMap.md#focus)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5575

___

### focusin

• **focusin**: [`FocusEvent`](../modules/main_module._internal_.md#focusevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[focusin](main_module._internal_.GlobalEventHandlersEventMap.md#focusin)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5576

___

### focusout

• **focusout**: [`FocusEvent`](../modules/main_module._internal_.md#focusevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[focusout](main_module._internal_.GlobalEventHandlersEventMap.md#focusout)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5577

___

### formdata

• **formdata**: [`FormDataEvent`](../modules/main_module._internal_.md#formdataevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[formdata](main_module._internal_.GlobalEventHandlersEventMap.md#formdata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5578

___

### fullscreenchange

• **fullscreenchange**: [`Event`](../modules/main_module._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4297

___

### fullscreenerror

• **fullscreenerror**: [`Event`](../modules/main_module._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4298

___

### gotpointercapture

• **gotpointercapture**: [`PointerEvent`](../modules/main_module._internal_.md#pointerevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[gotpointercapture](main_module._internal_.GlobalEventHandlersEventMap.md#gotpointercapture)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5579

___

### input

• **input**: [`Event`](../modules/main_module._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[input](main_module._internal_.GlobalEventHandlersEventMap.md#input)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5580

___

### invalid

• **invalid**: [`Event`](../modules/main_module._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[invalid](main_module._internal_.GlobalEventHandlersEventMap.md#invalid)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5581

___

### keydown

• **keydown**: [`KeyboardEvent`](../modules/main_module._internal_.md#keyboardevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[keydown](main_module._internal_.GlobalEventHandlersEventMap.md#keydown)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5582

___

### keypress

• **keypress**: [`KeyboardEvent`](../modules/main_module._internal_.md#keyboardevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[keypress](main_module._internal_.GlobalEventHandlersEventMap.md#keypress)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5583

___

### keyup

• **keyup**: [`KeyboardEvent`](../modules/main_module._internal_.md#keyboardevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[keyup](main_module._internal_.GlobalEventHandlersEventMap.md#keyup)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5584

___

### load

• **load**: [`Event`](../modules/main_module._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[load](main_module._internal_.GlobalEventHandlersEventMap.md#load)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5585

___

### loadeddata

• **loadeddata**: [`Event`](../modules/main_module._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[loadeddata](main_module._internal_.GlobalEventHandlersEventMap.md#loadeddata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5586

___

### loadedmetadata

• **loadedmetadata**: [`Event`](../modules/main_module._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[loadedmetadata](main_module._internal_.GlobalEventHandlersEventMap.md#loadedmetadata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5587

___

### loadstart

• **loadstart**: [`Event`](../modules/main_module._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[loadstart](main_module._internal_.GlobalEventHandlersEventMap.md#loadstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5588

___

### lostpointercapture

• **lostpointercapture**: [`PointerEvent`](../modules/main_module._internal_.md#pointerevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[lostpointercapture](main_module._internal_.GlobalEventHandlersEventMap.md#lostpointercapture)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5589

___

### mousedown

• **mousedown**: [`MouseEvent`](../modules/main_module._internal_.md#mouseevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[mousedown](main_module._internal_.GlobalEventHandlersEventMap.md#mousedown)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5590

___

### mouseenter

• **mouseenter**: [`MouseEvent`](../modules/main_module._internal_.md#mouseevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[mouseenter](main_module._internal_.GlobalEventHandlersEventMap.md#mouseenter)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5591

___

### mouseleave

• **mouseleave**: [`MouseEvent`](../modules/main_module._internal_.md#mouseevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[mouseleave](main_module._internal_.GlobalEventHandlersEventMap.md#mouseleave)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5592

___

### mousemove

• **mousemove**: [`MouseEvent`](../modules/main_module._internal_.md#mouseevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[mousemove](main_module._internal_.GlobalEventHandlersEventMap.md#mousemove)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5593

___

### mouseout

• **mouseout**: [`MouseEvent`](../modules/main_module._internal_.md#mouseevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[mouseout](main_module._internal_.GlobalEventHandlersEventMap.md#mouseout)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5594

___

### mouseover

• **mouseover**: [`MouseEvent`](../modules/main_module._internal_.md#mouseevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[mouseover](main_module._internal_.GlobalEventHandlersEventMap.md#mouseover)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5595

___

### mouseup

• **mouseup**: [`MouseEvent`](../modules/main_module._internal_.md#mouseevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[mouseup](main_module._internal_.GlobalEventHandlersEventMap.md#mouseup)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5596

___

### paste

• **paste**: [`ClipboardEvent`](../modules/main_module._internal_.md#clipboardevent)

#### Inherited from

[DocumentAndElementEventHandlersEventMap](main_module._internal_.DocumentAndElementEventHandlersEventMap.md).[paste](main_module._internal_.DocumentAndElementEventHandlersEventMap.md#paste)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4704

___

### pause

• **pause**: [`Event`](../modules/main_module._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[pause](main_module._internal_.GlobalEventHandlersEventMap.md#pause)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5597

___

### play

• **play**: [`Event`](../modules/main_module._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[play](main_module._internal_.GlobalEventHandlersEventMap.md#play)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5598

___

### playing

• **playing**: [`Event`](../modules/main_module._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[playing](main_module._internal_.GlobalEventHandlersEventMap.md#playing)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5599

___

### pointercancel

• **pointercancel**: [`PointerEvent`](../modules/main_module._internal_.md#pointerevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[pointercancel](main_module._internal_.GlobalEventHandlersEventMap.md#pointercancel)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5600

___

### pointerdown

• **pointerdown**: [`PointerEvent`](../modules/main_module._internal_.md#pointerevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[pointerdown](main_module._internal_.GlobalEventHandlersEventMap.md#pointerdown)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5601

___

### pointerenter

• **pointerenter**: [`PointerEvent`](../modules/main_module._internal_.md#pointerevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[pointerenter](main_module._internal_.GlobalEventHandlersEventMap.md#pointerenter)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5602

___

### pointerleave

• **pointerleave**: [`PointerEvent`](../modules/main_module._internal_.md#pointerevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[pointerleave](main_module._internal_.GlobalEventHandlersEventMap.md#pointerleave)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5603

___

### pointerlockchange

• **pointerlockchange**: [`Event`](../modules/main_module._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4299

___

### pointerlockerror

• **pointerlockerror**: [`Event`](../modules/main_module._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4300

___

### pointermove

• **pointermove**: [`PointerEvent`](../modules/main_module._internal_.md#pointerevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[pointermove](main_module._internal_.GlobalEventHandlersEventMap.md#pointermove)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5604

___

### pointerout

• **pointerout**: [`PointerEvent`](../modules/main_module._internal_.md#pointerevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[pointerout](main_module._internal_.GlobalEventHandlersEventMap.md#pointerout)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5605

___

### pointerover

• **pointerover**: [`PointerEvent`](../modules/main_module._internal_.md#pointerevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[pointerover](main_module._internal_.GlobalEventHandlersEventMap.md#pointerover)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5606

___

### pointerup

• **pointerup**: [`PointerEvent`](../modules/main_module._internal_.md#pointerevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[pointerup](main_module._internal_.GlobalEventHandlersEventMap.md#pointerup)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5607

___

### progress

• **progress**: [`ProgressEvent`](../modules/main_module._internal_.md#progressevent)<[`EventTarget`](../modules/main_module._internal_.md#eventtarget)\>

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[progress](main_module._internal_.GlobalEventHandlersEventMap.md#progress)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5608

___

### ratechange

• **ratechange**: [`Event`](../modules/main_module._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[ratechange](main_module._internal_.GlobalEventHandlersEventMap.md#ratechange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5609

___

### readystatechange

• **readystatechange**: [`Event`](../modules/main_module._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4301

___

### reset

• **reset**: [`Event`](../modules/main_module._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[reset](main_module._internal_.GlobalEventHandlersEventMap.md#reset)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5610

___

### resize

• **resize**: [`UIEvent`](../modules/main_module._internal_.md#uievent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[resize](main_module._internal_.GlobalEventHandlersEventMap.md#resize)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5611

___

### scroll

• **scroll**: [`Event`](../modules/main_module._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[scroll](main_module._internal_.GlobalEventHandlersEventMap.md#scroll)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5612

___

### securitypolicyviolation

• **securitypolicyviolation**: [`SecurityPolicyViolationEvent`](../modules/main_module._internal_.md#securitypolicyviolationevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[securitypolicyviolation](main_module._internal_.GlobalEventHandlersEventMap.md#securitypolicyviolation)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5613

___

### seeked

• **seeked**: [`Event`](../modules/main_module._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[seeked](main_module._internal_.GlobalEventHandlersEventMap.md#seeked)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5614

___

### seeking

• **seeking**: [`Event`](../modules/main_module._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[seeking](main_module._internal_.GlobalEventHandlersEventMap.md#seeking)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5615

___

### select

• **select**: [`Event`](../modules/main_module._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[select](main_module._internal_.GlobalEventHandlersEventMap.md#select)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5616

___

### selectionchange

• **selectionchange**: [`Event`](../modules/main_module._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[selectionchange](main_module._internal_.GlobalEventHandlersEventMap.md#selectionchange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5617

___

### selectstart

• **selectstart**: [`Event`](../modules/main_module._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[selectstart](main_module._internal_.GlobalEventHandlersEventMap.md#selectstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5618

___

### slotchange

• **slotchange**: [`Event`](../modules/main_module._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[slotchange](main_module._internal_.GlobalEventHandlersEventMap.md#slotchange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5619

___

### stalled

• **stalled**: [`Event`](../modules/main_module._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[stalled](main_module._internal_.GlobalEventHandlersEventMap.md#stalled)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5620

___

### submit

• **submit**: [`SubmitEvent`](../modules/main_module._internal_.md#submitevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[submit](main_module._internal_.GlobalEventHandlersEventMap.md#submit)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5621

___

### suspend

• **suspend**: [`Event`](../modules/main_module._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[suspend](main_module._internal_.GlobalEventHandlersEventMap.md#suspend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5622

___

### timeupdate

• **timeupdate**: [`Event`](../modules/main_module._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[timeupdate](main_module._internal_.GlobalEventHandlersEventMap.md#timeupdate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5623

___

### toggle

• **toggle**: [`Event`](../modules/main_module._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[toggle](main_module._internal_.GlobalEventHandlersEventMap.md#toggle)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5624

___

### touchcancel

• **touchcancel**: [`TouchEvent`](../modules/main_module._internal_.md#touchevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[touchcancel](main_module._internal_.GlobalEventHandlersEventMap.md#touchcancel)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5625

___

### touchend

• **touchend**: [`TouchEvent`](../modules/main_module._internal_.md#touchevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[touchend](main_module._internal_.GlobalEventHandlersEventMap.md#touchend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5626

___

### touchmove

• **touchmove**: [`TouchEvent`](../modules/main_module._internal_.md#touchevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[touchmove](main_module._internal_.GlobalEventHandlersEventMap.md#touchmove)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5627

___

### touchstart

• **touchstart**: [`TouchEvent`](../modules/main_module._internal_.md#touchevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[touchstart](main_module._internal_.GlobalEventHandlersEventMap.md#touchstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5628

___

### transitioncancel

• **transitioncancel**: [`TransitionEvent`](../modules/main_module._internal_.md#transitionevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[transitioncancel](main_module._internal_.GlobalEventHandlersEventMap.md#transitioncancel)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5629

___

### transitionend

• **transitionend**: [`TransitionEvent`](../modules/main_module._internal_.md#transitionevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[transitionend](main_module._internal_.GlobalEventHandlersEventMap.md#transitionend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5630

___

### transitionrun

• **transitionrun**: [`TransitionEvent`](../modules/main_module._internal_.md#transitionevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[transitionrun](main_module._internal_.GlobalEventHandlersEventMap.md#transitionrun)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5631

___

### transitionstart

• **transitionstart**: [`TransitionEvent`](../modules/main_module._internal_.md#transitionevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[transitionstart](main_module._internal_.GlobalEventHandlersEventMap.md#transitionstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5632

___

### visibilitychange

• **visibilitychange**: [`Event`](../modules/main_module._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4302

___

### volumechange

• **volumechange**: [`Event`](../modules/main_module._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[volumechange](main_module._internal_.GlobalEventHandlersEventMap.md#volumechange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5633

___

### waiting

• **waiting**: [`Event`](../modules/main_module._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[waiting](main_module._internal_.GlobalEventHandlersEventMap.md#waiting)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5634

___

### webkitanimationend

• **webkitanimationend**: [`Event`](../modules/main_module._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[webkitanimationend](main_module._internal_.GlobalEventHandlersEventMap.md#webkitanimationend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5635

___

### webkitanimationiteration

• **webkitanimationiteration**: [`Event`](../modules/main_module._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[webkitanimationiteration](main_module._internal_.GlobalEventHandlersEventMap.md#webkitanimationiteration)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5636

___

### webkitanimationstart

• **webkitanimationstart**: [`Event`](../modules/main_module._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[webkitanimationstart](main_module._internal_.GlobalEventHandlersEventMap.md#webkitanimationstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5637

___

### webkittransitionend

• **webkittransitionend**: [`Event`](../modules/main_module._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[webkittransitionend](main_module._internal_.GlobalEventHandlersEventMap.md#webkittransitionend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5638

___

### wheel

• **wheel**: [`WheelEvent`](../modules/main_module._internal_.md#wheelevent)

#### Inherited from

[GlobalEventHandlersEventMap](main_module._internal_.GlobalEventHandlersEventMap.md).[wheel](main_module._internal_.GlobalEventHandlersEventMap.md#wheel)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5639
