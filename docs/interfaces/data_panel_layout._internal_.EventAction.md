[neuroglancer](../README.md) / [Modules](../modules.md) / [data\_panel\_layout](../modules/data_panel_layout.md) / [<internal\>](../modules/data_panel_layout._internal_.md) / EventAction

# Interface: EventAction

[data_panel_layout](../modules/data_panel_layout.md).[<internal>](../modules/data_panel_layout._internal_.md).EventAction

Specifies how to handle an event.

## Table of contents

### Properties

- [action](data_panel_layout._internal_.EventAction.md#action)
- [originalEventIdentifier](data_panel_layout._internal_.EventAction.md#originaleventidentifier)
- [preventDefault](data_panel_layout._internal_.EventAction.md#preventdefault)
- [stopPropagation](data_panel_layout._internal_.EventAction.md#stoppropagation)

## Properties

### action

• **action**: `string`

Identifier of action to dispatch.

#### Defined in

[src/neuroglancer/util/event_action_map.ts:79](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/event_action_map.ts#L79)

___

### originalEventIdentifier

• `Optional` **originalEventIdentifier**: `string`

#### Defined in

[src/neuroglancer/util/event_action_map.ts:93](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/event_action_map.ts#L93)

___

### preventDefault

• `Optional` **preventDefault**: `boolean`

Whether to call `preventDefault()` on the triggering event.  Defaults to true.  Additionally,
if `preventDefault()` is called on the dispatched ActionEvent, `preventDefault()` will also be
called on the triggering event regardless of the value of `preventDefault`.

#### Defined in

[src/neuroglancer/util/event_action_map.ts:91](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/event_action_map.ts#L91)

___

### stopPropagation

• `Optional` **stopPropagation**: `boolean`

Whether to call `stopPropagation()` on the triggering event.  Defaults to true.

#### Defined in

[src/neuroglancer/util/event_action_map.ts:84](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/util/event_action_map.ts#L84)
