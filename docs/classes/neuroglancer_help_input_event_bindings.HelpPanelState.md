[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/help/input\_event\_bindings](../modules/neuroglancer_help_input_event_bindings.md) / HelpPanelState

# Class: HelpPanelState

[neuroglancer/help/input_event_bindings](../modules/neuroglancer_help_input_event_bindings.md).HelpPanelState

## Table of contents

### Constructors

- [constructor](neuroglancer_help_input_event_bindings.HelpPanelState.md#constructor)

### Properties

- [location](neuroglancer_help_input_event_bindings.HelpPanelState.md#location)

### Accessors

- [changed](neuroglancer_help_input_event_bindings.HelpPanelState.md#changed)

### Methods

- [reset](neuroglancer_help_input_event_bindings.HelpPanelState.md#reset)
- [restoreState](neuroglancer_help_input_event_bindings.HelpPanelState.md#restorestate)
- [toJSON](neuroglancer_help_input_event_bindings.HelpPanelState.md#tojson)

## Constructors

### constructor

• **new HelpPanelState**()

## Properties

### location

• **location**: [`TrackableSidePanelLocation`](neuroglancer_ui_side_panel_location.TrackableSidePanelLocation.md)

#### Defined in

[src/neuroglancer/help/input_event_bindings.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/help/input_event_bindings.ts#L53)

## Accessors

### changed

• `get` **changed**(): [`Signal`](neuroglancer_util_signal.Signal.md)<() => `void`\>

#### Returns

[`Signal`](neuroglancer_util_signal.Signal.md)<() => `void`\>

#### Defined in

[src/neuroglancer/help/input_event_bindings.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/help/input_event_bindings.ts#L54)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/help/input_event_bindings.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/help/input_event_bindings.ts#L60)

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

[src/neuroglancer/help/input_event_bindings.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/help/input_event_bindings.ts#L63)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[src/neuroglancer/help/input_event_bindings.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/help/input_event_bindings.ts#L57)
