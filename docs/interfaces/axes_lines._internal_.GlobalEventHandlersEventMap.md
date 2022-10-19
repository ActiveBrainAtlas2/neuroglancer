[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / GlobalEventHandlersEventMap

# Interface: GlobalEventHandlersEventMap

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).GlobalEventHandlersEventMap

## Hierarchy

- **`GlobalEventHandlersEventMap`**

  ↳ [`HTMLElementEventMap`](axes_lines._internal_.HTMLElementEventMap.md)

  ↳ [`DocumentEventMap`](axes_lines._internal_.DocumentEventMap.md)

  ↳ [`SVGElementEventMap`](axes_lines._internal_.SVGElementEventMap.md)

  ↳ [`WindowEventMap`](axes_lines._internal_.WindowEventMap.md)

## Table of contents

### Properties

- [abort](axes_lines._internal_.GlobalEventHandlersEventMap.md#abort)
- [animationcancel](axes_lines._internal_.GlobalEventHandlersEventMap.md#animationcancel)
- [animationend](axes_lines._internal_.GlobalEventHandlersEventMap.md#animationend)
- [animationiteration](axes_lines._internal_.GlobalEventHandlersEventMap.md#animationiteration)
- [animationstart](axes_lines._internal_.GlobalEventHandlersEventMap.md#animationstart)
- [auxclick](axes_lines._internal_.GlobalEventHandlersEventMap.md#auxclick)
- [beforeinput](axes_lines._internal_.GlobalEventHandlersEventMap.md#beforeinput)
- [blur](axes_lines._internal_.GlobalEventHandlersEventMap.md#blur)
- [canplay](axes_lines._internal_.GlobalEventHandlersEventMap.md#canplay)
- [canplaythrough](axes_lines._internal_.GlobalEventHandlersEventMap.md#canplaythrough)
- [change](axes_lines._internal_.GlobalEventHandlersEventMap.md#change)
- [click](axes_lines._internal_.GlobalEventHandlersEventMap.md#click)
- [close](axes_lines._internal_.GlobalEventHandlersEventMap.md#close)
- [compositionend](axes_lines._internal_.GlobalEventHandlersEventMap.md#compositionend)
- [compositionstart](axes_lines._internal_.GlobalEventHandlersEventMap.md#compositionstart)
- [compositionupdate](axes_lines._internal_.GlobalEventHandlersEventMap.md#compositionupdate)
- [contextmenu](axes_lines._internal_.GlobalEventHandlersEventMap.md#contextmenu)
- [cuechange](axes_lines._internal_.GlobalEventHandlersEventMap.md#cuechange)
- [dblclick](axes_lines._internal_.GlobalEventHandlersEventMap.md#dblclick)
- [drag](axes_lines._internal_.GlobalEventHandlersEventMap.md#drag)
- [dragend](axes_lines._internal_.GlobalEventHandlersEventMap.md#dragend)
- [dragenter](axes_lines._internal_.GlobalEventHandlersEventMap.md#dragenter)
- [dragleave](axes_lines._internal_.GlobalEventHandlersEventMap.md#dragleave)
- [dragover](axes_lines._internal_.GlobalEventHandlersEventMap.md#dragover)
- [dragstart](axes_lines._internal_.GlobalEventHandlersEventMap.md#dragstart)
- [drop](axes_lines._internal_.GlobalEventHandlersEventMap.md#drop)
- [durationchange](axes_lines._internal_.GlobalEventHandlersEventMap.md#durationchange)
- [emptied](axes_lines._internal_.GlobalEventHandlersEventMap.md#emptied)
- [ended](axes_lines._internal_.GlobalEventHandlersEventMap.md#ended)
- [error](axes_lines._internal_.GlobalEventHandlersEventMap.md#error)
- [focus](axes_lines._internal_.GlobalEventHandlersEventMap.md#focus)
- [focusin](axes_lines._internal_.GlobalEventHandlersEventMap.md#focusin)
- [focusout](axes_lines._internal_.GlobalEventHandlersEventMap.md#focusout)
- [formdata](axes_lines._internal_.GlobalEventHandlersEventMap.md#formdata)
- [gotpointercapture](axes_lines._internal_.GlobalEventHandlersEventMap.md#gotpointercapture)
- [input](axes_lines._internal_.GlobalEventHandlersEventMap.md#input)
- [invalid](axes_lines._internal_.GlobalEventHandlersEventMap.md#invalid)
- [keydown](axes_lines._internal_.GlobalEventHandlersEventMap.md#keydown)
- [keypress](axes_lines._internal_.GlobalEventHandlersEventMap.md#keypress)
- [keyup](axes_lines._internal_.GlobalEventHandlersEventMap.md#keyup)
- [load](axes_lines._internal_.GlobalEventHandlersEventMap.md#load)
- [loadeddata](axes_lines._internal_.GlobalEventHandlersEventMap.md#loadeddata)
- [loadedmetadata](axes_lines._internal_.GlobalEventHandlersEventMap.md#loadedmetadata)
- [loadstart](axes_lines._internal_.GlobalEventHandlersEventMap.md#loadstart)
- [lostpointercapture](axes_lines._internal_.GlobalEventHandlersEventMap.md#lostpointercapture)
- [mousedown](axes_lines._internal_.GlobalEventHandlersEventMap.md#mousedown)
- [mouseenter](axes_lines._internal_.GlobalEventHandlersEventMap.md#mouseenter)
- [mouseleave](axes_lines._internal_.GlobalEventHandlersEventMap.md#mouseleave)
- [mousemove](axes_lines._internal_.GlobalEventHandlersEventMap.md#mousemove)
- [mouseout](axes_lines._internal_.GlobalEventHandlersEventMap.md#mouseout)
- [mouseover](axes_lines._internal_.GlobalEventHandlersEventMap.md#mouseover)
- [mouseup](axes_lines._internal_.GlobalEventHandlersEventMap.md#mouseup)
- [pause](axes_lines._internal_.GlobalEventHandlersEventMap.md#pause)
- [play](axes_lines._internal_.GlobalEventHandlersEventMap.md#play)
- [playing](axes_lines._internal_.GlobalEventHandlersEventMap.md#playing)
- [pointercancel](axes_lines._internal_.GlobalEventHandlersEventMap.md#pointercancel)
- [pointerdown](axes_lines._internal_.GlobalEventHandlersEventMap.md#pointerdown)
- [pointerenter](axes_lines._internal_.GlobalEventHandlersEventMap.md#pointerenter)
- [pointerleave](axes_lines._internal_.GlobalEventHandlersEventMap.md#pointerleave)
- [pointermove](axes_lines._internal_.GlobalEventHandlersEventMap.md#pointermove)
- [pointerout](axes_lines._internal_.GlobalEventHandlersEventMap.md#pointerout)
- [pointerover](axes_lines._internal_.GlobalEventHandlersEventMap.md#pointerover)
- [pointerup](axes_lines._internal_.GlobalEventHandlersEventMap.md#pointerup)
- [progress](axes_lines._internal_.GlobalEventHandlersEventMap.md#progress)
- [ratechange](axes_lines._internal_.GlobalEventHandlersEventMap.md#ratechange)
- [reset](axes_lines._internal_.GlobalEventHandlersEventMap.md#reset)
- [resize](axes_lines._internal_.GlobalEventHandlersEventMap.md#resize)
- [scroll](axes_lines._internal_.GlobalEventHandlersEventMap.md#scroll)
- [securitypolicyviolation](axes_lines._internal_.GlobalEventHandlersEventMap.md#securitypolicyviolation)
- [seeked](axes_lines._internal_.GlobalEventHandlersEventMap.md#seeked)
- [seeking](axes_lines._internal_.GlobalEventHandlersEventMap.md#seeking)
- [select](axes_lines._internal_.GlobalEventHandlersEventMap.md#select)
- [selectionchange](axes_lines._internal_.GlobalEventHandlersEventMap.md#selectionchange)
- [selectstart](axes_lines._internal_.GlobalEventHandlersEventMap.md#selectstart)
- [slotchange](axes_lines._internal_.GlobalEventHandlersEventMap.md#slotchange)
- [stalled](axes_lines._internal_.GlobalEventHandlersEventMap.md#stalled)
- [submit](axes_lines._internal_.GlobalEventHandlersEventMap.md#submit)
- [suspend](axes_lines._internal_.GlobalEventHandlersEventMap.md#suspend)
- [timeupdate](axes_lines._internal_.GlobalEventHandlersEventMap.md#timeupdate)
- [toggle](axes_lines._internal_.GlobalEventHandlersEventMap.md#toggle)
- [touchcancel](axes_lines._internal_.GlobalEventHandlersEventMap.md#touchcancel)
- [touchend](axes_lines._internal_.GlobalEventHandlersEventMap.md#touchend)
- [touchmove](axes_lines._internal_.GlobalEventHandlersEventMap.md#touchmove)
- [touchstart](axes_lines._internal_.GlobalEventHandlersEventMap.md#touchstart)
- [transitioncancel](axes_lines._internal_.GlobalEventHandlersEventMap.md#transitioncancel)
- [transitionend](axes_lines._internal_.GlobalEventHandlersEventMap.md#transitionend)
- [transitionrun](axes_lines._internal_.GlobalEventHandlersEventMap.md#transitionrun)
- [transitionstart](axes_lines._internal_.GlobalEventHandlersEventMap.md#transitionstart)
- [volumechange](axes_lines._internal_.GlobalEventHandlersEventMap.md#volumechange)
- [waiting](axes_lines._internal_.GlobalEventHandlersEventMap.md#waiting)
- [webkitanimationend](axes_lines._internal_.GlobalEventHandlersEventMap.md#webkitanimationend)
- [webkitanimationiteration](axes_lines._internal_.GlobalEventHandlersEventMap.md#webkitanimationiteration)
- [webkitanimationstart](axes_lines._internal_.GlobalEventHandlersEventMap.md#webkitanimationstart)
- [webkittransitionend](axes_lines._internal_.GlobalEventHandlersEventMap.md#webkittransitionend)
- [wheel](axes_lines._internal_.GlobalEventHandlersEventMap.md#wheel)

## Properties

### abort

• **abort**: [`UIEvent`](../modules/axes_lines._internal_.md#uievent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5545

___

### animationcancel

• **animationcancel**: [`AnimationEvent`](../modules/axes_lines._internal_.md#animationevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5546

___

### animationend

• **animationend**: [`AnimationEvent`](../modules/axes_lines._internal_.md#animationevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5547

___

### animationiteration

• **animationiteration**: [`AnimationEvent`](../modules/axes_lines._internal_.md#animationevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5548

___

### animationstart

• **animationstart**: [`AnimationEvent`](../modules/axes_lines._internal_.md#animationevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5549

___

### auxclick

• **auxclick**: [`MouseEvent`](../modules/axes_lines._internal_.md#mouseevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5550

___

### beforeinput

• **beforeinput**: [`InputEvent`](../modules/axes_lines._internal_.md#inputevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5551

___

### blur

• **blur**: [`FocusEvent`](../modules/axes_lines._internal_.md#focusevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5552

___

### canplay

• **canplay**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5553

___

### canplaythrough

• **canplaythrough**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5554

___

### change

• **change**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5555

___

### click

• **click**: [`MouseEvent`](../modules/axes_lines._internal_.md#mouseevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5556

___

### close

• **close**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5557

___

### compositionend

• **compositionend**: [`CompositionEvent`](../modules/axes_lines._internal_.md#compositionevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5558

___

### compositionstart

• **compositionstart**: [`CompositionEvent`](../modules/axes_lines._internal_.md#compositionevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5559

___

### compositionupdate

• **compositionupdate**: [`CompositionEvent`](../modules/axes_lines._internal_.md#compositionevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5560

___

### contextmenu

• **contextmenu**: [`MouseEvent`](../modules/axes_lines._internal_.md#mouseevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5561

___

### cuechange

• **cuechange**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5562

___

### dblclick

• **dblclick**: [`MouseEvent`](../modules/axes_lines._internal_.md#mouseevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5563

___

### drag

• **drag**: [`DragEvent`](../modules/axes_lines._internal_.md#dragevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5564

___

### dragend

• **dragend**: [`DragEvent`](../modules/axes_lines._internal_.md#dragevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5565

___

### dragenter

• **dragenter**: [`DragEvent`](../modules/axes_lines._internal_.md#dragevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5566

___

### dragleave

• **dragleave**: [`DragEvent`](../modules/axes_lines._internal_.md#dragevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5567

___

### dragover

• **dragover**: [`DragEvent`](../modules/axes_lines._internal_.md#dragevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5568

___

### dragstart

• **dragstart**: [`DragEvent`](../modules/axes_lines._internal_.md#dragevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5569

___

### drop

• **drop**: [`DragEvent`](../modules/axes_lines._internal_.md#dragevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5570

___

### durationchange

• **durationchange**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5571

___

### emptied

• **emptied**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5572

___

### ended

• **ended**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5573

___

### error

• **error**: [`ErrorEvent`](../modules/axes_lines._internal_.md#errorevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5574

___

### focus

• **focus**: [`FocusEvent`](../modules/axes_lines._internal_.md#focusevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5575

___

### focusin

• **focusin**: [`FocusEvent`](../modules/axes_lines._internal_.md#focusevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5576

___

### focusout

• **focusout**: [`FocusEvent`](../modules/axes_lines._internal_.md#focusevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5577

___

### formdata

• **formdata**: [`FormDataEvent`](../modules/axes_lines._internal_.md#formdataevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5578

___

### gotpointercapture

• **gotpointercapture**: [`PointerEvent`](../modules/axes_lines._internal_.md#pointerevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5579

___

### input

• **input**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5580

___

### invalid

• **invalid**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5581

___

### keydown

• **keydown**: [`KeyboardEvent`](../modules/axes_lines._internal_.md#keyboardevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5582

___

### keypress

• **keypress**: [`KeyboardEvent`](../modules/axes_lines._internal_.md#keyboardevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5583

___

### keyup

• **keyup**: [`KeyboardEvent`](../modules/axes_lines._internal_.md#keyboardevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5584

___

### load

• **load**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5585

___

### loadeddata

• **loadeddata**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5586

___

### loadedmetadata

• **loadedmetadata**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5587

___

### loadstart

• **loadstart**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5588

___

### lostpointercapture

• **lostpointercapture**: [`PointerEvent`](../modules/axes_lines._internal_.md#pointerevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5589

___

### mousedown

• **mousedown**: [`MouseEvent`](../modules/axes_lines._internal_.md#mouseevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5590

___

### mouseenter

• **mouseenter**: [`MouseEvent`](../modules/axes_lines._internal_.md#mouseevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5591

___

### mouseleave

• **mouseleave**: [`MouseEvent`](../modules/axes_lines._internal_.md#mouseevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5592

___

### mousemove

• **mousemove**: [`MouseEvent`](../modules/axes_lines._internal_.md#mouseevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5593

___

### mouseout

• **mouseout**: [`MouseEvent`](../modules/axes_lines._internal_.md#mouseevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5594

___

### mouseover

• **mouseover**: [`MouseEvent`](../modules/axes_lines._internal_.md#mouseevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5595

___

### mouseup

• **mouseup**: [`MouseEvent`](../modules/axes_lines._internal_.md#mouseevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5596

___

### pause

• **pause**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5597

___

### play

• **play**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5598

___

### playing

• **playing**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5599

___

### pointercancel

• **pointercancel**: [`PointerEvent`](../modules/axes_lines._internal_.md#pointerevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5600

___

### pointerdown

• **pointerdown**: [`PointerEvent`](../modules/axes_lines._internal_.md#pointerevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5601

___

### pointerenter

• **pointerenter**: [`PointerEvent`](../modules/axes_lines._internal_.md#pointerevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5602

___

### pointerleave

• **pointerleave**: [`PointerEvent`](../modules/axes_lines._internal_.md#pointerevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5603

___

### pointermove

• **pointermove**: [`PointerEvent`](../modules/axes_lines._internal_.md#pointerevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5604

___

### pointerout

• **pointerout**: [`PointerEvent`](../modules/axes_lines._internal_.md#pointerevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5605

___

### pointerover

• **pointerover**: [`PointerEvent`](../modules/axes_lines._internal_.md#pointerevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5606

___

### pointerup

• **pointerup**: [`PointerEvent`](../modules/axes_lines._internal_.md#pointerevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5607

___

### progress

• **progress**: [`ProgressEvent`](../modules/axes_lines._internal_.md#progressevent)<[`EventTarget`](../modules/axes_lines._internal_.md#eventtarget)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5608

___

### ratechange

• **ratechange**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5609

___

### reset

• **reset**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5610

___

### resize

• **resize**: [`UIEvent`](../modules/axes_lines._internal_.md#uievent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5611

___

### scroll

• **scroll**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5612

___

### securitypolicyviolation

• **securitypolicyviolation**: [`SecurityPolicyViolationEvent`](../modules/axes_lines._internal_.md#securitypolicyviolationevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5613

___

### seeked

• **seeked**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5614

___

### seeking

• **seeking**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5615

___

### select

• **select**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5616

___

### selectionchange

• **selectionchange**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5617

___

### selectstart

• **selectstart**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5618

___

### slotchange

• **slotchange**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5619

___

### stalled

• **stalled**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5620

___

### submit

• **submit**: [`SubmitEvent`](../modules/axes_lines._internal_.md#submitevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5621

___

### suspend

• **suspend**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5622

___

### timeupdate

• **timeupdate**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5623

___

### toggle

• **toggle**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5624

___

### touchcancel

• **touchcancel**: [`TouchEvent`](../modules/axes_lines._internal_.md#touchevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5625

___

### touchend

• **touchend**: [`TouchEvent`](../modules/axes_lines._internal_.md#touchevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5626

___

### touchmove

• **touchmove**: [`TouchEvent`](../modules/axes_lines._internal_.md#touchevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5627

___

### touchstart

• **touchstart**: [`TouchEvent`](../modules/axes_lines._internal_.md#touchevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5628

___

### transitioncancel

• **transitioncancel**: [`TransitionEvent`](../modules/axes_lines._internal_.md#transitionevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5629

___

### transitionend

• **transitionend**: [`TransitionEvent`](../modules/axes_lines._internal_.md#transitionevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5630

___

### transitionrun

• **transitionrun**: [`TransitionEvent`](../modules/axes_lines._internal_.md#transitionevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5631

___

### transitionstart

• **transitionstart**: [`TransitionEvent`](../modules/axes_lines._internal_.md#transitionevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5632

___

### volumechange

• **volumechange**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5633

___

### waiting

• **waiting**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5634

___

### webkitanimationend

• **webkitanimationend**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5635

___

### webkitanimationiteration

• **webkitanimationiteration**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5636

___

### webkitanimationstart

• **webkitanimationstart**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5637

___

### webkittransitionend

• **webkittransitionend**: [`Event`](../modules/axes_lines._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5638

___

### wheel

• **wheel**: [`WheelEvent`](../modules/axes_lines._internal_.md#wheelevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5639
