[neuroglancer](../README.md) / [Modules](../modules.md) / [image\_user\_layer](../modules/image_user_layer.md) / [<internal\>](../modules/image_user_layer._internal_.md) / TrackableSidePanelLocation

# Class: TrackableSidePanelLocation

[image_user_layer](../modules/image_user_layer.md).[<internal>](../modules/image_user_layer._internal_.md).TrackableSidePanelLocation

## Implements

- [`Trackable`](../interfaces/coordinate_transform._internal_.Trackable.md)

## Table of contents

### Constructors

- [constructor](image_user_layer._internal_.TrackableSidePanelLocation.md#constructor)

### Properties

- [changed](image_user_layer._internal_.TrackableSidePanelLocation.md#changed)
- [defaultValue](image_user_layer._internal_.TrackableSidePanelLocation.md#defaultvalue)
- [locationChanged](image_user_layer._internal_.TrackableSidePanelLocation.md#locationchanged)
- [value](image_user_layer._internal_.TrackableSidePanelLocation.md#value)
- [watchableVisible](image_user_layer._internal_.TrackableSidePanelLocation.md#watchablevisible)

### Accessors

- [visible](image_user_layer._internal_.TrackableSidePanelLocation.md#visible)

### Methods

- [reset](image_user_layer._internal_.TrackableSidePanelLocation.md#reset)
- [restoreState](image_user_layer._internal_.TrackableSidePanelLocation.md#restorestate)
- [toJSON](image_user_layer._internal_.TrackableSidePanelLocation.md#tojson)

## Constructors

### constructor

• **new TrackableSidePanelLocation**(`defaultValue?`, `value?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `defaultValue` | [`SidePanelLocation`](../interfaces/image_user_layer._internal_.SidePanelLocation.md) | `DEFAULT_SIDE_PANEL_LOCATION` |
| `value` | [`SidePanelLocation`](../interfaces/image_user_layer._internal_.SidePanelLocation.md) | `defaultValue` |

#### Defined in

[src/neuroglancer/ui/side_panel_location.ts:70](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/side_panel_location.ts#L70)

## Properties

### changed

• **changed**: [`Signal`](coordinate_transform._internal_.Signal.md)<() => `void`\>

#### Implementation of

[Trackable](../interfaces/coordinate_transform._internal_.Trackable.md).[changed](../interfaces/coordinate_transform._internal_.Trackable.md#changed)

#### Defined in

[src/neuroglancer/ui/side_panel_location.ts:63](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/side_panel_location.ts#L63)

___

### defaultValue

• **defaultValue**: [`SidePanelLocation`](../interfaces/image_user_layer._internal_.SidePanelLocation.md) = `DEFAULT_SIDE_PANEL_LOCATION`

___

### locationChanged

• **locationChanged**: [`Signal`](coordinate_transform._internal_.Signal.md)<() => `void`\>

#### Defined in

[src/neuroglancer/ui/side_panel_location.ts:66](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/side_panel_location.ts#L66)

___

### value

• **value**: [`SidePanelLocation`](../interfaces/image_user_layer._internal_.SidePanelLocation.md) = `defaultValue`

___

### watchableVisible

• `Readonly` **watchableVisible**: [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<`boolean`\>

#### Defined in

[src/neuroglancer/ui/side_panel_location.ts:68](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/side_panel_location.ts#L68)

## Accessors

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/neuroglancer/ui/side_panel_location.ts:94](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/side_panel_location.ts#L94)

• `set` **visible**(`visible`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `visible` | `boolean` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/ui/side_panel_location.ts:98](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/side_panel_location.ts#L98)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

[Trackable](../interfaces/coordinate_transform._internal_.Trackable.md).[reset](../interfaces/coordinate_transform._internal_.Trackable.md#reset)

#### Defined in

[src/neuroglancer/ui/side_panel_location.ts:106](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/side_panel_location.ts#L106)

___

### restoreState

▸ **restoreState**(`obj`, `defaultLocation?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `unknown` |
| `defaultLocation` | [`SidePanelLocation`](../interfaces/image_user_layer._internal_.SidePanelLocation.md) |

#### Returns

`void`

#### Implementation of

[Trackable](../interfaces/coordinate_transform._internal_.Trackable.md).[restoreState](../interfaces/coordinate_transform._internal_.Trackable.md#restorestate)

#### Defined in

[src/neuroglancer/ui/side_panel_location.ts:113](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/side_panel_location.ts#L113)

___

### toJSON

▸ **toJSON**(`defaultValue?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaultValue` | [`SidePanelLocation`](../interfaces/image_user_layer._internal_.SidePanelLocation.md) |

#### Returns

`any`

#### Implementation of

[Trackable](../interfaces/coordinate_transform._internal_.Trackable.md).[toJSON](../interfaces/coordinate_transform._internal_.Trackable.md#tojson)

#### Defined in

[src/neuroglancer/ui/side_panel_location.ts:82](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/side_panel_location.ts#L82)
