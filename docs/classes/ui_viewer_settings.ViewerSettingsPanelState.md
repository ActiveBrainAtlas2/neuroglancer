[neuroglancer](../README.md) / [Modules](../modules.md) / [ui/viewer\_settings](../modules/ui_viewer_settings.md) / ViewerSettingsPanelState

# Class: ViewerSettingsPanelState

[ui/viewer_settings](../modules/ui_viewer_settings.md).ViewerSettingsPanelState

## Table of contents

### Constructors

- [constructor](ui_viewer_settings.ViewerSettingsPanelState.md#constructor)

### Properties

- [location](ui_viewer_settings.ViewerSettingsPanelState.md#location)

### Accessors

- [changed](ui_viewer_settings.ViewerSettingsPanelState.md#changed)

### Methods

- [reset](ui_viewer_settings.ViewerSettingsPanelState.md#reset)
- [restoreState](ui_viewer_settings.ViewerSettingsPanelState.md#restorestate)
- [toJSON](ui_viewer_settings.ViewerSettingsPanelState.md#tojson)

## Constructors

### constructor

• **new ViewerSettingsPanelState**()

## Properties

### location

• **location**: [`TrackableSidePanelLocation`](ui_side_panel_location.TrackableSidePanelLocation.md)

#### Defined in

[src/neuroglancer/ui/viewer_settings.ts:37](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/viewer_settings.ts#L37)

## Accessors

### changed

• `get` **changed**(): [`Signal`](util_signal.Signal.md)<() => `void`\>

#### Returns

[`Signal`](util_signal.Signal.md)<() => `void`\>

#### Defined in

[src/neuroglancer/ui/viewer_settings.ts:38](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/viewer_settings.ts#L38)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/viewer_settings.ts:44](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/viewer_settings.ts#L44)

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

[src/neuroglancer/ui/viewer_settings.ts:47](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/viewer_settings.ts#L47)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[src/neuroglancer/ui/viewer_settings.ts:41](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/viewer_settings.ts#L41)
