[neuroglancer](../README.md) / [Modules](../modules.md) / [axes\_lines](../modules/axes_lines.md) / [<internal\>](../modules/axes_lines._internal_.md) / KeyboardEvent

# Interface: KeyboardEvent

[axes_lines](../modules/axes_lines.md).[<internal>](../modules/axes_lines._internal_.md).KeyboardEvent

KeyboardEvent objects describe a user interaction with the keyboard; each event describes a single interaction between the user and a key (or combination of a key with modifier keys) on the keyboard.

## Hierarchy

- [`UIEvent`](../modules/axes_lines._internal_.md#uievent)

  ↳ **`KeyboardEvent`**

## Table of contents

### Properties

- [AT\_TARGET](axes_lines._internal_.KeyboardEvent.md#at_target)
- [BUBBLING\_PHASE](axes_lines._internal_.KeyboardEvent.md#bubbling_phase)
- [CAPTURING\_PHASE](axes_lines._internal_.KeyboardEvent.md#capturing_phase)
- [DOM\_KEY\_LOCATION\_LEFT](axes_lines._internal_.KeyboardEvent.md#dom_key_location_left)
- [DOM\_KEY\_LOCATION\_NUMPAD](axes_lines._internal_.KeyboardEvent.md#dom_key_location_numpad)
- [DOM\_KEY\_LOCATION\_RIGHT](axes_lines._internal_.KeyboardEvent.md#dom_key_location_right)
- [DOM\_KEY\_LOCATION\_STANDARD](axes_lines._internal_.KeyboardEvent.md#dom_key_location_standard)
- [NONE](axes_lines._internal_.KeyboardEvent.md#none)
- [altKey](axes_lines._internal_.KeyboardEvent.md#altkey)
- [bubbles](axes_lines._internal_.KeyboardEvent.md#bubbles)
- [cancelBubble](axes_lines._internal_.KeyboardEvent.md#cancelbubble)
- [cancelable](axes_lines._internal_.KeyboardEvent.md#cancelable)
- [charCode](axes_lines._internal_.KeyboardEvent.md#charcode)
- [code](axes_lines._internal_.KeyboardEvent.md#code)
- [composed](axes_lines._internal_.KeyboardEvent.md#composed)
- [ctrlKey](axes_lines._internal_.KeyboardEvent.md#ctrlkey)
- [currentTarget](axes_lines._internal_.KeyboardEvent.md#currenttarget)
- [defaultPrevented](axes_lines._internal_.KeyboardEvent.md#defaultprevented)
- [detail](axes_lines._internal_.KeyboardEvent.md#detail)
- [eventPhase](axes_lines._internal_.KeyboardEvent.md#eventphase)
- [isComposing](axes_lines._internal_.KeyboardEvent.md#iscomposing)
- [isTrusted](axes_lines._internal_.KeyboardEvent.md#istrusted)
- [key](axes_lines._internal_.KeyboardEvent.md#key)
- [keyCode](axes_lines._internal_.KeyboardEvent.md#keycode)
- [location](axes_lines._internal_.KeyboardEvent.md#location)
- [metaKey](axes_lines._internal_.KeyboardEvent.md#metakey)
- [repeat](axes_lines._internal_.KeyboardEvent.md#repeat)
- [returnValue](axes_lines._internal_.KeyboardEvent.md#returnvalue)
- [shiftKey](axes_lines._internal_.KeyboardEvent.md#shiftkey)
- [srcElement](axes_lines._internal_.KeyboardEvent.md#srcelement)
- [target](axes_lines._internal_.KeyboardEvent.md#target)
- [timeStamp](axes_lines._internal_.KeyboardEvent.md#timestamp)
- [type](axes_lines._internal_.KeyboardEvent.md#type)
- [view](axes_lines._internal_.KeyboardEvent.md#view)
- [which](axes_lines._internal_.KeyboardEvent.md#which)

### Methods

- [composedPath](axes_lines._internal_.KeyboardEvent.md#composedpath)
- [getModifierState](axes_lines._internal_.KeyboardEvent.md#getmodifierstate)
- [initEvent](axes_lines._internal_.KeyboardEvent.md#initevent)
- [initKeyboardEvent](axes_lines._internal_.KeyboardEvent.md#initkeyboardevent)
- [initUIEvent](axes_lines._internal_.KeyboardEvent.md#inituievent)
- [preventDefault](axes_lines._internal_.KeyboardEvent.md#preventdefault)
- [stopImmediatePropagation](axes_lines._internal_.KeyboardEvent.md#stopimmediatepropagation)
- [stopPropagation](axes_lines._internal_.KeyboardEvent.md#stoppropagation)

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

### DOM\_KEY\_LOCATION\_LEFT

• `Readonly` **DOM\_KEY\_LOCATION\_LEFT**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8981

___

### DOM\_KEY\_LOCATION\_NUMPAD

• `Readonly` **DOM\_KEY\_LOCATION\_NUMPAD**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8982

___

### DOM\_KEY\_LOCATION\_RIGHT

• `Readonly` **DOM\_KEY\_LOCATION\_RIGHT**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8983

___

### DOM\_KEY\_LOCATION\_STANDARD

• `Readonly` **DOM\_KEY\_LOCATION\_STANDARD**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8984

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

node_modules/typescript/lib/lib.dom.d.ts:8965

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

### charCode

• `Readonly` **charCode**: `number`

**`deprecated`**

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8967

___

### code

• `Readonly` **code**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8968

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

node_modules/typescript/lib/lib.dom.d.ts:8969

___

### currentTarget

• `Readonly` **currentTarget**: ``null`` \| [`EventTarget`](../modules/axes_lines._internal_.md#eventtarget)

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

### isComposing

• `Readonly` **isComposing**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8970

___

### isTrusted

• `Readonly` **isTrusted**: `boolean`

Returns true if event was dispatched by the user agent, and false otherwise.

#### Inherited from

UIEvent.isTrusted

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5029

___

### key

• `Readonly` **key**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8971

___

### keyCode

• `Readonly` **keyCode**: `number`

**`deprecated`**

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8973

___

### location

• `Readonly` **location**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8974

___

### metaKey

• `Readonly` **metaKey**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8975

___

### repeat

• `Readonly` **repeat**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8976

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

node_modules/typescript/lib/lib.dom.d.ts:8977

___

### srcElement

• `Readonly` **srcElement**: ``null`` \| [`EventTarget`](../modules/axes_lines._internal_.md#eventtarget)

**`deprecated`**

#### Inherited from

UIEvent.srcElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5033

___

### target

• `Readonly` **target**: ``null`` \| [`EventTarget`](../modules/axes_lines._internal_.md#eventtarget)

Returns the object to which event is dispatched (its target).

#### Inherited from

UIEvent.target

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5035

___

### timeStamp

• `Readonly` **timeStamp**: `number`

Returns the event's timestamp as the number of milliseconds measured relative to the time origin.

#### Inherited from

UIEvent.timeStamp

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5037

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

• `Readonly` **view**: ``null`` \| [`Window`](../modules/axes_lines._internal_.md#window)

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

▸ **composedPath**(): [`EventTarget`](../modules/axes_lines._internal_.md#eventtarget)[]

Returns the invocation target objects of event's path (objects on which listeners will be invoked), except for any nodes in shadow trees of which the shadow root's mode is "closed" that are not reachable from event's currentTarget.

#### Returns

[`EventTarget`](../modules/axes_lines._internal_.md#eventtarget)[]

#### Inherited from

UIEvent.composedPath

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

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8978

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

### initKeyboardEvent

▸ **initKeyboardEvent**(`typeArg`, `bubblesArg?`, `cancelableArg?`, `viewArg?`, `keyArg?`, `locationArg?`, `ctrlKey?`, `altKey?`, `shiftKey?`, `metaKey?`): `void`

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeArg` | `string` |
| `bubblesArg?` | `boolean` |
| `cancelableArg?` | `boolean` |
| `viewArg?` | ``null`` \| [`Window`](../modules/axes_lines._internal_.md#window) |
| `keyArg?` | `string` |
| `locationArg?` | `number` |
| `ctrlKey?` | `boolean` |
| `altKey?` | `boolean` |
| `shiftKey?` | `boolean` |
| `metaKey?` | `boolean` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8980

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
| `viewArg?` | ``null`` \| [`Window`](../modules/axes_lines._internal_.md#window) |
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
