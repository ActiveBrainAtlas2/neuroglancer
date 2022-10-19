[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/python\_integration/event\_action\_map](../modules/neuroglancer_python_integration_event_action_map.md) / TrackableBasedEventActionMap

# Class: TrackableBasedEventActionMap

[neuroglancer/python_integration/event_action_map](../modules/neuroglancer_python_integration_event_action_map.md).TrackableBasedEventActionMap

## Implements

- [`Trackable`](../interfaces/neuroglancer_util_trackable.Trackable.md)

## Table of contents

### Constructors

- [constructor](neuroglancer_python_integration_event_action_map.TrackableBasedEventActionMap.md#constructor)

### Properties

- [changed](neuroglancer_python_integration_event_action_map.TrackableBasedEventActionMap.md#changed)
- [eventActionMap](neuroglancer_python_integration_event_action_map.TrackableBasedEventActionMap.md#eventactionmap)

### Methods

- [reset](neuroglancer_python_integration_event_action_map.TrackableBasedEventActionMap.md#reset)
- [restoreState](neuroglancer_python_integration_event_action_map.TrackableBasedEventActionMap.md#restorestate)
- [toJSON](neuroglancer_python_integration_event_action_map.TrackableBasedEventActionMap.md#tojson)

## Constructors

### constructor

• **new TrackableBasedEventActionMap**()

## Properties

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Implementation of

[Trackable](../interfaces/neuroglancer_util_trackable.Trackable.md).[changed](../interfaces/neuroglancer_util_trackable.Trackable.md#changed)

#### Defined in

[src/neuroglancer/python_integration/event_action_map.ts:28](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/python_integration/event_action_map.ts#L28)

___

### eventActionMap

• **eventActionMap**: [`EventActionMap`](neuroglancer_util_event_action_map.EventActionMap.md)

#### Defined in

[src/neuroglancer/python_integration/event_action_map.ts:27](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/python_integration/event_action_map.ts#L27)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

[Trackable](../interfaces/neuroglancer_util_trackable.Trackable.md).[reset](../interfaces/neuroglancer_util_trackable.Trackable.md#reset)

#### Defined in

[src/neuroglancer/python_integration/event_action_map.ts:30](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/python_integration/event_action_map.ts#L30)

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

[Trackable](../interfaces/neuroglancer_util_trackable.Trackable.md).[restoreState](../interfaces/neuroglancer_util_trackable.Trackable.md#restorestate)

#### Defined in

[src/neuroglancer/python_integration/event_action_map.ts:35](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/python_integration/event_action_map.ts#L35)

___

### toJSON

▸ **toJSON**(): `Object`

#### Returns

`Object`

#### Implementation of

[Trackable](../interfaces/neuroglancer_util_trackable.Trackable.md).[toJSON](../interfaces/neuroglancer_util_trackable.Trackable.md#tojson)

#### Defined in

[src/neuroglancer/python_integration/event_action_map.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/python_integration/event_action_map.ts#L45)
