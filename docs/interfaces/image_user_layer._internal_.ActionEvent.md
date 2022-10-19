[neuroglancer](../README.md) / [Modules](../modules.md) / [image\_user\_layer](../modules/image_user_layer.md) / [<internal\>](../modules/image_user_layer._internal_.md) / ActionEvent

# Interface: ActionEvent<Info\>

[image_user_layer](../modules/image_user_layer.md).[<internal>](../modules/image_user_layer._internal_.md).ActionEvent

DOM Event type used for dispatching actions.

Additional information relevant to the acction is specified as the `detail` property.

## Type parameters

| Name |
| :------ |
| `Info` |

## Hierarchy

- [`CustomEvent`](../modules/axes_lines._internal_.md#customevent)

  ↳ **`ActionEvent`**

## Table of contents

### Properties

- [AT\_TARGET](image_user_layer._internal_.ActionEvent.md#at_target)
- [BUBBLING\_PHASE](image_user_layer._internal_.ActionEvent.md#bubbling_phase)
- [CAPTURING\_PHASE](image_user_layer._internal_.ActionEvent.md#capturing_phase)
- [NONE](image_user_layer._internal_.ActionEvent.md#none)
- [bubbles](image_user_layer._internal_.ActionEvent.md#bubbles)
- [cancelBubble](image_user_layer._internal_.ActionEvent.md#cancelbubble)
- [cancelable](image_user_layer._internal_.ActionEvent.md#cancelable)
- [composed](image_user_layer._internal_.ActionEvent.md#composed)
- [currentTarget](image_user_layer._internal_.ActionEvent.md#currenttarget)
- [defaultPrevented](image_user_layer._internal_.ActionEvent.md#defaultprevented)
- [detail](image_user_layer._internal_.ActionEvent.md#detail)
- [eventPhase](image_user_layer._internal_.ActionEvent.md#eventphase)
- [isTrusted](image_user_layer._internal_.ActionEvent.md#istrusted)
- [returnValue](image_user_layer._internal_.ActionEvent.md#returnvalue)
- [srcElement](image_user_layer._internal_.ActionEvent.md#srcelement)
- [target](image_user_layer._internal_.ActionEvent.md#target)
- [timeStamp](image_user_layer._internal_.ActionEvent.md#timestamp)
- [type](image_user_layer._internal_.ActionEvent.md#type)

### Methods

- [composedPath](image_user_layer._internal_.ActionEvent.md#composedpath)
- [initCustomEvent](image_user_layer._internal_.ActionEvent.md#initcustomevent)
- [initEvent](image_user_layer._internal_.ActionEvent.md#initevent)
- [preventDefault](image_user_layer._internal_.ActionEvent.md#preventdefault)
- [stopImmediatePropagation](image_user_layer._internal_.ActionEvent.md#stopimmediatepropagation)
- [stopPropagation](image_user_layer._internal_.ActionEvent.md#stoppropagation)

## Properties

### AT\_TARGET

• `Readonly` **AT\_TARGET**: `number`

#### Inherited from

CustomEvent.AT\_TARGET

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5050

___

### BUBBLING\_PHASE

• `Readonly` **BUBBLING\_PHASE**: `number`

#### Inherited from

CustomEvent.BUBBLING\_PHASE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5051

___

### CAPTURING\_PHASE

• `Readonly` **CAPTURING\_PHASE**: `number`

#### Inherited from

CustomEvent.CAPTURING\_PHASE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5052

___

### NONE

• `Readonly` **NONE**: `number`

#### Inherited from

CustomEvent.NONE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5053

___

### bubbles

• `Readonly` **bubbles**: `boolean`

Returns true or false depending on how event was initialized. True if event goes through its target's ancestors in reverse tree order, and false otherwise.

#### Inherited from

CustomEvent.bubbles

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5016

___

### cancelBubble

• **cancelBubble**: `boolean`

#### Inherited from

CustomEvent.cancelBubble

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5017

___

### cancelable

• `Readonly` **cancelable**: `boolean`

Returns true or false depending on how event was initialized. Its return value does not always carry meaning, but true can indicate that part of the operation during which event was dispatched, can be canceled by invoking the preventDefault() method.

#### Inherited from

CustomEvent.cancelable

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5019

___

### composed

• `Readonly` **composed**: `boolean`

Returns true or false depending on how event was initialized. True if event invokes listeners past a ShadowRoot node that is the root of its target, and false otherwise.

#### Inherited from

CustomEvent.composed

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5021

___

### currentTarget

• `Readonly` **currentTarget**: ``null`` \| [`EventTarget`](../modules/axes_lines._internal_.md#eventtarget)

Returns the object whose event listener's callback is currently being invoked.

#### Inherited from

CustomEvent.currentTarget

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5023

___

### defaultPrevented

• `Readonly` **defaultPrevented**: `boolean`

Returns true if preventDefault() was invoked successfully to indicate cancelation, and false otherwise.

#### Inherited from

CustomEvent.defaultPrevented

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5025

___

### detail

• **detail**: `Info`

#### Overrides

CustomEvent.detail

#### Defined in

[src/neuroglancer/util/event_action_map.ts:407](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/event_action_map.ts#L407)

___

### eventPhase

• `Readonly` **eventPhase**: `number`

Returns the event's phase, which is one of NONE, CAPTURING_PHASE, AT_TARGET, and BUBBLING_PHASE.

#### Inherited from

CustomEvent.eventPhase

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5027

___

### isTrusted

• `Readonly` **isTrusted**: `boolean`

Returns true if event was dispatched by the user agent, and false otherwise.

#### Inherited from

CustomEvent.isTrusted

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5029

___

### returnValue

• **returnValue**: `boolean`

**`deprecated`**

#### Inherited from

CustomEvent.returnValue

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5031

___

### srcElement

• `Readonly` **srcElement**: ``null`` \| [`EventTarget`](../modules/axes_lines._internal_.md#eventtarget)

**`deprecated`**

#### Inherited from

CustomEvent.srcElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5033

___

### target

• `Readonly` **target**: ``null`` \| [`EventTarget`](../modules/axes_lines._internal_.md#eventtarget)

Returns the object to which event is dispatched (its target).

#### Inherited from

CustomEvent.target

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5035

___

### timeStamp

• `Readonly` **timeStamp**: `number`

Returns the event's timestamp as the number of milliseconds measured relative to the time origin.

#### Inherited from

CustomEvent.timeStamp

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5037

___

### type

• `Readonly` **type**: `string`

Returns the type of event, e.g. "click", "hashchange", or "submit".

#### Inherited from

CustomEvent.type

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5039

## Methods

### composedPath

▸ **composedPath**(): [`EventTarget`](../modules/axes_lines._internal_.md#eventtarget)[]

Returns the invocation target objects of event's path (objects on which listeners will be invoked), except for any nodes in shadow trees of which the shadow root's mode is "closed" that are not reachable from event's currentTarget.

#### Returns

[`EventTarget`](../modules/axes_lines._internal_.md#eventtarget)[]

#### Inherited from

CustomEvent.composedPath

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5041

___

### initCustomEvent

▸ **initCustomEvent**(`type`, `bubbles?`, `cancelable?`, `detail?`): `void`

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `bubbles?` | `boolean` |
| `cancelable?` | `boolean` |
| `detail?` | `any` |

#### Returns

`void`

#### Inherited from

CustomEvent.initCustomEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3770

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

CustomEvent.initEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5043

___

### preventDefault

▸ **preventDefault**(): `void`

If invoked when the cancelable attribute value is true, and while executing a listener for the event with passive set to false, signals to the operation that caused event to be dispatched that it needs to be canceled.

#### Returns

`void`

#### Inherited from

CustomEvent.preventDefault

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5045

___

### stopImmediatePropagation

▸ **stopImmediatePropagation**(): `void`

Invoking this method prevents event from reaching any registered event listeners after the current one finishes running and, when dispatched in a tree, also prevents event from reaching any other objects.

#### Returns

`void`

#### Inherited from

CustomEvent.stopImmediatePropagation

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5047

___

### stopPropagation

▸ **stopPropagation**(): `void`

When dispatched in a tree, invoking this method prevents event from reaching any objects other than the current object.

#### Returns

`void`

#### Inherited from

CustomEvent.stopPropagation

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5049
