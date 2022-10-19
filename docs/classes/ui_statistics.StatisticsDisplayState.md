[neuroglancer](../README.md) / [Modules](../modules.md) / [ui/statistics](../modules/ui_statistics.md) / StatisticsDisplayState

# Class: StatisticsDisplayState

[ui/statistics](../modules/ui_statistics.md).StatisticsDisplayState

## Implements

- [`Trackable`](../interfaces/util_trackable.Trackable.md)

## Table of contents

### Constructors

- [constructor](ui_statistics.StatisticsDisplayState.md#constructor)

### Properties

- [location](ui_statistics.StatisticsDisplayState.md#location)
- [sortBy](ui_statistics.StatisticsDisplayState.md#sortby)

### Accessors

- [changed](ui_statistics.StatisticsDisplayState.md#changed)

### Methods

- [reset](ui_statistics.StatisticsDisplayState.md#reset)
- [restoreState](ui_statistics.StatisticsDisplayState.md#restorestate)
- [toJSON](ui_statistics.StatisticsDisplayState.md#tojson)

## Constructors

### constructor

• **new StatisticsDisplayState**()

## Properties

### location

• **location**: [`TrackableSidePanelLocation`](ui_side_panel_location.TrackableSidePanelLocation.md)

#### Defined in

[src/neuroglancer/ui/statistics.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/statistics.ts#L45)

___

### sortBy

• `Optional` **sortBy**: [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`string`\>

#### Defined in

[src/neuroglancer/ui/statistics.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/statistics.ts#L46)

## Accessors

### changed

• `get` **changed**(): [`Signal`](util_signal.Signal.md)<() => `void`\>

#### Returns

[`Signal`](util_signal.Signal.md)<() => `void`\>

#### Implementation of

[Trackable](../interfaces/util_trackable.Trackable.md).[changed](../interfaces/util_trackable.Trackable.md#changed)

#### Defined in

[src/neuroglancer/ui/statistics.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/statistics.ts#L42)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

[Trackable](../interfaces/util_trackable.Trackable.md).[reset](../interfaces/util_trackable.Trackable.md#reset)

#### Defined in

[src/neuroglancer/ui/statistics.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/statistics.ts#L52)

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

[Trackable](../interfaces/util_trackable.Trackable.md).[restoreState](../interfaces/util_trackable.Trackable.md#restorestate)

#### Defined in

[src/neuroglancer/ui/statistics.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/statistics.ts#L48)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Implementation of

[Trackable](../interfaces/util_trackable.Trackable.md).[toJSON](../interfaces/util_trackable.Trackable.md#tojson)

#### Defined in

[src/neuroglancer/ui/statistics.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/ui/statistics.ts#L56)
