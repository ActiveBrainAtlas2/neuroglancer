[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/trackable\_value](../modules/neuroglancer_trackable_value.md) / WatchableValue

# Class: WatchableValue<T\>

[neuroglancer/trackable_value](../modules/neuroglancer_trackable_value.md).WatchableValue

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`WatchableValue`**

  ↳ [`AnnotationHoverState`](neuroglancer_annotation_annotation_layer_state.AnnotationHoverState.md)

  ↳ [`TrackableCoordinateSpace`](neuroglancer_coordinate_transform.TrackableCoordinateSpace.md)

  ↳ [`TrackableValue`](neuroglancer_trackable_value.TrackableValue.md)

  ↳ [`TrackableRGB`](neuroglancer_util_color.TrackableRGB.md)

  ↳ [`TrackableOptionalRGB`](neuroglancer_util_color.TrackableOptionalRGB.md)

  ↳ [`WatchableVisibilityPriority`](neuroglancer_visibility_priority_frontend.WatchableVisibilityPriority.md)

## Implements

- [`WatchableValueInterface`](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md)<`T`\>

## Table of contents

### Constructors

- [constructor](neuroglancer_trackable_value.WatchableValue.md#constructor)

### Properties

- [changed](neuroglancer_trackable_value.WatchableValue.md#changed)
- [value\_](neuroglancer_trackable_value.WatchableValue.md#value_)

### Accessors

- [value](neuroglancer_trackable_value.WatchableValue.md#value)

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

[src/neuroglancer/trackable_value.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/trackable_value.ts#L43)

## Properties

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Implementation of

[WatchableValueInterface](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md).[changed](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md#changed)

#### Defined in

[src/neuroglancer/trackable_value.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/trackable_value.ts#L42)

___

### value\_

• `Protected` **value\_**: `T`

#### Defined in

[src/neuroglancer/trackable_value.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/trackable_value.ts#L43)

## Accessors

### value

• `get` **value**(): `T`

#### Returns

`T`

#### Implementation of

[WatchableValueInterface](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md).[value](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md#value)

#### Defined in

[src/neuroglancer/trackable_value.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/trackable_value.ts#L33)

• `set` **value**(`newValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValue` | `T` |

#### Returns

`void`

#### Implementation of

[WatchableValueInterface](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md).[value](../interfaces/neuroglancer_trackable_value.WatchableValueInterface.md#value)

#### Defined in

[src/neuroglancer/trackable_value.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/91617476/src/neuroglancer/trackable_value.ts#L36)
