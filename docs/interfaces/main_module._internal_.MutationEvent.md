[neuroglancer](../README.md) / [Exports](../modules.md) / [main\_module](../modules/main_module.md) / [<internal\>](../modules/main_module._internal_.md) / MutationEvent

# Interface: MutationEvent

[main_module](../modules/main_module.md).[<internal>](../modules/main_module._internal_.md).MutationEvent

Provides event properties that are specific to modifications to the Document Object Model (DOM) hierarchy and nodes.

**`Deprecated`**

DOM4 [DOM] provides a new mechanism using a MutationObserver interface which addresses the use cases that mutation events solve, but in a more performant manner. Thus, this specification describes mutation events for reference and completeness of legacy behavior, but deprecates the use of the MutationEvent interface.

## Hierarchy

- [`Event`](../modules/main_module._internal_.md#event)

  ↳ **`MutationEvent`**

## Table of contents

### Properties

- [ADDITION](main_module._internal_.MutationEvent.md#addition)
- [AT\_TARGET](main_module._internal_.MutationEvent.md#at_target)
- [BUBBLING\_PHASE](main_module._internal_.MutationEvent.md#bubbling_phase)
- [CAPTURING\_PHASE](main_module._internal_.MutationEvent.md#capturing_phase)
- [MODIFICATION](main_module._internal_.MutationEvent.md#modification)
- [NONE](main_module._internal_.MutationEvent.md#none)
- [REMOVAL](main_module._internal_.MutationEvent.md#removal)
- [attrChange](main_module._internal_.MutationEvent.md#attrchange)
- [attrName](main_module._internal_.MutationEvent.md#attrname)
- [bubbles](main_module._internal_.MutationEvent.md#bubbles)
- [cancelBubble](main_module._internal_.MutationEvent.md#cancelbubble)
- [cancelable](main_module._internal_.MutationEvent.md#cancelable)
- [composed](main_module._internal_.MutationEvent.md#composed)
- [currentTarget](main_module._internal_.MutationEvent.md#currenttarget)
- [defaultPrevented](main_module._internal_.MutationEvent.md#defaultprevented)
- [eventPhase](main_module._internal_.MutationEvent.md#eventphase)
- [isTrusted](main_module._internal_.MutationEvent.md#istrusted)
- [newValue](main_module._internal_.MutationEvent.md#newvalue)
- [prevValue](main_module._internal_.MutationEvent.md#prevvalue)
- [relatedNode](main_module._internal_.MutationEvent.md#relatednode)
- [returnValue](main_module._internal_.MutationEvent.md#returnvalue)
- [srcElement](main_module._internal_.MutationEvent.md#srcelement)
- [target](main_module._internal_.MutationEvent.md#target)
- [timeStamp](main_module._internal_.MutationEvent.md#timestamp)
- [type](main_module._internal_.MutationEvent.md#type)

### Methods

- [composedPath](main_module._internal_.MutationEvent.md#composedpath)
- [initEvent](main_module._internal_.MutationEvent.md#initevent)
- [initMutationEvent](main_module._internal_.MutationEvent.md#initmutationevent)
- [preventDefault](main_module._internal_.MutationEvent.md#preventdefault)
- [stopImmediatePropagation](main_module._internal_.MutationEvent.md#stopimmediatepropagation)
- [stopPropagation](main_module._internal_.MutationEvent.md#stoppropagation)

## Properties

### ADDITION

• `Readonly` **ADDITION**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9836

___

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

### MODIFICATION

• `Readonly` **MODIFICATION**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9837

___

### NONE

• `Readonly` **NONE**: `number`

#### Inherited from

Event.NONE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5053

___

### REMOVAL

• `Readonly` **REMOVAL**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9838

___

### attrChange

• `Readonly` **attrChange**: `number`

**`Deprecated`**

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9825

___

### attrName

• `Readonly` **attrName**: `string`

**`Deprecated`**

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9827

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

### newValue

• `Readonly` **newValue**: `string`

**`Deprecated`**

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9829

___

### prevValue

• `Readonly` **prevValue**: `string`

**`Deprecated`**

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9831

___

### relatedNode

• `Readonly` **relatedNode**: ``null`` \| [`Node`](../modules/main_module._internal_.md#node)

**`Deprecated`**

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9833

___

### returnValue

• **returnValue**: `boolean`

**`Deprecated`**

#### Inherited from

Event.returnValue

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5031

___

### srcElement

• `Readonly` **srcElement**: ``null`` \| [`EventTarget`](../modules/main_module._internal_.md#eventtarget)

**`Deprecated`**

#### Inherited from

Event.srcElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5033

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

Event.initEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5043

___

### initMutationEvent

▸ **initMutationEvent**(`typeArg`, `bubblesArg?`, `cancelableArg?`, `relatedNodeArg?`, `prevValueArg?`, `newValueArg?`, `attrNameArg?`, `attrChangeArg?`): `void`

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeArg` | `string` |
| `bubblesArg?` | `boolean` |
| `cancelableArg?` | `boolean` |
| `relatedNodeArg?` | ``null`` \| [`Node`](../modules/main_module._internal_.md#node) |
| `prevValueArg?` | `string` |
| `newValueArg?` | `string` |
| `attrNameArg?` | `string` |
| `attrChangeArg?` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9835

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
