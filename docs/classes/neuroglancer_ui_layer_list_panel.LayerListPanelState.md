[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/ui/layer\_list\_panel](../modules/neuroglancer_ui_layer_list_panel.md) / LayerListPanelState

# Class: LayerListPanelState

[neuroglancer/ui/layer_list_panel](../modules/neuroglancer_ui_layer_list_panel.md).LayerListPanelState

## Implements

- [`Trackable`](../interfaces/neuroglancer_util_trackable.Trackable.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_ui_layer_list_panel.LayerListPanelState.md#constructor)

### Properties

- [location](neuroglancer_ui_layer_list_panel.LayerListPanelState.md#location)

### Accessors

- [changed](neuroglancer_ui_layer_list_panel.LayerListPanelState.md#changed)

### Methods

- [reset](neuroglancer_ui_layer_list_panel.LayerListPanelState.md#reset)
- [restoreState](neuroglancer_ui_layer_list_panel.LayerListPanelState.md#restorestate)
- [toJSON](neuroglancer_ui_layer_list_panel.LayerListPanelState.md#tojson)

## Constructors

### constructor

• **new LayerListPanelState**()

## Properties

### location

• **location**: [`TrackableSidePanelLocation`](neuroglancer_ui_side_panel_location.TrackableSidePanelLocation.md)

#### Defined in

[src/neuroglancer/ui/layer_list_panel.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/layer_list_panel.ts#L45)

## Accessors

### changed

• `get` **changed**(): [`Signal`](neuroglancer_util_signal.Signal.md)<() => `void`\>

#### Returns

[`Signal`](neuroglancer_util_signal.Signal.md)<() => `void`\>

#### Implementation of

[Trackable](../interfaces/neuroglancer_util_trackable.Trackable.md).[changed](../interfaces/neuroglancer_util_trackable.Trackable.md#changed)

#### Defined in

[src/neuroglancer/ui/layer_list_panel.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/layer_list_panel.ts#L46)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

Trackable.reset

#### Defined in

[src/neuroglancer/ui/layer_list_panel.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/layer_list_panel.ts#L54)

___

### restoreState

▸ **restoreState**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `unknown` |

#### Returns

`void`

#### Implementation of

Trackable.restoreState

#### Defined in

[src/neuroglancer/ui/layer_list_panel.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/layer_list_panel.ts#L50)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Implementation of

Trackable.toJSON

#### Defined in

[src/neuroglancer/ui/layer_list_panel.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/layer_list_panel.ts#L57)
