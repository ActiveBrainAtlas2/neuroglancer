[neuroglancer](../README.md) / [Modules](../modules.md) / [help/input\_event\_bindings](../modules/help_input_event_bindings.md) / HelpPanelState

# Class: HelpPanelState

[help/input_event_bindings](../modules/help_input_event_bindings.md).HelpPanelState

## Table of contents

### Constructors

- [constructor](help_input_event_bindings.HelpPanelState.md#constructor)

### Properties

- [location](help_input_event_bindings.HelpPanelState.md#location)

### Accessors

- [changed](help_input_event_bindings.HelpPanelState.md#changed)

### Methods

- [reset](help_input_event_bindings.HelpPanelState.md#reset)
- [restoreState](help_input_event_bindings.HelpPanelState.md#restorestate)
- [toJSON](help_input_event_bindings.HelpPanelState.md#tojson)

## Constructors

### constructor

• **new HelpPanelState**()

## Properties

### location

• **location**: [`TrackableSidePanelLocation`](ui_side_panel_location.TrackableSidePanelLocation.md)

#### Defined in

[src/neuroglancer/help/input_event_bindings.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/help/input_event_bindings.ts#L53)

## Accessors

### changed

• `get` **changed**(): [`Signal`](util_signal.Signal.md)<() => `void`\>

#### Returns

[`Signal`](util_signal.Signal.md)<() => `void`\>

#### Defined in

[src/neuroglancer/help/input_event_bindings.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/help/input_event_bindings.ts#L54)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/help/input_event_bindings.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/help/input_event_bindings.ts#L60)

___

### restoreState

▸ **restoreState**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `unknown` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/help/input_event_bindings.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/help/input_event_bindings.ts#L63)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[src/neuroglancer/help/input_event_bindings.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/help/input_event_bindings.ts#L57)
