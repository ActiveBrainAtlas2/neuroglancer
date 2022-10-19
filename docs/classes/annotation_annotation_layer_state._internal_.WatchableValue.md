[neuroglancer](../README.md) / [Modules](../modules.md) / [annotation/annotation\_layer\_state](../modules/annotation_annotation_layer_state.md) / [<internal\>](../modules/annotation_annotation_layer_state._internal_.md) / WatchableValue

# Class: WatchableValue<T\>

[annotation/annotation_layer_state](../modules/annotation_annotation_layer_state.md).[<internal>](../modules/annotation_annotation_layer_state._internal_.md).WatchableValue

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`WatchableValue`**

  ↳ [`AnnotationHoverState`](annotation_annotation_layer_state.AnnotationHoverState.md)

  ↳ [`TrackableRGB`](util_color.TrackableRGB.md)

  ↳ [`TrackableOptionalRGB`](util_color.TrackableOptionalRGB.md)

  ↳ [`WatchableVisibilityPriority`](visibility_priority_frontend.WatchableVisibilityPriority.md)

  ↳ [`TrackableValue`](annotation_annotation_layer_state._internal_.TrackableValue.md)

  ↳ [`TrackableCoordinateSpace`](annotation_annotation_layer_state._internal_.TrackableCoordinateSpace.md)

## Implements

- [`WatchableValueInterface`](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md)<`T`\>

## Table of contents

### Constructors

- [constructor](annotation_annotation_layer_state._internal_.WatchableValue.md#constructor)

### Properties

- [changed](annotation_annotation_layer_state._internal_.WatchableValue.md#changed)
- [value\_](annotation_annotation_layer_state._internal_.WatchableValue.md#value_)

### Accessors

- [value](annotation_annotation_layer_state._internal_.WatchableValue.md#value)

## Constructors

### constructor

• **new WatchableValue**<`T`\>(`value_`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value_` | `T` |

#### Defined in

[src/neuroglancer/trackable_value.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L43)

## Properties

### changed

• **changed**: [`NullarySignal`](util_signal.NullarySignal.md)

#### Implementation of

[WatchableValueInterface](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md).[changed](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md#changed)

#### Defined in

[src/neuroglancer/trackable_value.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L42)

___

### value\_

• `Protected` **value\_**: `T`

## Accessors

### value

• `get` **value**(): `T`

#### Returns

`T`

#### Implementation of

[WatchableValueInterface](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md).[value](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md#value)

#### Defined in

[src/neuroglancer/trackable_value.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L33)

• `set` **value**(`newValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValue` | `T` |

#### Returns

`void`

#### Implementation of

[WatchableValueInterface](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md).[value](../interfaces/annotation_annotation_layer_state._internal_.WatchableValueInterface.md#value)

#### Defined in

[src/neuroglancer/trackable_value.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/1beb5d34/src/neuroglancer/trackable_value.ts#L36)
