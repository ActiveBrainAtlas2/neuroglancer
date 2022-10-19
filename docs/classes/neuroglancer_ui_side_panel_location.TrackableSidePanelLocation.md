[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/ui/side\_panel\_location](../modules/neuroglancer_ui_side_panel_location.md) / TrackableSidePanelLocation

# Class: TrackableSidePanelLocation

[neuroglancer/ui/side_panel_location](../modules/neuroglancer_ui_side_panel_location.md).TrackableSidePanelLocation

## Implements

- [`Trackable`](../interfaces/neuroglancer_util_trackable.Trackable.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_ui_side_panel_location.TrackableSidePanelLocation.md#constructor)

### Properties

- [changed](neuroglancer_ui_side_panel_location.TrackableSidePanelLocation.md#changed)
- [defaultValue](neuroglancer_ui_side_panel_location.TrackableSidePanelLocation.md#defaultvalue)
- [locationChanged](neuroglancer_ui_side_panel_location.TrackableSidePanelLocation.md#locationchanged)
- [value](neuroglancer_ui_side_panel_location.TrackableSidePanelLocation.md#value)
- [watchableVisible](neuroglancer_ui_side_panel_location.TrackableSidePanelLocation.md#watchablevisible)

### Accessors

- [visible](neuroglancer_ui_side_panel_location.TrackableSidePanelLocation.md#visible)

### Methods

- [reset](neuroglancer_ui_side_panel_location.TrackableSidePanelLocation.md#reset)
- [restoreState](neuroglancer_ui_side_panel_location.TrackableSidePanelLocation.md#restorestate)
- [toJSON](neuroglancer_ui_side_panel_location.TrackableSidePanelLocation.md#tojson)

## Constructors

### constructor

• **new TrackableSidePanelLocation**(`defaultValue?`, `value?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `defaultValue` | [`SidePanelLocation`](../interfaces/neuroglancer_ui_side_panel_location.SidePanelLocation.md) | `DEFAULT_SIDE_PANEL_LOCATION` |
| `value` | [`SidePanelLocation`](../interfaces/neuroglancer_ui_side_panel_location.SidePanelLocation.md) | `defaultValue` |

#### Defined in

[src/neuroglancer/ui/side_panel_location.ts:70](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/side_panel_location.ts#L70)

## Properties

### changed

• **changed**: [`Signal`](neuroglancer_util_signal.Signal.md)<() => `void`\>

#### Implementation of

[Trackable](../interfaces/neuroglancer_util_trackable.Trackable.md).[changed](../interfaces/neuroglancer_util_trackable.Trackable.md#changed)

#### Defined in

[src/neuroglancer/ui/side_panel_location.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/side_panel_location.ts#L63)

___

### defaultValue

• **defaultValue**: [`SidePanelLocation`](../interfaces/neuroglancer_ui_side_panel_location.SidePanelLocation.md) = `DEFAULT_SIDE_PANEL_LOCATION`

___

### locationChanged

• **locationChanged**: [`Signal`](neuroglancer_util_signal.Signal.md)<() => `void`\>

#### Defined in

[src/neuroglancer/ui/side_panel_location.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/side_panel_location.ts#L66)

___

### value

• **value**: [`SidePanelLocation`](../interfaces/neuroglancer_ui_side_panel_location.SidePanelLocation.md) = `defaultValue`

___

### watchableVisible

• `Readonly` **watchableVisible**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`boolean`\>

#### Defined in

[src/neuroglancer/ui/side_panel_location.ts:68](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/side_panel_location.ts#L68)

## Accessors

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/ui/side_panel_location.ts:94](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/side_panel_location.ts#L94)

• `set` **visible**(`visible`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `visible` | `boolean` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/side_panel_location.ts:98](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/side_panel_location.ts#L98)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

[Trackable](../interfaces/neuroglancer_util_trackable.Trackable.md).[reset](../interfaces/neuroglancer_util_trackable.Trackable.md#reset)

#### Defined in

[src/neuroglancer/ui/side_panel_location.ts:106](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/side_panel_location.ts#L106)

___

### restoreState

▸ **restoreState**(`obj`, `defaultLocation?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `unknown` |
| `defaultLocation` | [`SidePanelLocation`](../interfaces/neuroglancer_ui_side_panel_location.SidePanelLocation.md) |

#### Returns

`void`

#### Implementation of

[Trackable](../interfaces/neuroglancer_util_trackable.Trackable.md).[restoreState](../interfaces/neuroglancer_util_trackable.Trackable.md#restorestate)

#### Defined in

[src/neuroglancer/ui/side_panel_location.ts:113](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/side_panel_location.ts#L113)

___

### toJSON

▸ **toJSON**(`defaultValue?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaultValue` | [`SidePanelLocation`](../interfaces/neuroglancer_ui_side_panel_location.SidePanelLocation.md) |

#### Returns

`any`

#### Implementation of

[Trackable](../interfaces/neuroglancer_util_trackable.Trackable.md).[toJSON](../interfaces/neuroglancer_util_trackable.Trackable.md#tojson)

#### Defined in

[src/neuroglancer/ui/side_panel_location.ts:82](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/ui/side_panel_location.ts#L82)
