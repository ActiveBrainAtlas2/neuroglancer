[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / WheelEvent

# Interface: WheelEvent

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).WheelEvent

Events that occur due to the user moving a mouse wheel or similar input device.

## Hierarchy

- [`MouseEvent`](../modules/main_module._internal_.md#mouseevent)

  ↳ **`WheelEvent`**

## Table of contents

### Properties

- [AT\_TARGET](main_module._internal_.WheelEvent.md#at_target)
- [BUBBLING\_PHASE](main_module._internal_.WheelEvent.md#bubbling_phase)
- [CAPTURING\_PHASE](main_module._internal_.WheelEvent.md#capturing_phase)
- [DOM\_DELTA\_LINE](main_module._internal_.WheelEvent.md#dom_delta_line)
- [DOM\_DELTA\_PAGE](main_module._internal_.WheelEvent.md#dom_delta_page)
- [DOM\_DELTA\_PIXEL](main_module._internal_.WheelEvent.md#dom_delta_pixel)
- [NONE](main_module._internal_.WheelEvent.md#none)
- [altKey](main_module._internal_.WheelEvent.md#altkey)
- [bubbles](main_module._internal_.WheelEvent.md#bubbles)
- [button](main_module._internal_.WheelEvent.md#button)
- [buttons](main_module._internal_.WheelEvent.md#buttons)
- [cancelBubble](main_module._internal_.WheelEvent.md#cancelbubble)
- [cancelable](main_module._internal_.WheelEvent.md#cancelable)
- [clientX](main_module._internal_.WheelEvent.md#clientx)
- [clientY](main_module._internal_.WheelEvent.md#clienty)
- [composed](main_module._internal_.WheelEvent.md#composed)
- [ctrlKey](main_module._internal_.WheelEvent.md#ctrlkey)
- [currentTarget](main_module._internal_.WheelEvent.md#currenttarget)
- [defaultPrevented](main_module._internal_.WheelEvent.md#defaultprevented)
- [deltaMode](main_module._internal_.WheelEvent.md#deltamode)
- [deltaX](main_module._internal_.WheelEvent.md#deltax)
- [deltaY](main_module._internal_.WheelEvent.md#deltay)
- [deltaZ](main_module._internal_.WheelEvent.md#deltaz)
- [detail](main_module._internal_.WheelEvent.md#detail)
- [eventPhase](main_module._internal_.WheelEvent.md#eventphase)
- [isTrusted](main_module._internal_.WheelEvent.md#istrusted)
- [metaKey](main_module._internal_.WheelEvent.md#metakey)
- [movementX](main_module._internal_.WheelEvent.md#movementx)
- [movementY](main_module._internal_.WheelEvent.md#movementy)
- [offsetX](main_module._internal_.WheelEvent.md#offsetx)
- [offsetY](main_module._internal_.WheelEvent.md#offsety)
- [pageX](main_module._internal_.WheelEvent.md#pagex)
- [pageY](main_module._internal_.WheelEvent.md#pagey)
- [relatedTarget](main_module._internal_.WheelEvent.md#relatedtarget)
- [returnValue](main_module._internal_.WheelEvent.md#returnvalue)
- [screenX](main_module._internal_.WheelEvent.md#screenx)
- [screenY](main_module._internal_.WheelEvent.md#screeny)
- [shiftKey](main_module._internal_.WheelEvent.md#shiftkey)
- [srcElement](main_module._internal_.WheelEvent.md#srcelement)
- [target](main_module._internal_.WheelEvent.md#target)
- [timeStamp](main_module._internal_.WheelEvent.md#timestamp)
- [type](main_module._internal_.WheelEvent.md#type)
- [view](main_module._internal_.WheelEvent.md#view)
- [which](main_module._internal_.WheelEvent.md#which)
- [x](main_module._internal_.WheelEvent.md#x)
- [y](main_module._internal_.WheelEvent.md#y)

### Methods

- [composedPath](main_module._internal_.WheelEvent.md#composedpath)
- [getModifierState](main_module._internal_.WheelEvent.md#getmodifierstate)
- [initEvent](main_module._internal_.WheelEvent.md#initevent)
- [initMouseEvent](main_module._internal_.WheelEvent.md#initmouseevent)
- [initUIEvent](main_module._internal_.WheelEvent.md#inituievent)
- [preventDefault](main_module._internal_.WheelEvent.md#preventdefault)
- [stopImmediatePropagation](main_module._internal_.WheelEvent.md#stopimmediatepropagation)
- [stopPropagation](main_module._internal_.WheelEvent.md#stoppropagation)

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

### DOM\_DELTA\_LINE

• `Readonly` **DOM\_DELTA\_LINE**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16595

___

### DOM\_DELTA\_PAGE

• `Readonly` **DOM\_DELTA\_PAGE**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16596

___

### DOM\_DELTA\_PIXEL

• `Readonly` **DOM\_DELTA\_PIXEL**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16597

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

### defaultPrevented

• `Readonly` **defaultPrevented**: `boolean`

Returns true if preventDefault() was invoked successfully to indicate cancelation, and false otherwise.

#### Inherited from

MouseEvent.defaultPrevented

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5025

___

### deltaMode

• `Readonly` **deltaMode**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16591

___

### deltaX

• `Readonly` **deltaX**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16592

___

### deltaY

• `Readonly` **deltaY**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16593

___

### deltaZ

• `Readonly` **deltaZ**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16594

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

**`Deprecated`**

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

**`Deprecated`**

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

**`Deprecated`**

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

**`Deprecated`**

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

**`Deprecated`**

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

**`Deprecated`**

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
