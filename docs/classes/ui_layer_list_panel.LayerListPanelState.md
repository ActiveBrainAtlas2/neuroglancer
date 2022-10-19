[neuroglancer](../README.md) / [Modules](../modules.md) / [ui/layer\_list\_panel](../modules/ui_layer_list_panel.md) / LayerListPanelState

# Class: LayerListPanelState

[ui/layer_list_panel](../modules/ui_layer_list_panel.md).LayerListPanelState

## Implements

- [`Trackable`](../interfaces/util_trackable.Trackable.md)

## Table of contents

### Constructors

- [constructor](ui_layer_list_panel.LayerListPanelState.md#constructor)

### Properties

- [location](ui_layer_list_panel.LayerListPanelState.md#location)

### Accessors

- [changed](ui_layer_list_panel.LayerListPanelState.md#changed)

### Methods

- [reset](ui_layer_list_panel.LayerListPanelState.md#reset)
- [restoreState](ui_layer_list_panel.LayerListPanelState.md#restorestate)
- [toJSON](ui_layer_list_panel.LayerListPanelState.md#tojson)

## Constructors

### constructor

• **new LayerListPanelState**()

## Properties

### location

• **location**: [`TrackableSidePanelLocation`](ui_side_panel_location.TrackableSidePanelLocation.md)

#### Defined in

[src/neuroglancer/ui/layer_list_panel.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_list_panel.ts#L45)

## Accessors

### changed

• `get` **changed**(): [`Signal`](util_signal.Signal.md)<() => `void`\>

#### Returns

[`Signal`](util_signal.Signal.md)<() => `void`\>

#### Implementation of

[Trackable](../interfaces/util_trackable.Trackable.md).[changed](../interfaces/util_trackable.Trackable.md#changed)

#### Defined in

[src/neuroglancer/ui/layer_list_panel.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_list_panel.ts#L46)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

[Trackable](../interfaces/util_trackable.Trackable.md).[reset](../interfaces/util_trackable.Trackable.md#reset)

#### Defined in

[src/neuroglancer/ui/layer_list_panel.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_list_panel.ts#L54)

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

[Trackable](../interfaces/util_trackable.Trackable.md).[restoreState](../interfaces/util_trackable.Trackable.md#restorestate)

#### Defined in

[src/neuroglancer/ui/layer_list_panel.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_list_panel.ts#L50)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Implementation of

[Trackable](../interfaces/util_trackable.Trackable.md).[toJSON](../interfaces/util_trackable.Trackable.md#tojson)

#### Defined in

[src/neuroglancer/ui/layer_list_panel.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/layer_list_panel.ts#L57)
