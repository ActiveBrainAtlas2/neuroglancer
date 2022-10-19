[neuroglancer](../README.md) / [Modules](../modules.md) / [viewer](../modules/viewer.md) / [<internal\>](../modules/viewer._internal_.md) / ViewerSettingsPanelState

# Class: ViewerSettingsPanelState

[viewer](../modules/viewer.md).[<internal>](../modules/viewer._internal_.md).ViewerSettingsPanelState

## Table of contents

### Constructors

- [constructor](viewer._internal_.ViewerSettingsPanelState.md#constructor)

### Properties

- [location](viewer._internal_.ViewerSettingsPanelState.md#location)

### Accessors

- [changed](viewer._internal_.ViewerSettingsPanelState.md#changed)

### Methods

- [reset](viewer._internal_.ViewerSettingsPanelState.md#reset)
- [restoreState](viewer._internal_.ViewerSettingsPanelState.md#restorestate)
- [toJSON](viewer._internal_.ViewerSettingsPanelState.md#tojson)

## Constructors

### constructor

• **new ViewerSettingsPanelState**()

## Properties

### location

• **location**: [`TrackableSidePanelLocation`](image_user_layer._internal_.TrackableSidePanelLocation.md)

#### Defined in

[src/neuroglancer/ui/viewer_settings.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/viewer_settings.ts#L37)

## Accessors

### changed

• `get` **changed**(): [`Signal`](coordinate_transform._internal_.Signal.md)<() => `void`\>

#### Returns

[`Signal`](coordinate_transform._internal_.Signal.md)<() => `void`\>

#### Defined in

[src/neuroglancer/ui/viewer_settings.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/viewer_settings.ts#L38)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/viewer_settings.ts:44](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/viewer_settings.ts#L44)

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

[src/neuroglancer/ui/viewer_settings.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/viewer_settings.ts#L47)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[src/neuroglancer/ui/viewer_settings.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/viewer_settings.ts#L41)
