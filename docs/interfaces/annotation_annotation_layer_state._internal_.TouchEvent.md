[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / TouchEvent

# Interface: TouchEvent

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).TouchEvent

An event sent when the state of contacts with a touch-sensitive surface changes. This surface can be a touch screen or trackpad, for example. The event can describe one or more points of contact with the screen and includes support for detecting movement, addition and removal of contact points, and so forth.

## Hierarchy

- [`UIEvent`](../modules/annotation_annotation_layer_state._internal_.md#uievent)

  ↳ **`TouchEvent`**

## Table of contents

### Properties

- [AT\_TARGET](annotation_annotation_layer_state._internal_.TouchEvent.md#at_target)
- [BUBBLING\_PHASE](annotation_annotation_layer_state._internal_.TouchEvent.md#bubbling_phase)
- [CAPTURING\_PHASE](annotation_annotation_layer_state._internal_.TouchEvent.md#capturing_phase)
- [NONE](annotation_annotation_layer_state._internal_.TouchEvent.md#none)
- [altKey](annotation_annotation_layer_state._internal_.TouchEvent.md#altkey)
- [bubbles](annotation_annotation_layer_state._internal_.TouchEvent.md#bubbles)
- [cancelBubble](annotation_annotation_layer_state._internal_.TouchEvent.md#cancelbubble)
- [cancelable](annotation_annotation_layer_state._internal_.TouchEvent.md#cancelable)
- [changedTouches](annotation_annotation_layer_state._internal_.TouchEvent.md#changedtouches)
- [composed](annotation_annotation_layer_state._internal_.TouchEvent.md#composed)
- [ctrlKey](annotation_annotation_layer_state._internal_.TouchEvent.md#ctrlkey)
- [currentTarget](annotation_annotation_layer_state._internal_.TouchEvent.md#currenttarget)
- [defaultPrevented](annotation_annotation_layer_state._internal_.TouchEvent.md#defaultprevented)
- [detail](annotation_annotation_layer_state._internal_.TouchEvent.md#detail)
- [eventPhase](annotation_annotation_layer_state._internal_.TouchEvent.md#eventphase)
- [isTrusted](annotation_annotation_layer_state._internal_.TouchEvent.md#istrusted)
- [metaKey](annotation_annotation_layer_state._internal_.TouchEvent.md#metakey)
- [returnValue](annotation_annotation_layer_state._internal_.TouchEvent.md#returnvalue)
- [shiftKey](annotation_annotation_layer_state._internal_.TouchEvent.md#shiftkey)
- [srcElement](annotation_annotation_layer_state._internal_.TouchEvent.md#srcelement)
- [target](annotation_annotation_layer_state._internal_.TouchEvent.md#target)
- [targetTouches](annotation_annotation_layer_state._internal_.TouchEvent.md#targettouches)
- [timeStamp](annotation_annotation_layer_state._internal_.TouchEvent.md#timestamp)
- [touches](annotation_annotation_layer_state._internal_.TouchEvent.md#touches)
- [type](annotation_annotation_layer_state._internal_.TouchEvent.md#type)
- [view](annotation_annotation_layer_state._internal_.TouchEvent.md#view)
- [which](annotation_annotation_layer_state._internal_.TouchEvent.md#which)

### Methods

- [composedPath](annotation_annotation_layer_state._internal_.TouchEvent.md#composedpath)
- [initEvent](annotation_annotation_layer_state._internal_.TouchEvent.md#initevent)
- [initUIEvent](annotation_annotation_layer_state._internal_.TouchEvent.md#inituievent)
- [preventDefault](annotation_annotation_layer_state._internal_.TouchEvent.md#preventdefault)
- [stopImmediatePropagation](annotation_annotation_layer_state._internal_.TouchEvent.md#stopimmediatepropagation)
- [stopPropagation](annotation_annotation_layer_state._internal_.TouchEvent.md#stoppropagation)

## Properties

### AT\_TARGET

• `Readonly` **AT\_TARGET**: `number`

#### Inherited from

UIEvent.AT\_TARGET

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5050

___

### BUBBLING\_PHASE

• `Readonly` **BUBBLING\_PHASE**: `number`

#### Inherited from

UIEvent.BUBBLING\_PHASE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5051

___

### CAPTURING\_PHASE

• `Readonly` **CAPTURING\_PHASE**: `number`

#### Inherited from

UIEvent.CAPTURING\_PHASE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5052

___

### NONE

• `Readonly` **NONE**: `number`

#### Inherited from

UIEvent.NONE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5053

___

### altKey

• `Readonly` **altKey**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14234

___

### bubbles

• `Readonly` **bubbles**: `boolean`

Returns true or false depending on how event was initialized. True if event goes through its target's ancestors in reverse tree order, and false otherwise.

#### Inherited from

UIEvent.bubbles

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5016

___

### cancelBubble

• **cancelBubble**: `boolean`

#### Inherited from

UIEvent.cancelBubble

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5017

___

### cancelable

• `Readonly` **cancelable**: `boolean`

Returns true or false depending on how event was initialized. Its return value does not always carry meaning, but true can indicate that part of the operation during which event was dispatched, can be canceled by invoking the preventDefault() method.

#### Inherited from

UIEvent.cancelable

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5019

___

### changedTouches

• `Readonly` **changedTouches**: `TouchList`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14235

___

### composed

• `Readonly` **composed**: `boolean`

Returns true or false depending on how event was initialized. True if event invokes listeners past a ShadowRoot node that is the root of its target, and false otherwise.

#### Inherited from

UIEvent.composed

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5021

___

### ctrlKey

• `Readonly` **ctrlKey**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14236

___

### currentTarget

• `Readonly` **currentTarget**: ``null`` \| [`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget)

Returns the object whose event listener's callback is currently being invoked.

#### Inherited from

UIEvent.currentTarget

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5023

___

### defaultPrevented

• `Readonly` **defaultPrevented**: `boolean`

Returns true if preventDefault() was invoked successfully to indicate cancelation, and false otherwise.

#### Inherited from

UIEvent.defaultPrevented

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5025

___

### detail

• `Readonly` **detail**: `number`

#### Inherited from

UIEvent.detail

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14327

___

### eventPhase

• `Readonly` **eventPhase**: `number`

Returns the event's phase, which is one of NONE, CAPTURING_PHASE, AT_TARGET, and BUBBLING_PHASE.

#### Inherited from

UIEvent.eventPhase

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5027

___

### isTrusted

• `Readonly` **isTrusted**: `boolean`

Returns true if event was dispatched by the user agent, and false otherwise.

#### Inherited from

UIEvent.isTrusted

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5029

___

### metaKey

• `Readonly` **metaKey**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14237

___

### returnValue

• **returnValue**: `boolean`

**`deprecated`**

#### Inherited from

UIEvent.returnValue

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5031

___

### shiftKey

• `Readonly` **shiftKey**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14238

___

### srcElement

• `Readonly` **srcElement**: ``null`` \| [`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget)

**`deprecated`**

#### Inherited from

UIEvent.srcElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5033

___

### target

• `Readonly` **target**: ``null`` \| [`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget)

Returns the object to which event is dispatched (its target).

#### Inherited from

UIEvent.target

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5035

___

### targetTouches

• `Readonly` **targetTouches**: `TouchList`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14239

___

### timeStamp

• `Readonly` **timeStamp**: `number`

Returns the event's timestamp as the number of milliseconds measured relative to the time origin.

#### Inherited from

UIEvent.timeStamp

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5037

___

### touches

• `Readonly` **touches**: `TouchList`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14240

___

### type

• `Readonly` **type**: `string`

Returns the type of event, e.g. "click", "hashchange", or "submit".

#### Inherited from

UIEvent.type

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5039

___

### view

• `Readonly` **view**: ``null`` \| [`Window`](../modules/annotation_annotation_layer_state._internal_.md#window)

#### Inherited from

UIEvent.view

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14328

___

### which

• `Readonly` **which**: `number`

**`deprecated`**

#### Inherited from

UIEvent.which

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14330

## Methods

### composedPath

▸ **composedPath**(): [`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget)[]

Returns the invocation target objects of event's path (objects on which listeners will be invoked), except for any nodes in shadow trees of which the shadow root's mode is "closed" that are not reachable from event's currentTarget.

#### Returns

[`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget)[]

#### Inherited from

UIEvent.composedPath

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5041

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

UIEvent.initEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5043

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
| `viewArg?` | ``null`` \| [`Window`](../modules/annotation_annotation_layer_state._internal_.md#window) |
| `detailArg?` | `number` |

#### Returns

`void`

#### Inherited from

UIEvent.initUIEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14332

___

### preventDefault

▸ **preventDefault**(): `void`

If invoked when the cancelable attribute value is true, and while executing a listener for the event with passive set to false, signals to the operation that caused event to be dispatched that it needs to be canceled.

#### Returns

`void`

#### Inherited from

UIEvent.preventDefault

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5045

___

### stopImmediatePropagation

▸ **stopImmediatePropagation**(): `void`

Invoking this method prevents event from reaching any registered event listeners after the current one finishes running and, when dispatched in a tree, also prevents event from reaching any other objects.

#### Returns

`void`

#### Inherited from

UIEvent.stopImmediatePropagation

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5047

___

### stopPropagation

▸ **stopPropagation**(): `void`

When dispatched in a tree, invoking this method prevents event from reaching any objects other than the current object.

#### Returns

`void`

#### Inherited from

UIEvent.stopPropagation

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5049
