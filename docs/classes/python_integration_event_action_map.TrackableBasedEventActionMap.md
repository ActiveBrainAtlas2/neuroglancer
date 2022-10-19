[neuroglancer](../README.md) / [Modules](../modules.md) / [python\_integration/event\_action\_map](../modules/python_integration_event_action_map.md) / TrackableBasedEventActionMap

# Class: TrackableBasedEventActionMap

[python_integration/event_action_map](../modules/python_integration_event_action_map.md).TrackableBasedEventActionMap

## Implements

- [`Trackable`](../interfaces/util_trackable.Trackable.md)

## Table of contents

### Constructors

- [constructor](python_integration_event_action_map.TrackableBasedEventActionMap.md#constructor)

### Properties

- [changed](python_integration_event_action_map.TrackableBasedEventActionMap.md#changed)
- [eventActionMap](python_integration_event_action_map.TrackableBasedEventActionMap.md#eventactionmap)

### Methods

- [reset](python_integration_event_action_map.TrackableBasedEventActionMap.md#reset)
- [restoreState](python_integration_event_action_map.TrackableBasedEventActionMap.md#restorestate)
- [toJSON](python_integration_event_action_map.TrackableBasedEventActionMap.md#tojson)

## Constructors

### constructor

• **new TrackableBasedEventActionMap**()

## Properties

### changed

• **changed**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Implementation of

[Trackable](../interfaces/util_trackable.Trackable.md).[changed](../interfaces/util_trackable.Trackable.md#changed)

#### Defined in

[src/neuroglancer/python_integration/event_action_map.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/event_action_map.ts#L28)

___

### eventActionMap

• **eventActionMap**: [`EventActionMap`](util_event_action_map.EventActionMap.md)

#### Defined in

[src/neuroglancer/python_integration/event_action_map.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/event_action_map.ts#L27)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

[Trackable](../interfaces/util_trackable.Trackable.md).[reset](../interfaces/util_trackable.Trackable.md#reset)

#### Defined in

[src/neuroglancer/python_integration/event_action_map.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/event_action_map.ts#L30)

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

[src/neuroglancer/python_integration/event_action_map.ts:35](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/event_action_map.ts#L35)

___

### toJSON

▸ **toJSON**(): `Object`

#### Returns

`Object`

#### Implementation of

[Trackable](../interfaces/util_trackable.Trackable.md).[toJSON](../interfaces/util_trackable.Trackable.md#tojson)

#### Defined in

[src/neuroglancer/python_integration/event_action_map.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/python_integration/event_action_map.ts#L45)
