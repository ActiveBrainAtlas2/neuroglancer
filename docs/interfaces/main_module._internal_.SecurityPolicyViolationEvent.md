[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / SecurityPolicyViolationEvent

# Interface: SecurityPolicyViolationEvent

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).SecurityPolicyViolationEvent

Inherits from Event, and represents the event object of an event sent on a document or worker when its content security policy is violated.

## Hierarchy

- [`Event`](../modules/main_module._internal_.md#event)

  ↳ **`SecurityPolicyViolationEvent`**

## Table of contents

### Properties

- [AT\_TARGET](main_module._internal_.SecurityPolicyViolationEvent.md#at_target)
- [BUBBLING\_PHASE](main_module._internal_.SecurityPolicyViolationEvent.md#bubbling_phase)
- [CAPTURING\_PHASE](main_module._internal_.SecurityPolicyViolationEvent.md#capturing_phase)
- [NONE](main_module._internal_.SecurityPolicyViolationEvent.md#none)
- [blockedURI](main_module._internal_.SecurityPolicyViolationEvent.md#blockeduri)
- [bubbles](main_module._internal_.SecurityPolicyViolationEvent.md#bubbles)
- [cancelBubble](main_module._internal_.SecurityPolicyViolationEvent.md#cancelbubble)
- [cancelable](main_module._internal_.SecurityPolicyViolationEvent.md#cancelable)
- [columnNumber](main_module._internal_.SecurityPolicyViolationEvent.md#columnnumber)
- [composed](main_module._internal_.SecurityPolicyViolationEvent.md#composed)
- [currentTarget](main_module._internal_.SecurityPolicyViolationEvent.md#currenttarget)
- [defaultPrevented](main_module._internal_.SecurityPolicyViolationEvent.md#defaultprevented)
- [disposition](main_module._internal_.SecurityPolicyViolationEvent.md#disposition)
- [documentURI](main_module._internal_.SecurityPolicyViolationEvent.md#documenturi)
- [effectiveDirective](main_module._internal_.SecurityPolicyViolationEvent.md#effectivedirective)
- [eventPhase](main_module._internal_.SecurityPolicyViolationEvent.md#eventphase)
- [isTrusted](main_module._internal_.SecurityPolicyViolationEvent.md#istrusted)
- [lineNumber](main_module._internal_.SecurityPolicyViolationEvent.md#linenumber)
- [originalPolicy](main_module._internal_.SecurityPolicyViolationEvent.md#originalpolicy)
- [referrer](main_module._internal_.SecurityPolicyViolationEvent.md#referrer)
- [returnValue](main_module._internal_.SecurityPolicyViolationEvent.md#returnvalue)
- [sample](main_module._internal_.SecurityPolicyViolationEvent.md#sample)
- [sourceFile](main_module._internal_.SecurityPolicyViolationEvent.md#sourcefile)
- [srcElement](main_module._internal_.SecurityPolicyViolationEvent.md#srcelement)
- [statusCode](main_module._internal_.SecurityPolicyViolationEvent.md#statuscode)
- [target](main_module._internal_.SecurityPolicyViolationEvent.md#target)
- [timeStamp](main_module._internal_.SecurityPolicyViolationEvent.md#timestamp)
- [type](main_module._internal_.SecurityPolicyViolationEvent.md#type)
- [violatedDirective](main_module._internal_.SecurityPolicyViolationEvent.md#violateddirective)

### Methods

- [composedPath](main_module._internal_.SecurityPolicyViolationEvent.md#composedpath)
- [initEvent](main_module._internal_.SecurityPolicyViolationEvent.md#initevent)
- [preventDefault](main_module._internal_.SecurityPolicyViolationEvent.md#preventdefault)
- [stopImmediatePropagation](main_module._internal_.SecurityPolicyViolationEvent.md#stopimmediatepropagation)
- [stopPropagation](main_module._internal_.SecurityPolicyViolationEvent.md#stoppropagation)

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

### blockedURI

• `Readonly` **blockedURI**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13419

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

### columnNumber

• `Readonly` **columnNumber**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13420

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

• `Readonly` **currentTarget**: ``null`` \| [`EventTarget`](../modules/main_module._internal_.md#eventtarget)

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

### disposition

• `Readonly` **disposition**: [`SecurityPolicyViolationEventDisposition`](../modules/main_module._internal_.md#securitypolicyviolationeventdisposition)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13421

___

### documentURI

• `Readonly` **documentURI**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13422

___

### effectiveDirective

• `Readonly` **effectiveDirective**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13423

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

### lineNumber

• `Readonly` **lineNumber**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13424

___

### originalPolicy

• `Readonly` **originalPolicy**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13425

___

### referrer

• `Readonly` **referrer**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13426

___

### returnValue

• **returnValue**: `boolean`

**`deprecated`**

#### Inherited from

Event.returnValue

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5031

___

### sample

• `Readonly` **sample**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13427

___

### sourceFile

• `Readonly` **sourceFile**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13428

___

### srcElement

• `Readonly` **srcElement**: ``null`` \| [`EventTarget`](../modules/main_module._internal_.md#eventtarget)

**`deprecated`**

#### Inherited from

Event.srcElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5033

___

### statusCode

• `Readonly` **statusCode**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13429

___

### target

• `Readonly` **target**: ``null`` \| [`EventTarget`](../modules/main_module._internal_.md#eventtarget)

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

___

### violatedDirective

• `Readonly` **violatedDirective**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13430

## Methods

### composedPath

▸ **composedPath**(): [`EventTarget`](../modules/main_module._internal_.md#eventtarget)[]

Returns the invocation target objects of event's path (objects on which listeners will be invoked), except for any nodes in shadow trees of which the shadow root's mode is "closed" that are not reachable from event's currentTarget.

#### Returns

[`EventTarget`](../modules/main_module._internal_.md#eventtarget)[]

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
