[neuroglancer](../README.md) / [Modules](../modules.md) / [ui/side\_panel\_location](../modules/ui_side_panel_location.md) / TrackableSidePanelLocation

# Class: TrackableSidePanelLocation

[ui/side_panel_location](../modules/ui_side_panel_location.md).TrackableSidePanelLocation

## Implements

- [`Trackable`](../interfaces/util_trackable.Trackable.md)

## Table of contents

### Constructors

- [constructor](ui_side_panel_location.TrackableSidePanelLocation.md#constructor)

### Properties

- [changed](ui_side_panel_location.TrackableSidePanelLocation.md#changed)
- [defaultValue](ui_side_panel_location.TrackableSidePanelLocation.md#defaultvalue)
- [locationChanged](ui_side_panel_location.TrackableSidePanelLocation.md#locationchanged)
- [value](ui_side_panel_location.TrackableSidePanelLocation.md#value)
- [watchableVisible](ui_side_panel_location.TrackableSidePanelLocation.md#watchablevisible)

### Accessors

- [visible](ui_side_panel_location.TrackableSidePanelLocation.md#visible)

### Methods

- [reset](ui_side_panel_location.TrackableSidePanelLocation.md#reset)
- [restoreState](ui_side_panel_location.TrackableSidePanelLocation.md#restorestate)
- [toJSON](ui_side_panel_location.TrackableSidePanelLocation.md#tojson)

## Constructors

### constructor

• **new TrackableSidePanelLocation**(`defaultValue?`, `value?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `defaultValue` | [`SidePanelLocation`](../interfaces/ui_side_panel_location.SidePanelLocation.md) | `DEFAULT_SIDE_PANEL_LOCATION` |
| `value` | [`SidePanelLocation`](../interfaces/ui_side_panel_location.SidePanelLocation.md) | `defaultValue` |

#### Defined in

[src/neuroglancer/ui/side_panel_location.ts:70](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/side_panel_location.ts#L70)

## Properties

### changed

• **changed**: [`Signal`](util_signal.Signal.md)<() => `void`\>

#### Implementation of

[Trackable](../interfaces/util_trackable.Trackable.md).[changed](../interfaces/util_trackable.Trackable.md#changed)

#### Defined in

[src/neuroglancer/ui/side_panel_location.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/side_panel_location.ts#L63)

___

### defaultValue

• **defaultValue**: [`SidePanelLocation`](../interfaces/ui_side_panel_location.SidePanelLocation.md) = `DEFAULT_SIDE_PANEL_LOCATION`

___

### locationChanged

• **locationChanged**: [`Signal`](util_signal.Signal.md)<() => `void`\>

#### Defined in

[src/neuroglancer/ui/side_panel_location.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/side_panel_location.ts#L66)

___

### value

• **value**: [`SidePanelLocation`](../interfaces/ui_side_panel_location.SidePanelLocation.md) = `defaultValue`

___

### watchableVisible

• `Readonly` **watchableVisible**: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`boolean`\>

#### Defined in

[src/neuroglancer/ui/side_panel_location.ts:68](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/side_panel_location.ts#L68)

## Accessors

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/ui/side_panel_location.ts:94](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/side_panel_location.ts#L94)

• `set` **visible**(`visible`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `visible` | `boolean` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/side_panel_location.ts:98](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/side_panel_location.ts#L98)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

[Trackable](../interfaces/util_trackable.Trackable.md).[reset](../interfaces/util_trackable.Trackable.md#reset)

#### Defined in

[src/neuroglancer/ui/side_panel_location.ts:106](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/side_panel_location.ts#L106)

___

### restoreState

▸ **restoreState**(`obj`, `defaultLocation?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `unknown` |
| `defaultLocation` | [`SidePanelLocation`](../interfaces/ui_side_panel_location.SidePanelLocation.md) |

#### Returns

`void`

#### Implementation of

[Trackable](../interfaces/util_trackable.Trackable.md).[restoreState](../interfaces/util_trackable.Trackable.md#restorestate)

#### Defined in

[src/neuroglancer/ui/side_panel_location.ts:113](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/side_panel_location.ts#L113)

___

### toJSON

▸ **toJSON**(`defaultValue?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaultValue` | [`SidePanelLocation`](../interfaces/ui_side_panel_location.SidePanelLocation.md) |

#### Returns

`any`

#### Implementation of

[Trackable](../interfaces/util_trackable.Trackable.md).[toJSON](../interfaces/util_trackable.Trackable.md#tojson)

#### Defined in

[src/neuroglancer/ui/side_panel_location.ts:82](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/side_panel_location.ts#L82)
