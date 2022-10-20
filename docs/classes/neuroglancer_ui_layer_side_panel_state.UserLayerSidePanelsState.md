[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/ui/layer\_side\_panel\_state](../modules/neuroglancer_ui_layer_side_panel_state.md) / UserLayerSidePanelsState

# Class: UserLayerSidePanelsState

[neuroglancer/ui/layer_side_panel_state](../modules/neuroglancer_ui_layer_side_panel_state.md).UserLayerSidePanelsState

## Table of contents

### Constructors

- [constructor](neuroglancer_ui_layer_side_panel_state.UserLayerSidePanelsState.md#constructor)

### Properties

- [layer](neuroglancer_ui_layer_side_panel_state.UserLayerSidePanelsState.md#layer)
- [panels](neuroglancer_ui_layer_side_panel_state.UserLayerSidePanelsState.md#panels)
- [specificationChanged](neuroglancer_ui_layer_side_panel_state.UserLayerSidePanelsState.md#specificationchanged)
- [updating](neuroglancer_ui_layer_side_panel_state.UserLayerSidePanelsState.md#updating)

### Methods

- [removePanel](neuroglancer_ui_layer_side_panel_state.UserLayerSidePanelsState.md#removepanel)
- [restoreState](neuroglancer_ui_layer_side_panel_state.UserLayerSidePanelsState.md#restorestate)
- [toJSON](neuroglancer_ui_layer_side_panel_state.UserLayerSidePanelsState.md#tojson)
- [updateTabs](neuroglancer_ui_layer_side_panel_state.UserLayerSidePanelsState.md#updatetabs)

## Constructors

### constructor

• **new UserLayerSidePanelsState**(`layer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`UserLayer`](neuroglancer_layer.UserLayer.md) |

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:203](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/layer_side_panel_state.ts#L203)

## Properties

### layer

• **layer**: [`UserLayer`](neuroglancer_layer.UserLayer.md)

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:203](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/layer_side_panel_state.ts#L203)

___

### panels

• **panels**: [`UserLayerSidePanelState`](neuroglancer_ui_layer_side_panel_state.UserLayerSidePanelState.md)[]

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:200](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/layer_side_panel_state.ts#L200)

___

### specificationChanged

• **specificationChanged**: [`Signal`](neuroglancer_util_signal.Signal.md)<() => `void`\>

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:201](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/layer_side_panel_state.ts#L201)

___

### updating

• **updating**: `boolean` = `false`

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:202](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/layer_side_panel_state.ts#L202)

## Methods

### removePanel

▸ **removePanel**(`panel`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `panel` | [`UserLayerSidePanelState`](neuroglancer_ui_layer_side_panel_state.UserLayerSidePanelState.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:248](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/layer_side_panel_state.ts#L248)

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

[src/neuroglancer/ui/layer_side_panel_state.ts:207](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/layer_side_panel_state.ts#L207)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:300](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/layer_side_panel_state.ts#L300)

___

### updateTabs

▸ **updateTabs**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:256](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/layer_side_panel_state.ts#L256)
