[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / Event

# Interface: Event

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).Event

An event which takes place in the DOM.

## Table of contents

### Properties

- [AT\_TARGET](annotation_annotation_layer_state._internal_.Event.md#at_target)
- [BUBBLING\_PHASE](annotation_annotation_layer_state._internal_.Event.md#bubbling_phase)
- [CAPTURING\_PHASE](annotation_annotation_layer_state._internal_.Event.md#capturing_phase)
- [NONE](annotation_annotation_layer_state._internal_.Event.md#none)
- [bubbles](annotation_annotation_layer_state._internal_.Event.md#bubbles)
- [cancelBubble](annotation_annotation_layer_state._internal_.Event.md#cancelbubble)
- [cancelable](annotation_annotation_layer_state._internal_.Event.md#cancelable)
- [composed](annotation_annotation_layer_state._internal_.Event.md#composed)
- [currentTarget](annotation_annotation_layer_state._internal_.Event.md#currenttarget)
- [defaultPrevented](annotation_annotation_layer_state._internal_.Event.md#defaultprevented)
- [eventPhase](annotation_annotation_layer_state._internal_.Event.md#eventphase)
- [isTrusted](annotation_annotation_layer_state._internal_.Event.md#istrusted)
- [returnValue](annotation_annotation_layer_state._internal_.Event.md#returnvalue)
- [srcElement](annotation_annotation_layer_state._internal_.Event.md#srcelement)
- [target](annotation_annotation_layer_state._internal_.Event.md#target)
- [timeStamp](annotation_annotation_layer_state._internal_.Event.md#timestamp)
- [type](annotation_annotation_layer_state._internal_.Event.md#type)

### Methods

- [composedPath](annotation_annotation_layer_state._internal_.Event.md#composedpath)
- [initEvent](annotation_annotation_layer_state._internal_.Event.md#initevent)
- [preventDefault](annotation_annotation_layer_state._internal_.Event.md#preventdefault)
- [stopImmediatePropagation](annotation_annotation_layer_state._internal_.Event.md#stopimmediatepropagation)
- [stopPropagation](annotation_annotation_layer_state._internal_.Event.md#stoppropagation)

## Properties

### AT\_TARGET

• `Readonly` **AT\_TARGET**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5050

___

### BUBBLING\_PHASE

• `Readonly` **BUBBLING\_PHASE**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5051

___

### CAPTURING\_PHASE

• `Readonly` **CAPTURING\_PHASE**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5052

___

### NONE

• `Readonly` **NONE**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5053

___

### bubbles

• `Readonly` **bubbles**: `boolean`

Returns true or false depending on how event was initialized. True if event goes through its target's ancestors in reverse tree order, and false otherwise.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5016

___

### cancelBubble

• **cancelBubble**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5017

___

### cancelable

• `Readonly` **cancelable**: `boolean`

Returns true or false depending on how event was initialized. Its return value does not always carry meaning, but true can indicate that part of the operation during which event was dispatched, can be canceled by invoking the preventDefault() method.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5019

___

### composed

• `Readonly` **composed**: `boolean`

Returns true or false depending on how event was initialized. True if event invokes listeners past a ShadowRoot node that is the root of its target, and false otherwise.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5021

___

### currentTarget

• `Readonly` **currentTarget**: ``null`` \| [`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget)

Returns the object whose event listener's callback is currently being invoked.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5023

___

### defaultPrevented

• `Readonly` **defaultPrevented**: `boolean`

Returns true if preventDefault() was invoked successfully to indicate cancelation, and false otherwise.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5025

___

### eventPhase

• `Readonly` **eventPhase**: `number`

Returns the event's phase, which is one of NONE, CAPTURING_PHASE, AT_TARGET, and BUBBLING_PHASE.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5027

___

### isTrusted

• `Readonly` **isTrusted**: `boolean`

Returns true if event was dispatched by the user agent, and false otherwise.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5029

___

### returnValue

• **returnValue**: `boolean`

**`deprecated`**

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5031

___

### srcElement

• `Readonly` **srcElement**: ``null`` \| [`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget)

**`deprecated`**

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5033

___

### target

• `Readonly` **target**: ``null`` \| [`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget)

Returns the object to which event is dispatched (its target).

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5035

___

### timeStamp

• `Readonly` **timeStamp**: `number`

Returns the event's timestamp as the number of milliseconds measured relative to the time origin.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5037

___

### type

• `Readonly` **type**: `string`

Returns the type of event, e.g. "click", "hashchange", or "submit".

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5039

## Methods

### composedPath

▸ **composedPath**(): [`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget)[]

Returns the invocation target objects of event's path (objects on which listeners will be invoked), except for any nodes in shadow trees of which the shadow root's mode is "closed" that are not reachable from event's currentTarget.

#### Returns

[`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget)[]

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

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5043

___

### preventDefault

▸ **preventDefault**(): `void`

If invoked when the cancelable attribute value is true, and while executing a listener for the event with passive set to false, signals to the operation that caused event to be dispatched that it needs to be canceled.

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5045

___

### stopImmediatePropagation

▸ **stopImmediatePropagation**(): `void`

Invoking this method prevents event from reaching any registered event listeners after the current one finishes running and, when dispatched in a tree, also prevents event from reaching any other objects.

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5047

___

### stopPropagation

▸ **stopPropagation**(): `void`

When dispatched in a tree, invoking this method prevents event from reaching any objects other than the current object.

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5049
