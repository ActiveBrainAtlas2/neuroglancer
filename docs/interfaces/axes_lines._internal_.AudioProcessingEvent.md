[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / AudioProcessingEvent

# Interface: AudioProcessingEvent

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).AudioProcessingEvent

The Web Audio API events that occur when a ScriptProcessorNode input buffer is ready to be processed.

**`deprecated`** As of the August 29 2014 Web Audio API spec publication, this feature has been marked as deprecated, and is soon to be replaced by AudioWorklet.

## Hierarchy

- [`Event`](../modules/axes_lines._internal_.md#event)

  ↳ **`AudioProcessingEvent`**

## Table of contents

### Properties

- [AT\_TARGET](axes_lines._internal_.AudioProcessingEvent.md#at_target)
- [BUBBLING\_PHASE](axes_lines._internal_.AudioProcessingEvent.md#bubbling_phase)
- [CAPTURING\_PHASE](axes_lines._internal_.AudioProcessingEvent.md#capturing_phase)
- [NONE](axes_lines._internal_.AudioProcessingEvent.md#none)
- [bubbles](axes_lines._internal_.AudioProcessingEvent.md#bubbles)
- [cancelBubble](axes_lines._internal_.AudioProcessingEvent.md#cancelbubble)
- [cancelable](axes_lines._internal_.AudioProcessingEvent.md#cancelable)
- [composed](axes_lines._internal_.AudioProcessingEvent.md#composed)
- [currentTarget](axes_lines._internal_.AudioProcessingEvent.md#currenttarget)
- [defaultPrevented](axes_lines._internal_.AudioProcessingEvent.md#defaultprevented)
- [eventPhase](axes_lines._internal_.AudioProcessingEvent.md#eventphase)
- [inputBuffer](axes_lines._internal_.AudioProcessingEvent.md#inputbuffer)
- [isTrusted](axes_lines._internal_.AudioProcessingEvent.md#istrusted)
- [outputBuffer](axes_lines._internal_.AudioProcessingEvent.md#outputbuffer)
- [playbackTime](axes_lines._internal_.AudioProcessingEvent.md#playbacktime)
- [returnValue](axes_lines._internal_.AudioProcessingEvent.md#returnvalue)
- [srcElement](axes_lines._internal_.AudioProcessingEvent.md#srcelement)
- [target](axes_lines._internal_.AudioProcessingEvent.md#target)
- [timeStamp](axes_lines._internal_.AudioProcessingEvent.md#timestamp)
- [type](axes_lines._internal_.AudioProcessingEvent.md#type)

### Methods

- [composedPath](axes_lines._internal_.AudioProcessingEvent.md#composedpath)
- [initEvent](axes_lines._internal_.AudioProcessingEvent.md#initevent)
- [preventDefault](axes_lines._internal_.AudioProcessingEvent.md#preventdefault)
- [stopImmediatePropagation](axes_lines._internal_.AudioProcessingEvent.md#stopimmediatepropagation)
- [stopPropagation](axes_lines._internal_.AudioProcessingEvent.md#stoppropagation)

## Properties

### AT\_TARGET

• `Readonly` **AT\_TARGET**: `number`

#### Inherited from

Event.AT\_TARGET

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5050

___

### BUBBLING\_PHASE

• `Readonly` **BUBBLING\_PHASE**: `number`

#### Inherited from

Event.BUBBLING\_PHASE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5051

___

### CAPTURING\_PHASE

• `Readonly` **CAPTURING\_PHASE**: `number`

#### Inherited from

Event.CAPTURING\_PHASE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5052

___

### NONE

• `Readonly` **NONE**: `number`

#### Inherited from

Event.NONE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5053

___

### bubbles

• `Readonly` **bubbles**: `boolean`

Returns true or false depending on how event was initialized. True if event goes through its target's ancestors in reverse tree order, and false otherwise.

#### Inherited from

Event.bubbles

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5016

___

### cancelBubble

• **cancelBubble**: `boolean`

#### Inherited from

Event.cancelBubble

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5017

___

### cancelable

• `Readonly` **cancelable**: `boolean`

Returns true or false depending on how event was initialized. Its return value does not always carry meaning, but true can indicate that part of the operation during which event was dispatched, can be canceled by invoking the preventDefault() method.

#### Inherited from

Event.cancelable

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5019

___

### composed

• `Readonly` **composed**: `boolean`

Returns true or false depending on how event was initialized. True if event invokes listeners past a ShadowRoot node that is the root of its target, and false otherwise.

#### Inherited from

Event.composed

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5021

___

### currentTarget

• `Readonly` **currentTarget**: ``null`` \| [`EventTarget`](../modules/axes_lines._internal_.md#eventtarget)

Returns the object whose event listener's callback is currently being invoked.

#### Inherited from

Event.currentTarget

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5023

___

### defaultPrevented

• `Readonly` **defaultPrevented**: `boolean`

Returns true if preventDefault() was invoked successfully to indicate cancelation, and false otherwise.

#### Inherited from

Event.defaultPrevented

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5025

___

### eventPhase

• `Readonly` **eventPhase**: `number`

Returns the event's phase, which is one of NONE, CAPTURING_PHASE, AT_TARGET, and BUBBLING_PHASE.

#### Inherited from

Event.eventPhase

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5027

___

### inputBuffer

• `Readonly` **inputBuffer**: [`AudioBuffer`](../modules/axes_lines._internal_.md#audiobuffer)

**`deprecated`**

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2304

___

### isTrusted

• `Readonly` **isTrusted**: `boolean`

Returns true if event was dispatched by the user agent, and false otherwise.

#### Inherited from

Event.isTrusted

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5029

___

### outputBuffer

• `Readonly` **outputBuffer**: [`AudioBuffer`](../modules/axes_lines._internal_.md#audiobuffer)

**`deprecated`**

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2306

___

### playbackTime

• `Readonly` **playbackTime**: `number`

**`deprecated`**

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2308

___

### returnValue

• **returnValue**: `boolean`

**`deprecated`**

#### Inherited from

Event.returnValue

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5031

___

### srcElement

• `Readonly` **srcElement**: ``null`` \| [`EventTarget`](../modules/axes_lines._internal_.md#eventtarget)

**`deprecated`**

#### Inherited from

Event.srcElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5033

___

### target

• `Readonly` **target**: ``null`` \| [`EventTarget`](../modules/axes_lines._internal_.md#eventtarget)

Returns the object to which event is dispatched (its target).

#### Inherited from

Event.target

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5035

___

### timeStamp

• `Readonly` **timeStamp**: `number`

Returns the event's timestamp as the number of milliseconds measured relative to the time origin.

#### Inherited from

Event.timeStamp

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5037

___

### type

• `Readonly` **type**: `string`

Returns the type of event, e.g. "click", "hashchange", or "submit".

#### Inherited from

Event.type

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5039

## Methods

### composedPath

▸ **composedPath**(): [`EventTarget`](../modules/axes_lines._internal_.md#eventtarget)[]

Returns the invocation target objects of event's path (objects on which listeners will be invoked), except for any nodes in shadow trees of which the shadow root's mode is "closed" that are not reachable from event's currentTarget.

#### Returns

[`EventTarget`](../modules/axes_lines._internal_.md#eventtarget)[]

#### Inherited from

Event.composedPath

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

Event.initEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5043

___

### preventDefault

▸ **preventDefault**(): `void`

If invoked when the cancelable attribute value is true, and while executing a listener for the event with passive set to false, signals to the operation that caused event to be dispatched that it needs to be canceled.

#### Returns

`void`

#### Inherited from

Event.preventDefault

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5045

___

### stopImmediatePropagation

▸ **stopImmediatePropagation**(): `void`

Invoking this method prevents event from reaching any registered event listeners after the current one finishes running and, when dispatched in a tree, also prevents event from reaching any other objects.

#### Returns

`void`

#### Inherited from

Event.stopImmediatePropagation

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5047

___

### stopPropagation

▸ **stopPropagation**(): `void`

When dispatched in a tree, invoking this method prevents event from reaching any objects other than the current object.

#### Returns

`void`

#### Inherited from

Event.stopPropagation

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5049
