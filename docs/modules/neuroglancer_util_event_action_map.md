[neuroglancer](../README.md) / [Exports](../modules.md) / neuroglancer/util/event\_action\_map

# Module: neuroglancer/util/event\_action\_map

## Table of contents

### Modules

- [&lt;internal\&gt;](neuroglancer_util_event_action_map._internal_.md)

### Enumerations

- [Modifiers](../enums/neuroglancer_util_event_action_map.Modifiers.md)

### Classes

- [EventActionMap](../classes/neuroglancer_util_event_action_map.EventActionMap.md)

### Interfaces

- [ActionEvent](../interfaces/neuroglancer_util_event_action_map.ActionEvent.md)
- [EventAction](../interfaces/neuroglancer_util_event_action_map.EventAction.md)
- [EventModifierKeyState](../interfaces/neuroglancer_util_event_action_map.EventModifierKeyState.md)

### Type Aliases

- [ActionIdentifier](neuroglancer_util_event_action_map.md#actionidentifier)
- [EventActionMapInterface](neuroglancer_util_event_action_map.md#eventactionmapinterface)
- [EventIdentifier](neuroglancer_util_event_action_map.md#eventidentifier)
- [ModifierMask](neuroglancer_util_event_action_map.md#modifiermask)
- [NormalizedEventIdentifier](neuroglancer_util_event_action_map.md#normalizedeventidentifier)

### Variables

- [eventPhaseNames](neuroglancer_util_event_action_map.md#eventphasenames)

### Functions

- [dispatchEvent](neuroglancer_util_event_action_map.md#dispatchevent)
- [dispatchEventAction](neuroglancer_util_event_action_map.md#dispatcheventaction)
- [dispatchEventWithModifiers](neuroglancer_util_event_action_map.md#dispatcheventwithmodifiers)
- [getEventModifierMask](neuroglancer_util_event_action_map.md#geteventmodifiermask)
- [getStrokeIdentifier](neuroglancer_util_event_action_map.md#getstrokeidentifier)
- [normalizeEventAction](neuroglancer_util_event_action_map.md#normalizeeventaction)
- [registerActionListener](neuroglancer_util_event_action_map.md#registeractionlistener)

## Type Aliases

### ActionIdentifier

Ƭ **ActionIdentifier**: `string`

Identifies a user-defined action name.  Actions are dispatched as DOM events, using 'action:'
prepended to the ActionIdentifier as the event type.

#### Defined in

[src/neuroglancer/util/event_action_map.ts:70](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/event_action_map.ts#L70)

___

### EventActionMapInterface

Ƭ **EventActionMapInterface**: [`HierarchicalMapInterface`](../interfaces/neuroglancer_util_hierarchical_map.HierarchicalMapInterface.md)<[`NormalizedEventIdentifier`](neuroglancer_util_event_action_map.md#normalizedeventidentifier), [`EventAction`](../interfaces/neuroglancer_util_event_action_map.EventAction.md)\>

#### Defined in

[src/neuroglancer/util/event_action_map.ts:96](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/event_action_map.ts#L96)

___

### EventIdentifier

Ƭ **EventIdentifier**: `string`

An EventIdentifier specifies a criteria for matching input events using a relaxed form of the
NormalizedEventIdentifier syntax.  Each EventIdentifier corresponds to one or more
NormalizedEventIdentifier values.

  EventIdentifier ::= [ phase ':' ] ( modifier '+' )* base-event-identifier

In addition to the phase being optional, the modifiers may be specified in any order.  If the
phase is not specified, then the EventIdentifier matches both the 'at' and 'bubble' phases.

#### Defined in

[src/neuroglancer/util/event_action_map.ts:64](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/event_action_map.ts#L64)

___

### ModifierMask

Ƭ **ModifierMask**: `number`

#### Defined in

[src/neuroglancer/util/event_action_map.ts:106](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/event_action_map.ts#L106)

___

### NormalizedEventIdentifier

Ƭ **NormalizedEventIdentifier**: `string`

Specifies a unique string representation of an input event, used for matching an input event to a
corresponding action with which it has been associated.

The EventIdentifier combines several pieces of information using the following syntax:

  NormalizedEventIdentifier ::= phase ':' ( modifier '+' )* base-event-identifier

  - The event `phase` name, corresponding to the phase of DOM event processing at which the event was
    received, which may be 'at', 'bubble', or 'capture'.  (Currently, 'capture' is not supported.)

  - The set of `modifier` keys ('control', 'alt', 'meta', and/or 'shift') active when the event occurred.

  - The `base-event-identifier`, which in the case of keyboard events is the lowercase KeyboardEvent
    `code`, and in the case of mouse events is one of:

      - 'mousedown' + n
      - 'mouseup' + n
      - 'click' + n
      - 'dblclick' + n
      - 'wheel'

    where `n` is the index of the mouse button, starting from 0.

In the normalized form used for matching events, the set of modifiers must be specified in
exactly the order: 'control', 'alt', 'meta', 'shift'.  Consequently, there is exactly one
NormalizedEventIdentifier representation for a given input event.

#### Defined in

[src/neuroglancer/util/event_action_map.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/event_action_map.ts#L52)

## Variables

### eventPhaseNames

• `Const` **eventPhaseNames**: `string`[] = `[]`

#### Defined in

[src/neuroglancer/util/event_action_map.ts:380](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/event_action_map.ts#L380)

## Functions

### dispatchEvent

▸ **dispatchEvent**(`baseIdentifier`, `originalEvent`, `eventPhase`, `detail`, `eventMap`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseIdentifier` | `string` |
| `originalEvent` | [`Event`](main_module._internal_.md#event) |
| `eventPhase` | `number` |
| `detail` | `any` |
| `eventMap` | [`EventActionMapInterface`](neuroglancer_util_event_action_map.md#eventactionmapinterface) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/event_action_map.ts:385](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/event_action_map.ts#L385)

___

### dispatchEventAction

▸ **dispatchEventAction**(`originalEvent`, `detail`, `eventAction`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `originalEvent` | [`Event`](main_module._internal_.md#event) |
| `detail` | `any` |
| `eventAction` | `undefined` \| [`EventAction`](../interfaces/neuroglancer_util_event_action_map.EventAction.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/event_action_map.ts:364](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/event_action_map.ts#L364)

___

### dispatchEventWithModifiers

▸ **dispatchEventWithModifiers**(`baseIdentifier`, `originalEvent`, `detail`, `eventMap`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseIdentifier` | `string` |
| `originalEvent` | [`Event`](main_module._internal_.md#event) & [`EventModifierKeyState`](../interfaces/neuroglancer_util_event_action_map.EventModifierKeyState.md) |
| `detail` | `any` |
| `eventMap` | [`EventActionMapInterface`](neuroglancer_util_event_action_map.md#eventactionmapinterface) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/util/event_action_map.ts:393](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/event_action_map.ts#L393)

___

### getEventModifierMask

▸ **getEventModifierMask**(`event`): [`ModifierMask`](neuroglancer_util_event_action_map.md#modifiermask)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`EventModifierKeyState`](../interfaces/neuroglancer_util_event_action_map.EventModifierKeyState.md) |

#### Returns

[`ModifierMask`](neuroglancer_util_event_action_map.md#modifiermask)

#### Defined in

[src/neuroglancer/util/event_action_map.ts:115](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/event_action_map.ts#L115)

___

### getStrokeIdentifier

▸ **getStrokeIdentifier**(`keyName`, `modifiers`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyName` | `string` |
| `modifiers` | `number` |

#### Returns

`string`

#### Defined in

[src/neuroglancer/util/event_action_map.ts:120](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/event_action_map.ts#L120)

___

### normalizeEventAction

▸ **normalizeEventAction**(`parsed`, `action`): [`EventAction`](../interfaces/neuroglancer_util_event_action_map.EventAction.md)

Normalizes an ActionOrEventAction into an EventAction.

#### Parameters

| Name | Type |
| :------ | :------ |
| `parsed` | [`ParsedEventIdentifier`](../interfaces/neuroglancer_util_event_action_map._internal_.ParsedEventIdentifier.md) |
| `action` | [`ActionOrEventAction`](neuroglancer_util_event_action_map._internal_.md#actionoreventaction) |

#### Returns

[`EventAction`](../interfaces/neuroglancer_util_event_action_map.EventAction.md)

#### Defined in

[src/neuroglancer/util/event_action_map.ts:275](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/event_action_map.ts#L275)

___

### registerActionListener

▸ **registerActionListener**<`Info`\>(`target`, `action`, `listener`, `options?`): () => `void`

Register an event listener for the specified `action`.

There is no checking that the `TriggerEvent` type is suitable for use with the specified
`action`.

#### Type parameters

| Name |
| :------ |
| `Info` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EventTarget`](main_module._internal_.md#eventtarget) |
| `action` | `string` |
| `listener` | (`event`: [`ActionEvent`](../interfaces/neuroglancer_util_event_action_map.ActionEvent.md)<`Info`\>) => `void` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](../interfaces/main_module._internal_.AddEventListenerOptions.md) |

#### Returns

`fn`

A nullary disposer function that unregisters the listener when called.

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/neuroglancer/util/event_action_map.ts:418](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/event_action_map.ts#L418)
