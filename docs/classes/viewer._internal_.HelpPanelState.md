[neuroglancer](../README.md) / [Modules](../modules.md) / [viewer](../modules/viewer.md) / [<internal\>](../modules/viewer._internal_.md) / HelpPanelState

# Class: HelpPanelState

[viewer](../modules/viewer.md).[<internal>](../modules/viewer._internal_.md).HelpPanelState

## Table of contents

### Constructors

- [constructor](viewer._internal_.HelpPanelState.md#constructor)

### Properties

- [location](viewer._internal_.HelpPanelState.md#location)

### Accessors

- [changed](viewer._internal_.HelpPanelState.md#changed)

### Methods

- [reset](viewer._internal_.HelpPanelState.md#reset)
- [restoreState](viewer._internal_.HelpPanelState.md#restorestate)
- [toJSON](viewer._internal_.HelpPanelState.md#tojson)

## Constructors

### constructor

• **new HelpPanelState**()

## Properties

### location

• **location**: [`TrackableSidePanelLocation`](image_user_layer._internal_.TrackableSidePanelLocation.md)

#### Defined in

[src/neuroglancer/help/input_event_bindings.ts:53](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/help/input_event_bindings.ts#L53)

## Accessors

### changed

• `get` **changed**(): [`Signal`](coordinate_transform._internal_.Signal.md)<() => `void`\>

#### Returns

[`Signal`](coordinate_transform._internal_.Signal.md)<() => `void`\>

#### Defined in

[src/neuroglancer/help/input_event_bindings.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/help/input_event_bindings.ts#L54)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/help/input_event_bindings.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/help/input_event_bindings.ts#L60)

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

[src/neuroglancer/help/input_event_bindings.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/help/input_event_bindings.ts#L63)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[src/neuroglancer/help/input_event_bindings.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/help/input_event_bindings.ts#L57)
