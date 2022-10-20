[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/ui/statistics](../modules/neuroglancer_ui_statistics.md) / StatisticsDisplayState

# Class: StatisticsDisplayState

[neuroglancer/ui/statistics](../modules/neuroglancer_ui_statistics.md).StatisticsDisplayState

## Implements

- [`Trackable`](../interfaces/neuroglancer_util_trackable.Trackable.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_ui_statistics.StatisticsDisplayState.md#constructor)

### Properties

- [location](neuroglancer_ui_statistics.StatisticsDisplayState.md#location)
- [sortBy](neuroglancer_ui_statistics.StatisticsDisplayState.md#sortby)

### Accessors

- [changed](neuroglancer_ui_statistics.StatisticsDisplayState.md#changed)

### Methods

- [reset](neuroglancer_ui_statistics.StatisticsDisplayState.md#reset)
- [restoreState](neuroglancer_ui_statistics.StatisticsDisplayState.md#restorestate)
- [toJSON](neuroglancer_ui_statistics.StatisticsDisplayState.md#tojson)

## Constructors

### constructor

• **new StatisticsDisplayState**()

## Properties

### location

• **location**: [`TrackableSidePanelLocation`](neuroglancer_ui_side_panel_location.TrackableSidePanelLocation.md)

#### Defined in

[src/neuroglancer/ui/statistics.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/statistics.ts#L45)

___

### sortBy

• `Optional` **sortBy**: [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`string`\>

#### Defined in

[src/neuroglancer/ui/statistics.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/statistics.ts#L46)

## Accessors

### changed

• `get` **changed**(): [`Signal`](neuroglancer_util_signal.Signal.md)<() => `void`\>

#### Returns

[`Signal`](neuroglancer_util_signal.Signal.md)<() => `void`\>

#### Implementation of

[Trackable](../interfaces/neuroglancer_util_trackable.Trackable.md).[changed](../interfaces/neuroglancer_util_trackable.Trackable.md#changed)

#### Defined in

[src/neuroglancer/ui/statistics.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/statistics.ts#L42)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

Trackable.reset

#### Defined in

[src/neuroglancer/ui/statistics.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/statistics.ts#L52)

___

### restoreState

▸ **restoreState**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`void`

#### Implementation of

Trackable.restoreState

#### Defined in

[src/neuroglancer/ui/statistics.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/statistics.ts#L48)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Implementation of

Trackable.toJSON

#### Defined in

[src/neuroglancer/ui/statistics.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/ui/statistics.ts#L56)
