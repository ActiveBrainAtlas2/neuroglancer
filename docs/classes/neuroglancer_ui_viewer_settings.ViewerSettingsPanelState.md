[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/ui/viewer\_settings](../modules/neuroglancer_ui_viewer_settings.md) / ViewerSettingsPanelState

# Class: ViewerSettingsPanelState

[neuroglancer/ui/viewer_settings](../modules/neuroglancer_ui_viewer_settings.md).ViewerSettingsPanelState

## Table of contents

### Constructors

- [constructor](neuroglancer_ui_viewer_settings.ViewerSettingsPanelState.md#constructor)

### Properties

- [location](neuroglancer_ui_viewer_settings.ViewerSettingsPanelState.md#location)

### Accessors

- [changed](neuroglancer_ui_viewer_settings.ViewerSettingsPanelState.md#changed)

### Methods

- [reset](neuroglancer_ui_viewer_settings.ViewerSettingsPanelState.md#reset)
- [restoreState](neuroglancer_ui_viewer_settings.ViewerSettingsPanelState.md#restorestate)
- [toJSON](neuroglancer_ui_viewer_settings.ViewerSettingsPanelState.md#tojson)

## Constructors

### constructor

• **new ViewerSettingsPanelState**()

## Properties

### location

• **location**: [`TrackableSidePanelLocation`](neuroglancer_ui_side_panel_location.TrackableSidePanelLocation.md)

#### Defined in

[src/neuroglancer/ui/viewer_settings.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/viewer_settings.ts#L37)

## Accessors

### changed

• `get` **changed**(): [`Signal`](neuroglancer_util_signal.Signal.md)<() => `void`\>

#### Returns

[`Signal`](neuroglancer_util_signal.Signal.md)<() => `void`\>

#### Defined in

[src/neuroglancer/ui/viewer_settings.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/viewer_settings.ts#L38)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/viewer_settings.ts:44](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/viewer_settings.ts#L44)

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

[src/neuroglancer/ui/viewer_settings.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/viewer_settings.ts#L47)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[src/neuroglancer/ui/viewer_settings.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/viewer_settings.ts#L41)
