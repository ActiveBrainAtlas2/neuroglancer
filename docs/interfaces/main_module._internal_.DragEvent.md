[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / DragEvent

# Interface: DragEvent

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).DragEvent

A DOM event that represents a drag and drop interaction. The user initiates a drag by placing a pointer device (such as a mouse) on the touch surface and then dragging the pointer to a new location (such as another DOM element). Applications are free to interpret a drag and drop interaction in an application-specific way.

## Hierarchy

- [`MouseEvent`](../modules/main_module._internal_.md#mouseevent)

  ↳ **`DragEvent`**

## Table of contents

### Properties

- [AT\_TARGET](main_module._internal_.DragEvent.md#at_target)
- [BUBBLING\_PHASE](main_module._internal_.DragEvent.md#bubbling_phase)
- [CAPTURING\_PHASE](main_module._internal_.DragEvent.md#capturing_phase)
- [NONE](main_module._internal_.DragEvent.md#none)
- [altKey](main_module._internal_.DragEvent.md#altkey)
- [bubbles](main_module._internal_.DragEvent.md#bubbles)
- [button](main_module._internal_.DragEvent.md#button)
- [buttons](main_module._internal_.DragEvent.md#buttons)
- [cancelBubble](main_module._internal_.DragEvent.md#cancelbubble)
- [cancelable](main_module._internal_.DragEvent.md#cancelable)
- [clientX](main_module._internal_.DragEvent.md#clientx)
- [clientY](main_module._internal_.DragEvent.md#clienty)
- [composed](main_module._internal_.DragEvent.md#composed)
- [ctrlKey](main_module._internal_.DragEvent.md#ctrlkey)
- [currentTarget](main_module._internal_.DragEvent.md#currenttarget)
- [dataTransfer](main_module._internal_.DragEvent.md#datatransfer)
- [defaultPrevented](main_module._internal_.DragEvent.md#defaultprevented)
- [detail](main_module._internal_.DragEvent.md#detail)
- [eventPhase](main_module._internal_.DragEvent.md#eventphase)
- [isTrusted](main_module._internal_.DragEvent.md#istrusted)
- [metaKey](main_module._internal_.DragEvent.md#metakey)
- [movementX](main_module._internal_.DragEvent.md#movementx)
- [movementY](main_module._internal_.DragEvent.md#movementy)
- [offsetX](main_module._internal_.DragEvent.md#offsetx)
- [offsetY](main_module._internal_.DragEvent.md#offsety)
- [pageX](main_module._internal_.DragEvent.md#pagex)
- [pageY](main_module._internal_.DragEvent.md#pagey)
- [relatedTarget](main_module._internal_.DragEvent.md#relatedtarget)
- [returnValue](main_module._internal_.DragEvent.md#returnvalue)
- [screenX](main_module._internal_.DragEvent.md#screenx)
- [screenY](main_module._internal_.DragEvent.md#screeny)
- [shiftKey](main_module._internal_.DragEvent.md#shiftkey)
- [srcElement](main_module._internal_.DragEvent.md#srcelement)
- [target](main_module._internal_.DragEvent.md#target)
- [timeStamp](main_module._internal_.DragEvent.md#timestamp)
- [type](main_module._internal_.DragEvent.md#type)
- [view](main_module._internal_.DragEvent.md#view)
- [which](main_module._internal_.DragEvent.md#which)
- [x](main_module._internal_.DragEvent.md#x)
- [y](main_module._internal_.DragEvent.md#y)

### Methods

- [composedPath](main_module._internal_.DragEvent.md#composedpath)
- [getModifierState](main_module._internal_.DragEvent.md#getmodifierstate)
- [initEvent](main_module._internal_.DragEvent.md#initevent)
- [initMouseEvent](main_module._internal_.DragEvent.md#initmouseevent)
- [initUIEvent](main_module._internal_.DragEvent.md#inituievent)
- [preventDefault](main_module._internal_.DragEvent.md#preventdefault)
- [stopImmediatePropagation](main_module._internal_.DragEvent.md#stopimmediatepropagation)
- [stopPropagation](main_module._internal_.DragEvent.md#stoppropagation)

## Properties

### AT\_TARGET

• `Readonly` **AT\_TARGET**: `number`

#### Inherited from

MouseEvent.AT\_TARGET

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5050

___

### BUBBLING\_PHASE

• `Readonly` **BUBBLING\_PHASE**: `number`

#### Inherited from

MouseEvent.BUBBLING\_PHASE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5051

___

### CAPTURING\_PHASE

• `Readonly` **CAPTURING\_PHASE**: `number`

#### Inherited from

MouseEvent.CAPTURING\_PHASE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5052

___

### NONE

• `Readonly` **NONE**: `number`

#### Inherited from

MouseEvent.NONE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5053

___

### altKey

• `Readonly` **altKey**: `boolean`

#### Inherited from

MouseEvent.altKey

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9790

___

### bubbles

• `Readonly` **bubbles**: `boolean`

Returns true or false depending on how event was initialized. True if event goes through its target's ancestors in reverse tree order, and false otherwise.

#### Inherited from

MouseEvent.bubbles

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5016

___

### button

• `Readonly` **button**: `number`

#### Inherited from

MouseEvent.button

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9791

___

### buttons

• `Readonly` **buttons**: `number`

#### Inherited from

MouseEvent.buttons

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9792

___

### cancelBubble

• **cancelBubble**: `boolean`

#### Inherited from

MouseEvent.cancelBubble

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5017

___

### cancelable

• `Readonly` **cancelable**: `boolean`

Returns true or false depending on how event was initialized. Its return value does not always carry meaning, but true can indicate that part of the operation during which event was dispatched, can be canceled by invoking the preventDefault() method.

#### Inherited from

MouseEvent.cancelable

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5019

___

### clientX

• `Readonly` **clientX**: `number`

#### Inherited from

MouseEvent.clientX

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9793

___

### clientY

• `Readonly` **clientY**: `number`

#### Inherited from

MouseEvent.clientY

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9794

___

### composed

• `Readonly` **composed**: `boolean`

Returns true or false depending on how event was initialized. True if event invokes listeners past a ShadowRoot node that is the root of its target, and false otherwise.

#### Inherited from

MouseEvent.composed

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5021

___

### ctrlKey

• `Readonly` **ctrlKey**: `boolean`

#### Inherited from

MouseEvent.ctrlKey

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9795

___

### currentTarget

• `Readonly` **currentTarget**: ``null`` \| [`EventTarget`](../modules/main_module._internal_.md#eventtarget)

Returns the object whose event listener's callback is currently being invoked.

#### Inherited from

MouseEvent.currentTarget

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5023

___

### dataTransfer

• `Readonly` **dataTransfer**: ``null`` \| [`DataTransfer`](../modules/main_module._internal_.md#datatransfer)

Returns the DataTransfer object for the event.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4777

___

### defaultPrevented

• `Readonly` **defaultPrevented**: `boolean`

Returns true if preventDefault() was invoked successfully to indicate cancelation, and false otherwise.

#### Inherited from

MouseEvent.defaultPrevented

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5025

___

### detail

• `Readonly` **detail**: `number`

#### Inherited from

MouseEvent.detail

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14327

___

### eventPhase

• `Readonly` **eventPhase**: `number`

Returns the event's phase, which is one of NONE, CAPTURING_PHASE, AT_TARGET, and BUBBLING_PHASE.

#### Inherited from

MouseEvent.eventPhase

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5027

___

### isTrusted

• `Readonly` **isTrusted**: `boolean`

Returns true if event was dispatched by the user agent, and false otherwise.

#### Inherited from

MouseEvent.isTrusted

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5029

___

### metaKey

• `Readonly` **metaKey**: `boolean`

#### Inherited from

MouseEvent.metaKey

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9796

___

### movementX

• `Readonly` **movementX**: `number`

#### Inherited from

MouseEvent.movementX

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9797

___

### movementY

• `Readonly` **movementY**: `number`

#### Inherited from

MouseEvent.movementY

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9798

___

### offsetX

• `Readonly` **offsetX**: `number`

#### Inherited from

MouseEvent.offsetX

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9799

___

### offsetY

• `Readonly` **offsetY**: `number`

#### Inherited from

MouseEvent.offsetY

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9800

___

### pageX

• `Readonly` **pageX**: `number`

#### Inherited from

MouseEvent.pageX

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9801

___

### pageY

• `Readonly` **pageY**: `number`

#### Inherited from

MouseEvent.pageY

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9802

___

### relatedTarget

• `Readonly` **relatedTarget**: ``null`` \| [`EventTarget`](../modules/main_module._internal_.md#eventtarget)

#### Inherited from

MouseEvent.relatedTarget

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9803

___

### returnValue

• **returnValue**: `boolean`

**`deprecated`**

#### Inherited from

MouseEvent.returnValue

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5031

___

### screenX

• `Readonly` **screenX**: `number`

#### Inherited from

MouseEvent.screenX

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9804

___

### screenY

• `Readonly` **screenY**: `number`

#### Inherited from

MouseEvent.screenY

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9805

___

### shiftKey

• `Readonly` **shiftKey**: `boolean`

#### Inherited from

MouseEvent.shiftKey

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9806

___

### srcElement

• `Readonly` **srcElement**: ``null`` \| [`EventTarget`](../modules/main_module._internal_.md#eventtarget)

**`deprecated`**

#### Inherited from

MouseEvent.srcElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5033

___

### target

• `Readonly` **target**: ``null`` \| [`EventTarget`](../modules/main_module._internal_.md#eventtarget)

Returns the object to which event is dispatched (its target).

#### Inherited from

MouseEvent.target

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5035

___

### timeStamp

• `Readonly` **timeStamp**: `number`

Returns the event's timestamp as the number of milliseconds measured relative to the time origin.

#### Inherited from

MouseEvent.timeStamp

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5037

___

### type

• `Readonly` **type**: `string`

Returns the type of event, e.g. "click", "hashchange", or "submit".

#### Inherited from

MouseEvent.type

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5039

___

### view

• `Readonly` **view**: ``null`` \| [`Window`](../modules/main_module._internal_.md#window)

#### Inherited from

MouseEvent.view

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14328

___

### which

• `Readonly` **which**: `number`

**`deprecated`**

#### Inherited from

MouseEvent.which

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14330

___

### x

• `Readonly` **x**: `number`

#### Inherited from

MouseEvent.x

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9807

___

### y

• `Readonly` **y**: `number`

#### Inherited from

MouseEvent.y

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9808

## Methods

### composedPath

▸ **composedPath**(): [`EventTarget`](../modules/main_module._internal_.md#eventtarget)[]

Returns the invocation target objects of event's path (objects on which listeners will be invoked), except for any nodes in shadow trees of which the shadow root's mode is "closed" that are not reachable from event's currentTarget.

#### Returns

[`EventTarget`](../modules/main_module._internal_.md#eventtarget)[]

#### Inherited from

MouseEvent.composedPath

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5041

___

### getModifierState

▸ **getModifierState**(`keyArg`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyArg` | `string` |

#### Returns

`boolean`

#### Inherited from

MouseEvent.getModifierState

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9809

___

### initEvent

▸ **initEvent**(`type`, `bubbles?`, `cancelable?`): `void`

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `bubbles?` | `boolean` |
| `cancelable?` | `boolean` |

#### Returns

`void`

#### Inherited from

MouseEvent.initEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5043

___

### initMouseEvent

▸ **initMouseEvent**(`typeArg`, `canBubbleArg`, `cancelableArg`, `viewArg`, `detailArg`, `screenXArg`, `screenYArg`, `clientXArg`, `clientYArg`, `ctrlKeyArg`, `altKeyArg`, `shiftKeyArg`, `metaKeyArg`, `buttonArg`, `relatedTargetArg`): `void`

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeArg` | `string` |
| `canBubbleArg` | `boolean` |
| `cancelableArg` | `boolean` |
| `viewArg` | [`Window`](../modules/main_module._internal_.md#window) |
| `detailArg` | `number` |
| `screenXArg` | `number` |
| `screenYArg` | `number` |
| `clientXArg` | `number` |
| `clientYArg` | `number` |
| `ctrlKeyArg` | `boolean` |
| `altKeyArg` | `boolean` |
| `shiftKeyArg` | `boolean` |
| `metaKeyArg` | `boolean` |
| `buttonArg` | `number` |
| `relatedTargetArg` | ``null`` \| [`EventTarget`](../modules/main_module._internal_.md#eventtarget) |

#### Returns

`void`

#### Inherited from

MouseEvent.initMouseEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9811

___

### initUIEvent

▸ **initUIEvent**(`typeArg`, `bubblesArg?`, `cancelableArg?`, `viewArg?`, `detailArg?`): `void`

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeArg` | `string` |
| `bubblesArg?` | `boolean` |
| `cancelableArg?` | `boolean` |
| `viewArg?` | ``null`` \| [`Window`](../modules/main_module._internal_.md#window) |
| `detailArg?` | `number` |

#### Returns

`void`

#### Inherited from

MouseEvent.initUIEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14332

___

### preventDefault

▸ **preventDefault**(): `void`

If invoked when the cancelable attribute value is true, and while executing a listener for the event with passive set to false, signals to the operation that caused event to be dispatched that it needs to be canceled.

#### Returns

`void`

#### Inherited from

MouseEvent.preventDefault

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5045

___

### stopImmediatePropagation

▸ **stopImmediatePropagation**(): `void`

Invoking this method prevents event from reaching any registered event listeners after the current one finishes running and, when dispatched in a tree, also prevents event from reaching any other objects.

#### Returns

`void`

#### Inherited from

MouseEvent.stopImmediatePropagation

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5047

___

### stopPropagation

▸ **stopPropagation**(): `void`

When dispatched in a tree, invoking this method prevents event from reaching any objects other than the current object.

#### Returns

`void`

#### Inherited from

MouseEvent.stopPropagation

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5049
