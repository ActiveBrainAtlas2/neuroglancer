[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / PaymentRequestUpdateEvent

# Interface: PaymentRequestUpdateEvent

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).PaymentRequestUpdateEvent

This Payment Request API interface enables a web page to update the details of a PaymentRequest in response to a user action.
Available only in secure contexts.

## Hierarchy

- [`Event`](../modules/annotation_annotation_layer_state._internal_.md#event)

  ↳ **`PaymentRequestUpdateEvent`**

## Table of contents

### Properties

- [AT\_TARGET](annotation_annotation_layer_state._internal_.PaymentRequestUpdateEvent.md#at_target)
- [BUBBLING\_PHASE](annotation_annotation_layer_state._internal_.PaymentRequestUpdateEvent.md#bubbling_phase)
- [CAPTURING\_PHASE](annotation_annotation_layer_state._internal_.PaymentRequestUpdateEvent.md#capturing_phase)
- [NONE](annotation_annotation_layer_state._internal_.PaymentRequestUpdateEvent.md#none)
- [bubbles](annotation_annotation_layer_state._internal_.PaymentRequestUpdateEvent.md#bubbles)
- [cancelBubble](annotation_annotation_layer_state._internal_.PaymentRequestUpdateEvent.md#cancelbubble)
- [cancelable](annotation_annotation_layer_state._internal_.PaymentRequestUpdateEvent.md#cancelable)
- [composed](annotation_annotation_layer_state._internal_.PaymentRequestUpdateEvent.md#composed)
- [currentTarget](annotation_annotation_layer_state._internal_.PaymentRequestUpdateEvent.md#currenttarget)
- [defaultPrevented](annotation_annotation_layer_state._internal_.PaymentRequestUpdateEvent.md#defaultprevented)
- [eventPhase](annotation_annotation_layer_state._internal_.PaymentRequestUpdateEvent.md#eventphase)
- [isTrusted](annotation_annotation_layer_state._internal_.PaymentRequestUpdateEvent.md#istrusted)
- [returnValue](annotation_annotation_layer_state._internal_.PaymentRequestUpdateEvent.md#returnvalue)
- [srcElement](annotation_annotation_layer_state._internal_.PaymentRequestUpdateEvent.md#srcelement)
- [target](annotation_annotation_layer_state._internal_.PaymentRequestUpdateEvent.md#target)
- [timeStamp](annotation_annotation_layer_state._internal_.PaymentRequestUpdateEvent.md#timestamp)
- [type](annotation_annotation_layer_state._internal_.PaymentRequestUpdateEvent.md#type)

### Methods

- [composedPath](annotation_annotation_layer_state._internal_.PaymentRequestUpdateEvent.md#composedpath)
- [initEvent](annotation_annotation_layer_state._internal_.PaymentRequestUpdateEvent.md#initevent)
- [preventDefault](annotation_annotation_layer_state._internal_.PaymentRequestUpdateEvent.md#preventdefault)
- [stopImmediatePropagation](annotation_annotation_layer_state._internal_.PaymentRequestUpdateEvent.md#stopimmediatepropagation)
- [stopPropagation](annotation_annotation_layer_state._internal_.PaymentRequestUpdateEvent.md#stoppropagation)
- [updateWith](annotation_annotation_layer_state._internal_.PaymentRequestUpdateEvent.md#updatewith)

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

• `Readonly` **currentTarget**: ``null`` \| [`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget)

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

### isTrusted

• `Readonly` **isTrusted**: `boolean`

Returns true if event was dispatched by the user agent, and false otherwise.

#### Inherited from

Event.isTrusted

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5029

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

• `Readonly` **srcElement**: ``null`` \| [`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget)

**`deprecated`**

#### Inherited from

Event.srcElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5033

___

### target

• `Readonly` **target**: ``null`` \| [`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget)

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

▸ **composedPath**(): [`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget)[]

Returns the invocation target objects of event's path (objects on which listeners will be invoked), except for any nodes in shadow trees of which the shadow root's mode is "closed" that are not reachable from event's currentTarget.

#### Returns

[`EventTarget`](../modules/annotation_annotation_layer_state._internal_.md#eventtarget)[]

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

___

### updateWith

▸ **updateWith**(`detailsPromise`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `detailsPromise` | [`PaymentDetailsUpdate`](annotation_annotation_layer_state._internal_.PaymentDetailsUpdate.md) \| [`PromiseLike`](annotation_annotation_layer_state._internal_.PromiseLike.md)<[`PaymentDetailsUpdate`](annotation_annotation_layer_state._internal_.PaymentDetailsUpdate.md)\> |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10494
