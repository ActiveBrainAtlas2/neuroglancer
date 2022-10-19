[neuroglancer](../README.md) / [Modules](../modules.md) / [viewer](../modules/viewer.md) / [<internal\>](../modules/viewer._internal_.md) / StatisticsDisplayState

# Class: StatisticsDisplayState

[viewer](../modules/viewer.md).[<internal>](../modules/viewer._internal_.md).StatisticsDisplayState

## Implements

- [`Trackable`](../interfaces/coordinate_transform._internal_.Trackable.md)

## Table of contents

### Constructors

- [constructor](viewer._internal_.StatisticsDisplayState.md#constructor)

### Properties

- [location](viewer._internal_.StatisticsDisplayState.md#location)
- [sortBy](viewer._internal_.StatisticsDisplayState.md#sortby)

### Accessors

- [changed](viewer._internal_.StatisticsDisplayState.md#changed)

### Methods

- [reset](viewer._internal_.StatisticsDisplayState.md#reset)
- [restoreState](viewer._internal_.StatisticsDisplayState.md#restorestate)
- [toJSON](viewer._internal_.StatisticsDisplayState.md#tojson)

## Constructors

### constructor

• **new StatisticsDisplayState**()

## Properties

### location

• **location**: [`TrackableSidePanelLocation`](image_user_layer._internal_.TrackableSidePanelLocation.md)

#### Defined in

[src/neuroglancer/ui/statistics.ts:45](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/statistics.ts#L45)

___

### sortBy

• `Optional` **sortBy**: [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<`string`\>

#### Defined in

[src/neuroglancer/ui/statistics.ts:46](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/statistics.ts#L46)

## Accessors

### changed

• `get` **changed**(): [`Signal`](coordinate_transform._internal_.Signal.md)<() => `void`\>

#### Returns

[`Signal`](coordinate_transform._internal_.Signal.md)<() => `void`\>

#### Implementation of

[Trackable](../interfaces/coordinate_transform._internal_.Trackable.md).[changed](../interfaces/coordinate_transform._internal_.Trackable.md#changed)

#### Defined in

[src/neuroglancer/ui/statistics.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/statistics.ts#L42)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Implementation of

[Trackable](../interfaces/coordinate_transform._internal_.Trackable.md).[reset](../interfaces/coordinate_transform._internal_.Trackable.md#reset)

#### Defined in

[src/neuroglancer/ui/statistics.ts:52](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/statistics.ts#L52)

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

[Trackable](../interfaces/coordinate_transform._internal_.Trackable.md).[restoreState](../interfaces/coordinate_transform._internal_.Trackable.md#restorestate)

#### Defined in

[src/neuroglancer/ui/statistics.ts:48](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/statistics.ts#L48)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Implementation of

[Trackable](../interfaces/coordinate_transform._internal_.Trackable.md).[toJSON](../interfaces/coordinate_transform._internal_.Trackable.md#tojson)

#### Defined in

[src/neuroglancer/ui/statistics.ts:56](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/ui/statistics.ts#L56)
