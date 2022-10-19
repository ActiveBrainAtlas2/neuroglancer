[neuroglancer](../README.md) / [Modules](../modules.md) / [image\_user\_layer](../modules/image_user_layer.md) / [<internal\>](../modules/image_user_layer._internal_.md) / UserLayerSidePanelsState

# Class: UserLayerSidePanelsState

[image_user_layer](../modules/image_user_layer.md).[<internal>](../modules/image_user_layer._internal_.md).UserLayerSidePanelsState

## Table of contents

### Constructors

- [constructor](image_user_layer._internal_.UserLayerSidePanelsState.md#constructor)

### Properties

- [layer](image_user_layer._internal_.UserLayerSidePanelsState.md#layer)
- [panels](image_user_layer._internal_.UserLayerSidePanelsState.md#panels)
- [specificationChanged](image_user_layer._internal_.UserLayerSidePanelsState.md#specificationchanged)
- [updating](image_user_layer._internal_.UserLayerSidePanelsState.md#updating)

### Methods

- [removePanel](image_user_layer._internal_.UserLayerSidePanelsState.md#removepanel)
- [restoreState](image_user_layer._internal_.UserLayerSidePanelsState.md#restorestate)
- [toJSON](image_user_layer._internal_.UserLayerSidePanelsState.md#tojson)
- [updateTabs](image_user_layer._internal_.UserLayerSidePanelsState.md#updatetabs)

## Constructors

### constructor

• **new UserLayerSidePanelsState**(`layer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`UserLayer`](layer.UserLayer.md) |

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:203](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_side_panel_state.ts#L203)

## Properties

### layer

• **layer**: [`UserLayer`](layer.UserLayer.md)

___

### panels

• **panels**: [`UserLayerSidePanelState`](image_user_layer._internal_.UserLayerSidePanelState.md)[]

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:200](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_side_panel_state.ts#L200)

___

### specificationChanged

• **specificationChanged**: [`Signal`](coordinate_transform._internal_.Signal.md)<() => `void`\>

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:201](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_side_panel_state.ts#L201)

___

### updating

• **updating**: `boolean` = `false`

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:202](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_side_panel_state.ts#L202)

## Methods

### removePanel

▸ **removePanel**(`panel`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `panel` | [`UserLayerSidePanelState`](image_user_layer._internal_.UserLayerSidePanelState.md) |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:248](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_side_panel_state.ts#L248)

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

[src/neuroglancer/ui/layer_side_panel_state.ts:207](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_side_panel_state.ts#L207)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:300](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_side_panel_state.ts#L300)

___

### updateTabs

▸ **updateTabs**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/layer_side_panel_state.ts:256](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_side_panel_state.ts#L256)
