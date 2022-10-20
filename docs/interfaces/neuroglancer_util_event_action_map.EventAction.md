[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/util/event\_action\_map](../modules/neuroglancer_util_event_action_map.md) / EventAction

# Interface: EventAction

[neuroglancer/util/event_action_map](../modules/neuroglancer_util_event_action_map.md).EventAction

Specifies how to handle an event.

## Table of contents

### Properties

- [action](neuroglancer_util_event_action_map.EventAction.md#action)
- [originalEventIdentifier](neuroglancer_util_event_action_map.EventAction.md#originaleventidentifier)
- [preventDefault](neuroglancer_util_event_action_map.EventAction.md#preventdefault)
- [stopPropagation](neuroglancer_util_event_action_map.EventAction.md#stoppropagation)

## Properties

### action

• **action**: `string`

Identifier of action to dispatch.

#### Defined in

[src/neuroglancer/util/event_action_map.ts:79](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/event_action_map.ts#L79)

___

### originalEventIdentifier

• `Optional` **originalEventIdentifier**: `string`

#### Defined in

[src/neuroglancer/util/event_action_map.ts:93](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/event_action_map.ts#L93)

___

### preventDefault

• `Optional` **preventDefault**: `boolean`

Whether to call `preventDefault()` on the triggering event.  Defaults to true.  Additionally,
if `preventDefault()` is called on the dispatched ActionEvent, `preventDefault()` will also be
called on the triggering event regardless of the value of `preventDefault`.

#### Defined in

[src/neuroglancer/util/event_action_map.ts:91](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/event_action_map.ts#L91)

___

### stopPropagation

• `Optional` **stopPropagation**: `boolean`

Whether to call `stopPropagation()` on the triggering event.  Defaults to true.

#### Defined in

[src/neuroglancer/util/event_action_map.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/util/event_action_map.ts#L84)
