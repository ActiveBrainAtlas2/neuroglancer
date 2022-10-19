[neuroglancer](../README.md) / [Exports](../modules.md) / [neuroglancer/widget/scale\_bar](../modules/neuroglancer_widget_scale_bar.md) / TrackableScaleBarOptions

# Class: TrackableScaleBarOptions

[neuroglancer/widget/scale_bar](../modules/neuroglancer_widget_scale_bar.md).TrackableScaleBarOptions

## Hierarchy

- [`TrackableValue`](neuroglancer_trackable_value.TrackableValue.md)<[`ScaleBarOptions`](../interfaces/neuroglancer_widget_scale_bar.ScaleBarOptions.md)\>

  ↳ **`TrackableScaleBarOptions`**

## Table of contents

### Constructors

- [constructor](neuroglancer_widget_scale_bar.TrackableScaleBarOptions.md#constructor)

### Properties

- [changed](neuroglancer_widget_scale_bar.TrackableScaleBarOptions.md#changed)
- [defaultValue](neuroglancer_widget_scale_bar.TrackableScaleBarOptions.md#defaultvalue)
- [validator](neuroglancer_widget_scale_bar.TrackableScaleBarOptions.md#validator)
- [value\_](neuroglancer_widget_scale_bar.TrackableScaleBarOptions.md#value_)

### Accessors

- [value](neuroglancer_widget_scale_bar.TrackableScaleBarOptions.md#value)

### Methods

- [reset](neuroglancer_widget_scale_bar.TrackableScaleBarOptions.md#reset)
- [restoreState](neuroglancer_widget_scale_bar.TrackableScaleBarOptions.md#restorestate)
- [toJSON](neuroglancer_widget_scale_bar.TrackableScaleBarOptions.md#tojson)

## Constructors

### constructor

• **new TrackableScaleBarOptions**()

#### Overrides

[TrackableValue](neuroglancer_trackable_value.TrackableValue.md).[constructor](neuroglancer_trackable_value.TrackableValue.md#constructor)

#### Defined in

[src/neuroglancer/widget/scale_bar.ts:389](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/widget/scale_bar.ts#L389)

## Properties

### changed

• **changed**: [`NullarySignal`](neuroglancer_util_signal.NullarySignal.md)

#### Inherited from

[TrackableValue](neuroglancer_trackable_value.TrackableValue.md).[changed](neuroglancer_trackable_value.TrackableValue.md#changed)

#### Defined in

[src/neuroglancer/trackable_value.ts:42](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_value.ts#L42)

___

### defaultValue

• **defaultValue**: [`ScaleBarOptions`](../interfaces/neuroglancer_widget_scale_bar.ScaleBarOptions.md) = `value`

#### Inherited from

[TrackableValue](neuroglancer_trackable_value.TrackableValue.md).[defaultValue](neuroglancer_trackable_value.TrackableValue.md#defaultvalue)

___

### validator

• **validator**: (`value`: `any`) => [`ScaleBarOptions`](../interfaces/neuroglancer_widget_scale_bar.ScaleBarOptions.md)

#### Type declaration

▸ (`value`): [`ScaleBarOptions`](../interfaces/neuroglancer_widget_scale_bar.ScaleBarOptions.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

##### Returns

[`ScaleBarOptions`](../interfaces/neuroglancer_widget_scale_bar.ScaleBarOptions.md)

#### Inherited from

[TrackableValue](neuroglancer_trackable_value.TrackableValue.md).[validator](neuroglancer_trackable_value.TrackableValue.md#validator)

___

### value\_

• `Protected` **value\_**: [`ScaleBarOptions`](../interfaces/neuroglancer_widget_scale_bar.ScaleBarOptions.md)

#### Inherited from

[TrackableValue](neuroglancer_trackable_value.TrackableValue.md).[value_](neuroglancer_trackable_value.TrackableValue.md#value_)

## Accessors

### value

• `get` **value**(): `T`

#### Returns

`T`

#### Inherited from

TrackableValue.value

#### Defined in

[src/neuroglancer/trackable_value.ts:33](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_value.ts#L33)

• `set` **value**(`newValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValue` | `T` |

#### Returns

`void`

#### Inherited from

TrackableValue.value

#### Defined in

[src/neuroglancer/trackable_value.ts:36](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_value.ts#L36)

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

[TrackableValue](neuroglancer_trackable_value.TrackableValue.md).[reset](neuroglancer_trackable_value.TrackableValue.md#reset)

#### Defined in

[src/neuroglancer/trackable_value.ts:57](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_value.ts#L57)

___

### restoreState

▸ **restoreState**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

#### Returns

`void`

#### Inherited from

[TrackableValue](neuroglancer_trackable_value.TrackableValue.md).[restoreState](neuroglancer_trackable_value.TrackableValue.md#restorestate)

#### Defined in

[src/neuroglancer/trackable_value.ts:60](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_value.ts#L60)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

[TrackableValue](neuroglancer_trackable_value.TrackableValue.md).[toJSON](neuroglancer_trackable_value.TrackableValue.md#tojson)

#### Defined in

[src/neuroglancer/trackable_value.ts:50](https://github.com/ActiveBrainAtlas2/neuroglancer/blob/034b457d/src/neuroglancer/trackable_value.ts#L50)
