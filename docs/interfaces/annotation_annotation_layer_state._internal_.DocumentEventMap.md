[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / DocumentEventMap

# Interface: DocumentEventMap

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).DocumentEventMap

## Hierarchy

- [`DocumentAndElementEventHandlersEventMap`](annotation_annotation_layer_state._internal_.DocumentAndElementEventHandlersEventMap.md)

- [`GlobalEventHandlersEventMap`](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md)

  ↳ **`DocumentEventMap`**

## Table of contents

### Properties

- [DOMContentLoaded](annotation_annotation_layer_state._internal_.DocumentEventMap.md#domcontentloaded)
- [abort](annotation_annotation_layer_state._internal_.DocumentEventMap.md#abort)
- [animationcancel](annotation_annotation_layer_state._internal_.DocumentEventMap.md#animationcancel)
- [animationend](annotation_annotation_layer_state._internal_.DocumentEventMap.md#animationend)
- [animationiteration](annotation_annotation_layer_state._internal_.DocumentEventMap.md#animationiteration)
- [animationstart](annotation_annotation_layer_state._internal_.DocumentEventMap.md#animationstart)
- [auxclick](annotation_annotation_layer_state._internal_.DocumentEventMap.md#auxclick)
- [beforeinput](annotation_annotation_layer_state._internal_.DocumentEventMap.md#beforeinput)
- [blur](annotation_annotation_layer_state._internal_.DocumentEventMap.md#blur)
- [canplay](annotation_annotation_layer_state._internal_.DocumentEventMap.md#canplay)
- [canplaythrough](annotation_annotation_layer_state._internal_.DocumentEventMap.md#canplaythrough)
- [change](annotation_annotation_layer_state._internal_.DocumentEventMap.md#change)
- [click](annotation_annotation_layer_state._internal_.DocumentEventMap.md#click)
- [close](annotation_annotation_layer_state._internal_.DocumentEventMap.md#close)
- [compositionend](annotation_annotation_layer_state._internal_.DocumentEventMap.md#compositionend)
- [compositionstart](annotation_annotation_layer_state._internal_.DocumentEventMap.md#compositionstart)
- [compositionupdate](annotation_annotation_layer_state._internal_.DocumentEventMap.md#compositionupdate)
- [contextmenu](annotation_annotation_layer_state._internal_.DocumentEventMap.md#contextmenu)
- [copy](annotation_annotation_layer_state._internal_.DocumentEventMap.md#copy)
- [cuechange](annotation_annotation_layer_state._internal_.DocumentEventMap.md#cuechange)
- [cut](annotation_annotation_layer_state._internal_.DocumentEventMap.md#cut)
- [dblclick](annotation_annotation_layer_state._internal_.DocumentEventMap.md#dblclick)
- [drag](annotation_annotation_layer_state._internal_.DocumentEventMap.md#drag)
- [dragend](annotation_annotation_layer_state._internal_.DocumentEventMap.md#dragend)
- [dragenter](annotation_annotation_layer_state._internal_.DocumentEventMap.md#dragenter)
- [dragleave](annotation_annotation_layer_state._internal_.DocumentEventMap.md#dragleave)
- [dragover](annotation_annotation_layer_state._internal_.DocumentEventMap.md#dragover)
- [dragstart](annotation_annotation_layer_state._internal_.DocumentEventMap.md#dragstart)
- [drop](annotation_annotation_layer_state._internal_.DocumentEventMap.md#drop)
- [durationchange](annotation_annotation_layer_state._internal_.DocumentEventMap.md#durationchange)
- [emptied](annotation_annotation_layer_state._internal_.DocumentEventMap.md#emptied)
- [ended](annotation_annotation_layer_state._internal_.DocumentEventMap.md#ended)
- [error](annotation_annotation_layer_state._internal_.DocumentEventMap.md#error)
- [focus](annotation_annotation_layer_state._internal_.DocumentEventMap.md#focus)
- [focusin](annotation_annotation_layer_state._internal_.DocumentEventMap.md#focusin)
- [focusout](annotation_annotation_layer_state._internal_.DocumentEventMap.md#focusout)
- [formdata](annotation_annotation_layer_state._internal_.DocumentEventMap.md#formdata)
- [fullscreenchange](annotation_annotation_layer_state._internal_.DocumentEventMap.md#fullscreenchange)
- [fullscreenerror](annotation_annotation_layer_state._internal_.DocumentEventMap.md#fullscreenerror)
- [gotpointercapture](annotation_annotation_layer_state._internal_.DocumentEventMap.md#gotpointercapture)
- [input](annotation_annotation_layer_state._internal_.DocumentEventMap.md#input)
- [invalid](annotation_annotation_layer_state._internal_.DocumentEventMap.md#invalid)
- [keydown](annotation_annotation_layer_state._internal_.DocumentEventMap.md#keydown)
- [keypress](annotation_annotation_layer_state._internal_.DocumentEventMap.md#keypress)
- [keyup](annotation_annotation_layer_state._internal_.DocumentEventMap.md#keyup)
- [load](annotation_annotation_layer_state._internal_.DocumentEventMap.md#load)
- [loadeddata](annotation_annotation_layer_state._internal_.DocumentEventMap.md#loadeddata)
- [loadedmetadata](annotation_annotation_layer_state._internal_.DocumentEventMap.md#loadedmetadata)
- [loadstart](annotation_annotation_layer_state._internal_.DocumentEventMap.md#loadstart)
- [lostpointercapture](annotation_annotation_layer_state._internal_.DocumentEventMap.md#lostpointercapture)
- [mousedown](annotation_annotation_layer_state._internal_.DocumentEventMap.md#mousedown)
- [mouseenter](annotation_annotation_layer_state._internal_.DocumentEventMap.md#mouseenter)
- [mouseleave](annotation_annotation_layer_state._internal_.DocumentEventMap.md#mouseleave)
- [mousemove](annotation_annotation_layer_state._internal_.DocumentEventMap.md#mousemove)
- [mouseout](annotation_annotation_layer_state._internal_.DocumentEventMap.md#mouseout)
- [mouseover](annotation_annotation_layer_state._internal_.DocumentEventMap.md#mouseover)
- [mouseup](annotation_annotation_layer_state._internal_.DocumentEventMap.md#mouseup)
- [paste](annotation_annotation_layer_state._internal_.DocumentEventMap.md#paste)
- [pause](annotation_annotation_layer_state._internal_.DocumentEventMap.md#pause)
- [play](annotation_annotation_layer_state._internal_.DocumentEventMap.md#play)
- [playing](annotation_annotation_layer_state._internal_.DocumentEventMap.md#playing)
- [pointercancel](annotation_annotation_layer_state._internal_.DocumentEventMap.md#pointercancel)
- [pointerdown](annotation_annotation_layer_state._internal_.DocumentEventMap.md#pointerdown)
- [pointerenter](annotation_annotation_layer_state._internal_.DocumentEventMap.md#pointerenter)
- [pointerleave](annotation_annotation_layer_state._internal_.DocumentEventMap.md#pointerleave)
- [pointerlockchange](annotation_annotation_layer_state._internal_.DocumentEventMap.md#pointerlockchange)
- [pointerlockerror](annotation_annotation_layer_state._internal_.DocumentEventMap.md#pointerlockerror)
- [pointermove](annotation_annotation_layer_state._internal_.DocumentEventMap.md#pointermove)
- [pointerout](annotation_annotation_layer_state._internal_.DocumentEventMap.md#pointerout)
- [pointerover](annotation_annotation_layer_state._internal_.DocumentEventMap.md#pointerover)
- [pointerup](annotation_annotation_layer_state._internal_.DocumentEventMap.md#pointerup)
- [progress](annotation_annotation_layer_state._internal_.DocumentEventMap.md#progress)
- [ratechange](annotation_annotation_layer_state._internal_.DocumentEventMap.md#ratechange)
- [readystatechange](annotation_annotation_layer_state._internal_.DocumentEventMap.md#readystatechange)
- [reset](annotation_annotation_layer_state._internal_.DocumentEventMap.md#reset)
- [resize](annotation_annotation_layer_state._internal_.DocumentEventMap.md#resize)
- [scroll](annotation_annotation_layer_state._internal_.DocumentEventMap.md#scroll)
- [securitypolicyviolation](annotation_annotation_layer_state._internal_.DocumentEventMap.md#securitypolicyviolation)
- [seeked](annotation_annotation_layer_state._internal_.DocumentEventMap.md#seeked)
- [seeking](annotation_annotation_layer_state._internal_.DocumentEventMap.md#seeking)
- [select](annotation_annotation_layer_state._internal_.DocumentEventMap.md#select)
- [selectionchange](annotation_annotation_layer_state._internal_.DocumentEventMap.md#selectionchange)
- [selectstart](annotation_annotation_layer_state._internal_.DocumentEventMap.md#selectstart)
- [slotchange](annotation_annotation_layer_state._internal_.DocumentEventMap.md#slotchange)
- [stalled](annotation_annotation_layer_state._internal_.DocumentEventMap.md#stalled)
- [submit](annotation_annotation_layer_state._internal_.DocumentEventMap.md#submit)
- [suspend](annotation_annotation_layer_state._internal_.DocumentEventMap.md#suspend)
- [timeupdate](annotation_annotation_layer_state._internal_.DocumentEventMap.md#timeupdate)
- [toggle](annotation_annotation_layer_state._internal_.DocumentEventMap.md#toggle)
- [touchcancel](annotation_annotation_layer_state._internal_.DocumentEventMap.md#touchcancel)
- [touchend](annotation_annotation_layer_state._internal_.DocumentEventMap.md#touchend)
- [touchmove](annotation_annotation_layer_state._internal_.DocumentEventMap.md#touchmove)
- [touchstart](annotation_annotation_layer_state._internal_.DocumentEventMap.md#touchstart)
- [transitioncancel](annotation_annotation_layer_state._internal_.DocumentEventMap.md#transitioncancel)
- [transitionend](annotation_annotation_layer_state._internal_.DocumentEventMap.md#transitionend)
- [transitionrun](annotation_annotation_layer_state._internal_.DocumentEventMap.md#transitionrun)
- [transitionstart](annotation_annotation_layer_state._internal_.DocumentEventMap.md#transitionstart)
- [visibilitychange](annotation_annotation_layer_state._internal_.DocumentEventMap.md#visibilitychange)
- [volumechange](annotation_annotation_layer_state._internal_.DocumentEventMap.md#volumechange)
- [waiting](annotation_annotation_layer_state._internal_.DocumentEventMap.md#waiting)
- [webkitanimationend](annotation_annotation_layer_state._internal_.DocumentEventMap.md#webkitanimationend)
- [webkitanimationiteration](annotation_annotation_layer_state._internal_.DocumentEventMap.md#webkitanimationiteration)
- [webkitanimationstart](annotation_annotation_layer_state._internal_.DocumentEventMap.md#webkitanimationstart)
- [webkittransitionend](annotation_annotation_layer_state._internal_.DocumentEventMap.md#webkittransitionend)
- [wheel](annotation_annotation_layer_state._internal_.DocumentEventMap.md#wheel)

## Properties

### DOMContentLoaded

• **DOMContentLoaded**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4296

___

### abort

• **abort**: [`UIEvent`](../modules/annotation_annotation_layer_state._internal_.md#uievent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[abort](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#abort)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5545

___

### animationcancel

• **animationcancel**: [`AnimationEvent`](../modules/annotation_annotation_layer_state._internal_.md#animationevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[animationcancel](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#animationcancel)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5546

___

### animationend

• **animationend**: [`AnimationEvent`](../modules/annotation_annotation_layer_state._internal_.md#animationevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[animationend](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#animationend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5547

___

### animationiteration

• **animationiteration**: [`AnimationEvent`](../modules/annotation_annotation_layer_state._internal_.md#animationevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[animationiteration](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#animationiteration)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5548

___

### animationstart

• **animationstart**: [`AnimationEvent`](../modules/annotation_annotation_layer_state._internal_.md#animationevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[animationstart](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#animationstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5549

___

### auxclick

• **auxclick**: [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[auxclick](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#auxclick)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5550

___

### beforeinput

• **beforeinput**: [`InputEvent`](../modules/annotation_annotation_layer_state._internal_.md#inputevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[beforeinput](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#beforeinput)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5551

___

### blur

• **blur**: [`FocusEvent`](../modules/annotation_annotation_layer_state._internal_.md#focusevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[blur](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#blur)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5552

___

### canplay

• **canplay**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[canplay](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#canplay)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5553

___

### canplaythrough

• **canplaythrough**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[canplaythrough](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#canplaythrough)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5554

___

### change

• **change**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[change](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#change)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5555

___

### click

• **click**: [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[click](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#click)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5556

___

### close

• **close**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[close](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#close)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5557

___

### compositionend

• **compositionend**: [`CompositionEvent`](../modules/annotation_annotation_layer_state._internal_.md#compositionevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[compositionend](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#compositionend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5558

___

### compositionstart

• **compositionstart**: [`CompositionEvent`](../modules/annotation_annotation_layer_state._internal_.md#compositionevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[compositionstart](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#compositionstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5559

___

### compositionupdate

• **compositionupdate**: [`CompositionEvent`](../modules/annotation_annotation_layer_state._internal_.md#compositionevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[compositionupdate](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#compositionupdate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5560

___

### contextmenu

• **contextmenu**: [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[contextmenu](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#contextmenu)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5561

___

### copy

• **copy**: [`ClipboardEvent`](../modules/annotation_annotation_layer_state._internal_.md#clipboardevent)

#### Inherited from

[DocumentAndElementEventHandlersEventMap](annotation_annotation_layer_state._internal_.DocumentAndElementEventHandlersEventMap.md).[copy](annotation_annotation_layer_state._internal_.DocumentAndElementEventHandlersEventMap.md#copy)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4702

___

### cuechange

• **cuechange**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[cuechange](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#cuechange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5562

___

### cut

• **cut**: [`ClipboardEvent`](../modules/annotation_annotation_layer_state._internal_.md#clipboardevent)

#### Inherited from

[DocumentAndElementEventHandlersEventMap](annotation_annotation_layer_state._internal_.DocumentAndElementEventHandlersEventMap.md).[cut](annotation_annotation_layer_state._internal_.DocumentAndElementEventHandlersEventMap.md#cut)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4703

___

### dblclick

• **dblclick**: [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[dblclick](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#dblclick)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5563

___

### drag

• **drag**: [`DragEvent`](../modules/annotation_annotation_layer_state._internal_.md#dragevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[drag](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#drag)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5564

___

### dragend

• **dragend**: [`DragEvent`](../modules/annotation_annotation_layer_state._internal_.md#dragevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[dragend](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#dragend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5565

___

### dragenter

• **dragenter**: [`DragEvent`](../modules/annotation_annotation_layer_state._internal_.md#dragevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[dragenter](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#dragenter)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5566

___

### dragleave

• **dragleave**: [`DragEvent`](../modules/annotation_annotation_layer_state._internal_.md#dragevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[dragleave](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#dragleave)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5567

___

### dragover

• **dragover**: [`DragEvent`](../modules/annotation_annotation_layer_state._internal_.md#dragevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[dragover](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#dragover)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5568

___

### dragstart

• **dragstart**: [`DragEvent`](../modules/annotation_annotation_layer_state._internal_.md#dragevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[dragstart](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#dragstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5569

___

### drop

• **drop**: [`DragEvent`](../modules/annotation_annotation_layer_state._internal_.md#dragevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[drop](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#drop)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5570

___

### durationchange

• **durationchange**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[durationchange](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#durationchange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5571

___

### emptied

• **emptied**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[emptied](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#emptied)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5572

___

### ended

• **ended**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[ended](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#ended)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5573

___

### error

• **error**: [`ErrorEvent`](../modules/annotation_annotation_layer_state._internal_.md#errorevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[error](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#error)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5574

___

### focus

• **focus**: [`FocusEvent`](../modules/annotation_annotation_layer_state._internal_.md#focusevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[focus](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#focus)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5575

___

### focusin

• **focusin**: [`FocusEvent`](../modules/annotation_annotation_layer_state._internal_.md#focusevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[focusin](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#focusin)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5576

___

### focusout

• **focusout**: [`FocusEvent`](../modules/annotation_annotation_layer_state._internal_.md#focusevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[focusout](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#focusout)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5577

___

### formdata

• **formdata**: [`FormDataEvent`](../modules/annotation_annotation_layer_state._internal_.md#formdataevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[formdata](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#formdata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5578

___

### fullscreenchange

• **fullscreenchange**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4297

___

### fullscreenerror

• **fullscreenerror**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4298

___

### gotpointercapture

• **gotpointercapture**: [`PointerEvent`](../modules/annotation_annotation_layer_state._internal_.md#pointerevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[gotpointercapture](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#gotpointercapture)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5579

___

### input

• **input**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[input](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#input)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5580

___

### invalid

• **invalid**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[invalid](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#invalid)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5581

___

### keydown

• **keydown**: [`KeyboardEvent`](../modules/annotation_annotation_layer_state._internal_.md#keyboardevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[keydown](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#keydown)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5582

___

### keypress

• **keypress**: [`KeyboardEvent`](../modules/annotation_annotation_layer_state._internal_.md#keyboardevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[keypress](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#keypress)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5583

___

### keyup

• **keyup**: [`KeyboardEvent`](../modules/annotation_annotation_layer_state._internal_.md#keyboardevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[keyup](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#keyup)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5584

___

### load

• **load**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[load](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#load)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5585

___

### loadeddata

• **loadeddata**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[loadeddata](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#loadeddata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5586

___

### loadedmetadata

• **loadedmetadata**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[loadedmetadata](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#loadedmetadata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5587

___

### loadstart

• **loadstart**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[loadstart](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#loadstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5588

___

### lostpointercapture

• **lostpointercapture**: [`PointerEvent`](../modules/annotation_annotation_layer_state._internal_.md#pointerevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[lostpointercapture](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#lostpointercapture)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5589

___

### mousedown

• **mousedown**: [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[mousedown](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#mousedown)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5590

___

### mouseenter

• **mouseenter**: [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[mouseenter](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#mouseenter)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5591

___

### mouseleave

• **mouseleave**: [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[mouseleave](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#mouseleave)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5592

___

### mousemove

• **mousemove**: [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[mousemove](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#mousemove)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5593

___

### mouseout

• **mouseout**: [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[mouseout](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#mouseout)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5594

___

### mouseover

• **mouseover**: [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[mouseover](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#mouseover)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5595

___

### mouseup

• **mouseup**: [`MouseEvent`](../modules/annotation_annotation_layer_state._internal_.md#mouseevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[mouseup](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#mouseup)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5596

___

### paste

• **paste**: [`ClipboardEvent`](../modules/annotation_annotation_layer_state._internal_.md#clipboardevent)

#### Inherited from

[DocumentAndElementEventHandlersEventMap](annotation_annotation_layer_state._internal_.DocumentAndElementEventHandlersEventMap.md).[paste](annotation_annotation_layer_state._internal_.DocumentAndElementEventHandlersEventMap.md#paste)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4704

___

### pause

• **pause**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[pause](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#pause)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5597

___

### play

• **play**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[play](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#play)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5598

___

### playing

• **playing**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[playing](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#playing)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5599

___

### pointercancel

• **pointercancel**: [`PointerEvent`](../modules/annotation_annotation_layer_state._internal_.md#pointerevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[pointercancel](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#pointercancel)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5600

___

### pointerdown

• **pointerdown**: [`PointerEvent`](../modules/annotation_annotation_layer_state._internal_.md#pointerevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[pointerdown](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#pointerdown)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5601

___

### pointerenter

• **pointerenter**: [`PointerEvent`](../modules/annotation_annotation_layer_state._internal_.md#pointerevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[pointerenter](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#pointerenter)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5602

___

### pointerleave

• **pointerleave**: [`PointerEvent`](../modules/annotation_annotation_layer_state._internal_.md#pointerevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[pointerleave](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#pointerleave)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5603

___

### pointerlockchange

• **pointerlockchange**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4299

___

### pointerlockerror

• **pointerlockerror**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4300

___

### pointermove

• **pointermove**: [`PointerEvent`](../modules/annotation_annotation_layer_state._internal_.md#pointerevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[pointermove](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#pointermove)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5604

___

### pointerout

• **pointerout**: [`PointerEvent`](../modules/annotation_annotation_layer_state._internal_.md#pointerevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[pointerout](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#pointerout)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5605

___

### pointerover

• **pointerover**: [`PointerEvent`](../modules/annotation_annotation_layer_state._internal_.md#pointerevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[pointerover](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#pointerover)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5606

___

### pointerup

• **pointerup**: [`PointerEvent`](../modules/annotation_annotation_layer_state._internal_.md#pointerevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[pointerup](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#pointerup)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5607

___

### progress

• **progress**: [`ProgressEvent`](../modules/annotation_annotation_layer_state._internal_.md#progressevent)<[`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget)\>

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[progress](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#progress)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5608

___

### ratechange

• **ratechange**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[ratechange](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#ratechange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5609

___

### readystatechange

• **readystatechange**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4301

___

### reset

• **reset**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[reset](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#reset)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5610

___

### resize

• **resize**: [`UIEvent`](../modules/annotation_annotation_layer_state._internal_.md#uievent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[resize](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#resize)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5611

___

### scroll

• **scroll**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[scroll](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#scroll)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5612

___

### securitypolicyviolation

• **securitypolicyviolation**: [`SecurityPolicyViolationEvent`](../modules/annotation_annotation_layer_state._internal_.md#securitypolicyviolationevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[securitypolicyviolation](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#securitypolicyviolation)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5613

___

### seeked

• **seeked**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[seeked](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#seeked)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5614

___

### seeking

• **seeking**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[seeking](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#seeking)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5615

___

### select

• **select**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[select](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#select)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5616

___

### selectionchange

• **selectionchange**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[selectionchange](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#selectionchange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5617

___

### selectstart

• **selectstart**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[selectstart](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#selectstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5618

___

### slotchange

• **slotchange**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[slotchange](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#slotchange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5619

___

### stalled

• **stalled**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[stalled](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#stalled)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5620

___

### submit

• **submit**: [`SubmitEvent`](../modules/annotation_annotation_layer_state._internal_.md#submitevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[submit](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#submit)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5621

___

### suspend

• **suspend**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[suspend](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#suspend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5622

___

### timeupdate

• **timeupdate**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[timeupdate](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#timeupdate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5623

___

### toggle

• **toggle**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[toggle](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#toggle)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5624

___

### touchcancel

• **touchcancel**: [`TouchEvent`](../modules/annotation_annotation_layer_state._internal_.md#touchevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[touchcancel](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#touchcancel)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5625

___

### touchend

• **touchend**: [`TouchEvent`](../modules/annotation_annotation_layer_state._internal_.md#touchevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[touchend](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#touchend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5626

___

### touchmove

• **touchmove**: [`TouchEvent`](../modules/annotation_annotation_layer_state._internal_.md#touchevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[touchmove](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#touchmove)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5627

___

### touchstart

• **touchstart**: [`TouchEvent`](../modules/annotation_annotation_layer_state._internal_.md#touchevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[touchstart](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#touchstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5628

___

### transitioncancel

• **transitioncancel**: [`TransitionEvent`](../modules/annotation_annotation_layer_state._internal_.md#transitionevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[transitioncancel](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#transitioncancel)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5629

___

### transitionend

• **transitionend**: [`TransitionEvent`](../modules/annotation_annotation_layer_state._internal_.md#transitionevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[transitionend](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#transitionend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5630

___

### transitionrun

• **transitionrun**: [`TransitionEvent`](../modules/annotation_annotation_layer_state._internal_.md#transitionevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[transitionrun](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#transitionrun)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5631

___

### transitionstart

• **transitionstart**: [`TransitionEvent`](../modules/annotation_annotation_layer_state._internal_.md#transitionevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[transitionstart](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#transitionstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5632

___

### visibilitychange

• **visibilitychange**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4302

___

### volumechange

• **volumechange**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[volumechange](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#volumechange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5633

___

### waiting

• **waiting**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[waiting](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#waiting)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5634

___

### webkitanimationend

• **webkitanimationend**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[webkitanimationend](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#webkitanimationend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5635

___

### webkitanimationiteration

• **webkitanimationiteration**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[webkitanimationiteration](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#webkitanimationiteration)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5636

___

### webkitanimationstart

• **webkitanimationstart**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[webkitanimationstart](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#webkitanimationstart)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5637

___

### webkittransitionend

• **webkittransitionend**: [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[webkittransitionend](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#webkittransitionend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5638

___

### wheel

• **wheel**: [`WheelEvent`](../modules/annotation_annotation_layer_state._internal_.md#wheelevent)

#### Inherited from

[GlobalEventHandlersEventMap](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md).[wheel](annotation_annotation_layer_state._internal_.GlobalEventHandlersEventMap.md#wheel)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5639
