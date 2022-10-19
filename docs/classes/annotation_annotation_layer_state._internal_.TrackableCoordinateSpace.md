[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / TrackableCoordinateSpace

# Class: TrackableCoordinateSpace

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).TrackableCoordinateSpace

## Hierarchy

- [`WatchableValue`](annotation_annotation_layer_state._internal_.WatchableValue.md)<[`CoordinateSpace`](../interfaces/annotation_annotation_layer_state._internal_.CoordinateSpace.md)\>

  ↳ **`TrackableCoordinateSpace`**

## Table of contents

### Constructors

- [constructor](annotation_annotation_layer_state._internal_.TrackableCoordinateSpace.md#constructor)

### Properties

- [changed](annotation_annotation_layer_state._internal_.TrackableCoordinateSpace.md#changed)
- [value\_](annotation_annotation_layer_state._internal_.TrackableCoordinateSpace.md#value_)

### Accessors

- [value](annotation_annotation_layer_state._internal_.TrackableCoordinateSpace.md#value)

### Methods

- [reset](annotation_annotation_layer_state._internal_.TrackableCoordinateSpace.md#reset)
- [restoreState](annotation_annotation_layer_state._internal_.TrackableCoordinateSpace.md#restorestate)
- [toJSON](annotation_annotation_layer_state._internal_.TrackableCoordinateSpace.md#tojson)

## Constructors

### constructor

• **new TrackableCoordinateSpace**()

#### Overrides

[WatchableValue](annotation_annotation_layer_state._internal_.WatchableValue.md).[constructor](annotation_annotation_layer_state._internal_.WatchableValue.md#constructor)

#### Defined in

[src/neuroglancer/coordinate_transform.ts:271](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/coordinate_transform.ts#L271)

## Properties

### changed

• **changed**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Inherited from

[WatchableValue](annotation_annotation_layer_state._internal_.WatchableValue.md).[changed](annotation_annotation_layer_state._internal_.WatchableValue.md#changed)

#### Defined in

[src/neuroglancer/trackable_value.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L42)

___

### value\_

• `Protected` **value\_**: [`CoordinateSpace`](../interfaces/annotation_annotation_layer_state._internal_.CoordinateSpace.md)

#### Inherited from

[WatchableValue](annotation_annotation_layer_state._internal_.WatchableValue.md).[value_](annotation_annotation_layer_state._internal_.WatchableValue.md#value_)

## Accessors

### value

• `get` **value**(): `T`

#### Returns

`T`

#### Inherited from

WatchableValue.value

#### Defined in

[src/neuroglancer/trackable_value.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L33)

• `set` **value**(`newValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValue` | `T` |

#### Returns

`void`

#### Inherited from

WatchableValue.value

#### Defined in

[src/neuroglancer/trackable_value.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L36)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:278](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/coordinate_transform.ts#L278)

___

### restoreState

▸ **restoreState**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`void`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:281](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/coordinate_transform.ts#L281)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[src/neuroglancer/coordinate_transform.ts:275](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/coordinate_transform.ts#L275)
