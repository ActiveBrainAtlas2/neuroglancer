[neuroglancer](../README.md) / [Modules](../modules.md) / [viewer](../modules/viewer.md) / [<internal\>](../modules/viewer._internal_.md) / LayerListPanelState

# Class: LayerListPanelState

[viewer](../modules/viewer.md).[<internal>](../modules/viewer._internal_.md).LayerListPanelState

## Implements

- [`Trackable`](../interfaces/coordinate_transform._internal_.Trackable.md)

## Table of contents

### Constructors

- [constructor](viewer._internal_.LayerListPanelState.md#constructor)

### Properties

- [location](viewer._internal_.LayerListPanelState.md#location)

### Accessors

- [changed](viewer._internal_.LayerListPanelState.md#changed)

### Methods

- [reset](viewer._internal_.LayerListPanelState.md#reset)
- [restoreState](viewer._internal_.LayerListPanelState.md#restorestate)
- [toJSON](viewer._internal_.LayerListPanelState.md#tojson)

## Constructors

### constructor

• **new LayerListPanelState**()

## Properties

### location

• **location**: [`TrackableSidePanelLocation`](image_user_layer._internal_.TrackableSidePanelLocation.md)

#### Defined in

[src/neuroglancer/ui/layer_list_panel.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_list_panel.ts#L45)

## Accessors

### changed

• `get` **changed**(): [`Signal`](coordinate_transform._internal_.Signal.md)<() => `void`\>

#### Returns

[`Signal`](coordinate_transform._internal_.Signal.md)<() => `void`\>

#### Implementation of

[Trackable](../interfaces/coordinate_transform._internal_.Trackable.md).[changed](../interfaces/coordinate_transform._internal_.Trackable.md#changed)

#### Defined in

[src/neuroglancer/ui/layer_list_panel.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_list_panel.ts#L46)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

[Trackable](../interfaces/coordinate_transform._internal_.Trackable.md).[reset](../interfaces/coordinate_transform._internal_.Trackable.md#reset)

#### Defined in

[src/neuroglancer/ui/layer_list_panel.ts:54](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_list_panel.ts#L54)

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

[Trackable](../interfaces/coordinate_transform._internal_.Trackable.md).[restoreState](../interfaces/coordinate_transform._internal_.Trackable.md#restorestate)

#### Defined in

[src/neuroglancer/ui/layer_list_panel.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_list_panel.ts#L50)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Implementation of

[Trackable](../interfaces/coordinate_transform._internal_.Trackable.md).[toJSON](../interfaces/coordinate_transform._internal_.Trackable.md#tojson)

#### Defined in

[src/neuroglancer/ui/layer_list_panel.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/layer_list_panel.ts#L57)
