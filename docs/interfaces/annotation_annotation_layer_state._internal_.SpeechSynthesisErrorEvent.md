[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / SpeechSynthesisErrorEvent

# Interface: SpeechSynthesisErrorEvent

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).SpeechSynthesisErrorEvent

## Hierarchy

- [`SpeechSynthesisEvent`](../modules/annotation_annotation_layer_state._internal_.md#speechsynthesisevent)

  ↳ **`SpeechSynthesisErrorEvent`**

## Table of contents

### Properties

- [AT\_TARGET](annotation_annotation_layer_state._internal_.SpeechSynthesisErrorEvent.md#at_target)
- [BUBBLING\_PHASE](annotation_annotation_layer_state._internal_.SpeechSynthesisErrorEvent.md#bubbling_phase)
- [CAPTURING\_PHASE](annotation_annotation_layer_state._internal_.SpeechSynthesisErrorEvent.md#capturing_phase)
- [NONE](annotation_annotation_layer_state._internal_.SpeechSynthesisErrorEvent.md#none)
- [bubbles](annotation_annotation_layer_state._internal_.SpeechSynthesisErrorEvent.md#bubbles)
- [cancelBubble](annotation_annotation_layer_state._internal_.SpeechSynthesisErrorEvent.md#cancelbubble)
- [cancelable](annotation_annotation_layer_state._internal_.SpeechSynthesisErrorEvent.md#cancelable)
- [charIndex](annotation_annotation_layer_state._internal_.SpeechSynthesisErrorEvent.md#charindex)
- [charLength](annotation_annotation_layer_state._internal_.SpeechSynthesisErrorEvent.md#charlength)
- [composed](annotation_annotation_layer_state._internal_.SpeechSynthesisErrorEvent.md#composed)
- [currentTarget](annotation_annotation_layer_state._internal_.SpeechSynthesisErrorEvent.md#currenttarget)
- [defaultPrevented](annotation_annotation_layer_state._internal_.SpeechSynthesisErrorEvent.md#defaultprevented)
- [elapsedTime](annotation_annotation_layer_state._internal_.SpeechSynthesisErrorEvent.md#elapsedtime)
- [error](annotation_annotation_layer_state._internal_.SpeechSynthesisErrorEvent.md#error)
- [eventPhase](annotation_annotation_layer_state._internal_.SpeechSynthesisErrorEvent.md#eventphase)
- [isTrusted](annotation_annotation_layer_state._internal_.SpeechSynthesisErrorEvent.md#istrusted)
- [name](annotation_annotation_layer_state._internal_.SpeechSynthesisErrorEvent.md#name)
- [returnValue](annotation_annotation_layer_state._internal_.SpeechSynthesisErrorEvent.md#returnvalue)
- [srcElement](annotation_annotation_layer_state._internal_.SpeechSynthesisErrorEvent.md#srcelement)
- [target](annotation_annotation_layer_state._internal_.SpeechSynthesisErrorEvent.md#target)
- [timeStamp](annotation_annotation_layer_state._internal_.SpeechSynthesisErrorEvent.md#timestamp)
- [type](annotation_annotation_layer_state._internal_.SpeechSynthesisErrorEvent.md#type)
- [utterance](annotation_annotation_layer_state._internal_.SpeechSynthesisErrorEvent.md#utterance)

### Methods

- [composedPath](annotation_annotation_layer_state._internal_.SpeechSynthesisErrorEvent.md#composedpath)
- [initEvent](annotation_annotation_layer_state._internal_.SpeechSynthesisErrorEvent.md#initevent)
- [preventDefault](annotation_annotation_layer_state._internal_.SpeechSynthesisErrorEvent.md#preventdefault)
- [stopImmediatePropagation](annotation_annotation_layer_state._internal_.SpeechSynthesisErrorEvent.md#stopimmediatepropagation)
- [stopPropagation](annotation_annotation_layer_state._internal_.SpeechSynthesisErrorEvent.md#stoppropagation)

## Properties

### AT\_TARGET

• `Readonly` **AT\_TARGET**: `number`

#### Inherited from

SpeechSynthesisEvent.AT\_TARGET

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5050

___

### BUBBLING\_PHASE

• `Readonly` **BUBBLING\_PHASE**: `number`

#### Inherited from

SpeechSynthesisEvent.BUBBLING\_PHASE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5051

___

### CAPTURING\_PHASE

• `Readonly` **CAPTURING\_PHASE**: `number`

#### Inherited from

SpeechSynthesisEvent.CAPTURING\_PHASE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5052

___

### NONE

• `Readonly` **NONE**: `number`

#### Inherited from

SpeechSynthesisEvent.NONE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5053

___

### bubbles

• `Readonly` **bubbles**: `boolean`

Returns true or false depending on how event was initialized. True if event goes through its target's ancestors in reverse tree order, and false otherwise.

#### Inherited from

SpeechSynthesisEvent.bubbles

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5016

___

### cancelBubble

• **cancelBubble**: `boolean`

#### Inherited from

SpeechSynthesisEvent.cancelBubble

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5017

___

### cancelable

• `Readonly` **cancelable**: `boolean`

Returns true or false depending on how event was initialized. Its return value does not always carry meaning, but true can indicate that part of the operation during which event was dispatched, can be canceled by invoking the preventDefault() method.

#### Inherited from

SpeechSynthesisEvent.cancelable

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5019

___

### charIndex

• `Readonly` **charIndex**: `number`

#### Inherited from

SpeechSynthesisEvent.charIndex

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13726

___

### charLength

• `Readonly` **charLength**: `number`

#### Inherited from

SpeechSynthesisEvent.charLength

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13727

___

### composed

• `Readonly` **composed**: `boolean`

Returns true or false depending on how event was initialized. True if event invokes listeners past a ShadowRoot node that is the root of its target, and false otherwise.

#### Inherited from

SpeechSynthesisEvent.composed

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5021

___

### currentTarget

• `Readonly` **currentTarget**: ``null`` \| [`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget)

Returns the object whose event listener's callback is currently being invoked.

#### Inherited from

SpeechSynthesisEvent.currentTarget

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5023

___

### defaultPrevented

• `Readonly` **defaultPrevented**: `boolean`

Returns true if preventDefault() was invoked successfully to indicate cancelation, and false otherwise.

#### Inherited from

SpeechSynthesisEvent.defaultPrevented

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5025

___

### elapsedTime

• `Readonly` **elapsedTime**: `number`

#### Inherited from

SpeechSynthesisEvent.elapsedTime

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13728

___

### error

• `Readonly` **error**: [`SpeechSynthesisErrorCode`](../modules/annotation_annotation_layer_state._internal_.md#speechsynthesiserrorcode)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13716

___

### eventPhase

• `Readonly` **eventPhase**: `number`

Returns the event's phase, which is one of NONE, CAPTURING_PHASE, AT_TARGET, and BUBBLING_PHASE.

#### Inherited from

SpeechSynthesisEvent.eventPhase

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5027

___

### isTrusted

• `Readonly` **isTrusted**: `boolean`

Returns true if event was dispatched by the user agent, and false otherwise.

#### Inherited from

SpeechSynthesisEvent.isTrusted

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5029

___

### name

• `Readonly` **name**: `string`

#### Inherited from

SpeechSynthesisEvent.name

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13729

___

### returnValue

• **returnValue**: `boolean`

**`deprecated`**

#### Inherited from

SpeechSynthesisEvent.returnValue

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5031

___

### srcElement

• `Readonly` **srcElement**: ``null`` \| [`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget)

**`deprecated`**

#### Inherited from

SpeechSynthesisEvent.srcElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5033

___

### target

• `Readonly` **target**: ``null`` \| [`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget)

Returns the object to which event is dispatched (its target).

#### Inherited from

SpeechSynthesisEvent.target

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5035

___

### timeStamp

• `Readonly` **timeStamp**: `number`

Returns the event's timestamp as the number of milliseconds measured relative to the time origin.

#### Inherited from

SpeechSynthesisEvent.timeStamp

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5037

___

### type

• `Readonly` **type**: `string`

Returns the type of event, e.g. "click", "hashchange", or "submit".

#### Inherited from

SpeechSynthesisEvent.type

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5039

___

### utterance

• `Readonly` **utterance**: [`SpeechSynthesisUtterance`](../modules/annotation_annotation_layer_state._internal_.md#speechsynthesisutterance)

#### Inherited from

SpeechSynthesisEvent.utterance

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13730

## Methods

### composedPath

▸ **composedPath**(): [`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget)[]

Returns the invocation target objects of event's path (objects on which listeners will be invoked), except for any nodes in shadow trees of which the shadow root's mode is "closed" that are not reachable from event's currentTarget.

#### Returns

[`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget)[]

#### Inherited from

SpeechSynthesisEvent.composedPath

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

SpeechSynthesisEvent.initEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5043

___

### preventDefault

▸ **preventDefault**(): `void`

If invoked when the cancelable attribute value is true, and while executing a listener for the event with passive set to false, signals to the operation that caused event to be dispatched that it needs to be canceled.

#### Returns

`void`

#### Inherited from

SpeechSynthesisEvent.preventDefault

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5045

___

### stopImmediatePropagation

▸ **stopImmediatePropagation**(): `void`

Invoking this method prevents event from reaching any registered event listeners after the current one finishes running and, when dispatched in a tree, also prevents event from reaching any other objects.

#### Returns

`void`

#### Inherited from

SpeechSynthesisEvent.stopImmediatePropagation

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5047

___

### stopPropagation

▸ **stopPropagation**(): `void`

When dispatched in a tree, invoking this method prevents event from reaching any objects other than the current object.

#### Returns

`void`

#### Inherited from

SpeechSynthesisEvent.stopPropagation

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5049
