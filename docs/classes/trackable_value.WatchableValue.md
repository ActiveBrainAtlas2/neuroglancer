[neuroglancer](../README.md) / [Modules](../modules.md) / [trackable\_value](../modules/trackable_value.md) / WatchableValue

# Class: WatchableValue<T\>

[trackable_value](../modules/trackable_value.md).WatchableValue

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`WatchableValue`**

  ↳ [`TrackableCoordinateSpace`](coordinate_transform.TrackableCoordinateSpace.md)

  ↳ [`TrackableValue`](trackable_value.TrackableValue.md)

  ↳ [`TrackableRGB`](data_panel_layout._internal_.TrackableRGB.md)

  ↳ [`WatchableVisibilityPriority`](data_panel_layout._internal_.WatchableVisibilityPriority.md)

  ↳ [`AnnotationHoverState`](image_user_layer._internal_.AnnotationHoverState.md)

  ↳ [`TrackableOptionalRGB`](segmentation_user_layer._internal_.TrackableOptionalRGB.md)

## Implements

- [`WatchableValueInterface`](../interfaces/trackable_value.WatchableValueInterface.md)<`T`\>

## Table of contents

### Constructors

- [constructor](trackable_value.WatchableValue.md#constructor)

### Properties

- [changed](trackable_value.WatchableValue.md#changed)
- [value\_](trackable_value.WatchableValue.md#value_)

### Accessors

- [value](trackable_value.WatchableValue.md#value)

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

[src/neuroglancer/trackable_value.ts:43](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/trackable_value.ts#L43)

## Properties

### changed

• **changed**: [`NullarySignal`](coordinate_transform._internal_.NullarySignal.md)

#### Implementation of

[WatchableValueInterface](../interfaces/trackable_value.WatchableValueInterface.md).[changed](../interfaces/trackable_value.WatchableValueInterface.md#changed)

#### Defined in

[src/neuroglancer/trackable_value.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/trackable_value.ts#L42)

___

### value\_

• `Protected` **value\_**: `T`

## Accessors

### value

• `get` **value**(): `T`

#### Returns

`T`

#### Implementation of

[WatchableValueInterface](../interfaces/trackable_value.WatchableValueInterface.md).[value](../interfaces/trackable_value.WatchableValueInterface.md#value)

#### Defined in

[src/neuroglancer/trackable_value.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/trackable_value.ts#L33)

• `set` **value**(`newValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValue` | `T` |

#### Returns

`void`

#### Implementation of

[WatchableValueInterface](../interfaces/trackable_value.WatchableValueInterface.md).[value](../interfaces/trackable_value.WatchableValueInterface.md#value)

#### Defined in

[src/neuroglancer/trackable_value.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/540617bc/src/neuroglancer/trackable_value.ts#L36)
